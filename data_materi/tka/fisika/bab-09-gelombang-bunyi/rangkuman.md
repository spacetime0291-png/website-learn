# Rangkuman Rumus Cepat & Intisari Materi — Gelombang Bunyi
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Gelombang bunyi merupakan gelombang mekanik longitudinal yang merambat melalui rapatan dan renggangan medium elastis. Bunyi tidak dapat merambat dalam ruang hampa udara (*vakum*). Resonansi akustik terjadi saat frekuensi sumber bunyi tepat sama dengan frekuensi alami medium bergetar, menghasilkan amplifikasi amplitudo suara maksimum.

| Karakteristik Bunyi | Rentang Frekuensi | Kemampuan Deteksi Fisis | Aplikasi Medis & Teknologi |
| :--- | :--- | :--- | :--- |
| **Infrasonik** | $f < 20\text{ Hz}$ | Gajah, jangkrik, paus, getaran seismik gempa bumi | Deteksi dini aktivitas vulkanik & tsunami |
| **Audiosonik** | $20\text{ Hz} \le f \le 20.000\text{ Hz}$ | Telinga manusia sehat normal | Percakapan, musik, akustik gedung auditorium |
| **Ultrasonik** | $f > 20.000\text{ Hz}$ | Kelelawar, lumba-lumba, anjing | Ultrasonografi medis (USG), SONAR kapal selam, pembersih kacamata ultrasonik |

---

### B. Matriks Cepat Rambat Bunyi & Pola Frekuensi Harmonik
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Melde (Cepat Rambat Dawai)** | $v = \sqrt{\frac{F}{\mu}} = \sqrt{\frac{F \cdot L}{m}} = \sqrt{\frac{F}{\rho \cdot A}}$ | $v$: cepat rambat gelombang transversal pada dawai/kawat ($\text{m/s}$); $F$: gaya tegangan kawat/senar ($\text{N}$); $\mu = \frac{m}{L}$: massa per satuan panjang kawat ($\text{kg/m}$); $m$: massa kawat ($\text{kg}$); $L$: panjang kawat ($\text{m}$); $\rho$: massa jenis kawat ($\text{kg/m}^3$); $A$: luas penampang kawat ($\text{m}^2$) | Kelajuan berbanding lurus dengan akar tegangan kawat ($v \propto \sqrt{F}$) dan berbanding terbalik dengan akar tebal/massa kawat |
| **Cepat Rambat Zat Padat Batang** | $v = \sqrt{\frac{Y}{\rho}}$ | $v$: kelajuan bunyi dalam batang logam padat ($\text{m/s}$); $Y$: modulus elastisitas Young bahan batang ($\text{Pa} = \text{N/m}^2$); $\rho$: massa jenis zat padat ($\text{kg/m}^3$) | Cepat rambat bunyi pada zat padat paling tinggi dibanding zat cair dan gas ($v_{\text{padat}} > v_{\text{cair}} > v_{\text{gas}}$) |
| **Cepat Rambat Zat Cair** | $v = \sqrt{\frac{B}{\rho}}$ | $v$: kelajuan bunyi dalam cairan ($\text{m/s}$); $B$: modulus elastisitas Bulk zat cair ($\text{Pa}$); $\rho$: massa jenis cairan ($\text{kg/m}^3$) | Menjelaskan perambatan bunyi dalam air laut untuk navigasi SONAR |
| **Cepat Rambat Gas Ideal Laplace** | $v = \sqrt{\frac{\gamma R T}{M}} = \sqrt{\frac{\gamma P}{\rho}}$ | $v$: cepat rambat bunyi di udara/gas ($\text{m/s}$); $\gamma$: konstanta Laplace gas ($\gamma > 1$); $R$: tetapan gas ideal ($8{,}314\text{ J/mol}\cdot\text{K}$); $T$: suhu mutlak gas ($\text{Kelvin}$); $M$: massa molar gas ($\text{kg/mol}$); $P$: tekanan gas ($\text{Pa}$); $\rho$: massa jenis gas ($\text{kg/m}^3$) | Kelajuan bunyi di udara berbanding lurus dengan akar suhu mutlak ($v \propto \sqrt{T}$). Di udara normal $20^{\circ}\text{C}$, $v \approx 340\text{ m/s}$ |
| **Dawai / Senar Terikat (Harmonik)** | $f_n = (n + 1) \frac{v}{2 L}$<br>$f_0 : f_1 : f_2 = 1 : 2 : 3 : \dots$ | $f_n$: frekuensi nada atas ke-$n$ ($n = 0$: nada dasar; $n = 1$: nada atas ke-1; $n = 2$: nada atas ke-2) ($\text{Hz}$); $v$: cepat rambat dawai ($\text{m/s}$); $L$: panjang senar ($\text{m}$) | Ujung dawai selalu simpul. Jumlah perut $= n + 1$; jumlah simpul $= n + 2$. Panjang gelombang nada dasar $\lambda_0 = 2L$ |
| **Pipa Organa Terbuka (POB)** | $f_n = (n + 1) \frac{v}{2 L}$<br>$f_0 : f_1 : f_2 = 1 : 2 : 3 : \dots$ | $f_n$: frekuensi nada POB ke-$n$ ($\text{Hz}$); $v$: cepat rambat bunyi di udara ($\text{m/s}$); $L$: panjang pipa organa terbuka ($\text{m}$) | Kedua ujung pipa selalu merupakan perut gelombang terbuka. Perbandingan harmonik utuh kelipatan bulat: $1 : 2 : 3 : 4 : \dots$ |
| **Pipa Organa Tertutup (POT)** | $f_n = (2 n + 1) \frac{v}{4 L}$<br>$f_0 : f_1 : f_2 = 1 : 3 : 5 : \dots$ | $f_n$: frekuensi nada POT ke-$n$ ($\text{Hz}$); $v$: cepat rambat bunyi ($\text{m/s}$); $L$: panjang pipa organa tertutup ($\text{m}$) | Ujung tertutup adalah simpul, ujung terbuka adalah perut. Perbandingan harmonik hanya menghasilkan **kelipatan bilangan ganjil**! |
| **Resonansi Tabung Kolom Udara Air** | $L_n = (2 n - 1) \frac{\lambda}{4}$<br>$\Delta L = L_{n+1} - L_n = \frac{\lambda}{2}$ | $L_n$: panjang kolom udara tabung air saat terjadi dengung resonansi ke-$n$ ($\text{m}$); $\lambda$: panjang gelombang bunyi garpu tala ($\text{m}$) | Beda panjang kolom udara antar dua resonansi yang berurutan selalu tepat sama dengan setengah panjang gelombang ($\frac{\lambda}{2}$) |

---

### C. Efek Doppler, Pelayangan, Intensitas & Taraf Intensitas ($TI$)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Efek Doppler Konvensional** | $f_p = \left(\frac{v \pm v_p}{v \mp v_s}\right) f_s$ | $f_p$: frekuensi bunyi yang didengar oleh pendengar ($\text{Hz}$); $f_s$: frekuensi sumber bunyi asli ($\text{Hz}$); $v$: kelajuan bunyi di udara ($\text{m/s}$); $v_p$: kelajuan gerak pendengar ($\text{m/s}$); $v_s$: kelajuan gerak sumber bunyi ($\text{m/s}$) | **Aturan Tanda Doppler:**<br>1. Pendengar mendekati sumber: $+v_p$<br>2. Pendengar menjauhi sumber: $-v_p$<br>3. Sumber mendekati pendengar: $-v_s$<br>4. Sumber menjauhi pendengar: $+v_s$<br>5. Diam di tempat: $v = 0$ |
| **Efek Doppler Pengaruh Angin** | $f_p = \left[\frac{(v \pm v_a) \pm v_p}{(v \pm v_a) \mp v_s}\right] f_s$ | $v_a$: kelajuan hembusan angin ($\text{m/s}$) | Angin bertanda $(+v_a)$ jika berhembus dari sumber menuju pendengar; bertanda $(-v_a)$ jika melawan |
| **Frekuensi Pelayangan Bunyi** | $f_{\text{layang}} = \vert f_1 - f_2 \vert$ | $f_{\text{layang}}$: frekuensi denyut pelayangan kuat-lemah bunyi ($\text{Hz}$); $f_1, f_2$: frekuensi dua sumber bunyi yang berinterferensi dengan selisih sangat kecil ($\text{Hz}$) | Fenomena interferensi waktu yang dimanfaatkan untuk menyetem senar gitar/piano |
| **Intensitas Bunyi Titik Sumber** | $I = \frac{P}{A} = \frac{P}{4 \pi r^2}$<br>$\frac{I_1}{I_2} = \left(\frac{r_2}{r_1}\right)^2$ | $I$: intensitas bunyi ($\text{W/m}^2$); $P$: daya akustik sumber bunyi ($\text{Watt}$); $A = 4\pi r^2$: luas bola muka gelombang ($\text{m}^2$); $r$: jarak pengamat dari titik sumber bunyi ($\text{m}$) | Hukum kuadrat terbalik jarak: menjauh 2 kali lipat membuat intensitas bunyi turun menjadi $\frac{1}{4}$ kali |
| **Taraf Intensitas Bunyi (TI)** | $TI = 10 \log\left(\frac{I}{I_0}\right)$ | $TI$: taraf intensitas bunyi ($\text{dB}$ / desibel); $I$: intensitas bunyi terukur ($\text{W/m}^2$); $I_0 = 10^{-12}\text{ W/m}^2$: intensitas ambang pendengaran minimum telinga manusia | Skala logaritmik akustik. Ambang pendengaran $I = I_0 \implies TI = 0\text{ dB}$; Ambang rasa sakit $I = 1\text{ W/m}^2 \implies TI = 120\text{ dB}$ |
| **TI Kelipatan $n$ Sumber Identik** | $TI_n = TI_1 + 10 \log n$ | $TI_n$: taraf intensitas total dari $n$ buah sumber bunyi identik yang berbunyi serempak ($\text{dB}$); $TI_1$: taraf intensitas satu sumber bunyi tunggal ($\text{dB}$); $n$: jumlah mesin/sumber | Jika ada 10 mesin sejenis: $+10\text{ dB}$; jika ada 100 mesin sejenis: $+20\text{ dB}$; jika ada 1000 mesin sejenis: $+30\text{ dB}$ |
| **TI Perubahan Jarak Pengamat** | $TI_2 = TI_1 - 20 \log\left(\frac{r_2}{r_1}\right)$ | $TI_1$: taraf intensitas pada jarak $r_1$ ($\text{dB}$); $TI_2$: taraf intensitas pada jarak $r_2$ ($r_2 > r_1$, $\text{dB}$); $r_1, r_2$: jarak pengamat awal dan akhir dari sumber bunyi ($\text{m}$) | Jika jarak menjauh 10 kali lipat ($r_2 = 10 r_1$): $TI$ berkurang tepat $20\text{ dB}$. Jika menjauh 100 kali: $TI$ berkurang $40\text{ dB}$ |
| **Prinsip Gema Pantul SONAR** | $s = \frac{v \cdot t}{2}$ | $s$: kedalaman laut atau jarak dinding tebing pemantul ($\text{m}$); $v$: cepat rambat gelombang ultrasonik di medium ($\text{m/s}$); $t$: waktu bolak-balik pulsa bunyi dipancarkan hingga diterima kembali ($\text{s}$) | Faktor pembagi 2 mencerminkan lintasan bolak-balik bunyi (pergi dan pulang) |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Nada atas pertama pipa organa terbuka (POB) adalah harmonik kedua ($n = 1 \implies f_1 = 2 f_0$). Namun pada pipa organa tertutup (POT), nada atas pertama adalah harmonik ketiga ($n = 1 \implies f_1 = 3 f_0$)! Jangan menyamakan nomor nada atas dengan nomor kelipatan harmonik.
> 2. Pada rumus taraf intensitas multi-sumber, pengalinya adalah **$10 \log n$**, sedangkan pada perubahan jarak pengamat pengalinya adalah **$20 \log(\frac{r_2}{r_1})$** karena intensitas berbanding terbalik kuadrat dengan jarak ($r^2$).

> [!TIP] Super Solusi Cepat:
> Jika soal menyebutkan taraf intensitas satu sepeda motor adalah $70\text{ dB}$, maka jika ada 100 sepeda motor identik dinyalakan bersamaan, taraf intensitasnya langsung dihitung cepat:
> $$TI_{100} = 70 + 10 \log(100) = 70 + 20 = 90\text{ dB}$$
> Tanpa perlu mengubah ke bentuk intensitas watt!