# Rangkuman Rumus Cepat & Konsep Inti — Gelombang Bunyi
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Cepat Rambat Gelombang Bunyi di Berbagai Medium

* **Cepat Rambat pada Dawai / Kawat Tegang (Hukum Melde):**
  $$v = \sqrt{\frac{F}{\mu}} = \sqrt{\frac{F \cdot L}{m}} = \sqrt{\frac{F}{\rho \cdot A}}$$

* **Cepat Rambat pada Gas Ideal (Formula Laplace):**
  $$v = \sqrt{\frac{\gamma R T}{M_r}} = \sqrt{\frac{\gamma P}{\rho}}$$
  * Suhu $T$ wajib dalam satuan Kelvin!

* **Cepat Rambat pada Zat Padat & Zat Cair:**
  $$v_{\text{padat}} = \sqrt{\frac{E}{\rho}}, \quad v_{\text{cair}} = \sqrt{\frac{B}{\rho}}$$

---

### B. Frekuensi Nada Dawai & Pipa Organa

* **Dawai & Pipa Organa Terbuka (POB):**
  $$f_n = (n + 1) \frac{v}{2 L}, \quad n = 0, 1, 2, \dots$$
  * Nada dasar ($n=0$): $f_0 = \frac{v}{2L}$.
  * Nada atas 1 ($n=1$): $f_1 = \frac{2v}{2L}$.
  * Perbandingan frekuensi harmonik:
    $$f_0 : f_1 : f_2 : f_3 = 1 : 2 : 3 : 4 : \dots$$

* **Pipa Organa Tertutup (POT):**
  $$f_n = (2n + 1) \frac{v}{4 L}, \quad n = 0, 1, 2, \dots$$
  * Nada dasar ($n=0$): $f_0 = \frac{v}{4L}$.
  * Nada atas 1 ($n=1$): $f_1 = \frac{3v}{4L}$.
  * Perbandingan frekuensi harmonik:
    $$f_0 : f_1 : f_2 : f_3 = 1 : 3 : 5 : 7 : \dots \quad (\text{selalu ganjil})$$

* **Resonansi Bunyi pada Kolom Udara Tabung:**
  $$L_n = (2n - 1) \frac{\lambda}{4}, \quad n = 1, 2, 3, \dots$$
  * Selisih panjang kolom udara antar dua resonansi berurutan:
    $$\Delta L = L_{n+1} - L_n = \frac{\lambda}{2}$$

---

### C. Efek Doppler

* **Formula Umum Perubahan Frekuensi Teramati:**
  $$f_p = \left(\frac{v \pm v_p}{v \mp v_s}\right) f_s$$

* **Kaidah Tanda Arah Gerak:**
  * Pendengar mendekati sumber: tanda pembilang $+v_p$.
  * Pendengar menjauhi sumber: tanda pembilang $-v_p$.
  * Sumber mendekati pendengar: tanda penyebut $-v_s$.
  * Sumber menjauhi pendengar: tanda penyebut $+v_s$.
  * Jika terdapat kecepatan angin ($v_a$) bertiup searah rambatan bunyi dari sumber ke pendengar: ganti $v$ menjadi $(v + v_a)$.

---

### D. Intensitas, Taraf Intensitas (TI), & Pelayangan Bunyi

* **Intensitas Gelombang Bunyi Permukaan Bola:**
  $$I = \frac{P}{A} = \frac{P}{4 \pi r^2} \implies \frac{I_1}{I_2} = \left(\frac{r_2}{r_1}\right)^2$$

* **Taraf Intensitas Bunyi (TI):**
  $$TI = 10 \log\left(\frac{I}{I_0}\right) \quad (I_0 = 10^{-12}\text{ W/m}^2)$$

* **Hubungan Perubahan Jumlah Sumber Bunyi Identik ($n$ Buah):**
  $$TI_n = TI_1 + 10 \log n$$

* **Hubungan Perubahan Jarak Pengamat dari Sumber ($r_1 \to r_2$):**
  $$TI_2 = TI_1 - 20 \log\left(\frac{r_2}{r_1}\right)$$

* **Frekuensi Pelayangan Bunyi:**
  $$f_{\text{layang}} = |f_1 - f_2|$$

---

### E. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada pipa organa tertutup, nada atas pertama adalah $n=1$, yang bernilai $f_1 = \frac{3v}{4L}$ (bukan harmonik ke-2). POT **tidak memiliki** frekuensi harmonik genap (hanya menghasilkan kelipatan ganjil: 1, 3, 5, 7,...).

> [!TIP] Super Solusi Cepat:
> 1. Jika jarak digandakan menjadi $10$ kali lipat lebih jauh, Taraf Intensitas selalu berkurang tepat **$20\text{ dB}$**.
> 2. Jika jumlah sumber bertambah menjadi $10$ kali lipat lebih banyak, Taraf Intensitas selalu bertambah tepat **$10\text{ dB}$**!