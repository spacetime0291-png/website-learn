# Bab 17: Gelombang Bunyi
**Kategori:** TKA Fisika | **Blok:** Blok 3: Gelombang dan Optik

## Bab 17: Gelombang Bunyi

---

### A. Hakikat dan Karakteristik Gelombang Bunyi
Gelombang bunyi adalah gelombang mekanik longitudinal yang merambat melalui medium elastis (padat, cair, gas) dalam bentuk rapatan (*compression*) dan renggangan (*rarefaction*). Bunyi **tidak dapat merambat melalui ruang hampa udara (vakum)**.

#### 1. Klasifikasi Frekuensi Bunyi:
* **Infrasonik ($f < 20\text{ Hz}$):** Tidak terdengar oleh manusia normal; dapat didengar oleh jangkrik, gajah, dan paus.
* **Audiosonik ($20\text{ Hz} \le f \le 20.000\text{ Hz}$):** Rentang frekuensi ambang pendengaran telinga manusia normal.
* **Ultrasonik ($f > 20.000\text{ Hz}$):** Frekuensi tinggi di atas ambang pendengaran manusia; dimanfaatkan oleh kelelawar, lumba-lumba, dan teknologi USG medis serta sonar kapal laut.

#### 2. Cepat Rambat Gelombang Bunyi pada Berbagai Medium:
Bunyi merambat paling cepat pada zat padat, lebih lambat pada zat cair, dan paling lambat pada gas ($v_{\text{padat}} > v_{\text{cair}} > v_{\text{gas}}$).
* **Pada Zat Padat (Batang Logam):**
  $$v = \sqrt{\frac{E}{\rho}}$$
  * $E$ = Modulus Young bahan ($\text{N/m}^2$), $\rho$ = massa jenis zat padat ($\text{kg/m}^3$).
* **Pada Zat Cair:**
  $$v = \sqrt{\frac{B}{\rho}}$$
  * $B$ = Modulus Bulk zat cair ($\text{N/m}^2$).
* **Pada Gas Ideal:**
  $$v = \sqrt{\frac{\gamma \cdot R \cdot T}{M_r}}$$
  * $\gamma$ = tetapan Laplace, $R = 8{,}314\text{ J/mol}\cdot\text{K}$, $T$ = suhu mutlak ($\text{K}$), $M_r$ = massa molar gas ($\text{kg/mol}$).

---

### B. Sumber Bunyi: Dawai dan Pipa Organa

#### 1. Dawai / Senar Gitar (Kedua Ujung Terikat):
Kedua ujung dawai berpanjang $L$ terikat kaku membentuk simpul gelombang:
$$f_n = (n + 1)\frac{v}{2L} = (n + 1) f_0 \quad (n = 0, 1, 2, 3, \dots)$$
* **Nada Dasar ($n = 0$):** $f_0 = \frac{v}{2L}$ ($L = \frac{1}{2}\lambda$, memiliki 2 simpul, 1 perut).
* **Nada Atas ke-1 ($n = 1$):** $f_1 = \frac{2v}{2L} = 2f_0$ ($L = \lambda$, memiliki 3 simpul, 2 perut).
* **Nada Atas ke-2 ($n = 2$):** $f_2 = \frac{3v}{2L} = 3f_0$ ($L = \frac{3}{2}\lambda$, memiliki 4 simpul, 3 perut).
* **Perbandingan Frekuensi Harmonik Dawai:**
  $$f_0 : f_1 : f_2 : f_3 : \dots = 1 : 2 : 3 : 4 : \dots$$

---

#### 2. Pipa Organa Terbuka (POB - Kedua Ujung Terbuka):
Kedua ujung pipa terbuka membentuk perut gelombang:
$$f_n = (n + 1)\frac{v}{2L} = (n + 1) f_0 \quad (n = 0, 1, 2, 3, \dots)$$
* **Nada Dasar ($n = 0$):** $f_0 = \frac{v}{2L}$ ($L = \frac{1}{2}\lambda$, memiliki 1 simpul, 2 perut).
* **Nada Atas ke-1 ($n = 1$):** $f_1 = \frac{v}{L} = 2f_0$ ($L = \lambda$, memiliki 2 simpul, 3 perut).
* **Perbandingan Frekuensi Harmonik POB:**
  $$f_0 : f_1 : f_2 : f_3 : \dots = 1 : 2 : 3 : 4 : \dots$$

---

#### 3. Pipa Organa Tertutup (POT - Satu Ujung Terbuka, Satu Ujung Tertutup):
Ujung tertutup membentuk simpul gelombang, ujung terbuka membentuk perut gelombang:
$$f_n = (2n + 1)\frac{v}{4L} = (2n + 1) f_0 \quad (n = 0, 1, 2, 3, \dots)$$
* **Nada Dasar ($n = 0$):** $f_0 = \frac{v}{4L}$ ($L = \frac{1}{4}\lambda$, memiliki 1 simpul, 1 perut).
* **Nada Atas ke-1 ($n = 1$):** $f_1 = \frac{3v}{4L} = 3f_0$ ($L = \frac{3}{4}\lambda$, memiliki 2 simpul, 2 perut).
* **Nada Atas ke-2 ($n = 2$):** $f_2 = \frac{5v}{4L} = 5f_0$ ($L = \frac{5}{4}\lambda$, memiliki 3 simpul, 3 perut).
* **Perbandingan Frekuensi Harmonik POT:**
  $$f_0 : f_1 : f_2 : f_3 : \dots = 1 : 3 : 5 : 7 : \dots \quad (\text{Hanya harmonik ganjil!})$$

---

#### 4. Resonansi Tabung Kolom Udara:
Peristiwa ikut bergetarnya kolom udara akibat frekuensi sumber getar garpu tala yang sama dengan frekuensi alami kolom udara:
$$L_n = (2n - 1)\frac{\lambda}{4} \implies L_1 = \frac{1}{4}\lambda, \quad L_2 = \frac{3}{4}\lambda, \quad L_3 = \frac{5}{4}\lambda$$
* **Selisih Panjang Kolom Resonansi Berturutan:**
  $$\Delta L = L_2 - L_1 = L_3 - L_2 = \frac{1}{2}\lambda \implies \lambda = 2 \Delta L$$

---

### C. Efek Doppler
Peristiwa perubahan frekuensi bunyi yang diterima oleh pendengar ($f_p$) akibat gerak relatif antara sumber bunyi ($f_s$) dan pendengar:

$$f_p = \left(\frac{v \pm v_p}{v \mp v_s}\right) f_s$$
* $f_p$ = frekuensi yang didengar oleh pendengar ($\text{Hz}$)
* $f_s$ = frekuensi asli yang dipancarkan sumber bunyi ($\text{Hz}$)
* $v$ = cepat rambat bunyi di udara ($\text{m/s}$)
* $v_p$ = kelajuan gerak pendengar ($\text{m/s}$)
* $v_s$ = kelajuan gerak sumber bunyi ($\text{m/s}$)

```text
       Pendengar (P) ───────────────► Sumber (S)
       Arah Acuan Positif: P menuju S (+), S menjauhi P (+)
```

> [!NOTE]
> **Trik Mengingat Tanda Efek Doppler:**
> Ingat konsep logis: **Mendekat memperbesar frekuensi**, sedangkan **Menjauh memperkecil frekuensi**!
> * **Pendengar ($v_p$, di pembilang):**
>   * Pendengar **mendekati** sumber $\implies$ bernilai **positif ($+v_p$)** (agar $f_p \uparrow$).
>   * Pendengar **menjauhi** sumber $\implies$ bernilai **negatif ($-v_p$)** (agar $f_p \downarrow$).
>   * Pendengar diam $\implies v_p = 0$.
> * **Sumber Bunyi ($v_s$, di penyebut):**
>   * Sumber **mendekati** pendengar $\implies$ bernilai **negatif ($-v_s$)** (agar pembagi kecil sehingga $f_p \uparrow$).
>   * Sumber **menjauhi** pendengar $\implies$ bernilai **positif ($+v_s$)** (agar pembagi besar sehingga $f_p \downarrow$).
>   * Sumber diam $\implies v_s = 0$.
> * *Jika ada angin bertiup dengan kelajuan $v_w$:*  
>   Kecepatan bunyi $v$ diganti dengan $(v \pm v_w)$ searah perambatan gelombang dari sumber menuju pendengar.

---

### D. Intensitas dan Taraf Intensitas Bunyi

#### 1. Intensitas Bunyi ($I$):
Daya energi gelombang bunyi per satuan luas bidang permukaan bola yang ditembus:
$$I = \frac{P}{A} = \frac{P}{4\pi r^2} \quad (\text{W/m}^2)$$
* $P$ = daya akustik sumber bunyi ($\text{Watt}$)
* $r$ = jarak titik pengamatan dari sumber titik bunyi ($\text{m}$)
* **Perbandingan Intensitas terhadap Jarak:**
  $$\frac{I_1}{I_2} = \left(\frac{r_2}{r_1}\right)^2$$

#### 2. Taraf Intensitas Bunyi ($TI$):
Skala logaritmik yang menyatakan tingkat kenyaringan bunyi yang dirasakan telinga manusia:
$$TI = 10 \log_{10}\left(\frac{I}{I_0}\right) \quad (\text{dB / desibel})$$
* $I_0 = 10^{-12}\text{ W/m}^2$ (intensitas ambang pendengaran minimum manusia pada frekuensi $1000\text{ Hz}$).

#### 3. Teorema Operasi Taraf Intensitas:
* **Pengaruh Jumlah Sumber Bunyi Identik ($n$ Buah Sumber):**
  $$TI_n = TI_1 + 10 \log_{10}(n)$$
  * *Contoh Cepat:*
    * $10$ sumber identik $\implies TI_{10} = TI_1 + 10\log(10) = TI_1 + 10\text{ dB}$.
    * $100$ sumber identik $\implies TI_{100} = TI_1 + 10\log(100) = TI_1 + 20\text{ dB}$.
* **Pengaruh Perubahan Jarak Pengamatan ($r_1 \to r_2$):**
  $$TI_2 = TI_1 - 20 \log_{10}\left(\frac{r_2}{r_1}\right)$$
  * *Contoh Cepat:* Jarak menjauh $10$ kali lipat ($r_2 = 10 r_1$) $\implies TI_2 = TI_1 - 20\log(10) = TI_1 - 20\text{ dB}$.

---

### E. Pelayangan Bunyi (*Beats*)
Peristiwa penguatan dan pelemahan bunyi secara periodik akibat interferensi dua gelombang bunyi yang memiliki frekuensi hampir sama (selisih kecil):
$$f_{\text{pelayangan}} = |f_1 - f_2|$$
* $f_{\text{pelayangan}}$ = frekuensi pelayangan bunyi ($\text{Hz}$), yaitu jumlah layangan bunyi nyaring per sekon.

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 17:**
> Diketahui cepat rambat bunyi di udara adalah $v = 340\text{ m/s}$. Selesaikan studi kasus akustik berikut:
>
> 1. **(Sumber Bunyi Dawai & Pipa Organa):** Sebuah dawai berpanjang $L_d = 80\text{ cm}$ memiliki nada dasar $f_0 = 250\text{ Hz}$.
>    * Berapakah cepat rambat gelombang transversal pada dawai tersebut?
>    * Berapakah frekuensi nada atas ke-2 dawai tersebut?
>    * Jika nada atas pertama dawai ini beresonansi (frekuensinya sama persis) dengan nada atas pertama sebuah pipa organa tertutup (POT), hitung panjang pipa organa tertutup tersebut!
> 2. **(Resonansi Kolom Udara):** Sebuah garpu tala digetarkan di atas mulut tabung resonansi berisi air. Resonansi pertama terdengar saat panjang kolom udara $L_1 = 17\text{ cm}$. Tentukan panjang kolom udara saat terjadi resonansi kedua ($L_2$) serta tentukan frekuensi garpu tala tersebut!
> 3. **(Efek Doppler Kejar-kejaran):** Sebuah mobil ambulans melaju dengan kelajuan $v_s = 20\text{ m/s}$ sambil membunyikan sirine berfrekuensi $f_s = 720\text{ Hz}$. Di belakang ambulans, seorang pengendara sepeda motor melaju searah dengan kelajuan $v_p = 10\text{ m/s}$ mengejar ambulans. Tentukan frekuensi sirine yang didengar oleh pengendara motor!
> 4. **(Intensitas dan Taraf Intensitas):** Sebuah mesin pabrik menghasilkan taraf intensitas $TI_1 = 70\text{ dB}$ pada jarak $r_1 = 2\text{ meter}$.
>    * Tentukan intensitas bunyi ($I_1$) dari satu mesin pada jarak $2\text{ meter}$ tersebut!
>    * Berapakah taraf intensitas bunyi jika $100$ buah mesin identik dinyalakan bersamaan pada jarak $2\text{ meter}$?
>    * Berapakah taraf intensitas dari $100$ mesin tersebut jika didengar oleh warga yang berada pada jarak $r_2 = 20\text{ meter}$ dari pabrik?
> 5. **(Pelayangan Bunyi):** Pipa organa terbuka A dan pipa organa terbuka B masing-masing memiliki panjang $L_A = 50\text{ cm}$ dan $L_B = 51\text{ cm}$. Jika kedua pipa dibunyikan bersamaan pada nada dasarnya, tentukan frekuensi pelayangan bunyi yang dihasilkan!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Dawai & Pipa Organa Tertutup):**
  * $L_d = 80\text{ cm} = 0{,}8\text{ m}$, $f_0 = 250\text{ Hz}$.
  * Cepat rambat dawai:
    $$f_0 = \frac{v}{2L_d} \implies v = 2 L_d f_0 = 2(0{,}8\text{ m})(250\text{ Hz}) = 400\text{ m/s}$$
  * Nada atas ke-2 dawai ($n = 2$):
    $$f_2 = (n + 1) f_0 = (2 + 1)(250) = 3 \times 250 = 750\text{ Hz}$$
  * Nada atas pertama dawai: $f_{1,d} = 2 f_0 = 500\text{ Hz}$.
  * Beresonansi dengan nada atas pertama POT ($n = 1$, cepat rambat udara $v = 340\text{ m/s}$):
    $$f_{1,\text{POT}} = \frac{3 v}{4 L_{\text{POT}}} \implies 500 = \frac{3(340)}{4 L_{\text{POT}}} = \frac{1020}{4 L_{\text{POT}}} \implies 500 = \frac{255}{L_{\text{POT}}}$$
    $$L_{\text{POT}} = \frac{255}{500} = 0{,}51\text{ meter} = 51\text{ cm}$$

* **Jawaban Bagian 2 (Resonansi Kolom Udara):**
  * Resonansi 1: $L_1 = \frac{1}{4}\lambda = 17\text{ cm} \implies \lambda = 4 \times 17\text{ cm} = 68\text{ cm} = 0{,}68\text{ m}$.
  * Resonansi 2: $L_2 = \frac{3}{4}\lambda = 3 \times 17\text{ cm} = 51\text{ cm}$.
  * Frekuensi garpu tala:
    $$f = \frac{v}{\lambda} = \frac{340\text{ m/s}}{0{,}68\text{ m}} = 500\text{ Hz}$$

* **Jawaban Bagian 3 (Efek Doppler):**
  * Ambulans (sumber) melaju ke depan $\implies$ **menjauhi motor** ($+v_s = +20\text{ m/s}$).
  * Motor (pendengar) melaju mengejar ke depan $\implies$ **mendekati ambulans** ($+v_p = +10\text{ m/s}$).
  * Frekuensi terdeteksi:
    $$f_p = \left(\frac{v + v_p}{v + v_s}\right) f_s = \left(\frac{340 + 10}{340 + 20}\right) \times 720 = \left(\frac{350}{360}\right) \times 720 = 350 \times 2 = 700\text{ Hz}$$

* **Jawaban Bagian 4 (Intensitas & Taraf Intensitas Bunyi):**
  * Intensitas $I_1$ dari $TI_1 = 70\text{ dB}$:
    $$70 = 10 \log\left(\frac{I_1}{10^{-12}}\right) \implies 7 = \log\left(\frac{I_1}{10^{-12}}\right) \implies \frac{I_1}{10^{-12}} = 10^7 \implies I_1 = 10^{-5}\text{ W/m}^2$$
  * Taraf intensitas $100$ mesin pada $r_1 = 2\text{ m}$:
    $$TI_{100} = TI_1 + 10 \log(100) = 70 + 10(2) = 70 + 20 = 90\text{ dB}$$
  * Taraf intensitas $100$ mesin pada $r_2 = 20\text{ m}$ (jarak naik 10 kali lipat):
    $$TI_{2} = TI_{\text{awal}} - 20 \log\left(\frac{r_2}{r_1}\right) = 90 - 20 \log\left(\frac{20}{2}\right) = 90 - 20 \log(10) = 90 - 20(1) = 70\text{ dB}$$

* **Jawaban Bagian 5 (Pelayangan Bunyi):**
  * POB A ($L_A = 0{,}50\text{ m}$): $f_A = \frac{v}{2 L_A} = \frac{340}{2(0{,}50)} = 340\text{ Hz}$.
  * POB B ($L_B = 0{,}51\text{ m}$): $f_B = \frac{v}{2 L_B} = \frac{340}{2(0{,}51)} = \frac{340}{1{,}02} \approx 333{,}33\text{ Hz}$.
  * Frekuensi pelayangan:
    $$f_{\text{layangan}} = |f_A - f_B| = |340 - 333{,}33| = 6{,}67\text{ Hz}$$
    *(Terdengar sekitar $6$ s.d. $7$ kali dengungan layangan bunyi per detik).*

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Penyebutan Nada Atas:** Hati-hati dengan penomoran indeks!
>    * Nada dasar $\implies n = 0$.
>    * Nada atas ke-1 $\implies n = 1$.
>    * Nada atas ke-2 $\implies n = 2$.
> 2. **Perbandingan Nada Pipa Organa Tertutup:** POT hanya menghasilkan frekuensi kelipatan ganjil ($1 : 3 : 5 : 7$). Jika frekuensi nada dasar POT adalah $100\text{ Hz}$, maka nada atas pertamanya adalah $300\text{ Hz}$ (tidak ada nada $200\text{ Hz}$).
> 3. **Skala Logaritmik Desibel:** Kenaikan $10\text{ dB}$ berarti intensitas energi berlipat $10$ kali. Kenaikan $20\text{ dB}$ berarti intensitas energi berlipat $100$ kali ($10^2$).
