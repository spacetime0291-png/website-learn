// tka_fundamental_data.js - 5 Bab Fundamental Matematika Lanjut (15 Modul: Materi, Contoh Soal, Rangkuman)
module.exports = [
  // ==========================================
  // BAB 1: TRIGONOMETRI ANALITIK DASAR
  // ==========================================
  {
    id: "tka-fnd-mat-01",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "materi",
    babIndex: 1,
    babJudul: "1. Trigonometri Analitik Dasar",
    content: `# Bab 1: Trigonometri Analitik Dasar
**Kategori:** Bab Fundamental Matematika Lanjut (Materi Prasyarat) | **Blok:** Materi Prasyarat

## Pendahuluan
Trigonometri analitik dasar meletakkan fondasi geometris dan aljabar perbandingan sisi segitiga siku-siku, sudut berelasi di empat kuadran, identitas Pythagoras, serta formula sudut rangkap dan jumlah/selisih sudut.

---

### A. Perbandingan Trigonometri pada Segitiga Siku-Siku
Pada segitiga siku-siku dengan sudut lancip $\\theta$:
$$\\sin\\theta = \\frac{\\text{sisi depan}}{\\text{sisi miring}} = \\frac{\\text{de}}{\\text{mi}}$$
$$\\cos\\theta = \\frac{\\text{sisi samping}}{\\text{sisi miring}} = \\frac{\\text{sa}}{\\text{mi}}$$
$$\\tan\\theta = \\frac{\\text{sisi depan}}{\\text{sisi samping}} = \\frac{\\text{de}}{\\text{sa}} = \\frac{\\sin\\theta}{\\cos\\theta}$$
* **Perbandingan Kebalikan:**
  $$\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}$$

---

### B. Nilai Sudut Istimewa di Kuadran I

| Sudut ($\\theta$) | $0^\\circ$ ($0$) | $30^\\circ$ ($\\frac{\\pi}{6}$) | $45^\\circ$ ($\\frac{\\pi}{4}$) | $60^\\circ$ ($\\frac{\\pi}{3}$) | $90^\\circ$ ($\\frac{\\pi}{2}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $\\sin\\theta$ | $0$ | $\\frac{1}{2}$ | $\\frac{1}{2}\\sqrt{2}$ | $\\frac{1}{2}\\sqrt{3}$ | $1$ |
| $\\cos\\theta$ | $1$ | $\\frac{1}{2}\\sqrt{3}$ | $\\frac{1}{2}\\sqrt{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\tan\\theta$ | $0$ | $\\frac{1}{3}\\sqrt{3}$ | $1$ | $\\sqrt{3}$ | Tak Terdefinisi |

---

### C. Relasi Sudut di Berbagai Kuadran
* **Kuadran I ($0^\\circ < \\theta < 90^\\circ$):** Semua fungsi bertanda **positif (+)**.
* **Kuadran II ($90^\\circ < \\theta < 180^\\circ$):** Hanya **$\\sin$** dan $\\csc$ yang positif (+).
  $$\\sin(180^\\circ - \\theta) = \\sin\\theta, \\quad \\cos(180^\\circ - \\theta) = -\\cos\\theta, \\quad \\tan(180^\\circ - \\theta) = -\\tan\\theta$$
* **Kuadran III ($180^\\circ < \\theta < 270^\\circ$):** Hanya **$\\tan$** dan $\\cot$ yang positif (+).
  $$\\sin(180^\\circ + \\theta) = -\\sin\\theta, \\quad \\cos(180^\\circ + \\theta) = -\\cos\\theta, \\quad \\tan(180^\\circ + \\theta) = \\tan\\theta$$
* **Kuadran IV ($270^\\circ < \\theta < 360^\\circ$):** Hanya **$\\cos$** dan $\\sec$ yang positif (+).
  $$\\sin(360^\\circ - \\theta) = -\\sin\\theta, \\quad \\cos(360^\\circ - \\theta) = \\cos\\theta, \\quad \\tan(360^\\circ - \\theta) = -\\tan\\theta$$
  > Relasi sudut negatif: $\\sin(-\\theta) = -\\sin\\theta$ (ganjil), $\\cos(-\\theta) = \\cos\\theta$ (genap), $\\tan(-\\theta) = -\\tan\\theta$.

---

### D. Identitas Pythagoras Fundamental
$$\\sin^2 x + \\cos^2 x = 1$$
$$1 + \\tan^2 x = \\sec^2 x$$
$$1 + \\cot^2 x = \\csc^2 x$$

---

### E. Rumus Sudut Rangkap dan Jumlah/Selisih Sudut

#### 1. Rumus Sudut Rangkap
$$\\sin(2x) = 2 \\sin x \\cos x$$
$$\\cos(2x) = \\cos^2 x - \\sin^2 x = 2 \\cos^2 x - 1 = 1 - 2 \\sin^2 x$$
$$\\tan(2x) = \\frac{2 \\tan x}{1 - \\tan^2 x}$$

#### 2. Rumus Jumlah dan Selisih Dua Sudut
$$\\sin(\\alpha \\pm \\beta) = \\sin\\alpha \\cos\\beta \\pm \\cos\\alpha \\sin\\beta$$
$$\\cos(\\alpha \\pm \\beta) = \\cos\\alpha \\cos\\beta \\mp \\sin\\alpha \\sin\\beta$$
$$\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha \\tan\\beta}$$
`
  },
  {
    id: "tka-fnd-cs-01",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "contoh-soal",
    babIndex: 1,
    babJudul: "1. Variasi Contoh Soal — Trigonometri Analitik Dasar",
    content: `# Variasi Contoh Soal — Trigonometri Analitik Dasar
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

---

### Soal 1: Sudut Rangkap dan Kuadran
> [!EXAMPLE]
> Diketahui $\\sin x = \\frac{3}{5}$ dengan $x$ merupakan sudut tumpul ($90^\\circ < x < 180^\\circ$). Hitunglah nilai dari:
> 1. $\\cos x$ dan $\\tan x$
> 2. $\\sin(2x)$
> 3. $\\cos(2x)$

#### Pembahasan:
1. **Nilai $\\cos x$ dan $\\tan x$ di Kuadran II:**
   Karena $x$ di kuadran II, kosinus dan tangen bernilai negatif:
   $$\\cos x = -\\sqrt{1 - \\sin^2 x} = -\\sqrt{1 - \\left(\\frac{3}{5}\\right)^2} = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$$
   $$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$$
2. **Hitung $\\sin(2x)$:**
   $$\\sin(2x) = 2 \\sin x \\cos x = 2 \\left(\\frac{3}{5}\\right) \\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$$
3. **Hitung $\\cos(2x)$:**
   $$\\cos(2x) = 1 - 2 \\sin^2 x = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$$
`
  },
  {
    id: "tka-fnd-rg-01",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "rangkuman",
    babIndex: 1,
    babJudul: "1. Rangkuman Rumus — Trigonometri Analitik Dasar",
    content: `# Rangkuman Rumus — Trigonometri Analitik Dasar
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

| Identitas / Formula | Rumus Matematika | Catatan |
| :--- | :--- | :--- |
| **Identitas Pythagoras** | $\\sin^2 x + \\cos^2 x = 1$ | Berlaku untuk semua $x \\in \\mathbb{R}$ |
| **Turunan Pythagoras** | $1 + \\tan^2 x = \\sec^2 x$ | Bagi dengan $\\cos^2 x$ |
| **Sudut Rangkap Sinus** | $\\sin(2x) = 2\\sin x \\cos x$ | Sering digunakan di limit & kalkulus |
| **Sudut Rangkap Kosinus**| $\\cos(2x) = 1 - 2\\sin^2 x$ | Mengubah $1 - \\cos(2x) = 2\\sin^2 x$ |
| **Jumlah Sudut Sinus** | $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ | Tanda sama |
| **Jumlah Sudut Kosinus**| $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$ | Tanda berlawanan |
`
  },

  // ==========================================
  // BAB 2: ALJABAR ELEMENTER
  // ==========================================
  {
    id: "tka-fnd-mat-02",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "materi",
    babIndex: 2,
    babJudul: "2. Aljabar Elementer",
    content: `# Bab 2: Aljabar Elementer
**Kategori:** Bab Fundamental Matematika Lanjut (Materi Prasyarat) | **Blok:** Materi Prasyarat

## Pendahuluan
Aljabar elementer membekali kemampuan memanipulasi bentuk aljabar, faktorisasi kuadratik, penyederhanaan pecahan rasional, serta penyelesaian sistem persamaan linear dua dan tiga variabel (SPLDV & SPLTV).

---

### A. Bentuk Aljabar dan Pemfaktoran

#### 1. Suku Sejenis & Operasi Aljabar
Dua suku disebut sejenis apabila memiliki variabel yang sama dengan pangkat yang sama (contoh: $3x^2 y$ dan $-5x^2 y$). Hanya suku sejenis yang dapat dijumlahkan atau dikurangkan.

#### 2. Rumus Pemfaktoran Aljabar Klasik
* **Selisih Dua Kuadrat:**
  $$a^2 - b^2 = (a - b)(a + b)$$
* **Bentuk Kuadrat Sempurna:**
  $$(a + b)^2 = a^2 + 2ab + b^2$$
  $$(a - b)^2 = a^2 - 2ab + b^2$$
* **Selisih dan Jumlah Dua Kubik:**
  $$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
  $$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
* **Pemfaktoran Bentuk Kuadrat $a x^2 + b x + c$:**
  Cari dua bilangan $p$ dan $q$ sedemikian sehingga $p + q = b$ dan $p \\cdot q = a \\cdot c$:
  $$a x^2 + b x + c = \\frac{(a x + p)(a x + q)}{a}$$

---

### B. Penyederhanaan Pecahan Bentuk Aljabar
1. **Faktorkan pembilang dan penyebut:**
   $$\\frac{x^2 - 9}{x^2 + 5x + 6} = \\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} = \\frac{x - 3}{x + 2} \\quad (x \\ne -3, x \\ne -2)$$
2. **Penjumlahan & Pengurangan Pecahan:** Menyamakan penyebut melalui Kelipatan Persekutuan Terkecil (KPK).

---

### C. Sistem Persamaan Linear Dua Variabel (SPLDV)
Bentuk umum:
$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$
* **Metode Eliminasi:** Menyamakan koefisien salah satu variabel dengan pengali konstanta lalu menjumlahkan/mengurangkan kedua persamaan.
* **Metode Substitusi:** Menyatakan satu variabel dalam variabel lain ($y = \\frac{c_1 - a_1 x}{b_1}$) lalu menggantikannya ke persamaan kedua.
* **Metode Campuran:** Mengeliminasi satu variabel untuk menemukan nilai variabel pertama, lalu mensubstitusikannya kembali.

---

### D. Sistem Persamaan Linear Tiga Variabel (SPLTV)
Bentuk umum:
$$\\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\\\ a_2 x + b_2 y + c_2 z = d_2 \\\\ a_3 x + b_3 y + c_3 z = d_3 \\end{cases}$$
* **Strategi Bertahap:**
  1. Pilih sepasang persamaan (1 & 2) lalu eliminasi salah satu variabel (misal variabel $z$) untuk memperoleh Persamaan (4) dalam $x$ dan $y$.
  2. Pilih pasangan lain (1 & 3 atau 2 & 3) dan eliminasi variabel yang sama ($z$) untuk memperoleh Persamaan (5) dalam $x$ dan $y$.
  3. Selesaikan Persamaan (4) dan (5) sebagai SPLDV standar untuk memperoleh nilai $x$ dan $y$.
  4. Substitusikan nilai $x$ dan $y$ ke salah satu persamaan awal untuk memperoleh nilai $z$.
`
  },
  {
    id: "tka-fnd-cs-02",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "contoh-soal",
    babIndex: 2,
    babJudul: "2. Variasi Contoh Soal — Aljabar Elementer",
    content: `# Variasi Contoh Soal — Aljabar Elementer
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

---

### Soal 1: Penyelesaian SPLTV Bertahap
> [!EXAMPLE]
> Tentukan himpunan penyelesaian $(x, y, z)$ dari sistem persamaan linear berikut:
> $$\\begin{cases} x + y + z = 6 & \\text{--- (1)} \\\\ 2x - y + z = 3 & \\text{--- (2)} \\\\ x + 2y - z = 2 & \\text{--- (3)} \\end{cases}$$

#### Pembahasan:
1. **Eliminasi $y$ dari Persamaan (1) dan (2):**
   $$(x + y + z) + (2x - y + z) = 6 + 3 \\implies 3x + 2z = 9 \\quad \\text{--- (4)}$$
2. **Eliminasi $y$ dari Persamaan (1) dan (3):**
   Kalikan persamaan (1) dengan 2:
   $$2x + 2y + 2z = 12$$
   Kurangkan dengan persamaan (3):
   $$(2x + 2y + 2z) - (x + 2y - z) = 12 - 2 \\implies x + 3z = 10 \\implies x = 10 - 3z \\quad \\text{--- (5)}$$
3. **Substitusi (5) ke (4):**
   $$3(10 - 3z) + 2z = 9 \\implies 30 - 9z + 2z = 9 \\implies -7z = -21 \\implies z = 3$$
4. **Cari Nilai $x$ dan $y$:**
   $$x = 10 - 3(3) = 10 - 9 = 1$$
   Substitusikan $x = 1$ dan $z = 3$ ke Persamaan (1):
   $$1 + y + 3 = 6 \\implies y + 4 = 6 \\implies y = 2$$
   Himpunan penyelesaiannya adalah **$(x, y, z) = (1, 2, 3)$**.
`
  },
  {
    id: "tka-fnd-rg-02",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "rangkuman",
    babIndex: 2,
    babJudul: "2. Rangkuman Rumus — Aljabar Elementer",
    content: `# Rangkuman Rumus — Aljabar Elementer
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

| Identitas Aljabar | Rumus / Formula |
| :--- | :--- |
| **Selisih Kuadrat** | $a^2 - b^2 = (a - b)(a + b)$ |
| **Kuadrat Sempurna (+)** | $(a + b)^2 = a^2 + 2ab + b^2$ |
| **Kuadrat Sempurna (-)** | $(a - b)^2 = a^2 - 2ab + b^2$ |
| **Selisih Kubik** | $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ |
| **Jumlah Kubik** | $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ |
| **Penyelesaian SPLDV** | Eliminasi, substitusi, matriks determinan |
| **Penyelesaian SPLTV** | Reduksi variabel bertahap $3 \\to 2 \\to 1$ |
`
  },

  // ==========================================
  // BAB 3: GEOMETRI ANALITIK BIDANG
  // ==========================================
  {
    id: "tka-fnd-mat-03",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "materi",
    babIndex: 3,
    babJudul: "3. Geometri Analitik Bidang",
    content: `# Bab 3: Geometri Analitik Bidang
**Kategori:** Bab Fundamental Matematika Lanjut (Materi Prasyarat) | **Blok:** Materi Prasyarat

## Pendahuluan
Geometri analitik bidang menelaah sifat-sifat garis dan titik pada koordinat Kartesius dua dimensi, mencakup jarak antartitik, persamaan garis lurus, hubungan gradien garis saling sejajar atau tegak lurus, serta jarak titik ke garis.

---

### A. Titik Koordinat Kartesius dan Jarak Antartitik

#### 1. Jarak Antara Dua Titik
Diberikan titik $A(x_1, y_1)$ dan $B(x_2, y_2)$ pada bidang Kartesius. Jarak Euclidean $d(A, B)$ diturunkan dari teorema Pythagoras:
$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

#### 2. Titik Tengah Segmen Garis
Koordinat titik tengah $M(x_m, y_m)$ antara titik $A$ dan $B$:
$$x_m = \\frac{x_1 + x_2}{2}, \\quad y_m = \\frac{y_1 + y_2}{2}$$

---

### B. Persamaan Garis Lurus dan Gradien

#### 1. Gradien (Kemiringan Garis, $m$)
Ukuran kecuraman garis yang didefinisikan sebagai perbandingan perubahan ordinat terhadap absis:
$$m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan\\theta$$
* $\\theta$ adalah sudut yang dibentuk garis terhadap sumbu-$x$ positif.

#### 2. Bentuk-Bentuk Persamaan Garis Lurus
* **Bentuk Kemiringan - Titik:** Garis melalui $(x_1, y_1)$ dengan gradien $m$:
  $$y - y_1 = m(x - x_1)$$
* **Bentuk Melalui Dua Titik:** Garis melalui $(x_1, y_1)$ dan $(x_2, y_2)$:
  $$\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$$
* **Bentuk Eksplisit (Kemiringan - Titik Potong Sumbu):**
  $$y = m x + c$$
* **Bentuk Implisit (Bentuk Umum):**
  $$a x + b y + c = 0 \\implies m = -\\frac{a}{b}$$

---

### C. Hubungan Gradien Dua Garis

#### 1. Dua Garis Sejajar
Dua garis $g_1$ dan $g_2$ dikatakan saling sejajar ($g_1 \\parallel g_2$) jika dan hanya jika keduanya memiliki kemiringan yang identik:
$$m_1 = m_2$$

#### 2. Dua Garis Saling Tegak Lurus
Dua garis $g_1$ dan $g_2$ dikatakan saling tegak lurus ($g_1 \\perp g_2$) jika dan hanya jika hasil kali kedua gradiennya sama dengan $-1$:
$$m_1 \\cdot m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}$$

---

### D. Jarak Titik ke Suatu Garis Lurus
Jarak terpendek (tegak lurus) dari titik $P(x_0, y_0)$ ke garis lurus berpersamaan $a x + b y + c = 0$:
$$d = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}$$
`
  },
  {
    id: "tka-fnd-cs-03",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "contoh-soal",
    babIndex: 3,
    babJudul: "3. Variasi Contoh Soal — Geometri Analitik Bidang",
    content: `# Variasi Contoh Soal — Geometri Analitik Bidang
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

---

### Soal 1: Garis Tegak Lurus dan Titik Potong
> [!EXAMPLE]
> Tentukan persamaan garis yang melalui titik $P(2, -3)$ dan tegak lurus terhadap garis $3x - 4y + 8 = 0$!

#### Pembahasan:
1. **Tentukan Gradien Garis Acuan ($m_1$):**
   $$3x - 4y + 8 = 0 \\implies 4y = 3x + 8 \\implies y = \\frac{3}{4}x + 2$$
   Maka gradien $m_1 = \\frac{3}{4}$.
2. **Tentukan Gradien Garis Tegak Lurus ($m_2$):**
   $$m_1 \\cdot m_2 = -1 \\implies \\frac{3}{4} \\cdot m_2 = -1 \\implies m_2 = -\\frac{4}{3}$$
3. **Persamaan Garis Melalui $P(2, -3)$:**
   $$y - y_1 = m_2 (x - x_1) \\implies y - (-3) = -\\frac{4}{3}(x - 2)$$
   $$y + 3 = -\\frac{4}{3}x + \\frac{8}{3}$$
   Kalikan kedua ruas dengan 3:
   $$3y + 9 = -4x + 8 \\implies 4x + 3y + 1 = 0$$
   Persamaan garis yang dicari adalah **$4x + 3y + 1 = 0$**.

---

### Soal 2: Jarak Titik ke Garis
> [!EXAMPLE]
> Hitunglah jarak dari titik $A(1, 2)$ ke garis lurus $5x + 12y - 4 = 0$!

#### Pembahasan:
1. **Rumus Jarak Titik ke Garis:**
   $$d = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}$$
2. **Substitusi Titik $(1, 2)$ ke $5x + 12y - 4 = 0$:**
   $$d = \\frac{|5(1) + 12(2) - 4|}{\\sqrt{5^2 + 12^2}} = \\frac{|5 + 24 - 4|}{\\sqrt{25 + 144}} = \\frac{|25|}{\\sqrt{169}} = \\frac{25}{13} \\approx 1{,}92$$
   Jarak titik tersebut ke garis adalah **$\\frac{25}{13}$ satuan**.
`
  },
  {
    id: "tka-fnd-rg-03",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "rangkuman",
    babIndex: 3,
    babJudul: "3. Rangkuman Rumus — Geometri Analitik Bidang",
    content: `# Rangkuman Rumus — Geometri Analitik Bidang
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

| Konsep | Rumus Matematika | Keterangan |
| :--- | :--- | :--- |
| **Jarak Antartitik** | $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ | Jarak Euclidean |
| **Gradien Dua Titik** | $m = \\frac{y_2 - y_1}{x_2 - x_1}$ | $x_1 \\ne x_2$ |
| **Garis Melalui Titik & $m$**| $y - y_1 = m(x - x_1)$ | Bentuk titik-kemiringan |
| **Dua Garis Sejajar** | $m_1 = m_2$ | Tidak berpotongan |
| **Dua Garis Tegak Lurus**| $m_1 \\cdot m_2 = -1$ | Membentuk sudut $90^\\circ$ |
| **Jarak Titik ke Garis** | $d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$ | Garis $ax+by+c=0$ |
`
  },

  // ==========================================
  // BAB 4: PERTIDAKSAMAAN DAN NILAI MUTLAK
  // ==========================================
  {
    id: "tka-fnd-mat-04",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "materi",
    babIndex: 4,
    babJudul: "4. Pertidaksamaan dan Nilai Mutlak",
    content: `# Bab 4: Pertidaksamaan dan Nilai Mutlak
**Kategori:** Bab Fundamental Matematika Lanjut (Materi Prasyarat) | **Blok:** Materi Prasyarat

## Pendahuluan
Pemahaman syarat keberlakuan fungsi aljabar (pecahan dan bentuk akar) serta penyelesaian persamaan dan pertidaksamaan nilai mutlak merupakan materi prasyarat penting dalam menyelesaikan kalkulus dan analisis matematika lanjut.

---

### A. Syarat Keberlakuan Aljabar

#### 1. Syarat Pecahan Terdefinisi
Suatu pecahan rasional $\\frac{f(x)}{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika penyebutnya tidak sama dengan nol:
$$g(x) \\ne 0$$
* Pada pertidaksamaan pecahan $\\frac{f(x)}{g(x)} \\le 0$, titik pembuat nol penyebut ($g(x) = 0$) **selalu terbuka (tidak termasuk himpunan penyelesaian)**.

#### 2. Syarat Bentuk Akar Terdefinisi
Bentuk akar pangkat genap $\\sqrt{f(x)}$ menghasilkan bilangan real jika dan hanya jika bilangan di bawah tanda akar tidak negatif:
$$f(x) \\ge 0$$
* Langkah penyelesaian pertidaksamaan bentuk akar:
  1. Tentukan syarat batas radikan ($f(x) \\ge 0$).
  2. Kuadratkan kedua ruas setelah memastikan kedua ruas bernilai non-negatif.
  3. Cari irisan (interseksi) antara syarat radikan dengan hasil kuadrat.

---

### B. Nilai Mutlak (Konsep & Sifat Dasar)

#### 1. Definisi Geometris Nilai Mutlak
Nilai mutlak $|x|$ merepresentasikan jarak bilangan $x$ dari titik nol pada garis bilangan real (selalu non-negatif $|x| \\ge 0$):
$$|x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}$$
* Sifat penting: $|x|^2 = x^2$ dan $|x| = \\sqrt{x^2}$.

#### 2. Persamaan Nilai Mutlak
* **Bentuk $|f(x)| = c$ (dengan $c \\ge 0$):**
  $$f(x) = c \\quad \\text{atau} \\quad f(x) = -c$$
* **Bentuk $|f(x)| = |g(x)|$:**
  $$f(x)^2 = g(x)^2 \\iff (f(x) + g(x))(f(x) - g(x)) = 0$$

#### 3. Pertidaksamaan Nilai Mutlak
Untuk sebarang konstanta $a > 0$:
1. **Bentuk Kurang Dari ($|x| < a$):**
   $$-a < x < a$$
2. **Bentuk Lebih Dari ($|x| > a$):**
   $$x < -a \\quad \\text{atau} \\quad x > a$$
`
  },
  {
    id: "tka-fnd-cs-04",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "contoh-soal",
    babIndex: 4,
    babJudul: "4. Variasi Contoh Soal — Pertidaksamaan dan Nilai Mutlak",
    content: `# Variasi Contoh Soal — Pertidaksamaan dan Nilai Mutlak
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

---

### Soal 1: Pertidaksamaan Nilai Mutlak Linear
> [!EXAMPLE]
> Tentukan himpunan penyelesaian dari pertidaksamaan $|2x - 3| \\le 5$!

#### Pembahasan:
1. **Gunakan Sifat $|u| \\le a \\iff -a \\le u \\le a$:**
   $$-5 \\le 2x - 3 \\le 5$$
2. **Tambahkan 3 pada Ketiga Ruas:**
   $$-5 + 3 \\le 2x \\le 5 + 3 \\implies -2 \\le 2x \\le 8$$
3. **Bagi Ketiga Ruas dengan 2:**
   $$-1 \\le x \\le 4$$
   Himpunan penyelesaiannya adalah **$\\{x \\mid -1 \\le x \\le 4, x \\in \\mathbb{R}\\}$**.

---

### Soal 2: Pertidaksamaan Pecahan dengan Uji Garis Bilangan
> [!EXAMPLE]
> Tentukan nilai $x$ yang memenuhi pertidaksamaan rasional:
> $$\\frac{x - 2}{x + 4} \\ge 0$$

#### Pembahasan:
1. **Tentukan Pembuat Nol:**
   * Pembilang: $x - 2 = 0 \\implies x = 2$ (titik penuh, $\\le$ atau $\\ge$).
   * Penyebut: $x + 4 = 0 \\implies x = -4$ (syarat pecahan: titik selalu terbuka $x \\ne -4$).
2. **Uji Tanda Interval pada Garis Bilangan:**
   * Interval $x < -4$ (misal $x = -5$): $\\frac{-5 - 2}{-5 + 4} = \\frac{-7}{-1} = +7 > 0$ (+).
   * Interval $-4 < x < 2$ (misal $x = 0$): $\\frac{0 - 2}{0 + 4} = -\\frac{1}{2} < 0$ (-).
   * Interval $x > 2$ (misal $x = 3$): $\\frac{3 - 2}{3 + 4} = \\frac{1}{7} > 0$ (+).
3. **Himpunan Penyelesaian (Mencari $\\ge 0$):**
   $$x < -4 \\quad \\text{atau} \\quad x \\ge 2$$
`
  },
  {
    id: "tka-fnd-rg-04",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "rangkuman",
    babIndex: 4,
    babJudul: "4. Rangkuman Rumus — Pertidaksamaan dan Nilai Mutlak",
    content: `# Rangkuman Rumus — Pertidaksamaan dan Nilai Mutlak
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

| Bentuk Pertidaksamaan | Solusi / Syarat | Catatan Penting |
| :--- | :--- | :--- |
| **Pecahan $\\frac{P(x)}{Q(x)}$** | Syarat $Q(x) \\ne 0$ | Titik penyebut tidak boleh bulat penuh |
| **Bentuk Akar $\\sqrt{f(x)}$**| Syarat $f(x) \\ge 0$ | Wajib diiriskan dengan solusi akhir |
| **Nilai Mutlak $|x| < a$** | $-a < x < a$ | Untuk $a > 0$ |
| **Nilai Mutlak $|x| > a$** | $x < -a$ atau $x > a$ | Daerah terpisah di kiri dan kanan |
| **$|f(x)| = |g(x)|$** | $(f+g)(f-g) = 0$ | Selisih dua kuadrat |
`
  },

  // ==========================================
  // BAB 5: EKSPONEN DAN LOGARITMA
  // ==========================================
  {
    id: "tka-fnd-mat-05",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "materi",
    babIndex: 5,
    babJudul: "5. Eksponen dan Logaritma",
    content: `# Bab 5: Eksponen dan Logaritma
**Kategori:** Bab Fundamental Matematika Lanjut (Materi Prasyarat) | **Blok:** Materi Prasyarat

## Pendahuluan
Eksponen dan logaritma adalah operasi invers satu sama lain. Penguasaan sifat-sifat pangkat bilangan bulat/rasional dan manipulasi basis logaritma adalah kemampuan wajib untuk memecahkan persamaan transendental dalam matematika lanjut.

---

### A. Aturan Pangkat (Eksponen)

#### 1. Aturan Pangkat Bulat dan Rasional
Untuk bilangan real $a, b > 0$ dan bilangan bulat atau rasional $m, n$:
1. **Perkalian Basis Sama:**
   $$a^m \\cdot a^n = a^{m + n}$$
2. **Pembagian Basis Sama:**
   $$\\frac{a^m}{a^n} = a^{m - n}$$
3. **Pangkat Dipangkatkan:**
   $$(a^m)^n = a^{m \\cdot n}$$
4. **Pangkat Perkalian:**
   $$(a \\cdot b)^n = a^n \\cdot b^n$$
5. **Pangkat Pembagian:**
   $$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$
6. **Pangkat Negatif dan Nol:**
   $$a^{-n} = \\frac{1}{a^n}, \\quad a^0 = 1 \\quad (a \\ne 0)$$
7. **Pangkat Rasional (Bentuk Akar):**
   $$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$$

#### 2. Persamaan Eksponen
Jika $a > 0$ dan $a \\ne 1$:
$$a^{f(x)} = a^{g(x)} \\implies f(x) = g(x)$$
Jika $a^{f(x)} = b^{f(x)}$ dengan $a \\ne b$, maka $f(x) = 0$.

---

### B. Konsep dan Sifat Logaritma

#### 1. Definisi Logaritma
Logaritma adalah invers dari perpangkatan:
$\${}^a\\log b = c \\iff a^c = b$$
* **Syarat Basis ($a$):** $a > 0$ dan $a \\ne 1$.
* **Syarat Numerus ($b$):** $b > 0$.
* Logaritma natural: $\\ln x = {}^e\\log x$ (dengan bilangan Euler $e \\approx 2{,}71828$).

#### 2. Sifat-Sifat Operasi Logaritma
1. **Penjumlahan Logaritma (Perkalian Numerus):**
   $\${}^a\\log(b \\cdot c) = {}^a\\log b + {}^a\\log c$$
2. **Pengurangan Logaritma (Pembagian Numerus):**
   $\${}^a\\log\\left(\\frac{b}{c}\\right) = {}^a\\log b - {}^a\\log c$$
3. **Pangkat pada Numerus:**
   $\${}^a\\log(b^n) = n \\cdot {}^a\\log b$$
4. **Pangkat pada Basis dan Numerus:**
   $\${}^{a^m}\\log(b^n) = \\frac{n}{m} \\cdot {}^a\\log b$$
5. **Perubahan Basis Logaritma:**
   $\${}^a\\log b = \\frac{{}^c\\log b}{{}^c\\log a} = \\frac{1}{{}^b\\log a}$$
6. **Rantai Perkalian Logaritma:**
   $\${}^a\\log b \\cdot {}^b\\log c = {}^a\\log c$$
7. **Sifat Eksponensial Logaritma:**
   $$a^{{}^a\\log b} = b$$
`
  },
  {
    id: "tka-fnd-cs-05",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "contoh-soal",
    babIndex: 5,
    babJudul: "5. Variasi Contoh Soal — Eksponen dan Logaritma",
    content: `# Variasi Contoh Soal — Eksponen dan Logaritma
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

---

### Soal 1: Penyederhanaan Rantai Logaritma
> [!EXAMPLE]
> Sederhanakan nilai dari ekspresi logaritma berikut:
> $\${}^2\\log 48 + {}^2\\log\\left(\\frac{1}{3}\\right) - {}^2\\log 2$$

#### Pembahasan:
1. **Gunakan Sifat Penjumlahan dan Pengurangan Logaritma:**
   $\${}^a\\log x + {}^a\\log y - {}^a\\log z = {}^a\\log\\left(\\frac{x \\cdot y}{z}\\right)$$
2. **Substitusi Numerus:**
   $\${}^2\\log\\left(\\frac{48 \\times \\frac{1}{3}}{2}\\right) = {}^2\\log\\left(\\frac{16}{2}\\right) = {}^2\\log 8$$
3. **Ubah 8 Menjadi Pangkat 2:**
   $\${}^2\\log 8 = {}^2\\log(2^3) = 3 \\cdot {}^2\\log 2 = 3(1) = 3$$
   Nilai dari ekspresi tersebut adalah **$3$**.

---

### Soal 2: Persamaan Eksponen Berbasis Beda
> [!EXAMPLE]
> Tentukan nilai $x$ yang memenuhi persamaan:
> $$3^{2x - 1} = 27^{x - 2}$$

#### Pembahasan:
1. **Samakan Basis Eksponen (Ubah 27 Menjadi $3^3$):**
   $$3^{2x - 1} = (3^3)^{x - 2} \\implies 3^{2x - 1} = 3^{3(x - 2)} = 3^{3x - 6}$$
2. **Samakan Pangkatnya:**
   $$2x - 1 = 3x - 6$$
   $$3x - 2x = 6 - 1 \\implies x = 5$$
   Nilai $x$ yang memenuhi adalah **$x = 5$**.
`
  },
  {
    id: "tka-fnd-rg-05",
    kategoriUtama: "tka",
    subtes: "Fundamental Matematika",
    blok: "Materi Prasyarat",
    tipe: "rangkuman",
    babIndex: 5,
    babJudul: "5. Rangkuman Rumus — Eksponen dan Logaritma",
    content: `# Rangkuman Rumus — Eksponen dan Logaritma
**Kategori:** Bab Fundamental Matematika Lanjut | **Blok:** Materi Prasyarat

| Sifat / Identitas | Rumus Matematika | Catatan |
| :--- | :--- | :--- |
| **Perkalian Eksponen** | $a^m \\cdot a^n = a^{m+n}$ | Basis harus sama |
| **Pembagian Eksponen** | $\\frac{a^m}{a^n} = a^{m-n}$ | Basis harus sama |
| **Pangkat Negatif** | $a^{-n} = \\frac{1}{a^n}$ | $a \\ne 0$ |
| **Definisi Logaritma** | \${}^a\\log b = c \\iff a^c = b$ | $a > 0, a \\ne 1, b > 0$ |
| **Penjumlahan Logaritma**| \${}^a\\log b + {}^a\\log c = {}^a\\log(bc)$| Basis sama |
| **Pangkat Numerus & Basis**| \${}^{a^m}\\log(b^n) = \\frac{n}{m}{}^a\\log b$ | Rumus sangat penting |
| **Perubahan Basis** | \${}^a\\log b = \\frac{{}^c\\log b}{{}^c\\log a} = \\frac{1}{{}^b\\log a}$ | $c$ basis baru bebas |
`
  }
];
