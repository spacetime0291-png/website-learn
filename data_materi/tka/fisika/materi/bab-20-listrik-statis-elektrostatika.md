# Bab 20: Listrik Statis (Elektrostatika)
**Kategori:** TKA Fisika | **Blok:** Blok 4: Listrik dan Magnet

## Bab 20: Listrik Statis (Elektrostatika)

---

### A. Muatan Listrik dan Hukum Coulomb

#### 1. Sifat Dasar Muatan Listrik:
* Terdapat dua jenis muatan listrik: **Positif** (proton) dan **Negatif** (elektron).
* Muatan sejenis saling **tolak-menolak**, sedangkan muatan berlainan jenis saling **tarik-menarik**.
* **Kuantisasi Muatan Listrik:** Setiap muatan bebas di alam semesta selalu merupakan kelipatan bulat dari muatan elementer ($e = 1{,}602 \times 10^{-19}\text{ Coulomb}$):
  $$q = n \cdot e \quad (n \in \mathbb{Z})$$
* **Hukum Kekekalan Muatan:** Jumlah total muatan listrik dalam suatu sistem terisolasi selalu konstan.

#### 2. Hukum Coulomb:
Besar gaya elektrostatik tarik-menarik atau tolak-menolak antara dua muatan titik berbanding lurus dengan hasil kali kedua muatan dan berbanding terbalik dengan kuadrat jarak pisah keduanya:

$$F = k \frac{|q_1 \cdot q_2|}{r^2}$$
* $F$ = gaya Coulomb elektrostatik ($\text{N}$)
* $q_1, q_2$ = besar muatan listrik ($\text{C}$)
* $r$ = jarak pisah antar-muatan ($\text{m}$)
* $k$ = konstanta Coulomb di ruang hampa:
  $$k = \frac{1}{4\pi \varepsilon_0} \approx 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$$
  * $\varepsilon_0$ = permitivitas listrik ruang hampa ($8{,}854 \times 10^{-12}\text{ C}^2/\text{N}\cdot\text{m}^2$).

* **Gaya Coulomb di Dalam Bahan Dielektrik (Permitivitas Relatif $\varepsilon_r$):**
  $$F_{\text{medium}} = \frac{F_{\text{vakum}}}{\varepsilon_r} = \left(\frac{1}{4\pi \varepsilon_r \varepsilon_0}\right) \frac{|q_1 q_2|}{r^2}$$
  *(Gaya Coulomb di dalam medium selalu melemah sebesar faktor $\varepsilon_r > 1$)*.

#### 3. Superposisi Vektor Gaya Coulomb:
Gaya Coulomb adalah besaran vektor. Resultan gaya pada muatan $q_1$ akibat tarikan/tolakan dari $q_2$ dan $q_3$:
$$F_{\text{net}} = \sqrt{F_{12}^2 + F_{13}^2 + 2 F_{12} F_{13} \cos\theta}$$

---

### B. Kuat Medan Listrik ($\vec{E}$)
Medan listrik adalah ruang di sekitar muatan listrik di mana muatan uji lain yang diletakkan di dalam ruang tersebut masih mengalami gaya elektrostatik.

#### 1. Definisi dan Formulasi Kuat Medan Listrik:
Kuat medan listrik didefinisikan sebagai vektor gaya Coulomb per satuan muatan uji positif ($q_0$):
$$\vec{E} = \frac{\vec{F}}{q_0} = k \frac{q}{r^2} \hat{r} \quad (\text{N/C atau V/m})$$

#### 2. Aturan Garis-Garis Gaya Medan Listrik:
* Garis medan memancar **KELUAR menjauhi muatan positif ($+$)**.
* Garis medan mengarah **MASUK menuju muatan negatif ($-$)**.
* Garis-garis medan listrik tidak pernah saling berpotongan; kerapatan garis menunjukkan kekuatan medan listrik.

#### 3. Letak Titik dengan Kuat Medan Listrik Bersih Nol ($E_{\text{net}} = 0$):
* Jika kedua muatan **sejenis** ($+$ dan $+$, atau $-$ dan $-$): Titik medan nol berada **di antara kedua muatan**.
* Jika kedua muatan **berlawanan jenis** ($+$ dan $-$): Titik medan nol berada **di luar kedua muatan**, terletak lebih dekat ke muatan yang **nilai mutlaknya lebih kecil**.
  $$\frac{\sqrt{|q_1|}}{r_1} = \frac{\sqrt{|q_2|}}{r_2}$$

---

### C. Hukum Gauss dan Medan Listrik pada Berbagai Simetri

#### 1. Fluks Listrik ($\Phi$):
Jumlah garis medan listrik yang menembus suatu luasan permukaan $A$:
$$\Phi = \vec{E} \cdot \vec{A} = E \cdot A \cos\theta$$
* $\theta$ = sudut antara vektor kuat medan $\vec{E}$ dengan **garis normal permukaan bidang**.

#### 2. Hukum Gauss:
Fluks total yang menembus suatu permukaan tertutup sebanding dengan muatan total yang dilingkupi di dalam permukaan tersebut:
$$\Phi = \oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{dalam}}}{\varepsilon_0}$$

#### 3. Kuat Medan pada Bola Konduktor Berongga Bermuatan (Jari-Jari $R$):
Pada konduktor, seluruh muatan bebas saling tolak menolak hingga tersebar merata **hanya pada permukaan kulit terluar**:
* **Di Dalam Bola ($r < R$):** $q_{\text{dalam}} = 0 \implies E = 0$.
* **Di Kulit Bola ($r = R$):** $E = k \frac{q}{R^2}$.
* **Di Luar Bola ($r > R$):** $E = k \frac{q}{r^2}$.

#### 4. Kuat Medan di Antara Dua Keping Sejajar Bermuatan:
Dua pelat logam luas $A$ terpisah jarak $d$ diberi muatan $+q$ dan $-q$ (kerapatan muatan $\sigma = \frac{q}{A}$):
* **Di Antara Kedua Keping:** Medan listrik bersifat homogen:
  $$E = \frac{\sigma}{\varepsilon_0} = \frac{q}{\varepsilon_0 \cdot A}$$
* **Di Luar Keping:** $E = 0$.

---

### D. Energi Potensial Listrik dan Potensial Listrik

#### 1. Energi Potensial Listrik ($E_p$):
Usaha yang diperlukan untuk memindahkan muatan dari jarak tak terhingga ke jarak $r$ terhadap muatan sumber (besaran **skalar**):
$$E_p = k \frac{q_1 \cdot q_2}{r} \quad (\text{Joule})$$
*(Tanda positif dan negatif muatan WAJIB dimasukkan ke dalam perhitungan!)*.

#### 2. Potensial Listrik ($V$):
Energi potensial per satuan muatan uji positif (besaran **skalar**):
$$V = \frac{E_p}{q} = k \frac{q}{r} \quad (\text{Volt / V})$$
* **Potensial oleh Banyak Muatan Titik:**
  $$V_{\text{total}} = \sum_{i=1}^n k \frac{q_i}{r_i} = k \left(\frac{q_1}{r_1} + \frac{q_2}{r_2} + \dots\right)$$

#### 3. Potensial Listrik pada Bola Konduktor Berongga (Jari-Jari $R$):
Karena medan listrik di dalam bola nol ($E = 0$), maka tidak ada usaha untuk memindahkan muatan di dalam bola sehingga potensialnya seragam (bidang ekipotensial):
* **Di Dalam dan di Kulit Bola ($r \le R$):**
  $$V = k \frac{q}{R} \quad (\text{sama besar dan konstan!})$$
* **Di Luar Bola ($r > R$):**
  $$V = k \frac{q}{r}$$

#### 4. Hubungan Usaha, Medan, dan Beda Potensial:
* Usaha memindahkan muatan $q$ dari titik A ke titik B:
  $$W_{A \to B} = q \cdot \Delta V = q (V_B - V_A) = \Delta E_p$$
* Hubungan kuat medan dan beda potensial pada keping sejajar:
  $$\Delta V = E \cdot d \iff E = \frac{\Delta V}{d}$$

---

### E. Kapasitor dan Kapasitansi

#### 1. Kapasitansi Kapasitor ($C$):
Kemampuan kapasitor untuk menyimpan muatan listrik untuk setiap satu volt beda potensial:
$$C = \frac{q}{V} \quad (\text{Farad / F})$$
* Konversi: $1\ \mu\text{F} = 10^{-6}\text{ F}$, $1\text{ nF} = 10^{-9}\text{ F}$, $1\text{ pF} = 10^{-12}\text{ F}$.

#### 2. Kapasitor Keping Sejajar:
* **Di Udara / Vakum:**
  $$C_0 = \varepsilon_0 \frac{A}{d}$$
* **Disisipi Bahan Dielektrik (Konstanta Dielektrik $\kappa = \varepsilon_r > 1$):**
  $$C = \kappa \cdot C_0 = \varepsilon_r \varepsilon_0 \frac{A}{d}$$
  *(Penyisipan bahan dielektrik selalu **meningkatkan nilai kapasitas kapasitor** sebesar faktor $\kappa$)*.

#### 3. Rangkaian Kapasitor:

| Parameter | Rangkaian Seri | Rangkaian Paralel |
| :--- | :--- | :--- |
| **Karakteristik Muatan** | Muatan sama pada tiap kapasitor: $q_{\text{tot}} = q_1 = q_2 = \dots$ | Muatan terbagi: $q_{\text{tot}} = q_1 + q_2 + \dots$ |
| **Karakteristik Tegangan** | Tegangan terbagi: $V_{\text{tot}} = V_1 + V_2 + \dots$ | Tegangan sama: $V_{\text{tot}} = V_1 = V_2 = \dots$ |
| **Kapasitansi Ekivalen** | $\frac{1}{C_s} = \frac{1}{C_1} + \frac{1}{C_2} + \dots$ (kapasitas mengecil) | $C_p = C_1 + C_2 + \dots$ (kapasitas membesar) |

#### 4. Energi yang Tersimpan di Dalam Kapasitor ($W$):
$$W = \frac{1}{2} q \cdot V = \frac{1}{2} C \cdot V^2 = \frac{q^2}{2 C} \quad (\text{Joule})$$

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 20:**
> Diberikan konstanta Coulomb $k = 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$ dan permitivitas vakum $\varepsilon_0 = 8{,}85 \times 10^{-12}\text{ C}^2/\text{N}\cdot\text{m}^2$. Selesaikan studi kasus elektrostatika berikut:
>
> 1. **(Gaya Coulomb & Medan Listrik Segitiga):** Tiga muatan titik diletakkan pada titik-titik sudut segitiga siku-siku ABC (siku-siku di titik B, dengan panjang $AB = 3\text{ cm}$ dan $BC = 4\text{ cm}$):
>    * Muatan di titik A: $q_A = +3\ \mu\text{C} = +3 \times 10^{-6}\text{ C}$
>    * Muatan di titik B: $q_B = -2\ \mu\text{C} = -2 \times 10^{-6}\text{ C}$
>    * Muatan di titik C: $q_C = +8\ \mu\text{C} = +8 \times 10^{-6}\text{ C}$
>    * Hitung besar gaya tarik Coulomb antara muatan A dan B ($F_{BA}$)!
>    * Hitung besar gaya tarik Coulomb antara muatan C dan B ($F_{BC}$)!
>    * Hitung besar resultan gaya Coulomb total yang dialami muatan $q_B$!
> 2. **(Titik Medan Nol):** Dua muatan titik $q_1 = +4\ \mu\text{C}$ dan $q_2 = +9\ \mu\text{C}$ terpisah pada jarak $d = 25\text{ cm}$. Tentukan letak titik yang memiliki kuat medan listrik sama dengan nol!
> 3. **(Bola Konduktor Berongga):** Sebuah bola konduktor berongga berjari-jari $R = 10\text{ cm}$ diberi muatan listrik $q = +5\ \mu\text{C}$.
>    * Hitung kuat medan listrik pada titik yang berjarak $5\text{ cm}$ dan $20\text{ cm}$ dari pusat bola!
>    * Hitung potensial listrik pada titik yang berjarak $5\text{ cm}$ dan $20\text{ cm}$ dari pusat bola!
> 4. **(Kapasitor Keping Sejajar & Dielektrik):** Sebuah kapasitor keping sejajar di udara memiliki luas keping $A = 200\text{ cm}^2 = 2 \times 10^{-2}\text{ m}^2$ dan terpisah sejauh $d = 1{,}77\text{ mm} = 1{,}77 \times 10^{-3}\text{ m}$. Kapasitor dihubungkan ke sumber tegangan $V = 100\text{ Volt}$.
>    * Hitung kapasitas awal ($C_0$) dan muatan yang tersimpan!
>    * Jika ruang antar-keping disisipi bahan dielektrik mika dengan konstanta $\kappa = 5$, hitung kapasitas kapasitor yang baru ($C$) dan energi yang tersimpan di dalamnya!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Gaya Coulomb Segitiga Siku-Siku):**
  * $AB = 3\text{ cm} = 0{,}03\text{ m}$, $BC = 4\text{ cm} = 0{,}04\text{ m}$.
  * Gaya $F_{BA}$ (tarikan ke arah A sepanjang sumbu-$y$):
    $$F_{BA} = k \frac{|q_B \cdot q_A|}{r_{AB}^2} = (9 \times 10^9) \frac{(2 \times 10^{-6})(3 \times 10^{-6})}{(0{,}03)^2} = \frac{54 \times 10^{-3}}{9 \times 10^{-4}} = 60\text{ N}$$
  * Gaya $F_{BC}$ (tarikan ke arah C sepanjang sumbu-$x$):
    $$F_{BC} = k \frac{|q_B \cdot q_C|}{r_{BC}^2} = (9 \times 10^9) \frac{(2 \times 10^{-6})(8 \times 10^{-6})}{(0{,}04)^2} = \frac{144 \times 10^{-3}}{16 \times 10^{-4}} = 90\text{ N}$$
  * Karena siku-siku di B ($\theta = 90^\circ$):
    $$F_{\text{net}} = \sqrt{F_{BA}^2 + F_{BC}^2} = \sqrt{60^2 + 90^2} = \sqrt{3600 + 8100} = \sqrt{11700} = 30\sqrt{13}\text{ N} \approx 108{,}17\text{ N}$$

* **Jawaban Bagian 2 (Titik Medan Nol):**
  * Kedua muatan sejenis positif, maka titik nol berada di antara keduanya pada jarak $x$ dari $q_1$:
    $$E_1 = E_2 \implies k \frac{q_1}{x^2} = k \frac{q_2}{(d - x)^2} \implies \frac{\sqrt{q_1}}{x} = \frac{\sqrt{q_2}}{d - x}$$
    $$\frac{\sqrt{4}}{x} = \frac{\sqrt{9}}{25 - x} \implies \frac{2}{x} = \frac{3}{25 - x} \implies 2(25 - x) = 3x \implies 50 - 2x = 3x$$
    $$5x = 50 \implies x = 10\text{ cm}$$
    *Titik medan nol berada $10\text{ cm}$ dari muatan $q_1$ (atau $15\text{ cm}$ dari $q_2$).*

* **Jawaban Bagian 3 (Bola Konduktor Berongga):**
  * $R = 10\text{ cm} = 0{,}1\text{ m}$, $q = 5 \times 10^{-6}\text{ C}$.
  * **Kuat Medan Listrik ($E$):**
    * Di $r = 5\text{ cm}$ (di dalam bola, $r < R$):
      $$E = 0\text{ N/C}$$
    * Di $r = 20\text{ cm} = 0{,}2\text{ m}$ (di luar bola, $r > R$):
      $$E = k \frac{q}{r^2} = (9 \times 10^9) \frac{5 \times 10^{-6}}{(0{,}2)^2} = \frac{45 \times 10^3}{0{,}04} = 1{,}125 \times 10^6\text{ N/C}$$
  * **Potensial Listrik ($V$):**
    * Di $r = 5\text{ cm}$ (di dalam bola, $r < R \implies$ sama dengan potensial di kulit $R$):
      $$V = k \frac{q}{R} = (9 \times 10^9) \frac{5 \times 10^{-6}}{0{,}1} = \frac{45 \times 10^3}{0{,}1} = 4{,}5 \times 10^5\text{ Volt}$$
    * Di $r = 20\text{ cm} = 0{,}2\text{ m}$ (di luar bola):
      $$V = k \frac{q}{r} = (9 \times 10^9) \frac{5 \times 10^{-6}}{0{,}2} = 2{,}25 \times 10^5\text{ Volt}$$

* **Jawaban Bagian 4 (Kapasitor Keping Sejajar & Dielektrik):**
  * Kapasitas awal di udara:
    $$C_0 = \varepsilon_0 \frac{A}{d} = (8{,}85 \times 10^{-12}) \frac{2 \times 10^{-2}}{1{,}77 \times 10^{-3}} = \frac{1{,}77 \times 10^{-13}}{1{,}77 \times 10^{-3}} = 10^{-10}\text{ F} = 100\text{ pF}$$
  * Muatan tersimpan pada $V = 100\text{ V}$:
    $$q_0 = C_0 \cdot V = (10^{-10}\text{ F})(100\text{ V}) = 10^{-8}\text{ C} = 10\text{ nC}$$
  * Kapasitas setelah disisipi dielektrik mika ($\kappa = 5$):
    $$C = \kappa \cdot C_0 = 5 \times 100\text{ pF} = 500\text{ pF} = 5 \times 10^{-10}\text{ F}$$
  * Energi yang tersimpan (tetap terhubung ke tegangan $V = 100\text{ V}$):
    $$W = \frac{1}{2} C V^2 = \frac{1}{2}(5 \times 10^{-10})(100)^2 = \frac{1}{2}(5 \times 10^{-10})(10^4) = 2{,}5 \times 10^{-6}\text{ Joule} = 2{,}5\ \mu\text{J}$$

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Vektor vs Skalar pada Elektrostatika:**
>    * Gaya Coulomb ($\vec{F}$) dan Kuat Medan Listrik ($\vec{E}$) adalah **BESARAN VEKTOR**. Tanda muatan ($+/-$) **tidak dimasukkan ke rumus**, melainkan digunakan untuk menentukan arah panah vektor (tarik/tolak, keluar/masuk), lalu dijumlahkan dengan aturan vektor.
>    * Energi Potensial ($E_p$) dan Potensial Listrik ($V$) adalah **BESARAN SKALAR**. Tanda muatan ($+/-$) **MUTLAK HARUS DIMASUKKAN ke rumus hitungan**.
> 2. **Potensial di Dalam Bola Konduktor Bukan Nol:** Ingat bahwa medan di dalam bola konduktor adalah $E = 0$, namun potensialnya **TIDAK NOL**, melainkan sama persis dengan potensial di permukaan kulit bola ($V = k q / R$).
> 3. **Penyisipan Dielektrik:**
>    * Jika kapasitor **tetap terhubung baterai**: Tegangan tetap konstan ($V = \text{konstan}$), sedangkan muatan dan energi meningkat ($\kappa$ kali lipat).
>    * Jika kapasitor **dilepas dari baterai**: Muatan tetap konstan ($q = \text{konstan}$), sedangkan tegangan dan energi menurun ($1/\kappa$ kali lipat).
