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

const TKA_SUBTESTS = ['Fisika', 'Matematika Lanjut', 'Matematika Wajib'];
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
    category: 'tka',      // 'tka' | 'utbk'
    subtes: 'Fisika',     // 'Fisika' | 'Matematika Lanjut' | ...
    bab: 'semua',         // 'semua' | nama bab spesifik
    count: '5',           // '5' | '10' | '15' | 'semua'
    difficulty: 'semua',  // 'mudah' | 'sedang' | 'sulit' | 'semua'
    timerEnabled: true,
    timerDuration: 'auto' // 'auto' | '300' | '600' | '900'
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

  // Refresh jika diperlukan
  if (viewName === 'materi') {
    renderMateriSubtesFilters();
    renderMateriView();
  } else if (viewName === 'latihan' && !AppState.activeQuiz.isRunning) {
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

// Render Daftar Bab Materi (Katalog Bab Terpadu)
function renderMateriView() {
  const container = document.getElementById('materi-list');
  const bannerDesc = document.getElementById('materi-mode-desc');
  if (!container) return;

  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];

  if (bannerDesc) {
    bannerDesc.innerHTML = 'Pilih bab yang ingin dipelajari untuk mengakses <strong>Materi Lengkap</strong>, <strong>Variasi Contoh Soal</strong>, <strong>Rangkuman Rumus</strong>, atau <strong>Latihan Kuis</strong>.';
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

  container.innerHTML = sortedBabs.map((bab) => {
    const subtesSlug = bab.subtes.toLowerCase().replace(/\s+/g, '-');
    const babIndexPadded = String(bab.babIndex).padStart(2, '0');

    // Default entry id untuk kartu (materi jika ada, atau lainnya)
    const primaryId = bab.materi ? bab.materi.id : (bab.contohSoal ? bab.contohSoal.id : (bab.rangkuman ? bab.rangkuman.id : ''));

    return `
      <article class="bab-card">
        <div class="bab-card-header">
          <span class="tag-subject ${subtesSlug}">${escapeHtml(bab.subtes)}</span>
          <span class="bab-badge">Bab ${babIndexPadded}</span>
        </div>
        <h3 class="bab-card-title">${escapeHtml(bab.babJudul)}</h3>
        <div class="bab-card-blok">
          <span>📁</span> <em>${escapeHtml(bab.blok)}</em>
        </div>

        <div class="bab-module-options">
          <button class="btn-bab-choice btn-choice-materi ${bab.materi ? '' : 'disabled'}" 
            ${bab.materi ? `onclick="openMateriPage('${bab.materi.id}')"` : 'disabled title="Materi belum tersedia"'}>
            <span class="choice-icon">📖</span>
            <span class="choice-text">Materi Lengkap</span>
          </button>

          <button class="btn-bab-choice btn-choice-cs ${bab.contohSoal ? '' : 'disabled'}" 
            ${bab.contohSoal ? `onclick="openMateriPage('${bab.contohSoal.id}')"` : 'disabled title="Variasi soal sedang disiapkan"'}>
            <span class="choice-icon">🎯</span>
            <span class="choice-text">Variasi Soal</span>
            ${bab.contohSoal ? `<span class="choice-badge">Tersedia</span>` : `<span class="choice-badge muted">Segera</span>`}
          </button>

          <button class="btn-bab-choice btn-choice-rangkuman ${bab.rangkuman ? '' : 'disabled'}" 
            ${bab.rangkuman ? `onclick="openMateriPage('${bab.rangkuman.id}')"` : 'disabled title="Rangkuman belum tersedia"'}>
            <span class="choice-icon">📑</span>
            <span class="choice-text">Rangkuman</span>
          </button>

          <button class="btn-bab-choice btn-choice-quiz" onclick="startDrillingForBab('${escapeHtml(bab.subtes)}', '${escapeHtml(bab.babJudul)}')">
            <span class="choice-icon">⚡</span>
            <span class="choice-text">Latihan Kuis</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

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

  // Render Navigasi Bab Sebelumnya & Berikutnya di Bagian Bawah
  const bottomBar = document.querySelector('.reader-bottom-bar');
  if (bottomBar) {
    const prevMod = allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex - 1) && m.tipe === babData.tipe)
      || allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex - 1) && m.tipe === 'materi');

    const nextMod = allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex + 1) && m.tipe === babData.tipe)
      || allBabModules.find((m) => m.subtes === babData.subtes && m.babIndex === (babData.babIndex + 1) && m.tipe === 'materi');

    bottomBar.innerHTML = `
      <button class="btn btn-secondary" onclick="navigateToView('materi')">
        ← Kembali ke Daftar Bab
      </button>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        ${prevMod ? `<button class="btn btn-secondary" onclick="openMateriPage('${prevMod.id}')">← Bab ${prevMod.babIndex}</button>` : ''}
        ${nextMod ? `<button class="btn btn-primary" onclick="openMateriPage('${nextMod.id}')">Bab ${nextMod.babIndex} →</button>` : ''}
        <button class="btn btn-secondary" onclick="startDrillingForBab('${escapeHtml(babData.subtes)}', '${escapeHtml(babData.babJudul)}')">
          ⚡ Latihan Kuis Bab Ini
        </button>
      </div>
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

  // Update UI Drilling
  updateDrillingSubtesPills();
  const babSelect = document.getElementById('setup-bab-select');
  if (babSelect) {
    babSelect.value = babJudul;
  }
  updateDrillingSetupSummary();
  navigateToView('latihan');
};

// ============================================================================
// 7. VIEW 2: DRILLING SOAL PER BAB (SETUP WIZARD, KUIS, TIMER, HASIL)
// ============================================================================

// Mengisi Pilihan Subtes di Setup Drilling
function updateDrillingSubtesPills() {
  const container = document.getElementById('setup-subtes-group');
  if (!container) return;

  const isTka = AppState.drillingSetup.category === 'tka';
  const subtests = isTka ? TKA_SUBTESTS : UTBK_SUBTESTS;

  container.innerHTML = subtests.map((sub, idx) => {
    const isActive = AppState.drillingSetup.subtes.toLowerCase() === sub.toLowerCase() || (idx === 0 && !AppState.drillingSetup.subtes);
    if (isActive) AppState.drillingSetup.subtes = sub;
    return `
      <button class="pill-option ${isActive ? 'active' : ''}" data-subtes="${sub}">
        ${sub}
      </button>
    `;
  }).join('');

  // Event listener
  container.querySelectorAll('.pill-option').forEach((pill) => {
    pill.addEventListener('click', () => {
      container.querySelectorAll('.pill-option').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.drillingSetup.subtes = pill.dataset.subtes;
      updateDrillingBabDropdown();
      updateDrillingSetupSummary();
    });
  });

  updateDrillingBabDropdown();
}

// Mengisi Dropdown Bab Spesifik sesuai Subtes Terpilih
function updateDrillingBabDropdown() {
  const selectElem = document.getElementById('setup-bab-select');
  if (!selectElem) return;

  const allBabModules = window.EDUMANDIRI_MATERI_BAB || [];
  const { category, subtes } = AppState.drillingSetup;

  // Ambil daftar bab unik dari data materi untuk subtes ini
  const babList = allBabModules
    .filter((m) => m.kategoriUtama === category && m.subtes.toLowerCase() === subtes.toLowerCase() && m.tipe === 'materi')
    .map((m) => m.babJudul);

  // Jika tidak ada bab di materi, ambil dari rangkuman
  const fallbackBabList = babList.length > 0 ? babList : allBabModules
    .filter((m) => m.kategoriUtama === category && m.subtes.toLowerCase() === subtes.toLowerCase())
    .map((m) => m.babJudul);

  let optionsHtml = `<option value="semua">-- Semua Bab (${subtes}) --</option>`;
  fallbackBabList.forEach((bab) => {
    optionsHtml += `<option value="${escapeHtml(bab)}">${escapeHtml(bab)}</option>`;
  });

  selectElem.innerHTML = optionsHtml;
  selectElem.value = 'semua';
  AppState.drillingSetup.bab = 'semua';

  selectElem.onchange = (e) => {
    AppState.drillingSetup.bab = e.target.value;
    updateDrillingSetupSummary();
  };
}

function cleanBabTitle(str) {
  if (!str) return '';
  return str
    .replace(/^(?:bab\s*)?\d+[\.\:\s\-]+/i, '')
    .trim()
    .toLowerCase();
}

function isBabMatching(questionBab, selectedBab) {
  if (!selectedBab || selectedBab === 'semua') return true;
  if (!questionBab) return false;
  const qClean = cleanBabTitle(questionBab);
  const selClean = cleanBabTitle(selectedBab);
  return qClean === selClean || qClean.includes(selClean) || selClean.includes(qClean);
}

// Memperbarui hitungan soal yang cocok di Setup Drilling
function updateDrillingSetupSummary() {
  const allQuestions = AppState.dataset.soal || [];
  const { category, subtes, bab, difficulty } = AppState.drillingSetup;

  const matchingQuestions = allQuestions.filter((q) => {
    const matchCat = !q.kategoriUtama || q.kategoriUtama.toLowerCase() === category.toLowerCase();
    const matchSubtes = !q.subtes || q.subtes.toLowerCase() === subtes.toLowerCase() || (subtes === 'Fisika' && q.mataPelajaran === 'Fisika') || (subtes === 'Matematika Lanjut' && q.mataPelajaran === 'Matematika');
    const matchBab = isBabMatching(q.bab, bab);
    const matchDiff = difficulty === 'semua' || q.kesulitan.toLowerCase() === difficulty.toLowerCase();
    return matchCat && matchSubtes && matchBab && matchDiff;
  });

  const infoElem = document.getElementById('setup-available-info');
  const startBtn = document.getElementById('btn-start-quiz');

  if (infoElem) {
    infoElem.innerHTML = `Tersedia: <strong>${matchingQuestions.length} soal</strong> sesuai kriteria bab`;
  }

  if (startBtn) {
    startBtn.disabled = matchingQuestions.length === 0;
  }
}

// Memulai Sesi Drilling Soal
function startDrillingQuizSession() {
  const allQuestions = AppState.dataset.soal || [];
  const { category, subtes, bab, count, difficulty, timerEnabled, timerDuration } = AppState.drillingSetup;

  let pool = allQuestions.filter((q) => {
    const matchCat = !q.kategoriUtama || q.kategoriUtama.toLowerCase() === category.toLowerCase();
    const matchSubtes = !q.subtes || q.subtes.toLowerCase() === subtes.toLowerCase() || (subtes === 'Fisika' && q.mataPelajaran === 'Fisika') || (subtes === 'Matematika Lanjut' && q.mataPelajaran === 'Matematika');
    const matchBab = isBabMatching(q.bab, bab);
    const matchDiff = difficulty === 'semua' || q.kesulitan.toLowerCase() === difficulty.toLowerCase();
    return matchCat && matchSubtes && matchBab && matchDiff;
  });

  if (pool.length === 0) {
    alert('Tidak ada soal yang tersedia untuk kriteria bab yang dipilih.');
    return;
  }

  pool = fisherYatesShuffle(pool);

  const questionCount = count === 'semua' ? pool.length : Math.min(parseInt(count, 10), pool.length);
  const queue = pool.slice(0, questionCount);

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

  if (timerEnabled) {
    startQuizTimer();
  }

  renderActiveQuizCard();
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

      ${currentQ.bab ? `<div style="font-size:0.78rem; color:var(--primary); font-weight:700; margin-bottom:0.5rem;">📍 Bab: ${escapeHtml(currentQ.bab)}</div>` : ''}

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
// 10. PENGAMBILAN DATA (FETCH ASINKRON & CACHE)
// ============================================================================
async function fetchDataset() {
  try {
    const response = await fetch('./data.json', { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: Gagal memuat data.json`);
    }
    const data = await response.json();
    AppState.dataset.soal = data.soal || [];

    updateHeaderProgress();
    updateDrillingSubtesPills();
    updateDrillingSetupSummary();
    renderMateriSubtesFilters();
    renderMateriView();
    renderPembahasanSubtesFilters();
    renderPembahasanView();
  } catch (error) {
    console.error('Kesalahan saat mengambil data.json:', error);
    renderMateriView();
  }
}

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

        // Update UI Drilling
        document.querySelectorAll('#setup-category-group .pill-option').forEach((p) => {
          p.classList.toggle('active', p.dataset.cat === currentBab.kategoriUtama);
        });
        updateDrillingSubtesPills();
        
        const babSelect = document.getElementById('setup-bab-select');
        if (babSelect) {
          babSelect.value = currentBab.babJudul;
        }
      }
      navigateToView('latihan');
    });
  }

  // 5. Drilling Setup Category Selector (TKA / UTBK)
  document.querySelectorAll('#setup-category-group .pill-option').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#setup-category-group .pill-option').forEach((p) => p.classList.remove('active'));
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
