# Bab 15: Hukum Termodinamika dan Siklus Mesin
**Kategori:** TKA Fisika | **Blok:** Blok 2: Fluida & Termofisika

## Bab 15: Hukum Termodinamika dan Siklus Mesin

---

### A. Konsep Dasar Termodinamika
Termodinamika mempelajari hubungan antara kalor, usaha, kerja mekanik, dan energi dalam suatu sistem makroskopis.

#### 1. Batasan Sistem dan Lingkungan:
* **Sistem:** Bagian alam semesta yang menjadi fokus perhatian penyelidikan (misal: gas di dalam silinder piston).
* **Lingkungan:** Segala sesuatu di luar batas sistem yang dapat berinteraksi dengan sistem.
* **Klasifikasi Sistem:**
  * **Sistem Terbuka:** Terjadi pertukaran massa dan energi dengan lingkungan (misal: air mendidih di panci terbuka).
  * **Sistem Tertutup:** Terjadi pertukaran energi (kalor/usaha), tetapi tidak ada pertukaran massa (misal: gas dalam silinder berpiston tertutup rapat).
  * **Sistem Terisolasi:** Tidak ada pertukaran energi maupun materi dengan lingkungan (misal: termos air panas ideal).

#### 2. Hukum ke-0 Termodinamika (*Zeroth Law*):
*"Jika dua sistem (A dan B) masing-masing berada dalam kesetimbangan termal dengan sistem ketiga (C), maka sistem A dan B berada dalam kesetimbangan termal satu sama lain ($T_A = T_B = T_C$)."*  
Prinsip ini menjadi dasar operasional pengukuran suhu menggunakan termometer.

---

### B. Usaha Luar ($W$) pada Berbagai Proses Termodinamika
Usaha yang dilakukan oleh gas saat mengalami perubahan volume dari $V_1$ ke $V_2$ adalah luas daerah di bawah kurva grafik tekanan terhadap volume ($P - V$):

$$W = \int_{V_1}^{V_2} P\,dV = \text{Luas Bidang Kurva } P-V$$

```text
  Tekanan (P) ▲
              │     A ─────────► B  (Ekspansi Isobarik, W > 0)
            P ┼───────|         |
              │       |  Usaha  |
              │       |   (W)   |
              └───────┴─────────┴──────► Volume (V)
                     V_1       V_2
```

#### 1. Proses Isobarik (Tekanan Konstan / $P = \text{konstan}$):
Gas memuai atau menyusut pada tekanan konstan:
$$W = P (V_2 - V_1) = P \cdot \Delta V = n R \Delta T$$

#### 2. Proses Isokhorik / Isometrik (Volume Konstan / $V = \text{konstan}$):
Karena tidak terjadi perubahan volume ($\Delta V = 0$):
$$W = 0$$
*(Gas sama sekali tidak melakukan maupun menerima usaha mekanik).*

#### 3. Proses Isotermal (Suhu Konstan / $T = \text{konstan}$):
Karena $T = \text{konstan} \implies \Delta T = 0 \implies \Delta U = 0$:
$$W = n R T \ln\left(\frac{V_2}{V_1}\right) = n R T \ln\left(\frac{P_1}{P_2}\right)$$

#### 4. Proses Adiabatik (Tidak Ada Kalor yang Masuk atau Keluar / $Q = 0$):
Proses ekspansi atau kompresi yang terjadi secara terisolasi termal sempurna atau berlangsung sangat cepat sehingga tidak sempat terjadi pertukaran kalor dengan lingkungan.
* **Persamaan Laplace:**
  $$P_1 V_1^\gamma = P_2 V_2^\gamma \quad \text{dan} \quad T_1 V_1^{\gamma - 1} = T_2 V_2^{\gamma - 1}$$
  * $\gamma = \frac{C_p}{C_v} > 1$ adalah tetapan Laplace gas.
* **Usaha pada Proses Adiabatik:**
  $$W = \frac{1}{\gamma - 1} (P_1 V_1 - P_2 V_2) = \frac{n R}{\gamma - 1} (T_1 - T_2) = -\Delta U$$

---

### C. Hukum I Termodinamika (Kekekalan Energi Sistem)
Hukum I Termodinamika menyatakan bahwa energi tidak dapat diciptakan atau dimusnahkan, melainkan hanya bertransformasi dari satu bentuk ke bentuk lain. Jumlah kalor yang diserap oleh sistem digunakan untuk mengubah energi dalam sistem dan untuk melakukan usaha luar terhadap lingkungan:

$$Q = \Delta U + W \iff \Delta U = Q - W$$

#### Perjanjian Tanda Standar Termodinamika:

| Besaran Fisis | Tanda Positif ($+$) | Tanda Negatif ($-$) |
| :--- | :--- | :--- |
| **Kalor ($Q$)** | Sistem **MENYERAP kalor** dari lingkungan ($Q > 0$). | Sistem **MELEPAS kalor** ke lingkungan ($Q < 0$). |
| **Usaha ($W$)** | Sistem **MELAKUKAN usaha** (memuai / ekspansi, $V_2 > V_1$). | Sistem **MENERIMA usaha** (menyusut / kompresi, $V_2 < V_1$). |
| **Energi Dalam ($\Delta U$)** | Suhu sistem **NAIK** ($T_2 > T_1 \implies \Delta U > 0$). | Suhu sistem **TURUN** ($T_2 < T_1 \implies \Delta U < 0$). |

#### Kapasitas Kalor Molar Gas ($C_p$ dan $C_v$):
* Pada volume tetap: $C_v = \frac{Q_v}{\Delta T} = \frac{\Delta U}{\Delta T} = \frac{f}{2} n R$
* Pada tekanan tetap: $C_p = \frac{Q_p}{\Delta T} = C_v + n R = \left(\frac{f}{2} + 1\right) n R$
* **Hubungan Mayer:** $C_p - C_v = n R$
* **Tetapan Laplace ($\gamma$):**
  $$\gamma = \frac{C_p}{C_v} = \frac{\frac{f}{2} + 1}{\frac{f}{2}} = 1 + \frac{2}{f}$$
  * Untuk gas monoatomik ($f = 3$): $\gamma = \frac{5}{3} \approx 1{,}67$.
  * Untuk gas diatomik suhu kamar ($f = 5$): $\gamma = \frac{7}{5} = 1{,}40$.

---

### D. Hukum II Termodinamika dan Siklus Mesin Kalor

#### 1. Pernyataan Hukum II Termodinamika:
* **Pernyataan Kelvin-Planck (Untuk Mesin Kalor):**  
  *"Tidak mungkin membuat suatu mesin kalor yang bekerja dalam suatu siklus yang semata-mata menyerap kalor dari satu reservoir panas dan mengubah seluruh kalor tersebut menjadi usaha mekanik tanpa membuang sebagian kalor ke reservoir dingin."*  
  *(Konsekuensi: Tidak ada mesin kalor yang efisiensinya $100\%$).*
* **Pernyataan Clausius (Untuk Mesin Pendingin):**  
  *"Tidak mungkin membuat suatu mesin pendingin yang bekerja dalam suatu siklus yang dapat memindahkan kalor secara spontan dari benda bersuhu rendah ke benda bersuhu tinggi tanpa memerlukan usaha dari luar."*

#### 2. Siklus Termodinamika Mesin Kalor:
Siklus adalah serangkaian proses termodinamika yang berawal dan berakhir pada keadaan termodinamika yang sama.  
Karena keadaan awal = akhir $\implies \Delta U_{\text{siklus}} = 0$.  
Maka berdasarkan Hukum I Termodinamika:
$$W_{\text{neto}} = Q_{\text{neto}} = Q_1 - Q_2$$
* $Q_1$ = kalor yang diserap dari reservoir bersuhu tinggi ($T_1$)
* $Q_2$ = kalor yang dibuang ke reservoir bersuhu rendah ($T_2$)
* $W$ = usaha berguna yang dihasilkan mesin dalam 1 siklus (**sama dengan luas kurva siklus tertutup pada grafik $P-V$**)

* **Efisiensi Mesin Kalor Riil ($\eta$):**
  $$\eta = \frac{W}{Q_1} \times 100\% = \frac{Q_1 - Q_2}{Q_1} \times 100\% = \left(1 - \frac{Q_2}{Q_1}\right) \times 100\%$$

---

### E. Mesin Carnot (Siklus Ideal Efisiensi Maksimum)
Mesin Carnot adalah model mesin kalor teoretis reversibel yang memiliki efisiensi tertinggi di antara semua mesin yang bekerja di antara dua reservoir suhu yang sama.

```text
  Tekanan (P) ▲
              │      A ────► B (Ekspansi Isotermal T_1)
              │     /         \
              │    D ◄──── C   \ (Ekspansi Adiabatik)
              │    (Kompresi    (Kompresi Isotermal T_2)
              │     Adiabatik)
              └─────────────────────────► Volume (V)
```

Siklus Carnot terdiri atas 4 tahapan proses:
1. **$A \to B$:** Ekspansi isotermal pada suhu tinggi $T_1$ (menyerap kalor $Q_1$).
2. **$B \to C$:** Ekspansi adiabatik (suhu turun dari $T_1$ ke $T_2$).
3. **$C \to D$:** Kompresi isotermal pada suhu rendah $T_2$ (membuang kalor $Q_2$).
4. **$D \to A$:** Kompresi adiabatik (suhu naik kembali dari $T_2$ ke $T_1$).

#### Formulasi Efisiensi Mesin Carnot:
Untuk siklus Carnot berlaku relasi: $\frac{Q_2}{Q_1} = \frac{T_2}{T_1}$.
$$\eta_{\text{Carnot}} = \left(1 - \frac{T_2}{T_1}\right) \times 100\% = \left(\frac{T_1 - T_2}{T_1}\right) \times 100\%$$
* $T_1$ = suhu reservoir panas (**wajib dalam Kelvin / $\text{K}$**)
* $T_2$ = suhu reservoir dingin (**wajib dalam Kelvin / $\text{K}$**)

> [!TIP]
> **Cara Meningkatkan Efisiensi Mesin Carnot:**
> Untuk menaikkan efisiensi mesin Carnot, dapat dilakukan:
> 1. Menaikkan suhu reservoir tinggi ($T_1 \uparrow$).
> 2. Menurunkan suhu reservoir rendah ($T_2 \downarrow$).

---

### F. Mesin Pendingin (*Refrigerator*) dan Koefisien Performansi
Mesin pendingin bekerja dengan siklus terbalik: menyerap kalor dari ruang dalam bersuhu rendah ($Q_2$), menerima usaha luar dari kompresor listrik ($W$), lalu membuang kalor total ke lingkungan luar bersuhu tinggi ($Q_1 = Q_2 + W$).

#### Koefisien Performansi (Daya Guna / $K$ atau $C_p$):
$$K = \frac{Q_2}{W} = \frac{Q_2}{Q_1 - Q_2}$$
* **Koefisien Performansi Mesin Pendingin Carnot Ideal:**
  $$K_{\text{Carnot}} = \frac{T_2}{T_1 - T_2}$$
  * $T_2$ = suhu di dalam kulkas / ruang dingin ($\text{K}$)
  * $T_1$ = suhu di luar kulkas / ruang panas ($\text{K}$)
  *(Semakin kecil selisih suhu $T_1 - T_2$, koefisien performansi kulkas akan semakin tinggi dan pemakaian energi listrik semakin hemat).*

---

### G. Konsep Entropi ($S$)
Entropi adalah besaran termodinamika yang mengukur tingkat ketidakteraturan molekuler (*disorder*) atau energi yang tidak dapat lagi diubah menjadi usaha berguna.
* **Perubahan Entropi pada Proses Reversibel:**
  $$\Delta S = \int \frac{dQ}{T}$$
* **Hukum Kenaikan Entropi:**  
  Dalam setiap proses alami yang berlangsung spontan di alam semesta, **entropi total sistem terisolasi (alam semesta) selalu bertambah ($\Delta S_{\text{alam}} > 0$)**. Entropi konstan hanya tercapai pada proses reversibel ideal.

---

### H. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 15:**
> Selesaikan studi kasus termodinamika terpadu berikut ($R = 8{,}314\text{ J/mol}\cdot\text{K}$):
>
> 1. **(Proses Isobarik & Hukum I):** Sebanyak $2\text{ mol}$ gas ideal monoatomik mula-mula berada pada suhu $27^\circ\text{C}$ dan volume $V_1 = 0{,}02\text{ m}^3$ dengan tekanan konstan $P = 2 \times 10^5\text{ Pa}$. Gas kemudian dipanaskan hingga volumenya mengembang menjadi $V_2 = 0{,}05\text{ m}^3$.
>    * Hitung usaha luar ($W$) yang dilakukan oleh gas!
>    * Hitung perubahan energi dalam ($\Delta U$) gas!
>    * Hitung kalor total ($Q$) yang diserap oleh gas!
> 2. **(Analisis Siklus Tertutup):** Suatu sistem gas mengalami siklus segiempat tertutup ABCA pada grafik $P-V$ dengan koordinat:
>    $A(V_1 = 2\text{ liter}, P_1 = 1 \times 10^5\text{ Pa})$ ke $B(V_2 = 6\text{ liter}, P_1 = 1 \times 10^5\text{ Pa})$ ke $C(V_2 = 6\text{ liter}, P_2 = 4 \times 10^5\text{ Pa})$ lalu kembali ke $A$.
>    * Tentukan usaha yang dilakukan gas sepanjang proses $A \to B$!
>    * Tentukan usaha yang dilakukan gas sepanjang proses $B \to C$!
>    * Hitung usaha neto total ($W_{\text{siklus}}$) yang dihasilkan sistem dalam 1 siklus penuh!
> 3. **(Mesin Kalor Carnot):** Sebuah mesin Carnot menyerap kalor $Q_1 = 6000\text{ Joule}$ dari reservoir panas bersuhu $327^\circ\text{C}$ dan membuang sebagian kalor ke reservoir dingin bersuhu $27^\circ\text{C}$.
>    * Hitung efisiensi mesin Carnot tersebut!
>    * Tentukan besar usaha mekanik yang dihasilkan mesin Carnot dalam satu siklus!
>    * Tentukan jumlah kalor yang dibuang ke reservoir dingin ($Q_2$)!
> 4. **(Mesin Pendingin Kulkas):** Sebuah kulkas ideal bekerja di antara suhu ruang dalam $-23^\circ\text{C}$ dan suhu ruangan luar $27^\circ\text{C}$.
>    * Hitung koefisien daya guna ($K$) kulkas tersebut!
>    * Jika setiap sekon kulkas menyerap kalor $Q_2 = 500\text{ Joule}$ dari makanan di dalam kulkas, berapakah daya listrik masukan ($P_{\text{listrik}}$) yang dibutuhkan motor kompresor?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Proses Isobarik):**
  * Perubahan volume: $\Delta V = V_2 - V_1 = 0{,}05 - 0{,}02 = 0{,}03\text{ m}^3$.
  * Usaha isobarik:
    $$W = P \cdot \Delta V = (2 \times 10^5\text{ Pa})(0{,}03\text{ m}^3) = 6.000\text{ Joule}$$
  * Perubahan energi dalam gas monoatomik ($f = 3$):
    $$\Delta U = \frac{3}{2} n R \Delta T = \frac{3}{2} P \Delta V = \frac{3}{2}(6.000\text{ J}) = 9.000\text{ Joule}$$
  * Kalor yang diserap (Hukum I Termodinamika):
    $$Q = \Delta U + W = 9.000\text{ J} + 6.000\text{ J} = 15.000\text{ Joule}$$

* **Jawaban Bagian 2 (Siklus Segitiga Grafis $P-V$):**
  * Konversi volume: $1\text{ liter} = 10^{-3}\text{ m}^3$.
  * Proses $A \to B$ (Isobarik mendatar):
    $$W_{AB} = P_1 (V_2 - V_1) = (1 \times 10^5\text{ Pa})(6 - 2) \times 10^{-3}\text{ m}^3 = (10^5)(4 \times 10^{-3}) = +400\text{ Joule}$$
  * Proses $B \to C$ (Isokhorik tegak):
    $$W_{BC} = 0\text{ Joule} \quad (\text{karena volume tetap } \Delta V = 0)$$
  * Usaha siklus total $W_{\text{siklus}}$:
    Merupakan luas segitiga siklus $ABCA$:
    $$W_{\text{siklus}} = \frac{1}{2} \times \text{alas} \times \text{tinggi} = \frac{1}{2} \times (V_2 - V_1) \times (P_2 - P_1)$$
    $$W_{\text{siklus}} = \frac{1}{2} \times (4 \times 10^{-3}\text{ m}^3) \times (4 \times 10^5 - 1 \times 10^5\text{ Pa}) = \frac{1}{2} \times (4 \times 10^{-3}) \times (3 \times 10^5) = 600\text{ Joule}$$
    *(Karena arah siklus berlawanan jarum jam, bernilai negatif $-600\text{ J}$; bila searah jarum jam bernilai $+600\text{ J}$)*.

* **Jawaban Bagian 3 (Mesin Kalor Carnot):**
  * Suhu mutlak reservoir:
    $$T_1 = 327^\circ\text{C} + 273 = 600\text{ K}$$
    $$T_2 = 27^\circ\text{C} + 273 = 300\text{ K}$$
  * Efisiensi mesin Carnot:
    $$\eta = \left(1 - \frac{T_2}{T_1}\right) \times 100\% = \left(1 - \frac{300}{600}\right) \times 100\% = (1 - 0{,}5) \times 100\% = 50\%$$
  * Usaha mekanik yang dihasilkan:
    $$W = \eta \cdot Q_1 = 0{,}50 \times 6000\text{ Joule} = 3.000\text{ Joule}$$
  * Kalor yang dibuang ke reservoir dingin ($Q_2$):
    $$Q_2 = Q_1 - W = 6000\text{ J} - 3000\text{ J} = 3.000\text{ Joule}$$
    *(Atau $Q_2 = Q_1 \left(\frac{T_2}{T_1}\right) = 6000 \times \frac{300}{600} = 3000\text{ J}$)*.

* **Jawaban Bagian 4 (Mesin Pendingin Kulkas):**
  * Suhu mutlak:
    $$T_2 = -23^\circ\text{C} + 273 = 250\text{ K}$$
    $$T_1 = 27^\circ\text{C} + 273 = 300\text{ K}$$
  * Koefisien performansi Carnot:
    $$K = \frac{T_2}{T_1 - T_2} = \frac{250}{300 - 250} = \frac{250}{50} = 5$$
  * Hubungan koefisien performansi dengan usaha:
    $$K = \frac{Q_2}{W} \implies 5 = \frac{500\text{ J}}{W} \implies W = \frac{500}{5} = 100\text{ Joule}$$
  * Karena usaha ini dilakukan setiap $t = 1\text{ sekon}$:
    $$P_{\text{listrik}} = \frac{W}{t} = \frac{100\text{ J}}{1\text{ s}} = 100\text{ Watt}$$

---

### I. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Suhu Wajib Kelvin pada Efisiensi Carnot:** Jangan pernah menghitung efisiensi dengan $\frac{327 - 27}{327} = 91{,}7\%$! Itu salah besar. Rumus efisiensi $\eta = 1 - T_2/T_1$ mutlak menuntut temperatur dalam skala suhu termodinamika **Kelvin** ($\eta = 1 - 300/600 = 50\%$).
> 2. **Arah Putaran Siklus Grafis $P-V$:**
>    * Siklus yang berputar **searah jarum jam (*clockwise*)** menghasilkan usaha positif ($W > 0$) $\implies$ Bertindak sebagai **Mesin Kalor**.
>    * Siklus yang berputar **berlawanan jarum jam (*counter-clockwise*)** menghasilkan usaha negatif ($W < 0$) $\implies$ Bertindak sebagai **Mesin Pendingin**.
> 3. **Proses Isobarik vs Isokhorik pada Usaha:** Ingat bahwa gas yang dipanaskan dalam wadah tertutup kaku (volume konstan) memiliki usaha $W = 0$, sehingga seluruh kalor yang diserap dialirkan untuk menaikkan energi dalam ($Q = \Delta U$).
