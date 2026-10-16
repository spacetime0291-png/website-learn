# Rangkuman Rumus Cepat & Konsep Inti — Listrik Statis (Elektrostatika)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Gaya Coulomb, Medan Listrik, & Hukum Gauss
| Besaran / Prinsip | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Gaya Coulomb** | $F = k \frac{\vert q_1 q_2 \vert}{r^2}$ | $k \approx 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$; besaran vektor; tolak-menolak (sejenis), tarik-menarik (lawan jenis) |
| **Medium Dielektrik** | $F_{\text{medium}} = \frac{F_{\text{vakum}}}{\varepsilon_r} = \frac{F_{\text{vakum}}}{\kappa}$ | $\varepsilon_r \ge 1$; bahan dielektrik selalu memperkecil gaya elektrostatik |
| **Kuat Medan Listrik Muatan Titik** | $\vec{E} = \frac{\vec{F}}{q} = k \frac{\vert Q \vert}{r^2}$ | Besaran vektor; keluar radial dari muatan $(+)$, masuk radial menuju $(-)$ |
| **Hukum Gauss & Fluks Listrik** | $\Phi = \vec{E} \cdot \vec{A} = E A \cos\theta = \frac{q_{\text{dalam}}}{\varepsilon_0}$ | $\theta$ sudut terhadap garis normal permukaan; keping sejajar: $E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{A\varepsilon_0}$ |
| **Titik Medan Nol (Muatan Sejenis)** | $x = \frac{\sqrt{q_1}}{\sqrt{q_1} + \sqrt{q_2}} d$ | Titik medan listrik total nol pasti **di antara kedua muatan** |
| **Titik Medan Nol (Lawan Jenis)** | $x = \frac{\sqrt{\vert q_1 \vert}}{\vert \sqrt{\vert q_2 \vert} - \sqrt{\vert q_1 \vert} \vert} d$ | Titik medan nol pasti **di luar garis hubung**, dekat muatan bernilai mutlak kecil |

---

### B. Tabel Potensial Listrik, Bola Konduktor, & Kapasitor
| Topik / Instrumen | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Potensial Listrik Skalar** | $V = \Sigma k \frac{q_i}{r_i} = k \left(\frac{q_1}{r_1} + \frac{q_2}{r_2} + \dots\right)$ | Besaran skalar; tanda $(+)$ dan $(-)$ muatan **wajib diikutsertakan** |
| **Usaha Pemindahan Muatan** | $W_{A \to B} = q \cdot \Delta V = q (V_B - V_A) = \Delta EK$ | Usaha medan elektrostatik konservatif bebas dari bentuk lintasan |
| **Bola Konduktor Berongga** | Di dalam rongga ($r < R$): $E = 0, \quad V = k \frac{Q}{R}$<br>Di kulit bola ($r = R$): $E = k \frac{Q}{R^2}, \quad V = k \frac{Q}{R}$<br>Di luar bola ($r > R$): $E = k \frac{Q}{r^2}, \quad V = k \frac{Q}{r}$ | Di dalam rongga bola tidak ada medan ($E=0$), potensial konstan sama dengan di kulit |
| **Kapasitansi Keping Sejajar** | $C = \frac{Q}{V} = \varepsilon_r \varepsilon_0 \frac{A}{d}$ | Diperbesar dengan: keping luas ($A$), celah rapat ($d$), dielektrik besar ($\varepsilon_r$) |
| **Energi Tersimpan Kapasitor** | $W = \frac{1}{2} C V^2 = \frac{1}{2} Q V = \frac{1}{2} \frac{Q^2}{C}$ | Energi elektrostatik yang tersimpan di dalam medan dielektrik |
| **Susunan Kapasitor Seri** | $\frac{1}{C_s} = \frac{1}{C_1} + \frac{1}{C_2} + \dots$<br>$Q_{\text{total}} = Q_1 = Q_2, \quad V_{\text{total}} = V_1 + V_2$ | Muatan sama besar di setiap kapasitor seri ($Q_1 = Q_2$); pembagi tegangan |
| **Susunan Kapasitor Paralel** | $C_p = C_1 + C_2 + \dots$<br>$V_{\text{total}} = V_1 = V_2, \quad Q_{\text{total}} = Q_1 + Q_2$ | Tegangan sama besar di setiap cabang paralel ($V_1 = V_2$); pembagi muatan |
| **Dilepas vs Terhubung Baterai** | Baterai dilepas: $Q = \text{konstan}$<br>Baterai terhubung: $V = \text{konstan}$ | Jika dielektrik disisipkan: dilepas $\to V$ turun; terhubung $\to Q$ naik |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Jangan memasukkan tanda minus muatan ke rumus Gaya ($F$) atau Medan ($E$) karena keduanya vektor (tanda hanya menentukan arah). Namun tanda minus **wajib dimasukkan** pada rumus Potensial ($V$) dan Energi Potensial ($EP$) karena skalar!

> [!TIP] Super Solusi Cepat:
> Untuk dua kapasitor seri $C_1$ dan $C_2$, kapasitas pengganti langsung dihitung:
> $$C_s = \frac{C_1 \cdot C_2}{C_1 + C_2}$$
