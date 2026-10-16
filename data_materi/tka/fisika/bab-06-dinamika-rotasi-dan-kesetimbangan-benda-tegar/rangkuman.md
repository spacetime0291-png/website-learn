# Rangkuman Rumus Cepat & Konsep Inti — Dinamika Rotasi dan Kesetimbangan Benda Tegar
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika Rotasi | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Torsi, Momen Inersia, & Hukum Newton Rotasi

* **Momen Gaya (Torsi):**
  $$\vec{\tau} = \vec{r} \times \vec{F} \implies \tau = F \cdot d = F \cdot r \sin\theta$$

* **Momen Inersia Partikel & Benda Tegar Homogen Baku:**
  * Partikel titik: $I = \sum m_i r_i^2$.
  * Batang homogen diputar di pusat: $I = \frac{1}{12} M L^2$.
  * Batang homogen diputar di ujung: $I = \frac{1}{3} M L^2$.
  * Silinder pejal / cakram: $I = \frac{1}{2} M R^2$.
  * Silinder tipis berongga: $I = M R^2$.
  * Bola pejal: $I = \frac{2}{5} M R^2$.
  * Bola berongga tipis: $I = \frac{2}{3} M R^2$.

* **Teorema Sumbu Sejajar:**
  $$I = I_{\text{pm}} + M d^2$$

* **Hukum II Newton untuk Rotasi:**
  $$\sum \tau = I \cdot \alpha, \quad a_t = \alpha \cdot R$$

---

### B. Dinamika Gerak Menggelinding Murni

* **Energi Kinetik Total Menggelinding (Translasi + Rotasi):**
  $$EK_{\text{total}} = \frac{1}{2} M v^2 + \frac{1}{2} I \omega^2 = \frac{1}{2} M v^2 (1 + k)$$
  * Nilai konstanta bentuk inersia $k = \frac{I}{MR^2}$ (silinder pejal $k = \frac{1}{2}$, bola pejal $k = \frac{2}{5}$, cincin $k = 1$).

* **Menggelinding pada Bidang Miring Bersudut $\theta$:**
  $$a = \frac{g \sin\theta}{1 + k}, \quad v = \sqrt{\frac{2 g h}{1 + k}}$$
  * Benda dengan nilai $k$ lebih kecil (misal bola pejal $k=0{,}4$) akan meluncur lebih cepat dan tiba di dasar paling awal dibanding silinder pejal ($k=0{,}5$) atau cincin ($k=1$).

---

### C. Momentum Sudut & Kekekalan

* **Momentum Sudut:**
  $$L = I \cdot \omega = r \cdot p = m v r$$

* **Hukum Kekekalan Momentum Sudut ($\sum \tau_{\text{luar}} = 0$):**
  $$I_1 \omega_1 = I_2 \omega_2$$
  * Aplikasi: Penari balet merapatkan tangan $\to I$ mengecil $\to \omega$ berputar jauh lebih cepat.

---

### D. Syarat Kesetimbangan Statis & Titik Berat

* **Syarat Lengkap Kesetimbangan Statis Benda Tegar:**
  $$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum \tau = 0$$

* **Koordinat Titik Berat Benda Komposit (Dua Dimensi):**
  $$x_0 = \frac{\sum (A_i x_i)}{\sum A_i}, \quad y_0 = \frac{\sum (A_i y_i)}{\sum A_i}$$
  * Jika bangun memiliki lubang atau potongan: luas potongan $A$ diberi tanda minus ($-A_i$).

---

### E. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada silinder atau katrol yang berputar menggelinding riil, massa katrol **berpengaruh** terhadap percepatan sistem! Inersia katrol silinder pejal setara dengan penambahan massa efektif sebesar $\frac{1}{2} M_{\text{katrol}}$ pada penyebut rumus percepatan linier.

> [!TIP] Super Solusi Cepat:
> Tangga bersandar pada dinding licin dan lantai kasar:
> $$\mu_{\text{lantai}} = \frac{1}{2 \tan\theta}$$
> (dengan $\theta$ adalah sudut kemiringan tangga terhadap lantai mendatar)!