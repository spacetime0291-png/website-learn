# Bab 7: Momentum, Impuls, dan Tumbukan
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 7: Momentum, Impuls, dan Tumbukan

---

### A. Konsep Dasar Momentum Linier dan Impuls

#### 1. Momentum Linier ($\vec{p}$):
Momentum linier adalah ukuran tingkat kesukaran untuk menghentikan suatu benda yang sedang bergerak. Momentum merupakan **besaran vektor** yang searah dengan vektor kecepatan benda:
$$\vec{p} = m \cdot \vec{v}$$
* $\vec{p}$ = momentum linier ($\text{kg}\cdot\text{m/s}$ atau $\text{N}\cdot\text{s}$)
* $m$ = massa benda ($\text{kg}$)
* $\vec{v}$ = kecepatan benda ($\text{m/s}$)

> [!WARNING]
> **Sifat Vektor Momentum:**
> Karena momentum adalah besaran vektor, **arah gerak mutlak diperhitungkan!**  
> * Tetapkan kesepakatan tanda koordinat: arah ke kanan/atas bertanda positif ($+$), arah ke kiri/bawah bertanda negatif ($-$).  
> * Dua mobil bermassa sama yang melaju saling berhadapan dengan kelajuan $20\text{ m/s}$ memiliki momentum saling berlawanan ($p_1 = +20m$ dan $p_2 = -20m$), sehingga total momentum sistem adalah nol!

#### 2. Impuls Gaya ($\vec{I}$):
Impuls adalah besarnya gaya yang bekerja pada suatu benda dalam selang waktu kontak yang sangat singkat (misal: benturan pukulan tongkat kasti pada bola, tabrakan mobil):
$$\vec{I} = \vec{F} \cdot \Delta t = \int_{t_1}^{t_2} \vec{F}(t)\,dt$$
* $\vec{I}$ = impuls gaya ($\text{N}\cdot\text{s}$ atau $\text{kg}\cdot\text{m/s}$)
* $\vec{F}$ = gaya impulsif rata-rata ($\text{N}$)
* $\Delta t$ = selang waktu kontak sentuh ($\text{s}$)
* **Grafik $F - t$:** Impuls sama dengan **luas daerah di bawah kurva grafik gaya terhadap waktu**:
  $$I = \text{Luas Bidang Kurva } F-t$$

#### 3. Teorema Impuls - Momentum:
Impuls yang bekerja pada suatu benda sama dengan perubahan momentum yang dialami oleh benda tersebut:
$$\vec{I} = \Delta \vec{p} = \vec{p}_{\text{akhir}} - \vec{p}_{\text{awal}} = m \vec{v}_t - m \vec{v}_0$$

---

### B. Hukum Kekekalan Momentum Linier (HKML)
Berdasarkan Hukum III Newton, jika tidak ada resultan gaya luar yang bekerja pada suatu sistem terisolasi ($\sum \vec{F}_{\text{luar}} = \vec{0}$), maka **jumlah momentum total sistem sebelum interaksi sama dengan jumlah momentum total sistem setelah interaksi**:

$$\sum \vec{p}_{\text{sebelum}} = \sum \vec{p}_{\text{sesudah}}$$
$$m_1 \vec{v}_1 + m_2 \vec{v}_2 = m_1 \vec{v}_1' + m_2 \vec{v}_2'$$
* $m_1, m_2$ = massa benda 1 dan benda 2
* $v_1, v_2$ = kecepatan benda 1 dan 2 sebelum tumbukan
* $v_1', v_2'$ = kecepatan benda 1 dan 2 setelah tumbukan

#### Aplikasi Kasus Ledakan & Sentak Balik Senapan (*Recoil*):
Sebuah senapan bermassa $M$ mula-mula diam lalu menembakkan peluru bermassa $m$ dengan kelajuan $v_p$ ke depan:
$$\sum p_{\text{awal}} = \sum p_{\text{akhir}} \implies 0 = m v_p + M v_s' \implies v_s' = -\frac{m}{M} v_p$$
*(Tanda minus menunjukkan senapan tersentak terdorong ke arah belakang berlawanan dengan arah meluncurnya peluru).*

---

### C. Koefisien Restitusi ($e$) dan Klasifikasi Tumbukan
Koefisien restitusi ($e$) adalah ukuran elastisitas atau derajat kelentingan suatu tumbukan, yang didefinisikan sebagai perbandingan negatif antara selisih kecepatan relatif sesudah tumbukan dengan selisih kecepatan relatif sebelum tumbukan:

$$e = -\frac{v_2' - v_1'}{v_2 - v_1} = \frac{v_1' - v_2'}{v_2 - v_1} \quad (0 \le e \le 1)$$

#### Tiga Jenis Tumbukan dalam Fisika:

| Karakteristik Evaluasi | Tumbukan Lenting Sempurna | Tumbukan Lenting Sebagian | Tumbukan Tidak Lenting Sama Sekali |
| :--- | :---: | :---: | :---: |
| **Nilai Koefisien Restitusi** | $e = 1$ | $0 < e < 1$ | $e = 0$ |
| **Kekekalan Momentum Linier** | **Berlaku** ($\sum p = \sum p'$) | **Berlaku** ($\sum p = \sum p'$) | **Berlaku** ($\sum p = \sum p'$) |
| **Kekekalan Energi Kinetik** | **Berlaku** ($\sum E_k = \sum E_k'$) | **Tidak Berlaku** ($\sum E_k > \sum E_k'$) | **Tidak Berlaku** (Kehilangan $E_k$ terbesar) |
| **Kondisi Gerak Akhir** | Benda terpental lenting sempurna | Benda terpental dengan kelajuan berkurang | **Kedua benda menempel dan bergerak bersama** ($v_1' = v_2' = v'$) |

#### 1. Teorema Tumbukan Lenting Sempurna Dua Benda Bermassa Sama ($m_1 = m_2$):
Jika dua benda bermassa identik bertumbukan lenting sempurna ($e = 1$):
$$v_1' = v_2 \quad \text{dan} \quad v_2' = v_1$$
*(Kedua benda **saling bertukar kecepatan secara total!** Jika benda 2 mula-mula diam, maka benda 1 akan berhenti seketika dan benda 2 melesat dengan kelajuan benda 1).*

#### 2. Pantulan Bola pada Lantai Statis:
Jika sebutir bola dijatuhkan bebas dari ketinggian awal $h_1$ dan memantul ke atas mencapai ketinggian $h_2$, lalu memantul lagi mencapai $h_3$:
$$e = \sqrt{\frac{h_2}{h_1}} = \sqrt{\frac{h_3}{h_2}} = \dots = \sqrt{\frac{h_n}{h_{n-1}}}$$
* Rumus cepat tinggi pantulan ke-$n$:
  $$h_n = h_1 \cdot e^{2(n-1)} \quad \text{atau} \quad h_n = h_0 \cdot e^{2n}$$

#### 3. Tumbukan Tidak Lenting Sama Sekali ($e = 0$):
Karena setelah tumbukan kedua benda bergabung dan bergerak bersama dengan kecepatan tunggal $v'$:
$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v' \implies v' = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$
* Energi kinetik yang hilang (berubah menjadi kalor, deformasi permanen, dan suara benturan):
  $$\Delta E_k = E_{k,\text{awal}} - E_{k,\text{akhir}} = \left(\frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2\right) - \frac{1}{2}(m_1 + m_2) v'^2$$

---

### D. Ayunan Balistik
Alat laboratorium klasik untuk mengukur kelajuan tinggi sebutir peluru ($m$) yang ditembakkan ke dalam balok kayu besar ($M$) yang tergantung pada tali berpanjang $L$.

```text
       ///////// (atap)
          / \
         /   \
        |     | (tali panjang L)
      [ M ]   |
     ↗        ▼
   ● peluru (m, v_0)   ──> [ m+M ] naik setinggi h
```

1. **Tahap 1: Tumbukan Peluru dan Balok (HKML - Tumbukan Tidak Lenting $e = 0$):**
   $$m v_0 + 0 = (m + M) v' \implies v' = \frac{m}{m + M} v_0$$
2. **Tahap 2: Balok Mengayun Naik Setinggi $h$ (HKEM):**
   $$\frac{1}{2}(m + M) v'^2 = (m + M) g h \implies v' = \sqrt{2 g h}$$
3. **Persamaan Kecepatan Awal Peluru:**
   $$\frac{m}{m + M} v_0 = \sqrt{2 g h} \implies v_0 = \left(\frac{m + M}{m}\right)\sqrt{2 g h}$$

---

### E. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 7:**
> Selesaikan rangkaian studi kasus momentum, impuls, dan tumbukan berikut ($g = 10\text{ m/s}^2$):
>
> 1. **(Grafik Gaya Impulsif):** Sebuah bola baseball bermassa $m = 0{,}2\text{ kg}$ dilempar mendatar ke kiri dengan kelajuan $v_0 = 30\text{ m/s}$. Pemukul kemudian memukul bola kembali ke kanan. Gaya pemukul berupa segitiga terhadap waktu kontak: naik dari $0$ hingga mencapai puncak $F_{\max} = 1600\text{ N}$ lalu kembali ke $0$ dalam total selang waktu kontak $\Delta t = 0{,}01\text{ sekon}$.
>    * Hitung besar impuls yang diberikan pemukul pada bola!
>    * Tentukan kelajuan dan arah gerak bola tepat setelah lepas dari pemukul!
> 2. **(Tumbukan Lenting Sempurna):** Balok A ($m_A = 2\text{ kg}$) bergerak ke kanan dengan kelajuan $v_A = 6\text{ m/s}$ di atas lantai licin menumbuk balok B ($m_B = 1\text{ kg}$) yang sedang bergerak ke kiri dengan kelajuan $v_B = 3\text{ m/s}$. Jika tumbukan lenting sempurna ($e = 1$), tentukan kecepatan masing-masing balok setelah bertumbukan!
> 3. **(Pantulan Bola Lantai):** Sebutir bola karet dijatuhkan bebas dari ketinggian $h_1 = 3{,}2\text{ meter}$ di atas lantai beton. Setelah memantul pertama kali, bola mencapai ketinggian $h_2 = 1{,}8\text{ meter}$.
>    * Hitung koefisien restitusi antara bola dan lantai beton!
>    * Tentukan tinggi pantulan kedua ($h_3$) yang dicapai bola!
> 4. **(Ayunan Balistik):** Sebutir peluru bermassa $m = 20\text{ gram}$ ditembakkan mendatar mengenai balok kayu tergantung bermassa $M = 1{,}98\text{ kg}$. Peluru bersarang di dalam balok sehingga balok dan peluru terayun naik mencapai simpangan vertikal setinggi $h = 20\text{ cm}$. Tentukan kelajuan mula-mula peluru tersebut sesaat sebelum mengenai balok!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Impuls & Kelajuan Baseball):**
  * Bentuk grafik $F-t$ adalah segitiga:
    $$I = \text{Luas Segitiga} = \frac{1}{2} \times \text{alas} \times \text{tinggi} = \frac{1}{2} \times (\Delta t) \times F_{\max} = \frac{1}{2} \times (0{,}01\text{ s}) \times (1600\text{ N}) = 8\text{ N}\cdot\text{s} \text{ (ke arah kanan, positive)}$$
  * Kecepatan awal bola ke kiri: $v_0 = -30\text{ m/s}$.
  * Berdasarkan Teorema Impuls-Momentum:
    $$I = m(v_t - v_0) \implies 8 = 0{,}2 \left(v_t - (-30)\right) \implies 8 = 0{,}2 (v_t + 30)$$
    $$\frac{8}{0{,}2} = v_t + 30 \implies 40 = v_t + 30 \implies v_t = +10\text{ m/s}$$
    *Kelajuan bola setelah dipukul adalah $10\text{ m/s}$ berbalik arah ke kanan.*

* **Jawaban Bagian 2 (Tumbukan Lenting Sempurna):**
  * $m_A = 2\text{ kg}, v_A = +6\text{ m/s}$, $m_B = 1\text{ kg}, v_B = -3\text{ m/s}$, $e = 1$.
  * **Persamaan 1: Hukum Kekekalan Momentum:**
    $$m_A v_A + m_B v_B = m_A v_A' + m_B v_B'$$
    $$(2)(6) + (1)(-3) = 2 v_A' + 1 v_B' \implies 12 - 3 = 2 v_A' + v_B' \implies 2 v_A' + v_B' = 9$$
  * **Persamaan 2: Koefisien Restitusi ($e = 1$):**
    $$e = -\frac{v_A' - v_B'}{v_A - v_B} \implies 1 = -\frac{v_A' - v_B'}{6 - (-3)} = -\frac{v_A' - v_B'}{9}$$
    $$v_B' - v_A' = 9 \implies v_B' = v_A' + 9$$
  * Substitusi persamaan 2 ke persamaan 1:
    $$2 v_A' + (v_A' + 9) = 9 \implies 3 v_A' + 9 = 9 \implies 3 v_A' = 0 \implies v_A' = 0\text{ m/s}$$
    Maka:
    $$v_B' = 0 + 9 = +9\text{ m/s}$$
    *Hasil: Balok A langsung berhenti ($v_A' = 0$), sedangkan balok B terpental ke kanan dengan kelajuan $9\text{ m/s}$.*

* **Jawaban Bagian 3 (Pantulan Bola Lantai):**
  * Koefisien restitusi:
    $$e = \sqrt{\frac{h_2}{h_1}} = \sqrt{\frac{1{,}8}{3{,}2}} = \sqrt{\frac{18}{32}} = \sqrt{\frac{9}{16}} = \frac{3}{4} = 0{,}75$$
  * Tinggi pantulan kedua ($h_3$):
    $$e = \sqrt{\frac{h_3}{h_2}} \implies e^2 = \frac{h_3}{h_2} \implies h_3 = h_2 \cdot e^2$$
    $$h_3 = 1{,}8 \times \left(\frac{3}{4}\right)^2 = 1{,}8 \times \frac{9}{16} = \frac{16{,}2}{16} = 1{,}0125\text{ meter} \approx 1{,}01\text{ meter}$$

* **Jawaban Bagian 4 (Ayunan Balistik):**
  * $m = 20\text{ g} = 0{,}02\text{ kg}$, $M = 1{,}98\text{ kg}$, maka $m + M = 0{,}02 + 1{,}98 = 2{,}00\text{ kg}$.
  * Ketinggian ayunan: $h = 20\text{ cm} = 0{,}2\text{ m}$.
  * Kecepatan gabungan sesaat setelah peluru bersarang:
    $$v' = \sqrt{2 g h} = \sqrt{2(10)(0{,}2)} = \sqrt{4} = 2\text{ m/s}$$
  * Menggunakan hubungan kekekalan momentum:
    $$v_0 = \left(\frac{m + M}{m}\right) v' = \left(\frac{2{,}00}{0{,}02}\right)(2) = 100 \times 2 = 200\text{ m/s}$$
    *Kelajuan awal tembakan peluru adalah $200\text{ m/s}$.*

---

### F. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Perangkap Tanda Negatif Kecepatan:** Kegagalan terbesar siswa pada soal tumbukan adalah melupakan tanda minus pada arah benda yang bergerak ke kiri atau berbalik arah. Ingat: $\Delta v = v_t - v_0$. Jika memantul berbalik arah, maka $\Delta v = v_t - (-v_0) = v_t + v_0$!
> 2. **Kekekalan Energi Kinetik HANYA pada Tumbukan Lenting Sempurna:** Pada jenis tumbukan lenting sebagian dan tidak lenting sama sekali, energi kinetik **tidak kekal** karena sebagian energi berubah menjadi kalor dan deformasi bentuk objek.
> 3. **Hukum Kekekalan Momentum Selalu Berlaku:** Sepanjang tidak ada resultan gaya luar yang bekerja pada sistem ($\sum F_{\text{luar}} = 0$), momentum linier sistem **selalu kekal pada SEMUA jenis tumbukan** (baik lenting sempurna, sebagian, maupun tidak lenting sama sekali).
