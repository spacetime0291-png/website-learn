# Bab 5: Dinamika Gerak (Hukum Newton)
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 5: Dinamika Gerak (Hukum Newton)

---

### A. Konsep Dasar Gaya dan Ragam Gaya dalam Mekanika
Dinamika adalah cabang mekanika yang mempelajari penyebab timbulnya perubahan gerak benda. Penyebab utama perubahan gerak adalah **gaya ($\vec{F}$)**, yaitu suatu tarikan atau dorongan yang merupakan besaran vektor (memiliki besar dan arah, bersatuan Newton atau $\text{kg}\cdot\text{m/s}^2$).

#### 1. Gaya Berat ($w$ atau $\vec{W}$):
Gaya gravitasi bumi yang menarik massa benda selalu mengarah tegak lurus menuju pusat bumi (ke bawah):
$$w = m \cdot g$$
* $w$ = gaya berat ($\text{N}$)
* $m$ = massa benda ($\text{kg}$, besaran skalar inersial yang konstan di mana pun)
* $g$ = percepatan gravitasi bumi ($\text{m/s}^2$)

#### 2. Gaya Normal ($N$):
Gaya kontak (sentuh) yang bekerja tegak lurus terhadap bidang tumpu untuk menahan agar benda tidak menembus permukaan bidang sentuh. Nilai gaya normal **tidak selalu sama dengan gaya berat ($N \neq mg$)**, melainkan bergantung pada resultan gaya vertikal yang bekerja pada sistem!

#### 3. Gaya Gesek ($f$):
Gaya sentuh sejajar permukaan bidang kontak yang bekerja melawan kecenderungan arah gerak relatif benda:
* **Gaya Gesek Statis ($f_s$):** Bekerja saat benda masih diam. Nilainya menyesuaikan gaya penarik hingga mencapai batas maksimum:
  $$f_s \le f_{s,\max} = \mu_s \cdot N$$
  * Jika gaya penarik $F < f_{s,\max} \implies$ Benda tetap **diam**, gaya gesek aktual $f_s = F$.
  * Jika gaya penarik $F = f_{s,\max} \implies$ Benda **tepat akan bergerak** (ambang batas).
* **Gaya Gesek Kinetis ($f_k$):** Bekerja saat benda telah meluncur/bergerak relatif terhadap permukaan. Nilainya selalu konstan:
  $$f_k = \mu_k \cdot N$$
  * Secara empiris berlaku: $\mu_k \le \mu_s$ (koefisien gesek kinetis selalu lebih kecil atau sama dengan koefisien gesek statis).

#### 4. Gaya Tegangan Tali ($T$):
Gaya tarikan yang diteruskan di sepanjang tali. Pada tali ideal (dianggap tak bermassa dan tidak lentur), besar tegangan tali seragam di setiap titik tali.

---

### B. Tiga Hukum Newton tentang Gerak

#### 1. Hukum I Newton (Hukum Kelembaman / Inersia)
*"Setiap benda akan mempertahankan keadaan diam atau gerak lurus beraturannya, kecuali jika ada resultan gaya luar yang memaksanya untuk mengubah keadaan tersebut."*

$$\sum \vec{F} = \vec{0} \implies \vec{a} = \vec{0} \implies \vec{v} = \text{konstan} \text{ atau diam}$$

* **Sifat Kelembaman (Inersia):** Kecenderungan alami benda untuk mempertahankan status keadaannya. Ukuran kuantitatif inersia translasi adalah **massa benda ($m$)**.
* **Kerangka Acuan Inersial:** Kerangka acuan yang diam atau bergerak dengan kecepatan konstan (tidak dipercepat). Hukum-hukum Newton hanya berlaku valid pada kerangka inersial.

#### 2. Hukum II Newton (Hukum Fundamental Dinamika Gerak)
*"Percepatan yang dihasilkan oleh resultan gaya yang bekerja pada suatu benda berbanding lurus dengan resultan gayanya, searah dengan resultan gaya tersebut, dan berbanding terbalik dengan massa kelembaman benda."*

$$\sum \vec{F} = m \vec{a} \iff \vec{a} = \frac{\sum \vec{F}}{m}$$

* **Diagram Benda Bebas (*Free Body Diagram* / FBD):** Langkah mutlak dalam menyelesaikan persoalan dinamika gerak. Semua vektor gaya yang bekerja nyata pada benda harus digambarkan titik tangkap dan arahnya.

#### 3. Hukum III Newton (Hukum Aksi - Reaksi)
*"Ketika benda pertama mengerahkan gaya aksi pada benda kedua, benda kedua akan secara serentak mengerahkan gaya reaksi pada benda pertama yang besarnya sama, berlawanan arah, dan segaris kerja."*

$$\vec{F}_{\text{aksi}} = -\vec{F}_{\text{reaksi}}$$

> [!WARNING]
> **Empat Syarat Mutlak Pasangan Gaya Aksi-Reaksi:**
> 1. Besarnya selalu sama ($|\vec{F}_{\text{aksi}}| = |\vec{F}_{\text{reaksi}}|$).
> 2. Arahnya tepat berlawanan ($180^\circ$).
> 3. Bekerja pada satu garis kerja yang sama.
> 4. **Bekerja pada DUA BENDA YANG BERBEDA!**  
> *Konsekuensi Penting:* Karena bekerja pada dua benda yang berbeda, gaya aksi dan reaksi **TIDAK PERNAH DAPAT SALING MENIADAKAN** (tidak pernah menghasilkan resultan nol pada satu benda).
> * *Contoh SALAH kaprah:* Menganggap gaya normal ($N$) dan gaya berat ($w$) pada meja adalah pasangan aksi-reaksi. Itu SALAH! Keduanya bekerja pada benda yang sama (buku), sehingga keduanya adalah pasangan gaya seimbang (Hukum I Newton), bukan aksi-reaksi. Pasangan reaksi dari gaya berat buku adalah gaya tarik gravitasi buku terhadap bumi!

---

### C. Pemetaan Kasus Dinamika Standar Kurikulum SMA

#### Kasus 1: Benda di Lantai Datar

```text
       N ▲        F_tarik
         │       ↗ (sudut θ)
         │      /
    f_g ◄■─────► F_x
         │
       w ▼
```

1. **Gaya Tarik Mendatar ($F$ searah horizontal):**
   * Sumbu-$y$: $\sum F_y = 0 \implies N = mg$
   * Sumbu-$x$: $\sum F_x = m a \implies a = \frac{F - f_k}{m} = \frac{F - \mu_k mg}{m}$
2. **Gaya Tarik Serong ke Atas (Sudut $\theta$ terhadap horizontal):**
   * Komponen gaya: $F_x = F \cos\theta$, $F_y = F \sin\theta$ (ke atas mengurangi tekanan)
   * Sumbu-$y$: $N + F\sin\theta - mg = 0 \implies N = mg - F\sin\theta$
   * Sumbu-$x$: $F\cos\theta - f_k = m a \implies a = \frac{F\cos\theta - \mu_k(mg - F\sin\theta)}{m}$
3. **Gaya Tekan Serong ke Bawah (Sudut $\theta$ terhadap horizontal):**
   * Komponen gaya: $F_x = F \cos\theta$, $F_y = F \sin\theta$ (ke bawah menambah beban tekan)
   * Sumbu-$y$: $N - F\sin\theta - mg = 0 \implies N = mg + F\sin\theta$
   * Sumbu-$x$: $a = \frac{F\cos\theta - \mu_k(mg + F\sin\theta)}{m}$

---

#### Kasus 2: Benda di Bidang Miring Bersudut $\theta$

```text
           ▲ N
          /
         /■  (m)
        // \ 
       //   \ w_sejajar = mg sin θ
      //  θ  ▼ w_tegak_lurus = mg cos θ
     //───────
```

* Penguraian gaya berat:
  * Komponen sejajar bidang miring (menarik ke bawah): $w_\parallel = mg \sin\theta$
  * Komponen tegak lurus bidang miring: $w_\perp = mg \cos\theta$
* Gaya normal bidang miring:
  $$N = mg \cos\theta$$
* **Kondisi Ambang Tepat Akan Meluncur Bebas:**
  $$w_\parallel = f_{s,\max} \implies mg \sin\theta = \mu_s (mg \cos\theta) \implies \mu_s = \tan\theta$$
* **Percepatan Meluncur Turun Bebas (Bidang Kasar, $\mu_k$):**
  $$\sum F_\parallel = m a \implies mg \sin\theta - f_k = m a \implies mg \sin\theta - \mu_k mg \cos\theta = m a$$
  $$a = g(\sin\theta - \mu_k \cos\theta)$$
  *(Jika bidang licin, $\mu_k = 0 \implies a = g\sin\theta$)*
* **Ditarik ke Atas Bidang Miring dengan Gaya $F$:**
  $$a = \frac{F - mg\sin\theta - f_k}{m} = \frac{F - mg\sin\theta - \mu_k mg\cos\theta}{m}$$

---

#### Kasus 3: Dinamika di Dalam Lift (Gaya Desakan Kaki / Berat Semu $N$)
Seorang penumpang bermassa $m$ berdiri di atas timbangan lantai dalam lift:
1. **Lift Diam atau Bergerak dengan Kecepatan Tetap (GLB, $a = 0$):**
   $$N = mg$$
2. **Lift Bergerak ke Atas Dipercepat ATAU ke Bawah Diperlambat ($a$ berarah ke atas):**
   $$N - mg = m a \implies N = m(g + a)$$
   *(Badan terasa lebih berat, jarum timbangan naik).*
3. **Lift Bergerak ke Bawah Dipercepat ATAU ke Atas Diperlambat ($a$ berarah ke bawah):**
   $$mg - N = m a \implies N = m(g - a)$$
   *(Badan terasa lebih ringan, jarum timbangan turun).*
4. **Kabel Lift Putus (Jatuh Bebas, $a = g$):**
   $$N = m(g - g) = 0$$
   *(Kondisi melayang tanpa bobot / weightlessness).*

---

#### Kasus 4: Sistem Dua Benda Bergandengan / Bertumpuk
Dua balok bermassa $m_1$ dan $m_2$ berada berdampingan di atas lantai licin didorong dengan gaya horizontal $F$ pada balok 1:
* Percepatan gerak bersama:
  $$a = \frac{F}{m_1 + m_2}$$
* Gaya kontak aksi-reaksi antara kedua balok ($F_{\text{kontak}}$):
  $$F_{\text{kontak}} = m_2 \cdot a = \left(\frac{m_2}{m_1 + m_2}\right)F$$

---

#### Kasus 5: Sistem Katrol Licin

```text
       [Katrol Licin]
          /     \
         |       |
       [m_1]   [m_2] (m_2 > m_1)
```

1. **Mesin Atwood (Dua Beban Bebas Menggantung, $m_2 > m_1$):**
   * Percepatan sistem gerak:
     $$a = \left(\frac{m_2 - m_1}{m_1 + m_2}\right)g$$
   * Tegangan tali penghubung ($T$):
     $$T = \left(\frac{2 m_1 m_2}{m_1 + m_2}\right)g$$
2. **Katrol Meja ($m_1$ di atas meja datar, $m_2$ menggantung bebas di tepi meja):**
   * Percepatan jika meja kasar dengan koefisien kinetis $\mu_k$:
     $$a = \frac{m_2 g - f_k}{m_1 + m_2} = \left(\frac{m_2 - \mu_k m_1}{m_1 + m_2}\right)g$$
   * Tegangan tali penghubung:
     $$T = m_1 a + \mu_k m_1 g = m_2 (g - a)$$

---

#### Kasus 6: Dinamika Gerak Melingkar (Gaya Sentripetal $F_s$)
Gaya sentripetal bukan jenis gaya fisis mandiri, melainkan **resultan dari gaya-gaya riil** (gaya gesek, gaya normal, gravitasi, tegangan tali) yang bekerja tegak lurus menuju pusat lingkaran:
$$F_s = \frac{m v^2}{R} = m \omega^2 R$$

1. **Tikungan Datar Kasar (Mengandalkan Gesekan Statis Ban):**
   $$f_{s,\max} = F_s \implies \mu_s mg = \frac{m v^2}{R} \implies v_{\max} = \sqrt{\mu_s g R}$$
2. **Tikungan Miring Licin (Sudut Kemiringan $\theta$, Tanpa Gesekan):**
   * Komponen gaya normal: $N \sin\theta = \frac{m v^2}{R}$ dan $N \cos\theta = mg$.
   $$\tan\theta = \frac{v^2}{g R} \implies v_{\max} = \sqrt{g R \tan\theta}$$
3. **Gerak Melingkar Vertikal dengan Tali:**
   * **Di Titik Terendah (Bawah):**
     $$T_{\text{bawah}} - mg = \frac{m v^2}{R} \implies T_{\text{bawah}} = m\left(\frac{v^2}{R} + g\right) \quad (\text{Tegangan Maksimum})$$
   * **Di Titik Tertinggi (Atas):**
     $$T_{\text{atas}} + mg = \frac{m v^2}{R} \implies T_{\text{atas}} = m\left(\frac{v^2}{R} - g\right) \quad (\text{Tegangan Minimum})$$
   * **Kelajuan Kritis Minimum di Titik Puncak** (agar tali tetap tegang / $T_{\text{atas}} \ge 0$):
     $$v_{\text{kritis}} = \sqrt{g R}$$
4. **Ayunan Konis (Bandul Kerucut, Panjang Tali $L$, Sudut Simpangan $\theta$):**
   $$T \cos\theta = mg \implies T = \frac{mg}{\cos\theta}$$
   $$T \sin\theta = \frac{m v^2}{R} \implies v = \sqrt{g R \tan\theta} \quad (\text{dengan } R = L\sin\theta)$$
   * Periode putaran bandul kerucut:
     $$T_{\text{periode}} = 2\pi\sqrt{\frac{L\cos\theta}{g}}$$

---

### D. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 5:**
> Selesaikan rangkaian studi kasus dinamika gerak berikut dengan runtut ($g = 10\text{ m/s}^2$):
>
> 1. **(Bidang Datar Tarikan Serong):** Sebuah balok bermassa $m = 10\text{ kg}$ berada di atas lantai kasar dengan koefisien gesekan statis $\mu_s = 0{,}4$ dan koefisien gesekan kinetis $\mu_k = 0{,}2$. Balok ditarik dengan gaya $F = 50\text{ N}$ dengan sudut $\theta = 37^\circ$ terhadap arah mendatar ($\sin 37^\circ = 0{,}6$ dan $\cos 37^\circ = 0{,}8$).
>    * Hitung gaya normal yang dikerjakan lantai pada balok!
>    * Ujilah apakah balok sudah bergerak atau masih diam!
>    * Jika bergerak, tentukan percepatan gerak balok!
> 2. **(Bidang Miring Kasar):** Sebuah balok bermassa $m = 4\text{ kg}$ dilepas dari keadaan diam di puncak bidang miring kasar bersudut $\theta = 30^\circ$ dengan koefisien kinetis $\mu_k = \frac{\sqrt{3}}{6}$. Hitung gaya normal dan percepatan balok menuruni bidang miring!
> 3. **(Dinamika Lift):** Seorang siswa bermassa $m = 50\text{ kg}$ berdiri di atas timbangan badan di dalam sebuah lift. Berapakah angka skala gaya normal (desakan kaki) yang ditunjukkan timbangan saat:
>    * Lift bergerak ke atas dengan percepatan $a = 2\text{ m/s}^2$?
>    * Lift bergerak ke bawah dengan percepatan $a = 2\text{ m/s}^2$?
> 4. **(Mesin Katrol Atwood):** Dua buah benda bermassa $m_1 = 3\text{ kg}$ dan $m_2 = 5\text{ kg}$ dihubungkan tali ringan melalui katrol licin tanpa gesekan. Tentukan besar percepatan gerak kedua benda dan besar tegangan tali sistem!
> 5. **(Dinamika Tikungan Melingkar & Vertikal):**
>    * Sebuah mobil bermassa $1000\text{ kg}$ melewati tikungan datar berjari-jari $R = 40\text{ m}$ dengan koefisien gesekan statis ban $\mu_s = 0{,}4$. Hitung kelajuan maksimum aman mobil agar tidak selip keluar lintasan!
>    * Sebutir batu bermassa $0{,}5\text{ kg}$ diikat seutas tali berpanjang $R = 0{,}8\text{ m}$ lalu diputar vertikal. Berapakah kelajuan minimum di puncak agar tali tidak kendur? Jika di titik terbawah kelajuannya $6\text{ m/s}$, berapakah tegangan talinya?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Balok di Lantai Datar Tarikan Serong):**
  * $m = 10\text{ kg} \implies w = mg = 100\text{ N}$.
  * $F = 50\text{ N}, \theta = 37^\circ \implies F_x = 50 \cos 37^\circ = 40\text{ N}, F_y = 50 \sin 37^\circ = 30\text{ N}$.
  * **Gaya Normal ($N$):**
    $$\sum F_y = 0 \implies N + F_y - w = 0 \implies N = 100 - 30 = 70\text{ N}$$
  * **Uji Status Gerak:**
    $$f_{s,\max} = \mu_s \cdot N = 0{,}4 \times 70 = 28\text{ N}$$
    Karena gaya penggerak mendatar $F_x = 40\text{ N} > f_{s,\max} = 28\text{ N}$, maka **benda bergerak**.
  * **Percepatan Gerak Balok ($a$):**
    Karena bergerak, gaya gesek yang bekerja adalah gesekan kinetis:
    $$f_k = \mu_k \cdot N = 0{,}2 \times 70 = 14\text{ N}$$
    $$\sum F_x = m a \implies F_x - f_k = m a \implies 40 - 14 = 10 a \implies 26 = 10 a \implies a = 2{,}6\text{ m/s}^2$$

* **Jawaban Bagian 2 (Bidang Miring Kasar):**
  * $m = 4\text{ kg}, \theta = 30^\circ, \mu_k = \frac{\sqrt{3}}{6}$.
  * Gaya normal:
    $$N = mg \cos 30^\circ = (4)(10)\left(\frac{1}{2}\sqrt{3}\right) = 20\sqrt{3}\text{ N}$$
  * Gaya gesek kinetis:
    $$f_k = \mu_k N = \left(\frac{\sqrt{3}}{6}\right)(20\sqrt{3}) = \frac{3 \times 20}{6} = 10\text{ N}$$
  * Percepatan menuruni bidang miring:
    $$\sum F_\parallel = m a \implies mg \sin 30^\circ - f_k = m a$$
    $$(4)(10)(0{,}5) - 10 = 4 a \implies 20 - 10 = 4 a \implies 10 = 4 a \implies a = 2{,}5\text{ m/s}^2$$

* **Jawaban Bagian 3 (Dinamika di Dalam Lift):**
  * Massa siswa $m = 50\text{ kg}$, berat nyata $w = 500\text{ N}$.
  * **Lift bergerak ke atas dipercepat ($a = 2\text{ m/s}^2$):**
    $$N = m(g + a) = 50(10 + 2) = 50(12) = 600\text{ N}$$
    *(Timbangan terbaca setara $60\text{ kg}$, naik $10\text{ kg}$ dari bobot asal).*
  * **Lift bergerak ke bawah dipercepat ($a = 2\text{ m/s}^2$):**
    $$N = m(g - a) = 50(10 - 2) = 50(8) = 400\text{ N}$$
    *(Timbangan terbaca setara $40\text{ kg}$, turun $10\text{ kg}$ dari bobot asal).*

* **Jawaban Bagian 4 (Sistem Mesin Atwood):**
  * $m_1 = 3\text{ kg}, m_2 = 5\text{ kg}, g = 10\text{ m/s}^2$.
  * Percepatan sistem:
    $$a = \left(\frac{m_2 - m_1}{m_1 + m_2}\right)g = \left(\frac{5 - 3}{5 + 3}\right)(10) = \left(\frac{2}{8}\right)(10) = 2{,}5\text{ m/s}^2$$
  * Tegangan tali ($T$):
    $$T = \left(\frac{2 m_1 m_2}{m_1 + m_2}\right)g = \left(\frac{2 \times 3 \times 5}{3 + 5}\right)(10) = \left(\frac{30}{8}\right)(10) = \frac{300}{8} = 37{,}5\text{ N}$$
    *(Cek FBD benda 1: $T - m_1 g = 37{,}5 - 30 = 7{,}5 = (3)(2{,}5) = m_1 a \implies$ Tepat dan konsisten!)*

* **Jawaban Bagian 5 (Tikungan Melingkar & Putaran Vertikal):**
  * **Kelajuan aman mobil menikung datar:**
    $$v_{\max} = \sqrt{\mu_s g R} = \sqrt{0{,}4 \times 10 \times 40} = \sqrt{160} = 4\sqrt{10}\text{ m/s} \approx 12{,}65\text{ m/s} \approx 45{,}5\text{ km/jam}$$
  * **Kelajuan kritis minimum di titik tertinggi tali:**
    $$v_{\text{kritis}} = \sqrt{g R} = \sqrt{10 \times 0{,}8} = \sqrt{8} = 2\sqrt{2}\text{ m/s} \approx 2{,}83\text{ m/s}$$
  * **Tegangan tali di titik terendah saat $v = 6\text{ m/s}$:**
    $$T_{\text{bawah}} = m\left(\frac{v^2}{R} + g\right) = 0{,}5\left(\frac{6^2}{0{,}8} + 10\right) = 0{,}5\left(\frac{36}{0{,}8} + 10\right) = 0{,}5(45 + 10) = 0{,}5(55) = 27{,}5\text{ N}$$

---

### E. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Gaya Normal ($N$) Bukan Selalu $mg$:** Gaya normal adalah besaran variabel penyesuai kontak. Jangan pernah langsung mengasumsikan $N = mg$ tanpa menggambar diagram benda bebas! Pada tarikan condong, desakan lift, atau bidang miring, nilainya selalu berubah.
> 2. **Gaya Gesek Aktual:** Jika gaya tarik $F \le f_{s,\max}$, maka gaya gesek yang bekerja adalah **sebesar gaya tarik itu sendiri ($f_s = F$)**, bukan sebesar $f_{s,\max}$!
> 3. **Perbedaan Gaya Seimbang vs Aksi-Reaksi:** Gaya seimbang bekerja pada **satu benda yang sama** ($\sum \vec{F} = 0$), sedangkan pasangan aksi-reaksi bekerja serentak pada **dua benda yang berbeda**.
