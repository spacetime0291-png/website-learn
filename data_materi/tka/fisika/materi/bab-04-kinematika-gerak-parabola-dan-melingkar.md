# Bab 4: Kinematika Gerak Parabola dan Melingkar
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 4: Kinematika Gerak Parabola dan Melingkar

---

### A. Hakikat dan Prinsip Gerak Parabola (Gerak Proyektil)
Gerak parabola merupakan perpaduan (superposisi) dua gerak yang saling tegak lurus dan bekerja secara independen satu sama lain pada bidang dua dimensi ($x-y$):
1. **Sumbu-$x$ (Arah Horizontal):** Mengalami **Gerak Lurus Beraturan (GLB)** karena tidak ada percepatan horizontal yang bekerja ($a_x = 0$, gesekan udara diabaikan). Kecepatan horizontal bernilai konstan sepanjang waktu ($v_x = \text{konstan}$).
2. **Sumbu-$y$ (Arah Vertikal):** Mengalami **Gerak Lurus Berubah Beraturan (GLBB)** yang dipengaruhi oleh percepatan gravitasi bumi yang konstan ke arah bawah ($a_y = -g$).

---

### B. Formulasi Lengkap Gerak Parabola

```text
               y ▲           Puncak (v_y = 0)
                 │                 ●
                 │             /       \
                 │            /         \
                 │    v_0    /           \
                 │     ↗    /             \
                 │    /    /               \
                 │   /α   /                 \
                 └───┴───────────────────────●────► x
                   (0,0)                  X_max
```

Jika sebuah benda ditembakkan dari tanah dengan kecepatan awal $v_0$ dan sudut elevasi $\alpha$ terhadap bidang datar:

#### 1. Komponen Kecepatan Awal:
$$v_{0x} = v_0 \cos\alpha, \quad v_{0y} = v_0 \sin\alpha$$

#### 2. Kecepatan dan Posisi pada Sembarang Waktu ($t$):
* **Kecepatan pada Sumbu-$x$ (GLB):**
  $$v_x(t) = v_{0x} = v_0 \cos\alpha \quad (\text{selalu konstan})$$
* **Posisi Mendatar Sumbu-$x$:**
  $$x(t) = v_x \cdot t = (v_0 \cos\alpha) t$$
* **Kecepatan pada Sumbu-$y$ (GLBB):**
  $$v_y(t) = v_{0y} - gt = v_0 \sin\alpha - gt$$
* **Ketinggian Vertikal Sumbu-$y$:**
  $$y(t) = v_{0y} t - \frac{1}{2}gt^2 = (v_0 \sin\alpha) t - \frac{1}{2}gt^2$$
* **Kelajuan Total Sesaat ($v$) dan Arah Kecepatan ($\beta$):**
  $$v(t) = \sqrt{v_x(t)^2 + v_y(t)^2}, \quad \tan\beta = \frac{v_y(t)}{v_x(t)}$$

#### 3. Persamaan Fungsi Lintasan Parabola $y(x)$:
Dengan mengeliminasi variabel waktu $t = \frac{x}{v_0 \cos\alpha}$, diperoleh kurva matematis:
$$y(x) = x \tan\alpha - \frac{g x^2}{2 v_0^2 \cos^2\alpha}$$

---

### C. Analisis Titik Khusus Gerak Parabola

#### 1. Di Titik Tertinggi (Titik Puncak):
* **Syarat Fisis:** Kecepatan vertikal tepat sesaat bernilai nol ($v_y = 0$).  
  *(Perhatian: Kecepatan total proyektil di puncak **TIDAK NOL**, melainkan sama dengan kecepatan mendatarnya: $v_{\text{puncak}} = v_x = v_0 \cos\alpha$).*
* **Waktu Mencapai Puncak ($t_p$):**
  $$v_y = 0 \implies v_0 \sin\alpha - g t_p = 0 \implies t_p = \frac{v_0 \sin\alpha}{g}$$
* **Ketinggian Maksimum ($H_{\max}$):**
  $$H_{\max} = \frac{v_0^2 \sin^2\alpha}{2g}$$

#### 2. Di Titik Terjauh (Kembali ke Tanah / $y = 0$):
* **Waktu Total di Udara ($t_{\text{terjauh}}$):**
  $$t_{\text{terjauh}} = 2 \cdot t_p = \frac{2 v_0 \sin\alpha}{g}$$
* **Jarak Jangkauan Maksimum ($X_{\max}$):**
  $$X_{\max} = v_x \cdot t_{\text{terjauh}} = (v_0 \cos\alpha) \left(\frac{2 v_0 \sin\alpha}{g}\right) = \frac{v_0^2 (2 \sin\alpha \cos\alpha)}{g} = \frac{v_0^2 \sin(2\alpha)}{g}$$

#### Teorema Emas Proyektil:
1. **Jangkauan Terjauh Maksimum:** Tercapai pada sudut elevasi **$\alpha = 45^\circ$** karena nilai $\sin(2 \times 45^\circ) = \sin 90^\circ = 1$, sehingga:
   $$X_{\max, 45^\circ} = \frac{v_0^2}{g}$$
2. **Pasangan Sudut Komplementer:** Dua sudut tembak $\alpha_1$ dan $\alpha_2$ yang saling berkomplemen ($\alpha_1 + \alpha_2 = 90^\circ$, misal $30^\circ$ dan $60^\circ$) menghasilkan jarak jangkauan mendatar $X_{\max}$ yang **sama persis**.
3. **Hubungan Perbandingan Tinggi Puncak dan Jangkauan Terjauh:**
   $$\frac{H_{\max}}{X_{\max}} = \frac{\frac{v_0^2 \sin^2\alpha}{2g}}{\frac{v_0^2 (2\sin\alpha\cos\alpha)}{g}} = \frac{\sin\alpha}{4\cos\alpha} \implies \frac{H_{\max}}{X_{\max}} = \frac{1}{4}\tan\alpha \iff \tan\alpha = \frac{4 H_{\max}}{X_{\max}}$$

---

### D. Tembakan Mendatar dari Ketinggian ($h$)
Benda dilempar mendatar dari puncak tebing/meja setinggi $h$ dengan sudut elevasi $\alpha = 0^\circ$:
* Kecepatan awal: $v_{0x} = v_0$ dan $v_{0y} = 0$.
* Waktu jatuh hingga menyentuh dasar tanah:
  $$t = \sqrt{\frac{2h}{g}}$$
* Jarak mendatar yang ditempuh dari kaki tebing:
  $$x = v_0 \cdot t = v_0 \sqrt{\frac{2h}{g}}$$
* Kecepatan saat tiba di tanah:
  $$v_{\text{tanah}} = \sqrt{v_{0x}^2 + v_y^2} = \sqrt{v_0^2 + 2gh}$$

---

### E. Gerak Melingkar Beraturan (GMB)
Gerak suatu benda pada lintasan melingkar dengan besar kelajuan linier ($v$) dan kecepatan sudut ($\omega$) yang konstan.

#### 1. Besaran-Besaran Dasar Gerak Melingkar:
* **Posisi Sudut ($\theta$):** Satuan radian ($\text{rad}$). Hubungan: $1\text{ putaran} = 360^\circ = 2\pi\text{ rad}$.
* **Periode ($T$):** Waktu yang dibutuhkan untuk menempuh 1 putaran penuh ($T = \frac{t}{n}$ sekon).
* **Frekuensi ($f$):** Banyaknya putaran yang ditempuh tiap satu sekon ($f = \frac{n}{t}\text{ Hz}$). Hubungan: $T = \frac{1}{f}$.
* **Kecepatan Sudut ($\omega$):** Sudut yang ditempuh per satuan waktu:
  $$\omega = \frac{\Delta\theta}{\Delta t} = \frac{2\pi}{T} = 2\pi f \quad (\text{rad/s})$$
  * Konversi rotasi per menit (rpm):
    $$1\text{ rpm} = \frac{2\pi\text{ rad}}{60\text{ s}} = \frac{\pi}{30}\text{ rad/s}$$

#### 2. Relasi Besaran Sudut dan Besaran Linier (Jari-Jari $R$):
* Panjang busur lintasan: $s = \theta \cdot R$ *(dengan $\theta$ dalam radian)*
* Kelajuan linier (tangensial): $v = \omega \cdot R$

#### 3. Percepatan Sentripetal ($a_s$):
Meskipun kelajuan liniernya konstan pada GMB, **vektor kecepatan liniernya selalu berubah arah setiap saat**. Percepatan yang bertanggung jawab membelokkan arah gerak ini disebut percepatan sentripetal.
* Vektor $a_s$ selalu tegak lurus terhadap vektor kecepatan linier $v$ dan **selalu mengarah ke pusat lingkaran**.
* **Formulasi Percepatan Sentripetal:**
  $$a_s = \frac{v^2}{R} = \omega^2 R = \frac{4\pi^2 R}{T^2} = 4\pi^2 f^2 R$$

---

### F. Gerak Melingkar Berubah Beraturan (GMBB)
Gerak melingkar dengan kelajuan putar yang berubah secara teratur setiap detiknya, memiliki percepatan sudut konstan ($\alpha = \text{konstan}$).

#### 1. Formulasi Kinematika Sudut:
* **Percepatan Sudut ($\alpha$):**
  $$\alpha = \frac{\Delta\omega}{\Delta t} = \frac{\omega_t - \omega_0}{t} \quad (\text{rad/s}^2)$$
* **Tiga Persamaan Utama GMBB:**
  1. $$\omega_t = \omega_0 + \alpha \cdot t$$
  2. $$\theta = \omega_0 t + \frac{1}{2} \alpha t^2$$
  3. $$\omega_t^2 = \omega_0^2 + 2 \alpha \theta$$

#### 2. Dua Komponen Percepatan pada GMBB:
Pada GMBB, partikel memiliki dua komponen percepatan yang saling tegak lurus:
* **Percepatan Tangensial ($a_t$):** Mengubah besar (nilai) kelajuan linier partikel:
  $$a_t = \alpha \cdot R$$
* **Percepatan Sentripetal ($a_s$):** Mengubah arah gerak partikel:
  $$a_s = \frac{v^2}{R} = \omega^2 R$$
* **Percepatan Linier Total ($a_{\text{tot}}$):**
  $$a_{\text{tot}} = \sqrt{a_s^2 + a_t^2}, \quad \tan\phi = \frac{a_s}{a_t}$$

---

### G. Transmisi Gerak pada Hubungan Roda-Roda

| Tipe Hubungan Roda | Ilustrasi Konfigurasi | Karakteristik Kinematika | Formulasi Persamaan | Arah Putaran |
| :--- | :--- | :---: | :--- | :---: |
| **Seporos / Sesumbu** | Dua roda melekat pada satu sumbu as putar yang sama | Kecepatan sudut **sama** ($\omega_A = \omega_B$) | $\frac{v_A}{R_A} = \frac{v_B}{R_B}$ | **Sama** |
| **Bersinggungan Luar** | Gigi tepi kedua roda saling bersentuhan langsung | Kelajuan linier tepi **sama** ($v_A = v_B$) | $\omega_A R_A = \omega_B R_B$ | **Berlawanan** |
| **Dihubungkan Sabuk / Rantai** | Dua roda dihubungkan oleh rantai gir (seperti sepeda) | Kelajuan linier tepi **sama** ($v_A = v_B$) | $\omega_A R_A = \omega_B R_B$ | **Sama** |

---

### H. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 4:**
> 
> **Bagian 1: Analisis Gerak Parabola Proyektil**
> Sebuah meriam di lapangan terbuka menembakkan peluru dengan kecepatan awal $v_0 = 50\text{ m/s}$ dengan sudut elevasi $\alpha = 37^\circ$ ($\sin 37^\circ = 0{,}6$ dan $\cos 37^\circ = 0{,}8$). Ambil percepatan gravitasi bumi $g = 10\text{ m/s}^2$.
> 1. Tentukan komponen kecepatan awal pada sumbu-$x$ ($v_{0x}$) dan sumbu-$y$ ($v_{0y}$)!
> 2. Tentukan koordinat posisi peluru $(x, y)$ serta besar kelajuan total sesaat peluru pada detik $t = 2\text{ sekon}$!
> 3. Tentukan waktu yang dibutuhkan peluru untuk mencapai titik puncak serta tinggi maksimum ($H_{\max}$) yang dicapainya!
> 4. Tentukan waktu total peluru melayang di udara serta jarak jangkauan mendatar terjauh ($X_{\max}$)!
>
> **Bagian 2: Analisis Sistem Gerak Melingkar dan Hubungan Roda**
> 5. Sebuah roda A ($R_A = 20\text{ cm}$) dihubungkan rantai ke roda B ($R_B = 10\text{ cm}$). Roda B berada seporos dengan roda C ($R_C = 30\text{ cm}$). Roda A mula-mula diam lalu diputar dengan percepatan sudut konstan $\alpha_A = 2\text{ rad/s}^2$ selama $t = 5\text{ sekon}$.
>    * Hitung kecepatan sudut roda A pada saat $t = 5\text{ sekon}$!
>    * Hitung kecepatan sudut dan kelajuan linier roda B!
>    * Hitung kecepatan sudut dan kelajuan linier titik tepi pada roda C!
>    * Tentukan besar percepatan sentripetal, percepatan tangensial, dan percepatan total pada titik di tepi roda C saat $t = 5\text{ sekon}$!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Komponen Kecepatan Awal):**
  $$v_{0x} = v_0 \cos 37^\circ = 50 \times 0{,}8 = 40\text{ m/s}$$
  $$v_{0y} = v_0 \sin 37^\circ = 50 \times 0{,}6 = 30\text{ m/s}$$

* **Jawaban Bagian 2 (Posisi & Kelajuan pada $t = 2\text{ s}$):**
  * Posisi mendatar:
    $$x(2) = v_{0x} \cdot t = 40 \times 2 = 80\text{ m}$$
  * Posisi vertikal:
    $$y(2) = v_{0y} t - \frac{1}{2}gt^2 = (30)(2) - \frac{1}{2}(10)(2^2) = 60 - 20 = 40\text{ m}$$
    *Koordinat posisi adalah $(80\text{ m}, 40\text{ m})$*.
  * Komponen kecepatan pada $t = 2\text{ s}$:
    $$v_x(2) = 40\text{ m/s}$$
    $$v_y(2) = v_{0y} - gt = 30 - 10(2) = 10\text{ m/s}$$
  * Kelajuan total sesaat:
    $$v = \sqrt{v_x^2 + v_y^2} = \sqrt{40^2 + 10^2} = \sqrt{1600 + 100} = \sqrt{1700} = 10\sqrt{17}\text{ m/s} \approx 41{,}23\text{ m/s}$$

* **Jawaban Bagian 3 (Titik Tertinggi):**
  * Waktu mencapai puncak:
    $$t_p = \frac{v_{0y}}{g} = \frac{30}{10} = 3\text{ s}$$
  * Ketinggian maksimum:
    $$H_{\max} = \frac{v_{0y}^2}{2g} = \frac{30^2}{2(10)} = \frac{900}{20} = 45\text{ m}$$

* **Jawaban Bagian 4 (Titik Terjauh):**
  * Waktu total di udara:
    $$t_{\text{terjauh}} = 2 \cdot t_p = 2 \times 3 = 6\text{ s}$$
  * Jarak jangkauan maksimum:
    $$X_{\max} = v_{0x} \cdot t_{\text{terjauh}} = 40 \times 6 = 240\text{ m}$$
    *(Cek rumus emas: $\frac{H_{\max}}{X_{\max}} = \frac{45}{240} = \frac{3}{16}$. Rumus $\frac{1}{4}\tan 37^\circ = \frac{1}{4}(\frac{3}{4}) = \frac{3}{16} \implies$ Terbukti konsisten!)*

* **Jawaban Bagian 5 (Sistem Gerak Melingkar dan Roda-Roda):**
  * **Roda A:** $\omega_{0A} = 0, \alpha_A = 2\text{ rad/s}^2, t = 5\text{ s}$.
    $$\omega_A = \omega_{0A} + \alpha_A t = 0 + 2(5) = 10\text{ rad/s}$$
  * **Roda B:** Dihubungkan rantai ke roda A $\implies v_B = v_A$:
    $$v_A = \omega_A R_A = 10 \times 0{,}20\text{ m} = 2\text{ m/s}$$
    Maka $v_B = 2\text{ m/s}$.
    $$\omega_B = \frac{v_B}{R_B} = \frac{2}{0{,}10\text{ m}} = 20\text{ rad/s}$$
  * **Roda C:** Seporos dengan roda B $\implies \omega_C = \omega_B = 20\text{ rad/s}$.
    $$v_C = \omega_C R_C = 20 \times 0{,}30\text{ m} = 6\text{ m/s}$$
  * **Percepatan pada tepi Roda C:**
    * Percepatan sentripetal:
      $$a_s = \omega_C^2 R_C = (20)^2(0{,}30) = 400 \times 0{,}30 = 120\text{ m/s}^2$$
    * Percepatan sudut roda C ($\omega$ sebanding linier, $\alpha_C = \alpha_B$):
      Karena $\omega_B = 2\omega_A$, maka $\alpha_B = 2\alpha_A = 4\text{ rad/s}^2 \implies \alpha_C = 4\text{ rad/s}^2$.
    * Percepatan tangensial:
      $$a_t = \alpha_C R_C = 4 \times 0{,}30 = 1{,}2\text{ m/s}^2$$
    * Percepatan total:
      $$a_{\text{tot}} = \sqrt{a_s^2 + a_t^2} = \sqrt{120^2 + (1{,}2)^2} = \sqrt{14400 + 1{,}44} = \sqrt{14401{,}44} \approx 120{,}01\text{ m/s}^2$$

---

### I. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Kecepatan di Puncak Parabola Bukan Nol:** Peluru masih bergerak ke depan dengan kelajuan $v = v_x = v_0\cos\alpha$. Kecepatan yang nol hanyalah komponen vertikalnya ($v_y = 0$).
> 2. **Perbedaan Mendasar $a_s$ vs $a_t$:**
>    * $a_s$ (percepatan sentripetal) mengubah **arah** kecepatan linier, selalu ada pada setiap gerak melingkar.
>    * $a_t$ (percepatan tangensial) mengubah **besar (angka)** kelajuan linier, hanya ada pada GMBB (pada GMB nilainya nol).
> 3. **Hubungan Roda Seporos vs Rantai:**
>    * Seporos $\implies$ Kecepatan sudut sama ($\omega_1 = \omega_2$).
>    * Bersinggungan / Rantai $\implies$ Kelajuan linier tepi sama ($v_1 = v_2$).
