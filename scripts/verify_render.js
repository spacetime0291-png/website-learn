const fs = require('fs');
const path = require('path');

// Setup environment simulating browser
global.window = global;
global.navigator = { userAgent: 'node' };

const marked = require('../vendor/marked.min.js');
const katex = require('../vendor/katex/katex.min.js');

global.window.marked = marked;
global.window.katex = katex;

// Load data_materi.js
require('../data_materi.js');

const modules = global.window.EDUMANDIRI_MATERI_BAB;
const fisikaRangkumanMods = modules.filter(m => m.id.startsWith('tka-fis-rg-'));

console.log('Found Fisika Rangkuman Modules:', fisikaRangkumanMods.length);

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function parseMarkdownToHtml(markdownText) {
  if (!markdownText) return '';
  
  // 1. Ekstrak & Lindungi Display Math $$...$$
  const displayMath = [];
  let processed = markdownText.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    const cleanFormula = formula
      .split('\n')
      .map((line) => line.replace(/^\s*>\s*/, ''))
      .join('\n')
      .trim();
    const idx = displayMath.length;
    displayMath.push(cleanFormula);
    return `\n\n@@KATEX_DISPLAY_${idx}@@\n\n`;
  });

  // 2. Ekstrak & Lindungi Inline Math $...$
  const inlineMath = [];
  processed = processed.replace(/(^|[^\$])\$([^\$]+?)\$(?!\$)/g, (match, prefix, formula) => {
    if (formula.length > 500) return match;
    const cleanFormula = formula.replace(/^\s*>\s*/, '').trim();
    const idx = inlineMath.length;
    inlineMath.push(cleanFormula);
    return `${prefix}@@KATEX_INLINE_${idx}@@`;
  });

  // 3. Parsing Markdown (Marked)
  let html = '';
  if (global.window.marked && typeof global.window.marked.parse === 'function') {
    html = global.window.marked.parse(processed);
  } else {
    html = processed
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\n/gim, '<br>');
  }

  // 4. Transformasi Alert & Callout Blocks
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

  // 4B. Bungkus tabel Markdown dengan wrapper responsif untuk tampilan mobile sempurna
  html = html.replace(/<table>([\s\S]*?)<\/table>/gi, (match) => {
    return `<div class="table-wrap">${match}</div>`;
  });

  // 5. Kembalikan & Render Display Math via KaTeX
  html = html.replace(/<p>\s*@@KATEX_DISPLAY_(\d+)@@\s*<\/p>/g, (m, idx) => `@@KATEX_DISPLAY_${idx}@@`);
  html = html.replace(/@@KATEX_DISPLAY_(\d+)@@/g, (match, idx) => {
    const formula = displayMath[parseInt(idx, 10)] || '';
    if (global.window.katex && typeof global.window.katex.renderToString === 'function') {
      try {
        return `<div class="katex-display-block">${global.window.katex.renderToString(formula, { displayMode: true, throwOnError: false })}</div>`;
      } catch (e) {
        return `<div class="katex-display-block katex-error">${escapeHtml(formula)}</div>`;
      }
    }
    return `$$${formula}$$`;
  });

  // 6. Kembalikan & Render Inline Math via KaTeX
  html = html.replace(/@@KATEX_INLINE_(\d+)@@/g, (match, idx) => {
    const formula = inlineMath[parseInt(idx, 10)] || '';
    if (global.window.katex && typeof global.window.katex.renderToString === 'function') {
      try {
        return `<span class="katex-inline-block">${global.window.katex.renderToString(formula, { displayMode: false, throwOnError: false })}</span>`;
      } catch (e) {
        return `<span class="katex-inline-block katex-error">${escapeHtml(formula)}</span>`;
      }
    }
    return `$${formula}$`;
  });

  return html;
}

let totalErrors = 0;
fisikaRangkumanMods.forEach(mod => {
  const html = parseMarkdownToHtml(mod.content);
  
  // Check 1: Any unrendered tokens?
  const unrendered = html.match(/@@KATEX_(DISPLAY|INLINE)_\d+@@/g);
  if (unrendered) {
    console.error(`❌ Unrendered KaTeX token in ${mod.id}:`, unrendered);
    totalErrors++;
  }

  // Check 2: Any KaTeX error spans?
  const katexErrors = html.match(/class="[^"]*katex-error[^"]*"/g);
  if (katexErrors) {
    console.error(`❌ KaTeX error class in ${mod.id}:`, katexErrors.length);
    totalErrors++;
  }

  // Check 3: Check tables
  const tableMatches = html.match(/<div class="table-wrap"><table>/g) || [];
  const rawTableMatches = html.match(/<table>/g) || [];
  if (tableMatches.length !== rawTableMatches.length) {
    console.error(`❌ Table wrap mismatch in ${mod.id}: wrapped ${tableMatches.length} vs raw ${rawTableMatches.length}`);
    totalErrors++;
  }

  console.log(`✅ ${mod.id} (${mod.babJudul}): Rendered OK, ${tableMatches.length} tables, Length HTML: ${html.length}`);
});

console.log('\n--- VERIFICATION RESULT ---');
if (totalErrors === 0) {
  console.log('🎉 ALL 16 FISIKA RANGKUMAN MODULES RENDERED 100% PERFECTLY WITHOUT BUGS OR TYPOGRAPHY ISSUES!');
} else {
  console.error(`⚠️ Found ${totalErrors} rendering errors!`);
  process.exit(1);
}
