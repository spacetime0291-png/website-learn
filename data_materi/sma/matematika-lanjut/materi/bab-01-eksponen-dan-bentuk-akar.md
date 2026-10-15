# Bab 1: Eksponen dan Bentuk Akar
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar dan Persamaan

## Bab 1: Eksponen dan Bentuk Akar

---

### A. Hakikat dan Sifat-Sifat Eksponen (Bilangan Berpangkat)
Eksponen adalah operasi matematika yang menyatakan perkalian berulang dari suatu bilangan pokok (*basis*) dengan dirinya sendiri sebanyak eksponennya (*pangkat*).

#### 1. Definisi Pangkat Bulat Positif
Untuk sembarang bilangan real $a$ dan bilangan bulat positif $n \in \mathbb{N}$:
$$a^n = \underbrace{a \times a \times a \times \dots \times a}_{n \text{ faktor}}$$
* $a$ = bilangan pokok (basis)
* $n$ = pangkat (eksponen)

#### 2. Definisi Pangkat Nol dan Pangkat Bulat Negatif
* **Pangkat Nol:** Untuk $a \neq 0$:
  $$a^0 = 1$$
  *(Perhatian: $0^0$ tidak terdefinisi / bentuk tak tentu).*
* **Pangkat Bulat Negatif:** Untuk $a \neq 0$ dan $n \in \mathbb{N}$:
  $$a^{-n} = \frac{1}{a^n} \quad \iff \quad \frac{1}{a^{-n}} = a^n$$

#### 3. Definisi Pangkat Rasional (Pecahan)
Untuk $a \ge 0$, $m \in \mathbb{Z}$, dan $n \in \mathbb{N}$ dengan $n \ge 2$:
$$a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$$

#### 4. Sifat-Sifat Fundamental Aljabar Eksponen
Untuk basis $a, b \in \mathbb{R}$ dan eksponen $m, n \in \mathbb{R}$ (dengan asumsi basis terdefinisi riil):
1. **Perkalian Bilangan Berpangkat Sebasis:**
   $$a^m \cdot a^n = a^{m + n}$$
2. **Pembagian Bilangan Berpangkat Sebasis:**
   $$\frac{a^m}{a^n} = a^{m - n} \quad (a \neq 0)$$
3. **Pemangkatan Bilangan Berpangkat:**
   $$(a^m)^n = a^{m \cdot n} = (a^n)^m$$
4. **Pemangkatan Perkalian Dua Bilangan:**
   $$(a \cdot b)^n = a^n \cdot b^n$$
5. **Pemangkatan Pembagian Dua Bilangan:**
   $$\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n} \quad (b \neq 0) \quad \iff \quad \left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$$

---

### B. Bentuk Akar dan Operasi Aljabar
Bentuk akar adalah akar dari bilangan rasional yang menghasilkan bilangan irasional (misal: $\sqrt{2}, \sqrt{3}, \sqrt[3]{5}$).

#### 1. Definisi dan Syarat Bentuk Akar:
$$\sqrt[n]{a} = b \iff b^n = a$$
* Jika $n$ adalah bilangan genap, maka $a \ge 0$ dan $b \ge 0$ (akar utama real non-negatif).
* Jika $n$ adalah bilangan ganjil, nilai $a$ dapat bernilai positif maupun negatif.

#### 2. Sifat-Sifat Operasi Bentuk Akar:
1. **Penjumlahan dan Pengurangan Bentuk Akar Sejenis:**
   $$p\sqrt{a} \pm q\sqrt{a} = (p \pm q)\sqrt{a}$$
2. **Perkalian Bentuk Akar:**
   $$\sqrt{a} \cdot \sqrt{b} = \sqrt{a \cdot b} \quad (a, b \ge 0)$$
3. **Pembagian Bentuk Akar:**
   $$\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}} \quad (a \ge 0, b > 0)$$

#### 3. Merasionalkan Penyebut Pecahan Bentuk Akar:
Proses menghilangkan bentuk akar dari bagian penyebut pecahan dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya (*konjugat*):
* **Penyebut Akar Tunggal:**
  $$\frac{c}{\sqrt{a}} = \frac{c}{\sqrt{a}} \times \frac{\sqrt{a}}{\sqrt{a}} = \frac{c}{a}\sqrt{a}$$
* **Penyebut Jumlah atau Selisih Dua Akar:**
  $$\frac{c}{\sqrt{a} + \sqrt{b}} = \frac{c(\sqrt{a} - \sqrt{b})}{a - b} \quad \text{dan} \quad \frac{c}{\sqrt{a} - \sqrt{b}} = \frac{c(\sqrt{a} + \sqrt{b})}{a - b}$$
* **Penyebut Campuran Bilangan dan Bentuk Akar:**
  $$\frac{c}{a \pm \sqrt{b}} = \frac{c(a \mp \sqrt{b})}{a^2 - b}$$

#### 4. Menyederhanakan Bentuk Akar Bersarang (Akar di Dalam Akar):
Bentuk $\sqrt{(a+b) \pm 2\sqrt{ab}}$ berasal dari penjabaran kuadrat suku dua $(\sqrt{a} \pm \sqrt{b})^2$:
$$\sqrt{(a+b) \pm 2\sqrt{ab}} = \sqrt{a} \pm \sqrt{b} \quad (\text{dengan syarat } a > b > 0)$$

> [!WARNING]
> **Koefisien Angka 2 di Depan Akar Dalam:**
> Formula di atas HANYA berlaku jika angka di depan akar dalam tepat bernilai **2**. Jika belum bernilai 2:
> * Jika berupa angka genap lain, masukkan sebagian faktor ke dalam akar: $\sqrt{a \pm 4\sqrt{b}} = \sqrt{a \pm 2\sqrt{4b}}$.
> * Jika belum memiliki angka di depan akar, manipulasi dengan mengalikan $\frac{\sqrt{2}}{\sqrt{2}}$: $\sqrt{a \pm \sqrt{b}} = \frac{\sqrt{2a \pm 2\sqrt{b}}}{\sqrt{2}}$.

---

### C. Persamaan Eksponen
Persamaan eksponen adalah persamaan yang memuat peubah (variabel) di dalam eksponennya atau di dalam basisnya.

#### Ragam Bentuk Persamaan Eksponen dan Solusinya:

#### 1. Bentuk $a^{f(x)} = a^p$
Karena basis sama dan konstan ($a > 0, a \neq 1$):
$$a^{f(x)} = a^p \implies f(x) = p$$

#### 2. Bentuk $a^{f(x)} = a^{g(x)}$
$$a^{f(x)} = a^{g(x)} \implies f(x) = g(x)$$

#### 3. Bentuk $a^{f(x)} = b^{f(x)}$ dengan $a \neq b$
Dua bilangan dengan basis berbeda menghasilkan nilai sama jika dan hanya jika pangkatnya bernilai nol:
$$a^{f(x)} = b^{f(x)} \implies f(x) = 0$$

#### 4. Bentuk Kuadrat Eksponen:
$$A \cdot \left(a^{f(x)}\right)^2 + B \cdot \left(a^{f(x)}\right) + C = 0$$
* **Metode Penyelesaian:** Substitusikan variabel baru $y = a^{f(x)}$ dengan syarat $y > 0$, selesaikan persamaan kuadrat $A y^2 + B y + C = 0$, lalu kembalikan ke nilai $x$.

#### 5. Bentuk Basis Fungsi: $[h(x)]^{f(x)} = [h(x)]^{g(x)}$
Persamaan ini melibatkan 4 kemungkinan analisis yang wajib diuji seluruhnya:
1. **Eksponen sama:** $f(x) = g(x)$.
2. **Basis bernilai 1:** $h(x) = 1$ (karena $1^{\text{apapun}} = 1$).
3. **Basis bernilai 0:** $h(x) = 0$, dengan syarat nilai eksponen harus positif: $f(x) > 0$ dan $g(x) > 0$ (karena $0^{\text{positif}} = 0$, sedangkan $0^{\text{negatif}}$ atau $0^0$ tidak terdefinisi).
4. **Basis bernilai -1:** $h(x) = -1$, dengan syarat kedua eksponen harus memiliki paritas yang sama (keduanya sama-sama genap atau keduanya sama-sama ganjil), sehingga $(-1)^{f(x)} = (-1)^{g(x)}$.

#### 6. Bentuk Pangkat Sama dengan Basis Fungsi Berbeda: $[f(x)]^{h(x)} = [g(x)]^{h(x)}$
1. **Basis sama:** $f(x) = g(x)$.
2. **Basis berlawanan tanda:** $f(x) = -g(x)$, dengan syarat pangkat $h(x)$ harus berupa bilangan genap.
3. **Eksponen nol:** $h(x) = 0$, dengan syarat basis tidak boleh nol: $f(x) \neq 0$ dan $g(x) \neq 0$.

---

### D. Pertidaksamaan Eksponen
Penyelesaian pertidaksamaan eksponen bergantung secara krusial pada nilai basisnya ($a$):

```text
Kasus 1: a > 1 (Fungsi Naik)       Kasus 2: 0 < a < 1 (Fungsi Turun)
       y ▲                                y ▲
         │     /                            │ \
         │    /                             │  \
         │   /                              │   \
         └──┴─────► x                       └──┴─────► x
   Tanda Ketidaksamaan TETAP           Tanda Ketidaksamaan DIBALIK
```

> [!NOTE]
> **Kaidah Tanda Pertidaksamaan Eksponen:**
> * **Jika Basis $a > 1$ (Fungsi Monoton Naik):**
>   $$a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$$
>   $$a^{f(x)} < a^{g(x)} \iff f(x) < g(x)$$
>   *(Arah tanda pertidaksamaan TETAP / tidak berubah)*.
> * **Jika Basis $0 < a < 1$ (Fungsi Monoton Turun):**
>   $$a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$$
>   $$a^{f(x)} < a^{g(x)} \iff f(x) > g(x)$$
>   *(Arah tanda pertidaksamaan WAJIB DIBALIK)*.

---

### E. Fungsi Eksponen dan Grafiknya
Fungsi eksponen memiliki bentuk umum:
$$f(x) = b \cdot a^{k(x - x_0)} + c \quad (a > 0, a \neq 1)$$

#### Karakteristik Geometri Grafik:
1. **Domain (Daerah Asal):** $D_f = \mathbb{R} = (-\infty, \infty)$.
2. **Asimtot Datar:** Garis horizontal $y = c$. Kurva mendekati garis ini tetapi tidak pernah memotongnya saat $x \to \pm\infty$.
3. **Range (Daerah Hasil):**
   * Jika $b > 0 \implies R_f = (c, \infty)$.
   * Jika $b < 0 \implies R_f = (-\infty, c)$.
4. **Monotonisitas:**
   * Jika $a > 1$ dan $k > 0$, grafik monoton naik.
   * Jika $0 < a < 1$ dan $k > 0$, grafik monoton turun.

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 1:**
> Selesaikan rangkaian masalah aljabar eksponen dan bentuk akar berikut secara sistematis:
>
> 1. **(Topik Operasi Aljabar & Rasionalisasi):**
>    * a. Sederhanakan bentuk pecahan eksponen berikut:
>      $$\frac{\left(2^3 \cdot a^{-2} \cdot b^4\right)^2}{\left(4 \cdot a^3 \cdot b^{-1}\right)^3}$$
>    * b. Rasionalkan penyebut dari pecahan:
>      $$\frac{6}{\sqrt{7} - \sqrt{3}}$$
>    * c. Sederhanakan bentuk akar bersarang:
>      $$\sqrt{10 - 2\sqrt{21}} \quad \text{dan} \quad \sqrt{8 + \sqrt{60}}$$
>
> 2. **(Topik Persamaan Eksponen Basis Fungsi):** Tentukan seluruh himpunan penyelesaian real dari persamaan:
>    $$(x - 3)^{x^2 - 4} = (x - 3)^{3x}$$
>
> 3. **(Topik Persamaan Eksponen Bentuk Kuadrat):** Diketahui persamaan eksponen:
>    $$3^{2x+1} - 28 \cdot 3^x + 9 = 0$$
>    * a. Tentukan himpunan penyelesaian nilai $x$ yang memenuhi persamaan tersebut!
>    * b. Jika akar-akarnya adalah $x_1$ dan $x_2$ dengan $x_1 < x_2$, hitung nilai dari $2x_1 + 3x_2$!
>
> 4. **(Topik Pertidaksamaan Eksponen):** Tentukan himpunan penyelesaian dari pertidaksamaan:
>    $$\left(\frac{1}{2}\right)^{x^2 - 2x - 5} \le \left(\frac{1}{8}\right)^{x - 1}$$
>
> 5. **(Topik Aplikasi Pemodelan Eksponensial):** Suatu koloni bakteri berkembang biak dengan laju pertumbuhan eksponensial mengikuti model $N(t) = N_0 \cdot 2^{k t}$. Mula-mula pada pukul 08.00 terdapat $N_0 = 500$ bakteri. Pada pukul 10.00 jumlah bakteri menjadi $2.000$ bakteri.
>    * a. Tentukan nilai konstanta pertumbuhan $k$!
>    * b. Berapakah jumlah populasi bakteri pada pukul 14.00 di hari yang sama?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Aljabar Eksponen & Bentuk Akar):**
  * **a. Penyederhanaan Pecahan Eksponen:**
    * Nyatakan basis angka dalam bilangan prima ($4 = 2^2$):
      $$\text{Pembilang: } (2^3 \cdot a^{-2} \cdot b^4)^2 = 2^6 \cdot a^{-4} \cdot b^8$$
      $$\text{Penyebut: } (2^2 \cdot a^3 \cdot b^{-1})^3 = 2^6 \cdot a^9 \cdot b^{-3}$$
    * Bagikan suku-suku sejenis:
      $$\frac{2^6 \cdot a^{-4} \cdot b^8}{2^6 \cdot a^9 \cdot b^{-3}} = 2^{6-6} \cdot a^{-4 - 9} \cdot b^{8 - (-3)} = 2^0 \cdot a^{-13} \cdot b^{11} = \frac{b^{11}}{a^{13}}$$
  * **b. Merasionalkan Penyebut Pecahan:**
    $$\frac{6}{\sqrt{7} - \sqrt{3}} \times \frac{\sqrt{7} + \sqrt{3}}{\sqrt{7} + \sqrt{3}} = \frac{6(\sqrt{7} + \sqrt{3})}{(\sqrt{7})^2 - (\sqrt{3})^2} = \frac{6(\sqrt{7} + \sqrt{3})}{7 - 3} = \frac{6(\sqrt{7} + \sqrt{3})}{4} = \frac{3}{2}\left(\sqrt{7} + \sqrt{3}\right)$$
  * **c. Akar Bersarang:**
    * $\sqrt{10 - 2\sqrt{21}}$: Cari dua bilangan $a$ dan $b$ dengan $a + b = 10$ dan $a \cdot b = 21$. Diperoleh $a = 7$ dan $b = 3$:
      $$\sqrt{10 - 2\sqrt{21}} = \sqrt{7} - \sqrt{3}$$
    * $\sqrt{8 + \sqrt{60}}$: Ubah $\sqrt{60} = \sqrt{4 \times 15} = 2\sqrt{15}$.  
      Cari bilangan dengan $a + b = 8$ dan $a \cdot b = 15$. Diperoleh $a = 5$ dan $b = 3$:
      $$\sqrt{8 + \sqrt{60}} = \sqrt{8 + 2\sqrt{15}} = \sqrt{5} + \sqrt{3}$$

* **Jawaban Bagian 2 (Persamaan Eksponen Basis Fungsi):**
  $$(x - 3)^{x^2 - 4} = (x - 3)^{3x}$$
  Basis $h(x) = x - 3$, eksponen $f(x) = x^2 - 4$, $g(x) = 3x$.
  * **Kemungkinan 1 (Eksponen Sama):**
    $$x^2 - 4 = 3x \implies x^2 - 3x - 4 = 0 \implies (x - 4)(x + 1) = 0 \implies x = 4 \quad \text{atau} \quad x = -1$$
    *(Keduanya memenuhi).*
  * **Kemungkinan 2 (Basis Bernilai 1):**
    $$x - 3 = 1 \implies x = 4 \quad (\text{sudah diperoleh pada kemungkinan 1}).$$
  * **Kemungkinan 3 (Basis Bernilai 0 dengan Syarat $f(x) > 0$ dan $g(x) > 0$):**
    $$x - 3 = 0 \implies x = 3$$
    *Uji eksponen untuk $x = 3$:*
    $f(3) = 3^2 - 4 = 5 > 0$ (memenuhi), tetapi $g(3) = 3(3) = 9 > 0$ (memenuhi).  
    Karena keduanya bernilai positif ($0^5 = 0^9 = 0$), maka **$x = 3$ memenuhi**!
  * **Kemungkinan 4 (Basis Bernilai -1 dengan Syarat Paritas Sama):**
    $$x - 3 = -1 \implies x = 2$$
    *Uji eksponen untuk $x = 2$:*
    $f(2) = 2^2 - 4 = 0$ (genap), $g(2) = 3(2) = 6$ (genap).  
    Karena keduanya sama-sama bilangan genap ($(-1)^0 = 1$ dan $(-1)^6 = 1$), maka **$x = 2$ memenuhi**!
  * **Himpunan Penyelesaian Lengkap:**
    $$\text{HP} = \{-1, 2, 3, 4\}$$

* **Jawaban Bagian 3 (Persamaan Kuadrat Eksponen):**
  $$3^{2x+1} - 28 \cdot 3^x + 9 = 0 \iff 3 \cdot (3^x)^2 - 28 \cdot (3^x) + 9 = 0$$
  * **a. Menentukan Himpunan Penyelesaian:**
    Misalkan $y = 3^x$ ($y > 0$):
    $$3y^2 - 28y + 9 = 0 \implies (3y - 1)(y - 9) = 0$$
    * $y_1 = \frac{1}{3} \implies 3^x = 3^{-1} \implies x_1 = -1$
    * $y_2 = 9 \implies 3^x = 3^2 \implies x_2 = 2$
    $$\text{HP} = \{-1, 2\}$$
  * **b. Menghitung $2x_1 + 3x_2$:**
    Karena $x_1 = -1 < x_2 = 2$:
    $$2x_1 + 3x_2 = 2(-1) + 3(2) = -2 + 6 = 4$$

* **Jawaban Bagian 4 (Pertidaksamaan Eksponen Basis Pecahan):**
  $$\left(\frac{1}{2}\right)^{x^2 - 2x - 5} \le \left(\frac{1}{8}\right)^{x - 1}$$
  * Samakan basis menjadi $\frac{1}{2}$ di mana $\frac{1}{8} = \left(\frac{1}{2}\right)^3$:
    $$\left(\frac{1}{2}\right)^{x^2 - 2x - 5} \le \left(\frac{1}{2}\right)^{3(x - 1)}$$
  * Karena basis $a = \frac{1}{2}$ berada pada interval $0 < a < 1$, **tanda pertidaksamaan DIBALIK**:
    $$x^2 - 2x - 5 \ge 3(x - 1)$$
    $$x^2 - 2x - 5 \ge 3x - 3 \implies x^2 - 5x - 2 \ge 0$$
  * Tentukan pembuat nol dengan rumus ABC ($a=1, b=-5, c=-2$):
    $$x = \frac{5 \pm \sqrt{(-5)^2 - 4(1)(-2)}}{2} = \frac{5 \pm \sqrt{25 + 8}}{2} = \frac{5 \pm \sqrt{33}}{2}$$
  * Karena tanda pertidaksamaan $\ge 0$ (daerah luar):
    $$\text{HP} = \left\{x \in \mathbb{R} \;\middle|\; x \le \frac{5 - \sqrt{33}}{2} \quad \text{atau} \quad x \ge \frac{5 + \sqrt{33}}{2}\right\}$$

* **Jawaban Bagian 5 (Aplikasi Pemodelan Pertumbuhan Bakteri):**
  * $N(t) = N_0 \cdot 2^{kt}$ dengan $N_0 = 500$.
  * **a. Mencari Nilai Konstanta $k$:**
    Dari pukul 08.00 ke 10.00 selang waktu $t = 2\text{ jam}$ dan $N(2) = 2.000$:
    $$2.000 = 500 \cdot 2^{k(2)} \implies 2^{2k} = \frac{2.000}{500} = 4 = 2^2$$
    $$2k = 2 \implies k = 1$$
    *(Artinya waktu ganda / doubling time populasi adalah setiap 1 jam)*.
  * **b. Jumlah Bakteri pada Pukul 14.00:**
    Selang waktu dari pukul 08.00 ke 14.00 adalah $t = 6\text{ jam}$:
    $$N(6) = 500 \cdot 2^{1 \times 6} = 500 \cdot 2^6 = 500 \cdot 64 = 32.000\text{ bakteri}$$

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Jangan Lupa Membalik Tanda Pertidaksamaan:** Basis berupa pecahan di antara 0 dan 1 (seperti $\frac{1}{2}, \frac{1}{3}, 0{,}1$) selalu membalik arah pertidaksamaan karena fungsinya bersifat monoton turun.
> 2. **Syarat Basis Fungsi Bernilai 0 dan -1:** Selalu uji nilai eksponen saat basis bernilai 0 (eksponen harus positif) dan basis bernilai -1 (paritas kedua eksponen harus sama). Melewatkan pengujian ini adalah penyebab utama hilangnya poin pada soal ujian tingkat lanjut.
> 3. **Definisi Akar Utama:** $\sqrt{x^2} = |x|$, bukan sekadar $x$. Hasil penarikan akar berindeks genap selalu berupa bilangan real non-negatif ($\ge 0$).
