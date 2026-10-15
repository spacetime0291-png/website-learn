# Bab 2: Vektor
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 2: Vektor

---

### A. Hakikat Besaran Vektor dan Representasi Grafis
Vektor adalah besaran fisika yang memiliki dua karakteristik mendasar sekaligus: **nilai (magnitudo/panjang)** dan **arah**. Besaran skalar hanya memiliki nilai tanpa keterikatan arah.

* **Representasi Grafis:** Digambarkan dengan ruas garis berarah (anak panah):
  * **Titik Tangkap (Pangkal):** Posisi titik kerja gaya atau partikel mula-mula.
  * **Panjang Panah:** Merepresentasikan magnitudo/besar vektor berbanding lurus dengan skalanya.
  * **Mata Panah:** Menunjukkan arah kerja vektor.
* **Notasi Simbolik:**
  * Vektor dituliskan dengan huruf bertanda panah di atasnya ($\vec{F}, \vec{v}, \vec{a}$) atau huruf tebal ($\mathbf{F}, \mathbf{v}$).
  * Besar (panjang) vektor ditulis dengan tanda mutlak $|\vec{F}|$ atau huruf biasa $F$, dan **selalu bernilai skalar tak-negatif** ($F \ge 0$).
* **Vektor Lawan (Invers):**
  * Vektor $-\vec{A}$ adalah vektor yang memiliki besar sama dengan $\vec{A}$, namun memiliki arah tepat berlawanan ($180^\circ$).

---

### B. Metode Grafis Penjumlahan dan Pengurangan Vektor
1. **Metode Segitiga:** Khusus untuk penjumlahan 2 vektor. Pangkal vektor kedua dihimpitkan pada ujung vektor pertama. Resultan $\vec{R} = \vec{A} + \vec{B}$ ditarik dari pangkal vektor pertama ke ujung vektor kedua.
2. **Metode Poligon:** Digunakan untuk penjumlahan $\ge 3$ vektor secara berantai dari ujung ke pangkal berturut-turut. Resultan ditarik dari pangkal vektor pertama menuju ujung vektor terakhir.
3. **Metode Jajaran Genjang:** Pangkal kedua vektor dihimpitkan pada satu titik tangkap yang sama. Dibentuk jajaran genjang imajiner; vektor resultan adalah diagonal utama yang berpangkal pada titik tangkap persekutuan tersebut.
4. **Pengurangan Vektor Secara Grafis:**
   $$\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$$
   Membalik arah vektor $\vec{B}$ sebesar $180^\circ$ lalu menjumlahkannya dengan vektor $\vec{A}$.

---

### C. Resultan Dua Vektor Berdasarkan Sudut Apit ($\theta$)
Jika dua vektor $\vec{A}$ dan $\vec{B}$ bekerja pada satu titik tangkap dengan membentuk sudut apit $\theta$ ($0^\circ \le \theta \le 180^\circ$):

> [!NOTE]
> **Hukum Kosinus Penjumlahan dan Selisih Vektor:**
> $$R = |\vec{A} + \vec{B}| = \sqrt{A^2 + B^2 + 2AB \cos\theta}$$
> $$S = |\vec{A} - \vec{B}| = \sqrt{A^2 + B^2 - 2AB \cos\theta}$$
> * $A, B$ = besar magnitudo masing-masing vektor
> * $\theta$ = sudut apit antara vektor $\vec{A}$ dan $\vec{B}$
> * $R$ = besar vektor resultan penjumlahan
> * $S$ = besar vektor selisih pengurangan

#### Arah Vektor Resultan (Aturan Sinus):
$$\frac{R}{\sin\theta} = \frac{A}{\sin\beta} = \frac{B}{\sin\alpha}$$
* $\alpha$ = sudut antara resultan $R$ dengan vektor $\vec{A}$
* $\beta$ = sudut antara resultan $R$ dengan vektor $\vec{B}$

#### Teorema Sudut Apit Istimewa yang Wajib Dikuasai:
| Sudut Apit ($\theta$) | Nilai $\cos\theta$ | Nilai Resultan ($R$) | Kondisi & Karakteristik Fisis |
| :---: | :---: | :---: | :--- |
| **Searah ($0^\circ$)** | $+1$ | $R_{\max} = A + B$ | Resultan bernilai maksimum mutlak |
| **Berlawanan ($180^\circ$)** | $-1$ | $R_{\min} = |A - B|$ | Resultan bernilai minimum mutlak |
| **Tegak Lurus ($90^\circ$)** | $0$ | $R = \sqrt{A^2 + B^2}$ | Teorema Pythagoras murni; berlaku $R = S$ |
| **Sudut $60^\circ$ ($A = B = F$)** | $+\frac{1}{2}$ | $R = F\sqrt{3}$ | Sering keluar di UTBK/ujian mandiri |
| **Sudut $120^\circ$ ($A = B = F$)** | $-\frac{1}{2}$ | $R = F$ | Resultan sama persis dengan besar vektor asal! |

> [!TIP]
> **Trik Cepat Ujian:**
> 1. Dua vektor memiliki besar resultan sama dengan besar selisihnya ($|\vec{A} + \vec{B}| = |\vec{A} - \vec{B}|$) **hanya terjadi jika kedua vektor saling tegak lurus ($\theta = 90^\circ$)**.
> 2. Dua vektor sama besar menghasilkan resultan sebesar vektor itu sendiri jika sudut apitnya tepat **$120^\circ$**.

---

### D. Penguraian Vektor dan Resultan Analitik (Sumbu Kartesius)
Setiap vektor pada bidang dua dimensi dapat diuraikan menjadi dua komponen saling tegak lurus pada sumbu-$x$ dan sumbu-$y$.

```text
       y ▲
         │       /|
         │      / |
     F_y │  F  /  |
         │    /   |
         │   /θ   |
         └───┴────┴────► x
             F_x
```

* **Penentuan Komponen Berdasarkan Sudut Apit:**
  * Jika sudut $\theta$ diapit terhadap **sumbu-$x$**:
    $$F_x = F \cos\theta, \quad F_y = F \sin\theta$$
  * Jika sudut $\beta$ diapit terhadap **sumbu-$y$**:
    $$F_x = F \sin\beta, \quad F_y = F \cos\beta$$

> [!WARNING]
> **Jebakan Trigonometri:**
> Jangan menghafal buta bahwa sumbu-$x$ selalu $\cos$ dan sumbu-$y$ selalu $\sin$! Gunakan prinsip dasar segitiga siku-siku:
> * Komponen sisi di **samping** sudut apit selalu menggunakan fungsi **kosinus ($\cos$)**.
> * Komponen sisi di **depan** sudut apit selalu menggunakan fungsi **sinus ($\sin$)**.

#### Langkah Analisis Menentukan Resultan Banyak Vektor (Metode Tabel):
1. Uraikan setiap vektor ke sumbu-$x$ dan sumbu-$y$ lengkap dengan tanda positif/negatifnya (ke kanan/atas bernilai $+$, ke kiri/bawah bernilai $-$).
2. Hitung jumlah aljabar komponen:
   $$R_x = \sum F_x \quad \text{dan} \quad R_y = \sum F_y$$
3. Hitung magnitudo total resultan:
   $$R = \sqrt{R_x^2 + R_y^2} = \sqrt{(\sum F_x)^2 + (\sum F_y)^2}$$
4. Tentukan arah sudut resultan terhadap sumbu-$x$ positif:
   $$\tan\alpha = \frac{R_y}{R_x} \implies \alpha = \arctan\left(\frac{R_y}{R_x}\right)$$
   *(Perhatikan kuadran tanda $R_x$ dan $R_y$ untuk menentukan letak kuadran sudut akhir!)*

---

### E. Vektor Satuan di $\mathbb{R}^2$ dan $\mathbb{R}^3$
Vektor satuan adalah vektor tanpa dimensi yang memiliki panjang tepat satu satuan dan berfungsi menentukan arah ruang secara presisi.
* $\hat{i}$ = vektor satuan searah sumbu-$x$ positif
* $\hat{j}$ = vektor satuan searah sumbu-$y$ positif
* $\hat{k}$ = vektor satuan searah sumbu-$z$ positif

* **Notasi Vektor Satuan Ruang 3 Dimensi:**
  $$\vec{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}$$
* **Besar (Panjang) Vektor Ruang:**
  $$|\vec{A}| = A = \sqrt{A_x^2 + A_y^2 + A_z^2}$$
* **Vektor Satuan Searah Vektor $\vec{A}$:**
  $$\hat{u}_A = \frac{\vec{A}}{|\vec{A}|} = \frac{A_x \hat{i} + A_y \hat{j} + A_z \hat{k}}{\sqrt{A_x^2 + A_y^2 + A_z^2}}$$
* **Operasi Aljabar Penjumlahan & Pengurangan:**
  $$\vec{A} \pm \vec{B} = (A_x \pm B_x)\hat{i} + (A_y \pm B_y)\hat{j} + (A_z \pm B_z)\hat{k}$$

---

### F. Perkalian Vektor: Perkalian Titik (Dot Product) & Perkalian Silang (Cross Product)

#### 1. Perkalian Titik (*Dot Product* / Perkalian Skalar)
Operasi dua vektor yang menghasilkan sebuah **besaran skalar**.
* **Definisi Geometris:**
  $$\vec{A} \cdot \vec{B} = |\vec{A}| |\vec{B}| \cos\theta$$
* **Definisi Aljabar Komponen:**
  $$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$$
* **Sifat Vektor Satuan:**
  $$\hat{i}\cdot\hat{i} = \hat{j}\cdot\hat{j} = \hat{k}\cdot\hat{k} = 1$$
  $$\hat{i}\cdot\hat{j} = \hat{j}\cdot\hat{k} = \hat{k}\cdot\hat{i} = 0$$
* **Teorema Ortogonalitas (Tegak Lurus):**
  Dua vektor saling tegak lurus ($\vec{A} \perp \vec{B}$) jika dan hanya jika:
  $$\vec{A} \cdot \vec{B} = 0$$
* **Proyeksi Skalar dan Vektor Ortogonal:**
  * Proyeksi skalar $\vec{A}$ pada arah $\vec{B}$:
    $$|\vec{c}| = \frac{\vec{A} \cdot \vec{B}}{|\vec{B}|}$$
  * Proyeksi vektor $\vec{A}$ pada arah $\vec{B}$:
    $$\vec{c} = \left(\frac{\vec{A} \cdot \vec{B}}{|\vec{B}|^2}\right)\vec{B}$$
* **Aplikasi Fisis:** Usaha ($W = \vec{F} \cdot \vec{s}$), Fluks Listrik ($\Phi_E = \vec{E} \cdot \vec{A}$), Daya ($P = \vec{F} \cdot \vec{v}$).

#### 2. Perkalian Silang (*Cross Product* / Perkalian Vektor)
Operasi dua vektor yang menghasilkan sebuah **besaran vektor baru** yang arahnya tegak lurus bidang yang dibentuk oleh kedua vektor semula (mengikuti Kaidah Tangan Kanan).
* **Definisi Geometris:**
  $$|\vec{A} \times \vec{B}| = |\vec{A}| |\vec{B}| \sin\theta$$
* **Perhitungan Matriks Determinan $3 \times 3$:**
  $$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix} = (A_y B_z - A_z B_y)\hat{i} - (A_x B_z - A_z B_x)\hat{j} + (A_x B_y - A_y B_x)\hat{k}$$
* **Sifat Siklis & Antikomutatif:**
  $$\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$$
  $$\hat{i} \times \hat{j} = \hat{k}, \quad \hat{j} \times \hat{k} = \hat{i}, \quad \hat{k} \times \hat{i} = \hat{j}$$
  $$\hat{j} \times \hat{i} = -\hat{k}, \quad \hat{k} \times \hat{j} = -\hat{i}, \quad \hat{i} \times \hat{k} = -\hat{j}$$
  $$\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \vec{0}$$
* **Teorema Kesejajaran:**
  Dua vektor saling sejajar ($\vec{A} \parallel \vec{B}$) jika dan hanya jika:
  $$\vec{A} \times \vec{B} = \vec{0}$$
* **Aplikasi Geometris & Fisis:**
  * Luas Jajaran Genjang $= |\vec{A} \times \vec{B}|$, Luas Segitiga $= \frac{1}{2}|\vec{A} \times \vec{B}|$.
  * Momen Gaya (Torsi): $\vec{\tau} = \vec{r} \times \vec{F}$.
  * Gaya Lorentz: $\vec{F} = q(\vec{v} \times \vec{B})$.

---

### G. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 2:**
> Tiga buah vektor gaya sebidang bekerja pada sebuah partikel di titik asal $O(0,0)$ sebagai berikut:
> * $\vec{F}_1 = 20\text{ N}$ berarah mendatar ke kanan (searah sumbu-$x$ positif).
> * $\vec{F}_2 = 20\text{ N}$ membentuk sudut $60^\circ$ di atas sumbu-$x$ positif (kuadran I).
> * $\vec{F}_3 = 10\sqrt{3}\text{ N}$ berarah tegak lurus ke atas (searah sumbu-$y$ positif).
>
> 1. **(Resultan Dua Vektor):** Hitung besar resultan penjumlahan $\vec{R}_{12} = |\vec{F}_1 + \vec{F}_2|$ dan selisihnya $\vec{S}_{12} = |\vec{F}_1 - \vec{F}_2|$!
> 2. **(Metode Analitik Komponen):** Tentukan komponen sumbu-$x$ dan sumbu-$y$ dari masing-masing ketiga gaya ($\vec{F}_1, \vec{F}_2, \vec{F}_3$), lalu hitung resultan total sumbu-$x$ ($R_x$) dan sumbu-$y$ ($R_y$)!
> 3. **(Magnitudo & Arah Resultan Total):** Tentukan besar magnitudo total resultan ketiga gaya ($R_{tot}$) dan tentukan arah sudut $\alpha$ terhadap sumbu-$x$ positif!
> 4. **(Dot Product & Usaha):** Jika partikel tersebut akibat pengaruh gaya mengalami perpindahan dari posisi awal ke posisi akhir dengan vektor perpindahan $\vec{s} = (4\hat{i} + 2\hat{j})\text{ m}$, hitung usaha total yang dilakukan oleh gaya resultan $\vec{R}_{tot}$! Tentukan pula panjang proyeksi skalar gaya resultan pada arah perpindahan!
> 5. **(Cross Product & Momen Gaya):** Jika gaya $\vec{F} = (3\hat{i} + 4\hat{j} - 2\hat{k})\text{ N}$ bekerja pada titik dengan vektor posisi $\vec{r} = (2\hat{i} - \hat{j} + 5\hat{k})\text{ m}$, tentukan vektor momen gaya (torsi $\vec{\tau} = \vec{r} \times \vec{F}$) dan hitung magnitudo besar torsinya!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Resultan Dua Vektor $\vec{F}_1$ dan $\vec{F}_2$):**
  * $F_1 = 20\text{ N}, F_2 = 20\text{ N}, \theta = 60^\circ$ ($\cos 60^\circ = 0{,}5$).
  * Resultan penjumlahan:
    $$R_{12} = \sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \cos 60^\circ} = \sqrt{20^2 + 20^2 + 2(20)(20)(0{,}5)} = \sqrt{400 + 400 + 400} = \sqrt{1200} = 20\sqrt{3}\text{ N}$$
  * Resultan selisih:
    $$S_{12} = \sqrt{F_1^2 + F_2^2 - 2F_1 F_2 \cos 60^\circ} = \sqrt{400 + 400 - 400} = \sqrt{400} = 20\text{ N}$$

* **Jawaban Bagian 2 (Penguraian Komponen Analitis):**
  * Gaya $\vec{F}_1$: $F_{1x} = 20\cos 0^\circ = 20\text{ N}$, $F_{1y} = 20\sin 0^\circ = 0\text{ N}$.
  * Gaya $\vec{F}_2$: $F_{2x} = 20\cos 60^\circ = 20(0{,}5) = 10\text{ N}$, $F_{2y} = 20\sin 60^\circ = 20(\frac{1}{2}\sqrt{3}) = 10\sqrt{3}\text{ N}$.
  * Gaya $\vec{F}_3$: $F_{3x} = 0\text{ N}$, $F_{3y} = 10\sqrt{3}\text{ N}$.
  * Jumlah komponen:
    $$R_x = \sum F_x = 20 + 10 + 0 = 30\text{ N}$$
    $$R_y = \sum F_y = 0 + 10\sqrt{3} + 10\sqrt{3} = 20\sqrt{3}\text{ N}$$

* **Jawaban Bagian 3 (Magnitudo & Arah Resultan Total):**
  * Magnitudo resultan:
    $$R_{tot} = \sqrt{R_x^2 + R_y^2} = \sqrt{(30)^2 + (20\sqrt{3})^2} = \sqrt{900 + 1200} = \sqrt{2100} = 10\sqrt{21}\text{ N} \approx 45{,}8\text{ N}$$
  * Arah sudut terhadap sumbu-$x$ positif:
    $$\tan\alpha = \frac{R_y}{R_x} = \frac{20\sqrt{3}}{30} = \frac{2\sqrt{3}}{3} \approx 1{,}1547 \implies \alpha = \arctan(1{,}1547) \approx 49{,}1^\circ$$

* **Jawaban Bagian 4 (Dot Product & Usaha):**
  * Vektor resultan dalam basis satuan: $\vec{R}_{tot} = (30\hat{i} + 20\sqrt{3}\hat{j})\text{ N}$.
  * Vektor perpindahan: $\vec{s} = (4\hat{i} + 2\hat{j})\text{ m}$.
  * Usaha ($W = \vec{R}_{tot} \cdot \vec{s}$):
    $$W = (30)(4) + (20\sqrt{3})(2) = 120 + 40\sqrt{3}\text{ J} \approx 120 + 69{,}28 = 189{,}28\text{ J}$$
  * Panjang perpindahan: $|\vec{s}| = \sqrt{4^2 + 2^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}\text{ m}$.
  * Proyeksi skalar gaya pada arah $\vec{s}$:
    $$|\vec{R}_{\parallel s}| = \frac{\vec{R}_{tot} \cdot \vec{s}}{|\vec{s}|} = \frac{120 + 40\sqrt{3}}{2\sqrt{5}} = \frac{60 + 20\sqrt{3}}{\sqrt{5}} = 12\sqrt{5} + 4\sqrt{15}\text{ N} \approx 42{,}32\text{ N}$$

* **Jawaban Bagian 5 (Cross Product & Momen Gaya):**
  * $\vec{r} = 2\hat{i} - \hat{j} + 5\hat{k}$ dan $\vec{F} = 3\hat{i} + 4\hat{j} - 2\hat{k}$.
  * Menghitung $\vec{\tau} = \vec{r} \times \vec{F}$ dengan determinan:
    $$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & -1 & 5 \\ 3 & 4 & -2 \end{vmatrix}$$
    * Komponen $\hat{i}$: $(-1)(-2) - (5)(4) = 2 - 20 = -18$
    * Komponen $\hat{j}$: $-\left((2)(-2) - (5)(3)\right) = -(-4 - 15) = -(-19) = +19$
    * Komponen $\hat{k}$: $(2)(4) - (-1)(3) = 8 - (-3) = 11$
  * Maka vektor torsi:
    $$\vec{\tau} = (-18\hat{i} + 19\hat{j} + 11\hat{k})\text{ N}\cdot\text{m}$$
  * Besar magnitudo torsi:
    $$|\vec{\tau}| = \sqrt{(-18)^2 + (19)^2 + (11)^2} = \sqrt{324 + 361 + 121} = \sqrt{806} \approx 28{,}39\text{ N}\cdot\text{m}$$

---

### H. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Dot Product vs Cross Product:** Dot product menghasilkan angka murni (skalar) tanpa penunjuk arah, sedangkan cross product menghasilkan vektor baru yang arahnya saling tegak lurus terhadap kedua vektor pembentuknya.
> 2. **Sifat Antikomutatif Cross Product:** $\vec{A} \times \vec{B} \neq \vec{B} \times \vec{A}$, melainkan $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$. Urutan operasi perkalian silang tidak boleh dibalik!
> 3. **Perjanjian Tanda Kuadran:** Pastikan selalu memeriksa tanda sumbu Kartesius sebelum menggunakan busur tangen ($\arctan$) agar tidak salah menempatkan kuadran sudut akhir.
