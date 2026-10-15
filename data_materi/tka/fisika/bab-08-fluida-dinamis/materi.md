# Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida

## A. Karakteristik Fluida Ideal & Persamaan Kontinuitas
Fluida ideal bersifat: inkompresibel (massa jenis konstan), non-viskos (tidak ada gesekan internal), aliran tunak/laminer (*steady*), dan tidak berotasi (*irrotational*).
1. **Debit Aliran ($Q$):**
   Banyaknya volume fluida yang mengalir tiap satuan waktu:
   $$Q = \frac{V}{t} = A \cdot v \quad (\text{m}^3/\text{s})$$
2. **Persamaan Kontinuitas:**
   Debit fluida pada pipa dengan penampang berbeda adalah konstan:
   $$A_1 v_1 = A_2 v_2 \implies v_2 = v_1 \left(\frac{D_1}{D_2}\right)^2$$

---

## B. Asas Bernoulli dan Aplikasinya
Di dalam pipa mendatar, tekanan fluida paling besar berada pada bagian yang kelajuannya paling kecil:
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2 = \text{konstan}$$

### Aplikasi Utama Bernoulli:
1. **Teorema Torricelli (Kebocoran Tangki):**
   * Kelajuan pancaran air bocor pada kedalaman $h$:
     $$v = \sqrt{2gh}$$
   * Jarak pancaran terjauh dari dasar lantai (ketinggian lubang $y$):
     $$x = 2\sqrt{h \cdot y}$$
2. **Venturimeter Tanpa Manometer:**
   $$v_1 = \sqrt{\frac{2gh}{\left(\frac{A_1}{A_2}\right)^2 - 1}}$$
3. **Gaya Angkat Sayap Pesawat Terbang:**
   Profil sayap menyebabkan kelajuan udara di atas ($v_a$) lebih cepat daripada di bawah ($v_b$), sehingga tekanan di bawah lebih besar ($P_b > P_a$):
   $$F_{\text{angkat}} = \frac{1}{2} \rho A (v_a^2 - v_b^2)$$