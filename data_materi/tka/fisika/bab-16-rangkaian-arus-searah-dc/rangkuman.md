# Rangkuman Rumus Cepat & Konsep Inti — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Kuat Arus, Hukum Ohm, & Resistansi Kawat

* **Kuat Arus Listrik:**
  $$I = \frac{Q}{t} = n \cdot e \cdot A \cdot v_d$$

* **Hukum Ohm:**
  $$V = I \cdot R$$

* **Resistansi Kawat Penghantar:**
  $$R = \rho \frac{L}{A} = \rho \frac{L}{\frac{1}{4}\pi D^2}$$
  * Jika kawat ditarik meregang hingga panjangnya menjadi $n$ kali lipat ($L' = nL$) tanpa perubahan volume zat padat, resistansinya melonjak kuadratik:
    $$R' = n^2 R$$

* **Pengaruh Perubahan Suhu terhadap Resistansi:**
  $$R_t = R_0 (1 + \alpha \Delta T)$$

---

### B. Kombinasi Hambatan & Pembagi Arus/Tegangan

* **Susunan Resistor Seri:**
  $$R_s = R_1 + R_2 + \dots$$
  * Arus sama pada seluruh resistor: $I_1 = I_2 = I_{\text{total}}$.
  * Pembagi tegangan proporsional:
    $$V_1 : V_2 = R_1 : R_2$$

* **Susunan Resistor Paralel:**
  $$\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$$
  * Tegangan sama pada seluruh cabang: $V_1 = V_2 = V_{\text{total}}$.
  * Pembagi arus terbalik (untuk 2 resistor paralel):
    $$I_1 = \frac{R_2}{R_1 + R_2} I_{\text{total}}, \quad I_2 = \frac{R_1}{R_1 + R_2} I_{\text{total}}$$

* **Jembatan Wheatstone Seimbang:**
  * Jika hasil kali silang hambatan memenuhi:
    $$R_1 \cdot R_3 = R_2 \cdot R_4$$
  * Maka hambatan galvanometer di cabang tengah tidak dialiri arus ($I_G = 0$) dan dapat dihilangkan dari rangkaian.

---

### C. Hukum-Hukum Kirchhoff & Rangkaian Tertutup

* **Hukum I Kirchhoff (Kekekalan Muatan pada Titik Simpul):**
  $$\sum I_{\text{masuk}} = \sum I_{\text{keluar}}$$

* **Hukum II Kirchhoff (Kekekalan Energi pada Lintasan Tertutup Loop):**
  $$\sum \mathcal{E} + \sum (I \cdot R) = 0$$

* **Beda Potensial Antara Dua Titik $A$ dan $B$ ($V_{AB}$):**
  $$V_{AB} = \sum \mathcal{E}_{AB} + \sum (I \cdot R_{AB})$$
  * Tanda GGL $\mathcal{E}$: bertanda $(+)$ jika saat menelusuri lintasan loop menemui kutub panjang terlebih dahulu; bertanda $(-)$ jika menemui kutub pendek terlebih dahulu.
  * Tanda perkalian arus $I \cdot R$: bertanda $(+)$ jika arah penelusuran searah arus; bertanda $(-)$ jika berlawanan arus.

---

### D. Energi & Daya Listrik

* **Energi Listrik:**
  $$W = V I t = I^2 R t = \frac{V^2}{R} t$$

* **Daya Listrik:**
  $$P = \frac{W}{t} = V I = I^2 R = \frac{V^2}{R}$$

* **Perubahan Daya Lampu Terhadap Variasi Tegangan Pasang:**
  $$P_2 = P_1 \left(\frac{V_2}{V_1}\right)^2$$

---

### E. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Daya lampu berbanding lurus dengan **kuadrat tegangan ($V^2$)**, BUKAN berbanding lurus linier dengan $V$! Jika lampu $60\text{ W} / 220\text{ V}$ dipasang pada tegangan jala yang drop menjadi $110\text{ V}$ (turun separuh), daya nyala lampu anjlok drastis menjadi $(\frac{1}{2})^2 = \frac{1}{4}$ kali semula, yaitu hanya $15\text{ Watt}$!

> [!TIP] Super Solusi Cepat:
> Mencari kuat arus pada rangkaian satu loop sederhana dengan sumber GGL:
> $$I = \frac{\sum \mathcal{E}}{\sum R + \sum r}$$
> Langsung bagi total resultan GGL dengan hambatan total rangkaian!