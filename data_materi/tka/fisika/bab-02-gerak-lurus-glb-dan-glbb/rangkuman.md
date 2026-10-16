# Rangkuman Rumus Cepat & Intisari Materi — Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Kinematika gerak lurus mempelajari perpindahan partikel pada lintasan satu dimensi tanpa meninjau gaya penyebabnya. Gerak terbagi atas Gerak Lurus Beraturan (kecepatan konstan, $a = 0$) dan Gerak Lurus Berubah Beraturan (percepatan konstan, $a = \text{konstan} \neq 0$).

| Klasifikasi Gerak | Parameter Percepatan ($a$) | Sifat Kecepatan ($v$) | Pola Lintasan & Karakteristik Grafik |
| :--- | :--- | :--- | :--- |
| **GLB** | $a = 0$ | $v = \text{konstan}$ | Grafik $s-t$ berupa garis lurus miring (gradien $= v$); Grafik $v-t$ mendatar horizontal |
| **GLBB Dipercepat** | $a > 0$ (konstan) | Kelajuan bertambah linier tiap sekon | Grafik $v-t$ naik miring ke kanan (gradien $= a$); Grafik $s-t$ parabola cekung ke atas |
| **GLBB Diperlambat** | $a < 0$ (konstan) | Kelajuan berkurang linier tiap sekon | Grafik $v-t$ turun miring ke kanan; Grafik $s-t$ parabola cekung ke bawah |
| **Gerak Jatuh Bebas** | $a = +g$ (konstan) | $v_0 = 0$, kelajuan bertambah | Dipercepat gravitasi bumi; bebas dari massa partikel ($m$) |
| **Gerak Vertikal ke Atas** | $a = -g$ (konstan) | $v_0 > 0$, berhenti sesaat di puncak | Diperlambat gravitasi bumi hingga $v_t = 0$ di puncak $h_{\max}$ |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Jarak vs Perpindahan & Kelajuan** | $v_{\text{kelajuan}} = \frac{s_{\text{total}}}{\Delta t}$<br>$\vec{v}_{\text{rata}} = \frac{\Delta \vec{r}}{\Delta t} = \frac{\vec{r}_2 - \vec{r}_1}{t_2 - t_1}$ | $s_{\text{total}}$: panjang total lintasan fisik ($\text{m}$, skalar); $\Delta \vec{r}$: vektor perpindahan posisi dari titik awal ke akhir ($\text{m}$); $\Delta t$: selang waktu ($\text{s}$); $v_{\text{kelajuan}}$: kelajuan rata-rata ($\text{m/s}$); $\vec{v}_{\text{rata}}$: kecepatan rata-rata ($\text{m/s}$) | Jarak selalu bernilai positif ($s \ge 0$); perpindahan dapat bertanda positif, negatif, atau nol jika benda kembali ke titik mula |
| **Kalkulus Kinematika Sesaat** | $v(t) = \frac{dr}{dt}$<br>$a(t) = \frac{dv}{dt} = \frac{d^2r}{dt^2}$ | $r(t)$: fungsi posisi terhadap waktu ($\text{m}$); $v(t)$: kecepatan sesaat pada detik $t$ ($\text{m/s}$); $a(t)$: percepatan sesaat pada detik $t$ ($\text{m/s}^2$) | Kecepatan adalah turunan pertama posisi; percepatan adalah turunan kedua posisi |
| **Rekonstruksi Gerak via Integral** | $v(t) = v_0 + \int_{0}^{t} a(t)\,dt$<br>$r(t) = r_0 + \int_{0}^{t} v(t)\,dt$ | $v_0$: kecepatan awal saat $t = 0$ ($\text{m/s}$); $r_0$: posisi awal saat $t = 0$ ($\text{m}$); $t$: waktu integrasi ($\text{s}$) | Luas area di bawah kurva grafik $a-t$ adalah perubahan kecepatan $\Delta v$; luas di bawah kurva $v-t$ adalah perpindahan $s$ |
| **Gerak Lurus Beraturan (GLB)** | $s = v \cdot t$<br>$x(t) = x_0 + v \cdot t$ | $s$: jarak tempuh ($\text{m}$); $x(t)$: posisi benda saat waktu $t$ ($\text{m}$); $x_0$: posisi awal ($\text{m}$); $v$: kelajuan konstan ($\text{m/s}$); $t$: waktu tempuh ($\text{s}$) | Berlaku hanya jika percepatan nol ($a = 0$) |
| **GLBB: Kecepatan Akhir Waktu** | $v_t = v_0 + a t$ | $v_t$: kecepatan akhir benda saat detik ke-$t$ ($\text{m/s}$); $v_0$: kecepatan awal mula-mula ($\text{m/s}$); $a$: percepatan linier konstan ($\text{m/s}^2$); $t$: selang waktu ($\text{s}$) | Tanda $a$: bernilai $(+)$ jika dipercepat, bernilai $(-)$ jika diperlambat |
| **GLBB: Jarak Tempuh Waktu** | $s = v_0 t + \frac{1}{2} a t^2$ | $s$: perpindahan jarak linier ($\text{m}$); $v_0$: kecepatan awal ($\text{m/s}$); $a$: percepatan linier ($\text{m/s}^2$); $t$: waktu tempuh ($\text{s}$) | Persamaan kuadrat terhadap waktu $t$ menghasilkan grafik posisi-waktu lengkung parabola |
| **GLBB: Independen Waktu** | $v_t^2 = v_0^2 + 2 a s$ | $v_t$: kecepatan akhir ($\text{m/s}$); $v_0$: kecepatan awal ($\text{m/s}$); $a$: percepatan ($\text{m/s}^2$); $s$: jarak tempuh ($\text{m}$) | Gunakan jika durasi waktu $t$ tidak diketahui pada soal ujian |
| **GLBB: Kecepatan Rata-Rata** | $s = \left(\frac{v_0 + v_t}{2}\right) t$ | $s$: perpindahan linier ($\text{m}$); $v_0$: kecepatan awal ($\text{m/s}$); $v_t$: kecepatan akhir ($\text{m/s}$); $t$: selang waktu ($\text{s}$) | Formula praktis menghitung jarak tanpa menghitung nilai percepatan $a$ terlebih dahulu |

---

### C. Gerak Vertikal Medan Gravitasi & Dinamika Dua Benda
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Gerak Jatuh Bebas (GJB)** | $v_t = g t = \sqrt{2 g h}$<br>$h = \frac{1}{2} g t^2 \implies t = \sqrt{\frac{2 h}{g}}$ | $v_t$: kelajuan jatuh di tanah ($\text{m/s}$); $g$: percepatan gravitasi bumi ($\text{m/s}^2$, biasa diambil $9{,}8$ atau $10\text{ m/s}^2$); $h$: ketinggian awal pelepasan ($\text{m}$); $t$: waktu jatuh hingga dasar ($\text{s}$) | Syarat mutlak: kecepatan awal nol ($v_0 = 0$) dan percepatan $a = +g$. Waktu jatuh bebas bebas dari massa benda |
| **Rasio Jarak Galilei GJB** | $s_1 : s_2 : s_3 : \dots = 1 : 3 : 5 : 7 : \dots$ | $s_k$: jarak yang ditempuh benda jatuh bebas tepat pada interval detik ke-$k$ ($\text{m}$) | Jarak tiap sekon berurutan selalu berbanding deret bilangan ganjil |
| **Gerak Vertikal ke Bawah (GVB)** | $v_t = v_0 + g t$<br>$h = v_0 t + \frac{1}{2} g t^2$<br>$v_t^2 = v_0^2 + 2 g h$ | $v_0$: kecepatan awal lemparan ke bawah ($v_0 > 0$, $\text{m/s}$); $v_t$: kelajuan sesaat ($\text{m/s}$); $h$: penurunan vertikal ($\text{m}$); $g$: percepatan gravitasi ($\text{m/s}^2$) | Memiliki kecepatan awal searah percepatan gravitasi ($a = +g$) |
| **Gerak Vertikal ke Atas (GVA)** | $v_t = v_0 - g t$<br>$h = v_0 t - \frac{1}{2} g t^2$<br>$v_t^2 = v_0^2 - 2 g h$ | $v_0$: kecepatan awal pelemparan ke atas ($\text{m/s}$); $v_t$: kecepatan saat ketinggian $h$ ($\text{m/s}$); $g$: gravitasi ($\text{m/s}^2$); $h$: posisi vertikal dari tanah ($\text{m}$) | Diperlambat oleh gravitasi bumi ($a = -g$). Di titik tertinggi kelajuan sesaat nol ($v_t = 0$) |
| **Puncak GVA & Waktu Total** | $h_{\max} = \frac{v_0^2}{2 g}$<br>$t_{\text{naik}} = \frac{v_0}{g}$<br>$t_{\text{total}} = \frac{2 v_0}{g}$ | $h_{\max}$: ketinggian puncak maksimum dari titik lempar ($\text{m}$); $t_{\text{naik}}$: durasi waktu mencapai puncak ($\text{s}$); $t_{\text{total}}$: durasi melayang bolak-balik sampai tanah ($\text{s}$) | Kecepatan saat tiba kembali di tanah sama besar dengan kecepatan awal lempar ($v_{\text{kembali}} = v_0$) |
| **Papasan Berhadapan (Saling Mendekat)** | $t_{\text{temu}} = \frac{S_{\text{total}}}{v_A + v_B}$ | $S_{\text{total}}$: jarak pisah mula-mula kedua benda ($\text{m}$); $v_A, v_B$: kelajuan masing-masing benda ($\text{m/s}$); $t_{\text{temu}}$: waktu hingga berpapasan ($\text{s}$) | Posisi temu: $s_A = v_A \cdot t_{\text{temu}}$ dari titik berangkat A |
| **Pengejaran Searah (Menyusul)** | $t_{\text{susul}} = \frac{\Delta s_0}{v_{\text{pengejar}} - v_{\text{dikejar}}}$ | $\Delta s_0$: jarak keunggulan posisi awal ($\text{m}$); $v_{\text{pengejar}}$: kelajuan benda di belakang ($v_{\text{pengejar}} > v_{\text{dikejar}}$, $\text{m/s}$); $t_{\text{susul}}$: waktu menyusul ($\text{s}$) | Jarak susul dari titik awal pengejar: $s = v_{\text{pengejar}} \cdot t_{\text{susul}}$ |
| **Beda Waktu Berangkat ($\Delta t$)** | $t_A = t, \quad t_B = t - \Delta t$ | $\Delta t$: selisih waktu keberangkatan benda kedua setelah benda pertama ($\text{s}$) | Substitusikan hubungan waktu ini ke persamaan posisi masing-masing |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Perlambatan pada GLBB harus diberi tanda minus ($a = -\vert a \vert$). Jika kendaraan mengerem hingga berhenti ($v_t = 0$), gunakan $v_t^2 = v_0^2 - 2as \implies s_{\text{henti}} = \frac{v_0^2}{2a}$. Ingat bahwa jarak pengereman berbanding lurus dengan **kuadrat kecepatan awal** ($s \propto v_0^2$). Jika kelajuan diduakalikan, jarak henti menjadi 4 kali lipat!
> 2. Pada gerak vertikal ke atas, waktu naik dari tanah ke puncak tepat sama dengan waktu turun dari puncak kembali ke tanah ($t_{\text{naik}} = t_{\text{turun}} = \frac{v_0}{g}$).

> [!TIP] Super Solusi Cepat:
> Untuk mencari perpindahan dari grafik $v-t$, jangan hitung rumus fisika yang rumit. Cukup hitung **luas daerah geometris** (segitiga, persegi panjang, atau trapesium) di bawah kurva grafik $v-t$. Area di atas sumbu $t$ bertanda $(+)$ (maju), area di bawah sumbu $t$ bertanda $(-)$ (mundur)!