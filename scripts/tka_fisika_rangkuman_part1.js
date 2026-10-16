// ============================================================================
// EDUMANDIRI: RANGKUMAN TERSTANDARISASI FISIKA TKA (BAB 1 - BAB 8)
// Pendekatan Kurikulum 2013 Revisi & Kurikulum Merdeka
// Dilengkapi tabel rumus komprehensif & uraian komponen variabel + satuan SI lengkap
// ============================================================================

const rangkumanPart1 = {
  1: `# Rangkuman Rumus Cepat & Intisari Materi — Pengukuran dan Ketelitian Alat Ukur
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Pengukuran merupakan proses komparasi besaran fisis objek uji dengan standar acuan internasional terkalibrasi. Pelaporan ilmiah hasil pengukuran wajib menyertakan nilai estimasi terbaik beserta ketidakpastian mutlak instrumen untuk merefleksikan reliabilitas data eksperimen.

| Kategori Pengukuran | Instrumen Ukur | Nilai Skala Terkecil (NST) | Ketidakpastian Mutlak ($\\Delta x$) | Aplikasi Utama Soal TKA |
| :--- | :--- | :--- | :--- | :--- |
| **Panjang Linier Datar** | Mistar Ukur | $1\\text{ mm} = 0{,}1\\text{ cm}$ | $\\Delta x = \\pm 0{,}5\\text{ mm} = \\pm 0{,}05\\text{ cm}$ | Panjang balok, papan, meja belajar |
| **Dimensi Presisi Silinder** | Jangka Sorong | $0{,}1\\text{ mm}$; $0{,}05\\text{ mm}$; $0{,}02\\text{ mm}$ | $\\Delta x = \\frac{1}{2} \\times \\text{NST}$ | Diameter luar botol, rongga dalam pipa, kedalaman tabung |
| **Tebal Tipis & Kawat** | Mikrometer Sekrup | $0{,}01\\text{ mm} = 10^{-5}\\text{ m}$ | $\\Delta x = \\pm 0{,}005\\text{ mm}$ | Ketebalan keping logam, kaca preparat, diameter kawat tembaga |
| **Massa Benda Padat** | Neraca Ohaus 3 Lengan | $0{,}1\\text{ g}$ atau $0{,}05\\text{ g}$ | $\\Delta m = \\pm 0{,}05\\text{ g}$ | Massa spesimen logam berbasis kesetimbangan momen gaya |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Pembacaan Jangka Sorong** | $x = \\text{SU} + (\\text{SN} \\times \\text{NST})$ | $x$: nilai panjang terukur ($\\text{mm}$); $\\text{SU}$: skala utama sebelum garis nol nonius ($\\text{mm}$); $\\text{SN}$: garis skala nonius yang segaris lurus dengan skala utama (skala ke-$k$); $\\text{NST}$: nilai skala terkecil instrumen ($\\text{mm}$) | $\\text{NST} = \\frac{1\\text{ mm}}{n}$, dengan $n$ banyaknya skala nonius (10 skala $\\to 0{,}1\\text{ mm}$; 20 skala $\\to 0{,}05\\text{ mm}$; 50 skala $\\to 0{,}02\\text{ mm}$) |
| **Pembacaan Mikrometer Sekrup** | $x = \\text{SU} + (\\text{SP} \\times 0{,}01\\text{ mm})$ | $x$: tebal benda ($\\text{mm}$); $\\text{SU}$: skala utama selubung tetap ($\\text{mm}$, perhatikan garis bawah $0{,}5\\text{ mm}$); $\\text{SP}$: garis skala putar timbel yang segaris garis mendatar utama (skala $0 - 49$); $0{,}01\\text{ mm}$: NST mikrometer sekrup | Satu putaran penuh selubung putar (50 skala) memajukan poros geser sebesar $0{,}5\\text{ mm}$ |
| **Ketidakpastian Pengukuran Tunggal** | $\\Delta x = \\frac{1}{2} \\times \\text{NST}$ | $\\Delta x$: ketidakpastian mutlak instrumen (satuan besaran); $\\text{NST}$: nilai skala terkecil alat ukur (satuan besaran) | Pelaporan hasil akhir: $x = (\\bar{x} \\pm \\Delta x)$, dengan jumlah desimal $\\bar{x}$ disamakan terhadap $\\Delta x$ |
| **Ketidakpastian Pengukuran Berulang** | $s_x = \\frac{1}{N} \\sqrt{\\frac{N\\Sigma x_i^2 - (\\Sigma x_i)^2}{N - 1}}$ | $s_x$: deviasi standar nilai rata-rata sampel (satuan besaran); $N$: jumlah pengambilan data berulang; $x_i$: hasil pengukuran ke-$i$; $\\Sigma x_i$: jumlah total nilai terukur; $\\Sigma x_i^2$: jumlah kuadrat data | Mengurangi kesalahan acak (*random error*). Nilai terbaik adalah rata-rata aritmetika: $\\bar{x} = \\frac{\\Sigma x_i}{N}$ |
| **Ketidakpastian Relatif (KR)** | $\\text{KR} = \\frac{\\Delta x}{\\bar{x}} \\times 100\\%$ | $\\text{KR}$: persentase ketidakpastian relatif ($\\&$); $\\Delta x$: ketidakpastian mutlak; $\\bar{x}$: nilai pengukuran terbaik | Kaidah Pelaporan AP: $\\text{KR} \\approx 10\\% \\implies 2\\text{ AP}$; $\\text{KR} \\approx 1\\% \\implies 3\\text{ AP}$; $\\text{KR} \\approx 0{,}1\\% \\implies 4\\text{ AP}$ |
| **Perambatan Ralat Penjumlahan / Pengurangan** | $\\Delta Z = \\sqrt{(\\Delta X)^2 + (\\Delta Y)^2}$ | $\\Delta Z$: ralat mutlak hasil operasi $Z = X \\pm Y$; $\\Delta X, \\Delta Y$: ralat mutlak masing-masing besaran komponen | Ralat mutlak dihitung melalui penjumlahan kuadratik deviasi |
| **Perambatan Ralat Perkalian / Pembagian** | $\\frac{\\Delta Z}{Z} = \\sqrt{\\left(\\frac{\\Delta X}{X}\\right)^2 + \\left(\\frac{\\Delta Y}{Y}\\right)^2}$ | $\\frac{\\Delta Z}{Z}$: ralat relatif kombinasi hasil $Z = X \\cdot Y$ atau $Z = \\frac{X}{Y}$; $\\frac{\\Delta X}{X}, \\frac{\\Delta Y}{Y}$: ralat relatif masing-masing komponen | Ralat relatif fraksional digabungkan secara kuadratik |
| **Perambatan Ralat Pemangkatan** | $\\frac{\\Delta Z}{Z} = \\vert n \\vert \\frac{\\Delta X}{X}$ | $Z = X^n$; $n$: pangkat eksponen (bilangan real positif/negatif); $\\frac{\\Delta Z}{Z}$: ralat relatif hasil pangkat; $\\frac{\\Delta X}{X}$: ralat relatif besaran pokok | Pangkat memperbesar ralat relatif secara linier sebesar kelipatan mutlak $\\vert n \\vert$ |

---

### C. Aljabar Vektor Kinematika & Kaidah Angka Penting
| Operasi / Kaidah | Persamaan Matematis | Penjelasan Komponen Variabel & Satuan SI | Keterangan & Kaidah Ujian |
| :--- | :--- | :--- | :--- |
| **Resultan 2 Vektor (Jajar Genjang)** | $R = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos\\theta}$ | $R$: besar vektor resultan ($\\text{N}$); $F_1, F_2$: besar vektor komponen pertama dan kedua ($\\text{N}$); $\\theta$: sudut apit antara $\\vec{F}_1$ dan $\\vec{F}_2$ ($^{\\circ}$) | Sudut istimewa: $\\theta = 0^{\\circ} \\implies R_{\\max} = F_1 + F_2$; $\\theta = 90^{\\circ} \\implies R = \\sqrt{F_1^2 + F_2^2}$; $\\theta = 180^{\\circ} \\implies R_{\\min} = \\vert F_1 - F_2 \\vert$ |
| **Arah Resultan Vektor (Aturan Sinus)** | $\\frac{R}{\\sin\\theta} = \\frac{F_1}{\\sin\\beta} = \\frac{F_2}{\\sin\\alpha}$ | $\\alpha$: sudut apit resultan terhadap $\\vec{F}_1$; $\\beta$: sudut apit resultan terhadap $\\vec{F}_2$; $\\theta = \\alpha + \\beta$ | Menentukan arah kiblat resultan gaya secara analitis tanpa busur derajat |
| **Analisis Komponen Kartesius** | $R_x = \\Sigma F_x = \\Sigma F \\cos\\theta$<br>$R_y = \\Sigma F_y = \\Sigma F \\sin\\theta$<br>$R = \\sqrt{R_x^2 + R_y^2}$ | $R_x, R_y$: jumlah aljabar proyeksi gaya pada sumbu $X$ dan $Y$ ($\\text{N}$); $R$: resultan total seluruh gaya ($\\text{N}$); $\\tan\\alpha = \\frac{R_y}{R_x}$ | Sudut $\\theta$ selalu diukur terhadap sumbu $X$ positif; perhatikan kuadran tanda aljabar ($+$/$-$) |
| **Perkalian Titik (Dot Product / Skalar)** | $\\vec{A} \\cdot \\vec{B} = \\vert\\vec{A}\\vert \\vert\\vec{B}\\vert \\cos\\theta = A_x B_x + A_y B_y + A_z B_z$ | $\\vec{A}, \\vec{B}$: vektor perkalian; $\\theta$: sudut apit; hasil berupa besaran skalar | Berlaku komutatif $\\vec{A} \\cdot \\vec{B} = \\vec{B} \\cdot \\vec{A}$. Jika tegak lurus ($\\theta = 90^{\\circ}$), $\\vec{A} \\cdot \\vec{B} = 0$. Aplikasi: Usaha $W = \\vec{F} \\cdot \\vec{s}$ |
| **Perkalian Silang (Cross Product / Vektor)** | $\\vert\\vec{A} \\times \\vec{B}\\vert = \\vert\\vec{A}\\vert \\vert\\vec{B}\\vert \\sin\\theta$ | Hasil berupa vektor tegak lurus bidang $\\vec{A}$ dan $\\vec{B}$ (Aturan Tangan Kanan) | Anti-komutatif: $\\vec{A} \\times \\vec{B} = -(\\vec{B} \\times \\vec{A})$. Jika sejajar ($\\theta = 0^{\\circ}$), $\\vec{A} \\times \\vec{B} = 0$. Aplikasi: Torsi $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ |
| **Operasi AP: Tambah & Kurang** | Mengikuti desimal paling sedikit | Contoh: $12{,}55\\text{ m} + 3{,}2\\text{ m} = 15{,}75\\text{ m} \\to 15{,}8\\text{ m}$ | Hasil hanya boleh memiliki **satu angka taksiran** |
| **Operasi AP: Kali & Bagi** | Mengikuti jumlah AP tersedikit | Contoh: $4{,}25\\text{ cm}$ (3 AP) $\\times 2{,}0\\text{ cm}$ (2 AP) $= 8{,}5\\text{ cm}^2$ (2 AP) | Tidak ditentukan oleh jumlah desimal koma |
| **Operasi AP: Pangkat & Akar** | Mengikuti jumlah AP bilangan asal | Contoh: $(2{,}5\\text{ cm})^2 = 6{,}25\\text{ cm}^2 \\to 6{,}3\\text{ cm}^2$ (2 AP); $\\sqrt{144{,}0} = 12{,}00$ (4 AP) | Jumlah AP hasil sama persis dengan bilangan asal |
| **Operasi Bilangan Eksak** | Mengikuti AP angka hasil ukur | Contoh: 25 lembar kertas $\\times 0{,}12\\text{ mm}$ (2 AP) $= 3{,}0\\text{ mm}$ (2 AP) | Bilangan cacah/hitung memiliki AP tak berhingga |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Jangan menjumlahkan Skala Utama (SU) dalam satuan sentimeter ($\\text{cm}$) langsung dengan Skala Nonius (SN) dalam milimeter ($\\text{mm}$) pada jangka sorong! Konversikan seluruh data ke $\\text{mm}$ terlebih dahulu sebelum dijumlahkan.
> 2. Angka nol di sebelah kiri angka bukan nol pertama **bukan angka penting** (contoh: $0{,}0045\\text{ kg}$ hanya memiliki 2 AP). Namun angka nol di kanan tanda desimal setelah angka bukan nol **adalah angka penting** (contoh: $4{,}500\\text{ g}$ memiliki 4 AP).

> [!TIP] Super Solusi Cepat:
> Pada soal perkalian atau pembagian angka penting di TKA Saintek, langsung periksa jumlah angka penting dari setiap opsi jawaban. Opsi yang benar **pasti** memiliki jumlah angka penting yang sama dengan faktor yang memiliki AP paling sedikit!`
,
  2: `# Rangkuman Rumus Cepat & Intisari Materi — Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Kinematika gerak lurus mempelajari perpindahan partikel pada lintasan satu dimensi tanpa meninjau gaya penyebabnya. Gerak terbagi atas Gerak Lurus Beraturan (kecepatan konstan, $a = 0$) dan Gerak Lurus Berubah Beraturan (percepatan konstan, $a = \\text{konstan} \\neq 0$).

| Klasifikasi Gerak | Parameter Percepatan ($a$) | Sifat Kecepatan ($v$) | Pola Lintasan & Karakteristik Grafik |
| :--- | :--- | :--- | :--- |
| **GLB** | $a = 0$ | $v = \\text{konstan}$ | Grafik $s-t$ berupa garis lurus miring (gradien $= v$); Grafik $v-t$ mendatar horizontal |
| **GLBB Dipercepat** | $a > 0$ (konstan) | Kelajuan bertambah linier tiap sekon | Grafik $v-t$ naik miring ke kanan (gradien $= a$); Grafik $s-t$ parabola cekung ke atas |
| **GLBB Diperlambat** | $a < 0$ (konstan) | Kelajuan berkurang linier tiap sekon | Grafik $v-t$ turun miring ke kanan; Grafik $s-t$ parabola cekung ke bawah |
| **Gerak Jatuh Bebas** | $a = +g$ (konstan) | $v_0 = 0$, kelajuan bertambah | Dipercepat gravitasi bumi; bebas dari massa partikel ($m$) |
| **Gerak Vertikal ke Atas** | $a = -g$ (konstan) | $v_0 > 0$, berhenti sesaat di puncak | Diperlambat gravitasi bumi hingga $v_t = 0$ di puncak $h_{\\max}$ |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Jarak vs Perpindahan & Kelajuan** | $v_{\\text{kelajuan}} = \\frac{s_{\\text{total}}}{\\Delta t}$<br>$\\vec{v}_{\\text{rata}} = \\frac{\\Delta \\vec{r}}{\\Delta t} = \\frac{\\vec{r}_2 - \\vec{r}_1}{t_2 - t_1}$ | $s_{\\text{total}}$: panjang total lintasan fisik ($\\text{m}$, skalar); $\\Delta \\vec{r}$: vektor perpindahan posisi dari titik awal ke akhir ($\\text{m}$); $\\Delta t$: selang waktu ($\\text{s}$); $v_{\\text{kelajuan}}$: kelajuan rata-rata ($\\text{m/s}$); $\\vec{v}_{\\text{rata}}$: kecepatan rata-rata ($\\text{m/s}$) | Jarak selalu bernilai positif ($s \\ge 0$); perpindahan dapat bertanda positif, negatif, atau nol jika benda kembali ke titik mula |
| **Kalkulus Kinematika Sesaat** | $v(t) = \\frac{dr}{dt}$<br>$a(t) = \\frac{dv}{dt} = \\frac{d^2r}{dt^2}$ | $r(t)$: fungsi posisi terhadap waktu ($\\text{m}$); $v(t)$: kecepatan sesaat pada detik $t$ ($\\text{m/s}$); $a(t)$: percepatan sesaat pada detik $t$ ($\\text{m/s}^2$) | Kecepatan adalah turunan pertama posisi; percepatan adalah turunan kedua posisi |
| **Rekonstruksi Gerak via Integral** | $v(t) = v_0 + \\int_{0}^{t} a(t)\\,dt$<br>$r(t) = r_0 + \\int_{0}^{t} v(t)\\,dt$ | $v_0$: kecepatan awal saat $t = 0$ ($\\text{m/s}$); $r_0$: posisi awal saat $t = 0$ ($\\text{m}$); $t$: waktu integrasi ($\\text{s}$) | Luas area di bawah kurva grafik $a-t$ adalah perubahan kecepatan $\\Delta v$; luas di bawah kurva $v-t$ adalah perpindahan $s$ |
| **Gerak Lurus Beraturan (GLB)** | $s = v \\cdot t$<br>$x(t) = x_0 + v \\cdot t$ | $s$: jarak tempuh ($\\text{m}$); $x(t)$: posisi benda saat waktu $t$ ($\\text{m}$); $x_0$: posisi awal ($\\text{m}$); $v$: kelajuan konstan ($\\text{m/s}$); $t$: waktu tempuh ($\\text{s}$) | Berlaku hanya jika percepatan nol ($a = 0$) |
| **GLBB: Kecepatan Akhir Waktu** | $v_t = v_0 + a t$ | $v_t$: kecepatan akhir benda saat detik ke-$t$ ($\\text{m/s}$); $v_0$: kecepatan awal mula-mula ($\\text{m/s}$); $a$: percepatan linier konstan ($\\text{m/s}^2$); $t$: selang waktu ($\\text{s}$) | Tanda $a$: bernilai $(+)$ jika dipercepat, bernilai $(-)$ jika diperlambat |
| **GLBB: Jarak Tempuh Waktu** | $s = v_0 t + \\frac{1}{2} a t^2$ | $s$: perpindahan jarak linier ($\\text{m}$); $v_0$: kecepatan awal ($\\text{m/s}$); $a$: percepatan linier ($\\text{m/s}^2$); $t$: waktu tempuh ($\\text{s}$) | Persamaan kuadrat terhadap waktu $t$ menghasilkan grafik posisi-waktu lengkung parabola |
| **GLBB: Independen Waktu** | $v_t^2 = v_0^2 + 2 a s$ | $v_t$: kecepatan akhir ($\\text{m/s}$); $v_0$: kecepatan awal ($\\text{m/s}$); $a$: percepatan ($\\text{m/s}^2$); $s$: jarak tempuh ($\\text{m}$) | Gunakan jika durasi waktu $t$ tidak diketahui pada soal ujian |
| **GLBB: Kecepatan Rata-Rata** | $s = \\left(\\frac{v_0 + v_t}{2}\\right) t$ | $s$: perpindahan linier ($\\text{m}$); $v_0$: kecepatan awal ($\\text{m/s}$); $v_t$: kecepatan akhir ($\\text{m/s}$); $t$: selang waktu ($\\text{s}$) | Formula praktis menghitung jarak tanpa menghitung nilai percepatan $a$ terlebih dahulu |

---

### C. Gerak Vertikal Medan Gravitasi & Dinamika Dua Benda
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Gerak Jatuh Bebas (GJB)** | $v_t = g t = \\sqrt{2 g h}$<br>$h = \\frac{1}{2} g t^2 \\implies t = \\sqrt{\\frac{2 h}{g}}$ | $v_t$: kelajuan jatuh di tanah ($\\text{m/s}$); $g$: percepatan gravitasi bumi ($\\text{m/s}^2$, biasa diambil $9{,}8$ atau $10\\text{ m/s}^2$); $h$: ketinggian awal pelepasan ($\\text{m}$); $t$: waktu jatuh hingga dasar ($\\text{s}$) | Syarat mutlak: kecepatan awal nol ($v_0 = 0$) dan percepatan $a = +g$. Waktu jatuh bebas bebas dari massa benda |
| **Rasio Jarak Galilei GJB** | $s_1 : s_2 : s_3 : \\dots = 1 : 3 : 5 : 7 : \\dots$ | $s_k$: jarak yang ditempuh benda jatuh bebas tepat pada interval detik ke-$k$ ($\\text{m}$) | Jarak tiap sekon berurutan selalu berbanding deret bilangan ganjil |
| **Gerak Vertikal ke Bawah (GVB)** | $v_t = v_0 + g t$<br>$h = v_0 t + \\frac{1}{2} g t^2$<br>$v_t^2 = v_0^2 + 2 g h$ | $v_0$: kecepatan awal lemparan ke bawah ($v_0 > 0$, $\\text{m/s}$); $v_t$: kelajuan sesaat ($\\text{m/s}$); $h$: penurunan vertikal ($\\text{m}$); $g$: percepatan gravitasi ($\\text{m/s}^2$) | Memiliki kecepatan awal searah percepatan gravitasi ($a = +g$) |
| **Gerak Vertikal ke Atas (GVA)** | $v_t = v_0 - g t$<br>$h = v_0 t - \\frac{1}{2} g t^2$<br>$v_t^2 = v_0^2 - 2 g h$ | $v_0$: kecepatan awal pelemparan ke atas ($\\text{m/s}$); $v_t$: kecepatan saat ketinggian $h$ ($\\text{m/s}$); $g$: gravitasi ($\\text{m/s}^2$); $h$: posisi vertikal dari tanah ($\\text{m}$) | Diperlambat oleh gravitasi bumi ($a = -g$). Di titik tertinggi kelajuan sesaat nol ($v_t = 0$) |
| **Puncak GVA & Waktu Total** | $h_{\\max} = \\frac{v_0^2}{2 g}$<br>$t_{\\text{naik}} = \\frac{v_0}{g}$<br>$t_{\\text{total}} = \\frac{2 v_0}{g}$ | $h_{\\max}$: ketinggian puncak maksimum dari titik lempar ($\\text{m}$); $t_{\\text{naik}}$: durasi waktu mencapai puncak ($\\text{s}$); $t_{\\text{total}}$: durasi melayang bolak-balik sampai tanah ($\\text{s}$) | Kecepatan saat tiba kembali di tanah sama besar dengan kecepatan awal lempar ($v_{\\text{kembali}} = v_0$) |
| **Papasan Berhadapan (Saling Mendekat)** | $t_{\\text{temu}} = \\frac{S_{\\text{total}}}{v_A + v_B}$ | $S_{\\text{total}}$: jarak pisah mula-mula kedua benda ($\\text{m}$); $v_A, v_B$: kelajuan masing-masing benda ($\\text{m/s}$); $t_{\\text{temu}}$: waktu hingga berpapasan ($\\text{s}$) | Posisi temu: $s_A = v_A \\cdot t_{\\text{temu}}$ dari titik berangkat A |
| **Pengejaran Searah (Menyusul)** | $t_{\\text{susul}} = \\frac{\\Delta s_0}{v_{\\text{pengejar}} - v_{\\text{dikejar}}}$ | $\\Delta s_0$: jarak keunggulan posisi awal ($\\text{m}$); $v_{\\text{pengejar}}$: kelajuan benda di belakang ($v_{\\text{pengejar}} > v_{\\text{dikejar}}$, $\\text{m/s}$); $t_{\\text{susul}}$: waktu menyusul ($\\text{s}$) | Jarak susul dari titik awal pengejar: $s = v_{\\text{pengejar}} \\cdot t_{\\text{susul}}$ |
| **Beda Waktu Berangkat ($\\Delta t$)** | $t_A = t, \\quad t_B = t - \\Delta t$ | $\\Delta t$: selisih waktu keberangkatan benda kedua setelah benda pertama ($\\text{s}$) | Substitusikan hubungan waktu ini ke persamaan posisi masing-masing |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Perlambatan pada GLBB harus diberi tanda minus ($a = -\\vert a \\vert$). Jika kendaraan mengerem hingga berhenti ($v_t = 0$), gunakan $v_t^2 = v_0^2 - 2as \\implies s_{\\text{henti}} = \\frac{v_0^2}{2a}$. Ingat bahwa jarak pengereman berbanding lurus dengan **kuadrat kecepatan awal** ($s \\propto v_0^2$). Jika kelajuan diduakalikan, jarak henti menjadi 4 kali lipat!
> 2. Pada gerak vertikal ke atas, waktu naik dari tanah ke puncak tepat sama dengan waktu turun dari puncak kembali ke tanah ($t_{\\text{naik}} = t_{\\text{turun}} = \\frac{v_0}{g}$).

> [!TIP] Super Solusi Cepat:
> Untuk mencari perpindahan dari grafik $v-t$, jangan hitung rumus fisika yang rumit. Cukup hitung **luas daerah geometris** (segitiga, persegi panjang, atau trapesium) di bawah kurva grafik $v-t$. Area di atas sumbu $t$ bertanda $(+)$ (maju), area di bawah sumbu $t$ bertanda $(-)$ (mundur)!`
,
  3: `# Rangkuman Rumus Cepat & Intisari Materi — Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Gerak lengkung merupakan gerak partikel pada lintasan dua dimensi. Gerak Parabola (proyektil) memadukan GLB pada sumbu mendatar ($X$) dengan GLBB gravitasi pada sumbu vertikal ($Y$). Gerak Melingkar Beraturan (GMB) mempertahankan kelajuan linier konstan namun arah kecepatan linier selalu berubah akibat percepatan sentripetal menuju pusat lingkaran.

| Bentuk Gerak Lengkung | Komponen Sumbu Datar / Linier | Komponen Sumbu Vertikal / Anguler | Gaya Pengarah & Karakteristik |
| :--- | :--- | :--- | :--- |
| **Gerak Parabola (Proyektil)** | GLB konstan ($a_x = 0$, $v_x = v_{0x}$) | GLBB diperlambat/dipercepat ($a_y = -g$) | Hanya gaya gravitasi ke bawah; gesekan udara diabaikan |
| **Gerak Melingkar Beraturan (GMB)** | Kelajuan linier konstan ($v = \\text{konstan}$) | Kelajuan sudut konstan ($\\omega = \\text{konstan}$, $\\alpha = 0$) | Gaya sentripetal ($F_s$) tegak lurus kecepatan linier mengarah ke pusat putaran |
| **Gerak Melingkar Berubah Beraturan (GMBB)** | Percepatan tangensial ada ($a_t = \\alpha R$) | Percepatan sudut ada ($\\alpha = \\text{konstan} \\neq 0$) | Resultan percepatan total paduan sentripetal dan tangensial: $a_{\\text{tot}} = \\sqrt{a_s^2 + a_t^2}$ |

---

### B. Matriks Rumus Kinematika Gerak Parabola (Proyektil)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Kecepatan Awal Komponen** | $v_{0x} = v_0 \\cos\\theta$<br>$v_{0y} = v_0 \\sin\\theta$ | $v_0$: kelajuan awal tembakan peluru ($\\text{m/s}$); $\\theta$: sudut elevasi terhadap sumbu horizontal ($^{\\circ}$); $v_{0x}$: kecepatan awal sumbu $X$ ($\\text{m/s}$); $v_{0y}$: kecepatan awal sumbu $Y$ ($\\text{m/s}$) | Sudut istimewa: $\\sin 37^{\\circ} = \\cos 53^{\\circ} = 0{,}6$; $\\cos 37^{\\circ} = \\sin 53^{\\circ} = 0{,}8$; $\\sin 30^{\\circ} = 0{,}5$; $\\sin 45^{\\circ} = \\frac{1}{2}\\sqrt{2}$ |
| **Posisi Horizontal (Sumbu X - GLB)** | $x(t) = v_{0x} \\cdot t = (v_0 \\cos\\theta) \\cdot t$ | $x(t)$: posisi mendatar sesaat benda ($\\text{m}$); $v_{0x}$: kecepatan mendatar konstan ($\\text{m/s}$); $t$: waktu tempuh ($\\text{s}$) | Kecepatan mendatar selalu konstan di setiap titik lintasan: $v_x(t) = v_{0x}$ |
| **Posisi Vertikal (Sumbu Y - GLBB)** | $y(t) = (v_0 \\sin\\theta) t - \\frac{1}{2} g t^2$<br>$v_y(t) = v_0 \\sin\\theta - g t$ | $y(t)$: ketinggian vertikal sesaat benda ($\\text{m}$); $v_y(t)$: kecepatan vertikal sesaat pada detik $t$ ($\\text{m/s}$); $g$: gravitasi ($\\text{m/s}^2$); $t$: waktu ($\\text{s}$) | Kecepatan vertikal berkurang saat naik, bernilai nol di puncak, dan berbalik negatif saat turun |
| **Kelajuan & Arah Vektor Sesaat** | $v = \\sqrt{v_x^2 + v_y^2}$<br>$\\tan\\alpha = \\frac{v_y}{v_x}$ | $v$: kelajuan sesaat partikel peluru ($\\text{m/s}$); $v_x, v_y$: komponen kecepatan sesaat ($\\text{m/s}$); $\\alpha$: sudut kemiringan arah gerak terhadap sumbu horizontal ($^{\\circ}$) | Di titik puncak lintasan, $v_y = 0$, sehingga kelajuan benda bernilai minimum: $v_{\\text{puncak}} = v_x = v_0 \\cos\\theta$ |
| **Titik Tertinggi (Puncak Ketinggian)** | $t_p = \\frac{v_0 \\sin\\theta}{g}$<br>$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2 g}$ | $t_p$: durasi waktu mencapai titik tertinggi ($\\text{s}$); $h_{\\max}$: ketinggian maksimum puncak dari tanah ($\\text{m}$); $v_0$: kelajuan awal ($\\text{m/s}$); $g$: gravitasi ($\\text{m/s}^2$) | Syarat titik tertinggi: kecepatan vertikal tepat sama dengan nol ($v_y = 0$) |
| **Titik Terjauh (Jangkauan Maksimum)** | $t_{\\text{total}} = \\frac{2 v_0 \\sin\\theta}{g} = 2 t_p$<br>$X_{\\max} = \\frac{v_0^2 \\sin 2\\theta}{g}$ | $t_{\\text{total}}$: durasi melayang total di udara sampai tanah kembali ($\\text{s}$); $X_{\\max}$: jarak mendatar terjauh ($\\text{m}$); $\\sin 2\\theta = 2 \\sin\\theta \\cos\\theta$ | Jangkauan maksimum terbesar tercapai saat sudut elevasi $\\theta = 45^{\\circ}$ ($\\sin 90^{\\circ} = 1 \\implies X_{\\max} = \\frac{v_0^2}{g}$) |
| **Teorema Sudut Komplementer** | $X_{\\max}(\\theta_1) = X_{\\max}(\\theta_2)$ jika $\\theta_1 + \\theta_2 = 90^{\\circ}$ | $\\theta_1, \\theta_2$: dua sudut elevasi yang saling berkomplemen berjumlah $90^{\\circ}$ (misal: $30^{\\circ}$ dan $60^{\\circ}$, atau $37^{\\circ}$ dan $53^{\\circ}$) | Menghasilkan jangkauan mendatar yang persis identik, namun sudut yang lebih besar mencapai puncak lebih tinggi |
| **Hubungan Tinggi Puncak & Jangkauan** | $\\tan\\theta = \\frac{4 h_{\\max}}{X_{\\max}}$ | $\\theta$: sudut elevasi tembakan ($^{\\circ}$); $h_{\\max}$: tinggi maksimum ($\\text{m}$); $X_{\\max}$: jarak mendatar terjauh ($\\text{m}$) | Shortcut ampuh menghubungkan tinggi puncak dan jangkauan terjauh tanpa memerlukan $v_0$ dan $g$ |
| **Tembakan Mendatar dari Meja ($v_{0y} = 0$)** | $t = \\sqrt{\\frac{2h}{g}}$<br>$X = v_0 \\sqrt{\\frac{2h}{g}}$ | $h$: tinggi meja / tebing pelepasan ($\\text{m}$); $v_0$: kelajuan awal mendatar murni ($\\text{m/s}$); $X$: jarak mendatar peluru tiba di lantai ($\\text{m}$) | Waktu jatuh sama persis dengan waktu gerak jatuh bebas dari ketinggian $h$ |

---

### C. Matriks Rumus Gerak Melingkar (GMB, GMBB & Roda-Roda)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Besaran Pokok Sudut & Frekuensi** | $T = \\frac{t}{n} = \\frac{1}{f}$<br>$f = \\frac{n}{t} = \\frac{1}{T}$<br>$\\omega = \\frac{2\\pi}{T} = 2\\pi f$ | $T$: periode putaran ($\\text{s}$); $f$: frekuensi putaran ($\\text{Hz} = \\text{s}^{-1}$); $n$: banyak putaran; $t$: waktu total ($\\text{s}$); $\\omega$: kecepatan sudut anguler ($\\text{rad/s}$) | Konversi satuan putaran: $1\\text{ rpm} = \\frac{2\\pi}{60}\\text{ rad/s} = \\frac{\\pi}{30}\\text{ rad/s}$; $1\\text{ putaran} = 2\\pi\\text{ rad} = 360^{\\circ}$ |
| **Hubungan Linier dan Anguler** | $s = \\theta \\cdot R$<br>$v = \\omega \\cdot R$ | $s$: panjang busur lintasan ($\\text{m}$); $\\theta$: posisi sudut ($\\text{rad}$); $R$: jari-jari lingkaran ($\\text{m}$); $v$: kelajuan linier tangensial ($\\text{m/s}$) | Kecepatan sudut sama untuk setiap titik pada piringan pejal yang sama |
| **Percepatan & Gaya Sentripetal** | $a_s = \\frac{v^2}{R} = \\omega^2 R$<br>$F_s = m a_s = \\frac{m v^2}{R} = m \\omega^2 R$ | $a_s$: percepatan sentripetal ($\\text{m/s}^2$); $F_s$: gaya sentripetal ($\\text{N}$); $m$: massa partikel pemutar ($\\text{kg}$); $v$: kelajuan linier ($\\text{m/s}$); $R$: jari-jari putar ($\\text{m}$) | Vektor gaya sentripetal selalu tegak lurus kecepatan linier dan berarah menuju titik pusat lingkaran |
| **GMBB: Tiga Rumus Pokok Sudut** | $\\omega_t = \\omega_0 + \\alpha t$<br>$\\theta = \\omega_0 t + \\frac{1}{2} \\alpha t^2$<br>$\\omega_t^2 = \\omega_0^2 + 2 \\alpha \\theta$ | $\\omega_t$: kecepatan sudut akhir saat detik $t$ ($\\text{rad/s}$); $\\omega_0$: kecepatan sudut awal ($\\text{rad/s}$); $\\alpha$: percepatan sudut konstan ($\\text{rad/s}^2$); $\\theta$: sudut tempuh ($\\text{rad}$) | Analog matematis sempurna dengan GLBB: $v \\leftrightarrow \\omega$, $a \\leftrightarrow \\alpha$, $s \\leftrightarrow \\theta$ |
| **Percepatan Tangensial & Total** | $a_t = \\alpha \\cdot R$<br>$a_{\\text{total}} = \\sqrt{a_s^2 + a_t^2}$ | $a_t$: percepatan tangensial penambah kelajuan ($\\text{m/s}^2$); $\\alpha$: percepatan sudut ($\\text{rad/s}^2$); $a_{\\text{total}}$: resultan percepatan partikel pada GMBB ($\\text{m/s}^2$) | $a_s$ tegak lurus $a_t$. $a_s$ mengubah arah gerak, sedangkan $a_t$ mengubah besar kelajuan |
| **Roda Seporos (Seaksial / Satu Poros)** | $\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$ | $\\omega_A, \\omega_B$: kecepatan sudut kedua roda ($\\text{rad/s}$); $v_A, v_B$: kelajuan linier tepi roda ($\\text{m/s}$); $R_A, R_B$: jari-jari roda ($\\text{m}$) | Arah putaran kedua roda selalu searah (seporos putar bersama) |
| **Roda Bersinggungan / Sabuk Rantai** | $v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$ | $v_A, v_B$: kelajuan linier tepi roda ($\\text{m/s}$); $R_A, R_B$: jari-jari roda ($\\text{m}$) | Bersinggungan langsung: arah putaran berlawanan. Dihubungkan sabuk/rantai: arah putaran searah |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Di titik tertinggi gerak parabola, percepatan partikel **TIDAK NOL**, melainkan tetap sebesar percepatan gravitasi bumi ($a = g = 10\\text{ m/s}^2$) berarah lurus ke bawah! Yang bernilai nol hanya kecepatan vertikalnya ($v_y = 0$).
> 2. Pada hubungan roda bersinggungan luar, kecepatan sudut roda berbanding terbalik dengan jari-jarinya ($\\omega \\propto \\frac{1}{R}$). Roda yang lebih kecil berputar lebih cepat secara sudut dibandingkan roda yang lebih besar.

> [!TIP] Super Solusi Cepat:
> Jika soal menyebutkan tembakan peluru mencapai jangkauan terjauh sama dengan 4 kali tinggi puncaknya ($X_{\\max} = 4 h_{\\max}$), maka sudut elevasinya pasti tepat $\\theta = 45^{\\circ}$ (karena $\\tan\\theta = \\frac{4 h_{\\max}}{X_{\\max}} = 1$)!`
,
  4: `# Rangkuman Rumus Cepat & Intisari Materi — Hubungan Gaya dan Gerak (Hukum Newton)
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Dinamika Newton mengkaji kausalitas interaksi mekanik antara resultan gaya luar yang bekerja pada sistem dengan perubahan keadaan gerak benda. Analisis dinamika wajib memetakan seluruh vektor gaya secara analitis menggunakan Diagram Benda Bebas (*Free Body Diagram*).

| Hukum Dinamika | Formula Matematis | Kondisi Fisis Sistem | Makna & Karakteristik Fisis |
| :--- | :--- | :--- | :--- |
| **Hukum I Newton (Inersia)** | $\\Sigma \\vec{F} = 0 \\implies \\vec{a} = 0$ | Benda diam atau bergerak lurus beraturan (GLB) | Hukum Kelembaman: Benda cenderung mempertahankan status gerak aslinya jika tidak diganggu resultan gaya luar |
| **Hukum II Newton (Percepatan)** | $\\Sigma \\vec{F} = m \\vec{a} = \\frac{d\\vec{p}}{dt}$ | Terjadi perubahan kecepatan (GLBB linier) | Percepatan berbanding lurus dengan resultan gaya total dan berbanding terbalik dengan massa kelembaman |
| **Hukum III Newton (Aksi-Reaksi)** | $\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$ | Interaksi kontak atau medan 2 benda terpisah | Sama besar, berlawanan arah, bekerja pada **dua benda yang berbeda**, dan segaris kerja |

---

### B. Matriks Rumus Ragam Gaya & Sistem Dinamika Gerak
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Gaya Berat & Gaya Normal Datar** | $w = m \\cdot g$<br>$N = w = m \\cdot g$ | $w$: gaya berat gravitasi bumi ($\\text{N}$); $m$: massa inersia benda ($\\text{kg}$); $g$: percepatan gravitasi bumi ($\\text{m/s}^2$); $N$: gaya normal tegak lurus bidang sentuh ($\\text{N}$) | Gaya normal bekerja tegak lurus keluar dari permukaan kontak; pada bidang datar horizontal tanpa gaya miring luar berlaku $N = mg$ |
| **Gaya Normal Bidang Miring** | $N = m g \\cos\\theta$<br>$w_x = m g \\sin\\theta$ | $\\theta$: sudut kemiringan bidang terhadap bidang datar ($^{\\circ}$); $w_x$: komponen gaya berat sejajar bidang miring penarik turun ($\\text{N}$); $N$: gaya normal tegak lurus bidang miring ($\\text{N}$) | Komponen $mg\\sin\\theta$ bertindak sebagai penggerak meluncur turun; $mg\\cos\\theta$ menekan permukaan bidang |
| **Gaya Gesek Statis & Kinetis** | $f_{s,\\max} = \\mu_s N$<br>$f_k = \\mu_k N$ | $f_{s,\\max}$: gaya gesek statis maksimum ambang gerak ($\\text{N}$); $f_k$: gaya gesek kinetis saat benda meluncur ($\\text{N}$); $\\mu_s, \\mu_k$: koefisien gesek statis dan kinetis (tanpa satuan, $\\mu_s > \\mu_k$); $N$: gaya normal ($\\text{N}$) | **Kaidah Status Gerak:**<br>1. Jika $F_{\\text{tarik}} \\le f_{s,\\max} \\implies$ Benda **diam** ($a = 0$), $f_{\\text{riil}} = F_{\\text{tarik}}$<br>2. Jika $F_{\\text{tarik}} > f_{s,\\max} \\implies$ Benda **bergerak** ($a > 0$), gaya gesek riil adalah kinetis ($f_k = \\mu_k N$) |
| **Gaya Normal Orang dalam Lift** | Naik dipercepat: $N = m(g + a)$<br>Turun dipercepat: $N = m(g - a)$<br>Kabel lift putus: $N = 0$ | $N$: gaya normal / berat semu yang terbaca pada timbangan pijak di lantai lift ($\\text{N}$); $m$: massa penumpang ($\\text{kg}$); $g$: gravitasi ($\\text{m/s}^2$); $a$: percepatan gerak lift ($\\text{m/s}^2$) | Lift bergerak dengan kelajuan konstan (GLB naik/turun): $a = 0 \\implies N = mg$ (berat semu sama dengan berat riil). Kabel putus: kondisi melayang bebas (*weightlessness*) |
| **Meluncur Turun Bidang Miring** | Licin: $a = g \\sin\\theta$<br>Kasar: $a = g(\\sin\\theta - \\mu_k \\cos\\theta)$ | $a$: percepatan meluncur turun benda ($\\text{m/s}^2$); $g$: gravitasi bumi ($\\text{m/s}^2$); $\\theta$: sudut kemiringan bidang ($^{\\circ}$); $\\mu_k$: koefisien gesek kinetis bidang | Percepatan meluncur pada bidang miring licin bebas dari massa benda ($m$). Syarat meluncur dipercepat pada bidang kasar: $\\tan\\theta > \\mu_s$ |
| **Sistem Katrol Mesin Atwood** | $a = \\frac{m_2 - m_1}{m_1 + m_2} g$<br>$T = \\frac{2 m_1 m_2}{m_1 + m_2} g$ | $m_1, m_2$: massa beban gantung dengan $m_2 > m_1$ ($\\text{kg}$); $a$: percepatan gerak sistem ($\\text{m/s}^2$); $T$: gaya tegangan tali penghubung ($\\text{N}$); $g$: gravitasi ($\\text{m/s}^2$) | Massa katrol dan gesekan tali diabaikan. Beban $m_2$ bergerak dipercepat ke bawah, $m_1$ bergerak ke atas dengan percepatan yang sama |
| **Sistem Balok di Meja Terhubung Katrol** | Licin: $a = \\frac{m_2}{m_1 + m_2} g$<br>Kasar: $a = \\frac{m_2 - \\mu_k m_1}{m_1 + m_2} g$ | $m_1$: massa balok di atas meja ($\\text{kg}$); $m_2$: massa beban yang tergantung vertikal ($\\text{kg}$); $\\mu_k$: koefisien gesek meja; $a$: percepatan gerak ($\\text{m/s}^2$) | Gaya penarik penggerak utama hanyalah gaya berat beban gantung ($w_2 = m_2 g$) |
| **Gaya Kontak Dua Balok Terdorong** | $a = \\frac{F}{m_1 + m_2}$<br>$F_{\\text{kontak}} = \\frac{m_2}{m_1 + m_2} F$ | $F$: gaya dorong luar horizontal pada balok 1 ($\\text{N}$); $m_1$: massa balok pertama ($\\text{kg}$); $m_2$: massa balok kedua di depannya ($\\text{kg}$); $F_{\\text{kontak}}$: gaya desak antar permukaan balok ($\\text{N}$) | Gaya kontak sebanding dengan rasio massa balok yang didorong di depan terhadap total massa |
| **Tikungan Jalan Datar Kasar** | $v_{\\max} = \\sqrt{\\mu_s g R}$ | $v_{\\max}$: kelajuan maksimum kendaraan agar tidak selip terlempar keluar tikungan ($\\text{m/s}$); $\\mu_s$: koefisien gesek statis ban jalan; $R$: jari-jari kelengkungan tikungan ($\\text{m}$) | Gaya sentripetal disediakan sepenuhnya oleh gaya gesek statis ban terhadap aspal jalan ($f_s = \\frac{mv^2}{R}$) |
| **Tikungan Jalan Miring Licin** | $v = \\sqrt{g R \\tan\\theta}$ | $\\theta$: sudut kemiringan jalan miring terhadap bidang datar ($^{\\circ}$); $R$: jari-jari belokan ($\\text{m}$); $v$: kelajuan aman tanpa mengandalkan gaya gesek ($\\text{m/s}$) | Gaya sentripetal disediakan oleh komponen horizontal gaya normal: $N \\sin\\theta = \\frac{mv^2}{R}$ |

---

### C. Gravitasi Universal Newton & Hukum Peredaran Keppler
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Gravitasi Newton** | $F = G \\frac{m_1 m_2}{r^2}$ | $F$: gaya tarik gravitasi antar dua partikel bermassa ($\\text{N}$); $G$: konstanta gravitasi universal ($6{,}67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$); $m_1, m_2$: massa partikel ($\\text{kg}$); $r$: jarak pisah kedua pusat massa ($\\text{m}$) | Mematuhi hukum kuadrat terbalik ($F \\propto \\frac{1}{r^2}$) dan pasangan aksi-reaksi ($F_{12} = -F_{21}$) |
| **Kuat Medan / Percepatan Gravitasi** | $g = G \\frac{M}{r^2}$<br>$\\frac{g_1}{g_2} = \\left(\\frac{r_2}{r_1}\\right)^2$ | $g$: percepatan gravitasi pada jarak $r$ dari pusat planet ($\\text{m/s}^2$); $M$: massa planet induk ($\\text{kg}$); $r$: jarak dari pusat inti planet ($\\text{m}$) | Kuat medan gravitasi di permukaan bumi: $g_0 = G \\frac{M}{R^2}$ ($R$ jari-jari bumi) |
| **Gravitasi pada Ketinggian $h$** | $g_h = g_0 \\left(\\frac{R}{R + h}\\right)^2$ | $g_h$: percepatan gravitasi pada ketinggian $h$ di atas permukaan bumi ($\\text{m/s}^2$); $g_0$: percepatan gravitasi permukaan bumi ($\\text{m/s}^2$); $R$: jari-jari bumi ($\\text{m}$); $h$: ketinggian dari permukaan ($\\text{m}$) | Jika ketinggian $h = R$ (satu jari-jari di atas tanah), gravitasi menyusut menjadi $g_h = \\frac{1}{4} g_0$ |
| **Kelajuan Orbit Satelit Melingkar** | $v_{\\text{orbit}} = \\sqrt{\\frac{G M}{r}} = \\sqrt{g R}$ | $v_{\\text{orbit}}$: kelajuan linier orbit satelit mengelilingi planet ($\\text{m/s}$); $M$: massa planet induk ($\\text{kg}$); $r$: jari-jari orbit dari pusat planet ($r = R + h$, $\\text{m}$) | Gaya gravitasi planet bertindak sebagai gaya sentripetal orbit: $G\\frac{Mm}{r^2} = \\frac{mv^2}{r}$ |
| **Kelajuan Lepas (Escape Velocity)** | $v_{\\text{lepas}} = \\sqrt{\\frac{2 G M}{R}} = \\sqrt{2 g_0 R} = \\sqrt{2} \\, v_{\\text{orbit}}$ | $v_{\\text{lepas}}$: kelajuan minimum benda agar terlepas total dari tarikan gravitasi planet menuju tak hingga ($\\text{m/s}$) | Untuk bumi: $v_{\\text{lepas}} \\approx 11{,}2\\text{ km/s}$ |
| **Hukum III Keppler (Periode Planet)** | $\\frac{T_1^2}{T_2^2} = \\frac{R_1^3}{R_2^3}$ | $T_1, T_2$: periode revolusi orbit planet mengelilingi matahari (tahun atau sekon); $R_1, R_2$: jarak rata-rata sumbu semi-mayor planet ke matahari (satuan astronomi / $\\text{m}$) | Kuadrat periode revolusi berbanding lurus dengan pangkat tiga jarak rata-rata orbit |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Gaya berat ($w$) dan gaya normal ($N$) pada balok diam di atas meja **BUKAN pasangan aksi-reaksi**, meskipun besarnya sama dan arahnya berlawanan! Alasannya: keduanya bekerja pada **satu benda yang sama** (balok). Pasangan reaksi dari gaya normal $N$ adalah gaya tekan balok ke bawah pada permukaan meja. Pasangan reaksi gaya berat adalah gaya tarik gravitasi balok terhadap pusat bumi!

> [!TIP] Super Solusi Cepat:
> Pada seluruh sistem katrol majemuk berbeban licin, percepatan sistem dapat dihitung seketika dalam satu baris menggunakan Formula Sakti:
> $$a = \\frac{\\Sigma \\text{Gaya Penggerak Seluruh Sistem}}{\\Sigma \\text{Massa Total Seluruh Sistem}} = \\frac{\\Sigma F_{\\text{penggerak}}}{\\Sigma m_{\\text{total}}}$$`
,
  5: `# Rangkuman Rumus Cepat & Intisari Materi — Momentum dan Impuls
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Momentum mengukur kuantitas kelembaman gerak suatu benda bermassa yang sedang melaju dengan kecepatan tertentu. Impuls adalah besaran vektor transfer momentum akibat gaya luar yang bekerja dalam interval waktu kontak yang sangat singkat. Jika resultan gaya eksternal yang bekerja pada sistem bernilai nol, momentum linier total sistem bersifat kekal mutlak.

| Parameter Dinamika | Lambang & Dimensi | Sifat Vektor & Arah | Definisi Fisis & Makna Satuan SI |
| :--- | :--- | :--- | :--- |
| **Momentum Linier** | $\\vec{p}$, $[M][L][T]^{-1}$ | Besaran Vektor, searah vektor kecepatan $\\vec{v}$ | Ukuran kesulitan menghentikan benda bergerak; satuan SI: $\\text{kg}\\cdot\\text{m/s} = \\text{N}\\cdot\\text{s}$ |
| **Impuls Gaya** | $\\vec{I}$, $[M][L][T]^{-1}$ | Besaran Vektor, searah gaya kontak $\\vec{F}$ | Hasil kali gaya impulsif dengan durasi kontak $\\Delta t$; setara dengan perubahan momentum $\\Delta \\vec{p}$ |
| **Koefisien Restitusi ($e$)** | $e$, $[1]$ (tanpa dimensi) | Bilangan skalar rasio kelajuan relatif | Derajat kelentingan elastisitas tumbukan ($0 \\le e \\le 1$) |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Momentum Linier Partikel** | $\\vec{p} = m \\cdot \\vec{v}$ | $\\vec{p}$: momentum linier benda ($\\text{kg}\\cdot\\text{m/s}$ atau $\\text{N}\\cdot\\text{s}$); $m$: massa inersia benda ($\\text{kg}$); $\\vec{v}$: vektor kecepatan benda ($\\text{m/s}$) | Karena besaran vektor, penetapan tanda positif ($+$) ke kanan/atas dan negatif ($-$) ke kiri/bawah wajib konsisten |
| **Impuls Gaya & Teorema Impuls-Momentum** | $\\vec{I} = \\vec{F} \\Delta t = \\int_{t_1}^{t_2} \\vec{F} dt = \\Delta \\vec{p}$<br>$\\vec{I} = m(\\vec{v}_t - \\vec{v}_0)$ | $\\vec{I}$: impuls gaya ($\\text{N}\\cdot\\text{s}$); $\\vec{F}$: gaya impulsif rata-rata ($\\text{N}$); $\\Delta t$: durasi waktu tumbukan/kontak ($\\text{s}$); $m$: massa ($\\text{kg}$); $\\vec{v}_0$: kecepatan awal sebelum tumbukan ($\\text{m/s}$); $\\vec{v}_t$: kecepatan akhir setelah tumbukan ($\\text{m/s}$) | Luas area di bawah kurva grafik gaya terhadap waktu ($F-t$) merepresentasikan nilai impuls $I$ |
| **Hukum Kekekalan Momentum Linier** | $\\Sigma \\vec{p}_{\\text{awal}} = \\Sigma \\vec{p}_{\\text{akhir}}$<br>$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$ | $m_1, m_2$: massa benda 1 dan 2 ($\\text{kg}$); $v_1, v_2$: kelajuan awal sebelum bertumbukan ($\\text{m/s}$); $v_1', v_2'$: kelajuan akhir sesaat setelah bertumbukan ($\\text{m/s}$) | Berlaku mutlak pada seluruh jenis tumbukan terisolasi selama tidak ada resultan gaya luar sistem ($\\Sigma F_{\\text{eksternal}} = 0$) |
| **Koefisien Restitusi Relatif ($e$)** | $e = -\\frac{v_2' - v_1'}{v_2 - v_1} = -\\frac{\\Delta v'}{\\Delta v}$ | $e$: koefisien elastisitas restitusi ($0 \\le e \\le 1$); $v_1, v_2$: kecepatan awal sebelum tumbukan ($\\text{m/s}$); $v_1', v_2'$: kecepatan setelah tumbukan ($\\text{m/s}$) | Tanda minus menunjukkan bahwa arah kecepatan relatif kedua benda berbalik setelah tumbukan |
| **Tumbukan Lenting Sempurna ($e = 1$)** | Kekal Momentum & Kekal Energi Kinetik:<br>$\\Sigma EK_{\\text{awal}} = \\Sigma EK_{\\text{akhir}}$<br>$-(v_2' - v_1') = v_2 - v_1$ | $EK$: energi kinetik mekanik ($\\text{J}$); $e = 1$ | Tidak ada energi mekanik yang hilang menjadi panas atau suara. Jika massa sama ($m_1 = m_2$), kecepatan bertukar ($v_1' = v_2, v_2' = v_1$) |
| **Tumbukan Lenting Sebagian ($0 < e < 1$)** | Momentum kekal, Energi Kinetik tidak kekal:<br>$\\Delta EK = EK_{\\text{awal}} - EK_{\\text{akhir}} > 0$ | $e$: bernilai pecahan antara 0 dan 1 (contoh: $0{,}4; 0{,}6$); $\\Delta EK$: energi mekanik terdisipasi menjadi kalor, suara, atau deformasi permanen ($\\text{J}$) | Tipe tumbukan yang paling sering terjadi di dunia nyata |
| **Tumbukan Tidak Lenting Sama Sekali ($e = 0$)** | Kedua benda menyatu bergerak bersama:<br>$v_1' = v_2' = v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$ | $v'$: kecepatan bersama kedua benda setelah tumbukan ($\\text{m/s}$); $m_1, m_2$: massa benda ($\\text{kg}$); $e = 0$ | Kehilangan energi kinetik mekanik bernilai maksimum |

---

### C. Pola Aplikasi Khas Soal TKA (Pantulan, Balistik, & Roket)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Pantulan Bola Vertikal Berulang** | $e = \\sqrt{\\frac{h_1}{h_0}} = \\sqrt{\\frac{h_2}{h_1}} = \\sqrt{\\frac{h_n}{h_{n-1}}}$<br>$h_n = h_0 \\cdot e^{2n}$ | $h_0$: ketinggian awal pelepasan jatuh bebas ($\\text{m}$); $h_1$: tinggi pantulan pertama ($\\text{m}$); $h_2$: tinggi pantulan kedua ($\\text{m}$); $h_n$: tinggi pantulan ke-$n$ ($\\text{m}$); $e$: koefisien restitusi | Sifat deret geometri: rasio tinggi dua pantulan berurutan selalu konstan: $\\frac{h_1}{h_0} = \\frac{h_2}{h_1} = e^2$ |
| **Waktu & Jarak Pantulan Total Bola** | $t_{\\text{total}} = t_0 \\left(\\frac{1 + e}{1 - e}\\right) = \\sqrt{\\frac{2h_0}{g}} \\left(\\frac{1 + e}{1 - e}\\right)$<br>$s_{\\text{total}} = h_0 \\left(\\frac{1 + e^2}{1 - e^2}\\right)$ | $t_{\\text{total}}$: durasi waktu total bola memantul hingga berhenti diam di lantai ($\\text{s}$); $s_{\\text{total}}$: panjang lintasan vertikal total yang dilalui bola ($\\text{m}$) | Formula cepat deret tak hingga untuk pantulan bola elastis sebagian |
| **Ayunan Balistik (Uji Peluru)** | $v_p = \\frac{m_p + m_b}{m_p} \\sqrt{2 g h}$ | $v_p$: kecepatan awal peluru sebelum menembus balok ($\\text{m/s}$); $m_p$: massa peluru ($\\text{kg}$); $m_b$: massa balok kayu gantung ($\\text{kg}$); $h$: simpangan ketinggian vertikal maksimum ayunan balok ($\\text{m}$) | Tumbukan tidak lenting ($e = 0$) diikuti kekekalan energi mekanik ayunan ($\frac{1}{2}(m_p+m_b)v'^2 = (m_p+m_b)gh$) |
| **Hentakan Mundur Senjata / Meriam** | $v_s = -\\frac{m_p}{m_s} v_p$ | $v_s$: kecepatan gerak sentakan mundur senapan/senjata ($\\text{m/s}$); $m_s$: massa senapan ($\\text{kg}$); $m_p$: massa peluru ($\\text{kg}$); $v_p$: kecepatan luncur peluru ($\\text{m/s}$) | Sebelum menembak, sistem diam ($p_{\\text{awal}} = 0$). Tanda negatif menandakan arah hentakan senapan berlawanan dengan arah peluru |
| **Propulsi Dorongan Roket Gas** | $F_{\\text{dorong}} = v_{\\text{rel}} \\left(\\frac{dm}{dt}\\right)$<br>$a = \\frac{v_{\\text{rel}}}{m} \\left(\\frac{dm}{dt}\\right) - g$ | $F_{\\text{dorong}}$: gaya dorong dorong propulsi roket ke atas ($\\text{N}$); $v_{\\text{rel}}$: kelajuan semburan gas buang relatif terhadap roket ($\\text{m/s}$); $\\frac{dm}{dt}$: laju pembakaran massa bahan bakar roket tiap detik ($\\text{kg/s}$); $m$: massa roket sesaat ($\\text{kg}$) | Menerapkan Hukum III Newton dan laju perubahan massa sistem terbuka variabel |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Jangan lupa bahwa kecepatan adalah **besaran vektor**. Jika bola bermassa $m$ menumbuk dinding tegak lurus dengan kecepatan $v$ dan terpantul balik dengan kelajuan yang sama $v$, perubahannya BUKAN nol, melainkan:
> $$\\Delta p = p_{\\text{akhir}} - p_{\\text{awal}} = (-mv) - (+mv) = -2mv$$
> Besar impuls dinding adalah $I = \\vert \\Delta p \\vert = 2mv$.

> [!TIP] Super Solusi Cepat:
> Pada tumbukan lenting sempurna ($e = 1$) antara dua benda bermassa identik ($m_1 = m_2$), kecepatan kedua benda **langsung bertukar tempat tanpa perlu dihitung**: $v_1' = v_2$ dan $v_2' = v_1$! Jika bola 1 melaju $8\\text{ m/s}$ menabrak bola 2 yang diam, setelah tumbukan bola 1 langsung diam ($v_1' = 0$) dan bola 2 melesat dengan kelajuan $v_2' = 8\\text{ m/s}$!`
,
  6: `# Rangkuman Rumus Cepat & Intisari Materi — Dinamika Rotasi dan Kesetimbangan Benda Tegar
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Dinamika rotasi menganalisis gerakan melingkar benda tegar terhadap sumbu poros di bawah pengaruh resultan momen gaya (torsi). Momen inersia merefleksikan kelembaman distribusi massa relatif terhadap poros putar. Benda tegar berada dalam kondisi kesetimbangan statis sempurna jika memenuhi syarat kesetimbangan translasi sekaligus kesetimbangan rotasi.

| Konsep Dinamika | Analogi Translasi Linier | Formula Rotasi Benda Tegar | Satuan SI | Makna Fisis & Karakteristik |
| :--- | :--- | :--- | :--- | :--- |
| **Penyebab Gerak** | Gaya: $\\vec{F}$ | Momen Gaya (Torsi): $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ | $\\text{N}\\cdot\\text{m}$ | Kecenderungan gaya untuk memutar benda terhadap poros engsel |
| **Kelembaman Sistem** | Massa Inersia: $m$ | Momen Inersia: $I = \\Sigma m_i r_i^2 = k M R^2$ | $\\text{kg}\\cdot\\text{m}^2$ | Kelembaman benda terhadap perubahan kecepatan putar sudut |
| **Hukum II Dinamika** | $\\Sigma F = m \\cdot a$ | $\\Sigma \\tau = I \\cdot \\alpha$ | $\\text{N}\\cdot\\text{m}$ | Resultan torsi menghasilkan percepatan sudut anguler $\\alpha$ |
| **Kuantitas Gerak** | Momentum: $p = m \\cdot v$ | Momentum Sudut: $L = I \\cdot \\omega$ | $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ | Bersifat kekal jika tidak ada resultan torsi luar ($\\Sigma \\tau_{\\text{eksternal}} = 0$) |
| **Energi Kinetik** | $EK_{\\text{trans}} = \\frac{1}{2} m v^2$ | $EK_{\\text{rot}} = \\frac{1}{2} I \\omega^2$ | $\\text{Joule}$ | Energi yang dimiliki partikel atau benda tegar yang sedang berputar |

---

### B. Matriks Rumus Utama Momen Gaya & Momen Inersia Benda Simetris
| Sub-Materi / Bentuk Geometri | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan & Konstanta Inersia ($k$) |
| :--- | :--- | :--- | :--- |
| **Momen Gaya / Torsi ($\\tau$)** | $\\tau = r \\cdot F \\sin\\theta = F \\cdot d$ | $\\tau$: besar momen gaya torsi ($\\text{N}\\cdot\\text{m}$); $r$: jarak dari poros ke titik tangkap gaya ($\\text{m}$); $F$: besar gaya luar pemutar ($\\text{N}$); $\\theta$: sudut antara lengan $r$ dan vektor gaya $F$ ($^{\\circ}$); $d = r \\sin\\theta$: lengan momen tegak lurus ($\\text{m}$) | Aturan tanda konvensional: torsi bertanda $(+)$ jika memutar berlawanan arah jarum jam (CCW), bertanda $(-)$ jika searah jarum jam (CW) |
| **Momen Inersia Partikel Titik** | $I = \\Sigma m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + \\dots$ | $I$: momen inersia total sistem partikel ($\\text{kg}\\cdot\\text{m}^2$); $m_i$: massa partikel ke-$i$ ($\\text{kg}$); $r_i$: jarak tegak lurus partikel ke sumbu poros putar ($\\text{m}$) | Jarak $r$ diukur tegak lurus langsung menuju sumbu rotasi |
| **Teorema Sumbu Sejajar** | $I = I_{\\text{pm}} + M d^2$ | $I$: momen inersia pada sumbu sejajar baru berjarak $d$ ($\\text{kg}\\cdot\\text{m}^2$); $I_{\\text{pm}}$: momen inersia terhadap sumbu pusat massa ($\\text{kg}\\cdot\\text{m}^2$); $M$: massa total benda ($\\text{kg}$); $d$: pergeseran jarak antar sumbu sejajar ($\\text{m}$) | Momen inersia terhadap poros pusat massa selalu merupakan nilai minimum |
| **Batang Silinder Homogen** | Poros Pusat Massa: $I = \\frac{1}{12} M L^2$<br>Poros Ujung Batang: $I = \\frac{1}{3} M L^2$ | $M$: massa total batang homogen ($\\text{kg}$); $L$: panjang total batang silinder ($\\text{m}$) | Diputar di tengah ($k = \\frac{1}{12}$); diputar di salah satu ujung engsel ($k = \\frac{1}{3}$) |
| **Silinder Pejal / Cakram Roda** | $I = \\frac{1}{2} M R^2$ | $M$: massa silinder pejal ($\\text{kg}$); $R$: jari-jari silinder ($\\text{m}$) | Konstanta inersia $k = 0{,}5$ |
| **Silinder Tipis Berongga / Cincin** | $I = M R^2$ | $M$: massa silinder ($\\text{kg}$); $R$: jari-jari cincin/silinder ($\\text{m}$) | Seluruh massa terkonsentrasi di tepi luar ($k = 1{,}0$) |
| **Bola Pejal Homogen** | $I = \\frac{2}{5} M R^2$ | $M$: massa bola pejal ($\\text{kg}$); $R$: jari-jari bola pejal ($\\text{m}$) | Poros melalui titik pusat bola ($k = 0{,}4$) |
| **Bola Tipis Berongga (Kulit Bola)** | $I = \\frac{2}{3} M R^2$ | $M$: massa kulit bola berongga ($\\text{kg}$); $R$: jari-jari bola ($\\text{m}$) | Poros melalui diameter pusat rongga ($k = \\frac{2}{3} \\approx 0{,}67$) |

---

### C. Gerak Menggelinding Murni & Kesetimbangan Statis Benda Tegar
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Energi Kinetik Menggelinding** | $EK_{\\text{total}} = EK_{\\text{trans}} + EK_{\\text{rot}}$<br>$EK_{\\text{total}} = \\frac{1}{2} m v^2 (1 + k)$ | $EK_{\\text{total}}$: energi kinetik total benda menggelinding murni ($\\text{J}$); $m$: massa benda ($\\text{kg}$); $v$: kelajuan translasi pusat massa ($\\text{m/s}$); $k$: konstanta bentuk momen inersia ($I = k m R^2$) | Menggelinding murni memadukan translasi linier dan rotasi tanpa slip ($v = \\omega R$) |
| **Percepatan Menggelinding di Bidang Miring** | $a = \\frac{g \\sin\\theta}{1 + k}$ | $a$: percepatan translasi turun pusat massa ($\\text{m/s}^2$); $g$: gravitasi ($\\text{m/s}^2$); $\\theta$: sudut kemiringan bidang ($^{\\circ}$); $k$: konstanta inersia | Benda dengan nilai $k$ lebih kecil memiliki percepatan menggelinding lebih besar |
| **Kelajuan di Dasar Bidang Miring** | $v = \\sqrt{\\frac{2 g h}{1 + k}}$ | $v$: kelajuan pusat massa saat tiba di dasar bidang miring ($\\text{m/s}$); $h$: beda ketinggian vertikal bidang miring ($\\text{m}$); $k$: konstanta inersia | Diturunkan dari Hukum Kekekalan Energi Mekanik ($mgh = \\frac{1}{2}mv^2(1+k)$) |
| **Gaya Gesek Statis Menggelinding** | $f_s = \\frac{k}{1 + k} m g \\sin\\theta$ | $f_s$: gaya gesek statis penahan slip agar benda menggelinding sempurna ($\\text{N}$) | Syarat tidak tergelincir slip: $\\mu_s \\ge \\frac{k}{1+k} \\tan\\theta$ |
| **Kekekalan Momentum Sudut** | $\\Sigma \\tau_{\\text{luar}} = 0 \\implies I_1 \\omega_1 = I_2 \\omega_2$ | $I_1, I_2$: momen inersia awal dan akhir ($\\text{kg}\\cdot\\text{m}^2$); $\\omega_1, \\omega_2$: kecepatan sudut putar awal dan akhir ($\\text{rad/s}$) | Contoh: Penari balet merapatkan tangan ($I_2 < I_1$), maka putaran melesat lebih cepat ($\\omega_2 > \\omega_1$) |
| **Syarat Kesetimbangan Statis Sempurna** | $\\Sigma F_x = 0, \\quad \\Sigma F_y = 0$<br>$\\Sigma \\tau_{\\text{poros}} = 0$ | $\\Sigma F$: resultan gaya translasi pada sumbu $X$ dan $Y$ bernilai nol; $\\Sigma \\tau$: resultan torsi terhadap titik poros manapun bernilai nol | Benda tegar tidak bergeser (translasi) dan tidak berputar (rotasi) |
| **Tangga Bersandar Dinding Licin Lantai Kasar** | $\\mu_s = \\frac{1}{2 \\tan\\theta}$ | $\\mu_s$: koefisien gesek statis minimum lantai agar tangga tepat tidak slip; $\\theta$: sudut kemiringan tangga terhadap lantai horizontal ($^{\\circ}$) | Dinding licin vertikal tanpa gesekan ($f_{\\text{dinding}} = 0$); tangga homogen dengan titik berat di tengah panjangnya |
| **Titik Berat Gabungan Luasan Bidang (2D)** | $x_0 = \\frac{\\Sigma A_i x_i}{\\Sigma A_i}, \\quad y_0 = \\frac{\\Sigma A_i y_i}{\\Sigma A_i}$ | $x_0, y_0$: koordinat titik berat gabungan ($\\text{m}$); $A_i$: luas penampang bagian ke-$i$ ($\\text{m}^2$); $x_i, y_i$: letak titik berat masing-masing komponen luasan ($\\text{m}$) | Letak titik berat bidang simetris penting:<br>Segitiga: $y = \\frac{1}{3} t$ dari alas<br>Setengah lingkaran pejal: $y = \\frac{4R}{3\\pi}$ dari diameter |
| **Sistem Katrol Bermassa Silinder Pejal** | $a = \\frac{m_2 - m_1}{m_1 + m_2 + \\frac{1}{2}M} g$ | $m_1, m_2$: massa beban gantung ($m_2 > m_1$, $\\text{kg}$); $M$: massa katrol silinder pejal ($k = 0{,}5$, $\\text{kg}$); $a$: percepatan sistem ($\\text{m/s}^2$) | Inersia katrol memperlambat percepatan sistem sebesar tambahan $\\frac{1}{2}M$ pada penyebut massa total |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada balapan menggelinding menuruni bidang miring dari ketinggian yang sama, benda yang tiba di dasar **paling cepat** adalah benda dengan nilai konstanta inersia $k$ **PALING KECIL**, bebas dari massa ($M$) dan jari-jarinya ($R$)!
>    Urutan kedatangan di dasar:
>    $$\\text{Bola Pejal } (k=0{,}4) > \\text{Silinder Pejal } (k=0{,}5) > \\text{Bola Berongga } (k=0{,}67) > \\text{Silinder Berongga } (k=1{,}0)$$
> 2. Pada kesetimbangan tangga, lengan gaya berat batang tangga diukur terhadap poros di lantai secara mendatar, yaitu setengah jarak dasar tangga ke dinding: $d = \\frac{1}{2} L \\cos\\theta$, bukan panjang tangga!

> [!TIP] Super Solusi Cepat:
> Jika sebuah tangga homogen bersandar pada dinding licin dan tepat akan tergelincir slip saat membentuk sudut $\\theta$ terhadap lantai datar, langsung gunakan rumus kilat:
> $$\\mu_s = \\frac{1}{2 \\tan\\theta}$$`
,
  7: `# Rangkuman Rumus Cepat & Intisari Materi — Fluida Statis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Fluida statis menelaah perilaku mekanika zat alir (cairan dan gas) yang berada dalam keadaan diam setimbang tanpa pengaruh tegangan geser (*shear stress*). Besaran fisis kunci meliputi tekanan hidrostatis, hukum penerusan tekanan Pascal, gaya apung Archimedes, tegangan permukaan zat cair, gejala kapilaritas, dan viskositas fluida kental.

| Hukum / Prinsip Pokok | Landasan Fisis | Rumus Kunci | Aplikasi Nyata Soal TKA |
| :--- | :--- | :--- | :--- |
| **Hukum Pokok Hidrostatika** | Titik pada bidang datar sama di fluida homogen memiliki tekanan identik | $P_A = P_B \\implies \\rho_1 h_1 = \\rho_2 h_2$ | Pipa U pengukur massa jenis minyak/cairan asing |
| **Hukum Pascal** | Tekanan eksternal diteruskan ke segala arah sama besar secara seragam | $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{D_2}{D_1}\\right)^2$ | Dongkrak hidrolik mobil, rem hidrolik, mesin pengepres |
| **Hukum Archimedes** | Gaya apung ke atas sama dengan berat fluida yang dipindahkan | $F_A = \\rho_f \\cdot V_{\\text{celup}} \\cdot g$ | Kapal laut terapung, kapal selam, balon udara, hidrometer |
| **Hukum Stokes** | Gaya hambat gesekan fluida kental terhadap gerak benda bola pejal | $F_s = 6 \\pi \\eta r v$ | Kecepatan terminal tetes air hujan, viskometer bola jatuh |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Massa Jenis & Massa Jenis Campuran** | $\\rho = \\frac{m}{V}$<br>$\\rho_c = \\frac{m_1 + m_2}{V_1 + V_2} = \\frac{\\rho_1 V_1 + \\rho_2 V_2}{V_1 + V_2}$ | $\\rho$: massa jenis ($\\text{kg/m}^3$); $m$: massa zat ($\\text{kg}$); $V$: volume zat ($\\text{m}^3$); $\\rho_c$: massa jenis campuran fluida ($\\text{kg/m}^3$) | Konversi penting: $1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$; massa jenis air murni $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3 = 1\\text{ g/cm}^3$ |
| **Tekanan Hidrostatis** | $P_h = \\rho_f \\cdot g \\cdot h$ | $P_h$: tekanan hidrostatis cairan ($\\text{Pa} = \\text{N/m}^2$); $\\rho_f$: massa jenis fluida cair ($\\text{kg/m}^3$); $g$: percepatan gravitasi bumi ($\\text{m/s}^2$); $h$: kedalaman diukur dari permukaan atas cairan ($\\text{m}$) | Tekanan hidrostatis hanya bergantung pada kedalaman vertikal $h$ dan massa jenis $\\rho_f$, sama sekali tidak bergantung pada bentuk bejana wadah |
| **Tekanan Mutlak / Total** | $P_{\\text{total}} = P_0 + P_h = P_0 + \\rho_f g h$ | $P_{\\text{total}}$: tekanan mutlak total pada dasar fluida ($\\text{Pa}$); $P_0$: tekanan atmosfer udara luar pada permukaan ($1\\text{ atm} = 1{,}013 \\times 10^5\\text{ Pa} \\approx 10^5\\text{ Pa} = 76\\text{ cmHg}$) | Tekanan gauge adalah selisih antara tekanan mutlak dan tekanan atmosfer: $P_{\\text{gauge}} = P_{\\text{total}} - P_0 = \\rho g h$ |
| **Hukum Pascal & Dongkrak Hidrolik** | $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{D_2}{D_1}\\right)^2$ | $F_1$: gaya tekan masukan pada penampang kecil ($\\text{N}$); $F_2$: gaya angkat beban pada penampang besar ($\\text{N}$); $A_1, A_2$: luas penampang piston ($\\text{m}^2$); $D_1, D_2$: diameter silinder piston ($\\text{m}$) | Keuntungan mekanis gaya berbanding lurus dengan **kuadrat rasio diameter piston** ($F \\propto D^2$) |
| **Hukum Archimedes: Gaya Apung** | $F_A = \\rho_f \\cdot V_{\\text{celup}} \\cdot g = w_{\\text{fluida}}$ | $F_A$: gaya apung ke atas ($\\text{N}$); $\\rho_f$: massa jenis fluida sekitar ($\\text{kg/m}^3$); $V_{\\text{celup}}$: volume benda yang tercelup terbenam di dalam fluida ($\\text{m}^3$); $g$: gravitasi ($\\text{m/s}^2$) | $V_{\\text{celup}}$ adalah volume fluida yang terdesak dipindahkan oleh benda |
| **Kondisi Benda Terapung** | $\\rho_b < \\rho_f$<br>$w = F_A \\implies \\frac{V_{\\text{celup}}}{V_b} = \\frac{\\rho_b}{\\rho_f}$ | $\\rho_b$: massa jenis rata-rata benda padat ($\\text{kg/m}^3$); $\\rho_f$: massa jenis cairan ($\\text{kg/m}^3$); $V_{\\text{celup}}$: volume terbenam; $V_b$: volume total benda | Fraksi bagian benda yang muncul di atas permukaan cairan: $\\frac{V_{\\text{muncul}}}{V_b} = 1 - \\frac{\\rho_b}{\\rho_f}$ |
| **Kondisi Benda Melayang** | $\\rho_b = \\rho_f \\implies V_{\\text{celup}} = V_b$ | $\\rho_b, \\rho_f$: massa jenis benda dan fluida identik; seluruh volume benda terbenam namun tidak menyentuh dasar wadah | Gaya apung tepat menyeimbangkan gaya berat benda di sembarang kedalaman ($F_A = w$) |
| **Kondisi Benda Tenggelam & Berat Semu** | $\\rho_b > \\rho_f$<br>$w' = w - F_A = (\\rho_b - \\rho_f) V_b g$ | $w'$: berat semu benda saat ditimbang di dalam fluida ($\\text{N}$); $w = m g = \\rho_b V_b g$: berat asli benda di udara ($\\text{N}$); $F_A$: gaya apung Archimedes ($\\text{N}$) | Benda tenggelam hingga menyentuh dasar bejana karena gaya berat melebihi gaya apung maksimumnya ($w > F_A$) |

---

### C. Tegangan Permukaan, Kapilaritas, & Viskositas Fluida Kental
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Tegangan Permukaan Kawat Film** | $\\gamma = \\frac{F}{d} = \\frac{F}{2 L}$ | $\\gamma$: koefisien tegangan permukaan zat cair ($\\text{N/m}$); $F$: gaya tarik selaput cairan penahan kawat geser ($\\text{N}$); $L$: panjang kawat geser ($\\text{m}$); $d = 2L$: panjang keliling kontak karena selaput memiliki dua lapisan permukaan | Tegangan permukaan menyebabkan tetesan cairan berbentuk bola dan jarum dapat terapung di atas air |
| **Kenaikan / Penurunan Kapilaritas** | $h = \\frac{2 \\gamma \\cos\\theta}{\\rho g r}$ | $h$: tinggi kenaikan/penurunan permukaan cairan dalam pipa kapiler ($\\text{m}$); $\\gamma$: tegangan permukaan ($\\text{N/m}$); $\\theta$: sudut kontak antara cairan dan dinding tabung ($^{\\circ}$); $\\rho$: massa jenis cairan ($\\text{kg/m}^3$); $r$: jari-jari pipa kapiler ($\\text{m}$) | $\\theta < 90^{\\circ}$ (air): meniskus cekung, cairan naik ($h > 0$). $\\theta > 90^{\\circ}$ (raksa): meniskus cembung, cairan turun ($h < 0$) |
| **Gaya Gesek Viskositas Stokes** | $F_s = 6 \\pi \\eta r v$ | $F_s$: gaya gesekan hambat fluida kental ($\\text{N}$); $\\eta$: koefisien viskositas dinamis fluida ($\\text{Pa}\\cdot\\text{s} = \\text{N}\\cdot\\text{s/m}^2$); $r$: jari-jari bola benda ($\\text{m}$); $v$: kelajuan gerak bola relatif terhadap fluida ($\\text{m/s}$) | Berlaku khusus untuk benda berbentuk bola bulat pejal licin yang bergerak dalam fluida laminer |
| **Kecepatan Terminal Bola Jatuh** | $v_t = \\frac{2 r^2 g (\\rho_b - \\rho_f)}{9 \\eta}$ | $v_t$: kecepatan terminal konstan saat gaya berat seimbang dengan gaya apung dan gaya Stokes ($\\text{m/s}$); $\\rho_b$: massa jenis bola pejal ($\\text{kg/m}^3$); $\\rho_f$: massa jenis fluida kental ($\\text{kg/m}^3$); $r$: jari-jari bola ($\\text{m}$) | Kondisi kesetimbangan gaya saat mencapai kelajuan terminal maksimum: $\\Sigma F = 0 \\implies w = F_A + F_s$ |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Kedalaman $h$ pada rumus tekanan hidrostatis ($P_h = \\rho g h$) **WAJIB diukur dari permukaan atas cairan ke bawah**, BUKAN dari dasar bejana ke atas!
> 2. Pada benda terapung, fraksi volume yang tercelup terbenam merepresentasikan rasio massa jenis benda terhadap cairan:
>    $$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{benda}}}{\\rho_{\\text{fluida}}}$$
>    Jika sebuah gunung es terapung dengan $90\\%$ volumenya terbenam di air laut, maka massa jenis gunung es tersebut tepat $0{,}9$ kali massa jenis air laut!

> [!TIP] Super Solusi Cepat:
> Pada pipa U yang berisi dua cairan tak bercampur (misal air dan minyak), langsung gunakan persamaan seimbang hidrostatis:
> $$\\rho_1 \\cdot h_1 = \\rho_2 \\cdot h_2 \\implies h_{\\text{minyak}} = \\frac{\\rho_{\\text{air}}}{\\rho_{\\text{minyak}}} \\cdot h_{\\text{air}}$$`
,
  8: `# Rangkuman Rumus Cepat & Intisari Materi — Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Fluida dinamis mengkaji karakteristik aliran zat cair dan gas yang bergerak melintasi penampang pipa atau permukaan objek aerodinamis. Analisis disederhanakan melalui model Fluida Ideal yang memenuhi empat postulat pokok: inkompresibel (massa jenis konstan), non-viskos (tanpa gesekan internal), aliran tunak/*steady* (kecepatan di tiap titik konstan terhadap waktu), dan laminer (garis arus tidak saling bersilangan).

| Prinsip Pokok Dinamis | Landasan Konservasi Fisis | Formula Matematis Kunci | Makna & Karakteristik Fisis |
| :--- | :--- | :--- | :--- |
| **Persamaan Kontinuitas** | Hukum Kekekalan Massa Fluida | $Q_1 = Q_2 \\implies A_1 v_1 = A_2 v_2$ | Debit volume fluida selalu konstan di setiap penampang pipa |
| **Asas Bernoulli** | Hukum Kekekalan Energi Mekanik Fluida | $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$ | Daerah dengan kelajuan aliran tinggi memiliki tekanan fluida yang lebih rendah |
| **Teorema Torricelli** | Konversi energi potensial tangki menjadi energi kinetik semprotan | $v = \\sqrt{2 g h}, \\quad X = 2 \\sqrt{h H}$ | Kelajuan semburan lubang bocor sama dengan kelajuan jatuh bebas dari permukaan atas |
| **Gaya Angkat Aerodinamis** | Beda tekanan sayap atas dan bawah pesawat terbang | $F_{\\text{angkat}} = \\frac{1}{2} \\rho A (v_2^2 - v_1^2)$ | Kelajuan udara di atas sayap dirancang lebih tinggi sehingga tekanan di bawah sayap lebih besar |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Debit Aliran Volume ($Q$)** | $Q = \\frac{V}{t} = A \\cdot v$ | $Q$: debit aliran fluida ($\\text{m}^3/\\text{s}$); $V$: volume total fluida yang melintas ($\\text{m}^3$); $t$: waktu pengaliran ($\\text{s}$); $A$: luas penampang pipa ($\\text{m}^2$); $v$: kelajuan rata-rata aliran fluida ($\\text{m/s}$) | Konversi debit: $1\\text{ liter/s} = 10^{-3}\\text{ m}^3/\\text{s}$; pipa berpenampang lingkaran memiliki luas $A = \\frac{1}{4}\\pi D^2$ |
| **Persamaan Kontinuitas** | $A_1 v_1 = A_2 v_2$<br>$\\frac{v_2}{v_1} = \\frac{A_1}{A_2} = \\left(\\frac{D_1}{D_2}\\right)^2$ | $A_1, A_2$: luas penampang pipa masuk dan keluar ($\\text{m}^2$); $v_1, v_2$: kelajuan aliran fluida di penampang 1 dan 2 ($\\text{m/s}$); $D_1, D_2$: diameter pipa ($\\text{m}$) | Kelajuan aliran fluida berbanding terbalik dengan kuadrat diameternya ($v \\propto \\frac{1}{D^2}$). Pipa menyempit mengalirkan fluida lebih cepat |
| **Hukum Bernoulli Lengkap** | $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$ | $P_1, P_2$: tekanan statis fluida ($\\text{Pa}$); $\\rho$: massa jenis fluida ($\\text{kg/m}^3$); $v_1, v_2$: kelajuan aliran ($\\text{m/s}$); $h_1, h_2$: ketinggian posisi pipa dari bidang acuan ($\\text{m}$); $g$: percepatan gravitasi bumi ($\\text{m/s}^2$) | Suku $\\frac{1}{2}\\rho v^2$ disebut tekanan dinamis; suku $\\rho gh$ disebut tekanan hidrostatis posisi |
| **Hukum Bernoulli Pipa Horizontal** | $P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$ | $h_1 = h_2$ (pipa mendatar); $P_1 - P_2$: beda tekanan statis antar penampang ($\\text{Pa}$) | Titik yang memiliki kelajuan lebih besar ($v_2 > v_1$) pasti memiliki tekanan lebih rendah ($P_2 < P_1$) |

---

### C. Aplikasi Bernouli Kunci: Torricelli, Venturimeter, & Tabung Pitot
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Teorema Torricelli (Tangki Bocor)** | $v = \\sqrt{2 g h}$<br>$t = \\sqrt{\\frac{2 H}{g}}$<br>$X = 2 \\sqrt{h \\cdot H}$ | $v$: kelajuan semburan air keluar dari lubang bocor ($\\text{m/s}$); $h$: kedalaman lubang diukur dari permukaan atas air ($\\text{m}$); $H$: ketinggian lubang bocor diukur dari lantai dasar ($\\text{m}$); $t$: waktu pancaran air tiba di lantai ($\\text{s}$); $X$: jarak mendatar pancaran air maksimum di lantai ($\\text{m}$) | Jarak jangkauan terjauh $X_{\\max}$ bernilai maksimum jika lubang kebocoran berada tepat di tengah-tengah tinggi air ($h = H$) |
| **Debit Pancaran Lubang Bocor** | $Q = A_0 \\cdot v = A_0 \\sqrt{2 g h}$ | $Q$: debit semprotan air keluar ($\\text{m}^3/\\text{s}$); $A_0$: luas lubang kebocoran ($\\text{m}^2$) | Luas lubang bocor jauh lebih kecil dibandingkan luas permukaan atas tangki ($A_0 \\ll A_{\\text{permukaan}}$) |
| **Venturimeter Tanpa Manometer** | $v_1 = \\sqrt{\\frac{2 g h}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$ | $v_1$: kelajuan fluida pada penampang pipa besar ($\\text{m/s}$); $h$: selisih beda tinggi cairan pada kedua pipa vertikal ($\\text{m}$); $A_1, A_2$: luas penampang pipa besar dan leher pipa kecil ($\\text{m}^2$); $g$: gravitasi ($\\text{m/s}^2$) | Mengukur kelajuan aliran cairan pipa berbasis beda tinggi permukaan cairan vertikal |
| **Venturimeter dengan Manometer** | $v_1 = \\sqrt{\\frac{2 (\\rho' - \\rho) g h}{\\rho \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]}}$ | $\\rho$: massa jenis cairan yang mengalir di pipa ($\\text{kg/m}^3$); $\\rho'$: massa jenis cairan manometer (raksa, $\\rho' > \\rho$, $\\text{kg/m}^3$); $h$: selisih tinggi cairan manometer ($\\text{m}$) | Digunakan untuk mengukur aliran cairan bertekanan tinggi dengan manometer cairan berat |
| **Tabung Pitot (Kelajuan Aliran Gas)** | $v = \\sqrt{\\frac{2 \\rho' g h}{\\rho_{\\text{gas}}}}$ | $v$: kelajuan aliran gas / pesawat terbang terhadap udara ($\\text{m/s}$); $\\rho'$: massa jenis cairan indikator manometer ($\\text{kg/m}^3$); $\\rho_{\\text{gas}}$: massa jenis gas udara luar yang diukur ($\\text{kg/m}^3$); $h$: selisih tinggi cairan manometer ($\\text{m}$) | Instrumen speedometer pitot statik pada hidung badan pesawat terbang |
| **Gaya Angkat Sayap Pesawat Terbang** | $F_{\\text{angkat}} = (P_1 - P_2) A = \\frac{1}{2} \\rho_{\\text{udara}} A (v_2^2 - v_1^2)$ | $F_{\\text{angkat}}$: total gaya angkat aerodinamis ($\\text{N}$); $A$: total luas penampang sayap pesawat ($\\text{m}^2$); $\\rho_{\\text{udara}}$: massa jenis udara atmosfer ($\\approx 1{,}2\\text{ kg/m}^3$); $v_2$: kelajuan aliran udara di atas sayap ($\\text{m/s}$); $v_1$: kelajuan udara di bawah sayap ($v_2 > v_1$, $\\text{m/s}$) | Profil *airfoil* melengkung di atas membuat udara mengalir lebih cepat di atas sayap ($v_2 > v_1$), menimbulkan penurunan tekanan statis ($P_2 < P_1$) |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada Teorema Torricelli (tangki bocor), jangan tertukar antara $h$ dan $H$!
>    * $h$ = jarak vertikal dari **permukaan cairan ke lubang bocor** (penentu kelajuan semburan $v = \\sqrt{2gh}$).
>    * $H$ = jarak vertikal dari **lubang bocor ke lantai dasar** (penentu durasi waktu jatuh $t = \\sqrt{\\frac{2H}{g}}$).
> 2. Pesawat dapat terangkat naik hanya jika gaya angkat aerodinamis lebih besar daripada berat total pesawat ($F_{\\text{angkat}} > W_{\\text{pesawat}}$).

> [!TIP] Super Solusi Cepat:
> Pada tabung venturimeter tanpa manometer, kelajuan di leher sempit ($v_2$) langsung dapat dihitung via rasio kontinuitas:
> $$v_2 = \\frac{A_1}{A_2} v_1$$
> Tanpa perlu menghitung rumus akar yang panjang dua kali!`
};

module.exports = rangkumanPart1;
