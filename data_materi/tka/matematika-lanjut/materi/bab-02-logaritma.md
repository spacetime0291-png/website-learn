# Bab 2: Logaritma
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar dan Persamaan

## Bab 2: Logaritma

---

### A. Hakikat dan Definisi Logaritma
Logaritma adalah operasi matematika yang merupakan invers (kebalikan) dari operasi perpangkatan (eksponen). Logaritma mencari pangkat berapakah suatu bilangan pokok (*basis*) harus dipangkatkan agar menghasilkan nilai tertentu (*numerus*).

#### 1. Definisi Operasional Logaritma:
$${}^{}\log b = c \iff a^c = b$$
* $a$ = bilangan pokok / basis logaritma
* $b$ = numerus (bilangan yang dicari nilai logaritmanya)
* $c$ = hasil logaritma (nilai eksponen)

> [!IMPORTANT]
> **Dua Syarat Mutlak Keberlakuan Logaritma:**
> Suatu bentuk ${}^{}\log b$ hanya terdefinisi pada himpunan bilangan real jika dan hanya jika:
> 1. **Syarat Basis ($a$):** Harus bernilai positif dan tidak boleh sama dengan 1 ($a > 0$ dan $a \neq 1$).
> 2. **Syarat Numerus ($b$):** Harus bernilai positif murni ($b > 0$).
> *(Numerus bernilai nol atau negatif TIDAK terdefinisi dalam bilangan real).*

#### 2. Notasi Khusus Logaritma:
* **Logaritma Umum (Briggs / Basis 10):** Jika basis adalah 10, angka 10 lazim dihilangkan dalam penulisan:
  $$\log x = {}^{10}\log x$$
* **Logaritma Natural (Napier / Basis Bilangan Euler $e \approx 2{,}71828$):**
  $$\ln x = {}^e\log x$$

---

### B. Sifat-Sifat Fundamental Logaritma
Untuk basis $a, p > 0$ ($a, p \neq 1$) dan numerus $b, c > 0$:

#### 1. Sifat Identitas Dasar:
$${}^{}\log 1 = 0 \quad \text{dan} \quad {}^{}\log a = 1$$
*(Bukti: $a^0 = 1$ dan $a^1 = a$).*

#### 2. Penjumlahan Numerus Menjadi Perkalian:
$${}^{}\log b + {}^a\log c = {}^a\log(b \cdot c)$$

#### 3. Pengurangan Numerus Menjadi Pembagian:
$${}^{}\log b - {}^a\log c = {}^a\log\left(\frac{b}{c}\right)$$

#### 4. Pangkat pada Numerus:
$${}^{}\log\left(b^n\right) = n \cdot {}^a\log b$$

#### 5. Pangkat pada Basis dan Numerus:
$${}^{}\log\left(b^n\right) = \frac{n}{m} \cdot {}^a\log b$$
* *Kasus Khusus:* ${}^{}\log b = \frac{1}{m} \cdot {}^a\log b$.

#### 6. Perubahan Basis Logaritma:
$${}^{}\log b = \frac{{}^{}\log b}{{}^{}\log a} = \frac{\log b}{\log a} = \frac{\ln b}{\ln a} \quad (p > 0, p \neq 1)$$

#### 7. Pembalikan Basis dan Numerus:
$${}^{}\log b = \frac{1}{{}^{}\log a} \quad (b \neq 1)$$

#### 8. Perkalian Berantai Logaritma:
$${}^{}\log b \cdot {}^b\log c \cdot {}^c\log d = {}^a\log d$$

#### 9. Pangkat Berbasis Logaritma:
$$a^{{}^{}\log b} = b \quad \text{dan} \quad a^{{}^{}\log b} = b^{{}^{}\log a}$$

---

### C. Persamaan Logaritma
Persamaan logaritma adalah persamaan yang memuat variabel di dalam numerus atau basis logaritma.

> [!WARNING]
> **Prosedur Wajib Persamaan Logaritma:**
> Setiap nilai variabel $x$ yang diperoleh dari manipulasi aljabar **WAJIB diuji ke dalam syarat numerus ($b > 0$) dan syarat basis ($a > 0, a \neq 1$)**. Nilai yang melanggar syarat tersebut disebut **akar semu** dan wajib dibuang dari Himpunan Penyelesaian (HP)!

#### Bentuk-Bentuk Persamaan Logaritma:

#### 1. Bentuk ${}^{}\log f(x) = {}^a\log p$
$$f(x) = p \quad \text{dengan syarat } f(x) > 0$$

#### 2. Bentuk ${}^{}\log f(x) = {}^a\log g(x)$
$$f(x) = g(x) \quad \text{dengan syarat } f(x) > 0 \text{ dan } g(x) > 0$$

#### 3. Bentuk ${}^{}\log g(x) = {}^{f(x)}\log h(x)$ (Basis Berupa Fungsi)
$$g(x) = h(x)$$
* **Syarat Lengkap:**
  1. Numerus positif: $g(x) > 0$ dan $h(x) > 0$
  2. Basis positif dan bukan 1: $f(x) > 0$ dan $f(x) \neq 1$

#### 4. Bentuk Kuadrat Logaritma:
$$A \cdot \left({}^{}\log x\right)^2 + B \cdot \left({}^{}\log x\right) + C = 0$$
* **Langkah Kerja:**
  1. Misalkan variabel baru $y = {}^a\log x$.
  2. Selesaikan persamaan kuadrat $A y^2 + B y + C = 0$ hingga diperoleh $y_1$ dan $y_2$.
  3. Kembalikan ke logaritma: $x_1 = a^{y_1}$ dan $x_2 = a^{y_2}$.
* **Teorema Hasil Kali Akar-Akar ($x_1 \cdot x_2$):**
  Berdasarkan rumus Vieta pada persamaan kuadrat:
  $$y_1 + y_2 = -\frac{B}{A} \iff {}^a\log x_1 + {}^a\log x_2 = -\frac{B}{A}$$
  $${}^{}\log(x_1 \cdot x_2) = -\frac{B}{A} \implies x_1 \cdot x_2 = a^{-\frac{B}{A}}$$

---

### D. Pertidaksamaan Logaritma
Pertidaksamaan logaritma melibatkan tanda ketidaksamaan ($<, \le, >, \ge$). Sifat monoton fungsi logaritma terbagi atas dua kasus:

```text
Kasus 1: Basis a > 1 (Monoton Naik)         Kasus 2: Basis 0 < a < 1 (Monoton Turun)
       y ▲                                         y ▲
         │       _--                                 │  \
         │     /                                     │   \
         │   /                                       │    \
       ──┼──┴──────► x                             ──┼─────┴────► x
   Tanda Ketaksamaan TETAP                     Tanda Ketaksamaan DIBALIK
```

> [!NOTE]
> **Kaidah Operasi Pertidaksamaan Logaritma:**
> * **Jika Basis $a > 1$ (Fungsi Naik):**
>   $${}^{}\log f(x) > {}^a\log g(x) \iff f(x) > g(x)$$
>   *(Tanda pertidaksamaan TETAP)*.
> * **Jika Basis $0 < a < 1$ (Fungsi Turun):**
>   $${}^{}\log f(x) > {}^a\log g(x) \iff f(x) < g(x)$$
>   *(Tanda pertidaksamaan WAJIB DIBALIK)*.
>
> **Langkah Penyelesaian Sistematis:**
> 1. Cari **Solusi Aljabar** berdasarkan sifat basis di atas.
> 2. Tetapkan **Syarat Numerus**: $f(x) > 0$ dan $g(x) > 0$.
> 3. Tentukan himpunan penyelesaian akhir dengan mencari **irisan ($\cap$)** dari solusi aljabar dan seluruh syarat numerus pada garis bilangan!

---

### E. Karakteristik Grafik Fungsi Logaritma
Bentuk umum:
$$f(x) = {}^a\log(x - h) + k$$
1. **Domain (Daerah Asal):** $x - h > 0 \implies D_f = (h, \infty)$.
2. **Range (Daerah Hasil):** $R_f = \mathbb{R} = (-\infty, \infty)$.
3. **Asimtot Tegak (*Vertical Asymptote*):** Garis vertikal $x = h$. Grafik melengkung mendekati garis ini tanpa pernah menyentuhnya saat $x \to h^+$.
4. **Titik Potong Sumbu-$x$:** Terjadi ketika $f(x) = 0 \iff {}^a\log(x - h) = -k \iff x - h = a^{-k} \implies x = h + a^{-k}$.

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 2:**
> Selesaikan seluruh paket masalah logaritma analitis berikut:
>
> 1. **(Topik Manipulasi Sifat Aljabar Logaritma):**
>    * a. Hitung nilai eksak dari:
>      $${}^{}\log 48 + {}^5\log 50 - {}^2\log 3 - {}^5\log 2 + {}^{\sqrt{3}}\log 27$$
>    * b. Jika diketahui ${}^{}\log 3 = p$ dan ${}^{}\log 5 = q$, nyatakan bentuk ${}^{}\log 50$ dalam variabel $p$ dan $q$!
>
> 2. **(Topik Persamaan Logaritma Bentuk Kuadrat):** Diketahui persamaan logaritma:
>    $$\left({}^{}\log x\right)^2 - 4 \cdot \left({}^{}\log x\right) - 5 = 0$$
>    * a. Tentukan himpunan penyelesaian nilai $x$ dari persamaan tersebut!
>    * b. Jika akar-akarnya adalah $x_1$ dan $x_2$, hitung nilai hasil kali akar $x_1 \cdot x_2$!
>
> 3. **(Topik Persamaan Logaritma Basis Fungsi):** Tentukan himpunan penyelesaian dari persamaan:
>    $${}^{}\log(x^2 - 4x + 3) = {}^{x-1}\log(2x - 2)$$
>
> 4. **(Topik Pertidaksamaan Logaritma Basis Pecahan):** Tentukan himpunan penyelesaian dari pertidaksamaan:
>    $$^{\frac{1}{2}}\log\left(x^2 - 3x - 4\right) \ge -3$$
>
> 5. **(Topik Aplikasi Skala Logaritmik):** Tingkat kebisingan bunyi (Taraf Intensitas / TI) diukur dalam skala desibel ($\text{dB}$) melalui model:
>    $$\text{TI} = 10 \log\left(\frac{I}{I_0}\right)$$
>    di mana $I$ adalah intensitas bunyi dan $I_0 = 10^{-12}\text{ W/m}^2$ adalah intensitas ambang pendengaran manusia.
>    * a. Jika intensitas bunyi mesin pabrik adalah $I_1 = 10^{-4}\text{ W/m}^2$, hitung taraf intensitasnya dalam $\text{dB}$!
>    * b. Jika terdapat $100$ mesin pabrik identik yang dinyalakan secara bersamaan, hitung taraf intensitas total yang dihasilkan!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Manipulasi Sifat Aljabar Logaritma):**
  * **a. Menghitung Nilai Eksak:**
    * Kelompokkan suku-suku dengan basis yang sama:
      $$S_1 = {}^{}\log 48 - {}^2\log 3 = {}^2\log\left(\frac{48}{3}\right) = {}^2\log 16 = {}^2\log(2^4) = 4$$
      $$S_2 = {}^{}\log 50 - {}^5\log 2 = {}^5\log\left(\frac{50}{2}\right) = {}^5\log 25 = {}^5\log(5^2) = 2$$
      $$S_3 = {}^{\sqrt{3}}\log 27 = {}^{3^{1/2}}\log(3^3) = \frac{3}{1/2} \cdot {}^3\log 3 = 6 \cdot 1 = 6$$
    * Jumlahkan seluruhnya:
      $$\text{Nilai Total} = S_1 + S_2 + S_3 = 4 + 2 + 6 = 12$$
  * **b. Mengubah Basis dalam Variabel $p$ dan $q$:**
    * Diketahui ${}^{}\log 3 = p \iff {}^3\log 2 = \frac{1}{p}$ dan ${}^{}\log 5 = q$.
    * Ubah ${}^{}\log 50$ ke basis 3:
      $${}^{}\log 50 = \frac{{}^{}\log 50}{{}^{}\log 18}$$
    * Uraikan numerus ke faktor primanya:
      $${}^{}\log 50 = {}^3\log(2 \cdot 5^2) = {}^3\log 2 + {}^3\log(5^2) = {}^3\log 2 + 2 \cdot {}^3\log 5 = \frac{1}{p} + 2q = \frac{1 + 2pq}{p}$$
      $${}^{}\log 18 = {}^3\log(2 \cdot 3^2) = {}^3\log 2 + {}^3\log(3^2) = {}^3\log 2 + 2 = \frac{1}{p} + 2 = \frac{1 + 2p}{p}$$
    * Bagikan kedua bentuk pecahan:
      $${}^{}\log 50 = \frac{\frac{1 + 2pq}{p}}{\frac{1 + 2p}{p}} = \frac{1 + 2pq}{1 + 2p}$$

* **Jawaban Bagian 2 (Persamaan Logaritma Kuadrat):**
  * **a. Himpunan Penyelesaian:**
    Misalkan $y = {}^3\log x$:
    $$y^2 - 4y - 5 = 0 \implies (y - 5)(y + 1) = 0$$
    * $y_1 = 5 \implies {}^3\log x = 5 \implies x_1 = 3^5 = 243$
    * $y_2 = -1 \implies {}^3\log x = -1 \implies x_2 = 3^{-1} = \frac{1}{3}$
    * Karena kedua nilai $x > 0$ (memenuhi syarat numerus):
      $$\text{HP} = \left\{\frac{1}{3}, 243\right\}$$
  * **b. Hasil Kali Akar-Akar:**
    $$x_1 \cdot x_2 = \frac{1}{3} \times 243 = 81$$
    *(Atau langsung dengan rumus Vieta: $x_1 \cdot x_2 = 3^{-(-4)/1} = 3^4 = 81$)*.

* **Jawaban Bagian 3 (Persamaan Logaritma Basis Fungsi):**
  $${}^{}\log(x^2 - 4x + 3) = {}^{x-1}\log(2x - 2)$$
  * **Langkah 1: Samakan Numerus:**
    $$x^2 - 4x + 3 = 2x - 2 \implies x^2 - 6x + 5 = 0 \implies (x - 5)(x - 1) = 0$$
    Diperoleh kandidat nilai: $x = 5$ atau $x = 1$.
  * **Langkah 2: Uji Syarat Mutlak:**
    * **Untuk $x = 1$:**
      * Syarat basis: $a = x - 1 = 1 - 1 = 0 \le 0$ (GAGAL, basis harus $>0$ dan $\neq 1$).
      * Syarat numerus: $2x - 2 = 0$ (GAGAL, numerus harus $>0$).
      * Maka $x = 1$ adalah **akar semu (tidak memenuhi)**!
    * **Untuk $x = 5$:**
      * Syarat basis: $a = 5 - 1 = 4 > 0$ dan $4 \neq 1$ (MEMENUHI).
      * Syarat numerus 1: $x^2 - 4x + 3 = 25 - 20 + 3 = 8 > 0$ (MEMENUHI).
      * Syarat numerus 2: $2x - 2 = 10 - 2 = 8 > 0$ (MEMENUHI).
      * Maka $x = 5$ **memenuhi secara sah**.
  * **Himpunan Penyelesaian:**
    $$\text{HP} = \{5\}$$

* **Jawaban Bagian 4 (Pertidaksamaan Logaritma Basis Pecahan):**
  $$^{\frac{1}{2}}\log\left(x^2 - 3x - 4\right) \ge -3$$
  * **Langkah 1: Ubah Ruas Kanan ke Bentuk Logaritma Berbasis $\frac{1}{2}$:**
    $$-3 = {}^{\frac{1}{2}}\log\left(\left(\frac{1}{2}\right)^{-3}\right) = {}^{\frac{1}{2}}\log(2^3) = {}^{\frac{1}{2}}\log 8$$
    Pertidaksamaan menjadi:
    $$^{\frac{1}{2}}\log\left(x^2 - 3x - 4\right) \ge {}^{\frac{1}{2}}\log 8$$
  * **Langkah 2: Selesaikan Ketaksamaan Aljabar (Ingat: Basis $0 < \frac{1}{2} < 1 \implies$ Tanda DIBALIK):**
    $$x^2 - 3x - 4 \le 8 \implies x^2 - 3x - 12 \le 0$$
    Pembuat nol:
    $$x = \frac{3 \pm \sqrt{(-3)^2 - 4(1)(-12)}}{2} = \frac{3 \pm \sqrt{9 + 48}}{2} = \frac{3 \pm \sqrt{57}}{2}$$
    Karena $\le 0$:
    $$\text{Solusi 1: } \frac{3 - \sqrt{57}}{2} \le x \le \frac{3 + \sqrt{57}}{2} \quad (\text{Catatan: } \sqrt{57} \approx 7{,}55 \implies -2{,}275 \le x \le 5{,}275)$$
  * **Langkah 3: Syarat Numerus Harus Positif Murni:**
    $$x^2 - 3x - 4 > 0 \implies (x - 4)(x + 1) > 0$$
    $$\text{Solusi 2: } x < -1 \quad \text{atau} \quad x > 4$$
  * **Langkah 4: Irisan Solusi 1 dan Solusi 2:**
    $$\text{HP} = \left\{x \in \mathbb{R} \;\middle|\; \frac{3 - \sqrt{57}}{2} \le x < -1 \quad \text{atau} \quad 4 < x \le \frac{3 + \sqrt{57}}{2}\right\}$$

* **Jawaban Bagian 5 (Aplikasi Taraf Intensitas Bunyi):**
  * **a. Taraf Intensitas 1 Mesin ($I_1 = 10^{-4}\text{ W/m}^2, I_0 = 10^{-12}\text{ W/m}^2$):**
    $$\text{TI}_1 = 10 \log\left(\frac{10^{-4}}{10^{-12}}\right) = 10 \log\left(10^8\right) = 10 \times 8 = 80\text{ dB}$$
  * **b. Taraf Intensitas 100 Mesin Identik ($n = 100$):**
    Intensitas total menjadi $I_{\text{tot}} = 100 \cdot I_1$. Berdasarkan sifat penjumlahan logaritma:
    $$\text{TI}_{100} = \text{TI}_1 + 10 \log n = 80 + 10 \log(100) = 80 + 10(2) = 80 + 20 = 100\text{ dB}$$

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Uji Akar Semu Adalah Kewajiban:** Pada persamaan logaritma, jangan pernah langsung menuliskan jawaban sebelum menguji setiap akar ke syarat numerus ($b > 0$). Angka negatif di numerus tidak diizinkan!
> 2. **Pembalikan Tanda Ketidaksamaan:** Basis berupa pecahan di antara 0 dan 1 selalu membalik tanda pertidaksamaan. Selalu periksa basisnya terlebih dahulu sebelum menurunkan logaritma.
> 3. **Hasil Kali Akar Persamaan Kuadrat Logaritma:** Ingat hubungan cepat $x_1 \cdot x_2 = a^{-B/A}$ yang diturunkan dari penjumlahan akar $y_1 + y_2 = -\frac{B}{A}$, bukan perkalian $y_1 y_2$.
