# Rangkuman Rumus Cepat & Konsep Inti — Pengukuran dan Ketelitian Alat Ukur
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Rumus Alat Ukur & Analisis Ketidakpastian
| Topik / Alat Ukur | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Jangka Sorong** | $x = \text{SU} + (\text{SN} \times \text{NST})$ | $\text{NST} = \frac{1\text{ mm}}{n}$ (10 skala $\to 0{,}1\text{ mm}$; 20 skala $\to 0{,}05\text{ mm}$; 50 skala $\to 0{,}02\text{ mm}$) |
| **Mikrometer Sekrup** | $x = \text{SU} + (\text{SP} \times 0{,}01\text{ mm})$ | $\text{NST} = 0{,}01\text{ mm}$; 1 putaran penuh thimble (50 skala) $= 0{,}5\text{ mm}$ |
| **Ralat Pengukuran Tunggal** | $\Delta x = \frac{1}{2} \times \text{NST}$ | Pelaporan: $x = \bar{x} \pm \Delta x$ (jumlah desimal $\bar{x}$ mengikuti $\Delta x$) |
| **Ralat Pengukuran Berulang** | $s_x = \frac{1}{N}\sqrt{\frac{N\Sigma x_i^2 - (\Sigma x_i)^2}{N - 1}}$ | $\bar{x} = \frac{\Sigma x_i}{N}$; mengurangi pengaruh kesalahan acak (*random error*) |
| **Ketidakpastian Relatif (KR)** | $\text{KR} = \frac{\Delta x}{\bar{x}} \times 100\%$ | $\text{KR} \approx 10\% \implies 2\text{ AP}$; $\text{KR} \approx 1\% \implies 3\text{ AP}$; $\text{KR} \approx 0{,}1\% \implies 4\text{ AP}$ |
| **Perambatan Ralat $\pm$** | $Z = X \pm Y \implies \Delta Z = \sqrt{(\Delta X)^2 + (\Delta Y)^2}$ | Ralat mutlak digabungkan secara kuadratik |
| **Perambatan Ralat $\times$ dan $\div$** | $Z = X \cdot Y \text{ atau } \frac{X}{Y} \implies \frac{\Delta Z}{Z} = \sqrt{\left(\frac{\Delta X}{X}\right)^2 + \left(\frac{\Delta Y}{Y}\right)^2}$ | Ralat relatif fraksional digabungkan secara kuadratik |
| **Perambatan Ralat Pangkat** | $Z = X^n \implies \frac{\Delta Z}{Z} = \vert n \vert \frac{\Delta X}{X}$ | Ralat relatif dikalikan nilai mutlak pangkat eksponen $\vert n \vert$ |

---

### B. Tabel Kaidah Hitung Angka Penting & Aljabar Vektor
| Topik / Operasi | Formula / Aturan Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Penjumlahan & Pengurangan** | Hasil mengikuti **desimal paling sedikit** | Mengandung tepat 1 angka taksiran (contoh: $12{,}55 + 3{,}2 = 15{,}8$) |
| **Perkalian & Pembagian** | Hasil mengikuti **jumlah AP paling sedikit** | Contoh: $4{,}25\text{ (3 AP)} \times 2{,}0\text{ (2 AP)} = 8{,}5\text{ (2 AP)}$ |
| **Pemangkatan & Penarikan Akar** | Hasil mengikuti **jumlah AP bilangan asal** | Contoh: $(2{,}5)^2 = 6{,}3\text{ (2 AP)}$; $\sqrt{144{,}0} = 12{,}00\text{ (4 AP)}$ |
| **Operasi Bilangan Eksak** | Mengikuti jumlah AP angka hasil ukur | Bilangan cacah (non-pengukuran) memiliki AP tak hingga |
| **Resultan 2 Vektor** | $R = \sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \cos\theta}$ | $\theta = 0^{\circ} \implies R_{\max} = F_1 + F_2$<br>$\theta = 90^{\circ} \implies R = \sqrt{F_1^2 + F_2^2}$<br>$\theta = 180^{\circ} \implies R_{\min} = \vert F_1 - F_2 \vert$ |
| **Arah Resultan Vektor** | $\frac{R}{\sin\theta} = \frac{F_1}{\sin\beta} = \frac{F_2}{\sin\alpha}$ | Aturan sinus penentu sudut arah resultan analitis |
| **Metode Analitis Kartesius** | $R_x = \Sigma F_x = \Sigma F\cos\theta$<br>$R_y = \Sigma F_y = \Sigma F\sin\theta$<br>$R = \sqrt{R_x^2 + R_y^2}, \quad \tan\alpha = \frac{R_y}{R_x}$ | Sudut $\theta$ diukur terhadap sumbu $X$ positif; perhatikan tanda kuadran |
| **Perkalian Titik (Dot Product)** | $\vec{A} \cdot \vec{B} = \vert\vec{A}\vert\vert\vec{B}\vert\cos\theta = A_x B_x + A_y B_y + A_z B_z$ | Menghasilkan skalar. Komutatif. Jika tegak lurus ($\theta = 90^{\circ}$), hasil $= 0$. Aplikasi: Usaha $W = \vec{F} \cdot \vec{s}$ |
| **Perkalian Silang (Cross Product)** | $\vert\vec{A} \times \vec{B}\vert = \vert\vec{A}\vert\vert\vec{B}\vert\sin\theta$ | Menghasilkan vektor tegak lurus bidang (aturan tangan kanan). Anti-komutatif. Aplikasi: Torsi $\vec{\tau} = \vec{r} \times \vec{F}$ |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada jangka sorong, jangan menjumlahkan Skala Utama (cm) langsung dengan Skala Nonius (mm). Samakan dulu ke mm!
> 2. Angka nol di kiri angka bukan nol pertama **bukan AP** ($0{,}0025$ memiliki 2 AP). Angka nol di kanan desimal setelah angka bukan nol **adalah AP** ($2{,}500$ memiliki 4 AP).

> [!TIP] Super Solusi Cepat:
> Pada soal operasi perkalian/pembagian AP di pilihan ganda TKA, hitung jumlah AP dari setiap faktor. Jawaban yang benar **selalu** memiliki jumlah AP sama dengan faktor yang AP-nya paling sedikit!
