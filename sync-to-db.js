const fs = require('fs');
const path = require('path');

const DATA_MATERI_JS = path.join(__dirname, 'data_materi.js');
const CONTOH_SOAL_DIR = path.join(__dirname, 'data_materi', 'tka', 'fisika', 'contoh-soal');

const CS_FILES = {
  'tka-fis-cs-01': 'bab-01-contoh-soal-variasi.md',
  'tka-fis-cs-02': 'bab-02-contoh-soal-variasi.md',
  'tka-fis-cs-03': 'bab-03-contoh-soal-variasi.md',
  'tka-fis-cs-04': 'bab-04-contoh-soal-variasi.md',
  'tka-fis-cs-05': 'bab-05-contoh-soal-variasi.md',
};

let src = fs.readFileSync(DATA_MATERI_JS, 'utf8');
const sandbox = { window: {} };
require('vm').runInNewContext(src, sandbox);
const modules = sandbox.window.EDUMANDIRI_MATERI_BAB;

let updated = 0;
modules.forEach((mod) => {
  if (CS_FILES[mod.id]) {
    const filePath = path.join(CONTOH_SOAL_DIR, CS_FILES[mod.id]);
    const mdContent = fs.readFileSync(filePath, 'utf8');
    mod.content = mdContent;
    updated++;
    console.log(`✅ Synced ${mod.id} (${mdContent.length} bytes)`);
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
console.log(`\n🎉 Selesai! ${updated} modul contoh soal disinkronkan ke data_materi.js.`);
