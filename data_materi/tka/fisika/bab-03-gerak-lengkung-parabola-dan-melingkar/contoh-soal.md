# Variasi Contoh Soal — Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

### Contoh Soal 1: Jangkauan Terjauh & Ketinggian Maksimum Gerak Parabola
Sebuah peluru meriam ditembakkan dengan kelajuan awal $50\text{ m/s}$ pada sudut elevasi $37^{\circ}$ terhadap tanah mendatar ($\sin 37^{\circ} = 0{,}6$ dan $\cos 37^{\circ} = 0{,}8$). Jika percepatan gravitasi bumi $g = 10\text{ m/s}^2$, tentukan:
a) Titik tertinggi puncak yang dicapai peluru,
b) Jarak jangkauan terjauh saat peluru menyentuh tanah kembali!

#### Pembahasan:
**Langkah 1: Uraikan Komponen Kecepatan Awal**
$$\begin{aligned}
v_{0x} &= v_0 \cos 37^{\circ} \\
&= 50 \times 0{,}8 \\
&= 40\text{ m/s}
\end{aligned}$$
$$\begin{aligned}
v_{0y} &= v_0 \sin 37^{\circ} \\
&= 50 \times 0{,}6 \\
&= 30\text{ m/s}
\end{aligned}$$

**Langkah 2: Hitung Titik Tertinggi ($h_{\max}$)**
$$\begin{aligned}
h_{\max} &= \frac{v_{0y}^2}{2g} \\
&= \frac{30^2}{2(10)} \\
&= \frac{900}{20} \\
&= 45\text{ m}
\end{aligned}$$

**Langkah 3: Hitung Waktu Total dan Jangkauan Terjauh ($X_{\max}$)**
$$\begin{aligned}
t_{\text{total}} &= \frac{2 v_{0y}}{g} \\
&= \frac{2(30)}{10} \\
&= 6\text{ s}
\end{aligned}$$
$$\begin{aligned}
X_{\max} &= v_{0x} \times t_{\text{total}} \\
&= 40 \times 6 \\
&= 240\text{ m}
\end{aligned}$$

> [!TIP] Shortcut Ujian:
> Rasio antara tinggi puncak dan jangkauan terjauh memenuhi formula kilat: $X_{\max} = 4 h_{\max} \cot\theta = 4(45) \times \frac{0{,}8}{0{,}6} = 180 \times \frac{4}{3} = 240\text{ m}$!

**Jawaban Akhir:** Titik tertinggi peluru adalah $45\text{ meter}$ dan jarak jangkauan terjauh adalah $240\text{ meter}$.

---

### Contoh Soal 2: Percepatan Total Gerak Melingkar Berubah Beraturan (GMBB)
Sebuah partikel bergerak melingkar pada lintasan berjari-jari $0{,}5\text{ m}$. Kecepatan sudut awalnya $4\text{ rad/s}$ dan mengalami percepatan sudut tetap $2\text{ rad/s}^2$. Tentukan percepatan tangensial, percepatan sentripetal, dan percepatan total partikel saat $t = 2\text{ sekon}$!

#### Pembahasan:
**Langkah 1: Hitung Kecepatan Sudut pada Saat $t = 2\text{ s}$**
$$\begin{aligned}
\omega_t &= \omega_0 + \alpha t \\
&= 4 + (2)(2) \\
&= 8\text{ rad/s}
\end{aligned}$$

**Langkah 2: Hitung Komponen Percepatan Tangensial ($a_t$) dan Sentripetal ($a_s$)**
$$\begin{aligned}
a_t &= \alpha \cdot R \\
&= 2 \times 0{,}5 \\
&= 1\text{ m/s}^2
\end{aligned}$$
$$\begin{aligned}
a_s &= \omega_t^2 \cdot R \\
&= 8^2 \times 0{,}5 \\
&= 64 \times 0{,}5 \\
&= 32\text{ m/s}^2
\end{aligned}$$

**Langkah 3: Hitung Percepatan Total Resultan**
$$\begin{aligned}
a_{\text{total}} &= \sqrt{a_t^2 + a_s^2} \\
&= \sqrt{1^2 + 32^2} \\
&= \sqrt{1 + 1024} \\
&= \sqrt{1025} \\
&\approx 32{,}02\text{ m/s}^2
\end{aligned}$$

**Jawaban Akhir:** Percepatan tangensial adalah $1\text{ m/s}^2$, percepatan sentripetal adalah $32\text{ m/s}^2$, dan percepatan total partikel adalah $\sqrt{1025}\text{ m/s}^2 \approx 32{,}02\text{ m/s}^2$.

---

### Contoh Soal 3: Sistem Hubungan Tiga Roda (Rantai dan Seporos)
Tiga buah roda A, B, dan C memiliki jari-jari berturut-turut $R_A = 10\text{ cm}$, $R_B = 30\text{ cm}$, dan $R_C = 20\text{ cm}$. Roda A dan roda B dihubungkan sabuk rantai, sedangkan roda B dan roda C dipasang seporos (seaksial). Jika roda A berputar dengan kelajuan sudut $60\text{ rad/s}$, tentukan kelajuan linier tepi roda C!

#### Pembahasan:
**Langkah 1: Terapkan Hubungan Rantai Antara Roda A dan B ($v_A = v_B$)**
$$\begin{aligned}
\omega_B \cdot R_B &= \omega_A \cdot R_A \\
\omega_B \times 30 &= 60 \times 10 \\
30 \omega_B &= 600 \\
\omega_B &= \frac{600}{30} \\
&= 20\text{ rad/s}
\end{aligned}$$

**Langkah 2: Terapkan Hubungan Seporos Antara Roda B dan C ($\omega_C = \omega_B$)**
* Karena seporos: $\omega_C = \omega_B = 20\text{ rad/s}$.

**Langkah 3: Hitung Kelajuan Linier Tepi Roda C ($v_C$)**
$$\begin{aligned}
v_C &= \omega_C \cdot R_C \\
&= 20 \times 0{,}2\text{ m} \\
&= 4\text{ m/s}
\end{aligned}$$

**Jawaban Akhir:** Kelajuan linier tepi roda C adalah $4\text{ m/s}$.