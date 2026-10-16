# Rangkuman Rumus Cepat & Konsep Inti — Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Gerak Parabola (Proyektil Dua Dimensi)

* **Komponen Kecepatan Awal:**
  $$v_{0x} = v_0 \cos\theta, \quad v_{0y} = v_0 \sin\theta$$

* **Persamaan Posisi & Kecepatan Tiap Saat ($t$):**
  * Sumbu $X$ (GLB murni, $a_x = 0$):
    $$v_x(t) = v_{0x} = v_0 \cos\theta$$
    $$x(t) = (v_0 \cos\theta) t$$
  * Sumbu $Y$ (GLBB diperlambat gravitasi, $a_y = -g$):
    $$v_y(t) = v_0 \sin\theta - g t$$
    $$y(t) = (v_0 \sin\theta) t - \frac{1}{2} g t^2$$

* **Kecepatan Resultan & Arah Vektor Gerak Sesaat:**
  $$v = \sqrt{v_x^2 + v_y^2}, \quad \tan\alpha = \frac{v_y}{v_x}$$

* **Titik Tertinggi (Puncak Parabola, $v_y = 0$):**
  $$t_p = \frac{v_0 \sin\theta}{g}$$
  $$H_{\max} = \frac{v_0^2 \sin^2\theta}{2 g}$$
  * Pada titik puncak, kecepatan benda tidak nol: $v_{\text{puncak}} = v_{0x} = v_0 \cos\theta$.

* **Titik Terjauh di Tanah ($y = 0$):**
  $$t_{\text{total}} = 2 t_p = \frac{2 v_0 \sin\theta}{g}$$
  $$X_{\max} = \frac{v_0^2 \sin 2\theta}{g}$$
  * Jangkauan maksimum mutlak dicapai pada sudut elevasi $\theta = 45^{\circ}$.
  * Sudut elevasi komplementer ($\theta_1 + \theta_2 = 90^{\circ}$) menghasilkan jangkauan mendatar yang sama ($X_1 = X_2$).

* **Hubungan Cepat Ketinggian Maksimum & Titik Terjauh:**
  $$\frac{H_{\max}}{X_{\max}} = \frac{1}{4} \tan\theta$$

---

### B. Gerak Melingkar Beraturan (GMB)

* **Frekuensi, Periode, & Kecepatan Sudut:**
  $$T = \frac{t}{n} = \frac{1}{f}, \quad \omega = 2\pi f = \frac{2\pi}{T}$$

* **Hubungan Besaran Sudut & Besaran Linier:**
  $$s = \theta \cdot R, \quad v = \omega \cdot R$$

* **Percepatan Sentripetal & Gaya Sentripetal:**
  $$a_s = \frac{v^2}{R} = \omega^2 R$$
  $$F_s = m a_s = m \frac{v^2}{R} = m \omega^2 R$$
  * Arah percepatan dan gaya sentripetal selalu tegak lurus kecepatan linier dan menuju pusat lingkaran.

---

### C. Gerak Melingkar Berubah Beraturan (GMBB)

* **Tiga Persamaan Kinematika GMBB ($\alpha = \text{konstan}$):**
  $$\omega_t = \omega_0 + \alpha t$$
  $$\theta = \omega_0 t + \frac{1}{2} \alpha t^2$$
  $$\omega_t^2 = \omega_0^2 + 2 \alpha \theta$$
  * Hubungan tangensial: $a_t = \alpha \cdot R$.

* **Percepatan Total Partikel:**
  $$a_{\text{total}} = \sqrt{a_t^2 + a_s^2}$$

---

### D. Hubungan Roda-Roda Terhubung

* **Roda-Roda Seporos (Satu Sumbu Putar):**
  $$\omega_1 = \omega_2 \implies \frac{v_1}{R_1} = \frac{v_2}{R_2}$$

* **Roda-Roda Bersinggungan Luar atau Dihubungkan Rantai/Sabuk:**
  $$v_1 = v_2 \implies \omega_1 R_1 = \omega_2 R_2$$

---

### E. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada titik tertinggi gerak parabola, kecepatan benda **bukan nol**! Nilai kecepatannya adalah komponen horizontal $v_{0x} = v_0 \cos\theta$. Hanya komponen vertikal $v_y$ yang bernilai nol.

> [!TIP] Super Solusi Cepat:
> Jika ditanyakan perbandingan tinggi maksimum terhadap jangkauan terjauh:
> $$\tan\theta = 4 \frac{H_{\max}}{X_{\max}}$$
> Jika $H_{\max} = X_{\max}$, maka $\tan\theta = 4 \implies \theta = \arctan(4) \approx 76^{\circ}$!