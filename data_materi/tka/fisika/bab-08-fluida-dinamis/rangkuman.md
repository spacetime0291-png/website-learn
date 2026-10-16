# Rangkuman Rumus Cepat & Intisari Materi — Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Fluida dinamis mengkaji karakteristik aliran zat cair dan gas yang bergerak melintasi penampang pipa atau permukaan objek aerodinamis. Analisis disederhanakan melalui model Fluida Ideal yang memenuhi empat postulat pokok: inkompresibel (massa jenis konstan), non-viskos (tanpa gesekan internal), aliran tunak/*steady* (kecepatan di tiap titik konstan terhadap waktu), dan laminer (garis arus tidak saling bersilangan).

| Prinsip Pokok Dinamis | Landasan Konservasi Fisis | Formula Matematis Kunci | Makna & Karakteristik Fisis |
| :--- | :--- | :--- | :--- |
| **Persamaan Kontinuitas** | Hukum Kekekalan Massa Fluida | $Q_1 = Q_2 \implies A_1 v_1 = A_2 v_2$ | Debit volume fluida selalu konstan di setiap penampang pipa |
| **Asas Bernoulli** | Hukum Kekekalan Energi Mekanik Fluida | $P + \frac{1}{2}\rho v^2 + \rho g h = \text{konstan}$ | Daerah dengan kelajuan aliran tinggi memiliki tekanan fluida yang lebih rendah |
| **Teorema Torricelli** | Konversi energi potensial tangki menjadi energi kinetik semprotan | $v = \sqrt{2 g h}, \quad X = 2 \sqrt{h H}$ | Kelajuan semburan lubang bocor sama dengan kelajuan jatuh bebas dari permukaan atas |
| **Gaya Angkat Aerodinamis** | Beda tekanan sayap atas dan bawah pesawat terbang | $F_{\text{angkat}} = \frac{1}{2} \rho A (v_2^2 - v_1^2)$ | Kelajuan udara di atas sayap dirancang lebih tinggi sehingga tekanan di bawah sayap lebih besar |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Debit Aliran Volume ($Q$)** | $Q = \frac{V}{t} = A \cdot v$ | $Q$: debit aliran fluida ($\text{m}^3/\text{s}$); $V$: volume total fluida yang melintas ($\text{m}^3$); $t$: waktu pengaliran ($\text{s}$); $A$: luas penampang pipa ($\text{m}^2$); $v$: kelajuan rata-rata aliran fluida ($\text{m/s}$) | Konversi debit: $1\text{ liter/s} = 10^{-3}\text{ m}^3/\text{s}$; pipa berpenampang lingkaran memiliki luas $A = \frac{1}{4}\pi D^2$ |
| **Persamaan Kontinuitas** | $A_1 v_1 = A_2 v_2$<br>$\frac{v_2}{v_1} = \frac{A_1}{A_2} = \left(\frac{D_1}{D_2}\right)^2$ | $A_1, A_2$: luas penampang pipa masuk dan keluar ($\text{m}^2$); $v_1, v_2$: kelajuan aliran fluida di penampang 1 dan 2 ($\text{m/s}$); $D_1, D_2$: diameter pipa ($\text{m}$) | Kelajuan aliran fluida berbanding terbalik dengan kuadrat diameternya ($v \propto \frac{1}{D^2}$). Pipa menyempit mengalirkan fluida lebih cepat |
| **Hukum Bernoulli Lengkap** | $P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$ | $P_1, P_2$: tekanan statis fluida ($\text{Pa}$); $\rho$: massa jenis fluida ($\text{kg/m}^3$); $v_1, v_2$: kelajuan aliran ($\text{m/s}$); $h_1, h_2$: ketinggian posisi pipa dari bidang acuan ($\text{m}$); $g$: percepatan gravitasi bumi ($\text{m/s}^2$) | Suku $\frac{1}{2}\rho v^2$ disebut tekanan dinamis; suku $\rho gh$ disebut tekanan hidrostatis posisi |
| **Hukum Bernoulli Pipa Horizontal** | $P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2)$ | $h_1 = h_2$ (pipa mendatar); $P_1 - P_2$: beda tekanan statis antar penampang ($\text{Pa}$) | Titik yang memiliki kelajuan lebih besar ($v_2 > v_1$) pasti memiliki tekanan lebih rendah ($P_2 < P_1$) |

---

### C. Aplikasi Bernouli Kunci: Torricelli, Venturimeter, & Tabung Pitot
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Teorema Torricelli (Tangki Bocor)** | $v = \sqrt{2 g h}$<br>$t = \sqrt{\frac{2 H}{g}}$<br>$X = 2 \sqrt{h \cdot H}$ | $v$: kelajuan semburan air keluar dari lubang bocor ($\text{m/s}$); $h$: kedalaman lubang diukur dari permukaan atas air ($\text{m}$); $H$: ketinggian lubang bocor diukur dari lantai dasar ($\text{m}$); $t$: waktu pancaran air tiba di lantai ($\text{s}$); $X$: jarak mendatar pancaran air maksimum di lantai ($\text{m}$) | Jarak jangkauan terjauh $X_{\max}$ bernilai maksimum jika lubang kebocoran berada tepat di tengah-tengah tinggi air ($h = H$) |
| **Debit Pancaran Lubang Bocor** | $Q = A_0 \cdot v = A_0 \sqrt{2 g h}$ | $Q$: debit semprotan air keluar ($\text{m}^3/\text{s}$); $A_0$: luas lubang kebocoran ($\text{m}^2$) | Luas lubang bocor jauh lebih kecil dibandingkan luas permukaan atas tangki ($A_0 \ll A_{\text{permukaan}}$) |
| **Venturimeter Tanpa Manometer** | $v_1 = \sqrt{\frac{2 g h}{\left(\frac{A_1}{A_2}\right)^2 - 1}}$ | $v_1$: kelajuan fluida pada penampang pipa besar ($\text{m/s}$); $h$: selisih beda tinggi cairan pada kedua pipa vertikal ($\text{m}$); $A_1, A_2$: luas penampang pipa besar dan leher pipa kecil ($\text{m}^2$); $g$: gravitasi ($\text{m/s}^2$) | Mengukur kelajuan aliran cairan pipa berbasis beda tinggi permukaan cairan vertikal |
| **Venturimeter dengan Manometer** | $v_1 = \sqrt{\frac{2 (\rho' - \rho) g h}{\rho \left[\left(\frac{A_1}{A_2}\right)^2 - 1\right]}}$ | $\rho$: massa jenis cairan yang mengalir di pipa ($\text{kg/m}^3$); $\rho'$: massa jenis cairan manometer (raksa, $\rho' > \rho$, $\text{kg/m}^3$); $h$: selisih tinggi cairan manometer ($\text{m}$) | Digunakan untuk mengukur aliran cairan bertekanan tinggi dengan manometer cairan berat |
| **Tabung Pitot (Kelajuan Aliran Gas)** | $v = \sqrt{\frac{2 \rho' g h}{\rho_{\text{gas}}}}$ | $v$: kelajuan aliran gas / pesawat terbang terhadap udara ($\text{m/s}$); $\rho'$: massa jenis cairan indikator manometer ($\text{kg/m}^3$); $\rho_{\text{gas}}$: massa jenis gas udara luar yang diukur ($\text{kg/m}^3$); $h$: selisih tinggi cairan manometer ($\text{m}$) | Instrumen speedometer pitot statik pada hidung badan pesawat terbang |
| **Gaya Angkat Sayap Pesawat Terbang** | $F_{\text{angkat}} = (P_1 - P_2) A = \frac{1}{2} \rho_{\text{udara}} A (v_2^2 - v_1^2)$ | $F_{\text{angkat}}$: total gaya angkat aerodinamis ($\text{N}$); $A$: total luas penampang sayap pesawat ($\text{m}^2$); $\rho_{\text{udara}}$: massa jenis udara atmosfer ($\approx 1{,}2\text{ kg/m}^3$); $v_2$: kelajuan aliran udara di atas sayap ($\text{m/s}$); $v_1$: kelajuan udara di bawah sayap ($v_2 > v_1$, $\text{m/s}$) | Profil *airfoil* melengkung di atas membuat udara mengalir lebih cepat di atas sayap ($v_2 > v_1$), menimbulkan penurunan tekanan statis ($P_2 < P_1$) |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada Teorema Torricelli (tangki bocor), jangan tertukar antara $h$ dan $H$!
>    * $h$ = jarak vertikal dari **permukaan cairan ke lubang bocor** (penentu kelajuan semburan $v = \sqrt{2gh}$).
>    * $H$ = jarak vertikal dari **lubang bocor ke lantai dasar** (penentu durasi waktu jatuh $t = \sqrt{\frac{2H}{g}}$).
> 2. Pesawat dapat terangkat naik hanya jika gaya angkat aerodinamis lebih besar daripada berat total pesawat ($F_{\text{angkat}} > W_{\text{pesawat}}$).

> [!TIP] Super Solusi Cepat:
> Pada tabung venturimeter tanpa manometer, kelajuan di leher sempit ($v_2$) langsung dapat dihitung via rasio kontinuitas:
> $$v_2 = \frac{A_1}{A_2} v_1$$
> Tanpa perlu menghitung rumus akar yang panjang dua kali!