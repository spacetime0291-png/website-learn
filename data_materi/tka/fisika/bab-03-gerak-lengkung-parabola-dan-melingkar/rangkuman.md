# Rangkuman Rumus Cepat & Intisari Materi — Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

### A. Intisari Konsep & Peta Definisi
Gerak lengkung menganalisis lintasan dua dimensi. Pada proyektil, kurva terbentuk karena percepatan gravitasi vertikal independen dari gerak horizontal. Pada gerak melingkar, kelengkungan diarahkan oleh percepatan sentripetal menuju pusat putaran.

| Ragam Gerak | Sumbu Mendatar ($X$) / Tangensial | Sumbu Vertikal ($Y$) / Sentripetal |
| :--- | :--- | :--- |
| **Parabola** | GLB murni konstan ($a_x = 0$) | GLBB gravitasi ($a_y = -g$) |
| **GMB** | Kelajuan linier konstan ($a_t = 0$) | Sentripetal murni ($a_s = \frac{v^2}{R} = \omega^2 R$) |
| **GMBB** | Percepatan tangensial ($a_t = \alpha R$) | Sentripetal bertambah ($a_s = \omega_t^2 R$) |

---

### B. Matriks Rumus Utama & Keterangan Variabel
| Besaran / Prinsip | Formula Matematis Kunci | Keterangan Komponen Rumus & Satuan SI |
| :--- | :--- | :--- |
| **Tinggi Puncak Parabola** | $h_{\max} = \frac{v_0^2 \sin^2\theta}{2g}$ | $h_{\max}$: tinggi puncak ($\text{m}$); $v_0$: kelajuan awal ($\text{m/s}$); $\theta$: sudut elevasi ($^{\circ}$) |
| **Jangkauan Terjauh** | $X_{\max} = \frac{v_0^2 \sin 2\theta}{g}$ | $X_{\max}$: jarak terjauh tanah ($\text{m}$); nilai maksimum saat $\theta = 45^{\circ}$ |
| **Rasio Parabola** | $X_{\max} = 4 h_{\max} \cot\theta$ | Hubungan langsung jarak terjauh dan tinggi puncak |
| **Kelajuan Linier Lingkaran** | $v = \omega R = 2\pi f R$ | $v$: laju tepi ($\text{m/s}$); $\omega$: laju sudut ($\text{rad/s}$); $R$: jari-jari ($\text{m}$) |
| **Percepatan Sentripetal** | $a_s = \frac{v^2}{R} = \omega^2 R$ | $a_s$: percepatan ke pusat ($\text{m/s}^2$); mengubah arah kecepatan |
| **Percepatan Tangensial** | $a_t = \alpha \cdot R$ | $a_t$: laju pertambahan kelajuan linier ($\text{m/s}^2$) |
| **Percepatan Total GMBB** | $a = \sqrt{a_t^2 + a_s^2}$ | Resultan percepatan total pada gerak melingkar dipercepat |
| **Roda Seporos** | $\omega_A = \omega_B \implies \frac{v_A}{R_A} = \frac{v_B}{R_B}$ | Kecepatan sudut sama; arah putaran sama |
| **Roda Rantai / Singgung** | $v_A = v_B \implies \omega_A R_A = \omega_B R_B$ | Kelajuan linier tepi sama; rantai (searah), singgung (berlawanan) |

---

### C. Kasus Khusus & Analisis Pola Soal TKA
1. **Sudut Elevasi Komplementer:**
   * Dua sudut elevasi yang berjumlah $\theta_1 + \theta_2 = 90^{\circ}$ (misal $30^{\circ}$ dan $60^{\circ}$) selalu menghasilkan jarak mendatar terjauh yang **sama persis** ($X_{\max 1} = X_{\max 2}$).
2. **Kecepatan di Titik Puncak:**
   * Di titik tertinggi parabola, kelajuan benda **bukan nol**, melainkan sama dengan komponen kecepatan horizontalnya: $v_{\text{puncak}} = v_{0x} = v_0 \cos\theta$.
3. **Gerak Setengah Parabola:**
   * Waktu jatuh bebas horizontal: $t = \sqrt{\frac{2h}{g}}$.
   * Jarak jangkauan mendatar: $X = v_0 \sqrt{\frac{2h}{g}}$.

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Jangan terkecoh menganggap di titik tertinggi parabola percepatan benda adalah nol! Percepatan benda pada setiap detik gerak parabola **selalu konstan sama dengan percepatan gravitasi bumi ($g = 9{,}8\text{ m/s}^2$ ke bawah)**!

> [!TIP] Super Solusi Cepat:
> Pada perbandingan jari-jari roda yang dihubungkan tali atau rantai, kecepatan sudut berbanding terbalik dengan jari-jari: $\frac{\omega_A}{\omega_B} = \frac{R_B}{R_A}$. Roda yang jari-jarinya lebih kecil pasti berputar lebih cepat!