# Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

## A. Gerak Parabola (Proyektil)
Gerak parabola merupakan perpaduan dua gerak independen:
1. **Sumbu Horizontal ($x$):** Gerak Lurus Beraturan (GLB) tanpa hambatan udara ($a_x = 0$):
   $$v_x = v_0 \cos\theta$$
   $$x(t) = (v_0 \cos\theta) t$$
2. **Sumbu Vertikal ($y$):** Gerak Lurus Berubah Beraturan (GLBB) dipengaruhi gravitasi bumi ($a_y = -g$):
   $$v_y(t) = v_0 \sin\theta - gt$$
   $$y(t) = (v_0 \sin\theta) t - \frac{1}{2}gt^2$$
3. **Kecepatan Total pada Saat $t$:**
   $$v(t) = \sqrt{v_x^2 + v_y^2(t)}, \quad \tan\alpha = \frac{v_y}{v_x}$$
4. **Karakteristik Titik Puncak ($v_y = 0$):**
   $$t_{\text{puncak}} = \frac{v_0 \sin\theta}{g}, \quad h_{\max} = \frac{v_0^2 \sin^2\theta}{2g}$$
5. **Titik Terjauh di Bidang Datar ($y = 0$):**
   $$t_{\text{total}} = \frac{2 v_0 \sin\theta}{g}, \quad X_{\max} = \frac{v_0^2 \sin 2\theta}{g}$$
   > Sudut elevasi $\theta = 45^\circ$ menghasilkan jangkauan terjauh maksimum karena $\sin 2(45^\circ) = 1$.

---

## B. Gerak Melingkar Beraturan (GMB)
Gerak benda menempuh lintasan lingkaran dengan kelajuan linier dan kelajuan sudut konstan.
1. **Periode ($T$) dan Frekuensi ($f$):**
   $$T = \frac{t}{n}, \quad f = \frac{1}{T}, \quad \omega = 2\pi f = \frac{2\pi}{T}$$
2. **Hubungan Besaran Sudut dan Linier:**
   $$s = \theta \cdot R, \quad v = \omega \cdot R, \quad a_t = \alpha \cdot R$$
3. **Percepatan Sentripetal ($a_s$):**
   Percepatan yang selalu mengarah tegak lurus ke pusat lingkaran untuk mengubah arah gerak:
   $$a_s = \frac{v^2}{R} = \omega^2 R$$
4. **Hubungan Roda-Roda:**
   * **Seporos / Seakar:** $\omega_A = \omega_B \implies \frac{v_A}{R_A} = \frac{v_B}{R_B}$
   * **Bersinggungan / Dihubungkan Rantai:** $v_A = v_B \implies \omega_A R_A = \omega_B R_B$