# Bab 8: Dinamika Rotasi dan Kesetimbangan Benda Tegar
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 8: Dinamika Rotasi dan Kesetimbangan Benda Tegar

---

### A. Momen Inersia ($I$) dan Teorema Sumbu Sejajar
Momen inersia adalah ukuran kelembaman suatu benda tegar untuk mempertahankan status gerak rotasinya (keadaan diam atau berputar dengan kecepatan sudut konstan) terhadap suatu sumbu poros putar.

#### 1. Momen Inersia Sistem Partikel:
$$I = \sum_{i=1}^n m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + \dots + m_n r_n^2$$
* $m_i$ = massa partikel ke-$i$ ($\text{kg}$)
* $r_i$ = jarak tegak lurus partikel ke sumbu poros putar ($\text{m}$)

#### 2. Tabel Momen Inersia Benda Tegar Homogen Standar SMA:

| Geometri Benda Tegar | Letak & Orientasi Sumbu Poros Putar | Rumus Momen Inersia ($I$) | Nilai Konstanta Bentuk ($k$) |
| :--- | :--- | :---: | :---: |
| **Batang Silinder Tipis** | Melalui pusat massa, tegak lurus panjang | $I = \frac{1}{12} M L^2$ | $k = \frac{1}{12}$ |
| **Batang Silinder Tipis** | Melalui salah satu ujung, tegak lurus | $I = \frac{1}{3} M L^2$ | $k = \frac{1}{3}$ |
| **Silinder Pejal / Cakram** | Melalui sumbu simetri longitudinal pusat | $I = \frac{1}{2} M R^2$ | $k = \frac{1}{2} = 0{,}5$ |
| **Silinder Berongga Tipis (Cincin)** | Melalui sumbu pusat silinder | $I = M R^2$ | $k = 1$ |
| **Silinder Berongga Tebal** | Melalui sumbu pusat silinder ($R_1, R_2$) | $I = \frac{1}{2} M (R_1^2 + R_2^2)$ | - |
| **Bola Pejal** | Melalui diameter pusat massa | $I = \frac{2}{5} M R^2$ | $k = \frac{2}{5} = 0{,}4$ |
| **Kulit Bola Berongga Tipis** | Melalui diameter pusat massa | $I = \frac{2}{3} M R^2$ | $k = \frac{2}{3} \approx 0{,}67$ |

#### 3. Teorema Sumbu Sejajar (Teorema Steiner):
Jika momen inersia benda terhadap sumbu yang melalui pusat massanya diketahui ($I_{\text{pm}}$), maka momen inersia terhadap sembarang sumbu baru yang sejajar dengannya berjarak $d$ adalah:
$$I = I_{\text{pm}} + M d^2$$
*Contoh Pembuktian:* Batang diputar di ujungnya ($d = \frac{L}{2}$):
$$I_{\text{ujung}} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{12}ML^2 + \frac{1}{4}ML^2 = \frac{4}{12}ML^2 = \frac{1}{3}ML^2$$

---

### B. Momen Gaya (Torsi / $\vec{\tau}$) dan Hukum II Newton Rotasi

#### 1. Momen Gaya ($\vec{\tau}$):
Ukuran kecenderungan suatu gaya untuk memutar suatu benda tegar terhadap suatu poros putar tertentu:
$$\vec{\tau} = \vec{r} \times \vec{F} \implies \tau = F \cdot r \sin\theta = F \cdot d$$
* $\tau$ = momen gaya / torsi ($\text{N}\cdot\text{m}$)
* $r$ = jarak titik tangkap gaya ke poros putar ($\text{m}$)
* $\theta$ = sudut antara vektor $\vec{r}$ dan vektor gaya $\vec{F}$
* $d = r\sin\theta$ = panjang lengan momen tegak lurus

#### Perjanjian Arah Torsi:
* **Bertanda Positif ($+$):** Memutar benda berlawanan arah putaran jarum jam (*counter-clockwise*).
* **Bertanda Negatif ($-$):** Memutar benda searah putaran jarum jam (*clockwise*).

#### 2. Hukum II Newton untuk Gerak Rotasi:
$$\sum \tau = I \cdot \alpha$$
* $I$ = momen inersia total benda ($\text{kg}\cdot\text{m}^2$)
* $\alpha$ = percepatan sudut ($\text{rad/s}^2$), dengan hubungan linier $\alpha = \frac{a}{R}$

#### Aplikasi Sistem Katrol Bermassa ($M$):
Katrol silinder pejal ($I = \frac{1}{2}MR^2$) digantungkan beban $m$ yang meluncur turun:
$$m g - T = m a \quad \text{dan} \quad \tau = T \cdot R = I \alpha = \left(\frac{1}{2}MR^2\right)\left(\frac{a}{R}\right) \implies T = \frac{1}{2}M a$$
Substitusi tegangan tali:
$$mg - \frac{1}{2}Ma = ma \implies a = \frac{mg}{m + \frac{1}{2}M}$$

---

### C. Gerak Menggelinding Murni (Translasi + Rotasi)
Menggelinding murni tanpa slip adalah gerak gabungan simultan antara translasi pusat massa ($v = \omega R$) dan rotasi terhadap pusat massa ($a = \alpha R$).

#### 1. Energi Kinetik Total Benda Menggelinding:
$$E_{k,\text{total}} = E_{k,\text{translasi}} + E_{k,\text{rotasi}} = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$$
Karena momen inersia benda dapat ditulis $I = k m R^2$ dan $\omega = \frac{v}{R}$:
$$E_{k,\text{total}} = \frac{1}{2} m v^2 + \frac{1}{2}(k m R^2)\left(\frac{v}{R}\right)^2 = \frac{1}{2} m v^2 (1 + k)$$

#### 2. Menggelinding pada Bidang Miring Bersudut $\theta$ Setinggi $h$:
Benda menggelinding murni dari keadaan diam di puncak bidang miring:
* **Kelajuan di Dasar Bidang Miring:**
  $$mgh = \frac{1}{2}mv^2(1 + k) \implies v = \sqrt{\frac{2 g h}{1 + k}}$$
* **Percepatan Linier Selama Menggelinding:**
  $$a = \frac{g \sin\theta}{1 + k}$$

> [!TIP]
> **Urutan Benda yang Paling Cepat Tiba di Dasar Bidang Miring:**
> Semakin **kecil nilai konstanta bentuk ($k$)**, semakin besar kelajuan dan percepatannya!
> 1. **Bola Pejal** ($k = 0{,}4$) $\implies$ **PALING CEPAT** ($v = \sqrt{\frac{10}{7}gh} \approx 1{,}20\sqrt{gh}$)
> 2. **Silinder Pejal** ($k = 0{,}5$) $\implies$ ($v = \sqrt{\frac{4}{3}gh} \approx 1{,}15\sqrt{gh}$)
> 3. **Bola Berongga** ($k \approx 0{,}67$) $\implies$ ($v = \sqrt{\frac{6}{5}gh} \approx 1{,}10\sqrt{gh}$)
> 4. **Cincin / Silinder Rongga** ($k = 1{,}0$) $\implies$ **PALING LAMBAT** ($v = \sqrt{gh}$)

---

### D. Momentum Sudut ($L$) dan Hukum Kekekalan Momentum Sudut
Momentum sudut adalah padanan momentum linier untuk gerak rotasi:
$$\vec{L} = \vec{r} \times \vec{p} \implies L = I \cdot \omega$$
* $L$ = momentum sudut ($\text{kg}\cdot\text{m}^2/\text{s}$)
* Hubungan torsi terhadap laju perubahan momentum sudut:
  $$\vec{\tau} = \frac{d\vec{L}}{dt}$$

#### Hukum Kekekalan Momentum Sudut:
Jika resultan torsi luar yang bekerja pada sistem sama dengan nol ($\sum \vec{\tau}_{\text{luar}} = \vec{0}$), maka momentum sudut total sistem bernilai **kekal konstan**:
$$L_1 = L_2 \iff I_1 \cdot \omega_1 = I_2 \cdot \omega_2$$

* **Aplikasi Fenomena Penari Balet / Peloncat Indah:**
  * Saat merentangkan tangan $\implies$ Jarak massa membesar $\implies I_1$ besar $\implies \omega_1$ kecil (berputar lambat).
  * Saat merapatkan tangan ke dada $\implies I_2$ mengecil drastis $\implies \omega_2$ melonjak tinggi (berputar sangat cepat).

---

### E. Kesetimbangan Benda Tegar dan Titik Berat

#### 1. Syarat Mutlak Kesetimbangan Benda Tegar:
Benda tegar berada dalam kondisi kesetimbangan statis lengkap jika memenuhi tiga kondisi serentak:
$$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum \tau_P = 0 \quad (\text{di sembarang titik poros } P)$$

#### 2. Tiga Macam Kesetimbangan Statis:
1. **Kesetimbangan Stabil (Mantap):** Jika diberi gangguan kecil, titik beratnya naik, dan ketika dilepas muncul torsi pemulih yang mengembalikannya ke posisi semula (contoh: kelereng di dasar mangkuk cekung).
2. **Kesetimbangan Labil (Goyah):** Jika diberi gangguan kecil, titik beratnya turun, dan benda tidak dapat kembali melainkan terguling (contoh: pensil yang ditegakkan di ujung lancipnya).
3. **Kesetimbangan Indiferen (Netral):** Jika diberi gangguan, titik beratnya tidak naik dan tidak turun (contoh: bola menggelinding di lantai datar).

#### 3. Kasus Klasik: Tangga Homogen Bersandar pada Dinding Licin & Lantai Kasar:
Tangga bermassa $M$, panjang $L$, bersandar dengan sudut kemiringan $\theta$ terhadap lantai kasar (dinding licin tanpa gesekan):
$$\mu_{s,\min} = \frac{1}{2 \tan\theta}$$
*(Koefisien gesekan statis minimum lantai agar tangga tepat tidak tergelincir slip).*

#### 4. Penentuan Koordinat Titik Berat ($x_0, y_0$):
* **Benda Satu Dimensi (Kumpulan Garis / Kawat, Panjang $l_i$):**
  $$x_0 = \frac{\sum l_i x_i}{\sum l_i}, \quad y_0 = \frac{\sum l_i y_i}{\sum l_i}$$
* **Benda Dua Dimensi (Luasan Homogen, Luas $A_i$):**
  $$x_0 = \frac{\sum A_i x_i}{\sum A_i}, \quad y_0 = \frac{\sum A_i y_i}{\sum A_i}$$
  * *Jika ada bagian bidang yang berlubang/dipotong:* Luas bagian berlubang diperhitungkan sebagai pengurang bertanda negatif ($-A_{\text{lubang}}$).

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 8:**
> Selesaikan studi kasus dinamika rotasi dan kesetimbangan benda tegar berikut ($g = 10\text{ m/s}^2$):
>
> 1. **(Sistem Katrol Pejal Bermassa):** Sebuah katrol silinder pejal bermassa $M = 4\text{ kg}$ dan jari-jari $R = 20\text{ cm}$ dapat berputar bebas tanpa gesekan poros. Seutas tali ringan dililitkan pada katrol dan diikatkan pada beban gantung bermassa $m = 3\text{ kg}$.
>    * Hitung momen inersia katrol!
>    * Hitung percepatan turun beban $m$ dan tegangan tali penghubung!
> 2. **(Menggelinding di Bidang Miring):** Sebuah bola pejal bermassa $m = 2\text{ kg}$ dan jari-jari $R = 10\text{ cm}$ menggelinding murni tanpa slip dari puncak bidang miring kasar setinggi $h = 3{,}5\text{ meter}$ dengan sudut kemiringan $\theta = 30^\circ$.
>    * Tentukan percepatan linier bola menuruni bidang miring!
>    * Tentukan kelajuan translasi bola saat tepat mencapai dasar bidang miring!
> 3. **(Kekekalan Momentum Sudut):** Seorang penari seluncur es berputar dengan kecepatan sudut $\omega_1 = 3\text{ rad/s}$ saat tangannya terentang dengan momen inersia $I_1 = 4\text{ kg}\cdot\text{m}^2$. Penari lalu merapatkan tangannya ke tubuh sehingga momen inersianya berkurang menjadi $I_2 = 1{,}5\text{ kg}\cdot\text{m}^2$. Hitung kecepatan sudut akhir penari tersebut!
> 4. **(Kesetimbangan Tangga):** Sebuah tangga homogen bermassa $M = 10\text{ kg}$ dan panjang $L = 5\text{ meter}$ bersandar pada dinding vertikal yang licin sempurna. Kaki tangga berada di lantai kasar pada jarak $3\text{ meter}$ dari dinding. Tentukan gaya desak normal dari dinding dan koefisien gesekan statis minimum lantai agar tangga tidak slip!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Sistem Katrol Pejal):**
  * Momen inersia silinder pejal:
    $$I = \frac{1}{2} M R^2 = \frac{1}{2}(4\text{ kg})(0{,}2\text{ m})^2 = 2 \times 0{,}04 = 0{,}08\text{ kg}\cdot\text{m}^2$$
  * Percepatan gerak turun beban ($m = 3\text{ kg}, M = 4\text{ kg}$):
    $$a = \frac{m g}{m + \frac{1}{2}M} = \frac{3 \times 10}{3 + \frac{1}{2}(4)} = \frac{30}{3 + 2} = \frac{30}{5} = 6\text{ m/s}^2$$
  * Tegangan tali:
    $$T = m(g - a) = 3(10 - 6) = 3(4) = 12\text{ N}$$
    *(Cek torsi: $\tau = T \cdot R = 12 \times 0{,}2 = 2{,}4\text{ N}\cdot\text{m}$; $I \alpha = I \frac{a}{R} = 0{,}08 \times \frac{6}{0{,}2} = 2{,}4\text{ N}\cdot\text{m} \implies$ Terbukti konsisten!)*

* **Jawaban Bagian 2 (Bola Pejal Menggelinding):**
  * Untuk bola pejal, konstanta bentuk $k = \frac{2}{5} = 0{,}4$.
  * Percepatan menggelinding ($\theta = 30^\circ \implies \sin 30^\circ = 0{,}5$):
    $$a = \frac{g \sin\theta}{1 + k} = \frac{10 \times 0{,}5}{1 + 0{,}4} = \frac{5}{1{,}4} = \frac{50}{14} = \frac{25}{7}\text{ m/s}^2 \approx 3{,}57\text{ m/s}^2$$
  * Kelajuan translasi di dasar bidang miring ($h = 3{,}5\text{ m}$):
    $$v = \sqrt{\frac{2 g h}{1 + k}} = \sqrt{\frac{2(10)(3{,}5)}{1 + 0{,}4}} = \sqrt{\frac{70}{1{,}4}} = \sqrt{50} = 5\sqrt{2}\text{ m/s} \approx 7{,}07\text{ m/s}$$

* **Jawaban Bagian 3 (Kekekalan Momentum Sudut):**
  * Tidak ada torsi eksternal luar:
    $$I_1 \omega_1 = I_2 \omega_2 \implies (4)(3) = (1{,}5) \omega_2 \implies 12 = 1{,}5 \omega_2 \implies \omega_2 = \frac{12}{1{,}5} = 8\text{ rad/s}$$
    *Kecepatan sudut putaran penari meningkat menjadi $8\text{ rad/s}$.*

* **Jawaban Bagian 4 (Kesetimbangan Tangga Bersandar):**
  * Panjang tangga $L = 5\text{ m}$, jarak kaki ke dinding $x = 3\text{ m}$, maka tinggi dinding:
    $$y = \sqrt{5^2 - 3^2} = \sqrt{25 - 9} = \sqrt{16} = 4\text{ m}$$
  * Kemiringan tangga: $\tan\theta = \frac{y}{x} = \frac{4}{3}$.
  * Gaya berat tangga di tengah batang ($L/2$): $w = Mg = 10 \times 10 = 100\text{ N}$.
  * Syarat kesetimbangan torsi terhadap titik kaki tangga di lantai ($P$):
    $$\sum \tau_P = 0 \implies N_{\text{dinding}} \cdot y - w \cdot \left(\frac{x}{2}\right) = 0$$
    $$N_{\text{dinding}} \cdot (4) - (100) \cdot (1{,}5) = 0 \implies 4 N_{\text{dinding}} = 150 \implies N_{\text{dinding}} = 37{,}5\text{ N}$$
  * Syarat kesetimbangan gaya horizontal:
    $$\sum F_x = 0 \implies f_s = N_{\text{dinding}} = 37{,}5\text{ N}$$
  * Syarat kesetimbangan vertikal: $N_{\text{lantai}} = w = 100\text{ N}$.
  * Koefisien gesekan statis minimum:
    $$\mu_{s,\min} = \frac{f_s}{N_{\text{lantai}}} = \frac{37{,}5}{100} = 0{,}375$$
    *(Cek rumus cepat: $\mu = \frac{1}{2\tan\theta} = \frac{1}{2(4/3)} = \frac{3}{8} = 0{,}375 \implies$ Tepat dan terbukti!)*

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Peran Massa Katrol:** Jika massa katrol diperhitungkan (tidak diabaikan), percepatan sistem tali akan selalu berkurang dengan menambahkan suku inersia $\frac{1}{2}M$ pada penyebut massa total.
> 2. **Gesekan pada Menggelinding:** Benda dapat menggelinding murni justru **karena adanya gaya gesek statis** yang menghasilkan torsi pemutar tanpa menyebabkan selip! Gaya gesek statis di sini tidak mendisipasi energi mekanik menjadi kalor ($W_f = 0$ karena titik kontak sesaat diam).
> 3. **Pemilihan Poros Torsi:** Pada soal kesetimbangan benda tegar, selalu pilih titik poros pada titik yang **memiliki gaya tidak diketahui paling banyak** (biasanya di titik tumpu/engsel lantai), sehingga gaya-gaya tersebut memiliki lengan momen nol dan tereliminasi dari persamaan torsi.
