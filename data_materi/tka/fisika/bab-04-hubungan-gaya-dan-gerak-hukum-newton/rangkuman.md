# Rangkuman Rumus Cepat & Intisari Materi — Hubungan Gaya dan Gerak (Hukum Newton)
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Dinamika Newton mengkaji kausalitas interaksi mekanik antara resultan gaya luar yang bekerja pada sistem dengan perubahan keadaan gerak benda. Analisis dinamika wajib memetakan seluruh vektor gaya secara analitis menggunakan Diagram Benda Bebas (*Free Body Diagram*).

| Hukum Dinamika | Formula Matematis | Kondisi Fisis Sistem | Makna & Karakteristik Fisis |
| :--- | :--- | :--- | :--- |
| **Hukum I Newton (Inersia)** | $\Sigma \vec{F} = 0 \implies \vec{a} = 0$ | Benda diam atau bergerak lurus beraturan (GLB) | Hukum Kelembaman: Benda cenderung mempertahankan status gerak aslinya jika tidak diganggu resultan gaya luar |
| **Hukum II Newton (Percepatan)** | $\Sigma \vec{F} = m \vec{a} = \frac{d\vec{p}}{dt}$ | Terjadi perubahan kecepatan (GLBB linier) | Percepatan berbanding lurus dengan resultan gaya total dan berbanding terbalik dengan massa kelembaman |
| **Hukum III Newton (Aksi-Reaksi)** | $\vec{F}_{\text{aksi}} = -\vec{F}_{\text{reaksi}}$ | Interaksi kontak atau medan 2 benda terpisah | Sama besar, berlawanan arah, bekerja pada **dua benda yang berbeda**, dan segaris kerja |

---

### B. Matriks Rumus Ragam Gaya & Sistem Dinamika Gerak
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Gaya Berat & Gaya Normal Datar** | $w = m \cdot g$<br>$N = w = m \cdot g$ | $w$: gaya berat gravitasi bumi ($\text{N}$); $m$: massa inersia benda ($\text{kg}$); $g$: percepatan gravitasi bumi ($\text{m/s}^2$); $N$: gaya normal tegak lurus bidang sentuh ($\text{N}$) | Gaya normal bekerja tegak lurus keluar dari permukaan kontak; pada bidang datar horizontal tanpa gaya miring luar berlaku $N = mg$ |
| **Gaya Normal Bidang Miring** | $N = m g \cos\theta$<br>$w_x = m g \sin\theta$ | $\theta$: sudut kemiringan bidang terhadap bidang datar ($^{\circ}$); $w_x$: komponen gaya berat sejajar bidang miring penarik turun ($\text{N}$); $N$: gaya normal tegak lurus bidang miring ($\text{N}$) | Komponen $mg\sin\theta$ bertindak sebagai penggerak meluncur turun; $mg\cos\theta$ menekan permukaan bidang |
| **Gaya Gesek Statis & Kinetis** | $f_{s,\max} = \mu_s N$<br>$f_k = \mu_k N$ | $f_{s,\max}$: gaya gesek statis maksimum ambang gerak ($\text{N}$); $f_k$: gaya gesek kinetis saat benda meluncur ($\text{N}$); $\mu_s, \mu_k$: koefisien gesek statis dan kinetis (tanpa satuan, $\mu_s > \mu_k$); $N$: gaya normal ($\text{N}$) | **Kaidah Status Gerak:**<br>1. Jika $F_{\text{tarik}} \le f_{s,\max} \implies$ Benda **diam** ($a = 0$), $f_{\text{riil}} = F_{\text{tarik}}$<br>2. Jika $F_{\text{tarik}} > f_{s,\max} \implies$ Benda **bergerak** ($a > 0$), gaya gesek riil adalah kinetis ($f_k = \mu_k N$) |
| **Gaya Normal Orang dalam Lift** | Naik dipercepat: $N = m(g + a)$<br>Turun dipercepat: $N = m(g - a)$<br>Kabel lift putus: $N = 0$ | $N$: gaya normal / berat semu yang terbaca pada timbangan pijak di lantai lift ($\text{N}$); $m$: massa penumpang ($\text{kg}$); $g$: gravitasi ($\text{m/s}^2$); $a$: percepatan gerak lift ($\text{m/s}^2$) | Lift bergerak dengan kelajuan konstan (GLB naik/turun): $a = 0 \implies N = mg$ (berat semu sama dengan berat riil). Kabel putus: kondisi melayang bebas (*weightlessness*) |
| **Meluncur Turun Bidang Miring** | Licin: $a = g \sin\theta$<br>Kasar: $a = g(\sin\theta - \mu_k \cos\theta)$ | $a$: percepatan meluncur turun benda ($\text{m/s}^2$); $g$: gravitasi bumi ($\text{m/s}^2$); $\theta$: sudut kemiringan bidang ($^{\circ}$); $\mu_k$: koefisien gesek kinetis bidang | Percepatan meluncur pada bidang miring licin bebas dari massa benda ($m$). Syarat meluncur dipercepat pada bidang kasar: $\tan\theta > \mu_s$ |
| **Sistem Katrol Mesin Atwood** | $a = \frac{m_2 - m_1}{m_1 + m_2} g$<br>$T = \frac{2 m_1 m_2}{m_1 + m_2} g$ | $m_1, m_2$: massa beban gantung dengan $m_2 > m_1$ ($\text{kg}$); $a$: percepatan gerak sistem ($\text{m/s}^2$); $T$: gaya tegangan tali penghubung ($\text{N}$); $g$: gravitasi ($\text{m/s}^2$) | Massa katrol dan gesekan tali diabaikan. Beban $m_2$ bergerak dipercepat ke bawah, $m_1$ bergerak ke atas dengan percepatan yang sama |
| **Sistem Balok di Meja Terhubung Katrol** | Licin: $a = \frac{m_2}{m_1 + m_2} g$<br>Kasar: $a = \frac{m_2 - \mu_k m_1}{m_1 + m_2} g$ | $m_1$: massa balok di atas meja ($\text{kg}$); $m_2$: massa beban yang tergantung vertikal ($\text{kg}$); $\mu_k$: koefisien gesek meja; $a$: percepatan gerak ($\text{m/s}^2$) | Gaya penarik penggerak utama hanyalah gaya berat beban gantung ($w_2 = m_2 g$) |
| **Gaya Kontak Dua Balok Terdorong** | $a = \frac{F}{m_1 + m_2}$<br>$F_{\text{kontak}} = \frac{m_2}{m_1 + m_2} F$ | $F$: gaya dorong luar horizontal pada balok 1 ($\text{N}$); $m_1$: massa balok pertama ($\text{kg}$); $m_2$: massa balok kedua di depannya ($\text{kg}$); $F_{\text{kontak}}$: gaya desak antar permukaan balok ($\text{N}$) | Gaya kontak sebanding dengan rasio massa balok yang didorong di depan terhadap total massa |
| **Tikungan Jalan Datar Kasar** | $v_{\max} = \sqrt{\mu_s g R}$ | $v_{\max}$: kelajuan maksimum kendaraan agar tidak selip terlempar keluar tikungan ($\text{m/s}$); $\mu_s$: koefisien gesek statis ban jalan; $R$: jari-jari kelengkungan tikungan ($\text{m}$) | Gaya sentripetal disediakan sepenuhnya oleh gaya gesek statis ban terhadap aspal jalan ($f_s = \frac{mv^2}{R}$) |
| **Tikungan Jalan Miring Licin** | $v = \sqrt{g R \tan\theta}$ | $\theta$: sudut kemiringan jalan miring terhadap bidang datar ($^{\circ}$); $R$: jari-jari belokan ($\text{m}$); $v$: kelajuan aman tanpa mengandalkan gaya gesek ($\text{m/s}$) | Gaya sentripetal disediakan oleh komponen horizontal gaya normal: $N \sin\theta = \frac{mv^2}{R}$ |

---

### C. Gravitasi Universal Newton & Hukum Peredaran Keppler
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Gravitasi Newton** | $F = G \frac{m_1 m_2}{r^2}$ | $F$: gaya tarik gravitasi antar dua partikel bermassa ($\text{N}$); $G$: konstanta gravitasi universal ($6{,}67 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$); $m_1, m_2$: massa partikel ($\text{kg}$); $r$: jarak pisah kedua pusat massa ($\text{m}$) | Mematuhi hukum kuadrat terbalik ($F \propto \frac{1}{r^2}$) dan pasangan aksi-reaksi ($F_{12} = -F_{21}$) |
| **Kuat Medan / Percepatan Gravitasi** | $g = G \frac{M}{r^2}$<br>$\frac{g_1}{g_2} = \left(\frac{r_2}{r_1}\right)^2$ | $g$: percepatan gravitasi pada jarak $r$ dari pusat planet ($\text{m/s}^2$); $M$: massa planet induk ($\text{kg}$); $r$: jarak dari pusat inti planet ($\text{m}$) | Kuat medan gravitasi di permukaan bumi: $g_0 = G \frac{M}{R^2}$ ($R$ jari-jari bumi) |
| **Gravitasi pada Ketinggian $h$** | $g_h = g_0 \left(\frac{R}{R + h}\right)^2$ | $g_h$: percepatan gravitasi pada ketinggian $h$ di atas permukaan bumi ($\text{m/s}^2$); $g_0$: percepatan gravitasi permukaan bumi ($\text{m/s}^2$); $R$: jari-jari bumi ($\text{m}$); $h$: ketinggian dari permukaan ($\text{m}$) | Jika ketinggian $h = R$ (satu jari-jari di atas tanah), gravitasi menyusut menjadi $g_h = \frac{1}{4} g_0$ |
| **Kelajuan Orbit Satelit Melingkar** | $v_{\text{orbit}} = \sqrt{\frac{G M}{r}} = \sqrt{g R}$ | $v_{\text{orbit}}$: kelajuan linier orbit satelit mengelilingi planet ($\text{m/s}$); $M$: massa planet induk ($\text{kg}$); $r$: jari-jari orbit dari pusat planet ($r = R + h$, $\text{m}$) | Gaya gravitasi planet bertindak sebagai gaya sentripetal orbit: $G\frac{Mm}{r^2} = \frac{mv^2}{r}$ |
| **Kelajuan Lepas (Escape Velocity)** | $v_{\text{lepas}} = \sqrt{\frac{2 G M}{R}} = \sqrt{2 g_0 R} = \sqrt{2} \, v_{\text{orbit}}$ | $v_{\text{lepas}}$: kelajuan minimum benda agar terlepas total dari tarikan gravitasi planet menuju tak hingga ($\text{m/s}$) | Untuk bumi: $v_{\text{lepas}} \approx 11{,}2\text{ km/s}$ |
| **Hukum III Keppler (Periode Planet)** | $\frac{T_1^2}{T_2^2} = \frac{R_1^3}{R_2^3}$ | $T_1, T_2$: periode revolusi orbit planet mengelilingi matahari (tahun atau sekon); $R_1, R_2$: jarak rata-rata sumbu semi-mayor planet ke matahari (satuan astronomi / $\text{m}$) | Kuadrat periode revolusi berbanding lurus dengan pangkat tiga jarak rata-rata orbit |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Gaya berat ($w$) dan gaya normal ($N$) pada balok diam di atas meja **BUKAN pasangan aksi-reaksi**, meskipun besarnya sama dan arahnya berlawanan! Alasannya: keduanya bekerja pada **satu benda yang sama** (balok). Pasangan reaksi dari gaya normal $N$ adalah gaya tekan balok ke bawah pada permukaan meja. Pasangan reaksi gaya berat adalah gaya tarik gravitasi balok terhadap pusat bumi!

> [!TIP] Super Solusi Cepat:
> Pada seluruh sistem katrol majemuk berbeban licin, percepatan sistem dapat dihitung seketika dalam satu baris menggunakan Formula Sakti:
> $$a = \frac{\Sigma \text{Gaya Penggerak Seluruh Sistem}}{\Sigma \text{Massa Total Seluruh Sistem}} = \frac{\Sigma F_{\text{penggerak}}}{\Sigma m_{\text{total}}}$$