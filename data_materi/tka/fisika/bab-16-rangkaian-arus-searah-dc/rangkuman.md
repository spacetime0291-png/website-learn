# Rangkuman Rumus Cepat — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

### A. Tabel Besaran Dasar Listrik Dinamis DC
| Besaran / Parameter | Formulasi Matematis | Keterangan & Satuan SI |
| :--- | :--- | :--- |
| **Kuat Arus Listrik ($I$)** | $I = \frac{Q}{t} = n \cdot e \cdot v_d \cdot A$ | Satuan SI: Ampere ($\text{A}$) |
| **Hukum Ohm** | $V = I \cdot R$ | Beda potensial ($V$), Hambatan ($R$) |
| **Hambatan Kawat Penghantar** | $R = \rho \frac{L}{A}$ | $\rho = \text{hambat jenis}, L = \text{panjang}, A = \text{luas}$ |
| **Pengaruh Suhu terhadap $R$** | $R_T = R_0(1 + \alpha\Delta T)$ | $\alpha = \text{koefisien suhu hambatan}$ |
| **Daya Listrik ($P$)** | $P = V \cdot I = I^2 R = \frac{V^2}{R}$ | Satuan SI: Watt ($\text{W}$) |
| **Energi Listrik ($W$)** | $W = P \cdot t = V \cdot I \cdot t$ | Satuan SI: Joule ($\text{J}$) atau $\text{kWh}$ |

### B. Tabel Rangkaian Resistor & Hukum Kirchhoff
| Konfigurasi Rangkaian | Hambatan Pengganti ($R_{\text{total}}$) | Karakteristik Arus ($I$) | Karakteristik Tegangan ($V$) |
| :--- | :--- | :--- | :--- |
| **Susunan Seri** | $R_s = R_1 + R_2 + \dots$ | $I_1 = I_2 = I_{\text{total}}$ | $V_{\text{total}} = V_1 + V_2$ (Pembagi Tegangan) |
| **Susunan Paralel** | $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$ | $I_{\text{total}} = I_1 + I_2$ (Pembagi Arus) | $V_1 = V_2 = V_{\text{total}}$ |
| **Hukum I Kirchhoff** | $\Sigma I_{\text{masuk}} = \Sigma I_{\text{keluar}}$ | Kekekalan muatan di percabangan | Nilai arus total tetap |
| **Hukum II Kirchhoff** | $\Sigma \mathcal{E} + \Sigma I R = 0$ | Kekekalan energi dalam loop tertutup | Kutub pertama dijumpai loop menentukan tanda $\mathcal{E}$ |