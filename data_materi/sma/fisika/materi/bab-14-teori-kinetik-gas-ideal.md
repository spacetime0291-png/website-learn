# Bab 14: Teori Kinetik Gas Ideal
**Kategori:** TKA Fisika | **Blok:** Blok 2: Fluida & Termofisika

## Bab 14: Teori Kinetik Gas Ideal

---

### A. Asumsi Model Gas Ideal
Dalam teori kinetik gas, gas nyata didekati dengan model teoretis **Gas Ideal** yang memenuhi postulat-postulat berikut:
1. Gas terdiri atas partikel-partikel diskret (atom atau molekul) yang berjumlah sangat banyak dan tersebar secara merata di seluruh ruangan.
2. Partikel-partikel gas dianggap sebagai **titik materi** yang ukurannya dapat diabaikan terhadap volume wadah penampungnya ($V_{\text{partikel}} \approx 0$).
3. Partikel gas senantiasa bergerak lurus secara acak ke segala arah dengan berbagai kelajuan dan mematuhi Hukum-Hukum Newton tentang gerak.
4. **Tidak ada gaya tarik-menarik atau tolak-menolak** antarpartikel gas maupun antara partikel dengan dinding, kecuali saat terjadi tumbukan sesaat.
5. Setiap tumbukan antara partikel dengan partikel lainnya atau dengan dinding wadah bersifat **lenting sempurna** ($e = 1$), sehingga energi kinetik total kekal.
6. Selang waktu berlangsungnya tumbukan jauh lebih singkat dibandingkan dengan selang waktu bebas antar-tumbukan.

---

### B. Persamaan Keadaan Gas Ideal

#### 1. Formulasi Mol dan Partikel:
$$P \cdot V = n \cdot R \cdot T \iff P \cdot V = N \cdot k \cdot T$$
* $P$ = tekanan mutlak gas ($\text{Pa}$ atau $\text{N/m}^2$)
* $V$ = volume wadah penampung gas ($\text{m}^3$)
* $n$ = jumlah mol gas ($n = \frac{m}{M_r} = \frac{N}{N_A}$)
* $N$ = jumlah total partikel / molekul gas
* $N_A$ = bilangan Avogadro ($6{,}022 \times 10^{23}\text{ partikel/mol}$)
* $R$ = konstanta gas universal ($8{,}314\text{ J/mol}\cdot\text{K} \approx 0{,}082\text{ L}\cdot\text{atm/mol}\cdot\text{K}$)
* $k$ = konstanta Boltzmann ($k = \frac{R}{N_A} = 1{,}38 \times 10^{-23}\text{ J/K}$)
* $T$ = **suhu mutlak gas (wajib dalam Kelvin / $\text{K}$)**

#### 2. Massa Jenis Gas Ideal ($\rho$):
Dengan menyubstitusikan $n = \frac{m}{M_r}$:
$$P V = \frac{m}{M_r} R T \implies P M_r = \left(\frac{m}{V}\right) R T \implies \rho = \frac{P \cdot M_r}{R \cdot T}$$
* $M_r$ = massa molar gas ($\text{kg/mol}$)
* $\rho$ = massa jenis gas ($\text{kg/m}^3$)

---

### C. Hukum-Hukum Gas dalam Ruang Tertutup (Massa Gas Konstan)

| Hukum Gas | Kondisi Termodinamika | Karakteristik Proses | Formulasi Persamaan |
| :--- | :---: | :---: | :---: |
| **Hukum Boyle** | **Isotermal** ($T = \text{konstan}$) | Tekanan berbanding terbalik dengan volume | $P_1 V_1 = P_2 V_2$ |
| **Hukum Charles** | **Isobarik** ($P = \text{konstan}$) | Volume sebanding lurus dengan suhu mutlak | $\frac{V_1}{T_1} = \frac{V_2}{T_2}$ |
| **Hukum Gay-Lussac** | **Isokhorik** ($V = \text{konstan}$) | Tekanan sebanding lurus dengan suhu mutlak | $\frac{P_1}{T_1} = \frac{P_2}{T_2}$ |
| **Hukum Boyle - Gay-Lussac** | Kondisi Campuran | Keadaan umum gas tertutup tanpa kebocoran | $\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$ |

---

### D. Tinjauan Mikroskopis: Tekanan dan Energi Kinetik Rata-Rata

#### 1. Tekanan Gas Akibat Tumbukan Molekul:
Tekanan makroskopis yang terukur pada dinding wadah timbul akibat transfer impuls momentum saat molekul-molekul gas membentur dinding secara terus-menerus:
$$P = \frac{1}{3} \frac{N \cdot m_0 \cdot \overline{v^2}}{V} = \frac{2}{3} \frac{N}{V} \overline{E_k}$$
* $m_0$ = massa satu butir molekul gas ($\text{kg}$)
* $\overline{v^2}$ = rata-rata kuadrat kelajuan molekul gas
* $\overline{E_k}$ = energi kinetik translasi rata-rata per molekul gas

#### 2. Energi Kinetik Rata-Rata Translasi ($\overline{E_k}$):
Dengan menyamakan persamaan tekanan mikroskopis dengan persamaan gas ideal $PV = NkT$:
$$\frac{2}{3} N \overline{E_k} = N k T \implies \overline{E_k} = \frac{3}{2} k T$$

> [!NOTE]
> **Teorema Fundamental Suhu Gas Ideal:**
> Energi kinetik translasi rata-rata partikel gas ideal **HANYA BERGANTUNG PADA SUHU MUTLAK ($T$)**, sama sekali tidak dipengaruhi oleh massa molekul, jenis gas (monoatomik/poliatomik), maupun tekanan wadah!

---

### E. Kecepatan Efektif Gas (*Root Mean Square* / $v_{\text{rms}}$)
Kecepatan efektif ($v_{\text{rms}}$) adalah akar dari rata-rata kuadrat kelajuan molekul gas ($v_{\text{rms}} = \sqrt{\overline{v^2}}$):

$$v_{\text{rms}} = \sqrt{\frac{3 k T}{m_0}} = \sqrt{\frac{3 R T}{M_r}} = \sqrt{\frac{3 P}{\rho}}$$
* $T$ = suhu mutlak gas ($\text{K}$)
* $m_0$ = massa satu molekul ($\text{kg}$)
* $M_r$ = massa molar gas ($\text{kg/mol}$, *ingat konversi: $M_r\text{ O}_2 = 32\text{ g/mol} = 32 \times 10^{-3}\text{ kg/mol}$*)
* $\rho$ = massa jenis gas ($\text{kg/m}^3$)

#### Perbandingan Kecepatan Efektif Dua Gas pada Suhu Sama:
$$\frac{v_{\text{rms}, 1}}{v_{\text{rms}, 2}} = \sqrt{\frac{M_{r2}}{M_{r1}}}$$
*(Gas dengan massa molar lebih kecil / ringan akan bergerak jauh lebih cepat daripada gas berat pada suhu yang identik).*

---

### F. Teorema Ekipartisi Energi dan Energi Dalam ($U$)

#### 1. Teorema Ekipartisi Energi:
Untuk suatu sistem molekul gas yang berada pada kesetimbangan termal pada suhu mutlak $T$, setiap **derajat kebebasan ($f$)** yang berbentuk kuadratik akan menyumbangkan energi rata-rata sebesar:
$$\overline{\epsilon} = \frac{1}{2} k T \quad \text{per molekul}$$

#### 2. Derajat Kebebasan ($f$) Berdasarkan Jenis Gas dan Suhu:
* **Gas Monoatomik (Helium $\text{He}$, Neon $\text{Ne}$, Argon $\text{Ar}$):**
  Molekul berupa satu atom titik, hanya memiliki 3 derajat kebebasan translasi ($f = 3$) pada semua rentang suhu:
  $$\overline{E_k} = \frac{3}{2} k T$$
* **Gas Diatomik (Oksigen $\text{O}_2$, Nitrogen $\text{N}_2$, Hidrogen $\text{H}_2$):**
  * **Suhu Rendah ($T \le 250\text{ K}$):** Hanya translasi aktif ($f = 3$) $\implies \overline{E_k} = \frac{3}{2} k T$.
  * **Suhu Sedang / Kamar ($T \approx 300\text{ K} - 500\text{ K}$):** Translasi (3) + Rotasi (2) aktif ($f = 5$):
    $$\overline{E_k} = \frac{5}{2} k T$$
  * **Suhu Tinggi ($T \ge 1000\text{ K}$):** Translasi (3) + Rotasi (2) + Vibrasi (2) aktif ($f = 7$):
    $$\overline{E_k} = \frac{7}{2} k T$$

#### 3. Energi Dalam Gas Ideal ($U$):
Energi dalam adalah jumlah total dari seluruh energi kinetik mikroskopis yang dimiliki oleh seluruh partikel gas di dalam sistem:
$$U = N \cdot \overline{E_k} = \frac{f}{2} N k T = \frac{f}{2} n R T$$
* Untuk gas monoatomik: $U = \frac{3}{2} n R T = \frac{3}{2} N k T = \frac{3}{2} P V$
* Untuk gas diatomik pada suhu kamar: $U = \frac{5}{2} n R T = \frac{5}{2} P V$

---

### G. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 14:**
> Sebuah tabung tertutup kaku bervolume $V = 8{,}314\text{ liter} = 8{,}314 \times 10^{-3}\text{ m}^3$ berisi gas Helium ($\text{He}$, monoatomik, $M_r = 4\text{ g/mol}$) pada suhu $27^\circ\text{C}$ dan tekanan $P = 3 \times 10^5\text{ Pa}$. Diberikan $R = 8{,}314\text{ J/mol}\cdot\text{K}$, $k = 1{,}38 \times 10^{-23}\text{ J/K}$, dan $N_A = 6{,}02 \times 10^{23}\text{ partikel/mol}$.
>
> 1. **(Mol dan Jumlah Partikel):** Hitung jumlah mol ($n$), massa gas Helium, serta jumlah total partikel ($N$) di dalam tabung!
> 2. **(Hukum Gas Gabungan):** Jika tabung dipanaskan hingga suhunya naik menjadi $127^\circ\text{C}$ pada volume wadah yang tetap (isokhorik), berapakah tekanan gas di dalam tabung sekarang?
> 3. **(Energi Kinetik Partikel):** Hitung energi kinetik translasi rata-rata satu molekul Helium pada suhu $27^\circ\text{C}$!
> 4. **(Kecepatan Efektif):** Hitung kelajuan efektif ($v_{\text{rms}}$) molekul gas Helium pada suhu $27^\circ\text{C}$! Jika tabung tersebut diisi gas Oksigen ($\text{O}_2$, $M_r = 32\text{ g/mol}$) pada suhu yang sama, berapakah perbandingan kelajuan efektif gas Helium terhadap Oksigen?
> 5. **(Energi Dalam Gas):** Hitung energi dalam total ($U$) gas Helium di dalam tabung pada suhu $27^\circ\text{C}$! Jika gas tersebut adalah gas diatomik pada suhu kamar ($T = 300\text{ K}$), berapakah energi dalamnya?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Jumlah Mol, Massa, dan Partikel):**
  * Suhu mutlak: $T = 27^\circ\text{C} + 273 = 300\text{ K}$.
  * Jumlah mol gas dari $PV = nRT$:
    $$n = \frac{P V}{R T} = \frac{(3 \times 10^5\text{ Pa})(8{,}314 \times 10^{-3}\text{ m}^3)}{(8{,}314\text{ J/mol}\cdot\text{K})(300\text{ K})} = \frac{2494{,}2}{2494{,}2} = 1{,}0\text{ mol}$$
  * Massa gas Helium ($M_r = 4\text{ g/mol}$):
    $$m = n \times M_r = 1{,}0\text{ mol} \times 4\text{ g/mol} = 4\text{ gram} = 4 \times 10^{-3}\text{ kg}$$
  * Jumlah total partikel:
    $$N = n \times N_A = 1{,}0 \times 6{,}02 \times 10^{23} = 6{,}02 \times 10^{23}\text{ partikel}$$

* **Jawaban Bagian 2 (Proses Isokhorik):**
  * Suhu akhir: $T_2 = 127^\circ\text{C} + 273 = 400\text{ K}$.
  * Volume tetap ($V_1 = V_2$):
    $$\frac{P_1}{T_1} = \frac{P_2}{T_2} \implies \frac{3 \times 10^5}{300} = \frac{P_2}{400} \implies 1000 = \frac{P_2}{400} \implies P_2 = 4 \times 10^5\text{ Pa}$$

* **Jawaban Bagian 3 (Energi Kinetik Rata-Rata):**
  * Energi kinetik translasi pada $T = 300\text{ K}$:
    $$\overline{E_k} = \frac{3}{2} k T = \frac{3}{2} (1{,}38 \times 10^{-23}\text{ J/K})(300\text{ K}) = 6{,}21 \times 10^{-21}\text{ Joule}$$

* **Jawaban Bagian 4 (Kecepatan Efektif $v_{\text{rms}}$):**
  * Massa molar Helium: $M_r = 4\text{ g/mol} = 4 \times 10^{-3}\text{ kg/mol}$.
  * Kelajuan $v_{\text{rms}}$ Helium:
    $$v_{\text{rms}} = \sqrt{\frac{3 R T}{M_r}} = \sqrt{\frac{3 (8{,}314)(300)}{4 \times 10^{-3}}} = \sqrt{\frac{7482{,}6}{4 \times 10^{-3}}} = \sqrt{1.870.650} \approx 1367{,}7\text{ m/s}$$
  * Perbandingan kelajuan efektif Helium terhadap Oksigen pada suhu sama:
    $$\frac{v_{\text{rms, He}}}{v_{\text{rms, } \text{O}_2}} = \sqrt{\frac{M_{r, \text{O}_2}}{M_{r, \text{He}}}} = \sqrt{\frac{32}{4}} = \sqrt{8} = 2\sqrt{2} \approx 2{,}83$$
    *(Molekul Helium bergerak sekitar $2{,}83$ kali lebih cepat daripada molekul Oksigen pada suhu yang sama).*

* **Jawaban Bagian 5 (Energi Dalam Gas $U$):**
  * Untuk gas monoatomik Helium ($f = 3$):
    $$U = \frac{3}{2} n R T = \frac{3}{2} (1{,}0\text{ mol})(8{,}314\text{ J/mol}\cdot\text{K})(300\text{ K}) = \frac{3}{2}(2494{,}2) = 3741{,}3\text{ Joule}$$
    *(Atau $U = \frac{3}{2} P V = \frac{3}{2}(3 \times 10^5)(8{,}314 \times 10^{-3}) = 3741{,}3\text{ Joule}$).*
  * Jika berupa gas diatomik pada suhu kamar ($f = 5$):
    $$U = \frac{5}{2} n R T = \frac{5}{2} (2494{,}2) = 6235{,}5\text{ Joule}$$

---

### H. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Satuan Massa Molar $M_r$ pada $v_{\text{rms}}$:** Wajib dinyatakan dalam **$\text{kg/mol}$**, bukan $\text{g/mol}$! Jika Anda memasukkan angka $4$ alih-alih $4 \times 10^{-3}\text{ kg/mol}$, hasil kelajuan Anda akan meleset dengan faktor $\sqrt{1000} \approx 31{,}6$ kali lebih lambat.
> 2. **Suhu Wajib Kelvin:** Jangan pernah memasukkan angka Celcius ke dalam persamaan $PV = nRT$ maupun $\overline{E_k} = \frac{3}{2}kT$!
> 3. **Gas Campuran:** Tekanan total gas campuran adalah jumlah tekanan parsial masing-masing gas (Hukum Dalton: $P_{\text{tot}} = P_1 + P_2 + \dots$). Energi kinetik rata-rata per molekul semua jenis gas di dalam campuran adalah **sama besar** karena memiliki suhu kesetimbangan termal yang sama.
