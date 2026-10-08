# Bab 21: Listrik Arus Searah (DC)
**Kategori:** TKA Fisika | **Blok:** Blok 4: Listrik dan Magnet

## Bab 21: Listrik Arus Searah (DC)

---

### A. Hakikat Arus Listrik dan Model Mikroskopik Konduksi
Arus listrik searah (*Direct Current* / DC) adalah aliran muatan listrik yang mengalir secara tunak (*steady state*) dalam satu arah konstan di sepanjang rangkaian tertutup, berpindah dari titik berpotensial tinggi ke titik berpotensial lebih rendah.

#### 1. Definisi Makroskopik Kuat Arus Listrik ($I$)
Kuat arus listrik didefinisikan sebagai laju aliran netto muatan listrik yang menembus suatu penampang lintang penghantar per satuan waktu:

$$I = \frac{dQ}{dt} \quad \iff \quad I = \frac{Q}{t}$$
* $I$ = kuat arus listrik ($\text{Ampere, A}$)
* $Q$ = jumlah muatan listrik netto ($\text{Coulomb, C}$)
* $t$ = selang waktu alir ($\text{sekon, s}$)
* Karena muatan listrik terkuantisasi ($Q = N \cdot e$, dengan $e = 1{,}6 \times 10^{-19}\text{ C}$), maka jumlah elektron yang mengalir adalah:
  $$N = \frac{I \cdot t}{e}$$

#### 2. Model Mikroskopik Kecepatan Hanyut (*Drift Velocity*)
Di dalam logam konduktor, pembawa muatan bebas adalah elektron valensi. Saat medan listrik $\vec{E}$ diterapkan di dalam kawat, elektron mengalami percepatan yang diinterupsi oleh tumbukan terus-menerus dengan kisi kristal ion positif, menghasilkan laju pergerakan rata-rata yang sangat lambat disebut **kecepatan hanyut** ($v_d$):

$$I = n \cdot q \cdot v_d \cdot A = n \cdot e \cdot v_d \cdot A$$
* $n$ = kerapatan jumlah elektron bebas per satuan volume ($\text{elektron/m}^3$)
* $e$ = muatan elementer ($1{,}6 \times 10^{-19}\text{ C}$)
* $v_d$ = kecepatan hanyut elektron ($\text{m/s}$, umumnya bertaraf milimeter per detik)
* $A$ = luas penampang kawat konduktor ($\text{m}^2$)

#### 3. Rapat Arus ($J$) dan Hukum Ohm Bentuk Mikroskopik
Rapat arus adalah besar arus listrik per satuan luas penampang yang tegak lurus terhadap arah aliran:
$$J = \frac{I}{A} = n \cdot e \cdot v_d$$
Secara mikroskopik, rapat arus sebanding dengan medan listrik di dalam kawat:
$$\vec{J} = \sigma \vec{E} = \frac{\vec{E}}{\rho}$$
* $\sigma$ = konduktivitas listrik bahan ($\Omega^{-1}\cdot\text{m}^{-1}$ atau $\text{S/m}$)
* $\rho$ = hambatan jenis (resistivitas) bahan ($\Omega\cdot\text{m}$)

> [!NOTE]
> **Arah Arus Konvensional vs Aliran Elektron:**
> * **Arus Konvensional:** Mengalir dari kutub positif (potensial tinggi) ke kutub negatif (potensial rendah). Disepakati sejak zaman Benjamin Franklin dan selalu digunakan dalam analisis rangkaian listrik.
> * **Aliran Elektron Riil:** Elektron bermuatan negatif, sehingga ditarik menuju potensial tinggi (mengalir dari kutub negatif ke kutub positif).

---

### B. Hambatan Listrik ($R$) dan Hukum Ohm
Hukum Ohm menyatakan bahwa pada suhu konstan, beda potensial ($V$) antara dua ujung suatu konduktor berbanding lurus dengan kuat arus listrik ($I$) yang melaluinya.

#### 1. Persamaan Hukum Ohm
$$V = I \cdot R \quad \iff \quad I = \frac{V}{R} \quad \iff \quad R = \frac{V}{I}$$
* $V$ = beda potensial atau tegangan listrik ($\text{Volt, V}$)
* $I$ = kuat arus listrik ($\text{Ampere, A}$)
* $R$ = hambatan listrik ($\text{Ohm, } \Omega$)

#### 2. Hambatan Kawat Penghantar (Resistansi Fisik)
Hambatan suatu kawat penghantar silindris homogen bergantung pada material bahan, panjang kawat, dan luas penampangnya:

$$R = \rho \frac{L}{A} = \rho \frac{L}{\pi r^2} = \rho \frac{L}{\frac{1}{4}\pi d^2}$$
* $\rho$ = hambatan jenis kawat ($\Omega\cdot\text{m}$)
* $L$ = panjang kawat ($\text{m}$)
* $A$ = luas penampang kawat ($\text{m}^2$)
* $d$ = diameter penampang kawat ($d = 2r$)

> [!WARNING]
> **Jebakan Kawat yang Diregangkan (Volume Konstan):**
> Jika seutas kawat ditarik/diregangkan hingga panjangnya bertambah menjadi $n$ kali semula ($L' = nL$), maka penampangnya mengecil karena volumenya tetap ($V_{\text{kawat}} = A \cdot L = A' \cdot L' \implies A' = \frac{A}{n}$).
> Akibatnya, hambatannya meningkat secara **kuadratik**:
> $$R' = \rho \frac{L'}{A'} = \rho \frac{nL}{A/n} = n^2 \left(\rho \frac{L}{A}\right) = n^2 R$$
> *Contoh:* Jika kawat ditarik menjadi $2\times$ lebih panjang, hambatannya menjadi $2^2 = 4\times$ hambatan mula-mula! Jika jari-jari kawat mengecil menjadi setengahnya ($r' = \frac{1}{2}r$), hambatannya menjadi $(1/2)^{-4} = 16\times$ lipat!

#### 3. Pengaruh Perubahan Suhu terhadap Hambatan Listrik
Konduktor logam mengalami peningkatan hambatan jenis seiring naiknya temperatur akibat bertambahnya getaran kisi kristal ion:

$$R_T = R_0 \left(1 + \alpha \Delta T\right)$$
$$\rho_T = \rho_0 \left(1 + \alpha \Delta T\right)$$
* $R_0, \rho_0$ = hambatan dan resistivitas mula-mula pada suhu acuan $T_0$ (biasanya $20^\circ\text{C}$ atau $0^\circ\text{C}$)
* $R_T, \rho_T$ = hambatan dan resistivitas pada suhu akhir $T$
* $\alpha$ = koefisien suhu hambatan jenis ($\text{K}^{-1}$ atau $^\circ\text{C}^{-1}$)
* $\Delta T = T - T_0$ = perubahan suhu ($^\circ\text{C}$ atau $\text{K}$)

*(Catatan: Pada bahan semikonduktor seperti silikon dan karbon, koefisien $\alpha$ bernilai negatif, artinya hambatannya justru turun saat dipanaskan).*

---

### C. Susunan Rangkaian Resistor
Resistor dapat dirangkai untuk membagi tegangan, membagi arus, atau menghasilkan hambatan pengganti tertentu.

#### 1. Rangkaian Hambatan Seri
* **Karakteristik:** Arus yang mengalir pada setiap resistor bernilai sama; tegangan total merupakan jumlah tegangan tiap komponen.
  $$I_{\text{tot}} = I_1 = I_2 = I_3 = \dots = I_n$$
  $$V_{\text{tot}} = V_1 + V_2 + V_3 + \dots + V_n$$
* **Hambatan Pengganti Seri ($R_s$):**
  $$R_s = R_1 + R_2 + R_3 + \dots + R_n$$
* **Prinsip Pembagi Tegangan (*Voltage Divider*):**
  $$V_1 : V_2 : V_3 = R_1 : R_2 : R_3$$
  $$V_k = \left(\frac{R_k}{R_s}\right) V_{\text{tot}}$$

#### 2. Rangkaian Hambatan Paralel
* **Karakteristik:** Beda potensial pada setiap resistor bernilai identik sama; arus total merupakan penjumlahan arus di setiap cabang.
  $$V_{\text{tot}} = V_1 = V_2 = V_3 = \dots = V_n$$
  $$I_{\text{tot}} = I_1 + I_2 + I_3 + \dots + I_n$$
* **Hambatan Pengganti Paralel ($R_p$):**
  $$\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots + \frac{1}{R_n}$$
* **Formula Cepat untuk Dua Resistor Paralel:**
  $$R_p = \frac{R_1 \cdot R_2}{R_1 + R_2}$$
* **Prinsip Pembagi Arus (*Current Divider*):**
  $$I_1 : I_2 = \frac{1}{R_1} : \frac{1}{R_2} = R_2 : R_1$$
  $$I_k = \left(\frac{R_p}{R_k}\right) I_{\text{tot}}$$

#### 3. Jembatan Wheatstone
Rangkaian jembatan Wheatstone terdiri dari empat resistor ($R_1, R_2, R_3, R_4$) yang membentuk segiempat dengan galvanometer ($G$) atau resistor jembatan ($R_5$) terpasang pada diagonalnya.

```text
         B
        / \
    R1 /   \ R2
      /     \
  A ──       ── C
      \     /
    R3 \   / R4
        \ /
         D
   (Antara B dan D terpasang Galvanometer / Resistor R5)
```

* **Kondisi Seimbang:**
  Hasil kali resistor yang posisinya saling berhadapan bernilai sama:
  $$R_1 \cdot R_4 = R_2 \cdot R_3$$
  Jika kondisi ini terpenuhi, maka:
  * Potensial titik $B$ sama dengan potensial titik $D$ ($V_B = V_D \iff V_{BD} = 0$).
  * **Tidak ada arus yang mengalir melalui cabang tengah** ($I_{BD} = 0$).
  * Cabang $R_5$ dapat **dihilangkan / diputus**, sehingga analisis disederhanakan menjadi cabang atas ($R_1$ seri $R_2$) yang diparalelkan dengan cabang bawah ($R_3$ seri $R_4$).

---

### D. Sumber Tegangan (GGL), Hambatan Dalam, dan Tegangan Jepit

#### 1. Gaya Gerak Listrik ($\mathcal{E}$) vs Tegangan Jepit ($V_j$)
* **Gaya Gerak Listrik (GGL / $\mathcal{E}$):** Beda potensial antara kutub-kutub sumber tegangan ketika sumber tegangan **tidak sedang mengalirkan arus listrik** (rangkaian terbuka, $I = 0$).
* **Hambatan Dalam ($r$):** Hambatan intrinsik yang dimiliki oleh bahan kimiawi atau elektroda di dalam sumber tegangan itu sendiri.
* **Tegangan Jepit ($V_j$ atau $V_{AB}$):** Beda potensial nyata antara kutub-kutub sumber tegangan ketika sumber tersebut **sedang mengalirkan arus listrik ke rangkaian luar** (rangkaian tertutup).

#### 2. Formulasi Tegangan Jepit:
* **Saat Baterai Mengalirkan Arus Listrik (*Discharging*):**
  $$V_j = \mathcal{E} - I \cdot r$$
  $$I = \frac{\mathcal{E}}{R + r} \implies V_j = I \cdot R = \left(\frac{R}{R + r}\right) \mathcal{E}$$
* **Saat Baterai Diisi Ulang / Di-charge (*Charging*):**
  $$V_j = \mathcal{E} + I \cdot r$$

#### 3. Susunan Sumber Tegangan Listrik Identik:
Misalkan terdapat $n$ buah baterai masing-masing memiliki GGL $\mathcal{E}$ dan hambatan dalam $r$:
* **Susunan Seri ($n$ Baterai):**
  $$\mathcal{E}_{\text{tot}} = n \mathcal{E}, \quad r_{\text{tot}} = n r \implies I = \frac{n \mathcal{E}}{R + n r}$$
* **Susunan Paralel ($m$ Baterai):**
  $$\mathcal{E}_{\text{tot}} = \mathcal{E}, \quad r_{\text{tot}} = \frac{r}{m} \implies I = \frac{\mathcal{E}}{R + \frac{r}{m}}$$
* **Susunan Campuran ($m$ Cabang Paralel, Masing-masing $n$ Baterai Seri):**
  $$\mathcal{E}_{\text{tot}} = n \mathcal{E}, \quad r_{\text{tot}} = \frac{n r}{m} \implies I = \frac{n \mathcal{E}}{R + \frac{n r}{m}}$$

---

### E. Hukum-Hukum Kirchhoff

#### 1. Hukum I Kirchhoff (*Kirchhoff's Current Law* / KCL)
Berakar pada **Hukum Kekekalan Muatan Listrik**: Jumlah aljabar kuat arus listrik yang masuk ke suatu titik percabangan sama dengan jumlah kuat arus listrik yang keluar dari titik percabangan tersebut.

$$\sum I_{\text{masuk}} = \sum I_{\text{keluar}}$$

#### 2. Hukum II Kirchhoff (*Kirchhoff's Voltage Law* / KVL)
Berakar pada **Hukum Kekekalan Energi**: Dalam sebuah rangkaian tertutup (loop), jumlah aljabar gaya gerak listrik ($\mathcal{E}$) ditambah dengan jumlah penurunan tegangan ($IR$) sama dengan nol.

$$\sum \mathcal{E} + \sum (I \cdot R) = 0$$

#### 3. Prosedur dan Kaidah Tanda Rangkaian Loop:
1. **Tentukan Arah Loop:** Pilih arah putaran loop sembarang (searah jarum jam atau berlawanan jarum jam).
2. **Kaidah Tanda GGL ($\mathcal{E}$):**
   * Saat menelusuri loop, jika ujung kutub sumber tegangan yang dijumpai **pertama kali** adalah **kutub negatif (garis pendek)**, maka $\mathcal{E}$ bertanda **negatif ($-$)**.
   * Jika yang dijumpai pertama kali adalah **kutub positif (garis panjang)**, maka $\mathcal{E}$ bertanda **positif ($+$)**.
3. **Kaidah Tanda Arus dan Hambatan ($I \cdot R$):**
   * Jika arah penelusuran loop **searah** dengan arah arus pemisalan $I$, maka suku $(I \cdot R)$ bertanda **positif ($+$)**.
   * Jika arah penelusuran loop **berlawanan** dengan arah arus $I$, maka suku $(I \cdot R)$ bertanda **negatif ($-$)**.
4. **Interpretasi Hasil:** Jika perhitungan aljabar menghasilkan nilai arus $I$ bertanda negatif, artinya besar arus benar tetapi arah aliran sebenarnya berlawanan dengan arah pemisalan awal.

#### 4. Menghitung Beda Potensial Antara Dua Titik ($V_{AB}$):
Beda potensial dari titik $A$ ke titik $B$ dihitung dengan menelusuri satu lintasan dari $A$ menuju $B$:

$$V_{AB} = V_A - V_B = \sum_{A \to B} \mathcal{E} + \sum_{A \to B} (I \cdot R)$$

---

### F. Energi, Daya Listrik, dan Biaya Rekening Listrik

#### 1. Energi Listrik ($W$)
Energi yang dilepaskan oleh sumber muatan atau diserap oleh elemen rangkaian selama waktu $t$:
$$W = V \cdot I \cdot t = I^2 \cdot R \cdot t = \frac{V^2}{R} \cdot t$$
* Satuan SI: Joule ($\text{J} = \text{Watt}\cdot\text{sekon}$).
* Kesetaraan Kalor (Hukum Joule): $1\text{ kalori} \approx 4{,}186\text{ Joule} \iff 1\text{ Joule} \approx 0{,}24\text{ kalori}$.
  $$Q = \frac{W}{4{,}186} = 0{,}24 \cdot I^2 R t \quad (\text{kalori})$$

#### 2. Daya Listrik ($P$)
Laju energi listrik yang diubah menjadi bentuk energi lain per satuan waktu:
$$P = \frac{W}{t} = V \cdot I = I^2 \cdot R = \frac{V^2}{R} \quad (\text{Watt, W})$$

#### 3. Perubahan Daya Alat Listrik Terhadap Tegangan Sumber:
Sebuah peralatan listrik (seperti lampu) dengan spesifikasi nominal $(V_{\text{nom}}, P_{\text{nom}})$ memiliki hambatan intrinsik filamen yang dianggap tetap:
$$R = \frac{V_{\text{nom}}^2}{P_{\text{nom}}}$$
Jika lampu tersebut dihubungkan dengan sumber tegangan nyata $V_{\text{baru}}$ yang berbeda, maka daya disipasi nyata yang dihasilkan menjadi:
$$P_{\text{baru}} = \left(\frac{V_{\text{baru}}}{V_{\text{nom}}}\right)^2 \cdot P_{\text{nom}}$$

#### 4. Teorema Transfer Daya Maksimum:
Sebuah sumber tegangan dengan GGL $\mathcal{E}$ dan hambatan dalam $r$ akan mentransfer daya maksimum ke resistor beban luar $R_L$ jika dan hanya jika hambatan beban sama persis dengan hambatan dalam sumber:
$$R_L = r \implies P_{\max} = \frac{\mathcal{E}^2}{4r}$$

#### 5. Perhitungan Konsumsi Listrik PLN (Kilowatt-Hour / kWh):
* $1\text{ kWh} = 1000\text{ Watt} \times 3600\text{ s} = 3{,}6 \times 10^6\text{ Joule}$.
* Energi listrik terpakai:
  $$E \, (\text{kWh}) = \frac{P \, (\text{Watt}) \times t \, (\text{jam})}{1000}$$
* Total Biaya Rekening Listrik:
  $$\text{Biaya} = \sum E \, (\text{kWh}) \times \text{Tarif per kWh}$$

---

### G. Modifikasi Batas Ukur Alat Ukur Listrik Analog

#### 1. Menaikkan Batas Ukur Amperemeter (Ammeter Shunt)
Galvanometer/Amperemeter memiliki batas ukur maksimum $I_A$ dan hambatan dalam $R_A$. Untuk menaikkan batas ukurnya menjadi $I = n \cdot I_A$ (di mana kelipatan $n = \frac{I}{I_A} > 1$), dipasang **resistor shunt ($R_{\text{sh}}$)** secara **PARALEL**:

$$R_{\text{sh}} = \frac{R_A}{n - 1}$$
*Tujuan paralel:* Kelebihan arus sebesar $(n - 1)I_A$ dialirkan melewati cabang resistor shunt tanpa merusak galvanometer.

#### 2. Menaikkan Batas Ukur Voltmeter (Voltmeter Multiplier)
Voltmeter memiliki batas ukur maksimum $V_V$ dan hambatan dalam $R_V$. Untuk menaikkan batas ukurnya menjadi $V = n \cdot V_V$ (di mana kelipatan $n = \frac{V}{V_V} > 1$), dipasang **resistor pengali / multiplier ($R_m$)** secara **SERI**:

$$R_m = (n - 1) \cdot R_V$$
*Tujuan seri:* Kelebihan penurunan tegangan sebesar $(n - 1)V_V$ ditahan oleh resistor multiplier.

---

### H. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 21:**
> Sebuah laboratorium fisika merancang eksperimen rangkaian DC terintegrasi dengan data sebagai berikut:
>
> 1. **(Topik Hambatan Kawat & Suhu):** Kawat tembaga silinder memiliki panjang $L = 50\text{ m}$, diameter penampang $d = 2\text{ mm}$, hambatan jenis $\rho_0 = 1{,}7 \times 10^{-8}\ \Omega\cdot\text{m}$, dan koefisien suhu $\alpha = 4 \times 10^{-3}\ ^\circ\text{C}^{-1}$ pada suhu $20^\circ\text{C}$.
>    * a. Hitung hambatan kawat tembaga tersebut pada suhu $20^\circ\text{C}$! (Gunakan $\pi \approx 3{,}14$).
>    * b. Jika kawat dipanaskan hingga suhunya mencapai $120^\circ\text{C}$, tentukan nilai hambatan akhirnya!
>    * c. Jika kawat ditarik dan diregangkan secara homogen sehingga panjangnya menjadi 2 kali lipat panjang mula-mula dengan massa dan volume tetap, tentukan hambatannya sekarang pada suhu $20^\circ\text{C}$!
>
> 2. **(Topik Rangkaian 2-Loop Kirchhoff):** Perhatikan rangkaian listrik dua loop berikut:
>    * Cabang kiri terdiri dari sumber GGL $\mathcal{E}_1 = 16\text{ V}$, hambatan dalam $r_1 = 1\ \Omega$, dan resistor $R_1 = 3\ \Omega$.
>    * Cabang tengah terdiri dari resistor $R_2 = 6\ \Omega$ dan sumber GGL $\mathcal{E}_2 = 8\text{ V}$ (kutub positif di atas).
>    * Cabang kanan terdiri dari resistor $R_3 = 2\ \Omega$, hambatan dalam $r_3 = 1\ \Omega$, dan sumber GGL $\mathcal{E}_3 = 10\text{ V}$ (kutub positif di atas).
>    * Titik simpul atas dinamai $A$ dan titik simpul bawah dinamai $B$. Kutub positif $\mathcal{E}_1$ juga berada di atas.
>    * Tentukan kuat arus pada tiap-tiap cabang ($I_1, I_2, I_3$) dan beda potensial antara titik $A$ dan $B$ ($V_{AB}$)!
>
> 3. **(Topik Daya Listrik, Efisiensi Kalor, & Rekening Listrik):**
>    * a. Sebuah lampu pijar bertuliskan spesifikasi $100\text{ W} / 220\text{ V}$ dipasang pada tegangan jala-jala listrik PLN yang mengalami penurunan tegangan menjadi $110\text{ V}$. Hitung daya nyata yang diserap lampu tersebut!
>    * b. Sebuah pemanas air listrik berdaya $P = 500\text{ W}$ digunakan untuk memanaskan $1\text{ liter}$ air ($m = 1\text{ kg}$, kalor jenis air $c = 4200\text{ J/(kg}\cdot^\circ\text{C)}$) dari suhu $25^\circ\text{C}$ hingga mendidih $100^\circ\text{C}$. Jika efisiensi pemanas adalah $80\%$, hitung waktu yang dibutuhkan!
>    * c. Jika tarif listrik PLN adalah $\text{Rp}1.500\text{ per kWh}$, dan pemanas air tersebut digunakan selama 2 jam setiap hari selama 30 hari, hitung biaya listrik yang harus dibayarkan untuk pemanas tersebut!
>
> 4. **(Topik Modifikasi Alat Ukur):** Sebuah galvanometer memiliki hambatan dalam $R_G = 50\ \Omega$ dan simpangan skala maksimum ketika dialiri arus $I_G = 2\text{ mA}$.
>    * a. Tentukan nilai hambatan shunt yang harus dipasang agar galvanometer tersebut mampu digunakan sebagai amperemeter berkapasitas ukur $10\text{ A}$!
>    * b. Tentukan nilai hambatan pengali yang harus dipasang secara seri agar instrumen tersebut mampu mengukur tegangan hingga $100\text{ V}$!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Hambatan Kawat & Pengaruh Suhu/Regangan):**
  * **a. Hambatan pada $20^\circ\text{C}$:**
    * Jari-jari kawat: $r = \frac{d}{2} = 1\text{ mm} = 10^{-3}\text{ m}$.
    * Luas penampang: $A = \pi r^2 = 3{,}14 \times (10^{-3})^2 = 3{,}14 \times 10^{-6}\text{ m}^2$.
    * $$R_0 = \rho_0 \frac{L}{A} = \frac{1{,}7 \times 10^{-8} \times 50}{3{,}14 \times 10^{-6}} = \frac{85 \times 10^{-8}}{3{,}14 \times 10^{-6}} \approx 0{,}271\ \Omega$$
  * **b. Hambatan pada $120^\circ\text{C}$:**
    * $\Delta T = 120^\circ\text{C} - 20^\circ\text{C} = 100^\circ\text{C}$.
    * $$R_T = R_0 (1 + \alpha \Delta T) = 0{,}271 \times (1 + 4 \times 10^{-3} \times 100) = 0{,}271 \times (1 + 0{,}4) = 0{,}271 \times 1{,}4 \approx 0{,}379\ \Omega$$
  * **c. Hambatan setelah ditarik $2\times$ panjang mula-mula ($n = 2$):**
    * Karena volume kawat konstan, penampang mengecil menjadi $A' = A/2$.
    * $$R' = n^2 R_0 = 2^2 \times 0{,}271\ \Omega = 4 \times 0{,}271\ \Omega = 1{,}084\ \Omega$$

* **Jawaban Bagian 2 (Analisis Rangkaian 2-Loop):**
  * Total hambatan di masing-masing cabang:
    * Cabang kiri: $R_{\text{kiri}} = R_1 + r_1 = 3 + 1 = 4\ \Omega$, GGL $\mathcal{E}_1 = 16\text{ V}$ (kutub positif di $A$).
    * Cabang tengah: $R_{\text{tengah}} = R_2 = 6\ \Omega$, GGL $\mathcal{E}_2 = 8\text{ V}$ (kutub positif di $A$).
    * Cabang kanan: $R_{\text{kanan}} = R_3 + r_3 = 2 + 1 = 3\ \Omega$, GGL $\mathcal{E}_3 = 10\text{ V}$ (kutub positif di $A$).
  * Misalkan arus $I_1$ mengalir dari $B$ ke $A$ (cabang kiri), $I_2$ dari $A$ ke $B$ (cabang tengah), dan $I_3$ dari $B$ ke $A$ (cabang kanan).
  * Dengan Hukum I Kirchhoff pada simpul $A$:
    $$I_1 + I_3 = I_2 \implies I_1 - I_2 + I_3 = 0$$
  * Menggunakan metode potensial simpul (metode cepat): Misalkan potensial acuan $V_B = 0\text{ V}$, maka $V_A = V_{AB}$.
    * Arus dari $A$ ke $B$ pada masing-masing cabang:
      * Cabang 1: $I_{A \to B}^{(1)} = \frac{V_A - \mathcal{E}_1}{R_{\text{kiri}}} = \frac{V_{AB} - 16}{4}$
      * Cabang 2: $I_{A \to B}^{(2)} = \frac{V_A - \mathcal{E}_2}{R_{\text{tengah}}} = \frac{V_{AB} - 8}{6}$
      * Cabang 3: $I_{A \to B}^{(3)} = \frac{V_A - \mathcal{E}_3}{R_{\text{kanan}}} = \frac{V_{AB} - 10}{3}$
    * Berdasarkan Hukum I Kirchhoff di simpul $A$, jumlah arus yang keluar simpul $A$ bernilai nol:
      $$\frac{V_{AB} - 16}{4} + \frac{V_{AB} - 8}{6} + \frac{V_{AB} - 10}{3} = 0$$
    * Kalikan kedua ruas dengan KPK(4, 6, 3) = 12:
      $$3(V_{AB} - 16) + 2(V_{AB} - 8) + 4(V_{AB} - 10) = 0$$
      $$3V_{AB} - 48 + 2V_{AB} - 16 + 4V_{AB} - 40 = 0$$
      $$9V_{AB} - 104 = 0 \implies V_{AB} = \frac{104}{9} \approx 11{,}56\text{ V}$$
  * Menghitung nilai masing-masing arus:
    * Kuat arus cabang 1:
      $$I_1 = \frac{16 - V_{AB}}{4} = \frac{16 - 11{,}556}{4} = \frac{4{,}444}{4} \approx 1{,}11\text{ A} \quad (\text{mengalir naik dari } B \to A)$$
    * Kuat arus cabang 2:
      $$I_2 = \frac{V_{AB} - 8}{6} = \frac{11{,}556 - 8}{6} = \frac{3{,}556}{6} \approx 0{,}59\text{ A} \quad (\text{mengalir turun dari } A \to B)$$
    * Kuat arus cabang 3:
      $$I_3 = \frac{10 - V_{AB}}{3} = \frac{10 - 11{,}556}{3} = \frac{-1{,}556}{3} \approx -0{,}52\text{ A}$$
      *(Tanda minus berarti arus $I_3$ sesungguhnya mengalir turun dari $A \to B$ sebesar $0{,}52\text{ A}$)*.
    * Verifikasi: $I_1 \approx 1{,}11\text{ A} = I_2 + |I_3| = 0{,}59 + 0{,}52 = 1{,}11\text{ A}$ (Hukum Kirchhoff terpenuhi sempurna!).

* **Jawaban Bagian 3 (Daya, Efisiensi Kalor, & Rekening Listrik):**
  * **a. Daya Lampu saat Tegangan Turun:**
    $$P_{\text{baru}} = \left(\frac{V_{\text{baru}}}{V_{\text{nom}}}\right)^2 \times P_{\text{nom}} = \left(\frac{110}{220}\right)^2 \times 100\text{ W} = \left(\frac{1}{2}\right)^2 \times 100\text{ W} = \frac{1}{4} \times 100 = 25\text{ Watt}$$
  * **b. Waktu Memanaskan Air dengan Efisiensi:**
    * Kalor yang dibutuhkan air:
      $$Q = m \cdot c \cdot \Delta T = 1\text{ kg} \times 4200\text{ J/(kg}\cdot^\circ\text{C)} \times (100 - 25)^\circ\text{C} = 4200 \times 75 = 315.000\text{ Joule}$$
    * Daya efektif pemanas:
      $$P_{\text{efektif}} = \eta \cdot P = 0{,}80 \times 500\text{ W} = 400\text{ Watt}$$
    * Waktu yang dibutuhkan:
      $$t = \frac{Q}{P_{\text{efektif}}} = \frac{315.000\text{ J}}{400\text{ W}} = 787{,}5\text{ sekon} \approx 13\text{ menit } 7{,}5\text{ detik}$$
  * **c. Biaya Pemakaian Listrik PLN:**
    * Energi terpakai per hari:
      $$E_{\text{hari}} = \frac{500\text{ W} \times 2\text{ jam}}{1000} = 1\text{ kWh/hari}$$
    * Energi total dalam 30 hari:
      $$E_{\text{total}} = 1\text{ kWh/hari} \times 30\text{ hari} = 30\text{ kWh}$$
    * Total Biaya Listrik:
      $$\text{Biaya} = 30\text{ kWh} \times \text{Rp}1.500 = \text{Rp}45.000{,}00$$

* **Jawaban Bagian 4 (Modifikasi Batas Ukur Meter Listrik):**
  * **a. Amperemeter Shunt ($I = 10\text{ A}, I_A = 2\text{ mA} = 2 \times 10^{-3}\text{ A}$):**
    * Faktor pengali:
      $$n = \frac{I}{I_A} = \frac{10}{0{,}002} = 5000$$
    * Hambatan shunt yang dipasang paralel:
      $$R_{\text{sh}} = \frac{R_G}{n - 1} = \frac{50}{5000 - 1} = \frac{50}{4999} \approx 0{,}010002\ \Omega \approx 0{,}01\ \Omega$$
  * **b. Voltmeter Multiplier ($V = 100\text{ V}$):**
    * Batas ukur tegangan mula-mula galvanometer:
      $$V_G = I_G \cdot R_G = 0{,}002\text{ A} \times 50\ \Omega = 0{,}1\text{ Volt}$$
    * Faktor pengali tegangan:
      $$n = \frac{V}{V_G} = \frac{100}{0{,}1} = 1000$$
    * Hambatan multiplier yang dipasang seri:
      $$R_m = (n - 1) R_G = (1000 - 1) \times 50 = 999 \times 50 = 49.950\ \Omega = 49{,}95\text{ k}\Omega$$

---

### I. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Tegangan Jepit Selalu Lebih Kecil dari GGL:** Saat baterai mengalirkan arus ($V_j = \mathcal{E} - Ir$). Penurunan tegangan sebesar $Ir$ hilang di dalam baterai sebagai panas akibat hambatan dalam. Hanya saat baterai di-charge, $V_j > \mathcal{E}$.
> 2. **Kawat yang Diregangkan:** Jangan lupa bahwa volume kawat konstan! Panjang naik $n$ kali lipat menyebabkan luas mengecil $n$ kali lipat, sehingga hambatan melonjak $n^2$ kali lipat.
> 3. **Amperemeter vs Voltmeter:**
>    * Amperemeter ideal memiliki hambatan dalam **nol ($R_A = 0$)** dan wajib dipasang secara **seri**.
>    * Voltmeter ideal memiliki hambatan dalam **tak hingga ($R_V = \infty$)** dan wajib dipasang secara **paralel**.
