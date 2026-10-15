# Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

## A. Usaha Luar & Empat Proses Termodinamika
Usaha yang dilakukan gas pada ekspansi/kompresi:
$$W = \int_{V_1}^{V_2} P \, dV$$
1. **Isobarik ($P = \text{konstan}$):**
   $$W = P(V_2 - V_1) = n R \Delta T$$
2. **Isokhorik ($V = \text{konstan}$):**
   $$W = 0$$
3. **Isotermal ($T = \text{konstan}, \Delta U = 0$):**
   $$W = n R T \ln\left(\frac{V_2}{V_1}\right) = Q$$
4. **Adiabatik ($Q = 0$):**
   $$P_1 V_1^\gamma = P_2 V_2^\gamma, \quad W = -\Delta U = \frac{1}{\gamma - 1}(P_1 V_1 - P_2 V_2)$$

---

## B. Hukum I & II Termodinamika (Mesin Carnot)
1. **Hukum I Termodinamika:**
   Kekekalan energi sistem gas:
   $$Q = \Delta U + W$$
   * $Q (+)$: menyerap kalor; $Q (-)$: melepas kalor
   * $W (+)$: gas melakukan usaha (ekspansi); $W (-)$: gas menerima usaha
   * $\Delta U (+)$: suhu naik; $\Delta U (-)$: suhu turun
2. **Hukum II Termodinamika & Siklus Carnot:**
   Mesin kalor ideal yang beroperasi di antara reservoir suhu tinggi ($T_h$) dan suhu rendah ($T_c$):
   * Usaha bersih mesin: $W = Q_h - Q_c$
   * Efisiensi mesin Carnot:
     $$\eta = \left(1 - \frac{T_c}{T_h}\right) \times 100\% = \left(\frac{W}{Q_h}\right) \times 100\%$$