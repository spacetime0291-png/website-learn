const fs = require('fs');
const path = require('path');

const DATA_MATERI_JS = path.join(__dirname, 'data_materi.js');

const SYNC_MAP = {
  // Fisika Contoh Soal (Bab 1-5)
  'tka-fis-cs-01': path.join(__dirname, 'data_materi', 'tka', 'fisika', 'contoh-soal', 'bab-01-contoh-soal-variasi.md'),
  'tka-fis-cs-02': path.join(__dirname, 'data_materi', 'tka', 'fisika', 'contoh-soal', 'bab-02-contoh-soal-variasi.md'),
  'tka-fis-cs-03': path.join(__dirname, 'data_materi', 'tka', 'fisika', 'contoh-soal', 'bab-03-contoh-soal-variasi.md'),
  'tka-fis-cs-04': path.join(__dirname, 'data_materi', 'tka', 'fisika', 'contoh-soal', 'bab-04-contoh-soal-variasi.md'),
  'tka-fis-cs-05': path.join(__dirname, 'data_materi', 'tka', 'fisika', 'contoh-soal', 'bab-05-contoh-soal-variasi.md'),

  // Matematika Wajib Bab 15 (Pencacahan dan Peluang)
  'tka-mtkw-mat-15': path.join(__dirname, 'data_materi', 'tka', 'matematika-wajib', 'materi', 'bab-15-aturan-pencacahan-dan-peluang.md'),
  'tka-mtkw-rang-15': path.join(__dirname, 'data_materi', 'tka', 'matematika-wajib', 'rangkuman', 'bab-15-aturan-pencacahan-dan-peluang.md'),
  'tka-mtkw-cs-15': path.join(__dirname, 'data_materi', 'tka', 'matematika-wajib', 'contoh-soal', 'bab-15-contoh-soal-variasi.md'),
};

let src = fs.readFileSync(DATA_MATERI_JS, 'utf8');
const sandbox = { window: {} };
require('vm').runInNewContext(src, sandbox);
const modules = sandbox.window.EDUMANDIRI_MATERI_BAB;

let updated = 0;
modules.forEach((mod) => {
  if (SYNC_MAP[mod.id]) {
    const filePath = SYNC_MAP[mod.id];
    if (fs.existsSync(filePath)) {
      const mdContent = fs.readFileSync(filePath, 'utf8');
      mod.content = mdContent;
      updated++;
      console.log(`✅ Synced ${mod.id} (${mdContent.length} bytes)`);
    } else {
      console.warn(`⚠️ File tidak ditemukan: ${filePath}`);
    }
  }
});

const outputHeader = `// ============================================================================
// EDUMANDIRI: DATABASE MATERI & RANGKUMAN PER BAB (TKA & UTBK)
// Disusun berurutan 1-to-N dengan format KaTeX LaTeX murni & bebas error escape
// Total: ${modules.length} Modul (Termasuk Variasi Contoh Soal)
// ============================================================================

window.EDUMANDIRI_MATERI_BAB = `;

const outputContent = outputHeader + JSON.stringify(modules, null, 2) + ';\n';
fs.writeFileSync(DATA_MATERI_JS, outputContent, 'utf8');
console.log(`\n🎉 Selesai! ${updated} modul disinkronkan ke data_materi.js.`);
