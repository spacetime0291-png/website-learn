# Rangkuman Rumus Cepat & Konsep Inti — Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Formula Kinematika Dasar & Kalkulus Gerak

* **Kelajuan Rata-Rata vs Kecepatan Rata-Rata:**
  $$v_{\text{kelajuan}} = \frac{s_{\text{total}}}{\Delta t} \quad (\text{skalar})$$
  $$\vec{v}_{\text{rata}} = \frac{\Delta \vec{r}}{\Delta t} = \frac{\vec{r}_2 - \vec{r}_1}{t_2 - t_1} \quad (\text{vektor})$$

* **Hubungan Diferensial & Integral Kinematika:**
  $$v(t) = \frac{dr}{dt}, \quad a(t) = \frac{dv}{dt} = \frac{d^2r}{dt^2}$$
  $$v(t) = v_0 + \int_{0}^{t} a(t)\,dt$$
  $$r(t) = r_0 + \int_{0}^{t} v(t)\,dt$$

---

### B. Gerak Lurus Beraturan (GLB) & Analisis Grafik

* **Persamaan Jarak & Posisi GLB ($a = 0$):**
  $$s = v \cdot t \quad \text{atau} \quad x(t) = x_0 + v \cdot t$$

* **Analisis Grafik Kinematika GLB:**
  * **Grafik $s-t$:** Garis linier lurus miring. Kemiringan kurva adalah kecepatan:
    $$\text{Gradien } m = \tan\theta = \frac{\Delta s}{\Delta t} = v$$
  * **Grafik $v-t$:** Garis horizontal konstan. Luas daerah di bawah kurva adalah jarak tempuh:
    $$\text{Luas Persegi Panjang} = v \times t = s$$

---

### C. Gerak Lurus Berubah Beraturan (GLBB)

* **Tiga Persamaan Utama GLBB ($a = \text{konstan}$):**
  $$v_t = v_0 + a t$$
  $$s = v_0 t + \frac{1}{2} a t^2$$
  $$v_t^2 = v_0^2 + 2 a s$$
  * Persamaan jarak berbasis kelajuan rata-rata:
    $$s = \left(\frac{v_0 + v_t}{2}\right) t$$
  * Bertanda $+a$ jika dipercepat, bertanda $-a$ jika diperlambat.

* **Analisis Grafik GLBB:**
  * **Grafik $v-t$:** Kemiringan kurva menyatakan percepatan ($m = a$). Luas di bawah kurva menyatakan perpindahan ($s$).
  * **Grafik $s-t$:** Berupa kurva parabola kuadratik ($s \propto t^2$).

---

### D. Gerak Vertikal Akibat Gravitasi Bumi

* **Gerak Jatuh Bebas (GJB) [$v_0 = 0, a = +g$]:**
  $$v_t = g t = \sqrt{2 g h}$$
  $$h = \frac{1}{2} g t^2$$
  $$t = \sqrt{\frac{2 h}{g}}$$
  * Perbandingan jarak tempuh tiap detik berurutan: $1 : 3 : 5 : 7 : 9 : \dots$

* **Gerak Vertikal ke Bawah (GVB) [$v_0 > 0, a = +g$]:**
  $$v_t = v_0 + g t$$
  $$h = v_0 t + \frac{1}{2} g t^2$$
  $$v_t^2 = v_0^2 + 2 g h$$

* **Gerak Vertikal ke Atas (GVA) [$a = -g$]:**
  $$v_t = v_0 - g t$$
  $$h = v_0 t - \frac{1}{2} g t^2$$
  $$v_t^2 = v_0^2 - 2 g h$$
  * Karakteristik pada titik puncak tertinggi ($v_t = 0$):
    $$t_{\text{naik}} = \frac{v_0}{g}, \quad h_{\max} = \frac{v_0^2}{2 g}$$
    $$t_{\text{total}} = \frac{2 v_0}{g}, \quad v_{\text{kembali}} = v_0$$

---

### E. Rumus Cepat Interaksi Dua Benda Bergerak

* **Dua Benda Saling Mendekat (Berpapasan Berhadapan):**
  $$t_{\text{temu}} = \frac{S_{\text{total}}}{v_A + v_B}$$

* **Dua Benda Bergerak Searah (Menyusul / Pengejaran):**
  $$t_{\text{susul}} = \frac{\Delta s_0}{v_{\text{pengejar}} - v_{\text{dikejar}}}$$

---

### F. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada pengereman hingga berhenti, percepatan bertanda negatif ($a < 0$) dan kecepatan akhir $v_t = 0$. Jangan memasukkan tanda minus dua kali pada rumus kuadrat $v_t^2 = v_0^2 - 2as$!

> [!TIP] Super Solusi Cepat:
> Mencari jarak henti saat pengereman:
> $$s = \frac{v_0^2}{2a}$$
> Jika kecepatan awal dilipatgandakan menjadi $2$ kali semula dengan gaya rem tetap, jarak henti menjadi $2^2 = 4$ kali lebih panjang!