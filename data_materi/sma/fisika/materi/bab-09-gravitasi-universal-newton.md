# Bab 9: Gravitasi Universal Newton
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 9: Gravitasi Universal Newton

---

### A. Hukum Gravitasi Universal Newton
Sir Isaac Newton merumuskan bahwa setiap partikel materi di alam semesta saling menarik partikel lain dengan gaya tarik gravitasi yang sebanding dengan perkalian massa kedua benda dan berbanding terbalik dengan kuadrat jarak pisah antara kedua pusat massanya:

$$F = G \frac{m_1 \cdot m_2}{r^2}$$
* $F$ = besar gaya gravitasi tarik-menarik ($\text{N}$)
* $G$ = konstanta gravitasi universal ($6{,}674 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$)
* $m_1, m_2$ = massa kedua benda ($\text{kg}$)
* $r$ = jarak pisah **antara kedua pusat massa benda** ($\text{m}$)

> [!WARNING]
> **Jarak Selalu Diukur dari Pusat Bola ($r = R + h$):**
> Jangan mengukur jarak $r$ dari permukaan planet! Jika sebuah benda berada pada ketinggian $h$ di atas permukaan planet yang memiliki jari-jari $R$, maka jarak total yang dimasukkan ke rumus adalah:
> $$r = R + h$$

#### 1. Resultan Gaya Gravitasi Banyak Benda (Superposisi Vektor):
Gaya gravitasi adalah besaran vektor. Resultan gaya pada benda bermassa $m_1$ akibat tarikan benda $m_2$ dan $m_3$ yang membentuk sudut apit $\theta$:
$$F_{\text{net}} = \sqrt{F_{12}^2 + F_{13}^2 + 2 F_{12} F_{13} \cos\theta}$$

#### 2. Letak Titik dengan Gaya Gravitasi Bersih Nol ($F_{\text{net}} = 0$):
Sebuah partikel ketiga diletakkan di antara massa $M_1$ dan $M_2$ yang terpisah sejauh $d$. Agar gaya gravitasi neto pada partikel tersebut sama dengan nol:
$$F_1 = F_2 \implies G\frac{M_1 m}{x^2} = G\frac{M_2 m}{(d - x)^2} \implies \frac{\sqrt{M_1}}{x} = \frac{\sqrt{M_2}}{d - x} \implies x = \left(\frac{\sqrt{M_1}}{\sqrt{M_1} + \sqrt{M_2}}\right)d$$
*(Letak titik netral selalu lebih dekat ke benda yang massanya lebih kecil).*

---

### B. Kuat Medan Gravitasi (Percepatan Gravitasi / $g$)
Kuat medan gravitasi di suatu titik adalah besar gaya gravitasi yang dialami oleh satu satuan massa uji di titik tersebut:
$$\vec{g} = \frac{\vec{F}}{m} = G \frac{M}{r^2}$$
* Di permukaan planet berjari-jari $R$ dan bermassa $M$:
  $$g_0 = G \frac{M}{R^2}$$

#### 1. Variasi Percepatan Gravitasi pada Ketinggian $h$ di Atas Permukaan:
$$g_h = G \frac{M}{(R + h)^2} = g_0 \left(\frac{R}{R + h}\right)^2$$

#### 2. Variasi Percepatan Gravitasi pada Kedalaman $d$ di Bawah Permukaan Planet:
Dengan menganggap massa jenis planet homogen ($\rho = \text{konstan}$):
$$g_d = g_0 \left(1 - \frac{d}{R}\right)$$
*(Di pusat bumi yang terdalam $d = R \implies$ Kuat medan gravitasi bumi bernilai nol).*

#### 3. Perbandingan Percepatan Gravitasi Antara Dua Planet:
$$\frac{g_A}{g_B} = \left(\frac{M_A}{M_B}\right) \times \left(\frac{R_B}{R_A}\right)^2$$

---

### C. Energi Potensial Gravitasi dan Potensial Gravitasi

#### 1. Energi Potensial Gravitasi Universal ($E_p$):
Karena medan gravitasi bersifat saling tarik menarik dan titik acuan nol disepakati berada pada jarak tak terhingga ($r \to \infty$):
$$E_p = -G \frac{M \cdot m}{r}$$
* Tanda negatif ($-$) menunjukkan bahwa partikel berada dalam kondisi terikat oleh tarikan gravitasi (*gravitational bound system*).

#### 2. Potensial Gravitasi ($V$):
Energi potensial per satuan massa uji:
$$V = \frac{E_p}{m} = -G \frac{M}{r} \quad (\text{J/kg})$$

#### 3. Usaha untuk Memindahkan Benda dalam Medan Gravitasi:
Usaha yang dibutuhkan untuk memindahkan massa $m$ dari jarak $r_1$ ke jarak $r_2$:
$$W = \Delta E_p = E_{p2} - E_{p1} = -G M m \left(\frac{1}{r_2} - \frac{1}{r_1}\right)$$

---

### D. Kecepatan Orbit Satelit dan Kecepatan Lepas (Escape Velocity)

#### 1. Kelajuan Orbit Satelit Melingkar ($v_{\text{orbit}}$):
Agar satelit dapat mengorbit stabil dalam lintasan melingkar pada jari-jari $r = R + h$, gaya gravitasi bertindak sebagai gaya sentripetal:
$$F_{\text{gravitasi}} = F_{\text{sentripetal}} \implies G \frac{M m}{r^2} = \frac{m v^2}{r} \implies v_{\text{orbit}} = \sqrt{\frac{G M}{r}} = \sqrt{\frac{G M}{R + h}}$$
* Jika satelit mengorbit sangat dekat dengan permukaan bumi ($h \approx 0 \implies r \approx R$):
  $$v_{\text{orbit}} = \sqrt{\frac{G M}{R}} = \sqrt{g R} \approx \sqrt{(9{,}8)(6{,}37 \times 10^6)} \approx 7{,}9\text{ km/s}$$

#### 2. Karakteristik Satelit Geostasioner:
Satelit komunikasi yang posisinya tampak selalu tetap di atas satu titik ekuator bumi:
* Periode revolusi satelit sama dengan periode rotasi bumi ($T = 24\text{ jam} = 86.400\text{ s}$).
* Arah orbit berputar searah rotasi bumi (dari barat ke timur di atas bidang khatulistiwa).
* Berada pada ketinggian orbit sekitar $h \approx 36.000\text{ km}$ di atas permukaan laut.

#### 3. Kecepatan Lepas (*Escape Velocity* / $v_{\text{lepas}}$):
Kelajuan minimum yang harus diberikan pada sebuah benda dari permukaan bumi agar terlepas sepenuhnya dari pengaruh gaya tarik gravitasi bumi hingga jarak tak terhingga ($E_{m} = 0$):
$$\frac{1}{2} m v_{\text{lepas}}^2 + \left(-G \frac{M m}{R}\right) = 0 \implies v_{\text{lepas}} = \sqrt{\frac{2 G M}{R}} = \sqrt{2 g R}$$
* Nilai numerik di bumi: $v_{\text{lepas}} = \sqrt{2} \times 7{,}9\text{ km/s} \approx 11{,}2\text{ km/s}$.
* **Hubungan Fundamental:**
  $$v_{\text{lepas}} = v_{\text{orbit}} \times \sqrt{2}$$

---

### E. Tiga Hukum Kepler tentang Gerak Planet

#### 1. Hukum I Kepler (Hukum Lintasan Elips):
*"Semua planet bergerak mengelilingi matahari dalam lintasan berbentuk elips, dengan matahari berada pada salah satu titik fokusnya."*
* **Perihelium:** Titik terdekat orbit planet terhadap matahari.
* **Aphelium:** Titik terjauh orbit planet terhadap matahari.

#### 2. Hukum II Kepler (Hukum Kesamaan Luas):
*"Garis khayal yang menghubungkan planet ke matahari menyapu luasan juring yang sama dalam selang waktu yang sama."*
* **Konsekuensi Fisis:** Kelajuan planet bervariasi sepanjang orbitnya. Planet bergerak paling cepat di sekitar titik **perihelium** dan bergerak paling lambat di sekitar titik **aphelium**.
* Teorema ini merupakan bukti langsung dari **Hukum Kekekalan Momentum Sudut** pada gaya sentral gravitasi:
  $$L = m r_p v_p = m r_a v_a \implies r_p \cdot v_p = r_a \cdot v_a$$

#### 3. Hukum III Kepler (Hukum Keharmonisan Periode):
*"Kuadrat periode revolusi planet mengelilingi matahari berbanding lurus dengan pangkat tiga jari-jari rata-rata orbitnya (setengah sumbu utama elips)."*

$$\frac{T_1^2}{R_1^3} = \frac{T_2^2}{R_2^3} = \frac{4\pi^2}{G M_{\text{pusat}}} = \text{konstan}$$
* $T_1, T_2$ = periode revolusi planet 1 dan 2
* $R_1, R_2$ = jari-jari rata-rata orbit planet 1 dan 2 terhadap matahari

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 9:**
> Diketahui massa Bumi adalah $M_B$, jari-jari rata-rata Bumi adalah $R = 6400\text{ km}$, dan percepatan gravitasi di permukaan Bumi adalah $g = 10\text{ m/s}^2$. Jawablah rangkaian pertanyaan beranak berikut:
>
> 1. **(Perbandingan Gravitasi Dua Planet):** Sebuah planet baru (Planet X) ditemukan memiliki massa $4$ kali massa Bumi ($M_X = 4 M_B$) dan jari-jari $2$ kali jari-jari Bumi ($R_X = 2 R$). Jika berat seorang astronot di Bumi adalah $600\text{ N}$, berapakah berat astronot tersebut di permukaan Planet X?
> 2. **(Kuat Medan Gravitasi di Ketinggian):** Tentukan percepatan gravitasi bumi yang dirasakan oleh sebuah satelit cuaca yang mengorbit pada ketinggian $h = 3 R$ di atas permukaan bumi!
> 3. **(Titik Nol Gaya Gravitasi):** Benda A bermassa $16\text{ kg}$ dan benda B bermassa $9\text{ kg}$ terpisah pada jarak $d = 35\text{ cm}$. Di manakah letak benda C harus diletakkan di antara garis hubung kedua benda tersebut agar resultan gaya gravitasi yang dialaminya sama dengan nol?
> 4. **(Kecepatan Orbit dan Kecepatan Lepas):** Hitung kelajuan orbit sebuah satelit yang mengitari bumi dekat permukaan tanah serta hitung kelajuan lepas minimum sebuah roket antariksa dari permukaan bumi!
> 5. **(Hukum III Kepler):** Jarak rata-rata planet Mars ke Matahari adalah $1{,}5$ kali jarak rata-rata Bumi ke Matahari ($R_M = 1{,}5 R_B$). Jika periode revolusi Bumi adalah $1\text{ tahun}$, tentukan periode revolusi planet Mars mengitari Matahari!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Perbandingan Gravitasi Planet):**
  * Perbandingan percepatan gravitasi:
    $$\frac{g_X}{g_B} = \left(\frac{M_X}{M_B}\right) \times \left(\frac{R_B}{R_X}\right)^2 = \left(\frac{4 M_B}{M_B}\right) \times \left(\frac{R}{2 R}\right)^2 = 4 \times \left(\frac{1}{4}\right) = 1$$
    Maka $g_X = g_B = 10\text{ m/s}^2$.
  * Berat astronot:
    $$w_X = m \cdot g_X = m \cdot g_B = 600\text{ N}$$
    *Berat astronot di Planet X sama persis dengan beratnya di Bumi ($600\text{ N}$).*

* **Jawaban Bagian 2 (Gravitasi pada Ketinggian $h = 3R$):**
  * Jarak dari pusat bumi: $r = R + h = R + 3R = 4R$.
  * Percepatan gravitasi:
    $$g_h = g_0 \left(\frac{R}{R + h}\right)^2 = g_0 \left(\frac{R}{4R}\right)^2 = g_0 \left(\frac{1}{4}\right)^2 = \frac{1}{16} g_0$$
    $$g_h = \frac{10}{16} = 0{,}625\text{ m/s}^2$$

* **Jawaban Bagian 3 (Titik Nol Gaya Gravitasi):**
  * $M_A = 16\text{ kg}$, $M_B = 9\text{ kg}$, $d = 35\text{ cm}$.
  * Misal jarak dari benda A adalah $x$:
    $$\frac{\sqrt{M_A}}{x} = \frac{\sqrt{M_B}}{d - x} \implies \frac{\sqrt{16}}{x} = \frac{\sqrt{9}}{35 - x} \implies \frac{4}{x} = \frac{3}{35 - x}$$
    $$4(35 - x) = 3x \implies 140 - 4x = 3x \implies 7x = 140 \implies x = 20\text{ cm}$$
    *Benda C harus diletakkan sejauh $20\text{ cm}$ dari benda A (atau $15\text{ cm}$ dari benda B).*

* **Jawaban Bagian 4 (Kecepatan Orbit dan Lepas):**
  * $g = 10\text{ m/s}^2$, $R = 6400\text{ km} = 6{,}4 \times 10^6\text{ m}$.
  * Kelajuan orbit dekat permukaan:
    $$v_{\text{orbit}} = \sqrt{g R} = \sqrt{(10)(6{,}4 \times 10^6)} = \sqrt{64 \times 10^6} = 8 \times 10^3\text{ m/s} = 8\text{ km/s}$$
  * Kelajuan lepas roket:
    $$v_{\text{lepas}} = v_{\text{orbit}} \sqrt{2} = 8\sqrt{2}\text{ km/s} \approx 8 \times 1{,}414 \approx 11{,}31\text{ km/s}$$

* **Jawaban Bagian 5 (Hukum III Kepler Periode Mars):**
  * $\frac{T_M^2}{T_B^2} = \frac{R_M^3}{R_B^3}$ dengan $T_B = 1\text{ tahun}$ dan $R_M / R_B = 1{,}5 = \frac{3}{2}$.
    $$T_M^2 = (1)^2 \times (1{,}5)^3 = 3{,}375$$
    $$T_M = \sqrt{3{,}375} = \sqrt{\frac{27}{8}} = \frac{3\sqrt{3}}{2\sqrt{2}} = \frac{3\sqrt{6}}{4} \approx 1{,}837\text{ tahun} \approx 1{,}84\text{ tahun}$$
    *(Satu tahun di Mars setara dengan sekitar 1,84 tahun di Bumi).*

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Perbedaan $g$ dan $G$:**
>    * $G$ adalah **Konstanta Gravitasi Universal** ($6{,}67 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$) yang bernilai mutlak sama di seluruh jagat raya.
>    * $g$ adalah **Percepatan Gravitasi Lokal** ($\text{m/s}^2$) yang nilainya bergantung pada massa planet dan jarak terhadap pusatnya.
> 2. **Kondisi Tanpa Bobot Astronot di Stasiun Luar Angkasa (ISS):**
>    Astronot di ISS melayang bukan karena gravitasi di sana nol! Gravitasi di orbit ISS ($h \approx 400\text{ km}$) masih sangat kuat (sekitar $89\%$ gravitasi bumi). Astronot tampak melayang karena pesawat dan seluruh isinya sedang **jatuh bebas bersama-sama secara terus menerus** mengelilingi kelengkungan bumi (*free fall orbit*).
> 3. **Hukum II Kepler:** Kecepatan orbit planet tidak seragam! Semakin dekat planet ke matahari (perihelium), tarikan gravitasi semakin kuat sehingga kelajuannya memuncak maksimum.
