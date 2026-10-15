// tka_fisika_data.js - 6 Bab Fisika TKA (18 Modul: Materi, Contoh Soal, Rangkuman)
module.exports = [
  // ==========================================
  // BAB 1: KINEMATIKA
  // ==========================================
  {
    id: "tka-fis-mat-01",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 1: Kinematika",
    tipe: "materi",
    babIndex: 1,
    babJudul: "1. Kinematika",
    content: `# Bab 1: Kinematika
**Kategori:** TKA Fisika | **Blok:** Blok 1: Kinematika

## Pendahuluan Kinematika
Kinematika adalah cabang mekanika klasik yang mempelajari gerak benda tanpa mempersoalkan penyebab timbulnya gerak tersebut. Analisis kinematika berpusat pada penentuan posisi, jarak, perpindahan, kelajuan, kecepatan, dan percepatan benda sebagai fungsi waktu.

---

### A. Pengukuran dan Ketelitian Alat Ukur
Pengukuran adalah kegiatan membandingkan suatu besaran fisis dengan satuan standar yang telah disepakati secara internasional.

#### 1. Jangka Sorong (Vernier Caliper)
* **Fungsi:** Mengukur diameter luar koin/pipa, diameter dalam tabung rongga, serta kedalaman tabung sempit.
* **Prinsip Kerja:** Terdiri atas rahang tetap (skala utama) dan rahang geser (skala nonius/vernier).
* **Nilai Skala Terkecil (NST):** 
  Umumnya $0{,}1\\text{ mm}$ (skala 10 nonius) atau $0{,}05\\text{ mm}$ (skala 20 nonius).
* **Formula Pembacaan:**
  $$\\text{Hasil} = \\text{Skala Utama (SU)} + (\\text{Garis Nonius yang Berimpit} \\times \\text{NST})$$

#### 2. Mikrometer Sekrup (Micrometer Screw Gauge)
* **Fungsi:** Mengukur ketebalan pelat tipis, diameter kawat halus, atau kertas dengan presisi tinggi.
* **Prinsip Kerja:** Menggunakan ulir presisi dengan silinder tetap (*sleeve*) dan silinder putar (*thimble*).
* **Nilai Skala Terkecil (NST):** 
  Satu putaran penuh memajukan poros geser sebesar $0{,}5\\text{ mm}$ yang dibagi menjadi 50 skala putar, sehingga $\\text{NST} = \\frac{0{,}5\\text{ mm}}{50} = 0{,}01\\text{ mm}$.
* **Formula Pembacaan:**
  $$\\text{Hasil} = \\text{Skala Utama} + (\\text{Skala Putar} \\times 0{,}01\\text{ mm})$$

#### 3. Neraca Tiga Lengan (Ohaus Balance)
* **Fungsi:** Mengukur massa benda padat dengan menggeser anting pemberat pada tiga lengan skala.
* **Karakteristik Lengan:**
  * Lengan belakang: kelipatan ratusan gram ($0 - 500\\text{ g}$).
  * Lengan tengah: kelipatan puluhan gram ($0 - 100\\text{ g}$).
  * Lengan depan: satuan gram hingga persepuluhan gram ($0 - 10\\text{ g}$, ketelitian $0{,}1\\text{ g}$ atau $0{,}05\\text{ g}$).
* **Formula Pembacaan:**
  $$\\text{Massa Total} = \\text{Skala Lengan Belakang} + \\text{Skala Lengan Tengah} + \\text{Skala Lengan Depan}$$

#### 4. Kaidah Pelaporan dan Perhitungan Angka Penting
* **Aturan Angka Penting (AP):**
  1. Semua angka bukan nol adalah AP (contoh: $43{,}25$ memiliki 4 AP).
  2. Angka nol di antara angka bukan nol adalah AP (contoh: $2005$ memiliki 4 AP).
  3. Angka nol di sebelah kiri angka bukan nol pertama bukan AP (contoh: $0{,}0045$ memiliki 2 AP).
  4. Angka nol di belakang koma desimal setelah angka bukan nol adalah AP (contoh: $3{,}500$ memiliki 4 AP).
* **Kaidah Operasi Hitung:**
  * **Penjumlahan/Pengurangan:** Mengikuti jumlah desimal paling sedikit.
  * **Perkalian/Pembagian:** Mengikuti jumlah angka penting paling sedikit dari faktor yang dioperasikan.
  * **Ketidakpastian Relatif (KR):** $\\text{KR} = \\frac{\\Delta x}{\\bar{x}} \\times 100\\%$. Jika $\\text{KR} \\approx 10\\%$, laporkan dengan 2 AP; jika $\\text{KR} \\approx 1\\%$, laporkan dengan 3 AP; jika $\\text{KR} \\approx 0{,}1\\%$, laporkan dengan 4 AP.

---

### B. Gerak Lurus
Gerak lurus meninjau partikel yang lintasannya berupa garis lurus satu dimensi (sumbu-$x$).

#### 1. Jarak vs Perpindahan
* **Jarak ($s$):** Panjang seluruh lintasan riil yang ditempuh benda. Merupakan besaran **skalar** ($s \\ge 0$).
* **Perpindahan ($\\Delta \\vec{x}$):** Perubahan kedudukan posisi dari titik awal ke titik akhir. Merupakan besaran **vektor**:
  $$\\Delta \\vec{x} = \\vec{x}_{\\text{akhir}} - \\vec{x}_{\\text{awal}}$$

#### 2. Kelajuan vs Kecepatan
* **Kelajuan ($v$):** Perbandingan jarak total terhadap selang waktu (besaran **skalar**):
  $$v = \\frac{s_{\\text{total}}}{\\Delta t}$$
* **Kecepatan ($\\vec{v}$):** Perbandingan perpindahan terhadap selang waktu (besaran **vektor**):
  $$\\vec{v} = \\frac{\\Delta \\vec{x}}{\\Delta t}$$
* **Kecepatan Sesaat:** Turunan pertama fungsi posisi terhadap waktu:
  $$\\vec{v}(t) = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{x}}{\\Delta t} = \\frac{d\\vec{x}}{dt}$$

#### 3. Gerak Lurus Beraturan (GLB)
Benda bergerak pada lintasan lurus dengan **kecepatan konstan** (percepatan $a = 0$):
$$x(t) = x_0 + v \\cdot t$$
* **Grafik $v-t$:** Berupa garis lurus horizontal. Luas di bawah kurva $v-t$ sama dengan jarak tempuh.
* **Grafik $x-t$:** Berupa garis lurus miring dengan kemiringan (gradien) sama dengan kecepatan $v$.

#### 4. Gerak Lurus Berubah Beraturan (GLBB)
Benda bergerak dengan **percepatan tetap** ($a = \\text{konstan}$):
$$v_t = v_0 + a t$$
$$s = v_0 t + \\frac{1}{2} a t^2$$
$$v_t^2 = v_0^2 + 2 a s$$
* Jika percepatan $a > 0$, benda mengalami percepatan (kelajuan meningkat).
* Jika percepatan $a < 0$, benda mengalami perlambatan (kelajuan menurun hingga berhenti $v_t = 0$).
* **Gerak Jatuh Bebas (GJB):** $v_0 = 0$, $a = g$, $h = \\frac{1}{2}gt^2$, $v_t = \\sqrt{2gh}$.
* **Gerak Vertikal ke Atas (GVA):** $a = -g$, tinggi maksimum $h_{\\max} = \\frac{v_0^2}{2g}$, waktu mencapai puncak $t_{\\text{puncak}} = \\frac{v_0}{g}$.

---

### C. Gerak Lengkung (Parabola & Melingkar)

#### 1. Gerak Parabola (Proyektil)
Gerak dua dimensi perpaduan antara GLB pada sumbu horizontal ($x$) dan GLBB diperlambat/dipercepat gravitasi pada sumbu vertikal ($y$).
* **Kecepatan Awal Komponen:**
  $$v_{0x} = v_0 \\cos\\theta, \\quad v_{0y} = v_0 \\sin\\theta$$
* **Posisi dan Kecepatan pada Saat $t$:**
  $$x(t) = (v_0 \\cos\\theta) t$$
  $$y(t) = (v_0 \\sin\\theta) t - \\frac{1}{2} g t^2$$
  $$v_x(t) = v_0 \\cos\\theta, \\quad v_y(t) = v_0 \\sin\\theta - g t$$
  $$v(t) = \\sqrt{v_x^2 + v_y^2}$$
* **Titik Tertinggi (Puncak, $v_y = 0$):**
  $$t_{\\text{puncak}} = \\frac{v_0 \\sin\\theta}{g}$$
  $$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$$
* **Jarak Tempuh Maksimum (Titik Terjauh di Tanah):**
  $$t_{\\text{total}} = 2 t_{\\text{puncak}} = \\frac{2 v_0 \\sin\\theta}{g}$$
  $$X_{\\max} = \\frac{v_0^2 \\sin 2\\theta}{g}$$
  > Jangkauan terjauh tercapai pada sudut elevasi optimum $\\theta = 45^\\circ$ di mana $\\sin 2(45^\\circ) = 1$.

#### 2. Gerak Melingkar Beraturan (GMB)
Gerak benda melintasi lintasan berbentuk lingkaran dengan kelajuan linier dan kecepatan sudut konstan.
* **Periode ($T$) dan Frekuensi ($f$):**
  $$T = \\frac{t}{n}, \\quad f = \\frac{n}{t} = \\frac{1}{T}$$
* **Kecepatan Sudut ($\\omega$):**
  $$\\omega = \\frac{2\\pi}{T} = 2\\pi f$$
* **Hubungan Kecepatan Linier ($v$) dan Sudut ($\\omega$):**
  $$v = \\omega \\cdot r$$
* **Percepatan Sentripetal ($a_s$):**
  Percepatan yang selalu mengarah ke pusat lingkaran dan berfungsi mengubah arah vektor kecepatan linier:
  $$a_s = \\frac{v^2}{r} = \\omega^2 r$$
`
  },
  {
    id: "tka-fis-cs-01",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 1: Kinematika",
    tipe: "contoh-soal",
    babIndex: 1,
    babJudul: "1. Variasi Contoh Soal — Kinematika",
    content: `# Variasi Contoh Soal — Kinematika
**Kategori:** TKA Fisika | **Blok:** Blok 1: Kinematika

---

### Soal 1: Pembacaan Mikrometer Sekrup & Angka Penting
> [!EXAMPLE]
> Sebuah pelat seng diukur ketebalannya menggunakan mikrometer sekrup. Skala tetap menunjukkan $4{,}5\\text{ mm}$ dan garis ke-34 pada skala putar berimpit lurus dengan garis horizontal skala utama. Jika lebar pelat diukur dengan mistar adalah $2{,}4\\text{ cm}$, hitunglah luas penampang samping pelat tersebut menurut aturan angka penting!

#### Pembahasan:
1. **Pembacaan Mikrometer Sekrup:**
   $$\\text{Tebal } (t) = 4{,}5\\text{ mm} + (34 \\times 0{,}01\\text{ mm}) = 4{,}5 + 0{,}34 = 4{,}84\\text{ mm} = 0{,}484\\text{ cm}$$
   Ketebalan memiliki **3 angka penting**.
2. **Lebar Pelat:**
   $$l = 2{,}4\\text{ cm} \\quad (\\text{2 angka penting})$$
3. **Perkalian Luas:**
   $$A = t \\times l = 0{,}484 \\times 2{,}4 = 1{,}1616\\text{ cm}^2$$
   Menurut kaidah perkalian angka penting, hasil dibulatkan mengikuti faktor dengan AP paling sedikit (2 AP):
   $$A = 1{,}2\\text{ cm}^2$$

---

### Soal 2: Susul-Menyusul GLB & GLBB
> [!EXAMPLE]
> Mobil $A$ bergerak lurus beraturan dengan kecepatan konstan $20\\text{ m/s}$. Tepat ketika mobil $A$ melewati mobil $B$ yang sedang diam di lampu merah, mobil $B$ mulai bergerak dengan percepatan tetap $4\\text{ m/s}^2$ searah mobil $A$. Kapan dan pada jarak berapa mobil $B$ berhasil menyusul mobil $A$?

#### Pembahasan:
1. **Kondisi Menyusul:** Posisi kedua mobil sama ($s_A = s_B$).
2. **Persamaan Gerak:**
   * Mobil $A$ (GLB): $s_A = v_A \\cdot t = 20 t$
   * Mobil $B$ (GLBB dari diam): $s_B = \\frac{1}{2} a_B t^2 = \\frac{1}{2} (4) t^2 = 2 t^2$
3. **Penyelesaian Aljabar:**
   $$2 t^2 = 20 t \\implies 2 t (t - 10) = 0$$
   Karena $t > 0$, maka $t = 10\\text{ s}$.
4. **Jarak Tempuh:**
   $$s = 20(10) = 200\\text{ m}$$
   Mobil $B$ menyusul mobil $A$ setelah **$10\\text{ detik}$** pada jarak **$200\\text{ meter}$**.

---

### Soal 3: Gerak Parabola — Jarak dan Ketinggian
> [!EXAMPLE]
> Sebuah peluru ditembakkan dengan kecepatan awal $v_0 = 50\\text{ m/s}$ dan sudut elevasi $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Tentukan:
> 1. Tinggi maksimum peluru ($h_{\\max}$)
> 2. Jarak jangkauan horizontal terjauh ($X_{\\max}$)

#### Pembahasan:
1. **Tinggi Maksimum:**
   $$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g} = \\frac{(50)^2 (0{,}6)^2}{2(10)} = \\frac{2500 \\times 0{,}36}{20} = \\frac{900}{20} = 45\\text{ m}$$
2. **Jarak Terjauh:**
   $$X_{\\max} = \\frac{v_0^2 \\sin 2\\theta}{g} = \\frac{v_0^2 (2 \\sin\\theta \\cos\\theta)}{g} = \\frac{2500 \\times 2 \\times 0{,}6 \\times 0{,}8}{10} = 250 \\times 0{,}96 = 240\\text{ m}$$
`
  },
  {
    id: "tka-fis-rg-01",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 1: Kinematika",
    tipe: "rangkuman",
    babIndex: 1,
    babJudul: "1. Rangkuman Rumus & Konsep — Kinematika",
    content: `# Rangkuman Rumus & Konsep — Kinematika
**Kategori:** TKA Fisika | **Blok:** Blok 1: Kinematika

| Besaran / Konsep | Rumus Utama | Keterangan & Catatan |
| :--- | :--- | :--- |
| **Jangka Sorong** | $\\text{Hasil} = \\text{SU} + (\\text{SN} \\times \\text{NST})$ | $\\text{NST} = 0{,}1\\text{ mm}$ atau $0{,}05\\text{ mm}$ |
| **Mikrometer Sekrup**| $\\text{Hasil} = \\text{SU} + (\\text{SP} \\times 0{,}01\\text{ mm})$| $\\text{NST} = 0{,}01\\text{ mm}$ |
| **Neraca Tiga Lengan**| $m_{\\text{tot}} = m_1 + m_2 + m_3$ | Jumlahkan skala dari ketiga lengan |
| **GLB** | $s = v \\cdot t$ | Kecepatan konstan ($a = 0$) |
| **GLBB Kecepatan** | $v_t = v_0 + at$ | $a > 0$ dipercepat, $a < 0$ diperlambat |
| **GLBB Posisi** | $s = v_0 t + \\frac{1}{2}at^2$ | $s$ = jarak tempuh |
| **GLBB Tanpa Waktu**| $v_t^2 = v_0^2 + 2as$ | Eliminasi variabel waktu $t$ |
| **Parabola Tinggi Maks** | $h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$ | Tercapai saat $v_y = 0$ |
| **Parabola Jangkauan** | $X_{\\max} = \\frac{v_0^2 \\sin 2\\theta}{g}$ | Maksimum mutlak pada $\\theta = 45^\\circ$ |
| **GMB Hubungan Linier**| $v = \\omega \\cdot r$ | $\\omega = 2\\pi f = \\frac{2\\pi}{T}$ |
| **Percepatan Sentripetal**| $a_s = \\frac{v^2}{r} = \\omega^2 r$ | Selalu tegak lurus kecepatan linier ke pusat |
`
  },

  // ==========================================
  // BAB 2: DINAMIKA
  // ==========================================
  {
    id: "tka-fis-mat-02",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 2: Dinamika",
    tipe: "materi",
    babIndex: 2,
    babJudul: "2. Dinamika",
    content: `# Bab 2: Dinamika
**Kategori:** TKA Fisika | **Blok:** Blok 2: Dinamika

## Pendahuluan Dinamika
Dinamika adalah cabang mekanika yang mempelajari hubungan timbal-balik antara gaya yang bekerja pada suatu benda dengan gerak yang dihasilkannya, meliputi gerak translasi partikel maupun rotasi benda tegar.

---

### A. Hubungan Gaya dan Gerak (Hukum Newton)

#### 1. Tiga Hukum Fundamental Newton
* **Hukum I Newton (Kelembaman/Inersia):**
  Jika resultan gaya yang bekerja pada benda sama dengan nol, benda yang diam akan tetap diam, dan benda yang bergerak lurus beraturan akan tetap bergerak dengan kecepatan konstan:
  $$\\Sigma \\vec{F} = 0 \\iff \\vec{a} = 0$$
* **Hukum II Newton:**
  Percepatan yang dialami suatu benda berbanding lurus dengan resultan gaya total yang bekerja padanya dan berbanding terbalik dengan massa kelembamannya:
  $$\\Sigma \\vec{F} = m \\vec{a}$$
* **Hukum III Newton (Aksi - Reaksi):**
  Jika benda $A$ mengerjakan gaya $\\vec{F}_{AB}$ pada benda $B$, maka benda $B$ akan mengerjakan gaya $\\vec{F}_{BA}$ pada benda $A$ yang sama besar tetapi berlawanan arah:
  $$\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$$
  > Pasangan aksi-reaksi bekerja pada **dua benda yang berbeda**, segaris kerja, serentak, dan tidak saling meniadakan.

#### 2. Penguraian Diagram Gaya Bebas (Free Body Diagram)
* **Gaya Berat ($w$):** Selalu berarah tegak lurus ke bawah menuju pusat bumi: $w = m \\cdot g$.
* **Gaya Normal ($N$):** Gaya kontak permukaan yang tegak lurus bidang sentuh:
  * Pada bidang datar horizontal: $N = w = mg$.
  * Pada bidang miring bersudut $\\theta$: $N = mg \\cos\\theta$.
* **Gaya Gesek:**
  * **Gaya Gesek Statis ($f_s$):** Menahan benda agar tetap diam: $f_{s,\\max} = \\mu_s N$. Benda mulai tepat akan bergerak jika $F_{\\text{tarik}} = f_{s,\\max}$.
  * **Gaya Gesek Kinetis ($f_k$):** Bekerja saat benda sudah bergerak meluncur: $f_k = \\mu_k N$ (berlaku $\\mu_k < \\mu_s$).
* **Gaya Tegangan Tali ($T$):** Gaya tarikan sepanjang tali lentur yang massanya diabaikan.

---

### B. Momentum dan Impuls

#### 1. Konsep Momentum dan Impuls
* **Momentum Linier ($\\vec{p}$):** Ukuran kesukaran untuk menghentikan benda yang sedang bergerak (vektor):
  $$\\vec{p} = m \\vec{v}$$
* **Impuls ($\\vec{I}$):** Hasil kali gaya rata-rata dengan selang waktu sentuhan:
  $$\\vec{I} = \\vec{F} \\Delta t = \\int_{t_1}^{t_2} \\vec{F}(t) dt$$
* **Teorema Impuls-Momentum:**
  Impuls yang dikerjakan pada benda sama dengan perubahan momentum benda tersebut:
  $$\\vec{I} = \\Delta \\vec{p} = m \\vec{v}' - m \\vec{v}$$

#### 2. Hukum Kekekalan Momentum Linier
Jika tidak ada gaya luar netto yang bekerja pada sistem ($\\Sigma \\vec{F}_{\\text{luar}} = 0$):
$$m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2'$$

#### 3. Klasifikasi Peristiwa Tumbukan
Koefisien restitusi ($e$):
$$e = -\\frac{v_1' - v_2'}{v_1 - v_2}$$
* **Tumbukan Lenting Sempurna ($e = 1$):** Berlaku hukum kekekalan momentum dan kekekalan energi kinetik ($EK_{\\text{awal}} = EK_{\\text{akhir}}$).
* **Tumbukan Lenting Sebagian ($0 < e < 1$):** Berlaku hukum kekekalan momentum, tetapi terjadi pengurangan energi kinetik menjadi energi kalor/bunyi.
* **Tumbukan Tidak Lenting Sama Sekali ($e = 0$):** Kedua benda menyatu dan bergerak dengan kecepatan bersama ($v_1' = v_2' = v'$).

---

### C. Dinamika Rotasi Benda Tegar

#### 1. Momen Gaya / Torsi ($\\vec{\\tau}$)
Ukuran keefektifan gaya dalam memutar benda terhadap poros putar tertentu:
$$\\tau = r \\cdot F \\sin\\theta$$
* $r$ = lengan gaya (jarak poros ke garis kerja gaya).
* Satuan torsi adalah $\\text{N}\\cdot\\text{m}$.

#### 2. Momen Inersia ($I$)
Ukuran kelembaman benda untuk mempertahankan keadaan rotasinya terhadap poros tertentu:
$$I = \\sum m_i r_i^2 = \\int r^2 dm$$
* **Benda Tegar Homogen Standar:**
  * Silinder pejal (poros sumbu): $I = \\frac{1}{2} M R^2$
  * Silinder tipis berongga: $I = M R^2$
  * Bola pejal (poros diameter): $I = \\frac{2}{5} M R^2$
  * Bola berongga tipis: $I = \\frac{2}{3} M R^2$
  * Batang silinder homogen (poros di pusat massa): $I = \\frac{1}{12} M L^2$
  * Batang silinder homogen (poros di salah satu ujung): $I = \\frac{1}{3} M L^2$
* **Teorema Sumbu Sejajar:**
  $$I = I_{\\text{pm}} + M d^2$$

#### 3. Hukum II Newton untuk Gerak Rotasi
Analog dengan gerak translasi:
$$\\Sigma \\tau = I \\alpha$$
* $\\alpha$ = percepatan sudut ($\\text{rad/s}^2$).

#### 4. Momentum Sudut dan Energi Kinetik Menggelinding
* **Momentum Sudut ($L$):**
  $$L = I \\omega$$
  * **Hukum Kekekalan Momentum Sudut:** Jika torsi luar netto nol ($\\Sigma \\tau = 0$), maka $I_1 \\omega_1 = I_2 \\omega_2$.
* **Energi Kinetik Total Benda Menggelinding Murni:**
  $$EK_{\\text{total}} = EK_{\\text{translasi}} + EK_{\\text{rotasi}} = \\frac{1}{2} M v^2 + \\frac{1}{2} I \\omega^2$$
`
  },
  {
    id: "tka-fis-cs-02",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 2: Dinamika",
    tipe: "contoh-soal",
    babIndex: 2,
    babJudul: "2. Variasi Contoh Soal — Dinamika",
    content: `# Variasi Contoh Soal — Dinamika
**Kategori:** TKA Fisika | **Blok:** Blok 2: Dinamika

---

### Soal 1: Balok pada Bidang Miring Kasar
> [!EXAMPLE]
> Sebuah balok bermassa $m = 4\\text{ kg}$ diletakkan pada bidang miring dengan kemiringan $\\theta = 30^\\circ$ terhadap horizontal. Koefisien gesekan kinetik antara balok dan bidang adalah $\\mu_k = 0{,}2$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, tentukan percepatan balok saat meluncur ke bawah!

#### Pembahasan:
1. **Analisis Komponen Gaya:**
   * Gaya sejajar bidang: $F_{\\parallel} = mg \\sin 30^\\circ = 4(10)(0{,}5) = 20\\text{ N}$
   * Gaya normal: $N = mg \\cos 30^\\circ = 4(10)\\left(\\frac{1}{2}\\sqrt{3}\\right) = 20\\sqrt{3}\\text{ N} \\approx 34{,}64\\text{ N}$
2. **Gaya Gesek Kinetis:**
   $$f_k = \\mu_k N = 0{,}2 \\times 20\\sqrt{3} = 4\\sqrt{3}\\text{ N} \\approx 6{,}93\\text{ N}$$
3. **Hukum II Newton:**
   $$\\Sigma F = ma \\implies mg \\sin 30^\\circ - f_k = m a$$
   $$20 - 4\\sqrt{3} = 4 a \\implies a = 5 - \\sqrt{3} \\approx 3{,}27\\text{ m/s}^2$$

---

### Soal 2: Tumbukan Lenting Sempurna 1 Dimensi
> [!EXAMPLE]
> Benda $A$ bermassa $2\\text{ kg}$ bergerak dengan kecepatan $6\\text{ m/s}$ ke kanan menabrak benda $B$ bermassa $3\\text{ kg}$ yang sedang diam. Jika tumbukan bersifat lenting sempurna ($e = 1$), hitunglah kecepatan masing-masing benda setelah tumbukan!

#### Pembahasan:
1. **Hukum Kekekalan Momentum:**
   $$m_A v_A + m_B v_B = m_A v_A' + m_B v_B'$$
   $$2(6) + 3(0) = 2 v_A' + 3 v_B' \\implies 2 v_A' + 3 v_B' = 12 \\quad \\text{--- (1)}$$
2. **Koefisien Restitusi ($e = 1$):**
   $$e = -\\frac{v_A' - v_B'}{v_A - v_B} = 1 \\implies -(v_A' - v_B') = 6 - 0 \\implies v_B' - v_A' = 6 \\implies v_B' = v_A' + 6 \\quad \\text{--- (2)}$$
3. **Substitusi (2) ke (1):**
   $$2 v_A' + 3(v_A' + 6) = 12 \\implies 5 v_A' + 18 = 12 \\implies 5 v_A' = -6 \\implies v_A' = -1{,}2\\text{ m/s}$$
   $$v_B' = -1{,}2 + 6 = 4{,}8\\text{ m/s}$$
   Benda $A$ memantul ke kiri dengan kelajuan **$1{,}2\\text{ m/s}$**, dan benda $B$ bergerak ke kanan dengan kelajuan **$4{,}8\\text{ m/s}$**.

---

### Soal 3: Silinder Pejal Menggelinding Menuruni Bidang Miring
> [!EXAMPLE]
> Sebuah silinder pejal homogen ($I = \\frac{1}{2} M R^2$) dilepaskan dari puncak bidang miring setinggi $h = 3\\text{ meter}$ tanpa kecepatan awal dan menggelinding murni tanpa slip. Tentukan kelajuan silinder di dasar bidang miring ($g = 10\\text{ m/s}^2$)!

#### Pembahasan:
1. **Hukum Kekekalan Energi Mekanik:**
   $$E_{\\text{puncak}} = E_{\\text{dasar}} \\implies M g h = \\frac{1}{2} M v^2 + \\frac{1}{2} I \\omega^2$$
2. **Kondisi Tanpa Slip:** $\\omega = \\frac{v}{R}$ dan $I = \\frac{1}{2}MR^2$:
   $$M g h = \\frac{1}{2} M v^2 + \\frac{1}{2}\\left(\\frac{1}{2} M R^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2} M v^2 + \\frac{1}{4} M v^2 = \\frac{3}{4} M v^2$$
3. **Penyelesaian Kecepatan:**
   $$g h = \\frac{3}{4} v^2 \\implies v = \\sqrt{\\frac{4}{3} g h} = \\sqrt{\\frac{4}{3} (10)(3)} = \\sqrt{40} = 2\\sqrt{10}\\text{ m/s} \\approx 6{,}32\\text{ m/s}$$
`
  },
  {
    id: "tka-fis-rg-02",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 2: Dinamika",
    tipe: "rangkuman",
    babIndex: 2,
    babJudul: "2. Rangkuman Rumus & Konsep — Dinamika",
    content: `# Rangkuman Rumus & Konsep — Dinamika
**Kategori:** TKA Fisika | **Blok:** Blok 2: Dinamika

| Konsep | Rumus Utama | Syarat & Catatan |
| :--- | :--- | :--- |
| **Hukum I Newton** | $\\Sigma F = 0 \\iff a = 0$ | Sistem seimbang / GLB |
| **Hukum II Newton** | $\\Sigma F = m a$ | Arah $a$ searah $\\Sigma F$ |
| **Hukum III Newton** | $F_{\\text{aksi}} = -F_{\\text{reaksi}}$ | 2 benda berbeda, sama besar, berlawanan arah |
| **Gaya Gesek Statis** | $f_s \\le \\mu_s N$ | Maksimum tercapai saat tepat akan bergerak |
| **Gaya Gesek Kinetis**| $f_k = \\mu_k N$ | Berlaku saat benda meluncur |
| **Impuls & Momentum** | $I = F\\Delta t = \\Delta p$ | $\\Delta p = m v' - m v$ |
| **Kekekalan Momentum**| $m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$ | Berlaku jika $\\Sigma F_{\\text{luar}} = 0$ |
| **Koefisien Restitusi**| $e = -\\frac{v_1' - v_2'}{v_1 - v_2}$ | $e=1$ (lenting sempurna), $e=0$ (tidak lenting) |
| **Momen Gaya (Torsi)**| $\\tau = r F \\sin\\theta$ | Lengan momen $r$, tegak lurus |
| **Hukum Newton Rotasi**| $\\Sigma \\tau = I \\alpha$ | $\\alpha$ percepatan sudut |
| **Silinder Pejal** | $I = \\frac{1}{2} M R^2$ | Poros sumbu utama |
| **Bola Pejal** | $I = \\frac{2}{5} M R^2$ | Poros pusat bola |
| **Kekekalan Momentum Sudut**| $I_1 \\omega_1 = I_2 \\omega_2$ | Jika $\\Sigma \\tau = 0$ |
`
  },

  // ==========================================
  // BAB 3: FLUIDA
  // ==========================================
  {
    id: "tka-fis-mat-03",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 3: Fluida",
    tipe: "materi",
    babIndex: 3,
    babJudul: "3. Fluida",
    content: `# Bab 3: Fluida
**Kategori:** TKA Fisika | **Blok:** Blok 3: Fluida

## Pendahuluan Fluida
Fluida adalah zat alir yang tidak mampu menahan tegangan geser ketika diam, mencakup cairan (*liquid*) dan gas. Studi fluida dibagi menjadi fluida statis (kondisi diam) dan fluida dinamis (kondisi mengalir).

---

### A. Fluida Statis

#### 1. Tekanan Hidrostatis dan Tekanan Mutlak
Tekanan adalah gaya per satuan luas ($P = \\frac{F}{A}$).
* **Tekanan Hidrostatis ($P_h$):** Tekanan yang dihasilkan oleh berat kolom zat cair diam di atas kedalaman $h$:
  $$P_h = \\rho \\cdot g \\cdot h$$
  * $\\rho$ = massa jenis fluida ($\\text{kg/m}^3$)
  * $h$ = kedalaman titik diukur dari permukaan zat cair ($\\text{m}$)
* **Hukum Utama Hidrostatis:** Semua titik yang berada pada bidang datar horizontal yang sama di dalam zat cair sejenis yang diam memiliki tekanan hidrostatis yang identik.
* **Tekanan Mutlak / Total ($P$):** Menghitung tekanan udara atmosfer luar ($P_0 \\approx 1{,}013 \\times 10^5\\text{ Pa} = 1\\text{ atm}$):
  $$P = P_0 + \\rho g h$$

#### 2. Hukum Pascal
* **Bunyi:** Tekanan yang diberikan pada zat cair dalam ruang tertutup akan diteruskan ke segala arah dengan sama besar.
  $$P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$
* **Aplikasi:** Dongkrak hidrolik, rem hidrolik mobil, alat pres hidrolik.

#### 3. Hukum Archimedes dan Keadaan Benda
* **Bunyi:** Suatu benda yang dicelupkan sebagian atau seluruhnya ke dalam fluida akan mengalami gaya ke atas (gaya apung, $F_a$) yang besarnya sama dengan berat fluida yang dipindahkan oleh benda tersebut:
  $$F_a = \\rho_f \\cdot V_{bf} \\cdot g$$
  * $\\rho_f$ = massa jenis fluida
  * $V_{bf}$ = volume bagian benda yang tercelup ke dalam fluida
* **Keadaan Benda di Dalam Fluida:**
  1. **Terapung:** $F_a = W_b \\iff \\rho_b < \\rho_f$. Volume tercelup: $\\frac{V_{bf}}{V_b} = \\frac{\\rho_b}{\\rho_f}$.
  2. **Melayang:** $F_a = W_b \\iff \\rho_b = \\rho_f$. Benda berada sembarang di dalam zat cair.
  3. **Tenggelam:** $F_a < W_b \\iff \\rho_b > \\rho_f$. Benda jatuh hingga menyentuh dasar wadah, berlaku gaya normal dasar: $N = W_b - F_a$.

---

### B. Fluida Dinamis

#### 1. Karakteristik Fluida Ideal
Fluida ideal adalah penyederhanaan model teoritis dengan sifat:
1. **Inkompresibel (tak termampatkan):** Massa jenis fluida konstan sepanjang aliran.
2. **Non-viskos (tanpa gesekan internal):** Tidak mengalami viskositas.
3. **Aliran Stasioner (Steady Streamline):** Kecepatan partikel pada setiap titik tetap terhadap waktu.
4. **Aliran Non-rotasional:** Partikel fluida tidak mengalami pusaran putaran di sekitar porosnya.

#### 2. Persamaan Kontinuitas dan Debit
* **Debit Aliran ($Q$):** Volume fluida yang mengalir melintasi suatu penampang tiap satuan waktu:
  $$Q = \\frac{V}{t} = A \\cdot v$$
* **Persamaan Kontinuitas:** Pada aliran fluida tak termampatkan, debit di penampang manapun selalu konstan:
  $$A_1 v_1 = A_2 v_2 = \\text{konstan}$$
  > Jika luas penampang mengecil, kelajuan fluida bertambah sebanding ($v \\propto \\frac{1}{A}$).

#### 3. Persamaan Bernoulli
Merupakan perwujudan hukum kekekalan energi mekanik pada fluida yang mengalir:
$$P_1 + \\frac{1}{2} \\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2} \\rho v_2^2 + \\rho g h_2 = \\text{konstan}$$

#### 4. Penerapan Prinsip Bernoulli
* **Teorema Torricelli (Tangki Bocor):**
  Kelajuan pancaran fluida dari lubang kebocoran pada kedalaman $h$ dari permukaan bebas:
  $$v = \\sqrt{2gh}$$
  Waktu jatuh air ke tanah dari ketinggian lubang $H$: $t = \\sqrt{\\frac{2H}{g}}$, jarak pancaran mendatar: $x = 2\\sqrt{h H}$.
* **Venturimeter Tanpa Manometer:**
  $$v_1 = \\sqrt{\\frac{2gh}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$$
* **Gaya Angkat Sayap Pesawat Terbang:**
  Penampang sayap pesawat aerofoil dirancang agar udara di bagian atas mengalir lebih cepat dibanding bagian bawah ($v_{\\text{atas}} > v_{\\text{bawah}}$), menghasilkan tekanan di bawah lebih besar ($P_{\\text{bawah}} > P_{\\text{atas}}$):
  $$F_{\\text{angkat}} = (P_{\\text{bawah}} - P_{\\text{atas}}) A = \\frac{1}{2} \\rho_{\\text{udara}} (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) A$$
`
  },
  {
    id: "tka-fis-cs-03",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 3: Fluida",
    tipe: "contoh-soal",
    babIndex: 3,
    babJudul: "3. Variasi Contoh Soal — Fluida",
    content: `# Variasi Contoh Soal — Fluida
**Kategori:** TKA Fisika | **Blok:** Blok 3: Fluida

---

### Soal 1: Benda Terapung pada Dua Lapisan Zat Cair
> [!EXAMPLE]
> Sebuah balok kayu dengan massa jenis $\\rho_b = 800\\text{ kg/m}^3$ dan volume total $V = 1000\\text{ cm}^3$ dimasukkan ke dalam bejana yang berisi minyak ($\\rho_m = 700\\text{ kg/m}^3$) dan air ($\\rho_a = 1000\\text{ kg/m}^3$). Jika minyak dan air tidak bercampur, dan balok berada pada perbatasan cairan, tentukan volume balok yang tercelup di dalam air!

#### Pembahasan:
1. **Kondisi Keseimbangan Apung:**
   Gaya apung total dari air dan minyak menahan berat balok:
   $$F_{a,\\text{total}} = W_b \\implies \\rho_a V_a g + \\rho_m V_m g = \\rho_b V_b g$$
   $$\\rho_a V_a + \\rho_m V_m = \\rho_b V_b$$
2. **Hubungan Volume:** Karena balok seluruhnya terendam dalam minyak dan air: $V_m = V_b - V_a$.
3. **Substitusi Angka:**
   $$1000 V_a + 700 (1000 - V_a) = 800 (1000)$$
   $$1000 V_a + 700000 - 700 V_a = 800000$$
   $$300 V_a = 100000 \\implies V_a = \\frac{1000}{3} \\approx 333{,}33\\text{ cm}^3$$
   Volume balok yang berada di dalam air adalah **$333{,}33\\text{ cm}^3$**.

---

### Soal 2: Sayap Pesawat Terbang (Gaya Angkat)
> [!EXAMPLE]
> Sebuah pesawat komersial memiliki total luas sayap $A = 80\\text{ m}^2$. Pada saat mengudara pada ketinggian jelajah, kelajuan aliran udara di atas sayap adalah $250\\text{ m/s}$ dan di bawah sayap adalah $200\\text{ m/s}$. Jika massa jenis udara di ketinggian tersebut adalah $1{,}2\\text{ kg/m}^3$, berapakah gaya angkat yang dihasilkan oleh sayap pesawat?

#### Pembahasan:
1. **Rumus Gaya Angkat Bernoulli:**
   $$F_{\\text{angkat}} = \\frac{1}{2} \\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) A$$
2. **Substitusi Nilai:**
   $$F_{\\text{angkat}} = \\frac{1}{2} (1{,}2) \\left(250^2 - 200^2\\right) (80)$$
   $$F_{\\text{angkat}} = 0{,}6 \\times (62500 - 40000) \\times 80 = 0{,}6 \\times 22500 \\times 80 = 13500 \\times 80 = 1{.}080{.}000\\text{ N} = 1{,}08\\text{ MN}$$
   Gaya angkat sayap pesawat adalah **$1{.}080{.}000\\text{ N}$** (atau $1{,}08\\text{ MN}$).
`
  },
  {
    id: "tka-fis-rg-03",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 3: Fluida",
    tipe: "rangkuman",
    babIndex: 3,
    babJudul: "3. Rangkuman Rumus & Konsep — Fluida",
    content: `# Rangkuman Rumus & Konsep — Fluida
**Kategori:** TKA Fisika | **Blok:** Blok 3: Fluida

| Konsep | Rumus Utama | Keterangan |
| :--- | :--- | :--- |
| **Tekanan Hidrostatis** | $P_h = \\rho g h$ | Kedalaman $h$ dari permukaan zat cair |
| **Tekanan Mutlak** | $P = P_0 + \\rho g h$ | $P_0 \\approx 1{,}013 \\times 10^5\\text{ Pa}$ |
| **Hukum Pascal** | $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$ | Sistem hidrolik tertutup |
| **Gaya Archimedes** | $F_a = \\rho_f V_{bf} g$ | $V_{bf}$ volume tercelup |
| **Benda Terapung** | $\\frac{V_{bf}}{V_b} = \\frac{\\rho_b}{\\rho_f}$ | $\\rho_b < \\rho_f$ |
| **Debit Aliran** | $Q = \\frac{V}{t} = A \\cdot v$ | Satuan $\\text{m}^3\\text{/s}$ |
| **Kontinuitas** | $A_1 v_1 = A_2 v_2$ | Fluida inkompresibel |
| **Persamaan Bernoulli**| $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{C}$| Konservasi energi fluida ideal |
| **Torricelli** | $v = \\sqrt{2gh}$ | Laju pancaran lubang bocor |
| **Gaya Angkat Sayap** | $F = \\frac{1}{2}\\rho(v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)A$ | $v_{\\text{atas}} > v_{\\text{bawah}}$ |
`
  },

  // ==========================================
  // BAB 4: GELOMBANG
  // ==========================================
  {
    id: "tka-fis-mat-04",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 4: Gelombang",
    tipe: "materi",
    babIndex: 4,
    babJudul: "4. Gelombang",
    content: `# Bab 4: Gelombang
**Kategori:** TKA Fisika | **Blok:** Blok 4: Gelombang

## Pendahuluan Gelombang
Gelombang adalah getaran atau usikan yang merambat melalui medium (gelombang mekanik) atau melalui ruang hampa (gelombang elektromagnetik) dengan memindahkan energi tanpa memindahkan materi perantaranya secara permanen.

---

### A. Gelombang Bunyi

#### 1. Karakteristik Rambatan Bunyi
* Bunyi merupakan gelombang mekanik **longitudinal** (arah getar sejajar dengan arah rambat) yang membutuhkan medium (padat, cair, gas). Bunyi tidak dapat merambat di ruang hampa udara.
* **Cepat Rambat Bunyi pada Dawai (Hukum Melde):**
  $$v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{F \\cdot L}{m}} = \\sqrt{\\frac{F}{\\rho \\cdot A}}$$
  * $F$ = tegangan dawai ($\\text{N}$)
  * $\\mu = \\frac{m}{L}$ = massa per satuan panjang dawai ($\\text{kg/m}$)

#### 2. Sumber Bunyi (Dawai & Pipa Organa)
* **Dawai dan Pipa Organa Terbuka (POB):**
  Kedua ujung membentuk simpul untuk dawai atau perut untuk POB.
  $$f_n = (n + 1) \\frac{v}{2L} \\quad (n = 0, 1, 2, \\dots)$$
  * $n = 0$: Nada dasar ($f_0 = \\frac{v}{2L}$)
  * $n = 1$: Nada atas 1 ($f_1 = \\frac{2v}{2L}$)
  * Perbandingan frekuensi harmonik: $f_0 : f_1 : f_2 : \\dots = 1 : 2 : 3 : 4 : \\dots$
* **Pipa Organa Tertutup (POT):**
  Satu ujung tertutup (simpul) dan satu ujung terbuka (perut).
  $$f_n = (2n + 1) \\frac{v}{4L} \\quad (n = 0, 1, 2, \\dots)$$
  * $n = 0$: Nada dasar ($f_0 = \\frac{v}{4L}$)
  * $n = 1$: Nada atas 1 ($f_1 = \\frac{3v}{4L}$)
  * Perbandingan frekuensi harmonik ganjil: $f_0 : f_1 : f_2 : \\dots = 1 : 3 : 5 : 7 : \\dots$

#### 3. Intensitas dan Taraf Intensitas Bunyi
* **Intensitas Bunyi ($I$):** Daya gelombang bunyi per satuan luas bidang bola:
  $$I = \\frac{P}{A} = \\frac{P}{4\\pi r^2} \\implies I \\propto \\frac{1}{r^2}$$
* **Taraf Intensitas Bunyi ($TI$):** Skala logaritmik kenyaringan bunyi relatif terhadap intensitas ambang pendengaran ($I_0 = 10^{-12}\\text{ W/m}^2$):
  $$TI = 10 \\log\\left(\\frac{I}{I_0}\\right) \\quad (\\text{dB})$$
* **Kelipatan Sumber Bunyi Identik ($n$ Buah):**
  $$TI_n = TI_1 + 10 \\log n$$
* **Perubahan Jarak Pendengar ($r_1 \\to r_2$):**
  $$TI_2 = TI_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$

---

### B. Gelombang Cahaya & Optik

#### 1. Spektrum Gelombang Elektromagnetik (GEM)
GEM merambat tanpa medium dengan kelajuan cahaya $c = 3 \\times 10^8\\text{ m/s}$ di ruang hampa.
Urutan dari frekuensi tertinggi (energi terbesar, panjang gelombang terpendek) ke terendah:
$$\\text{Sinar Gamma} \\to \\text{Sinar-X} \\to \\text{Ultraviolet} \\to \\text{Cahaya Tampak (Me-Ji-Ku-Hi-Bi-Ni-U)} \\to \\text{Inframerah} \\to \\text{Gelombang Mikro (Radar)} \\to \\text{Gelombang Radio}$$

#### 2. Pemantulan dan Pembiasan Cahaya
* **Hukum Pemantulan Snellius:** Sudut datang sama dengan sudut pantul ($\\theta_i = \\theta_r$).
* **Hukum Pembiasan Snellius:**
  $$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$
  * Indeks bias: $n = \\frac{c}{v}$.

#### 3. Cermin dan Lensa
* **Rumus Gauss Cermin & Lensa Tipis:**
  $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$$
  $$M = \\left|\\frac{s'}{s}\\right| = \\left|\\frac{h'}{h}\\right|$$
* **Aturan Tanda Konvensi:**
  * Cermin Cekung & Lensa Cembung (Konvergen): $f > 0$ (positif).
  * Cermin Cembung & Lensa Cekung (Divergen): $f < 0$ (negatif).
  * Bayangan nyata di depan cermin / belakang lensa: $s' > 0$.
  * Bayangan maya di belakang cermin / depan lensa: $s' < 0$.

#### 4. Prinsip Kerja Alat Optik
* **Lup (Kaca Pembesar):**
  * Mata berakomodasi maksimum: $M = \\frac{S_n}{f} + 1$ ($S_n \\approx 25\\text{ cm}$).
  * Mata tak berakomodasi (relaks): $M = \\frac{S_n}{f}$.
* **Mikroskop:** Terdiri dari lensa objektif ($f_{\\text{ob}}$) dan okuler ($f_{\\text{ok}}$) di mana $f_{\\text{ob}} < f_{\\text{ok}}$:
  $$M_{\\text{total}} = M_{\\text{ob}} \\times M_{\\text{ok}} = \\left(\\frac{s'_{\\text{ob}}}{s_{\\text{ob}}}\\right) \\left(\\frac{S_n}{f_{\\text{ok}}}\\right)$$
* **Teropong Bintang (Astronomis):**
  Untuk mata tidak berakomodasi:
  $$M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}, \\quad d = f_{\\text{ob}} + f_{\\text{ok}}$$
`
  },
  {
    id: "tka-fis-cs-04",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 4: Gelombang",
    tipe: "contoh-soal",
    babIndex: 4,
    babJudul: "4. Variasi Contoh Soal — Gelombang",
    content: `# Variasi Contoh Soal — Gelombang
**Kategori:** TKA Fisika | **Blok:** Blok 4: Gelombang

---

### Soal 1: Taraf Intensitas Banyak Sumber dan Perubahan Jarak
> [!EXAMPLE]
> Taraf intensitas bunyi sebuah mesin jahit pada jarak $2\\text{ meter}$ adalah $60\\text{ dB}$. Jika terdapat $100$ mesin jahit identik yang dinyalakan serentak, tentukan taraf intensitas yang didengar oleh pekerja yang berjarak $20\\text{ meter}$ dari kumpulan mesin jahit tersebut!

#### Pembahasan:
1. **Langkah 1: Efek Penambahan Jumlah Mesin ($n = 100$):**
   $$TI_{100} = TI_1 + 10 \\log 100 = 60 + 10(2) = 80\\text{ dB} \\quad (\\text{pada jarak } 2\\text{ m})$$
2. **Langkah 2: Efek Perubahan Jarak dari $r_1 = 2\\text{ m}$ ke $r_2 = 20\\text{ m}$:**
   $$TI' = TI_{100} - 20 \\log\\left(\\frac{r_2}{r_1}\\right) = 80 - 20 \\log\\left(\\frac{20}{2}\\right) = 80 - 20 \\log 10 = 80 - 20(1) = 60\\text{ dB}$$
   Taraf intensitas total yang didengar adalah **$60\\text{ dB}$**.

---

### Soal 2: Lensa Cembung dan Perbesaran
> [!EXAMPLE]
> Sebuah benda diletakkan di depan lensa cembung yang memiliki jarak fokus $10\\text{ cm}$. Diperoleh bayangan nyata yang berukuran 3 kali lebih besar dari bendanya. Tentukan jarak benda dan jarak bayangan ke lensa!

#### Pembahasan:
1. **Analisis Tanda:**
   Karena bayangan nyata, maka $s' > 0$ dan perbesaran $M = \\frac{s'}{s} = 3 \\implies s' = 3s$.
2. **Rumus Lensa:**
   $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{10} = \\frac{1}{s} + \\frac{1}{3s} = \\frac{4}{3s}$$
3. **Penyelesaian Jarak:**
   $$3s = 40 \\implies s = \\frac{40}{3} \\approx 13{,}33\\text{ cm}$$
   $$s' = 3\\left(\\frac{40}{3}\\right) = 40\\text{ cm}$$
   Jarak benda adalah **$13{,}33\\text{ cm}$** dan jarak bayangan adalah **$40\\text{ cm}$**.
`
  },
  {
    id: "tka-fis-rg-04",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 4: Gelombang",
    tipe: "rangkuman",
    babIndex: 4,
    babJudul: "4. Rangkuman Rumus & Konsep — Gelombang",
    content: `# Rangkuman Rumus & Konsep — Gelombang
**Kategori:** TKA Fisika | **Blok:** Blok 4: Gelombang

| Konsep | Rumus Utama | Keterangan |
| :--- | :--- | :--- |
| **Hukum Melde (Dawai)**| $v = \\sqrt{\\frac{F}{\\mu}}$ | $\\mu = \\frac{m}{L}$ massa persatuan panjang |
| **POB & Dawai** | $f_n = (n+1)\\frac{v}{2L}$ | Harmonik genap & ganjil ($1:2:3:4$) |
| **POT** | $f_n = (2n+1)\\frac{v}{4L}$ | Hanya harmonik ganjil ($1:3:5:7$) |
| **Intensitas Bunyi** | $I = \\frac{P}{4\\pi r^2}$ | Berbanding terbalik dengan kuadrat jarak |
| **Taraf Intensitas** | $TI = 10\\log\\left(\\frac{I}{I_0}\\right)$ | $I_0 = 10^{-12}\\text{ W/m}^2$ |
| **$TI$ Banyak Sumber**| $TI_n = TI_1 + 10\\log n$ | $n$ buah sumber identik |
| **$TI$ Jarak Berubah** | $TI_2 = TI_1 - 20\\log\\left(\\frac{r_2}{r_1}\\right)$ | Menjauh $\\implies$ berkurang |
| **Hukum Snellius** | $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$ | Pembiasan cahaya |
| **Rumus Gauss Lensa** | $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$ | $M = |\\frac{s'}{s}|$ |
| **Teropong Bintang** | $M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}, \\quad d = f_{\\text{ob}} + f_{\\text{ok}}$ | Mata tidak berakomodasi |
`
  },

  // ==========================================
  // BAB 5: KALOR DAN TERMODINAMIKA
  // ==========================================
  {
    id: "tka-fis-mat-05",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 5: Kalor dan Termodinamika",
    tipe: "materi",
    babIndex: 5,
    babJudul: "5. Kalor dan Termodinamika",
    content: `# Bab 5: Kalor dan Termodinamika
**Kategori:** TKA Fisika | **Blok:** Blok 5: Kalor dan Termodinamika

## Pendahuluan
Termodinamika adalah cabang fisika yang mempelajari energi kalor, temperatur, serta transformasinya menjadi kerja mekanik pada skala makroskopik.

---

### A. Kalor dan Perpindahannya

#### 1. Perubahan Suhu dan Wujud Zat
* **Kalor untuk Mengubah Suhu:**
  $$Q = m \\cdot c \\cdot \\Delta T = C \\cdot \\Delta T$$
  * $c$ = kalor jenis zat ($\\text{J/(kg}\\cdot\\text{K)}$)
  * $C = mc$ = kapasitas kalor ($\\text{J/K}$)
* **Kalor Laten (Perubahan Wujud Zat pada Suhu Konstan):**
  $$Q = m \\cdot L$$
  * $L$ = kalor lebur / beku atau kalor penguapan / pengembunan ($\\text{J/kg}$).

#### 2. Pemuaian Zat
* **Pemuaian Panjang:** $\\Delta L = L_0 \\alpha \\Delta T \\implies L_t = L_0(1 + \\alpha \\Delta T)$
* **Pemuaian Luas:** $\\Delta A = A_0 \\beta \\Delta T \\implies A_t = A_0(1 + \\beta \\Delta T)$ dengan $\\beta \\approx 2\\alpha$
* **Pemuaian Volume:** $\\Delta V = V_0 \\gamma \\Delta T \\implies V_t = V_0(1 + \\gamma \\Delta T)$ dengan $\\gamma \\approx 3\\alpha$

#### 3. Perpindahan Kalor
1. **Konduksi:** Hantaran kalor melalui zat padat tanpa disertai perpindahan partikel perantaranya:
   $$H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$$
2. **Konveksi:** Aliran kalor yang disertai perpindahan partikel fluida (cair/gas):
   $$H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$$
3. **Radiasi (Hukum Stefan-Boltzmann):** Pancaran kalor dalam bentuk gelombang elektromagnetik:
   $$H = \\frac{Q}{t} = e \\cdot \\sigma \\cdot A \\cdot T^4$$
   * $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/(m}^2\\cdot\\text{K}^4)$
   * $e$ = emisivitas permukaan ($0 \\le e \\le 1$; benda hitam sempurna $e = 1$)
   * $T$ = suhu mutlak dalam **Kelvin ($\\text{K}$)**

#### 4. Asas Black (Kekekalan Kalor)
Jika dua zat dengan suhu berbeda dicampurkan dalam sistem terisolasi:
$$Q_{\\text{lepas}} = Q_{\\text{terima}}$$

---

### B. Pemanasan Global (Global Warming)
* **Efek Rumah Kaca (*Greenhouse Effect*):** Sinar matahari gelombang pendek menembus atmosfer dan memanaskan permukaan bumi. Permukaan bumi meradiasikan kembali energi ini sebagai gelombang inframerah panjang. Gas-gas rumah kaca ($CO_2, CH_4, N_2O, H_2O, CFC$) menyerap radiasi inframerah ini dan memancarkannya kembali ke bumi, menaikkan suhu rata-rata global.
* **Faktor Penyebab:** Pembakaran bahan bakar fosil, deforestasi, emisi peternakan (gas metana), dan refrigeran industri.
* **Solusi:** Transisi ke energi baru terbarukan (EBT), reboisasi hutan, efisiensi energi, dan teknologi penangkapan karbon.

---

### C. Gas Ideal dan Termodinamika

#### 1. Persamaan Keadaan Gas Ideal
$$P V = n R T = N k T$$
* $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$
* $k = 1{,}38 \\times 10^{-23}\\text{ J/K}$ (konstanta Boltzmann)
* **Hukum Boyle ($T = \\text{konstan}$):** $P_1 V_1 = P_2 V_2$
* **Hukum Gay-Lussac ($V = \\text{konstan}$):** $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$
* **Hukum Charles ($P = \\text{konstan}$):** $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$

#### 2. Empat Proses Termodinamika
1. **Isobarik (Tekanan Tetap, $P = \\text{konstan}$):**
   $$W = P (V_2 - V_1) = P \\Delta V$$
2. **Isotermal (Suhu Tetap, $T = \\text{konstan}$, $\\Delta U = 0$):**
   $$W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) \\implies Q = W$$
3. **Isokhorik (Volume Tetap, $V = \\text{konstan}$, $\\Delta V = 0$):**
   $$W = 0 \\implies Q = \\Delta U = n C_v \\Delta T$$
4. **Adiabatik (Tidak Ada Kalor yang Masuk/Keluar, $Q = 0$):**
   $$P_1 V_1^\\gamma = P_2 V_2^\\gamma, \\quad W = -\\Delta U$$

#### 3. Hukum I dan II Termodinamika
* **Hukum I Termodinamika:** Kekekalan energi termal:
  $$\\Delta U = Q - W$$
  * Energi dalam gas monoatomik: $U = \\frac{3}{2} n R T$, sehingga $\\Delta U = \\frac{3}{2} n R \\Delta T$.
* **Hukum II Termodinamika & Siklus Carnot:**
  Kalor tidak dapat mengalir spontan dari benda dingin ke panas tanpa kerja luar. Tidak ada mesin kalor yang efisiensinya $100\\%$.
  * **Efisiensi Mesin Carnot:**
    $$\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H} = \\frac{Q_H - Q_C}{Q_H}$$
    > $T_C$ dan $T_H$ wajib dinyatakan dalam satuan **Kelvin**.
`
  },
  {
    id: "tka-fis-cs-05",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 5: Kalor dan Termodinamika",
    tipe: "contoh-soal",
    babIndex: 5,
    babJudul: "5. Variasi Contoh Soal — Kalor dan Termodinamika",
    content: `# Variasi Contoh Soal — Kalor dan Termodinamika
**Kategori:** TKA Fisika | **Blok:** Blok 5: Kalor dan Termodinamika

---

### Soal 1: Asas Black (Pencampuran Es dan Air)
> [!EXAMPLE]
> Sebanyak $100\\text{ gram}$ es bersuhu $-10^\\circ\\text{C}$ dicampurkan dengan $200\\text{ gram}$ air bersuhu $50^\\circ\\text{C}$ dalam wadah terisolasi kalorimeter. Diketahui kalor jenis es $c_{\\text{es}} = 0{,}5\\text{ kal/(g}^\\circ\\text{C)}$, kalor lebur es $L = 80\\text{ kal/g}$, dan kalor jenis air $c_{\\text{air}} = 1\\text{ kal/(g}^\\circ\\text{C)}$. Tentukan suhu akhir kesetimbangan termal campuran!

#### Pembahasan:
1. **Kalor Maksimum yang Dilepas Air ($50^\\circ\\text{C} \\to 0^\\circ\\text{C}$):**
   $$Q_{\\text{lepas},\\max} = m_{\\text{air}} c_{\\text{air}} (50 - 0) = 200 \\times 1 \\times 50 = 10000\\text{ kal}$$
2. **Kalor untuk Menaikkan Suhu Es ke $0^\\circ\\text{C}$:**
   $$Q_1 = m_{\\text{es}} c_{\\text{es}} (0 - (-10)) = 100 \\times 0{,}5 \\times 10 = 500\\text{ kal}$$
3. **Kalor untuk Meleburkan Seluruh Es:**
   $$Q_2 = m_{\\text{es}} L = 100 \\times 80 = 8000\\text{ kal}$$
   Kalor total yang dibutuhkan es sampai mencair seluruhnya pada $0^\\circ\\text{C}$:
   $$Q_{\\text{butuh}} = Q_1 + Q_2 = 500 + 8000 = 8500\\text{ kal}$$
   Karena $Q_{\\text{lepas},\\max} = 10000\\text{ kal} > 8500\\text{ kal}$, seluruh es mencair dan suhu akhir $T_a > 0^\\circ\\text{C}$.
4. **Persamaan Asas Black Keseluruhan:**
   $$Q_{\\text{lepas}} = Q_{\\text{terima}}$$
   $$m_{\\text{air}} c_{\\text{air}} (50 - T_a) = 8500 + m_{\\text{es}} c_{\\text{air}} (T_a - 0)$$
   $$200 (1) (50 - T_a) = 8500 + 100 (1) T_a$$
   $$10000 - 200 T_a = 8500 + 100 T_a$$
   $$300 T_a = 1500 \\implies T_a = 5^\\circ\\text{C}$$
   Suhu akhir campuran adalah **$5^\\circ\\text{C}$**.

---

### Soal 2: Efisiensi dan Usaha Mesin Carnot
> [!EXAMPLE]
> Sebuah mesin Carnot beroperasi antara reservoir panas bersuhu $500\\text{ K}$ dan reservoir dingin bersuhu $350\\text{ K}$. Jika mesin tersebut menyerap kalor sebesar $2000\\text{ Joule}$ dari reservoir panas setiap siklusnya, hitunglah:
> 1. Efisiensi termal mesin Carnot
> 2. Usaha mekanik yang dihasilkan mesin tiap siklus

#### Pembahasan:
1. **Efisiensi Mesin Carnot:**
   $$\\eta = 1 - \\frac{T_C}{T_H} = 1 - \\frac{350}{500} = 1 - 0{,}70 = 0{,}30 = 30\\%$$
2. **Usaha Mekanik Tiap Siklus ($W$):**
   $$W = \\eta \\cdot Q_H = 0{,}30 \\times 2000\\text{ J} = 600\\text{ Joule}$$
`
  },
  {
    id: "tka-fis-rg-05",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 5: Kalor dan Termodinamika",
    tipe: "rangkuman",
    babIndex: 5,
    babJudul: "5. Rangkuman Rumus & Konsep — Kalor dan Termodinamika",
    content: `# Rangkuman Rumus & Konsep — Kalor dan Termodinamika
**Kategori:** TKA Fisika | **Blok:** Blok 5: Kalor dan Termodinamika

| Konsep | Rumus Utama | Keterangan & Catatan |
| :--- | :--- | :--- |
| **Kalor Sensibel** | $Q = mc\\Delta T$ | Perubahan suhu tanpa perubahan fase |
| **Kalor Laten** | $Q = mL$ | Perubahan fase pada suhu konstan |
| **Pemuaian Volume** | $\\Delta V = V_0 \\gamma \\Delta T$ | $\\gamma \\approx 3\\alpha$ |
| **Hantaran Konduksi** | $H = \\frac{kA\\Delta T}{L}$ | Melalui zat padat |
| **Radiasi Termal** | $H = e\\sigma A T^4$ | $T$ wajib Kelvin |
| **Gas Ideal** | $PV = nRT = NkT$ | $R = 8{,}314\\text{ J/(mol K)}$ |
| **Usaha Isobarik** | $W = P\\Delta V$ | Tekanan tetap |
| **Hukum I Termo** | $\\Delta U = Q - W$ | $\\Delta U = \\frac{3}{2}nR\\Delta T$ (monoatomik) |
| **Proses Isotermal** | $\\Delta U = 0 \\implies Q = W$ | Suhu konstan |
| **Proses Adiabatik** | $Q = 0 \\implies W = -\\Delta U$ | Ekspansi/kompresi cepat |
| **Efisiensi Carnot** | $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$ | Efisiensi maksimum teoritis |
`
  },

  // ==========================================
  // BAB 6: KELISTRIKAN
  // ==========================================
  {
    id: "tka-fis-mat-06",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 6: Kelistrikan",
    tipe: "materi",
    babIndex: 6,
    babJudul: "6. Kelistrikan",
    content: `# Bab 6: Kelistrikan
**Kategori:** TKA Fisika | **Blok:** Blok 6: Kelistrikan

## Pendahuluan
Kelistrikan mengkaji fenomena fisis muatan listrik diam (elektrostatika) serta muatan listrik yang mengalir dinamis dalam lintasan tertutup (rangkaian arus searah DC).

---

### A. Listrik Statis (Elektrostatika)

#### 1. Muatan Listrik & Hukum Coulomb
* Muatan sejenis tolak-menolak, muatan berlainan jenis tarik-menarik.
* **Hukum Coulomb:** Gaya elektrostatik antara dua muatan titik berbanding lurus dengan hasil kali kedua muatan dan berbanding terbalik dengan kuadrat jarak pisahnya:
  $$F = k \\frac{|q_1 q_2|}{r^2}$$
  * $k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2\\text{/C}^2$.

#### 2. Kuat Medan Listrik ($\\vec{E}$)
Gaya elektrostatik per satuan muatan uji positif yang diletakkan pada titik tersebut (vektor):
$$\\vec{E} = \\frac{\\vec{F}}{q_0} = k \\frac{q}{r^2} \\hat{r}$$
* Garis gaya medan listrik keluar dari muatan positif dan masuk ke muatan negatif.

#### 3. Potensial Listrik ($V$) dan Energi Potensial ($EP$)
* **Potensial Listrik (Besaran Skalar):**
  $$V = k \\frac{q}{r}$$
* **Energi Potensial Elektrostatik:**
  $$EP = k \\frac{q_1 q_2}{r} = q V$$
* **Hubungan Usaha dan Potensial:**
  $$W_{A \\to B} = q (V_B - V_A) = q \\Delta V$$

---

### B. Rangkaian Arus Searah (DC)

#### 1. Hukum Ohm dan Hambatan Kawat
* **Hukum Ohm:** Kuat arus yang mengalir melalui konduktor berbanding lurus dengan beda potensial dan berbanding terbalik dengan hambatannya:
  $$I = \\frac{V}{R} \\iff V = I \\cdot R$$
* **Hambatan Kawat Penghantar:**
  $$R = \\rho \\frac{L}{A}$$
  * $\\rho$ = hambatan jenis bahan ($\\Omega\\cdot\\text{m}$)
  * $L$ = panjang kawat ($\\text{m}$)
  * $A$ = luas penampang kawat ($\\text{m}^2$)

#### 2. Susunan Hambatan Seri dan Paralel
* **Rangkaian Seri:** Kuat arus sama di setiap resistor:
  $$R_{\\text{seri}} = R_1 + R_2 + R_3 + \\dots$$
* **Rangkaian Paralel:** Beda potensial (tegangan) sama di setiap cabang resistor:
  $$\\frac{1}{R_{\\text{paralel}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\dots$$

#### 3. Hukum-Hukum Kirchhoff
* **Hukum I Kirchhoff (Percabangan Arus):**
  Jumlah kuat arus listrik yang masuk ke suatu titik percabangan sama dengan jumlah kuat arus yang keluar dari titik tersebut:
  $$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$
* **Hukum II Kirchhoff (Loop Tegangan):**
  Jumlah aljabar gaya gerak listrik (GGL, $\\mathcal{E}$) dan penurunan tegangan ($I R$) dalam suatu rangkaian tertutup (loop) adalah sama dengan nol:
  $$\\Sigma \\mathcal{E} + \\Sigma (I \\cdot R) = 0$$

#### 4. Energi dan Daya Listrik
* **Energi Listrik ($W$):**
  $$W = V \\cdot I \\cdot t = I^2 R t = \\frac{V^2}{R} t$$
* **Daya Listrik ($P$):**
  $$P = \\frac{W}{t} = V \\cdot I = I^2 R = \\frac{V^2}{R}$$
`
  },
  {
    id: "tka-fis-cs-06",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 6: Kelistrikan",
    tipe: "contoh-soal",
    babIndex: 6,
    babJudul: "6. Variasi Contoh Soal — Kelistrikan",
    content: `# Variasi Contoh Soal — Kelistrikan
**Kategori:** TKA Fisika | **Blok:** Blok 6: Kelistrikan

---

### Soal 1: Analisis Dua Loop Kirchhoff
> [!EXAMPLE]
> Perhatikan rangkaian satu loop berikut. Baterai $\\mathcal{E}_1 = 12\\text{ V}$ memiliki hambatan dalam $r_1 = 1\\ \\Omega$, baterai $\\mathcal{E}_2 = 6\\text{ V}$ memiliki hambatan dalam $r_2 = 1\\ \\Omega$, serta terhubung dengan resistor luar $R_1 = 4\\ \\Omega$ dan $R_2 = 6\\ \\Omega$ secara seri berlawanan kutub. Tentukan kuat arus yang mengalir pada rangkaian!

#### Pembahasan:
1. **Penerapan Hukum II Kirchhoff:**
   $$\\Sigma \\mathcal{E} + \\Sigma I R = 0$$
   Jika kita melangkah searah jarum jam dari kutub positif $\\mathcal{E}_1$:
   $$-\\mathcal{E}_1 + \\mathcal{E}_2 + I (R_1 + R_2 + r_1 + r_2) = 0$$
   $$-12 + 6 + I (4 + 6 + 1 + 1) = 0$$
   $$-6 + 12 I = 0 \\implies 12 I = 6 \\implies I = 0{,}5\\text{ A}$$
   Kuat arus yang mengalir adalah **$0{,}5\\text{ Ampere}$**.

---

### Soal 2: Medan Listrik Nol di Antara Dua Muatan
> [!EXAMPLE]
> Dua buah muatan titik $q_A = +4\\ \\mu\\text{C}$ dan $q_B = +9\\ \\mu\\text{C}$ terpisah sejauh $20\\text{ cm}$. Tentukan letak titik di antara kedua muatan tersebut yang memiliki kuat medan listrik sama dengan nol!

#### Pembahasan:
1. **Konsep Keseimbangan Medan:**
   Medan dari $q_A$ mengarah menjauh ke kanan, medan dari $q_B$ mengarah menjauh ke kiri:
   $$E_A = E_B \\implies k \\frac{q_A}{x^2} = k \\frac{q_B}{(d - x)^2}$$
2. **Penyederhanaan dan Penarikan Akar:**
   $$\\frac{q_A}{x^2} = \\frac{q_B}{(20 - x)^2} \\implies \\frac{\\sqrt{q_A}}{x} = \\frac{\\sqrt{q_B}}{20 - x}$$
   $$\\frac{\\sqrt{4}}{x} = \\frac{\\sqrt{9}}{20 - x} \\implies \\frac{2}{x} = \\frac{3}{20 - x}$$
   $$2(20 - x) = 3x \\implies 40 - 2x = 3x \\implies 5x = 40 \\implies x = 8\\text{ cm}$$
   Kuat medan listrik bernilai nol pada jarak **$8\\text{ cm}$ dari muatan $q_A$** (atau $12\\text{ cm}$ dari muatan $q_B$).
`
  },
  {
    id: "tka-fis-rg-06",
    kategoriUtama: "tka",
    subtes: "Fisika",
    blok: "Blok 6: Kelistrikan",
    tipe: "rangkuman",
    babIndex: 6,
    babJudul: "6. Rangkuman Rumus & Konsep — Kelistrikan",
    content: `# Rangkuman Rumus & Konsep — Kelistrikan
**Kategori:** TKA Fisika | **Blok:** Blok 6: Kelistrikan

| Konsep | Rumus Utama | Keterangan |
| :--- | :--- | :--- |
| **Gaya Coulomb** | $F = k \\frac{q_1 q_2}{r^2}$ | $k \\approx 9 \\times 10^9\\text{ N m}^2/\\text{C}^2$ |
| **Medan Listrik** | $E = k \\frac{q}{r^2}$ | Vektor gaya per satuan muatan |
| **Potensial Listrik** | $V = k \\frac{q}{r}$ | Besaran skalar |
| **Usaha Elektrostatik**| $W = q \\Delta V$ | Energi memindahkan muatan |
| **Hukum Ohm** | $V = I \\cdot R$ | Beda potensial |
| **Hambatan Kawat** | $R = \\rho \\frac{L}{A}$ | $\\rho$ hambatan jenis material |
| **Rangkaian Seri** | $R_s = R_1 + R_2 + \\dots$ | Arus sama di setiap hambatan |
| **Rangkaian Paralel**| $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$ | Tegangan sama di setiap cabang |
| **Hukum I Kirchhoff**| $\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$ | Konservasi muatan |
| **Hukum II Kirchhoff**| $\\Sigma \\mathcal{E} + \\Sigma IR = 0$ | Konservasi energi pada loop |
| **Daya Listrik** | $P = VI = I^2 R = \\frac{V^2}{R}$ | Satuan Watt (W) |
`
  }
];
