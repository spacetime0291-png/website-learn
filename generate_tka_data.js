const fs = require('fs');
const path = require('path');
const katex = require('./vendor/katex/katex.min.js');

const tkaFisika = require('./tka_fisika_data.js');
const tkaMtkLanjut = require('./tka_matematika_lanjut_data.js');
const tkaFundamental = require('./tka_fundamental_data.js');

console.log('Validating KaTeX in new TKA modules...');

function validateAllMath(modules, groupName) {
  let mathCount = 0;
  modules.forEach((mod) => {
    const text = mod.content;
    const regex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const math = match[1] || match[2];
      try {
        katex.renderToString(math, { throwOnError: true });
        mathCount++;
      } catch (err) {
        console.error(`❌ KaTeX Error in [${mod.id} - ${mod.babJudul}]: "${math}"`);
        console.error(err.message);
        process.exit(1);
      }
    }
  });
  console.log(`✅ [${groupName}] ${modules.length} modul valid, ${mathCount} formula KaTeX bebas error.`);
}

validateAllMath(tkaFisika, 'Fisika TKA');
validateAllMath(tkaMtkLanjut, 'Matematika Lanjut TKA');
validateAllMath(tkaFundamental, 'Fundamental Matematika');

// Load existing data_materi.js and update kategoriUtama to 'sma'
const DATA_MATERI_PATH = path.join(__dirname, 'data_materi.js');
const rawMateri = fs.readFileSync(DATA_MATERI_PATH, 'utf8');
const sandbox = { window: {} };
require('vm').runInNewContext(rawMateri, sandbox);
const existingModules = sandbox.window.EDUMANDIRI_MATERI_BAB || [];

console.log(`\nExisting modules before update: ${existingModules.length}`);

// Migrate existing modules to SMA
existingModules.forEach((m) => {
  m.kategoriUtama = 'sma';
  // Also prefix or adapt id if needed, but keeping stable IDs with kategoriUtama='sma' works seamlessly
});

const newTkaModules = [...tkaFisika, ...tkaMtkLanjut, ...tkaFundamental];
console.log(`New TKA modules: ${newTkaModules.length}`);

// Combine: TKA modules first, followed by SMA modules
const combinedModules = [...newTkaModules, ...existingModules];
console.log(`Total combined modules: ${combinedModules.length}`);

const header = `// ============================================================================
// EDUMANDIRI: DATABASE MATERI & RANGKUMAN PER BAB (TKA, UTBK, SMA)
// Disusun berurutan 1-to-N dengan format KaTeX LaTeX murni & bebas error escape
// Total: ${combinedModules.length} Modul
// ============================================================================

window.EDUMANDIRI_MATERI_BAB = `;

const output = header + JSON.stringify(combinedModules, null, 2) + ';\n';
fs.writeFileSync(DATA_MATERI_PATH, output, 'utf8');
console.log(`🎉 Berhasil menulis ${combinedModules.length} modul ke ${DATA_MATERI_PATH}!`);
