# Bab 4: Nilai Mutlak dan Pertidaksamaan
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar dan Persamaan

## Bab 4: Nilai Mutlak dan Pertidaksamaan

---

### A. Konsep dan Sifat-Sifat Nilai Mutlak
Secara geometris pada garis bilangan real, nilai mutlak $|x|$ merepresentasikan jarak non-negatif antara bilangan $x$ ke titik asal (nol), tanpa memedulikan arahnya.

#### 1. Definisi Aljabar Nilai Mutlak:
$$|x| = \begin{cases} x, & \text{jika } x \ge 0 \\ -x, & \text{jika } x < 0 \end{cases}$$
*Untuk bentuk aljabar fungsi $f(x)$:
$$|f(x)| = \begin{cases} f(x), & \text{jika } f(x) \ge 0 \\ -f(x), & \text{jika } f(x) < 0 \end{cases}$$

#### 2. Sifat-Sifat Aljabar Fundamental:
1. **Selalu Non-Negatif:** $|x| \ge 0$ untuk setiap $x \in \mathbb{R}$.
2. **Simetri Negatif:** $|-x| = |x|$.
3. **Hubungan Kuadrat dan Bentuk Akar:**
   $$|x|^2 = x^2 \quad \text{dan} \quad \sqrt{x^2} = |x|$$
4. **Perkalian dan Pembagian:**
   $$|x \cdot y| = |x| \cdot |y| \quad \text{dan} \quad \left|\frac{x}{y}\right| = \frac{|x|}{|y|} \quad (y \neq 0)$$
5. **Ketaksamaan Segitiga (*Triangle Inequality*):**
   $$|x + y| \le |x| + |y| \quad \text{dan} \quad |x - y| \ge ||x| - |y||$$

---

### B. Persamaan Nilai Mutlak

#### 1. Bentuk $|f(x)| = c$ dengan $c$ Konstan:
* Jika $c > 0$: $f(x) = c$ atau $f(x) = -c$.
* Jika $c = 0$: $f(x) = 0$.
* Jika $c < 0$: **Tidak ada penyelesaian** ($\text{HP} = \emptyset$), karena nilai mutlak tidak mungkin bernilai negatif!

#### 2. Bentuk $|f(x)| = |g(x)|$ (Kedua Ruas Memuat Tanda Mutlak):
Karena kedua ruas selalu non-negatif, kuadratkan kedua ruas dan gunakan faktorisasi selisih kuadrat $A^2 - B^2 = (A + B)(A - B)$:
$$[f(x)]^2 = [g(x)]^2 \iff (f(x) + g(x))(f(x) - g(x)) = 0$$

#### 3. Bentuk $|f(x)| = g(x)$ (Ruas Kanan Memuat Peubah Bebas Tanpa Mutlak):
$$f(x) = g(x) \quad \text{atau} \quad f(x) = -g(x)$$
* **Syarat Mutlak Wajib:** Ruas kanan harus bernilai non-negatif:
  $$g(x) \ge 0$$
  *(Akar aljabar yang membuat $g(x) < 0$ wajib dieliminasi sebagai akar semu).*

#### 4. Bentuk Persamaan dengan Banyak Tanda Mutlak (Metode Partisi Interval):
Persamaan seperti $|x - a| + |x - b| = c$ diselesaikan dengan membagi garis bilangan menjadi interval-interval berdasarkan pembuat nol masing-masing tanda mutlak ($x = a$ dan $x = b$), lalu membuka definisi mutlak pada tiap interval secara konsisten.

---

### C. Pertidaksamaan Nilai Mutlak

#### 1. Bentuk Kurang Dari ($|f(x)| < a$ dan $|f(x)| \le a$, dengan $a > 0$):
Pertidaksamaan ini menyatakan jarak ke titik nol kurang dari $a$:
$$|f(x)| < a \iff -a < f(x) < a$$
$$|f(x)| \le a \iff -a \le f(x) \le a$$

#### 2. Bentuk Lebih Dari ($|f(x)| > a$ dan $|f(x)| \ge a$, dengan $a > 0$):
Pertidaksamaan ini menyatakan jarak ke titik nol lebih jauh dari $a$:
$$|f(x)| > a \iff f(x) < -a \quad \text{atau} \quad f(x) > a$$
$$|f(x)| \ge a \iff f(x) \le -a \quad \text{atau} \quad f(x) \ge a$$

#### 3. Bentuk Dua Ruas Bertanda Mutlak ($|f(x)| \le |g(x)|$ atau $|f(x)| \ge |g(x)|$):
Kuadratkan kedua ruas dan faktorkan:
$$(f(x) + g(x))(f(x) - g(x)) \le 0 \quad \text{atau} \quad (f(x) + g(x))(f(x) - g(x)) \ge 0$$

---

### D. Pertidaksamaan Rasional (Pecahan Aljabar)
Pertidaksamaan rasional memuat variabel pada pembilang maupun penyebut dengan bentuk umum:
$$\frac{P(x)}{Q(x)} > 0, \quad \frac{P(x)}{Q(x)} \ge 0, \quad \frac{P(x)}{Q(x)} < 0, \quad \frac{P(x)}{Q(x)} \le 0$$

> [!WARNING]
> **Larangan Mutlak Aljabar Rasional:**
> **DILARANG MENGALIKAN SILANG** suku penyebut bervariabel ke ruas kanan!
> Mengalikan silang pecahan dengan ekspresi yang tandanya belum pasti (bisa positif atau negatif) akan mengubah arah ketaksamaan secara salah.

#### Langkah Penyelesaian Sistematis Pertidaksamaan Rasional:
1. Pindahkan seluruh suku ke ruas kiri sehingga **ruas kanan menjadi tepat nol**.
2. Samakan penyebut hingga diperoleh satu pecahan tunggal $\frac{P(x)}{Q(x)}$.
3. Faktorkan pembilang $P(x)$ dan penyebut $Q(x)$ ke bentuk faktor-faktor linear paling sederhana.
4. Tentukan **Pembuat Nol Pembilang** ($P(x) = 0$) dan **Pembuat Nol Penyebut** ($Q(x) = 0$).
5. **Syarat Penyebut:** Penyebut tidak boleh nol ($Q(x) \neq 0$). Maka pembuat nol penyebut **SELALU berupa titik berlubang (terbuka)** pada garis bilangan, meskipun tanda pertidaksamaan memuat sama dengan ($\le$ atau $\ge$).
6. Plot semua pembuat nol pada garis bilangan, tentukan tanda interval ($+$ atau $-$), lalu arsir daerah yang diminta.
7. *Aturan Faktor Definit:* Suku kuadrat yang terbukti definit positif ($a > 0, D < 0$) selalu bernilai positif dan dapat langsung dicoret tanpa mempengaruhi tanda ketidaksamaan.

---

### E. Pertidaksamaan Irasional (Bentuk Akar)
Pertidaksamaan irasional adalah pertidaksamaan yang memuat variabel di bawah tanda akar.

#### Prosedur Standar Penyelesaian Pertidaksamaan Irasional:

#### 1. Bentuk $\sqrt{f(x)} < \sqrt{g(x)}$ atau $\sqrt{f(x)} \le \sqrt{g(x)}$:
1. **Syarat Numerus Terdefinisi:**
   $$f(x) \ge 0 \quad \text{dan} \quad g(x) \ge 0$$
2. **Kuadratkan Kedua Ruas:**
   $$f(x) < g(x) \quad \text{atau} \quad f(x) \le g(x)$$
3. **Himpunan Penyelesaian Akhir:** Irisan dari ketiga kondisi:
   $$\text{HP} = \{x \mid f(x) \ge 0\} \cap \{x \mid g(x) \ge 0\} \cap \{x \mid f(x) < g(x)\}$$

#### 2. Bentuk $\sqrt{f(x)} < g(x)$:
1. Syarat numerus: $f(x) \ge 0$.
2. Syarat ruas kanan harus positif: $g(x) > 0$ (karena bentuk akar non-negatif tidak mungkin lebih kecil dari bilangan nol/negatif).
3. Kuadratkan kedua ruas: $f(x) < [g(x)]^2$.
4. HP adalah irisan dari ketiga syarat tersebut.

#### 3. Bentuk $\sqrt{f(x)} > g(x)$:
Terbagi atas dua kasus terpisah yang kemudian **digabungkan ($\cup$)**:
* **Kasus A (Jika ruas kanan negatif, $g(x) < 0$):**  
  Karena akar selalu bernilai $\ge 0$, maka ketaksamaan $\sqrt{f(x)} > \text{negatif}$ SELALU BENAR untuk setiap $x$ asalkan akar tersebut terdefinisi:
  $$\text{HP}_A = \{x \mid f(x) \ge 0\} \cap \{x \mid g(x) < 0\}$$
* **Kasus B (Jika ruas kanan non-negatif, $g(x) \ge 0$):**  
  Kedua ruas non-negatif, sehingga sah dikuadratkan:
  $$\text{HP}_B = \{x \mid g(x) \ge 0\} \cap \{x \mid f(x) > [g(x)]^2\}$$
* **Himpunan Penyelesaian Total:**
  $$\text{HP} = \text{HP}_A \cup \text{HP}_B$$

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 4:**
> Selesaikan seluruh paket masalah nilai mutlak dan pertidaksamaan berikut:
>
> 1. **(Topik Persamaan Nilai Mutlak Multi-Tanda):**
>    * a. Tentukan himpunan penyelesaian dari persamaan:
>      $$|2x - 3| = |x + 6|$$
>    * b. Selesaikan persamaan nilai mutlak berbasis partisi interval:
>      $$|2x - 4| + |x + 1| = 9$$
>
> 2. **(Topik Pertidaksamaan Nilai Mutlak):**
>    * a. Tentukan himpunan penyelesaian dari:
>      $$|3x - 2| \le 7$$
>    * b. Tentukan himpunan penyelesaian dari:
>      $$|2x + 1| > |x - 4|$$
>
> 3. **(Topik Pertidaksamaan Rasional Pecahan):** Tentukan himpunan penyelesaian dari pertidaksamaan rasional:
>    $$\frac{x^2 - 2x - 8}{x - 1} \le 0$$
>
> 4. **(Topik Pertidaksamaan Rasional Pemindahan Ruas):** Tentukan himpunan penyelesaian dari:
>    $$\frac{2x - 1}{x + 2} \ge 1$$
>
> 5. **(Topik Pertidaksamaan Irasional Bentuk Akar):**
>    * a. Tentukan himpunan penyelesaian dari pertidaksamaan:
>      $$\sqrt{x^2 - 3x} \le \sqrt{2x + 6}$$
>    * b. Selesaikan pertidaksamaan irasional dua kasus:
>      $$\sqrt{2x + 6} > x + 1$$

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Persamaan Nilai Mutlak):**
  * **a. $|2x - 3| = |x + 6|$:**
    Kuadratkan kedua ruas dan faktorkan selisih kuadrat:
    $$((2x - 3) + (x + 6))((2x - 3) - (x + 6)) = 0$$
    $$(3x + 3)(x - 9) = 0$$
    * $3x + 3 = 0 \implies x = -1$
    * $x - 9 = 0 \implies x = 9$
    $$\text{HP} = \{-1, 9\}$$
  * **b. $|2x - 4| + |x + 1| = 9$:**
    Pembuat nol: $2x - 4 = 0 \implies x = 2$, dan $x + 1 = 0 \implies x = -1$.
    Bagi garis bilangan menjadi 3 interval:
    * **Interval I ($x < -1$):** $(2x - 4) < 0$ dan $(x + 1) < 0$:
      $$-(2x - 4) - (x + 1) = 9 \implies -2x + 4 - x - 1 = 9 \implies -3x + 3 = 9 \implies -3x = 6 \implies x = -2$$
      *Uji interval:* $x = -2 < -1$ (MEMENUHI).
    * **Interval II ($-1 \le x < 2$):** $(2x - 4) < 0$ dan $(x + 1) \ge 0$:
      $$-(2x - 4) + (x + 1) = 9 \implies -2x + 4 + x + 1 = 9 \implies -x + 5 = 9 \implies -x = 4 \implies x = -4$$
      *Uji interval:* $x = -4$ tidak terletak pada $-1 \le x < 2$ (TIDAK MEMENUHI).
    * **Interval III ($x \ge 2$):** $(2x - 4) \ge 0$ dan $(x + 1) \ge 0$:
      $$(2x - 4) + (x + 1) = 9 \implies 3x - 3 = 9 \implies 3x = 12 \implies x = 4$$
      *Uji interval:* $x = 4 \ge 2$ (MEMENUHI).
    * Maka himpunan penyelesaian adalah:
      $$\text{HP} = \{-2, 4\}$$

* **Jawaban Bagian 2 (Pertidaksamaan Nilai Mutlak):**
  * **a. $|3x - 2| \le 7$:**
    $$-7 \le 3x - 2 \le 7$$
    Tambahkan 2 pada ketiga ruas:
    $$-5 \le 3x \le 9$$
    Bagi dengan 3:
    $$-\frac{5}{3} \le x \le 3 \implies \text{HP} = \left\{x \in \mathbb{R} \;\middle|\; -\frac{5}{3} \le x \le 3\right\}$$
  * **b. $|2x + 1| > |x - 4|$:**
    Kuadratkan kedua ruas dan gunakan selisih kuadrat:
    $$((2x + 1) + (x - 4))((2x + 1) - (x - 4)) > 0$$
    $$(3x - 3)(x + 5) > 0 \implies 3(x - 1)(x + 5) > 0$$
    Pembuat nol: $x = -5$ dan $x = 1$.  
    Karena tanda $> 0$, ambil interval luar:
    $$\text{HP} = \{x \in \mathbb{R} \mid x < -5 \quad \text{atau} \quad x > 1\}$$

* **Jawaban Bagian 3 (Pertidaksamaan Rasional Standar):**
  $$\frac{x^2 - 2x - 8}{x - 1} \le 0$$
  * Faktorkan pembilang:
    $$\frac{(x - 4)(x + 2)}{x - 1} \le 0$$
  * Pembuat nol pembilang: $x = -2$ dan $x = 4$ (tertutup karena tanda $\le$).
  * Pembuat nol penyebut: $x = 1$ (selalu terbuka / berlubang karena $x \neq 1$).
  * Uji tanda interval pada garis bilangan:
    * Untuk $x > 4$ (misal $x=5$): $\frac{(+)(+)}{(+)} > 0$ ($+$).
    * Untuk $1 < x < 4$ (misal $x=2$): $\frac{(-)(+)}{(+)} < 0$ ($-$).
    * Untuk $-2 < x < 1$ (misal $x=0$): $\frac{(-)(+)}{(-)} > 0$ ($+$).
    * Untuk $x < -2$ (misal $x=-3$): $\frac{(-)(-)}{(-)} < 0$ ($-$).
  * Daerah yang diminta $\le 0$ (negatif):
    $$\text{HP} = \{x \in \mathbb{R} \mid x \le -2 \quad \text{atau} \quad 1 < x \le 4\}$$

* **Jawaban Bagian 4 (Pertidaksamaan Rasional Pemindahan Ruas):**
  $$\frac{2x - 1}{x + 2} \ge 1 \iff \frac{2x - 1}{x + 2} - 1 \ge 0$$
  * Samakan penyebut:
    $$\frac{(2x - 1) - (x + 2)}{x + 2} \ge 0 \implies \frac{x - 3}{x + 2} \ge 0$$
  * Pembuat nol pembilang: $x = 3$ (tertutup).
  * Pembuat nol penyebut: $x = -2$ (terbuka karena $x \neq -2$).
  * Uji tanda garis bilangan:
    * $x > 3 \implies (+)/(+) = +$
    * $-2 < x < 3 \implies (-)/(+) = -$
    * $x < -2 \implies (-)/(-) = +$
  * Daerah yang diminta $\ge 0$ (positif):
    $$\text{HP} = \{x \in \mathbb{R} \mid x < -2 \quad \text{atau} \quad x \ge 3\}$$

* **Jawaban Bagian 5 (Pertidaksamaan Irasional Bentuk Akar):**
  * **a. $\sqrt{x^2 - 3x} \le \sqrt{2x + 6}$:**
    * Syarat numerus 1: $x^2 - 3x \ge 0 \implies x(x - 3) \ge 0 \implies x \le 0 \text{ atau } x \ge 3$.
    * Syarat numerus 2: $2x + 6 \ge 0 \implies 2x \ge -6 \implies x \ge -3$.
    * Kuadratkan kedua ruas:
      $$x^2 - 3x \le 2x + 6 \implies x^2 - 5x - 6 \le 0 \implies (x - 6)(x + 1) \le 0 \implies -1 \le x \le 6$$
    * Irisan ketiga kondisi:
      * Dari $x \ge -3$ dan $-1 \le x \le 6 \implies -1 \le x \le 6$.
      * Diiriskan dengan ($x \le 0$ atau $x \ge 3$):
        $$\text{HP} = \{x \in \mathbb{R} \mid -1 \le x \le 0 \quad \text{atau} \quad 3 \le x \le 6\}$$
  * **b. $\sqrt{2x + 6} > x + 1$:**
    * Syarat numerus: $2x + 6 \ge 0 \implies x \ge -3$.
    * **Kasus 1 ($x + 1 < 0 \iff x < -1$):**
      Karena akar selalu $\ge 0$ dan ruas kanan negatif, ketaksamaan selalu benar untuk setiap $x$ asalkan $x \ge -3$:
      $$\text{Solusi 1: } -3 \le x < -1$$
    * **Kasus 2 ($x + 1 \ge 0 \iff x \ge -1$):**
      Kedua ruas non-negatif, kuadratkan kedua ruas:
      $$2x + 6 > (x + 1)^2 \implies 2x + 6 > x^2 + 2x + 1 \implies x^2 - 5 < 0$$
      $$(x - \sqrt{5})(x + \sqrt{5}) < 0 \implies -\sqrt{5} < x < \sqrt{5}$$
      Diiriskan dengan $x \ge -1$:
      $$\text{Solusi 2: } -1 \le x < \sqrt{5}$$
    * **Gabungkan Solusi 1 dan Solusi 2 ($\cup$):**
      $$[-3, -1) \cup [-1, \sqrt{5}) = [-3, \sqrt{5})$$
      $$\text{HP} = \{x \in \mathbb{R} \mid -3 \le x < \sqrt{5}\}$$

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Penyebut Tidak Boleh Nol:** Pada pertidaksamaan pecahan bertanda $\le$ atau $\ge$, bulatan tertutup HANYA berlaku untuk pembuat nol pembilang. Pembuat nol penyebut WAJIB SELALU TERBUKA (berlubang).
> 2. **Pemisahan Kasus pada Pertidaksamaan Bentuk $\sqrt{f(x)} > g(x)$:** Jangan hanya mengkuadratkan kedua ruas! Jika $g(x) < 0$, pertidaksamaan tersebut tetap memiliki penyelesaian yang sah tanpa perlu dikuadratkan.
> 3. **Definisi Kuadrat Nilai Mutlak:** Gunakan selalu identitas $|A|^2 - |B|^2 = (A + B)(A - B)$ untuk menyelesaikan pertidaksamaan dua tanda mutlak tanpa perlu menguraikan satu per satu kasus.
