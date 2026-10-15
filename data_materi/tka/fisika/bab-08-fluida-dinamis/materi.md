# Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

## A. Asumsi Fluida Ideal dan Persamaan Kontinuitas
Fluida ideal adalah fluida yang bersifat non-viskos (tanpa kekentalan gesek), inkompresibel (massa jenis konstan), alirannya stasioner/laminer (garis arus tidak berpotongan), dan irrotasional.
1. **Debit Aliran ($Q$):**
   Volume fluida yang mengalir melintasi penampang tiap satuan waktu:
   $$Q = \frac{V}{t} = A \cdot v$$
2. **Persamaan Kontinuitas (Kekekalan Massa):**
   Debit fluida ideal konstan di setiap titik penampang saluran tertutup:
   $$A_1 v_1 = A_2 v_2 \implies \frac{v_1}{v_2} = \frac{A_2}{A_1} = \left(\frac{D_2}{D_1}\right)^2$$

---

## B. Hukum Bernoulli dan Aplikasinya
Persamaan Bernoulli menyatakan kekekalan energi mekanik pada fluida yang mengalir:
$$P + \frac{1}{2}\rho v^2 + \rho g h = \text{konstan}$$
1. **Teorema Torricelli (Tangki Bocor):**
   Kelajuan semburan air dari lubang bocor pada kedalaman $h_1$ di bawah permukaan:
   $$v = \sqrt{2gh_1}$$
   Jangkauan semprotan horizontal hingga tanah (ketinggian lubang dari tanah $h_2$):
   $$X = 2\sqrt{h_1 h_2}, \quad t = \sqrt{\frac{2h_2}{g}}$$
2. **Venturimeter Tanpa Manometer:**
   $$v_1 = \sqrt{\frac{2g\Delta h}{\left(\frac{A_1}{A_2}\right)^2 - 1}}$$
3. **Gaya Angkat Sayap Pesawat Terbang:**
   Kelajuan udara di atas sayap lebih cepat ($v_a > v_b$) sehingga tekanan di atas lebih kecil ($P_a < P_b$):
   $$F_{\text{angkat}} = \frac{1}{2}\rho A (v_a^2 - v_b^2)$$