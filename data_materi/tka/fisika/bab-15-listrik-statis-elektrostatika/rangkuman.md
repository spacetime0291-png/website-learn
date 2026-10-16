# Rangkuman Rumus Cepat & Konsep Inti — Listrik Statis (Elektrostatika)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Gaya Coulomb & Kuat Medan Listrik

* **Hukum Coulomb (Gaya Elektrostatik):**
  $$F = k \frac{|q_1 q_2|}{r^2}, \quad k = \frac{1}{4 \pi \varepsilon_0} \approx 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$$
  * Di dalam bahan dielektrik dengan permitivitas relatif $\varepsilon_r$:
    $$F_{\text{bahan}} = \frac{F_{\text{udara}}}{\varepsilon_r}$$

* **Kuat Medan Listrik:**
  $$E = \frac{F}{q_0} = k \frac{|q|}{r^2}$$
  * Arah garis medan keluar memancar dari muatan positif ($+$) dan masuk mengarah ke muatan negatif ($-$).

* **Letak Titik Bernilai Kuat Medan Nol:**
  * Dua muatan bertanda sejenis (sama-sama $+$ atau sama-sama $-$): titik medan nol berada **di antara kedua muatan**:
    $$x = \frac{\sqrt{q_1}}{\sqrt{q_1} + \sqrt{q_2}} d$$
  * Dua muatan berlawanan jenis: titik medan nol berada **di luar garis hubung di dekat muatan yang nilai mutlaknya lebih kecil**:
    $$x = \frac{\sqrt{q_1}}{\vert\sqrt{q_2} - \sqrt{q_1}\vert} d$$

* **Medan & Potensial pada Bola Konduktor Berongga Jari-Jari $R$:**
  * Di dalam rongga ($r < R$): $E = 0$, potensial konstan sama dengan permukaan:
    $$V = k \frac{q}{R}$$
  * Di permukaan kulit bola ($r = R$):
    $$E = k \frac{q}{R^2}, \quad V = k \frac{q}{R}$$
  * Di luar bola ($r > R$):
    $$E = k \frac{q}{r^2}, \quad V = k \frac{q}{r}$$

---

### B. Potensial Listrik & Energi Potensial Listrik

* **Energi Potensial Elektrostatik (Besaran Skalar):**
  $$EP = k \frac{q_1 q_2}{r}$$
  * Tanda muatan $(+)$ atau $(-)$ **wajib diikutsertakan** dalam perhitungan!

* **Potensial Listrik (Besaran Skalar):**
  $$V = k \frac{q}{r} = \frac{EP}{q}$$

* **Usaha Memindahkan Muatan Listrik:**
  $$W_{A \to B} = q (V_B - V_A) = q \Delta V$$

* **Hubungan Medan Listrik & Beda Potensial Keping Sejajar:**
  $$\Delta V = E \cdot d \implies E = \frac{\Delta V}{d}$$

---

### C. Kapasitor Keping Sejajar & Kombinasi Rangkaian

* **Kapasitas Kapasitor Keping Sejajar:**
  $$C = \frac{Q}{V} = \varepsilon_0 \frac{A}{d}$$
  * Jika disisipkan bahan dielektrik dengan konstanta $\kappa$:
    $$C' = \kappa \cdot C$$

* **Rangkaian Seri Kapasitor:**
  $$\frac{1}{C_s} = \frac{1}{C_1} + \frac{1}{C_2} + \dots$$
  * Muatan pada setiap kapasitor seri bernilai sama:
    $$Q_1 = Q_2 = Q_{\text{total}}$$
  * Beda potensial terbagi: $V_{\text{total}} = V_1 + V_2$.

* **Rangkaian Paralel Kapasitor:**
  $$C_p = C_1 + C_2 + \dots$$
  * Beda potensial pada setiap cabang paralel bernilai sama:
    $$V_1 = V_2 = V_{\text{total}}$$
  * Muatan terbagi: $Q_{\text{total}} = Q_1 + Q_2$.

* **Energi Elektrostatik yang Tersimpan pada Kapasitor:**
  $$W = \frac{1}{2} C V^2 = \frac{1}{2} \frac{Q^2}{C} = \frac{1}{2} Q V$$

---

### D. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Jangan memasukkan tanda negatif muatan ke rumus Gaya Coulomb ($F$) atau Kuat Medan ($E$) karena keduanya adalah **vektor** (tanda muatan hanya untuk menentukan arah panah interaksi). Namun tanda $(+)$ dan $(-)$ **wajib dimasukkan** pada rumus Potensial Listrik ($V$) dan Energi Potensial ($EP$) karena keduanya adalah **skalar**!

> [!TIP] Super Solusi Cepat:
> Kapasitor yang dilepas dari sumber baterai akan mempertahankan **muatan listriknya ($Q = \text{konstan}$)**. Sedangkan kapasitor yang tetap tersambung ke kutub baterai akan mempertahankan **beda potensialnya ($V = \text{konstan}$)**!