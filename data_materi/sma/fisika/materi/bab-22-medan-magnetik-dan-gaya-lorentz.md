# Bab 22: Medan Magnetik dan Gaya Lorentz
**Kategori:** TKA Fisika | **Blok:** Blok 4: Listrik dan Magnet

## Bab 22: Medan Magnetik dan Gaya Lorentz

---

### A. Hakikat Kemagnetan dan Percobaan Oersted
Kemagnetan adalah fenomena interaksi gaya tarik-menarik atau tolak-menolak yang ditimbulkan oleh muatan listrik yang bergerak atau dipol magnetik intrinsik material.

#### 1. Karakteristik Magnet dan Medan Magnet Bumi:
* Setiap magnet selalu memiliki dua kutub: **Kutub Utara (U)** dan **Kutub Selatan (S)**.
* Kutub-kutub senama tolak-menolak, kutub-kutub tak senama tarik-menarik.
* **Tidak Ada Monopol Magnetik:** Jika sebatang magnet dipotong menjadi dua, masing-masing potongan akan tetap membentuk magnet baru yang utuh dengan kutub utara dan selatan sendiri.
* **Medan Magnet Bumi:**
  * Kutub utara magnet jarum kompas menunjuk ke arah utara geografis bumi karena di dekat kutub utara geografis bumi terdapat kutub selatan magnetik bumi.
  * **Sudut Deklinasi:** Sudut penyimpangan arah utara-selatan jarum kompas terhadap arah utara-selatan geografis bumi.
  * **Sudut Inklinasi:** Sudut kemiringan yang dibentuk jarum kompas terhadap bidang datar horizontal bumi (di khatulistiwa inklinasi $\approx 0^\circ$, di kutub bumi inklinasi $\approx 90^\circ$).

#### 2. Percobaan Hans Christian Oersted (1820):
Oersted menemukan bahwa jarum kompas mengalami penyimpangan saat diletakkan di dekat kawat yang dialiri arus listrik. Penemuan ini membuktikan secara revolusioner bahwa **muatan listrik yang bergerak (arus listrik) menghasilkan medan magnetik di sekitarnya**.

#### 3. Kaidah Tangan Kanan untuk Kawat Berarus:
* **Ibu Jari:** Menunjukkan arah kuat arus listrik konvensional ($I$).
* **Empat Jari Melingkar:** Menunjukkan arah putaran garis-garis gaya medan magnetik ($\vec{B}$).

---

### B. Hukum Biot-Savart dan Medan Magnetik Kawat Berarus
Hukum Biot-Savart menyatakan bahwa elemen arus $I \, d\vec{l}$ menghasilkan elemen induksi magnetik $d\vec{B}$ pada titik berjarak $r$:

$$d\vec{B} = \frac{\mu_0}{4\pi} \frac{I \, d\vec{l} \times \hat{r}}{r^2} \implies dB = \frac{\mu_0}{4\pi} \frac{I \, dl \sin\theta}{r^2}$$
* $\mu_0 = 4\pi \times 10^{-7}\text{ T}\cdot\text{m/A} = 4\pi \times 10^{-7}\text{ Wb/(A}\cdot\text{m)}$ = permeabilitas magnetik ruang hampa
* Satuan Induksi Magnetik ($B$): **Tesla ($\text{T}$)** atau **Weber per meter persegi ($\text{Wb/m}^2$)** atau **Gauss** ($1\text{ T} = 10^4\text{ Gauss}$).

#### 1. Medan Magnet di Sekitar Kawat Lurus Panjang:
* **Kawat Lurus Tak Berhingga (Sangat Panjang):**
  Pada titik yang berjarak tegak lurus sejauh $a$ dari kawat:
  $$B = \frac{\mu_0 I}{2\pi a}$$
  * $a$ = jarak tegak lurus titik ke kawat penghantar ($\text{m}$)
* **Kawat Lurus dengan Panjang Terbatas ($L$):**
  Jika titik melihat ujung-ujung kawat dengan sudut apit $\theta_1$ dan $\theta_2$ terhadap garis kawat:
  $$B = \frac{\mu_0 I}{4\pi a} \left(\cos\theta_1 + \cos\theta_2\right) = \frac{\mu_0 I}{4\pi a} \left(\sin\alpha_1 + \sin\alpha_2\right)$$

#### 2. Medan Magnet Kawat Melingkar Berarus:
* **Di Pusat Lingkaran (Jari-jari $R$, $N$ Lilitan):**
  $$B_P = \frac{\mu_0 I N}{2 R}$$
* **Di Pusat Busur Lingkaran dengan Sudut Pusat $\theta$:**
  $$B = \left(\frac{\theta}{360^\circ}\right) \frac{\mu_0 I}{2 R}$$
* **Di Titik pada Garis Sumbu Lingkaran Berjarak $x$ dari Pusat:**
  Jika $r = \sqrt{R^2 + x^2}$ adalah jarak miring dari keliling lingkaran ke titik $P$:
  $$B_x = \frac{\mu_0 I N R^2}{2 (R^2 + x^2)^{3/2}} = \frac{\mu_0 I N \sin^3\alpha}{2 R}$$
  *di mana $\sin\alpha = \frac{R}{\sqrt{R^2 + x^2}}$*.

#### 3. Medan Magnet pada Solenoida (Kumparan Panjang Bersekat Rapat):
Solenoida dengan panjang $L$, total $N$ lilitan, dan kerapatan lilitan per satuan panjang $n = \frac{N}{L}$:
* **Di Tengah-tengah (Pusat) Solenoida:**
  $$B_{\text{pusat}} = \mu_0 n I = \frac{\mu_0 N I}{L}$$
* **Di Ujung-ujung Solenoida:**
  $$B_{\text{ujung}} = \frac{1}{2} \mu_0 n I = \frac{\mu_0 N I}{2 L}$$

#### 4. Medan Magnet pada Toroida (Solenoida yang Melingkar Tertutup):
Toroida memiliki jari-jari efektif rata-rata $r_{\text{ef}} = \frac{r_{\text{dalam}} + r_{\text{luar}}}{2}$:
* **Di Sumbu Lingkaran Dalam Toroida:**
  $$B = \frac{\mu_0 N I}{2\pi r_{\text{ef}}}$$
* Di luar toroida dan di rongga kosong dalam toroida: $B \approx 0$.

---

### C. Hukum Ampere
Hukum Ampere merupakan analogi dari Hukum Gauss dalam elektrostatika. Integral garis dari medan magnetik $\vec{B}$ pada lintasan tertutup sembarang (Loop Ampere) berbanding lurus dengan arus netto yang dilingkupi oleh lintasan tersebut:

$$\oint \vec{B} \cdot d\vec{s} = \mu_0 I_{\text{terlingkupi}}$$

---

### D. Gaya Lorentz pada Kawat Berarus Listrik
Kawat berpenghantar yang dialiri arus listrik $I$ dan berada di dalam medan magnetik luar $\vec{B}$ akan mengalami gaya magnetik yang disebut **Gaya Lorentz**.

#### 1. Persamaan Vektor dan Skalar Gaya Lorentz Kawat:
$$\vec{F} = I (\vec{L} \times \vec{B}) \implies F = B \cdot I \cdot L \sin\theta$$
* $F$ = gaya Lorentz ($\text{Newton, N}$)
* $B$ = kuat medan magnetik ($\text{Tesla, T}$)
* $I$ = kuat arus listrik ($\text{Ampere, A}$)
* $L$ = panjang kawat yang terendam dalam medan magnetik ($\text{m}$)
* $\theta$ = sudut apit antara arah kawat berarus ($\vec{I}$) dengan arah medan magnetik ($\vec{B}$)
* **Kondisi Khusus:**
  * Jika kawat sejajar medan magnet ($\theta = 0^\circ$ atau $180^\circ$): $F = 0$.
  * Jika kawat tegak lurus medan magnet ($\theta = 90^\circ$): gaya mencapai maksimum mutlak $F_{\max} = B I L$.

#### 2. Kaidah Tangan Kanan untuk Kawat Berarus:
* **Ibu Jari:** Arah arus listrik ($I$).
* **Empat Jari Diluruskan:** Arah medan magnetik ($\vec{B}$).
* **Telapak Tangan Terbuka:** Arah dorongan gaya Lorentz ($\vec{F}$).

---

### E. Gaya Magnetik Antara Dua Kawat Sejajar Berarus
Dua kawat penghantar lurus panjang yang dipasang sejajar berjarak $a$ dan masing-masing dialiri arus $I_1$ dan $I_2$ akan saling memberikan gaya magnetik akibat medan magnet yang ditimbulkan kawat pasangannya:

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi a}$$
* $\frac{F}{L}$ = besar gaya magnetik per satuan panjang kawat ($\text{N/m}$)
* $a$ = jarak pisah antara kedua kawat ($\text{m}$)

> [!IMPORTANT]
> **Kaidah Interaksi Arah Arus Kawat Sejajar:**
> * Jika kedua arus **SEARAH** $\implies$ kawat saling **TARIK-MENARIK**.
> * Jika kedua arus **BERLAWANAN ARAH** $\implies$ kawat saling **TOLAK-MENOLAK**.
> *(Perhatian: Karakteristik ini berlawanan dengan hukum muatan elektrostatik di mana muatan sejenis tolak-menolak! Jangan sampai terbalik!)*

---

### F. Gaya Lorentz pada Muatan Titik yang Bergerak
Muatan listrik $q$ yang bergerak dengan kecepatan $\vec{v}$ di dalam medan magnetik $\vec{B}$ akan mengalami gaya defleksi magnetik:

$$\vec{F} = q (\vec{v} \times \vec{B}) \implies F = |q| \cdot v \cdot B \sin\theta$$
* $q$ = besar muatan listrik ($\text{Coulomb, C}$)
* $v$ = kelajuan partikel ($\text{m/s}$)
* $B$ = kuat medan magnetik ($\text{Tesla, T}$)
* $\theta$ = sudut apit antara arah gerak vektor $\vec{v}$ dan medan magnetik $\vec{B}$

#### 1. Kaidah Tangan Kanan untuk Muatan Bergerak:
* **Ibu Jari:** Arah vektor kecepatan partikel ($\vec{v}$).
* **Empat Jari:** Arah vektor medan magnetik ($\vec{B}$).
* **Telapak Tangan:** Arah gaya Lorentz ($\vec{F}$) untuk **muatan positif ($+q$)**, seperti proton atau partikel alfa.
* **Punggung Tangan:** Arah gaya Lorentz ($\vec{F}$) untuk **muatan negatif ($-q$)**, seperti elektron.

#### 2. Bentuk Lintasan Partikel dalam Medan Magnet Homogen:
1. **$\theta = 0^\circ$ atau $180^\circ$ ($\vec{v} \parallel \vec{B}$):**
   * Gaya magnetik $F = 0$.
   * Partikel bergerak lurus beraturan (**GLB**) tanpa perubahan laju maupun arah.
2. **$\theta = 90^\circ$ ($\vec{v} \perp \vec{B}$):**
   * Gaya Lorentz selalu tegak lurus vektor kecepatan ($\vec{F} \perp \vec{v}$), sehingga gaya ini tidak melakukan usaha ($W = \vec{F} \cdot d\vec{s} = 0$) dan **kelajuan partikel konstan**.
   * Gaya Lorentz murni berfungsi sebagai **gaya sentripetal ($F_L = F_s$)**, memaksa partikel menempuh lintasan **Gerak Melingkar Beraturan (GMB)**:
     $$|q| v B = \frac{m v^2}{R} \implies R = \frac{m v}{|q| B} = \frac{p}{|q| B} = \frac{\sqrt{2 m E_k}}{|q| B}$$
   * **Periode Orbit ($T$) dan Frekuensi Siklotron ($f$):**
     $$T = \frac{2\pi R}{v} = \frac{2\pi m}{|q| B} \quad \iff \quad f = \frac{1}{T} = \frac{|q| B}{2\pi m}$$
     *(Catatan Fundamental: Periode dan frekuensi siklotron sama sekali tidak bergantung pada kelajuan partikel $v$ maupun jari-jari lintasan $R$!)*
3. **$0^\circ < \theta < 90^\circ$ (Sudut Miring Sembarang):**
   * Kecepatan diuraikan menjadi dua komponen:
     * Komponen sejajar medan: $v_\parallel = v \cos\theta \implies$ menghasilkan gerak translasi lurus konstan.
     * Komponen tegak lurus medan: $v_\perp = v \sin\theta \implies$ menghasilkan gerak melingkar berjari-jari $R = \frac{m v \sin\theta}{|q| B}$.
   * Gabungan kedua gerak menghasilkan lintasan **heliks (spiral)** dengan panjang langkah (*pitch*):
     $$p = v_\parallel \cdot T = (v \cos\theta) \left(\frac{2\pi m}{|q| B}\right)$$

#### 3. Gaya Lorentz Total (Gaya Elektromagnetik Gabungan):
Jika partikel bergerak di dalam daerah yang secara simultan memiliki medan listrik $\vec{E}$ dan medan magnetik $\vec{B}$:
$$\vec{F}_{\text{tot}} = \vec{F}_E + \vec{F}_B = q \left(\vec{E} + \vec{v} \times \vec{B}\right)$$

#### 4. Aplikasi Teknologi Partikel Bermuatan:
* **Selektor Kecepatan (Eksperimen J.J. Thomson):**
  Medan listrik $\vec{E}$ dan medan magnetik $\vec{B}$ diatur saling tegak lurus sehingga gaya listrik dan gaya magnetik saling meniadakan ($F_E = F_B$):
  $$q E = q v B \implies v = \frac{E}{B}$$
  Hanya partikel dengan kelajuan tepat $v = E/B$ yang dapat lolos lurus tanpa terbelokkan.
* **Spektrometer Massa:**
  Setelah lolos dari selektor kecepatan, partikel dibelokkan dalam medan magnetik murni. Karena jari-jari $R = \frac{m v}{q B}$, ion dengan perbandingan rasio massa terhadap muatan ($m/q$) berbeda akan mendarat pada detektor di posisi yang berbeda, memungkinkan pemisahan isotop.

---

### G. Momen Gaya (Torsi) pada Loop Kawat Berarus & Motor Listrik
Sebuah kumparan kawat datar tertutup yang terdiri dari $N$ lilitan berluas penampang $A$ dialiri arus $I$ di dalam medan magnetik homogen $\vec{B}$ akan mengalami kopel gaya yang menghasilkan momen gaya putar (torsi):

$$\vec{\tau} = \vec{\mu} \times \vec{B} \implies \tau = N \cdot I \cdot A \cdot B \sin\theta$$
* $\vec{\mu} = N I \vec{A}$ = vektor momen dipol magnetik kumparan ($\text{A}\cdot\text{m}^2$)
* $\theta$ = sudut antara vektor normal bidang kumparan ($\hat{n}$) dengan arah medan magnetik $\vec{B}$
* Jika $\alpha$ adalah sudut antara **bidang kumparan itu sendiri** dengan garis medan magnet $\vec{B}$, maka $\theta = 90^\circ - \alpha$, sehingga:
  $$\tau = N \cdot I \cdot A \cdot B \cos\alpha$$
* **Prinsip Kerja Motor Listrik DC:** Torsi magnetik memutar rotor kumparan secara berkelanjutan dengan bantuan komutator cincin belah yang membalik arah arus setiap setengah putaran.

---

### H. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 22:**
> Sekelompok peneliti melakukan serangkaian eksperimen elektromagnetik di laboratorium:
>
> 1. **(Topik Induksi Magnetik Kawat Kombinasi):** Seutas kawat penghantar dialiri arus listrik $I = 10\text{ A}$. Kawat tersebut dibentuk menjadi kawat lurus panjang yang di tengah-tengahnya dibuat lengkungan setengah lingkaran berjari-jari $R = 5\pi\text{ cm} = 5\pi \times 10^{-2}\text{ m}$. Titik $P$ berada tepat di pusat kelengkungan setengah lingkaran tersebut.
>    * a. Hitung induksi magnetik di titik $P$ yang disumbangkan oleh bagian kawat setengah lingkaran saja! Tentukan pula arah medannya (masuk atau keluar bidang)!
>    * b. Hitung induksi magnetik di titik $P$ yang disumbangkan oleh bagian kawat lurus panjang saja!
>    * c. Tentukan besar dan arah resultan induksi magnetik total di titik $P$ jika arah medan kedua bagian kawat tersebut searah!
>
> 2. **(Topik Solenoida & Toroida):**
>    * a. Sebuah solenoida memiliki panjang $L = 40\text{ cm} = 0{,}4\text{ m}$ dan terdiri dari $800\text{ lilitan}$. Jika solenoida dialiri arus $I = 2\text{ A}$, tentukan induksi magnetik di pusat solenoida dan di salah satu ujungnya!
>    * b. Jika kawat solenoida tersebut dibengkokkan membentuk toroida dengan jari-jari efektif rata-rata $r = 10\text{ cm} = 0{,}1\text{ m}$ dan dialiri arus yang sama, tentukan induksi magnetik di sumbu dalam toroida tersebut!
>
> 3. **(Topik Gaya Antar Kawat Sejajar):** Tiga kawat lurus panjang sejajar diletakkan vertikal pada bidang kertas: kawat 1 ($I_1 = 2\text{ A}$ ke atas), kawat 2 ($I_2 = 4\text{ A}$ ke atas), dan kawat 3 ($I_3 = 6\text{ A}$ ke bawah). Jarak kawat 1 ke kawat 2 adalah $d_1 = 10\text{ cm}$, dan jarak kawat 2 ke kawat 3 adalah $d_2 = 20\text{ cm}$.
>    * a. Tentukan besar dan arah gaya Lorentz per satuan panjang yang dialami oleh kawat 2 akibat interaksi dengan kawat 1 dan kawat 3!
>    * b. Tentukan di mana posisi sebuah kawat baru bermuatan arus harus diletakkan agar gaya magnetik total pada kawat tersebut bernilai nol jika hanya ditinjau interaksinya terhadap kawat 1 dan kawat 2!
>
> 4. **(Topik Partikel Bermuatan & Spektrometer):** Sebuah proton ($m_p = 1{,}67 \times 10^{-27}\text{ kg}, q = +1{,}6 \times 10^{-19}\text{ C}$) dipercepat dari keadaan diam oleh beda potensial listrik $V = 2000\text{ Volt}$, kemudian memasuki daerah medan magnetik homogen $B = 0{,}2\text{ Tesla}$ secara tegak lurus ($\theta = 90^\circ$).
>    * a. Hitung kecepatan proton saat tepat memasuki medan magnetik!
>    * b. Hitung besar gaya Lorentz yang bekerja pada proton dan tentukan jari-jari orbit lingkaran lintasannya!
>    * c. Hitung periode orbit putaran serta frekuensi siklotron dari proton tersebut!
>
> 5. **(Topik Torsi Motor Listrik):** Sebuah kumparan persegi panjang berukuran $10\text{ cm} \times 5\text{ cm}$ terdiri dari 200 lilitan kawat tembaga dan dialiri arus $I = 1{,}5\text{ A}$. Kumparan ditempatkan di dalam medan magnetik homogen $B = 0{,}4\text{ T}$.
>    * a. Hitung momen gaya (torsi) maksimum yang dapat dihasilkan kumparan tersebut!
>    * b. Hitung torsi saat bidang kumparan membentuk sudut $30^\circ$ terhadap arah garis medan magnetik!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Kawat Kombinasi di Titik $P$):**
  * $I = 10\text{ A}$, $R = 5\pi \times 10^{-2}\text{ m}$, $\mu_0 = 4\pi \times 10^{-7}\text{ T}\cdot\text{m/A}$.
  * **a. Bagian Setengah Lingkaran ($\theta = 180^\circ$):**
    $$B_{\text{lingkar}} = \frac{1}{2} \left(\frac{\mu_0 I}{2 R}\right) = \frac{\mu_0 I}{4 R} = \frac{4\pi \times 10^{-7} \times 10}{4 \times (5\pi \times 10^{-2})} = \frac{40\pi \times 10^{-7}}{20\pi \times 10^{-2}} = 2 \times 10^{-5}\text{ Tesla}$$
    *Arah:* Mengikuti kaidah tangan kanan putaran arus (misalkan arus berputar searah jarum jam $\to$ arah medan masuk bidang tegak lurus $\otimes$).
  * **b. Bagian Kawat Lurus:**
    Titik $P$ berjarak tegak lurus $a = R = 5\pi \times 10^{-2}\text{ m}$:
    $$B_{\text{lurus}} = \frac{\mu_0 I}{2\pi a} = \frac{4\pi \times 10^{-7} \times 10}{2\pi \times (5\pi \times 10^{-2})} = \frac{40\pi \times 10^{-7}}{10\pi^2 \times 10^{-2}} = \frac{4}{\pi} \times 10^{-5}\text{ Tesla} \approx 1{,}273 \times 10^{-5}\text{ Tesla}$$
  * **c. Resultan Medan Magnet Total di Titik $P$:**
    Karena arah medan kedua komponen sama-sama masuk bidang ($\otimes$):
    $$B_{\text{tot}} = B_{\text{lingkar}} + B_{\text{lurus}} = 2 \times 10^{-5} + 1{,}273 \times 10^{-5} = 3{,}273 \times 10^{-5}\text{ Tesla} \quad (\text{masuk bidang})$$

* **Jawaban Bagian 2 (Solenoida & Toroida):**
  * **a. Solenoida ($L = 0{,}4\text{ m}, N = 800, I = 2\text{ A}$):**
    * Medan di pusat:
      $$B_{\text{pusat}} = \frac{\mu_0 N I}{L} = \frac{(4\pi \times 10^{-7}) \times 800 \times 2}{0{,}4} = \frac{6400\pi \times 10^{-7}}{0{,}4} = 16.000\pi \times 10^{-7} = 1{,}6\pi \times 10^{-3}\text{ T} \approx 5{,}03 \times 10^{-3}\text{ T}$$
    * Medan di ujung:
      $$B_{\text{ujung}} = \frac{1}{2} B_{\text{pusat}} = \frac{1{,}6\pi \times 10^{-3}}{2} = 0{,}8\pi \times 10^{-3}\text{ T} \approx 2{,}51 \times 10^{-3}\text{ T}$$
  * **b. Toroida ($r = 0{,}1\text{ m}, N = 800, I = 2\text{ A}$):**
    $$B_{\text{toroida}} = \frac{\mu_0 N I}{2\pi r} = \frac{(4\pi \times 10^{-7}) \times 800 \times 2}{2\pi \times 0{,}1} = \frac{1600 \times 10^{-7}}{0{,}1} = 16.000 \times 10^{-7} = 3{,}2 \times 10^{-3}\text{ T} = 3{,}2\text{ mT}$$

* **Jawaban Bagian 3 (Gaya Antar Kawat Sejajar):**
  * Data: Kawat 1 ($I_1 = 2\text{ A}$, atas), Kawat 2 ($I_2 = 4\text{ A}$, atas), Kawat 3 ($I_3 = 6\text{ A}$, bawah).
    * Jarak kawat 1-2: $a_{12} = 0{,}1\text{ m}$.
    * Jarak kawat 2-3: $a_{23} = 0{,}2\text{ m}$.
  * **a. Gaya pada Kawat 2:**
    * Interaksi kawat 1 dan kawat 2: Karena arusnya searah (sama-sama ke atas), terjadi gaya **tarik-menarik** $\to$ kawat 2 ditarik ke **kiri** (menuju kawat 1).
      $$\left(\frac{F}{L}\right)_{21} = \frac{\mu_0 I_1 I_2}{2\pi a_{12}} = \frac{(4\pi \times 10^{-7})(2)(4)}{2\pi (0{,}1)} = \frac{16 \times 10^{-7}}{0{,}1} = 1{,}6 \times 10^{-5}\text{ N/m} \quad (\text{ke kiri})$$
    * Interaksi kawat 2 dan kawat 3: Karena arusnya berlawanan arah (kawat 2 ke atas, kawat 3 ke bawah), terjadi gaya **tolak-menolak** $\to$ kawat 2 ditolak menjauhi kawat 3, yaitu didorong ke **kiri**!
      $$\left(\frac{F}{L}\right)_{23} = \frac{\mu_0 I_2 I_3}{2\pi a_{23}} = \frac{(4\pi \times 10^{-7})(4)(6)}{2\pi (0{,}2)} = \frac{24 \times 10^{-7}}{0{,}2} = 2{,}4 \times 10^{-5}\text{ N/m} \quad (\text{ke kiri})$$
    * Resultan gaya total pada kawat 2:
      $$\left(\frac{F}{L}\right)_{\text{net}} = \left(\frac{F}{L}\right)_{21} + \left(\frac{F}{L}\right)_{23} = 1{,}6 \times 10^{-5} + 2{,}4 \times 10^{-5} = 4{,}0 \times 10^{-5}\text{ N/m} \quad (\text{berarah ke kiri})$$
  * **b. Letak Titik Gaya Nol Antara Kawat 1 dan Kawat 2:**
    * Kawat 1 dan 2 memiliki arus searah, maka gaya resultan pada kawat ketiga yang dialiri arus searah akan nol jika diletakkan **di antara kawat 1 dan kawat 2**.
    * Misal jaraknya $x$ dari kawat 1, maka jaraknya dari kawat 2 adalah $(0{,}1 - x)$:
      $$\frac{\mu_0 I_1 I_x}{2\pi x} = \frac{\mu_0 I_2 I_x}{2\pi (0{,}1 - x)} \implies \frac{I_1}{x} = \frac{I_2}{0{,}1 - x} \implies \frac{2}{x} = \frac{4}{0{,}1 - x}$$
      $$2(0{,}1 - x) = 4x \implies 0{,}2 - 2x = 4x \implies 6x = 0{,}2 \implies x = \frac{0{,}2}{6} = \frac{1}{30}\text{ m} \approx 3{,}33\text{ cm dari kawat 1}$$

* **Jawaban Bagian 4 (Proton Bergerak dalam Medan Magnet):**
  * **a. Kecepatan Masuk Medan Magnet ($v$):**
    * Energi kinetik diperoleh dari beda potensial listrik:
      $$E_k = q V = \frac{1}{2} m v^2$$
      $$v = \sqrt{\frac{2 q V}{m}} = \sqrt{\frac{2 \times (1{,}6 \times 10^{-19}\text{ C}) \times 2000\text{ V}}{1{,}67 \times 10^{-27}\text{ kg}}} = \sqrt{\frac{6{,}4 \times 10^{-16}}{1{,}67 \times 10^{-27}}} = \sqrt{3{,}832 \times 10^{11}} \approx 6{,}19 \times 10^5\text{ m/s}$$
  * **b. Gaya Lorentz dan Jari-jari Orbit:**
    * Gaya Lorentz:
      $$F_L = q v B \sin 90^\circ = (1{,}6 \times 10^{-19}\text{ C}) \times (6{,}19 \times 10^5\text{ m/s}) \times 0{,}2\text{ T} \approx 1{,}98 \times 10^{-14}\text{ N}$$
    * Jari-jari orbit melingkar:
      $$R = \frac{m v}{q B} = \frac{(1{,}67 \times 10^{-27}\text{ kg}) \times (6{,}19 \times 10^5\text{ m/s})}{(1{,}6 \times 10^{-19}\text{ C}) \times 0{,}2\text{ T}} = \frac{1{,}034 \times 10^{-21}}{3{,}2 \times 10^{-20}} \approx 0{,}0323\text{ m} = 3{,}23\text{ cm}$$
  * **c. Periode dan Frekuensi Siklotron:**
    * Periode:
      $$T = \frac{2\pi m}{q B} = \frac{2\pi \times (1{,}67 \times 10^{-27})}{(1{,}6 \times 10^{-19}) \times 0{,}2} = \frac{1{,}049 \times 10^{-26}}{3{,}2 \times 10^{-20}} \approx 3{,}28 \times 10^{-7}\text{ sekon}$$
    * Frekuensi siklotron:
      $$f = \frac{1}{T} = \frac{1}{3{,}28 \times 10^{-7}\text{ s}} \approx 3{,}05 \times 10^6\text{ Hz} = 3{,}05\text{ MHz}$$

* **Jawaban Bagian 5 (Torsi Kumparan Motor Listrik):**
  * Luas bidang kumparan: $A = 0{,}10\text{ m} \times 0{,}05\text{ m} = 5 \times 10^{-3}\text{ m}^2$.
  * $N = 200$, $I = 1{,}5\text{ A}$, $B = 0{,}4\text{ T}$.
  * **a. Torsi Maksimum:**
    Terjadi saat bidang kumparan sejajar arah medan ($\alpha = 0^\circ \iff \theta = 90^\circ$):
    $$\tau_{\max} = N I A B = 200 \times 1{,}5 \times (5 \times 10^{-3}) \times 0{,}4 = 300 \times 0{,}002 = 0{,}6\text{ N}\cdot\text{m}$$
  * **b. Torsi Saat Bidang Kumparan Membentuk Sudut $30^\circ$ terhadap Medan:**
    Sudut terhadap bidang $\alpha = 30^\circ$, sehingga sudut normal $\theta = 90^\circ - 30^\circ = 60^\circ$:
    $$\tau = N I A B \cos\alpha = \tau_{\max} \cos 30^\circ = 0{,}6 \times \frac{1}{2}\sqrt{3} = 0{,}3\sqrt{3}\text{ N}\cdot\text{m} \approx 0{,}52\text{ N}\cdot\text{m}$$

---

### I. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Gaya Lorentz Tidak Melakukan Usaha pada Partikel Bebas:** Karena vektor gaya magnetik selalu tegak lurus terhadap vektor kecepatan ($\vec{F} \perp \vec{v}$), maka usaha $W = 0$. Akibatnya medan magnet **hanya membelokkan arah gerak tanpa mengubah kelajuan dan tanpa mengubah energi kinetik partikel**!
> 2. **Jebakan Sudut Medan Magnet Kawat Lurus:** Rumus $B = \frac{\mu_0 I}{2\pi a}$ menggunakan jarak tegak lurus $a$. Jika jarak diberikan secara miring terhadap sudut tertentu, proyeksikan terlebih dahulu untuk memperoleh jarak tegak lurus terpendek!
> 3. **Interaksi Kawat Sejajar:** Ingat baik-baik, arus searah $\to$ tarik-menarik; arus berlawanan arah $\to$ tolak-menolak.
