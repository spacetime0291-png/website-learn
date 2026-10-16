# Rangkuman Rumus Cepat & Konsep Inti — Hubungan Gaya dan Gerak (Hukum Newton)
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Rumus Dinamika Hukum Newton & Sistem Gerak
| Sistem / Topik | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Hukum I Newton** | $\Sigma \vec{F} = 0 \implies \vec{a} = 0$ | Hukum Kelembaman (Inersia): benda diam atau GLB |
| **Hukum II Newton** | $\Sigma \vec{F} = m \vec{a} = \frac{d\vec{p}}{dt}$ | Percepatan searah resultan gaya; $F$ turunan waktu momentum |
| **Hukum III Newton** | $\vec{F}_{\text{aksi}} = -\vec{F}_{\text{reaksi}}$ | Bekerja pada 2 benda terpisah, sama besar, berlawanan arah |
| **Gaya Berat & Normal Datar** | $w = m \cdot g, \quad N = m \cdot g$ | $N$ tegak lurus bidang kontak penahan benda |
| **Bidang Miring Licin / Kasar** | $N = m g \cos\theta, \quad w_x = m g \sin\theta$<br>Licin: $a = g \sin\theta$<br>Kasar: $a = g(\sin\theta - \mu_k \cos\theta)$ | $w_x = mg\sin\theta$ penggerak turun meluncur;<br>Syarat meluncur dipercepat bidang kasar: $\tan\theta > \mu_s$ |
| **Gaya Gesek Statis & Kinetis** | $f_{s,\max} = \mu_s N, \quad f_k = \mu_k N$ | 1. $F \le f_{s,\max} \implies$ Benda diam ($a=0$), gaya gesek riil $f = F$<br>2. $F > f_{s,\max} \implies$ Benda bergerak ($a>0$), gesek kinetis $f_k = \mu_k N$ |
| **Gaya Normal Orang dalam Lift** | Naik dipercepat: $N = m(g + a)$<br>Turun dipercepat: $N = m(g - a)$<br>Kabel putus: $N = 0$ | $N$ adalah berat semu terbaca di timbangan pijak lantai lift.<br>GLB naik/turun ($a=0$): $N = mg$ |
| **Sistem Katrol Atwood** | $a = \frac{m_2 - m_1}{m_1 + m_2} g, \quad T = \frac{2 m_1 m_2}{m_1 + m_2} g$ | $m_2 > m_1$; massa tali dan inersia katrol diabaikan |
| **Balok Meja Terhubung Katrol** | Licin: $a = \frac{m_2}{m_1 + m_2} g$<br>Kasar: $a = \frac{m_2 - \mu_k m_1}{m_1 + m_2} g$ | Gaya penggerak utama hanyalah berat beban gantung ($m_2 g$) |
| **Gaya Kontak Balok Terdorong** | $a = \frac{F}{m_1 + m_2}, \quad F_{\text{kontak}} = \frac{m_2}{m_1 + m_2} F$ | $F$ mendorong balok 1 dari belakang; kontak terjadi di batas balok 1 dan 2 |
| **Tikungan Jalan Datar Kasar** | $v_{\max} = \sqrt{\mu_s g R}$ | Gaya gesek statis bertindak sebagai gaya sentripetal |
| **Tikungan Jalan Miring Licin** | $v = \sqrt{g R \tan\theta}$ | Komponen gaya normal $N\sin\theta$ bertindak sebagai gaya sentripetal |

---

### B. Tabel Gravitasi Universal Newton & Hukum Keppler
| Parameter Gravitasi | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Gaya Gravitasi Newton** | $F = G \frac{m_1 m_2}{r^2}$ | $G = 6{,}67 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$; hukum kuadrat terbalik jarak |
| **Kuat Medan Gravitasi ($g$)** | $g = G \frac{M}{r^2} \implies \frac{g_1}{g_2} = \left(\frac{r_2}{r_1}\right)^2$ | $M$ massa planet, $r$ jarak dari pusat inti planet |
| **Gravitasi Ketinggian $h$** | $g_h = g_0 \left(\frac{R}{R + h}\right)^2$ | $g_0$ gravitasi di permukaan tanah; $R$ jari-jari bumi |
| **Kelajuan Orbit Satelit** | $v_{\text{orbit}} = \sqrt{\frac{G M}{r}} = \sqrt{g R}$ | Gaya gravitasi planet bertindak sebagai gaya sentripetal orbit |
| **Kelajuan Lepas (Escape Velocity)** | $v_{\text{lepas}} = \sqrt{\frac{2 G M}{R}} = \sqrt{2 g_0 R} = \sqrt{2} v_{\text{orbit}}$ | Untuk bumi: $v_{\text{lepas}} \approx 11{,}2\text{ km/s}$ |
| **Hukum III Keppler** | $\frac{T_1^2}{T_2^2} = \frac{R_1^3}{R_2^3}$ | Kuadrat periode revolusi berbanding pangkat tiga jarak orbit rata-rata |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Gaya berat ($w$) dan gaya normal ($N$) balok diam di meja **bukan pasangan aksi-reaksi**, karena bekerja pada satu benda yang sama. Reaksi gaya normal adalah gaya tekan balok pada meja!

> [!TIP] Super Solusi Cepat:
> Pada seluruh sistem katrol licin majemuk, langsung gunakan formula sakti:
> $$a = \frac{\Sigma \text{Gaya Penggerak}}{\Sigma \text{Massa Total Sistem}} = \frac{\Sigma F_{\text{penggerak}}}{\Sigma m_{\text{total}}}$$
