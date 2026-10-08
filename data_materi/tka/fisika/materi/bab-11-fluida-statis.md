# Bab 11: Fluida Statis
**Kategori:** TKA Fisika | **Blok:** Blok 2: Fluida & Termofisika

## Bab 11: Fluida Statis

---

### A. Tekanan, Massa Jenis, dan Tekanan Hidrostatis
Fluida statis mempelajari zat alir (cairan dan gas) yang berada dalam kondisi diam atau tidak bergerak relatif terhadap wadahnya.

#### 1. Massa Jenis ($\rho$) dan Tekanan ($P$):
* **Massa Jenis:** Kerapatan massa per satuan volume:
  $$\rho = \frac{m}{V} \quad (\text{kg/m}^3 \text{ atau g/cm}^3)$$
  * Konversi: $1\text{ g/cm}^3 = 1000\text{ kg/m}^3$. Massa jenis air murni $\rho_{\text{air}} = 1000\text{ kg/m}^3 = 1\text{ g/cm}^3$.
* **Tekanan:** Gaya normal yang bekerja tegak lurus per satuan luas bidang:
  $$P = \frac{F}{A} \quad (\text{N/m}^2 = \text{Pascal / Pa})$$
  * Konversi satuan tekanan umum:
    $$1\text{ atm} = 1{,}013 \times 10^5\text{ Pa} \approx 10^5\text{ Pa} = 1{,}013\text{ bar} = 76\text{ cmHg} = 760\text{ mmHg}$$

#### 2. Tekanan Hidrostatis ($P_h$):
Tekanan yang dialami oleh suatu titik di dalam zat cair yang diam murni akibat berat kolom fluida di atas titik tersebut:
$$P_h = \rho \cdot g \cdot h$$
* $P_h$ = tekanan hidrostatis ($\text{Pa}$)
* $\rho$ = massa jenis zat cair ($\text{kg/m}^3$)
* $g$ = percepatan gravitasi bumi ($\text{m/s}^2$)
* $h$ = **kedalaman titik diukur tegak lurus dari permukaan cairan ke bawah** ($\text{m}$)

> [!WARNING]
> **Jebakan Kedalaman ($h$):**
> Nilai $h$ adalah jarak dari **permukaan air**, BUKAN tinggi dari dasar wadah!  
> Jika bejana memiliki tinggi air total $120\text{ cm}$ dan ikan berenang pada ketinggian $20\text{ cm}$ dari dasar bejana, maka kedalaman hidrostatisnya adalah:
> $$h = 120\text{ cm} - 20\text{ cm} = 100\text{ cm} = 1{,}0\text{ meter}$$

#### 3. Tekanan Mutlak (Tekanan Total):
Jika permukaan cairan terbuka langsung ke udara luar yang memiliki tekanan atmosfer $P_0$:
$$P_{\text{mutlak}} = P_0 + P_h = P_0 + \rho g h$$
* Tekanan *Gauge* (terukur oleh manometer): $P_{\text{gauge}} = P_{\text{mutlak}} - P_0 = P_h$.

---

### B. Hukum Pokok Hidrostatis dan Pipa U
*"Semua titik yang terletak pada bidang mendatar yang sama di dalam satu jenis zat cair yang homogen dan dalam keadaan setimbang memiliki tekanan hidrostatis yang sama besar."*

```text
       Zat 1 (Minyak) │       │
             ┌────────┤       │
         h_1 │        │       │ Zat 2 (Air)
             ▼────────┼───────┼────────  (Bidang Batas Acuan)
                      │       │ h_2
                      └───────┘
```

Jika pipa U diisi dua zat cair berbeda yang tidak saling bercampur (misal air bermassa jenis $\rho_1$ dan minyak bermassa jenis $\rho_2$):
$$P_A = P_B \implies \rho_1 \cdot h_1 = \rho_2 \cdot h_2$$
* $h_1, h_2$ = tinggi kolom masing-masing zat cair diukur dari garis batas bidang acuan yang sama.

---

### C. Hukum Pascal dan Dongkrak Hidrolik
*"Tekanan yang diberikan pada fluida di dalam ruang tertutup akan diteruskan ke segala arah dan ke setiap bagian dinding fluida tersebut dengan sama besar tanpa berkurang."*

$$P_1 = P_2 \iff \frac{F_1}{A_1} = \frac{F_2}{A_2}$$

* **Formulasi Dongkrak Hidrolik:**
  $$F_2 = F_1 \left(\frac{A_2}{A_1}\right)$$
  Karena penampang pipa hidrolik umumnya berbentuk lingkaran dengan diameter $D$ atau jari-jari $r$ ($A = \frac{1}{4}\pi D^2$):
  $$F_2 = F_1 \left(\frac{D_2}{D_1}\right)^2 = F_1 \left(\frac{r_2}{r_1}\right)^2$$
* **Keuntungan Mekanis Dongkrak ($KM$):**
  $$KM = \frac{F_2}{F_1} = \frac{A_2}{A_1} = \left(\frac{D_2}{D_1}\right)^2$$
  *(Dengan gaya masukan kecil $F_1$, dapat dihasilkan gaya angkat $F_2$ yang berlipat ganda sesuai perbandingan kuadrat diameternya).*

---

### D. Hukum Archimedes dan Gaya Apung ($F_a$)
*"Setiap benda yang tercelup sebagian atau seluruhnya ke dalam fluida akan mengalami gaya ke atas (gaya apung) yang besarnya sama dengan berat fluida yang dipindahkan oleh benda tersebut."*

$$F_a = \rho_f \cdot V_{\text{celup}} \cdot g$$
* $F_a$ = gaya apung / gaya ke atas Archimedes ($\text{N}$)
* $\rho_f$ = massa jenis fluida cair tempat benda tercelup ($\text{kg/m}^3$)
* $V_{\text{celup}}$ = volume bagian benda yang tenggelam di bawah permukaan fluida ($\text{m}^3$)
* $g$ = percepatan gravitasi bumi ($\text{m/s}^2$)

#### Berat Semu Benda di Dalam Zat Cair:
Ketika ditimbang di dalam air, benda terasa lebih ringan karena ditopang oleh gaya apung:
$$w_{\text{semu}} = w_{\text{udara}} - F_a \iff F_a = w_{\text{udara}} - w_{\text{semu}}$$

#### Tiga Keadaan Benda di Dalam Fluida:

| Keadaan Benda | Syarat Hubungan Massa Jenis | Keseimbangan Gaya | Hubungan Volume Tercelup |
| :--- | :---: | :--- | :--- |
| **1. Terapung** | $\rho_b < \rho_f$ | $w = F_a \implies \rho_b V_b g = \rho_f V_c g$ | $\frac{V_c}{V_b} = \frac{\rho_b}{\rho_f}$ (Volume muncul: $V_{\text{muncul}} = V_b - V_c$) |
| **2. Melayang** | $\rho_b = \rho_f$ | $w = F_a$ | Seluruh benda tercelup ($V_c = V_b$) di sembarang kedalaman |
| **3. Tenggelam** | $\rho_b > \rho_f$ | $w > F_a$ (Benda berada di dasar wadah) | $V_c = V_b$. Gaya tekan dasar wadah: $N = w - F_a = (\rho_b - \rho_f)V_b g$ |

> [!TIP]
> **Trik Cepat Persentase Benda Terapung:**
> * Persentase volume tercelup: $\% V_{\text{celup}} = \left(\frac{\rho_b}{\rho_f}\right) \times 100\%$
> * Persentase volume yang terapung di atas permukaan air: $\% V_{\text{muncul}} = \left(1 - \frac{\rho_b}{\rho_f}\right) \times 100\%$
> * *Contoh:* Es ($\rho = 0{,}9\text{ g/cm}^3$) terapung di air laut ($\rho = 1{,}0\text{ g/cm}^3$) $\implies 90\%$ volume es tenggelam di bawah air, dan hanya $10\%$ yang tampak menyembul di permukaan.

---

### E. Tegangan Permukaan, Meniskus, dan Kapilaritas

#### 1. Tegangan Permukaan ($\gamma$):
Kecenderungan molekul-molekul di permukaan zat cair untuk saling tarik menarik ke arah dalam sehingga permukaan berperilaku seperti selaput elastis yang tegang.
* Pada kawat berbentuk U dengan kawat luncur sepanjang $L$ (memiliki 2 sisi selaput cairan):
  $$\gamma = \frac{F}{2 L}$$
* Pada sebutir jarum atau silet berpanjang $L$ yang terapung: $\gamma = \frac{F}{2L}$.
* Satuan SI: $\text{N/m}$.

#### 2. Kohesi, Adhesi, dan Sudut Kontak ($\theta$):
* **Kohesi:** Gaya tarik menarik antar-molekul yang **sejenis** (antar-molekul cairan).
* **Adhesi:** Gaya tarik menarik antar-molekul yang **berbeda jenis** (antara cairan dan dinding wadah).
* **Meniskus Cekung:** Terjadi jika $\text{Adhesi} > \text{Kohesi}$ (misal air pada tabung kaca). Sudut kontak lancip ($\theta < 90^\circ$). Cairan membasahi dinding.
* **Meniskus Cembung:** Terjadi jika $\text{Kohesi} > \text{Adhesi}$ (misal air raksa pada tabung kaca). Sudut kontak tumpul ($\theta > 90^\circ$). Cairan tidak membasahi dinding.

#### 3. Gejala Kapilaritas:
Peristiwa naik atau turunnya permukaan zat cair di dalam pipa kapiler sempit beradius $r$:
$$h = \frac{2 \gamma \cos\theta}{\rho g r}$$
* $h$ = kenaikan/penurunan permukaan cairan dalam kapiler ($\text{m}$)
* $\gamma$ = tegangan permukaan zat cair ($\text{N/m}$)
* $\theta$ = sudut kontak antara cairan dan dinding tabung
* $r$ = jari-jari pipa kapiler ($\text{m}$)

---

### F. Viskositas Fluida dan Hukum Stokes

#### 1. Viskositas ($\eta$):
Ukuran kekentalan fluida yang menimbulkan gesekan internal antar lapisan fluida saat bergerak (satuan: $\text{Pa}\cdot\text{s}$ atau $\text{Poise}$, dengan $1\text{ Pa}\cdot\text{s} = 10\text{ Poise}$).

#### 2. Gaya Hambat Stokes ($F_s$):
Sebuah bola pejal beradius $r$ yang bergerak dengan kelajuan $v$ di dalam fluida kental mengalami gaya gesekan fluida:
$$F_s = 6 \pi \eta r v$$

#### 3. Kecepatan Terminal ($v_T$):
Kecepatan maksimum konstan yang dicapai bola saat jatuh dalam fluida kental karena resultan gaya pada bola bernilai nol ($\sum F = 0 \implies F_a + F_s = w$):
$$v_T = \frac{2 r^2 g}{9 \eta} (\rho_b - \rho_f)$$
* $\rho_b$ = massa jenis bola padat ($\text{kg/m}^3$)
* $\rho_f$ = massa jenis fluida kental ($\text{kg/m}^3$)
* $\eta$ = koefisien viskositas fluida ($\text{Pa}\cdot\text{s}$)

---

### G. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 11:**
> Selesaikan rangkaian studi kasus fluida statis berikut ($g = 10\text{ m/s}^2$ dan $P_0 = 10^5\text{ Pa}$):
>
> 1. **(Tekanan Hidrostatis):** Seorang penyelam menyelam di danau air tawar ($\rho = 1000\text{ kg/m}^3$) hingga mencapai kedalaman $h = 15\text{ meter}$.
>    * Hitung tekanan hidrostatis yang dirasakan oleh penyelam!
>    * Hitung tekanan mutlak total yang menekan tubuh penyelam!
> 2. **(Pipa U Dua Cairan):** Sebuah pipa U mula-mula diisi air ($\rho_{\text{air}} = 1000\text{ kg/m}^3$). Ke dalam kaki kanan pipa dituangkan minyak ($\rho_{\text{minyak}} = 800\text{ kg/m}^3$) setinggi $h_{\text{minyak}} = 10\text{ cm}$. Tentukan selisih ketinggian permukaan air pada kedua kaki pipa U tersebut!
> 3. **(Dongkrak Hidrolik):** Sebuah dongkrak hidrolik memiliki penampang piston kecil berdiameter $D_1 = 4\text{ cm}$ dan piston besar berdiameter $D_2 = 40\text{ cm}$. Piston besar digunakan untuk menopang mobil bermassa $m = 1600\text{ kg}$. Berapakah gaya minimum ($F_1$) yang harus dikerjakan pada piston kecil agar mobil dapat terangkat?
> 4. **(Archimedes & Benda Terapung):** Sebuah balok kayu bermassa $m = 6\text{ kg}$ dan bervolume total $V_b = 10 \times 10^{-3}\text{ m}^3$ dicelupkan ke dalam bejana berisi air ($\rho_{\text{air}} = 1000\text{ kg/m}^3$).
>    * Tentukan massa jenis balok kayu!
>    * Berapakah volume bagian balok kayu yang tercelup di dalam air ($V_c$) serta volume balok yang terapung di atas permukaan air ($V_{\text{muncul}}$)?
> 5. **(Viskositas & Kecepatan Terminal):** Sebuah kelereng baja beradius $r = 1\text{ mm} = 10^{-3}\text{ m}$ dan bermassa jenis $\rho_b = 7800\text{ kg/m}^3$ dijatuhkan ke dalam drum berisi oli pelumas bermassa jenis $\rho_f = 900\text{ kg/m}^3$ dengan viskositas $\eta = 0{,}11\text{ Pa}\cdot\text{s}$. Tentukan kelajuan terminal ($v_T$) kelereng saat meluncur stabil di dalam oli!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Tekanan Hidrostatis & Mutlak):**
  * Tekanan hidrostatis:
    $$P_h = \rho g h = (1000\text{ kg/m}^3)(10\text{ m/s}^2)(15\text{ m}) = 150.000\text{ Pa} = 1{,}5 \times 10^5\text{ Pa}$$
  * Tekanan mutlak total:
    $$P_{\text{mutlak}} = P_0 + P_h = 100.000\text{ Pa} + 150.000\text{ Pa} = 250.000\text{ Pa} = 2{,}5 \times 10^5\text{ Pa} = 2{,}5\text{ atm}$$

* **Jawaban Bagian 2 (Pipa U Dua Cairan):**
  * Persamaan kesetimbangan pipa U:
    $$\rho_{\text{minyak}} \cdot h_{\text{minyak}} = \rho_{\text{air}} \cdot h_{\text{air}}$$
    $$(800)(10\text{ cm}) = (1000) h_{\text{air}} \implies 8000 = 1000 h_{\text{air}} \implies h_{\text{air}} = 8\text{ cm}$$
  * Selisih ketinggian permukaan zat cair pada kedua kaki pipa:
    $$\Delta h = h_{\text{minyak}} - h_{\text{air}} = 10\text{ cm} - 8\text{ cm} = 2\text{ cm}$$

* **Jawaban Bagian 3 (Dongkrak Hidrolik):**
  * Beban mobil pada penampang besar:
    $$F_2 = m \cdot g = 1600 \times 10 = 16.000\text{ N}$$
  * Menggunakan hubungan kuadrat diameter:
    $$F_1 = F_2 \left(\frac{D_1}{D_2}\right)^2 = 16.000 \times \left(\frac{4\text{ cm}}{40\text{ cm}}\right)^2 = 16.000 \times \left(\frac{1}{10}\right)^2 = 16.000 \times \frac{1}{100} = 160\text{ N}$$
    *(Hanya dengan gaya kecil $160\text{ N}$ atau setara beban $16\text{ kg}$, mobil $1600\text{ kg}$ berhasil terangkat).*

* **Jawaban Bagian 4 (Archimedes & Balok Terapung):**
  * Massa jenis kayu:
    $$\rho_b = \frac{m}{V_b} = \frac{6\text{ kg}}{10 \times 10^{-3}\text{ m}^3} = 600\text{ kg/m}^3$$
    *(Karena $\rho_b < \rho_{\text{air}}$, balok terbukti terapung).*
  * Volume tercelup ($V_c$):
    $$w = F_a \implies m g = \rho_{\text{air}} V_c g \implies 6 = 1000 V_c \implies V_c = \frac{6}{1000} = 6 \times 10^{-3}\text{ m}^3$$
    *(Atau $V_c = \frac{\rho_b}{\rho_f} V_b = \frac{600}{1000} \times 10 \times 10^{-3} = 6 \times 10^{-3}\text{ m}^3 = 60\%$ volume total).*
  * Volume muncul di atas air:
    $$V_{\text{muncul}} = V_b - V_c = (10 - 6) \times 10^{-3}\text{ m}^3 = 4 \times 10^{-3}\text{ m}^3 = 40\% \text{ volume total}$$

* **Jawaban Bagian 5 (Kecepatan Terminal Stokes):**
  * Selisih massa jenis: $\rho_b - \rho_f = 7800 - 900 = 6900\text{ kg/m}^3$.
  * Kecepatan terminal:
    $$v_T = \frac{2 r^2 g}{9 \eta} (\rho_b - \rho_f) = \frac{2 (10^{-3})^2 (10)}{9 (0{,}11)} \times 6900 = \frac{2 \times 10^{-6} \times 10 \times 6900}{0{,}99} = \frac{0{,}138}{0{,}99} \approx 0{,}1394\text{ m/s} \approx 13{,}94\text{ cm/s}$$

---

### H. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Gaya Apung Hanya Bergantung pada Fluida:** Besar gaya apung $F_a$ sama sekali **tidak bergantung pada massa jenis benda**, melainkan hanya bergantung pada massa jenis fluida ($\rho_f$) dan volume benda yang tercelup ($V_c$).
> 2. **Meniskus dan Sudut Kontak:** Zat cair membasahi dinding wadah kaca jika $\theta < 90^\circ$ (adhesi lebih kuat dari kohesi, permukaan naik pada pipa kapiler). Zat cair tidak membasahi dinding jika $\theta > 90^\circ$ (kohesi lebih kuat dari adhesi, permukaan turun pada pipa kapiler).
> 3. **Tekanan Mutlak vs Tekanan Gauge:** Jika soal menanyakan "tekanan yang dialami", pastikan mencermati apakah yang diminta tekanan hidrostatis murni atau tekanan total mutlak ($P_{\text{mutlak}} = P_0 + \rho gh$).
