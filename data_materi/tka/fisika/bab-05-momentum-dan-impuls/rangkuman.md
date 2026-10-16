# Rangkuman Rumus Cepat & Konsep Inti — Momentum dan Impuls
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Momentum, Impuls, & Teorema Impuls-Momentum

* **Momentum Linier:**
  $$\vec{p} = m \vec{v}$$

* **Impuls Gaya:**
  $$\vec{I} = \vec{F} \Delta t = \int_{t_1}^{t_2} \vec{F}\,dt$$
  * Impuls sama dengan luas daerah di bawah kurva grafik $F-t$.

* **Teorema Impuls-Momentum:**
  $$\vec{I} = \Delta \vec{p} = m \vec{v}_t - m \vec{v}_0$$

---

### B. Hukum Kekekalan Momentum Linier

* **Persamaan Umum Sistem Tertutup ($\sum F_{\text{eksternal}} = 0$):**
  $$\sum \vec{p}_{\text{awal}} = \sum \vec{p}_{\text{akhir}}$$
  $$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$

* **Aplikasi Ledakan & Dorongan Roket / Senapan:**
  $$0 = m_s v_s' + m_p v_p' \implies v_s' = -\frac{m_p}{m_s} v_p'$$

---

### C. Koefisien Restitusi ($e$) & Tumbukan

* **Formula Koefisien Restitusi:**
  $$e = -\frac{v_1' - v_2'}{v_1 - v_2} = \frac{v_2' - v_1'}{v_1 - v_2}$$

* **Klasifikasi Jenis Tumbukan:**
  * **Tumbukan Lenting Sempurna ($e = 1$):**
    * Berlaku Hukum Kekekalan Momentum & Kekekalan Energi Kinetik ($\sum EK = \sum EK'$).
    * Kasus dua massa sama ($m_1 = m_2$): Kedua benda **bertukar kecepatan** ($v_1' = v_2$ dan $v_2' = v_1$).
  * **Tumbukan Lenting Sebagian ($0 < e < 1$):**
    * Berlaku Kekekalan Momentum. Energi kinetik berkurang menjadi energi panas/bunyi.
  * **Tumbukan Tidak Lenting Sama Sekali ($e = 0$):**
    * Kedua benda menempel dan bergerak bersama dengan kecepatan akhir identik:
      $$v' = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$

* **Pemantulan Bola pada Lantai Keras:**
  $$e = \sqrt{\frac{h_1}{h_0}} = \sqrt{\frac{h_2}{h_1}} = \sqrt{\frac{h_n}{h_{n-1}}}$$
  $$h_n = h_0 \cdot e^{2n}$$

* **Ayunan Balistik (Peluru Menembus Balok Mengayun Naik Setinggi $h$):**
  $$v_{\text{peluru}} = \left(\frac{m_p + m_b}{m_p}\right) \sqrt{2 g h}$$

---

### D. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Momentum adalah besaran vektor! Arah gerak sangat menentukan tanda aljabar: jika arah ke kanan bertanda positif ($+v$), maka arah pantulan ke kiri wajib bertanda negatif ($-v$). Kesalahan tanda menyebabkan nilai $\Delta p = m(v_2 - v_1)$ salah total!

> [!TIP] Super Solusi Cepat:
> Pada pemantulan bola jatuh bebas ke lantai:
> $$h_2 = \frac{h_1^2}{h_0}$$
> Jika bola dijatuhkan dari $4\text{ m}$ memantul ke $1\text{ m}$, maka pantulan berikutnya langsung: $h_2 = \frac{1^2}{4} = 0{,}25\text{ m}$!