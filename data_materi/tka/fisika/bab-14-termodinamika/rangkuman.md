# Rangkuman Rumus Cepat & Intisari Materi — Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika

### A. Intisari Konsep & Peta Definisi
Termodinamika mengatur konversi energi termal menjadi usaha mekanik. Hukum Pertama menyatakan kekekalan energi, sedangkan Hukum Kedua menetapkan keterbatasan arah alami aliran kalor dan batas efisiensi mesin termal.

| Proses Termal | Kondisi Khusus | Usaha Luar ($W$) | Perubahan Energi Dalam ($\Delta U$) |
| :--- | :--- | :--- | :--- |
| **Isobarik** | $P = \text{konstan}$ | $W = P \Delta V$ | $\Delta U = \frac{3}{2} n R \Delta T$ |
| **Isokhorik** | $V = \text{konstan}$ | $W = 0$ | $\Delta U = Q_v$ |
| **Isotermal** | $T = \text{konstan}$ | $W = nRT \ln(V_2/V_1)$ | $\Delta U = 0 \implies Q = W$ |
| **Adiabatik** | $Q = 0$ | $W = -\Delta U$ | $\Delta U = -W$ |

---

### B. Matriks Rumus Utama & Rumus Cepat
| Besaran / Siklus | Formula Matematis | Kondisi Penerapan |
| :--- | :--- | :--- |
| **Hukum I Termodinamika** | $Q = \Delta U + W$ | Kekekalan energi termal |
| **Efisiensi Mesin Carnot** | $\eta = 1 - \frac{T_c}{T_h}$ | Mesin ideal reversible |
| **Usaha Mesin Carnot** | $W = Q_h - Q_c = \eta Q_h$ | Selisih kalor masuk dan keluar |
| **Kulkas Refrigerator** | $C_P = \frac{T_c}{T_h - T_c}$ | Koefisien performansi pendingin |
| **Usaha Siklus P-V** | $W_{\text{siklus}} = \text{Luas Siklus}$ | Arah searah jarum jam: $W > 0$ |

---

### C. Kasus Khusus & Analisis Pola Soal TKA
1. **Menaikkan Efisiensi Mesin Carnot dari $\eta_1$ ke $\eta_2$:**
   * Jika reservoir dingin $T_c$ dibuat tetap:
     $$\frac{1 - \eta_2}{1 - \eta_1} = \frac{T_{h1}}{T_{h2}}$$
2. **Arah Putaran Siklus P-V:**
   * Searah putaran jarum jam (*clockwise*): Mesin kalor ($W_{\text{netto}} > 0$).
   * Berlawanan arah jarum jam (*counter-clockwise*): Mesin pendingin ($W_{\text{netto}} < 0$).

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Jangan pernah memasukkan suhu Celcius ke rumus efisiensi Carnot! $T_c$ dan $T_h$ wajib dikonversikan ke Kelvin ($+ 273$). Jika menggunakan Celcius, hasil efisiensi dipastikan salah fatal!

> [!TIP] Super Solusi Cepat:
> Pada mesin pendingin Carnot, jika efisiensi mesin pemanasnya diketahui $\eta$, maka koefisien performansi pendinginnya selalu bernilai: $C_P = \frac{1 - \eta}{\eta}$!