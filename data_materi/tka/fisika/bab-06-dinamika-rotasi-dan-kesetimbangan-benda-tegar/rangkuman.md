# Rangkuman Rumus Cepat & Konsep Inti — Dinamika Rotasi dan Kesetimbangan Benda Tegar
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Momen Gaya, Inersia, & Hukum Rotasi
| Besaran / Prinsip | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Momen Gaya (Torsi)** | $\tau = r \cdot F \sin\theta = F \cdot d$ | Aturan tanda: $(+)$ berlawanan jarum jam (CCW), $(-)$ searah jarum jam (CW); $d = r\sin\theta$ lengan momen tegak lurus |
| **Hukum II Rotasi** | $\Sigma \tau = I \cdot \alpha, \quad a_t = \alpha \cdot R$ | Analogi $F = ma$; resultan torsi menimbulkan percepatan sudut $\alpha$ |
| **Teorema Sumbu Sejajar** | $I = I_{\text{pm}} + M d^2$ | $I_{\text{pm}}$ inersia pusat massa; $d$ jarak pergeseran sumbu sejajar |
| **Batang Silinder Homogen** | Poros Pusat: $I = \frac{1}{12} M L^2$<br>Poros Ujung: $I = \frac{1}{3} M L^2$ | Diputar di tengah ($k = \frac{1}{12}$); diputar di salah satu ujung engsel ($k = \frac{1}{3}$) |
| **Silinder Pejal & Berongga** | Pejal: $I = \frac{1}{2} M R^2$ ($k = 0{,}5$)<br>Berongga tipis: $I = M R^2$ ($k = 1{,}0$) | Silinder pejal inersianya setengah silinder berongga tipis |
| **Bola Pejal & Berongga** | Pejal: $I = \frac{2}{5} M R^2$ ($k = 0{,}4$)<br>Berongga tipis: $I = \frac{2}{3} M R^2$ ($k \approx 0{,}67$) | Poros melalui pusat simetri bola |
| **Momentum Sudut & Konservasi** | $L = I \omega, \quad \vec{L} = \vec{r} \times \vec{p}$<br>$\Sigma \tau_{\text{luar}} = 0 \implies I_1 \omega_1 = I_2 \omega_2$ | Penari balet merapatkan tangan ($I_2 < I_1$), maka putaran melesat lebih cepat ($\omega_2 > \omega_1$) |
| **Usaha & Daya Rotasi** | $W = \tau \cdot \Delta\theta, \quad P = \tau \cdot \omega$ | Usaha rotasi mengubah energi kinetik rotasi ($W = \Delta EK_{\text{rot}}$) |

---

### B. Tabel Benda Menggelinding & Kesetimbangan Statis
| Sistem / Kasus | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Energi Kinetik Menggelinding** | $EK_{\text{total}} = \frac{1}{2} m v^2 (1 + k)$ | Paduan translasi linier dan rotasi murni tanpa slip ($v = \omega R$) |
| **Menggelinding Bidang Miring** | $a = \frac{g \sin\theta}{1 + k}, \quad v = \sqrt{\frac{2 g h}{1 + k}}$ | Nilai $k$ lebih kecil menghasilkan percepatan dan kecepatan lebih besar |
| **Gaya Gesek Statis Menggelinding** | $f_s = \frac{k}{1 + k} m g \sin\theta$ | Syarat menggelinding murni tidak slip: $\mu_s \ge \frac{k}{1+k} \tan\theta$ |
| **Syarat Kesetimbangan Statis** | $\Sigma F_x = 0, \quad \Sigma F_y = 0, \quad \Sigma \tau = 0$ | Tidak bertranslasi dan tidak berotasi |
| **Tangga Dinding Licin Lantai Kasar** | $\mu_s = \frac{1}{2 \tan\theta}$ | Tangga homogen tepat akan slip; $\theta$ sudut tangga terhadap lantai datar |
| **Titik Berat Bidang Luasan (2D)** | $x_0 = \frac{\Sigma A_i x_i}{\Sigma A_i}, \quad y_0 = \frac{\Sigma A_i y_i}{\Sigma A_i}$ | Segitiga: $y = \frac{1}{3} t$; Setengah lingkaran pejal: $y = \frac{4R}{3\pi}$; Bagian berlubang menggunakan tanda minus ($-$) |
| **Katrol Bermassa Silinder Pejal** | $a = \frac{m_2 - m_1}{m_1 + m_2 + \frac{1}{2}M} g$ | Inersia katrol memperlambat percepatan sistem sebesar tambahan $\frac{1}{2}M$ |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Pada balapan menggelinding di bidang miring, yang tiba di dasar paling cepat adalah benda dengan konstanta $k$ **PALING KECIL**:
> $$\text{Bola Pejal } (k=0{,}4) > \text{Silinder Pejal } (k=0{,}5) > \text{Bola Berongga } (k=0{,}67) > \text{Silinder Berongga } (k=1{,}0)$$

> [!TIP] Super Solusi Cepat:
> Untuk tangga bersandar dinding licin yang tepat akan slip saat bersudut $\theta$ terhadap lantai, koefisien gesek lantai langsung:
> $$\mu_s = \frac{1}{2 \tan\theta}$$
