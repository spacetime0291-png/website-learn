// ============================================================================
// GENERATOR MATERI FUNDAMENTAL MATEMATIKA LANJUT (5 Bab Materi Prasyarat)
// ============================================================================

const fundamentalChapters = [
  {
    index: 1,
    blok: "Fundamental Matematika Lanjut",
    judul: "Trigonometri Analitik Dasar",
    materi: `# Trigonometri Analitik Dasar
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

## A. Perbandingan Sisi Segitiga Siku-siku
Pada segitiga siku-siku dengan sudut acuan $\\alpha$:
$$\\sin\\alpha = \\frac{\\text{depan}}{\\text{miring}}, \\quad \\cos\\alpha = \\frac{\\text{samping}}{\\text{miring}}, \\quad \\tan\\alpha = \\frac{\\text{depan}}{\\text{samping}} = \\frac{\\sin\\alpha}{\\cos\\alpha}$$
* Kosekan: $\\csc\\alpha = \\frac{1}{\\sin\\alpha}$, Sekan: $\\sec\\alpha = \\frac{1}{\\cos\\alpha}$, Kotangen: $\\cot\\alpha = \\frac{1}{\\tan\\alpha}$.

### Sudut Istimewa Kuadran I:
* $0^\\circ$: $\\sin 0 = 0$, $\\cos 0 = 1$, $\\tan 0 = 0$
* $30^\\circ$: $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\tan 30^\\circ = \\frac{1}{3}\\sqrt{3}$
* $45^\\circ$: $\\sin 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\tan 45^\\circ = 1$
* $60^\\circ$: $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\tan 60^\\circ = \\sqrt{3}$
* $90^\\circ$: $\\sin 90^\\circ = 1$, $\\cos 90^\\circ = 0$, $\\tan 90^\\circ = \\text{tak terdefinisi}$

---

## B. Relasi Sudut di Empat Kuadran & Identitas
1. **Aturan Tanda Kuadran (ASTC - All Sin Tan Cos):**
   * Kuadran I ($0^\\circ - 90^\\circ$): Semua positif.
   * Kuadran II ($90^\\circ - 180^\\circ$): Hanya Sinus positif ($\\sin(180^\\circ - \\alpha) = \\sin\\alpha$).
   * Kuadran III ($180^\\circ - 270^\\circ$): Hanya Tangen positif ($\\tan(180^\\circ + \\alpha) = \\tan\\alpha$).
   * Kuadran IV ($270^\\circ - 360^\\circ$): Hanya Kosinus positif ($\\cos(360^\\circ - \\alpha) = \\cos\\alpha$).
2. **Identitas Pythagoras Pokok:**
   $$\\sin^2 x + \\cos^2 x = 1, \\quad 1 + \\tan^2 x = \\sec^2 x, \\quad 1 + \\cot^2 x = \\csc^2 x$$
3. **Rumus Jumlah & Selisih Sudut:**
   $$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$$
   $$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$$
4. **Rumus Sudut Rangkap:**
   $$\\sin 2x = 2 \\sin x \\cos x$$
   $$\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$$
`,
    cs: `# Variasi Contoh Soal — Trigonometri Analitik Dasar
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

### Contoh Soal 1: Menghitung Nilai dengan Sudut Rangkap
Diketahui $\\cos\\alpha = -\\frac{4}{5}$ dengan $\\alpha$ berada di kuadran II ($90^\\circ < \\alpha < 180^\\circ$). Tentukan nilai dari $\\sin 2\\alpha$ dan $\\cos 2\\alpha$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Tentukan $\\sin\\alpha$ di kuadran II (bernilai positif):
> $$\\sin\\alpha = +\\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - \\left(-\\frac{4}{5}\\right)^2} = \\sqrt{1 - \\frac{16}{25}} = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$$
>
> **Langkah 2:** Hitung $\\sin 2\\alpha$:
> $$\\sin 2\\alpha = 2 \\sin\\alpha \\cos\\alpha = 2 \\left(\\frac{3}{5}\\right) \\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$$
>
> **Langkah 3:** Hitung $\\cos 2\\alpha$:
> $$\\cos 2\\alpha = 2\\cos^2\\alpha - 1 = 2\\left(-\\frac{4}{5}\\right)^2 - 1 = 2\\left(\\frac{16}{25}\\right) - 1 = \\frac{32}{25} - \\frac{25}{25} = \\frac{7}{25}$$
>
> **Jawaban:** $\\sin 2\\alpha = -\\frac{24}{25}$ dan $\\cos 2\\alpha = \\frac{7}{25}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Trigonometri Dasar
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

* **Identitas Pokok:** $\\sin^2 x + \\cos^2 x = 1$
* **Sudut Rangkap:**
  $$\\sin 2x = 2\\sin x \\cos x$$
  $$\\cos 2x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$$
* **Jumlah/Selisih:**
  $$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$$
  $$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$$
`
  },

  {
    index: 2,
    blok: "Fundamental Matematika Lanjut",
    judul: "Aljabar Elementer",
    materi: `# Aljabar Elementer
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

## A. Manipulasi Bentuk Aljabar & Pemfaktoran
1. **Bentuk Kuadrat Sempurna:**
   $$(a + b)^2 = a^2 + 2ab + b^2, \\quad (a - b)^2 = a^2 - 2ab + b^2$$
2. **Selisih Kuadrat:**
   $$a^2 - b^2 = (a - b)(a + b)$$
3. **Selisih & Jumlah Kubik:**
   $$a^3 - b^3 = (a - b)(a^2 + ab + b^2), \\quad a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
4. **Penyederhanaan Pecahan Aljabar:**
   Faktorkan pembilang dan penyebut terlebih dahulu sebelum membagi faktor sekutu.

---

## B. Sistem Persamaan Linear (SPLDV & SPLTV)
1. **Sistem Persamaan Linear Dua Variabel (SPLDV):**
   $$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$
   * Metode penyelesaian: eliminasi, substitusi, atau aturan Cramer determinan ($x = D_x/D, y = D_y/D$).
2. **Sistem Persamaan Linear Tiga Variabel (SPLTV):**
   Diselesaikan secara sistematis dengan mengeliminasi satu variabel yang sama dari dua pasang persamaan, menghasilkan SPLDV baru.
`,
    cs: `# Variasi Contoh Soal — Aljabar Elementer
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

### Contoh Soal 1: Penyederhanaan Pecahan Aljabar
Sederhanakan bentuk aljabar $\\frac{x^2 - 9}{2x^2 + 5x - 3}$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Faktorkan pembilang:
> $$x^2 - 9 = (x - 3)(x + 3)$$
>
> **Langkah 2:** Faktorkan penyebut $2x^2 + 5x - 3$:
> Cari dua bilangan yang hasil kalinya $(2)(-3) = -6$ dan jumlahnya $+5$, yaitu $+6$ dan $-1$:
> $$2x^2 + 6x - x - 3 = 2x(x + 3) - 1(x + 3) = (2x - 1)(x + 3)$$
>
> **Langkah 3:** Bagi faktor sekutu $(x + 3)$:
> $$\\frac{(x - 3)(x + 3)}{(2x - 1)(x + 3)} = \\frac{x - 3}{2x - 1} \\quad (x \\ne -3)$$
>
> **Jawaban:** Bentuk sederhananya adalah $\\frac{x - 3}{2x - 1}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Aljabar Elementer
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

* **Selisih Kuadrat:** $a^2 - b^2 = (a - b)(a + b)$
* **Kuadrat Binomial:** $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$
* **SPLDV Cramer:** $x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}$
`
  },

  {
    index: 3,
    blok: "Fundamental Matematika Lanjut",
    judul: "Geometri Analitik Bidang",
    materi: `# Geometri Analitik Bidang
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

## A. Koordinat Kartesius dan Persamaan Garis Lurus
1. **Jarak Antara Dua Titik $A(x_1, y_1)$ dan $B(x_2, y_2)$:**
   $$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
2. **Titik Tengah Ruas Garis $AB$:**
   $$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$
3. **Gradien Kemiringan Garis ($m$):**
   $$m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$
4. **Persamaan Garis Lurus:**
   * Melalui satu titik $(x_1, y_1)$ dengan gradien $m$: $y - y_1 = m(x - x_1)$
   * Bentuk gradien-intersep: $y = mx + c$
   * Bentuk baku umum: $Ax + By + C = 0 \\implies m = -\\frac{A}{B}$

---

## B. Hubungan Garis dan Jarak Titik ke Garis
1. **Hubungan Dua Garis:**
   * Garis sejajar ($g_1 \\parallel g_2$): $m_1 = m_2$
   * Garis tegak lurus ($g_1 \\perp g_2$): $m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$
2. **Jarak Titik $P(x_0, y_0)$ ke Garis $Ax + By + C = 0$:**
   $$d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$$
`,
    cs: `# Variasi Contoh Soal — Geometri Analitik Bidang
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

### Contoh Soal 1: Jarak Titik ke Garis Lurus
Tentukan jarak tegak lurus dari titik $P(2, -3)$ ke garis lurus $3x - 4y + 7 = 0$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Identifikasi koefisien:
> $A = 3, B = -4, C = 7, x_0 = 2, y_0 = -3$.
>
> **Langkah 2:** Masukkan ke rumus jarak tegak lurus:
> $$d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|3(2) + (-4)(-3) + 7|}{\\sqrt{3^2 + (-4)^2}}$$
> $$d = \\frac{|6 + 12 + 7|}{\\sqrt{9 + 16}} = \\frac{|25|}{\\sqrt{25}} = \\frac{25}{5} = 5\\text{ satuan}$$
>
> **Jawaban:** Jaraknya adalah $5\\text{ satuan}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Geometri Analitik
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

* **Jarak 2 Titik:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
* **Gradien Garis:** $m = \\frac{y_2 - y_1}{x_2 - x_1} = -\\frac{A}{B}$
* **Garis Sejajar:** $m_1 = m_2$
* **Garis Tegak Lurus:** $m_1 \\cdot m_2 = -1$
* **Jarak Titik ke Garis:** $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$
`
  },

  {
    index: 4,
    blok: "Fundamental Matematika Lanjut",
    judul: "Pertidaksamaan dan Nilai Mutlak",
    materi: `# Pertidaksamaan dan Nilai Mutlak
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

## A. Pertidaksamaan Rasional dan Bentuk Akar
1. **Syarat Terdefinisi (Eksistensi):**
   * Pecahan $\\frac{P(x)}{Q(x)}$: Penyebut $Q(x) \\ne 0$.
   * Bentuk akar $\\sqrt{f(x)}$: Radikan $f(x) \\ge 0$.
2. **Pertidaksamaan Kuadrat & Pecahan:**
   * Jadikan salah satu ruas sama dengan nol.
   * Tentukan titik pembuat nol (akar-akar pembilang dan penyebut).
   * Gambar garis bilangan, uji tanda selang $(+)$ atau $(-)$.
   * Jangan mengalikan silang pertidaksamaan dengan variabel jika tanda variabel belum pasti positif!

---

## B. Persamaan dan Pertidaksamaan Nilai Mutlak
1. **Definisi Nilai Mutlak:**
   $$|x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}$$
   * Sifat: $|x| = \\sqrt{x^2}$, $|-x| = |x|$, $|xy| = |x||y|$, $\\left|\\frac{x}{y}\\right| = \\frac{|x|}{|y|}$.
2. **Persamaan Nilai Mutlak:**
   $$|f(x)| = c \\quad (c \\ge 0) \\implies f(x) = c \\text{ atau } f(x) = -c$$
3. **Pertidaksamaan Nilai Mutlak:**
   * Untuk $c > 0$:
     $$|f(x)| < c \\iff -c < f(x) < c$$
     $$|f(x)| > c \\iff f(x) < -c \\quad \\text{atau} \\quad f(x) > c$$
   * Antar nilai mutlak:
     $$|f(x)| \\le |g(x)| \\iff [f(x)]^2 \\le [g(x)]^2 \\iff (f(x) - g(x))(f(x) + g(x)) \\le 0$$
`,
    cs: `# Variasi Contoh Soal — Pertidaksamaan & Nilai Mutlak
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

### Contoh Soal 1: Pertidaksamaan Nilai Mutlak
Tentukan himpunan penyelesaian dari pertidaksamaan $|2x - 5| < 7$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Gunakan sifat $|f(x)| < c \\iff -c < f(x) < c$:
> $$-7 < 2x - 5 < 7$$
>
> **Langkah 2:** Tambahkan $5$ pada ketiga ruas:
> $$-7 + 5 < 2x < 7 + 5 \\implies -2 < 2x < 12$$
>
> **Langkah 3:** Bagi kedua ruas dengan $2$:
> $$-1 < x < 6$$
>
> **Jawaban:** $HP = \\{x \\in \\mathbb{R} \\mid -1 < x < 6\\}$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Nilai Mutlak
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

* **Definisi:** $|x| = \\sqrt{x^2} \\ge 0$
* **Sifat Kurang Dari:** $|f(x)| < c \\iff -c < f(x) < c$
* **Sifat Lebih Dari:** $|f(x)| > c \\iff f(x) < -c \\text{ atau } f(x) > c$
* **Dua Sisi Mutlak:** $|f| \\le |g| \\iff (f - g)(f + g) \\le 0$
`
  },

  {
    index: 5,
    blok: "Fundamental Matematika Lanjut",
    judul: "Eksponen dan Logaritma",
    materi: `# Eksponen dan Logaritma
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

## A. Sifat-Sifat Operasi Eksponen
Untuk $a, b > 0$ dan $m, n \\in \\mathbb{R}$:
1. $a^m \\cdot a^n = a^{m+n}$
2. $\\frac{a^m}{a^n} = a^{m-n}$
3. $(a^m)^n = a^{mn}$
4. $(a \\cdot b)^n = a^n \\cdot b^n, \\quad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$
5. $a^0 = 1 \\quad (a \\ne 0)$
6. $a^{-n} = \\frac{1}{a^n}$
7. Bentuk Akar: $a^{m/n} = \\sqrt[n]{a^m}$

---

## B. Sifat-Sifat Logaritma
Definisi: \${}^a\\log b = c \\iff a^c = b$ (Basis $a > 0, a \\ne 1$, Numerus $b > 0$).
1. \${}^a\\log(x \\cdot y) = {}^a\\log x + {}^a\\log y$
2. \${}^a\\log\\left(\\frac{x}{y}\\right) = {}^a\\log x - {}^a\\log y$
3. \${}^a\\log(b^n) = n \\cdot {}^a\\log b$
4. \${}^{a^m}\\log(b^n) = \\frac{n}{m} \\cdot {}^a\\log b$
5. Pergantian Basis: \${}^a\\log b = \\frac{{}^c\\log b}{{{}^c\\log a}} = \\frac{1}{{{}^b\\log a}}$
6. Perkalian Berantai: \${}^a\\log b \\cdot {}^b\\log c = {}^a\\log c$
7. Pemangkatan Identitas: $a^{{}^a\\log b} = b$

---

## C. Persamaan Eksponen & Logaritma Sederhana
* $a^{f(x)} = a^{g(x)} \\implies f(x) = g(x)$
* \${}^a\\log f(x) = {}^a\\log g(x) \\implies f(x) = g(x)$ (dengan syarat numerus $f(x) > 0$ dan $g(x) > 0$).
`,
    cs: `# Variasi Contoh Soal — Eksponen dan Logaritma
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

### Contoh Soal 1: Persamaan Logaritma
Tentukan nilai $x$ yang memenuhi persamaan \${}^2\\log(x^2 - 3x) = 2$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Ubah ruas kanan menjadi bentuk logaritma basis 2:
> $$2 = {}^2\\log(2^2) = {}^2\\log 4$$
>
> **Langkah 2:** Samakan numerus:
> $$x^2 - 3x = 4 \\implies x^2 - 3x - 4 = 0$$
> $$(x - 4)(x + 1) = 0 \\implies x = 4 \\quad \\text{atau} \\quad x = -1$$
>
> **Langkah 3:** Uji syarat numerus ($x^2 - 3x > 0$):
> * Untuk $x = 4$: $4^2 - 3(4) = 16 - 12 = 4 > 0$ (Memenuhi)
> * Untuk $x = -1$: $(-1)^2 - 3(-1) = 1 + 3 = 4 > 0$ (Memenuhi)
>
> **Jawaban:** Nilai $x$ yang memenuhi adalah $x = -1$ atau $x = 4$.
`,
    rangkuman: `# Rangkuman Rumus Cepat — Eksponen & Logaritma
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Fundamental Matematika Lanjut

* **Perkalian Pangkat:** $a^m \\cdot a^n = a^{m+n}$
* **Pembagian Pangkat:** $a^m / a^n = a^{m-n}$
* **Definisi Logaritma:** \${}^a\\log b = c \\iff a^c = b$
* **Sifat Penjumlahan:** \${}^a\\log x + {}^a\\log y = {}^a\\log(xy)$
* **Pangkat Numerus/Basis:** \${}^{a^m}\\log(b^n) = \\frac{n}{m} {}^a\\log b$
* **Perkalian Rantai:** \${}^a\\log b \\cdot {}^b\\log c = {}^a\\log c$
* **Identitas Pangkat:** $a^{{}^a\\log b} = b$
`
  }
];

console.log('Fundamental chapters defined:', fundamentalChapters.length);
module.exports = fundamentalChapters;
