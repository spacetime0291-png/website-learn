# Rangkuman Rumus Cepat & Intisari Materi — Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Termodinamika mengkaji konversi energi antara kalor (*heat*) dan usaha mekanik (*work*) pada sistem tertutup maupun terbuka. Hukum Pertama Termodinamika menegaskan prinsip konservasi energi. Hukum Kedua Termodinamika menetapkan batasan arah spontanitas perpindahan energi dan ketidakmungkinan menciptakan mesin kalor dengan efisiensi sempurna ($100\%$) melalui peningkatan entropi semesta.

| Hukum Termodinamika | Formulasi Pokok | Makna & Prinsip Konservasi Fisis | Implikasi Mesin Termal |
| :--- | :--- | :--- | :--- |
| **Hukum Ke-Nol** | Jika $A$ setimbang termal dengan $B$, dan $B$ dengan $C$, maka $A$ setimbang dengan $C$ | Konsep dasar suhu (*temperature*) dan kesetimbangan termal | Landasan kalibrasi termometer |
| **Hukum Pertama** | $Q = \Delta U + W \quad \text{atau} \quad \Delta U = Q - W$ | Kekekalan Energi: Kalor yang diserap digunakan untuk menaikkan energi dalam dan melakukan usaha luar | Mesin tidak dapat menghasilkan kerja tanpa asupan energi |
| **Hukum Kedua** | Pernyataan Kelvin-Planck & Clausius; $\Delta S_{\text{semesta}} \ge 0$ | Kalor tidak dapat diubah seluruhnya menjadi usaha tanpa melepas kalor ke tandon dingin; Entropi selalu meningkat | Batasan efisiensi maksimum mesin Carnot ($< 100\%$) |

---

### B. Matriks Rumus Usaha Luar ($W$) Berbagai Proses Termodinamika
| Proses Termodinamika | Kondisi Tetap / Khusus | Rumus Usaha Luar ($W$) | Perubahan Energi Dalam ($\Delta U$) & Kalor ($Q$) |
| :--- | :--- | :--- | :--- |
| **Isobarik** | Tekanan konstan ($P = \text{konstan}$) | $W = P \cdot \Delta V = P(V_2 - V_1)$<br>$W = n \cdot R \cdot \Delta T$ | $\Delta U = \frac{f}{2} n R \Delta T$<br>$Q = \Delta U + W = C_p \Delta T$ |
| **Isokhorik / Isometrik** | Volume konstan ($V = \text{konstan}, \Delta V = 0$) | $W = 0$ (Tidak ada usaha) | $\Delta U = Q = \frac{f}{2} n R \Delta T$<br>$Q = C_v \Delta T$ |
| **Isotermal / Isotermik** | Suhu konstan ($T = \text{konstan}, \Delta T = 0$) | $W = n R T \ln\left(\frac{V_2}{V_1}\right) = n R T \ln\left(\frac{P_1}{P_2}\right)$ | $\Delta U = 0$<br>$Q = W$ (Seluruh kalor diubah menjadi usaha) |
| **Adiabatik** | Terisolasi termal ($Q = 0$) | $W = \frac{1}{\gamma - 1}(P_1 V_1 - P_2 V_2) = -\Delta U$ | $Q = 0 \implies \Delta U = -W$<br>Persamaan Laplace: $P_1 V_1^\gamma = P_2 V_2^\gamma$; $T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1}$ |

*Keterangan Variabel & Satuan SI:*
* $W$: usaha luar yang dilakukan oleh gas ($\text{Joule}$); bertanda $(+)$ jika gas memuai ekspansi ($V_2 > V_1$), bertanda $(-)$ jika gas ditekan kompresi ($V_2 < V_1$).
* $Q$: kalor yang mengalir pada sistem ($\text{Joule}$); bertanda $(+)$ jika sistem menyerap kalor dari lingkungan, bertanda $(-)$ jika sistem melepas kalor.
* $\Delta U$: perubahan energi dalam gas ($\text{Joule}$); bertanda $(+)$ jika suhu gas naik ($\Delta T > 0$), bertanda $(-)$ jika suhu gas turun.
* $\gamma = \frac{C_p}{C_v} > 1$: konstanta rasio kapasitas kalor Laplace (monoatomik: $\gamma = \frac{5}{3} \approx 1{,}67$; diatomik suhu kamar: $\gamma = \frac{7}{5} = 1{,}4$).

---

### C. Siklus Termodinamika, Mesin Kalor Carnot, & Mesin Pendingin (COP)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Usaha Total Siklus Tertutup** | $W_{\text{siklus}} = Q_{\text{net}} = Q_H - Q_C$<br>$W_{\text{siklus}} = \text{Luas Siklus di Diagram } P-V$ | $W_{\text{siklus}}$: usaha netto satu siklus tertutup penuh ($\text{J}$); $Q_H$: kalor yang diserap dari reservoir tandon suhu tinggi ($\text{J}$); $Q_C$: kalor yang dibuang ke reservoir tandon suhu rendah ($\text{J}$) | Karena keadaan awal dan akhir siklus identik, maka $\Delta U_{\text{siklus}} = 0$. Siklus searah jarum jam menghasilkan usaha positif ($W > 0$, mesin pemanas/kalor) |
| **Efisiensi Mesin Kalor Umum** | $\eta = \frac{W}{Q_H} \times 100\% = \left(1 - \frac{Q_C}{Q_H}\right) \times 100\%$ | $\eta$: efisiensi termal mesin kalor ($\&$); $W = Q_H - Q_C$: kerja mekanik berguna keluaran ($\text{J}$); $Q_H$: energi kalor masukan bahan bakar ($\text{J}$) | Mengukur persentase kalor masukan yang berhasil dikonversi menjadi energi kerja mekanik |
| **Efisiensi Maksimum Mesin Carnot** | $\eta_{\text{Carnot}} = \left(1 - \frac{T_C}{T_H}\right) \times 100\% = \left(\frac{T_H - T_C}{T_H}\right) \times 100\%$ | $\eta_{\text{Carnot}}$: batas efisiensi teoretis tertinggi mesin termal ideal (Carnot); $T_H$: temperatur mutlak tandon suhu tinggi ($\text{Kelvin}$); $T_C$: temperatur mutlak tandon suhu rendah ($\text{Kelvin}$) | Mesin Carnot terdiri dari 2 proses isotermal reversibel dan 2 proses adiabatik reversibel. Suhu $T_H$ dan $T_C$ mutlak wajib bersatuan Kelvin |
| **Mesin Pendingin Refrigerator (COP)** | $K_p = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C}$<br>Carnot Ideal: $K_p = \frac{T_C}{T_H - T_C}$ | $K_p$: koefisien performa daya pendinginan (*Coefficient of Performance* / COP); $Q_C$: kalor yang diserap dari dalam ruang pendingin kulkas/AC ($\text{J}$); $W$: usaha listrik kompresor ($\text{J}$) | Beroperasi berlawanan arah jarum jam (CCW). Nilai COP kulkas rumah tangga umumnya berkisar antara $3$ hingga $6$ |
| **Pompa Kalor (Heat Pump)** | $K_{hp} = \frac{Q_H}{W} = K_p + 1 = \frac{T_H}{T_H - T_C}$ | $K_{hp}$: koefisien performa pompa kalor pemanas ruangan; $Q_H$: kalor yang dialirkan ke dalam ruangan penghangat ($\text{J}$) | Selalu bernilai satu lebih tinggi dibanding koefisien pendingin ($K_{hp} = K_p + 1$) |
| **Hukum II Termodinamika & Entropi** | $\Delta S = \frac{Q}{T}$<br>$\Delta S_{\text{semesta}} = \Delta S_{\text{sistem}} + \Delta S_{\text{lingkungan}} \ge 0$ | $\Delta S$: perubahan entropi derajat ketidakteraturan sistem ($\text{J/K}$); $Q$: kalor reversibel ($\text{J}$); $T$: temperatur mutlak proses ($\text{K}$) | Pada proses reversibel ideal: $\Delta S_{\text{semesta}} = 0$; Pada seluruh proses alami nyata ireversibel: $\Delta S_{\text{semesta}} > 0$ |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada rumus efisiensi mesin Carnot ($\eta = 1 - \frac{T_C}{T_H}$), temperatur $T_H$ dan $T_C$ **MUTLAK WAJIB diubah ke Kelvin**! Kesalahan paling sering di TKA adalah langsung memasukkan suhu derajat Celsius.
>    * Contoh: $T_H = 327^{\circ}\text{C} = 600\text{ K}$ dan $T_C = 27^{\circ}\text{C} = 300\text{ K}$.
>    * Efisiensi benar: $\eta = 1 - \frac{300}{600} = 50\%$.
>    * Jangan menghitung $\frac{27}{327}$ yang salah fatal!
> 2. Pada proses isokhorik ($V = \text{konstan}$), usaha gas selalu **nol mutlak** ($W = 0$) karena tidak ada pergeseran volume penampang silinder.

> [!TIP] Super Solusi Cepat:
> Jika mesin Carnot ingin ditingkatkan efisiensinya dari $\eta_1$ menjadi $\eta_2$ dengan mempertahankan suhu rendah $T_C$ tetap konstan, suhu tinggi baru $T_H'$ dihitung instan melalui:
> $$T_H' = \frac{1 - \eta_1}{1 - \eta_2} T_H$$