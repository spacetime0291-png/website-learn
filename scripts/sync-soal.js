/**
 * EduMandiri - Database Soal Synchronization & KaTeX Validator Tool
 * 
 * Penggunaan:
 *   node sync-soal.js         -> Validasi seluruh soal & sinkronkan data_soal.js ke data.json
 *   node sync-soal.js --from-json -> Sinkronkan dari data.json ke data_soal.js
 */

const fs = require('fs');
const path = require('path');
const katex = require('./vendor/katex/katex.min.js');

const DATA_SOAL_JS = path.join(__dirname, 'data_soal.js');
const DATA_JSON = path.join(__dirname, 'data.json');

const args = process.argv.slice(2);
const fromJson = args.includes('--from-json');

console.log('================================================================');
console.log('       EDUMANDIRI: DATABASE SOAL SYNC & KATEX VALIDATOR         ');
console.log('================================================================');

let soalList = [];

if (fromJson) {
  console.log('Mode: Membaca dari data.json...');
  const raw = fs.readFileSync(DATA_JSON, 'utf8');
  const parsed = JSON.parse(raw);
  soalList = parsed.soal || [];
} else {
  console.log('Mode: Membaca dari database data_soal.js...');
  const raw = fs.readFileSync(DATA_SOAL_JS, 'utf8');
  const sandbox = { window: {} };
  require('vm').runInNewContext(raw, sandbox);
  soalList = sandbox.window.EDUMANDIRI_SOAL_BANK || [];
}

console.log(`Ditemukan ${soalList.length} soal dalam database.\n`);

// 1. Validasi Integritas Struktur Soal & KaTeX Formula
let totalMathChecked = 0;
let errors = 0;

soalList.forEach((soal, idx) => {
  const prefix = `[Soal #${idx + 1} | ${soal.id}]`;

  // Cek field wajib
  if (!soal.id || !soal.subtes || !soal.bab || !soal.subBabId || !soal.subBab || !soal.pertanyaan || !Array.isArray(soal.pilihan)) {
    console.error(`❌ ${prefix} Struktur data tidak lengkap (wajib: id, subtes, bab, subBabId, subBab, pertanyaan, pilihan)!`);
    errors++;
    return;
  }

  // Helper validasi KaTeX dalam teks
  function validateMath(text, label) {
    if (!text) return;
    const regex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      totalMathChecked++;
      const formula = (m[1] !== undefined ? m[1] : m[2]).trim();
      if (!formula) continue;
      try {
        katex.renderToString(formula, { displayMode: m[1] !== undefined, throwOnError: true });
      } catch (e) {
        errors++;
        console.error(`❌ ${prefix} KaTeX error di ${label} [${formula.substring(0, 40)}...]: ${e.message}`);
      }
    }
  }

  validateMath(soal.pertanyaan, 'Pertanyaan');
  soal.pilihan.forEach((p, pIdx) => {
    validateMath(p, `Pilihan [${pIdx}]`);
  });
  validateMath(soal.pembahasan, 'Pembahasan');
});

console.log(`Pemeriksaan KaTeX selesai: ${totalMathChecked} formula diperiksa.`);

if (errors > 0) {
  console.error(`\n⚠️ Ditemukan ${errors} error pada soal. Perbaiki sebelum menyinkronkan!`);
  process.exit(1);
}

console.log('✅ Semua soal valid dan 100% bebas error KaTeX!\n');

// 2. Sinkronisasi Antara File
if (fromJson) {
  // Simpan ke data_soal.js
  const header = `// ============================================================================
// EDUMANDIRI: DATABASE BANK SOAL LATIHAN & DRILLING (TKA & UTBK)
// Disusun sebagai Database Client-Side JavaScript Offline-Ready
// Bebas dependensi network fetch HTTP & tidak memerlukan GitHub fetch
// Total: ${soalList.length} Soal Latihan Terverifikasi
// ============================================================================

window.EDUMANDIRI_SOAL_BANK = `;
  fs.writeFileSync(DATA_SOAL_JS, header + JSON.stringify(soalList, null, 2) + ';\n', 'utf8');
  console.log(`🎉 Berhasil disinkronkan ke ${DATA_SOAL_JS}!`);
} else {
  // Simpan ke data.json (sebagai backup / kompatibilitas)
  fs.writeFileSync(DATA_JSON, JSON.stringify({ soal: soalList }, null, 2) + '\n', 'utf8');
  console.log(`🎉 Berhasil disinkronkan ke ${DATA_JSON}!`);
}

console.log('================================================================');
