# Rangkuman Rumus Cepat & Intisari Materi — Pengukuran dan Ketelitian Alat Ukur
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Pengukuran merupakan proses komparasi besaran fisis objek uji dengan standar acuan internasional terkalibrasi. Pelaporan ilmiah hasil pengukuran wajib menyertakan nilai estimasi terbaik beserta ketidakpastian mutlak instrumen untuk merefleksikan reliabilitas data eksperimen.

| Kategori Pengukuran | Instrumen Ukur | Nilai Skala Terkecil (NST) | Ketidakpastian Mutlak ($\Delta x$) | Aplikasi Utama Soal TKA |
| :--- | :--- | :--- | :--- | :--- |
| **Panjang Linier Datar** | Mistar Ukur | $1\text{ mm} = 0{,}1\text{ cm}$ | $\Delta x = \pm 0{,}5\text{ mm} = \pm 0{,}05\text{ cm}$ | Panjang balok, papan, meja belajar |
| **Dimensi Presisi Silinder** | Jangka Sorong | $0{,}1\text{ mm}$; $0{,}05\text{ mm}$; $0{,}02\text{ mm}$ | $\Delta x = \frac{1}{2} \times \text{NST}$ | Diameter luar botol, rongga dalam pipa, kedalaman tabung |
| **Tebal Tipis & Kawat** | Mikrometer Sekrup | $0{,}01\text{ mm} = 10^{-5}\text{ m}$ | $\Delta x = \pm 0{,}005\text{ mm}$ | Ketebalan keping logam, kaca preparat, diameter kawat tembaga |
| **Massa Benda Padat** | Neraca Ohaus 3 Lengan | $0{,}1\text{ g}$ atau $0{,}05\text{ g}$ | $\Delta m = \pm 0{,}05\text{ g}$ | Massa spesimen logam berbasis kesetimbangan momen gaya |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Pembacaan Jangka Sorong** | $x = \text{SU} + (\text{SN} \times \text{NST})$ | $x$: nilai panjang terukur ($\text{mm}$); $\text{SU}$: skala utama sebelum garis nol nonius ($\text{mm}$); $\text{SN}$: garis skala nonius yang segaris lurus dengan skala utama (skala ke-$k$); $\text{NST}$: nilai skala terkecil instrumen ($\text{mm}$) | $\text{NST} = \frac{1\text{ mm}}{n}$, dengan $n$ banyaknya skala nonius (10 skala $\to 0{,}1\text{ mm}$; 20 skala $\to 0{,}05\text{ mm}$; 50 skala $\to 0{,}02\text{ mm}$) |
| **Pembacaan Mikrometer Sekrup** | $x = \text{SU} + (\text{SP} \times 0{,}01\text{ mm})$ | $x$: tebal benda ($\text{mm}$); $\text{SU}$: skala utama selubung tetap ($\text{mm}$, perhatikan garis bawah $0{,}5\text{ mm}$); $\text{SP}$: garis skala putar timbel yang segaris garis mendatar utama (skala $0 - 49$); $0{,}01\text{ mm}$: NST mikrometer sekrup | Satu putaran penuh selubung putar (50 skala) memajukan poros geser sebesar $0{,}5\text{ mm}$ |
| **Ketidakpastian Pengukuran Tunggal** | $\Delta x = \frac{1}{2} \times \text{NST}$ | $\Delta x$: ketidakpastian mutlak instrumen (satuan besaran); $\text{NST}$: nilai skala terkecil alat ukur (satuan besaran) | Pelaporan hasil akhir: $x = (\bar{x} \pm \Delta x)$, dengan jumlah desimal $\bar{x}$ disamakan terhadap $\Delta x$ |
| **Ketidakpastian Pengukuran Berulang** | $s_x = \frac{1}{N} \sqrt{\frac{N\Sigma x_i^2 - (\Sigma x_i)^2}{N - 1}}$ | $s_x$: deviasi standar nilai rata-rata sampel (satuan besaran); $N$: jumlah pengambilan data berulang; $x_i$: hasil pengukuran ke-$i$; $\Sigma x_i$: jumlah total nilai terukur; $\Sigma x_i^2$: jumlah kuadrat data | Mengurangi kesalahan acak (*random error*). Nilai terbaik adalah rata-rata aritmetika: $\bar{x} = \frac{\Sigma x_i}{N}$ |
| **Ketidakpastian Relatif (KR)** | $\text{KR} = \frac{\Delta x}{\bar{x}} \times 100\%$ | $\text{KR}$: persentase ketidakpastian relatif ($\&$); $\Delta x$: ketidakpastian mutlak; $\bar{x}$: nilai pengukuran terbaik | Kaidah Pelaporan AP: $\text{KR} \approx 10\% \implies 2\text{ AP}$; $\text{KR} \approx 1\% \implies 3\text{ AP}$; $\text{KR} \approx 0{,}1\% \implies 4\text{ AP}$ |
| **Perambatan Ralat Penjumlahan / Pengurangan** | $\Delta Z = \sqrt{(\Delta X)^2 + (\Delta Y)^2}$ | $\Delta Z$: ralat mutlak hasil operasi $Z = X \pm Y$; $\Delta X, \Delta Y$: ralat mutlak masing-masing besaran komponen | Ralat mutlak dihitung melalui penjumlahan kuadratik deviasi |
| **Perambatan Ralat Perkalian / Pembagian** | $\frac{\Delta Z}{Z} = \sqrt{\left(\frac{\Delta X}{X}\right)^2 + \left(\frac{\Delta Y}{Y}\right)^2}$ | $\frac{\Delta Z}{Z}$: ralat relatif kombinasi hasil $Z = X \cdot Y$ atau $Z = \frac{X}{Y}$; $\frac{\Delta X}{X}, \frac{\Delta Y}{Y}$: ralat relatif masing-masing komponen | Ralat relatif fraksional digabungkan secara kuadratik |
| **Perambatan Ralat Pemangkatan** | $\frac{\Delta Z}{Z} = \vert n \vert \frac{\Delta X}{X}$ | $Z = X^n$; $n$: pangkat eksponen (bilangan real positif/negatif); $\frac{\Delta Z}{Z}$: ralat relatif hasil pangkat; $\frac{\Delta X}{X}$: ralat relatif besaran pokok | Pangkat memperbesar ralat relatif secara linier sebesar kelipatan mutlak $\vert n \vert$ |

---

### C. Aljabar Vektor Kinematika & Kaidah Angka Penting
| Operasi / Kaidah | Persamaan Matematis | Penjelasan Komponen Variabel & Satuan SI | Keterangan & Kaidah Ujian |
| :--- | :--- | :--- | :--- |
| **Resultan 2 Vektor (Jajar Genjang)** | $R = \sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \cos\theta}$ | $R$: besar vektor resultan ($\text{N}$); $F_1, F_2$: besar vektor komponen pertama dan kedua ($\text{N}$); $\theta$: sudut apit antara $\vec{F}_1$ dan $\vec{F}_2$ ($^{\circ}$) | Sudut istimewa: $\theta = 0^{\circ} \implies R_{\max} = F_1 + F_2$; $\theta = 90^{\circ} \implies R = \sqrt{F_1^2 + F_2^2}$; $\theta = 180^{\circ} \implies R_{\min} = \vert F_1 - F_2 \vert$ |
| **Arah Resultan Vektor (Aturan Sinus)** | $\frac{R}{\sin\theta} = \frac{F_1}{\sin\beta} = \frac{F_2}{\sin\alpha}$ | $\alpha$: sudut apit resultan terhadap $\vec{F}_1$; $\beta$: sudut apit resultan terhadap $\vec{F}_2$; $\theta = \alpha + \beta$ | Menentukan arah kiblat resultan gaya secara analitis tanpa busur derajat |
| **Analisis Komponen Kartesius** | $R_x = \Sigma F_x = \Sigma F \cos\theta$<br>$R_y = \Sigma F_y = \Sigma F \sin\theta$<br>$R = \sqrt{R_x^2 + R_y^2}$ | $R_x, R_y$: jumlah aljabar proyeksi gaya pada sumbu $X$ dan $Y$ ($\text{N}$); $R$: resultan total seluruh gaya ($\text{N}$); $\tan\alpha = \frac{R_y}{R_x}$ | Sudut $\theta$ selalu diukur terhadap sumbu $X$ positif; perhatikan kuadran tanda aljabar ($+$/$-$) |
| **Perkalian Titik (Dot Product / Skalar)** | $\vec{A} \cdot \vec{B} = \vert\vec{A}\vert \vert\vec{B}\vert \cos\theta = A_x B_x + A_y B_y + A_z B_z$ | $\vec{A}, \vec{B}$: vektor perkalian; $\theta$: sudut apit; hasil berupa besaran skalar | Berlaku komutatif $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$. Jika tegak lurus ($\theta = 90^{\circ}$), $\vec{A} \cdot \vec{B} = 0$. Aplikasi: Usaha $W = \vec{F} \cdot \vec{s}$ |
| **Perkalian Silang (Cross Product / Vektor)** | $\vert\vec{A} \times \vec{B}\vert = \vert\vec{A}\vert \vert\vec{B}\vert \sin\theta$ | Hasil berupa vektor tegak lurus bidang $\vec{A}$ dan $\vec{B}$ (Aturan Tangan Kanan) | Anti-komutatif: $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$. Jika sejajar ($\theta = 0^{\circ}$), $\vec{A} \times \vec{B} = 0$. Aplikasi: Torsi $\vec{\tau} = \vec{r} \times \vec{F}$ |
| **Operasi AP: Tambah & Kurang** | Mengikuti desimal paling sedikit | Contoh: $12{,}55\text{ m} + 3{,}2\text{ m} = 15{,}75\text{ m} \to 15{,}8\text{ m}$ | Hasil hanya boleh memiliki **satu angka taksiran** |
| **Operasi AP: Kali & Bagi** | Mengikuti jumlah AP tersedikit | Contoh: $4{,}25\text{ cm}$ (3 AP) $\times 2{,}0\text{ cm}$ (2 AP) $= 8{,}5\text{ cm}^2$ (2 AP) | Tidak ditentukan oleh jumlah desimal koma |
| **Operasi AP: Pangkat & Akar** | Mengikuti jumlah AP bilangan asal | Contoh: $(2{,}5\text{ cm})^2 = 6{,}25\text{ cm}^2 \to 6{,}3\text{ cm}^2$ (2 AP); $\sqrt{144{,}0} = 12{,}00$ (4 AP) | Jumlah AP hasil sama persis dengan bilangan asal |
| **Operasi Bilangan Eksak** | Mengikuti AP angka hasil ukur | Contoh: 25 lembar kertas $\times 0{,}12\text{ mm}$ (2 AP) $= 3{,}0\text{ mm}$ (2 AP) | Bilangan cacah/hitung memiliki AP tak berhingga |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Jangan menjumlahkan Skala Utama (SU) dalam satuan sentimeter ($\text{cm}$) langsung dengan Skala Nonius (SN) dalam milimeter ($\text{mm}$) pada jangka sorong! Konversikan seluruh data ke $\text{mm}$ terlebih dahulu sebelum dijumlahkan.
> 2. Angka nol di sebelah kiri angka bukan nol pertama **bukan angka penting** (contoh: $0{,}0045\text{ kg}$ hanya memiliki 2 AP). Namun angka nol di kanan tanda desimal setelah angka bukan nol **adalah angka penting** (contoh: $4{,}500\text{ g}$ memiliki 4 AP).

> [!TIP] Super Solusi Cepat:
> Pada soal perkalian atau pembagian angka penting di TKA Saintek, langsung periksa jumlah angka penting dari setiap opsi jawaban. Opsi yang benar **pasti** memiliki jumlah angka penting yang sama dengan faktor yang memiliki AP paling sedikit!