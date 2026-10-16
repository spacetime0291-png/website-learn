# Rangkuman Rumus Cepat & Konsep Inti — Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Asas Kontinuitas Aliran Fluida Ideal

* **Debit Aliran Fluida:**
  $$Q = \frac{V}{t} = A \cdot v$$

* **Persamaan Kontinuitas (Fluida Inkompresibel):**
  $$Q_1 = Q_2 \implies A_1 v_1 = A_2 v_2$$
  * Hubungan terhadap diameter penampang lingkaran ($A \propto D^2$):
    $$v_2 = v_1 \left(\frac{D_1}{D_2}\right)^2$$
  * Cabang pipa bercabang: $Q_{\text{masuk}} = \sum Q_{\text{keluar}}$.

---

### B. Persamaan Asas Bernoulli

* **Persamaan Kekekalan Energi Aliran Fluida:**
  $$P + \frac{1}{2} \rho v^2 + \rho g h = \text{konstan}$$
  $$P_1 + \frac{1}{2} \rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2} \rho v_2^2 + \rho g h_2$$
  * Pada pipa mendatar horizontal ($h_1 = h_2$): di daerah berpenampang sempit, kelajuan aliran lebih besar ($v \uparrow$) sehingga tekanannya justru lebih rendah ($P \downarrow$).

---

### C. Aplikasi Utama Persamaan Bernoulli

* **Teorema Torricelli (Kebocoran Tangki Terbuka):**
  * Kelajuan semburan air dari lubang bocor:
    $$v = \sqrt{2 g h_1} \quad (h_1 = \text{kedalaman lubang dari permukaan})$$
  * Waktu tempuh pancaran air jatuh ke lantai:
    $$t = \sqrt{\frac{2 h_2}{g}} \quad (h_2 = \text{tinggi lubang dari dasar tanah})$$
  * Jarak pancaran air mendatar terjauh:
    $$X = 2 \sqrt{h_1 h_2}$$
  * Jarak pancaran $X$ bernilai maksimum jika lubang tepat berada di tengah ketinggian tangki ($h_1 = h_2 = \frac{1}{2} H$).

* **Venturimeter Tanpa Manometer:**
  $$v_1 = \sqrt{\frac{2 g h}{\left(\frac{A_1}{A_2}\right)^2 - 1}}$$

* **Venturimeter Dengan Manometer Raksa (Massa Jenis $\rho'$):**
  $$v_1 = \sqrt{\frac{2 (\rho' - \rho) g h}{\rho \left[\left(\frac{A_1}{A_2}\right)^2 - 1\right]}}$$

* **Tabung Pitot (Pengukur Kelajuan Gas):**
  $$v = \sqrt{\frac{2 \rho' g h}{\rho}}$$

* **Gaya Angkat Sayap Pesawat Terbang:**
  $$F_{\text{angkat}} = (P_{\text{bawah}} - P_{\text{atas}}) A = \frac{1}{2} \rho A (v_{\text{atas}}^2 - v_{\text{bawah}}^2)$$
  * Syarat pesawat terangkat melayang: $v_{\text{atas}} > v_{\text{bawah}} \implies P_{\text{bawah}} > P_{\text{atas}}$ dan $F_{\text{angkat}} \ge m g$.

---

### D. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada teorema Torricelli, jangan tertukar antara $h_1$ dan $h_2$! Kelajuan semburan $v = \sqrt{2gh_1}$ ditentukan oleh kedalaman lubang dari permukaan air atas ($h_1$), sedangkan waktu jatuh ditentukan oleh tinggi lubang dari lantai ($h_2$).

> [!TIP] Super Solusi Cepat:
> Mencari jarak jatuh terjauh semburan Torricelli tidak memerlukan nilai percepatan gravitasi $g$:
> $$X = 2 \sqrt{h_1 h_2}$$
> Nilai $g$ saling meniadakan secara aljabar!