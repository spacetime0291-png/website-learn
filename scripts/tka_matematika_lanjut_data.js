// tka_matematika_lanjut_data.js - 3 Bab Matematika Lanjut TKA (9 Modul: Materi, Contoh Soal, Rangkuman)
module.exports = [
  // ==========================================
  // BAB 1: ALJABAR
  // ==========================================
  {
    id: "tka-mtk-mat-01",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 1: Aljabar",
    tipe: "materi",
    babIndex: 1,
    babJudul: "1. Aljabar",
    content: `# Bab 1: Aljabar (Matematika Lanjut)
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar

## Pendahuluan
Aljabar tingkat lanjut mencakup struktur matriks, aljabar polinomial (suku banyak), serta eksplorasi domain, kodomain, range, dan karakteristik grafik dari berbagai kelas fungsi matematika.

---

### A. Matriks

#### 1. Operasi Aljabar Matriks
* **Penjumlahan & Pengurangan:** Hanya dapat dilakukan pada dua matriks berordo sama ($A_{m \\times n} \\pm B_{m \\times n}$). Operasi dilakukan elemen seletak (*entry-wise*).
* **Perkalian dengan Skalar ($k \\in \\mathbb{R}$):** Setiap elemen dikalikan dengan skalar:
  $$(k A)_{ij} = k \\cdot a_{ij}$$
* **Perkalian Antarmatriks ($A_{m \\times p} \\times B_{p \\times n} = C_{m \\times n}$):**
  Hanya dapat didefinisikan jika jumlah kolom matriks pertama sama dengan jumlah baris matriks kedua:
  $$c_{ij} = \\sum_{k=1}^p a_{ik} b_{kj}$$
  > Perkalian matriks pada umumnya **tidak komutatif** ($A B \\ne B A$).

#### 2. Determinan Matriks
* **Ordo $2 \\times 2$:**
  $$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\implies \\det(A) = |A| = a d - b c$$
* **Ordo $3 \\times 3$ (Metode Sarrus & Ekspansi Kofaktor):**
  $$A = \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$$
  $$\\det(A) = a(e i - f h) - b(d i - f g) + c(d h - e g)$$
* **Sifat-Sifat Determinan Penting:**
  * $\\det(A B) = \\det(A) \\cdot \\det(B)$
  * $\\det(A^T) = \\det(A)$
  * $\\det(A^{-1}) = \\frac{1}{\\det(A)}$
  * $\\det(k A_{n \\times n}) = k^n \\det(A)$

#### 3. Invers Matriks
Matriks memiliki invers jika dan hanya jika matriks tersebut non-singular ($\\det(A) \\ne 0$).
* **Invers Ordo $2 \\times 2$:**
  $$A^{-1} = \\frac{1}{a d - b c} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$
* **Invers Ordo $3 \\times 3$:**
  $$A^{-1} = \\frac{1}{\\det(A)} \\text{Adj}(A) = \\frac{1}{\\det(A)} [C_{ij}]^T$$
* **Penyelesaian Sistem Persamaan Linear (SPL):**
  $$A \\vec{x} = \\vec{b} \\implies \\vec{x} = A^{-1} \\vec{b}$$
  Atau menggunakan **Aturan Cramer**:
  $$x_i = \\frac{\\det(A_i)}{\\det(A)}$$

---

### B. Polinomial (Suku Banyak)
Bentuk umum polinomial derajat $n$:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 \\quad (a_n \\ne 0)$$

#### 1. Operasi Polinomial
Penjumlahan, pengurangan, dan perkalian polinomial berorde $\\le 4$ dilakukan dengan mengelompokkan suku-suku berderajat sama.

#### 2. Pembagian Polinomial
Bentuk algoritma pembagian:
$$P(x) = Q(x) \\cdot H(x) + S(x)$$
* $P(x)$ = polinomial yang dibagi
* $Q(x)$ = pembagi
* $H(x)$ = hasil bagi
* $S(x)$ = sisa pembagian (derajat $S(x) <$ derajat $Q(x)$)
* **Metode Pembagian:**
  1. Pembagian bersusun panjang (*porogapit*).
  2. Skema Horner / sintetik (khusus pembagi linear $(x - c)$ atau $(a x - b)$).

#### 3. Teorema Sisa dan Teorema Faktor
* **Teorema Sisa:**
  * Jika $P(x)$ dibagi oleh $(x - c)$, maka sisa pembagiannya adalah $S = P(c)$.
  * Jika $P(x)$ dibagi oleh $(a x - b)$, maka sisa pembagiannya adalah $S = P\\left(\\frac{b}{a}\\right)$.
  * Jika $P(x)$ dibagi oleh kuadrat $(x - a)(x - b)$, maka sisa pembagiannya berbentuk linear $S(x) = p x + q$.
* **Teorema Faktor:**
  $(x - c)$ merupakan faktor dari $P(x)$ jika dan hanya jika sisa pembagiannya nol:
  $$P(c) = 0$$

---

### C. Analisis Fungsi Matematika

#### 1. Domain ($D_f$), Kodomain, dan Range ($R_f$)
* **Domain Alami:** Himpunan semua nilai $x$ real sehingga fungsi $f(x)$ terdefinisi.
  1. Fungsi pecahan $f(x) = \\frac{P(x)}{Q(x)}$: syarat penyebut $Q(x) \\ne 0$.
  2. Fungsi bentuk akar genap $f(x) = \\sqrt{g(x)}$: syarat bilangan di bawah akar $g(x) \\ge 0$.
  3. Fungsi logaritma $f(x) = \\log_a g(x)$: syarat numerus $g(x) > 0$.
* **Range:** Himpunan seluruh nilai keluaran $y = f(x)$ untuk setiap $x \\in D_f$.

#### 2. Kelas Fungsi dan Karakteristik Grafiknya
* **Fungsi Polinomial:** Kontinu di seluruh $\\mathbb{R}$ tanpa asimtot. Derajat genap memiliki ujung grafik searah, derajat ganjil memiliki ujung berlawanan.
* **Fungsi Rasional:** Memiliki kemungkinan asimtot tegak ($Q(x) = 0$) dan asimtot datar ($y = \\lim_{x \\to \\pm\\infty} f(x)$).
* **Fungsi Eksponensial ($f(x) = e^x$ atau $a^x$):** Selalu positif ($R_f = (0, \\infty)$), memiliki asimtot datar sumbu-$x$ ($y = 0$).
* **Fungsi Logaritma ($f(x) = \\ln x$):** Domain $x > 0$, asimtot tegak pada sumbu-$y$ ($x = 0$).
* **Fungsi Nilai Mutlak ($f(x) = |x|$):** Grafik berbentuk huruf "V" dengan simetri terhadap titik puncak.
* **Fungsi Trigonometri ($\sin x, \\cos x$):** Gelombang periodik dengan periode $2\\pi$ dan range $[-1, 1]$. Fungsi $\\tan x$ memiliki asimtot tegak pada $x = \\frac{\\pi}{2} + k\\pi$.
`
  },
  {
    id: "tka-mtk-cs-01",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 1: Aljabar",
    tipe: "contoh-soal",
    babIndex: 1,
    babJudul: "1. Variasi Contoh Soal — Aljabar",
    content: `# Variasi Contoh Soal — Aljabar
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar

---

### Soal 1: Determinan dan Invers Matriks Persamaan
> [!EXAMPLE]
> Diberikan matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ dan matriks $B = \\begin{pmatrix} 7 \\\\ 6 \\end{pmatrix}$. Tentukan vektor kolom $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$ yang memenuhi persamaan matriks $A X = B$!

#### Pembahasan:
1. **Hitung Determinan $A$:**
   $$\\det(A) = (2)(4) - (3)(1) = 8 - 3 = 5$$
2. **Hitung Invers $A^{-1}$:**
   $$A^{-1} = \\frac{1}{5} \\begin{pmatrix} 4 & -3 \\\\ -1 & 2 \\end{pmatrix}$$
3. **Kalikan dengan $B$:**
   $$X = A^{-1} B = \\frac{1}{5} \\begin{pmatrix} 4 & -3 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 7 \\\\ 6 \\end{pmatrix} = \\frac{1}{5} \\begin{pmatrix} 4(7) + (-3)(6) \\\\ (-1)(7) + 2(6) \\end{pmatrix} = \\frac{1}{5} \\begin{pmatrix} 28 - 18 \\\\ -7 + 12 \\end{pmatrix} = \\frac{1}{5} \\begin{pmatrix} 10 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$
   Nilai $x = 2$ dan $y = 1$.

---

### Soal 2: Teorema Sisa Pembagi Derajat Dua
> [!EXAMPLE]
> Polinomial $P(x)$ jika dibagi oleh $(x - 1)$ bersisa 4, dan jika dibagi oleh $(x + 2)$ bersisa $-5$. Tentukan sisa pembagian jika $P(x)$ dibagi oleh $(x^2 + x - 2)$!

#### Pembahasan:
1. **Faktorisasi Pembagi:**
   $$x^2 + x - 2 = (x - 1)(x + 2)$$
2. **Bentuk Sisa Pembagian:**
   Karena pembagi berderajat 2, sisa pembagian berbentuk linear: $S(x) = a x + b$.
   $$P(x) = (x - 1)(x + 2) H(x) + (a x + b)$$
3. **Penerapan Teorema Sisa:**
   * Dibagi $(x - 1)$: $P(1) = 4 \\implies a(1) + b = 4 \\implies a + b = 4$
   * Dibagi $(x + 2)$: $P(-2) = -5 \\implies a(-2) + b = -5 \\implies -2a + b = -5$
4. **Eliminasi Sistem Persamaan:**
   $$(a + b) - (-2a + b) = 4 - (-5) \\implies 3a = 9 \\implies a = 3$$
   $$3 + b = 4 \\implies b = 1$$
   Sisa pembagian polinomial tersebut adalah **$S(x) = 3x + 1$**.
`
  },
  {
    id: "tka-mtk-rg-01",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 1: Aljabar",
    tipe: "rangkuman",
    babIndex: 1,
    babJudul: "1. Rangkuman Rumus & Konsep — Aljabar",
    content: `# Rangkuman Rumus & Konsep — Aljabar
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar

| Topik | Formula Utama | Keterangan |
| :--- | :--- | :--- |
| **Invers Matriks $2\\times2$**| $A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ | Syarat $\\det(A) \\ne 0$ |
| **Sifat Determinan**| $\\det(AB) = \\det(A)\\det(B)$ | $\\det(A^{-1}) = \\frac{1}{\\det(A)}$ |
| **Teorema Sisa** | $S = P(c)$ | Jika $P(x)$ dibagi $(x-c)$ |
| **Teorema Faktor** | $(x-c)$ faktor $\\iff P(c) = 0$ | Akar persamaan $P(x) = 0$ |
| **Domain Pecahan** | Penyebut $\\ne 0$ | $Q(x) \\ne 0$ |
| **Domain Bentuk Akar**| Radikan $\\ge 0$ | $g(x) \\ge 0$ |
| **Domain Logaritma** | Numerus $> 0$ | $g(x) > 0$ |
`
  },

  // ==========================================
  // BAB 2: GEOMETRI DAN PENGUKURAN
  // ==========================================
  {
    id: "tka-mtk-mat-02",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 2: Geometri dan Pengukuran",
    tipe: "materi",
    babIndex: 2,
    babJudul: "2. Geometri dan Pengukuran",
    content: `# Bab 2: Geometri dan Pengukuran (Matematika Lanjut)
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 2: Geometri dan Pengukuran

## Pendahuluan
Geometri analitik menggabungkan aljabar dan konsep keruangan untuk menelaah vektor dimensi dua dan tiga, geometri lingkaran, serta transformasi geometri dan matriks transformasinya.

---

### A. Vektor pada $\\mathbb{R}^2$ dan $\\mathbb{R}^3$

#### 1. Komponen dan Panjang Vektor
* Vektor pada $\\mathbb{R}^2$: $\\vec{u} = \\begin{pmatrix} u_1 \\\\ u_2 \\end{pmatrix} = u_1 \\hat{i} + u_2 \\hat{j}$.
* Vektor pada $\\mathbb{R}^3$: $\\vec{u} = \\begin{pmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{pmatrix} = u_1 \\hat{i} + u_2 \\hat{j} + u_3 \\hat{k}$.
* **Besar (Panjang) Vektor:**
  $$|\\vec{u}| = \\sqrt{u_1^2 + u_2^2 + u_3^2}$$
* **Vektor Satuan:**
  $$\\hat{u} = \\frac{\\vec{u}}{|\\vec{u}|} \\quad (|\\hat{u}| = 1)$$

#### 2. Perkalian Skalar Dua Vektor (Dot Product)
$$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = |\\vec{u}| |\\vec{v}| \\cos\\theta$$
* **Kondisi Saling Tegak Lurus (Ortogonal):**
  $$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$$
* **Proyeksi Skalar Ortogonal $\\vec{u}$ pada $\\vec{v}$:**
  $$|\\vec{c}| = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|}$$
* **Vektor Proyeksi Ortogonal $\\vec{u}$ pada $\\vec{v}$:**
  $$\\vec{c} = \\left(\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2}\\right) \\vec{v}$$

---

### B. Lingkaran

#### 1. Persamaan Lingkaran
* **Pusat di $(0,0)$ dan Jari-Jari $r$:**
  $$x^2 + y^2 = r^2$$
* **Pusat di $(a,b)$ dan Jari-Jari $r$:**
  $$(x - a)^2 + (y - b)^2 = r^2$$
* **Bentuk Umum Lingkaran:**
  $$x^2 + y^2 + A x + B y + C = 0$$
  * Titik Pusat: $P\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$
  * Jari-jari: $r = \\sqrt{\\left(\\frac{A}{2}\\right)^2 + \\left(\\frac{B}{2}\\right)^2 - C}$

#### 2. Persamaan Garis Singgung Lingkaran (PGSL)
* **Melalui Titik $(x_1, y_1)$ pada Lingkaran $(x-a)^2 + (y-b)^2 = r^2$:**
  $$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$
* **Dengan Gradien Tertentu $m$:**
  $$y - b = m(x - a) \\pm r \\sqrt{1 + m^2}$$
* **Melalui Titik di Luar Lingkaran:** Menggunakan persamaan garis kutub (polar) lalu disubstitusikan ke persamaan lingkaran untuk memperoleh titik singgungnya.

#### 3. Pengukuran Lingkaran
* Keliling: $K = 2\\pi r$
* Luas: $L = \\pi r^2$
* Panjang Busur (sudut pusat $\\theta$): $s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$
* Luas Juring: $L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$
* Luas Tembereng: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\Delta}$

---

### C. Transformasi Geometri

#### 1. Ragam Transformasi Dasar
1. **Translasi $T\\begin{pmatrix} a \\\\ b \\end{pmatrix}$:**
   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix}$$
2. **Refleksi (Pencerminan):**
   * Terhadap sumbu-$x$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
   * Terhadap sumbu-$y$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
   * Terhadap garis $y = x$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
   * Terhadap garis $y = -x$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
3. **Rotasi $[O, \\theta]$ terhadap Pusat $(0,0)$:**
   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$
4. **Dilatasi $[O, k]$:**
   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$

#### 2. Komposisi Transformasi
Jika transformasi $T_1$ diwakili matriks $M_1$ dan dilanjutkan transformasi $T_2$ dengan matriks $M_2$, maka matriks komposisinya adalah:
$$M = M_2 \\times M_1$$
`
  },
  {
    id: "tka-mtk-cs-02",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 2: Geometri dan Pengukuran",
    tipe: "contoh-soal",
    babIndex: 2,
    babJudul: "2. Variasi Contoh Soal — Geometri dan Pengukuran",
    content: `# Variasi Contoh Soal — Geometri dan Pengukuran
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 2: Geometri dan Pengukuran

---

### Soal 1: Garis Singgung Lingkaran dengan Gradien Tertentu
> [!EXAMPLE]
> Tentukan persamaan garis singgung pada lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ yang sejajar dengan garis $4x - 3y + 5 = 0$!

#### Pembahasan:
1. **Tentukan Pusat dan Jari-Jari Lingkaran:**
   * Bentuk umum: $A = -4, B = 6, C = -12$.
   * Pusat: $P\\left(-\\frac{-4}{2}, -\\frac{6}{2}\\right) = (2, -3)$, sehingga $a = 2, b = -3$.
   * Jari-jari:
     $$r = \\sqrt{2^2 + (-3)^2 - (-12)} = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$$
2. **Tentukan Gradien Garis Singgung ($m$):**
   Garis acuan $4x - 3y + 5 = 0 \\implies 3y = 4x + 5 \\implies y = \\frac{4}{3}x + \\frac{5}{3}$.
   Karena sejajar, maka $m = \\frac{4}{3}$.
3. **Rumus PGSL Bergradien $m$:**
   $$y - b = m(x - a) \\pm r \\sqrt{1 + m^2}$$
   $$y - (-3) = \\frac{4}{3}(x - 2) \\pm 5 \\sqrt{1 + \\left(\\frac{4}{3}\\right)^2}$$
   $$y + 3 = \\frac{4}{3}(x - 2) \\pm 5 \\sqrt{\\frac{25}{9}} = \\frac{4}{3}(x - 2) \\pm 5 \\left(\\frac{5}{3}\\right) = \\frac{4}{3}(x - 2) \\pm \\frac{25}{3}$$
4. **Kalikan Kedua Ruas dengan 3:**
   $$3(y + 3) = 4(x - 2) \\pm 25 \\implies 3y + 9 = 4x - 8 \\pm 25$$
   * Kasus $+25$: $4x - 3y - 17 + 25 = 0 \\implies 4x - 3y + 8 = 0$
   * Kasus $-25$: $4x - 3y - 17 - 25 = 0 \\implies 4x - 3y - 42 = 0$
   Persamaan garis singgungnya adalah **$4x - 3y + 8 = 0$** dan **$4x - 3y - 42 = 0$**.
`
  },
  {
    id: "tka-mtk-rg-02",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 2: Geometri dan Pengukuran",
    tipe: "rangkuman",
    babIndex: 2,
    babJudul: "2. Rangkuman Rumus & Konsep — Geometri dan Pengukuran",
    content: `# Rangkuman Rumus & Konsep — Geometri dan Pengukuran
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 2: Geometri dan Pengukuran

| Konsep | Rumus Utama | Keterangan |
| :--- | :--- | :--- |
| **Dot Product Vektor**| $\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = |\\vec{u}||\\vec{v}|\\cos\\theta$ | Saling tegak lurus jika hasil kali $= 0$ |
| **Panjang Vektor** | $|\\vec{u}| = \\sqrt{u_1^2 + u_2^2 + u_3^2}$ | Nilai skalar non-negatif |
| **Proyeksi Skalar** | $|\\vec{c}| = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|}$ | Proyeksi $\\vec{u}$ pada $\\vec{v}$ |
| **Persamaan Lingkaran**| $(x-a)^2 + (y-b)^2 = r^2$ | Pusat $(a,b)$, jari-jari $r$ |
| **PGSL Titik $(x_1, y_1)$**| $(x_1-a)(x-a) + (y_1-b)(y-b) = r^2$ | Titik tepat pada lingkaran |
| **PGSL Gradien $m$** | $y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$ | Dua garis singgung sejajar |
| **Rotasi $[O, \\theta]$** | $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ | Pusat $(0,0)$ |
| **Komposisi Matriks**| $M = M_2 \\times M_1$ | Transformasi 1 lalu 2 |
`
  },

  // ==========================================
  // BAB 3: TRIGONOMETRI & LIMIT
  // ==========================================
  {
    id: "tka-mtk-mat-03",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 3: Trigonometri",
    tipe: "materi",
    babIndex: 3,
    babJudul: "3. Trigonometri",
    content: `# Bab 3: Trigonometri & Limit Fungsi (Matematika Lanjut)
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 3: Trigonometri

## Pendahuluan
Bab ini berfokus pada analisis limit fungsi aljabar dan limit fungsi trigonometri dengan metode analitik murni (faktorisasi, rasionalisasi bentuk akar, dan manipulasi identitas trigonometri) tanpa menggunakan aturan L'Hôpital.

---

### A. Limit Fungsi Aljabar

#### 1. Bentuk Tak Tentu $\\left[\\frac{0}{0}\\right]$
Jika substitusi langsung $x = c$ menghasilkan $\\frac{0}{0}$, lakukan penyederhanaan aljabar:
1. **Metode Pemfaktoran:**
   Faktorkan pembuat nol $(x - c)$ dari pembilang dan penyebut lalu sederhanakan:
   $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$$
2. **Metode Merasionalkan Bentuk Akar (Mengalikan Sekawan):**
   $$\\lim_{x \\to c} \\frac{f(x) - g(x)}{\\sqrt{A(x)} - \\sqrt{B(x)}} \\times \\frac{\\sqrt{A(x)} + \\sqrt{B(x)}}{\\sqrt{A(x)} + \\sqrt{B(x)}}$$

#### 2. Limit Tak Hingga Aljabar $\\left[\\frac{\\infty}{\\infty}\\right]$
* **Fungsi Rasional:**
  $$\\lim_{x \\to \\infty} \\frac{a_n x^n + \\dots + a_0}{b_m x^m + \\dots + b_0} = \\begin{cases} \\frac{a_n}{b_m}, & n = m \\\\ 0, & n < m \\\\ \\infty, & n > m \\end{cases}$$
* **Selisih Bentuk Akar Kuadrat:**
  $$\\lim_{x \\to \\infty} \\left(\\sqrt{a x^2 + b x + c} - \\sqrt{a x^2 + p x + q}\\right) = \\frac{b - p}{2\\sqrt{a}}$$

---

### B. Limit Fungsi Trigonometri

#### 1. Teorema Limit Dasar Trigonometri
Untuk sudut kecil mendekati nol ($x \\to 0$):
$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$
$$\\lim_{x \\to 0} \\frac{\\sin(a x)}{b x} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\tan(a x)}{b x} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\sin(a x)}{\\tan(b x)} = \\frac{a}{b}$$

#### 2. Manipulasi Identitas Trigonometri (Tanpa L'Hôpital)
Gunakan rumus sudut rangkap untuk mengubah bentuk kosinus menjadi sinus:
$$1 - \\cos(k x) = 2 \\sin^2\\left(\\frac{k x}{2}\\right)$$
* **Contoh Kasus Klasik:**
  $$\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2} = \\lim_{x \\to 0} \\frac{2 \\sin^2(2x)}{x^2} = 2 \\lim_{x \\to 0} \\left(\\frac{\\sin(2x)}{x}\\right)^2 = 2 (2)^2 = 8$$
* **Rumus Selisih Kosinus:**
  $$\\cos A - \\cos B = -2 \\sin\\left(\\frac{A + B}{2}\\right) \\sin\\left(\\frac{A - B}{2}\\right)$$
`
  },
  {
    id: "tka-mtk-cs-03",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 3: Trigonometri",
    tipe: "contoh-soal",
    babIndex: 3,
    babJudul: "3. Variasi Contoh Soal — Trigonometri",
    content: `# Variasi Contoh Soal — Trigonometri
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 3: Trigonometri

---

### Soal 1: Limit Trigonometri dengan Identitas Kosinus
> [!EXAMPLE]
> Hitunglah nilai limit berikut tanpa menggunakan aturan L'Hôpital:
> $$\\lim_{x \\to 0} \\frac{x \\tan(3x)}{1 - \\cos(6x)}$$

#### Pembahasan:
1. **Ubah Bentuk $1 - \\cos(6x)$ Menggunakan Sudut Rangkap:**
   $$1 - \\cos(6x) = 2 \\sin^2(3x)$$
2. **Substitusi ke Limit:**
   $$\\lim_{x \\to 0} \\frac{x \\tan(3x)}{2 \\sin^2(3x)} = \\frac{1}{2} \\lim_{x \\to 0} \\left(\\frac{x}{\\sin(3x)} \\cdot \\frac{\\tan(3x)}{\\sin(3x)}\\right)$$
3. **Pecah Sesuai Teorema Limit Dasar:**
   $$\\frac{1}{2} \\left(\\lim_{x \\to 0} \\frac{x}{\\sin(3x)}\\right) \\left(\\lim_{x \\to 0} \\frac{\\tan(3x)}{\\sin(3x)}\\right) = \\frac{1}{2} \\left(\\frac{1}{3}\\right) \\left(\\frac{3}{3}\\right) = \\frac{1}{6} \\times 1 = \\frac{1}{6}$$
   Nilai limit tersebut adalah **$\\frac{1}{6}$**.
`
  },
  {
    id: "tka-mtk-rg-03",
    kategoriUtama: "tka",
    subtes: "Matematika Lanjut",
    blok: "Blok 3: Trigonometri",
    tipe: "rangkuman",
    babIndex: 3,
    babJudul: "3. Rangkuman Rumus & Konsep — Trigonometri",
    content: `# Rangkuman Rumus & Konsep — Trigonometri
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 3: Trigonometri

| Teorema / Bentuk | Rumus Utama | Syarat |
| :--- | :--- | :--- |
| **Limit Dasar Sinus** | $\\lim_{x \\to 0}\\frac{\\sin ax}{bx} = \\frac{a}{b}$ | $x \\to 0$ |
| **Limit Dasar Tangen** | $\\lim_{x \\to 0}\\frac{\\tan ax}{bx} = \\frac{a}{b}$ | $x \\to 0$ |
| **Identitas $1-\\cos kx$**| $1 - \\cos(kx) = 2\\sin^2\\left(\\frac{kx}{2}\\right)$| Manipulasi tanpa L'Hopital |
| **Selisih Akar Kuadrat**| $\\lim_{x\\to\\infty}(\\sqrt{ax^2+bx+c}-\\sqrt{ax^2+px+q}) = \\frac{b-p}{2\\sqrt{a}}$ | Koefisien $a$ harus sama |
`
  }
];
