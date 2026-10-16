# Rangkuman Rumus Cepat & Konsep Inti — Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Proses Termodinamika, Usaha Luar ($W$), & Hukum I
| Proses Termodinamika | Kondisi Tetap | Usaha Luar ($W$) | Perubahan Energi Dalam ($\Delta U$) & Kalor ($Q$) |
| :--- | :--- | :--- | :--- |
| **Isobarik** | $P = \text{konstan}$ | $W = P \cdot \Delta V = n R \Delta T$ | $\Delta U = \frac{f}{2} n R \Delta T, \quad Q = \Delta U + W = C_p \Delta T$ |
| **Isokhorik** | $V = \text{konstan} (\Delta V = 0)$ | $W = 0$ | $\Delta U = Q = \frac{f}{2} n R \Delta T = C_v \Delta T$ |
| **Isotermal** | $T = \text{konstan} (\Delta T = 0)$ | $W = n R T \ln\left(\frac{V_2}{V_1}\right) = n R T \ln\left(\frac{P_1}{P_2}\right)$ | $\Delta U = 0, \quad Q = W$ (kalor serap diubah seluruhnya jadi usaha) |
| **Adiabatik** | $Q = 0$ (terisolasi termal) | $W = \frac{1}{\gamma - 1}(P_1 V_1 - P_2 V_2) = -\Delta U$ | $\Delta U = -W$; Hukum Laplace: $P_1 V_1^\gamma = P_2 V_2^\gamma, T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1}$ |

*Aturan Tanda Hukum I Termodinamika ($Q = \Delta U + W$):*
* Kalor $Q$: $(+)$ jika sistem menyerap kalor; $(-)$ jika sistem melepas kalor ke lingkungan.
* Usaha $W$: $(+)$ jika sistem melakukan usaha memuai (ekspansi $V_2 > V_1$); $(-)$ jika sistem menerima usaha ditekan (kompresi $V_2 < V_1$).
* Energi dalam $\Delta U$: $(+)$ jika suhu naik ($\Delta T > 0$); $(-)$ jika suhu turun.
* Kapasitas kalor: $C_p = C_v + nR, \quad \gamma = \frac{C_p}{C_v} > 1$.

---

### B. Tabel Siklus Mesin Kalor Carnot, Refrigerator (COP), & Entropi
| Sistem Mesin / Hukum | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Usaha Siklus Diagram $P-V$** | $W_{\text{siklus}} = Q_H - Q_C = \text{Luas Siklus}$ | Keadaan awal $=$ akhir $\implies \Delta U_{\text{siklus}} = 0$; searah jarum jam: $W > 0$ |
| **Efisiensi Mesin Kalor Umum** | $\eta = \frac{W}{Q_H} \times 100\% = \left(1 - \frac{Q_C}{Q_H}\right) \times 100\%$ | $Q_H$ kalor masukan tandon panas; $Q_C$ kalor buangan tandon dingin |
| **Efisiensi Mesin Carnot Ideal** | $\eta_{\text{Carnot}} = \left(1 - \frac{T_C}{T_H}\right) \times 100\% = \left(\frac{T_H - T_C}{T_H}\right) \times 100\%$ | Batas efisiensi tertinggi; suhu $T_H$ dan $T_C$ mutlak wajib Kelvin |
| **Refrigerator Pendingin (COP)** | $K_p = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C}$<br>Carnot: $K_p = \frac{T_C}{T_H - T_C}$ | $Q_C$ kalor yang diserap dari ruang pendingin; $W$ usaha listrik kompresor |
| **Pompa Kalor (Heat Pump)** | $K_{hp} = \frac{Q_H}{W} = K_p + 1 = \frac{T_H}{T_H - T_C}$ | Selalu bernilai satu lebih tinggi dibanding koefisien pendingin |
| **Hukum II Termodinamika & Entropi** | $\Delta S = \frac{Q}{T}, \quad \Delta S_{\text{semesta}} \ge 0$ | Entropi semesta selalu meningkat pada seluruh proses alamiah nyata |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Suhu reservoir pada rumus mesin Carnot ($\eta = 1 - \frac{T_C}{T_H}$) **wajib diubah ke Kelvin** ($T = t^{\circ}\text{C} + 273$)!
> Contoh: $T_H = 327^{\circ}\text{C} = 600\text{ K}$ dan $T_C = 27^{\circ}\text{C} = 300\text{ K} \implies \eta = 1 - \frac{300}{600} = 50\%$.

> [!TIP] Super Solusi Cepat:
> Menaikkan efisiensi mesin Carnot dari $\eta_1$ ke $\eta_2$ dengan $T_C$ tetap konstan:
> $$T_H' = \frac{1 - \eta_1}{1 - \eta_2} T_H$$
