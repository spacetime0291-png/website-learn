# Rangkuman Rumus Cepat & Konsep Inti — Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Rumus Kinematika Gerak Parabola (Proyektil)
| Parameter Parabola | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Kecepatan Awal Komponen** | $v_{0x} = v_0 \cos\theta, \quad v_{0y} = v_0 \sin\theta$ | Sudut $\theta$ diukur terhadap bidang horizontal datar |
| **Komponen Sumbu X (GLB)** | $v_x = v_{0x} = v_0 \cos\theta$<br>$x(t) = (v_0 \cos\theta) \cdot t$ | Kecepatan mendatar konstan di setiap titik lintasan ($a_x = 0$) |
| **Komponen Sumbu Y (GLBB)** | $v_y(t) = v_0 \sin\theta - g t$<br>$y(t) = (v_0 \sin\theta) t - \frac{1}{2} g t^2$ | Diperlambat gravitasi saat naik ($a_y = -g$), dipercepat saat turun |
| **Kecepatan & Sudut Sesaat** | $v = \sqrt{v_x^2 + v_y^2}, \quad \tan\alpha = \frac{v_y}{v_x}$ | Di titik puncak, kelajuan minimum: $v_{\text{puncak}} = v_x = v_0 \cos\theta$ |
| **Titik Puncak (Ketinggian Maks)** | $t_p = \frac{v_0 \sin\theta}{g}, \quad h_{\max} = \frac{v_0^2 \sin^2\theta}{2 g}$ | Syarat puncak: kecepatan vertikal nol ($v_y = 0$) |
| **Titik Terjauh (Jangkauan Maks)** | $t_{\text{tot}} = \frac{2 v_0 \sin\theta}{g} = 2 t_p$<br>$X_{\max} = \frac{v_0^2 \sin 2\theta}{g}$ | Jangkauan maksimum terbesar dicapai saat $\theta = 45^{\circ}$ ($\sin 90^{\circ} = 1$) |
| **Hubungan Puncak & Jangkauan** | $\tan\theta = \frac{4 h_{\max}}{X_{\max}}$ | Rumus sakti menghubungkan $\theta, h_{\max},$ dan $X_{\max}$ tanpa nilai $v_0$ |
| **Teorema Sudut Komplementer** | $X_{\max}(\theta_1) = X_{\max}(\theta_2)$ jika $\theta_1 + \theta_2 = 90^{\circ}$ | Sudut komplementer (misal $30^{\circ}$ dan $60^{\circ}$) menghasilkan jangkauan terjauh sama |
| **Tembakan Mendatar Tebing ($v_{0y}=0$)** | $t = \sqrt{\frac{2h}{g}}, \quad X = v_0 \sqrt{\frac{2h}{g}}$ | Waktu jatuh sama dengan gerak jatuh bebas dari ketinggian $h$ |

---

### B. Tabel Gerak Melingkar (GMB, GMBB, & Hubungan Roda)
| Parameter Melingkar | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Periode, Frekuensi, & Sudut** | $T = \frac{t}{n} = \frac{1}{f}, \quad f = \frac{n}{t} = \frac{1}{T}$<br>$\omega = \frac{2\pi}{T} = 2\pi f$ | $1\text{ rpm} = \frac{\pi}{30}\text{ rad/s}$; $1\text{ putaran} = 2\pi\text{ rad} = 360^{\circ}$ |
| **Hubungan Linier - Anguler** | $s = \theta \cdot R, \quad v = \omega \cdot R$ | Berlaku untuk gerak melingkar berjari-jari $R$ |
| **Percepatan & Gaya Sentripetal** | $a_s = \frac{v^2}{R} = \omega^2 R$<br>$F_s = m a_s = \frac{m v^2}{R} = m \omega^2 R$ | Vektor selalu tegak lurus kecepatan linier mengarah ke pusat lingkaran |
| **Tiga Rumus GMBB Sudut** | $\omega_t = \omega_0 + \alpha t$<br>$\theta = \omega_0 t + \frac{1}{2} \alpha t^2$<br>$\omega_t^2 = \omega_0^2 + 2 \alpha \theta$ | $\alpha = \text{konstan}$; analogi gerak linier GLBB ($v \leftrightarrow \omega, a \leftrightarrow \alpha, s \leftrightarrow \theta$) |
| **Percepatan Total GMBB** | $a_t = \alpha \cdot R, \quad a_{\text{tot}} = \sqrt{a_s^2 + a_t^2}$ | $a_s$ mengubah arah kecepatan; $a_t$ mengubah besar kelajuan |
| **Roda Seporos (Seaksial)** | $\omega_A = \omega_B \implies \frac{v_A}{R_A} = \frac{v_B}{R_B}$ | Arah putar sama; kecepatan sudut sama |
| **Roda Sabuk / Singgung Luar** | $v_A = v_B \implies \omega_A R_A = \omega_B R_B$ | Sabuk rantai: putaran searah. Bersinggungan langsung: putaran berlawanan |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada roda bersinggungan luar, kecepatan sudut berbanding terbalik dengan jari-jari ($\omega \propto \frac{1}{R}$). Roda kecil berputar lebih banyak dibanding roda besar.
> 2. Pada gerak parabola, percepatan di titik puncak adalah $g$ ke bawah (bukan nol). Kelajuan di puncak adalah $v_x = v_0 \cos\theta$.

> [!TIP] Super Solusi Cepat:
> Jika soal menyebut $X_{\max} = 4 h_{\max}$, sudut elevasinya pasti tepat $\theta = 45^{\circ}$ (karena $\tan\theta = \frac{4 h_{\max}}{X_{\max}} = 1$)!
