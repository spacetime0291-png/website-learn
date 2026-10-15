// ============================================================================
// GENERATOR MATERI LENGKAP TKA TERSPESIFIKASI (16 Fisika, 7 MTK Lanjut, 5 Fundamental)
// 28 Bab x 3 Tipe Modul (Materi, Contoh Soal, Rangkuman) = 84 Modul
// Disusun dengan KaTeX murni, format rapi, tanpa bug escape.
// ============================================================================

const fs = require('fs');

// Helper escape untuk KaTeX template string
function createModule(id, kategoriUtama, subtes, blok, tipe, babIndex, babJudul, content) {
  return {
    id,
    kategoriUtama,
    subtes,
    blok,
    tipe,
    babIndex,
    babJudul,
    content
  };
}

// -----------------------------------------------------------------------------
// I. FISIKA (TKA) - 16 BAB
// -----------------------------------------------------------------------------
const fisikaChapters = [
  // Pembungkus 1: Kinematika
  {
    index: 1,
    blok: "Kinematika",
    judul: "Pengukuran dan Ketelitian Alat Ukur",
    materi: `# Pengukuran dan Ketelitian Alat Ukur
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

## A. Prinsip Pengukuran dan Satuan
Pengukuran merupakan proses membandingkan suatu besaran fisis objek dengan besaran standar satuan yang telah disepakati (Sistem Internasional/SI). Dalam eksperimen fisika presisi, penguasaan prinsip kerja alat ukur panjang dan massa sangat krusial.

---

### 1. Jangka Sorong (Vernier Caliper)
* **Fungsi Utama:** Mengukur diameter luar, diameter dalam tabung/lubang silinder, serta kedalaman tabung sempit.
* **Komponen:** Rahang tetap (skala utama/SU dalam $\\text{cm}$ atau $\\text{mm}$) dan rahang geser (skala nonius/SN).
* **Nilai Skala Terkecil (NST):**
  $$\\text{NST} = \\frac{1\\text{ mm}}{n}$$
  Untuk nonius 10 skala, $\\text{NST} = 0{,}1\\text{ mm} = 0{,}01\\text{ cm}$. Untuk nonius 20 skala, $\\text{NST} = 0{,}05\\text{ mm} = 0{,}005\\text{ cm}$.
* **Formula Pembacaan:**
  $$\\text{Hasil} = \\text{Skala Utama (SU)} + (\\text{Garis Nonius Berimpit} \\times \\text{NST})$$

### 2. Mikrometer Sekrup (Micrometer Screw Gauge)
* **Fungsi Utama:** Mengukur ketebalan pelat tipis, diameter kawat halus, atau kertas dengan presisi tinggi.
* **Komponen:** Poros tetap (*anvil*), poros geser (*spindle*), silinder tetap berskala utama (*sleeve*), dan silinder putar berulir nonius (*thimble*).
* **Nilai Skala Terkecil (NST):**
  Satu putaran penuh memajukan poros geser sebesar $0{,}5\\text{ mm}$ yang terbagi atas 50 skala putar:
  $$\\text{NST} = \\frac{0{,}5\\text{ mm}}{50} = 0{,}01\\text{ mm} = 0{,}001\\text{ cm}$$
* **Formula Pembacaan:**
  $$\\text{Hasil} = \\text{Skala Utama} + (\\text{Skala Nonius Putar} \\times 0{,}01\\text{ mm})$$

### 3. Neraca Tiga Lengan (Ohaus Balance)
* **Fungsi Utama:** Mengukur massa benda padat melalui prinsip kesetimbangan momen gaya tiga anting pemberat.
* **Karakteristik Skala Lengan:**
  * Lengan belakang: ratusan gram ($0 - 500\\text{ g}$, skala $100\\text{ g}$).
  * Lengan tengah: puluhan gram ($0 - 100\\text{ g}$, skala $10\\text{ g}$).
  * Lengan depan: satuan gram hingga desimal ($0 - 10\\text{ g}$, ketelitian $0{,}1\\text{ g}$ atau $0{,}05\\text{ g}$).
* **Formula Pembacaan:**
  $$\\text{Massa Total} = \\text{Skala Belakang} + \\text{Skala Tengah} + \\text{Skala Depan}$$

---

## B. Aturan Angka Penting dan Pelaporan Pengukuran
1. Semua angka bukan nol adalah Angka Penting (AP).
2. Angka nol di antara angka bukan nol adalah AP (contoh: $4005$ memiliki 4 AP).
3. Angka nol di sebelah kiri angka bukan nol pertama **bukan** AP (contoh: $0{,}0072$ memiliki 2 AP).
4. Angka nol di belakang tanda desimal setelah angka bukan nol adalah AP (contoh: $5{,}300$ memiliki 4 AP).
5. **Kaidah Operasi Hitung:**
   * Penjumlahan/Pengurangan: Mengikuti jumlah desimal (angka taksiran) paling sedikit.
   * Perkalian/Pembagian: Mengikuti jumlah angka penting paling sedikit dari faktor yang dioperasikan.
6. **Pelaporan Hasil Pengukuran Tunggal:**
   $$x = \\bar{x} \\pm \\Delta x, \\quad \\Delta x = \\frac{1}{2} \\times \\text{NST}$$
`,
    cs: `# Variasi Contoh Soal — Pengukuran dan Ketelitian Alat Ukur
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

### Contoh Soal 1: Pembacaan Jangka Sorong
Pengukuran diameter kelereng dengan jangka sorong menunjukkan skala utama $2{,}4\\text{ cm}$ dan garis nonius ke-7 berimpit tepat dengan garis skala utama. Jika jangka sorong memiliki ketelitian $0{,}05\\text{ mm}$, berapakah diameter kelereng tersebut?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Identifikasi data:
> * Skala Utama (SU) $= 2{,}4\\text{ cm} = 24{,}0\\text{ mm}$
> * Skala Nonius $(\\text{SN}) = 7$
> * $\\text{NST} = 0{,}05\\text{ mm}$
>
> **Langkah 2:** Hitung nilai nonius:
> $$\\text{Nilai Nonius} = 7 \\times 0{,}05\\text{ mm} = 0{,}35\\text{ mm}$$
>
> **Langkah 3:** Jumlahkan SU dan nilai nonius:
> $$\\text{Hasil} = 24{,}0\\text{ mm} + 0{,}35\\text{ mm} = 24{,}35\\text{ mm} = 2{,}435\\text{ cm}$$
>
> **Jawaban:** $24{,}35\\text{ mm}$ atau $2{,}435\\text{ cm}$.

---

### Contoh Soal 2: Operasi Hitung Angka Penting
Panjang dan lebar pelat seng berturut-turut diukur sebesar $15{,}35\\text{ cm}$ dan $2{,}4\\text{ cm}$. Berdasarkan aturan angka penting, luas pelat tersebut adalah...

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung perkalian matematis murni:
> $$\\text{Luas} = 15{,}35 \\times 2{,}4 = 36{,}84\\text{ cm}^2$$
>
> **Langkah 2:** Analisis jumlah angka penting:
> * $15{,}35$ memiliki 4 AP
> * $2{,}4$ memiliki 2 AP
> Hasil perkalian harus dibulatkan hingga memiliki 2 angka penting.
>
> **Langkah 3:** Pembulatan ke 2 AP:
> Angka $36{,}84$ dibulatkan menjadi $37\\text{ cm}^2$.
>
> **Jawaban:** $37\\text{ cm}^2$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Pengukuran
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

| Alat Ukur | Skala Utama (SU) | Nilai Skala Terkecil (NST) | Formula Pembacaan |
| :--- | :--- | :--- | :--- |
| **Jangka Sorong** | $\\text{cm}$ / $\\text{mm}$ | $0{,}1\\text{ mm}$ / $0{,}05\\text{ mm}$ | $\\text{SU} + (\\text{garis nonius} \\times \\text{NST})$ |
| **Mikrometer Sekrup** | $\\text{mm}$ (sleeve) | $0{,}01\\text{ mm}$ (thimble) | $\\text{SU} + (\\text{skala putar} \\times 0{,}01\\text{ mm})$ |
| **Neraca Tiga Lengan** | Gram (g) | $0{,}1\\text{ g}$ | Lengan Belakang + Tengah + Depan |

> [!TIP] Ringkasan Cepat Angka Penting:
> * **Perkalian/Pembagian:** Ikuti jumlah AP tersedikit dari komponen.
> * **Penjumlahan/Pengurangan:** Ikuti jumlah desimal (angka di belakang koma) tersedikit.
> * **Ketidakpastian Tunggal:** $\\Delta x = \\frac{1}{2} \\times \\text{NST}$.
`
  },

  {
    index: 2,
    blok: "Kinematika",
    judul: "Gerak Lurus (GLB dan GLBB)",
    materi: `# Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

## A. Besaran Kinematika Gerak Lurus
1. **Posisi & Perpindahan:** Perpindahan ($\\Delta \\vec{x} = \\vec{x}_2 - \\vec{x}_1$) adalah besaran vektor yang merepresentasikan perubahan kedudukan, sedangkan jarak ($s$) adalah panjang total lintasan fisik riil (skalar).
2. **Kelajuan vs Kecepatan:**
   * Kelajuan rata-rata (skalar): $v = \\frac{s_{\\text{total}}}{\\Delta t}$
   * Kecepatan rata-rata (vektor): $\\vec{v} = \\frac{\\Delta \\vec{x}}{\\Delta t}$
   * Kecepatan sesaat: $\\vec{v}(t) = \\frac{d\\vec{x}}{dt}$
3. **Percepatan:** Perubahan kecepatan tiap satuan waktu: $\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{x}}{dt^2}$.

---

## B. Gerak Lurus Beraturan (GLB)
Benda bergerak lurus dengan **kecepatan konstan** (percepatan $a = 0$):
$$x(t) = x_0 + v \\cdot t$$
* **Grafik $v-t$:** Garis horizontal mendatar. Luas daerah di bawah kurva $v-t$ sama dengan jarak perpindahan.
* **Grafik $x-t$:** Garis lurus linier dengan gradien kemiringan $\\tan\\alpha = v$.

---

## C. Gerak Lurus Berubah Beraturan (GLBB)
Benda bergerak lurus dengan **percepatan tetap** ($a = \\text{konstan}$):
$$v_t = v_0 + a t$$
$$s = v_0 t + \\frac{1}{2} a t^2$$
$$v_t^2 = v_0^2 + 2 a s$$
* Jika percepatan searah kecepatan ($a > 0$), gerak dipercepat beraturan.
* Jika percepatan berlawanan arah kecepatan ($a < 0$), gerak diperlambat hingga berhenti ($v_t = 0$).

### Kasus Khusus Gerak Vertikal (Pengaruh Gravitasi $g$):
1. **Gerak Jatuh Bebas (GJB):** $v_0 = 0, a = +g$
   $$v_t = gt, \\quad h = \\frac{1}{2}gt^2, \\quad v_t = \\sqrt{2gh}$$
2. **Gerak Vertikal ke Atas (GVA):** $a = -g$
   $$h_{\\max} = \\frac{v_0^2}{2g}, \\quad t_{\\text{puncak}} = \\frac{v_0}{g}, \\quad t_{\\text{total}} = \\frac{2v_0}{g}$$
`,
    cs: `# Variasi Contoh Soal — Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

### Contoh Soal 1: Pengejaran Dua Mobil (GLB & GLBB)
Mobil A bergerak dengan kecepatan tetap $20\\text{ m/s}$. Dari titik yang sama, mobil B mulai bergerak dari keadaan diam dengan percepatan tetap $4\\text{ m/s}^2$ ke arah yang sama. Kapan dan pada jarak berapa mobil B menyusul mobil A?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Persamaan posisi kedua mobil:
> * Mobil A (GLB): $x_A = v_A \\cdot t = 20t$
> * Mobil B (GLBB): $x_B = v_{0B}t + \\frac{1}{2}a_B t^2 = 0 + \\frac{1}{2}(4)t^2 = 2t^2$
>
> **Langkah 2:** Kondisi menyusul ($x_A = x_B$):
> $$20t = 2t^2 \\implies 2t^2 - 20t = 0 \\implies 2t(t - 10) = 0$$
> Diperoleh $t = 10\\text{ detik}$ (saat $t=0$ posisi awal bersamaan).
>
> **Langkah 3:** Hitung jarak tempuh saat menyusul:
> $$x = 20 \\times 10 = 200\\text{ meter}$$
>
> **Jawaban:** Mobil B menyusul setelah $10\\text{ detik}$ pada jarak $200\\text{ meter}$.

---

### Contoh Soal 2: Gerak Vertikal ke Atas
Sebuah bola dilempar vertikal ke atas dengan kelajuan awal $30\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, tentukan tinggi maksimum dan kelajuan bola saat berada di ketinggian $25\\text{ meter}$ di atas tanah!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung tinggi maksimum:
> $$h_{\\max} = \\frac{v_0^2}{2g} = \\frac{30^2}{2(10)} = \\frac{900}{20} = 45\\text{ meter}$$
>
> **Langkah 2:** Hitung kelajuan pada ketinggian $h = 25\\text{ m}$:
> $$v_t^2 = v_0^2 - 2gh = 30^2 - 2(10)(25) = 900 - 500 = 400$$
> $$v_t = \\sqrt{400} = 20\\text{ m/s}$$
>
> **Jawaban:** Tinggi maksimum $45\\text{ meter}$ dan kelajuan pada $25\\text{ m}$ adalah $20\\text{ m/s}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Gerak Lurus
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

| Jenis Gerak | Syarat / Ciri | Rumus Utama |
| :--- | :--- | :--- |
| **GLB** | $a = 0, v = \\text{tetap}$ | $s = v \\cdot t$ |
| **GLBB** | $a = \\text{konstan}$ | $v_t = v_0 + at$ <br> $s = v_0 t + \\frac{1}{2}at^2$ <br> $v_t^2 = v_0^2 + 2as$ |
| **Jatuh Bebas** | $v_0 = 0, a = g$ | $v = \\sqrt{2gh}, \\quad t = \\sqrt{\\frac{2h}{g}}$ |
| **Vertikal ke Atas** | $a = -g, v_{\\text{puncak}} = 0$ | $h_{\\max} = \\frac{v_0^2}{2g}, \\quad t_{\\text{naik}} = \\frac{v_0}{g}$ |

> [!TIP] Trik Cepat Grafik:
> * Luas di bawah kurva grafik $v-t$ = Perpindahan / Jarak Tempuh ($s$).
> * Kemiringan kurva grafik $v-t$ (gradien) = Percepatan ($a = \\Delta v / \\Delta t$).
`
  },

  {
    index: 3,
    blok: "Kinematika",
    judul: "Gerak Lengkung (Parabola dan Melingkar)",
    materi: `# Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

## A. Gerak Parabola (Proyektil)
Gerak parabola merupakan perpaduan dua gerak independen:
1. **Sumbu Horizontal ($x$):** Gerak Lurus Beraturan (GLB) tanpa hambatan udara ($a_x = 0$):
   $$v_x = v_0 \\cos\\theta$$
   $$x(t) = (v_0 \\cos\\theta) t$$
2. **Sumbu Vertikal ($y$):** Gerak Lurus Berubah Beraturan (GLBB) dipengaruhi gravitasi bumi ($a_y = -g$):
   $$v_y(t) = v_0 \\sin\\theta - gt$$
   $$y(t) = (v_0 \\sin\\theta) t - \\frac{1}{2}gt^2$$
3. **Kecepatan Total pada Saat $t$:**
   $$v(t) = \\sqrt{v_x^2 + v_y^2(t)}, \\quad \\tan\\alpha = \\frac{v_y}{v_x}$$
4. **Karakteristik Titik Puncak ($v_y = 0$):**
   $$t_{\\text{puncak}} = \\frac{v_0 \\sin\\theta}{g}, \\quad h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$$
5. **Titik Terjauh di Bidang Datar ($y = 0$):**
   $$t_{\\text{total}} = \\frac{2 v_0 \\sin\\theta}{g}, \\quad X_{\\max} = \\frac{v_0^2 \\sin 2\\theta}{g}$$
   > Sudut elevasi $\\theta = 45^\\circ$ menghasilkan jangkauan terjauh maksimum karena $\\sin 2(45^\\circ) = 1$.

---

## B. Gerak Melingkar Beraturan (GMB)
Gerak benda menempuh lintasan lingkaran dengan kelajuan linier dan kelajuan sudut konstan.
1. **Periode ($T$) dan Frekuensi ($f$):**
   $$T = \\frac{t}{n}, \\quad f = \\frac{1}{T}, \\quad \\omega = 2\\pi f = \\frac{2\\pi}{T}$$
2. **Hubungan Besaran Sudut dan Linier:**
   $$s = \\theta \\cdot R, \\quad v = \\omega \\cdot R, \\quad a_t = \\alpha \\cdot R$$
3. **Percepatan Sentripetal ($a_s$):**
   Percepatan yang selalu mengarah tegak lurus ke pusat lingkaran untuk mengubah arah gerak:
   $$a_s = \\frac{v^2}{R} = \\omega^2 R$$
4. **Hubungan Roda-Roda:**
   * **Seporos / Seakar:** $\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$
   * **Bersinggungan / Dihubungkan Rantai:** $v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$
`,
    cs: `# Variasi Contoh Soal — Gerak Lengkung
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

### Contoh Soal 1: Gerak Parabola
Peluru ditembakkan dari tanah dengan kelajuan awal $40\\text{ m/s}$ pada sudut elevasi $30^\\circ$. Tentukan titik tertinggi peluru dan jarak horizontal terjauhnya ($g = 10\\text{ m/s}^2$)!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Identifikasi komponen kecepatan awal:
> * $v_{0x} = v_0 \\cos 30^\\circ = 40 \\times \\frac{1}{2}\\sqrt{3} = 20\\sqrt{3}\\text{ m/s}$
> * $v_{0y} = v_0 \\sin 30^\\circ = 40 \\times \\frac{1}{2} = 20\\text{ m/s}$
>
> **Langkah 2:** Hitung titik tertinggi:
> $$h_{\\max} = \\frac{v_{0y}^2}{2g} = \\frac{20^2}{2(10)} = \\frac{400}{20} = 20\\text{ meter}$$
>
> **Langkah 3:** Hitung jarak terjauh:
> $$X_{\\max} = \\frac{v_0^2 \\sin(2 \\times 30^\\circ)}{g} = \\frac{1600 \\sin 60^\\circ}{10} = 160 \\times \\frac{1}{2}\\sqrt{3} = 80\\sqrt{3}\\text{ meter}$$
>
> **Jawaban:** Tinggi maksimum $= 20\\text{ m}$ dan jarak terjauh $= 80\\sqrt{3}\\text{ m}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Gerak Lengkung
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

| Besaran Parabola | Formula Cepat |
| :--- | :--- |
| **Waktu Puncak** | $t_{\\text{puncak}} = \\frac{v_0 \\sin\\theta}{g}$ |
| **Tinggi Maksimum** | $h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$ |
| **Jarak Terjauh** | $X_{\\max} = \\frac{v_0^2 \\sin 2\\theta}{g}$ |
| **Percepatan Sentripetal** | $a_s = \\frac{v^2}{R} = \\omega^2 R$ |
| **Hubungan Rantai / Singgung** | $v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$ |
| **Hubungan Seporos** | $\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$ |
`
  },

  // Pembungkus 2: Dinamika
  {
    index: 4,
    blok: "Dinamika",
    judul: "Hubungan Gaya dan Gerak (Hukum Newton)",
    materi: `# Hubungan Gaya dan Gerak (Hukum Newton)
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

## A. Tiga Hukum Newton tentang Gerak
1. **Hukum I Newton (Kelembaman/Inersia):**
   Setiap benda mempertahankan keadaan diam atau bergerak lurus beraturan jika tidak ada gaya luar total yang mempengaruhinya:
   $$\\Sigma \\vec{F} = 0$$
2. **Hukum II Newton:**
   Percepatan yang dihasilkan resultan gaya berbanding lurus dengan gaya dan berbanding terbalik dengan massa benda:
   $$\\Sigma \\vec{F} = m \\vec{a}$$
3. **Hukum III Newton (Aksi-Reaksi):**
   Gaya aksi dan reaksi selalu sama besar, berlawanan arah, bekerja pada **dua benda yang berbeda**, dan segaris kerja:
   $$\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$$

---

## B. Diagram Gaya Bebas (Free Body Diagram)
1. **Gaya Berat ($w$):** Gaya gravitasi yang bekerja pada massa benda, selalu berarah tegak lurus ke pusat bumi:
   $$w = m \\cdot g$$
2. **Gaya Normal ($N$):** Gaya kontak tegak lurus dari permukaan bidang sentuh:
   * Pada bidang datar horizontal: $N = w = mg$
   * Pada bidang miring bersudut $\\theta$: $N = mg \\cos\\theta$
   * Di dalam lift bergerak ke atas dipercepat $a$: $N = m(g + a)$ (berat semu terasa lebih berat)
   * Di dalam lift bergerak ke bawah dipercepat $a$: $N = m(g - a)$
3. **Gaya Gesek ($f$):**
   * Gaya gesek statis: $f_s \\le \\mu_s N$ (menahan benda tetap diam). Benda tepat akan bergerak saat $f_{s,\\max} = \\mu_s N$.
   * Gaya gesek kinetis: $f_k = \\mu_k N$ (bekerja saat benda sedang bergerak meluncur, $\\mu_k < \\mu_s$).
4. **Gerak pada Bidang Miring:**
   Komponen gaya berat sejajar bidang: $w_x = mg \\sin\\theta$.
   Komponen gaya berat tegak lurus bidang: $w_y = mg \\cos\\theta$.
   Jika licin: $a = g \\sin\\theta$.
   Jika kasar: $a = g(\\sin\\theta - \\mu_k \\cos\\theta)$.
`,
    cs: `# Variasi Contoh Soal — Hubungan Gaya dan Gerak
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

### Contoh Soal 1: Benda di Bidang Miring Kasar
Balok bermassa $4\\text{ kg}$ diletakkan pada bidang miring dengan sudut $\\theta = 37^\\circ$ ($\to \\sin 37^\\circ = 0{,}6, \\cos 37^\\circ = 0{,}8$). Koefisien gesek kinetis bidang $\\mu_k = 0{,}25$ dan $g = 10\\text{ m/s}^2$. Tentukan percepatan balok meluncur turun!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Uraikan gaya-gaya yang bekerja:
> * Gaya pendorong ke bawah: $w_x = mg \\sin 37^\\circ = 4(10)(0{,}6) = 24\\text{ N}$
> * Gaya normal: $N = mg \\cos 37^\\circ = 4(10)(0{,}8) = 32\\text{ N}$
> * Gaya gesek kinetis: $f_k = \\mu_k N = 0{,}25 \\times 32 = 8\\text{ N}$
>
> **Langkah 2:** Terapkan Hukum II Newton pada sumbu bidang:
> $$\\Sigma F = m a \\implies w_x - f_k = m a$$
> $$24 - 8 = 4a \\implies 16 = 4a \\implies a = 4\\text{ m/s}^2$$
>
> **Jawaban:** Percepatan balok meluncur adalah $4\\text{ m/s}^2$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Hukum Newton
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

| Kasus Gerak | Formula Percepatan ($a$) | Gaya Normal ($N$) |
| :--- | :--- | :--- |
| **Bidang Datar Kasar** | $a = \\frac{F - \\mu_k mg}{m}$ | $N = mg$ |
| **Bidang Miring Licin** | $a = g \\sin\\theta$ | $N = mg \\cos\\theta$ |
| **Bidang Miring Kasar** | $a = g(\\sin\\theta - \\mu_k \\cos\\theta)$ | $N = mg \\cos\\theta$ |
| **Lift Dipercepat ke Atas** | $a$ | $N = m(g + a)$ |
| **Lift Dipercepat ke Bawah** | $a$ | $N = m(g - a)$ |
| **Sistem Katrol Atwood** | $a = \\frac{m_2 - m_1}{m_1 + m_2} g$ | $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$ |
`
  },

  {
    index: 5,
    blok: "Dinamika",
    judul: "Momentum dan Impuls",
    materi: `# Momentum dan Impuls
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

## A. Konsep Dasar Momentum dan Impuls
1. **Momentum Linier ($\\vec{p}$):**
   Ukuran tingkat kesukaran menghentikan benda yang sedang bergerak, merupakan besaran vektor:
   $$\\vec{p} = m \\cdot \\vec{v} \\quad (\\text{satuan: } \\text{kg}\\cdot\\text{m/s})$$
2. **Impuls ($\\vec{I}$):**
   Gaya impulsif yang bekerja dalam selang waktu sangat singkat:
   $$\\vec{I} = \\vec{F} \\cdot \\Delta t = \\int_{t_1}^{t_2} \\vec{F}\\,dt \\quad (\\text{satuan: } \\text{N}\\cdot\\text{s})$$
   * Pada grafik $F-t$, Impuls sama dengan luas daerah di bawah kurva $F-t$.
3. **Teorema Impuls-Momentum:**
   Impuls gaya sama dengan perubahan momentum yang dialami benda:
   $$\\vec{I} = \\Delta \\vec{p} = m(\\vec{v}_2 - \\vec{v}_1)$$

---

## B. Hukum Kekekalan Momentum & Tumbukan
Jika resultan gaya luar pada sistem sama dengan nol ($\\Sigma \\vec{F}_{\\text{ext}} = 0$):
$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$

### Koefisien Restitusi ($e$):
Derajat elastisitas tumbukan:
$$e = -\\frac{v_1' - v_2'}{v_1 - v_2} = \\frac{v_2' - v_1'}{v_1 - v_2}$$
1. **Tumbukan Lenting Sempurna ($e = 1$):**
   Berlaku Hukum Kekekalan Momentum dan Kekekalan Energi Kinetik ($EK_{\\text{awal}} = EK_{\\text{akhir}}$).
2. **Tumbukan Lenting Sebagian ($0 < e < 1$):**
   Berlaku Hukum Kekekalan Momentum, sebagian energi kinetik berubah menjadi kalor/bunyi.
   * Pantulan bola dari lantai: $e = \\sqrt{\\frac{h_2}{h_1}} = \\sqrt{\\frac{h_3}{h_2}}$
3. **Tumbukan Tidak Lenting Sama Sekali ($e = 0$):**
   Kedua benda bersatu setelah tumbukan ($v_1' = v_2' = v'$):
   $$v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$
`,
    cs: `# Variasi Contoh Soal — Momentum dan Impuls
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

### Contoh Soal 1: Ayunan Balistik (Tumbukan Tidak Lenting)
Peluru bermassa $20\\text{ g}$ ditembakkan horizontal dengan kecepatan $v$ menembus balok diam bermassa $1{,}98\\text{ kg}$ yang digantung tali. Peluru bersarang di balok dan berayun mencapai tinggi maksimum $20\\text{ cm}$. Tentukan kecepatan awal peluru ($g = 10\\text{ m/s}^2$)!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Kecepatan balok+peluru setelah tumbukan dari kekekalan energi mekanik ayunan:
> $$v' = \\sqrt{2gh} = \\sqrt{2(10)(0{,}2)} = \\sqrt{4} = 2\\text{ m/s}$$
>
> **Langkah 2:** Terapkan kekekalan momentum sebelum & sesudah tumbukan:
> $$m_p v_p + m_b v_b = (m_p + m_b) v'$$
> $$(0{,}02) v + 0 = (0{,}02 + 1{,}98)(2) = (2)(2) = 4$$
> $$0{,}02 v = 4 \\implies v = \\frac{4}{0{,}02} = 200\\text{ m/s}$$
>
> **Jawaban:** Kelajuan awal peluru adalah $200\\text{ m/s}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Momentum & Impuls
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

| Konsep | Persamaan Kunci | Catatan Penting |
| :--- | :--- | :--- |
| **Momentum** | $p = mv$ | Vektor, perhatikan tanda arah ($\pm$) |
| **Impuls** | $I = F \\Delta t = \\Delta p$ | Luas grafik $F-t$ |
| **Kekekalan Momentum** | $m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$ | $\\Sigma F_{\\text{luar}} = 0$ |
| **Lenting Sempurna** | $e = 1$ | $EK$ kekal |
| **Sama Sekali Tak Lenting** | $e = 0, v_1' = v_2' = v'$ | $v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$ |
| **Pantulan Lantai** | $e = \\sqrt{\\frac{h'}{h}}$ | $h' = e^2 h$ |
`
  },

  {
    index: 6,
    blok: "Dinamika",
    judul: "Dinamika Rotasi dan Kesetimbangan Benda Tegar",
    materi: `# Dinamika Rotasi dan Kesetimbangan Benda Tegar
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

## A. Besaran Dinamika Rotasi
1. **Momen Gaya / Torsi ($\\tau$):**
   Kecenderungan gaya memutar benda terhadap poros acuan:
   $$\\tau = r F \\sin\\theta$$
   * Torsi positif: berlawanan arah putaran jarum jam.
   * Torsi negatif: searah jarum jam.
2. **Momen Inersia ($I$):**
   Ukuran kelembaman benda berputar pada porosnya:
   $$I = \\Sigma m_i r_i^2$$
   * Batang silinder poros pusat: $I = \\frac{1}{12} M L^2$
   * Batang silinder poros ujung: $I = \\frac{1}{3} M L^2$
   * Silinder pejal / cakram: $I = \\frac{1}{2} M R^2$
   * Bola pejal: $I = \\frac{2}{5} M R^2$
   * Bola berongga / kulit bola: $I = \\frac{2}{3} M R^2$
3. **Hukum II Newton untuk Rotasi:**
   $$\\Sigma \\tau = I \\alpha$$

---

## B. Menggelinding Murni & Kesetimbangan
1. **Energi Kinetik Total Benda Menggelinding (Translasi + Rotasi):**
   $$EK_{\\text{total}} = EK_{\\text{trans}} + EK_{\\text{rot}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(1 + k) m v^2$$
   * Di mana $k$ adalah koefisien inersia ($I = k m R^2$).
   * Menggelinding turun pada bidang miring tinggi $h$:
     $$v = \\sqrt{\\frac{2gh}{1+k}}, \\quad a = \\frac{g \\sin\\theta}{1+k}$$
2. **Syarat Kesetimbangan Benda Tegar:**
   Benda tidak bertranslasi dan tidak berotasi:
   $$\\Sigma F_x = 0, \\quad \\Sigma F_y = 0, \\quad \\Sigma \\tau = 0$$
`,
    cs: `# Variasi Contoh Soal — Dinamika Rotasi
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

### Contoh Soal 1: Balapan Menggelinding di Bidang Miring
Sebuah silinder pejal ($k = 0{,}5$) dan sebuah bola pejal ($k = 0{,}4$) dilepaskan bersamaan dari puncak bidang miring yang sama. Benda manakah yang mencapai dasar terlebih dahulu dan memiliki kelajuan lebih besar?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hubungan kelajuan menggelinding:
> $$v = \\sqrt{\\frac{2gh}{1 + k}}$$
> Nilai $k$ bola pejal ($0{,}4$) lebih kecil daripada $k$ silinder pejal ($0{,}5$).
>
> **Langkah 2:** Perbandingan:
> * Bola pejal: $v = \\sqrt{\\frac{2gh}{1{,}4}} \\approx \\sqrt{1{,}43 gh}$
> * Silinder pejal: $v = \\sqrt{\\frac{2gh}{1{,}5}} \\approx \\sqrt{1{,}33 gh}$
>
> **Jawaban:** Bola pejal memiliki percepatan dan kelajuan lebih besar, sehingga mencapai dasar terlebih dahulu.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Dinamika Rotasi
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

| Besaran | Rumus Translasi | Rumus Rotasi | Hubungan |
| :--- | :--- | :--- | :--- |
| **Posisi** | $s$ | $\\theta$ | $s = \\theta R$ |
| **Kecepatan** | $v$ | $\\omega$ | $v = \\omega R$ |
| **Percepatan** | $a$ | $\\alpha$ | $a = \\alpha R$ |
| **Inersia** | $m$ | $I$ | $I = k m R^2$ |
| **Gaya / Torsi** | $F = ma$ | $\\tau = I\\alpha$ | $\\tau = r F \\sin\\theta$ |
| **Momentum** | $p = mv$ | $L = I\\omega$ | Kekal bila $\\Sigma \\tau = 0$ |
`
  },

  // Pembungkus 3: Fluida
  {
    index: 7,
    blok: "Fluida",
    judul: "Fluida Statis",
    materi: `# Fluida Statis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

## A. Tekanan pada Fluida Statis
1. **Tekanan Hidrostatis ($P_h$):**
   Tekanan yang dihasilkan oleh fluida tak bergerak akibat gaya gravitasi bobot zat cair di atasnya:
   $$P_h = \\rho \\cdot g \\cdot h$$
   * $\\rho$ = massa jenis fluida ($\\text{kg/m}^3$)
   * $h$ = kedalaman titik diukur dari permukaan zat cair ($\\text{m}$)
2. **Tekanan Mutlak / Total ($P$):**
   $$P = P_0 + P_h = P_0 + \\rho g h$$
   ($P_0$ adalah tekanan atmosfer permukaan $\\approx 1\\text{ atm} = 1{,}013 \\times 10^5\\text{ Pa}$)
3. **Hukum Pokok Hidrostatika:**
   Semua titik yang terletak pada bidang mendatar di dalam zat cair yang sejenis memiliki tekanan yang sama ($P_A = P_B$).
   * Tabung U beda zat cair: $\\rho_1 h_1 = \\rho_2 h_2$

---

## B. Hukum Pascal dan Hukum Archimedes
1. **Hukum Pascal:**
   Tekanan yang diberikan pada fluida di dalam ruang tertutup akan diteruskan sama besar ke segala arah:
   $$P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{D_2}{D_1}\\right)^2$$
2. **Hukum Archimedes:**
   Benda yang tercelup sebagian atau seluruhnya ke dalam zat cair mengalami gaya angkat ke atas ($F_a$) sebesar berat zat cair yang dipindahkan:
   $$F_a = \\rho_f \\cdot V_{bf} \\cdot g$$
   * **Terapung:** $w = F_a \\implies \\rho_b < \\rho_f \\implies \\frac{V_{bf}}{V_b} = \\frac{\\rho_b}{\\rho_f}$
   * **Melayang:** $w = F_a \\implies \\rho_b = \\rho_f \\implies V_{bf} = V_b$
   * **Tenggelam:** $w > F_a \\implies \\rho_b > \\rho_f \\implies w_{\\text{semu}} = w - F_a$
`,
    cs: `# Variasi Contoh Soal — Fluida Statis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

### Contoh Soal 1: Benda Terapung
Sebongkah es terapung di atas air laut (massa jenis air laut $1030\\text{ kg/m}^3$). Jika massa jenis es $920\\text{ kg/m}^3$, berapa persen volume es yang muncul di atas permukaan air laut?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung fraksi volume yang tercelup:
> $$\\frac{V_{\\text{tercelup}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}} = \\frac{920}{1030} \\approx 0{,}893 = 89{,}3\\%$$
>
> **Langkah 2:** Hitung volume es yang muncul di atas permukaan:
> $$V_{\\text{muncul}} = 100\\% - 89{,}3\\% = 10{,}7\\%$$
>
> **Jawaban:** $10{,}7\\%$ bagian es berada di atas permukaan air.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Fluida Statis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

* **Tekanan Hidrostatis:** $P_h = \\rho g h$
* **Tekanan Total:** $P = P_0 + \\rho g h$
* **Hukum Pascal:** $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{D_2}{D_1}\\right)^2$
* **Gaya Apung Archimedes:** $F_a = \\rho_f V_{bf} g$
* **Fraksi Benda Terapung:** $\\frac{V_{\\text{tercelup}}}{V_{\\text{benda}}} = \\frac{\\rho_{\\text{benda}}}{\\rho_{\\text{fluida}}}$
`
  },

  {
    index: 8,
    blok: "Fluida",
    judul: "Fluida Dinamis",
    materi: `# Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

## A. Karakteristik Fluida Ideal & Persamaan Kontinuitas
Fluida ideal bersifat: inkompresibel (massa jenis konstan), non-viskos (tidak ada gesekan internal), aliran tunak/laminer (*steady*), dan tidak berotasi (*irrotational*).
1. **Debit Aliran ($Q$):**
   Banyaknya volume fluida yang mengalir tiap satuan waktu:
   $$Q = \\frac{V}{t} = A \\cdot v \\quad (\\text{m}^3/\\text{s})$$
2. **Persamaan Kontinuitas:**
   Debit fluida pada pipa dengan penampang berbeda adalah konstan:
   $$A_1 v_1 = A_2 v_2 \\implies v_2 = v_1 \\left(\\frac{D_1}{D_2}\\right)^2$$

---

## B. Asas Bernoulli dan Aplikasinya
Di dalam pipa mendatar, tekanan fluida paling besar berada pada bagian yang kelajuannya paling kecil:
$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 = \\text{konstan}$$

### Aplikasi Utama Bernoulli:
1. **Teorema Torricelli (Kebocoran Tangki):**
   * Kelajuan pancaran air bocor pada kedalaman $h$:
     $$v = \\sqrt{2gh}$$
   * Jarak pancaran terjauh dari dasar lantai (ketinggian lubang $y$):
     $$x = 2\\sqrt{h \\cdot y}$$
2. **Venturimeter Tanpa Manometer:**
   $$v_1 = \\sqrt{\\frac{2gh}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$$
3. **Gaya Angkat Sayap Pesawat Terbang:**
   Profil sayap menyebabkan kelajuan udara di atas ($v_a$) lebih cepat daripada di bawah ($v_b$), sehingga tekanan di bawah lebih besar ($P_b > P_a$):
   $$F_{\\text{angkat}} = \\frac{1}{2} \\rho A (v_a^2 - v_b^2)$$
`,
    cs: `# Variasi Contoh Soal — Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

### Contoh Soal 1: Teorema Torricelli
Sebuah tangki air memiliki lubang kebocoran kecil pada kedalaman $h = 3{,}2\\text{ m}$ dari permukaan air. Jika lubang tersebut berada pada ketinggian $y = 5\\text{ m}$ dari lantai tanah, tentukan kelajuan semburan air dan jarak horizontal jatuhnya air di tanah ($g = 10\\text{ m/s}^2$)!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung kecepatan semburan:
> $$v = \\sqrt{2gh} = \\sqrt{2(10)(3{,}2)} = \\sqrt{64} = 8\\text{ m/s}$$
>
> **Langkah 2:** Hitung jarak jangkauan horizontal $x$:
> $$x = 2\\sqrt{h \\cdot y} = 2\\sqrt{3{,}2 \\times 5} = 2\\sqrt{16} = 2 \\times 4 = 8\\text{ meter}$$
>
> **Jawaban:** Kelajuan semburan air $8\\text{ m/s}$ dan jarak jatuh di tanah $8\\text{ meter}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

* **Debit:** $Q = A v = \\frac{V}{t}$
* **Kontinuitas:** $A_1 v_1 = A_2 v_2 \\implies v_2 = v_1 \\left(\\frac{D_1}{D_2}\\right)^2$
* **Persamaan Bernoulli:** $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$
* **Torricelli:** $v = \\sqrt{2gh}, \\quad x = 2\\sqrt{h y}$
* **Gaya Angkat Sayap:** $F = \\frac{1}{2}\\rho A (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)$
`
  },

  // Pembungkus 4: Gelombang
  {
    index: 9,
    blok: "Gelombang",
    judul: "Gelombang Bunyi",
    materi: `# Gelombang Bunyi
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang

## A. Karakteristik Gelombang Bunyi
Gelombang bunyi merupakan gelombang mekanik longitudinal yang merambat melalui rapatan dan renggangan medium.
1. **Cepat Rambat Bunyi:**
   * Pada gas: $v = \\sqrt{\\frac{\\gamma R T}{M}}$
   * Pada zat cair: $v = \\sqrt{\\frac{B}{\\rho}}$ (B = modulus bulk)
   * Pada zat padat: $v = \\sqrt{\\frac{E}{\\rho}}$ (E = modulus Young)

---

## B. Sumber-Sumber Bunyi (Dawai & Pipa Organa)
1. **Dawai / Senar (Hukum Mersenne):**
   $$v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{F \\cdot L}{m}}$$
   Frekuensi nada harmonik ke-$n$ ($n = 0, 1, 2, \\dots$):
   $$f_n = (n+1) \\frac{v}{2L} \\implies f_0 : f_1 : f_2 = 1 : 2 : 3$$
2. **Pipa Organa Terbuka (POB):**
   $$f_n = (n+1) \\frac{v}{2L} \\implies f_0 : f_1 : f_2 = 1 : 2 : 3$$
3. **Pipa Organa Tertutup (POT):**
   $$f_n = (2n+1) \\frac{v}{4L} \\implies f_0 : f_1 : f_2 = 1 : 3 : 5$$

---

## C. Intensitas, Taraf Intensitas, & Efek Doppler
1. **Intensitas Bunyi ($I$):** Daya per satuan luas permukaan bola:
   $$I = \\frac{P}{4\\pi r^2} \\implies \\frac{I_1}{I_2} = \\left(\\frac{r_2}{r_1}\\right)^2$$
2. **Taraf Intensitas Bunyi ($TI$ dalam dB):**
   $$TI = 10 \\log\\left(\\frac{I}{I_0}\\right) \\quad (I_0 = 10^{-12}\\text{ W/m}^2)$$
   * Untuk $n$ sumber bunyi identik: $TI_n = TI_1 + 10 \\log n$
   * Untuk jarak yang berbeda: $TI_2 = TI_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$
3. **Efek Doppler:**
   $$f_p = \\left(\\frac{v \\pm v_p}{v \\mp v_s}\\right) f_s$$
   * $v_p$ bernilai $(+)$ jika pendengar mendekati sumber; $(-)$ jika menjauhi.
   * $v_s$ bernilai $(-)$ jika sumber mendekati pendengar; $(+)$ jika menjauhi.
`,
    cs: `# Variasi Contoh Soal — Gelombang Bunyi
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang

### Contoh Soal 1: Taraf Intensitas Banyak Sumber
Taraf intensitas sebuah mesin bubut pada jarak $2\\text{ m}$ adalah $70\\text{ dB}$. Jika terdapat 100 buah mesin bubut identik dibunyikan bersamaan, berapakah taraf intensitasnya pada jarak $20\\text{ meter}$?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Tambah pengaruh 100 mesin pada jarak tetap $2\\text{ m}$:
> $$TI_{100} = TI_1 + 10 \\log(100) = 70 + 10(2) = 90\\text{ dB}$$
>
> **Langkah 2:** Hitung perubahan akibat pertambahan jarak dari $r_1 = 2\\text{ m}$ ke $r_2 = 20\\text{ m}$:
> $$TI_2 = TI_{100} - 20 \\log\\left(\\frac{20}{2}\\right) = 90 - 20 \\log(10) = 90 - 20 = 70\\text{ dB}$$
>
> **Jawaban:** Taraf intensitas gabungan pada jarak $20\\text{ m}$ adalah $70\\text{ dB}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Gelombang Bunyi
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang

* **Dawai & POB:** $f_n = (n+1)\\frac{v}{2L}$ (rasio harmonik $1 : 2 : 3$)
* **POT:** $f_n = (2n+1)\\frac{v}{4L}$ (rasio harmonik ganjil $1 : 3 : 5$)
* **Taraf Intensitas $N$ Sumber:** $TI_n = TI_1 + 10\\log N$
* **Taraf Intensitas Beda Jarak:** $TI_2 = TI_1 - 20\\log(r_2/r_1)$
* **Efek Doppler:** $f_p = \\left(\\frac{v \\pm v_p}{v \\mp v_s}\\right) f_s$
`
  },

  {
    index: 10,
    blok: "Gelombang",
    judul: "Gelombang Cahaya dan Alat Optik",
    materi: `# Gelombang Cahaya dan Alat Optik
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang

## A. Sifat Gelombang Cahaya & Pembiasan
1. **Hukum Pembiasan Snellius:**
   $$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$
   * Indeks bias: $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda_n}$
   * Sudut kritis & pemantulan sempurna (dari rapat ke renggang, $n_1 > n_2$):
     $$\\sin\\theta_k = \\frac{n_2}{n_1}$$
2. **Interferensi Celah Ganda Young:**
   * Garis terang (maksimum): $d \\sin\\theta = \\frac{d \\cdot p}{L} = m \\lambda$ ($m = 0, 1, 2, \\dots$)
   * Garis gelap (minimum): $d \\sin\\theta = \\frac{d \\cdot p}{L} = \\left(m - \\frac{1}{2}\\right) \\lambda$
3. **Difraksi Kisi:** $d \\sin\\theta = n \\lambda$, di mana tetapan kisi $d = \\frac{1}{N}$.

---

## B. Pembentukan Bayangan Cermin dan Lensa
$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}, \\quad M = \\left|\\frac{s'}{s}\\right| = \\left|\\frac{h'}{h}\\right|$$
* Cermin cekung & lensa cembung: $f > 0$ (konvergen).
* Cermin cembung & lensa cekung: $f < 0$ (divergen).
* Kekuatan lensa: $P = \\frac{1}{f\\text{ (meter)}} = \\frac{100}{f\\text{ (cm)}}$ dioptri.

---

## C. Prinsip Alat Optik
1. **Mata Normal & Cacat Mata:**
   * Miopi (rabun jauh): $P = -\\frac{100}{PR\\text{ (cm)}}$
   * Hipermetropi (rabun dekat): $P = 4 - \\frac{100}{PP\\text{ (cm)}}$
2. **Lup (Kaca Pembesar):**
   * Mata berakomodasi maksimum: $M = \\frac{S_n}{f} + 1$
   * Mata tidak berakomodasi: $M = \\frac{S_n}{f}$ ($S_n = 25\\text{ cm}$)
3. **Mikroskop:**
   $$M_{\\text{total}} = M_{\\text{ob}} \\times M_{\\text{ok}} = \\left|\\frac{s_{\\text{ob}}'}{s_{\\text{ob}}}\\right| \\times M_{\\text{ok}}$$
   Panjang tubus mikroskop: $d = s_{\\text{ob}}' + s_{\\text{ok}}$.
`,
    cs: `# Variasi Contoh Soal — Gelombang Cahaya dan Alat Optik
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang

### Contoh Soal 1: Mikroskop
Sebuah mikroskop memiliki lensa objektif berfokus $1\\text{ cm}$ dan lensa okuler berfokus $5\\text{ cm}$. Benda diletakkan pada jarak $1{,}1\\text{ cm}$ di depan objektif. Pengamatan dilakukan dengan mata berakomodasi maksimum ($S_n = 25\\text{ cm}$). Tentukan perbesaran total bayangan!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung jarak bayangan objektif ($s_{\\text{ob}}'$):
> $$\\frac{1}{s_{\\text{ob}}'} = \\frac{1}{f_{\\text{ob}}} - \\frac{1}{s_{\\text{ob}}} = \\frac{1}{1} - \\frac{1}{1{,}1} = 1 - \\frac{10}{11} = \\frac{1}{11} \\implies s_{\\text{ob}}' = 11\\text{ cm}$$
>
> **Langkah 2:** Perbesaran objektif:
> $$M_{\\text{ob}} = \\left|\\frac{s_{\\text{ob}}'}{s_{\\text{ob}}}\\right| = \\frac{11}{1{,}1} = 10\\text{ kali}$$
>
> **Langkah 3:** Perbesaran okuler (akomodasi maksimum):
> $$M_{\\text{ok}} = \\frac{S_n}{f_{\\text{ok}}} + 1 = \\frac{25}{5} + 1 = 5 + 1 = 6\\text{ kali}$$
>
> **Langkah 4:** Perbesaran total:
> $$M_{\\text{total}} = M_{\\text{ob}} \\times M_{\\text{ok}} = 10 \\times 6 = 60\\text{ kali}$$
>
> **Jawaban:** Perbesaran total mikroskop adalah $60\\text{ kali}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Cahaya & Alat Optik
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang

* **Snellius:** $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$
* **Lensa & Cermin:** $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}, \\quad M = \\left|\\frac{s'}{s}\\right|$
* **Cacat Mata Miopi:** $P = -\\frac{100}{PR}$
* **Cacat Mata Hipermetropi:** $P = 4 - \\frac{100}{PP}$
* **Lup Akomodasi Maks:** $M = \\frac{25}{f} + 1$
* **Perbesaran Mikroskop:** $M = M_{\\text{ob}} \\times M_{\\text{ok}}$
`
  },

  // Pembungkus 5: Kalor dan Termodinamika
  {
    index: 11,
    blok: "Kalor dan Termodinamika",
    judul: "Kalor dan Perpindahannya",
    materi: `# Kalor dan Perpindahannya
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

## A. Kalor, Suhu, dan Perubahan Wujud
1. **Kalor Perubahan Suhu:**
   $$Q = m \\cdot c \\cdot \\Delta T = C \\cdot \\Delta T$$
   * $c$ = kalor jenis zat ($\\text{J}/(\\text{kg}\\cdot\\text{K})$), $C = mc$ = kapasitas kalor.
2. **Kalor Laten Perubahan Wujud:**
   Terjadi pada suhu konstan (titik lebur/didih):
   $$Q = m \\cdot L \\quad (\\text{lebur/beku}), \\quad Q = m \\cdot U \\quad (\\text{uap/embun})$$
3. **Pemuaian Zat:**
   * Pemuaian Panjang: $\\Delta L = L_0 \\alpha \\Delta T \\implies L_t = L_0(1 + \\alpha \\Delta T)$
   * Pemuaian Luas: $\\Delta A = A_0 \\beta \\Delta T \\implies \\beta = 2\\alpha$
   * Pemuaian Volume: $\\Delta V = V_0 \\gamma \\Delta T \\implies \\gamma = 3\\alpha$
4. **Asas Black (Kekekalan Kalor):**
   $$Q_{\\text{lepas}} = Q_{\\text{terima}}$$

---

## B. Mekanisme Perpindahan Kalor
1. **Konduksi (Tanpa perpindahan massa medium):**
   $$H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$$
2. **Konveksi (Disertai aliran massa medium):**
   $$H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$$
3. **Radiasi (Gelombang elektromagnetik tanpa medium):**
   Hukum Stefan-Boltzmann:
   $$P = \\frac{Q}{t} = e \\cdot \\sigma \\cdot A \\cdot T^4 \\quad (\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/m}^2\\text{K}^4)$$
`,
    cs: `# Variasi Contoh Soal — Kalor dan Perpindahannya
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

### Contoh Soal 1: Asas Black (Campuran Air dan Es)
Sebanyak $100\\text{ g}$ es bersuhu $0^\\circ\\text{C}$ dicampurkan dengan $200\\text{ g}$ air bersuhu $50^\\circ\\text{C}$. Kalor jenis air $= 1\\text{ kal/g}^\circ\\text{C}$ dan kalor lebur es $= 80\\text{ kal/g}$. Tentukan suhu akhir kesetimbangan termal!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Kalor yang dibutuhkan untuk meleburkan seluruh es:
> $$Q_{\\text{lebur}} = m_{\\text{es}} \\cdot L = 100 \\times 80 = 8000\\text{ kal}$$
>
> **Langkah 2:** Kalor maksimal yang dapat dilepas air saat turun ke $0^\\circ\\text{C}$:
> $$Q_{\\text{lepas,max}} = m_{\\text{air}} \\cdot c \\cdot (50 - 0) = 200 \\times 1 \\times 50 = 10000\\text{ kal}$$
>
> **Langkah 3:** Karena $Q_{\\text{lepas,max}} > Q_{\\text{lebur}}$, seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$:
> $$Q_{\\text{lepas}} = Q_{\\text{terima}}$$
> $$200 \\times 1 \\times (50 - T_c) = 8000 + 100 \\times 1 \\times (T_c - 0)$$
> $$10000 - 200 T_c = 8000 + 100 T_c \\implies 300 T_c = 2000 \\implies T_c = \\frac{20}{3} \\approx 6{,}67^\\circ\\text{C}$$
>
> **Jawaban:** Suhu akhir campuran adalah $6{,}67^\\circ\\text{C}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Kalor
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

* **Kalor Suhu:** $Q = mc\\Delta T$
* **Kalor Wujud:** $Q = mL$
* **Asas Black:** $Q_{\\text{lepas}} = Q_{\\text{terima}}$
* **Pemuaian Panjang:** $\\Delta L = L_0 \\alpha \\Delta T$
* **Konduksi:** $H = \\frac{k A \\Delta T}{L}$
* **Radiasi:** $P = e \\sigma A T^4$ ($T$ wajib Kelvin)
`
  },

  {
    index: 12,
    blok: "Kalor dan Termodinamika",
    judul: "Pemanasan Global dan Efek Rumah Kaca",
    materi: `# Pemanasan Global dan Efek Rumah Kaca
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

## A. Mekanisme Fisika Efek Rumah Kaca
1. Matahari memancarkan radiasi gelombang pendek (spektrum tampak dan UV) menembus atmosfer bumi.
2. Permukaan bumi menyerap energi radiasi ini dan suhunya meningkat, lalu memancarkannya kembali ke atmosfer sebagai radiasi termal inframerah gelombang panjang ($T_{\\text{bumi}} \\ll T_{\\text{matahari}}$).
3. Molekul gas rumah kaca di troposfer menyerap radiasi inframerah tersebut melalui resonansi vibrasi ikatan molekuler dan memancarkannya kembali ke segala arah (sebagian besar kembali ke permukaan bumi), menahan panas di atmosfer.

---

## B. Gas Rumah Kaca (GRK) dan Aktivitas Pemicu
1. **Karbondioksida ($\\text{CO}_2$):** Pembakaran bahan bakar fosil (batubara, minyak bumi) dan deforestasi.
2. **Metana ($\\text{CH}_4$):** Peternakan ruminansia, persawahan padi anaerobik, dan kebocoran gas alam (potensi pemanasan 25x lebih kuat dari $\\text{CO}_2$).
3. **Dinitrogen Oksida ($\\text{N}_2\\text{O}$):** Penggunaan pupuk kimia nitrogen berlebih pada pertanian.
4. **CFC / HFC:** Gas pendingin AC dan refrigerasi (juga merusak lapisan ozon stratosfer).

---

## C. Solusi dan Mitigasi
* Transisi energi menuju Energi Baru Terbarukan (EBT: solar PV, angin, hidro, panas bumi).
* Konservasi energi dan penerapan efisiensi daya pada bangunan dan industri.
* Reboisasi dan penangkapan karbon (*Carbon Capture, Utilization, and Storage / CCUS*).
`,
    cs: `# Variasi Contoh Soal — Pemanasan Global
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

### Contoh Soal 1: Mekanisme Efek Rumah Kaca
Mengapa gas rumah kaca seperti $\\text{CO}_2$ dan $\\text{CH}_4$ dapat meloloskan cahaya matahari tetapi menahan radiasi kalor yang dipancarkan permukaan bumi?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> Berdasarkan Hukum Pergeseran Wien ($\lambda_{\\max} T = C$), radiasi matahari dari fotosfer bersuhu $\\approx 6000\\text{ K}$ didominasi panjang gelombang pendek (cahaya tampak $\\approx 0{,}5\\,\\mu\\text{m}$), yang tidak diserap oleh ikatan molekul $\\text{CO}_2$.
> Sebaliknya, permukaan bumi yang bersuhu $\\approx 300\\text{ K}$ memancarkan radiasi inframerah gelombang panjang ($\approx 10\\,\\mu\\text{m}$). Panjang gelombang ini tepat cocok dengan frekuensi resonansi vibrasi lentur dan regang molekul $\\text{CO}_2$, sehingga radiasi diserap kuat dan dipantulkan kembali.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Pemanasan Global
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

* **Radiasi Masuk:** Gelombang pendek (cahaya tampak), lolos atmosfer.
* **Radiasi Keluar:** Gelombang panjang (inframerah), diserap gas rumah kaca.
* **Gas Utama:** $\\text{CO}_2, \\text{CH}_4, \\text{N}_2\\text{O}, \\text{H}_2\\text{O}$, fluorinated gases.
* **Mitigasi:** Dekarbonisasi, transisi EBT, efisiensi energi.
`
  },

  {
    index: 13,
    blok: "Kalor dan Termodinamika",
    judul: "Teori Kinetik Gas Ideal",
    materi: `# Teori Kinetik Gas Ideal
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

## A. Hukum-Hukum Gas & Persamaan Keadaan
1. **Hukum Boyle ($T = \\text{konstan}$):** $P_1 V_1 = P_2 V_2$
2. **Hukum Charles ($P = \\text{konstan}$):** $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$
3. **Hukum Gay-Lussac ($V = \\text{konstan}$):** $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$
4. **Persamaan Umum Gas Ideal:**
   $$P V = n R T = N k T$$
   * $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$
   * $k = \\frac{R}{N_A} = 1{,}38 \\times 10^{-23}\\text{ J/K}$

---

## B. Tekanan Kinetik dan Energi Kinetik Partikel
1. **Tekanan Gas Ideal:**
   $$P = \\frac{1}{3} \\frac{N m}{V} \\overline{v^2} = \\frac{2}{3} \\frac{N}{V} \\overline{EK}$$
2. **Energi Kinetik Rata-Rata per Molekul:**
   Berbanding lurus hanya terhadap suhu mutlak gas ($T$ dalam Kelvin):
   $$\\overline{EK} = \\frac{f}{2} k T$$
   (Untuk gas monoatomik, derajat kebebasan $f = 3 \\implies \\overline{EK} = \\frac{3}{2} k T$)
3. **Kelajuan Efektif ($v_{\\text{rms}}$):**
   $$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3kT}{m}} = \\sqrt{\\frac{3P}{\\rho}}$$
4. **Energi Dalam Gas Ideal ($U$):**
   $$U = N \\cdot \\overline{EK} = \\frac{f}{2} n R T$$
`,
    cs: `# Variasi Contoh Soal — Teori Kinetik Gas Ideal
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

### Contoh Soal 1: Perubahan Suhu dan Kelajuan rms
Sebuah bejana berisi gas helium pada suhu $27^\\circ\\text{C}$. Jika suhu gas dinaikkan menjadi $327^\\circ\\text{C}$, berapakah perbandingan kelajuan efektif ($v_{\\text{rms}}$) molekul gas sebelum dan sesudah dipanaskan?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Konversikan suhu ke Kelvin:
> * $T_1 = 27 + 273 = 300\\text{ K}$
> * $T_2 = 327 + 273 = 600\\text{ K}$
>
> **Langkah 2:** Rumus kelajuan $v_{\\text{rms}} \\propto \\sqrt{T}$:
> $$\\frac{v_1}{v_2} = \\sqrt{\\frac{T_1}{T_2}} = \\sqrt{\\frac{300}{600}} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}} = 1 : \\sqrt{2}$$
>
> **Jawaban:** Perbandingannya adalah $1 : \\sqrt{2}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Gas Ideal
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

* **Persamaan Gas:** $PV = nRT = NkT$
* **Energi Kinetik (Monoatomik):** $\\overline{EK} = \\frac{3}{2}kT$
* **Kelajuan rms:** $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}}$
* **Energi Dalam:** $U = \\frac{3}{2}nRT$
`
  },

  {
    index: 14,
    blok: "Kalor dan Termodinamika",
    judul: "Termodinamika",
    materi: `# Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

## A. Usaha Luar & Empat Proses Termodinamika
Usaha yang dilakukan gas pada ekspansi/kompresi:
$$W = \\int_{V_1}^{V_2} P \\, dV$$
1. **Isobarik ($P = \\text{konstan}$):**
   $$W = P(V_2 - V_1) = n R \\Delta T$$
2. **Isokhorik ($V = \\text{konstan}$):**
   $$W = 0$$
3. **Isotermal ($T = \\text{konstan}, \\Delta U = 0$):**
   $$W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = Q$$
4. **Adiabatik ($Q = 0$):**
   $$P_1 V_1^\\gamma = P_2 V_2^\\gamma, \\quad W = -\\Delta U = \\frac{1}{\\gamma - 1}(P_1 V_1 - P_2 V_2)$$

---

## B. Hukum I & II Termodinamika (Mesin Carnot)
1. **Hukum I Termodinamika:**
   Kekekalan energi sistem gas:
   $$Q = \\Delta U + W$$
   * $Q (+)$: menyerap kalor; $Q (-)$: melepas kalor
   * $W (+)$: gas melakukan usaha (ekspansi); $W (-)$: gas menerima usaha
   * $\\Delta U (+)$: suhu naik; $\\Delta U (-)$: suhu turun
2. **Hukum II Termodinamika & Siklus Carnot:**
   Mesin kalor ideal yang beroperasi di antara reservoir suhu tinggi ($T_h$) dan suhu rendah ($T_c$):
   * Usaha bersih mesin: $W = Q_h - Q_c$
   * Efisiensi mesin Carnot:
     $$\\eta = \\left(1 - \\frac{T_c}{T_h}\\right) \\times 100\\% = \\left(\\frac{W}{Q_h}\\right) \\times 100\\%$$
`,
    cs: `# Variasi Contoh Soal — Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

### Contoh Soal 1: Efisiensi Mesin Carnot
Sebuah mesin kalor Carnot beroperasi antara suhu $800\\text{ K}$ dan $400\\text{ K}$. Jika mesin menyerap kalor sebesar $1200\\text{ Joule}$ dari reservoir panas tiap siklus, berapakah usaha yang dihasilkan dan efisiensi mesin tersebut?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung efisiensi mesin Carnot:
> $$\\eta = 1 - \\frac{T_c}{T_h} = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$$
>
> **Langkah 2:** Hitung usaha yang dihasilkan:
> $$W = \\eta \\cdot Q_h = 0{,}5 \\times 1200\\text{ J} = 600\\text{ Joule}$$
>
> **Jawaban:** Efisiensi mesin $50\\%$ dan usaha yang dihasilkan $600\\text{ J}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

* **Hukum I Termodinamika:** $Q = \\Delta U + W$
* **Isobarik:** $W = P \\Delta V$
* **Isokhorik:** $W = 0 \\implies Q = \\Delta U$
* **Isotermal:** $\\Delta U = 0 \\implies Q = W$
* **Adiabatik:** $Q = 0 \\implies W = -\\Delta U$
* **Efisiensi Carnot:** $\\eta = 1 - \\frac{T_c}{T_h} = \\frac{W}{Q_h}$
`
  },

  // Pembungkus 6: Kelistrikan
  {
    index: 15,
    blok: "Kelistrikan",
    judul: "Listrik Statis (Elektrostatika)",
    materi: `# Listrik Statis (Elektrostatika)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

## A. Hukum Coulomb dan Medan Listrik
1. **Gaya Elektrostatik (Hukum Coulomb):**
   $$F = k \\frac{|q_1 q_2|}{r^2} \\quad (k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2)$$
   * Gaya tarik-menarik untuk muatan berlawanan jenis; tolak-menolak untuk muatan sejenis.
2. **Kuat Medan Listrik ($\\vec{E}$):**
   Gaya per satuan muatan uji positif (vektor):
   $$\\vec{E} = \\frac{\\vec{F}}{q} = k \\frac{q}{r^2} \\hat{r}$$
   * Garis medan listrik memancar keluar dari muatan positif dan masuk menuju muatan negatif.

---

## B. Potensial Listrik, Energi Potensial, dan Kapasitor
1. **Potensial Listrik ($V$):** Besaran skalar:
   $$V = k \\frac{q}{r}$$
2. **Energi Potensial Listrik ($EP$) & Usaha ($W$):**
   $$EP = k \\frac{q_1 q_2}{r}, \\quad W_{A \\to B} = q(V_B - V_A)$$
3. **Kapasitor Keping Sejajar:**
   $$C = \\frac{\\varepsilon_0 \\varepsilon_r A}{d}, \\quad Q = C \\cdot V$$
   * Energi tersimpan: $W = \\frac{1}{2} C V^2 = \\frac{1}{2} \\frac{Q^2}{C} = \\frac{1}{2} Q V$
   * Susunan seri: $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}$; Susunan paralel: $C_p = C_1 + C_2$.
`,
    cs: `# Variasi Contoh Soal — Listrik Statis
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

### Contoh Soal 1: Gaya Coulomb Segaris
Dua muatan listrik $q_1 = +4\\,\\mu\\text{C}$ dan $q_2 = +9\\,\\mu\\text{C}$ terpisah sejauh $20\\text{ cm}$. Di manakah muatan uji $q_3$ harus diletakkan agar kuat medan listrik di titik tersebut sama dengan nol?

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Karena kedua muatan sama-sama positif, titik medan nol berada di antara kedua muatan.
> Misalkan jarak dari $q_1$ adalah $x$, maka jarak dari $q_2$ adalah $(20 - x)$.
>
> **Langkah 2:** Syarat medan nol: $E_1 = E_2$:
> $$k \\frac{q_1}{x^2} = k \\frac{q_2}{(20 - x)^2} \\implies \\frac{4}{x^2} = \\frac{9}{(20 - x)^2}$$
>
> **Langkah 3:** Tarik akar kedua ruas:
> $$\\frac{2}{x} = \\frac{3}{20 - x} \\implies 2(20 - x) = 3x \\implies 40 - 2x = 3x \\implies 5x = 40 \\implies x = 8\\text{ cm}$$
>
> **Jawaban:** Titik berada $8\\text{ cm}$ dari muatan $q_1$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Listrik Statis
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

* **Gaya Coulomb:** $F = k \\frac{q_1 q_2}{r^2}$ (vektor)
* **Kuat Medan:** $E = k \\frac{q}{r^2}$ (vektor)
* **Potensial:** $V = k \\frac{q}{r}$ (skalar, sertakan tanda $\\pm$)
* **Energi Potensial:** $EP = qV$
* **Kapasitas Keping:** $C = \\frac{\\varepsilon A}{d}, \\quad Q = CV, \\quad W = \\frac{1}{2}CV^2$
`
  },

  {
    index: 16,
    blok: "Kelistrikan",
    judul: "Rangkaian Arus Searah (DC)",
    materi: `# Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

## A. Hukum Ohm dan Hambatan Listrik
1. **Hukum Ohm:**
   Kuat arus berbanding lurus dengan tegangan dan berbanding terbalik dengan hambatan:
   $$V = I \\cdot R$$
2. **Resistansi Kawat Penghantar:**
   $$R = \\rho \\frac{L}{A}$$
   ($\\rho$ = hambatan jenis, $L$ = panjang kawat, $A$ = luas penampang)
3. **Kombinasi Hambatan:**
   * **Seri:** Arus sama ($I_1 = I_2$), $R_s = R_1 + R_2$
   * **Paralel:** Tegangan sama ($V_1 = V_2$), $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$

---

## B. Hukum Kirchhoff dan Analisis Loop
1. **Hukum I Kirchhoff (Percabangan Arus):**
   $$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$
2. **Hukum II Kirchhoff (Loop Tegangan):**
   Di dalam sebuah rangkaian tertutup, jumlah aljabar gaya gerak listrik (GGL) dan penurunan tegangan sama dengan nol:
   $$\\Sigma \\mathcal{E} + \\Sigma I R = 0$$
   * Aturan Tanda: Jika saat mengitari loop menjumpai kutub positif baterai lebih dulu, $\\mathcal{E}$ bertanda $(+)$; jika kutub negatif lebih dulu, bertanda $(-)$.
3. **Energi dan Daya Listrik:**
   $$W = V I t = I^2 R t = \\frac{V^2}{R} t$$
   $$P = \\frac{W}{t} = V I = I^2 R = \\frac{V^2}{R}$$
`,
    cs: `# Variasi Contoh Soal — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

### Contoh Soal 1: Rangkaian 1 Loop
Sebuah rangkaian tertutup terdiri atas sumber tegangan $\\mathcal{E}_1 = 12\\text{ V}$ (hambatan dalam $r_1 = 1\\,\\Omega$) dan $\\mathcal{E}_2 = 4\\text{ V}$ ($r_2 = 1\\,\\Omega$) yang berlawanan arah, serta resistor luar $R = 6\\,\\Omega$. Tentukan kuat arus yang mengalir dalam rangkaian!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Terapkan Hukum II Kirchhoff:
> $$\\Sigma \\mathcal{E} + \\Sigma I(R + r) = 0$$
> Misalkan loop searah $\\mathcal{E}_1$:
> $$-\\mathcal{E}_1 + \\mathcal{E}_2 + I(R + r_1 + r_2) = 0$$
> $$-12 + 4 + I(6 + 1 + 1) = 0 \\implies -8 + 8I = 0 \\implies 8I = 8 \\implies I = 1\\text{ Ampere}$$
>
> **Jawaban:** Kuat arus yang mengalir adalah $1\\text{ A}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Arus Searah
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

* **Hukum Ohm:** $V = IR$
* **Hambatan Kawat:** $R = \\rho \\frac{L}{A}$
* **Hukum I Kirchhoff:** $\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$
* **Hukum II Kirchhoff:** $\\Sigma \\mathcal{E} + \\Sigma IR = 0$
* **Daya Listrik:** $P = VI = I^2 R = \\frac{V^2}{R}$
`
  }
];

console.log('Fisika chapters defined:', fisikaChapters.length);
module.exports = fisikaChapters;
