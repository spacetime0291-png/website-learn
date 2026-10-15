// ============================================================================
// EXPORT TKA MARKDOWN FILES
// Menyimpan 84 Modul Markdown TKA ke folder fisik data_materi/tka/
// ============================================================================

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const fisikaChapters = require('./scripts_gen_fisika.js');
const mtkChapters = require('./scripts_gen_matematika.js');
const fundChapters = require('./scripts_gen_fundamental.js');

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function exportCategory(chapters, subfolderName) {
  const baseDir = path.join(ROOT_DIR, 'data_materi', 'tka', subfolderName);
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

  chapters.forEach(c => {
    const pad = String(c.index).padStart(2, '0');
    const slug = slugify(c.judul);
    const babDir = path.join(baseDir, `bab-${pad}-${slug}`);
    if (!fs.existsSync(babDir)) fs.mkdirSync(babDir, { recursive: true });

    // 1. Materi
    fs.writeFileSync(path.join(babDir, 'materi.md'), c.materi.trim(), 'utf8');
    // 2. Contoh Soal
    fs.writeFileSync(path.join(babDir, 'contoh-soal.md'), c.cs.trim(), 'utf8');
    // 3. Rangkuman
    fs.writeFileSync(path.join(babDir, 'rangkuman.md'), c.rangkuman.trim(), 'utf8');
  });

  console.log(`Exported ${chapters.length} chapters to data_materi/tka/${subfolderName}`);
}

function exportMatematikaLanjut(fundChapters, mtkChapters) {
  const baseDir = path.join(ROOT_DIR, 'data_materi', 'tka', 'matematika-lanjut');
  // Clean existing dir to ensure no stale folders
  if (fs.existsSync(baseDir)) {
    fs.rmSync(baseDir, { recursive: true, force: true });
  }
  fs.mkdirSync(baseDir, { recursive: true });

  // 1 to 5 Fundamental
  fundChapters.forEach((c, idx) => {
    const babIndex = idx + 1;
    const pad = String(babIndex).padStart(2, '0');
    const slug = slugify(c.judul);
    const babDir = path.join(baseDir, `bab-${pad}-${slug}`);
    fs.mkdirSync(babDir, { recursive: true });
    fs.writeFileSync(path.join(babDir, 'materi.md'), c.materi.trim(), 'utf8');
    fs.writeFileSync(path.join(babDir, 'contoh-soal.md'), c.cs.trim(), 'utf8');
    fs.writeFileSync(path.join(babDir, 'rangkuman.md'), c.rangkuman.trim(), 'utf8');
  });

  // 6 to 12 Lanjut
  mtkChapters.forEach((c, idx) => {
    const babIndex = idx + 6;
    const pad = String(babIndex).padStart(2, '0');
    const slug = slugify(c.judul);
    const babDir = path.join(baseDir, `bab-${pad}-${slug}`);
    fs.mkdirSync(babDir, { recursive: true });
    fs.writeFileSync(path.join(babDir, 'materi.md'), c.materi.trim(), 'utf8');
    fs.writeFileSync(path.join(babDir, 'contoh-soal.md'), c.cs.trim(), 'utf8');
    fs.writeFileSync(path.join(babDir, 'rangkuman.md'), c.rangkuman.trim(), 'utf8');
  });

  // Remove old fundamental-matematika directory if exists
  const oldFundDir = path.join(ROOT_DIR, 'data_materi', 'tka', 'fundamental-matematika');
  if (fs.existsSync(oldFundDir)) {
    fs.rmSync(oldFundDir, { recursive: true, force: true });
  }

  console.log(`Exported 12 chapters to data_materi/tka/matematika-lanjut`);
}

exportCategory(fisikaChapters, 'fisika');
exportMatematikaLanjut(fundChapters, mtkChapters);

console.log('All TKA Markdown files successfully exported to data_materi/tka!');
