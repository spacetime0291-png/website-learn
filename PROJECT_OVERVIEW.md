# EduMandiri — Dokumentasi Arsitektur & Informasi Proyek Lengkap
> **Tujuan Dokumen:** Berkas acuan komprehensif bagi developer dan AI assistant pada sesi baru agar dapat langsung memahami seluruh sistem, struktur file, aturan format, dan logika tanpa perlu membaca ulang ratusan file sumber (*menghemat token dan waktu kontekstualisasi*).

---

## 1. Ikhtisar Proyek (Project Overview)
* **Nama Aplikasi:** EduMandiri
* **Fungsi Utama:** Platform belajar mandiri *mobile-first* dan *offline-ready* untuk persiapan:
  1. **TKA Saintek:** Fisika (30 Bab), Matematika Lanjut (17 Bab), Matematika Wajib.
  2. **UTBK SNBT:** 7 Subtes (Penalaran Umum, PPU, PBM, PK, Literasi B. Indonesia, Literasi B. Inggris, Penalaran Matematika).
* **Filosofi Arsitektur:** **Zero-Build Vanilla Web Application**.
  * Tidak menggunakan bundler (Webpack/Vite/Rollup) dan tidak memerlukan runtime Node.js saat produksi.
  * Murni Vanilla HTML5, CSS3 kustom, dan Vanilla JavaScript (ES6+).
  * 100% Offline-Ready menggunakan Service Worker (`sw.js`) dan pustaka lokal vendor (KaTeX + Marked.js tanpa CDN).

---

## 2. Struktur Direktori & Tanggung Jawab File
```text
d:/learn/
├── index.html                 # Entry-point SPA: struktur semantik, header, 3 view container, mobile nav, modal
├── style.css                  # Desain tema mobile-first, dark/light vars, typography, layout rapat, callout system
├── app.js                     # SPA engine: router, state AppState, KaTeX shielding, quiz engine, localStorage
├── data_materi.js             # Database materi, rangkuman & contoh soal client-side (window.EDUMANDIRI_MATERI_BAB = 87 modul)
├── data.json                  # Bank soal drilling (27 soal lengkap dengan kunci, LaTeX, subtes, bab, pembahasan)
├── sw.js                      # Service Worker PWA (Cache-first offline strategy, versi: edumandiri-cache-v12)
├── manifest.json              # Web App Manifest untuk instalasi PWA di Android/iOS/Desktop
├── icon.svg                   # Icon logo SVG EduMandiri
├── PROJECT_OVERVIEW.md        # File ini (sumber pengetahuan tunggal sesi baru)
│
├── vendor/                    # Dependensi offline lokal (tidak mengandalkan CDN)
│   ├── marked.min.js          # Parser Markdown ke HTML
│   └── katex/                 # Engine perender formula matematika/fisika LaTeX offline
│       ├── katex.min.css
│       ├── katex.min.js
│       ├── auto-render.min.js
│       └── fonts/             # Seluruh font WOFF2 KaTeX
│
├── data_materi/               # Sumber berkas Markdown mentah per bab
│   ├── tka/
│   │   ├── fisika/
│   │   │   ├── materi/        # 30 file bab materi: bab-01-...md s.d. bab-30-...md
│   │   │   ├── rangkuman/     # 30 file bab rangkuman formula
│   │   │   └── contoh-soal/   # Kumpulan seluruh variasi contoh soal per bab (Bab 1-5 aktif)
│   │   ├── matematika-lanjut/
│   │   │   ├── materi/        # Materi Lengkap Bab 1-5 (bab-01-...md s.d. bab-05-...md)
│   │   │   └── rangkuman/     # 17 file bab rangkuman: bab-01-...md s.d. bab-17-...md
│   │   └── matematika-wajib/
│   └── utbk/                  # Struktur 7 subtes UTBK (01 s.d. 07)
└── data_soal/                 # Arsip soal mentah per subtes
```

---

## 3. Alur SPA & State Management (`app.js`)

### A. Objek State Global (`AppState`)
```javascript
const AppState = {
  currentView: 'materi',           // 'materi' | 'materi-detail' | 'latihan' | 'pembahasan'
  mainCategory: 'tka',             // 'tka' | 'utbk'
  materiMode: 'materi',            // 'materi' | 'rangkuman' | 'contoh-soal'
  materiSubtesFilter: 'semua',     // 'semua' | 'Fisika' | 'Matematika Lanjut' | dll.
  currentReadingBabId: null,       // ID modul yang sedang dibaca di view reader
  dataset: { soal: [] },           // Data soal dari data.json
  drillingSetup: {                 // Konfigurasi wizard drilling kuis
    category: 'tka',
    subtes: 'Fisika',
    bab: 'semua',
    difficulty: 'semua',
    questionCount: 10,
    timeLimitMinutes: 15
  },
  activeQuiz: { ... },             // State kuis aktif: timer, index soal, jawaban dipilih, score
  userAnswers: {},                 // Riwayat jawaban pengguna (tersimpan di localStorage)
  completedQuestionIds: []         // ID soal yang telah diselesaikan
};
```

### B. Navigasi & View Routing
1. **View 1: `view-materi` (`#materi`)**:
   * Mode switch: Materi Lengkap vs Rangkuman Rumus.
   * Filter chip subtes dinamis.
   * Grid kartu bab yang rapat dan responsif.
2. **View 1B: `view-materi-detail` (`#baca-[id]`)**:
   * Reader layar penuh (bukan popup modal melayang).
   * Header sticky dengan breadcrumbs subtes & nomor bab.
   * Render Markdown + KaTeX + Callout visual interaktif.
3. **View 2: `view-latihan` (`#latihan`)**:
   * Setup wizard: pilih subtes, bab spesifik, kesulitan, jumlah soal, dan timer.
   * Interactive quiz card dengan navigasi dinamis dan kunci jawaban seketika.
4. **View 3: `view-pembahasan` (`#pembahasan`)**:
   * Daftar soal yang telah dikerjakan atau seluruh bank soal.
   * Badge status benar/salah, kunci, dan langkah pembahasan LaTeX terperinci.

---

## 4. Sistem KaTeX Math & Markdown Shielding (PENTING)
> [!IMPORTANT]
> **Akar Masalah Klasik:**
> `marked.js` akan menafsirkan karakter `_` (subskrip rumus seperti `$v_0$`) sebagai `<em>` miring, karakter `*` sebagai penekanan, dan `\` sebagai escape markdown. Hal ini menghancurkan sintaks LaTeX sebelum KaTeX sempat merendernya.

### Solusi Implementasi di `app.js` (`parseMarkdownToHtml`):
1. **Fase 1: Pre-Shielding Token**:
   * Display math `$$...$$` diekstrak ke array dan diganti dengan token `\n\n@@KATEX_DISPLAY_{idx}@@\n\n`.
   * Inline math `$...$` diekstrak ke array dan diganti dengan token `${prefix}@@KATEX_INLINE_{idx}@@`.
2. **Fase 2: Markdown Parsing**:
   * String yang telah diamankan diproses oleh `window.marked.parse(processed)`.
3. **Fase 3: Callout Transformation**:
   * Tag `<blockquote>` GitHub alert dipetakan ke kotak visual `.callout-box`.
4. **Fase 4: KaTeX Pre-Rendering**:
   * Token diganti langsung dengan hasil HTML KaTeX via `window.katex.renderToString(formula, { displayMode, throwOnError: false })`.
   * Display math dibungkus `<div class="katex-display-block">...</div>`.
   * Inline math dibungkus `<span class="katex-inline-block">...</span>`.
5. **Fase 5: Auto-Render Guard**:
   * Pada pemanggilan `window.renderMathInElement(container, options)`, ditambahkan:
     `ignoredClasses: ['katex', 'katex-display-block', 'katex-inline-block', 'katex-html']`
     sehingga KaTeX tidak merender ulang formula yang sudah terformat.

### Aturan Penulisan & Rendering KaTeX:
* **Gunakan notasi isotop standar:** `{}_{Z}^{A}\text{X}` (Contoh: `{}_{92}^{235}\text{U}`, `{}_{2}^{4}\text{He}`, `{}_{-1}^{0}\text{e}`).
* **JANGAN gunakan notasi usang:** `\,_Z^A\text{X}` (akan memicu `KaTeX parse error: Got group of unknown type: 'internal'`).
* **Proteksi Simbol Akar ($\sqrt{...}$):** KaTeX merender lambang akar dan delimiter menggunakan inline `<svg>` berdimensi dinamis dengan `height: inherit; position: absolute; width: 100%`. CSS container/markdown dilarang keras menimpa `.katex svg` dengan `height: auto` atau `margin`, karena akan meremukkan tinggi SVG akar menjadi 0 pixel (akar tidak tampak).

---

## 5. Standar Penamaan Bab Berurutan (1-to-N)

Semua komponen (kartu materi, reader breadcrumb, dropdown drilling, dan pembahasan) wajib mematuhi penomoran berurutan:

### A. TKA Fisika (Bab 1 s.d. Bab 30)
* Bab 1: Pengukuran, Besaran, Dimensi, dan Angka Penting
* Bab 2: Vektor
* Bab 3: Kinematika Gerak Lurus (GLB dan GLBB)
* Bab 4: Kinematika Gerak Parabola dan Melingkar
* Bab 5: Dinamika Gerak (Hukum Newton)
* Bab 6: Usaha dan Energi
* Bab 7: Momentum, Impuls, dan Tumbukan
* Bab 8: Dinamika Rotasi dan Kesetimbangan Benda Tegar
* Bab 9: Gravitasi Universal Newton
* Bab 10: Elastisitas dan Getaran Harmonik Sederhana (GHS)
* **Bab 11: Fluida Statis** *(dipisah dari Fluida Dinamis)*
* **Bab 12: Fluida Dinamis**
* Bab 13: Suhu, Pemuaian, dan Kalorimetri
* Bab 14: Teori Kinetik Gas Ideal
* Bab 15: Hukum Termodinamika dan Siklus Mesin
* Bab 16: Gelombang Berjalan dan Gelombang Stasioner
* Bab 17: Gelombang Bunyi
* Bab 18: Optik Geometri dan Alat-Alat Optik
* Bab 19: Optik Fisis (Gelombang Cahaya)
* Bab 20: Listrik Statis (Elektrostatika)
* Bab 21: Listrik Arus Searah (DC)
* Bab 22: Medan Magnetik dan Gaya Lorentz
* Bab 23: Induksi Elektromagnetik
* Bab 24: Rangkaian Arus Bolak-Balik (AC)
* Bab 25: Spektrum Gelombang Elektromagnetik (GEM)
* Bab 26: Teori Relativitas Khusus
* Bab 27: Gejala Kuantum dan Dualisme Gelombang-Partikel
* Bab 28: Teori Model Atom
* Bab 29: Fisika Inti, Radioaktivitas, dan Radioisotop
* **Bab 30: Teknologi Digital dan Sumber Energi Terbarukan** *(gabungan)*

### B. TKA Matematika Lanjut (Bab 1 s.d. Bab 17)
* Bab 1: Eksponen & Bentuk Akar
* Bab 2: Logaritma
* Bab 3: Persamaan & Fungsi Kuadrat
* Bab 4: Nilai Mutlak & Pertidaksamaan
* Bab 5: Sistem Persamaan & Program Linear
* Bab 6: Operasi & Sifat Matriks
* Bab 7: Vektor di $\mathbb{R}^2$ & $\mathbb{R}^3$
* Bab 8: Irisan Kerucut (Lingkaran, Parabola, Elips, Hiperbola)
* Bab 9: Geometri Ruang (Dimensi Tiga)
* Bab 10: Transformasi Geometri
* Bab 11: Trigonometri Dasar & Analitis
* Bab 12: Limit Fungsi, Asimtotik, & Kekontinuan
* Bab 13: Turunan (Diferensial) & Aplikasi
* Bab 14: Integral & Aplikasi
* Bab 15: Kaidah Pencacahan & Teori Peluang
* Bab 16: Statistika Deskriptif Data Kelompok
* Bab 17: Statistika Inferensial & Distribusi Peluang

### C. Helper Pemfilteran Judul Bab di `app.js`
Untuk mencocokkan bab kuis dengan judul materi secara tangguh:
```javascript
function cleanBabTitle(str) {
  if (!str) return '';
  return str.replace(/^(?:bab\s*)?\d+[\.\:\s\-]+/i, '').trim().toLowerCase();
}
```

---

## 6. Standar Tipografi & Format Catatan Materi (*Pedagogical Formatting*)

Materi didesain menggunakan pendekatan *modern high-school cheat-sheet / Cornell notes* agar informatif, visual, dan tidak membuang ruang layar:

### Sistem Callout Box di Markdown & CSS:
| Sintaks Markdown | Kelas CSS | Ikon & Warna | Fungsi Utama |
| :--- | :--- | :---: | :--- |
| `> [!NOTE]` atau `> 📐 **Rumus**` | `.callout-formula` | 📐 Indigo | Menampilkan persamaan utama, asumsi, & tabel satuan SI. |
| `> [!WARNING]` atau `> ⚠️ **Jebakan**` | `.callout-warning` | ⚠️ Amber | Menyorot kesalahan fatal/jebakan ujian (misal: tanda minus perlambatan, konversi $\text{km/jam}$). |
| `> [!TIP]` atau `> 💡 **Trik Cepat**` | `.callout-tip` | 💡 Emerald | Rumus praktis, sudut istimewa, dan shortcut berhitung cepat. |
| `> [!EXAMPLE]` atau `> 📝 **Contoh**` | `.callout-example` | 📝 Sky Blue | Soal kontekstual sekolah + langkah penyelesaian numerik langsung. |

### Prinsip Layout:
* Font stack sistem yang bersih (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`).
* Spasi vertikal rapat (`line-height: 1.52`, margin heading hemat tempat).
* Tabel data selalu dibungkus `.table-responsive` dengan scroll horizontal ramah perangkat mobile.

---

## 7. Pemeliharaan & Prosedur Update (Maintenance Guide)

### A. Jika Mengedit File Markdown (`data_materi/`):
Jangan menulis string JS dengan template literal yang mengandung karakter backslash langsung (`\frac` akan terbaca sebagai form-feed `\x0c`). Selalu gunakan skrip Node.js yang membaca file `.md` via `fs.readFileSync(path, 'utf8')` dan menyimpannya ke `data_materi.js` melalui `JSON.stringify()`.

### B. Validasi Formula KaTeX:
Jalankan skrip audit cepat:
```javascript
const katex = require('./vendor/katex/katex.min.js');
// Pastikan tidak ada formula yang melempar exception pada renderToString()
```

### C. Jika Mengubah JS / CSS / Aset:
Wajib menaikkan versi cache di `sw.js`:
```javascript
const CACHE_NAME = 'edumandiri-cache-v4'; // Naikkan ke v5 dst.
```

---

## 8. Panduan Cepat untuk AI Asisten Sesi Berikutnya
1. **Langsung baca dokumen ini (`PROJECT_OVERVIEW.md`)** sebelum melakukan modifikasi apapun.
2. **Jangan menginstal paket npm baru** untuk runtime klien; proyek ini adalah zero-dependency web app yang berjalan murni di peramban.
3. **Selalu pastikan penomoran bab 1..30 (Fisika) dan 1..17 (MTK Lanjut)** tetap berurutan dan sinkron antara `data_materi.js`, `data.json`, dan antarmuka pengguna.
4. **Pertahankan KaTeX Shielding di `app.js`** agar parsing formula tidak rusak oleh Markdown parser.
