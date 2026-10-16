// ============================================================================
// EDUMANDIRI: RANGKUMAN TERSTANDARISASI FISIKA TKA (BAB 9 - BAB 16)
// Pendekatan Kurikulum 2013 Revisi & Kurikulum Merdeka
// Dilengkapi tabel rumus komprehensif & uraian komponen variabel + satuan SI lengkap
// ============================================================================

const rangkumanPart2 = {
  9: `# Rangkuman Rumus Cepat & Intisari Materi — Gelombang Bunyi
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Gelombang bunyi merupakan gelombang mekanik longitudinal yang merambat melalui rapatan dan renggangan medium elastis. Bunyi tidak dapat merambat dalam ruang hampa udara (*vakum*). Resonansi akustik terjadi saat frekuensi sumber bunyi tepat sama dengan frekuensi alami medium bergetar, menghasilkan amplifikasi amplitudo suara maksimum.

| Karakteristik Bunyi | Rentang Frekuensi | Kemampuan Deteksi Fisis | Aplikasi Medis & Teknologi |
| :--- | :--- | :--- | :--- |
| **Infrasonik** | $f < 20\\text{ Hz}$ | Gajah, jangkrik, paus, getaran seismik gempa bumi | Deteksi dini aktivitas vulkanik & tsunami |
| **Audiosonik** | $20\\text{ Hz} \\le f \\le 20.000\\text{ Hz}$ | Telinga manusia sehat normal | Percakapan, musik, akustik gedung auditorium |
| **Ultrasonik** | $f > 20.000\\text{ Hz}$ | Kelelawar, lumba-lumba, anjing | Ultrasonografi medis (USG), SONAR kapal selam, pembersih kacamata ultrasonik |

---

### B. Matriks Cepat Rambat Bunyi & Pola Frekuensi Harmonik
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Melde (Cepat Rambat Dawai)** | $v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{F \\cdot L}{m}} = \\sqrt{\\frac{F}{\\rho \\cdot A}}$ | $v$: cepat rambat gelombang transversal pada dawai/kawat ($\\text{m/s}$); $F$: gaya tegangan kawat/senar ($\\text{N}$); $\\mu = \\frac{m}{L}$: massa per satuan panjang kawat ($\\text{kg/m}$); $m$: massa kawat ($\\text{kg}$); $L$: panjang kawat ($\\text{m}$); $\\rho$: massa jenis kawat ($\\text{kg/m}^3$); $A$: luas penampang kawat ($\\text{m}^2$) | Kelajuan berbanding lurus dengan akar tegangan kawat ($v \\propto \\sqrt{F}$) dan berbanding terbalik dengan akar tebal/massa kawat |
| **Cepat Rambat Zat Padat Batang** | $v = \\sqrt{\\frac{Y}{\\rho}}$ | $v$: kelajuan bunyi dalam batang logam padat ($\\text{m/s}$); $Y$: modulus elastisitas Young bahan batang ($\\text{Pa} = \\text{N/m}^2$); $\\rho$: massa jenis zat padat ($\\text{kg/m}^3$) | Cepat rambat bunyi pada zat padat paling tinggi dibanding zat cair dan gas ($v_{\\text{padat}} > v_{\\text{cair}} > v_{\\text{gas}}$) |
| **Cepat Rambat Zat Cair** | $v = \\sqrt{\\frac{B}{\\rho}}$ | $v$: kelajuan bunyi dalam cairan ($\\text{m/s}$); $B$: modulus elastisitas Bulk zat cair ($\\text{Pa}$); $\\rho$: massa jenis cairan ($\\text{kg/m}^3$) | Menjelaskan perambatan bunyi dalam air laut untuk navigasi SONAR |
| **Cepat Rambat Gas Ideal Laplace** | $v = \\sqrt{\\frac{\\gamma R T}{M}} = \\sqrt{\\frac{\\gamma P}{\\rho}}$ | $v$: cepat rambat bunyi di udara/gas ($\\text{m/s}$); $\\gamma$: konstanta Laplace gas ($\\gamma > 1$); $R$: tetapan gas ideal ($8{,}314\\text{ J/mol}\\cdot\\text{K}$); $T$: suhu mutlak gas ($\\text{Kelvin}$); $M$: massa molar gas ($\\text{kg/mol}$); $P$: tekanan gas ($\\text{Pa}$); $\\rho$: massa jenis gas ($\\text{kg/m}^3$) | Kelajuan bunyi di udara berbanding lurus dengan akar suhu mutlak ($v \\propto \\sqrt{T}$). Di udara normal $20^{\\circ}\\text{C}$, $v \\approx 340\\text{ m/s}$ |
| **Dawai / Senar Terikat (Harmonik)** | $f_n = (n + 1) \\frac{v}{2 L}$<br>$f_0 : f_1 : f_2 = 1 : 2 : 3 : \\dots$ | $f_n$: frekuensi nada atas ke-$n$ ($n = 0$: nada dasar; $n = 1$: nada atas ke-1; $n = 2$: nada atas ke-2) ($\\text{Hz}$); $v$: cepat rambat dawai ($\\text{m/s}$); $L$: panjang senar ($\\text{m}$) | Ujung dawai selalu simpul. Jumlah perut $= n + 1$; jumlah simpul $= n + 2$. Panjang gelombang nada dasar $\\lambda_0 = 2L$ |
| **Pipa Organa Terbuka (POB)** | $f_n = (n + 1) \\frac{v}{2 L}$<br>$f_0 : f_1 : f_2 = 1 : 2 : 3 : \\dots$ | $f_n$: frekuensi nada POB ke-$n$ ($\\text{Hz}$); $v$: cepat rambat bunyi di udara ($\\text{m/s}$); $L$: panjang pipa organa terbuka ($\\text{m}$) | Kedua ujung pipa selalu merupakan perut gelombang terbuka. Perbandingan harmonik utuh kelipatan bulat: $1 : 2 : 3 : 4 : \\dots$ |
| **Pipa Organa Tertutup (POT)** | $f_n = (2 n + 1) \\frac{v}{4 L}$<br>$f_0 : f_1 : f_2 = 1 : 3 : 5 : \\dots$ | $f_n$: frekuensi nada POT ke-$n$ ($\\text{Hz}$); $v$: cepat rambat bunyi ($\\text{m/s}$); $L$: panjang pipa organa tertutup ($\\text{m}$) | Ujung tertutup adalah simpul, ujung terbuka adalah perut. Perbandingan harmonik hanya menghasilkan **kelipatan bilangan ganjil**! |
| **Resonansi Tabung Kolom Udara Air** | $L_n = (2 n - 1) \\frac{\\lambda}{4}$<br>$\\Delta L = L_{n+1} - L_n = \\frac{\\lambda}{2}$ | $L_n$: panjang kolom udara tabung air saat terjadi dengung resonansi ke-$n$ ($\\text{m}$); $\\lambda$: panjang gelombang bunyi garpu tala ($\\text{m}$) | Beda panjang kolom udara antar dua resonansi yang berurutan selalu tepat sama dengan setengah panjang gelombang ($\\frac{\\lambda}{2}$) |

---

### C. Efek Doppler, Pelayangan, Intensitas & Taraf Intensitas ($TI$)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Efek Doppler Konvensional** | $f_p = \\left(\\frac{v \\pm v_p}{v \\mp v_s}\\right) f_s$ | $f_p$: frekuensi bunyi yang didengar oleh pendengar ($\\text{Hz}$); $f_s$: frekuensi sumber bunyi asli ($\\text{Hz}$); $v$: kelajuan bunyi di udara ($\\text{m/s}$); $v_p$: kelajuan gerak pendengar ($\\text{m/s}$); $v_s$: kelajuan gerak sumber bunyi ($\\text{m/s}$) | **Aturan Tanda Doppler:**<br>1. Pendengar mendekati sumber: $+v_p$<br>2. Pendengar menjauhi sumber: $-v_p$<br>3. Sumber mendekati pendengar: $-v_s$<br>4. Sumber menjauhi pendengar: $+v_s$<br>5. Diam di tempat: $v = 0$ |
| **Efek Doppler Pengaruh Angin** | $f_p = \\left[\\frac{(v \\pm v_a) \\pm v_p}{(v \\pm v_a) \\mp v_s}\\right] f_s$ | $v_a$: kelajuan hembusan angin ($\\text{m/s}$) | Angin bertanda $(+v_a)$ jika berhembus dari sumber menuju pendengar; bertanda $(-v_a)$ jika melawan |
| **Frekuensi Pelayangan Bunyi** | $f_{\\text{layang}} = \\vert f_1 - f_2 \\vert$ | $f_{\\text{layang}}$: frekuensi denyut pelayangan kuat-lemah bunyi ($\\text{Hz}$); $f_1, f_2$: frekuensi dua sumber bunyi yang berinterferensi dengan selisih sangat kecil ($\\text{Hz}$) | Fenomena interferensi waktu yang dimanfaatkan untuk menyetem senar gitar/piano |
| **Intensitas Bunyi Titik Sumber** | $I = \\frac{P}{A} = \\frac{P}{4 \\pi r^2}$<br>$\\frac{I_1}{I_2} = \\left(\\frac{r_2}{r_1}\\right)^2$ | $I$: intensitas bunyi ($\\text{W/m}^2$); $P$: daya akustik sumber bunyi ($\\text{Watt}$); $A = 4\\pi r^2$: luas bola muka gelombang ($\\text{m}^2$); $r$: jarak pengamat dari titik sumber bunyi ($\\text{m}$) | Hukum kuadrat terbalik jarak: menjauh 2 kali lipat membuat intensitas bunyi turun menjadi $\\frac{1}{4}$ kali |
| **Taraf Intensitas Bunyi (TI)** | $TI = 10 \\log\\left(\\frac{I}{I_0}\\right)$ | $TI$: taraf intensitas bunyi ($\\text{dB}$ / desibel); $I$: intensitas bunyi terukur ($\\text{W/m}^2$); $I_0 = 10^{-12}\\text{ W/m}^2$: intensitas ambang pendengaran minimum telinga manusia | Skala logaritmik akustik. Ambang pendengaran $I = I_0 \\implies TI = 0\\text{ dB}$; Ambang rasa sakit $I = 1\\text{ W/m}^2 \\implies TI = 120\\text{ dB}$ |
| **TI Kelipatan $n$ Sumber Identik** | $TI_n = TI_1 + 10 \\log n$ | $TI_n$: taraf intensitas total dari $n$ buah sumber bunyi identik yang berbunyi serempak ($\\text{dB}$); $TI_1$: taraf intensitas satu sumber bunyi tunggal ($\\text{dB}$); $n$: jumlah mesin/sumber | Jika ada 10 mesin sejenis: $+10\\text{ dB}$; jika ada 100 mesin sejenis: $+20\\text{ dB}$; jika ada 1000 mesin sejenis: $+30\\text{ dB}$ |
| **TI Perubahan Jarak Pengamat** | $TI_2 = TI_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$ | $TI_1$: taraf intensitas pada jarak $r_1$ ($\\text{dB}$); $TI_2$: taraf intensitas pada jarak $r_2$ ($r_2 > r_1$, $\\text{dB}$); $r_1, r_2$: jarak pengamat awal dan akhir dari sumber bunyi ($\\text{m}$) | Jika jarak menjauh 10 kali lipat ($r_2 = 10 r_1$): $TI$ berkurang tepat $20\\text{ dB}$. Jika menjauh 100 kali: $TI$ berkurang $40\\text{ dB}$ |
| **Prinsip Gema Pantul SONAR** | $s = \\frac{v \\cdot t}{2}$ | $s$: kedalaman laut atau jarak dinding tebing pemantul ($\\text{m}$); $v$: cepat rambat gelombang ultrasonik di medium ($\\text{m/s}$); $t$: waktu bolak-balik pulsa bunyi dipancarkan hingga diterima kembali ($\\text{s}$) | Faktor pembagi 2 mencerminkan lintasan bolak-balik bunyi (pergi dan pulang) |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Nada atas pertama pipa organa terbuka (POB) adalah harmonik kedua ($n = 1 \\implies f_1 = 2 f_0$). Namun pada pipa organa tertutup (POT), nada atas pertama adalah harmonik ketiga ($n = 1 \\implies f_1 = 3 f_0$)! Jangan menyamakan nomor nada atas dengan nomor kelipatan harmonik.
> 2. Pada rumus taraf intensitas multi-sumber, pengalinya adalah **$10 \\log n$**, sedangkan pada perubahan jarak pengamat pengalinya adalah **$20 \\log(\\frac{r_2}{r_1})$** karena intensitas berbanding terbalik kuadrat dengan jarak ($r^2$).

> [!TIP] Super Solusi Cepat:
> Jika soal menyebutkan taraf intensitas satu sepeda motor adalah $70\\text{ dB}$, maka jika ada 100 sepeda motor identik dinyalakan bersamaan, taraf intensitasnya langsung dihitung cepat:
> $$TI_{100} = 70 + 10 \\log(100) = 70 + 20 = 90\\text{ dB}$$
> Tanpa perlu mengubah ke bentuk intensitas watt!`
,
  10: `# Rangkuman Rumus Cepat & Intisari Materi — Gelombang Cahaya dan Alat Optik
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Optika fisis memodelkan cahaya sebagai gelombang elektromagnetik transversal yang mengalami fenomena dispersi, difraksi, interferensi, dan polarisasi. Optika geometri memodelkan perambatan berkas sinar lurus pada peristiwa pemantulan dan pembiasan melalui cermin dan lensa lengkung untuk membentuk bayangan instrumen optik.

| Cabang Optika | Sifat Dominan Cahaya | Fenomena Kunci yang Dipelajari | Aplikasi Utama Soal Ujian |
| :--- | :--- | :--- | :--- |
| **Optika Fisis** | Gelombang Elektromagnetik Transversal | Celah Ganda Young, Kisi Difraksi, Polarisasi Brewster & Malus | Spektrofotometer kisi, kacamata polaroid 3D, lapisan anti-pantul |
| **Optika Geometri** | Perambatan Berkas Sinar Lurus | Hukum Snellius, Sudut Kritis, Pembiasan Prisma | Serat optik (*fiber optic*), prisma dispersi pelangi |
| **Alat-Alat Optik** | Rekayasa Bayangan Lensa & Cermin | Akomodasi Mata, Pembesaran Sudut Lup, Mikroskop, Teropong | Kacamata minus/plus, lup pengamat perangko, mikroskop biologi |

---

### B. Matriks Rumus Optika Fisis (Interferensi, Difraksi & Polarisasi)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Interferensi Celah Ganda Young (Terang)** | $\\frac{d \\cdot y}{L} = m \\cdot \\lambda$<br>$d \\sin\\theta = m \\cdot \\lambda$ | $d$: jarak pisah celah ganda ($\\text{m}$); $y$: jarak garis terang ke-$m$ dari terang pusat ($\\text{m}$); $L$: jarak dari celah ke layar pengamat ($\\text{m}$); $m$: orde interferensi ($m = 0, 1, 2, \\dots$); $\\lambda$: panjang gelombang cahaya ($\\text{m}$); $\\theta$: sudut deviasi difraksi ($^{\\circ}$) | Terang pusat terjadi saat $m = 0$. Syarat interferensi konstruktif: beda lintasan gelombang merupakan kelipatan bulat panjang gelombang |
| **Interferensi Celah Ganda Young (Gelap)** | $\\frac{d \\cdot y}{L} = \\left(m - \\frac{1}{2}\\right) \\lambda$<br>$d \\sin\\theta = (2m - 1) \\frac{\\lambda}{2}$ | $m$: orde pita garis gelap ($m = 1, 2, 3, \\dots$); garis gelap pertama terdekat dari pusat adalah $m = 1$ | Syarat interferensi destruktif: beda lintasan merupakan kelipatan ganjil setengah panjang gelombang |
| **Jarak Antara Dua Garis Terang Berurutan** | $\\Delta y = \\frac{\\lambda \\cdot L}{d}$ | $\\Delta y$: jarak pisah antara dua garis terang berdekatan atau dua garis gelap berdekatan di layar ($\\text{m}$) | Jarak pita berbanding lurus dengan jarak layar ($L$) dan berbanding terbalik dengan jarak antarcelah ($d$) |
| **Interferensi Selaput Tipis (Lapisan Minyak)** | Terang: $2 n d \\cos r = \\left(m - \\frac{1}{2}\\right) \\lambda$<br>Gelap: $2 n d \\cos r = m \\lambda$ | $n$: indeks bias medium selaput tipis; $d$: ketebalan selaput minyak/sabun ($\\text{m}$); $r$: sudut bias di dalam selaput ($^{\\circ}$); $m$: orde ($1, 2, \\dots$); $\\lambda$: panjang gelombang cahaya di udara ($\\text{m}$) | Pergeseran fase $\\pi$ ($180^{\\circ}$) terjadi saat cahaya memantul dari medium yang berindeks bias lebih rapat |
| **Difraksi Celah Tunggal Fraunhofer** | Pita Gelap: $d \\sin\\theta = m \\lambda$<br>Pita Terang: $d \\sin\\theta = \\left(m + \\frac{1}{2}\\right) \\lambda$ | $d$: lebar celah tunggal ($\\text{m}$); $m$: orde difraksi ($m = 1, 2, 3, \\dots$) | Lebar terang pusat adalah dua kali lipat jarak terang orde berikutnya: lebar pusat $= \\frac{2\\lambda L}{d}$ |
| **Difraksi Kisi Banyak Celah** | $d \\sin\\theta = n \\cdot \\lambda$<br>$d = \\frac{1}{N}$ | $d$: tetapan jarak antarcelah kisi ($\\text{m}$ atau $\\text{cm}$); $N$: jumlah garis goresan kisi per satuan panjang (misal: $500\\text{ garis/mm}$); $n$: orde spektrum ($n = 1, 2, \\dots$); $\\theta$: sudut deviasi pita ($^{\\circ}$) | Konversi tetapan kisi: jika $N = 500\\text{ garis/mm}$, maka $d = \\frac{1}{500}\\text{ mm} = 2 \\times 10^{-6}\\text{ m}$ |
| **Daya Urai Kriteria Rayleigh** | $d_m = 1{,}22 \\frac{\\lambda \\cdot L}{D}$ | $d_m$: batas daya urai pemisahan linear minimum dua titik sumber cahaya yang masih dapat dibedakan terpisah ($\\text{m}$); $D$: diameter bukaan pupil mata atau lensa objektif ($\\text{m}$) | Panjang gelombang pendek (cahaya biru) menghasilkan daya pisah resolusi yang lebih tajam |
| **Hukum Malus Polarisasi Cahaya** | $I_1 = \\frac{1}{2} I_0$<br>$I_2 = I_1 \\cos^2\\theta = \\frac{1}{2} I_0 \\cos^2\\theta$ | $I_0$: intensitas cahaya alami tak terpolarisasi ($\\text{W/m}^2$); $I_1$: intensitas setelah melewati polarisator pertama ($\\text{W/m}^2$); $I_2$: intensitas setelah lolos analisator ($\\text{W/m}^2$); $\\theta$: sudut sumbu transmisi analisator terhadap polarisator ($^{\\circ}$) | Cahaya tak terpolarisasi langsung kehilangan separuh intensitasnya ($50\\%$) pada polarisator pertama |
| **Polarisasi Pantulan (Sudut Brewster)** | $\\tan\\theta_p = \\frac{n_2}{n_1}$ | $\\theta_p$: sudut polarisasi datang Brewster ($^{\\circ}$); $n_1$: indeks bias medium asal; $n_2$: indeks bias medium pantul | Pada sudut Brewster, sinar pantul terpolarisasi linier sempurna tegak lurus sinar bias ($\\theta_p + r = 90^{\\circ}$) |

---

### C. Matriks Optika Geometri, Cermin, Lensa, & Alat-Alat Optik
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Snellius Pembiasan** | $n_1 \\sin i = n_2 \\sin r$<br>$\\frac{n_2}{n_1} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$ | $n_1, n_2$: indeks bias medium 1 dan 2; $i$: sudut datang dari garis normal ($^{\\circ}$); $r$: sudut bias di medium 2 ($^{\\circ}$); $v$: kelajuan cahaya ($\\text{m/s}$); $\\lambda$: panjang gelombang ($\\text{m}$) | Menuju medium lebih rapat ($n_2 > n_1$): sinar dibelokkan **mendekati garis normal** ($r < i$), kelajuan dan panjang gelombang menyusut, frekuensi konstan |
| **Sudut Kritis & Pemantulan Total** | $\\sin\\theta_k = \\frac{n_2}{n_1}$ | $\\theta_k$: sudut kritis datang ($^{\\circ}$); $n_1 > n_2$ | Syarat pemantulan total sempurna: sinar datang dari medium **lebih rapat ke kurang rapat** dengan sudut datang $i > \\theta_k$. Landasan serat optik |
| **Sudut Deviasi Prisma Kaca** | $\\delta = i_1 + r_2 - \\beta$<br>$\\delta_{\\min} = 2 i_1 - \\beta$<br>$\\phi = (n_u - n_m) \\beta$ | $\\delta$: sudut deviasi berkas sinar prisma ($^{\\circ}$); $\\beta$: sudut pembias puncak prisma ($^{\\circ}$); $\\delta_{\\min}$: sudut deviasi minimum ($^{\\circ}$); $\\phi$: sudut dispersi penguraian warna putih ($^{\\circ}$); $n_u, n_m$: indeks bias cahaya ungu dan merah | Deviasi minimum tercapai saat jalannya sinar di dalam prisma simetris mendatar ($i_1 = r_2$ dan $r_1 = i_2$) |
| **Hubungan Gauss Cermin & Lensa** | $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$<br>$M = \\left\\vert\\frac{s'}{s}\\right\\vert = \\left\\vert\\frac{h'}{h}\\right\\vert$ | $f$: jarak fokus ($\\text{cm}$); $s$: jarak benda dari optik ($\\text{cm}$); $s'$: jarak bayangan ($\\text{cm}$); $M$: perbesaran linier; $h, h'$: tinggi benda dan tinggi bayangan ($\\text{cm}$) | **Konvensi Tanda:**<br>1. Cermin cekung / Lensa cembung: $f > 0$ (positif / konvergen)<br>2. Cermin cembung / Lensa cekung: $f < 0$ (negatif / divergen)<br>3. Bayangan nyata (di depan cermin / belakang lensa): $s' > 0$<br>4. Bayangan maya (tegak): $s' < 0$ |
| **Kuat Lensa & Rumus Pembuat Lensa** | $P = \\frac{100}{f\\text{ (cm)}} = \\frac{1}{f\\text{ (m)}}$<br>$\\frac{1}{f} = \\left(\\frac{n_l}{n_m} - 1\\right) \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$ | $P$: kuat lensa (Dioptri / $\\text{D}$); $n_l$: indeks bias bahan lensa; $n_m$: indeks bias medium sekeliling (udara $= 1$); $R_1, R_2$: jari-jari kelengkungan permukaan lensa ($\\text{m}$) | Permukaan cembung bernilai $R > 0$; permukaan cekung bernilai $R < 0$; permukaan datar memiliki $R = \\infty$ (sehingga $\\frac{1}{R} = 0$) |
| **Mata Rabun Jauh (Miopi)** | $P = -\\frac{100}{PR\\text{ (cm)}}$ | $P$: daya kacamata lensa cekung minus (Dioptri); $PR$: titik jauh penderita miopi (*Punctum Remotum*, $\\text{cm}$) | Menggeser bayangan dari titik tak terhingga ($s = \\infty$) agar jatuh tepat di titik jauh penderita ($s' = -PR$) |
| **Mata Rabun Dekat (Hipermetropi)** | $P = \\frac{100}{s_n} - \\frac{100}{PP\\text{ (cm)}} = 4 - \\frac{100}{PP\\text{ (cm)}}$ | $P$: daya kacamata lensa cembung plus (Dioptri); $s_n$: jarak baca normal ($25\\text{ cm}$); $PP$: titik dekat mata penderita (*Punctum Proximum*, $\\text{cm}$) | Menempatkan benda pada jarak normal $25\\text{ cm}$ agar bayangannya terbentuk di titik dekat penderita ($s' = -PP$) |
| **Lup (Kaca Pembesar)** | Akomodasi Maksimum: $M = \\frac{s_n}{f} + 1$<br>Tanpa Akomodasi (Rileks): $M = \\frac{s_n}{f}$ | $M$: perbesaran anguler sudut lup; $s_n$: jarak baca normal ($25\\text{ cm}$); $f$: jarak titik fokus lensa cembung lup ($\\text{cm}$) | Mata tanpa akomodasi menghasilkan pandangan paling rileks dan tidak cepat lelah (bayangan jatuh di tak hingga) |
| **Mikroskop Biologi Dua Lensa** | $M_{\\text{total}} = M_{\\text{ob}} \\times M_{\\text{ok}}$<br>$M_{\\text{ob}} = \\left\\vert\\frac{s_{\\text{ob}}'}{s_{\\text{ob}}}\\right\\vert$<br>Akomodasi Maks: $M_{\\text{ok}} = \\frac{s_n}{f_{\\text{ok}}} + 1$<br>Tanpa Akomodasi: $M_{\\text{ok}} = \\frac{s_n}{f_{\\text{ok}}}$<br>Panjang Tabung: $d = s_{\\text{ob}}' + s_{\\text{ok}}$ | $M_{\\text{ob}}$: perbesaran lensa objektif (nyata, terbalik, diperbesar); $M_{\\text{ok}}$: perbesaran okuler (lup); $f_{\\text{ob}}, f_{\\text{ok}}$: fokus objektif dan okuler ($f_{\\text{ob}} < f_{\\text{ok}}$); $d$: jarak tabung antara kedua lensa ($\\text{cm}$) | Pengamatan tanpa akomodasi: bayangan objektif jatuh tepat di fokus okuler ($s_{\\text{ok}} = f_{\\text{ok}}$), panjang mikroskop $d = s_{\\text{ob}}' + f_{\\text{ok}}$ |
| **Teropong Bintang (Teleskop Astronomi)** | Tanpa Akomodasi:<br>$M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}$<br>$d = f_{\\text{ob}} + f_{\\text{ok}}$ | $M$: perbesaran teropong bintang; $f_{\\text{ob}}$: fokus lensa objektif (panjang); $f_{\\text{ok}}$: fokus lensa okuler (pendek, $f_{\\text{ob}} \\gg f_{\\text{ok}}$); $d$: panjang tabung teropong bintang ($\\text{cm}$) | Benda luar angkasa berada di jarak tak terhingga ($s_{\\text{ob}} = \\infty$), bayangannya jatuh tepat di fokus objektif ($s_{\\text{ob}}' = f_{\\text{ob}}$) |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada kisi difraksi, tetapan kisi $d$ harus dihitung dari kebalikan jumlah garis per panjang ($d = \\frac{1}{N}$). Perhatikan satuan: jika $N = 400\\text{ garis/cm}$, maka $d = \\frac{1}{400}\\text{ cm} = \\frac{10^{-2}}{400}\\text{ m} = 2{,}5 \\times 10^{-6}\\text{ m}$!
> 2. Pada mikroskop, benda preparat **harus diletakkan di ruang II objektif** ($f_{\\text{ob}} < s_{\\text{ob}} < 2f_{\\text{ob}}$) agar menghasilkan bayangan nyata terbalik diperbesar di ruang III yang kemudian diperbesar lagi oleh okuler sebagai lup.

> [!TIP] Super Solusi Cepat:
> Untuk kacamata minus penderita miopi dengan titik jauh $PR$ dalam sentimeter, daya lensanya langsung:
> $$P = -\\frac{100}{PR\\text{ (cm)}}$$
> Jika seseorang hanya dapat melihat jelas hingga jarak terjauh $2\\text{ meter} = 200\\text{ cm}$, daya lensanya langsung $P = -\\frac{100}{200} = -0{,}5\\text{ Dioptri}$!`
,
  11: `# Rangkuman Rumus Cepat & Intisari Materi — Kalor dan Perpindahannya
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Kalor adalah energi termal yang bertransmisi secara spontan melintasi batas sistem akibat perbedaan gradien temperatur dari benda bersuhu lebih tinggi ke benda bersuhu lebih rendah. Asas Black merefleksikan hukum kekekalan energi kalor pada proses pencampuran terisolasi tanpa interaksi lingkungan luar.

| Mekanisme Termal | Parameter Fisis Kunci | Formula Matematis Pokok | Karakteristik Perubahan Fisis |
| :--- | :--- | :--- | :--- |
| **Kenaikan Suhu Sensibel** | Kapasitas kalor ($C$) & Kalor jenis ($c$) | $Q = m \\cdot c \\cdot \\Delta T = C \\cdot \\Delta T$ | Terjadi perubahan energi kinetik molekul tanpa perubahan wujud zat |
| **Perubahan Wujud Laten** | Kalor lebur ($L$) & Kalor uap ($U$) | $Q = m \\cdot L \\quad \\text{atau} \\quad Q = m \\cdot U$ | Terjadi pemutusan/pembentukan ikatan molekuler pada suhu konstan |
| **Pemuaian Termal Zat** | Koefisien muai panjang ($\\alpha$) | $\\Delta L = L_0 \\alpha \\Delta T, \\quad \\beta = 2\\alpha, \\quad \\gamma = 3\\alpha$ | Jarak antaratom meregang akibat peningkatan vibrasi kisi kristal |
| **Transmisi Konduksi** | Konduktivitas termal bahan ($k$) | $H = \\frac{k A \\Delta T}{L}$ | Perpindahan kalor melalui tumbukan partikel tanpa perpindahan massa medium |
| **Transmisi Radiasi** | Emisivitas ($e$) & Suhu Kelvin ($T^4$) | $P = e \\sigma A T^4$ | Pancaran foton gelombang elektromagnetik tanpa memerlukan perantara zat |

---

### B. Matriks Rumus Termometri, Pemuaian Zat, & Asas Black
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Konversi 4 Skala Termometer Utama** | $\\frac{C}{5} = \\frac{R}{4} = \\frac{F - 32}{9} = \\frac{K - 273}{5}$ | $C$: suhu Celsius ($^{\\circ}\\text{C}$); $R$: suhu Reamur ($^{\\circ}\\text{R}$); $F$: suhu Fahrenheit ($^{\\circ}\\text{F}$); $K$: suhu mutlak Kelvin ($\\text{K}$) | Titik beku air: $0^{\\circ}\\text{C} = 0^{\\circ}\\text{R} = 32^{\\circ}\\text{F} = 273\\text{ K}$; Titik didih air: $100^{\\circ}\\text{C} = 80^{\\circ}\\text{R} = 212^{\\circ}\\text{F} = 373\\text{ K}$. Nol mutlak: $0\\text{ K} = -273^{\\circ}\\text{C}$ |
| **Kalibrasi Termometer Sembarang X & Y** | $\\frac{X - X_b}{X_a - X_b} = \\frac{Y - Y_b}{Y_a - Y_b}$ | $X, Y$: nilai penunjukan skala suhu sembarang ($^{\\circ}\\text{X}, ^{\\circ}\\text{Y}$); $X_b, Y_b$: titik tetap bawah termometer (titik beku es murni); $X_a, Y_a$: titik tetap atas termometer (titik didih air normal) | Perbandingan linier rentang pembagian skala antara titik didih dan titik beku |
| **Pemuaian Panjang Padatan** | $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$<br>$L_t = L_0 (1 + \\alpha \\Delta T)$ | $L_0$: panjang mula-mula benda padat ($\\text{m}$); $L_t$: panjang akhir setelah dipanaskan ($\\text{m}$); $\\Delta L$: pertambahan panjang ($\\text{m}$); $\\alpha$: koefisien muai panjang zat ($\\text{K}^{-1}$ atau $^{\\circ}\\text{C}^{-1}$); $\\Delta T = T_2 - T_1$: kenaikan suhu ($^{\\circ}\\text{C}$ atau $\\text{K}$) | Diterapkan pada celah sambungan rel kereta api dan keping bimetal sensor saklar termostat |
| **Pemuaian Luas Padatan** | $\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T$<br>$\\beta = 2 \\alpha$ | $A_0$: luas penampang mula-mula ($\\text{m}^2$); $\\Delta A$: pertambahan luas permukaan ($\\text{m}^2$); $\\beta$: koefisien muai luas ($\\beta = 2\\alpha$, $^{\\circ}\\text{C}^{-1}$) | Pelat logam berlubang yang dipanaskan akan mengalami pemuaian diameter lubang persis seperti pelat pejal |
| **Pemuaian Volume Padatan & Cairan** | $\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T$<br>$\\gamma = 3 \\alpha$ | $V_0$: volume ruang mula-mula ($\\text{m}^3$); $\\Delta V$: pertambahan volume ($\\text{m}^3$); $\\gamma$: koefisien muai volume ($\\gamma = 3\\alpha$, $^{\\circ}\\text{C}^{-1}$) | Volume tumpah cairan saat bejana dipanaskan: $\\Delta V_{\\text{tumpah}} = V_0 (\\gamma_{\\text{cair}} - \\gamma_{\\text{wadah}}) \\Delta T$ |
| **Anomali Air ($0^{\\circ}\\text{C} - 4^{\\circ}\\text{C}$)** | Volume minimum pada $4^{\\circ}\\text{C}$<br>Massa jenis maksimum $\\rho_{\\max} = 1000\\text{ kg/m}^3$ | Air menyusut jika dipanaskan dari $0^{\\circ}\\text{C}$ hingga $4^{\\circ}\\text{C}$ dan memuai jika didinginkan di bawah $4^{\\circ}\\text{C}$ | Menjaga kehidupan ekosistem perairan kutub tetap hidup di bawah lapisan es permukaan |
| **Kalor Sensibel (Perubahan Suhu)** | $Q = m \\cdot c \\cdot \\Delta T = C \\cdot \\Delta T$<br>$C = m \\cdot c$ | $Q$: energi kalor yang diserap atau dilepas ($\\text{Joule}$); $m$: massa zat ($\\text{kg}$); $c$: kalor jenis spesifik bahan ($\\text{J}/\\text{kg}\\cdot^{\\circ}\\text{C}$); $C$: kapasitas kalor benda ($\\text{J}/^{\\circ}\\text{C}$); $\\Delta T$: selisih perubahan suhu ($^{\\circ}\\text{C}$) | Kalor jenis air: $c_{\\text{air}} = 4200\\text{ J/kg}\\cdot^{\\circ}\\text{C} = 1\\text{ kal/g}\\cdot^{\\circ}\\text{C}$; $1\\text{ kalori} = 4{,}186\\text{ Joule} \\approx 4{,}2\\text{ J}$ |
| **Kalor Laten (Perubahan Fase Wujud)** | Melebur/Membeku: $Q = m \\cdot L$<br>Menguap/Mengembun: $Q = m \\cdot U$ | $L$: kalor lebur es laten ($L_{\\text{es}} \\approx 334\\text{ kJ/kg} = 80\\text{ kal/g}$); $U$: kalor penguapan air laten ($U_{\\text{air}} \\approx 2260\\text{ kJ/kg} = 540\\text{ kal/g}$); $m$: massa zat ($\\text{kg}$) | Suhu zat tetap konstan selama proses transisi perubahan fase wujud berlangsung |
| **Asas Black (Konservasi Termal)** | $\\Sigma Q_{\\text{lepas}} = \\Sigma Q_{\\text{terima}}$<br>$m_1 c_1 (T_1 - T_c) = m_2 c_2 (T_c - T_2)$ | $m_1, m_2$: massa zat bersuhu tinggi dan rendah ($\\text{kg}$); $T_1$: suhu awal zat panas ($T_1 > T_c$); $T_2$: suhu awal zat dingin ($T_2 < T_c$); $T_c$: suhu akhir kesetimbangan termal campuran ($^{\\circ}\\text{C}$) | Kalor yang dilepaskan benda bersuhu tinggi sama dengan kalor yang diserap benda bersuhu rendah |

---

### C. Mekanisme Perpindahan Kalor: Konduksi, Konveksi, Radiasi & Wien
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Konduksi Termal (Hukum Fourier)** | $H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$ | $H$: laju perambatan kalor konduksi ($\\text{J/s} = \\text{Watt}$); $k$: konduktivitas termal bahan ($\\text{W/m}\\cdot\\text{K}$); $A$: luas penampang penghantar ($\\text{m}^2$); $\\Delta T = T_1 - T_2$: selisih beda suhu ujung-ujung batang ($^{\\circ}\\text{C}$ atau $\\text{K}$); $L$: panjang/tebal penghantar ($\\text{m}$) | Logam (tembaga, aluminium) adalah konduktor termal unggul karena memiliki elektron bebas; kayu dan gabus adalah isolator |
| **Suhu Sambungan Dua Batang Logam** | $\\frac{k_1 A_1 (T_1 - T_s)}{L_1} = \\frac{k_2 A_2 (T_s - T_2)}{L_2}$ | $T_s$: suhu kesetimbangan pada bidang batas sambungan kedua logam ($^{\\circ}\\text{C}$); $T_1, T_2$: suhu ujung bebas batang 1 dan 2 ($T_1 > T_s > T_2$) | Laju hantaran kalor pada kedua batang sambungan bernilai identik ($H_1 = H_2$) |
| **Konveksi Termal Fluida** | $H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$ | $H$: laju aliran kalor konveksi ($\\text{Watt}$); $h$: koefisien konveksi termal fluida ($\\text{W/m}^2\\cdot\\text{K}$); $A$: luas permukaan bidang kontak ($\\text{m}^2$); $\\Delta T$: selisih suhu permukaan dan fluida sekitarnya ($\\text{K}$) | Disertai perpindahan massa fluida akibat perbedaan massa jenis fluida panas (angin darat, angin laut, radiator) |
| **Radiasi Termal (Stefan-Boltzmann)** | $P = \\frac{Q}{t} = e \\cdot \\sigma \\cdot A \\cdot T^4$ | $P$: daya radiasi termal terpancar ($\\text{Watt}$); $e$: emisivitas permukaan benda ($0 \\le e \\le 1$); $\\sigma$: konstanta Stefan-Boltzmann ($5{,}67 \\times 10^{-8}\\text{ W/m}^2\\cdot\\text{K}^4$); $A$: luas permukaan pemancar ($\\text{m}^2$); $T$: suhu mutlak permukaan benda ($\\text{Kelvin}$) | Benda hitam sempurna (*black body*) memiliki emisivitas maksimum $e = 1$. Laju pancaran berbanding lurus dengan **pangkat empat suhu mutlak** ($T^4$) |
| **Laju Radiasi Neto Lingkungan** | $P_{\\text{net}} = e \\sigma A (T^4 - T_0^4)$ | $T$: suhu permukaan benda ($\\text{K}$); $T_0$: suhu mutlak lingkungan sekitar ($\\text{K}$) | Jika $T > T_0$, benda melepas radiasi neto; jika $T < T_0$, benda menyerap radiasi neto |
| **Hukum Pergeseran Wien** | $\\lambda_{\\max} \\cdot T = C$ | $\\lambda_{\\max}$: panjang gelombang intensitas pancaran radiasi maksimum ($\\text{m}$); $T$: suhu mutlak permukaan pemancar radiasi ($\\text{K}$); $C$: tetapan pergeseran Wien ($2{,}898 \\times 10^{-3}\\text{ m}\\cdot\\text{K} \\approx 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$) | Semakin tinggi suhu benda pijar, puncak spektrum radiasi bergeser ke panjang gelombang yang semakin pendek (ke arah spektrum biru/ultraviolet) |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada hukum Stefan-Boltzmann ($P = e \\sigma A T^4$) dan Hukum Wien ($\\lambda_{\\max} T = C$), suhu $T$ **MUTLAK WAJIB menggunakan satuan Kelvin** ($T = t^{\\circ}\\text{C} + 273$), bukan derajat Celsius! Jika suhu dinaikkan dari $27^{\\circ}\\text{C}$ ($300\\text{ K}$) menjadi $327^{\\circ}\\text{C}$ ($600\\text{ K}$), suhunya naik 2 kali lipat Kelvin, sehingga daya radiasinya melonjak $2^4 = 16\\text{ kali lipat}$!
> 2. Pada Asas Black yang melibatkan es, selalu periksa apakah kalor yang dilepas air panas cukup untuk mencairkan seluruh es. Jika tidak cukup, suhu akhir campuran pasti tepat $0^{\\circ}\\text{C}$ dengan sebagian es belum mencair!

> [!TIP] Super Solusi Cepat:
> Untuk sambungan dua batang logam dengan ukuran identik ($A_1 = A_2$ dan $L_1 = L_2$), suhu sambungan $T_s$ langsung:
> $$T_s = \\frac{k_1 T_1 + k_2 T_2}{k_1 + k_2}$$`
,
  12: `# Rangkuman Rumus Cepat & Intisari Materi — Pemanasan Global dan Efek Rumah Kaca
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Pemanasan global (*global warming*) adalah fenomena kenaikan suhu rata-rata permukaan biosfer, atmosfer, dan samudra bumi secara anomali akibat peningkatan akumulasi konsentrasi Gas Rumah Kaca (GRK) hasil aktivitas antropogenik. Efek rumah kaca alami esensial menjaga suhu layak huni bumi ($+15^{\\circ}\\text{C}$), namun penguatan efek rumah kaca yang berlebihan memicu krisis disrupsi iklim global.

| Kategori Pembahasan | Parameter Kunci | Makna & Mekanisme Fisis | Implikasi Lingkungan Global |
| :--- | :--- | :--- | :--- |
| **Mekanisme Radiatif** | Konstanta Surya ($S$), Albedo ($\\alpha$) | Radiasi matahari gelombang pendek diteruskan; radiasi termal bumi inframerah gelombang panjang diserap GRK | Kenaikan suhu rata-rata global sebesar $+33^{\\circ}\\text{C}$ dari efek rumah kaca alami |
| **Gas Rumah Kaca (GRK)** | Potensi Pemanasan Global (GWP) | Kemampuan molekul gas memerangkap radiasi inframerah relatif terhadap $\\text{CO}_2$ selama rentang 100 tahun | Parameter perhitungan jejak emisi karbon setara ($\\text{CO}_2\\text{e}$) |
| **Dampak Oseanografi** | Pemuaian Termal & Asidifikasi Laut | Air laut memuai secara volume ($\\Delta V = V_0 \\beta \\Delta T$) dan menyerap $\\text{CO}_2$ menjadi asam karbonat | Kenaikan permukaan air laut (*sea level rise*) dan pemutihan terumbu karang (*coral bleaching*) |

---

### B. Matriks Keseimbangan Energi Radiasi Bumi & Efek Rumah Kaca
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Fluks Daya Radiasi Matahari (Konstanta Surya)** | $S = \\frac{P_{\\text{matahari}}}{4 \\pi R_{\\text{orbit}}^2} \\approx 1361\\text{ W/m}^2$ | $S$: konstanta surya fluks energi matahari di puncak atmosfer bumi ($\\text{W/m}^2$); $P_{\\text{matahari}}$: daya total emisi matahari ($3{,}84 \\times 10^{26}\\text{ W}$); $R_{\\text{orbit}}$: jarak rata-rata bumi ke matahari ($1{,}496 \\times 10^{11}\\text{ m}$) | Fluks radiasi tegak lurus rata-rata yang diterima di batas luar atmosfer bumi |
| **Neraca Keseimbangan Termal Radiasi Bumi** | $\\frac{S (1 - \\alpha)}{4} = \\sigma T_{\\text{efektif}}^4$ | $S$: konstanta surya ($1361\\text{ W/m}^2$); $\\alpha$: albedo rata-rata reflektivitas bumi ($\\approx 0{,}30$ atau $30\\%$ dipantulkan kembali ke luar angkasa); pembagi 4: rasio luas permukaan bola ($4\\pi R^2$) terhadap penampang lingkaran tangkapan ($\\pi R^2$); $\\sigma$: tetapan Stefan-Boltzmann; $T_{\\text{efektif}}$: suhu efektif emisi radiasi bumi ($\\text{Kelvin}$) | Tanpa efek rumah kaca: $T_{\\text{tanpa GRK}} \\approx 255\\text{ K} (-18^{\\circ}\\text{C})$. Suhu riil bumi: $T_{\\text{riil}} \\approx 288\\text{ K} (+15^{\\circ}\\text{C})$. Peningkatan alami oleh GRK: $\\Delta T = +33^{\\circ}\\text{C}$ |
| **Jejak Emisi Karbon Setara ($\\text{CO}_2\\text{e}$)** | $\\text{Emisi CO}_2\\text{e} = \\sum_{i} (m_i \\times \\text{GWP}_i)$ | $\\text{Emisi CO}_2\\text{e}$: total emisi karbon setara ekuivalen ($\\text{kg}$ atau ton $\\text{CO}_2\\text{e}$); $m_i$: massa gas rumah kaca jenis ke-$i$ yang terlepas ($\\text{kg}$); $\\text{GWP}_i$: nilai Global Warming Potential gas ke-$i$ (tanpa satuan) | Menstandarisasi dampak pemanasan berbagai ragam GRK terhadap acuan gas $\\text{CO}_2$ |
| **Pemuaian Termal Air Laut** | $\\Delta V = V_0 \\cdot \\beta_{\\text{air}} \\cdot \\Delta T$<br>$\\Delta h_{\\text{laut}} = \\frac{\\Delta V}{A_{\\text{samudra}}} = h_0 \\beta_{\\text{air}} \\Delta T$ | $\\Delta V$: pertambahan volume air laut akibat pemuaian termal ($\\text{m}^3$); $V_0$: volume air laut mula-mula ($\\text{m}^3$); $\\beta_{\\text{air}}$: koefisien muai volume air laut ($\\approx 2{,}1 \\times 10^{-4}\\text{ K}^{-1}$); $\\Delta T$: kenaikan suhu air laut ($\\text{K}$); $\\Delta h_{\\text{laut}}$: kenaikan permukaan air laut (*sea level rise*, $\\text{m}$) | Kontributor utama kenaikan muka air laut global selain pencairan gletser es kutub |
| **Kimia Asidifikasi Samudra** | $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$<br>$\\text{H}^+ + \\text{CO}_3^{2-} \\rightleftharpoons \\text{HCO}_3^-$ | $\\text{CO}_2$: karbon dioksida terlarut; $\\text{H}_2\\text{CO}_3$: asam karbonat; $\\text{H}^+$: ion hidrogen penurun derajat pH air laut; $\\text{CO}_3^{2-}$: ion karbonat | Penurunan ion karbonat bebas menghambat pembentukan cangkang kalsium karbonat biota laut ($\\text{CaCO}_3$) |

---

### C. Profil Gas Rumah Kaca & Kesepakatan Iklim Global
| Senyawa Gas Rumah Kaca | Sumber Emisi Utama | Nilai GWP (100 Tahun) | Waktu Tinggal di Atmosfer |
| :--- | :--- | :--- | :--- |
| **Karbon Dioksida ($\\text{CO}_2$)** | Pembakaran bahan bakar fosil (PLTU batu bara, transportasi BBM, deforestasi) | **$1$** (Gas Acuan Standar) | Ratusan hingga ribuan tahun |
| **Metana ($\\text{CH}_4$)** | Peternakan sapi ruminansia, sawah padi tergenang, dekomposisi TPA sampah, kebocoran gas alam | **$\\approx 28$ kali $\\text{CO}_2$** | $\\approx 12$ tahun |
| **Dinitrogen Oksida ($\\text{N}_2\\text{O}$)** | Pupuk nitrogen sintetis pertanian, proses industri kimia nilon | **$\\approx 265$ kali $\\text{CO}_2$** | $\\approx 114$ tahun |
| **Klorofluorokarbon (CFC / Freon)** | Refrigeran pendingin AC/kulkas lawas, propelan aerosol spray | **$10.200 - 14.000$ kali $\\text{CO}_2$** | $50 - 100$ tahun (perusak lapisan ozon $\\text{O}_3$ stratosfer) |
| **Sulfur Heksafluorida ($\\text{SF}_6$)** | Gas isolator tegangan tinggi gardu induk transmisi listrik | **$\\approx 23.500$ kali $\\text{CO}_2$** | $\\approx 3200$ tahun |

*Kesepakatan Internasional & Strategi Mitigasi:*
* **Protokol Kyoto (1997):** Kesepakatan historis penurunan emisi 6 GRK utama bagi negara-negara industri maju.
* **Paris Agreement (2015):** Traktat global membatasi kenaikan suhu rata-rata bumi **jauh di bawah $2^{\\circ}\\text{C}$** dan mengupayakan pembatasan ambang ketat hingga **$1{,}5^{\\circ}\\text{C}$** di atas tingkat pra-industri.
* **Transisi Energi Baru Terbarukan (EBT):** Mengganti pembangkit fosil dengan Pembangkit Listrik Tenaga Surya (PLTS fotovoltaik), Pembangkit Listrik Tenaga Bayu/Angin (PLTB), Pembangkit Listrik Tenaga Air (PLTA), dan Panas Bumi (Geotermal).
* **Teknologi CCS (Carbon Capture & Storage):** Penangkapan gas $\\text{CO}_2$ dari cerobong industri untuk diinjeksikan dan disimpan permanen di lapisan batuan geologis dalam.

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Efek rumah kaca dan penipisan lapisan ozon adalah **dua fenomena yang berbeda mekanisme**:
>    * Efek rumah kaca terjadi di **troposfer** oleh gas $\\text{CO}_2, \\text{CH}_4, \\text{H}_2\\text{O}$ yang menyerap radiasi inframerah panas bumi.
>    * Penipisan lapisan ozon terjadi di **stratosfer** oleh radikal klorin dari CFC yang memecah molekul ozon ($\\text{O}_3$), sehingga radiasi ultraviolet-B matahari yang berbahaya tembus ke bumi.
> 2. Uap air ($\\text{H}_2\\text{O}$) secara fisis adalah gas rumah kaca alami dengan konsentrasi terbanyak di atmosfer, namun $\\text{CO}_2$ adalah pemicu utama pemanasan antropogenik karena waktu tinggalnya yang sangat lama di atmosfer.

> [!TIP] Super Solusi Cepat:
> Pada soal perhitungan emisi karbon setara, gas metana ($\\text{CH}_4$) memiliki daya rusak radiatif sekitar 28 kali lebih dahsyat per kilogram dibanding $\\text{CO}_2$:
> $$\\text{Emisi } 1\\text{ ton } \\text{CH}_4 = 28\\text{ ton } \\text{CO}_2\\text{e}$$`
,
  13: `# Rangkuman Rumus Cepat & Intisari Materi — Teori Kinetik Gas Ideal
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Teori kinetik gas menjembatani besaran makroskopis termodinamika (tekanan, temperatur, dan volume) dengan perilaku dinamis mikroskopis molekul gas acak berdasarkan Hukum Gerak Newton. Model Gas Ideal didasarkan pada asumsi bahwa ukuran molekul diabaikan, tumbukan antarmolekul lenting sempurna, tidak ada gaya tarik-menarik antarmolekul kecuali saat bertumbukan, dan energi kinetik sebanding lurus dengan temperatur mutlak Kelvin.

| Besaran Mikroskopis Gas | Simbol & Dimensi | Hubungan Makroskopis | Satuan SI |
| :--- | :--- | :--- | :--- |
| **Energi Kinetik Translasi Rata-Rata** | $\\overline{EK}$, $[M][L]^2[T]^{-2}$ | $\\overline{EK} = \\frac{3}{2} k T$ | Joule ($\\text{J}$) |
| **Kelajuan Efektif Molekul (RMS)** | $v_{\\text{rms}}$, $[L][T]^{-1}$ | $v_{\\text{rms}} = \\sqrt{\\frac{3 k T}{m_0}} = \\sqrt{\\frac{3 R T}{M_r}}$ | meter per sekon ($\\text{m/s}$) |
| **Energi Dalam Gas Ideal** | $U$, $[M][L]^2[T]^{-2}$ | $U = N \\bar{E} = \\frac{f}{2} N k T = \\frac{f}{2} n R T$ | Joule ($\\text{J}$) |
| **Tekanan Mikroskopis Gas** | $P$, $[M][L]^{-1}[T]^{-2}$ | $P = \\frac{1}{3} \\rho \\overline{v^2} = \\frac{2}{3} \\frac{N}{V} \\overline{EK}$ | Pascal ($\\text{Pa} = \\text{N/m}^2$) |

---

### B. Matriks Rumus Persamaan Keadaan & Hukum Gas Ideal
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Persamaan Keadaan Gas Ideal** | $P \\cdot V = n \\cdot R \\cdot T$<br>$P \\cdot V = N \\cdot k \\cdot T$ | $P$: tekanan mutlak gas ($\\text{Pa}$); $V$: volume wadah gas ($\\text{m}^3$); $n$: jumlah mol gas ($\\text{mol}$); $R$: konstanta gas umum ($8{,}314\\text{ J/mol}\\cdot\\text{K}$); $T$: suhu mutlak gas ($\\text{Kelvin}$); $N$: jumlah total molekul partikel; $k$: konstanta Boltzmann ($1{,}38 \\times 10^{-23}\\text{ J/K}$) | Hubungan mol dan konstanta: $n = \\frac{m}{M_r} = \\frac{N}{N_A}$; $k = \\frac{R}{N_A}$; Bilangan Avogadro $N_A = 6{,}022 \\times 10^{23}\\text{ partikel/mol}$ |
| **Massa Jenis Gas Ideal** | $\\rho = \\frac{P \\cdot M_r}{R \\cdot T}$ | $\\rho$: massa jenis gas ($\\text{kg/m}^3$); $P$: tekanan ($\\text{Pa}$); $M_r$: massa molar gas ($\\text{kg/mol}$); $T$: suhu mutlak ($\\text{K}$) | Pada tekanan tetap, massa jenis gas berbanding terbalik dengan suhu mutlak (udara panas memuai lebih ringan mengapung naik) |
| **Hukum Boyle (Proses Isotermal)** | $P_1 \\cdot V_1 = P_2 \\cdot V_2$ | $P_1, P_2$: tekanan gas awal dan akhir ($\\text{Pa}$); $V_1, V_2$: volume gas awal dan akhir ($\\text{m}^3$) | Berlaku saat suhu gas dijaga konstan ($T = \\text{konstan}$) |
| **Hukum Charles (Proses Isobarik)** | $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ | $V$: volume gas ($\\text{m}^3$); $T$: suhu mutlak ($\\text{Kelvin}$) | Berlaku saat tekanan gas dijaga konstan ($P = \\text{konstan}$) |
| **Hukum Gay-Lussac (Proses Isokhorik)** | $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$ | $P$: tekanan gas ($\\text{Pa}$); $T$: suhu mutlak ($\\text{Kelvin}$) | Berlaku saat volume wadah gas dijaga konstan ($V = \\text{konstan}$) |
| **Hukum Gabungan Boyle-Gay Lussac** | $\\frac{P_1 \\cdot V_1}{T_1} = \\frac{P_2 \\cdot V_2}{T_2}$ | $P, V, T$: parameter termodinamika gas pada kondisi awal (1) dan kondisi akhir (2) | Berlaku untuk sistem gas tertutup dengan massa atau jumlah partikel konstan ($n = \\text{konstan}$) |

---

### C. Tekanan Mikroskopis, Kelajuan RMS, & Derajat Kebebasan
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Tekanan Gas Ditinjau Mikroskopis** | $P = \\frac{1}{3} \\frac{N m_0}{V} \\overline{v^2} = \\frac{1}{3} \\rho \\overline{v^2} = \\frac{2}{3} \\frac{N}{V} \\overline{EK}$ | $P$: tekanan gas ($\\text{Pa}$); $N$: jumlah partikel gas; $m_0$: massa 1 molekul partikel gas ($\\text{kg}$); $V$: volume ruang ($\\text{m}^3$); $\\rho = \\frac{N m_0}{V}$: massa jenis gas ($\\text{kg/m}^3$); $\\overline{v^2}$: rata-rata kuadrat kelajuan partikel ($\\text{m}^2/\\text{s}^2$) | Tekanan timbul akibat tumbukan elastis molekul gas pada dinding bejana wadah |
| **Energi Kinetik Rata-Rata Translasi** | $\\overline{EK} = \\frac{3}{2} k T$ | $\\overline{EK}$: energi kinetik translasi rata-rata satu molekul gas ($\\text{Joule}$); $k$: konstanta Boltzmann ($1{,}38 \\times 10^{-23}\\text{ J/K}$); $T$: suhu mutlak gas ($\\text{K}$) | Energi kinetik rata-rata gas **HANYA bergantung pada temperatur Kelvin ($T$)**, sama sekali tidak dipengaruhi oleh jenis gas atau tekanannya! |
| **Kelajuan Efektif Molekul Gas (RMS)** | $v_{\\text{rms}} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{3 k T}{m_0}} = \\sqrt{\\frac{3 R T}{M_r}} = \\sqrt{\\frac{3 P}{\\rho}}$ | $v_{\\text{rms}}$: kelajuan efektif *root mean square* partikel gas ($\\text{m/s}$); $m_0$: massa satu molekul ($\\text{kg}$); $M_r$: massa molekul relatif gas ($\\text{kg/mol}$); $\\rho$: massa jenis ($\\text{kg/m}^3$) | Pada suhu yang sama, molekul gas yang bermassa molar lebih ringan (seperti gas $\\text{H}_2$ atau $\\text{He}$) melesat jauh lebih cepat dibanding gas berat ($\\text{O}_2$) |
| **Teorema Ekipartisi Energi** | $\\overline{E} = f \\left(\\frac{1}{2} k T\\right)$ | $\\overline{E}$: energi rata-rata per molekul partikel ($\\text{J}$); $f$: derajat kebebasan gerak molekul gas | Setiap derajat kebebasan gerak partikel yang independen menyumbang energi termal sebesar $\\frac{1}{2}kT$ |
| **Energi Dalam Gas Monoatomik (He, Ne, Ar)** | $f = 3$ (Translasi Sumbu $X, Y, Z$)<br>$U = \\frac{3}{2} N k T = \\frac{3}{2} n R T$ | $U$: energi dalam total sistem gas ($\\text{Joule}$); $n$: jumlah mol gas ($\\text{mol}$); $N$: jumlah total partikel gas | Gas mulia monoatomik hanya memiliki 3 derajat kebebasan translasi pada segala tingkatan suhu |
| **Energi Dalam Gas Diatomik ($\\text{O}_2, \\text{N}_2, \\text{H}_2$)** | Suhu Rendah ($T \\le 250\\text{ K}$): $f = 3 \\implies U = \\frac{3}{2} n R T$<br>Suhu Sedang ($T \\approx 300 - 500\\text{ K}$): $f = 5 \\implies U = \\frac{5}{2} n R T$<br>Suhu Tinggi ($T \\ge 1000\\text{ K}$): $f = 7 \\implies U = \\frac{7}{2} n R T$ | $f = 3$ (3 translasi); $f = 5$ (3 translasi + 2 rotasi); $f = 7$ (3 translasi + 2 rotasi + 2 vibrasi) | Pada suhu kamar standar ($300\\text{ K}$), gas diatomik di udara normal beroperasi pada derajat kebebasan $f = 5$ |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Kelajuan efektif molekul gas ($v_{\\text{rms}}$) berbanding lurus dengan **akar kuadrat suhu mutlak Kelvin** ($v_{\\text{rms}} \\propto \\sqrt{T}$), BUKAN berbanding lurus linier dengan $T$! Jika suhu gas dinaikkan dari $27^{\\circ}\\text{C}$ ($300\\text{ K}$) menjadi $927^{\\circ}\\text{C}$ ($1200\\text{ K}$), suhunya naik 4 kali lipat, sehingga kelajuan efektifnya hanya meningkat $\\sqrt{4} = 2\\text{ kali lipat}$!
> 2. Jangan lupa mengonversikan massa molar $M_r$ dari $\\text{g/mol}$ ke satuan SI $\\text{kg/mol}$ (dikalikan $10^{-3}$) saat menghitung $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}}$! Contoh: Gas Oksigen $\\text{O}_2$ ($M_r = 32\\text{ g/mol} = 32 \\times 10^{-3}\\text{ kg/mol}$).

> [!TIP] Super Solusi Cepat:
> Untuk perbandingan kelajuan efektif dua gas yang berbeda pada suhu yang sama, perbandingannya berbanding terbalik dengan akar massa molarnya:
> $$\\frac{v_1}{v_2} = \\sqrt{\\frac{M_{r2}}{M_{r1}}}$$`
,
  14: `# Rangkuman Rumus Cepat & Intisari Materi — Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Termodinamika mengkaji konversi energi antara kalor (*heat*) dan usaha mekanik (*work*) pada sistem tertutup maupun terbuka. Hukum Pertama Termodinamika menegaskan prinsip konservasi energi. Hukum Kedua Termodinamika menetapkan batasan arah spontanitas perpindahan energi dan ketidakmungkinan menciptakan mesin kalor dengan efisiensi sempurna ($100\\%$) melalui peningkatan entropi semesta.

| Hukum Termodinamika | Formulasi Pokok | Makna & Prinsip Konservasi Fisis | Implikasi Mesin Termal |
| :--- | :--- | :--- | :--- |
| **Hukum Ke-Nol** | Jika $A$ setimbang termal dengan $B$, dan $B$ dengan $C$, maka $A$ setimbang dengan $C$ | Konsep dasar suhu (*temperature*) dan kesetimbangan termal | Landasan kalibrasi termometer |
| **Hukum Pertama** | $Q = \\Delta U + W \\quad \\text{atau} \\quad \\Delta U = Q - W$ | Kekekalan Energi: Kalor yang diserap digunakan untuk menaikkan energi dalam dan melakukan usaha luar | Mesin tidak dapat menghasilkan kerja tanpa asupan energi |
| **Hukum Kedua** | Pernyataan Kelvin-Planck & Clausius; $\\Delta S_{\\text{semesta}} \\ge 0$ | Kalor tidak dapat diubah seluruhnya menjadi usaha tanpa melepas kalor ke tandon dingin; Entropi selalu meningkat | Batasan efisiensi maksimum mesin Carnot ($< 100\\%$) |

---

### B. Matriks Rumus Usaha Luar ($W$) Berbagai Proses Termodinamika
| Proses Termodinamika | Kondisi Tetap / Khusus | Rumus Usaha Luar ($W$) | Perubahan Energi Dalam ($\\Delta U$) & Kalor ($Q$) |
| :--- | :--- | :--- | :--- |
| **Isobarik** | Tekanan konstan ($P = \\text{konstan}$) | $W = P \\cdot \\Delta V = P(V_2 - V_1)$<br>$W = n \\cdot R \\cdot \\Delta T$ | $\\Delta U = \\frac{f}{2} n R \\Delta T$<br>$Q = \\Delta U + W = C_p \\Delta T$ |
| **Isokhorik / Isometrik** | Volume konstan ($V = \\text{konstan}, \\Delta V = 0$) | $W = 0$ (Tidak ada usaha) | $\\Delta U = Q = \\frac{f}{2} n R \\Delta T$<br>$Q = C_v \\Delta T$ |
| **Isotermal / Isotermik** | Suhu konstan ($T = \\text{konstan}, \\Delta T = 0$) | $W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = n R T \\ln\\left(\\frac{P_1}{P_2}\\right)$ | $\\Delta U = 0$<br>$Q = W$ (Seluruh kalor diubah menjadi usaha) |
| **Adiabatik** | Terisolasi termal ($Q = 0$) | $W = \\frac{1}{\\gamma - 1}(P_1 V_1 - P_2 V_2) = -\\Delta U$ | $Q = 0 \\implies \\Delta U = -W$<br>Persamaan Laplace: $P_1 V_1^\\gamma = P_2 V_2^\\gamma$; $T_1 V_1^{\\gamma-1} = T_2 V_2^{\\gamma-1}$ |

*Keterangan Variabel & Satuan SI:*
* $W$: usaha luar yang dilakukan oleh gas ($\\text{Joule}$); bertanda $(+)$ jika gas memuai ekspansi ($V_2 > V_1$), bertanda $(-)$ jika gas ditekan kompresi ($V_2 < V_1$).
* $Q$: kalor yang mengalir pada sistem ($\\text{Joule}$); bertanda $(+)$ jika sistem menyerap kalor dari lingkungan, bertanda $(-)$ jika sistem melepas kalor.
* $\\Delta U$: perubahan energi dalam gas ($\\text{Joule}$); bertanda $(+)$ jika suhu gas naik ($\\Delta T > 0$), bertanda $(-)$ jika suhu gas turun.
* $\\gamma = \\frac{C_p}{C_v} > 1$: konstanta rasio kapasitas kalor Laplace (monoatomik: $\\gamma = \\frac{5}{3} \\approx 1{,}67$; diatomik suhu kamar: $\\gamma = \\frac{7}{5} = 1{,}4$).

---

### C. Siklus Termodinamika, Mesin Kalor Carnot, & Mesin Pendingin (COP)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Usaha Total Siklus Tertutup** | $W_{\\text{siklus}} = Q_{\\text{net}} = Q_H - Q_C$<br>$W_{\\text{siklus}} = \\text{Luas Siklus di Diagram } P-V$ | $W_{\\text{siklus}}$: usaha netto satu siklus tertutup penuh ($\\text{J}$); $Q_H$: kalor yang diserap dari reservoir tandon suhu tinggi ($\\text{J}$); $Q_C$: kalor yang dibuang ke reservoir tandon suhu rendah ($\\text{J}$) | Karena keadaan awal dan akhir siklus identik, maka $\\Delta U_{\\text{siklus}} = 0$. Siklus searah jarum jam menghasilkan usaha positif ($W > 0$, mesin pemanas/kalor) |
| **Efisiensi Mesin Kalor Umum** | $\\eta = \\frac{W}{Q_H} \\times 100\\% = \\left(1 - \\frac{Q_C}{Q_H}\\right) \\times 100\\%$ | $\\eta$: efisiensi termal mesin kalor ($\\&$); $W = Q_H - Q_C$: kerja mekanik berguna keluaran ($\\text{J}$); $Q_H$: energi kalor masukan bahan bakar ($\\text{J}$) | Mengukur persentase kalor masukan yang berhasil dikonversi menjadi energi kerja mekanik |
| **Efisiensi Maksimum Mesin Carnot** | $\\eta_{\\text{Carnot}} = \\left(1 - \\frac{T_C}{T_H}\\right) \\times 100\\% = \\left(\\frac{T_H - T_C}{T_H}\\right) \\times 100\\%$ | $\\eta_{\\text{Carnot}}$: batas efisiensi teoretis tertinggi mesin termal ideal (Carnot); $T_H$: temperatur mutlak tandon suhu tinggi ($\\text{Kelvin}$); $T_C$: temperatur mutlak tandon suhu rendah ($\\text{Kelvin}$) | Mesin Carnot terdiri dari 2 proses isotermal reversibel dan 2 proses adiabatik reversibel. Suhu $T_H$ dan $T_C$ mutlak wajib bersatuan Kelvin |
| **Mesin Pendingin Refrigerator (COP)** | $K_p = \\frac{Q_C}{W} = \\frac{Q_C}{Q_H - Q_C}$<br>Carnot Ideal: $K_p = \\frac{T_C}{T_H - T_C}$ | $K_p$: koefisien performa daya pendinginan (*Coefficient of Performance* / COP); $Q_C$: kalor yang diserap dari dalam ruang pendingin kulkas/AC ($\\text{J}$); $W$: usaha listrik kompresor ($\\text{J}$) | Beroperasi berlawanan arah jarum jam (CCW). Nilai COP kulkas rumah tangga umumnya berkisar antara $3$ hingga $6$ |
| **Pompa Kalor (Heat Pump)** | $K_{hp} = \\frac{Q_H}{W} = K_p + 1 = \\frac{T_H}{T_H - T_C}$ | $K_{hp}$: koefisien performa pompa kalor pemanas ruangan; $Q_H$: kalor yang dialirkan ke dalam ruangan penghangat ($\\text{J}$) | Selalu bernilai satu lebih tinggi dibanding koefisien pendingin ($K_{hp} = K_p + 1$) |
| **Hukum II Termodinamika & Entropi** | $\\Delta S = \\frac{Q}{T}$<br>$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} \\ge 0$ | $\\Delta S$: perubahan entropi derajat ketidakteraturan sistem ($\\text{J/K}$); $Q$: kalor reversibel ($\\text{J}$); $T$: temperatur mutlak proses ($\\text{K}$) | Pada proses reversibel ideal: $\\Delta S_{\\text{semesta}} = 0$; Pada seluruh proses alami nyata ireversibel: $\\Delta S_{\\text{semesta}} > 0$ |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada rumus efisiensi mesin Carnot ($\\eta = 1 - \\frac{T_C}{T_H}$), temperatur $T_H$ dan $T_C$ **MUTLAK WAJIB diubah ke Kelvin**! Kesalahan paling sering di TKA adalah langsung memasukkan suhu derajat Celsius.
>    * Contoh: $T_H = 327^{\\circ}\\text{C} = 600\\text{ K}$ dan $T_C = 27^{\\circ}\\text{C} = 300\\text{ K}$.
>    * Efisiensi benar: $\\eta = 1 - \\frac{300}{600} = 50\\%$.
>    * Jangan menghitung $\\frac{27}{327}$ yang salah fatal!
> 2. Pada proses isokhorik ($V = \\text{konstan}$), usaha gas selalu **nol mutlak** ($W = 0$) karena tidak ada pergeseran volume penampang silinder.

> [!TIP] Super Solusi Cepat:
> Jika mesin Carnot ingin ditingkatkan efisiensinya dari $\\eta_1$ menjadi $\\eta_2$ dengan mempertahankan suhu rendah $T_C$ tetap konstan, suhu tinggi baru $T_H'$ dihitung instan melalui:
> $$T_H' = \\frac{1 - \\eta_1}{1 - \\eta_2} T_H$$`
,
  15: `# Rangkuman Rumus Cepat & Intisari Materi — Listrik Statis (Elektrostatika)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Elektrostatika mempelajari sifat-sifat interaksi muatan listrik stasioner dalam keadaan diam seimbang. Interaksi gaya Coulomb dan kuat medan listrik merupakan besaran vektor (arah garis medan diperhitungkan analitis), sedangkan potensial listrik dan energi potensial listrik merupakan besaran skalar (tanda muatan positif/negatif wajib diikutsertakan langsung dalam aljabar penjumlahan).

| Besaran Elektrostatik | Karakter Vektor/Skalar | Formula Fundamental | Satuan SI | Aturan Tanda Muatan ($+/-$) |
| :--- | :--- | :--- | :--- | :--- |
| **Gaya Coulomb** | **Besaran Vektor** | $F = k \\frac{\\vert q_1 q_2 \\vert}{r^2}$ | Newton ($\\text{N}$) | Tanda $+/-$ hanya menentukan tarik-menarik atau tolak-menolak; jangan masukkan minus ke rumus |
| **Kuat Medan Listrik** | **Besaran Vektor** | $E = k \\frac{\\vert Q \\vert}{r^2}$ | $\\text{N/C}$ atau $\\text{V/m}$ | Menjauhi muatan positif ($+$), mendekati muatan negatif ($-$) |
| **Potensial Listrik** | **Besaran Skalar** | $V = k \\frac{q}{r}$ | $\\text{Volt} = \\text{J/C}$ | Tanda $+/-$ **WAJIB dimasukkan** ke dalam perhitungan penjumlahan aljabar |
| **Energi Potensial Listrik** | **Besaran Skalar** | $EP = k \\frac{q_1 q_2}{r} = q V$ | Joule ($\\text{J}$) | Tanda $+/-$ **WAJIB dimasukkan** ke dalam perhitungan perkalian muatan |

---

### B. Matriks Rumus Utama Interaksi Muatan & Hukum Gauss
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Coulomb (Gaya Elektrostatik)** | $F = k \\frac{\\vert q_1 q_2 \\vert}{r^2}$<br>$k = \\frac{1}{4\\pi \\varepsilon_0} \\approx 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$ | $F$: gaya elektrostatik Coulomb ($\\text{N}$); $q_1, q_2$: besar muatan titik ($\\text{Coulomb}$); $r$: jarak pisah antar pusat muatan ($\\text{m}$); $\\varepsilon_0$: permitivitas listrik vakum ($8{,}85 \\times 10^{-12}\\text{ C}^2/\\text{N}\\cdot\\text{m}^2$) | Tolak-menolak jika muatan sejenis ($+/+$ atau $-/-$); tarik-menarik jika berlawanan jenis ($+/-$) |
| **Gaya dalam Medium Dielektrik** | $F_{\\text{medium}} = \\frac{F_{\\text{vakum}}}{\\varepsilon_r} = \\frac{F_{\\text{vakum}}}{\\kappa}$ | $F_{\\text{medium}}$: gaya Coulomb di dalam medium zat cair/minyak ($\\text{N}$); $\\varepsilon_r = \\kappa$: permitivitas relatif / konstanta dielektrik medium ($\kappa \\ge 1$) | Keberadaan bahan dielektrik selalu memperkecil gaya elektrostatik Coulomb antar muatan |
| **Kuat Medan Listrik Muatan Titik** | $\\vec{E} = \\frac{\\vec{F}}{q} = k \\frac{\\vert Q \\vert}{r^2}$ | $E$: kuat medan listrik ($\\text{N/C}$ atau $\\text{V/m}$); $Q$: muatan sumber pembuat medan ($\\text{C}$); $r$: jarak titik uji terhadap muatan sumber ($\\text{m}$) | Garis gaya listrik keluar radial dari muatan $(+)$ dan masuk radial menuju muatan $(-)$ |
| **Fluks Listrik & Hukum Gauss** | $\\Phi = \\vec{E} \\cdot \\vec{A} = E \\cdot A \\cos\\theta = \\frac{q_{\\text{dalam}}}{\\varepsilon_0}$ | $\\Phi$: fluks garis medan listrik ($\\text{Wb} = \\text{N}\\cdot\\text{m}^2/\\text{C}$); $E$: kuat medan listrik ($\\text{N/C}$); $A$: luas permukaan tertutup Gauss ($\\text{m}^2$); $\\theta$: sudut antara arah garis medan dengan garis normal permukaan ($^{\\circ}$); $q_{\\text{dalam}}$: total muatan bersih di dalam kurungan permukaan Gauss ($\\text{C}$) | Jika garis medan sejajar garis normal tegak lurus bidang permukaan ($\\theta = 0^{\\circ}$), $\\Phi = E \\cdot A$ |
| **Medan Listrik Keping Sejajar** | $E = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{A \\cdot \\varepsilon_0}$ | $\\sigma = \\frac{Q}{A}$: rapat muatan permukaan keping ($\\text{C/m}^2$); $Q$: muatan pada keping ($\\text{C}$); $A$: luas keping logam ($\\text{m}^2$) | Medan listrik di antara kedua keping sejajar bersifat homogen (seragam di setiap titik) |
| **Titik Medan Listrik Nol (Dua Muatan Sejenis)** | $x = \\frac{\\sqrt{q_1}}{\\sqrt{q_1} + \\sqrt{q_2}} d$ | $x$: jarak letak titik bernilai $E_{\\text{total}} = 0$ diukur dari muatan $q_1$ ($\\text{m}$); $d$: jarak pisah kedua muatan ($\\text{m}$) | Untuk muatan sejenis ($+/+$ atau $-/-$), titik medan nol **pasti berada di antara kedua muatan** |
| **Titik Medan Listrik Nol (Dua Muatan Berlawanan)** | $x = \\frac{\\sqrt{\\vert q_1 \\vert}}{\\vert \\sqrt{\\vert q_2 \\vert} - \\sqrt{\\vert q_1 \\vert} \\vert} d$ | $q_1$: muatan yang memiliki nilai mutlak lebih kecil ($\\vert q_1 \\vert < \\vert q_2 \\vert$) | Titik medan nol **pasti berada di luar garis hubung**, terletak di dekat muatan yang nilai mutlaknya lebih kecil |

---

### C. Potensial, Bola Konduktor, & Kapasitor Keping Sejajar
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Potensial Listrik Skalar** | $V = \\Sigma k \\frac{q_i}{r_i} = k \\left(\\frac{q_1}{r_1} + \\frac{q_2}{r_2} + \\dots\\right)$ | $V$: potensial listrik total pada suatu titik ($\\text{Volt}$); $q$: muatan listrik (tanda $+/-$ wajib dihitung langsung); $r$: jarak muatan ke titik ($\\text{m}$) | Potensial listrik bernilai nol ($V = 0$) jika jumlah aljabar suku positif meniadakan suku negatif |
| **Usaha Memindahkan Muatan & Energi** | $W_{A \\to B} = q \\cdot \\Delta V = q (V_B - V_A) = \\Delta EK$ | $W_{A \\to B}$: usaha luar memindahkan muatan uji $q$ dari titik $A$ ke $B$ ($\\text{Joule}$); $\\Delta V$: beda potensial listrik ($\\text{Volt}$); $\\Delta EK$: perubahan energi kinetik partikel ($\\text{J}$) | Hubungan usaha konservatif medan listrik: lintasan pemindahan muatan tidak mempengaruhi nilai usaha |
| **Bola Konduktor Berongga Bermuatan** | Di dalam bola ($r < R$): $E = 0, \\quad V = k \\frac{Q}{R}$<br>Di kulit bola ($r = R$): $E = k \\frac{Q}{R^2}, \\quad V = k \\frac{Q}{R}$<br>Di luar bola ($r > R$): $E = k \\frac{Q}{r^2}, \\quad V = k \\frac{Q}{r}$ | $R$: jari-jari bola konduktor ($\\text{m}$); $r$: jarak titik uji diukur dari pusat inti bola ($\\text{m}$); $Q$: muatan total bola yang tersebar merata di permukaan kulit luar konduktor ($\\text{C}$) | Di dalam rongga bola tidak ada garis medan ($E = 0$), sehingga seluruh rongga memiliki **potensial listrik konstan seragam yang sama persis dengan potensial di permukaan kulitnya** (bidang ekipotensial) |
| **Kapasitansi Kapasitor Keping Sejajar** | $C = \\frac{Q}{V} = \\varepsilon_r \\varepsilon_0 \\frac{A}{d}$ | $C$: kapasitas kapasitor ($\\text{Farad} = \\text{C/V}$); $Q$: muatan keping ($\\text{C}$); $V$: beda potensial kedua keping ($\\text{Volt}$); $A$: luas penampang keping ($\\text{m}^2$); $d$: jarak pisah antarkeping ($\\text{m}$); $\\varepsilon_r$: konstanta dielektrik bahan pengisi | Kapasitas diperbesar dengan: memperluas keping ($A$), mempersempit celah ($d$), dan memasukkan zat dielektrik (mika, keramik) |
| **Energi Tersimpan pada Kapasitor** | $W = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V = \\frac{1}{2} \\frac{Q^2}{C}$ | $W$: energi potensial elektrostatik yang tersimpan di dalam medan dielektrik kapasitor ($\\text{Joule}$) | Diturunkan dari integrasi pengisian muatan: $W = \\int V dQ$ |
| **Susunan Kapasitor Seri** | $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots$<br>$Q_{\\text{total}} = Q_1 = Q_2 = \\dots$<br>$V_{\\text{total}} = V_1 + V_2 + \\dots$ | $C_s$: kapasitas ekuivalen pengganti seri ($\\text{Farad}$); muatan yang tersimpan pada setiap kapasitor seri **pasti sama besar** | Membagi tegangan listrik; kapasitas total seri selalu lebih kecil dibanding kapasitas terkecil komponennya |
| **Susunan Kapasitor Paralel** | $C_p = C_1 + C_2 + \\dots$<br>$V_{\\text{total}} = V_1 = V_2 = \\dots$<br>$Q_{\\text{total}} = Q_1 + Q_2 + \\dots$ | $C_p$: kapasitas pengganti paralel ($\\text{Farad}$); beda potensial tegangan pada setiap cabang paralel **pasti sama besar** | Memperbesar kapasitas muatan total penyimpanan energi |
| **Kapasitor Dilepas Baterai vs Terhubung Baterai** | Baterai Dilepas: Muatan konstan ($Q = \\text{konstan}$)<br>Baterai Terhubung: Tegangan konstan ($V = \\text{konstan}$) | Jika disisipkan dielektrik ($\\varepsilon_r > 1$):<br>1. Dilepas: $C$ naik, $Q$ tetap, $V = \\frac{Q}{C}$ turun, $W$ turun<br>2. Terhubung: $C$ naik, $V$ tetap, $Q = C V$ naik, $W$ naik | Konsep esensial analisis kondisi dielektrik soal HOTS TKA |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Jangan memasukkan tanda negatif muatan ke rumus Gaya Coulomb ($F$) atau Medan Listrik ($E$)! Keduanya adalah **besaran vektor**, sehingga tanda muatan hanya digunakan untuk memetakan arah anak panah gaya/medan. Namun tanda $+/-$ **WAJIB dimasukkan** pada rumus Potensial Listrik ($V$) dan Energi Potensial ($EP$) karena keduanya adalah **besaran skalar**.
> 2. Pada bola konduktor berongga, kuat medan listrik di dalam bola adalah **NOL ($E = 0$)**, tetapi potensial listrik di dalam rongga **TIDAK NOL**, melainkan sama dengan potensial di permukaan kulitnya: $V = k \\frac{Q}{R}$!

> [!TIP] Super Solusi Cepat:
> Untuk dua kapasitor seri $C_1$ dan $C_2$, kapasitas pengganti langsung dihitung:
> $$C_s = \\frac{C_1 \\cdot C_2}{C_1 + C_2}$$
> Dan muatan pada kedua kapasitor pasti identik sama besar!`
,
  16: `# Rangkuman Rumus Cepat & Intisari Materi — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Rangkaian arus searah (*Direct Current* / DC) mengatur transmisi aliran muatan listrik satu arah di bawah pengaruh gaya gerak listrik (GGL) dan beda potensial konstan. Rangkaian diselesaikan secara komprehensif menggunakan Hukum Ohm, formulasi hambatan kawat silinder penghantar, Hukum Konservasi Kirchhoff I (kekekalan muatan) dan Kirchhoff II (kekekalan energi potensial loop tertutup).

| Parameter Sirkuit DC | Simbol & Dimensi | Formulasi Fisis Kunci | Satuan SI |
| :--- | :--- | :--- | :--- |
| **Kuat Arus Listrik** | $I$, $[I]$ | $I = \\frac{Q}{t} = \\frac{dq}{dt} = n e A v_d$ | Ampere ($\\text{A} = \\text{C/s}$) |
| **Resistansi Kawat** | $R$, $[M][L]^2[T]^{-3}[I]^{-2}$ | $R = \\rho \\frac{L}{A}$ | $\\text{Ohm}$ ($\\Omega = \\text{V/A}$) |
| **Gaya Gerak Listrik (GGL)** | $\\mathcal{E}$, $[M][L]^2[T]^{-3}[I]^{-1}$ | Tegangan terminal saat rangkaian terbuka tanpa arus ($I = 0$) | Volt ($\\text{V}$) |
| **Daya Disipasi Listrik** | $P$, $[M][L]^2[T]^{-3}$ | $P = V \\cdot I = I^2 R = \\frac{V^2}{R}$ | Watt ($\\text{W} = \\text{J/s}$) |

---

### B. Matriks Rumus Hukum Ohm, Resistansi Kawat, & Susunan Resistor
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Ohm Dasar** | $V = I \\cdot R \\implies I = \\frac{V}{R}$ | $V$: beda potensial tegangan listrik ujung-ujung resistor ($\\text{Volt}$); $I$: kuat arus listrik yang mengalir ($\\text{Ampere}$); $R$: hambatan listrik konduktor ohmik ($\\Omega$) | Grafik $V-I$ konduktor ohmik berupa garis lurus linier dengan gradien kemiringan $= R$ |
| **Kuat Arus & Kecepatan Geser Elektron** | $I = n \\cdot e \\cdot A \\cdot v_d$<br>$J = \\frac{I}{A} = \\sigma E = n e v_d$ | $n$: kerapatan elektron bebas per satuan volume ($\\text{m}^{-3}$); $e$: muatan elementer elektron ($1{,}6 \\times 10^{-19}\\text{ C}$); $A$: luas penampang kawat ($\\text{m}^2$); $v_d$: kecepatan geser elektron (*drift velocity*, $\\text{m/s}$); $J$: rapat arus listrik ($\\text{A/m}^2$); $\\sigma$: konduktivitas bahan | Meskipun elektron bergeser lambat ($v_d \\approx 10^{-4}\\text{ m/s}$), medan listrik merambat mendekati kecepatan cahaya |
| **Resistansi Kawat Silinder** | $R = \\rho \\frac{L}{A} = \\rho \\frac{L}{\\frac{1}{4}\\pi D^2}$ | $R$: hambatan kawat penghantar ($\\Omega$); $\\rho$: resistivitas jenis bahan kawat ($\\Omega\\cdot\\text{m}$); $L$: panjang kawat ($\\text{m}$); $A$: luas penampang lingkaran kawat ($\\text{m}^2$); $D$: diameter penampang kawat ($\\text{m}$) | Hambatan berbanding lurus dengan panjang kawat ($L$) dan berbanding terbalik dengan kuadrat diameternya ($R \\propto \\frac{1}{D^2}$) |
| **Pengaruh Suhu terhadap Hambatan** | $R_t = R_0 (1 + \\alpha \\Delta T)$<br>$\\rho_t = \\rho_0 (1 + \\alpha \\Delta T)$ | $R_0, \\rho_0$: hambatan dan resistivitas kawat pada suhu acuan $0^{\\circ}\\text{C}$ atau $20^{\\circ}\\text{C}$ ($\\Omega$); $R_t$: hambatan pada suhu $t$ ($\\Omega$); $\\alpha$: koefisien suhu resistansi ($^{\\circ}\\text{C}^{-1}$); $\\Delta T$: kenaikan suhu ($^{\\circ}\\text{C}$) | Logam konduktor memiliki $\\alpha > 0$ (hambatan naik saat dipanaskan); semikonduktor dan karbon memiliki $\\alpha < 0$ |
| **Kawat Diregangkan Tanpa Perubahan Volume** | $R' = n^2 \\cdot R$ | $n = \\frac{L'}{L}$: kelipatan pertambahan panjang kawat baru; $R$: hambatan kawat mula-mula ($\\Omega$); $R'$: hambatan kawat setelah ditarik diregangkan ($\\Omega$) | Karena volume kawat konstan ($V = A \\cdot L = \\text{konstan}$), jika panjang ditarik menjadi $n$ kali semula ($L' = nL$), luas mengecil menjadi $A' = \\frac{A}{n}$, sehingga hambatan melonjak $n^2$ kali lipat! |
| **Resistor Rangkaian Seri** | $R_s = R_1 + R_2 + \\dots$<br>$I_{\\text{total}} = I_1 = I_2 = \\dots$<br>$\\frac{V_1}{V_2} = \\frac{R_1}{R_2}$ | $R_s$: hambatan pengganti seri ($\\Omega$); arus listrik sama besar di seluruh resistor seri; tegangan terbagi proporsional | Bertindak sebagai pembagi tegangan (*voltage divider*): $V_1 = \\frac{R_1}{R_s} V_{\\text{total}}$ |
| **Resistor Rangkaian Paralel** | $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$<br>$V_{\\text{total}} = V_1 = V_2 = \\dots$<br>$\\frac{I_1}{I_2} = \\frac{R_2}{R_1}$ | $R_p$: hambatan pengganti paralel ($\\Omega$); beda potensial tegangan sama di setiap cabang; arus listrik terbagi terbalik dengan nilai hambatan | Bertindak sebagai pembagi arus: untuk 2 resistor paralel berlaku $I_1 = \\frac{R_2}{R_1 + R_2} I_{\\text{total}}$ |
| **Jembatan Wheatstone Seimbang** | $R_1 \\cdot R_4 = R_2 \\cdot R_3 \\implies I_G = 0$ | $R_1, R_2, R_3, R_4$: hambatan pada keempat lengan jembatan ($\\Omega$); $I_G$: arus yang mengalir pada galvanometer tengah | Jika hasil kali silang hambatan berseberangan sama besar, beda potensial cabang tengah nol ($V_{CD} = 0$), galvanometer tidak dialiri arus dan resistor tengah dapat dihilangkan |

---

### C. Hukum Kirchhoff, Rangkaian Baterai, & Daya Listrik
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum I Kirchhoff (Titik Simpul)** | $\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$ | $I_{\\text{masuk}}$: jumlah arus menuju percabangan ($\\text{A}$); $I_{\\text{keluar}}$: jumlah arus meninggalkan percabangan ($\\text{A}$) | Konservasi muatan listrik: muatan tidak dapat menumpuk atau hilang di percabangan |
| **Hukum II Kirchhoff (Loop Tertutup)** | $\\Sigma \\mathcal{E} + \\Sigma (I \\cdot R) = 0$ | $\\mathcal{E}$: gaya gerak listrik sumber tegangan baterai ($\\text{Volt}$); $I$: arus cabang loop ($\\text{A}$); $R$: hambatan total resistor luar dan dalam baterai ($\\Omega$) | **Aturan Tanda Loop:**<br>1. Menjumpai kutub positif baterai lebih dulu: $+\\mathcal{E}$<br>2. Menjumpai kutub negatif baterai lebih dulu: $-\\mathcal{E}$<br>3. Arah penelusuran loop searah arus: $+I R$<br>4. Arah penelusuran loop berlawanan arus: $-I R$ |
| **Tegangan Jepit Baterai ($V_{\\text{jepit}}$)** | Melepas Arus: $V_{\\text{jepit}} = \\mathcal{E} - I \\cdot r$<br>Pengisian Aki: $V_{\\text{jepit}} = \\mathcal{E} + I \\cdot r$ | $V_{\\text{jepit}}$: beda potensial terukur antara kutub-kutub baterai saat mengalirkan arus beban ($\\text{Volt}$); $\\mathcal{E}$: GGL baterai ($\\text{Volt}$); $r$: hambatan dalam baterai ($\\Omega$); $I$: kuat arus ($\\text{A}$) | Adanya hambatan dalam baterai ($r$) menyebabkan tegangan jepit lebih rendah dari GGL saat baterai menyuplai arus ($V_{\\text{jepit}} < \\mathcal{E}$) |
| **Rangkaian Satu Loop Tertutup** | $I = \\frac{\\Sigma \\mathcal{E}}{\\Sigma R + \\Sigma r}$ | $\\Sigma \\mathcal{E}$: jumlah aljabar GGL baterai dalam loop ($\\text{Volt}$); $\\Sigma R$: total resistor luar ($\\Omega$); $\\Sigma r$: total hambatan dalam baterai ($\\Omega$) | Arus bernilai positif jika asumsi arah putaran loop benar searah arus riil |
| **Teorema Millman (Tegangan Cabang 2 Loop)** | $V_{AB} = \\frac{\\sum_{i} \\frac{\\mathcal{E}_i}{R_i + r_i}}{\\sum_{i} \\frac{1}{R_i + r_i}}$ | $V_{AB}$: beda potensial simpul bersama antara titik $A$ dan $B$ pada rangkaian 2 atau 3 loop paralel ($\\text{Volt}$); $\\mathcal{E}_i$: GGL pada cabang ke-$i$; $R_i + r_i$: total hambatan pada cabang ke-$i$ | Menghitung kuat arus seluruh cabang rangkaian 2 loop secara instan tanpa perlu substitusi eliminasi SPLDV |
| **Energi & Daya Disipasi Listrik** | $W = V \\cdot I \\cdot t = I^2 \\cdot R \\cdot t = \\frac{V^2}{R} \\cdot t$<br>$P = \\frac{W}{t} = V \\cdot I = I^2 \\cdot R = \\frac{V^2}{R}$ | $W$: energi listrik ($\\text{Joule}$); $P$: daya listrik disipasi panas/cahaya ($\\text{Watt}$); $t$: waktu pemakaian ($\\text{s}$); $V$: tegangan ($\\text{V}$); $I$: arus ($\\text{A}$); $R$: hambatan ($\\Omega$) | Satuan rekening PLN: $1\\text{ kWh} = 1\\text{ kiloWatt}\\cdot\\text{jam} = 1000\\text{ W} \\times 3600\\text{ s} = 3{,}6 \\times 10^6\\text{ Joule}$ |
| **Perubahan Daya Lampu Tegangan Berbeda** | $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2$ | $P_1$: daya nominal lampu pada tegangan pabrik $V_1$ ($\\text{Watt}$); $P_2$: daya nyata yang diserap lampu saat dipasang pada tegangan nyata $V_2$ ($\\text{Watt}$) | Karena filamen lampu memiliki hambatan konstan ($R = \\text{konstan}$), daya berbanding lurus dengan **kuadrat tegangan** ($P \\propto V^2$) |
| **Teorema Transfer Daya Maksimum** | $R_L = r_{\\text{dalam}} \\implies P_{\\max} = \\frac{\\mathcal{E}^2}{4 r_{\\text{dalam}}}$ | $R_L$: resistansi beban luar rangkaian ($\\Omega$); $r_{\\text{dalam}}$: hambatan dalam sumber tegangan ($\\Omega$); $P_{\\max}$: daya disipasi maksimum yang dapat diserap beban luar ($\\text{Watt}$) | Daya yang diserap beban luar bernilai maksimum jika nilai resistansi beban tepat sama dengan resistansi dalam sumber tegangan |
| **Perluasan Batas Ukur Amperemeter (Shunt)** | $R_{\\text{sh}} = \\frac{R_A}{n - 1}, \\quad n = \\frac{I}{I_A}$ | $R_{\\text{sh}}$: hambatan shunt yang dipasang **paralel** dengan amperemeter ($\\Omega$); $R_A$: hambatan dalam galvanometer amperemeter ($\\Omega$); $n$: faktor kelipatan kenaikan batas ukur arus; $I$: batas ukur baru; $I_A$: batas ukur lama | Sebagian besar arus dialihkan melintasi resistor shunt paralel |
| **Perluasan Batas Ukur Voltmeter (Multiplier)** | $R_m = (n - 1) \\cdot R_V, \\quad n = \\frac{V}{V_V}$ | $R_m$: hambatan multiplier depan yang dipasang **seri** dengan voltmeter ($\\Omega$); $R_V$: hambatan dalam voltmeter ($\\Omega$); $n$: faktor kelipatan batas ukur tegangan; $V$: batas tegangan baru; $V_V$: batas tegangan lama | Membagi tegangan sehingga kelebihan tegangan diserap oleh resistor multiplier seri |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Jangan lupa bahwa daya lampu berbanding lurus dengan **kuadrat tegangan ($V^2$)**, BUKAN berbanding lurus linier dengan $V$! Jika sebuah lampu $100\\text{ W} / 220\\text{ V}$ dipasang pada tegangan jala-jala yang drop separuh menjadi $110\\text{ V}$, daya lampu BUKAN turun menjadi $50\\text{ W}$, melainkan anjlok drastis menjadi:
>    $$P_2 = 100 \\times \\left(\\frac{110}{220}\\right)^2 = 100 \\times \\frac{1}{4} = 25\\text{ Watt}$$
> 2. Kawat yang ditarik meregang hingga panjangnya menjadi 2 kali lipat ($L' = 2L$) hambatannya BUKAN menjadi 2 kali lipat, melainkan melonjak menjadi **$2^2 = 4\\text{ kali lipat}$** karena luas penampangnya otomatis menyusut separuh ($A' = \\frac{1}{2}A$)!

> [!TIP] Super Solusi Cepat:
> Untuk mencari kuat arus pada dua resistor paralel $R_1$ dan $R_2$, langsung gunakan formula pembagi arus:
> $$I_1 = \\frac{R_2}{R_1 + R_2} I_{\\text{total}} \\quad \\text{dan} \\quad I_2 = \\frac{R_1}{R_1 + R_2} I_{\\text{total}}$$
> Resistor yang lebih kecil dialiri arus yang lebih besar secara terbalik!`
};

module.exports = rangkumanPart2;
