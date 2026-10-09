# EduMandiri — Dokumentasi Arsitektur & Informasi Proyek Lengkap
> **Tujuan Dokumen:** Berkas acuan komprehensif bagi developer dan AI assistant pada sesi baru agar dapat langsung memahami seluruh sistem, struktur file, aturan format, dan logika tanpa perlu membaca ulang ratusan file sumber (*menghemat token dan waktu kontekstualisasi*).

---

## 1. Ikhtisar Proyek (Project Overview)
* **Nama Aplikasi:** EduMandiri
* **Fungsi Utama:** Platform belajar mandiri *mobile-first* dan *offline-ready* untuk persiapan:
  1. **TKA Saintek:** Fisika (30 Bab), Matematika Lanjut (17 Bab), Matematika Wajib.
  2. **UTBK SNBT:** 7 Subtes (Penalaran Umum, PPU, PBM, PK, Literasi B. Indonesia, Literasi B. Inggris, Penalaran Matematika).
* **Fitur Utama Terkini:**
  * **Daftar Bab Minimalis (Accordion Clean List):** Menampilkan daftar bab bersih dengan ikon/nomor minimalis. Opsi modul (*Materi Lengkap*, *Variasi Soal*, *Rangkuman*, dan *Latihan Kuis*) tersimpan rapi dan muncul saat kartu bab diklik (accordion).
  * **Minimalist Reader Bottom Dock:** Bilah navigasi melayang adaptif di bagian bawah saat membaca materi/rangkuman, menggantikan footer statis/navigasi umum. Memungkinkan pindah bab (Prev/Next) dan beralih instan antar-modul (*Materi*, *Variasi*, *Rangkuman*, *Latihan*) secara ergonomis di HP maupun laptop tanpa memakan ruang baca.
  * **Drilling Dashboard Minimalis & Paket Soal Variasi:** Antarmuka drilling modern tanpa tumpukan halaman per mapel, dilengkapi kurasi **Paket Soal Variasi** anti-repetisi agar siswa dapat menuntaskan seluruh ragam model soal tanpa terjebak pada soal yang repetitif, disertai modal informasi edukatif.
  * **Variasi Contoh Soal Lengkap:** Bab 1 s.d. Bab 5 Fisika aktif dengan total 73 variasi soal, serta **Bab 15 Matematika Wajib (Aturan Pencacahan & Teori Peluang)** aktif dengan **30 variasi soal lengkap**, semuanya 100% tervalidasi bebas KaTeX error.
  * **Pedagogical Fluid Typography:** Tipografi adaptif berbasis ukuran layar (`clamp()`), pembatasan kolom baca maksimal 72 karakter (`max-width: 72ch`), line-height lega (`1.72`), dan visual anchor penomoran langkah.
  * **Database Bank Soal Klien & IndexedDB:** Bank soal tersimpan langsung di `data_soal.js` (`window.EDUMANDIRI_SOAL_BANK` = 53 soal) dan disinkronkan ke IndexedDB (`EduMandiri_DB`). Tidak memerlukan `fetch` network HTTP atau GitHub push/fetch untuk pengoperasian dan pembaruan lokal.
* **Filosofi Arsitektur:** **Zero-Build Vanilla Web Application**.
  * Tidak menggunakan bundler (Webpack/Vite/Rollup) dan tidak memerlukan runtime Node.js saat produksi.
  * Murni Vanilla HTML5, CSS3 kustom, dan Vanilla JavaScript (ES6+).
  * 100% Offline-Ready menggunakan Service Worker (`sw.js`, `edumandiri-cache-v18`) dan pustaka lokal vendor (KaTeX + Marked.js tanpa CDN). Kompatibel dibuka langsung via protokol `file:///` maupun server web.

---

## 2. Struktur Direktori & Tanggung Jawab File
```text
d:/web/learn/
├── index.html                 # Entry-point SPA: struktur semantik, header, 3 view container, katalog bab, reader, nav
├── style.css                  # Fluid Typography vars, tema mobile-first, dark/light vars, layout rapat, callout system
├── app.js                     # SPA engine: router, AppState, KaTeX shielding, quiz engine, IndexedDB loader, localStorage
├── data_materi.js             # Database materi, rangkuman & contoh soal client-side (window.EDUMANDIRI_MATERI_BAB = 137 modul)
├── data_soal.js               # Database bank soal client-side (window.EDUMANDIRI_SOAL_BANK = 53 soal, zero-fetch)
├── data.json                  # Cadangan JSON bank soal drilling (sinkron dengan data_soal.js via sync-soal.js)
├── sync-soal.js               # Tool sinkronisasi database soal & validator KaTeX otomatis
├── sync-to-db.js              # Tool sinkronisasi berkas markdown materi & contoh soal ke data_materi.js
├── sw.js                      # Service Worker PWA (Cache-first offline strategy, versi: edumandiri-cache-v18)
├── manifest.json              # Web App Manifest untuk instalasi PWA di Android/iOS/Desktop
├── icon.svg                   # Icon logo SVG EduMandiri
├── .nojekyll                  # Penanda bypass pemrosesan Jekyll di GitHub Pages
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
│   │   │   └── contoh-soal/   # Seluruh variasi contoh soal per bab (Bab 1-5 aktif & tervalidasi 0 error)
│   │   ├── matematika-lanjut/
│   │   │   ├── materi/        # Materi Lengkap Bab 1-5 (bab-01-...md s.d. bab-05-...md)
│   │   │   └── rangkuman/     # 17 file bab rangkuman: bab-01-...md s.d. bab-17-...md
│   │   └── matematika-wajib/
│   └── utbk/                  # Struktur 7 subtes UTBK (01 s.d. 07)
└── data_soal/                 # Arsip struktur direktori soal mentah per subtes
```

---

## 3. Alur SPA & State Management (`app.js`)

### A. Objek State Global (`AppState`)
```javascript
const AppState = {
  currentView: 'materi',           // 'materi' | 'materi-detail' | 'latihan' | 'pembahasan'
  mainCategory: 'tka',             // 'tka' | 'utbk'
  materiSubtesFilter: 'semua',     // 'semua' | 'Fisika' | 'Matematika Lanjut' | dll.
  currentReadingBabId: null,       // ID modul yang sedang dibaca di view reader
  dataset: { 
    materi: [],                    // Dimuat dari window.EDUMANDIRI_MATERI_BAB
    soal: []                       // Dimuat dari window.EDUMANDIRI_SOAL_BANK / IndexedDB
  },
  drillingSetup: {                 // Konfigurasi wizard drilling kuis
    category: 'tka',
    subtes: 'Fisika',
    bab: 'semua',
    difficulty: 'semua',
    count: '5',
    timerEnabled: true,
    timerDuration: 'auto'
  },
  activeQuiz: { ... },             // State kuis aktif: timer, index soal, jawaban dipilih, score
  userAnswers: {},                 // Riwayat jawaban pengguna (tersimpan di localStorage)
  completedQuestionIds: []         // ID soal yang telah diselesaikan
};
```

### B. Navigasi & View Routing
1. **View 1: `view-materi` (`#materi`)**:
   * **Katalog Bab Terpadu (`.bab-card`)**: Mengelompokkan semua modul berdasarkan `subtes` dan `babIndex`.
   * **4 Pilihan Aksi Per Bab**:
     - 📖 *Materi Lengkap* (membuka pembaca materi teks)
     - 🎯 *Variasi Soal* (membuka seluruh variasi contoh soal dan pembahasan langkah)
     - 📑 *Rangkuman* (membuka intisari rumus dan callout penting)
     - ⚡ *Latihan Kuis* (langsung meluncur ke wizard latihan kuis bab tersebut via `startDrillingForBab()`)
   * Filter chip subtes dinamis (Fisika, Matematika Lanjut, dll.).
2. **View 1B: `view-materi-detail` (`#baca-[id]`)**:
   * Reader layar penuh (*full-page reader*, bukan popup modal melayang).
   * **In-Reader Mode Switcher**: Tab `[📖 Materi] [🎯 Variasi Soal] [📑 Rangkuman]` di header atas reader untuk beralih mode pada bab yang sama secara instan.
   * Header sticky dengan breadcrumbs subtes, nomor bab, judul bab, dan navigasi bab sebelumnya/berikutnya di bilah bawah.
   * Render Markdown + KaTeX Shielding + Callout visual interaktif.
3. **View 2: `view-latihan` (`#latihan`)**:
   * Setup wizard: pilih subtes, bab spesifik, kesulitan, jumlah soal, dan timer.
   * Interactive quiz card dengan navigasi dinamis, radio opsi pilihan, dan kunci jawaban seketika.
4. **View 3: `view-pembahasan` (`#pembahasan`)**:
   * Daftar soal yang telah dikerjakan atau seluruh bank soal.
   * Badge status benar/salah, kunci, dan langkah pembahasan LaTeX terperinci.

---

## 4. Sistem Database Bank Soal (`data_soal.js` + IndexedDB)

### A. Menghapus Ketergantungan Network Fetch
* Sebelumnya, soal dimuat asinkron via `fetch('./data.json')`. Ini memerlukan push ke GitHub / koneksi remote, dan sering gagal saat dibuka via protokol `file:///` karena aturan CORS peramban.
* **Solusi Terpasang:**
  1. Data bank soal dikonversi ke file JavaScript klien: [`data_soal.js`](file:///d:/web/learn/data_soal.js) yang mendefinisikan array global `window.EDUMANDIRI_SOAL_BANK`.
  2. Dimuat di [`index.html`](file:///d:/web/learn/index.html) tepat sebelum [`app.js`](file:///d:/web/learn/app.js) sehingga langsung berada di memori saat halaman dimuat (*zero network delay*).
  3. Disinkronkan otomatis di latar belakang ke **IndexedDB** browser (`EduMandiri_DB`, store: `bank_soal`) dengan index `subtes`, `bab`, dan `kategoriUtama`.
  4. Tersedia API konsol `window.EduMandiriDB` (`getSoalList()`, `addSoal()`, `saveSoalList()`, `exportJSON()`) untuk kemudahan inspeksi dan modifikasi di runtime.

---

## 5. Sistem KaTeX Math & Markdown Shielding (PENTING)
> [!IMPORTANT]
> **Akar Masalah Klasik:**
> `marked.js` akan menafsirkan karakter `_` (subskrip rumus seperti `$v_0$`) sebagai `<em>` miring, karakter `*` sebagai penekanan, dan `\` sebagai escape markdown. Hal ini merusak sintaks LaTeX sebelum KaTeX sempat merendernya.

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

### Aturan Penulisan Formula Bebas Error:
* **Pemisahan Delimiter Display Math:** Selalu pastikan ada baris baru (`\n\n`) sebelum dan sesudah tag `$$`. Jangan pernah menempelkan inline math `$expr$` langsung dengan `$$` (seperti `$20\text{ m/s}$$$a = ...`), karena akan menghasilkan tiga tanda dollar `$$$` yang membuat parser mengira `$` berada di dalam formula.
* **Persamaan Bertingkat:** Gunakan lingkungan `\begin{aligned} ... \end{aligned}` untuk deretan baris perhitungan agar tanda sama dengan (`=`) sejajar rapi vertikal, bukan serangkaian blok `$$...$$` beruntun.
* **Simbol Derajat:** Selalu gunakan format LaTeX `^{\circ}` (contoh: `30^{\circ}` atau `53{,}1^{\circ}`), jangan menggunakan simbol derajat unicode mentah `°` di dalam formula matematika KaTeX.
* **Notasi Isotop Inti:** Gunakan notasi isotop standar `{}_{Z}^{A}\text{X}` (Contoh: `{}_{92}^{235}\text{U}`, `{}_{2}^{4}\text{He}`, `{}_{-1}^{0}\text{e}`). JANGAN gunakan notasi usang `\,_Z^A\text{X}`.
* **Proteksi Simbol Akar ($\sqrt{...}$):** KaTeX merender lambang akar menggunakan inline `<svg>` berdimensi dinamis dengan `height: inherit; position: absolute; width: 100%`. CSS dilarang menimpa `.katex svg` dengan `height: auto` atau `margin`, karena akan meremukkan tinggi SVG akar menjadi 0 pixel.

---

## 6. Standar Tipografi Belajar Adaptif (*Pedagogical Fluid Typography*)

Antarmuka dan tampilan materi di [`style.css`](file:///d:/web/learn/style.css) menerapkan prinsip ergonomi kognitif pembelajaran digital:

1. **Fluid Font Scaling via `clamp()`:**
   * Ukuran font tubuh skala halus:
     $$\text{--font-size-body} = \text{clamp}(0.98\text{rem},\ 0.92\text{rem} + 0.3\text{vw},\ 1.14\text{rem})$$
     *(Otomatis ~15.7px di smartphone, ~17px di tablet, dan ~18.2px di monitor desktop).*
   * Heading adaptif: H1 (`clamp(1.55rem, 1.35rem + 1vw, 2.1rem)`), H2 (`clamp(1.3rem, 1.15rem + 0.7vw, 1.65rem)`), H3 (`clamp(1.1rem, 1.02rem + 0.4vw, 1.35rem)`).
2. **Optimal Reading Measure (`max-width: 72ch`):**
   * Panjang baris teks bacaan pada `.markdown-reader` dibatasi maksimal 72 karakter. Menghindari kelelahan mata (*eye fatigue*) dan mencegah *saccadic regression* (kehilangan baris saat berpindah ke baris berikutnya).
3. **Spasi Baris Nyaman (`line-height: 1.72`):**
   * Memberikan ruang lapang vertikal untuk pecahan inline ($\frac{a}{b}$) dan subskrip/superscript ($v_{0x}^2$) agar tidak saling bertubrukan antar-baris.
4. **Visual Anchoring Langkah Penyelesaian:**
   * **Badge Langkah:** `.langkah-badge` untuk penomoran tahap soal (`Langkah 1`, `Langkah 2`).
   * **Display Formula Block:** Kotak rumus bersudut tumpul dengan latar kontras lembut (`background: var(--bg-card-subtle)`), padding lega, dan scrollbar horizontal halus jika formula panjang di layar sempit.
   * **Hasil Akhir Jawaban:** Rumus yang dibungkus `\boxed{...}` otomatis di-highlight dengan border tegas untuk memudahkan pemindaian visual cepat.

### Sistem Callout Box di Markdown & CSS:
| Sintaks Markdown | Kelas CSS | Ikon & Warna | Fungsi Utama |
| :--- | :--- | :---: | :--- |
| `> [!NOTE]` atau `> 📐 **Rumus**` | `.callout-formula` | 📐 Indigo | Menampilkan persamaan utama, asumsi, & tabel satuan SI. |
| `> [!WARNING]` atau `> ⚠️ **Jebakan**` | `.callout-warning` | ⚠️ Amber | Menyorot kesalahan fatal/jebakan ujian (misal: tanda minus perlambatan, konversi $\text{km/jam}$). |
| `> [!TIP]` atau `> 💡 **Trik Cepat**` | `.callout-tip` | 💡 Emerald | Rumus praktis, sudut istimewa, dan shortcut berhitung cepat. |
| `> [!EXAMPLE]` atau `> 📝 **Contoh**` | `.callout-example` | 📝 Sky Blue | Soal kontekstual sekolah + langkah penyelesaian numerik langsung. |

---

## 7. Standar Penamaan Bab Berurutan (1-to-N)

Semua komponen (kartu materi, reader breadcrumb, dropdown drilling, dan pembahasan) wajib mematuhi penomoran berurutan:

### A. TKA Fisika (Bab 1 s.d. Bab 30)
* **Bab 1:** Pengukuran, Besaran, Dimensi, dan Angka Penting *(14 Variasi Soal)*
* **Bab 2:** Vektor *(13 Variasi Soal)*
* **Bab 3:** Kinematika Gerak Lurus (GLB dan GLBB) *(14 Variasi Soal)*
* **Bab 4:** Kinematika Gerak Parabola dan Melingkar *(14 Variasi Soal)*
* **Bab 5:** Dinamika Gerak (Hukum Newton) *(18 Variasi Soal)*
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

### C. TKA Matematika Wajib (Bab 1 s.d. Bab 15)
* Bab 1 s.d. Bab 14: Eksponen, Nilai Mutlak, SPLDV, Program Linear, Fungsi Kuadrat, Relasi/Fungsi, Trigonometri, Baris/Deret, Vektor, Matriks, Transformasi, Dimensi Tiga, Lingkaran, Statistika.
* **Bab 15: Aturan Pencacahan (Permutasi, Kombinasi) dan Teori Peluang** *(Materi Lengkap Komprehensif, Rangkuman Formula Cepat, 30 Variasi Contoh Soal Lengkap, & 20 Soal Drilling 4 Paket)*

---

## 8. Pemeliharaan & Prosedur Update (Maintenance Guide)

### A. Prosedur Update Latihan Soal:
1. Buka dan edit/tambah soal di [`data_soal.js`](file:///d:/web/learn/data_soal.js).
2. Jalankan perintah terminal:
   ```bash
   node sync-soal.js
   ```
   *Skrip ini otomatis memvalidasi seluruh formula KaTeX pada pertanyaan, opsi pilihan, dan pembahasan, serta menyinkronkan data ke `data.json`.*
3. Muat ulang (*refresh*) browser. Soal baru langsung aktif dan tersimpan ke IndexedDB lokal tanpa perlu push atau fetch ke GitHub.

### B. Prosedur Update Materi & Contoh Soal:
1. Edit berkas Markdown di direktori [`data_materi/`](file:///d:/web/learn/data_materi/).
2. Jalankan perintah terminal:
   ```bash
   node sync-to-db.js
   ```
   *Skrip ini menyinkronkan seluruh konten Markdown ke dalam `data_materi.js` dengan aman tanpa merusak karakter escape backslash LaTeX.*
3. Pastikan tidak ada karakter unclosed `$$` atau derajat mentah.

### C. Prosedur Update PWA Service Worker:
Setiap kali ada pembaruan pada berkas inti (`app.js`, `style.css`, `index.html`, `data_materi.js`, `data_soal.js`), wajib menaikkan nomor versi `CACHE_NAME` di [`sw.js`](file:///d:/web/learn/sw.js):
```javascript
const CACHE_NAME = 'edumandiri-cache-v15'; // Naikkan ke v16, dst.
```

---

## 9. Panduan Cepat untuk AI Asisten Sesi Berikutnya
1. **Langsung baca dokumen ini (`PROJECT_OVERVIEW.md`)** sebelum melakukan modifikasi apapun.
2. **Jangan menginstal paket npm baru** untuk runtime klien; proyek ini adalah zero-dependency web app yang berjalan murni di peramban.
3. **Selalu gunakan `data_soal.js` dan `sync-soal.js`** untuk manipulasi bank soal (jangan mengembalikan dependensi fetch HTTP langsung).
4. **Pertahankan KaTeX Shielding di `app.js`** agar parsing formula tidak rusak oleh Markdown parser.
5. **Jaga penomoran bab 1..30 (Fisika) dan 1..17 (MTK Lanjut)** tetap berurutan dan sinkron antara data materi, data soal, dan antarmuka pengguna.
