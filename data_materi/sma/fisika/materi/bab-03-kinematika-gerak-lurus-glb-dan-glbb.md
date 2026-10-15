# Bab 3: Kinematika Gerak Lurus (GLB dan GLBB)
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 3: Kinematika Gerak Lurus (GLB dan GLBB)

---

### A. Konsep Fundamental Kinematika Gerak
Kinematika adalah cabang mekanika klasik yang mempelajari gerak benda (posisi, kecepatan, dan percepatan) tanpa meninjau gaya penyebab timbulnya gerak tersebut.

#### 1. Posisi, Jarak, dan Perpindahan
* **Posisi (Kedudukan / $\vec{r}$):** Titik letak suatu benda pada suatu garis koordinat terhadap titik acuan yang disepakati.
* **Jarak ($s$):** Panjang total seluruh lintasan fisik yang dilalui oleh benda. Besaran **skalar** yang selalu bernilai non-negatif ($s \ge 0$).
* **Perpindahan ($\Delta \vec{x}$ atau $\Delta \vec{r}$):** Selisih vektor dari posisi akhir terhadap posisi awal benda, tidak bergantung pada bentuk lintasan yang dilewati. Besaran **vektor** yang dapat bernilai positif, negatif, atau nol.
  $$\Delta x = x_{\text{akhir}} - x_{\text{awal}}$$

#### 2. Kelajuan vs Kecepatan
* **Kelajuan Rata-Rata ($v_{\text{skalar}}$):** Total jarak tempuh dibagi total selang waktu.
  $$v = \frac{\text{Total Jarak Tempuh}}{\text{Total Waktu Tempuh}} = \frac{s_{\text{tot}}}{t_{\text{tot}}}$$
* **Kecepatan Rata-Rata ($\vec{v}_{\text{rata-rata}}$):** Perpindahan neto dibagi total selang waktu.
  $$\vec{v}_{\text{rata-rata}} = \frac{\text{Perpindahan}}{\text{Total Waktu}} = \frac{\Delta \vec{x}}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}$$
* **Kecepatan Sesaat ($\vec{v}$):** Kecepatan partikel pada satu titik waktu tertentu (limit $\Delta t \to 0$ atau turunan pertama posisi terhadap waktu).
  $$\vec{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta \vec{x}}{\Delta t} = \frac{d\vec{x}}{dt}$$

#### 3. Percepatan Rata-Rata dan Sesaat
* **Percepatan Rata-Rata ($\vec{a}_{\text{rata-rata}}$):** Perubahan kecepatan per satuan waktu.
  $$\vec{a}_{\text{rata-rata}} = \frac{\Delta \vec{v}}{\Delta t} = \frac{v_2 - v_1}{t_2 - t_1}$$
* **Percepatan Sesaat ($\vec{a}$):** Laju perubahan kecepatan pada saat tertentu (turunan pertama kecepatan atau turunan kedua posisi terhadap waktu).
  $$\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{x}}{dt^2}$$

#### 4. Hubungan Integral Kinematika:
Jika percepatan atau kecepatan dinyatakan sebagai fungsi waktu:
$$\vec{v}(t) = \vec{v}_0 + \int_{0}^t \vec{a}(t)\,dt \quad \text{dan} \quad \vec{x}(t) = \vec{x}_0 + \int_{0}^t \vec{v}(t)\,dt$$

> [!WARNING]
> **Jebakan Satuan Kecepatan:**
> Kecepatan pada soal sering dinyatakan dalam $\text{km/jam}$. Wajib dikonversi ke $\text{m/s}$ sebelum disubstitusikan ke persamaan fisika:
> $$1\text{ km/jam} = \frac{1000\text{ m}}{3600\text{ s}} = \frac{1}{3{,}6}\text{ m/s}$$
> * $36\text{ km/jam} = 10\text{ m/s}$
> * $54\text{ km/jam} = 15\text{ m/s}$
> * $72\text{ km/jam} = 20\text{ m/s}$
> * $90\text{ km/jam} = 25\text{ m/s}$
> * $108\text{ km/jam} = 30\text{ m/s}$

---

### B. Gerak Lurus Beraturan (GLB)
Gerak benda pada lintasan garis lurus dengan kecepatan konstan baik besar maupun arahnya ($v = \text{konstan}$) dan percepatan nol ($a = 0$).

> [!NOTE]
> **Persamaan Operasional GLB:**
> $$s = v \cdot t \iff x(t) = x_0 + v \cdot t$$
> * $s$ = jarak atau perpindahan ($\text{m}$)
> * $x_0$ = posisi awal benda ($\text{m}$)
> * $v$ = kecepatan konstan ($\text{m/s}$)
> * $t$ = waktu tempuh ($\text{s}$)

#### Tafsir Geometri Grafik GLB:
* **Grafik Posisi-Waktu ($s-t$):** Garis lurus miring dengan kemiringan konstan. Kemiringan garis (gradien $m = \frac{\Delta s}{\Delta t}$) merepresentasikan nilai kecepatan ($v$).
* **Grafik Kecepatan-Waktu ($v-t$):** Garis lurus horizontal sejajar sumbu waktu. Luas daerah persegi panjang di bawah garis grafik merepresentasikan jarak/perpindahan ($s = \text{Luas}$).

#### Analisis Kasus Khusus Dua Benda Bergerak:
1. **Kasus Berpapasan (Bergerak Saling Mendekati):**
   Dua benda mula-mula terpisah sejauh $S_{\text{tot}}$ dan bergerak berlawanan arah hingga bertemu:
   $$S_A + S_B = S_{\text{tot}} \implies t_{\text{temu}} = \frac{S_{\text{tot}}}{v_A + v_B}$$
   *Jika Benda B berangkat $\Delta t$ sekon lebih lambat dari Benda A:*
   $$v_A t + v_B (t - \Delta t) = S_{\text{tot}}$$
2. **Kasus Menyusul (Bergerak Searah):**
   Benda B mengejar Benda A yang berada di depannya sejauh $s_0$ (dengan syarat kelajuan $v_B > v_A$):
   $$t_{\text{susul}} = \frac{s_0}{v_B - v_A}$$

---

### C. Gerak Lurus Berubah Beraturan (GLBB)
Gerak benda pada lintasan lurus dengan perubahan kecepatan yang seragam setiap detiknya, yaitu percepatan konstan ($a = \text{konstan} \neq 0$).

> [!NOTE]
> **Empat Persamaan Utama GLBB:**
> 1. $$v_t = v_0 + a \cdot t$$
>    *(Digunakan ketika jarak tempuh $s$ tidak diketahui atau tidak ditanyakan)*
> 2. $$s = v_0 t + \frac{1}{2} a t^2$$
>    *(Digunakan ketika waktu tempuh $t$ diketahui)*
> 3. $$v_t^2 = v_0^2 + 2 a s$$
>    *(Digunakan ketika waktu tempuh $t$ TIDAK diketahui atau dieliminasi)*
> 4. $$s = \left(\frac{v_0 + v_t}{2}\right) t$$
>    *(Digunakan ketika percepatan $a$ tidak diketahui)*

#### Persamaan Tambahan: Jarak Khusus pada Detik ke-$n$ ($s_n$):
Jarak yang ditempuh murni hanya selama detik ke-$n$ (selang antara $t = n-1$ hingga $t = n$):
$$s_n = v_0 + \frac{1}{2} a (2n - 1)$$

#### Variabel dan Perjanjian Tanda:
* $v_0$ = kecepatan awal ($\text{m/s}$)
* $v_t$ = kecepatan akhir saat waktu $t$ ($\text{m/s}$)
* $a$ = percepatan ($\text{m/s}^2$); bertanda **positif ($+$)** jika gerak dipercepat, bertanda **negatif ($-$)** jika gerak diperlambat
* $s$ = perpindahan / jarak tempuh ($\text{m}$)
* $t$ = selang waktu ($\text{s}$)

#### Tafsir Geometri Grafik GLBB:
* **Grafik $v-t$:** Berupa garis lurus miring:
  * **Kemiringan garis (Gradien):** Menunjukkan nilai percepatan:
    $$a = \frac{\Delta v}{\Delta t} = \frac{v_t - v_0}{t}$$
  * **Luas di bawah kurva $v-t$:** Menunjukkan jarak/perpindahan yang ditempuh (berbentuk trapesium atau segitiga).
* **Grafik $s-t$:** Berupa kurva parabola lengkung:
  * Cekung ke atas jika dipercepat ($a > 0$).
  * Cekung ke bawah jika diperlambat ($a < 0$).

---

### D. Gerak Vertikal Dipengaruhi Gravitasi Bumi ($g$)
Gerak vertikal adalah aplikasi khusus GLBB dalam arah sumbu-$y$ di mana benda hanya dipengaruhi oleh percepatan gravitasi bumi $g \approx 9{,}8\text{ m/s}^2 \approx 10\text{ m/s}^2$ ke arah bawah (pusat bumi). Hambatan gesekan udara diabaikan.

| Parameter Karakteristik | Gerak Jatuh Bebas (GJB) | Gerak Vertikal ke Bawah (GVB) | Gerak Vertikal ke Atas (GVA) |
| :--- | :---: | :---: | :---: |
| **Kecepatan Awal ($v_0$)** | $v_0 = 0$ (dilepas tanpa dorongan) | $v_0 > 0$ (dilempar ke bawah) | $v_0 > 0$ (dilempar ke atas) |
| **Percepatan ($a$)** | $+g$ (dipercepat) | $+g$ (dipercepat) | $-g$ (diperlambat) |
| **Kecepatan Sesaat ($v_t$)** | $v_t = gt = \sqrt{2gh}$ | $v_t = v_0 + gt$ | $v_t = v_0 - gt$ |
| **Ketinggian / Posisi ($h$)** | $h = \frac{1}{2}gt^2$ | $h = v_0 t + \frac{1}{2}gt^2$ | $h = v_0 t - \frac{1}{2}gt^2$ |
| **Hubungan Tanpa Waktu** | $v_t^2 = 2gh$ | $v_t^2 = v_0^2 + 2gh$ | $v_t^2 = v_0^2 - 2gh$ |

#### Teorema Karakteristik Gerak Vertikal ke Atas (GVA):
1. **Di Titik Tertinggi (Puncak):** Kecepatan benda tepat sesaat bernilai nol ($v_t = 0$).
2. **Waktu Mencapai Ketinggian Maksimum:**
   $$t_{\text{puncak}} = \frac{v_0}{g}$$
3. **Ketinggian Maksimum yang Dicapai:**
   $$H_{\max} = \frac{v_0^2}{2g}$$
4. **Waktu Total Melayang di Udara (Kembali ke Tanah):**
   $$t_{\text{tot}} = 2 \cdot t_{\text{puncak}} = \frac{2v_0}{g}$$
5. **Simetri Kecepatan:** Kecepatan saat benda jatuh kembali ke titik lempar sama besar dengan kecepatan awal lemparan namun arahnya berlawanan:
   $$|v_{\text{kembali}}| = v_0$$

---

### E. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 3:**
> Sebuah rangkaian penyelidikan kinematika gerak kendaraan dan proyektil vertikal dilakukan sebagai berikut:
>
> **Bagian 1: Perjalanan Multi-Tahap Kereta Api Listrik**
> Sebuah kereta api listrik bergerak pada lintasan lurus mendatar dengan pola gerak tiga tahap:
> * **Tahap 1:** Berangkat dari keadaan diam di stasiun A, dipercepat beraturan dengan percepatan $a_1 = 1{,}5\text{ m/s}^2$ selama selang waktu $t_1 = 20\text{ sekon}$.
> * **Tahap 2:** Kereta kemudian melaju dengan kecepatan konstan hasil akhir Tahap 1 selama selang waktu $t_2 = 60\text{ sekon}$.
> * **Tahap 3:** Mendekati stasiun B, masinis mengerem kereta dengan perlambatan konstan hingga kereta tepat berhenti di stasiun B setelah menempuh jarak pengereman $s_3 = 300\text{ meter}$.
>
> 1. Tentukan kecepatan akhir kereta di akhir Tahap 1 dan jarak yang ditempuh selama Tahap 1!
> 2. Tentukan jarak yang ditempuh kereta selama melaju pada Tahap 2!
> 3. Tentukan besar perlambatan kereta pada Tahap 3 serta waktu yang dibutuhkan saat proses pengereman hingga berhenti!
> 4. Hitung jarak total antara stasiun A dan stasiun B, serta tentukan kelajuan rata-rata kereta api sepanjang perjalanan tersebut!
>
> **Bagian 2: Gerak Vertikal dari Puncak Menara**
> 5. Dari puncak menara pemancar setinggi $H = 75\text{ meter}$ di atas permukaan tanah, seorang teknisi melemparkan sebuah baut vertikal ke atas dengan kecepatan awal $v_0 = 20\text{ m/s}$ (ambil percepatan gravitasi bumi $g = 10\text{ m/s}^2$). Tentukan:
>    * Ketinggian maksimum yang dicapai baut diukur dari permukaan tanah.
>    * Waktu yang dibutuhkan baut dari awal dilempar hingga mencapai titik tertinggi.
>    * Waktu total yang dibutuhkan baut hingga jatuh membentur permukaan tanah di dasar menara.
>    * Kecepatan baut tepat sesaat sebelum menyentuh tanah.

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Tahap 1 Kereta Api - GLBB Dipercepat):**
  * $v_0 = 0$, $a_1 = 1{,}5\text{ m/s}^2$, $t_1 = 20\text{ s}$.
  * Kecepatan di akhir Tahap 1:
    $$v_1 = v_0 + a_1 t_1 = 0 + (1{,}5)(20) = 30\text{ m/s}$$
  * Jarak tempuh Tahap 1:
    $$s_1 = v_0 t_1 + \frac{1}{2} a_1 t_1^2 = 0 + \frac{1}{2}(1{,}5)(20)^2 = \frac{1}{2}(1{,}5)(400) = 300\text{ m}$$

* **Jawaban Bagian 2 (Tahap 2 Kereta Api - GLB):**
  * Kecepatan konstan: $v = v_1 = 30\text{ m/s}$, waktu tempuh $t_2 = 60\text{ s}$.
  * Jarak tempuh Tahap 2:
    $$s_2 = v \cdot t_2 = (30)(60) = 1800\text{ m}$$

* **Jawaban Bagian 3 (Tahap 3 Kereta Api - GLBB Diperlambat):**
  * Kecepatan awal tahap ini $v_{03} = 30\text{ m/s}$, kecepatan akhir $v_{t3} = 0$, jarak tempuh $s_3 = 300\text{ m}$.
  * Menggunakan rumus tanpa waktu:
    $$v_{t3}^2 = v_{03}^2 - 2 a_3 s_3 \implies 0 = 30^2 - 2(a_3)(300) \implies 600 a_3 = 900 \implies a_3 = 1{,}5\text{ m/s}^2$$
    *(Besar perlambatan adalah $1{,}5\text{ m/s}^2$)*
  * Waktu pengereman:
    $$s_3 = \left(\frac{v_{03} + v_{t3}}{2}\right) t_3 \implies 300 = \left(\frac{30 + 0}{2}\right) t_3 = 15 t_3 \implies t_3 = 20\text{ s}$$

* **Jawaban Bagian 4 (Jarak Total & Kelajuan Rata-Rata):**
  * Jarak Total ($s_{\text{tot}}$):
    $$s_{\text{tot}} = s_1 + s_2 + s_3 = 300 + 1800 + 300 = 2400\text{ m} = 2{,}4\text{ km}$$
  * Waktu Total ($t_{\text{tot}}$):
    $$t_{\text{tot}} = t_1 + t_2 + t_3 = 20 + 60 + 20 = 100\text{ s}$$
  * Kelajuan Rata-Rata ($v_{\text{rata-rata}}$):
    $$v_{\text{rata-rata}} = \frac{s_{\text{tot}}}{t_{\text{tot}}} = \frac{2400\text{ m}}{100\text{ s}} = 24\text{ m/s} = 86{,}4\text{ km/jam}$$

* **Jawaban Bagian 5 (Gerak Vertikal dari Puncak Menara):**
  * $H_{\text{menara}} = 75\text{ m}$, $v_0 = 20\text{ m/s}$, $g = 10\text{ m/s}^2$.
  * **Waktu mencapai puncak:**
    $$t_p = \frac{v_0}{g} = \frac{20}{10} = 2\text{ s}$$
  * **Tinggi maksimum dari titik lempar:**
    $$h_{\max} = \frac{v_0^2}{2g} = \frac{20^2}{2(10)} = \frac{400}{20} = 20\text{ m}$$
  * **Tinggi maksimum total dari permukaan tanah:**
    $$H_{\text{total}} = H_{\text{menara}} + h_{\max} = 75 + 20 = 95\text{ m}$$
  * **Waktu total tiba di tanah:**
    Menggunakan persamaan posisi dengan acuan puncak menara ($y = -75\text{ m}$ saat di dasar menara):
    $$y(t) = v_0 t - \frac{1}{2}gt^2 \implies -75 = 20t - 5t^2 \implies 5t^2 - 20t - 75 = 0$$
    Bagi kedua ruas dengan 5:
    $$t^2 - 4t - 15 = 0 \quad \text{atau jika diperiksa:}$$
    *(Alternatif fisis bertahap)*: Dari puncak tertinggi ($H_{\text{total}} = 95\text{ m}$), baut jatuh bebas menuju tanah:
    $$t_{\text{jatuh}} = \sqrt{\frac{2 H_{\text{total}}}{g}} = \sqrt{\frac{2(95)}{10}} = \sqrt{19} \approx 4{,}36\text{ s}$$
    Maka waktu total:
    $$t_{\text{tot}} = t_p + t_{\text{jatuh}} = 2 + \sqrt{19} \approx 6{,}36\text{ s}$$
  * **Kecepatan saat membentur tanah:**
    $$v_{\text{tanah}} = \sqrt{2 g H_{\text{total}}} = \sqrt{2(10)(95)} = \sqrt{1900} = 10\sqrt{19}\text{ m/s} \approx 43{,}59\text{ m/s}$$
    *(Atau dengan rumus $v_t^2 = v_0^2 + 2gH = 20^2 + 2(10)(75) = 400 + 1500 = 1900 \implies v = \sqrt{1900}\text{ m/s}$)*.

---

### F. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Interpretasi Luas Kurva $v-t$:** Luas daerah di atas sumbu waktu bernilai perpindahan positif (arah maju), sedangkan luas daerah di bawah sumbu waktu bernilai perpindahan negatif (arah mundur). Untuk menghitung jarak tempuh, jumlahkan seluruh nilai mutlak luasnya.
> 2. **Percepatan vs Perlambatan:** Perlambatan adalah percepatan yang arah vektornya berlawanan dengan arah vektor kecepatan. Jangan lupa menyertakan tanda minus pada nilai $a$ saat menyelesaikan formula GLBB.
> 3. **Kecepatan di Puncak Vertikal:** Pada titik tertinggi gerak vertikal ke atas, kecepatan benda sesaat sama dengan nol ($v = 0$), namun percepatannya **bukan nol**, melainkan tetap sebesar percepatan gravitasi bumi ($g = 9{,}8\text{ m/s}^2$ ke bawah).
