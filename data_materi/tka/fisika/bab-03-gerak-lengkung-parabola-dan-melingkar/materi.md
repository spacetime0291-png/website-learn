# Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Kurikulum Merdeka

---

## A. Gerak Parabola (Gerak Peluru / Proyektil)
1. **Prinsip Superposisi Dua Dimensi Independen:**
   Gerak parabola adalah perpaduan dua gerak bebas yang saling tegak lurus dan terjadi secara simultan:
   * **Sumbu Mendatar (Sumbu $X$):** Gerak Lurus Beraturan (GLB) tanpa hambatan udara ($a_x = 0$).
   * **Sumbu Tegak (Sumbu $Y$):** Gerak Lurus Berubah Beraturan (GLBB) dipengaruhi gaya gravitasi bumi ($a_y = -g$).
2. **Komponen Kecepatan Awal:**
   $$\begin{aligned}
   v_{0x} &= v_0 \cos\theta \\
   v_{0y} &= v_0 \sin\theta
   \end{aligned}$$
   * **Keterangan Variabel & Satuan:**
     * $v_0$ = kelajuan awal peluru/proyektil (satuan: $\text{m/s}$)
     * $\theta$ = sudut elevasi penembakan terhadap garis mendatar (satuan: $^{\circ}$)
     * $v_{0x}$ = komponen kecepatan awal pada sumbu horizontal $X$ (satuan: $\text{m/s}$)
     * $v_{0y}$ = komponen kecepatan awal pada sumbu vertikal $Y$ (satuan: $\text{m/s}$)
3. **Persamaan Posisi dan Kecepatan Sembarang Waktu $t$:**
   * **Sumbu Horizontal $X$ (GLB):**
     $$v_x(t) = v_{0x} = v_0 \cos\theta, \quad x(t) = (v_0 \cos\theta) \cdot t$$
   * **Sumbu Vertikal $Y$ (GLBB):**
     $$v_y(t) = v_0 \sin\theta - g t, \quad y(t) = (v_0 \sin\theta) t - \frac{1}{2} g t^2$$
   * **Kelajuan Total Resultan & Sudut Arah Vektor:**
     $$\begin{aligned}
     v(t) &= \sqrt{v_x^2(t) + v_y^2(t)} \\
     \tan\alpha &= \frac{v_y(t)}{v_x(t)}
     \end{aligned}$$
     * **Keterangan Variabel & Satuan:**
       * $x(t), y(t)$ = koordinat posisi mendatar dan tinggi proyektil saat waktu $t$ (satuan: $\text{m}$)
       * $v_x(t), v_y(t)$ = komponen kecepatan horizontal dan vertikal saat waktu $t$ (satuan: $\text{m/s}$)
       * $v(t)$ = besar kelajuan linier sesaat resultan benda pada waktu $t$ (satuan: $\text{m/s}$)
       * $\alpha$ = sudut arah vektor kecepatan terhadap sumbu mendatar (satuan: $^{\circ}$)
       * $g$ = percepatan gravitasi bumi (satuan: $\text{m/s}^2$)
       * $t$ = selang waktu gerak proyektil (satuan: $\text{s}$)

---

## B. Analisis Titik Tertinggi dan Jangkauan Terjauh Parabola
1. **Kondisi Titik Tertinggi (Puncak Parabola):**
   Di titik puncak, komponen kecepatan vertikal bernilai nol ($v_y = 0$). Namun, peluru **tetap memiliki kelajuan horizontal**: $v_{\text{puncak}} = v_x = v_0 \cos\theta$.
   $$\begin{aligned}
   t_{\text{puncak}} &= \frac{v_0 \sin\theta}{g} \\
   h_{\max} &= \frac{v_0^2 \sin^2\theta}{2 g}
   \end{aligned}$$
   * **Keterangan Variabel & Satuan:**
     * $t_{\text{puncak}}$ = waktu tempuh dari tanah mencapai titik puncak tertinggi (satuan: $\text{s}$)
     * $h_{\max}$ = ketinggian maksimum puncak yang dapat dicapai proyektil (satuan: $\text{m}$)
     * $v_0$ = kelajuan awal penembakan proyektil (satuan: $\text{m/s}$)
     * $\theta$ = sudut elevasi tembakan proyektil (satuan: $^{\circ}$)
     * $g$ = percepatan gravitasi bumi (satuan: $\text{m/s}^2$)
2. **Kondisi Titik Terjauh (Jarak Jangkauan Tanah Datar, $y = 0$):**
   $$\begin{aligned}
   t_{\text{total}} &= 2 \times t_{\text{puncak}} = \frac{2 v_0 \sin\theta}{g} \\
   X_{\max} &= v_{0x} \cdot t_{\text{total}} = \frac{v_0^2 \sin 2\theta}{g}
   \end{aligned}$$
   * **Keterangan Variabel & Satuan:**
     * $t_{\text{total}}$ = durasi total proyektil melayang di udara hingga mendarat kembali (satuan: $\text{s}$)
     * $X_{\max}$ = jarak jangkauan mendatar terjauh pada permukaan tanah datar (satuan: $\text{m}$)
     * $v_0$ = kelajuan awal tembakan peluru (satuan: $\text{m/s}$)
     * $\theta$ = sudut elevasi tembakan peluru (satuan: $^{\circ}$)
     * $g$ = percepatan gravitasi bumi (satuan: $\text{m/s}^2$)
3. **Karakteristik Unik & Hubungan Istimewa Parabola:**
   * **Jangkauan Maksimum Mutlak:** Dicapai pada sudut elevasi $\theta = 45^{\circ}$, di mana $X_{\max, 45^{\circ}} = \frac{v_0^2}{g}$.
   * **Sudut Komplementer:** Dua sudut tembakan yang berjumlah $\theta_1 + \theta_2 = 90^{\circ}$ (contoh: $30^{\circ}$ dan $60^{\circ}$, atau $15^{\circ}$ dan $75^{\circ}$) menghasilkan jangkauan terjauh yang **sama persis** ($X_{\max 1} = X_{\max 2}$).
   * **Hubungan Tinggi Puncak dan Jarak Terjauh:**
     $$\frac{h_{\max}}{X_{\max}} = \frac{1}{4} \tan\theta \iff X_{\max} = 4 h_{\max} \cot\theta$$

---

## C. Gerak Setengah Parabola (Lemparan Mendatar)
Benda ditembakkan murni horizontal dari ketinggian $h$ dengan $v_{0x} = v_0$ dan $v_{0y} = 0$:
$$\begin{aligned}
t_{\text{jatuh}} &= \sqrt{\frac{2 h}{g}} \\
X_{\text{mendatar}} &= v_0 \sqrt{\frac{2 h}{g}} \\
v_y &= \sqrt{2 g h} \\
v_{\text{akhir}} &= \sqrt{v_0^2 + 2 g h}
\end{aligned}$$
* **Keterangan Variabel & Satuan:**
  * $h$ = tinggi tebing/gedung tempat peluru dilempar mendatar (satuan: $\text{m}$)
  * $t_{\text{jatuh}}$ = waktu jatuh peluru hingga membentur tanah (satuan: $\text{s}$)
  * $X_{\text{mendatar}}$ = jarak mendatar dari dasar tebing ke titik jatuh (satuan: $\text{m}$)
  * $v_0$ = kelajuan awal lemparan horizontal (satuan: $\text{m/s}$)
  * $v_y$ = kecepatan vertikal saat menyentuh tanah (satuan: $\text{m/s}$)
  * $v_{\text{akhir}}$ = kelajuan resultan total saat membentur tanah (satuan: $\text{m/s}$)

---

## D. Gerak Melingkar Beraturan (GMB)
1. **Definisi & Karakteristik Fisis:**
   * Partikel bergerak menempuh lintasan lingkaran dengan jari-jari konstan $R$.
   * Kelajuan linier ($v$) dan kecepatan sudut ($\omega$) bernilai konstan setiap saat.
   * Percepatan sudut bernilai nol ($\alpha = 0$).
2. **Besaran Pokok Sudut:**
   * **Posisi Sudut ($\theta$):** Besar putaran dalam radian ($\text{rad}$), dengan konversi: $1\text{ putaran} = 360^{\circ} = 2\pi\text{ rad}$.
   * **Periode ($T$) dan Frekuensi ($f$):**
     $$T = \frac{t}{n} = \frac{1}{f}, \quad f = \frac{n}{t} = \frac{1}{T}$$
     * **Keterangan Variabel & Satuan:**
       * $T$ = periode putaran, waktu untuk satu putaran penuh (satuan: $\text{s}$)
       * $f$ = frekuensi putaran, banyak putaran tiap sekon (satuan: $\text{Hz} = \text{s}^{-1}$)
       * $t$ = total waktu putaran (satuan: $\text{s}$)
       * $n$ = jumlah putaran yang terjadi
   * **Kecepatan Sudut / Frekuensi Anguler ($\omega$):**
     $$\omega = \frac{\Delta \theta}{\Delta t} = 2\pi f = \frac{2\pi}{T}$$
     * **Keterangan Variabel & Satuan:**
       * $\omega$ = kecepatan sudut putaran partikel (satuan: $\text{rad/s}$)
       * $\theta$ = sudut tempuh lintasan (satuan: $\text{rad}$)
       * $T$ = periode putaran (satuan: $\text{s}$)
       * $f$ = frekuensi putaran (satuan: $\text{Hz}$)
3. **Hubungan Besaran Sudut dan Besaran Linier:**
   $$\begin{aligned}
   s &= \theta \cdot R \\
   v &= \omega \cdot R = 2\pi f R = \frac{2\pi R}{T}
   \end{aligned}$$
   * **Keterangan Variabel & Satuan:**
     * $s$ = panjang busur lintasan lingkaran yang ditempuh (satuan: $\text{m}$)
     * $\theta$ = sudut tempuh lintasan (satuan: $\text{rad}$)
     * $R$ = jari-jari lintasan lingkaran (satuan: $\text{m}$)
     * $v$ = kelajuan linier / tangensial tepi lingkaran (satuan: $\text{m/s}$)
     * $\omega$ = kelajuan sudut rotasi (satuan: $\text{rad/s}$)
4. **Percepatan Sentripetal ($a_s$) dan Gaya Sentripetal ($F_s$):**
   Percepatan sentripetal timbul karena **arah vektor kecepatan linier selalu membelok menuju pusat lingkaran**, bukan karena kelajuannya bertambah.
   $$\begin{aligned}
   a_s &= \frac{v^2}{R} = \omega^2 R = \frac{4\pi^2 R}{T^2} \\
   F_s &= m a_s = \frac{m v^2}{R} = m \omega^2 R
   \end{aligned}$$
   * **Keterangan Variabel & Satuan:**
     * $a_s$ = percepatan sentripetal, tegak lurus kecepatan mengarah ke pusat lingkaran (satuan: $\text{m/s}^2$)
     * $F_s$ = gaya sentripetal penjaga stabilitas lintasan melingkar (satuan: $\text{N}$)
     * $m$ = massa partikel yang berputar (satuan: $\text{kg}$)
     * $v$ = kelajuan linier tepi lingkaran (satuan: $\text{m/s}$)
     * $\omega$ = kelajuan sudut putaran (satuan: $\text{rad/s}$)
     * $R$ = jari-jari kelengkungan lingkaran (satuan: $\text{m}$)

---

## E. Gerak Melingkar Berubah Beraturan (GMBB)
1. **Definisi & Karakteristik Fisis:**
   * Gerak melingkar dengan **percepatan sudut konstan** ($\alpha = \text{konstan} \neq 0$).
   * Kelajuan sudut bertambah (dipercepat) atau berkurang (diperlambat) secara teratur setiap sekon.
2. **Tiga Persamaan Kinematika GMBB (Analog dengan GLBB):**
   $$\begin{aligned}
   \omega_t &= \omega_0 + \alpha t \\
   \theta &= \omega_0 t + \frac{1}{2} \alpha t^2 \\
   \omega_t^2 &= \omega_0^2 + 2 \alpha \theta
   \end{aligned}$$
   * **Keterangan Variabel & Satuan:**
     * $\omega_t$ = kecepatan sudut akhir saat waktu $t$ (satuan: $\text{rad/s}$)
     * $\omega_0$ = kecepatan sudut awal mula-mula (satuan: $\text{rad/s}$)
     * $\alpha$ = percepatan sudut rotasi konstan (satuan: $\text{rad/s}^2$) (tanda $+$ jika dipercepat, $-$ jika diperlambat)
     * $\theta$ = posisi sudut / total sudut tempuh (satuan: $\text{rad}$)
     * $t$ = selang waktu gerak putar (satuan: $\text{s}$)
3. **Komponen Percepatan Total pada GMBB:**
   Pada GMBB bekerja dua komponen percepatan yang saling tegak lurus:
   * **Percepatan Tangensial ($a_t$):** Mengubah **besar** kelajuan linier benda ($a_t = \alpha \cdot R$).
   * **Percepatan Sentripetal ($a_s$):** Mengubah **arah** gerak linier benda ($a_s = \frac{v^2}{R} = \omega^2 R$).
   * **Percepatan Total Resultan ($a_{\text{total}}$):**
     $$a_{\text{total}} = \sqrt{a_t^2 + a_s^2}, \quad \tan\phi = \frac{a_t}{a_s}$$
     * **Keterangan Variabel & Satuan:**
       * $a_t$ = percepatan tangensial sejajar garis singgung lintasan (satuan: $\text{m/s}^2$)
       * $a_s$ = percepatan sentripetal menuju pusat lingkaran (satuan: $\text{m/s}^2$)
       * $a_{\text{total}}$ = percepatan resultan total partikel pada GMBB (satuan: $\text{m/s}^2$)
       * $\phi$ = sudut kemiringan arah percepatan total terhadap arah radial ke pusat (satuan: $^{\circ}$)
       * $\alpha$ = percepatan sudut (satuan: $\text{rad/s}^2$)
       * $R$ = jari-jari lintasan lingkaran (satuan: $\text{m}$)

---

## F. Analisis Tiga Model Hubungan Roda-Roda
1. **Roda-Roda Seporos / Seaksial (Satu Poros Putar):**
   Dua roda menempel pada satu sumbu poros yang sama. Arah putaran sama, dan **kecepatan sudut kedua roda sama besar**:
   $$\omega_A = \omega_B \implies \frac{v_A}{R_A} = \frac{v_B}{R_B}$$
   * **Keterangan Variabel & Satuan:**
     * $\omega_A, \omega_B$ = kecepatan sudut roda A dan B (satuan: $\text{rad/s}$)
     * $v_A, v_B$ = kelajuan linier tepi roda A dan B (satuan: $\text{m/s}$)
     * $R_A, R_B$ = jari-jari roda A dan B (satuan: $\text{m}$)
2. **Roda-Roda Bersinggungan Luar:**
   Tepi roda A dan roda B saling bersentuhan. Arah putaran **berlawanan**, dan **kelajuan linier tepi kedua roda sama besar**:
   $$v_A = v_B \implies \omega_A R_A = \omega_B R_B \implies \frac{\omega_A}{\omega_B} = \frac{R_B}{R_A}$$
   * **Keterangan Variabel & Satuan:**
     * $v_A, v_B$ = kelajuan linier titik kontak kedua roda (satuan: $\text{m/s}$)
     * $\omega_A, \omega_B$ = kecepatan sudut roda A dan B (satuan: $\text{rad/s}$)
     * $R_A, R_B$ = jari-jari roda A dan B (satuan: $\text{m}$)
3. **Roda-Roda Dihubungkan Rantai atau Tali Sabuk:**
   Dua roda terpisah dihubungkan tali sabuk atau rantai roda (seperti sistem gir sepeda). Arah putaran **searah**, dan **kelajuan linier tepi kedua roda sama besar**:
   $$v_A = v_B \implies \omega_A R_A = \omega_B R_B \implies \frac{\omega_A}{\omega_B} = \frac{R_B}{R_A}$$
   * **Keterangan Variabel & Satuan:**
     * $v_A, v_B$ = kelajuan linier rantai / sabuk tepi roda (satuan: $\text{m/s}$)
     * $\omega_A, \omega_B$ = kecepatan sudut masing-masing roda (satuan: $\text{rad/s}$)
     * $R_A, R_B$ = jari-jari masing-masing roda (satuan: $\text{m}$)

---

## G. Contoh Soal Beranak Terpadu (HOTS) Gerak Lengkung Terintegrasi
> 📝 **Studi Kasus Uji Coba: Mekanisme Transmisi Tiga Roda & Peluncur Proyektil**
> Sebuah sistem peluncur proyektil dikendalikan oleh motor listrik pemutar tiga roda transmisi:
> 1. Roda motor A ($R_A = 10\text{ cm}$) dihubungkan rantai ke roda transmisi B ($R_B = 25\text{ cm}$).
> 2. Roda B dipasang seporos (seaksial) dengan roda katrol C ($R_C = 15\text{ cm}$).
> 3. Roda A mulai berputar dari keadaan diam dengan percepatan sudut tetap $\alpha_A = 4\text{ rad/s}^2$ selama durasi $t = 5\text{ s}$.
> 4. Pada saat $t = 5\text{ s}$, pemicu melepaskan peluru proyektil dari tanah dengan kelajuan awal $v_0 = 50\text{ m/s}$ pada sudut elevasi $\theta = 37^{\circ}$ ($\sin 37^{\circ} = 0{,}6$, $\cos 37^{\circ} = 0{,}8$, $g = 10\text{ m/s}^2$).

#### Pertanyaan & Pembahasan Terperinci:

**a) Tentukan kecepatan sudut roda A pada saat $t = 5\text{ s}$ serta percepatan tangensial dan percepatan sentripetal titik tepi roda A!**
* Kecepatan sudut akhir roda A:
  $$\begin{aligned}
  \omega_{tA} &= \omega_{0A} + \alpha_A t \\
  &= 0 + (4 \times 5) = 20\text{ rad/s}
  \end{aligned}$$
* Percepatan tangensial tepi roda A ($R_A = 0{,}1\text{ m}$):
  $$\begin{aligned}
  a_{tA} &= \alpha_A \cdot R_A \\
  &= 4 \times 0{,}1 = 0{,}4\text{ m/s}^2
  \end{aligned}$$
* Percepatan sentripetal tepi roda A:
  $$\begin{aligned}
  a_{sA} &= \omega_{tA}^2 \cdot R_A \\
  &= 20^2 \times 0{,}1 = 400 \times 0{,}1 = 40\text{ m/s}^2
  \end{aligned}$$

**b) Tentukan kecepatan sudut roda B, kecepatan sudut roda C, dan kelajuan linier titik tepi roda C pada saat $t = 5\text{ s}$!**
* Roda A dan B terhubung rantai ($v_A = v_B$):
  $$\begin{aligned}
  \omega_B \cdot R_B &= \omega_A \cdot R_A \\
  \omega_B \times 25 &= 20 \times 10 \\
  25 \omega_B &= 200 \implies \omega_B = 8\text{ rad/s}
  \end{aligned}$$
* Roda B dan C seporos ($\omega_C = \omega_B$):
  $$\begin{aligned}
  \omega_C &= 8\text{ rad/s}
  \end{aligned}$$
* Kelajuan linier tepi roda C ($R_C = 15\text{ cm} = 0{,}15\text{ m}$):
  $$\begin{aligned}
  v_C &= \omega_C \cdot R_C \\
  &= 8 \times 0{,}15 = 1{,}2\text{ m/s}
  \end{aligned}$$

**c) Uraikan komponen kecepatan awal peluru proyektil dan tentukan koordinat posisi $(x, y)$ peluru saat $t = 2\text{ s}$!**
* Komponen kecepatan awal:
  $$v_{0x} = v_0 \cos 37^{\circ} = 50 \times 0{,}8 = 40\text{ m/s}$$
  $$v_{0y} = v_0 \sin 37^{\circ} = 50 \times 0{,}6 = 30\text{ m/s}$$
* Posisi mendatar saat $t = 2\text{ s}$ (GLB):
  $$x(2) = v_{0x} \times t = 40 \times 2 = 80\text{ m}$$
* Posisi vertikal saat $t = 2\text{ s}$ (GLBB):
  $$\begin{aligned}
  y(2) &= v_{0y} t - \frac{1}{2} g t^2 \\
  &= (30 \times 2) - \frac{1}{2}(10)(2^2) \\
  &= 60 - 20 = 40\text{ m}
  \end{aligned}$$
* *Hasil:* Koordinat proyektil pada detik ke-2 adalah $(80\text{ m}, 40\text{ m})$.

**d) Hitung ketinggian maksimum ($h_{\max}$) yang dicapai proyektil dan waktu yang dibutuhkan untuk mencapai puncak!**
* Waktu mencapai puncak ($v_y = 0$):
  $$t_{\text{puncak}} = \frac{v_{0y}}{g} = \frac{30}{10} = 3\text{ s}$$
* Ketinggian maksimum:
  $$\begin{aligned}
  h_{\max} &= \frac{v_{0y}^2}{2g} = \frac{30^2}{2(10)} \\
  &= \frac{900}{20} = 45\text{ m}
  \end{aligned}$$

**e) Tentukan jangkauan mendatar terjauh ($X_{\max}$), durasi total di udara, dan buktikan hubungan $X_{\max} = 4 h_{\max} \cot 37^{\circ}$!**
* Durasi total di udara: $t_{\text{total}} = 2 \times t_{\text{puncak}} = 2 \times 3 = 6\text{ s}$.
* Jarak jangkauan terjauh di tanah datar:
  $$X_{\max} = v_{0x} \times t_{\text{total}} = 40 \times 6 = 240\text{ m}$$
* Pembuktian hubungan rasio:
  $$\begin{aligned}
  4 h_{\max} \cot 37^{\circ} &= 4(45) \times \frac{\cos 37^{\circ}}{\sin 37^{\circ}} \\
  &= 180 \times \frac{0{,}8}{0{,}6} \\
  &= 180 \times \frac{4}{3} = 240\text{ m}
  \end{aligned}$$
* *Hasil Terbukti:* $X_{\max} = 240\text{ m}$, persis sama dengan hasil formulasi kinematika!