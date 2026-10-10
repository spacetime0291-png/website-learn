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

const TKA_SUBTESTS = ['Fisika', 'Matematika Wajib', 'Matematika Lanjut'];
const UTBK_SUBTESTS = [
  'Penalaran Umum (PU)',
  'Pengetahuan & Pemahaman Umum (PPU)',
  'Pemahaman Bacaan & Menulis (PBM)',
  'Pengetahuan Kuantitatif (PK)',
  'Literasi Bahasa Indonesia',
  'Literasi Bahasa Inggris',
  'Penalaran Matematika'
];

const AppState = {
  dataset: {
    materi: [],
    soal: []
  },
  currentView: 'materi',

  // Kategori Utama: 'tka' | 'utbk'
  mainCategory: 'tka',
  materiMode: 'rangkuman', // 'rangkuman' | 'materi'
  materiSubtesFilter: 'semua',

  // State Detail Reader
  currentReadingBabId: null,

  // Konfigurasi Drilling Soal Per Bab (Wizard)
  drillingSetup: {
    category: 'tka',         // 'tka' | 'utbk'
    subtes: 'Matematika Wajib',
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

// Render Filter Subtes dinamis sesuai Kategori (TKA / UTBK)
function renderMateriSubtesFilters() {
  const container = document.getElementById('materi-subtes-filters');
  if (!container) return;

  const isTka = AppState.mainCategory === 'tka';
  const subtests = isTka ? TKA_SUBTESTS : UTBK_SUBTESTS;

  let html = `<button class="chip-filter ${AppState.materiSubtesFilter === 'semua' ? 'active' : ''}" data-subtes="semua">Semua</button>`;
  
  subtests.forEach((sub) => {
    const isActive = AppState.materiSubtesFilter.toLowerCase() === sub.toLowerCase();
    const icon = sub.includes('Fisika') ? '⚛️ ' : sub.includes('Matematika') ? '📐 ' : '📝 ';
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

// Render Daftar Bab Materi (Katalog Bab Minimalis Sederhana)
function renderMateriView() {
  const container = document.getElementById('materi-list');
  const bannerDesc = document.getElementById('materi-mode-desc');
  if (!container) return;

  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];

  if (bannerDesc) {
    bannerDesc.innerHTML = 'Klik salah satu bab untuk menampilkan opsi <strong>Materi Lengkap</strong>, <strong>Variasi Contoh Soal</strong>, <strong>Rangkuman</strong>, atau <strong>Latihan Kuis</strong>.';
  }

  // Filter berdasarkan Kategori Utama (TKA vs UTBK) dan Subtes
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
            : 'Silakan pilih subtes lain seperti Fisika atau Matematika Lanjut untuk membaca konten.'
        }</p>
        ${isUtbk ? `<button class="btn btn-secondary" onclick="setMainCategory('tka')">Beralih ke TKA Saintek</button>` : ''}
      </div>
    `;
    return;
  }

  // Kelompokkan Modul-modul Berdasarkan Bab Unik (Subtes + babIndex)
  const babMap = new Map();
  filtered.forEach((m) => {
    const key = `${m.subtes}__${m.babIndex}`;
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

  // Urutkan Bab berdasarkan babIndex
  const sortedBabs = Array.from(babMap.values()).sort((a, b) => a.babIndex - b.babIndex);

  container.innerHTML = sortedBabs.map((bab, idx) => {
    const babIndexPadded = String(bab.babIndex).padStart(2, '0');
    const babKey = `${bab.subtes.replace(/[^a-zA-Z0-9]/g, '_')}_${bab.babIndex}`;

    let availableCount = 0;
    if (bab.materi) availableCount++;
    if (bab.contohSoal) availableCount++;
    if (bab.rangkuman) availableCount++;
    availableCount++; // Kuis drilling selalu tersedia

    // Default bab pertama sedikit diperluas
    const isExpanded = idx === 0 ? 'expanded' : '';

    return `
      <div class="bab-item ${isExpanded}" id="bab-item-${babKey}" data-bab-key="${babKey}">
        <div class="bab-item-header" onclick="toggleBabItem('${babKey}')">
          <div class="bab-item-left">
            <div class="bab-icon-minimal">
              <span>${babIndexPadded}</span>
            </div>
            <div class="bab-item-title-group">
              <h3 class="bab-item-title">${escapeHtml(bab.babJudul)}</h3>
              <span class="bab-item-meta">${escapeHtml(bab.subtes)} &bull; ${escapeHtml(bab.blok)}</span>
            </div>
          </div>
          <div class="bab-item-right">
            <span class="bab-modul-counter">${availableCount} Opsi</span>
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
            <span class="opt-text">Materi Lengkap</span>
          </button>

          <button class="btn-bab-opt opt-cs ${bab.contohSoal ? '' : 'disabled'}" 
            ${bab.contohSoal ? `onclick="openMateriPage('${bab.contohSoal.id}')"` : 'disabled title="Variasi contoh soal segera hadir"'}>
            <span class="opt-icon">🎯</span>
            <span class="opt-text">Variasi Soal</span>
            ${bab.contohSoal ? `<span class="opt-badge">Tersedia</span>` : `<span class="opt-badge muted">Segera</span>`}
          </button>

          <button class="btn-bab-opt opt-rangkuman ${bab.rangkuman ? '' : 'disabled'}" 
            ${bab.rangkuman ? `onclick="openMateriPage('${bab.rangkuman.id}')"` : 'disabled title="Rangkuman belum tersedia"'}>
            <span class="opt-icon">📑</span>
            <span class="opt-text">Rangkuman Rumus</span>
          </button>

          <button class="btn-bab-opt opt-quiz" onclick="startDrillingForBab('${escapeHtml(bab.subtes)}', '${escapeHtml(bab.babJudul)}')">
            <span class="opt-icon">⚡</span>
            <span class="opt-text">Latihan Kuis</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Helper: Toggle expand/collapse pada list bab
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

  // Cari Modul Saudara (Sibling Modules) untuk Bab yang Sama
  const materiMod = allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === babData.babIndex && m.tipe === 'materi');
  const csMod = allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === babData.babIndex && m.tipe === 'contoh-soal');
  const rangkumanMod = allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === babData.babIndex && m.tipe === 'rangkuman');

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

  const prevBab = allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex - 1) && m.tipe === babData.tipe)
    || allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex - 1) && m.tipe === 'materi');

  const nextBab = allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex + 1) && m.tipe === babData.tipe)
    || allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex + 1) && m.tipe === 'materi');

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
  AppState.drillingSetup.subtes = subtes;
  AppState.drillingSetup.bab = babJudul;

  // Tentukan indeks bab integer agar presisi & bebas bug duplikasi seleksi
  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];
  const foundMod = allBabModules.find((m) => m.subtes.toLowerCase() === (subtes || '').toLowerCase() && m.babJudul === babJudul);
  const babIndex = foundMod ? foundMod.babIndex : 1;

  AppState.drillingSetup.selectedBabs = [babIndex];
  AppState.drillingSetup.selectedSubBabs = ['semua'];

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
  'fisika': {
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
  'matematika wajib': {
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
  'matematika lanjut': {
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

// Hierarki Sub Bab Utama Berurutan (Hanya Sub Bab Besar / Inti)
const CANONICAL_CHAPTER_SUBBABS = {
  'matematika wajib': {
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
  'matematika lanjut': {
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
  'fisika': {
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

// Helper: Mendapatkan Judul Bab Ringkas
function getSimplifiedBabTitle(subtes, babIndex, rawTitle) {
  const subKey = (subtes || '').toLowerCase();
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
function getQuestionBabIndex(q, subtes) {
  if (!q) return null;
  if (typeof q.babIndex === 'number') return q.babIndex;

  // 1. Ekstrak langsung dari ID format FIS-B01 atau MTK-B15
  const idMatch = (q.id || '').match(/^(?:FIS|MTK)-B(\d+)/i);
  if (idMatch) {
    const rawNum = parseInt(idMatch[1], 10);
    const subStr = (subtes || q.subtes || q.mataPelajaran || '').toLowerCase();
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
  }

  // 1b. Cek kata kunci spesifik pada teks q.bab
  const bLower = (q.bab || '').toLowerCase();
  if (bLower.includes('pencacahan')) return 15;
  if (bLower.includes('peluang')) return 16;

  // 2. Cocokkan string q.bab dengan tabel kanonikal
  const subKey = (subtes || q.subtes || q.mataPelajaran || '').toLowerCase();
  const canon = CANONICAL_BAB_TITLES[subKey];
  if (canon) {
    const qClean = cleanBabTitle(q.bab);
    for (const [idxStr, title] of Object.entries(canon)) {
      if (qClean === cleanBabTitle(title)) {
        return parseInt(idxStr, 10);
      }
    }
  }

  // 3. Cek di seluruh tabel kanonikal jika subtes belum tepat
  for (const sKey of ['matematika wajib', 'matematika lanjut', 'fisika']) {
    const cTable = CANONICAL_BAB_TITLES[sKey];
    if (cTable) {
      const qClean = cleanBabTitle(q.bab);
      for (const [idxStr, title] of Object.entries(cTable)) {
        if (qClean === cleanBabTitle(title)) {
          return parseInt(idxStr, 10);
        }
      }
    }
  }

  // 4. Fallback regex nomor bab pada teks q.bab
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
function isBabSelected(q, selectedBabs, subtes) {
  if (!selectedBabs || selectedBabs.length === 0) return false;
  if (selectedBabs.includes('semua')) return true;
  const qIdx = getQuestionBabIndex(q, subtes);
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
  return false;
}

// Helper Utama: Mengambil Kumpulan Soal yang Cocok dengan Kriteria Drilling
// Parameter excludeCompleted memastikan soal yang sudah selesai TIDAK dimunculkan lagi
function getDrillingMatchingQuestions(options = {}) {
  const { excludeCompleted = true } = options;
  const allQuestions = AppState.dataset.soal || [];
  const { category, subtes, selectedBabs, selectedSubBabs, difficulty } = AppState.drillingSetup;

  return allQuestions.filter((q) => {
    // 1. Kategori (TKA / UTBK)
    const matchCat = !q.kategoriUtama || q.kategoriUtama.toLowerCase() === category.toLowerCase();
    // 2. Subtes
    const matchSubtes = isSubtesMatching(q, subtes);
    // 3. Bab Terpilih (Integer Index Presisi)
    const matchBab = isBabSelected(q, selectedBabs, subtes);
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

  const isTka = AppState.drillingSetup.category === 'tka';
  const subtests = isTka ? TKA_SUBTESTS : UTBK_SUBTESTS;

  container.innerHTML = subtests.map((sub) => {
    const isActive = AppState.drillingSetup.subtes.toLowerCase() === sub.toLowerCase();
    const icon = sub.includes('Fisika') ? '⚛️ ' : sub.includes('Matematika') ? '📐 ' : '📝 ';
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

  // Dapatkan daftar bab kanonikal dari tabel kanonikal
  let uniqueBabs = [];
  if (CANONICAL_BAB_TITLES[subKey]) {
    uniqueBabs = Object.entries(CANONICAL_BAB_TITLES[subKey]).map(([idxStr, title]) => ({
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
      const singleTitle = getSimplifiedBabTitle(subtes, singleIdx, '');
      badge.textContent = `Bab ${singleIdx}: ${singleTitle}`;
    } else {
      badge.textContent = `${AppState.drillingSetup.selectedBabs.length} Bab Dipilih`;
    }
  }

  // Hitung jumlah soal per bab untuk tampilan meta di kartu
  const questionsInSubtes = allQuestions.filter((q) => {
    const matchCat = !q.kategoriUtama || q.kategoriUtama.toLowerCase() === category.toLowerCase();
    const matchSubtes = isSubtesMatching(q, subtes);
    return matchCat && matchSubtes;
  });

  // Render Grid Kartu Bab
  container.innerHTML = uniqueBabs.map((b) => {
    const isChecked = isAll || AppState.drillingSetup.selectedBabs.includes(b.index);
    const padded = String(b.index).padStart(2, '0');
    const simpleTitle = getSimplifiedBabTitle(subtes, b.index, b.judul);

    // Hitung soal di bab ini (total & belum dikerjakan)
    const qInBab = questionsInSubtes.filter((q) => getQuestionBabIndex(q, subtes) === b.index);
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
  const { subtes, selectedBabs } = AppState.drillingSetup;
  const subKey = (subtes || '').toLowerCase();
  const allQuestions = AppState.dataset.soal || [];
  const sbSet = new Set();

  if (!selectedBabs || selectedBabs.length === 0) return [];

  const babIndices = selectedBabs.includes('semua')
    ? (CANONICAL_BAB_TITLES[subKey] ? Object.keys(CANONICAL_BAB_TITLES[subKey]).map(Number) : [])
    : selectedBabs;

  babIndices.forEach((bIdx) => {
    if (CANONICAL_CHAPTER_SUBBABS[subKey] && CANONICAL_CHAPTER_SUBBABS[subKey][bIdx]) {
      CANONICAL_CHAPTER_SUBBABS[subKey][bIdx].forEach((sb) => sbSet.add(sb.id));
    }
  });

  allQuestions
    .filter((q) => isSubtesMatching(q, subtes) && isBabSelected(q, selectedBabs, subtes))
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
  if (CANONICAL_BAB_TITLES[subKey]) {
    allCanonBabs = Object.entries(CANONICAL_BAB_TITLES[subKey]).map(([idxStr, title]) => ({
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
    const simpleTitle = getSimplifiedBabTitle(subtes, b.index, b.judul);

    // Ambil semua soal untuk bab ini
    const babQuestions = allQuestions.filter((q) => {
      const matchCat = !q.kategoriUtama || q.kategoriUtama.toLowerCase() === category.toLowerCase();
      const matchSubtes = isSubtesMatching(q, subtes);
      const matchBab = getQuestionBabIndex(q, subtes) === b.index;
      return matchCat && matchSubtes && matchBab;
    });

    // Sub bab kanonikal dari kurikulum (hanya sub bab besar)
    const canonicalList = (CANONICAL_CHAPTER_SUBBABS[subKey] && CANONICAL_CHAPTER_SUBBABS[subKey][b.index])
      ? CANONICAL_CHAPTER_SUBBABS[subKey][b.index]
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
  const { subtes } = AppState.drillingSetup;
  const subKey = (subtes || '').toLowerCase();

  let chapterSbIds = [];
  if (CANONICAL_CHAPTER_SUBBABS[subKey] && CANONICAL_CHAPTER_SUBBABS[subKey][chapterIndex]) {
    chapterSbIds = CANONICAL_CHAPTER_SUBBABS[subKey][chapterIndex].map((sb) => sb.id);
  }

  const allQuestions = AppState.dataset.soal || [];
  const qSbIds = allQuestions
    .filter((q) => isSubtesMatching(q, subtes) && getQuestionBabIndex(q, subtes) === chapterIndex)
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
    questions = questions.filter((q) => {
      const sub = q.subtes || q.mataPelajaran || '';
      return sub.toLowerCase() === AppState.pembahasanSubtesFilter.toLowerCase();
    });
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

// Global Category Switcher (TKA / UTBK)
window.setMainCategory = function(cat) {
  AppState.mainCategory = cat;
  AppState.materiSubtesFilter = 'semua';
  
  const btnTka = document.getElementById('btn-cat-tka');
  const btnUtbk = document.getElementById('btn-cat-utbk');

  if (btnTka && btnUtbk) {
    btnTka.classList.toggle('active', cat === 'tka');
    btnUtbk.classList.toggle('active', cat === 'utbk');
  }

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

  // 2. Kategori Switcher (TKA vs UTBK)
  const btnCatTka = document.getElementById('btn-cat-tka');
  const btnCatUtbk = document.getElementById('btn-cat-utbk');
  if (btnCatTka) btnCatTka.addEventListener('click', () => setMainCategory('tka'));
  if (btnCatUtbk) btnCatUtbk.addEventListener('click', () => setMainCategory('utbk'));

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
        AppState.drillingSetup.category = currentBab.kategoriUtama;
        AppState.drillingSetup.subtes = currentBab.subtes;
        AppState.drillingSetup.bab = currentBab.babJudul;
        AppState.drillingSetup.selectedBabs = [currentBab.babJudul];
        AppState.drillingSetup.selectedSubBabs = ['semua'];

        // Update UI Drilling
        document.querySelectorAll('#setup-category-group .pill-option, #setup-category-group .cat-pill-sm').forEach((p) => {
          p.classList.toggle('active', p.dataset.cat === currentBab.kategoriUtama);
        });
        updateDrillingSubtesPills();
        renderDrillingBabCards();
        renderDrillingSubBabSelector();
        updateDrillingSetupSummary();
      }
      navigateToView('latihan');
    });
  }

  // 5. Drilling Setup Category Selector (TKA / UTBK)
  document.querySelectorAll('#setup-category-group button').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#setup-category-group button').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.drillingSetup.category = pill.dataset.cat;
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
