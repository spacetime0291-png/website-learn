# Bab 24: Rangkaian Arus Bolak-Balik (AC)
**Kategori:** TKA Fisika | **Blok:** Blok 4: Listrik dan Magnet

## Bab 24: Rangkaian Arus Bolak-Balik (AC)

---

### A. Karakteristik Arus dan Tegangan Sinusoidal
Arus bolak-balik (*Alternating Current* / AC) adalah arus listrik yang arah dan besarnya berubah-ubah secara periodik terhadap waktu, umumnya mengikuti pola fungsi gelombang sinus atau kosinus.

#### 1. Persamaan Sesaat Tegangan dan Kuat Arus:
$$V(t) = V_{\max} \sin(\omega t + \theta_V)$$
$$I(t) = I_{\max} \sin(\omega t + \theta_I)$$
* $V(t), I(t)$ = tegangan dan kuat arus sesaat pada waktu $t$ ($\text{Volt}$ dan $\text{Ampere}$)
* $V_{\max}, I_{\max}$ = tegangan puncak (maksimum) dan arus puncak (maksimum)
* $\omega$ = frekuensi sudut (kecepatan sudut) putaran generator ($\text{rad/s}$):
  $$\omega = 2\pi f = \frac{2\pi}{T}$$
* $f$ = frekuensi gelombang ($\text{Hertz, Hz}$), $T$ = periode getaran ($\text{sekon, s}$)
* Tegangan Puncak ke Puncak (*Peak-to-Peak*):
  $$V_{pp} = 2 V_{\max} \quad \text{dan} \quad I_{pp} = 2 I_{\max}$$

#### 2. Nilai Efektif (*Root Mean Square* / RMS):
Nilai efektif tegangan atau arus bolak-balik adalah nilai yang setara dengan arus/tegangan searah (DC) yang menghasilkan laju kalor disipasi yang sama persis pada resistor yang identik.

$$V_{\text{ef}} = V_{\text{rms}} = \frac{V_{\max}}{\sqrt{2}} \approx 0{,}707 \cdot V_{\max}$$
$$I_{\text{ef}} = I_{\text{rms}} = \frac{I_{\max}}{\sqrt{2}} \approx 0{,}707 \cdot I_{\max}$$

> [!IMPORTANT]
> **Aturan Pembacaan Alat Ukur Listrik:**
> * Alat ukur penunjuk analog maupun digital standar (Voltmeter AC dan Amperemeter AC) **SELALU mengukur dan menampilkan NILAI EFEKTIF ($V_{\text{ef}}, I_{\text{ef}}$)**.
> * Nilai tegangan jala-jala listrik PLN di rumah ($220\text{ Volt}$) adalah **tegangan efektif**, sehingga tegangan puncaknya sesungguhnya adalah:
>   $$V_{\max} = V_{\text{ef}} \sqrt{2} = 220\sqrt{2} \approx 311{,}1\text{ Volt}$$
> * Osiloskop (*Cathode Ray Oscilloscope* / CRO) adalah instrumen grafis yang mengukur **nilai maksimum ($V_{\max}$)** dan **puncak ke puncak ($V_{pp}$)**.

#### 3. Nilai Rata-rata (*Average Value* untuk Setengah Siklus Positif):
$$V_{\text{rt}} = \frac{2 V_{\max}}{\pi} \approx 0{,}637 \cdot V_{\max} \quad \text{dan} \quad I_{\text{rt}} = \frac{2 I_{\max}}{\pi} \approx 0{,}637 \cdot I_{\max}$$

---

### B. Rangkaian Murni Resistor, Induktor, dan Kapasitor

#### 1. Rangkaian Resistor Murni ($R$):
Ketika resistor murni dihubungkan ke sumber tegangan AC:
* Tegangan dan kuat arus berada dalam keadaan **sefase** (beda sudut fase $\Delta \phi = 0^\circ$).
* Jika $V(t) = V_{\max} \sin(\omega t)$, maka $I(t) = I_{\max} \sin(\omega t)$.
* Hambatan murni: $R$ ($\Omega$).
* Hubungan Hukum Ohm:
  $$V_R = I \cdot R \quad \iff \quad V_{R,\max} = I_{\max} \cdot R$$

#### 2. Rangkaian Induktor Murni ($L$):
Ketika induktor murni berinduktansi $L$ dihubungkan ke sumber AC, induktor menghasilkan GGL lawan yang menahan arus:
* Tegangan **mendahului** kuat arus sebesar $90^\circ$ ($\frac{\pi}{2}\text{ rad}$), atau kuat arus **tertinggal** dari tegangan sebesar $90^\circ$.
* Jika $I(t) = I_{\max} \sin(\omega t)$, maka $V_L(t) = V_{\max} \sin(\omega t + 90^\circ)$.
* **Reaktansi Induktif ($X_L$):** Ukuran hambatan induktor terhadap arus bolak-balik:
  $$X_L = \omega L = 2\pi f L \quad (\text{Ohm, } \Omega)$$
* Hubungan Hukum Ohm:
  $$V_L = I \cdot X_L \quad \iff \quad V_{L,\max} = I_{\max} \cdot X_L$$

#### 3. Rangkaian Kapasitor Murni ($C$):
Ketika kapasitor murni berkapasitansi $C$ dihubungkan ke sumber AC:
* Kuat arus **mendahului** tegangan sebesar $90^\circ$ ($\frac{\pi}{2}\text{ rad}$), atau tegangan **tertinggal** dari kuat arus sebesar $90^\circ$.
* Jika $I(t) = I_{\max} \sin(\omega t)$, maka $V_C(t) = V_{\max} \sin(\omega t - 90^\circ)$.
* **Reaktansi Kapasitif ($X_C$):** Ukuran hambatan kapasitor terhadap arus bolak-balik:
  $$X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C} \quad (\text{Ohm, } \Omega)$$
* Hubungan Hukum Ohm:
  $$V_C = I \cdot X_C \quad \iff \quad V_{C,\max} = I_{\max} \cdot X_C$$

> [!TIP]
> **Jembatan Keledai Hubungan Fase (CIVIL):**
> * Pada Kapasitor (**C**): Arus (**I**) mendahului Tegangan (**V**) $\implies$ **C - I - V**
> * Pada Induktor (**L**): Tegangan (**V**) mendahului Arus (**I**) $\implies$ **V - I - L**

---

### C. Rangkaian R-L-C Seri
Rangkaian yang menghubungkan resistor ($R$), induktor ($L$), dan kapasitor ($C$) secara seri pada sumber tegangan bolak-balik sinusoidal $V(t) = V_{\max} \sin(\omega t)$.

```text
       ┌──────[ R ]──────[ L ]──────[ C ]──────┐
       │                                       │
       └───────────────( ~ V )─────────────────┘
```

#### 1. Diagram Fasor dan Tegangan Total Rangkaian:
Karena dirangkai seri, kuat arus di setiap komponen bernilai sama ($I_{\text{tot}} = I_R = I_L = I_C$) dan dijadikan sumbu acuan horizontal (sumbu-$x$).
* Vektor $V_R$ searah sumbu-$x$ positif.
* Vektor $V_L$ mengarah ke sumbu-$y$ positif (tegangan mendahului arus $90^\circ$).
* Vektor $V_C$ mengarah ke sumbu-$y$ negatif (tegangan tertinggal arus $90^\circ$).

Beda potensial total sumber adalah penjumlahan vektor (bukan aljabar skalar):
$$V = \sqrt{V_R^2 + (V_L - V_C)^2}$$

> [!WARNING]
> **Jebakan Penjumlahan Tegangan AC:**
> Nilai $V_{\text{sumber}} \neq V_R + V_L + V_C$! Menjumlahkan tegangan komponen AC secara skalar langsung adalah kesalahan fatal karena adanya perbedaan sudut fase antar-komponen!

#### 2. Impedansi Total Rangkaian ($Z$):
Impedansi adalah total seluruh hambatan fisis efektif gabungan antara hambatan murni dan reaktansi dalam rangkaian arus bolak-balik:

$$Z = \sqrt{R^2 + (X_L - X_C)^2} \quad (\text{Ohm, } \Omega)$$
* Hukum Ohm Total Rangkaian AC:
  $$V_{\text{ef}} = I_{\text{ef}} \cdot Z \quad \iff \quad V_{\max} = I_{\max} \cdot Z$$

#### 3. Beda Sudut Fase ($\phi$):
Sudut kemiringan vektor tegangan terhadap vektor arus:
$$\tan\phi = \frac{V_L - V_C}{V_R} = \frac{X_L - X_C}{R}$$
$$\cos\phi = \frac{V_R}{V} = \frac{R}{Z}$$

#### 4. Tiga Sifat Rangkaian R-L-C Seri:
1. **Rangkaian Bersifat Induktif ($X_L > X_C$ atau $V_L > V_C$):**
   * $\tan\phi > 0 \implies$ Sudut fase $\phi$ positif.
   * **Tegangan mendahului arus** sebesar beda sudut fase $\phi$.
   * Rangkaian didominasi oleh sifat induktor.
2. **Rangkaian Bersifat Kapasitif ($X_C > X_L$ atau $V_C > V_L$):**
   * $\tan\phi < 0 \implies$ Sudut fase $\phi$ negatif.
   * **Kuat arus mendahului tegangan** sebesar sudut $|\phi|$.
   * Rangkaian didominasi oleh sifat kapasitor.
3. **Rangkaian Bersifat Resistif Murni (Kondisi Resonansi):**
   * Terjadi ketika $X_L = X_C \implies V_L = V_C$.
   * $\tan\phi = 0 \implies \phi = 0^\circ$ (Tegangan dan kuat arus berada dalam keadaan **sefase**).

---

### D. Resonansi pada Rangkaian R-L-C Seri
Resonansi listrik terjadi ketika reaktansi induktif tepat sama besar dengan reaktansi kapasitif ($X_L = X_C$), sehingga keduanya saling meniadakan secara vektor.

#### 1. Frekuensi Resonansi:
$$X_L = X_C \iff \omega L = \frac{1}{\omega C} \implies \omega^2 = \frac{1}{LC}$$
* **Frekuensi Sudut Resonansi ($\omega_r$):**
  $$\omega_r = \frac{1}{\sqrt{LC}} \quad (\text{rad/s})$$
* **Frekuensi Alami Resonansi ($f_r$):**
  $$f_r = \frac{1}{2\pi \sqrt{LC}} \quad (\text{Hz})$$

#### 2. Karakteristik Fisik Saat Terjadi Resonansi:
1. **Impedansi Mencapai Nilai Minimum Mutlak:**
   $$Z_{\min} = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + 0} = R$$
2. **Kuat Arus Mencapai Nilai Maksimum Mutlak:**
   $$I_{\max} = \frac{V}{Z_{\min}} = \frac{V}{R}$$
3. **Tegangan Induktor dan Kapasitor Saling Menghilangkan:**
   $$V_L = V_C \implies V = V_R$$
4. **Beda Sudut Fase Nol ($\phi = 0^\circ$):** Faktor daya mencapai nilai maksimum yaitu $\cos\phi = 1$.
5. **Aplikasi Nyata:** Rangkaian penala gelombang (*tuner*) radio dan televisi. Dengan memutar kapasitor variabel ($C$), frekuensi resonansi rangkaian disamakan dengan frekuensi gelombang stasiun pemancar yang ingin ditangkap.

---

### E. Daya pada Rangkaian Arus Bolak-Balik

#### 1. Daya Nyata / Disipasi Aktif Rata-rata ($P$):
Daya rata-rata yang benar-benar diserap dan diubah menjadi energi bentuk lain (panas, cahaya, mekanik):
$$P = V_{\text{ef}} \cdot I_{\text{ef}} \cdot \cos\phi = I_{\text{ef}}^2 \cdot R = \frac{V_{\text{ef}}^2}{Z} \cos\phi \quad (\text{Watt, W})$$
* *Prinsip Fisis:* Hanya resistor yang menyerap daya nyata. Induktor murni dan kapasitor murni **tidak menyerap daya rata-rata sama sekali** ($P = 0$) selama satu siklus penuh karena energi hanya disimpan sementara lalu dikembalikan ke sumber.

#### 2. Daya Semu ($S$):
Hasil kali langsung tegangan efektif dan arus efektif tanpa memperhitungkan sudut fase:
$$S = V_{\text{ef}} \cdot I_{\text{ef}} \quad (\text{Volt-Ampere, VA})$$

#### 3. Faktor Daya (*Power Factor*):
Perbandingan antara daya nyata terhadap daya semu:
$$\text{Faktor Daya} = \cos\phi = \frac{P}{S} = \frac{R}{Z} = \frac{V_R}{V} \quad (0 \le \cos\phi \le 1)$$
* Nilai faktor daya ideal adalah $\cos\phi = 1$ (beban resistif murni / resonansi), di mana seluruh arus yang dialirkan termanfaatkan menjadi kerja berguna tanpa pemborosan arus semu.

---

### F. Pengukuran Gelombang dengan Osiloskop (CRO)
Osiloskop menampilkan grafik tegangan terhadap waktu ($V-t$) pada layar berskala kotak (*div* / divisi).

#### 1. Mengukur Tegangan Puncak ($V_{\max}$):
$$V_{pp} = y_{\text{div}} \times (\text{Pengali Volt/div})$$
$$V_{\max} = \frac{V_{pp}}{2}$$
* $y_{\text{div}}$ = jumlah kotak vertikal dari puncak tertinggi ke lembah terendah.

#### 2. Mengukur Periode ($T$) dan Frekuensi ($f$):
$$T = x_{\text{div}} \times (\text{Pengali Time/div})$$
$$f = \frac{1}{T}$$
* $x_{\text{div}}$ = jumlah kotak horizontal untuk membentuk satu gelombang penuh (1 bukit + 1 lembah).

---

### G. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 24:**
> Sebuah rangkaian R-L-C seri dihubungkan dengan sumber tegangan bolak-balik sinusoidal. Data rangkaian tertera sebagai berikut:
> * Resistor berhambatan murni $R = 80\ \Omega$.
> * Induktor memiliki induktansi diri $L = 0{,}6\text{ Henry}$.
> * Kapasitor memiliki kapasitas $C = 25\ \mu\text{F} = 25 \times 10^{-6}\text{ Farad}$.
> * Sumber tegangan bolak-balik memiliki persamaan sesaat:
>   $$V(t) = 200\sqrt{2} \sin(100t)\text{ Volt}$$
>
> 1. **(Topik Karakteristik Gelombang Sumber):**
>    * a. Tentukan tegangan maksimum ($V_{\max}$), tegangan efektif ($V_{\text{ef}}$), dan tegangan puncak-ke-puncak ($V_{pp}$)!
>    * b. Tentukan frekuensi sudut ($\omega$), frekuensi getaran ($f$), dan periode gelombang ($T$)!
>
> 2. **(Topik Reaktansi & Impedansi Rangkaian):**
>    * a. Hitung reaktansi induktif ($X_L$) dari induktor!
>    * b. Hitung reaktansi kapasitif ($X_C$) dari kapasitor!
>    * c. Hitung impedansi total rangkaian ($Z$)!
>
> 3. **(Topik Kuat Arus & Beda Tegangan Komponen):**
>    * a. Hitung kuat arus efektif ($I_{\text{ef}}$) dan kuat arus maksimum ($I_{\max}$) yang mengalir dalam rangkaian!
>    * b. Hitung tegangan efektif pada masing-masing komponen: resistor ($V_R$), induktor ($V_L$), dan kapasitor ($V_C$)!
>    * c. Buktikan bahwa tegangan sumber dapat diperoleh kembali dari hubungan fasor $V_R, V_L, V_C$!
>
> 4. **(Topik Sudut Fase, Sifat Rangkaian, & Daya Listrik):**
>    * a. Hitung beda sudut fase ($\phi$) antara tegangan dan arus, serta tentukan apakah rangkaian bersifat induktif, kapasitif, atau resistif!
>    * b. Tentukan persamaan sesaat kuat arus $I(t)$ terhadap waktu!
>    * c. Hitung faktor daya ($\cos\phi$) dan daya disipasi rata-rata ($P$) yang diserap rangkaian!
>
> 5. **(Topik Resonansi AC):**
>    * a. Tentukan frekuensi sudut resonansi ($\omega_r$) dan frekuensi alami resonansi ($f_r$) dari rangkaian R-L-C tersebut!
>    * b. Jika frekuensi sumber diubah tepat menyamai frekuensi resonansi, hitung besar impedansi dan kuat arus efektif rangkaian sekarang!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Parameter Sumber Sinusoidal):**
  * Dari persamaan $V(t) = 200\sqrt{2} \sin(100t)\text{ Volt}$:
  * **a. Nilai-nilai Tegangan:**
    * Tegangan maksimum: $V_{\max} = 200\sqrt{2}\text{ Volt} \approx 282{,}84\text{ V}$.
    * Tegangan efektif:
      $$V_{\text{ef}} = \frac{V_{\max}}{\sqrt{2}} = \frac{200\sqrt{2}}{\sqrt{2}} = 200\text{ Volt}$$
    * Tegangan puncak ke puncak:
      $$V_{pp} = 2 V_{\max} = 2 \times 200\sqrt{2} = 400\sqrt{2}\text{ Volt} \approx 565{,}69\text{ V}$$
  * **b. Karakteristik Frekuensi dan Waktu:**
    * Frekuensi sudut: $\omega = 100\text{ rad/s}$.
    * Frekuensi alami:
      $$f = \frac{\omega}{2\pi} = \frac{100}{2\pi} = \frac{50}{\pi}\text{ Hz} \approx 15{,}92\text{ Hz}$$
    * Periode:
      $$T = \frac{1}{f} = \frac{\pi}{50}\text{ sekon} \approx 0{,}0628\text{ sekon}$$

* **Jawaban Bagian 2 (Reaktansi & Impedansi):**
  * **a. Reaktansi Induktif ($X_L$):**
    $$X_L = \omega L = 100\text{ rad/s} \times 0{,}6\text{ H} = 60\ \Omega$$
  * **b. Reaktansi Kapasitif ($X_C$):**
    $$X_C = \frac{1}{\omega C} = \frac{1}{100 \times (25 \times 10^{-6}\text{ F})} = \frac{1}{25 \times 10^{-4}} = \frac{10.000}{25} = 400\ \Omega$$
  * **c. Impedansi Total Rangkaian ($Z$):**
    $$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{80^2 + (60 - 400)^2} = \sqrt{80^2 + (-340)^2}$$
    $$Z = \sqrt{6400 + 115.600} = \sqrt{122.000} = \sqrt{100 \times 1220} = 10\sqrt{1220} \approx 349{,}28\ \Omega$$
    *(Catatan: Agar perhitungan fraksional lebih elegan pada sub-soal berikutnya, simpan nilai $Z \approx 349{,}28\ \Omega$)*.

* **Jawaban Bagian 3 (Kuat Arus & Tegangan Tiap Elemen):**
  * **a. Kuat Arus:**
    * Arus efektif:
      $$I_{\text{ef}} = \frac{V_{\text{ef}}}{Z} = \frac{200\text{ V}}{349{,}28\ \Omega} \approx 0{,}5726\text{ Ampere}$$
    * Arus maksimum:
      $$I_{\max} = I_{\text{ef}} \sqrt{2} \approx 0{,}5726 \times 1{,}4142 \approx 0{,}81\text{ Ampere}$$
  * **b. Tegangan Efektif Komponen:**
    * Tegangan pada resistor:
      $$V_R = I_{\text{ef}} \cdot R = 0{,}5726\text{ A} \times 80\ \Omega \approx 45{,}81\text{ Volt}$$
    * Tegangan pada induktor:
      $$V_L = I_{\text{ef}} \cdot X_L = 0{,}5726\text{ A} \times 60\ \Omega \approx 34{,}36\text{ Volt}$$
    * Tegangan pada kapasitor:
      $$V_C = I_{\text{ef}} \cdot X_C = 0{,}5726\text{ A} \times 400\ \Omega \approx 229{,}04\text{ Volt}$$
  * **c. Verifikasi Tegangan Sumber:**
    $$V_{\text{sumber}} = \sqrt{V_R^2 + (V_L - V_C)^2} = \sqrt{(45{,}81)^2 + (34{,}36 - 229{,}04)^2} = \sqrt{(45{,}81)^2 + (-194{,}68)^2}$$
    $$V_{\text{sumber}} = \sqrt{2098{,}56 + 37900{,}30} = \sqrt{39998{,}86} \approx 200\text{ Volt} \quad (\text{Terbukti persis } V_{\text{ef}} = 200\text{ V}!)$$

* **Jawaban Bagian 4 (Sudut Fase, Sifat, & Daya):**
  * **a. Sudut Fase dan Sifat Rangkaian:**
    $$\tan\phi = \frac{X_L - X_C}{R} = \frac{60 - 400}{80} = \frac{-340}{80} = -4{,}25$$
    $$\phi = \arctan(-4{,}25) \approx -76{,}76^\circ \quad (\text{atau } -1{,}34\text{ radian})$$
    * *Sifat Rangkaian:* Karena $X_C > X_L$ ($400\ \Omega > 60\ \Omega$) dan $\phi < 0$, rangkaian bersifat **KAPASITIF** (kuat arus **mendahului** tegangan sebesar $76{,}76^\circ$).
  * **b. Persamaan Kuat Arus Sesaat:**
    Karena kuat arus mendahului tegangan:
    $$I(t) = I_{\max} \sin(\omega t - \phi) = 0{,}81 \sin(100t + 76{,}76^\circ)\text{ Ampere}$$
  * **c. Faktor Daya dan Daya Nyata Disipasi:**
    * Faktor daya:
      $$\cos\phi = \frac{R}{Z} = \frac{80}{349{,}28} \approx 0{,}229$$
    * Daya disipasi nyata rata-rata:
      $$P = V_{\text{ef}} \cdot I_{\text{ef}} \cdot \cos\phi = 200 \times 0{,}5726 \times 0{,}229 \approx 26{,}23\text{ Watt}$$
      *(Atau dihitung lewat $P = I_{\text{ef}}^2 \cdot R = (0{,}5726)^2 \times 80 = 0{,}3279 \times 80 \approx 26{,}23\text{ Watt}$)*.

* **Jawaban Bagian 5 (Resonansi Rangkaian AC):**
  * **a. Frekuensi Sudut & Alami Resonansi:**
    * Frekuensi sudut resonansi:
      $$\omega_r = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0{,}6 \times 25 \times 10^{-6}}} = \frac{1}{\sqrt{15 \times 10^{-6}}} = \frac{1}{\sqrt{1{,}5 \times 10^{-5}}} \approx \frac{1}{3{,}873 \times 10^{-3}} \approx 258{,}2\text{ rad/s}$$
    * Frekuensi alami resonansi:
      $$f_r = \frac{\omega_r}{2\pi} = \frac{258{,}2}{2\pi} \approx 41{,}1\text{ Hz}$$
  * **b. Nilai Impedansi dan Kuat Arus Saat Terjadi Resonansi:**
    * Saat resonansi, $X_L = X_C$, sehingga impedansi menjadi minimum dan murni bernilai hambatan resistor:
      $$Z_{\text{res}} = R = 80\ \Omega$$
    * Kuat arus efektif melonjak ke nilai maksimum resonansi:
      $$I_{\text{ef, res}} = \frac{V_{\text{ef}}}{R} = \frac{200\text{ V}}{80\ \Omega} = 2{,}5\text{ Ampere}$$

---

### H. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Daya Rata-rata Hanya pada Resistor:** Jangan pernah memasukkan nilai reaktansi $X_L$ atau $X_C$ ke dalam rumus daya nyata disipasi ($P = I_{\text{ef}}^2 R$). Induktor dan kapasitor murni tidak membuang energi menjadi panas.
> 2. **Jebakan Sifat Rangkaian:**
>    * Jika $X_L > X_C \implies$ Rangkaian Induktif $\implies$ Tegangan mendahului arus.
>    * Jika $X_C > X_L \implies$ Rangkaian Kapasitif $\implies$ Arus mendahului tegangan.
> 3. **Pengaruh Frekuensi Sumber:**
>    * Bila frekuensi $\omega$ dinaikkan: $X_L = \omega L$ bertambah besar, sedangkan $X_C = \frac{1}{\omega C}$ mengecil. Rangkaian cenderung semakin induktif pada frekuensi tinggi dan semakin kapasitif pada frekuensi rendah!
