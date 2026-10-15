# Bab 3: Persamaan dan Fungsi Kuadrat
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar dan Persamaan

## Bab 3: Persamaan dan Fungsi Kuadrat

---

### A. Persamaan Kuadrat dan Metode Penyelesaian
Persamaan kuadrat adalah persamaan polinomial satu variabel berderajat dua dengan bentuk baku:

$$a x^2 + b x + c = 0 \quad (a \neq 0)$$
* $a$ = koefisien derajat dua ($a \in \mathbb{R}, a \neq 0$)
* $b$ = koefisien derajat satu ($b \in \mathbb{R}$)
* $c$ = suku tetapan / konstanta ($c \in \mathbb{R}$)
* $x$ = variabel yang dicari nilainya

#### Tiga Metode Klasik Penyelesaian:
1. **Metode Pemfaktoran:**
   $$a x^2 + b x + c = \frac{1}{a}(a x + p)(a x + q) = 0 \quad \text{dengan } p + q = b \text{ dan } p \cdot q = a \cdot c$$
   Diperoleh akar-akar: $x_1 = -\frac{p}{a}$ dan $x_2 = -\frac{q}{a}$.
2. **Metode Melengkapkan Kuadrat Sempurna:**
   $$x^2 + \frac{b}{a}x = -\frac{c}{a} \implies \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$
3. **Rumus Kuadratis (Rumus ABC):**
   $$x_{1,2} = \frac{-b \pm \sqrt{D}}{2a} \quad \text{di mana } D = b^2 - 4ac$$

---

### B. Diskriminan ($D$) dan Jenis-Jenis Akar
Diskriminan ($D = b^2 - 4ac$) adalah besaran penentu sifat dan keberadaan akar-akar persamaan kuadrat tanpa perlu mencari nilai akar tersebut secara eksplisit.

| Nilai Diskriminan ($D$) | Sifat Akar-Akar | Interpretasi Geometris pada Sumbu-$x$ |
| :--- | :--- | :--- |
| **$D > 0$** | Dua akar real berlainan ($x_1 \neq x_2$) | Memotong sumbu-$x$ di **dua titik berbeda** |
| • *$D = k^2$ (kuadrat sempurna)* | Akar-akarnya berupa bilangan **rasional** | Titik potong berupa pecahan/bulat pasti |
| • *$D \neq k^2$* | Akar-akarnya berupa bilangan **irasional** (bentuk akar sekawan) | Titik potong berupa bilangan irasional |
| **$D = 0$** | Dua akar real kembar/sama ($x_1 = x_2 = -\frac{b}{2a}$) | **Menyinggung** sumbu-$x$ di tepat satu titik |
| **$D < 0$** | Tidak memiliki akar real (akar imajiner / kompleks konjugat) | **Tidak memotong** dan tidak menyinggung sumbu-$x$ melayang |

> [!NOTE]
> **Syarat Persamaan Memiliki Akar Real:**
> Jika sebuah soal menyatakan suatu persamaan kuadrat *"memiliki akar-akar real"* (tanpa menyebutkan berlainan atau kembar), maka syarat mutlaknya adalah:
> $$D \ge 0 \iff b^2 - 4ac \ge 0$$

---

### C. Teorema Vieta (Hubungan Akar-Akar dan Koefisien)
Jika $x_1$ dan $x_2$ adalah akar-akar dari persamaan kuadrat $ax^2 + bx + c = 0$:

#### 1. Tiga Rumus Vieta Pokok:
$$x_1 + x_2 = -\frac{b}{a}$$
$$x_1 \cdot x_2 = \frac{c}{a}$$
$$|x_1 - x_2| = \frac{\sqrt{D}}{|a|}$$

#### 2. Ragam Bentuk Aljabar Simetris Turunan:
* **Jumlah Kuadrat:**
  $$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$$
* **Jumlah Pangkat Tiga (Kubik):**
  $$x_1^3 + x_2^3 = (x_1 + x_2)^3 - 3x_1 x_2 (x_1 + x_2)$$
* **Jumlah Pangkat Empat:**
  $$x_1^4 + x_2^4 = \left(x_1^2 + x_2^2\right)^2 - 2(x_1 x_2)^2$$
* **Jumlah Kebalikan:**
  $$\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 x_2}$$
* **Jumlah Kuadrat Kebalikan:**
  $$\frac{1}{x_1^2} + \frac{1}{x_2^2} = \frac{x_1^2 + x_2^2}{(x_1 x_2)^2}$$
* **Selisih Kuadrat:**
  $$x_1^2 - x_2^2 = (x_1 + x_2)(x_1 - x_2) = \left(-\frac{b}{a}\right) \left(\pm \frac{\sqrt{D}}{a}\right)$$

#### 3. Kondisi Khusus Tanda Akar-Akar:
1. **Kedua Akar Positif ($x_1 > 0, x_2 > 0$):**
   $$D \ge 0, \quad x_1 + x_2 > 0, \quad x_1 x_2 > 0$$
2. **Kedua Akar Negatif ($x_1 < 0, x_2 < 0$):**
   $$D \ge 0, \quad x_1 + x_2 < 0, \quad x_1 x_2 > 0$$
3. **Kedua Akar Berlawanan Tanda ($x_1 > 0$ dan $x_2 < 0$):**
   $$x_1 x_2 < 0 \iff \frac{c}{a} < 0 \iff a \cdot c < 0$$
   *(Jika $ac < 0$, nilai $D = b^2 - 4ac > 0$ selalu terpenuhi otomatis!)*
4. **Kedua Akar Berlawanan ($x_1 = -x_2$):**
   $$x_1 + x_2 = 0 \iff b = 0 \quad (\text{dan } ac < 0)$$
5. **Kedua Akar Saling Berkebalikan ($x_1 = \frac{1}{x_2}$):**
   $$x_1 \cdot x_2 = 1 \iff \frac{c}{a} = 1 \iff a = c \quad (\text{dan } D > 0)$$

---

### D. Menyusun Persamaan Kuadrat Baru (PKB)
Jika suatu persamaan kuadrat baru memiliki akar-akar $\alpha$ dan $\beta$:

#### 1. Rumus Jumlah dan Kali:
$$x^2 - (\alpha + \beta)x + (\alpha \cdot \beta) = 0$$

#### 2. Trik Substitusi Invers Cepat (Transformasi Simetris):
Jika akar-akar baru $\alpha$ dan $\beta$ memiliki hubungan simetris langsung terhadap $x_1$ dan $x_2$, gunakan invers transformasinya langsung ke persamaan awal $ax^2 + bx + c = 0$:
* Akar baru bernilai $k$ lebihnya ($y = x + k \implies x = y - k$):
  $$a(x - k)^2 + b(x - k) + c = 0$$
* Akar baru bernilai $k$ kali lipat ($y = kx \implies x = \frac{y}{k}$):
  $$a\left(\frac{x}{k}\right)^2 + b\left(\frac{x}{k}\right) + c = 0 \iff a x^2 + k b x + k^2 c = 0$$
* Akar baru saling berkebalikan ($y = \frac{1}{x} \implies x = \frac{1}{y}$):
  $$c x^2 + b x + a = 0 \quad (\text{koefisien } a \text{ dan } c \text{ bertukar posisi})$$

---

### E. Fungsi Kuadrat dan Kurva Parabola
Fungsi kuadrat adalah fungsi yang memetakan bilangan real dengan aturan:

$$f(x) = y = a x^2 + b x + c \quad (a \neq 0)$$

#### 1. Titik Puncak / Titik Balik Parabola $(x_p, y_p)$:
* **Sumbu Simetri ($x_p$):** Garis vertikal pembagi parabola menjadi dua bagian kongruen:
  $$x_p = -\frac{b}{2a}$$
* **Nilai Ekstrem Optimum ($y_p$):**
  $$y_p = -\frac{D}{4a} = -\frac{b^2 - 4ac}{4a} = f(x_p)$$
* **Koordinat Titik Puncak:**
  $$\left(-\frac{b}{2a}, -\frac{D}{4a}\right)$$

#### 2. Arah Bukaan Kurva dan Nilai Ekstrem:
* **Jika $a > 0$:** Parabola terbuka ke **atas** $\implies$ grafik memiliki **titik balik minimum** dengan nilai minimum $y_{\min} = -\frac{D}{4a}$.
* **Jika $a < 0$:** Parabola terbuka ke **bawah** $\implies$ grafik memiliki **titik balik maksimum** dengan nilai maksimum $y_{\max} = -\frac{D}{4a}$.

#### 3. Konsep Definit Positif dan Definit Negatif:
* **Definit Positif:** Fungsi kuadrat bernilai positif untuk SELURUH bilangan real $x$ ($f(x) > 0, \ \forall x \in \mathbb{R}$). Parabola melayang seutuhnya di atas sumbu-$x$.
  $$a > 0 \quad \text{dan} \quad D < 0$$
* **Definit Negatif:** Fungsi kuadrat bernilai negatif untuk SELURUH bilangan real $x$ ($f(x) < 0, \ \forall x \in \mathbb{R}$). Parabola melayang seutuhnya di bawah sumbu-$x$.
  $$a < 0 \quad \text{dan} \quad D < 0$$

```text
Definit Positif (a > 0, D < 0)       Definit Negatif (a < 0, D < 0)
         y ▲                                  y ▲
           │    \_/                             │
           │                                  ──┼────────────► x
         ──┼────────────► x                     │    /‾\
           │                                    │
```

#### 4. Kedudukan Garis Terhadap Parabola:
Misalkan garis $y_1 = m x + n$ dan parabola $y_2 = a x^2 + b x + c$. Substitusikan $y_1 = y_2$:
$$a x^2 + (b - m)x + (c - n) = 0$$
Hitung diskriminan persamaan gabungan: $D_{\text{gabung}} = (b - m)^2 - 4a(c - n)$.
* $D_{\text{gabung}} > 0$: Garis **memotong** parabola di **dua titik berbeda**.
* $D_{\text{gabung}} = 0$: Garis **menyinggung** parabola di **satu titik persekutuan**.
* $D_{\text{gabung}} < 0$: Garis **tidak memotong dan tidak menyinggung** parabola.

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 3:**
> Selesaikan rangkaian masalah persamaan dan fungsi kuadrat berikut:
>
> 1. **(Topik Analisis Diskriminan & Parameter $m$):** Diketahui persamaan kuadrat:
>    $$(m - 1)x^2 + 2mx + (m + 2) = 0$$
>    * a. Tentukan nilai $m$ agar persamaan tersebut memiliki dua akar real kembar!
>    * b. Tentukan batas nilai $m$ agar persamaan tersebut memiliki dua akar real yang berlainan tanda!
>
> 2. **(Topik Teorema Vieta Tingkat Tinggi):** Jika $x_1$ dan $x_2$ adalah akar-akar dari persamaan kuadrat $2x^2 - 6x + 1 = 0$, hitung nilai dari:
>    * a. $x_1^2 + x_2^2$
>    * b. $x_1^3 + x_2^3$
>    * c. $|x_1 - x_2|$
>    * d. $\frac{x_1}{x_2} + \frac{x_2}{x_1}$
>
> 3. **(Topik Menyusun Persamaan Kuadrat Baru):** Diketahui akar-akar persamaan $x^2 - 4x + 2 = 0$ adalah $\alpha$ dan $\beta$. Susunlah persamaan kuadrat baru yang akar-akarnya adalah:
>    * a. $(\alpha + 3)$ dan $(\beta + 3)$
>    * b. $\frac{1}{\alpha}$ dan $\frac{1}{\beta}$
>    * c. $\alpha^2$ dan $\beta^2$
>
> 4. **(Topik Fungsi Kuadrat, Titik Puncak, & Garis Singgung):** Sebuah fungsi kuadrat $f(x) = -x^2 + 4x + k$ memiliki titik puncak $P$.
>    * a. Tentukan sumbu simetri dan koordinat titik puncak fungsi tersebut dinyatakan dalam $k$!
>    * b. Jika nilai maksimum fungsi tersebut adalah $9$, tentukan nilai konstanta $k$!
>    * c. Tentukan persamaan garis singgung pada parabola tersebut yang sejajar dengan garis $y = 2x - 5$!
>
> 5. **(Topik Pemodelan Kontekstual Optimasi Luas):** Seorang peternak ingin memagari sebidang tanah berbentuk persegi panjang di tepi sungai lurus. Sisi yang berbatasan langsung dengan sungai tidak perlu dipagari. Jika kawat pagar yang tersedia memiliki panjang total $120\text{ meter}$:
>    * a. Buat model fungsi kuadrat untuk luas tanah yang dipagari ($L$) sebagai fungsi dari lebar tanah ($x$)!
>    * b. Tentukan ukuran panjang dan lebar tanah agar luas yang terpagari mencapai nilai maksimum mutlak!
>    * c. Berapakah luas maksimum tanah yang dapat dipagari peternak tersebut?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Diskriminan & Parameter $m$):**
  * Persamaan: $(m - 1)x^2 + 2mx + (m + 2) = 0$, dengan syarat $a = m - 1 \neq 0 \iff m \neq 1$.
  * Koefisien: $a = m - 1$, $b = 2m$, $c = m + 2$.
  * Diskriminan:
    $$D = b^2 - 4ac = (2m)^2 - 4(m - 1)(m + 2) = 4m^2 - 4(m^2 + m - 2) = 4m^2 - 4m^2 - 4m + 8 = -4m + 8$$
  * **a. Dua Akar Real Kembar ($D = 0$):**
    $$-4m + 8 = 0 \implies 4m = 8 \implies m = 2$$
    *(Karena $m = 2 \neq 1$, nilai $m = 2$ sah memenuhi).*
  * **b. Dua Akar Berlawanan Tanda:**
    Syarat utama adalah hasil kali akar negatif: $x_1 x_2 = \frac{c}{a} < 0$:
    $$\frac{m + 2}{m - 1} < 0$$
    Pembuat nol: $m = -2$ dan $m = 1$.  
    Uji interval: nilai pecahan negatif pada interval di antara pembuat nol:
    $$-2 < m < 1$$
    *(Uji $D$: jika $-2 < m < 1$, maka $-4m + 8 > 0$ selalu terpenuhi otomatis!)*  
    Maka batas nilai $m$ adalah **$-2 < m < 1$**.

* **Jawaban Bagian 2 (Teorema Vieta $2x^2 - 6x + 1 = 0$):**
  * $a = 2, b = -6, c = 1$.
  * $x_1 + x_2 = -\frac{-6}{2} = 3$ dan $x_1 x_2 = \frac{1}{2}$.
  * Diskriminan: $D = (-6)^2 - 4(2)(1) = 36 - 8 = 28$.
  * **a. Jumlah Kuadrat:**
    $$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = 3^2 - 2\left(\frac{1}{2}\right) = 9 - 1 = 8$$
  * **b. Jumlah Pangkat Tiga:**
    $$x_1^3 + x_2^3 = (x_1 + x_2)^3 - 3x_1 x_2 (x_1 + x_2) = 3^3 - 3\left(\frac{1}{2}\right)(3) = 27 - \frac{9}{2} = \frac{45}{2} = 22{,}5$$
  * **c. Selisih Mutlak:**
    $$|x_1 - x_2| = \frac{\sqrt{D}}{|a|} = \frac{\sqrt{28}}{2} = \frac{2\sqrt{7}}{2} = \sqrt{7}$$
  * **d. Jumlah Pecahan:**
    $$\frac{x_1}{x_2} + \frac{x_2}{x_1} = \frac{x_1^2 + x_2^2}{x_1 x_2} = \frac{8}{1/2} = 16$$

* **Jawaban Bagian 3 (Menyusun PKB dari $x^2 - 4x + 2 = 0$):**
  * Akar-akar awal: $\alpha + \beta = 4$ dan $\alpha \cdot \beta = 2$.
  * **a. Akar $(\alpha + 3)$ dan $(\beta + 3)$:**
    * Menggunakan metode substitusi invers cepat ($y = x + 3 \implies x = y - 3$):
      $$(x - 3)^2 - 4(x - 3) + 2 = 0 \implies (x^2 - 6x + 9) - 4x + 12 + 2 = 0$$
      $$x^2 - 10x + 23 = 0$$
  * **b. Akar $\frac{1}{\alpha}$ dan $\frac{1}{\beta}$:**
    * Tukar posisi koefisien $a$ dan $c$ ($a=1, c=2$):
      $$2x^2 - 4x + 1 = 0$$
  * **c. Akar $\alpha^2$ dan $\beta^2$:**
    * Jumlah akar baru: $J = \alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 4^2 - 2(2) = 16 - 4 = 12$.
    * Kali akar baru: $K = \alpha^2 \cdot \beta^2 = (\alpha\beta)^2 = 2^2 = 4$.
    * Persamaan:
      $$x^2 - 12x + 4 = 0$$

* **Jawaban Bagian 4 (Fungsi Kuadrat & Garis Singgung):**
  * $f(x) = -x^2 + 4x + k \implies a = -1, b = 4, c = k$.
  * **a. Sumbu Simetri & Titik Puncak:**
    * Sumbu simetri: $x_p = -\frac{b}{2a} = -\frac{4}{2(-1)} = 2$.
    * Ordinat puncak: $y_p = f(2) = -(2)^2 + 4(2) + k = -4 + 8 + k = k + 4$.
    * Titik puncak: $P(2, k + 4)$.
  * **b. Nilai Maksimum adalah 9:**
    $$y_p = 9 \implies k + 4 = 9 \implies k = 5$$
    *(Sehingga fungsi adalah $f(x) = -x^2 + 4x + 5$)*.
  * **c. Garis Singgung Sejajar $y = 2x - 5$:**
    * Garis sejajar memiliki gradien sama: $m = 2$.
    * Misal persamaan garis singgung adalah $y = 2x + c_g$.
    * Substitusikan ke parabola $-x^2 + 4x + 5 = 2x + c_g$:
      $$x^2 - 2x + (c_g - 5) = 0$$
    * Syarat menyinggung ($D = 0$):
      $$D = (-2)^2 - 4(1)(c_g - 5) = 0 \implies 4 - 4c_g + 20 = 0 \implies 4c_g = 24 \implies c_g = 6$$
    * Maka persamaan garis singgung adalah:
      $$y = 2x + 6$$

* **Jawaban Bagian 5 (Optimasi Pemodelan Tanah):**
  * Misalkan lebar tanah tegak lurus sungai adalah $x$ (ada dua sisi selebar $x$).
  * Panjang sisi yang sejajar sungai adalah $p$.
  * Panjang kawat: $2x + p = 120 \implies p = 120 - 2x$.
  * **a. Model Fungsi Luas:**
    $$L(x) = p \times x = (120 - 2x) \cdot x = -2x^2 + 120x$$
  * **b. Ukuran Agar Luas Maksimum:**
    Fungsi kuadrat $L(x) = -2x^2 + 120x$ memiliki $a = -2$ dan $b = 120$.
    * Lebar optimum ($x_p$):
      $$x = -\frac{b}{2a} = -\frac{120}{2(-2)} = \frac{120}{4} = 30\text{ meter}$$
    * Panjang optimum ($p$):
      $$p = 120 - 2(30) = 120 - 60 = 60\text{ meter}$$
  * **c. Luas Maksimum:**
    $$L_{\max} = p \times x = 60\text{ m} \times 30\text{ m} = 1.800\text{ m}^2$$
    *(Atau dihitung lewat $-\frac{D}{4a} = -\frac{120^2 - 0}{4(-2)} = \frac{14.400}{8} = 1.800\text{ m}^2$)*.

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Syarat Memiliki Akar Real:** Selalu gunakan $D \ge 0$, bukan sekadar $D > 0$. Akar kembar ($D = 0$) adalah bilangan real yang sah.
> 2. **Definit Positif dan Definit Negatif:** Ingat bahwa kedua jenis definit sama-sama mensyaratkan **$D < 0$** (parabola tidak boleh menyentuh sumbu-$x$). Tanda definit ditentukan murni oleh tanda koefisien $a$ ($a > 0$ untuk positif, $a < 0$ untuk negatif).
> 3. **Perjanjian Tanda Selisih Akar:** Nilai $|x_1 - x_2| = \frac{\sqrt{D}}{|a|}$ selalu positif mutlak. Jika soal menanyakan $(x_1 - x_2)$ tanpa tanda mutlak di mana $x_1 < x_2$, nilainya adalah $-\frac{\sqrt{D}}{|a|}$.
