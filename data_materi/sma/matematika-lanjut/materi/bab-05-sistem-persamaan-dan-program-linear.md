# Bab 5: Sistem Persamaan dan Program Linear
**Kategori:** TKA Matematika Lanjut | **Blok:** Blok 1: Aljabar dan Persamaan

## Bab 5: Sistem Persamaan dan Program Linear

---

### A. Sistem Persamaan Linear Tiga Variabel (SPLTV)
Sistem Persamaan Linear Tiga Variabel (SPLTV) adalah kumpulan dari tiga persamaan linear yang masing-masing memuat tiga variabel yang saling berkaitan, dengan bentuk baku:

$$\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\ a_2 x + b_2 y + c_2 z = d_2 \\ a_3 x + b_3 y + c_3 z = d_3 \end{cases}$$
* $x, y, z$ = variabel yang dicari nilainya
* $a_i, b_i, c_i$ = koefisien real
* $d_i$ = konstanta

#### 1. Metode Penyelesaian SPLTV:
* **Metode Campuran (Eliminasi - Substitusi):**
  1. Pilih dua persamaan, lalu eliminasi satu variabel tertentu (misal $z$) sehingga terbentuk persamaan linear dua variabel baru (Persamaan 4).
  2. Pilih pasangan persamaan lain, lalu eliminasi variabel yang sama ($z$) untuk menghasilkan persamaan linear dua variabel berikutnya (Persamaan 5).
  3. Selesaikan sistem dua variabel (Persamaan 4 dan 5) dengan eliminasi/substitusi untuk memperoleh nilai dua variabel pertama ($x$ dan $y$).
  4. Substitusikan nilai $x$ dan $y$ yang telah diperoleh ke salah satu persamaan awal untuk mendapatkan nilai variabel ketiga ($z$).
* **Metode Determinan Matriks (Aturan Cramer):**
  Jika $D$ adalah determinan matriks koefisien utama:
  $$D = \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$$
  Maka nilai variabel diperoleh melalui:
  $$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}, \quad z = \frac{D_z}{D} \quad (\text{dengan syarat } D \neq 0)$$
  *di mana $D_x, D_y, D_z$ adalah determinan matriks koefisien dengan kolom masing-masing variabel diganti oleh kolom konstanta $d$.*

#### 2. Klasifikasi Geometris Banyaknya Penyelesaian SPLTV:
Setiap persamaan linear tiga variabel merepresentasikan sebuah **bidang datar di ruang dimensi tiga ($\mathbb{R}^3$)**:
1. **Penyelesaian Tunggal (Unik / Konsisten):**  
   Terjadi jika $D \neq 0$. Ketiga bidang berpotongan di tepat **satu titik persekutuan $(x, y, z)$**.
2. **Banyak Penyelesaian (Tak Terhingga Solusi):**  
   Terjadi jika $D = D_x = D_y = D_z = 0$. Ketiga bidang saling berimpit atau berpotongan di sepanjang **satu garis lurus persekutuan**.
3. **Tidak Memiliki Penyelesaian (Inkonsisten):**  
   Terjadi jika $D = 0$, tetapi sekurang-kurangnya salah satu dari $D_x, D_y, D_z \neq 0$. Ketiga bidang saling sejajar atau berpotongan membentuk prisma segitiga tanpa titik temu bersama.

---

### B. Sistem Persamaan Linear dan Kuadrat (SPLK)
Sistem persamaan yang memadukan satu persamaan linear dan satu persamaan kuadrat dua variabel:

$$\begin{cases} y = m x + n & \text{(Persamaan Linear)} \\ y = a x^2 + b x + c & \text{(Persamaan Kuadrat)} \end{cases}$$

#### 1. Langkah Penyelesaian:
Substitusikan persamaan linear ke persamaan kuadrat:
$$m x + n = a x^2 + b x + c \implies a x^2 + (b - m)x + (c - n) = 0$$

#### 2. Interpretasi Banyaknya Anggota Himpunan Penyelesaian:
Tinjau nilai diskriminan persamaan kuadrat gabungan $D = (b - m)^2 - 4a(c - n)$:
* **$D > 0$:** Garis memotong parabola di **dua titik berbeda** $\implies$ SPLK memiliki **dua pasangan penyelesaian real** $(x_1, y_1)$ dan $(x_2, y_2)$.
* **$D = 0$:** Garis menyinggung parabola di **satu titik** $\implies$ SPLK memiliki **tepat satu pasangan penyelesaian real kembar**.
* **$D < 0$:** Garis tidak memotong parabola $\implies$ SPLK **tidak memiliki penyelesaian real** ($\text{HP} = \emptyset$).

---

### C. Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV)
Sistem pertidaksamaan linear dua variabel menentukan Daerah Himpunan Penyelesaian (DHP) pada bidang koordinat Cartesius.

#### 1. Prosedur Menggambar DHP:
1. Gambar garis pembatas $a x + b y = c$ dengan menentukan titik potong terhadap sumbu-$x$ ($y = 0$) dan sumbu-$y$ ($x = 0$).
2. **Kaidah Garis Batas:**
   * Garis digambar **tegas (solid)** jika pertidaksamaan memuat tanda $\le$ atau $\ge$.
   * Garis digambar **putus-putus (dashed)** jika pertidaksamaan memuat tanda murni $<$ atau $>$.
3. **Uji Titik Selidik:** Uji titik $(0,0)$ (jika garis tidak melalui titik asal). Jika menghasilkan pernyataan yang benar, maka daerah yang memuat titik $(0,0)$ adalah daerah penyelesaian.
4. **Konvensi DHP (Daerah Bersih):** Daerah yang memenuhi seluruh pertidaksamaan dibiarkan bersih (tanpa arsiran), sedangkan daerah yang tidak memenuhi diarsir (atau sebaliknya sesuai kesepakatan lembar soal).

---

### D. Program Linear dan Model Matematika
Program linear adalah cabang matematika terapan untuk menentukan alokasi sumber daya terbatas secara optimal (memaksimalkan keuntungan atau meminimalkan biaya) menggunakan fungsi-fungsi linear.

#### Struktur Komponen Model Matematika:
1. **Variabel Keputusan:** Dimisalkan $x$ dan $y$ yang mewakili kuantitas objek yang akan dioptimasi ($x \ge 0, y \ge 0$).
2. **Fungsi Kendala (Batasan Sumber Daya):** Kumpulan pertidaksamaan linear yang membatasi kapasitas bahan, waktu pengerjaan, atau modal:
   $$\begin{cases} a_1 x + b_1 y \le c_1 \\ a_2 x + b_2 y \le c_2 \\ x \ge 0, \quad y \ge 0 \end{cases}$$
3. **Fungsi Objektif / Fungsi Sasaran / Fungsi Tujuan:** Persamaan linear yang hendak dimaksimalkan atau diminimalkan nilainya:
   $$Z = f(x, y) = a x + b y$$

---

### E. Metode Penentuan Nilai Optimum (Maksimum dan Minimum)

#### 1. Metode Uji Titik Pojok (Titik Sudut / *Corner Point Method*)
Berdasarkan Teorema Fundamental Program Linear, nilai optimum suatu fungsi objektif linear pada daerah penyelesaian konveks tertutup **selalu tercapai pada salah satu titik pojok (titik sudut) daerah tersebut**.

```text
       y ▲
         │
       C ┌──────┐ B (Titik Pojok Optimum)
         │  DHP │
       O └──────┴─────► x
                A
```

* **Langkah Operasional:**
  1. Gambar seluruh garis kendala dan tentukan daerah himpunan penyelesaian (DHP).
  2. Tentukan koordinat seluruh titik pojok daerah DHP ($O, A, B, C$) melalui eliminasi perpotongan garis pembatas.
  3. Substitusikan koordinat setiap titik pojok ke fungsi objektif $Z = ax + by$.
  4. Nilai terbesar yang dihasilkan adalah **Nilai Maksimum**, dan nilai terkecil adalah **Nilai Minimum**.

#### 2. Metode Garis Selidik (*Isocost / Isoprofit Line Method*)
Garis selidik adalah representasi geometris dari fungsi tujuan $ax + by = k$.
* Gradien garis selidik: $m = -\frac{a}{b}$.
* Buat garis acuan awal $ax + by = a \cdot b$.
* Geser garis tersebut secara sejajar melintasi DHP:
  * **Titik Terjauh** yang masih disentuh garis selidik saat digeser ke arah nilai membesar menunjukkan letak **Titik Maksimum**.
  * **Titik Terdekat** yang pertama kali disentuh garis selidik menunjukkan letak **Titik Minimum**.

> [!TIP]
> **Kasus Khusus Solusi Optimal Tak Terhingga:**
> Jika gradien garis fungsi objektif tepat sama dengan gradien salah satu garis batas kendala ($-\frac{a}{b} = -\frac{a_k}{b_k}$), maka nilai optimum tidak hanya terjadi di satu titik pojok, melainkan **di sepanjang seluruh segmen garis pembatas** yang menghubungkan kedua titik sudut tersebut!

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 5:**
> Selesaikan seluruh paket masalah sistem persamaan dan program linear berikut:
>
> 1. **(Topik SPLTV Campuran):** Diberikan sistem persamaan linear tiga variabel:
>    $$\begin{cases} 2x + y - z = 5 & \dots (1) \\ x - 2y + 2z = -1 & \dots (2) \\ 3x + 2y + z = 12 & \dots (3) \end{cases}$$
>    * a. Tentukan nilai $x, y,$ dan $z$ yang memenuhi sistem persamaan tersebut!
>    * b. Hitung nilai dari ekspresi $x^2 + 2y - z$!
>
> 2. **(Topik SPLK Linear-Kuadrat):** Diberikan sistem persamaan linear-kuadrat:
>    $$\begin{cases} y = 2x + 3 \\ y = x^2 - x - 1 \end{cases}$$
>    * a. Tentukan himpunan pasangan penyelesaian $(x, y)$ dari sistem tersebut!
>    * b. Jika titik-titik potong tersebut dinamai $A(x_1, y_1)$ dan $B(x_2, y_2)$, hitung jarak antara titik $A$ dan titik $B$!
>
> 3. **(Topik Pemodelan Kontekstual Program Linear):** Sebuah industri rumahan memproduksi dua jenis roti: Roti Manis ($x$) dan Roti Tawar ($y$).
>    * Untuk membuat 1 buah Roti Manis dibutuhkan $200\text{ gram}$ tepung terigu dan $50\text{ gram}$ mentega.
>    * Untuk membuat 1 buah Roti Tawar dibutuhkan $100\text{ gram}$ tepung terigu dan $50\text{ gram}$ mentega.
>    * Bahan baku yang tersedia di gudang paling banyak adalah $16\text{ kg} = 16.000\text{ gram}$ tepung terigu dan $5\text{ kg} = 5.000\text{ gram}$ mentega.
>    * Keuntungan bersih untuk setiap Roti Manis adalah $\text{Rp}3.000{,}00$ dan untuk setiap Roti Tawar adalah $\text{Rp}2.000{,}00$.
>    * a. Susunlah model matematika sistem pertidaksamaan fungsi kendala dan fungsi objektif dari permasalahan tersebut!
>    * b. Tentukan koordinat seluruh titik-titik pojok dari daerah himpunan penyelesaiannya!
>    * c. Tentukan berapa banyak masing-masing roti yang harus diproduksi agar memperoleh keuntungan maksimum!
>    * d. Berapakah keuntungan maksimum yang dapat diraih industri tersebut?
>
> 4. **(Topik Garis Selidik):** Fungsi objektif suatu permasalahan program linear adalah $Z = 4x + 2y$. Jika salah satu garis batas kendala daerah penyelesaian memiliki persamaan $2x + y \le 80$:
>    * Tentukan hubungan antara kemiringan garis selidik dengan garis batas kendala tersebut, dan jelaskan karakteristik himpunan titik optimum yang dihasilkannya!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (SPLTV):**
  * **a. Menentukan $x, y, z$:**
    * Eliminasi variabel $z$ dari persamaan (1) dan (3):
      $$(2x + y - z) + (3x + 2y + z) = 5 + 12 \implies 5x + 3y = 17 \quad \dots (4)$$
    * Eliminasi variabel $z$ dari persamaan (1) dan (2):
      Kalikan persamaan (1) dengan 2:
      $$4x + 2y - 2z = 10$$
      Jumlahkan dengan persamaan (2):
      $$(4x + 2y - 2z) + (x - 2y + 2z) = 10 + (-1) \implies 5x = 9 \implies x = \frac{9}{5}$$
      *(Mari kita periksa ulang persamaan (1) dan (2) agar mendapatkan nilai bulat yang rapi)*.
      Ulangi eliminasi:
      * Dari (1): $z = 2x + y - 5$.
      * Substitusi ke (2): $x - 2y + 2(2x + y - 5) = -1 \implies x - 2y + 4x + 2y - 10 = -1 \implies 5x = 9 \implies x = 1{,}8$.
      * Substitusi ke (3): $3x + 2y + (2x + y - 5) = 12 \implies 5x + 3y = 17$.
      * Substitusi $5x = 9$ ke persamaan di atas:
        $$9 + 3y = 17 \implies 3y = 8 \implies y = \frac{8}{3}$$.
      * Hitung nilai $z$:
        $$z = 2\left(\frac{9}{5}\right) + \frac{8}{3} - 5 = \frac{18}{5} + \frac{8}{3} - 5 = \frac{54 + 40 - 75}{15} = \frac{19}{15}$$.
      * Diperoleh solusi eksak:
        $$x = \frac{9}{5} = 1{,}8, \quad y = \frac{8}{3}, \quad z = \frac{19}{15}$$
  * **b. Menghitung $x^2 + 2y - z$:**
    $$x^2 + 2y - z = \left(\frac{9}{5}\right)^2 + 2\left(\frac{8}{3}\right) - \frac{19}{15} = \frac{81}{25} + \frac{16}{3} - \frac{19}{15}$$
    KPK penyebut(25, 3, 15) = 75:
    $$= \frac{3(81) + 25(16) - 5(19)}{75} = \frac{243 + 400 - 95}{75} = \frac{548}{75} \approx 7{,}307$$

* **Jawaban Bagian 2 (SPLK Linear-Kuadrat):**
  * Samakan kedua nilai $y$:
    $$x^2 - x - 1 = 2x + 3 \implies x^2 - 3x - 4 = 0 \implies (x - 4)(x + 1) = 0$$
    * Untuk $x_1 = 4 \implies y_1 = 2(4) + 3 = 11 \implies A(4, 11)$.
    * Untuk $x_2 = -1 \implies y_2 = 2(-1) + 3 = 1 \implies B(-1, 1)$.
  * **a. Himpunan Penyelesaian:**
    $$\text{HP} = \{(-1, 1), (4, 11)\}$$
  * **b. Jarak Antara Titik $A$ dan Titik $B$:**
    $$d_{AB} = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} = \sqrt{(4 - (-1))^2 + (11 - 1)^2} = \sqrt{5^2 + 10^2} = \sqrt{25 + 100} = \sqrt{125} = 5\sqrt{5}$$

* **Jawaban Bagian 3 (Program Linear Produksi Roti):**
  * **a. Model Matematika:**
    * Variabel: $x$ = jumlah Roti Manis, $y$ = jumlah Roti Tawar.
    * Kendala Tepung: $200x + 100y \le 16.000 \implies 2x + y \le 160$.
    * Kendala Mentega: $50x + 50y \le 5.000 \implies x + y \le 100$.
    * Kendala Non-negatif: $x \ge 0, \ y \ge 0$.
    * Fungsi Objektif:
      $$Z = f(x, y) = 3.000x + 2.000y$$
  * **b. Menentukan Titik-Titik Pojok DHP:**
    1. Titik Asal: $O(0, 0)$.
    2. Titik Potong Garis 1 dengan sumbu-$x$ ($y=0$):
       $$2x = 160 \implies x = 80 \implies A(80, 0)$$
    3. Titik Potong Garis 2 dengan sumbu-$y$ ($x=0$):
       $$y = 100 \implies C(0, 100)$$
    4. Titik Potong Antara Dua Garis Kendala (Titik $B$):
       $$\begin{cases} 2x + y = 160 \\ x + y = 100 \end{cases}$$
       Kurangkan kedua persamaan:
       $$(2x - x) = 160 - 100 \implies x = 60$$
       Substitusikan $x = 60$:
       $$60 + y = 100 \implies y = 40 \implies B(60, 40)$$
  * **c & d. Uji Titik Pojok ke Fungsi Objektif ($Z = 3.000x + 2.000y$):**
    * Titik $O(0, 0)$: $Z = 0$.
    * Titik $A(80, 0)$: $Z = 3.000(80) + 0 = \text{Rp}240.000{,}00$.
    * Titik $B(60, 40)$: $Z = 3.000(60) + 2.000(40) = 180.000 + 80.000 = \text{Rp}260.000{,}00$.
    * Titik $C(0, 100)$: $Z = 0 + 2.000(100) = \text{Rp}200.000{,}00$.
    * **Kesimpulan Produksi:**
      Agar keuntungan maksimum, industri harus memproduksi **$60$ buah Roti Manis** dan **$40$ buah Roti Tawar**.
    * **Keuntungan Maksimum:**
      $$Z_{\max} = \text{Rp}260.000{,}00$$

* **Jawaban Bagian 4 (Analisis Garis Selidik):**
  * Gradien fungsi tujuan $Z = 4x + 2y$:
    $$m_Z = -\frac{a}{b} = -\frac{4}{2} = -2$$
  * Gradien garis kendala $2x + y = 80$:
    $$m_k = -\frac{2}{1} = -2$$
  * Karena gradien garis objektif tepat berimpit/sejajar dengan gradien garis kendala ($m_Z = m_k = -2$), maka ketika garis selidik digeser, ia akan menyinggung garis kendala pada **seluruh titik di sepanjang ruas garis pembatas tersebut**.
  * Akibatnya, permasalahan ini memiliki **tak terhingga banyaknya kombinasi solusi optimal** di sepanjang segmen garis $2x + y = 80$ yang berada pada batas DHP.

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Kendala Non-Negatif:** Dalam soal cerita terapan program linear, syarat $x \ge 0$ dan $y \ge 0$ WAJIB selalu disertakan karena kuantitas benda nyata tidak mungkin negatif.
> 2. **Periksa Keterpenuhan Titik Potong:** Titik perpotongan garis pembatas ($2x + y = 160$ dan sumbu-$x$) menghasilkan $x = 80$, sedangkan batas lain adalah $x + y \le 100$. Karena $80 \le 100$, titik $(80,0)$ sah berada di dalam DHP. Selalu verifikasi bahwa titik pojok yang diuji benar-benar memenuhi SELURUH pertidaksamaan kendala!
> 3. **Solusi Optimal Bukan Hanya Titik Pojok:** Waspadai saat gradien fungsi objektif sama dengan garis kendala; titik optimal menjadi sebuah segmen garis penuh!
