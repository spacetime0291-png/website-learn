# Bab 6: Usaha dan Energi
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 6: Usaha dan Energi

---

### A. Konsep Dasar Usaha ($W$) dalam Fisika
Dalam fisika, usaha didefinisikan sebagai besarnya transfer energi mekanik yang dilakukan oleh suatu gaya pada benda yang menyebabkan benda tersebut mengalami perpindahan posisi.

#### 1. Formulasi Matematis Usaha:
Jika sebuah gaya konstan $\vec{F}$ bekerja pada suatu benda sehingga benda berpindah sejauh $\vec{s}$ dengan sudut apit $\theta$:
$$W = \vec{F} \cdot \vec{s} = F \cdot s \cdot \cos\theta$$
* $W$ = usaha mekanik (Joule atau $\text{J} = \text{N}\cdot\text{m} = \text{kg}\cdot\text{m}^2/\text{s}^2$)
* $F$ = besar gaya yang bekerja ($\text{N}$)
* $s$ = jarak perpindahan benda ($\text{m}$)
* $\theta$ = sudut apit antara vektor arah gaya $\vec{F}$ dan vektor arah perpindahan $\vec{s}$

#### 2. Tiga Kondisi Khusus Nilai Usaha:
1. **Usaha Bernilai Positif ($W > 0$):**  
   Terjadi jika sudut lancip $0^\circ \le \theta < 90^\circ$ (komponen gaya searah dengan perpindahan).  
   *Contoh:* Menarik kereta mainan ke depan, gaya gravitasi saat benda jatuh ke bawah.
2. **Usaha Bernilai Nol ($W = 0$):**  
   Terjadi jika:
   * Tidak ada perpindahan ($s = 0$), misalnya mendorong tembok kokoh sekuat tenaga.
   * Gaya tegak lurus arah perpindahan ($\theta = 90^\circ \implies \cos 90^\circ = 0$).  
     *Contoh:* Membawa koper sambil berjalan mendatar (gaya angkat ke atas, gerak mendatar), gaya normal pada lantai mendatar, gaya sentripetal pada gerak melingkar.
3. **Usaha Bernilai Negatif ($W < 0$):**  
   Terjadi jika sudut tumpul $90^\circ < \theta \le 180^\circ$ (gaya melawan arah perpindahan).  
   *Contoh:* Gaya gesek kinetis selalu berlawanan arah gerak ($\theta = 180^\circ \implies \cos 180^\circ = -1$), sehingga:
   $$W_{\text{gesek}} = -f_k \cdot s$$

#### 3. Usaha oleh Beberapa Gaya dan Usaha dari Grafik $F-s$:
* **Resultan Usaha:**
  $$W_{\text{total}} = \sum W_i = W_1 + W_2 + \dots = (\sum F_x) s$$
* **Grafik Gaya terhadap Perpindahan ($F-s$):**
  Usaha yang dilakukan oleh gaya (termasuk gaya yang nilainya berubah-ubah) sama dengan **luas daerah di bawah kurva grafik $F-s$**:
  $$W = \int_{s_1}^{s_2} F(s)\,ds = \text{Luas Bidang Kurva}$$

---

### B. Energi Kinetik dan Teorema Usaha-Energi Kinetik

#### 1. Energi Kinetik ($E_k$):
Energi yang dimiliki benda karena keadaannya yang sedang bergerak dengan kelajuan tertentu:
$$E_k = \frac{1}{2} m v^2$$
* $E_k$ = energi kinetik ($\text{J}$)
* $m$ = massa benda ($\text{kg}$)
* $v$ = kelajuan benda ($\text{m/s}$)
* *Hubungan dengan Momentum Linier ($p = mv$):*
  $$E_k = \frac{p^2}{2m}$$

#### 2. Teorema Usaha - Energi Kinetik:
Usaha total yang dilakukan oleh seluruh resultan gaya yang bekerja pada suatu benda sama dengan perubahan energi kinetik benda tersebut:
$$W_{\text{neto}} = \Delta E_k = E_{k2} - E_{k1} = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2$$

---

### C. Gaya Konservatif, Non-Konservatif, dan Energi Potensial

| Karakteristik | Gaya Konservatif | Gaya Non-Konservatif (Disipatif) |
| :--- | :--- | :--- |
| **Ketergantungan Lintasan** | Usaha **TIDAK bergantung pada lintasan**, hanya bergantung posisi awal dan akhir. | Usaha **sangat bergantung pada bentuk dan panjang lintasan**. |
| **Usaha Lintasan Tertutup** | Nol ($W_{\text{siklis}} = \oint \vec{F}\cdot d\vec{s} = 0$). | Tidak nol (energi terus hilang/terbuang). |
| **Energi yang Terlibat** | Berasosiasi dengan energi potensial: $W_{\text{kons}} = -\Delta E_p$. | Mengubah energi mekanik menjadi energi termal/kalor atau bunyi. |
| **Contoh Fisis** | Gaya gravitasi bumi, gaya pegas elastis, gaya elektrostatis Coulomb. | Gaya gesekan kinetis, gaya hambat udara, gaya viskositas fluida. |

#### 1. Energi Potensial Gravitasi ($E_p$):
Energi yang tersimpan pada benda akibat posisinya dalam medan gravitasi terhadap suatu bidang acuan ($h = 0$):
$$E_p = m \cdot g \cdot h$$
* Hubungan usaha gaya gravitasi:
  $$W_{\text{gravitasi}} = -\Delta E_p = -(mgh_2 - mgh_1) = mg(h_1 - h_2)$$

#### 2. Energi Potensial Pegas ($E_{p,\text{pegas}}$):
Energi yang tersimpan pada pegas elastis ketika diregangkan atau dimampatkan sejauh $x$ dari posisi setimbangnya (mengikuti Hukum Hooke $F = kx$):
$$E_{p,\text{pegas}} = \frac{1}{2} k x^2$$
* $k$ = konstanta pegas ($\text{N/m}$)
* $x$ = pertambahan panjang / simpangan pegas ($\text{m}$)

---

### D. Hukum Kekekalan Energi Mekanik (HKEM)
Energi mekanik ($E_m$) adalah jumlah total dari energi kinetik dan energi potensial sistem:
$$E_m = E_p + E_k$$

#### 1. Kondisi Konservatif Murni (Tanpa Gesekan / Sistem Licin):
Jika pada sistem hanya bekerja gaya-gaya konservatif, maka energi mekanik total sistem bernilai **kekal (konstan)** di setiap titik lintasan:
$$E_{m1} = E_{m2} \iff E_{p1} + E_{k1} = E_{p2} + E_{k2}$$
$$mgh_1 + \frac{1}{2}mv_1^2 = mgh_2 + \frac{1}{2}mv_2^2$$

#### Aplikasi Gerak Melingkar Vertikal Licin (Looping Roller Coaster):
Sebuah kereta meluncur dari ketinggian $h$ lalu memasuki lintasan lingkaran vertikal berjari-jari $R$:
* **Syarat Tidak Lepas di Puncak Loop:** Gaya normal di puncak $N \ge 0 \implies v_{\text{puncak}} \ge \sqrt{gR}$.
* **Ketinggian Pelepasan Minimum dari Keadaan Diam ($v_0 = 0$):**
  $$mgh_{\min} = mg(2R) + \frac{1}{2}m(v_{\text{puncak}})^2 = 2mgR + \frac{1}{2}m(gR) \implies h_{\min} = 2{,}5 R = \frac{5}{2}R$$

#### 2. Kondisi Non-Konservatif (Terdapat Gaya Gesekan Kasar):
Jika terdapat gaya gesek atau hambatan udara, sebagian energi mekanik hilang berubah menjadi energi kalor ($Q$). Usaha gaya non-konservatif sama dengan perubahan energi mekanik:
$$W_{\text{non-konservatif}} = \Delta E_m = E_{m2} - E_{m1}$$
$$-f_k \cdot s = (E_{p2} + E_{k2}) - (E_{p1} + E_{k1})$$
$$E_{p1} + E_{k1} = E_{p2} + E_{k2} + f_k \cdot s$$

---

### E. Daya Mekanik dan Efisiensi Mesin

#### 1. Daya ($P$):
Laju perubahan atau kecepatan transfer usaha/energi per satuan waktu:
$$P = \frac{W}{t} = \frac{\Delta E}{t}$$
* Satuan SI: $\text{J/s} = \text{Watt}$ ($\text{W}$). Konversi daya kuda: $1\text{ HP} = 1\text{ PK} \approx 746\text{ Watt}$.
* **Daya pada Kecepatan Konstan:**
  Jika benda bergerak dengan kelajuan tetap $v$ akibat dorongan gaya $F$:
  $$P = \vec{F} \cdot \vec{v} = F \cdot v \cdot \cos\theta$$

#### 2. Efisiensi Mesin ($\eta$):
Perbandingan antara daya keluaran yang berguna (*output*) dengan daya masukan total (*input*):
$$\eta = \frac{P_{\text{keluar}}}{P_{\text{masuk}}} \times 100\% = \frac{W_{\text{keluar}}}{W_{\text{masuk}}} \times 100\%$$

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 6:**
> Sebuah balok bermassa $m = 2\text{ kg}$ dilepaskan dari keadaan diam di titik A pada puncak bidang miring licin setinggi $h = 5\text{ meter}$ di atas lantai dasar. Ambil $g = 10\text{ m/s}^2$.
> 1. Hitung kelajuan balok saat tepat tiba di dasar bidang miring (titik B)!
> 2. Di dasar bidang miring, balok meluncur di lantai datar kasar sepanjang lintasan $s = 4\text{ meter}$ dengan koefisien gesekan kinetis $\mu_k = 0{,}25$ menuju titik C. Tentukan besar usaha yang dilakukan oleh gaya gesek sepanjang lintasan BC!
> 3. Tentukan kelajuan balok saat tiba di titik C setelah melintasi lantai kasar tersebut!
> 4. Di titik C, balok menabrak dan memampatkan sebuah pegas horizontal ringan dengan konstanta pegas $k = 800\text{ N/m}$. Jika lantai di bawah pegas licin, berapakah pemampatan maksimum pegas ($\Delta x_{\max}$) hingga balok berhenti sesaat?
> 5. Sebuah derek listrik digunakan untuk mengangkat kembali balok bermassa $2\text{ kg}$ tersebut dari lantai dasar ke puncak setinggi $5\text{ meter}$ dengan kelajuan konstan dalam waktu $t = 4\text{ sekon}$. Jika efisiensi motor derek adalah $\eta = 80\%$, hitung daya masukan (*daya listrik*) yang dibutuhkan motor derek tersebut!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Kelajuan di Titik B - HKEM Bidang Licin):**
  * Titik A: $v_A = 0$, $h_A = 5\text{ m}$. Titik B: $h_B = 0$.
  * Karena bidang miring licin (konservatif):
    $$E_{mA} = E_{mB} \implies mgh_A + \frac{1}{2}mv_A^2 = mgh_B + \frac{1}{2}mv_B^2$$
    $$(2)(10)(5) + 0 = 0 + \frac{1}{2}(2)v_B^2 \implies 100 = v_B^2 \implies v_B = \sqrt{100} = 10\text{ m/s}$$

* **Jawaban Bagian 2 (Usaha Gaya Gesek BC):**
  * Di lantai datar, gaya normal $N = mg = 2 \times 10 = 20\text{ N}$.
  * Gaya gesek kinetis:
    $$f_k = \mu_k \cdot N = 0{,}25 \times 20 = 5\text{ N}$$
  * Usaha gaya gesek (berlawanan arah perpindahan, $\theta = 180^\circ$):
    $$W_{\text{gesek}} = -f_k \cdot s = -(5\text{ N})(4\text{ m}) = -20\text{ Joule}$$

* **Jawaban Bagian 3 (Kelajuan di Titik C - Teorema Usaha-Energi):**
  * Menggunakan teorema usaha-energi kinetik antara titik B dan C:
    $$W_{\text{gesek}} = \Delta E_k = E_{kC} - E_{kB}$$
    $$-20 = \frac{1}{2}m v_C^2 - \frac{1}{2}m v_B^2 \implies -20 = \frac{1}{2}(2)v_C^2 - \frac{1}{2}(2)(10^2)$$
    $$-20 = v_C^2 - 100 \implies v_C^2 = 80 \implies v_C = \sqrt{80} = 4\sqrt{5}\text{ m/s} \approx 8{,}94\text{ m/s}$$

* **Jawaban Bagian 4 (Pemampatan Maksimum Pegas):**
  * Balok dari titik C menumbuk pegas licin hingga berhenti ($v = 0$):
    Seluruh energi kinetik di titik C berubah menjadi energi potensial elastis pegas:
    $$E_{kC} = E_{p,\text{pegas}} \implies \frac{1}{2}m v_C^2 = \frac{1}{2}k (\Delta x_{\max})^2$$
    $$\frac{1}{2}(2)(80) = \frac{1}{2}(800)(\Delta x_{\max})^2 \implies 80 = 400 (\Delta x_{\max})^2$$
    $$(\Delta x_{\max})^2 = \frac{80}{400} = 0{,}20 \implies \Delta x_{\max} = \sqrt{0{,}20} \approx 0{,}447\text{ m} = 44{,}7\text{ cm}$$

* **Jawaban Bagian 5 (Daya & Efisiensi Motor Derek):**
  * Usaha berguna untuk mengangkat balok setinggi $5\text{ m}$ pada kecepatan tetap:
    $$W_{\text{keluar}} = m g h = (2)(10)(5) = 100\text{ Joule}$$
  * Daya keluaran berguna:
    $$P_{\text{keluar}} = \frac{W_{\text{keluar}}}{t} = \frac{100\text{ J}}{4\text{ s}} = 25\text{ Watt}$$
  * Menggunakan rumus efisiensi $\eta = \frac{P_{\text{keluar}}}{P_{\text{masuk}}} \times 100\%$:
    $$80\% = \frac{25\text{ W}}{P_{\text{masuk}}} \times 100\% \implies 0{,}8 = \frac{25}{P_{\text{masuk}}} \implies P_{\text{masuk}} = \frac{25}{0{,}8} = 31{,}25\text{ Watt}$$

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Gaya Tegak Lurus Tidak Melakukan Usaha:** Gaya yang selalu membentuk sudut $90^\circ$ terhadap vektor perpindahan (seperti gaya normal pada jalan datar dan gaya sentripetal pada gerak melingkar) memiliki nilai usaha $W = 0$, artinya gaya-gaya ini tidak mengubah besarnya kelajuan/energi kinetik benda.
> 2. **Bidang Acuan Ketinggian ($h = 0$):** Penentuan ketinggian energi potensial gravitasi bersifat relatif. Pilihlah titik terendah pada lintasan sebagai acuan $h = 0$ agar perhitungan selalu bernilai non-negatif dan memudahkan substitusi.
> 3. **Disipasi Energi:** Energi tidak pernah hilang musnah. Dalam sistem kasar, berkurangnya energi mekanik selalu bertransformasi menjadi kalor/termal persis sebesar $|W_{\text{gesek}}| = f_k \cdot s$.
