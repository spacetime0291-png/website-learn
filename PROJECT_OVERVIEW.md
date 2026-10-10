# EduMandiri — Dokumentasi Arsitektur & Informasi Proyek Lengkap
> **Tujuan Dokumen:** Berkas acuan komprehensif bagi developer dan AI assistant pada sesi baru agar dapat langsung memahami seluruh sistem, struktur file, aturan format, dan logika tanpa perlu membaca ulang ratusan file sumber (*menghemat token dan waktu kontekstualisasi*).

---

## 1. Ikhtisar Proyek (Project Overview)
* **Nama Aplikasi:** EduMandiri
* **Fungsi Utama:** Platform belajar mandiri *mobile-first* dan *offline-ready* untuk persiapan:
  1. **TKA Saintek:** Fisika (30 Bab), Matematika Wajib (16 Bab — Aturan Pencacahan & Peluang dipisah mandiri), Matematika Tingkat Lanjut (9 Bab).
  2. **UTBK SNBT:** 7 Subtes (Penalaran Umum, PPU, PBM, PK, Literasi B. Indonesia, Literasi B. Inggris, Penalaran Matematika).
* **Fitur Utama Terkini:**
  * **Daftar Bab Materi Format Kartu Multi-Kolom (`.bab-list-minimal`):** Redesain tampilan daftar bab dari satu baris penuh menjadi grid kartu multi-kolom yang proporsional, padat, dan adaptif (1 kolom di smartphone, 2 kolom di tablet, 3 kolom di desktop). Opsi modul (*Materi Lengkap*, *Variasi Soal*, *Rangkuman*, dan *Latihan Kuis*) tersimpan rapi dan dapat dibuka secara accordion.
  * **Minimalist Reader Bottom Dock:** Bilah navigasi melayang adaptif di bagian bawah saat membaca materi/rangkuman, menggantikan footer statis/navigasi umum. Memungkinkan pindah bab (Prev/Next) dan beralih instan antar-modul (*Materi*, *Variasi*, *Rangkuman*, *Latihan*) secara ergonomis di HP maupun laptop tanpa memakan ruang baca.
  * **Pemisahan Bab Besar Mandiri di Drilling & Data Soal:** Bab gabungan besar dipecah menjadi dua bab terpisah dengan bank soal mandiri:
    - **Bab 15:** Aturan Pencacahan (39 Soal Drilling Berkualitas, 3 Sub-Bab Besar: Kaidah & Filling Slots, Permutasi, Kombinasi & Binomial).
    - **Bab 16:** Peluang (34 Soal Drilling Berkualitas, 3 Sub-Bab Besar: Ruang Sampel & Peluang Sederhana, Komplemen & Frekuensi Harapan, Peluang Majemuk & Bersyarat).
  * **Drilling Dashboard Berbasis Kartu Bab & Pilihan Sub Bab Terarah:**
    - **Perluasan Window Pilihan Bab (`.drilling-minimal-panel` 1040px & `.bab-cards-grid` max-height 640px):** Area daftar kartu bab diperluas signifikan agar seluruh kartu terlihat lapang dan tidak sesak saat scroll.
    - **Seleksi Deterministik Berbasis Integer Index (`babIndex`):** Menggunakan integer index presisi sehingga bebas duplikasi atau salah pilih antar-bab dengan kemiripan kata.
    - **Default Fleksibel & Bebas (Default Kosong):** Saat membuka wizard drilling atau berganti subtes, default seleksi bab adalah kosong (`0 Bab Dipilih`). Tombol 'Mulai Drilling' nonaktif hingga siswa menentukan bab target secara fleksibel (bebas pilih 1 bab, banyak bab, atau 'Pilih Semua').
    - **Sub-Bab Ramping (Hanya Sub-Bab Besar/Inti):** Opsi sub-bab difokuskan pada 2-3 konsep besar per bab, mencegah kebingungan akibat pembagian mikro yang berlebihan.
    - **Penyaringan Soal Selesai (Anti-Repetisi):** Soal yang telah dikerjakan (`completedQuestionIds`) secara otomatis tidak akan dimunculkan lagi di sesi kuis drilling baru, dengan indikator jumlah soal baru vs. sudah selesai dan tombol reset riwayat.
  * **Variasi Contoh Soal Lengkap:** Bab 1 s.d. Bab 5 Fisika aktif dengan total 73 variasi soal, serta **Bab 15 Matematika Wajib (Aturan Pencacahan & Teori Peluang)** aktif dengan **30 variasi soal lengkap**, semuanya 100% tervalidasi bebas KaTeX error.
  * **Pedagogical Fluid Typography:** Tipografi adaptif berbasis ukuran layar (`clamp()`), pembatasan kolom baca maksimal 72 karakter (`max-width: 72ch`), line-height lega (`1.72`), dan visual anchor penomoran langkah.
  * **Database Bank Soal Klien & IndexedDB:** Bank soal tersimpan langsung di `data_soal.js` (`window.EDUMANDIRI_SOAL_BANK` = 106 soal terverifikasi) dan disinkronkan ke IndexedDB (`EduMandiri_DB`). Tidak memerlukan `fetch` network HTTP atau GitHub push/fetch untuk pengoperasian dan pembaruan lokal.
* **Filosofi Arsitektur:** **Zero-Build Vanilla Web Application**.
  * Tidak menggunakan bundler (Webpack/Vite/Rollup) dan tidak memerlukan runtime Node.js saat produksi.
  * Murni Vanilla HTML5, CSS3 kustom, dan Vanilla JavaScript (ES6+).
  * 100% Offline-Ready menggunakan Service Worker (`sw.js`, `edumandiri-cache-v23`) dan pustaka lokal vendor (KaTeX + Marked.js tanpa CDN). Kompatibel dibuka langsung via protokol `file:///` maupun server web lokal/hosting.

---

## 2. Struktur Direktori & Tanggung Jawab File
```text
d:/web/learn/
├── index.html                 # Entry-point SPA: struktur semantik, header, setup drilling, reader, nav
├── style.css                  # Fluid Typography vars, tema mobile-first, bab cards, subbab groups, reader dock
├── app.js                     # SPA engine: router, AppState, KaTeX shielding, quiz engine, IndexedDB loader, localStorage
├── data_materi.js             # Database materi, rangkuman & contoh soal client-side (window.EDUMANDIRI_MATERI_BAB = 137 modul)
├── data_soal.js               # Database bank soal client-side (window.EDUMANDIRI_SOAL_BANK = 106 soal terverifikasi, per sub-bab)
├── data.json                  # Cadangan JSON bank soal drilling (sinkron dengan data_soal.js via sync-soal.js)
├── sync-soal.js               # Tool sinkronisasi database soal & validator KaTeX otomatis
├── sync-to-db.js              # Tool sinkronisasi berkas markdown materi & contoh soal ke data_materi.js
├── sw.js                      # Service Worker PWA (Cache-first offline strategy, versi: edumandiri-cache-v23)
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
│   │   ├── matematika-lanjut/ # 9 Bab sesuai Kurikulum Merdeka & K13
│   │   └── matematika-wajib/  # 15 Bab sesuai Kurikulum Merdeka & K13
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
  materiSubtesFilter: 'semua',     // 'semua' | 'Fisika' | 'Matematika Wajib' | 'Matematika Lanjut' | dll.
  currentReadingBabId: null,       // ID modul yang sedang dibaca di view reader
  dataset: { 
    materi: [],                    // Dimuat dari window.EDUMANDIRI_MATERI_BAB
    soal: []                       // Dimuat dari window.EDUMANDIRI_SOAL_BANK / IndexedDB
  },
  drillingSetup: {                 // Konfigurasi wizard drilling kuis
    category: 'tka',               // 'tka' | 'utbk'
    subtes: 'Matematika Wajib',
    bab: null,
    selectedBabs: [],              // Default KOSONG (fleksibel, pengguna bebas memilih)
    selectedSubBabs: ['semua'],    // Multi-select sub-bab IDs array atau ['semua']
    count: '5',                    // '5' | '10' | '15' | 'semua'
    difficulty: 'semua',           // 'mudah' | 'sedang' | 'sulit' | 'semua'
    timerEnabled: true,
    timerDuration: 'auto'          // 'auto' (1m/soal) | '300' | '600'
  },
  activeQuiz: { ... },             // State kuis aktif: timer, queue, currentIndex, jawaban dipilih
  userAnswers: {},                 // Riwayat jawaban pengguna (tersimpan di localStorage)
  completedQuestionIds: []         // ID soal yang telah diselesaikan
};
```

### B. Navigasi & View Routing
1. **View 1: `view-materi` (`#materi`)**:
   * **Daftar Bab Minimalis (`.bab-accordion-card`)**: Tampilan daftar bersih dengan nomor indeks bab dan ikon minimalis. Saat kartu diklik, muncul dropdown pilihan modul:
     - 📖 *Materi Lengkap* (membuka reader materi komprehensif)
     - 🎯 *Variasi Soal* (membuka kumpulan variasi contoh soal dan pembahasan langkah)
     - 📑 *Rangkuman* (membuka intisari rumus dan tabel cepat)
     - ⚡ *Latihan Kuis* (langsung meluncur ke wizard latihan kuis bab tersebut via `startDrillingForBab()`)
   * Toolbar filter kategori (`TKA Saintek` vs `UTBK`) dan chips mapel/subtes.
2. **View 1B: `view-materi-detail` (`#baca-[id]`)**:
   * Reader layar penuh (*full-page reader*, bukan popup modal melayang).
   * **In-Reader Mode Switcher**: Tab `[📖 Materi] [🎯 Variasi Soal] [📑 Rangkuman]` di header reader.
   * **Minimalist Bottom Dock**: Navigasi melayang di bawah layar dengan tombol Prev Bab, Next Bab, Mode Switcher, dan tombol Langsung Latihan Kuis.
   * Render Markdown + KaTeX Shielding + Callout visual interaktif.
3. **View 2: `view-latihan` (`#latihan`)**:
   * **Kartu Bab Target (`.bab-card` in `.bab-cards-grid`)**: Judul ringkas, layout kartu elegan, wrap teks alami tanpa terpotong, badge nomor dan status centang. Tombol aksi cepat: *Pilih Semua* dan *Reset*.
   * **Pilihan Sub Bab Terpisah Antar Bab (`.subbab-chapter-group`)**: Setiap bab yang terpilih menampilkan deretan pil sub-bab spesifik dengan badge jumlah soal tersedia. Siswa dapat mencentang topik spesifik (misal: *Angka Penting & Ketidakpastian* saja, atau *Operasi & Resultan Vektor* saja).
   * Pengaturan parameter sesi: Jumlah Soal (5, 10, 15, Semua), Kesulitan (Semua, Mudah, Sedang, Sulit), dan Timer Sesi.
   * Kotak ringkasan: `Tersedia: X soal target` yang merespon pemilihan sub-bab secara *real-time*.
   * Interactive quiz card dengan topic badges (`📍 Bab` & `🎯 Sub Bab`), navigasi dinamis, opsi pilihan A-E, dan pembahasan instan.
4. **View 3: `view-pembahasan` (`#pembahasan`)**:
   * Riwayat soal yang telah dikerjakan atau seluruh bank soal.
   * Badge status benar/salah, kunci, dan langkah pembahasan LaTeX terperinci.

---

## 4. Sistem Database Bank Soal (`data_soal.js` + IndexedDB)

### A. Struktur Data Soal Berbasis Sub-Bab
Setiap objek soal dalam bank soal mematuhi skema berikut:
```javascript
{
  "id": "FIS-B01-P1-01",
  "kategoriUtama": "tka",
  "subtes": "Fisika",
  "bab": "Pengukuran & Dimensi",
  "subBabId": "fis-b01-sb03",
  "subBab": "Angka Penting & Ketidakpastian",
  "kesulitan": "mudah",
  "pertanyaan": "Hasil pengukuran panjang dan lebar pelat seng berturut-turut adalah $12{,}5\\text{ cm}$ dan $4{,}2\\text{ cm}$. Berdasarkan aturan angka penting, luas pelat tersebut adalah...",
  "pilihan": [
    "$52{,}5\\text{ cm}^2$",
    "$52{,}50\\text{ cm}^2$",
    "$53\\text{ cm}^2$",
    "$52\\text{ cm}^2$",
    "$50\\text{ cm}^2$"
  ],
  "kunciJawaban": 0,
  "pembahasan": "..."
}
```

### B. Penghapusan Paket Soal & Penggantian dengan Sub-Bab
* **Sebelumnya:** Soal dikelompokkan ke dalam paket (`paketId`, `paketNama`).
* **Sekarang:** Sistem paket telah **sepenuhnya dihapus**. Penentuan latihan didasarkan langsung pada **Sub Bab** (`subBabId`, `subBab`), memungkinkan siswa mengisolasi dan mendrill konsep materi tertentu (misalnya *Binomial Newton*, *Persamaan Kontinuitas*, *Gerak Parabola*, dll.).
* **Zero Network Dependency:** Seluruh bank soal disimpan di `data_soal.js` (`window.EDUMANDIRI_SOAL_BANK`) dan disinkronkan ke IndexedDB (`EduMandiri_DB`).

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
* **Pemisahan Delimiter Display Math:** Selalu pastikan ada baris baru (`\n\n`) sebelum dan sesudah tag `$$`. Jangan pernah menempelkan inline math `$expr$` langsung dengan `$$`.
* **Persamaan Bertingkat:** Gunakan lingkungan `\begin{aligned} ... \end{aligned}` untuk deretan baris perhitungan agar tanda sama dengan (`=`) sejajar rapi vertikal.
* **Simbol Derajat:** Selalu gunakan format LaTeX `^{\circ}` (contoh: `30^{\circ}` atau `53{,}1^{\circ}`), jangan menggunakan simbol derajat unicode mentah `°` di dalam formula matematika KaTeX.
* **Notasi Isotop Inti:** Gunakan notasi isotop standar `{}_{Z}^{A}\text{X}` (Contoh: `{}_{92}^{235}\text{U}`, `{}_{2}^{4}\text{He}`, `{}_{-1}^{0}\text{e}`). JANGAN gunakan notasi usang `\,_Z^A\text{X}`.
* **Proteksi Simbol Akar ($\sqrt{...}$):** KaTeX merender lambang akar menggunakan inline `<svg>` berdimensi dinamis dengan `height: inherit; position: absolute; width: 100%`. CSS dilarang menimpa `.katex svg` dengan `height: auto` atau `margin`.

---

## 6. Standar Tipografi Belajar Adaptif (*Pedagogical Fluid Typography*)

Antarmuka dan tampilan materi di [`style.css`](file:///d:/web/learn/style.css) menerapkan prinsip ergonomi kognitif pembelajaran digital:

1. **Fluid Font Scaling via `clamp()`:**
   * Ukuran font tubuh skala halus:
     $$\text{--font-size-body} = \text{clamp}(0.98\text{rem},\ 0.92\text{rem} + 0.3\text{vw},\ 1.14\text{rem})$$
     *(Otomatis ~15.7px di smartphone, ~17px di tablet, dan ~18.2px di monitor desktop).*
   * Heading adaptif: H1 (`clamp(1.55rem, 1.35rem + 1vw, 2.1rem)`), H2 (`clamp(1.3rem, 1.15rem + 0.7vw, 1.65rem)`), H3 (`clamp(1.1rem, 1.02rem + 0.4vw, 1.35rem)`).
2. **Optimal Reading Measure (`max-width: 72ch`):**
   * Panjang baris teks bacaan pada `.markdown-reader` dibatasi maksimal 72 karakter untuk mencegah kelelahan mata.
3. **Spasi Baris Nyaman (`line-height: 1.72`):**
   * Memberikan ruang lapang vertikal untuk pecahan inline ($\frac{a}{b}$) dan subskrip/superscript ($v_{0x}^2$) agar tidak bertubrukan antar-baris.
4. **Visual Anchoring Langkah Penyelesaian:**
   * **Badge Langkah:** `.langkah-badge` untuk penomoran tahap soal (`Langkah 1`, `Langkah 2`).
   * **Display Formula Block:** Kotak rumus bersudut tumpul dengan latar kontras lembut, padding lega, dan scrollbar horizontal halus.
   * **Hasil Akhir Jawaban:** Rumus yang dibungkus `\boxed{...}` otomatis di-highlight dengan border tegas.

### Sistem Callout Box di Markdown & CSS:
| Sintaks Markdown | Kelas CSS | Ikon & Warna | Fungsi Utama |
| :--- | :--- | :---: | :--- |
| `> [!NOTE]` atau `> 📐 **Rumus**` | `.callout-formula` | 📐 Indigo | Menampilkan persamaan utama, asumsi, & tabel satuan SI. |
| `> [!WARNING]` atau `> ⚠️ **Jebakan**` | `.callout-warning` | ⚠️ Amber | Menyorot kesalahan fatal/jebakan ujian (misal: tanda minus perlambatan, konversi $\text{km/jam}$). |
| `> [!TIP]` atau `> 💡 **Trik Cepat**` | `.callout-tip` | 💡 Emerald | Rumus praktis, sudut istimewa, dan shortcut berhitung cepat. |
| `> [!EXAMPLE]` atau `> 📝 **Contoh**` | `.callout-example` | 📝 Sky Blue | Soal kontekstual sekolah + langkah penyelesaian numerik langsung. |

---

## 7. Silabus & Standar Kurikulum Terpadu

### A. TKA Fisika (30 Bab)
* **Bab 1:** Pengukuran & Dimensi *(14 Variasi Soal)*
* **Bab 2:** Vektor *(13 Variasi Soal)*
* **Bab 3:** Kinematika Gerak Lurus *(14 Variasi Soal)*
* **Bab 4:** Gerak Parabola & Melingkar *(14 Variasi Soal)*
* **Bab 5:** Dinamika Gerak (Hukum Newton) *(18 Variasi Soal)*
* Bab 6: Usaha & Energi
* Bab 7: Momentum & Impuls
* Bab 8: Dinamika Rotasi & Kesetimbangan
* Bab 9: Gravitasi Universal
* Bab 10: Elastisitas & Getaran (GHS)
* Bab 11: Fluida Statis
* Bab 12: Fluida Dinamis
* Bab 13: Suhu & Kalor
* Bab 14: Teori Kinetik Gas
* Bab 15: Termodinamika
* Bab 16: Gelombang Berjalan & Stasioner
* Bab 17: Gelombang Bunyi
* Bab 18: Optik Geometri
* Bab 19: Optik Fisis
* Bab 20: Listrik Statis
* Bab 21: Listrik Arus Searah (DC)
* Bab 22: Medan Magnet & Lorentz
* Bab 23: Induksi Elektromagnetik
* Bab 24: Arus Bolak-Balik (AC)
* Bab 25: Gelombang Elektromagnetik
* Bab 26: Teori Relativitas Khusus
* Bab 27: Gejala Kuantum & Foton
* Bab 28: Teori Model Atom
* Bab 29: Fisika Inti & Radioaktivitas
* Bab 30: Energi Terbarukan

### B. TKA Matematika Wajib (Umum) (15 Bab)
1. **Bab 1:** Eksponen dan Logaritma
2. **Bab 2:** Persamaan dan Pertidaksamaan Nilai Mutlak
3. **Bab 3:** Sistem Persamaan dan Pertidaksamaan Linear (SPLDV & SPLTV)
4. **Bab 4:** Program Linear
5. **Bab 5:** Fungsi Kuadrat dan Rasional
6. **Bab 6:** Relasi, Fungsi Komposisi, dan Fungsi Invers
7. **Bab 7:** Trigonometri Dasar (Perbandingan, Grafik, Aturan Sinus dan Cosinus)
8. **Bab 8:** Barisan dan Deret (Aritmetika dan Geometri)
9. **Bab 9:** Vektor (Operasi dan Proyeksi)
10. **Bab 10:** Matriks Dasar (Operasi, Determinan, dan Invers Ordo 2x2)
11. **Bab 11:** Transformasi Geometri (Translasi, Refleksi, Rotasi, Dilatasi)
12. **Bab 12:** Geometri Ruang (Dimensi Tiga: Jarak dan Sudut)
13. **Bab 13:** Persamaan Lingkaran dan Garis Singgung
14. **Bab 14:** Statistika (Ukuran Pemusatan dan Penyebaran Data Tunggal & Kelompok)
15. **Bab 15:** Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang *(30 Variasi Contoh Soal Lengkap)*

### C. TKA Matematika Tingkat Lanjut (Peminatan) (9 Bab)
1. **Bab 1:** Bilangan Kompleks (Bentuk Aljabar, Polar, Eksponen, dan Operasi)
2. **Bab 2:** Polinomial / Suku Banyak (Operasi, Teorema Sisa, dan Teorema Faktor)
3. **Bab 3:** Matriks Lanjut (Determinan dan Invers Ordo 3x3)
4. **Bab 4:** Persamaan dan Identitas Trigonometri (Rumus Jumlah/Selisih Sudut dan Sudut Rangkap)
5. **Bab 5:** Irisan Kerucut (Parabola, Elips, Hiperbola)
6. **Bab 6:** Limit Fungsi (Aljabar, Trigonometri, dan Menuju Tak Hingga)
7. **Bab 7:** Turunan Fungsi (Aljabar, Trigonometri, Aturan Rantai, dan Aplikasi)
8. **Bab 8:** Integral Fungsi (Tentu, Tak Tentu, Substitusi, Parsial, Luas Daerah, Volume Benda Putar)
9. **Bab 9:** Statistika Inferensial (Variabel Acak, Distribusi Binomial, dan Distribusi Normal)

---

## 8. Pemeliharaan & Prosedur Update (Maintenance Guide)

### A. Prosedur Update Latihan Soal:
1. Buka dan edit/tambah soal di [`data_soal.js`](file:///d:/web/learn/data_soal.js) dengan menyertakan `subBabId` dan `subBab`.
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
const CACHE_NAME = 'edumandiri-cache-v23'; // Naikkan ke v24, dst.
```

---

## 9. Panduan Cepat untuk AI Asisten Sesi Berikutnya
1. **Langsung baca dokumen ini (`PROJECT_OVERVIEW.md`)** sebelum melakukan modifikasi apapun.
2. **Jangan menginstal paket npm baru** untuk runtime klien; proyek ini adalah zero-dependency web app yang berjalan murni di peramban.
3. **Selalu gunakan `data_soal.js` dan `sync-soal.js`** untuk manipulasi bank soal (jangan mengembalikan dependensi fetch HTTP langsung).
4. **Pertahankan KaTeX Shielding di `app.js`** agar parsing formula tidak rusak oleh Markdown parser.
5. **Jaga penomoran bab dan hierarki sub-bab** tetap sinkron antara data materi, data soal, dan antarmuka pengguna drilling.
