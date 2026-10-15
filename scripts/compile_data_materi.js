// ============================================================================
// COMPILER DATA MATERI EDUMANDIRI
// Menggabungkan 84 Modul TKA (16 Fisika, 7 MTK Lanjut, 5 Fundamental)
// dengan 137 Modul SMA yang sudah ada -> Total 221 Modul.
// ============================================================================

const fs = require('fs');
const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '..');
const katex = require(path.join(ROOT_DIR, 'vendor/katex/katex.min.js'));

// Load current data_materi.js
global.window = global;
require(path.join(ROOT_DIR, 'data_materi.js'));

const existingAll = window.EDUMANDIRI_MATERI_BAB || [];
const smaModules = existingAll.filter(m => m.kategoriUtama === 'sma');
console.log('Existing SMA Modules:', smaModules.length);

// Load generators
const fisikaChapters = require('./scripts_gen_fisika.js');
const matematikaLanjutChapters = require('./scripts_gen_matematika.js');
const fundamentalChapters = require('./scripts_gen_fundamental.js');

const tkaModules = [];

// 1. Process Fisika (16 Bab)
fisikaChapters.forEach(c => {
  const pad = String(c.index).padStart(2, '0');
  tkaModules.push({
    id: `tka-fis-mat-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Fisika',
    blok: c.blok,
    tipe: 'materi',
    babIndex: c.index,
    babJudul: c.judul,
    content: c.materi
  });
  tkaModules.push({
    id: `tka-fis-cs-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Fisika',
    blok: c.blok,
    tipe: 'contoh-soal',
    babIndex: c.index,
    babJudul: `Variasi Contoh Soal — ${c.judul}`,
    content: c.cs
  });
  tkaModules.push({
    id: `tka-fis-rg-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Fisika',
    blok: c.blok,
    tipe: 'rangkuman',
    babIndex: c.index,
    babJudul: `Rangkuman Rumus Cepat — ${c.judul}`,
    content: c.rangkuman
  });
});

// 2. Process Matematika Lanjut (12 Bab: 5 Fundamental + 7 Lanjut)
// 2A. Fundamental Matematika Lanjut (Bab 1 s.d. 5)
fundamentalChapters.forEach((c, idx) => {
  const babIndex = idx + 1;
  const pad = String(babIndex).padStart(2, '0');
  tkaModules.push({
    id: `tka-mat-mat-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Matematika Lanjut',
    blok: c.blok,
    tipe: 'materi',
    babIndex: babIndex,
    babJudul: c.judul,
    content: c.materi
  });
  tkaModules.push({
    id: `tka-mat-cs-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Matematika Lanjut',
    blok: c.blok,
    tipe: 'contoh-soal',
    babIndex: babIndex,
    babJudul: `Variasi Contoh Soal — ${c.judul}`,
    content: c.cs
  });
  tkaModules.push({
    id: `tka-mat-rg-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Matematika Lanjut',
    blok: c.blok,
    tipe: 'rangkuman',
    babIndex: babIndex,
    babJudul: `Rangkuman Rumus Cepat — ${c.judul}`,
    content: c.rangkuman
  });
});

// 2B. Matematika Lanjut Lanjutan (Bab 6 s.d. 12)
matematikaLanjutChapters.forEach((c, idx) => {
  const babIndex = idx + 6;
  const pad = String(babIndex).padStart(2, '0');
  tkaModules.push({
    id: `tka-mat-mat-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Matematika Lanjut',
    blok: c.blok,
    tipe: 'materi',
    babIndex: babIndex,
    babJudul: c.judul,
    content: c.materi
  });
  tkaModules.push({
    id: `tka-mat-cs-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Matematika Lanjut',
    blok: c.blok,
    tipe: 'contoh-soal',
    babIndex: babIndex,
    babJudul: `Variasi Contoh Soal — ${c.judul}`,
    content: c.cs
  });
  tkaModules.push({
    id: `tka-mat-rg-${pad}`,
    kategoriUtama: 'tka',
    subtes: 'Matematika Lanjut',
    blok: c.blok,
    tipe: 'rangkuman',
    babIndex: babIndex,
    babJudul: `Rangkuman Rumus Cepat — ${c.judul}`,
    content: c.rangkuman
  });
});

console.log('Total TKA Modules generated:', tkaModules.length);

// KaTeX Validator for all TKA modules
let katexChecks = 0;
let katexErrors = 0;

tkaModules.forEach(m => {
  const displayMath = m.content.match(/\$\$([\s\S]*?)\$\$/g) || [];
  displayMath.forEach(f => {
    katexChecks++;
    const clean = f.replace(/^\$\$/, '').replace(/\$\$$/, '').trim();
    try {
      katex.renderToString(clean, { displayMode: true, throwOnError: true });
    } catch (err) {
      console.error(`[KaTeX Error in ${m.id} (display)]:`, clean, err.message);
      katexErrors++;
    }
  });

  const inlineMath = m.content.match(/(^|[^\$])\$([^\$]+?)\$(?!\$)/g) || [];
  inlineMath.forEach(f => {
    katexChecks++;
    const clean = f.replace(/^[^\$]*\$/, '').replace(/\$$/, '').trim();
    try {
      katex.renderToString(clean, { displayMode: false, throwOnError: true });
    } catch (err) {
      console.error(`[KaTeX Error in ${m.id} (inline)]:`, clean, err.message);
      katexErrors++;
    }
  });
});

console.log(`KaTeX check complete: ${katexChecks} formulas examined. Errors: ${katexErrors}`);

if (katexErrors > 0) {
  console.error('Aborting compilation due to KaTeX errors.');
  process.exit(1);
}

// Merge TKA and SMA
const combinedModules = [...tkaModules, ...smaModules];
console.log('Total Combined Modules:', combinedModules.length);

const outputJs = `// ============================================================================
// EDUMANDIRI: DATABASE MATERI & RANGKUMAN PER BAB (TKA, UTBK, SMA)
// Disusun berurutan dengan format KaTeX LaTeX murni & bebas error escape
// Total: ${combinedModules.length} Modul (${tkaModules.length} TKA + ${smaModules.length} SMA)
// ============================================================================

window.EDUMANDIRI_MATERI_BAB = ${JSON.stringify(combinedModules, null, 2)};
`;

fs.writeFileSync(path.join(ROOT_DIR, 'data_materi.js'), outputJs, 'utf8');
console.log('Successfully wrote data_materi.js with', combinedModules.length, 'modules!');
