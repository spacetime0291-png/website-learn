/**
 * EduMandiri - Platform Belajar Mandiri
 * Arsitektur: Single Page Application (SPA) & Progressive Web App (PWA)
 * Kategori: TKA (Fisika, Matematika Lanjut, Matematika Wajib) & UTBK (7 Subtes)
 * Fitur: Materi & Rangkuman Per Bab, Full-Page SPA Reader, Drilling Soal Per Bab, KaTeX LaTeX
 */

'use strict';

// ============================================================================
// 1. STATE GLOBAL & LOCALSTORAGE KEYS
// ============================================================================
const STORAGE_KEYS = {
  COMPLETED_IDS: 'edumandiri_completed_ids',
  USER_ANSWERS: 'edumandiri_user_answers'
};

const TKA_SUBTESTS = ['Fisika', 'Matematika Lanjut'];
const SMA_SUBTESTS = ['Fisika', 'Matematika Wajib', 'Matematika Lanjut'];
const UTBK_SUBTESTS = [
  'Penalaran Umum (PU)',
  'Pengetahuan & Pemahaman Umum (PPU)',
  'Pemahaman Bacaan & Menulis (PBM)',
  'Pengetahuan Kuantitatif (PK)',
  'Literasi Bahasa Indonesia',
  'Literasi Bahasa Inggris',
  'Penalaran Matematika'
];

function getSubtestsForCategory(category) {
  const cat = (category || AppState.mainCategory || 'tka').toLowerCase();
  if (cat === 'sma') return SMA_SUBTESTS;
  if (cat === 'utbk') return UTBK_SUBTESTS;
  return TKA_SUBTESTS;
}

const AppState = {
  dataset: {
    materi: [],
    soal: []
  },
  currentView: 'materi',

  // Kategori Utama: 'tka' | 'utbk' | 'sma'
  mainCategory: 'tka',
  materiMode: 'rangkuman', // 'rangkuman' | 'materi'
  materiSubtesFilter: 'semua',

  // State Detail Reader
  currentReadingBabId: null,

  // Konfigurasi Drilling Soal Per Bab (Wizard)
  drillingSetup: {
    category: 'tka',         // 'tka' | 'utbk' | 'sma'
    subtes: 'Fisika',
    bab: null,
    selectedBabs: [],         // Default KOSONG (fleksibel, pengguna bebas memilih)
    selectedSubBabs: ['semua'], // multi-select sub-bab IDs array or ['semua']
    count: '5',                 // '5' | '10' | '15' | 'semua'
    difficulty: 'semua',        // 'mudah' | 'sedang' | 'sulit' | 'semua'
    timerEnabled: true,
    timerDuration: 'auto'       // 'auto' | '300' | '600' | '900'
  },

  // Sesi Kuis Aktif
  activeQuiz: {
    isRunning: false,
    queue: [],
    currentIndex: 0,
    currentSelectedOption: null,
    isAnswerSubmitted: false,
    sessionResults: [],
    timerSecondsLeft: 0,
    timerTotalSeconds: 0,
    timerIntervalId: null,
    startTime: null
  },

  // Pembahasan Filter
  pembahasanSubtesFilter: 'semua',
  onlyCompletedInPembahasan: false,

  // Cache Klien
  completedQuestionIds: [],
  userAnswers: {}
};

// ============================================================================
// 2. UTILITAS STATE MANAGEMENT (LOCALSTORAGE)
// ============================================================================
function loadClientState() {
  try {
    const rawIds = localStorage.getItem(STORAGE_KEYS.COMPLETED_IDS);
    AppState.completedQuestionIds = rawIds ? JSON.parse(rawIds) : [];

    const rawAnswers = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
    AppState.userAnswers = rawAnswers ? JSON.parse(rawAnswers) : {};
  } catch (error) {
    console.error('Gagal memuat state dari localStorage:', error);
    AppState.completedQuestionIds = [];
    AppState.userAnswers = {};
  }
}

function markQuestionCompleted(questionId, selectedOptionIndex, isCorrect) {
  if (!AppState.completedQuestionIds.includes(questionId)) {
    AppState.completedQuestionIds.push(questionId);
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_IDS, JSON.stringify(AppState.completedQuestionIds));
    } catch (e) {
      console.warn('Gagal menyimpan ID selesai ke localStorage:', e);
    }
  }

  AppState.userAnswers[questionId] = {
    selectedOption: selectedOptionIndex,
    isCorrect: isCorrect,
    timestamp: new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(AppState.userAnswers));
  } catch (e) {
    console.warn('Gagal menyimpan jawaban pengguna:', e);
  }

  updateHeaderProgress();
}

function resetCompletedQuestions() {
  if (confirm('Apakah Anda yakin ingin mereset seluruh riwayat soal yang sudah diselesaikan?')) {
    AppState.completedQuestionIds = [];
    AppState.userAnswers = {};
    localStorage.removeItem(STORAGE_KEYS.COMPLETED_IDS);
    localStorage.removeItem(STORAGE_KEYS.USER_ANSWERS);

    updateHeaderProgress();
    updateDrillingSetupSummary();
    renderPembahasanView();

    showNotificationBanner('Riwayat soal berhasil direset. Semua soal kembali tersedia!');
  }
}

// ============================================================================
// 3. UTILITAS RENDERING LATEX (KATEX) & MARKDOWN
// ============================================================================
function renderLatex(containerElement) {
  if (!containerElement) return;

  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(containerElement, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        ignoredClasses: ['katex', 'katex-display-block', 'katex-inline-block', 'katex-html'],
        throwOnError: false
      });
    } catch (e) {
      console.warn('KaTeX auto-render error:', e);
    }
  }
}

function parseMarkdownToHtml(markdownText) {
  if (!markdownText) return '';
  
  // 1. Ekstrak & Lindungi Display Math $$...$$ dari parser markdown
  const displayMath = [];
  let processed = markdownText.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    const idx = displayMath.length;
    displayMath.push(formula.trim());
    return `\n\n@@KATEX_DISPLAY_${idx}@@\n\n`;
  });

  // 2. Ekstrak & Lindungi Inline Math $...$ dari parser markdown (Tangguh & Multiline safe)
  const inlineMath = [];
  processed = processed.replace(/(^|[^\$])\$([^\$]+?)\$(?!\$)/g, (match, prefix, formula) => {
    if (formula.length > 500) return match;
    const idx = inlineMath.length;
    inlineMath.push(formula.trim());
    return `${prefix}@@KATEX_INLINE_${idx}@@`;
  });

  // 3. Parsing Markdown (Marked)
  let html = '';
  if (window.marked && typeof window.marked.parse === 'function') {
    html = window.marked.parse(processed);
  } else {
    html = processed
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\n/gim, '<br>');
  }

  // 4. Transformasi Alert & Callout Blocks untuk Pembelajaran Menarik & Informatif
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    let type = 'formula';
    let icon = '📐';
    let title = 'Rumus & Persamaan Kunci';

    if (inner.includes('[!TIP]') || inner.includes('💡') || /<strong>(Trik|Tips)/i.test(inner)) {
      type = 'tip';
      icon = '💡';
      title = 'Tips & Trik Cepat';
    } else if (inner.includes('[!WARNING]') || inner.includes('[!CAUTION]') || inner.includes('⚠️') || /<strong>(Jebakan|Perhatian|Peringatan|Hati-hati)/i.test(inner)) {
      type = 'warning';
      icon = '⚠️';
      title = 'Jebakan Soal & Kesalahan Umum';
    } else if (inner.includes('[!EXAMPLE]') || inner.includes('📝') || /<strong>(Contoh|Solusi|Soal)/i.test(inner)) {
      type = 'example';
      icon = '📝';
      title = 'Contoh Soal & Pembahasan';
    } else if (inner.includes('[!NOTE]') || inner.includes('📌') || inner.includes('Konsep')) {
      type = 'note';
      icon = '📌';
      title = 'Catatan Konsep Penting';
    }

    let cleanInner = inner.replace(/\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT|EXAMPLE)\]/gi, '').trim();

    return `
      <div class="callout-box callout-${type}">
        <div class="callout-header">
          <span class="callout-icon">${icon}</span>
          <span class="callout-title">${title}</span>
        </div>
        <div class="callout-body">${cleanInner}</div>
      </div>
    `;
  });

  // 5. Kembalikan & Render Display Math via KaTeX
  html = html.replace(/<p>\s*@@KATEX_DISPLAY_(\d+)@@\s*<\/p>/g, (m, idx) => `@@KATEX_DISPLAY_${idx}@@`);
  html = html.replace(/@@KATEX_DISPLAY_(\d+)@@/g, (match, idx) => {
    const formula = displayMath[parseInt(idx, 10)] || '';
    if (window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return `<div class="katex-display-block">${window.katex.renderToString(formula, { displayMode: true, throwOnError: false })}</div>`;
      } catch (e) {
        return `<div class="katex-display-block katex-error">${escapeHtml(formula)}</div>`;
      }
    }
    return `$$${formula}$$`;
  });

  // 6. Kembalikan & Render Inline Math via KaTeX
  html = html.replace(/@@KATEX_INLINE_(\d+)@@/g, (match, idx) => {
    const formula = inlineMath[parseInt(idx, 10)] || '';
    if (window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return `<span class="katex-inline-block">${window.katex.renderToString(formula, { displayMode: false, throwOnError: false })}</span>`;
      } catch (e) {
        return `<span class="katex-inline-block katex-error">${escapeHtml(formula)}</span>`;
      }
    }
    return `$${formula}$`;
  });

  // 7. Format Visual Khusus: Badge Langkah Pembahasan & Highlight Hasil
  html = html.replace(/<p><strong>Langkah\s*(\d+)[\s–—\-:]*(.*?)<\/strong>(.*?)<\/p>/gi, (match, num, title, rest) => {
    return `<div class="langkah-heading"><span class="langkah-badge">Langkah ${num}</span> <strong>${title.trim()}</strong> ${rest.trim()}</div>`;
  });
  html = html.replace(/<p><strong>(Hasil|Jawaban)[\s–—\-:]*<\/strong>(.*?)<\/p>/gi, (match, label, text) => {
    return `<div class="hasil-highlight"><strong>${label}:</strong> ${text.trim()}</div>`;
  });

  // 8. Bungkus tabel agar responsive scrolling di HP
  html = html.replace(/<table/g, '<div class="table-responsive"><table');
  html = html.replace(/<\/table>/g, '</table></div>');

  return html;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================================================
// 4. ALGORITMA PENGACAKAN FISHER-YATES
// ============================================================================
function fisherYatesShuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

// ============================================================================
// 5. SISTEM SPA: NAVIGASI VIEW
// ============================================================================
function navigateToView(viewName) {
  const validViews = ['materi', 'materi-detail', 'latihan', 'pembahasan'];
  if (!validViews.includes(viewName)) return;

  AppState.currentView = viewName;

  // Sinkronisasi Tab Desktop
  document.querySelectorAll('.desktop-nav .nav-tab').forEach((tab) => {
    const tabTarget = tab.dataset.view;
    const isTarget = tabTarget === viewName || (tabTarget === 'materi' && viewName === 'materi-detail');
    tab.classList.toggle('active', isTarget);
    tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  // Sinkronisasi Tab Mobile Bottom Navigation
  document.querySelectorAll('.mobile-bottom-nav .bottom-tab-btn').forEach((tab) => {
    const tabTarget = tab.dataset.view;
    const isTarget = tabTarget === viewName || (tabTarget === 'materi' && viewName === 'materi-detail');
    tab.classList.toggle('active', isTarget);
  });

  // Tampilkan View Terpilih
  document.querySelectorAll('.view-section').forEach((section) => {
    const isTarget = section.id === `view-${viewName}`;
    section.classList.toggle('active', isTarget);
  });

  // Hash URL
  if (viewName !== 'materi-detail') {
    if (window.location.hash !== `#${viewName}`) {
      history.pushState(null, '', `#${viewName}`);
    }
  }

  // Kontrol Reader Bottom Dock & Mode Pembaca (Gantikan Footer saat baca)
  const readerDock = document.getElementById('reader-bottom-dock');
  if (viewName === 'materi-detail') {
    document.body.classList.add('in-reader-mode');
    if (readerDock) readerDock.classList.remove('hidden');
  } else {
    document.body.classList.remove('in-reader-mode');
    if (readerDock) readerDock.classList.add('hidden');
  }

  // Refresh jika diperlukan
  if (viewName === 'materi') {
    renderMateriSubtesFilters();
    renderMateriView();
  } else if (viewName === 'latihan' && !AppState.activeQuiz.isRunning) {
    updateDrillingSubtesPills();
    updateDrillingSetupSummary();
  } else if (viewName === 'pembahasan') {
    renderPembahasanSubtesFilters();
    renderPembahasanView();
  }

  // Scroll ke atas
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// 6. VIEW 1: MATERI & RANGKUMAN (PER BAB & FULL-PAGE SPA READER)
// ============================================================================

// Render Filter Subtes dinamis sesuai Kategori (TKA / UTBK / SMA)
function renderMateriSubtesFilters() {
  const container = document.getElementById('materi-subtes-filters');
  if (!container) return;

  const subtests = getSubtestsForCategory(AppState.mainCategory);

  // Jika filter aktif tidak valid untuk kategori saat ini, reset ke 'semua'
  if (AppState.materiSubtesFilter !== 'semua' && !subtests.some(s => s.toLowerCase() === AppState.materiSubtesFilter.toLowerCase())) {
    AppState.materiSubtesFilter = 'semua';
  }

  let html = `<button class="chip-filter ${AppState.materiSubtesFilter === 'semua' ? 'active' : ''}" data-subtes="semua">Semua</button>`;
  
  subtests.forEach((sub) => {
    const isActive = AppState.materiSubtesFilter.toLowerCase() === sub.toLowerCase();
    const icon = sub.includes('Fisika') ? '⚛️ ' : (sub.includes('Matematika') || sub.includes('Fundamental')) ? '📐 ' : '📝 ';
    html += `<button class="chip-filter ${isActive ? 'active' : ''}" data-subtes="${sub}">${icon}${sub}</button>`;
  });

  container.innerHTML = html;

  // Event listener chips
  container.querySelectorAll('.chip-filter').forEach((chip) => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip-filter').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.materiSubtesFilter = chip.dataset.subtes;
      renderMateriView();
    });
  });
}

// Render Daftar Bab Materi (Katalog Bab Minimalis Sederhana 3-Kolom)
function renderMateriView() {
  const container = document.getElementById('materi-list');
  const bannerDesc = document.getElementById('materi-mode-desc');
  if (!container) return;

  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];

  if (bannerDesc) {
    bannerDesc.innerHTML = 'Klik salah satu bab untuk menampilkan opsi <strong>Materi</strong>, <strong>Contoh Soal</strong>, <strong>Rangkuman</strong>, atau <strong>Latihan Kuis</strong>.';
  }

  // Filter berdasarkan Kategori Utama (TKA vs UTBK vs SMA) dan Subtes
  const filtered = allBabModules.filter((m) => {
    const matchCategory = m.kategoriUtama.toLowerCase() === AppState.mainCategory.toLowerCase();
    const matchSubtes = AppState.materiSubtesFilter === 'semua' || 
      m.subtes.toLowerCase() === AppState.materiSubtesFilter.toLowerCase();
    return matchCategory && matchSubtes;
  });

  // Jika UTBK atau Subtes Kosong
  if (filtered.length === 0) {
    const isUtbk = AppState.mainCategory === 'utbk';
    container.innerHTML = `
      <div class="state-empty" style="grid-column: 1 / -1;">
        <div class="state-empty-icon">${isUtbk ? '📝' : '📂'}</div>
        <h3>${isUtbk ? 'Modul Subtes UTBK Sedang Disiapkan' : 'Belum Ada Konten untuk Subtes Ini'}</h3>
        <p>${
          isUtbk 
            ? 'Struktur 7 Subtes UTBK telah siap pada direktori data_materi/utbk/. Modul materi dan drilling soal per bab sedang dalam tahap penyusunan.'
            : 'Silakan pilih subtes lain untuk membaca konten.'
        }</p>
        ${isUtbk ? `<button class="btn btn-secondary" onclick="setMainCategory('tka')">Beralih ke TKA</button>` : ''}
      </div>
    `;
    return;
  }

  // Kelompokkan Modul-modul Berdasarkan Bab Unik (Subtes + babIndex)
  const babMap = new Map();
  filtered.forEach((m) => {
    const key = `${m.kategoriUtama}__${m.subtes}__${m.babIndex}`;
    if (!babMap.has(key)) {
      babMap.set(key, {
        subtes: m.subtes,
        kategoriUtama: m.kategoriUtama,
        babIndex: m.babIndex,
        babJudul: m.babJudul,
        blok: m.blok,
        materi: null,
        contohSoal: null,
        rangkuman: null
      });
    }
    const group = babMap.get(key);
    if (m.tipe === 'materi') group.materi = m;
    else if (m.tipe === 'contoh-soal') group.contohSoal = m;
    else if (m.tipe === 'rangkuman') group.rangkuman = m;
  });

  // Urutkan Bab berdasarkan urutan subtes resmi kategori, kemudian babIndex
  const subtestOrder = getSubtestsForCategory(AppState.mainCategory);
  const sortedBabs = Array.from(babMap.values()).sort((a, b) => {
    const subA = subtestOrder.findIndex(s => s.toLowerCase() === a.subtes.toLowerCase());
    const subB = subtestOrder.findIndex(s => s.toLowerCase() === b.subtes.toLowerCase());
    if (subA !== subB) return (subA === -1 ? 99 : subA) - (subB === -1 ? 99 : subB);
    return a.babIndex - b.babIndex;
  });

  // Helper render kartu bab individual (desain rapi, horizontal list card di mobile)
  function renderSingleBabCard(bab) {
    const babIndexPadded = String(bab.babIndex).padStart(2, '0');
    const babKey = `${bab.kategoriUtama}_${bab.subtes.replace(/[^a-zA-Z0-9]/g, '_')}_${bab.babIndex}`;
    const cleanTitle = getSimplifiedBabTitle(bab.subtes, bab.babIndex, bab.babJudul, bab.kategoriUtama);

    let availableCount = 0;
    if (bab.materi) availableCount++;
    if (bab.contohSoal) availableCount++;
    if (bab.rangkuman) availableCount++;
    availableCount++; // Kuis drilling selalu tersedia

    return `
      <div class="bab-item" id="bab-item-${babKey}" data-bab-key="${babKey}">
        <div class="bab-item-header" onclick="toggleBabItem('${babKey}')">
          <div class="bab-icon-minimal">
            <span>${babIndexPadded}</span>
          </div>
          <div class="bab-item-title-group">
            <h4 class="bab-item-title">${escapeHtml(cleanTitle)}</h4>
            <span class="bab-item-meta">${escapeHtml(bab.blok || bab.subtes)}</span>
          </div>
          <div class="bab-item-right">
            <span class="bab-modul-counter">${availableCount} Modul</span>
            <span class="bab-toggle-arrow">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
        </div>

        <div class="bab-item-options">
          <button class="btn-bab-opt opt-materi ${bab.materi ? '' : 'disabled'}" 
            ${bab.materi ? `onclick="openMateriPage('${bab.materi.id}')"` : 'disabled title="Materi belum tersedia"'}>
            <span class="opt-icon">📖</span>
            <span class="opt-text">Materi</span>
          </button>

          <button class="btn-bab-opt opt-cs ${bab.contohSoal ? '' : 'disabled'}" 
            ${bab.contohSoal ? `onclick="openMateriPage('${bab.contohSoal.id}')"` : 'disabled title="Variasi contoh soal segera hadir"'}>
            <span class="opt-icon">🎯</span>
            <span class="opt-text">Contoh Soal</span>
          </button>

          <button class="btn-bab-opt opt-rangkuman ${bab.rangkuman ? '' : 'disabled'}" 
            ${bab.rangkuman ? `onclick="openMateriPage('${bab.rangkuman.id}')"` : 'disabled title="Rangkuman belum tersedia"'}>
            <span class="opt-icon">📑</span>
            <span class="opt-text">Rangkuman</span>
          </button>

          <button class="btn-bab-opt opt-quiz" onclick="startDrillingForBab('${escapeHtml(bab.subtes)}', '${escapeHtml(bab.babJudul)}')">
            <span class="opt-icon">⚡</span>
            <span class="opt-text">Latihan Kuis</span>
          </button>
        </div>
      </div>
    `;
  }

  // Metadata Pembungkus Bab Besar (TKA & SMA)
  const WRAPPER_METAS = {
    // TKA Fisika
    'Kinematika': { icon: '🚀', desc: 'Gerak Lurus, Gerak Melingkar, & Pengukuran Presisi' },
    'Dinamika': { icon: '⚖️', desc: 'Hukum Newton, Momentum, Impuls, & Dinamika Rotasi' },
    'Fluida': { icon: '💧', desc: 'Tekanan Hidrostatis, Archimedes, Kontinuitas, & Bernoulli' },
    'Gelombang': { icon: '🌊', desc: 'Gelombang Mekanik Bunyi, Cepat Rambat, & Karakteristik Optik' },
    'Kalor dan Termodinamika': { icon: '🔥', desc: 'Suhu, Kalor, Teori Kinetik Gas, & Siklus Termodinamika' },
    'Kelistrikan': { icon: '⚡', desc: 'Elektrostatika, Hukum Coulomb, & Rangkaian Arus Searah' },

    // TKA Matematika Lanjut (Termasuk Fundamental di Bagian Awal)
    'Fundamental Matematika Lanjut': { icon: '🏛️', desc: 'Materi Prasyarat: Trigonometri, Aljabar, Geometri, Nilai Mutlak, & Eksponen' },
    'Aljabar': { icon: '🔢', desc: 'Matriks Ordo 2x2/3x3, Polinomial Horner, & Pemodelan Fungsi' },
    'Geometri dan Pengukuran': { icon: '📐', desc: 'Vektor Bidang & Ruang, Persamaan Lingkaran, & Transformasi' },
    'Trigonometri': { icon: '📈', desc: 'Limit Fungsi Aljabar & Teorema Limit Trigonometri' },

    // SMA Reguler
    'Blok 1: Mekanika': { icon: '⚙️', desc: 'Pengukuran, Vektor, Kinematika, Dinamika, Usaha, Energi, & Rotasi' },
    'Blok 2: Fluida & Termofisika': { icon: '💧', desc: 'Fluida Statis & Dinamis, Suhu, Kalor, Gas Ideal, & Termodinamika' },
    'Blok 3: Gelombang, Bunyi, & Optik': { icon: '🌊', desc: 'Gelombang Berjalan, Gelombang Bunyi, & Optik Geometri/Fisis' },
    'Blok 4: Kelistrikan & Kemagnetan': { icon: '⚡', desc: 'Listrik DC, Medan Magnet, Gaya Lorentz, & Induksi Elektromagnetik' },
    'Blok 5: Fisika Modern & Inti': { icon: '⚛️', desc: 'Relativitas Khusus, Kuantum, Teori Atom, & Radioaktivitas' },
    'Matematika Wajib (Umum)': { icon: '📐', desc: 'Eksponen, Nilai Mutlak, SPLDV, Matriks, Transformasi, Dimensi Tiga, & Peluang' },
    'Matematika Tingkat Lanjut (Peminatan)': { icon: '🔢', desc: 'Bilangan Kompleks, Polinomial, Irisan Kerucut, Limit, Turunan, & Integral' }
  };

  // Cek apakah kategori saat ini memiliki pembungkus blok (seperti TKA & SMA)
  const hasBlokGrouping = sortedBabs.some(b => b.blok);

  if (hasBlokGrouping) {
    // Kelompokkan Bab berdasarkan blok
    const groups = new Map();
    sortedBabs.forEach(b => {
      const groupName = b.blok || b.subtes;
      if (!groups.has(groupName)) {
        groups.set(groupName, {
          subtes: b.subtes,
          babs: []
        });
      }
      groups.get(groupName).babs.push(b);
    });

    let html = '';
    for (const [groupName, groupData] of groups.entries()) {
      const meta = WRAPPER_METAS[groupName] || { icon: '📦', desc: `Kumpulan Materi ${groupName}` };
      const groupSlug = groupName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      html += `
        <section class="materi-group-section" id="materi-group-${groupSlug}">
          <div class="materi-group-header" onclick="toggleMateriGroup('${groupSlug}')">
            <div class="materi-group-title-wrap">
              <span class="materi-group-icon">${meta.icon}</span>
              <div class="materi-group-text">
                <div class="materi-group-title-row">
                  <h3 class="materi-group-title">${escapeHtml(groupName)}</h3>
                  <span class="materi-group-count">${groupData.babs.length} Bab</span>
                </div>
                <p class="materi-group-desc">${escapeHtml(meta.desc)}</p>
              </div>
            </div>
            <div class="materi-group-right">
              <span class="materi-group-subtes-tag">${escapeHtml(groupData.subtes)}</span>
              <span class="materi-group-toggle-arrow">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
          </div>
          <div class="materi-group-body">
            <div class="bab-list-minimal">
              ${groupData.babs.map(renderSingleBabCard).join('')}
            </div>
          </div>
        </section>
      `;
    }
    container.innerHTML = html;
  } else {
    // Kategori tanpa blok khusus (misal UTBK): render dalam pembungkus subtes
    const subtesGroups = new Map();
    sortedBabs.forEach(b => {
      if (!subtesGroups.has(b.subtes)) subtesGroups.set(b.subtes, []);
      subtesGroups.get(b.subtes).push(b);
    });

    let html = '';
    for (const [subtesName, babs] of subtesGroups.entries()) {
      const icon = subtesName.includes('Fisika') ? '⚛️' : (subtesName.includes('Matematika') ? '📐' : '📚');
      const groupSlug = subtesName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      html += `
        <section class="materi-group-section" id="materi-group-${groupSlug}">
          <div class="materi-group-header" onclick="toggleMateriGroup('${groupSlug}')">
            <div class="materi-group-title-wrap">
              <span class="materi-group-icon">${icon}</span>
              <div class="materi-group-text">
                <div class="materi-group-title-row">
                  <h3 class="materi-group-title">${escapeHtml(subtesName)}</h3>
                  <span class="materi-group-count">${babs.length} Bab</span>
                </div>
                <p class="materi-group-desc">${babs.length} Bab Materi Terstruktur</p>
              </div>
            </div>
            <div class="materi-group-right">
              <span class="materi-group-toggle-arrow">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
          </div>
          <div class="materi-group-body">
            <div class="bab-list-minimal">
              ${babs.map(renderSingleBabCard).join('')}
            </div>
          </div>
        </section>
      `;
    }
    container.innerHTML = html;
  }
}

// Helper: Toggle expand/collapse pada pembungkus materi besar
window.toggleMateriGroup = function(groupSlug) {
  const targetGroup = document.getElementById(`materi-group-${groupSlug}`);
  if (!targetGroup) return;
  targetGroup.classList.toggle('collapsed');
};

// Helper: Toggle expand/collapse pada list bab individual
window.toggleBabItem = function(babKey) {
  const targetItem = document.getElementById(`bab-item-${babKey}`);
  if (!targetItem) return;

  const isExpanded = targetItem.classList.contains('expanded');

  // Tutup bab lain agar tetap minimalis dan rapi
  document.querySelectorAll('.bab-item.expanded').forEach((el) => {
    if (el !== targetItem) el.classList.remove('expanded');
  });

  targetItem.classList.toggle('expanded', !isExpanded);
};

// BUKA MATERI DI HALAMAN PENUH SPA DENGAN IN-READER MODE SWITCHER
window.openMateriPage = function(babId) {
  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];
  const babData = allBabModules.find((m) => m.id === babId);
  if (!babData) return;

  AppState.currentReadingBabId = babId;

  // Cari Modul Saudara (Sibling Modules) untuk Bab yang Sama dalam Kategori yang Sama
  const materiMod = allBabModules.find((m) => 
    m.kategoriUtama === babData.kategoriUtama && 
    m.subtes.toLowerCase() === babData.subtes.toLowerCase() && 
    m.babIndex === babData.babIndex && 
    m.tipe === 'materi'
  );
  const csMod = allBabModules.find((m) => 
    m.kategoriUtama === babData.kategoriUtama && 
    m.subtes.toLowerCase() === babData.subtes.toLowerCase() && 
    m.babIndex === babData.babIndex && 
    m.tipe === 'contoh-soal'
  );
  const rangkumanMod = allBabModules.find((m) => 
    m.kategoriUtama === babData.kategoriUtama && 
    m.subtes.toLowerCase() === babData.subtes.toLowerCase() && 
    m.babIndex === babData.babIndex && 
    m.tipe === 'rangkuman'
  );

  // Sinkronisasi Tab Switcher di Top Bar Reader
  const tabMateri = document.getElementById('btn-reader-tab-materi');
  const tabCs = document.getElementById('btn-reader-tab-contoh-soal');
  const tabRangkuman = document.getElementById('btn-reader-tab-rangkuman');

  if (tabMateri) {
    tabMateri.classList.toggle('active', babData.tipe === 'materi');
    tabMateri.disabled = !materiMod;
    tabMateri.onclick = () => materiMod && openMateriPage(materiMod.id);
  }

  if (tabCs) {
    tabCs.classList.toggle('active', babData.tipe === 'contoh-soal');
    tabCs.disabled = !csMod;
    tabCs.title = csMod ? 'Buka Variasi Contoh Soal Bab Ini' : 'Variasi Contoh Soal untuk bab ini sedang disiapkan';
    tabCs.onclick = () => csMod && openMateriPage(csMod.id);
  }

  if (tabRangkuman) {
    tabRangkuman.classList.toggle('active', babData.tipe === 'rangkuman');
    tabRangkuman.disabled = !rangkumanMod;
    tabRangkuman.onclick = () => rangkumanMod && openMateriPage(rangkumanMod.id);
  }

  // Update Breadcrumbs
  const breadcrumbCat = document.getElementById('reader-breadcrumb-cat');
  const breadcrumbType = document.getElementById('reader-breadcrumb-type');
  const bodyElem = document.getElementById('reader-markdown-body');

  if (breadcrumbCat) {
    const subtesSlug = babData.subtes.toLowerCase().replace(/\s+/g, '-');
    breadcrumbCat.textContent = `${babData.kategoriUtama.toUpperCase()} • ${babData.subtes}`;
    breadcrumbCat.className = `tag-subject ${subtesSlug}`;
  }

  if (breadcrumbType) {
    const typeName = babData.tipe === 'materi' 
      ? 'Materi' 
      : babData.tipe === 'contoh-soal' 
        ? 'Variasi Soal' 
        : 'Rangkuman';
    breadcrumbType.textContent = `Bab ${babData.babIndex} • ${typeName}`;
  }

  if (bodyElem) {
    bodyElem.innerHTML = parseMarkdownToHtml(babData.content);
    renderLatex(bodyElem);
  }

  // Sinkronisasi Reader Floating Bottom Dock (Menggantikan Footer di Halaman Baca)
  const dockPrev = document.getElementById('dock-btn-prev');
  const dockNext = document.getElementById('dock-btn-next');
  const dockPrevLabel = document.getElementById('dock-prev-label');
  const dockNextLabel = document.getElementById('dock-next-label');
  const dockMateri = document.getElementById('dock-tab-materi');
  const dockCs = document.getElementById('dock-tab-contoh-soal');
  const dockRangkuman = document.getElementById('dock-tab-rangkuman');
  const dockQuiz = document.getElementById('dock-tab-quiz');

  const prevBab = allBabModules.find((m) => 
    m.kategoriUtama === babData.kategoriUtama && 
    m.subtes.toLowerCase() === babData.subtes.toLowerCase() && 
    m.babIndex === (babData.babIndex - 1) && 
    m.tipe === babData.tipe
  ) || allBabModules.find((m) => 
    m.kategoriUtama === babData.kategoriUtama && 
    m.subtes.toLowerCase() === babData.subtes.toLowerCase() && 
    m.babIndex === (babData.babIndex - 1) && 
    m.tipe === 'materi'
  );

  const nextBab = allBabModules.find((m) => 
    m.kategoriUtama === babData.kategoriUtama && 
    m.subtes.toLowerCase() === babData.subtes.toLowerCase() && 
    m.babIndex === (babData.babIndex + 1) && 
    m.tipe === babData.tipe
  ) || allBabModules.find((m) => 
    m.kategoriUtama === babData.kategoriUtama && 
    m.subtes.toLowerCase() === babData.subtes.toLowerCase() && 
    m.babIndex === (babData.babIndex + 1) && 
    m.tipe === 'materi'
  );

  if (dockPrev) {
    dockPrev.disabled = !prevBab;
    if (dockPrevLabel) dockPrevLabel.textContent = prevBab ? `Bab ${prevBab.babIndex}` : 'Awal';
    dockPrev.onclick = () => prevBab && openMateriPage(prevBab.id);
  }

  if (dockNext) {
    dockNext.disabled = !nextBab;
    if (dockNextLabel) dockNextLabel.textContent = nextBab ? `Bab ${nextBab.babIndex}` : 'Akhir';
    dockNext.onclick = () => nextBab && openMateriPage(nextBab.id);
  }

  if (dockMateri) {
    dockMateri.classList.toggle('active', babData.tipe === 'materi');
    dockMateri.disabled = !materiMod;
    dockMateri.onclick = () => materiMod && openMateriPage(materiMod.id);
  }

  if (dockCs) {
    dockCs.classList.toggle('active', babData.tipe === 'contoh-soal');
    dockCs.disabled = !csMod;
    dockCs.title = csMod ? 'Variasi Contoh Soal' : 'Variasi soal belum tersedia untuk bab ini';
    dockCs.onclick = () => csMod && openMateriPage(csMod.id);
  }

  if (dockRangkuman) {
    dockRangkuman.classList.toggle('active', babData.tipe === 'rangkuman');
    dockRangkuman.disabled = !rangkumanMod;
    dockRangkuman.onclick = () => rangkumanMod && openMateriPage(rangkumanMod.id);
  }

  if (dockQuiz) {
    dockQuiz.onclick = () => startDrillingForBab(babData.subtes, babData.babJudul);
  }

  // Render Navigasi Bab Sebelumnya & Berikutnya di Bagian Bawah
  const bottomBar = document.querySelector('.reader-bottom-bar');
  if (bottomBar) {
    bottomBar.innerHTML = `
      <button class="btn btn-secondary" onclick="navigateToView('materi')">
        ← Kembali ke Daftar Bab
      </button>
      <button class="btn btn-primary" onclick="startDrillingForBab('${escapeHtml(babData.subtes)}', '${escapeHtml(babData.babJudul)}')">
        ⚡ Latihan Soal Bab Ini →
      </button>
    `;
  }

  // Update hash & navigate to full-page reader view
  history.pushState(null, '', `#baca-${babId}`);
  navigateToView('materi-detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Helper: Langsung Meluncur ke Drilling Soal untuk Bab Tertentu
window.startDrillingForBab = function(subtes, babJudul) {
  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];
  const foundMod = allBabModules.find((m) => 
    m.subtes.toLowerCase() === (subtes || '').toLowerCase() && 
    (m.babJudul === babJudul || m.id === babJudul)
  );

  // Set kategori utama drilling jika modul ditemukan
  if (foundMod && foundMod.kategoriUtama) {
    AppState.drillingSetup.category = foundMod.kategoriUtama;
  } else if (!AppState.drillingSetup.category) {
    AppState.drillingSetup.category = AppState.mainCategory || 'tka';
  }

  AppState.drillingSetup.subtes = subtes;
  AppState.drillingSetup.bab = babJudul;

  // Tentukan indeks bab integer agar presisi & bebas bug duplikasi seleksi
  const babIndex = foundMod ? foundMod.babIndex : 1;
  AppState.drillingSetup.selectedBabs = [babIndex];
  AppState.drillingSetup.selectedSubBabs = ['semua'];

  // Update toggle kategori di drilling bar
  document.querySelectorAll('#setup-category-group button').forEach((p) => {
    p.classList.toggle('active', p.dataset.cat === AppState.drillingSetup.category);
  });

  // Update UI Drilling
  updateDrillingSubtesPills();
  renderDrillingBabCards();
  renderDrillingSubBabSelector();
  updateDrillingSetupSummary();
  navigateToView('latihan');
};

// ============================================================================
// 7. VIEW 2: DRILLING SOAL PER BAB & SUB BAB TARGET (SETUP WIZARD & KUIS)
// ============================================================================

// Daftar Judul Bab Ringkas & Rapi (Format Simpel agar tidak terpotong di UI Kartu)
const CANONICAL_BAB_TITLES = {
  // === TKA Canonical Bab Titles ===
  'tka-fisika': {
    1: 'Pengukuran',
    2: 'Gerak Lurus',
    3: 'Gerak Lengkung',
    4: 'Hubungan Gaya dan Gerak',
    5: 'Momentum dan Impuls',
    6: 'Dinamika Rotasi',
    7: 'Fluida Statis',
    8: 'Fluida Dinamis',
    9: 'Gelombang Bunyi',
    10: 'Gelombang Cahaya & Alat Optik',
    11: 'Kalor dan Perpindahannya',
    12: 'Pemanasan Global',
    13: 'Gas Ideal',
    14: 'Termodinamika',
    15: 'Listrik Statis',
    16: 'Rangkaian Arus Searah'
  },
  'tka-matematika lanjut': {
    1: 'Trigonometri Analitik Dasar',
    2: 'Aljabar Elementer',
    3: 'Geometri Analitik Bidang',
    4: 'Pertidaksamaan & Nilai Mutlak',
    5: 'Eksponen & Logaritma',
    6: 'Matriks',
    7: 'Polinomial',
    8: 'Fungsi dan Pemodelan',
    9: 'Vektor',
    10: 'Lingkaran',
    11: 'Transformasi Geometri',
    12: 'Limit Fungsi'
  },
  'tka-fundamental matematika': {
    1: 'Trigonometri Analitik Dasar',
    2: 'Aljabar Elementer',
    3: 'Geometri Analitik Bidang',
    4: 'Pertidaksamaan & Nilai Mutlak',
    5: 'Eksponen & Logaritma'
  },

  // === SMA Canonical Bab Titles ===
  'sma-fisika': {
    1: 'Pengukuran & Dimensi',
    2: 'Vektor',
    3: 'Kinematika Gerak Lurus',
    4: 'Gerak Parabola & Melingkar',
    5: 'Dinamika Gerak',
    6: 'Usaha & Energi',
    7: 'Momentum & Impuls',
    8: 'Dinamika Rotasi',
    9: 'Gravitasi Universal',
    10: 'Elastisitas & Getaran (GHS)',
    11: 'Fluida Statis',
    12: 'Fluida Dinamis',
    13: 'Suhu & Kalor',
    14: 'Teori Kinetik Gas',
    15: 'Termodinamika',
    16: 'Gelombang Berjalan & Stasioner',
    17: 'Gelombang Bunyi',
    18: 'Optik Geometri',
    19: 'Optik Fisis',
    20: 'Listrik Statis',
    21: 'Listrik Arus Searah',
    22: 'Medan Magnet & Lorentz',
    23: 'Induksi Elektromagnetik',
    24: 'Arus Bolak-Balik (AC)',
    25: 'Gelombang Elektromagnetik',
    26: 'Teori Relativitas Khusus',
    27: 'Gejala Kuantum & Foton',
    28: 'Teori Model Atom',
    29: 'Fisika Inti & Radioaktivitas',
    30: 'Energi Terbarukan'
  },
  'sma-matematika wajib': {
    1: 'Eksponen & Logaritma',
    2: 'Nilai Mutlak',
    3: 'SPLDV & SPLTV',
    4: 'Program Linear',
    5: 'Fungsi Kuadrat & Rasional',
    6: 'Relasi & Fungsi Invers',
    7: 'Trigonometri Dasar',
    8: 'Barisan & Deret',
    9: 'Vektor (Operasi)',
    10: 'Matriks Dasar (2x2)',
    11: 'Transformasi Geometri',
    12: 'Geometri Ruang (Dimensi 3)',
    13: 'Persamaan Lingkaran',
    14: 'Statistika Deskriptif',
    15: 'Aturan Pencacahan',
    16: 'Peluang'
  },
  'sma-matematika lanjut': {
    1: 'Bilangan Kompleks',
    2: 'Polinomial (Suku Banyak)',
    3: 'Matriks Lanjut (3x3)',
    4: 'Trigonometri Analitis',
    5: 'Irisan Kerucut',
    6: 'Limit Fungsi',
    7: 'Turunan Fungsi',
    8: 'Integral Fungsi',
    9: 'Statistika Inferensial'
  }
};

// Aliases untuk kompatibilitas pencarian
CANONICAL_BAB_TITLES['fisika'] = CANONICAL_BAB_TITLES['sma-fisika'];
CANONICAL_BAB_TITLES['matematika wajib'] = CANONICAL_BAB_TITLES['sma-matematika wajib'];
CANONICAL_BAB_TITLES['matematika lanjut'] = CANONICAL_BAB_TITLES['sma-matematika lanjut'];
CANONICAL_BAB_TITLES['fundamental matematika'] = CANONICAL_BAB_TITLES['tka-fundamental matematika'];

// Hierarki Sub Bab Utama Berurutan (Hanya Sub Bab Besar / Inti)
const CANONICAL_CHAPTER_SUBBABS = {
  // === TKA Sub Babs ===
  'tka-fisika': {
    1: [
      { id: 'tka-fis-b01-sb01', nama: 'Prinsip Kerja & Pembacaan Jangka Sorong, Mikrometer, Neraca' },
      { id: 'tka-fis-b01-sb02', nama: 'Kaidah Pelaporan & Angka Penting' }
    ],
    2: [
      { id: 'tka-fis-b02-sb01', nama: 'Konsep Jarak, Perpindahan, Kelajuan, & Kecepatan' },
      { id: 'tka-fis-b02-sb02', nama: 'Karakteristik & Grafik GLB dan GLBB' }
    ],
    3: [
      { id: 'tka-fis-b03-sb01', nama: 'Gerak Parabola (Titik Tertinggi & Jarak Maksimum)' },
      { id: 'tka-fis-b03-sb02', nama: 'Gerak Melingkar Beraturan (GMB) & Sentripetal' }
    ],
    4: [
      { id: 'tka-fis-b04-sb01', nama: 'Hukum I, II, dan III Newton' },
      { id: 'tka-fis-b04-sb02', nama: 'Diagram Gaya (Berat, Normal, Gesek, Tegangan Tali)' }
    ],
    5: [
      { id: 'tka-fis-b05-sb01', nama: 'Momentum Linier & Teorema Impuls-Momentum' },
      { id: 'tka-fis-b05-sb02', nama: 'Hukum Kekekalan Momentum & Tumbukan' }
    ],
    6: [
      { id: 'tka-fis-b06-sb01', nama: 'Momen Gaya (Torsi) & Momen Inersia Benda Tegar' },
      { id: 'tka-fis-b06-sb02', nama: 'Hukum Newton pada Dinamika Gerak Rotasi' }
    ],
    7: [
      { id: 'tka-fis-b07-sb01', nama: 'Tekanan Hidrostatis & Hukum Pascal (Hidrolik)' },
      { id: 'tka-fis-b07-sb02', nama: 'Hukum Archimedes (Terapung, Melayang, Tenggelam)' }
    ],
    8: [
      { id: 'tka-fis-b08-sb01', nama: 'Persamaan Kontinuitas & Debit Aliran' },
      { id: 'tka-fis-b08-sb02', nama: 'Persamaan & Penerapan Asas Bernoulli' }
    ],
    9: [
      { id: 'tka-fis-b09-sb01', nama: 'Gelombang Mekanik Bunyi, Dawai, & Pipa Organa' },
      { id: 'tka-fis-b09-sb02', nama: 'Intensitas & Taraf Intensitas Bunyi' }
    ],
    10: [
      { id: 'tka-fis-b10-sb01', nama: 'Spektrum Gelombang EM & Sifat Pemantulan/Pembiasan' },
      { id: 'tka-fis-b10-sb02', nama: 'Bayangan Cermin, Lensa, & Alat Optik' }
    ],
    11: [
      { id: 'tka-fis-b11-sb01', nama: 'Perubahan Suhu, Kalor Laten, & Pemuaian Zat' },
      { id: 'tka-fis-b11-sb02', nama: 'Perpindahan Kalor & Asas Black' }
    ],
    12: [
      { id: 'tka-fis-b12-sb01', nama: 'Fisika Mekanisme Efek Rumah Kaca' },
      { id: 'tka-fis-b12-sb02', nama: 'Penyebab & Solusi Penanggulangan Pemanasan Global' }
    ],
    13: [
      { id: 'tka-fis-b13-sb01', nama: 'Hukum Boyle & Boyle-Gay Lussac' },
      { id: 'tka-fis-b13-sb02', nama: 'Persamaan Umum Gas Ideal (PV = nRT)' }
    ],
    14: [
      { id: 'tka-fis-b14-sb01', nama: 'Proses Isobarik, Isokhorik, Isotermal, & Adiabatik' },
      { id: 'tka-fis-b14-sb02', nama: 'Hukum I & II Termodinamika serta Mesin Carnot' }
    ],
    15: [
      { id: 'tka-fis-b15-sb01', nama: 'Hukum Coulomb & Muatan Elektrostatik' },
      { id: 'tka-fis-b15-sb02', nama: 'Kuat Medan Listrik & Potensial Elektrostatik' }
    ],
    16: [
      { id: 'tka-fis-b16-sb01', nama: 'Hukum Ohm & Hambatan Rangkaian Pengganti' },
      { id: 'tka-fis-b16-sb02', nama: 'Hukum I & II Kirchhoff (Analisis Loop) serta Daya Listrik' }
    ]
  },
  'tka-matematika lanjut': {
    1: [
      { id: 'tka-fnd-b01-sb01', nama: 'Perbandingan Sisi & Sudut Istimewa' },
      { id: 'tka-fnd-b01-sb02', nama: 'Identitas Pythagoras, Sudut Rangkap, Jumlah & Selisih' }
    ],
    2: [
      { id: 'tka-fnd-b02-sb01', nama: 'Pemfaktoran Bentuk Kuadrat & Pecahan Aljabar' },
      { id: 'tka-fnd-b02-sb02', nama: 'SPLDV & SPLTV (Substitusi & Eliminasi)' }
    ],
    3: [
      { id: 'tka-fnd-b03-sb01', nama: 'Titik Koordinat & Persamaan Garis Lurus' },
      { id: 'tka-fnd-b03-sb02', nama: 'Gradien Garis Sejajar & Tegak Lurus, Jarak Titik ke Garis' }
    ],
    4: [
      { id: 'tka-fnd-b04-sb01', nama: 'Syarat Pecahan & Bentuk Akar Terdefinisi' },
      { id: 'tka-fnd-b04-sb02', nama: 'Persamaan & Pertidaksamaan Nilai Mutlak' }
    ],
    5: [
      { id: 'tka-fnd-b05-sb01', nama: 'Aturan Pangkat Bulat & Rasional' },
      { id: 'tka-fnd-b05-sb02', nama: 'Sifat Penjumlahan, Pengurangan, & Basis Logaritma' }
    ],
    6: [
      { id: 'tka-mtk-b01-sb01', nama: 'Operasi & Perkalian Matriks' },
      { id: 'tka-mtk-b01-sb02', nama: 'Determinan, Invers (2x2 & 3x3), & Sistem Persamaan' }
    ],
    7: [
      { id: 'tka-mtk-b02-sb01', nama: 'Operasi & Pembagian Polinomial (Horner)' },
      { id: 'tka-mtk-b02-sb02', nama: 'Teorema Sisa & Teorema Faktor Linear' }
    ],
    8: [
      { id: 'tka-mtk-b03-sb01', nama: 'Domain, Kodomain, Range Fungsi Polinom, Rasional, Akar' },
      { id: 'tka-mtk-b03-sb02', nama: 'Fungsi Eksponensial, Logaritma, Mutlak, & Trigonometri' }
    ],
    9: [
      { id: 'tka-mtk-b04-sb01', nama: 'Komponen Vektor di R2 dan R3' },
      { id: 'tka-mtk-b04-sb02', nama: 'Panjang Vektor, Operasi Aljabar, & Perkalian Dot' }
    ],
    10: [
      { id: 'tka-mtk-b05-sb01', nama: 'Persamaan Lingkaran Pusat (0,0) & (a,b)' },
      { id: 'tka-mtk-b05-sb02', nama: 'Garis Singgung Lingkaran, Panjang Busur, & Luas Juring' }
    ],
    11: [
      { id: 'tka-mtk-b06-sb01', nama: 'Translasi, Refleksi, Rotasi, & Dilatasi' },
      { id: 'tka-mtk-b06-sb02', nama: 'Komposisi Transformasi & Representasi Matriks' }
    ],
    12: [
      { id: 'tka-mtk-b07-sb01', nama: 'Limit Fungsi Aljabar (Substitusi, Faktorisasi, Sekawan)' },
      { id: 'tka-mtk-b07-sb02', nama: 'Limit Fungsi Trigonometri Tanpa L\'Hopital' }
    ]
  },
  'tka-fundamental matematika': {
    1: [
      { id: 'tka-fnd-b01-sb01', nama: 'Perbandingan Sisi & Sudut Istimewa' },
      { id: 'tka-fnd-b01-sb02', nama: 'Identitas Pythagoras, Sudut Rangkap, Jumlah & Selisih' }
    ],
    2: [
      { id: 'tka-fnd-b02-sb01', nama: 'Pemfaktoran Bentuk Kuadrat & Pecahan Aljabar' },
      { id: 'tka-fnd-b02-sb02', nama: 'SPLDV & SPLTV (Substitusi & Eliminasi)' }
    ],
    3: [
      { id: 'tka-fnd-b03-sb01', nama: 'Titik Koordinat & Persamaan Garis Lurus' },
      { id: 'tka-fnd-b03-sb02', nama: 'Gradien Garis Sejajar & Tegak Lurus, Jarak Titik ke Garis' }
    ],
    4: [
      { id: 'tka-fnd-b04-sb01', nama: 'Syarat Pecahan & Bentuk Akar Terdefinisi' },
      { id: 'tka-fnd-b04-sb02', nama: 'Persamaan & Pertidaksamaan Nilai Mutlak' }
    ],
    5: [
      { id: 'tka-fnd-b05-sb01', nama: 'Aturan Pangkat Bulat & Rasional' },
      { id: 'tka-fnd-b05-sb02', nama: 'Sifat Penjumlahan, Pengurangan, & Basis Logaritma' }
    ]
  },

  // === SMA Sub Babs ===
  'sma-matematika wajib': {
    15: [
      { id: 'mtk-b15-sb01', nama: 'Kaidah Pencacahan & Filling Slots' },
      { id: 'mtk-b15-sb02', nama: 'Permutasi (Unsur Berbeda, Sama, & Siklis)' },
      { id: 'mtk-b15-sb03', nama: 'Kombinasi & Binomial Newton' }
    ],
    16: [
      { id: 'mtk-b16-sb01', nama: 'Ruang Sampel & Peluang Sederhana' },
      { id: 'mtk-b16-sb02', nama: 'Komplemen & Frekuensi Harapan' },
      { id: 'mtk-b16-sb03', nama: 'Peluang Kejadian Majemuk & Bersyarat' }
    ],
    1: [
      { id: 'mtk-w-01-sb01', nama: 'Eksponen & Persamaan Eksponen' },
      { id: 'mtk-w-01-sb02', nama: 'Logaritma & Persamaan Logaritma' }
    ],
    2: [
      { id: 'mtk-w-02-sb01', nama: 'Konsep & Persamaan Nilai Mutlak' },
      { id: 'mtk-w-02-sb02', nama: 'Pertidaksamaan Nilai Mutlak' }
    ],
    5: [
      { id: 'mtk-w-05-sb01', nama: 'Fungsi & Persamaan Kuadrat' },
      { id: 'mtk-w-05-sb02', nama: 'Fungsi Rasional & Asimtot' }
    ],
    10: [
      { id: 'mtk-w-10-sb01', nama: 'Operasi & Aljabar Matriks' },
      { id: 'mtk-w-10-sb02', nama: 'Determinan & Invers Matriks' }
    ],
    12: [
      { id: 'mtk-w-12-sb01', nama: 'Jarak Titik, Garis, dan Bidang' },
      { id: 'mtk-w-12-sb02', nama: 'Sudut dalam Dimensi Tiga' }
    ]
  },
  'sma-matematika lanjut': {
    6: [
      { id: 'mtk-l-06-sb01', nama: 'Limit Fungsi Aljabar & Tak Hingga' },
      { id: 'mtk-l-06-sb02', nama: 'Limit Fungsi Trigonometri' }
    ],
    7: [
      { id: 'mtk-l-07-sb01', nama: 'Aturan Turunan Aljabar & Trigonometri' },
      { id: 'mtk-l-07-sb02', nama: 'Aplikasi Turunan (Garis Singgung & Nilai Ekstrim)' }
    ],
    8: [
      { id: 'mtk-l-08-sb01', nama: 'Teknik Pengintegralan (Substitusi & Parsial)' },
      { id: 'mtk-l-08-sb02', nama: 'Aplikasi Integral (Luas Daerah & Volume)' }
    ]
  },
  'sma-fisika': {
    1: [
      { id: 'fis-b01-sb01', nama: 'Besaran, Satuan, Dimensi, & Ketidakpastian' },
      { id: 'fis-b01-sb02', nama: 'Alat Ukur Panjang & Angka Penting' }
    ],
    2: [
      { id: 'fis-b02-sb01', nama: 'Komponen Vektor & Penjumlahan Vektor' },
      { id: 'fis-b02-sb02', nama: 'Perkalian Vektor (Dot & Cross Product)' }
    ],
    3: [
      { id: 'fis-b03-sb01', nama: 'Kinematika Gerak Lurus (GLB & GLBB)' },
      { id: 'fis-b03-sb02', nama: 'Gerak Vertikal & Gerak Jatuh Bebas' }
    ],
    4: [
      { id: 'fis-b04-sb01', nama: 'Analisis Gerak Parabola' },
      { id: 'fis-b04-sb02', nama: 'Gerak Melingkar Beraturan (GMB & GMBB)' }
    ],
    5: [
      { id: 'fis-b05-sb01', nama: 'Hukum Newton tentang Gerak' },
      { id: 'fis-b05-sb02', nama: 'Penerapan Gaya Gesek & Sistem Katrol' }
    ],
    8: [
      { id: 'fis-b08-sb01', nama: 'Momen Gaya, Inersia, & Dinamika Rotasi' },
      { id: 'fis-b08-sb02', nama: 'Kesetimbangan Benda Tegar & Titik Berat' }
    ],
    11: [
      { id: 'fis-b11-sb01', nama: 'Tekanan Hidrostatis & Hukum Pascal' },
      { id: 'fis-b11-sb02', nama: 'Hukum Archimedes & Gaya Apung' }
    ],
    12: [
      { id: 'fis-b12-sb01', nama: 'Debit & Persamaan Kontinuitas' },
      { id: 'fis-b12-sb02', nama: 'Asas & Persamaan Bernoulli' }
    ],
    15: [
      { id: 'fis-b15-sb01', nama: 'Hukum I Termodinamika & Proses Gas Ideal' },
      { id: 'fis-b15-sb02', nama: 'Siklus Mesin Carnot & Efisiensi Termal' }
    ],
    17: [
      { id: 'fis-b17-sb01', nama: 'Cepat Rambat, Karakteristik, & Efek Doppler Bunyi' },
      { id: 'fis-b17-sb02', nama: 'Intensitas & Taraf Intensitas Bunyi' }
    ],
    21: [
      { id: 'fis-b21-sb01', nama: 'Hukum Ohm & Hambatan Rangkaian Kawat' },
      { id: 'fis-b21-sb02', nama: 'Hukum Kirchhoff (Rangkaian Listrik Majemuk)' }
    ],
    22: [
      { id: 'fis-b22-sb01', nama: 'Medan Magnetik di Sekitar Kawat Berarus' },
      { id: 'fis-b22-sb02', nama: 'Gaya Lorentz pada Kawat & Muatan Bergerak' }
    ],
    24: [
      { id: 'fis-b24-sb01', nama: 'Rangkaian AC R-L-C Seri & Impedansi' },
      { id: 'fis-b24-sb02', nama: 'Resonansi & Daya Rangkaian Bolak-Balik' }
    ],
    26: [
      { id: 'fis-b26-sb01', nama: 'Postulat Relativitas, Dilatasi Waktu, & Panjang' },
      { id: 'fis-b26-sb02', nama: 'Massa, Momentum, & Energi Relativistik' }
    ],
    27: [
      { id: 'fis-b27-sb01', nama: 'Radiasi Benda Hitam & Efek Fotolistrik' },
      { id: 'fis-b27-sb02', nama: 'Efek Compton & Dualisme Gelombang De Broglie' }
    ]
  }
};

// Aliases
CANONICAL_CHAPTER_SUBBABS['matematika wajib'] = CANONICAL_CHAPTER_SUBBABS['sma-matematika wajib'];
CANONICAL_CHAPTER_SUBBABS['matematika lanjut'] = CANONICAL_CHAPTER_SUBBABS['sma-matematika lanjut'];
CANONICAL_CHAPTER_SUBBABS['fisika'] = CANONICAL_CHAPTER_SUBBABS['sma-fisika'];
CANONICAL_CHAPTER_SUBBABS['fundamental matematika'] = CANONICAL_CHAPTER_SUBBABS['tka-fundamental matematika'];

// Helper: Mendapatkan Judul Bab Ringkas
function getSimplifiedBabTitle(subtes, babIndex, rawTitle, category) {
  const catKey = (category || AppState.drillingSetup.category || AppState.mainCategory || 'tka').toLowerCase();
  const subKey = (subtes || '').toLowerCase();
  const fullKey = `${catKey}-${subKey}`;

  if (CANONICAL_BAB_TITLES[fullKey] && CANONICAL_BAB_TITLES[fullKey][babIndex]) {
    return CANONICAL_BAB_TITLES[fullKey][babIndex];
  }
  if (CANONICAL_BAB_TITLES[subKey] && CANONICAL_BAB_TITLES[subKey][babIndex]) {
    return CANONICAL_BAB_TITLES[subKey][babIndex];
  }
  if (!rawTitle) return `Bab ${babIndex}`;
  return rawTitle
    .replace(/^(?:bab\s*)?\d+[\.\:\s\-]+/i, '')
    .replace(/\s*\([^)]*\)/g, '')
    .trim();
}

// Helper: Membersihkan Judul Bab
function cleanBabTitle(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/^(?:bab\s*)?\d+[\.\:\s\-]+/i, '')
    .replace(/[,\(\)\&\/\-\+]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Helper Deterministik: Mendapatkan Indeks Bab Integer (Bebas Bug String Duplikasi)
function getQuestionBabIndex(q, subtes, category) {
  if (!q) return null;
  const cat = (category || q.kategoriUtama || AppState.drillingSetup.category || 'tka').toLowerCase();
  const subStr = (subtes || q.subtes || q.mataPelajaran || '').toLowerCase();

  // Mode TKA: Petakan pertanyaan ke 16 Bab Fisika TKA, 7 Bab MTK Lanjut TKA, 5 Bab Fundamental
  if (cat === 'tka') {
    if (typeof q.tkaBabIndex === 'number') return q.tkaBabIndex;
    if (subStr.includes('fisika')) {
      const smaIndex = getQuestionBabIndex(q, subtes, 'sma');
      if (smaIndex === 1) return 1; // Pengukuran
      if (smaIndex === 3) return 2; // Gerak Lurus
      if (smaIndex === 4) return 3; // Gerak Lengkung
      if (smaIndex === 5) return 4; // Hubungan Gaya dan Gerak
      if (smaIndex === 7) return 5; // Momentum dan Impuls
      if (smaIndex === 8) return 6; // Dinamika Rotasi
      if (smaIndex === 11) return 7; // Fluida Statis
      if (smaIndex === 12) return 8; // Fluida Dinamis
      if (smaIndex === 17) return 9; // Gelombang Bunyi
      if (smaIndex === 18 || smaIndex === 19) return 10; // Gelombang Cahaya & Alat Optik
      if (smaIndex === 13) return 11; // Kalor dan Perpindahannya
      if (smaIndex === 30) return 12; // Pemanasan Global
      if (smaIndex === 14) return 13; // Gas Ideal
      if (smaIndex === 15) return 14; // Termodinamika
      if (smaIndex === 20) return 15; // Listrik Statis
      if (smaIndex === 21) return 16; // Rangkaian Arus Searah
      // Fallback untuk materi terkait lainnya
      if (smaIndex === 2) return 1;
      if (smaIndex === 6) return 4;
      if (smaIndex >= 22 && smaIndex <= 24) return 16;
      if (smaIndex === 16 || smaIndex === 25) return 10;
      return 1;
    }
    if (subStr.includes('lanjut')) {
      const smaIndex = getQuestionBabIndex(q, subtes, 'sma');
      if (smaIndex === 3) return 6; // Matriks (Bab 6)
      if (smaIndex === 2) return 7; // Polinomial (Bab 7)
      if (smaIndex === 7) return 8; // Fungsi (Bab 8)
      if (smaIndex === 4 || smaIndex === 6) return 12; // Limit (Bab 12)
      if (smaIndex === 5) return 10; // Lingkaran (Bab 10)
      const wajibIndex = getQuestionBabIndex(q, 'matematika wajib', 'sma');
      // Prasyarat Fundamental (Bab 1 s.d. 5)
      if (wajibIndex === 7 || wajibIndex === 8) return 1; // Trigonometri Analitik Dasar
      if (wajibIndex === 3 || wajibIndex === 4) return 2; // Aljabar Elementer
      if (wajibIndex === 12 || wajibIndex === 13) return 3; // Geometri Analitik Bidang
      if (wajibIndex === 2) return 4; // Pertidaksamaan & Nilai Mutlak
      if (wajibIndex === 1) return 5; // Eksponen & Logaritma
      // Bab Lanjutan (Bab 6 s.d. 12)
      if (wajibIndex === 10) return 6; // Matriks
      if (wajibIndex === 5 || wajibIndex === 6) return 8; // Fungsi
      if (wajibIndex === 9) return 9; // Vektor
      if (wajibIndex === 11) return 11; // Transformasi Geometri
      return 1;
    }
    if (subStr.includes('fundamental')) {
      const smaIndex = getQuestionBabIndex(q, 'matematika wajib', 'sma');
      if (smaIndex === 7 || smaIndex === 8) return 1; // Trigonometri Analitik Dasar
      if (smaIndex === 3 || smaIndex === 4) return 2; // Aljabar Elementer
      if (smaIndex === 12 || smaIndex === 13) return 3; // Geometri Analitik Bidang
      if (smaIndex === 2) return 4; // Pertidaksamaan & Nilai Mutlak
      if (smaIndex === 1) return 5; // Eksponen & Logaritma
      return 1;
    }
  }

  // Mode SMA standar (Indeks 1 - 30)
  if (typeof q.babIndex === 'number') return q.babIndex;

  // 1. Ekstrak langsung dari ID format FIS-B01 atau MTK-B15
  const idMatch = (q.id || '').match(/^(?:FIS|MTK)-B(\d+)/i);
  if (idMatch) {
    const rawNum = parseInt(idMatch[1], 10);
    if (subStr.includes('lanjut')) {
      if (rawNum === 12) return 6;
      if (rawNum === 13) return 7;
      if (rawNum === 14) return 8;
    } else if (subStr.includes('wajib') || subStr.includes('matematika')) {
      if (rawNum === 1 || rawNum === 2) return 1;
      if (rawNum === 3) return 5;
      if (rawNum === 4) return 2;
      if (rawNum === 6) return 10;
      if (rawNum === 9) return 12;
      if (rawNum === 15) return 15;
      if (rawNum === 16) return 16;
    }
    if (subStr.includes('fisika')) {
      return rawNum;
    }
  }

  // 1b. Cek kata kunci spesifik pada teks q.bab
  const bLower = (q.bab || '').toLowerCase();
  if (bLower.includes('pencacahan')) return 15;
  if (bLower.includes('peluang')) return 16;

  // 2. Cocokkan string q.bab dengan tabel kanonikal
  const subKey = subStr;
  const canon = CANONICAL_BAB_TITLES[subKey] || CANONICAL_BAB_TITLES['sma-' + subKey];
  if (canon) {
    const qClean = cleanBabTitle(q.bab);
    for (const [idxStr, title] of Object.entries(canon)) {
      if (qClean === cleanBabTitle(title)) {
        return parseInt(idxStr, 10);
      }
    }
  }

  // 3. Fallback regex nomor bab pada teks q.bab
  const bMatch = (q.bab || '').match(/^(?:bab\s*)?(\d+)/i);
  if (bMatch) return parseInt(bMatch[1], 10);

  return null;
}

// Helper: Mendapatkan Seluruh SubBab IDs Milik Suatu Soal (Multi-SubBab Support)
function getQuestionSubBabIds(q) {
  if (!q) return [];
  if (Array.isArray(q.subBabIds) && q.subBabIds.length > 0) {
    return q.subBabIds;
  }
  if (q.subBabId) {
    return [q.subBabId];
  }
  return [];
}

// Helper: Memeriksa apakah Soal termasuk dalam Bab yang Dipilih (Integer Based)
function isBabSelected(q, selectedBabs, subtes, category) {
  if (!selectedBabs || selectedBabs.length === 0) return false;
  if (selectedBabs.includes('semua')) return true;
  const qIdx = getQuestionBabIndex(q, subtes, category);
  if (qIdx === null) return false;
  return selectedBabs.includes(qIdx);
}

// Helper: Memeriksa apakah Soal termasuk dalam Sub Bab yang Dipilih
function isSubBabSelected(q, selectedSubBabs) {
  if (!selectedSubBabs || selectedSubBabs.length === 0 || selectedSubBabs.includes('semua')) {
    return true;
  }
  const qSbIds = getQuestionSubBabIds(q);
  if (qSbIds.length === 0) return true;
  return qSbIds.some((id) => selectedSubBabs.includes(id));
}

// Helper: Mencocokkan Subtes
function isSubtesMatching(q, subtes) {
  if (!subtes || subtes === 'semua') return true;
  const qSub = (q.subtes || '').toLowerCase();
  const targetSub = subtes.toLowerCase();
  if (qSub === targetSub) return true;
  if (targetSub === 'fisika' && (q.mataPelajaran || '').toLowerCase() === 'fisika') return true;
  if ((targetSub === 'matematika lanjut' || targetSub === 'matematika wajib') && (q.mataPelajaran || '').toLowerCase() === 'matematika') return true;
  if (targetSub === 'fundamental matematika' && ((q.subtes || '').toLowerCase().includes('matematika') || (q.mataPelajaran || '').toLowerCase() === 'matematika')) return true;
  return false;
}

// Helper Utama: Mengambil Kumpulan Soal yang Cocok dengan Kriteria Drilling
// Parameter excludeCompleted memastikan soal yang sudah selesai TIDAK dimunculkan lagi
function getDrillingMatchingQuestions(options = {}) {
  const { excludeCompleted = true } = options;
  const allQuestions = AppState.dataset.soal || [];
  const { category, subtes, selectedBabs, selectedSubBabs, difficulty } = AppState.drillingSetup;

  return allQuestions.filter((q) => {
    // 1. Kategori (TKA / UTBK / SMA)
    const qCat = (q.kategoriUtama || 'sma').toLowerCase();
    const reqCat = (category || 'tka').toLowerCase();
    const matchCat = qCat === reqCat || (reqCat === 'tka' && qCat === 'sma') || (reqCat === 'sma' && qCat === 'tka');
    // 2. Subtes
    const matchSubtes = isSubtesMatching(q, subtes);
    // 3. Bab Terpilih (Integer Index Presisi)
    const matchBab = isBabSelected(q, selectedBabs, subtes, category);
    // 4. Sub Bab Terpilih (Multi-SubBab Matching)
    const matchSubBab = isSubBabSelected(q, selectedSubBabs);
    // 5. Tingkat Kesulitan
    const matchDiff = difficulty === 'semua' || (q.kesulitan || '').toLowerCase() === difficulty.toLowerCase();

    if (!matchCat || !matchSubtes || !matchBab || !matchSubBab || !matchDiff) {
      return false;
    }

    // 6. Eksklusi Soal yang Sudah Selesai Dikerjakan
    if (excludeCompleted && AppState.completedQuestionIds.includes(q.id)) {
      return false;
    }

    return true;
  });
}

// Mengisi Pilihan Subtes di Setup Drilling
function updateDrillingSubtesPills() {
  const container = document.getElementById('setup-subtes-group');
  if (!container) return;

  const subtests = getSubtestsForCategory(AppState.drillingSetup.category);
  if (!subtests.some(s => s.toLowerCase() === (AppState.drillingSetup.subtes || '').toLowerCase())) {
    AppState.drillingSetup.subtes = subtests[0];
  }

  container.innerHTML = subtests.map((sub) => {
    const isActive = AppState.drillingSetup.subtes.toLowerCase() === sub.toLowerCase();
    const icon = sub.includes('Fisika') ? '⚛️ ' : (sub.includes('Matematika') || sub.includes('Fundamental')) ? '📐 ' : '📝 ';
    return `
      <button class="chip-filter ${isActive ? 'active' : ''}" data-subtes="${sub}">
        ${icon}${sub}
      </button>
    `;
  }).join('');

  // Event listener tombol subtes
  container.querySelectorAll('.chip-filter').forEach((pill) => {
    pill.addEventListener('click', () => {
      container.querySelectorAll('.chip-filter').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const chosen = pill.dataset.subtes;
      AppState.drillingSetup.subtes = chosen;

      // Default kosong (fleksibel) agar pengguna bebas memilih bab target
      AppState.drillingSetup.selectedBabs = [];
      AppState.drillingSetup.selectedSubBabs = ['semua'];

      renderDrillingBabCards();
      renderDrillingSubBabSelector();
      updateDrillingSetupSummary();
    });
  });

  renderDrillingBabCards();
}

// Mengisi & Mengelola Kartu-Kartu Bab Target (Seleksi Berdasarkan Integer Index)
function renderDrillingBabCards() {
  const container = document.getElementById('setup-bab-cards-container');
  const badge = document.getElementById('bab-selected-count-badge');
  if (!container) return;

  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];
  const allQuestions = AppState.dataset.soal || [];
  const { category, subtes } = AppState.drillingSetup;
  const subKey = (subtes || '').toLowerCase();
  const catKey = (category || 'tka').toLowerCase();
  const canonKey = `${catKey}-${subKey}`;

  // Dapatkan daftar bab kanonikal dari tabel kanonikal
  let uniqueBabs = [];
  const canonTable = CANONICAL_BAB_TITLES[canonKey] || CANONICAL_BAB_TITLES[subKey];
  if (canonTable) {
    uniqueBabs = Object.entries(canonTable).map(([idxStr, title]) => ({
      index: parseInt(idxStr, 10),
      judul: title
    })).sort((a, b) => a.index - b.index);
  } else {
    const babList = allBabModules
      .filter((m) => m.kategoriUtama === category && m.subtes.toLowerCase() === subKey && m.tipe === 'materi')
      .map((m) => ({ judul: m.babJudul, index: m.babIndex }));
    const fallbackList = babList.length > 0 ? babList : allBabModules
      .filter((m) => m.kategoriUtama === category && m.subtes.toLowerCase() === subKey)
      .map((m) => ({ judul: m.babJudul, index: m.babIndex }));
    const seenIndices = new Set();
    uniqueBabs = fallbackList.filter((b) => {
      if (seenIndices.has(b.index)) return false;
      seenIndices.add(b.index);
      return true;
    }).sort((a, b) => a.index - b.index);
  }

  // Inisialisasi default array integer kosong (fleksibel, jangan paksa bab tertentu)
  if (!Array.isArray(AppState.drillingSetup.selectedBabs)) {
    AppState.drillingSetup.selectedBabs = [];
  }

  const isAll = AppState.drillingSetup.selectedBabs.includes('semua') || 
    (uniqueBabs.length > 0 && AppState.drillingSetup.selectedBabs.length === uniqueBabs.length);

  // Update Badge Jumlah Terpilih
  if (badge) {
    if (isAll) {
      badge.textContent = `Semua Bab (${uniqueBabs.length})`;
    } else if (AppState.drillingSetup.selectedBabs.length === 0) {
      badge.textContent = '0 Bab Dipilih';
    } else if (AppState.drillingSetup.selectedBabs.length === 1) {
      const singleIdx = AppState.drillingSetup.selectedBabs[0];
      const singleTitle = getSimplifiedBabTitle(subtes, singleIdx, '', category);
      badge.textContent = `Bab ${singleIdx}: ${singleTitle}`;
    } else {
      badge.textContent = `${AppState.drillingSetup.selectedBabs.length} Bab Dipilih`;
    }
  }

  // Hitung jumlah soal per bab untuk tampilan meta di kartu
  const questionsInSubtes = allQuestions.filter((q) => {
    const qCat = (q.kategoriUtama || 'sma').toLowerCase();
    const reqCat = (category || 'tka').toLowerCase();
    const matchCat = qCat === reqCat || (reqCat === 'tka' && qCat === 'sma') || (reqCat === 'sma' && qCat === 'tka');
    const matchSubtes = isSubtesMatching(q, subtes);
    return matchCat && matchSubtes;
  });

  // Render Grid Kartu Bab
  container.innerHTML = uniqueBabs.map((b) => {
    const isChecked = isAll || AppState.drillingSetup.selectedBabs.includes(b.index);
    const padded = String(b.index).padStart(2, '0');
    const simpleTitle = getSimplifiedBabTitle(subtes, b.index, b.judul, category);

    // Hitung soal di bab ini (total & belum dikerjakan)
    const qInBab = questionsInSubtes.filter((q) => getQuestionBabIndex(q, subtes, category) === b.index);
    const uncompletedInBab = qInBab.filter((q) => !AppState.completedQuestionIds.includes(q.id));

    return `
      <div class="bab-card ${isChecked ? 'selected' : ''}" data-bab-index="${b.index}">
        <div class="bab-card-top">
          <span class="bab-card-index">Bab ${padded}</span>
          <span class="bab-card-check">${isChecked ? '✓' : ''}</span>
        </div>
        <h4 class="bab-card-title">${escapeHtml(simpleTitle)}</h4>
        <div class="bab-card-meta">
          <span class="bab-card-count-badge ${qInBab.length > 0 ? 'has-questions' : ''}">
            ${qInBab.length > 0 ? `🎯 ${uncompletedInBab.length}/${qInBab.length} Soal` : 'Belum Ada Soal'}
          </span>
        </div>
      </div>
    `;
  }).join('');

  // Event listener klik pada tiap kartu bab (Fleksibel, toggle babIndex bersangkutan)
  container.querySelectorAll('.bab-card').forEach((card) => {
    card.addEventListener('click', () => {
      const bIndex = parseInt(card.dataset.babIndex, 10);
      if (isNaN(bIndex)) return;

      if (AppState.drillingSetup.selectedBabs.includes('semua')) {
        // Dari 'semua', klik fokus ke 1 bab ini saja
        AppState.drillingSetup.selectedBabs = [bIndex];
        AppState.drillingSetup.selectedSubBabs = ['semua'];
      } else {
        const idx = AppState.drillingSetup.selectedBabs.indexOf(bIndex);
        if (idx >= 0) {
          AppState.drillingSetup.selectedBabs.splice(idx, 1);
        } else {
          AppState.drillingSetup.selectedBabs.push(bIndex);
        }

        if (uniqueBabs.length > 0 && AppState.drillingSetup.selectedBabs.length === uniqueBabs.length) {
          AppState.drillingSetup.selectedBabs = ['semua'];
          AppState.drillingSetup.selectedSubBabs = ['semua'];
        }
      }

      renderDrillingBabCards();
      renderDrillingSubBabSelector();
      updateDrillingSetupSummary();
    });
  });

  // Tombol Pilih Semua Bab
  const btnSelectAll = document.getElementById('btn-select-all-babs');
  if (btnSelectAll) {
    btnSelectAll.onclick = () => {
      AppState.drillingSetup.selectedBabs = ['semua'];
      AppState.drillingSetup.selectedSubBabs = ['semua'];
      renderDrillingBabCards();
      renderDrillingSubBabSelector();
      updateDrillingSetupSummary();
    };
  }

  // Tombol Reset / Clear Bab
  const btnClear = document.getElementById('btn-clear-babs');
  if (btnClear) {
    btnClear.onclick = () => {
      AppState.drillingSetup.selectedBabs = [];
      AppState.drillingSetup.selectedSubBabs = [];
      renderDrillingBabCards();
      renderDrillingSubBabSelector();
      updateDrillingSetupSummary();
    };
  }

  // Render juga daftar sub bab yang sesuai
  renderDrillingSubBabSelector();
}

// Helper: Ambil Seluruh ID Sub Bab dari Bab yang Aktif Terpilih
function getAllAvailableSubBabIds() {
  const { category, subtes, selectedBabs } = AppState.drillingSetup;
  const subKey = (subtes || '').toLowerCase();
  const catKey = (category || 'tka').toLowerCase();
  const canonKey = `${catKey}-${subKey}`;
  const canonBabs = CANONICAL_BAB_TITLES[canonKey] || CANONICAL_BAB_TITLES[subKey];
  const canonSubBabs = CANONICAL_CHAPTER_SUBBABS[canonKey] || CANONICAL_CHAPTER_SUBBABS[subKey];

  const allQuestions = AppState.dataset.soal || [];
  const sbSet = new Set();

  if (!selectedBabs || selectedBabs.length === 0) return [];

  const babIndices = selectedBabs.includes('semua')
    ? (canonBabs ? Object.keys(canonBabs).map(Number) : [])
    : selectedBabs;

  babIndices.forEach((bIdx) => {
    if (canonSubBabs && canonSubBabs[bIdx]) {
      canonSubBabs[bIdx].forEach((sb) => sbSet.add(sb.id));
    }
  });

  allQuestions
    .filter((q) => isSubtesMatching(q, subtes) && isBabSelected(q, selectedBabs, subtes, category))
    .forEach((q) => getQuestionSubBabIds(q).forEach((id) => sbSet.add(id)));

  return Array.from(sbSet);
}

// Render Pilihan Sub Bab Target (Terpisah Antar Bab Secara Rapi & Berurutan Sesuai Kurikulum)
function renderDrillingSubBabSelector() {
  const container = document.getElementById('setup-subbab-container');
  if (!container) return;

  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];
  const allQuestions = AppState.dataset.soal || [];
  const { category, subtes, selectedBabs } = AppState.drillingSetup;
  const subKey = (subtes || '').toLowerCase();
  const catKey = (category || 'tka').toLowerCase();
  const canonKey = `${catKey}-${subKey}`;
  const canonBabs = CANONICAL_BAB_TITLES[canonKey] || CANONICAL_BAB_TITLES[subKey];
  const canonSubBabs = CANONICAL_CHAPTER_SUBBABS[canonKey] || CANONICAL_CHAPTER_SUBBABS[subKey];

  // Jika tidak ada bab yang dipilih
  if (!selectedBabs || selectedBabs.length === 0) {
    container.innerHTML = `
      <div class="subbab-empty-note">
        <span>👈 Silakan pilih minimal 1 bab target di atas untuk menampilkan opsi sub bab.</span>
      </div>
    `;
    return;
  }

  // Dapatkan daftar bab unik yang sedang aktif (terpilih)
  let allCanonBabs = [];
  if (canonBabs) {
    allCanonBabs = Object.entries(canonBabs).map(([idxStr, title]) => ({
      index: parseInt(idxStr, 10),
      judul: title
    })).sort((a, b) => a.index - b.index);
  } else {
    const babList = allBabModules
      .filter((m) => m.kategoriUtama === category && m.subtes.toLowerCase() === subKey && m.tipe === 'materi')
      .map((m) => ({ judul: m.babJudul, index: m.babIndex }));
    const fallbackList = babList.length > 0 ? babList : allBabModules
      .filter((m) => m.kategoriUtama === category && m.subtes.toLowerCase() === subKey)
      .map((m) => ({ judul: m.babJudul, index: m.babIndex }));
    const seenIndices = new Set();
    allCanonBabs = fallbackList.filter((b) => {
      if (seenIndices.has(b.index)) return false;
      seenIndices.add(b.index);
      return true;
    }).sort((a, b) => a.index - b.index);
  }

  const activeBabs = selectedBabs.includes('semua')
    ? allCanonBabs
    : allCanonBabs.filter((b) => selectedBabs.includes(b.index));

  if (activeBabs.length === 0) {
    container.innerHTML = `
      <div class="subbab-empty-note">
        <span>⚠️ Tidak ada bab yang cocok dengan kriteria saat ini.</span>
      </div>
    `;
    return;
  }

  const isAllSubBabs = !AppState.drillingSetup.selectedSubBabs || 
    AppState.drillingSetup.selectedSubBabs.includes('semua');

  // Render blok terpisah per bab
  let html = '';

  activeBabs.forEach((b) => {
    const padded = String(b.index).padStart(2, '0');
    const simpleTitle = getSimplifiedBabTitle(subtes, b.index, b.judul, category);

    // Ambil semua soal untuk bab ini
    const babQuestions = allQuestions.filter((q) => {
      const qCat = (q.kategoriUtama || 'sma').toLowerCase();
      const reqCat = (category || 'tka').toLowerCase();
      const matchCat = qCat === reqCat || (reqCat === 'tka' && qCat === 'sma') || (reqCat === 'sma' && qCat === 'tka');
      const matchSubtes = isSubtesMatching(q, subtes);
      const matchBab = getQuestionBabIndex(q, subtes, category) === b.index;
      return matchCat && matchSubtes && matchBab;
    });

    // Sub bab kanonikal dari kurikulum (hanya sub bab besar)
    const canonicalList = (canonSubBabs && canonSubBabs[b.index])
      ? canonSubBabs[b.index]
      : [];

    // Map sub-bab
    const subBabMap = new Map();
    canonicalList.forEach((csb) => {
      subBabMap.set(csb.id, { id: csb.id, nama: csb.nama, count: 0, uncompleted: 0 });
    });

    // Petakan soal ke sub bab (mendukung multi-subbab)
    babQuestions.forEach((q) => {
      const qSbIds = getQuestionSubBabIds(q);
      const isCompleted = AppState.completedQuestionIds.includes(q.id);

      if (qSbIds.length === 0) {
        const fallbackId = `sb-${b.index}-default`;
        if (!subBabMap.has(fallbackId)) {
          subBabMap.set(fallbackId, { id: fallbackId, nama: q.subBab || simpleTitle, count: 0, uncompleted: 0 });
        }
        subBabMap.get(fallbackId).count++;
        if (!isCompleted) subBabMap.get(fallbackId).uncompleted++;
      } else {
        qSbIds.forEach((sbId) => {
          if (!subBabMap.has(sbId)) {
            subBabMap.set(sbId, { id: sbId, nama: q.subBab || sbId, count: 0, uncompleted: 0 });
          }
          subBabMap.get(sbId).count++;
          if (!isCompleted) subBabMap.get(sbId).uncompleted++;
        });
      }
    });

    const subBabList = Array.from(subBabMap.values());
    const totalCount = babQuestions.length;
    const totalUncompleted = babQuestions.filter((q) => !AppState.completedQuestionIds.includes(q.id)).length;

    html += `
      <div class="subbab-chapter-group" data-chapter-index="${b.index}">
        <div class="subbab-chapter-header">
          <div class="subbab-chapter-title-wrap">
            <span class="subbab-chapter-tag">Bab ${padded}</span>
            <span class="subbab-chapter-title">${escapeHtml(simpleTitle)}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">
              (${totalUncompleted}/${totalCount} Soal Tersedia)
            </span>
          </div>
          ${subBabList.length > 0 ? `
            <div class="subbab-chapter-actions">
              <button type="button" class="btn-subbab-action" onclick="toggleChapterAllSubBabs(${b.index}, true)">Pilih Semua</button>
              <span class="action-divider">•</span>
              <button type="button" class="btn-subbab-action" onclick="toggleChapterAllSubBabs(${b.index}, false)">Batal</button>
            </div>
          ` : ''}
        </div>
    `;

    if (subBabList.length === 0) {
      html += `
        <div class="subbab-empty-note">
          <span>💡 Bank soal latihan untuk bab ini sedang disiapkan di pembaruan berikutnya.</span>
        </div>
      `;
    } else {
      html += `<div class="subbab-pills-container">`;
      subBabList.forEach((sb) => {
        const isChecked = isAllSubBabs || AppState.drillingSetup.selectedSubBabs.includes(sb.id);
        const hasQuestions = sb.count > 0;
        const badgeLabel = hasQuestions 
          ? (sb.uncompleted < sb.count ? `${sb.uncompleted}/${sb.count} Soal` : `${sb.count} Soal`)
          : 'Segera';

        html += `
          <button type="button" 
                  class="subbab-pill ${isChecked ? 'active' : ''}" 
                  data-subbab-id="${escapeHtml(sb.id)}"
                  onclick="toggleSingleSubBab('${escapeHtml(sb.id)}')">
            <span class="subbab-pill-check">${isChecked ? '✓' : ''}</span>
            <span>${escapeHtml(sb.nama)}</span>
            <span class="subbab-pill-badge ${hasQuestions ? 'has-questions' : ''}">
              ${badgeLabel}
            </span>
          </button>
        `;
      });
      html += `</div>`;
    }

    html += `</div>`;
  });

  container.innerHTML = html;

  // Tombol Global: Pilih Semua Sub Bab
  const btnSelectAllSubBabs = document.getElementById('btn-select-all-subbabs');
  if (btnSelectAllSubBabs) {
    btnSelectAllSubBabs.onclick = () => {
      AppState.drillingSetup.selectedSubBabs = ['semua'];
      renderDrillingSubBabSelector();
      updateDrillingSetupSummary();
    };
  }

  // Tombol Global: Reset Sub Bab
  const btnClearSubBabs = document.getElementById('btn-clear-subbabs');
  if (btnClearSubBabs) {
    btnClearSubBabs.onclick = () => {
      AppState.drillingSetup.selectedSubBabs = [];
      renderDrillingSubBabSelector();
      updateDrillingSetupSummary();
    };
  }
}

// Handler Toggle Sub Bab Tunggal
window.toggleSingleSubBab = function(subBabId) {
  if (!subBabId) return;

  if (!Array.isArray(AppState.drillingSetup.selectedSubBabs) || AppState.drillingSetup.selectedSubBabs.includes('semua')) {
    const allAvailable = getAllAvailableSubBabIds();
    AppState.drillingSetup.selectedSubBabs = allAvailable.filter((id) => id !== subBabId);
  } else {
    const idx = AppState.drillingSetup.selectedSubBabs.indexOf(subBabId);
    if (idx >= 0) {
      AppState.drillingSetup.selectedSubBabs.splice(idx, 1);
    } else {
      AppState.drillingSetup.selectedSubBabs.push(subBabId);
    }
  }

  renderDrillingSubBabSelector();
  updateDrillingSetupSummary();
};

// Handler Toggle Semua Sub Bab untuk Bab Tertentu (Berdasarkan chapterIndex)
window.toggleChapterAllSubBabs = function(chapterIndex, selectAll) {
  chapterIndex = parseInt(chapterIndex, 10);
  const { category, subtes } = AppState.drillingSetup;
  const subKey = (subtes || '').toLowerCase();
  const catKey = (category || 'tka').toLowerCase();
  const canonKey = `${catKey}-${subKey}`;

  let chapterSbIds = [];
  const canonSubBabs = CANONICAL_CHAPTER_SUBBABS[canonKey] || CANONICAL_CHAPTER_SUBBABS[subKey];
  if (canonSubBabs && canonSubBabs[chapterIndex]) {
    chapterSbIds = canonSubBabs[chapterIndex].map((sb) => sb.id);
  }

  const allQuestions = AppState.dataset.soal || [];
  const qSbIds = allQuestions
    .filter((q) => isSubtesMatching(q, subtes) && getQuestionBabIndex(q, subtes, category) === chapterIndex)
    .flatMap((q) => getQuestionSubBabIds(q));

  chapterSbIds = [...new Set([...chapterSbIds, ...qSbIds])];
  if (chapterSbIds.length === 0) return;

  if (selectAll) {
    if (!Array.isArray(AppState.drillingSetup.selectedSubBabs) || AppState.drillingSetup.selectedSubBabs.includes('semua')) {
      return;
    }
    chapterSbIds.forEach((id) => {
      if (!AppState.drillingSetup.selectedSubBabs.includes(id)) {
        AppState.drillingSetup.selectedSubBabs.push(id);
      }
    });
  } else {
    if (!Array.isArray(AppState.drillingSetup.selectedSubBabs) || AppState.drillingSetup.selectedSubBabs.includes('semua')) {
      const allActiveSbIds = getAllAvailableSubBabIds();
      AppState.drillingSetup.selectedSubBabs = allActiveSbIds.filter((id) => !chapterSbIds.includes(id));
    } else {
      AppState.drillingSetup.selectedSubBabs = AppState.drillingSetup.selectedSubBabs.filter((id) => !chapterSbIds.includes(id));
    }
  }

  renderDrillingSubBabSelector();
  updateDrillingSetupSummary();
};

// Memperbarui Hitungan Soal yang Cocok di Setup Drilling (Dengan Indikator Soal Belum Dikerjakan)
function updateDrillingSetupSummary() {
  const { selectedBabs, selectedSubBabs } = AppState.drillingSetup;
  const infoElem = document.getElementById('setup-available-info');
  const startBtn = document.getElementById('btn-start-quiz');

  // Jika belum ada bab yang dipilih
  if (!selectedBabs || selectedBabs.length === 0) {
    if (infoElem) {
      infoElem.innerHTML = `<span>Silakan pilih minimal 1 bab target di atas untuk memulai latihan.</span>`;
    }
    if (startBtn) {
      startBtn.disabled = true;
    }
    return;
  }

  const allMatching = getDrillingMatchingQuestions({ excludeCompleted: false });
  const availableQuestions = getDrillingMatchingQuestions({ excludeCompleted: true });
  const completedCount = allMatching.length - availableQuestions.length;

  if (infoElem) {
    const isFilteredSub = selectedSubBabs && !selectedSubBabs.includes('semua');
    const subText = isFilteredSub ? ' (Sub Bab Terpilih)' : '';

    if (availableQuestions.length > 0) {
      infoElem.innerHTML = `Tersedia: <strong>${availableQuestions.length} soal baru</strong> target${subText}` +
        (completedCount > 0 ? ` <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">(${completedCount} soal sudah selesai)</span>` : '');
    } else if (allMatching.length > 0) {
      infoElem.innerHTML = `⚠️ Seluruh <strong>${allMatching.length} soal</strong> target sudah selesai dikerjakan! ` +
        `<button type="button" onclick="resetCompletedQuestions()" style="background:none; border:none; color:var(--primary); text-decoration:underline; cursor:pointer; font-weight:700; font-size:0.8rem; padding:0;">Reset Riwayat</button> untuk mengulang.`;
    } else {
      infoElem.innerHTML = `Tidak ada soal yang tersedia untuk kriteria bab/sub bab yang dipilih.`;
    }
  }

  if (startBtn) {
    startBtn.disabled = availableQuestions.length === 0;
  }
}

// Memulai Sesi Drilling Soal (Soal yang Sudah Dikerjakan Tidak Dimunculkan Lagi)
function startDrillingQuizSession() {
  const pool = getDrillingMatchingQuestions({ excludeCompleted: true });

  if (pool.length === 0) {
    const allMatching = getDrillingMatchingQuestions({ excludeCompleted: false });
    if (allMatching.length > 0) {
      if (confirm('Seluruh soal untuk bab/sub bab ini telah Anda selesaikan sebelumnya. Ingin mereset riwayat dan mengerjakannya kembali?')) {
        resetCompletedQuestions();
      }
    } else {
      alert('Tidak ada soal yang tersedia untuk kriteria bab/sub bab yang dipilih.');
    }
    return;
  }

  const shuffledPool = fisherYatesShuffle(pool);
  const { count, timerEnabled, timerDuration } = AppState.drillingSetup;
  const questionCount = count === 'semua' ? shuffledPool.length : Math.min(parseInt(count, 10), shuffledPool.length);
  const queue = shuffledPool.slice(0, questionCount);

  let totalSeconds = 0;
  if (timerEnabled) {
    if (timerDuration === 'auto') {
      totalSeconds = queue.length * 60;
    } else {
      totalSeconds = parseInt(timerDuration, 10);
    }
  }

  AppState.activeQuiz = {
    isRunning: true,
    queue: queue,
    currentIndex: 0,
    currentSelectedOption: null,
    isAnswerSubmitted: false,
    sessionResults: [],
    timerSecondsLeft: totalSeconds,
    timerTotalSeconds: totalSeconds,
    timerIntervalId: null,
    startTime: Date.now()
  };

  document.getElementById('quiz-setup-panel').classList.add('hidden');
  document.getElementById('quiz-result-panel').classList.add('hidden');
  document.getElementById('quiz-active-panel').classList.remove('hidden');

  if (timerEnabled && totalSeconds > 0) {
    startQuizTimer();
  }

  renderActiveQuizCard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuizTimer() {
  if (AppState.activeQuiz.timerIntervalId) {
    clearInterval(AppState.activeQuiz.timerIntervalId);
  }

  AppState.activeQuiz.timerIntervalId = setInterval(() => {
    if (AppState.activeQuiz.timerSecondsLeft > 0) {
      AppState.activeQuiz.timerSecondsLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(AppState.activeQuiz.timerIntervalId);
      handleTimeExpired();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const pill = document.getElementById('quiz-timer-pill');
  if (!pill) return;

  const seconds = AppState.activeQuiz.timerSecondsLeft;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  pill.innerHTML = `⏱️ ${formatted}`;
  pill.classList.toggle('warning', seconds <= 60);
}

function handleTimeExpired() {
  alert('⏰ Waktu Drilling Telah Habis! Sesi Anda akan otomatis diselesaikan.');
  finishQuizSession();
}

function renderActiveQuizCard() {
  const container = document.getElementById('quiz-active-panel');
  if (!container) return;

  const { queue, currentIndex, currentSelectedOption, isAnswerSubmitted, timerSecondsLeft } = AppState.activeQuiz;
  const currentQ = queue[currentIndex];

  if (!currentQ) {
    finishQuizSession();
    return;
  }

  const isTimerEnabled = AppState.drillingSetup.timerEnabled;
  const mins = Math.floor(timerSecondsLeft / 60);
  const secs = timerSecondsLeft % 60;
  const formattedTime = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const prefixes = ['A', 'B', 'C', 'D', 'E'];

  const optionsHtml = currentQ.pilihan.map((optionText, idx) => {
    let itemClass = 'option-item';
    if (currentSelectedOption === idx) itemClass += ' selected';

    if (isAnswerSubmitted) {
      itemClass += ' locked';
      if (idx === currentQ.kunciJawaban) itemClass += ' correct';
      else if (idx === currentSelectedOption) itemClass += ' incorrect';
    }

    return `
      <div class="${itemClass}" data-index="${idx}" onclick="handleQuizOptionSelect(${idx})">
        <span class="option-prefix">${prefixes[idx] || (idx + 1)}</span>
        <span class="option-label">${escapeHtml(optionText)}</span>
      </div>
    `;
  }).join('');

  let feedbackHtml = '';
  if (isAnswerSubmitted) {
    const isCorrect = currentSelectedOption === currentQ.kunciJawaban;
    feedbackHtml = `
      <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
        <div class="feedback-title">
          ${isCorrect ? '✓ Jawaban Anda Benar!' : '✗ Jawaban Belum Tepat'}
        </div>
        <div class="feedback-explanation">
          <strong>Kunci:</strong> Pilihan ${prefixes[currentQ.kunciJawaban]} (${escapeHtml(currentQ.pilihan[currentQ.kunciJawaban])})<br>
          <div style="margin-top:0.4rem;"><strong>Pembahasan:</strong> ${escapeHtml(currentQ.pembahasan)}</div>
        </div>
      </div>
    `;
  }

  const isLast = currentIndex === queue.length - 1;
  const actionButtonHtml = !isAnswerSubmitted
    ? `
      <button class="btn btn-primary" id="btn-submit-quiz-answer" ${currentSelectedOption === null ? 'disabled' : ''} onclick="handleQuizSubmitAnswer()">
        Periksa Jawaban
      </button>
    `
    : `
      <button class="btn btn-primary" id="btn-next-quiz-question" onclick="handleQuizNextQuestion()">
        ${isLast ? 'Selesaikan Drilling 🏁' : 'Soal Berikutnya →'}
      </button>
    `;

  const subtesDisplay = currentQ.subtes || currentQ.mataPelajaran || 'TKA';
  const subtesSlug = subtesDisplay.toLowerCase().replace(/\s+/g, '-');

  container.innerHTML = `
    <div class="quiz-top-bar">
      <div class="quiz-progress-text">
        Soal <strong>${currentIndex + 1}</strong> dari <strong>${queue.length}</strong>
      </div>
      <div style="display:flex; align-items:center; gap:0.5rem;">
        ${
          isTimerEnabled
            ? `<div id="quiz-timer-pill" class="quiz-timer-pill ${timerSecondsLeft <= 60 ? 'warning' : ''}">⏱️ ${formattedTime}</div>`
            : `<span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">Mode Santai</span>`
        }
        <button class="btn-quit-quiz" onclick="handleQuitQuizPrompt()" title="Keluar dari sesi drilling">
          Akhiri
        </button>
      </div>
    </div>

    <div class="quiz-card" id="active-quiz-card">
      <div class="quiz-meta-bar">
        <div style="display:flex; gap:0.4rem; align-items:center;">
          <span class="tag-subject ${subtesSlug}">${escapeHtml(subtesDisplay)}</span>
          <span class="badge-difficulty ${currentQ.kesulitan.toLowerCase()}">${escapeHtml(currentQ.kesulitan)}</span>
        </div>
        <span style="font-size:0.72rem; color:var(--text-muted); font-weight:600;">#${currentQ.id}</span>
      </div>

      <div class="quiz-subbab-badge-wrap">
        ${currentQ.bab ? `<span class="quiz-topic-pill bab-topic">📍 Bab: ${escapeHtml(currentQ.bab)}</span>` : ''}
        ${currentQ.subBab ? `<span class="quiz-topic-pill subbab-topic">🎯 Sub Bab: ${escapeHtml(currentQ.subBab)}</span>` : ''}
      </div>

      <div class="question-text">${escapeHtml(currentQ.pertanyaan)}</div>

      <div class="options-list">
        ${optionsHtml}
      </div>

      ${feedbackHtml}

      <div class="quiz-actions">
        <span style="font-size:0.78rem; color:var(--text-muted);">
          ${isAnswerSubmitted ? 'Jawaban telah dicatat.' : 'Pilih opsi lalu tekan Periksa Jawaban.'}
        </span>
        ${actionButtonHtml}
      </div>
    </div>
  `;

  renderLatex(container);
}

window.handleQuizOptionSelect = function(optionIndex) {
  if (AppState.activeQuiz.isAnswerSubmitted) return;
  AppState.activeQuiz.currentSelectedOption = optionIndex;
  renderActiveQuizCard();
};

window.handleQuizSubmitAnswer = function() {
  const { queue, currentIndex, currentSelectedOption, isAnswerSubmitted } = AppState.activeQuiz;
  if (currentSelectedOption === null || isAnswerSubmitted) return;

  const currentQ = queue[currentIndex];
  if (!currentQ) return;

  const isCorrect = currentSelectedOption === currentQ.kunciJawaban;
  AppState.activeQuiz.isAnswerSubmitted = true;

  AppState.activeQuiz.sessionResults.push({
    id: currentQ.id,
    selectedOption: currentSelectedOption,
    isCorrect: isCorrect
  });

  markQuestionCompleted(currentQ.id, currentSelectedOption, isCorrect);
  renderActiveQuizCard();
};

window.handleQuizNextQuestion = function() {
  const { queue, currentIndex } = AppState.activeQuiz;

  if (currentIndex < queue.length - 1) {
    AppState.activeQuiz.currentIndex++;
    AppState.activeQuiz.currentSelectedOption = null;
    AppState.activeQuiz.isAnswerSubmitted = false;
    renderActiveQuizCard();
  } else {
    finishQuizSession();
  }
};

window.handleQuitQuizPrompt = function() {
  if (confirm('Apakah Anda yakin ingin mengakhiri sesi drilling ini sekarang?')) {
    finishQuizSession();
  }
};

function finishQuizSession() {
  if (AppState.activeQuiz.timerIntervalId) {
    clearInterval(AppState.activeQuiz.timerIntervalId);
    AppState.activeQuiz.timerIntervalId = null;
  }

  const { queue, sessionResults, startTime } = AppState.activeQuiz;
  const totalQuestions = queue.length;
  const correctCount = sessionResults.filter((r) => r.isCorrect).length;
  const incorrectCount = sessionResults.filter((r) => !r.isCorrect).length;
  const unattemptedCount = totalQuestions - sessionResults.length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const timeElapsedSeconds = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
  const elapsedMins = Math.floor(timeElapsedSeconds / 60);
  const elapsedSecs = timeElapsedSeconds % 60;
  const formattedDuration = `${elapsedMins} menit ${elapsedSecs} detik`;

  AppState.activeQuiz.isRunning = false;
  document.getElementById('quiz-active-panel').classList.add('hidden');
  document.getElementById('quiz-setup-panel').classList.add('hidden');
  
  const resultPanel = document.getElementById('quiz-result-panel');
  resultPanel.classList.remove('hidden');

  resultPanel.innerHTML = `
    <div class="result-card">
      <div class="result-score-badge">
        <span class="result-score-value">${scorePercent}</span>
        <span class="result-score-label">Skor Akhir</span>
      </div>

      <h3>${scorePercent >= 75 ? '🎉 Kerja Bagus!' : scorePercent >= 50 ? '👍 Terus Tingkatkan!' : '💪 Jangan Menyerah!'}</h3>
      <p class="section-desc">Hasil drilling soal per bab Anda telah disimpan di browser.</p>

      <div class="result-stats-grid">
        <div class="stat-item correct">
          <div class="stat-val">${correctCount}</div>
          <div class="stat-lbl">Benar</div>
        </div>
        <div class="stat-item incorrect">
          <div class="stat-val">${incorrectCount}</div>
          <div class="stat-lbl">Salah</div>
        </div>
        <div class="stat-item">
          <div class="stat-val">${totalQuestions}</div>
          <div class="stat-lbl">Total Soal</div>
        </div>
      </div>

      <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1.25rem;">
        ⏱️ Waktu pengerjaan: <strong>${formattedDuration}</strong>
        ${unattemptedCount > 0 ? ` &bull; (${unattemptedCount} soal tidak sempat dijawab)` : ''}
      </div>

      <div class="result-actions">
        <button class="btn btn-primary" onclick="navigateToView('pembahasan')">
          💡 Lihat Pembahasan Lengkap
        </button>
        <button class="btn btn-secondary" onclick="returnToQuizSetup()">
          🎯 Atur Drilling Baru
        </button>
      </div>
    </div>
  `;
}

window.returnToQuizSetup = function() {
  document.getElementById('quiz-result-panel').classList.add('hidden');
  document.getElementById('quiz-active-panel').classList.add('hidden');
  document.getElementById('quiz-setup-panel').classList.remove('hidden');
  updateDrillingSetupSummary();
};

// ============================================================================
// 8. VIEW 3: PEMBAHASAN LENGKAP
// ============================================================================
function renderPembahasanSubtesFilters() {
  const container = document.getElementById('pembahasan-subtes-filters');
  if (!container) return;

  const subtests = ['semua', 'Fisika', 'Matematika Lanjut', 'Matematika Wajib'];
  container.innerHTML = subtests.map((sub) => `
    <button class="chip-filter ${AppState.pembahasanSubtesFilter.toLowerCase() === sub.toLowerCase() ? 'active' : ''}" data-pemb-subtes="${sub}">
      ${sub === 'semua' ? 'Semua Subtes' : sub}
    </button>
  `).join('');

  container.querySelectorAll('.chip-filter').forEach((chip) => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip-filter').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.pembahasanSubtesFilter = chip.dataset.pembSubtes;
      renderPembahasanView();
    });
  });
}

function renderPembahasanView() {
  const container = document.getElementById('pembahasan-list');
  if (!container) return;

  let questions = AppState.dataset.soal || [];

  if (AppState.pembahasanSubtesFilter !== 'semua') {
    questions = questions.filter((q) => isSubtesMatching(q, AppState.pembahasanSubtesFilter));
  }

  if (AppState.onlyCompletedInPembahasan) {
    questions = questions.filter((q) => AppState.completedQuestionIds.includes(q.id));
  }

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="state-empty">
        <div class="state-empty-icon">💡</div>
        <h3>Belum Ada Pembahasan untuk Ditampilkan</h3>
        <p>${
          AppState.onlyCompletedInPembahasan
            ? 'Anda belum menyelesaikan soal apapun untuk filter ini. Silakan kerjakan drilling soal terlebih dahulu!'
            : 'Tidak ada soal yang tersedia untuk filter ini.'
        }</p>
        <button class="btn btn-primary" onclick="navigateToView('latihan')">Buka Drilling Soal</button>
      </div>
    `;
    return;
  }

  const prefixes = ['A', 'B', 'C', 'D', 'E'];

  container.innerHTML = questions.map((item) => {
    const isCompleted = AppState.completedQuestionIds.includes(item.id);
    const userAns = AppState.userAnswers[item.id];
    let userResultBadge = '';

    if (isCompleted && userAns) {
      if (userAns.isCorrect) {
        userResultBadge = `<span class="badge badge-online">✓ Benar (Pilihan ${prefixes[userAns.selectedOption]})</span>`;
      } else {
        userResultBadge = `<span class="badge badge-offline">✗ Salah (Pilih ${prefixes[userAns.selectedOption]})</span>`;
      }
    } else {
      userResultBadge = `<span class="badge" style="background:#f1f5f9; color:#64748b;">Belum Dikerjakan</span>`;
    }

    const subtesDisplay = item.subtes || item.mataPelajaran || 'TKA';
    const subtesSlug = subtesDisplay.toLowerCase().replace(/\s+/g, '-');

    return `
      <article class="pembahasan-card">
        <div class="pembahasan-header">
          <div class="pembahasan-badges">
            <span class="tag-subject ${subtesSlug}">${escapeHtml(subtesDisplay)}</span>
            <span class="badge-difficulty ${item.kesulitan.toLowerCase()}">${escapeHtml(item.kesulitan)}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">#${item.id}</span>
          </div>
          <div>${userResultBadge}</div>
        </div>

        ${item.bab ? `<div style="font-size:0.78rem; color:var(--primary); font-weight:700; margin-bottom:0.4rem;">📍 Bab: ${escapeHtml(item.bab)}</div>` : ''}

        <div class="pembahasan-q">${escapeHtml(item.pertanyaan)}</div>

        <div style="font-size: 0.85rem; margin-bottom: 0.65rem; color: var(--text-main);">
          <strong>Kunci Jawaban:</strong> Pilihan <strong>${prefixes[item.kunciJawaban]}</strong> — <em>${escapeHtml(item.pilihan[item.kunciJawaban])}</em>
        </div>

        <div class="pembahasan-solution-box">
          <div class="solution-badge">Langkah Pembahasan:</div>
          <div class="solution-text">${escapeHtml(item.pembahasan)}</div>
        </div>
      </article>
    `;
  }).join('');

  renderLatex(container);
}

// ============================================================================
// 9. HEADER & NOTIFIKASI HELPER
// ============================================================================
function updateHeaderProgress() {
  const totalSoal = (AppState.dataset.soal || []).length;
  const completedCount = AppState.completedQuestionIds.length;

  const countElem = document.getElementById('header-completed-count');
  const totalElem = document.getElementById('header-total-count');

  if (countElem) countElem.textContent = completedCount;
  if (totalElem) totalElem.textContent = totalSoal;
}

function showNotificationBanner(message, duration = 4000) {
  const banner = document.getElementById('app-banner');
  if (!banner) return;

  banner.textContent = message;
  banner.className = 'app-banner banner-offline';
  banner.classList.remove('hidden');

  setTimeout(() => {
    banner.classList.add('hidden');
  }, duration);
}

function updateNetworkStatus() {
  const badge = document.getElementById('network-badge');
  const text = document.getElementById('network-status-text');
  const banner = document.getElementById('app-banner');

  if (navigator.onLine) {
    if (badge) {
      badge.className = 'badge badge-online';
      badge.title = 'Terhubung ke Jaringan (Online)';
    }
    if (text) text.textContent = 'Online';
    if (banner) banner.classList.add('hidden');
  } else {
    if (badge) {
      badge.className = 'badge badge-offline';
      badge.title = 'Mode Offline Aktif';
    }
    if (text) text.textContent = 'Offline';
    if (banner) {
      banner.innerHTML = '⚡ <strong>Mode Offline Aktif:</strong> Anda sedang bekerja tanpa internet. Semua materi bab, rangkuman, dan soal latihan tetap dapat diakses penuh melalui Service Worker Cache.';
      banner.className = 'app-banner banner-offline';
      banner.classList.remove('hidden');
    }
  }
}

// Global Category Switcher (TKA / UTBK / SMA)
window.setMainCategory = function(cat) {
  AppState.mainCategory = cat;
  AppState.materiSubtesFilter = 'semua';
  
  const btnTka = document.getElementById('btn-cat-tka');
  const btnUtbk = document.getElementById('btn-cat-utbk');
  const btnSma = document.getElementById('btn-cat-sma');

  if (btnTka) btnTka.classList.toggle('active', cat === 'tka');
  if (btnUtbk) btnUtbk.classList.toggle('active', cat === 'utbk');
  if (btnSma) btnSma.classList.toggle('active', cat === 'sma');

  renderMateriSubtesFilters();
  renderMateriView();
};

// ============================================================================
// 10. DATABASE LATIHAN SOAL (CLIENT-SIDE JS + INDEXEDDB PERSISTENCE)
// Bebas dependensi network fetch HTTP & tidak memerlukan fetch ke GitHub
// ============================================================================
const SOAL_DB_NAME = 'EduMandiri_DB';
const SOAL_DB_VERSION = 1;
const SOAL_STORE_NAME = 'bank_soal';

function getIndexedDB() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      resolve(null);
      return;
    }
    const request = indexedDB.open(SOAL_DB_NAME, SOAL_DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(SOAL_STORE_NAME)) {
        const store = db.createObjectStore(SOAL_STORE_NAME, { keyPath: 'id' });
        store.createIndex('subtes', 'subtes', { unique: false });
        store.createIndex('bab', 'bab', { unique: false });
        store.createIndex('kategoriUtama', 'kategoriUtama', { unique: false });
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => {
      console.warn('[IndexedDB] Tidak dapat membuka database:', e.target.error);
      resolve(null);
    };
  });
}

async function persistSoalToIndexedDB(soalList) {
  if (!Array.isArray(soalList) || soalList.length === 0) return;
  try {
    const db = await getIndexedDB();
    if (!db) return;
    const tx = db.transaction([SOAL_STORE_NAME], 'readwrite');
    const store = tx.objectStore(SOAL_STORE_NAME);
    soalList.forEach((soal) => {
      store.put(soal);
    });
    tx.oncomplete = () => {
      console.log(`[IndexedDB] Sinkronisasi ${soalList.length} soal ke IndexedDB berhasil.`);
    };
  } catch (err) {
    console.warn('[IndexedDB] Gagal menyimpan soal:', err);
  }
}

async function readSoalFromIndexedDB() {
  try {
    const db = await getIndexedDB();
    if (!db) return [];
    return new Promise((resolve) => {
      const tx = db.transaction([SOAL_STORE_NAME], 'readonly');
      const store = tx.objectStore(SOAL_STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => resolve([]);
    });
  } catch (err) {
    console.warn('[IndexedDB] Gagal membaca soal:', err);
    return [];
  }
}

async function loadDataset() {
  let soalData = [];

  // 1. Prioritas Utama: Database JS Client-Side (window.EDUMANDIRI_SOAL_BANK)
  // Dimuat langsung melalui <script src="data_soal.js"> tanpa HTTP network request / GitHub fetch
  if (Array.isArray(window.EDUMANDIRI_SOAL_BANK) && window.EDUMANDIRI_SOAL_BANK.length > 0) {
    soalData = window.EDUMANDIRI_SOAL_BANK;
    console.log(`[Database] Memuat ${soalData.length} soal langsung dari data_soal.js (Client Database)`);
    // Sinkronkan ke IndexedDB di background untuk persistensi lokal
    persistSoalToIndexedDB(soalData);
  } else {
    // 2. Prioritas Kedua: Ambil dari IndexedDB browser
    const idbData = await readSoalFromIndexedDB();
    if (Array.isArray(idbData) && idbData.length > 0) {
      soalData = idbData;
      console.log(`[Database] Memuat ${soalData.length} soal dari IndexedDB lokal browser`);
    } else {
      // 3. Fallback Terakhir: fetch data.json lokal (jika script JS belum termuat)
      try {
        const response = await fetch('./data.json', { cache: 'no-cache' });
        if (response.ok) {
          const json = await response.json();
          soalData = json.soal || [];
          console.log(`[Database] Memuat ${soalData.length} soal dari data.json`);
          persistSoalToIndexedDB(soalData);
        }
      } catch (err) {
        console.warn('[Database] Fallback fetch gagal:', err);
      }
    }
  }

  AppState.dataset.soal = soalData;

  // Refresh UI setelah dataset dimuat
  updateHeaderProgress();
  updateDrillingSubtesPills();
  updateDrillingSetupSummary();
  renderMateriSubtesFilters();
  renderMateriView();
  renderPembahasanSubtesFilters();
  renderPembahasanView();
}

// Alias untuk kompatibilitas panggilan lama
const fetchDataset = loadDataset;

// Expose API Database ke window untuk kemudahan developer & pengguna
window.EduMandiriDB = {
  getSoalList: () => AppState.dataset.soal,
  saveSoalList: async (newList) => {
    if (!Array.isArray(newList)) return;
    AppState.dataset.soal = newList;
    window.EDUMANDIRI_SOAL_BANK = newList;
    await persistSoalToIndexedDB(newList);
    updateHeaderProgress();
    updateDrillingSetupSummary();
    renderPembahasanView();
    console.log(`[EduMandiriDB] Database diperbarui dengan ${newList.length} soal.`);
  },
  addSoal: async (soalBaru) => {
    if (!soalBaru || !soalBaru.id) return;
    const existingIndex = AppState.dataset.soal.findIndex(s => s.id === soalBaru.id);
    if (existingIndex >= 0) {
      AppState.dataset.soal[existingIndex] = soalBaru;
    } else {
      AppState.dataset.soal.push(soalBaru);
    }
    await persistSoalToIndexedDB(AppState.dataset.soal);
    updateHeaderProgress();
    updateDrillingSetupSummary();
    console.log(`[EduMandiriDB] Soal ${soalBaru.id} berhasil ditambahkan/diperbarui.`);
  },
  exportJSON: () => {
    return JSON.stringify({ soal: AppState.dataset.soal }, null, 2);
  }
};

// ============================================================================
// 11. REGISTRASI SERVICE WORKER (PWA)
// ============================================================================
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker berhasil didaftarkan:', reg.scope);
        })
        .catch((error) => {
          console.warn('[PWA] Pendaftaran Service Worker gagal:', error);
        });
    });
  }
}

// ============================================================================
// 12. EVENT LISTENERS SETUP
// ============================================================================
function attachEventListeners() {
  // 1. Navigasi SPA Tab (Desktop & Mobile Bottom Bar)
  document.querySelectorAll('[data-view]').forEach((tab) => {
    tab.addEventListener('click', () => {
      const view = tab.dataset.view;
      navigateToView(view);
    });
  });

  // Listen Hash URL
  window.addEventListener('hashchange', () => {
    const rawHash = window.location.hash.replace('#', '');
    if (rawHash.startsWith('baca-')) {
      const babId = rawHash.replace('baca-', '');
      openMateriPage(babId);
    } else if (['materi', 'latihan', 'pembahasan'].includes(rawHash)) {
      navigateToView(rawHash);
    }
  });

  // 2. Kategori Switcher (TKA vs UTBK vs SMA)
  const btnCatTka = document.getElementById('btn-cat-tka');
  const btnCatUtbk = document.getElementById('btn-cat-utbk');
  const btnCatSma = document.getElementById('btn-cat-sma');
  if (btnCatTka) btnCatTka.addEventListener('click', () => setMainCategory('tka'));
  if (btnCatUtbk) btnCatUtbk.addEventListener('click', () => setMainCategory('utbk'));
  if (btnCatSma) btnCatSma.addEventListener('click', () => setMainCategory('sma'));

  // 3. Segment Switcher: [ 📑 Rangkuman | 📖 Materi | 🎯 Variasi Contoh Soal ]
  const btnModeRangkuman = document.getElementById('btn-mode-rangkuman');
  const btnModeMateri = document.getElementById('btn-mode-materi');
  const btnModeContohSoal = document.getElementById('btn-mode-contoh-soal');

  const setModeActive = (activeMode) => {
    AppState.materiMode = activeMode;
    const buttons = [
      { btn: btnModeRangkuman, mode: 'rangkuman' },
      { btn: btnModeMateri, mode: 'materi' },
      { btn: btnModeContohSoal, mode: 'contoh-soal' }
    ];
    buttons.forEach(({ btn, mode }) => {
      if (!btn) return;
      const isActive = mode === activeMode;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    renderMateriView();
  };

  if (btnModeRangkuman) {
    btnModeRangkuman.addEventListener('click', () => setModeActive('rangkuman'));
  }
  if (btnModeMateri) {
    btnModeMateri.addEventListener('click', () => setModeActive('materi'));
  }
  if (btnModeContohSoal) {
    btnModeContohSoal.addEventListener('click', () => setModeActive('contoh-soal'));
  }

  // 4. Reader View Back Buttons
  const btnBackList = document.getElementById('btn-back-to-materi-list');
  const btnBottomBackList = document.getElementById('btn-bottom-back-list');
  if (btnBackList) btnBackList.addEventListener('click', () => navigateToView('materi'));
  if (btnBottomBackList) btnBottomBackList.addEventListener('click', () => navigateToView('materi'));

  // Jump from reader to drilling
  const btnJumpDrilling = document.getElementById('btn-jump-to-drilling');
  if (btnJumpDrilling) {
    btnJumpDrilling.addEventListener('click', () => {
      const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];
      const currentBab = allBabModules.find((m) => m.id === AppState.currentReadingBabId);
      if (currentBab) {
        startDrillingForBab(currentBab.subtes, currentBab.babJudul);
      } else {
        navigateToView('latihan');
      }
    });
  }

  // 5. Drilling Setup Category Selector (TKA / UTBK / SMA)
  document.querySelectorAll('#setup-category-group button').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#setup-category-group button').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.drillingSetup.category = pill.dataset.cat;
      const subtests = getSubtestsForCategory(AppState.drillingSetup.category);
      if (!subtests.some(s => s.toLowerCase() === (AppState.drillingSetup.subtes || '').toLowerCase())) {
        AppState.drillingSetup.subtes = subtests[0];
      }
      AppState.drillingSetup.selectedBabs = [];
      AppState.drillingSetup.selectedSubBabs = ['semua'];
      updateDrillingSubtesPills();
      updateDrillingSetupSummary();
    });
  });

  // Step: Jumlah Soal
  document.querySelectorAll('#setup-count-group .pill-option').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#setup-count-group .pill-option').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.drillingSetup.count = pill.dataset.value;
      updateDrillingSetupSummary();
    });
  });

  // Step: Kesulitan
  document.querySelectorAll('#setup-difficulty-group .pill-option').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#setup-difficulty-group .pill-option').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.drillingSetup.difficulty = pill.dataset.value;
      updateDrillingSetupSummary();
    });
  });

  // Step: Timer Toggle & Durasi
  const timerToggle = document.getElementById('setup-timer-toggle');
  const timerWrapper = document.getElementById('timer-duration-wrapper');
  if (timerToggle) {
    timerToggle.addEventListener('change', (e) => {
      AppState.drillingSetup.timerEnabled = e.target.checked;
      if (timerWrapper) {
        timerWrapper.classList.toggle('disabled', !e.target.checked);
      }
    });
  }

  document.querySelectorAll('#setup-duration-group .pill-option').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#setup-duration-group .pill-option').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.drillingSetup.timerDuration = pill.dataset.value;
    });
  });

  // Tombol Mulai Drilling
  const startQuizBtn = document.getElementById('btn-start-quiz');
  if (startQuizBtn) {
    startQuizBtn.addEventListener('click', startDrillingQuizSession);
  }

  // Tombol Reset Riwayat
  const resetSetupBtn = document.getElementById('btn-setup-reset-history');
  if (resetSetupBtn) {
    resetSetupBtn.addEventListener('click', resetCompletedQuestions);
  }

  // Toggle Hanya Selesai di Pembahasan
  const toggleCompleted = document.getElementById('toggle-only-completed');
  if (toggleCompleted) {
    toggleCompleted.addEventListener('change', (e) => {
      AppState.onlyCompletedInPembahasan = e.target.checked;
      renderPembahasanView();
    });
  }

  // Monitor Online/Offline
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
}

// ============================================================================
// 13. INISIALISASI UTAMA APLIKASI
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadClientState();
  attachEventListeners();
  updateNetworkStatus();

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash.startsWith('baca-')) {
    const babId = initialHash.replace('baca-', '');
    openMateriPage(babId);
  } else if (['materi', 'latihan', 'pembahasan'].includes(initialHash)) {
    navigateToView(initialHash);
  } else {
    navigateToView('materi');
  }

  fetchDataset();
  registerServiceWorker();
});
