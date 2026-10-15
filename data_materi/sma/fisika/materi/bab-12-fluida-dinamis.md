# Bab 12: Fluida Dinamis
**Kategori:** TKA Fisika | **Blok:** Blok 2: Fluida & Termofisika

## Bab 12: Fluida Dinamis

---

### A. Karakteristik Fluida Ideal
Dalam analisis fisika sekolah, fluida nyata disederhanakan dengan model **Fluida Ideal** yang memenuhi empat karakteristik utama:
1. **Inkompresibel (Tidak Termampatkan):** Massa jenis fluida konstan di setiap titik dan tidak berubah meskipun mengalami perubahan tekanan ($\rho = \text{konstan}$).
2. **Non-viskos (Tidak Kental):** Tidak ada gesekan internal antar lapisan fluida yang berdekatan maupun gesekan dengan dinding saluran ($\eta = 0$).
3. **Aliran Laminer (*Streamline*):** Garis alir fluida meluncur mulus, teratur, sejajar, dan tidak ada lintasan yang saling berpotongan (tidak ada pusaran / turbulensi).
4. **Aliran Stasioner (*Steady Flow*):** Kecepatan partikel fluida di suatu titik tertentu selalu konstan terhadap waktu (meskipun kecepatan di titik yang berbeda bisa berlainan).

---

### B. Debit Aliran dan Persamaan Kontinuitas

#### 1. Debit Aliran ($Q$):
Volume fluida yang mengalir melewati suatu penampang pipa per satuan waktu:
$$Q = \frac{V}{t} = \frac{A \cdot s}{t} = A \cdot v$$
* $Q$ = debit aliran fluida ($\text{m}^3/\text{s}$)
* $V$ = volume fluida ($\text{m}^3$)
* $A$ = luas penampang pipa ($\text{m}^2$)
* $v$ = kelajuan aliran fluida ($\text{m/s}$)

#### 2. Persamaan Kontinuitas:
Karena fluida inkompresibel dan tidak ada massa yang hilang atau bertambah di sepanjang pipa tertutup, maka **debit aliran di setiap penampang adalah konstan**:

$$Q_1 = Q_2 \iff A_1 v_1 = A_2 v_2$$

Jika penampang pipa berupa lingkaran dengan diameter $D$ atau jari-jari $r$:
$$v_2 = v_1 \left(\frac{A_1}{A_2}\right) = v_1 \left(\frac{D_1}{D_2}\right)^2 = v_1 \left(\frac{r_1}{r_2}\right)^2$$

* **Persamaan Kontinuitas pada Pipa Bercabang:**
  Debit fluida yang masuk ke titik percabangan sama dengan jumlah debit yang keluar dari cabang-cabangnya:
  $$Q_{\text{masuk}} = \sum Q_{\text{keluar}} \implies A_1 v_1 = A_2 v_2 + A_3 v_3 + \dots$$

> [!NOTE]
> **Kaidah Kontinuitas:**
> Kelajuan fluida **berbanding terbalik dengan luas penampang (atau kuadrat diameter)** pipa. Semakin sempit pipa saluran, kelajuan aliran fluida akan meningkat drastis!

---

### C. Asas dan Persamaan Bernoulli
Persamaan Bernoulli merupakan penerapan **Hukum Kekekalan Energi Mekanik** per satuan volume pada fluida ideal yang mengalir:

$$P + \frac{1}{2}\rho v^2 + \rho g h = \text{konstan}$$
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$
* $P$ = tekanan statis fluida ($\text{Pa}$)
* $\frac{1}{2}\rho v^2$ = tekanan dinamis fluida ($\text{Pa}$)
* $\rho g h$ = tekanan akibat energi potensial ketinggian gravitasi ($\text{Pa}$)
* $\rho$ = massa jenis fluida ($\text{kg/m}^3$)
* $v$ = kelajuan aliran fluida ($\text{m/s}$)
* $h$ = ketinggian pipa diukur dari bidang acuan tanah ($\text{m}$)

#### Asas Bernoulli pada Pipa Mendatar Horizontal ($h_1 = h_2$):
$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2 \iff P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2)$$

> [!WARNING]
> **Prinsip Intuitif Bernoulli yang Sering Menjebak:**
> * Di penampang yang **sempit**: Kelajuan fluida **besar** ($v$ naik), tetapi **tekanan fluidanya justru RENDAH** ($P$ turun).
> * Di penampang yang **lebar**: Kelajuan fluida **kecil** ($v$ turun), tetapi **tekanan fluidanya TINGGI** ($P$ naik).

---

### D. Penerapan Persamaan Bernoulli dalam Teknologi dan Sains

#### 1. Teorema Torricelli (Tangki Bocor Terbuka)
Sebuah tangki terbuka setinggi $H$ berisi zat cair mengalami kebocoran lubang kecil pada kedalaman $h$ dari permukaan cairan:

```text
       ┌───────────┐ ◄── Permukaan air (terbuka P_0)
       │           │
       │           │ ▲
       │           │ │ h (kedalaman lubang dari permukaan)
       │   ●═══════╪ ▼ ───► v = √(2gh)
       │   │       │
       │   │ H - h │ (tinggi lubang dari dasar tanah)
       └───┴───────┴───────────────► x = 2√(h(H-h))
```

* **Kelajuan Semburan Air Melalui Lubang Bocor:**
  $$v = \sqrt{2 g h}$$
  *(Sama persis dengan rumus gerak jatuh bebas dari ketinggian $h$)*.
* **Waktu Pancaran Air Jatuh Menyentuh Tanah:**
  $$t = \sqrt{\frac{2(H - h)}{g}}$$
* **Jarak Jangkauan Pancaran Mendatar Terjauh ($x$):**
  $$x = v \cdot t = \sqrt{2gh} \cdot \sqrt{\frac{2(H - h)}{g}} = 2\sqrt{h(H - h)}$$
* **Teorema Jangkauan Maksimum Torricelli:**
  Jarak pancaran mendatar maksimum ($x_{\max} = H$) tercapai tepat ketika lubang kebocoran berada **di tengah-tengah kedalaman air ($h = \frac{1}{2}H$)**.

---

#### 2. Venturimeter (Pengukur Kelajuan Aliran dalam Pipa)

##### a. Venturimeter Tanpa Manometer (Menggunakan Pipa Piezometer Tegak):
Cairan mengalir melalui pipa berpenampang $A_1$, menyempit ke $A_2$, dengan selisih tinggi cairan pada tabung tegak sebesar $\Delta h$:
$$v_1 = \sqrt{\frac{2 g \Delta h}{\left(\frac{A_1}{A_2}\right)^2 - 1}} = \sqrt{\frac{2 g \Delta h}{\left(\frac{D_1}{D_2}\right)^4 - 1}}$$
$$v_2 = \sqrt{\frac{2 g \Delta h}{1 - \left(\frac{A_2}{A_1}\right)^2}}$$

##### b. Venturimeter dengan Manometer Cairan Raksa ($\rho_r$):
$$v_1 = \sqrt{\frac{2 (\rho_r - \rho) g h}{\rho \left[\left(\frac{A_1}{A_2}\right)^2 - 1\right]}}$$

---

#### 3. Tabung Pitot (Pengukur Kelajuan Aliran Gas):
Digunakan pada pesawat terbang untuk mengukur kecepatan udara:
$$v = \sqrt{\frac{2 \rho_z g h}{\rho_{\text{gas}}}}$$
* $\rho_z$ = massa jenis zat cair pengisi manometer ($\text{kg/m}^3$)
* $\rho_{\text{gas}}$ = massa jenis gas yang diukur kelajuannya ($\text{kg/m}^3$)
* $h$ = selisih tinggi permukaan zat cair manometer ($\text{m}$)

---

#### 4. Gaya Angkat Sayap Pesawat Terbang (*Aerofoil*)
Penampang sayap pesawat dirancang melengkung di sisi atas dan datar di sisi bawah. Udara yang melintasi bagian atas menempuh jarak lebih jauh sehingga kelajuannya lebih cepat ($v_{\text{atas}} > v_{\text{bawah}}$).  
Berdasarkan Asas Bernoulli: $P_{\text{atas}} < P_{\text{bawah}}$.

* **Beda Tekanan Sayap:**
  $$\Delta P = P_{\text{bawah}} - P_{\text{atas}} = \frac{1}{2}\rho_{\text{udara}} (v_{\text{atas}}^2 - v_{\text{bawah}}^2)$$
* **Gaya Angkat Sayap ($F_{\text{angkat}}$):**
  $$F_{\text{angkat}} = \Delta P \cdot A = \frac{1}{2}\rho_{\text{udara}} (v_{\text{atas}}^2 - v_{\text{bawah}}^2) A$$
  * $A$ = luas penampang total sayap pesawat ($\text{m}^2$)
  * $\rho_{\text{udara}}$ = massa jenis udara ($\text{kg/m}^3$)
* **Kondisi Penerbangan Pesawat:**
  * **Terbang mendatar pada ketinggian tetap:** $F_{\text{angkat}} = m_{\text{pesawat}} \cdot g$
  * **Pesawat terangkat naik:** $F_{\text{angkat}} > m_{\text{pesawat}} \cdot g$
  * **Pesawat mendarat turun:** $F_{\text{angkat}} < m_{\text{pesawat}} \cdot g$

---

### E. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 12:**
> Selesaikan rangkaian studi kasus fluida dinamis berikut ($g = 10\text{ m/s}^2$ dan $\rho_{\text{air}} = 1000\text{ kg/m}^3$):
>
> 1. **(Persamaan Kontinuitas & Debit):** Air mengalir melalui sebuah pipa utama horizontal berdiameter $D_1 = 12\text{ cm}$ dengan kelajuan $v_1 = 2\text{ m/s}$. Di ujungnya, pipa menyempit menjadi pipa berdiameter $D_2 = 6\text{ cm}$.
>    * Hitung debit aliran air pada pipa tersebut!
>    * Hitung kelajuan aliran air pada penampang pipa sempit ($v_2$)!
> 2. **(Persamaan Bernoulli Pipa Mendatar):** Jika tekanan air pada penampang besar pipa di atas adalah $P_1 = 2 \times 10^5\text{ Pa}$, berapakah tekanan air pada penampang sempit ($P_2$)?
> 3. **(Teorema Torricelli Tangki Bocor):** Sebuah tangki penampung air berukuran besar memiliki ketinggian permukaan air $H = 5\text{ meter}$ dari atas tanah. Terjadi kebocoran lubang kecil pada dinding tangki pada kedalaman $h = 1{,}8\text{ meter}$ di bawah permukaan air.
>    * Tentukan kelajuan semburan air yang keluar dari lubang bocor!
>    * Tentukan waktu yang dibutuhkan pancaran air hingga mendarat di tanah!
>    * Tentukan jarak jangkauan mendatar pancaran air dari dasar tangki!
> 4. **(Gaya Angkat Sayap Pesawat):** Sebuah pesawat terbang memiliki total luas permukaan sayap $A = 50\text{ m}^2$. Saat terbang mendatar di udara bermassa jenis $\rho = 1{,}2\text{ kg/m}^3$, kelajuan aliran udara di bawah sayap adalah $v_{\text{bawah}} = 200\text{ m/s}$ dan di atas sayap adalah $v_{\text{atas}} = 250\text{ m/s}$.
>    * Tentukan besar gaya angkat yang dihasilkan oleh sayap pesawat!
>    * Berapakah massa maksimum pesawat beserta seluruh muatannya agar dapat mempertahankan posisi terbang horizontal pada kelajuan tersebut?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Kontinuitas & Debit):**
  * Luas penampang pipa 1 ($D_1 = 12\text{ cm} = 0{,}12\text{ m} \implies r_1 = 0{,}06\text{ m}$):
    $$A_1 = \pi r_1^2 = \pi (0{,}06)^2 = 3{,}6\pi \times 10^{-3}\text{ m}^2$$
  * Debit aliran ($Q$):
    $$Q = A_1 v_1 = (3{,}6\pi \times 10^{-3}\text{ m}^2)(2\text{ m/s}) = 7{,}2\pi \times 10^{-3}\text{ m}^3/\text{s} \approx 0{,}0226\text{ m}^3/\text{s} = 22{,}6\text{ liter/s}$$
  * Kelajuan di penampang kecil ($D_2 = 6\text{ cm}$):
    $$v_2 = v_1 \left(\frac{D_1}{D_2}\right)^2 = 2 \times \left(\frac{12}{6}\right)^2 = 2 \times (2)^2 = 2 \times 4 = 8\text{ m/s}$$

* **Jawaban Bagian 2 (Tekanan Bernoulli):**
  * Pipa mendatar ($h_1 = h_2$):
    $$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$
    $$(2 \times 10^5) + \frac{1}{2}(1000)(2^2) = P_2 + \frac{1}{2}(1000)(8^2)$$
    $$200.000 + 2000 = P_2 + 32.000 \implies 202.000 = P_2 + 32.000$$
    $$P_2 = 202.000 - 32.000 = 170.000\text{ Pa} = 1{,}7 \times 10^5\text{ Pa}$$
    *(Terbukti: saat kelajuan naik menjadi $8\text{ m/s}$, tekanan fluida turun menjadi $1{,}7 \times 10^5\text{ Pa}$).*

* **Jawaban Bagian 3 (Teorema Torricelli):**
  * $H = 5\text{ m}$, $h = 1{,}8\text{ m}$, maka jarak lubang ke tanah: $H - h = 5 - 1{,}8 = 3{,}2\text{ m}$.
  * Kelajuan semburan air:
    $$v = \sqrt{2 g h} = \sqrt{2(10)(1{,}8)} = \sqrt{36} = 6\text{ m/s}$$
  * Waktu jatuh ke tanah:
    $$t = \sqrt{\frac{2(H - h)}{g}} = \sqrt{\frac{2(3{,}2)}{10}} = \sqrt{\frac{6{,}4}{10}} = \sqrt{0{,}64} = 0{,}8\text{ sekon}$$
  * Jarak jangkauan mendatar:
    $$x = v \cdot t = 6 \times 0{,}8 = 4{,}8\text{ meter}$$
    *(Cek rumus: $x = 2\sqrt{h(H-h)} = 2\sqrt{1{,}8 \times 3{,}2} = 2\sqrt{5{,}76} = 2(2{,}4) = 4{,}8\text{ m} \implies$ Tepat!)*

* **Jawaban Bagian 4 (Gaya Angkat Sayap Pesawat):**
  * Beda kuadrat kelajuan:
    $$v_{\text{atas}}^2 - v_{\text{bawah}}^2 = 250^2 - 200^2 = 62.500 - 40.000 = 22.500\text{ m}^2/\text{s}^2$$
  * Gaya angkat sayap:
    $$F_{\text{angkat}} = \frac{1}{2}\rho (v_{\text{atas}}^2 - v_{\text{bawah}}^2) A = \frac{1}{2}(1{,}2)(22.500)(50) = 0{,}6 \times 1.125.000 = 675.000\text{ N}$$
  * Massa maksimum pesawat agar dapat terbang mendatar:
    $$F_{\text{angkat}} = m g \implies 675.000 = m(10) \implies m = 67.500\text{ kg} = 67{,}5\text{ ton}$$

---

### F. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Hubungan Kuadrat Pangkat Empat pada Venturimeter:** Berhati-hatilah pada perbandingan diameter venturimeter karena luas berbanding kuadrat diameter ($A \propto D^2$), sehingga suku rasio pada rumus kelajuan adalah berpangkat empat: $(D_1/D_2)^4$.
> 2. **Kedalaman $h$ Torricelli:** Pada rumus Torricelli $v = \sqrt{2gh}$, $h$ adalah jarak dari **permukaan cairan ke lubang bocor**. Sedangkan tinggi lubang dari **dasar tanah** adalah $(H - h)$ yang menentukan lama waktu air melayang di udara.
> 3. **Tekanan Rendah pada Kecepatan Tinggi:** Jangan mengira air berkecepatan tinggi memiliki tekanan tinggi! Tekanan hidrodinamis internal justru mengecil ketika kecepatan meningkat.
