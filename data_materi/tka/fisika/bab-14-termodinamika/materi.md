# Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

## A. Usaha Luar Gas pada Proses Termodinamika
Usaha yang dilakukan oleh gas saat mengalami perubahan volume dari $V_1$ ke $V_2$:
$$W = \int_{V_1}^{V_2} P\,dV$$
1. **Proses Isobarik (Tekanan Tetap / $P = \text{konstan}$):**
   $$W = P(V_2 - V_1) = P \Delta V = n R \Delta T$$
2. **Proses Isokhorik (Volume Tetap / $V = \text{konstan}$):**
   $$W = 0$$
3. **Proses Isotermal (Suhu Tetap / $T = \text{konstan}$):**
   $$W = n R T \ln\left(\frac{V_2}{V_1}\right), \quad \Delta U = 0$$
4. **Proses Adiabatik (Tanpa Pertukaran Kalor / $Q = 0$):**
   $$P_1 V_1^\gamma = P_2 V_2^\gamma, \quad W = -\Delta U$$
   (dengan $\gamma = \frac{C_p}{C_v} > 1$ adalah tetapan Laplace).

---

## B. Hukum I Termodinamika
Prinsip kekekalan energi untuk sistem termodinamika:
$$Q = \Delta U + W$$
* $Q (+)$: sistem menyerap kalor dari lingkungan; $Q (-)$: sistem melepas kalor.
* $W (+)$: sistem melakukan usaha (ekspansi/memuai); $W (-)$: lingkungan melakukan usaha pada sistem (kompresi).
* $\Delta U (+)$: suhu sistem naik; $\Delta U (-)$: suhu sistem turun.

---

## C. Hukum II Termodinamika dan Siklus Mesin Carnot
Kalor tidak dapat mengalir secara spontan dari tandon dingin ke tandon panas tanpa bantuan kerja dari luar.
1. **Mesin Kalor Carnot:**
   Mesin kalor ideal dengan efisiensi tertinggi yang beroperasi di antara suhu tinggi $T_h$ dan suhu rendah $T_c$:
   $$W = Q_h - Q_c$$
   $$\eta = \frac{W}{Q_h} = 1 - \frac{Q_c}{Q_h} = 1 - \frac{T_c}{T_h}$$
2. **Mesin Pendingin (Refrigerator):**
   Koefisien performansi (daya guna pendingin):
   $$C_P = \frac{Q_c}{W} = \frac{T_c}{T_h - T_c}$$