// ============================================================================
// GENERATOR MATERI MATEMATIKA LANJUT (7 Bab) & FUNDAMENTAL MATEMATIKA (5 Bab)
// ============================================================================

const matematikaLanjutChapters = [
  // Pembungkus 1: Aljabar
  {
    index: 1,
    blok: "Aljabar",
    judul: "Matriks",
    materi: `# Matriks
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

## A. Operasi Matriks dan Sifat-sifatnya
1. **Penjumlahan & Pengurangan:**
   Hanya dapat dilakukan pada matriks berordo sama dengan menjumlahkan/mengurangkan elemen yang seletak:
   $$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\pm \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} a \\pm e & b \\pm f \\\\ c \\pm g & d \\pm h \\end{pmatrix}$$
2. **Perkalian Matriks dengan Skalar:**
   $$k \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix}$$
3. **Perkalian Antarmatriks:**
   Dua matriks dapat dikalikan jika banyak kolom matriks pertama sama dengan banyak baris matriks kedua ($A_{m \\times p} \\times B_{p \\times n} = C_{m \\times n}$):
   $$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} ae + bg & af + bh \\\\ ce + dg & cf + dh \\end{pmatrix}$$
   > Perkalian matriks **tidak komutatif** ($AB \\ne BA$). Berlaku sifat asosiatif $A(BC) = (AB)C$ dan distributif $A(B + C) = AB + AC$.

---

## B. Determinan dan Invers Matriks
1. **Determinan Matriks Ordo $2\\times2$:**
   $$\\det(A) = |A| = ad - bc$$
2. **Determinan Matriks Ordo $3\\times3$ (Metode Sarrus):**
   $$|A| = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}$$
   * Sifat: $\\det(AB) = \\det(A) \\cdot \\det(B)$, $\\det(A^T) = \\det(A)$, $\\det(A^{-1}) = \\frac{1}{\\det(A)}$, $\\det(kA_{n\\times n}) = k^n \\det(A)$.
3. **Invers Matriks Ordo $2\\times2$:**
   $$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\quad (ad - bc \\ne 0)$$
   * Jika $\\det(A) = 0$, matriks disebut **matriks singular** dan tidak memiliki invers.
4. **Penyelesaian Persamaan Matriks:**
   * $A \\cdot X = B \\implies X = A^{-1} \\cdot B$
   * $X \\cdot A = B \\implies X = B \\cdot A^{-1}$
`,
    cs: `# Variasi Contoh Soal — Matriks
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

### Contoh Soal 1: Invers dan Persamaan Matriks
Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 7 & 4 \\\\ 11 & 6 \\end{pmatrix}$. Tentukan matriks $X$ yang memenuhi $A \\cdot X = B$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung determinan matriks $A$:
> $$\\det(A) = (3)(2) - (1)(5) = 6 - 5 = 1$$
>
> **Langkah 2:** Tentukan invers matriks $A$:
> $$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$$
>
> **Langkah 3:** Hitung $X = A^{-1} \\cdot B$:
> $$X = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} \\begin{pmatrix} 7 & 4 \\\\ 11 & 6 \\end{pmatrix}$$
> $$X = \\begin{pmatrix} 2(7) + (-1)(11) & 2(4) + (-1)(6) \\\\ (-5)(7) + 3(11) & (-5)(4) + 3(6) \\end{pmatrix} = \\begin{pmatrix} 14 - 11 & 8 - 6 \\\\ -35 + 33 & -20 + 18 \\end{pmatrix} = \\begin{pmatrix} 3 & 2 \\\\ -2 & -2 \\end{pmatrix}$$
>
> **Jawaban:** $X = \\begin{pmatrix} 3 & 2 \\\\ -2 & -2 \\end{pmatrix}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Matriks
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

* **Perkalian:** $AB \\ne BA$ (Tidak komutatif)
* **Determinan 2x2:** $|A| = ad - bc$
* **Invers 2x2:** $A^{-1} = \\frac{1}{|A|} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$
* **Sifat Determinan:** $|AB| = |A| |B|, \\quad |A^{-1}| = \\frac{1}{|A|}, \\quad |kA_{n\\times n}| = k^n |A|$
* **Solusi Persamaan:** $AX = B \\implies X = A^{-1}B$; $XA = B \\implies X = BA^{-1}$
`
  },

  {
    index: 2,
    blok: "Aljabar",
    judul: "Polinomial (Suku Banyak)",
    materi: `# Polinomial (Suku Banyak)
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

## A. Konsep Dasar & Operasi Polinomial
Bentuk umum polinomial derajat $n$ satu variabel $x$:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 \\quad (a_n \\ne 0)$$
1. **Derajat Polinomial:** Pangkat tertinggi dari variabel $x$.
2. **Operasi Aljabar:** Penjumlahan, pengurangan, dan perkalian suku sejenis (orde $\\le 4$).
3. **Algoritma Pembagian Polinomial:**
   $$\\text{Yang Dibagi} = (\\text{Pembagi} \\times \\text{Hasil Bagi}) + \\text{Sisa}$$
   $$P(x) = Q(x) \\cdot H(x) + S(x)$$
   * Jika pembagi berderajat $k$, derajat sisa maksimum adalah $(k - 1)$.
   * Pembagian dapat diselesaikan dengan **cara bersusun panjang** atau **skema Horner**.

---

## B. Teorema Sisa dan Teorema Faktor
1. **Teorema Sisa:**
   * Jika $P(x)$ dibagi $(x - k)$, sisanya adalah $S = P(k)$.
   * Jika $P(x)$ dibagi $(ax + b)$, sisanya adalah $S = P\\left(-\\frac{b}{a}\\right)$.
   * Jika $P(x)$ dibagi $(x - a)(x - b)$, sisanya berbentuk linear $S(x) = px + q$, dengan:
     $$P(a) = pa + q, \\quad P(b) = pb + q$$
2. **Teorema Faktor:**
   Bentuk $(x - k)$ merupakan faktor dari $P(x)$ jika dan hanya jika $P(k) = 0$ (sisa pembagian nol).
3. **Hubungan Akar-Akar Polinomial (Teorema Vieta untuk Kubik $ax^3 + bx^2 + cx + d = 0$):**
   * $x_1 + x_2 + x_3 = -\\frac{b}{a}$
   * $x_1 x_2 + x_1 x_3 + x_2 x_3 = \\frac{c}{a}$
   * $x_1 x_2 x_3 = -\\frac{d}{a}$
`,
    cs: `# Variasi Contoh Soal — Polinomial
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

### Contoh Soal 1: Teorema Sisa Pembagi Derajat Dua
Suku banyak $P(x)$ jika dibagi $(x - 1)$ bersisa $5$, dan jika dibagi $(x + 2)$ bersisa $-4$. Tentukan sisa pembagian $P(x)$ oleh $(x^2 + x - 2)$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Faktorkan pembagi:
> $$x^2 + x - 2 = (x - 1)(x + 2)$$
> Karena pembagi berderajat 2, sisa pembagian berbentuk $S(x) = ax + b$.
>
> **Langkah 2:** Terapkan Teorema Sisa:
> * Dibagi $(x - 1)$ bersisa $5 \\implies P(1) = 5 \\implies a(1) + b = 5 \\implies a + b = 5$
> * Dibagi $(x + 2)$ bersisa $-4 \\implies P(-2) = -4 \\implies a(-2) + b = -4 \\implies -2a + b = -4$
>
> **Langkah 3:** Eliminasi sistem persamaan:
> $$(a + b) - (-2a + b) = 5 - (-4) \\implies 3a = 9 \\implies a = 3$$
> $$3 + b = 5 \\implies b = 2$$
>
> **Jawaban:** Sisa pembagiannya adalah $S(x) = 3x + 2$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Polinomial
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

* **Pembagian:** $P(x) = Q(x) H(x) + S(x)$
* **Teorema Sisa:** Sisa bagi $(x - k)$ adalah $P(k)$
* **Teorema Faktor:** $(x - k)$ faktor $\\iff P(k) = 0$
* **Sisa Derajat 2:** $S(x) = px + q$
* **Teorema Vieta (Derajat 3):**
  $$\\Sigma x_i = -\\frac{b}{a}, \\quad \\Sigma x_i x_j = \\frac{c}{a}, \\quad x_1 x_2 x_3 = -\\frac{d}{a}$$
`
  },

  {
    index: 3,
    blok: "Aljabar",
    judul: "Fungsi dan Pemodelan",
    materi: `# Fungsi dan Pemodelan
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

## A. Domain, Kodomain, dan Range
Fungsi $f: A \\to B$ memetakan setiap elemen himpunan domain $A$ ke tepat satu elemen himpunan kodomain $B$.
1. **Domain Alami ($D_f$):**
   * Fungsi Pecahan $f(x) = \\frac{P(x)}{Q(x)}$: Syarat $Q(x) \\ne 0$.
   * Fungsi Bentuk Akar $f(x) = \\sqrt{g(x)}$: Syarat $g(x) \\ge 0$.
   * Fungsi Logaritma $f(x) = \\log_a g(x)$: Syarat numerus $g(x) > 0$ dan basis $a > 0, a \\ne 1$.

---

## B. Karakteristik Ragam Fungsi
1. **Fungsi Polinomial:** Kontinu di seluruh $\\mathbb{R}$. Derajat 1 berupa garis lurus, derajat 2 berupa parabola ($x_p = -\\frac{b}{2a}, y_p = -\\frac{D}{4a}$), derajat 3 memiliki maksimal 2 titik stasioner.
2. **Fungsi Rasional:**
   $$f(x) = \\frac{ax + b}{cx + d}$$
   * Asimtot tegak: $x = -\\frac{d}{c}$
   * Asimtot datar: $y = \\frac{a}{c}$
   * Invers fungsi rasional: $f^{-1}(x) = \\frac{-dx + b}{cx - a}$
3. **Fungsi Eksponensial & Logaritma:**
   * $f(x) = a^x$ (selalu positif $> 0$, memotong sumbu-y di $(0,1)$).
   * $f(x) = \\log_a x$ merupakan invers dari fungsi eksponensial (memotong sumbu-x di $(1,0)$).
4. **Fungsi Nilai Mutlak:** $f(x) = |x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}$, grafiknya berbentuk huruf "V".
5. **Fungsi Trigonometri:** Periodik, misal $f(x) = A \\sin(Bx + C) + D$ memiliki amplitudo $|A|$ dan periode $T = \\frac{2\\pi}{|B|}$.
`,
    cs: `# Variasi Contoh Soal — Fungsi dan Pemodelan
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

### Contoh Soal 1: Menentukan Domain Fungsi Campuran
Tentukan domain alami dari fungsi $f(x) = \\frac{\\sqrt{2x + 6}}{x^2 - 4x + 3}$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Syarat bentuk akar pembilang:
> $$2x + 6 \\ge 0 \\implies 2x \\ge -6 \\implies x \\ge -3$$
>
> **Langkah 2:** Syarat penyebut tidak sama dengan nol:
> $$x^2 - 4x + 3 \\ne 0 \\implies (x - 1)(x - 3) \\ne 0 \\implies x \\ne 1 \\text{ dan } x \\ne 3$$
>
> **Langkah 3:** Gabungkan kedua syarat:
> $$D_f = \\{x \\in \\mathbb{R} \\mid x \\ge -3, x \\ne 1, x \\ne 3\\}$$
>
> **Jawaban:** $D_f = [-3, 1) \\cup (1, 3) \\cup (3, \\infty)$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Ragam Fungsi
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

* **Syarat Pecahan:** Penyebut $\\ne 0$
* **Syarat Akar Genap:** Di bawah tanda akar $\\ge 0$
* **Syarat Logaritma:** Numerus $> 0$
* **Invers Rasional:** $f(x) = \\frac{ax+b}{cx+d} \\implies f^{-1}(x) = \\frac{-dx+b}{cx-a}$
* **Periode Sinus/Kosinus:** $T = \\frac{2\\pi}{|B|}$
`
  },

  // Pembungkus 2: Geometri dan Pengukuran
  {
    index: 4,
    blok: "Geometri dan Pengukuran",
    judul: "Vektor pada Bidang dan Ruang",
    materi: `# Vektor pada Bidang dan Ruang
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

## A. Komponen dan Operasi Vektor
1. **Representasi Vektor:**
   * Di bidang $\\mathbb{R}^2$: $\\vec{u} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} = x\\hat{i} + y\\hat{j}$
   * Di ruang $\\mathbb{R}^3$: $\\vec{u} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = x\\hat{i} + y\\hat{j} + z\\hat{k}$
2. **Panjang (Modulus) Vektor:**
   $$|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$$
   * Vektor satuan: $\\hat{u} = \\frac{\\vec{u}}{|\\vec{u}|}$ (memiliki panjang 1 satuan).
3. **Operasi Aljabar:**
   $$\\vec{u} \\pm \\vec{v} = (u_x \\pm v_x)\\hat{i} + (u_y \\pm v_y)\\hat{j} + (u_z \\pm v_z)\\hat{k}$$

---

## B. Perkalian Skalar (Dot Product) & Proyeksi
1. **Perkalian Titik (Dot Product):**
   $$\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y + u_z v_z = |\\vec{u}| |\\vec{v}| \\cos\\theta$$
   * Jika $\\vec{u} \\perp \\vec{v}$ (tegak lurus), maka $\\theta = 90^\\circ \\implies \\vec{u} \\cdot \\vec{v} = 0$.
   * Sudut antara dua vektor:
     $$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|}$$
2. **Proyeksi Ortogonal Vektor $\\vec{u}$ pada $\\vec{v}$:**
   * **Panjang Proyeksi Skalar:**
     $$|\\vec{p}| = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|}$$
   * **Vektor Proyeksi:**
     $$\\vec{p} = \\left(\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2}\\right) \\vec{v}$$
`,
    cs: `# Variasi Contoh Soal — Vektor
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

### Contoh Soal 1: Dua Vektor Saling Tegak Lurus
Diketahui vektor $\\vec{a} = 2\\hat{i} - 4\\hat{j} + 3\\hat{k}$ dan $\\vec{b} = x\\hat{i} + 2\\hat{j} + 4\\hat{k}$. Jika vektor $\\vec{a}$ dan $\\vec{b}$ saling tegak lurus, tentukan nilai $x$ dan panjang vektor $\\vec{b}$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Syarat tegak lurus: $\\vec{a} \\cdot \\vec{b} = 0$:
> $$(2)(x) + (-4)(2) + (3)(4) = 0$$
> $$2x - 8 + 12 = 0 \\implies 2x + 4 = 0 \\implies 2x = -4 \\implies x = -2$$
>
> **Langkah 2:** Hitung panjang vektor $\\vec{b} = -2\\hat{i} + 2\\hat{j} + 4\\hat{k}$:
> $$|\\vec{b}| = \\sqrt{(-2)^2 + 2^2 + 4^2} = \\sqrt{4 + 4 + 16} = \\sqrt{24} = 2\\sqrt{6}$$
>
> **Jawaban:** $x = -2$ dan $|\\vec{b}| = 2\\sqrt{6}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Vektor
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

* **Panjang Vektor:** $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$
* **Dot Product:** $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y + u_z v_z = |\\vec{u}| |\\vec{v}| \\cos\\theta$
* **Syarat Tegak Lurus:** $\\vec{u} \\cdot \\vec{v} = 0$
* **Panjang Proyeksi $\\vec{u}$ pada $\\vec{v}$:** $|\\vec{p}| = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|}$
* **Vektor Proyeksi $\\vec{u}$ pada $\\vec{v}$:** $\\vec{p} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\vec{v}$
`
  },

  {
    index: 5,
    blok: "Geometri dan Pengukuran",
    judul: "Lingkaran",
    materi: `# Lingkaran
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

## A. Persamaan Lingkaran
1. **Pusat $(0,0)$ dan Jari-Jari $r$:**
   $$x^2 + y^2 = r^2$$
2. **Pusat $(a,b)$ dan Jari-Jari $r$:**
   $$(x - a)^2 + (y - b)^2 = r^2$$
3. **Bentuk Umum Persamaan Lingkaran:**
   $$x^2 + y^2 + Ax + By + C = 0$$
   * Titik Pusat: $P\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$
   * Jari-jari: $r = \\sqrt{\\left(\\frac{A}{2}\\right)^2 + \\left(\\frac{B}{2}\\right)^2 - C}$

---

## B. Persamaan Garis Singgung Lingkaran (PGSL)
1. **Melalui Titik $(x_1, y_1)$ pada Lingkaran:**
   * Untuk $x^2 + y^2 = r^2$: $x_1 x + y_1 y = r^2$
   * Untuk $(x - a)^2 + (y - b)^2 = r^2$:
     $$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$
2. **Dengan Gradien $m$ Tertentu:**
   $$y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$$
3. **Unsur-Unsur Geometri Busur dan Juring:**
   * Keliling $= 2\\pi r$, Luas Lingkaran $= \\pi r^2$
   * Panjang Busur: $s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$
   * Luas Juring: $L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$
   * Luas Tembereng: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\Delta}$
`,
    cs: `# Variasi Contoh Soal — Lingkaran
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

### Contoh Soal 1: Garis Singgung dengan Gradien Tertentu
Tentukan persamaan garis singgung pada lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ yang tegak lurus dengan garis $3x - 4y + 7 = 0$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Tentukan pusat dan jari-jari lingkaran:
> * Pusat: $P(-(-4)/2, -(6)/2) = (2, -3)$
> * $r = \\sqrt{2^2 + (-3)^2 - (-12)} = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$
>
> **Langkah 2:** Tentukan gradien garis singgung:
> Garis $3x - 4y + 7 = 0 \\implies m_1 = \\frac{3}{4}$.
> Karena tegak lurus ($m_1 \\cdot m_2 = -1$), maka $m_2 = -\\frac{4}{3}$.
>
> **Langkah 3:** Rumus PGSL dengan gradien:
> $$y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$$
> $$y - (-3) = -\\frac{4}{3}(x - 2) \\pm 5\\sqrt{1 + \\left(-\\frac{4}{3}\\right)^2}$$
> $$y + 3 = -\\frac{4}{3}(x - 2) \\pm 5\\sqrt{\\frac{25}{9}} = -\\frac{4}{3}(x - 2) \\pm 5\\left(\\frac{5}{3}\\right) = -\\frac{4}{3}(x - 2) \\pm \\frac{25}{3}$$
> Kalikan kedua ruas dengan 3:
> $$3y + 9 = -4(x - 2) \\pm 25 \\implies 3y + 9 = -4x + 8 \\pm 25$$
> $$4x + 3y + 1 \\pm 25 = 0$$
> Diperoleh dua garis: $4x + 3y + 26 = 0$ atau $4x + 3y - 24 = 0$.
>
> **Jawaban:** $4x + 3y + 26 = 0$ dan $4x + 3y - 24 = 0$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Lingkaran
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

* **Pusat & Jari-jari Umum:** $P\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right), \\quad r = \\sqrt{\\frac{A^2}{4} + \\frac{B^2}{4} - C}$
* **Bagi Adil Titik Singgung:** $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$
* **PGS Gradien $m$:** $y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$
* **Panjang Busur:** $s = \\frac{\\theta}{360^\\circ} 2\\pi r$
* **Luas Juring:** $L = \\frac{\\theta}{360^\\circ} \\pi r^2$
`
  },

  {
    index: 6,
    blok: "Geometri dan Pengukuran",
    judul: "Transformasi Geometri",
    materi: `# Transformasi Geometri
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

## A. Jenis-Jenis Transformasi Dasar
1. **Translasi (Pergeseran) $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$:**
   $$x' = x + a, \\quad y' = y + b$$
2. **Refleksi (Pencerminan):**
   * Sumbu-$x$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
   * Sumbu-$y$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
   * Garis $y = x$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
   * Garis $y = -x$: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
   * Garis $x = h$: $x' = 2h - x, y' = y$; Garis $y = k$: $x' = x, y' = 2k - y$.
3. **Rotasi $[P(a,b), \\theta]$:**
   $$\\begin{pmatrix} x' - a \\\\ y' - b \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix}$$
4. **Dilatasi $[P(a,b), k]$:**
   $$\\begin{pmatrix} x' - a \\\\ y' - b \\end{pmatrix} = \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix}$$

---

## B. Komposisi Transformasi dengan Matriks
Jika transformasi $T_1$ bersesuaian dengan matriks $M_1$ dan $T_2$ bersesuaian dengan matriks $M_2$, maka komposisi transformasi $T_2 \\circ T_1$ (dilakukan $T_1$ dulu kemudian $T_2$) bersesuaian dengan perkalian matriks:
$$M_{\\text{gabungan}} = M_2 \\cdot M_1$$
$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = M_2 \\cdot M_1 \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$
`,
    cs: `# Variasi Contoh Soal — Transformasi Geometri
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

### Contoh Soal 1: Komposisi Transformasi Garis
Tentukan bayangan garis $2x - 3y + 6 = 0$ setelah dicerminkan terhadap sumbu-$x$, kemudian dilanjutkan dengan rotasi $90^\\circ$ berlawanan arah jarum jam terhadap pusat $(0,0)$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Tentukan matriks transformasi:
> * Refleksi sumbu-$x$: $M_1 = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$
> * Rotasi $90^\\circ$: $M_2 = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$
>
> **Langkah 2:** Hitung matriks komposisi $M = M_2 \\cdot M_1$:
> $$M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$
>
> **Langkah 3:** Hubungan koordinat baru:
> $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} y \\\\ x \\end{pmatrix} \\implies x' = y \\implies y = x', \\quad y' = x \\implies x = y'$$
>
> **Langkah 4:** Substitusi ke persamaan garis awal:
> $$2x - 3y + 6 = 0 \\implies 2(y') - 3(x') + 6 = 0 \\implies -3x' + 2y' + 6 = 0 \\implies 3x - 2y - 6 = 0$$
>
> **Jawaban:** Bayangan garis adalah $3x - 2y - 6 = 0$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Transformasi
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

| Transformasi | Matriks Terkait |
| :--- | :--- |
| **Refleksi Sumbu-x** | $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ |
| **Refleksi Sumbu-y** | $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ |
| **Refleksi $y = x$** | $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ |
| **Rotasi Pusat $(0,0)$ Sudut $\\theta$** | $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ |
| **Dilatasi Pusat $(0,0)$ Faktor $k$** | $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$ |
| **Komposisi $T_2 \\circ T_1$** | $M = M_2 \\cdot M_1$ |
`
  },

  // Pembungkus 3: Trigonometri
  {
    index: 7,
    blok: "Trigonometri",
    judul: "Limit Fungsi (Aljabar dan Trigonometri)",
    materi: `# Limit Fungsi (Aljabar dan Trigonometri)
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Trigonometri

## A. Limit Fungsi Aljabar (Bentuk Tak Tentu $\\frac{0}{0}$)
Ketika substitusi langsung menghasilkan nilai tak tentu $\\frac{0}{0}$, penyelesaian dilakukan tanpa aturan L'Hôpital dengan metode:
1. **Metode Pemfaktoran:**
   Faktorkan pembuat nol $(x - c)$ dari pembilang dan penyebut:
   $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$$
2. **Metode Merasionalkan Bentuk Akar:**
   Kalikan pembilang dan penyebut dengan bentuk sekawan:
   $$\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2} = \\lim_{x \\to 4} \\frac{(x - 4)(\\sqrt{x} + 2)}{(\\sqrt{x} - 2)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{(x - 4)(\\sqrt{x} + 2)}{x - 4} = 4$$

---

## B. Limit Fungsi Trigonometri
1. **Teorema Limit Trigonometri Dasar ($x \\to 0$):**
   $$\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\sin ax}{\\tan bx} = \\frac{a}{b}$$
2. **Manipulasi Identitas Trigonometri Penting:**
   * Kosinus menjadi Sinus:
     $$1 - \\cos ax = 2\\sin^2\\left(\\frac{ax}{2}\\right)$$
     Sehingga: $\\lim_{x \\to 0} \\frac{1 - \\cos ax}{x^2} = \\lim_{x \\to 0} \\frac{2\\sin^2(ax/2)}{x^2} = 2 \\left(\\frac{a}{2}\\right)^2 = \\frac{a^2}{2}$
   * Selisih Kosinus:
     $$\\cos A - \\cos B = -2 \\sin\\left(\\frac{A+B}{2}\\right) \\sin\\left(\\frac{A-B}{2}\\right)$$
`,
    cs: `# Variasi Contoh Soal — Limit Fungsi
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Trigonometri

### Contoh Soal 1: Limit Trigonometri dengan Identitas Kosinus
Tentukan nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\tan 2x}$ tanpa menggunakan aturan L'Hôpital!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Ubah bentuk $(1 - \\cos 4x)$ menggunakan identitas sudut rangkap:
> $$1 - \\cos 4x = 2\\sin^2 2x$$
>
> **Langkah 2:** Substitusikan ke limit:
> $$\\lim_{x \\to 0} \\frac{2\\sin^2 2x}{x \\tan 2x} = 2 \\lim_{x \\to 0} \\left(\\frac{\\sin 2x}{x} \\cdot \\frac{\\sin 2x}{\\tan 2x}\\right)$$
>
> **Langkah 3:** Gunakan teorema limit trigonometri:
> $$= 2 \\cdot \\left(\\frac{2}{1}\\right) \\cdot \\left(\\frac{2}{2}\\right) = 2 \\cdot 2 \\cdot 1 = 4$$
>
> **Jawaban:** Nilai limit adalah $4$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Limit Fungsi
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Trigonometri

* **Trigonometri Dasar:** $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}$
* **Trik Cepat Kosinus:**
  $$\\lim_{x \\to 0} \\frac{1 - \\cos ax}{x^2} = \\frac{a^2}{2}$$
  $$\\lim_{x \\to 0} \\frac{\\cos ax - \\cos bx}{x^2} = -\\frac{a^2 - b^2}{2}$$
* **Aljabar Tak Tentu $\\frac{0}{0}$:** Faktorkan pembuat nol atau kalikan sekawan akar.
`
  }
];

console.log('Matematika Lanjut chapters defined:', matematikaLanjutChapters.length);
module.exports = matematikaLanjutChapters;
