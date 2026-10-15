# Rangkuman: 15. Hukum Termodinamika dan Siklus Mesin
**Kategori:** TKA Fisika | **Blok Asal:** Blok 2: Termodinamika dan Kalor

## 15. Hukum Termodinamika dan Siklus Mesin

### A. Hukum I Termodinamika
* Rumus: $Q = \Delta U + W$
* Ketentuan Tanda:
  * $Q > 0$ (sistem menyerap kalor), $Q < 0$ (sistem melepas kalor)
  * $W > 0$ (sistem melakukan usaha/ekspansi), $W < 0$ (usaha luar menekan sistem/kompresi)
  * $\Delta U > 0$ (suhu naik), $\Delta U < 0$ (suhu turun)

### B. Matriks 4 Proses Termodinamika Khusus
| Proses | Variabel Konstan | Rumus Usaha ($W$) | Perubahan Energi Dalam ($\Delta U$) | Kalor ($Q$) |
| :--- | :---: | :---: | :---: | :---: |
| **Isobarik** | $P = \text{konstan}$ | $W = P(V_2 - V_1) = nR\Delta T$ | $\Delta U = \frac{f}{2}nR\Delta T$ | $Q = n C_p \Delta T$ |
| **Isokhorik** | $V = \text{konstan}$ | $W = 0$ | $\Delta U = \frac{f}{2}nR\Delta T$ | $Q = \Delta U$ |
| **Isotermal** | $T = \text{konstan}$ | $W = nRT \ln\left(\frac{V_2}{V_1}\right)$ | $\Delta U = 0$ | $Q = W$ |
| **Adiabatik** | $Q = 0$ | $W = -\Delta U = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1}$ | $\Delta U = \frac{f}{2}nR\Delta T$ | $Q = 0$ |

* Relasi Kapasitas Kalor Gas: $C_p - C_v = R, \quad \gamma = \frac{C_p}{C_v} > 1$
* Relasi Adiabatik Poisson: $P_1 V_1^\gamma = P_2 V_2^\gamma, \quad T_1 V_1^{\gamma - 1} = T_2 V_2^{\gamma - 1}$

### C. Siklus Diagram $P-V$ dan Efisiensi Mesin
* Karakteristik Siklus Tertutup: $\Delta U_{\text{siklus}} = 0 \implies W_{\text{neto}} = Q_{\text{neto}}$
* Arah Kurva Siklus:
  * Searah jarum jam $\implies W > 0$ (Mesin Kalor).
  * Berlawanan arah jarum jam $\implies W < 0$ (Mesin Pendingin).
* Mesin Kalor: $\eta = \frac{W}{Q_H} \times 100\% = \left(1 - \frac{Q_C}{Q_H}\right) \times 100\%$
* Mesin Carnot (Efisiensi Maksimum): $\eta_{\text{Carnot}} = \left(1 - \frac{T_C}{T_H}\right) \times 100\% \quad (T \text{ dalam Kelvin})$
* Mesin Pendingin: $K_p = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C}$, Pendingin Carnot: $K_{p,\text{Carnot}} = \frac{T_C}{T_H - T_C}$
