# Bab 13: Suhu, Pemuaian, dan Kalorimetri
**Kategori:** TKA Fisika | **Blok:** Blok 2: Fluida & Termofisika

## Bab 13: Suhu, Pemuaian, dan Kalorimetri

---

### A. Konsep Suhu dan Konversi Skala Termometer
Suhu adalah ukuran derajat panas atau dinginnya suatu benda, yang secara mikroskopis merepresentasikan energi kinetik translasi rata-rata partikel penyusun materi tersebut.

#### 1. Empat Skala Termometer Standar:
Titik tetap bawah didasarkan pada titik lebur es murni pada tekanan $1\text{ atm}$, dan titik tetap atas didasarkan pada titik didih air murni pada tekanan $1\text{ atm}$:

| Skala Termometer | Simbol | Titik Tetap Bawah (Beku) | Titik Tetap Atas (Didih) | Jumlah Skala (Rentang) | Perbandingan Skala |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Celcius** | $^\circ\text{C}$ | $0^\circ\text{C}$ | $100^\circ\text{C}$ | $100$ | **$5$** |
| **Reamur** | $^\circ\text{R}$ | $0^\circ\text{R}$ | $80^\circ\text{R}$ | $80$ | **$4$** |
| **Fahrenheit** | $^\circ\text{F}$ | $32^\circ\text{F}$ | $212^\circ\text{F}$ | $180$ | **$9$** |
| **Kelvin (SI)** | $\text{K}$ | $273\text{ K}$ | $373\text{ K}$ | $100$ | **$5$** |

* **Relasi Perbandingan Skala:**
  $$\frac{C}{5} = \frac{R}{4} = \frac{F - 32}{9} = \frac{K - 273}{5}$$

#### 2. Kalibrasi Termometer Sembarang (Skala X dan Skala Y):
Untuk mengonversi pembacaan termometer baru dengan titik beku $X_b$ dan titik didih $X_a$ terhadap termometer lain:
$$\frac{X - X_b}{X_a - X_b} = \frac{Y - Y_b}{Y_a - Y_b}$$

---

### B. Pemuaian Zat (Padat, Cair, dan Gas)
Peningkatan energi termal memperbesar getaran partikel sehingga jarak rata-rata antarpartikel merenggang, mengakibatkan pemuaian geometri bahan.

#### 1. Pemuaian Zat Padat:
* **Pemuaian Panjang:**
  $$\Delta L = L_0 \cdot \alpha \cdot \Delta T \implies L_t = L_0 (1 + \alpha \cdot \Delta T)$$
  * $L_0, L_t$ = panjang awal dan panjang akhir ($\text{m}$)
  * $\alpha$ = koefisien muai panjang ($\text{K}^{-1}$ atau $^\circ\text{C}^{-1}$)
  * $\Delta T$ = perubahan suhu ($T_t - T_0$)
* **Pemuaian Luas:**
  $$\Delta A = A_0 \cdot \beta \cdot \Delta T \implies A_t = A_0 (1 + \beta \cdot \Delta T) \quad (\beta \approx 2\alpha)$$
* **Pemuaian Volume:**
  $$\Delta V = V_0 \cdot \gamma \cdot \Delta T \implies V_t = V_0 (1 + \gamma \cdot \Delta T) \quad (\gamma \approx 3\alpha)$$

#### 2. Keping Bimetal:
Dua keping logam dengan koefisien muai panjang berbeda ($\alpha_1 \neq \alpha_2$) yang dikeling menjadi satu:
* Saat **dipanaskan**: Melengkung ke arah logam yang memiliki **$\alpha$ lebih kecil**.
* Saat **didinginkan**: Melengkung ke arah logam yang memiliki **$\alpha$ lebih besar**.
* Aplikasi: Sakelar otomatis termostat setrika listrik, alarm bahaya kebakaran.

#### 3. Anomali Air:
Sifat perkecualian air pada rentang suhu $0^\circ\text{C}$ sampai $4^\circ\text{C}$. Ketika dipanaskan dari $0^\circ\text{C}$ hingga $4^\circ\text{C}$, volume air justru **menyusut** dan massa jenisnya bertambah.
* **Massa jenis maksimum air** tercapai pada suhu **$4^\circ\text{C}$** ($\rho_{\max} = 1000\text{ kg/m}^3$).
* *Manfaat Ekologis:* Dasar danau di daerah kutub tidak membeku seluruhnya sehingga biota air tetap bertahan hidup di bawah lapisan es.

---

### C. Kalor dan Perubahan Wujud Zat

#### 1. Kalor untuk Perubahan Suhu (Kalor Sensibel):
$$Q = m \cdot c \cdot \Delta T = C \cdot \Delta T$$
* $Q$ = jumlah kalor yang diserap atau dilepas (Joule atau kalori; $1\text{ kal} = 4{,}184\text{ J} \approx 4{,}2\text{ J}$)
* $m$ = massa zat ($\text{kg}$)
* $c$ = kalor jenis zat ($\text{J/kg}\cdot\text{K}$ atau $\text{kal/g}\cdot^\circ\text{C}$)
* $C = m \cdot c$ = kapasitas kalor benda ($\text{J/K}$)

#### 2. Kalor Laten untuk Perubahan Wujud Zat:
Selama proses perubahan wujud zat berlangsung, **suhu zat tidak berubah (konstan)** meskipun terus diberi atau dilepas kalor:
$$Q = m \cdot L$$
* **Melebur / Membeku:** $Q = m \cdot L_f$ ($L_f$ = kalor lebur es $\approx 336.000\text{ J/kg} = 80\text{ kal/g}$)
* **Menguap / Mengembun:** $Q = m \cdot L_v$ ($L_v$ = kalor uap air $\approx 2{,}26 \times 10^6\text{ J/kg} = 540\text{ kal/g}$)

#### 3. Diagram Grafik Pemanasan Es Menjadi Uap:
```text
  Suhu (°C) ▲
            │                     (5) Uap dipanaskan: Q_5 = m c_uap ΔT
        100 ┼──────────────/────── 
            │   (3) Air   / (4) Mendidih/Menguap: Q_4 = m L_v (Suhu tetap 100°C)
            │   naik     /
            │   suhu    /
          0 ┼──/───────┘  (2) Es melebur: Q_2 = m L_f (Suhu tetap 0°C)
            │ / (1) Es naik suhu: Q_1 = m c_es ΔT
        -T0 ┼┘
            └────────────────────────► Kalor Diserap (Q)
```

---

### D. Asas Black (Hukum Kekekalan Kalor)
*"Pada percampuran dua zat terisolasi dalam kalorimeter, jumlah kalor yang dilepaskan oleh zat yang bersuhu lebih tinggi sama dengan jumlah kalor yang diserap oleh zat yang bersuhu lebih rendah."*

$$Q_{\text{lepas}} = Q_{\text{terima}}$$
$$m_1 \cdot c_1 \cdot (T_1 - T_c) = m_2 \cdot c_2 \cdot (T_c - T_2)$$
* $T_1$ = suhu awal zat panas
* $T_2$ = suhu awal zat dingin
* $T_c$ = suhu akhir kesetimbangan termal campuran ($T_2 < T_c < T_1$)

---

### E. Tiga Mekanisme Perpindahan Kalor

#### 1. Konduksi (Hantaran Tanpa Perpindahan Partikel):
Perambatan kalor melalui tumbukan antar-partikel zat padat:
$$H = \frac{Q}{t} = \frac{k \cdot A \cdot \Delta T}{L}$$
* $H$ = laju aliran kalor konduksi ($\text{J/s} = \text{Watt}$)
* $k$ = konduktivitas termal bahan ($\text{W/m}\cdot\text{K}$)
* $A$ = luas penampang konduktor ($\text{m}^2$)
* $L$ = panjang / ketebalan batang konduktor ($\text{m}$)
* $\Delta T = T_{\text{panas}} - T_{\text{dingin}}$ = beda suhu kedua ujung

* **Suhu Sambungan Dua Batang Logam ($T_s$):**
  Laju kalor batang 1 sama dengan laju kalor batang 2 ($H_1 = H_2$):
  $$\frac{k_1 A_1 (T_1 - T_s)}{L_1} = \frac{k_2 A_2 (T_s - T_2)}{L_2}$$

#### 2. Konveksi (Aliran Disertai Perpindahan Partikel):
Perpindahan kalor yang terbawa oleh pergerakan fisik fluida (cair/gas):
$$H = \frac{Q}{t} = h \cdot A \cdot \Delta T$$
* $h$ = koefisien konveksi fluida ($\text{W/m}^2\cdot\text{K}$)

#### 3. Radiasi (Pancaran Gelombang Elektromagnetik):
Pancaran kalor berupa foton inframerah yang dapat merambat melalui ruang hampa tanpa memerlukan medium (Hukum Stefan-Boltzmann):
$$P = \frac{Q}{t} = e \cdot \sigma \cdot A \cdot T^4$$
* $P$ = daya radiasi kalor ($\text{Watt}$)
* $e$ = emisivitas permukaan ($0 \le e \le 1$; untuk benda hitam sempurna $e = 1$)
* $\sigma$ = konstanta Stefan-Boltzmann ($5{,}67 \times 10^{-8}\text{ W/m}^2\text{K}^4$)
* $T$ = **suhu mutlak permukaan (wajib dalam Kelvin / $\text{K}$)**
* **Laju Radiasi Kalor Neto ke Lingkungan Bersuhu $T_0$:**
  $$P_{\text{neto}} = e \sigma A (T^4 - T_0^4)$$

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 13:**
> Selesaikan rangkaian studi kasus termofisika berikut ($c_{\text{air}} = 4200\text{ J/kg}\cdot^\circ\text{C}$, $c_{\text{es}} = 2100\text{ J/kg}\cdot^\circ\text{C}$, $L_f = 336.000\text{ J/kg}$):
>
> 1. **(Kalibrasi Termometer Skala X):** Sebuah termometer X memiliki titik beku es $-20^\circ\text{X}$ dan titik didih air $140^\circ\text{X}$. Jika termometer Celcius menunjukkan suhu $40^\circ\text{C}$, berapakah suhu yang ditunjukkan oleh termometer X?
> 2. **(Pemuaian Panjang):** Sebatang rel baja memiliki panjang awal $L_0 = 20\text{ meter}$ pada suhu $20^\circ\text{C}$. Koefisien muai panjang baja $\alpha = 1{,}1 \times 10^{-5}\ ^\circ\text{C}^{-1}$. Berapakah pertambahan panjang rel baja saat suhunya melonjak menjadi $50^\circ\text{C}$ di terik siang hari?
> 3. **(Asas Black Peleburan Es):** Sebongkah es bermassa $m_{\text{es}} = 200\text{ gram}$ pada suhu $-10^\circ\text{C}$ dimasukkan ke dalam bejana berisi air hangat bermassa $m_{\text{air}} = 400\text{ gram}$ bersuhu $60^\circ\text{C}$. Jika wadah kalorimeter dianggap tidak menyerap kalor:
>    * Hitung kalor yang dibutuhkan untuk menaikkan suhu es dari $-10^\circ\text{C}$ ke $0^\circ\text{C}$!
>    * Hitung kalor yang dibutuhkan untuk meleburkan seluruh es menjadi air pada $0^\circ\text{C}$!
>    * Tentukan suhu akhir kesetimbangan termal campuran ($T_c$)!
> 4. **(Konduksi Suhu Sambungan):** Dua batang logam A dan B memiliki ukuran luas penampang dan panjang yang sama persis ($A_A = A_B$ dan $L_A = L_B$). Batang A memiliki konduktivitas termal dua kali batang B ($k_A = 2 k_B$). Ujung bebas logam A bersuhu $100^\circ\text{C}$ dan ujung bebas logam B bersuhu $25^\circ\text{C}$. Tentukan suhu pada bidang sambungan kedua logam tersebut!
> 5. **(Radiasi Termal):** Sebuah bola logam berpermukaan hitam sempurna ($e = 1$) memiliki luas permukaan $A = 0{,}02\text{ m}^2$ dipanaskan hingga suhunya mencapai $227^\circ\text{C}$. Hitung daya radiasi kalor yang dipancarkan oleh bola logam tersebut ($\sigma = 5{,}67 \times 10^{-8}\text{ W/m}^2\text{K}^4$)!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Termometer Skala X):**
  * $X_b = -20^\circ\text{X}$, $X_a = 140^\circ\text{X}$. $C = 40^\circ\text{C}$.
  * Hubungan kalibrasi:
    $$\frac{X - X_b}{X_a - X_b} = \frac{C - 0}{100 - 0} \implies \frac{X - (-20)}{140 - (-20)} = \frac{40}{100}$$
    $$\frac{X + 20}{160} = \frac{2}{5} \implies 5(X + 20) = 320 \implies X + 20 = 64 \implies X = 44^\circ\text{X}$$

* **Jawaban Bagian 2 (Pemuaian Panjang Rel):**
  * $\Delta T = 50^\circ\text{C} - 20^\circ\text{C} = 30^\circ\text{C}$.
  * Pertambahan panjang:
    $$\Delta L = L_0 \cdot \alpha \cdot \Delta T = (20\text{ m})(1{,}1 \times 10^{-5}\ ^\circ\text{C}^{-1})(30^\circ\text{C}) = 6{,}6 \times 10^{-3}\text{ m} = 6{,}6\text{ mm}$$

* **Jawaban Bagian 3 (Asas Black Peleburan Es):**
  * $m_{\text{es}} = 0{,}2\text{ kg}$, $m_{\text{air}} = 0{,}4\text{ kg}$.
  * **Tahap 1:** Kalor menaikkan es dari $-10^\circ\text{C}$ ke $0^\circ\text{C}$:
    $$Q_1 = m_{\text{es}} c_{\text{es}} \Delta T = (0{,}2)(2100)(10) = 4.200\text{ Joule}$$
  * **Tahap 2:** Kalor meleburkan seluruh es pada $0^\circ\text{C}$:
    $$Q_2 = m_{\text{es}} L_f = (0{,}2)(336.000) = 67.200\text{ Joule}$$
    *Total kalor dibutuhkan agar es menjadi air $0^\circ\text{C}$: $Q_{\text{butuh}} = 4.200 + 67.200 = 71.400\text{ Joule}$.*
  * **Tahap 3:** Maksimum kalor yang bisa dilepaskan air hangat dingin ke $0^\circ\text{C}$:
    $$Q_{\text{lepas,max}} = m_{\text{air}} c_{\text{air}} (60 - 0) = (0{,}4)(4200)(60) = 100.800\text{ Joule}$$
    Karena $Q_{\text{lepas,max}} > Q_{\text{butuh}}$ ($100.800\text{ J} > 71.400\text{ J}$), maka **seluruh es melebur sempurna** dan suhu akhir campuran berada di atas $0^\circ\text{C}$ ($T_c > 0^\circ\text{C}$).
  * Menghitung suhu akhir $T_c$:
    $$Q_{\text{lepas}} = Q_{\text{terima}}$$
    $$m_{\text{air}} c_{\text{air}} (60 - T_c) = Q_1 + Q_2 + m_{\text{es}} c_{\text{air}} (T_c - 0)$$
    $$(0{,}4)(4200)(60 - T_c) = 71.400 + (0{,}2)(4200) T_c$$
    $$1680 (60 - T_c) = 71.400 + 840 T_c$$
    $$100.800 - 1680 T_c = 71.400 + 840 T_c$$
    $$100.800 - 71.400 = 2520 T_c \implies 29.400 = 2520 T_c \implies T_c = \frac{29.400}{2520} \approx 11{,}67^\circ\text{C}$$

* **Jawaban Bagian 4 (Suhu Sambungan Dua Logam):**
  * $H_A = H_B$ dengan $A_A = A_B$ dan $L_A = L_B$:
    $$k_A (100 - T_s) = k_B (T_s - 25)$$
    Karena $k_A = 2 k_B$:
    $$2 k_B (100 - T_s) = k_B (T_s - 25) \implies 2(100 - T_s) = T_s - 25$$
    $$200 - 2T_s = T_s - 25 \implies 3T_s = 225 \implies T_s = 75^\circ\text{C}$$

* **Jawaban Bagian 5 (Daya Radiasi Termal Stefan-Boltzmann):**
  * Konversi suhu mutlak ke Kelvin:
    $$T = 227^\circ\text{C} + 273 = 500\text{ K}$$
  * Menghitung daya radiasi:
    $$P = e \cdot \sigma \cdot A \cdot T^4 = (1)(5{,}67 \times 10^{-8})(0{,}02)(500)^4$$
    $$(500)^4 = 625 \times 10^8$$
    $$P = (5{,}67 \times 10^{-8})(0{,}02)(625 \times 10^8) = 5{,}67 \times 0{,}02 \times 625 = 5{,}67 \times 12{,}5 = 70{,}875\text{ Watt}$$

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Suhu Wajib Kelvin pada Radiasi:** Pada perhitungan radiasi Stefan-Boltzmann ($P = e\sigma AT^4$), suhu mutlak $T$ **wajib dikonversi ke Kelvin**. Kesalahan paling sering siswa adalah memasukkan angka suhu dalam Celcius!
> 2. **Suhu Tetap Saat Perubahan Wujud:** Pada saat es melebur atau air mendidih, suhu sistem **sama sekali tidak naik**. Jangan menggunakan rumus $Q = mc\Delta T$ saat fasa zat sedang bertransisi, gunakan $Q = mL$.
> 3. **Uji Asas Black Terlebih Dahulu:** Pada soal percampuran es dan air hangat, selalu periksa terlebih dahulu apakah kalor dari air hangat cukup untuk meleburkan seluruh es. Jika kalor tidak cukup ($Q_{\text{lepas,max}} < Q_{\text{butuh}}$), suhu akhir pasti tepat $0^\circ\text{C}$ dan es hanya melebur sebagian!
