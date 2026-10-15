# Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Kurikulum Merdeka

---

## A. Besaran-Besaran Kinematika Gerak Lurus
1. **Titik Acuan, Posisi, Jarak, dan Perpindahan:**
   * **Titik Acuan:** Titik awal penetapan koordinat pengamat untuk mengukur kedudukan benda.
   * **Posisi (Kedudukan, $\vec{r}$):** Letak benda pada garis koordinat relatif terhadap titik acuan pada waktu tertentu (besaran vektor).
   * **Jarak Tempuh ($s$):** Panjang total seluruh lintasan fisik riil yang dilalui benda selama bergerak (besaran skalar, bernilai selalu positif $\ge 0$).
   * **Perpindahan ($\Delta \vec{r}$):** Perubahan posisi kedudukan benda dari titik awal langsung ke titik akhir (besaran vektor):
     $$\Delta \vec{r} = \vec{r}_2 - \vec{r}_1 = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j}$$
     * **Keterangan Variabel & Satuan:**
       * $\Delta \vec{r}$ = vektor perpindahan posisi benda (satuan: $\text{m}$)
       * $\vec{r}_1$ = vektor posisi awal mula-mula benda (satuan: $\text{m}$)
       * $\vec{r}_2$ = vektor posisi akhir benda (satuan: $\text{m}$)
       * $x_1, x_2$ = koordinat posisi mendatar awal dan akhir (satuan: $\text{m}$)
       * $y_1, y_2$ = koordinat posisi vertikal awal dan akhir (satuan: $\text{m}$)
2. **Kelajuan vs Kecepatan:**
   * **Kelajuan Rata-Rata ($v_{\text{kelajuan}}$):** Rasio jarak total terhadap selang waktu tempuh (besaran skalar):
     $$v_{\text{kelajuan}} = \frac{s_{\text{total}}}{\Delta t}$$
   * **Kecepatan Rata-Rata ($\vec{v}_{\text{rata}}$):** Rasio perpindahan posisi terhadap selang waktu tempuh (besaran vektor):
     $$\vec{v}_{\text{rata}} = \frac{\Delta \vec{r}}{\Delta t} = \frac{\vec{r}_2 - \vec{r}_1}{t_2 - t_1}$$
     * **Keterangan Variabel & Satuan:**
       * $v_{\text{kelajuan}}$ = kelajuan rata-rata benda (satuan: $\text{m/s}$)
       * $s_{\text{total}}$ = jarak total lintasan fisik yang ditempuh benda (satuan: $\text{m}$)
       * $\vec{v}_{\text{rata}}$ = kecepatan rata-rata benda (satuan: $\text{m/s}$)
       * $\Delta \vec{r}$ = besar vektor perpindahan kedudukan benda (satuan: $\text{m}$)
       * $\Delta t$ = selang waktu total perjalanan benda (satuan: $\text{s}$)
3. **Kalkulus Kinematika Gerak Lurus (Turunan & Integral):**
   * **Kecepatan Sesaat:** Laju perubahan posisi terhadap waktu saat interval $\Delta t \to 0$:
     $$\vec{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta \vec{r}}{\Delta t} = \frac{d\vec{r}}{dt}$$
   * **Percepatan Sesaat:** Laju perubahan kecepatan terhadap waktu:
     $$\vec{a}(t) = \lim_{\Delta t \to 0} \frac{\Delta \vec{v}}{\Delta t} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}$$
   * **Rekonstruksi Posisi & Kecepatan via Integral:**
     $$\begin{aligned}
     \vec{v}(t) &= \vec{v}_0 + \int_{0}^{t} \vec{a}(t)\,dt \\
     \vec{r}(t) &= \vec{r}_0 + \int_{0}^{t} \vec{v}(t)\,dt
     \end{aligned}$$
     * **Keterangan Variabel & Satuan:**
       * $\vec{r}(t)$ = vektor posisi fungsi waktu $t$ (satuan: $\text{m}$)
       * $\vec{v}(t)$ = kecepatan sesaat partikel pada waktu $t$ (satuan: $\text{m/s}$)
       * $\vec{a}(t)$ = percepatan sesaat partikel pada waktu $t$ (satuan: $\text{m/s}^2$)
       * $\vec{r}_0$ = posisi awal partikel saat $t = 0$ (satuan: $\text{m}$)
       * $\vec{v}_0$ = kecepatan awal partikel saat $t = 0$ (satuan: $\text{m/s}$)
       * $t$ = waktu tempuh (satuan: $\text{s}$)

---

## B. Gerak Lurus Beraturan (GLB)
1. **Definisi & Karakteristik Fisis:**
   * Kecepatan konstan dalam besar dan arah ($\vec{v} = \text{konstan}$).
   * Percepatan bernilai nol ($a = 0$).
   * Lintasan berupa garis lurus tanpa belokan.
2. **Persamaan Posisi dan Jarak GLB:**
   $$s = v \cdot t \quad \text{atau} \quad x(t) = x_0 + v \cdot t$$
   * **Keterangan Variabel & Satuan:**
     * $s$ = jarak tempuh benda (satuan: $\text{m}$)
     * $x(t)$ = posisi akhir benda pada koordinat garis lurus saat waktu $t$ (satuan: $\text{m}$)
     * $x_0$ = posisi awal mula-mula benda dari titik acuan (satuan: $\text{m}$)
     * $v$ = kecepatan gerak lurus konstan (satuan: $\text{m/s}$)
     * $t$ = selang waktu tempuh perjalanan (satuan: $\text{s}$)
3. **Analisis Grafik Kinematika GLB:**
   * **Grafik Posisi-Waktu ($s-t$ atau $x-t$):** Garis linier lurus miring. Kemiringan kurva adalah kecepatan: $\text{Gradien } m = \tan\theta = \frac{\Delta x}{\Delta t} = v$.
   * **Grafik Kecepatan-Waktu ($v-t$):** Garis horizontal datar sejajar sumbu waktu. Luas daerah di bawah grafik merepresentasikan jarak tempuh: $\text{Luas Persegi Panjang} = v \times t = s$.
   * **Grafik Percepatan-Waktu ($a-t$):** Berimpit tepat pada sumbu horizontal waktu ($a = 0$).

---

## C. Gerak Lurus Berubah Beraturan (GLBB)
1. **Definisi & Karakteristik Fisis:**
   * Bergerak pada lintasan lurus dengan **percepatan linier tetap** ($a = \text{konstan} \neq 0$).
   * Kecepatan bertambah (GLBB dipercepat, $a > 0$) atau berkurang (GLBB diperlambat, $a < 0$) secara teratur setiap sekon.
2. **Tiga Persamaan Utama GLBB:**
   $$\begin{aligned}
   v_t &= v_0 + a t \\
   s &= v_0 t + \frac{1}{2} a t^2 \\
   v_t^2 &= v_0^2 + 2 a s
   \end{aligned}$$
   Serta persamaan jarak berdasarkan kecepatan rata-rata:
   $$s = \left(\frac{v_0 + v_t}{2}\right) t$$
   * **Keterangan Variabel & Satuan:**
     * $v_t$ = kecepatan akhir benda pada saat waktu $t$ (satuan: $\text{m/s}$)
     * $v_0$ = kecepatan awal mula-mula benda (satuan: $\text{m/s}$)
     * $a$ = percepatan linier konstan (satuan: $\text{m/s}^2$) (bertanda $+$ jika dipercepat, bertanda $-$ jika diperlambat)
     * $s$ = jarak tempuh / perpindahan kedudukan linier benda (satuan: $\text{m}$)
     * $t$ = selang waktu perjalanan benda (satuan: $\text{s}$)
3. **Analisis Grafik Kinematika GLBB:**
   * **Grafik $v-t$:** Garis lurus miring dengan kemiringan gradien $m = \frac{\Delta v}{\Delta t} = a$. Luas daerah di bawah kurva (segitiga atau trapesium) sama dengan perpindahan $s$.
   * **Grafik $s-t$:** Berupa kurva lengkung parabola kuadratik ($s \propto t^2$). Parabola terbuka ke atas untuk $a > 0$ dan terbuka ke bawah untuk $a < 0$.
   * **Grafik $a-t$:** Garis horizontal konstan setinggi nilai percepatan $a$.

---

## D. Gerak Vertikal Akibat Medan Gravitasi Bumi ($a = \pm g$)
Mengabaikan gesekan udara, setiap benda di dekat permukaan bumi mengalami percepatan gravitasi ke bawah ($g \approx 9{,}8\text{ m/s}^2$ atau $10\text{ m/s}^2$).

### 1. Gerak Jatuh Bebas (GJB)
Benda dijatuhkan bebas ke bawah tanpa dorongan kecepatan awal ($v_0 = 0$, $a = +g$):
$$\begin{aligned}
v_t &= g t = \sqrt{2 g h} \\
h &= \frac{1}{2} g t^2 \\
t &= \sqrt{\frac{2 h}{g}}
\end{aligned}$$
* **Keterangan Variabel & Satuan:**
  * $v_t$ = kelajuan benda saat menyentuh tanah / menempuh jarak $h$ (satuan: $\text{m/s}$)
  * $g$ = percepatan gravitasi bumi (satuan: $\text{m/s}^2$)
  * $h$ = ketinggian awal pelepasan jatuh / jarak vertikal yang dilalui (satuan: $\text{m}$)
  * $t$ = waktu jatuh bebas hingga mencapai dasar (satuan: $\text{s}$)
* **Hukum Perbandingan Jarak Galilei:** Pada gerak jatuh bebas, jarak tempuh pada interval detik ke-$1$, ke-$2$, ke-$3$, $\dots$ yang berurutan selalu berbanding ganjil: $1 : 3 : 5 : 7 : 9 : \dots$.

### 2. Gerak Vertikal ke Bawah (GVB)
Benda dilempar ke bawah dengan kecepatan awal tertentu ($v_0 > 0$, $a = +g$):
$$\begin{aligned}
v_t &= v_0 + g t \\
h &= v_0 t + \frac{1}{2} g t^2 \\
v_t^2 &= v_0^2 + 2 g h
\end{aligned}$$
* **Keterangan Variabel & Satuan:**
  * $v_t$ = kelajuan akhir gerak vertikal ke bawah (satuan: $\text{m/s}$)
  * $v_0$ = kecepatan awal dorongan lemparan ke bawah (satuan: $\text{m/s}$)
  * $g$ = percepatan gravitasi bumi (satuan: $\text{m/s}^2$)
  * $h$ = jarak penurunan lintasan vertikal (satuan: $\text{m}$)
  * $t$ = selang waktu gerak vertikal ke bawah (satuan: $\text{s}$)

### 3. Gerak Vertikal ke Atas (GVA)
Benda dilempar ke atas dengan kelajuan awal $v_0$, diperlambat oleh gravitasi bumi ($a = -g$):
$$\begin{aligned}
v_t &= v_0 - g t \\
h &= v_0 t - \frac{1}{2} g t^2 \\
v_t^2 &= v_0^2 - 2 g h
\end{aligned}$$
* **Karakteristik Titik Tertinggi (Puncak, $v_t = 0$):**
  $$\begin{aligned}
  t_{\text{naik}} &= \frac{v_0}{g} \\
  h_{\max} &= \frac{v_0^2}{2 g} \\
  t_{\text{total}} &= 2 \times t_{\text{naik}} = \frac{2 v_0}{g} \\
  v_{\text{kembali}} &= v_0
  \end{aligned}$$
  * **Keterangan Variabel & Satuan:**
    * $v_t$ = kelajuan benda pada ketinggian $h$ (satuan: $\text{m/s}$)
    * $v_0$ = kelajuan awal pelemparan ke atas (satuan: $\text{m/s}$)
    * $g$ = percepatan gravitasi bumi (satuan: $\text{m/s}^2$)
    * $h$ = posisi ketinggian sesaat benda dari tanah (satuan: $\text{m}$)
    * $h_{\max}$ = ketinggian maksimum puncak yang dapat dicapai benda (satuan: $\text{m}$)
    * $t_{\text{naik}}$ = waktu tempuh dari tanah menuju titik tertinggi puncak (satuan: $\text{s}$)
    * $t_{\text{total}}$ = durasi total melayang di udara bolak-balik sampai tanah (satuan: $\text{s}$)
    * $v_{\text{kembali}}$ = kelajuan benda saat menyentuh tanah kembali (satuan: $\text{m/s}$)

---

## E. Analisis Khusus Dua Benda Bergerak (Kasus Ujian TKA)
1. **Dua Benda Berhadapan (Saling Mendekat / Berpapasan):**
   $$s_A + s_B = S_{\text{total}} \implies v_A t + v_B t = S_{\text{total}} \implies t_{\text{temu}} = \frac{S_{\text{total}}}{v_A + v_B}$$
   * **Keterangan Variabel & Satuan:**
     * $S_{\text{total}}$ = jarak pisah awal antara benda A dan benda B (satuan: $\text{m}$)
     * $v_A, v_B$ = kecepatan konstan masing-masing benda (satuan: $\text{m/s}$)
     * $t_{\text{temu}}$ = waktu tempuh hingga kedua benda berpapasan (satuan: $\text{s}$)
2. **Dua Benda Bergerak Searah (Pengejaran / Menyusul):**
   $$s_{\text{pengejar}} = s_{\text{dikejar}} + \Delta s_0 \implies t_{\text{susul}} = \frac{\Delta s_0}{v_{\text{pengejar}} - v_{\text{dikejar}}}$$
   * **Keterangan Variabel & Satuan:**
     * $\Delta s_0$ = selisih jarak keunggulan awal antara benda di depan dan di belakang (satuan: $\text{m}$)
     * $v_{\text{pengejar}}$ = kelajuan benda pengejar ($v_{\text{pengejar}} > v_{\text{dikejar}}$) (satuan: $\text{m/s}$)
     * $v_{\text{dikejar}}$ = kelajuan benda yang sedang dikejar (satuan: $\text{m/s}$)
     * $t_{\text{susul}}$ = waktu yang dibutuhkan untuk menyusul tepat pada posisi sama (satuan: $\text{s}$)
3. **Selisih Waktu Keberangkatan ($\Delta t$):**
   Jika benda B berangkat $\Delta t$ sekon setelah benda A: gunakan waktu $t_A = t$ dan $t_B = t - \Delta t$.