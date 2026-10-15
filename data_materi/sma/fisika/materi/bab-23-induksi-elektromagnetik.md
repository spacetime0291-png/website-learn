# Bab 23: Induksi Elektromagnetik
**Kategori:** TKA Fisika | **Blok:** Blok 4: Listrik dan Magnet

## Bab 23: Induksi Elektromagnetik

---

### A. Fluks Magnetik
Fluks magnetik ($\Phi$) adalah ukuran jumlah total garis gaya medan magnetik yang menembus tegak lurus suatu luasan permukaan bidang tertentu.

#### 1. Formulasi Matematis Fluks Magnetik:
$$\Phi = \vec{B} \cdot \vec{A} = B \cdot A \cos\theta$$
* $\Phi$ = fluks magnetik ($\text{Weber, Wb} = \text{Tesla}\cdot\text{m}^2$)
* $B$ = kuat induksi medan magnetik ($\text{Tesla, T}$)
* $A$ = luas penampang bidang yang ditembus medan magnetik ($\text{m}^2$)
* $\theta$ = sudut apit antara vektor arah medan magnetik ($\vec{B}$) dengan **vektor normal bidang** ($\hat{n}$, yaitu garis yang ditarik tegak lurus terhadap permukaan bidang).

> [!WARNING]
> **Jebakan Sudut Bidang Fluks Magnetik:**
> * Jika soal menyebutkan medan magnetik membentuk sudut $\alpha$ terhadap **permukaan bidang kumparan**, maka sudut normalnya adalah:
>   $$\theta = 90^\circ - \alpha \implies \Phi = B \cdot A \sin\alpha$$
> * **Fluks bernilai maksimum:** Terjadi jika medan magnetik tegak lurus permukaan bidang ($\theta = 0^\circ \implies \cos 0^\circ = 1 \implies \Phi_{\max} = BA$).
> * **Fluks bernilai nol:** Terjadi jika medan magnetik sejajar permukaan bidang ($\theta = 90^\circ \implies \cos 90^\circ = 0 \implies \Phi = 0$).

---

### B. Hukum Faraday dan Hukum Lenz

#### 1. Hukum Faraday
Michael Faraday (1831) menemukan bahwa beda potensial listrik (Gaya Gerak Listrik / GGL induksi) akan timbul pada ujung-ujung suatu kumparan kawat jika dan hanya jika terjadi **perubahan fluks magnetik** yang dilingkupi oleh kumparan tersebut terhadap waktu.

* **GGL Induksi Sesaat (Bentuk Diferensial):**
  $$\mathcal{E} = -N \frac{d\Phi}{dt}$$
* **GGL Induksi Rata-rata:**
  $$\bar{\mathcal{E}} = -N \frac{\Delta \Phi}{\Delta t} = -N \frac{\Phi_2 - \Phi_1}{t_2 - t_1}$$
* $N$ = jumlah lilitan kumparan
* $\frac{d\Phi}{dt}$ = laju perubahan fluks magnetik terhadap waktu ($\text{Wb/s}$ atau $\text{Volt}$)

#### 2. Hukum Lenz (Makna Fisis Tanda Negatif)
Heinrich Lenz menyatakan bahwa arus induksi yang dibangkitkan dalam suatu rangkaian tertutup selalu mengalir dalam arah sedemikian rupa sehingga medan magnet yang dihasilkannya **menentang perubahan fluks magnetik asal yang menyebabkannya**.
* **Jika Fluks Magnetik Luar Bertambah ($\Delta \Phi > 0$):**  
  Arus induksi akan menghasilkan medan magnetik induksi ($\vec{B}_{\text{ind}}$) yang berarah **berlawanan** dengan medan magnetik luar ($\vec{B}_{\text{luar}}$) untuk meredam pertambahan tersebut.
* **Jika Fluks Magnetik Luar Berkurang ($\Delta \Phi < 0$):**  
  Arus induksi akan menghasilkan medan magnetik induksi ($\vec{B}_{\text{ind}}$) yang berarah **searah** dengan medan magnetik luar ($\vec{B}_{\text{luar}}$) untuk menahan penurunan tersebut.

#### 3. Tiga Mekanisme Pemicu Terjadinya GGL Induksi:
Karena $\Phi = B A \cos\theta$, GGL induksi dapat dibangkitkan melalui:
1. **Perubahan Kuat Medan Magnet terhadap Waktu ($B(t)$):**
   $$\mathcal{E} = -N A \cos\theta \left(\frac{dB}{dt}\right)$$
2. **Perubahan Luas Bidang Loop terhadap Waktu ($A(t)$):**
   $$\mathcal{E} = -N B \cos\theta \left(\frac{dA}{dt}\right)$$
3. **Perubahan Sudut Orientasi Loop terhadap Waktu ($\theta(t) = \omega t$):**
   $$\mathcal{E} = -N B A \frac{d}{dt}\left(\cos\omega t\right) = N B A \omega \sin(\omega t) \quad (\text{Prinsip Dasar Generator AC})$$

#### 4. Muatan Listrik Total yang Mengalir Akibat Perubahan Fluks:
Jika kumparan tertutup dengan hambatan total $R$ mengalami perubahan fluks total $\Delta \Phi = \Phi_2 - \Phi_1$, maka total muatan listrik yang melintas adalah:
$$q = \int I \, dt = \int \frac{|\mathcal{E}|}{R} \, dt = \frac{N}{R} \int d\Phi = \frac{N \cdot |\Delta \Phi|}{R}$$
> [!NOTE]
> Muatan netto $q$ yang mengalir murni hanya bergantung pada **besar perubahan fluks total ($\Delta \Phi$)** dan hambatan rangkaian ($R$), serta **sama sekali tidak bergantung pada seberapa cepat atau lambat perubahan fluks itu berlangsung**!

---

### C. GGL Gerak Batang Konduktor Memotong Medan Magnetik
Sebuah batang konduktor lurus dengan panjang $l$ digerakkan dengan kelajuan $v$ melintasi rel kawat berbentuk $U$ yang berada di dalam medan magnetik homogen $\vec{B}$ yang tegak lurus bidang rel.

```text
       ┌─────────── l ───────────┐
       │     x     x     x     x │
       │     x     x  ┌──┴──┐  x │  ──────► v
     R │     x     x  │Batang│ x │  (Medan B masuk bidang ⊗)
       │     x     x  └──┬──┘  x │
       │     x     x     x     x │
       └─────────────────────────┘
```

#### 1. Formulasi GGL Gerak (*Motional EMF*):
$$\mathcal{E} = B \cdot l \cdot v \sin\theta$$
* Jika medan magnetik tegak lurus bidang lintasan kawat ($\theta = 90^\circ$):
  $$\mathcal{E} = B \cdot l \cdot v$$
* **Kaidah Tangan Kanan Penentuan Polaritas:**
  * **Ibu Jari:** Arah gerak batang konduktor ($\vec{v}$).
  * **Empat Jari:** Arah medan magnetik ($\vec{B}$).
  * **Telapak Tangan Terbuka:** Menunjukkan ujung batang yang menjadi **kutub positif (potensial tinggi)**, sehingga arus induksi mengalir keluar dari ujung tersebut.

#### 2. Kuat Arus Induksi pada Rangkaian Rel Tertutup:
Jika hambatan total rangkaian adalah $R$:
$$I = \frac{\mathcal{E}}{R} = \frac{B \cdot l \cdot v}{R}$$

#### 3. Gaya Luar Penarik Batang dan Keseimbangan Energi:
Arus induksi $I$ yang mengalir pada batang di dalam medan magnetik $\vec{B}$ menimbulkan gaya Lorentz pengerem yang arahnya berlawanan dengan arah gerak batang:
$$F_L = B \cdot I \cdot l = B \left(\frac{B l v}{R}\right) l = \frac{B^2 l^2 v}{R}$$
Agar batang dapat bergerak terus dengan kecepatan konstan $v$, harus ada **gaya luar ($F_{\text{luar}}$)** yang menarik batang ke depan dengan besar yang tepat mengimbangi gaya Lorentz pengerem:
$$F_{\text{luar}} = F_L = \frac{B^2 l^2 v}{R}$$

* **Kekekalan Energi (Daya Mekanik = Daya Listrik):**
  Laju kerja gaya luar (daya mekanik input) persis sama dengan laju energi listrik yang terdisipasi menjadi panas pada hambatan $R$ (daya termal output):
  $$P_{\text{mekanik}} = F_{\text{luar}} \cdot v = \frac{B^2 l^2 v^2}{R} = I^2 R = P_{\text{listrik}}$$

---

### D. Generator Listrik (Alternator)
Generator adalah mesin listrik yang mengubah energi mekanik putaran menjadi energi listrik melalui prinsip induksi elektromagnetik.

#### 1. Generator Arus Bolak-Balik (Generator AC):
Kumparan berluas penampang $A$ dengan $N$ lilitan diputar dalam medan magnetik homogen $B$ dengan kecepatan sudut konstan $\omega = 2\pi f$:
$$\mathcal{E}(t) = \mathcal{E}_{\max} \sin(\omega t) = N \cdot B \cdot A \cdot \omega \sin(\omega t)$$
* **GGL Maksimum Generator:**
  $$\mathcal{E}_{\max} = N \cdot B \cdot A \cdot \omega = 2\pi f \cdot N \cdot B \cdot A$$
* Jika kumparan dihubungkan dengan rangkaian berhambatan $R$, kuat arus sesaatnya:
  $$I(t) = I_{\max} \sin(\omega t) \quad \text{dengan} \quad I_{\max} = \frac{\mathcal{E}_{\max}}{R}$$

#### 2. Generator Arus Searah (Generator DC):
Memiliki struktur fisik mirip generator AC, namun menggunakan **komutator cincin belah (*split-ring commutator*)** sebagai pengganti cincin geser utuh. Komutator membalik polaritas kontak setiap setengah putaran sehingga tegangan keluaran selalu berpolaritas tunggal positif (arus DC berdenyut).

---

### E. Induktansi Diri dan Energi Induktor

#### 1. Fenomena Induktansi Diri (GGL Balik / *Back-EMF*)
Saat arus listrik yang mengalir melalui suatu kumparan berubah terhadap waktu, fluks magnetik yang dihasilkan oleh kumparan itu sendiri juga ikut berubah, memicu timbulnya GGL induksi diri pada kumparan tersebut:

$$\mathcal{E}_L = -L \frac{dI}{dt} \quad \iff \quad \bar{\mathcal{E}}_L = -L \frac{\Delta I}{\Delta t}$$
* $L$ = induktansi diri kumparan ($\text{Henry, H}$)
* $\frac{dI}{dt}$ = laju perubahan arus terhadap waktu ($\text{A/s}$)
* Tanda negatif menunjukkan bahwa GGL induksi diri selalu melawan perubahan arus awal (menahan laju kenaikan saat saklar ditutup, dan menahan laju penurunan saat saklar dibuka).

#### 2. Induktansi Diri Solenoida dan Toroida:
Berdasarkan kesetaraan dengan hukum Faraday ($N\Phi = L I$):
$$L = \frac{N \Phi}{I} = \frac{\mu_0 N^2 A}{l}$$
* $N$ = jumlah lilitan
* $A$ = luas penampang kumparan ($\text{m}^2$)
* $l$ = panjang solenoida atau keliling efektif toroida ($l = 2\pi r$)
* Jika rongga dalam kumparan diisi bahan feromagnetik dengan permeabilitas relatif $\mu_r$:
  $$L = \mu_r \frac{\mu_0 N^2 A}{l}$$

#### 3. Energi yang Tersimpan dalam Medan Magnetik Induktor:
Induktor menyimpan energi dalam bentuk medan magnetik ketika dialiri arus listrik:
$$W = \frac{1}{2} L \cdot I^2$$
* $W$ = energi potensial magnetik ($\text{Joule, J}$)
* $L$ = induktansi diri ($\text{Henry, H}$)
* $I$ = kuat arus listrik tunak yang mengalir ($\text{Ampere, A}$)
* **Rapat Energi Magnetik ($u_B$):**
  $$u_B = \frac{W}{\text{Volume}} = \frac{B^2}{2\mu_0} \quad (\text{J/m}^3)$$

---

### F. Transformator (Trafo)
Transformator adalah piranti listrik pasif yang digunakan untuk mentransfer daya listrik bolak-balik (AC) antarrangkaian serta mengubah nilai tegangan dan arus listrik tanpa mengubah frekuensinya, berlandaskan prinsip **induksi timbal-balik (*mutual induction*)**.

#### 1. Persamaan Rasio Transformasi Tegangan dan Lilitan:
$$\frac{V_p}{V_s} = \frac{N_p}{N_s}$$
* $V_p, V_s$ = tegangan kumparan primer dan sekunder ($\text{Volt}$)
* $N_p, N_s$ = jumlah lilitan kumparan primer dan sekunder

#### 2. Klasifikasi Transformator:
| Karakteristik | Transformator Step-Up | Transformator Step-Down |
| :--- | :--- | :--- |
| **Fungsi Utama** | Menaikkan tegangan AC | Menurunkan tegangan AC |
| **Jumlah Lilitan** | $N_s > N_p$ | $N_s < N_p$ |
| **Tegangan Listrik** | $V_s > V_p$ | $V_s < V_p$ |
| **Kuat Arus Listrik** | $I_s < I_p$ | $I_s > I_p$ |
| **Aplikasi Khas** | Pembangkit listrik $\to$ Transmisi SUTET | Distribusi tiang listrik $\to$ Rumah tangga / Adaptor gadget |

#### 3. Transformator Ideal ($\eta = 100\%$):
Pada transformator ideal diasumsikan tidak ada kebocoran daya listrik ($P_{\text{masuk}} = P_{\text{keluar}} \iff P_p = P_s$):
$$V_p \cdot I_p = V_s \cdot I_s \implies \frac{V_p}{V_s} = \frac{N_p}{N_s} = \frac{I_s}{I_p}$$

#### 4. Transformator Nyata dan Efisiensi Daya ($\eta$):
Pada transformator nyata selalu terjadi disipasi energi menjadi kalor, sehingga daya sekunder lebih kecil daripada daya primer:
$$\eta = \frac{P_s}{P_p} \times 100\% = \frac{V_s \cdot I_s}{V_p \cdot I_p} \times 100\%$$
* Daya yang hilang / terbuang menjadi panas:
  $$P_{\text{hilang}} = P_p - P_s = P_p (1 - \eta)$$

#### 5. Sumber Kerugian Energi pada Transformator dan Solusinya:
1. **Arus Pusar (Arus Eddy / *Eddy Current*):** Fluks bolak-balik menginduksi arus sirkular di dalam inti besi padat yang memicu pemanasan Joule masif.  
   *Solusi:* Menggunakan **inti besi berlapis-lapis tipis (laminasi)** yang saling disekat oleh vernis isolator.
2. **Histeresis Magnetik:** Energi hilang akibat gesekan mikroskopik domain magnet saat polaritas terbalik 50/60 kali per detik.  
   *Solusi:* Menggunakan bahan dengan siklus histeresis sempit, yaitu **besi lunak (*soft iron*) atau baja silikon**.
3. **Kerugian Tembaga ($I^2R$):** Disipasi panas pada kabel kawat tembaga karena resistansi kawat.  
   *Solusi:* Menggunakan kawat konduktor bermutu tinggi dengan penampang yang memadai.
4. **Kebocoran Fluks (*Flux Leakage*):** Tidak semua garis medan magnet primer terhubung ke sekunder.  
   *Solusi:* Merancang teras berbentuk cincin tertutup (*shell-type core*) dan melilitkan kumparan primer berdampingan atau bertumpuk konsentris.

---

### G. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 23:**
> Sebuah laboratorium teknik elektro melakukan pengujian komprehensif terhadap fenomena induksi elektromagnetik:
>
> 1. **(Topik GGL Induksi Fluks Tergantung Waktu & Muatan):** Sebuah kumparan kawat terdiri dari $N = 500\text{ lilitan}$ dan memiliki hambatan dalam $R = 10\ \Omega$. Kumparan melingkupi fluks magnetik yang berubah terhadap waktu memenuhi persamaan kuadratik:
>    $$\Phi(t) = \left(2t^3 - 4t^2 + 5t + 2\right) \times 10^{-2}\text{ Weber}$$
>    * a. Tentukan persamaan laju perubahan fluks magnetik sesaat $\frac{d\Phi}{dt}$ dan persamaan GGL induksi sesaat $\mathcal{E}(t)$!
>    * b. Hitung besar GGL induksi sesaat dan kuat arus yang mengalir pada kumparan pada saat $t = 2\text{ sekon}$!
>    * c. Tentukan besar GGL induksi rata-rata pada selang waktu antara $t = 0\text{ sekon}$ hingga $t = 2\text{ sekon}$!
>    * d. Hitung muatan listrik total yang mengalir melintasi kumparan selama selang waktu $t = 0$ hingga $t = 2\text{ sekon}$ tersebut!
>
> 2. **(Topik Batang Kawat Memotong Medan Magnet):** Sebuah kawat konduktor lurus $PQ$ dengan panjang $l = 40\text{ cm} = 0{,}4\text{ m}$ digerakkan ke kanan dengan kelajuan konstan $v = 10\text{ m/s}$ di atas dua rel logam licin tanpa hambatan. Rel tersebut dihubungkan dengan sebuah resistor $R = 4\ \Omega$. Seluruh sistem berada dalam medan magnetik homogen $B = 0{,}5\text{ Tesla}$ yang berarah tegak lurus masuk ke dalam bidang kertas ($\otimes$).
>    * a. Tentukan besar GGL induksi gerak yang dihasilkan pada kawat serta tentukan ujung kawat mana ($P$ atau $Q$) yang memiliki potensial lebih tinggi!
>    * b. Hitung kuat arus induksi yang mengalir melalui resistor $R$ beserta arah alirannya!
>    * c. Hitung besar dan arah gaya Lorentz yang dialami batang $PQ$!
>    * d. Hitung besar gaya luar yang harus dikerjakan untuk mempertahankan kelajuan batang tetap $10\text{ m/s}$, serta buktikan kesetaraan antara daya mekanik input dan daya disipasi panas pada resistor!
>
> 3. **(Topik Generator AC):** Sebuah generator AC memiliki kumparan persegi berukuran $20\text{ cm} \times 10\text{ cm}$ yang terdiri dari $1000\text{ lilitan}$. Kumparan tersebut berputar di dalam medan magnetik homogen $B = 0{,}05\text{ T}$ dengan frekuensi putaran $f = 50\text{ Hz}$.
>    * a. Tentukan kecepatan sudut putaran kumparan ($\omega$) dan besar GGL induksi maksimum ($\mathcal{E}_{\max}$) yang dihasilkan generator!
>    * b. Tentukan persamaan tegangan sesaat generator terhadap waktu $t$, dan hitung tegangan sesaat saat bidang kumparan membentuk sudut $30^\circ$ terhadap garis medan magnetik!
>
> 4. **(Topik Induktansi Diri & Energi):** Sebuah solenoida memiliki panjang $l = 50\pi\text{ cm} = 0{,}5\pi\text{ m}$, luas penampang $A = 20\text{ cm}^2 = 2 \times 10^{-3}\text{ m}^2$, dan terdiri dari $1000\text{ lilitan}$.
>    * a. Tentukan besar induktansi diri solenoida tersebut di ruang hampa!
>    * b. Jika arus yang mengalir melalui solenoida tersebut diputus dari nilai $4\text{ A}$ menjadi $0\text{ A}$ dalam selang waktu $\Delta t = 0{,}02\text{ sekon}$, hitung besar GGL induksi diri rata-rata yang timbul pada kumparan!
>    * c. Hitung energi potensial medan magnetik yang tersimpan di dalam solenoida saat dialiri arus tunak $4\text{ A}$!
>
> 5. **(Topik Transformator Non-Ideal):** Sebuah transformator step-down dihubungkan ke sumber tegangan primer $V_p = 220\text{ Volt}$. Kumparan sekunder menghasilkan tegangan $V_s = 22\text{ Volt}$ dan dihubungkan dengan sebuah lampu pijar berdaya $P_s = 44\text{ Watt}$. Diketahui efisiensi transformator tersebut adalah $\eta = 80\%$.
>    * a. Tentukan perbandingan jumlah lilitan primer terhadap sekunder ($N_p : N_s$)!
>    * b. Hitung kuat arus yang mengalir pada kumparan sekunder ($I_s$)!
>    * c. Hitung daya listrik masukan kumparan primer ($P_p$) dan kuat arus primer ($I_p$)!
>    * d. Hitung daya yang hilang menjadi panas pada transformator tersebut!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (GGL Fluks Diferensial & Muatan Total):**
  * $\Phi(t) = (2t^3 - 4t^2 + 5t + 2) \times 10^{-2}\text{ Wb}$, $N = 500$, $R = 10\ \Omega$.
  * **a. Persamaan Laju Perubahan Fluks dan GGL Sesaat:**
    * Turunan pertama terhadap waktu:
      $$\frac{d\Phi}{dt} = \frac{d}{dt}\left[(2t^3 - 4t^2 + 5t + 2) \times 10^{-2}\right] = (6t^2 - 8t + 5) \times 10^{-2}\text{ Wb/s}$$
    * Persamaan GGL induksi sesaat:
      $$\mathcal{E}(t) = -N \frac{d\Phi}{dt} = -500 \times (6t^2 - 8t + 5) \times 10^{-2} = -5(6t^2 - 8t + 5) = -(30t^2 - 40t + 25)\text{ Volt}$$
  * **b. Besar GGL dan Arus pada $t = 2\text{ sekon}$:**
    $$\mathcal{E}(2) = -[30(2)^2 - 40(2) + 25] = -[30(4) - 80 + 25] = -[120 - 80 + 25] = -65\text{ Volt}$$
    * Besar magnitudo GGL induksi: $|\mathcal{E}| = 65\text{ Volt}$.
    * Kuat arus listrik sesaat:
      $$I(2) = \frac{|\mathcal{E}|}{R} = \frac{65\text{ V}}{10\ \Omega} = 6{,}5\text{ Ampere}$$
  * **c. GGL Induksi Rata-rata dari $t = 0$ hingga $t = 2\text{ s}$:**
    * Pada $t = 0$: $\Phi(0) = (2(0) - 4(0) + 5(0) + 2) \times 10^{-2} = 2 \times 10^{-2}\text{ Wb}$.
    * Pada $t = 2$: $\Phi(2) = (2(2)^3 - 4(2)^2 + 5(2) + 2) \times 10^{-2} = (16 - 16 + 10 + 2) \times 10^{-2} = 12 \times 10^{-2}\text{ Wb}$.
    * Perubahan fluks: $\Delta \Phi = \Phi(2) - \Phi(0) = 12 \times 10^{-2} - 2 \times 10^{-2} = 10 \times 10^{-2} = 0{,}1\text{ Wb}$.
    * GGL rata-rata:
      $$\bar{\mathcal{E}} = -N \frac{\Delta \Phi}{\Delta t} = -500 \times \frac{0{,}1\text{ Wb}}{2 - 0\text{ s}} = -500 \times 0{,}05 = -25\text{ Volt} \implies |\bar{\mathcal{E}}| = 25\text{ Volt}$$
  * **d. Muatan Listrik Total yang Mengalir:**
    $$q = \frac{N \cdot \Delta \Phi}{R} = \frac{500 \times 0{,}1\text{ Wb}}{10\ \Omega} = \frac{50}{10} = 5\text{ Coulomb}$$

* **Jawaban Bagian 2 (Batang Kawat Bergerak Memotong Medan):**
  * $l = 0{,}4\text{ m}, v = 10\text{ m/s}, B = 0{,}5\text{ T}, R = 4\ \Omega$.
  * **a. Besar GGL Induksi Gerak & Polaritas:**
    $$\mathcal{E} = B \cdot l \cdot v = 0{,}5 \times 0{,}4 \times 10 = 2{,}0\text{ Volt}$$
    * *Penentuan Polaritas:* Ibu jari ke kanan ($v$), empat jari menembus masuk bidang ($B \otimes$). Telapak tangan menghadap ke **atas** (menuju titik $P$). Maka **ujung $P$ bermuatan positif (potensial lebih tinggi)** dan ujung $Q$ bermuatan negatif ($V_P > V_Q$).
  * **b. Kuat Arus Induksi & Arah Aliran:**
    $$I = \frac{\mathcal{E}}{R} = \frac{2{,}0\text{ V}}{4\ \Omega} = 0{,}5\text{ Ampere}$$
    * *Arah Arus:* Di dalam batang mengalir dari $Q$ ke $P$ (ke atas), lalu melintasi rel luar menuju resistor $R$ mengalir ke bawah, sehingga membentuk putaran **berlawanan arah jarum jam**.
  * **c. Besar dan Arah Gaya Lorentz pada Batang:**
    $$F_L = B \cdot I \cdot l = 0{,}5\text{ T} \times 0{,}5\text{ A} \times 0{,}4\text{ m} = 0{,}1\text{ Newton}$$
    * *Arah Gaya Lorentz:* Arus $I$ ke atas, medan $B$ masuk bidang $\to$ telapak tangan menghadap ke **kiri** (menentang arah gerak $v$, sesuai hukum Lenz).
  * **d. Gaya Luar Penarik & Pembuktian Kekekalan Daya:**
    * Agar kecepatan konstan, gaya luar harus sama besar dengan gaya pengerem Lorentz:
      $$F_{\text{luar}} = F_L = 0{,}1\text{ Newton} \quad (\text{berarah ke kanan})$$
    * Daya mekanik input dari gaya luar:
      $$P_{\text{mekanik}} = F_{\text{luar}} \cdot v = 0{,}1\text{ N} \times 10\text{ m/s} = 1{,}0\text{ Watt}$$
    * Daya disipasi listrik pada hambatan:
      $$P_{\text{listrik}} = I^2 \cdot R = (0{,}5\text{ A})^2 \times 4\ \Omega = 0{,}25 \times 4 = 1{,}0\text{ Watt}$$
    * *Terbukti identik:* $P_{\text{mekanik}} = P_{\text{listrik}} = 1{,}0\text{ Watt}$!

* **Jawaban Bagian 3 (Generator AC):**
  * Luas penampang: $A = 0{,}20\text{ m} \times 0{,}10\text{ m} = 0{,}02\text{ m}^2 = 2 \times 10^{-2}\text{ m}^2$.
  * $N = 1000$, $B = 0{,}05\text{ T}$, $f = 50\text{ Hz}$.
  * **a. Kecepatan Sudut & GGL Maksimum:**
    $$\omega = 2\pi f = 2\pi \times 50 = 100\pi\text{ rad/s} \approx 314{,}16\text{ rad/s}$$
    $$\mathcal{E}_{\max} = N B A \omega = 1000 \times 0{,}05 \times 0{,}02 \times 100\pi = 1 \times 100\pi = 100\pi\text{ Volt} \approx 314{,}16\text{ Volt}$$
  * **b. Persamaan Tegangan Sesaat & Sudut Bidang $30^\circ$:**
    * Persamaan tegangan sesaat:
      $$V(t) = \mathcal{E}_{\max} \sin(\omega t) = 100\pi \sin(100\pi t)\text{ Volt}$$
    * Jika bidang kumparan membentuk sudut $\alpha = 30^\circ$ terhadap medan magnetik, maka sudut fase normal kumparan adalah $\theta = 90^\circ - 30^\circ = 60^\circ$:
      $$V = \mathcal{E}_{\max} \sin 60^\circ = 100\pi \times \frac{1}{2}\sqrt{3} = 50\pi\sqrt{3}\text{ Volt} \approx 272{,}07\text{ Volt}$$

* **Jawaban Bagian 4 (Induktansi Diri & Energi):**
  * $l = 0{,}5\pi\text{ m}, A = 2 \times 10^{-3}\text{ m}^2, N = 1000, \mu_0 = 4\pi \times 10^{-7}\text{ T}\cdot\text{m/A}$.
  * **a. Induktansi Diri Solenoida ($L$):**
    $$L = \frac{\mu_0 N^2 A}{l} = \frac{(4\pi \times 10^{-7}) \times (1000)^2 \times (2 \times 10^{-3})}{0{,}5\pi} = \frac{8\pi \times 10^{-4}}{0{,}5\pi} = 16 \times 10^{-4}\text{ H} = 1{,}6 \times 10^{-3}\text{ H} = 1{,}6\text{ mH}$$
  * **b. GGL Induksi Diri Rata-rata:**
    * $\Delta I = 0 - 4 = -4\text{ A}$, $\Delta t = 0{,}02\text{ s}$.
    $$\bar{\mathcal{E}}_L = -L \frac{\Delta I}{\Delta t} = -(1{,}6 \times 10^{-3}\text{ H}) \times \frac{-4\text{ A}}{0{,}02\text{ s}} = (1{,}6 \times 10^{-3}) \times 200 = 0{,}32\text{ Volt}$$
  * **c. Energi Magnetik yang Tersimpan:**
    $$W = \frac{1}{2} L I^2 = \frac{1}{2} \times (1{,}6 \times 10^{-3}\text{ H}) \times (4\text{ A})^2 = 0{,}8 \times 10^{-3} \times 16 = 12{,}8 \times 10^{-3}\text{ J} = 12{,}8\text{ mJ}$$

* **Jawaban Bagian 5 (Transformator Non-Ideal):**
  * $V_p = 220\text{ V}, V_s = 22\text{ V}, P_s = 44\text{ W}, \eta = 80\% = 0{,}80$.
  * **a. Perbandingan Lilitan ($N_p : N_s$):**
    $$\frac{N_p}{N_s} = \frac{V_p}{V_s} = \frac{220}{22} = \frac{10}{1} \implies N_p : N_s = 10 : 1$$
  * **b. Kuat Arus Kumparan Sekunder ($I_s$):**
    $$I_s = \frac{P_s}{V_s} = \frac{44\text{ W}}{22\text{ V}} = 2\text{ Ampere}$$
  * **c. Daya Listrik Primer ($P_p$) dan Arus Primer ($I_p$):**
    * Karena $\eta = \frac{P_s}{P_p}$:
      $$P_p = \frac{P_s}{\eta} = \frac{44\text{ W}}{0{,}80} = 55\text{ Watt}$$
    * Kuat arus kumparan primer:
      $$I_p = \frac{P_p}{V_p} = \frac{55\text{ W}}{220\text{ V}} = 0{,}25\text{ Ampere}$$
  * **d. Daya yang Hilang Menjadi Kalor:**
    $$P_{\text{hilang}} = P_p - P_s = 55\text{ W} - 44\text{ W} = 11\text{ Watt}$$

---

### H. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Transformator Hanya Bekerja pada Tegangan Bolak-Balik (AC):** Jika transformator dihubungkan ke sumber tegangan searah (DC murni dari baterai aki), tidak akan terjadi perubahan fluks magnetik ($\frac{d\Phi}{dt} = 0$). Akibatnya tegangan sekunder bernilai **nol ($V_s = 0$)** dan kumparan primer justru dapat terbakar karena ketiadaan reaktansi induktif.
> 2. **Muatan Total Induksi Bebas Waktu:** Ingat rumus cepat $q = \frac{N \Delta \Phi}{R}$. Perubahan fluks yang dilakukan secara sangat lambat maupun sangat mendadak akan memindahkan total muatan listrik yang persis sama.
> 3. **Tanda Minus Hukum Lenz:** Selalu gunakan hukum Lenz sebagai pemandu arah arus induksi secara fisis, bukan sekadar simbol aljabar dalam kalkulasi.
