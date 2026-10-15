# Bab 25: Spektrum Gelombang Elektromagnetik (GEM)
**Kategori:** TKA Fisika | **Blok:** Blok 4: Listrik dan Magnet

## Bab 25: Spektrum Gelombang Elektromagnetik (GEM)

---

### A. Hipotesis Maxwell dan Terjadinya Gelombang Elektromagnetik
James Clerk Maxwell (1864) merumuskan teori terpadu elektromagnetisme dengan memadukan hukum-hukum kelistrikan dan kemagnetan yang telah ada sebelumnya.

#### 1. Gagasan Fundamental Maxwell:
* Berdasarkan **Hukum Induksi Faraday**, perubahan fluks medan magnetik terhadap waktu terbukti menghasilkan medan listrik induksi:
  $$\oint \vec{E} \cdot d\vec{s} = -\frac{d\Phi_B}{dt}$$
* Maxwell mengajukan hipotesis simetris bahwa: **Perubahan medan listrik terhadap waktu juga harus menghasilkan medan magnetik**.
  $$\oint \vec{B} \cdot d\vec{s} = \mu_0 I + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}$$
  Suku $\varepsilon_0 \frac{d\Phi_E}{dt}$ dinamakan **arus pergeseran Maxwell (*displacement current*)**.

#### 2. Mekanisme Perambatan Gelombang Elektromagnetik (GEM):
Perubahan medan listrik secara sinusoidal akan membangkitkan medan magnetik yang berubah terhadap waktu; medan magnetik yang berubah ini kembali membangkitkan medan listrik baru. Proses ini berulang terus-menerus secara berkesinambungan dan merambat menembus ruang hampa udara dalam bentuk **Gelombang Elektromagnetik**.

```text
       y ▲        E (Medan Listrik)
         │       ▲
         │      /│\
         │     / │ \
         │    /  │  \
         └────┼──┼──┼───────────► x (Arah Rambat c)
             /   │   \
            /    │    \
         z ▼     ▼
                 B (Medan Magnetik)
```

#### 3. Cepat Rambat Gelombang Elektromagnetik di Ruang Hampa ($c$):
Maxwell secara teoretis menurunkan bahwa cepat rambat gelombang elektromagnetik di ruang hampa murni ditentukan oleh dua konstanta fundamental alam:

$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$$
* $\mu_0 = 4\pi \times 10^{-7}\text{ N/A}^2$ (permeabilitas magnetik ruang hampa)
* $\varepsilon_0 = 8{,}854 \times 10^{-12}\text{ C}^2/(\text{N}\cdot\text{m}^2)$ (permitivitas listrik ruang hampa)
* Diperoleh nilai teoretis:
  $$c \approx 2{,}9979 \times 10^8\text{ m/s} \approx 3 \times 10^8\text{ m/s}$$
  *Kesimpulan Mengagumkan:* Karena nilai kecepatan ini persis sama dengan kelajuan cahaya yang telah diukur oleh para astronom, Maxwell menyimpulkan bahwa **cahaya itu sendiri adalah gelombang elektromagnetik!**

#### 4. Hubungan Medan Listrik dan Medan Magnetik:
Pada setiap titik di sepanjang lintasan gelombang dan pada setiap saat, vektor medan listrik $\vec{E}$ dan vektor medan magnetik $\vec{B}$ bergetar sefase dengan perbandingan amplitudo yang konstan:

$$\frac{E(t)}{B(t)} = \frac{E_{\max}}{B_{\max}} = c$$

#### 5. Cepat Rambat dalam Medium Material ($v$):
Saat gelombang merambat di dalam suatu medium berpermitivitas relatif $\varepsilon_r$ dan permeabilitas relatif $\mu_r$:
$$v = \frac{1}{\sqrt{\mu \varepsilon}} = \frac{c}{\sqrt{\mu_r \varepsilon_r}} = \frac{c}{n}$$
* $n = \sqrt{\mu_r \varepsilon_r}$ adalah indeks bias medium. Untuk sebagian besar bahan optik non-magnetik ($\mu_r \approx 1$), berlaku hubungan Maxwell:
  $$n \approx \sqrt{\varepsilon_r}$$

---

### B. Karakteristik & Sifat-Sifat Gelombang Elektromagnetik
1. **Merupakan Gelombang Transversal:** Arah getaran medan listrik $\vec{E}$, arah getaran medan magnetik $\vec{B}$, dan arah rambat gelombang $\vec{c}$ ketiganya saling tegak lurus membentuk sistem koordinat tangan kanan:
   $$\vec{c} \parallel (\vec{E} \times \vec{B})$$
2. **Dapat Merambat di Ruang Hampa:** Tidak memerlukan medium material elastik untuk merambat, berbeda dengan gelombang mekanik (seperti bunyi atau gelombang air).
3. **Mengalami Seluruh Gejala Fisis Gelombang:**
   * **Pemantulan (Refleksi):** Sudut pantul sama dengan sudut datang.
   * **Pembiasan (Refraksi):** Membelok saat memasuki medium berbeda kerapatan.
   * **Perpaduan (Interferensi):** Membentuk pola penguatan dan pelemahan.
   * **Lenturan (Difraksi):** Membelok saat melalui celah sempit.
   * **Polarisasi:** Hanya terjadi pada gelombang transversal; arah getar medan $\vec{E}$ diserap searah bidang tertentu.
4. **Netral / Tidak Bermuatan Listrik:** Tidak membawa muatan dan tidak memiliki massa diam, sehingga **TIDAK dibelokkan oleh medan listrik luar maupun medan magnetik luar**.
5. **Memenuhi Persamaan Dasar Gelombang:**
   $$c = \lambda \cdot f \iff f = \frac{c}{\lambda} \iff \lambda = \frac{c}{f}$$
   * $c$ = laju cahaya di ruang hampa ($3 \times 10^8\text{ m/s}$)
   * $\lambda$ = panjang gelombang ($\text{meter, m}$)
   * $f$ = frekuensi gelombang ($\text{Hertz, Hz}$)
6. **Membawa Energi dan Momentum (Vektor Poynting $\vec{S}$):**
   * Laju aliran energi per satuan luas dinyatakan oleh Vektor Poynting:
     $$\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})$$
   * **Intensitas Rata-rata Radiasi ($I$):**
     $$\bar{S} = I = \frac{P}{A} = \frac{E_{\max} B_{\max}}{2\mu_0} = \frac{E_{\max}^2}{2\mu_0 c} = \frac{c B_{\max}^2}{2\mu_0} \quad (\text{Watt/m}^2)$$
   * **Tekanan Radiasi ($P_{\text{rad}}$):**
     $$P_{\text{rad}} = \frac{I}{c} \quad (\text{penyerapan sempurna}) \quad \text{atau} \quad P_{\text{rad}} = \frac{2I}{c} \quad (\text{pemantulan sempurna})$$
7. **Sifat Kuantum (Paket Energi Foton):**
   Radiasi elektromagnetik juga terkuantisasi dalam paket-paket energi diskrit yang disebut **foton**:
   $$E = h \cdot f = \frac{h \cdot c}{\lambda}$$
   * $h$ = konstanta Planck ($6{,}63 \times 10^{-34}\text{ J}\cdot\text{s}$)
   * $1\text{ eV} = 1{,}6 \times 10^{-19}\text{ Joule}$
   * *Kesimpulan:* Semakin tinggi frekuensi gelombang (semakin pendek panjang gelombangnya), semakin besar energi fotonnya dan semakin besar daya tembus radiasinya.

---

### C. Spektrum Gelombang Elektromagnetik Lengkap
Spektrum GEM adalah rentang kontinu dari seluruh radiasi elektromagnetik yang diklasifikasikan berdasarkan rentang frekuensi atau panjang gelombangnya.

#### Urutan Spektrum Gelombang Elektromagnetik:
Dari **Frekuensi Terendah** ($\lambda$ terpanjang, energi foton terendah, daya tembus terkecil) ke **Frekuensi Tertinggi** ($\lambda$ terpendek, energi foton tertinggi, daya tembus terbesar):

```text
┌─────────────────┐     Frekuensi (f) Semakin Besar (▲) ────►
│ Gelombang Radio │ ──► Mikro ──► Inframerah ──► Tampak ──► Ultraviolet ──► Sinar-X ──► Sinar Gamma
└─────────────────┘     Panjang Gelombang (λ) Semakin Pendek (▼) ──►
```

> [!TIP]
> **Jembatan Keledai / Mnemonik Populer:**
> **R - M - I - T - U - X - G**
> (*Radio - Mikro/Radar - Inframerah - Tampak - Ultraviolet - X-ray - Gamma*)

---

### D. Karakteristik, Sumber, dan Pemanfaatan Tiap Rentang Spektrum

| Jenis Spektrum | Rentang Frekuensi ($f$) | Rentang Panjang Gelombang ($\lambda$) | Sumber Pembangkit | Pemanfaatan Utama dalam Teknologi | Bahaya Radiasi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Gelombang Radio** | $< 10^9\text{ Hz}$ | $> 0{,}3\text{ m}$ (sampai ribuan km) | Osilator elektronika (rangkaian $LC$), antena pemancar | • Penyiaran radio AM/FM<br>• Siaran televisi<br>• Radio komunikasi maritim & penerbangan | Relatif aman dalam intensitas wajar |
| **Gelombang Mikro (*Microwave*)** | $10^9 - 3 \times 10^{11}\text{ Hz}$ | $1\text{ mm} - 30\text{ cm}$ | Tabung elektron khusus (magnetron, klystron, TWT) | • RADAR (navigasi kapal & pesawat)<br>• Oven microwave ($2{,}45\text{ GHz}$)<br>• Jaringan seluler (4G/5G), Wi-Fi, Bluetooth, satelit komunikasi | Pemanasan jaringan tubuh internal pada intensitas sangat tinggi |
| **Sinar Inframerah (*Infrared*)** | $3 \times 10^{11} - 4 \times 10^{14}\text{ Hz}$ | $750\text{ nm} - 1\text{ mm}$ | Getaran termal atom/molekul dari benda panas | • Remote control TV/AC<br>• Kamera malam (*night vision* / termografi)<br>• Termometer digital non-kontak (*thermogun*)<br>• Terapi fisik pemulihan otot<br>• Spektroskopi kimia | Rasa terbakar pada kulit jika terkena paparan panas intensif |
| **Cahaya Tampak (*Visible Light*)** | $4 \times 10^{14} - 7{,}5 \times 10^{14}\text{ Hz}$ | $400\text{ nm} - 750\text{ nm}$ | Eksitasi elektron atom, lampu pijar, LED, matahari | • Penglihatan indra mata manusia<br>• Fotosintesis klorofil tumbuhan<br>• Transmisi data kabel serat optik (*fiber optic*)<br>• Sinar laser penunjuk & bedah | Kerusakan retina mata jika menatap sumber laser/matahari langsung |
| **Sinar Ultraviolet (UV)** | $7{,}5 \times 10^{14} - 3 \times 10^{16}\text{ Hz}$ | $10\text{ nm} - 400\text{ nm}$ | Atom tereksitasi suhu sangat tinggi, matahari, lampu merkuri, busur las | • Pengecekan keaslian uang kertas (fluoresensi)<br>• Sterilisasi alat bedah & penjernih air<br>• Membantu sintesis provitamin D<br>• Fotolitografi chip silikon mikroprosesor | Sengatan matahari (*sunburn*), katarak mata, penuaan dini, memicu kanker kulit (melanoma) |
| **Sinar-X (*Röntgen*)** | $3 \times 10^{16} - 3 \times 10^{19}\text{ Hz}$ | $0{,}01\text{ nm} - 10\text{ nm}$ | Tumbukan berkas elektron cepat pada anoda logam berat (*Bremsstrahlung*) | • Foto Rontgen medis (melihat retak tulang)<br>• Pemindai CT Scan organ dalam tubuh<br>• Analisis difraksi struktur kristal zat padat<br>• Pemindai keamanan bagasi di bandara | Radiasi pengion: merusak DNA, memicu mutasi genetik, leukemia, kerusakan jaringan sel |
| **Sinar Gamma ($\gamma$)** | $> 3 \times 10^{19}\text{ Hz}$ | $< 10^{-11}\text{ m}$ (skala inti) | Peluruhan radioaktif inti atom tidak stabil, reaksi nuklir fisi/fusi, supernova | • Radioterapi sel kanker (*Gamma Knife*)<br>• Sterilisasi masal alat medis & bahan makanan<br>• Pemuliaan mutasi bibit unggul pertanian<br>• Uji tak merusak (*non-destructive testing*) las industri | Daya tembus terdahsyat; mematikan sel hidup seketika, penyakit radiasi akut (*ARS*) |

---

### E. Rincian Khusus Spektrum Cahaya Tampak & Gelombang Mikro

#### 1. Spektrum Cahaya Tampak:
Urutan warna cahaya tampak dari **panjang gelombang terpanjang** (frekuensi terkecil) ke **panjang gelombang terpendek** (frekuensi terbesar):

$$\text{Merah} \to \text{Jingga} \to \text{Kuning} \to \text{Hijau} \to \text{Biru} \to \text{Nila} \to \text{Ungu}$$
* **Cahaya Merah:** $\lambda \approx 620 - 750\text{ nm}$ ($f \approx 4{,}0 - 4{,}8 \times 10^{14}\text{ Hz}$). Memiliki pembelokan paling kecil saat didispersikan oleh prisma kaca.
* **Cahaya Ungu:** $\lambda \approx 380 - 420\text{ nm}$ ($f \approx 7{,}1 - 7{,}9 \times 10^{14}\text{ Hz}$). Memiliki energi foton terbesar dan mengalami pembelokan paling kuat saat didispersikan.

#### 2. Prinsip Kerja Radar (*Radio Detection and Ranging*):
Radar memancarkan pulsa gelombang mikro berkecepatan cahaya $c$ ke arah target (pesawat, kapal, atau awan hujan). Pulsa dipantulkan kembali oleh target dan ditangkap oleh antena penerima.
* **Jarak Objek Sasaran ($s$):**
  $$s = \frac{c \cdot \Delta t}{2}$$
  * $s$ = jarak objek ke pemancar radar ($\text{meter, m}$)
  * $c = 3 \times 10^8\text{ m/s}$ = cepat rambat gelombang mikro
  * $\Delta t$ = selang waktu antara saat pulsa dipancarkan dan gema pantulannya diterima kembali
  * *Alasan pembagian dengan 2:* Pulsa menempuh lintasan bolak-balik (pergi dan pulang).

#### 3. Panjang Gelombang Minimum Sinar-X (Batas Duane-Hunt):
Ketika seluruh energi kinetik elektron yang dipercepat oleh beda potensial tegangan $V$ diubah secara serentak menjadi sebutir foton sinar-X tunggal:
$$E_k = e \cdot V = h \cdot f_{\max} = \frac{h \cdot c}{\lambda_{\min}}$$
$$\lambda_{\min} = \frac{h \cdot c}{e \cdot V} = \frac{12.400\text{ \AA}\cdot\text{V}}{V}$$
* $\lambda_{\min}$ = panjang gelombang terpendek sinar-X ($\text{meter}$)
* $V$ = beda potensial tabung rontgen ($\text{Volt}$)

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 25:**
> Sebuah stasiun riset astrofisika dan telekomunikasi mengoperasikan berbagai instrumen elektromagnetik:
>
> 1. **(Topik Gelombang Radio & Foton):** Sebuah stasiun radio komersial memancarkan siaran gelombang radio FM pada frekuensi $f = 100\text{ MHz} = 10^8\text{ Hz}$ dengan daya rata-rata pemancar $P = 60\text{ kW} = 6 \times 10^4\text{ Watt}$. (Gunakan konstanta Planck $h = 6{,}63 \times 10^{-34}\text{ J}\cdot\text{s}$ dan $c = 3 \times 10^8\text{ m/s}$).
>    * a. Hitung panjang gelombang ($\lambda$) radio tersebut di udara!
>    * b. Hitung energi dari satu foton gelombang radio tersebut dalam satuan Joule dan elektron-volt ($\text{eV}$)!
>    * c. Hitung jumlah foton yang dipancarkan oleh antena stasiun radio tersebut setiap detiknya!
>
> 2. **(Topik Radar & Gelombang Mikro):** Sebuah stasiun pemantau lalu lintas udara (ATC) menggunakan radar dengan gelombang mikro untuk melacak posisi pesawat terbang tak dikenal.
>    * a. Pemancar radar mengirimkan pulsa gelombang mikro, dan pantulan pulsa tersebut ditangkap kembali oleh antena penerima $0{,}4\text{ milisekon}$ ($0{,}4 \times 10^{-3}\text{ s}$) kemudian. Tentukan jarak pesawat tersebut dari stasiun radar!
>    * b. Tiga detik kemudian, pulsa pantul diterima kembali dalam selang waktu $0{,}38\text{ milisekon}$. Tentukan kelajuan rata-rata pesawat terbang tersebut dan tentukan apakah pesawat sedang mendekati atau menjauhi radar!
>
> 3. **(Topik Hubungan Medan E, B, dan Intensitas Poynting):** Berkas sinar laser merambat di ruang hampa dengan kuat medan listrik maksimum $E_{\max} = 1200\text{ V/m}$. (Gunakan $\mu_0 = 4\pi \times 10^{-7}\text{ T}\cdot\text{m/A}$).
>    * a. Hitung amplitudo kuat medan magnetik maksimum ($B_{\max}$) dari gelombang laser tersebut!
>    * b. Hitung intensitas radiasi rata-rata laser tersebut ($\bar{S}$)!
>    * c. Jika berkas laser berintensitas tersebut masuk ke dalam medium kaca yang memiliki permitivitas relatif $\varepsilon_r = 2{,}25$ dan permeabilitas relatif $\mu_r = 1$, tentukan indeks bias kaca dan cepat rambat gelombang di dalam kaca tersebut!
>
> 4. **(Topik Produksi Sinar-X & Batas Duane-Hunt):** Sebuah tabung rontgen medis dioperasikan pada beda potensial pemercepat $V = 50\text{ kV} = 5 \times 10^4\text{ Volt}$. (Muatan elektron $e = 1{,}6 \times 10^{-19}\text{ C}$).
>    * a. Hitung frekuensi maksimum ($f_{\max}$) foton sinar-X yang dipancarkan!
>    * b. Hitung panjang gelombang minimum ($\lambda_{\min}$) dari spektrum kontinyu sinar-X tersebut dalam satuan meter dan Angstrom ($\text{\AA}$)!
>
> 5. **(Topik Analisis Spektrum & Sifat-Sifat GEM):**
>    * a. Urutkan keempat spektrum berikut dari daya tembus terlemah ke daya tembus terkuat: *Cahaya merah, Sinar gamma, Gelombang mikro, Sinar ultraviolet*!
>    * b. Jelaskan mengapa sinar ultraviolet mampu membunuh bakteri patogen dan memicu fluoresensi, sedangkan gelombang radio tidak mampu melakukannya!
>    * c. Mengapa gelombang radio AM mampu menjangkau wilayah di balik pegunungan ribuan kilometer tanpa stasiun relai, sedangkan gelombang siaran televisi tidak mampu?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Gelombang Radio & Paket Foton):**
  * $f = 100\text{ MHz} = 10^8\text{ Hz}$, $P = 6 \times 10^4\text{ W}$.
  * **a. Panjang Gelombang:**
    $$\lambda = \frac{c}{f} = \frac{3 \times 10^8\text{ m/s}}{10^8\text{ Hz}} = 3\text{ meter}$$
  * **b. Energi Satu Foton ($E$):**
    $$E = h \cdot f = (6{,}63 \times 10^{-34}\text{ J}\cdot\text{s}) \times 10^8\text{ Hz} = 6{,}63 \times 10^{-26}\text{ Joule}$$
    * Dalam satuan elektron-volt ($\text{eV}$):
      $$E = \frac{6{,}63 \times 10^{-26}\text{ J}}{1{,}6 \times 10^{-19}\text{ J/eV}} \approx 4{,}14 \times 10^{-7}\text{ eV}$$
  * **c. Jumlah Foton per Detik ($N/t$):**
    * Daya $P$ adalah energi total per detik: $P = \frac{E_{\text{tot}}}{t} = \left(\frac{N}{t}\right) \cdot E$.
    $$\frac{N}{t} = \frac{P}{E} = \frac{6 \times 10^4\text{ J/s}}{6{,}63 \times 10^{-26}\text{ J/foton}} \approx 9{,}05 \times 10^{29}\text{ foton per detik}$$

* **Jawaban Bagian 2 (Radar & Kelajuan Pesawat):**
  * **a. Jarak Pesawat Mula-mula ($s_1$):**
    $$\Delta t_1 = 0{,}4\text{ ms} = 0{,}4 \times 10^{-3}\text{ s}$$
    $$s_1 = \frac{c \cdot \Delta t_1}{2} = \frac{(3 \times 10^8\text{ m/s}) \times (0{,}4 \times 10^{-3}\text{ s})}{2} = \frac{1{,}2 \times 10^5}{2} = 60.000\text{ meter} = 60\text{ km}$$
  * **b. Jarak Pesawat Kedua ($s_2$) dan Kelajuan Pesawat:**
    $$\Delta t_2 = 0{,}38\text{ ms} = 0{,}38 \times 10^{-3}\text{ s}$$
    $$s_2 = \frac{c \cdot \Delta t_2}{2} = \frac{(3 \times 10^8) \times (0{,}38 \times 10^{-3})}{2} = \frac{1{,}14 \times 10^5}{2} = 57.000\text{ meter} = 57\text{ km}$$
    * Karena jaraknya berkurang dari $60\text{ km}$ menjadi $57\text{ km}$, **pesawat sedang bergerak MENDEKATI stasiun radar**.
    * Perpindahan jarak pesawat: $\Delta s = 60.000 - 57.000 = 3.000\text{ meter}$.
    * Kelajuan rata-rata pesawat (dalam selang waktu $\Delta t_{\text{pesawat}} = 3\text{ sekon}$):
      $$v = \frac{\Delta s}{\Delta t_{\text{pesawat}}} = \frac{3.000\text{ m}}{3\text{ s}} = 1.000\text{ m/s}$$
      *(Atau setara dengan $3.600\text{ km/jam}$ / sekitar Mach 3)*.

* **Jawaban Bagian 3 (Medan E, B, dan Vektor Poynting):**
  * $E_{\max} = 1200\text{ V/m}$, $c = 3 \times 10^8\text{ m/s}$.
  * **a. Amplitudo Medan Magnetik ($B_{\max}$):**
    $$B_{\max} = \frac{E_{\max}}{c} = \frac{1200\text{ V/m}}{3 \times 10^8\text{ m/s}} = 4 \times 10^{-6}\text{ Tesla} = 4\ \mu\text{T}$$
  * **b. Intensitas Rata-rata Laser ($\bar{S}$):**
    $$\bar{S} = \frac{E_{\max}^2}{2\mu_0 c} = \frac{(1200)^2}{2 \times (4\pi \times 10^{-7}) \times (3 \times 10^8)} = \frac{1{,}44 \times 10^6}{240\pi} = \frac{6000}{\pi} \approx 1909{,}86\text{ Watt/m}^2$$
  * **c. Indeks Bias dan Kelajuan di dalam Kaca:**
    * Indeks bias kaca:
      $$n = \sqrt{\mu_r \varepsilon_r} = \sqrt{1 \times 2{,}25} = 1{,}5$$
    * Cepat rambat gelombang di dalam kaca:
      $$v = \frac{c}{n} = \frac{3 \times 10^8\text{ m/s}}{1{,}5} = 2 \times 10^8\text{ m/s}$$

* **Jawaban Bagian 4 (Produksi Sinar-X & Batas Duane-Hunt):**
  * $V = 5 \times 10^4\text{ Volt}$, $e = 1{,}6 \times 10^{-19}\text{ C}$, $h = 6{,}63 \times 10^{-34}\text{ J}\cdot\text{s}$.
  * **a. Frekuensi Maksimum Foton Sinar-X ($f_{\max}$):**
    $$e \cdot V = h \cdot f_{\max}$$
    $$f_{\max} = \frac{e \cdot V}{h} = \frac{(1{,}6 \times 10^{-19}\text{ C}) \times (5 \times 10^4\text{ V})}{6{,}63 \times 10^{-34}\text{ J}\cdot\text{s}} = \frac{8 \times 10^{-15}}{6{,}63 \times 10^{-34}} \approx 1{,}207 \times 10^{19}\text{ Hz}$$
  * **b. Panjang Gelombang Minimum ($\lambda_{\min}$):**
    $$\lambda_{\min} = \frac{c}{f_{\max}} = \frac{3 \times 10^8\text{ m/s}}{1{,}207 \times 10^{19}\text{ Hz}} \approx 2{,}486 \times 10^{-11}\text{ meter}$$
    * Dalam satuan Angstrom ($1\text{ \AA} = 10^{-10}\text{ m}$):
      $$\lambda_{\min} = 0{,}2486\text{ \AA} \approx 0{,}25\text{ \AA}$$

* **Jawaban Bagian 5 (Analisis Konseptual Spektrum):**
  * **a. Urutan Daya Tembus dari Terlemah ke Terkuat:**
    Daya tembus berbanding lurus dengan frekuensi ($f$) dan energi foton ($E$):
    $$\text{Gelombang mikro} < \text{Cahaya merah} < \text{Sinar ultraviolet} < \text{Sinar gamma}$$
  * **b. Alasan Efek Biologis dan Kimiawi Sinar UV vs Gelombang Radio:**
    * Energi foton sinar UV ($E = hf$) bernilai cukup besar ($\sim 3 - 100\text{ eV}$) untuk mengeksitasi elektron molekuler, merusak ikatan kimia basa nitrogen pada DNA mikroorganisme (membunuh bakteri), serta memicu transisi elektron pada bahan fosfor (fluoresensi).
    * Sebaliknya, energi foton gelombang radio sangat kecil ($\sim 10^{-7}\text{ eV}$), jauh di bawah ambang batas energi ikatan kimia, sehingga hanya memicu osilasi arus listrik makroskopik tanpa efek ionisasi atau fotokimia.
  * **c. Perilaku Perambatan Gelombang AM vs TV/FM:**
    * Gelombang radio AM (frekuensi menengah / MF $\sim 1\text{ MHz}$) memiliki sifat mudah **dipantulkan oleh lapisan ionosfer** bumi dan mengalami difraksi di sekitar kontur bumi sehingga dapat merambat mengikuti kelengkungan bumi melintasi jarak ribuan kilometer.
    * Gelombang TV dan radio FM (frekuensi sangat tinggi / VHF-UHF $\sim 100-800\text{ MHz}$) menembus langsung lapisan ionosfer ke luar angkasa tanpa dipantulkan dan merambat secara garis lurus (*line-of-sight*), sehingga mudah terhalang oleh lekukan bumi atau gunung tanpa bantuan menara pemancar relai (*repeater*).

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **GEM Tidak Bermassa dan Tidak Bermuatan:** Jangan terkecoh oleh soal yang menanyakan apakah sinar-X atau sinar gamma berbelok di dalam medan magnetik kuat. Jawabannya adalah **tetap lurus tanpa dibelokkan sama sekali** karena tidak memiliki muatan listrik! (Berbeda dengan partikel alfa $\alpha$ atau beta $\beta$ yang bermuatan listrik).
> 2. **Semua GEM Memiliki Kecepatan Sama di Ruang Hampa:** Gelombang radio, sinar inframerah, dan sinar gamma semuanya merambat dengan kecepatan yang persis sama di ruang hampa yaitu $c = 3 \times 10^8\text{ m/s}$. Perbedaan di antara mereka hanyalah frekuensi, panjang gelombang, dan energi fotonnya.
> 3. **Perhitungan Radar:** Jangan lupa membagi waktu pantul dengan angka 2 ($\Delta t / 2$) karena gelombang bergerak menempuh rute bolak-balik.
