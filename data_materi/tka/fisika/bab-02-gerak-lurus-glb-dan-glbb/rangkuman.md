# Rangkuman Rumus Cepat & Konsep Inti — Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Rumus Kinematika Gerak Lurus & Grafik
| Sub-Materi / Gerak | Rumus Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Kelajuan vs Kecepatan** | $v_{\text{kelajuan}} = \frac{s_{\text{total}}}{\Delta t}$ (skalar)<br>$\vec{v}_{\text{rata}} = \frac{\Delta \vec{r}}{\Delta t} = \frac{\vec{r}_2 - \vec{r}_1}{t_2 - t_1}$ (vektor) | Jarak ($s$) panjang lintasan riil ($s \ge 0$). Perpindahan ($\Delta \vec{r}$) posisi awal ke akhir |
| **Kalkulus Kinematika Sesaat** | $v(t) = \frac{dr}{dt}, \quad a(t) = \frac{dv}{dt} = \frac{d^2r}{dt^2}$ | $v$ turunan pertama posisi; $a$ turunan pertama kecepatan / turunan kedua posisi |
| **Rekonstruksi Gerak Integral** | $v(t) = v_0 + \int_{0}^{t} a(t)\,dt$<br>$r(t) = r_0 + \int_{0}^{t} v(t)\,dt$ | Luas di bawah kurva $a-t = \Delta v$; Luas di bawah kurva $v-t = \Delta r = s$ |
| **GLB (Gerak Lurus Beraturan)** | $s = v \cdot t$<br>$x(t) = x_0 + v \cdot t$ | $a = 0, \quad v = \text{konstan}$<br>Grafik $s-t$: garis lurus miring (gradien $= v$); Grafik $v-t$: garis datar |
| **GLBB: Kecepatan Waktu** | $v_t = v_0 + a t$ | $a = \text{konstan} \neq 0$; dipercepat ($a > 0$), diperlambat ($a < 0$) |
| **GLBB: Jarak Waktu** | $s = v_0 t + \frac{1}{2} a t^2$ | Grafik $s-t$ kurva parabola kuadratik |
| **GLBB: Bebas Waktu ($t$)** | $v_t^2 = v_0^2 + 2 a s$ | Pengereman hingga berhenti ($v_t = 0$): $s_{\text{henti}} = \frac{v_0^2}{2a}$ ($s \propto v_0^2$) |
| **GLBB: Rata-Rata Kecepatan** | $s = \left(\frac{v_0 + v_t}{2}\right) t$ | Menghitung jarak tanpa mencari nilai percepatan $a$ |

---

### B. Tabel Gerak Vertikal Medan Gravitasi & Papasan Dua Benda
| Sistem Gerak | Rumus Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Gerak Jatuh Bebas (GJB)** | $v_t = g t = \sqrt{2 g h}$<br>$h = \frac{1}{2} g t^2 \implies t = \sqrt{\frac{2 h}{g}}$ | $v_0 = 0, \quad a = +g$<br>Waktu jatuh bebas tidak bergantung massa benda |
| **Rasio Jarak Galilei GJB** | $s_1 : s_2 : s_3 : s_4 : \dots = 1 : 3 : 5 : 7 : \dots$ | Jarak tempuh tiap detik berurutan selalu berbanding deret bilangan ganjil |
| **Gerak Vertikal ke Bawah (GVB)** | $v_t = v_0 + g t$<br>$h = v_0 t + \frac{1}{2} g t^2$<br>$v_t^2 = v_0^2 + 2 g h$ | $v_0 > 0, \quad a = +g$ |
| **Gerak Vertikal ke Atas (GVA)** | $v_t = v_0 - g t$<br>$h = v_0 t - \frac{1}{2} g t^2$<br>$v_t^2 = v_0^2 - 2 g h$ | $a = -g$; diperlambat gravitasi hingga $v_t = 0$ di puncak |
| **Karakteristik Puncak GVA** | $h_{\max} = \frac{v_0^2}{2 g}, \quad t_{\text{naik}} = \frac{v_0}{g}$<br>$t_{\text{total}} = \frac{2 v_0}{g}, \quad v_{\text{kembali}} = v_0$ | $t_{\text{naik}} = t_{\text{turun}} = \frac{v_0}{g}$; kelajuan saat tiba kembali di tanah sama dengan kelajuan lempar |
| **Papasan Saling Berhadapan** | $t_{\text{temu}} = \frac{S_{\text{total}}}{v_A + v_B}$ | Jarak temu dari A: $s_A = v_A \cdot t_{\text{temu}}$ |
| **Susul-Menyusul Searah** | $t_{\text{susul}} = \frac{\Delta s_0}{v_{\text{pengejar}} - v_{\text{dikejar}}}$ | $\Delta s_0$: jarak keunggulan awal; $v_{\text{pengejar}} > v_{\text{dikejar}}$ |
| **Beda Waktu Berangkat ($\Delta t$)** | $t_A = t, \quad t_B = t - \Delta t$ | Digunakan saat benda B berangkat $\Delta t$ sekon setelah benda A |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Jarak pengereman berbanding lurus dengan **kuadrat kecepatan awal** ($s \propto v_0^2$). Jika kelajuan mobil digandakan 2 kali, jarak henti menjadi $2^2 = 4\text{ kali lipat}$!
> 2. Pada gerak vertikal ke atas, percepatan di titik puncak tetap $g = 10\text{ m/s}^2$ ke bawah, hanya kecepatannya yang nol sesaat ($v_y = 0$).

> [!TIP] Super Solusi Cepat:
> Mencari perpindahan dari grafik $v-t$: cukup hitung **luas bidang** (segitiga / trapesium) di bawah kurva grafik. Bidang di atas sumbu $t$ bertanda $(+)$ (maju), di bawah sumbu $t$ bertanda $(-)$ (mundur)!
