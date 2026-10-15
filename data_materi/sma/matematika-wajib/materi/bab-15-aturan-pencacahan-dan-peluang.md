# Bab 15: Aturan Pencacahan (Permutasi, Kombinasi) dan Teori Peluang
**Kategori:** TKA Matematika Wajib | **Blok:** Matematika Wajib (Umum)

## Bab 15: Aturan Pencacahan (Permutasi, Kombinasi) dan Teori Peluang

---

### A. Hakikat dan Prinsip Dasar Kaidah Pencacahan (*Combinatorics*)

Kaidah pencacahan (*combinatorics*) adalah cabang matematika diskrit yang mempelajari metode sistematis untuk menghitung banyaknya kemungkinan susunan, pengelompokan, atau konfigurasi suatu himpunan objek tanpa harus mendaftarkan (*listing*) seluruh kemungkinannya satu per satu.

Pemilihan metode pencacahan yang tepat selalu bertumpu pada dua pertanyaan kunci:
1. **Apakah urutan penataan diperhitungkan?**
   - Jika **urutan penting** ($AB \neq BA$), gunakan **Aturan Perkalian / Permutasi**.
   - Jika **urutan diabaikan** ($AB = BA$), gunakan **Kombinasi**.
2. **Apakah unsur boleh dipilih berulang?**
   - Tanpa pengulangan (*without replacement*).
   - Dengan pengulangan (*with replacement*).

```text
                            [Masalah Pencacahan]
                                     │
         ┌───────────────────────────┴───────────────────────────┐
         ▼                                                       ▼
 [Pilihan Alternatif / Terpisah]                       [Rangkaian Percobaan / Tergabung]
         │                                                       │
  Aturan Penjumlahan                                      Apakah Urutan Berpengaruh?
  (n₁ + n₂ + ... + nₖ)                                           │
                                       ┌─────────────────────────┴─────────────────────────┐
                                       ▼                                                   ▼
                              YA (Urutan Penting)                                TIDAK (Urutan Bebas)
                                       │                                                   │
                        ┌──────────────┴──────────────┐                      ┌─────────────┴─────────────┐
                        ▼                             ▼                      ▼                           ▼
                 Unsur Berbeda                  Unsur Kembar           Kombinasi Biasa            Stars & Bars
                 P(n, r) atau                 P = n!/(k₁!k₂!)           C(n, r) = (ⁿᵣ)            C(n+k-1, k-1)
                 Siklis (n-1)!
```

---

### B. Aturan Penjumlahan (*Addition Principle*)

Jika suatu prosedur atau aktivitas dapat dilakukan dengan salah satu dari $k$ cara alternatif yang **saling lepas** (*disjoint / mutually exclusive*), di mana alternatif pertama memiliki $n_1$ cara, alternatif kedua memiliki $n_2$ cara, ..., dan alternatif ke-$k$ memiliki $n_k$ cara, maka seluruh prosedur dapat diselesaikan dengan:

$$\text{Banyak Pilihan Total} = n_1 + n_2 + \dots + n_k$$

> [!NOTE]
> **Karakteristik Kata Kunci:**
> Aturan penjumlahan digunakan saat terdapat kata hubung **"ATAU"**, di mana pemilihan satu opsi secara otomatis meniadakan pemilihan opsi lainnya (kejadian terpisah dan tidak dapat berlangsung secara serentak).

#### Contoh Aplikasi Konseptual:
Seorang siswa berencana pergi dari Jakarta ke Bandung. Tersedia 3 jadwal keberangkatan kereta api cepat, 4 jadwal bus antarkota, dan 2 jadwal penerbangan perintis. Karena siswa tersebut hanya dapat menaiki tepat satu moda transportasi, banyak total jadwal alternatif keberangkatan yang dapat dipilih adalah:
$$3 + 4 + 2 = 9\text{ pilihan}$$

---

### C. Aturan Perkalian & Kaidah Pengisian Tempat (*Filling Slots*)

Jika suatu prosedur terdiri atas $k$ tahapan yang dilakukan **secara berurutan atau serempak**, di mana tahap 1 dapat diselesaikan dengan $n_1$ cara, tahap 2 dengan $n_2$ cara, ..., dan tahap ke-$k$ dengan $n_k$ cara, maka banyak total cara menyelesaikan seluruh tahapan adalah:

$$\text{Total Kemungkinan} = n_1 \times n_2 \times \dots \times n_k$$

> [!NOTE]
> **Karakteristik Kata Kunci:**
> Aturan perkalian digunakan saat terdapat kata hubung **"DAN"**, di mana seluruh tahapan wajib diselesaikan secara bertahap atau bersamaan.

#### 1. Kaidah Pengisian Tempat (*Filling Slots Method*)
Metode penyusunan kotak-kotak (*slots*) kosong sebanyak jumlah posisi yang dicari, lalu menganalisis banyaknya kemungkinan nilai yang memenuhi syarat pada masing-masing slot.

#### Prinsip Prioritas Pengisian Tempat:
1. **Dahulukan slot yang memiliki syarat atau batasan paling ketat!**
2. **Syarat Ganjil/Genap:** Dahulukan pengisian digit satuan (paling kanan).
3. **Syarat Rentang Nilai (Misal: $> 4.000$ atau $< 700$):** Dahulukan pengisian digit paling kiri (ribuan/ratusan).
4. **Syarat Kelipatan 5:** Dahulukan digit satuan (harus $0$ atau $5$).
5. **Syarat Angka Nol ($0$):** Angka nol tidak boleh menempati posisi digit terdepan pada bilangan multi-digit.

#### 2. Klasifikasi Model Formasi Bilangan:
* **Kasus Angka Boleh Berulang:** Setiap slot dapat diisi oleh seluruh kandidat angka yang tersedia (kecuali slot paling depan jika angka nol tersedia).
* **Kasus Angka Tidak Boleh Berulang (Berbeda):** Setiap kali satu angka digunakan pada suatu slot, kuota angka untuk slot berikutnya berkurang 1.
* **Kasus Pemecahan Cabang (*Split Cases*):** Jika syarat digit terakhir (misalnya genap) beririsan dengan kehadiran angka nol yang dilarang berada di depan, wajib dilakukan pembagian kasus:
  - **Kasus I:** Digit satuan $= 0$ (maka angka $0$ sudah terpakai di belakang, slot pertama bebas memilih angka selain 0).
  - **Kasus II:** Digit satuan $\neq 0$ (angka genap lain seperti $2, 4, 6$), sehingga slot pertama tidak boleh memilih angka 0 dan tidak boleh memilih angka genap yang telah terpakai.
  - Total susunan $= \text{Kasus I} + \text{Kasus II}$.

#### 3. Lintasan Jalur Perjalanan (Rute Kota):
Jika dari kota A ke kota B terdapat $p$ jalan dan dari kota B ke kota C terdapat $q$ jalan:
* Rute perjalanan satu arah (A $\to$ B $\to$ C): $p \times q$ cara.
* Rute pulang-pergi bebas (A $\to$ B $\to$ C $\to$ B $\to$ A): $(p \times q) \times (q \times p)$ cara.
* Rute pulang-pergi **tanpa melalui jalan yang sama**:
  $$(p \times q) \times ((q - 1) \times (p - 1))\text{ cara}$$

---

### D. Notasi Faktorial & Sifat Aljabar Faktorial

Untuk setiap bilangan bulat positif $n$, **$n$ faktorial** didefinisikan sebagai hasil perkalian semua bilangan bulat positif dari $1$ sampai dengan $n$:

$$n! = n \times (n - 1) \times (n - 2) \times \dots \times 3 \times 2 \times 1$$

#### 1. Definisi Khusus $0! = 1$
Secara aljabar, berlaku relasi rekursif fundamental:
$$(n - 1)! = \frac{n!}{n}$$
Dengan mensubstitusi $n = 1$, kita peroleh:
$$0! = \frac{1!}{1} = 1$$
Secara kombinatorika, $0! = 1$ bermakna bahwa hanya ada tepat satu cara untuk menyusun himpunan kosong (yaitu dengan membiarkannya kosong).

#### 2. Sifat Aljabar Faktorial:
* $n! = n \times (n - 1)!$
* $\frac{n!}{(n - 1)!} = n$
* $\frac{n!}{(n - 2)!} = n(n - 1) = n^2 - n$
* $\frac{n!}{(n - r)!} = n(n - 1)(n - 2)\dots(n - r + 1)$

---

### E. Teori Permutasi (*Permutation*)

Permutasi adalah proses penyusunan kembali sejumlah unsur dari suatu himpunan dengan **memperhatikan urutan posisi**. Pada permutasi, urutan yang berbeda menghasilkan susunan yang berbeda:
$$(A, B) \neq (B, A)$$

#### 1. Permutasi $r$ Unsur dari $n$ Unsur Berbeda
Banyaknya permutasi $r$ unsur yang diambil dari $n$ unsur yang berbeda ($r \le n$) dinotasikan dengan $P(n, r)$, $P_r^n$, atau ${}_n P_r$:

$$P(n, r) = \frac{n!}{(n - r)!}$$

* **Kasus Khusus $r = n$:**
  $$P(n, n) = \frac{n!}{0!} = n!$$
  *(Menyusun seluruh $n$ objek berbeda secara berjajar dalam satu garis lurus).*

#### 2. Permutasi dengan Unsur yang Sama (Identik)
Jika dari $n$ objek terdapat $k_1$ objek identik jenis ke-1, $k_2$ objek identik jenis ke-2, ..., dan $k_m$ objek identik jenis ke-$m$ (dengan $k_1 + k_2 + \dots + k_m \le n$), maka banyaknya susunan berbeda adalah:

$$P = \frac{n!}{k_1! \cdot k_2! \cdot \dots \cdot k_m!}$$

> [!NOTE]
> **Mengapa Dibagi $k_i!$?**
> Pembagian dengan $k_i!$ mengoreksi penghitungan ganda (*overcounting*) akibat pertukaran internal antar-elemen yang identik yang tidak menghasilkan susunan baru secara visual.

* **Aplikasi Khusus: Kisi Lintasan Grid (*Lattice Paths*)**
  Banyak lintasan terpendek dari koordinat $(0,0)$ menuju $(a, b)$ pada kisi jalan berpetak terdiri atas $a$ langkah ke Kanan (K) dan $b$ langkah ke Atas (A). Total langkah $= a + b$:
  $$P = \frac{(a + b)!}{a! \cdot b!} = \binom{a + b}{a}$$

#### 3. Permutasi Siklis (Melingkar)
Banyaknya cara menempatkan $n$ unsur berbeda pada konfigurasi melingkar (sekeliling meja bundar):

$$P_{\text{siklis}} = (n - 1)!$$

* **Prinsip Rotasi Bebas:** Pada bidang lingkaran tertutup, perputaran susunan tidak mengubah urutan relatif antar-anggota karena tidak terdapat titik awal atau akhir. Oleh sebab itu, $1$ objek harus dikunci sebagai titik acuan, menyisakan $(n - 1)$ objek untuk disusun secara linier.
* **Variasi Tiga Dimensi (Dapat Dibalik seperti Gelang / Kalung):**
  Jika konfigurasi lingkaran dapat dibalik tampak depan dan belakang (seperti untaian manik-manik gelang atau gantungan kunci):
  $$P_{\text{gelang}} = \frac{(n - 1)!}{2}$$

#### 4. Permutasi dengan Kondisi Pembatas Khusus
| Kondisi Khusus | Metode Pendekatan | Prosedur Operasional |
| :--- | :--- | :--- |
| **Unsur Wajib Berdampingan** | **Metode Pengikatan (*Tie-Up Method*)** | Anggap semua unsur yang wajib berdampingan sebagai **1 blok kesatuan tunggal**. Hitung permutasi luar blok, lalu kalikan dengan permutasi posisi di dalam blok tersebut. |
| **Unsur Dilarang Berdampingan** | **Metode Celah / Sisipan (*Slot Method*)** | Susun terlebih dahulu unsur-unsur lain yang bebas. Sediakan celah kosong di antara dan di ujung-ujung unsur bebas, kemudian tempatkan unsur yang dilarang berdampingan ke celah tersebut. |
| **Hanya Dua Unsur Tertentu Terpisah** | **Metode Komplemen** | $\text{Banyak Terpisah} = \text{Banyak Total Bebas} - \text{Banyak Berdampingan}$. |

#### 5. Permutasi Berulang
Banyaknya variasi susunan $r$ posisi yang dipilih dari $n$ jenis unsur berbeda di mana setiap unsur **dapat digunakan berulang kali**:

$$P_{\text{ulang}} = n^r$$

*Contoh Kasus:* Pengiriman $r$ pucuk surat ke dalam $n$ kotak pos $= n^r$ cara.

---

### F. Teori Kombinasi (*Combination*)

Kombinasi adalah proses pemilihan $r$ unsur dari $n$ unsur yang tersedia **tanpa memperhatikan urutan penataan**. Pada kombinasi, susunan yang beranggotakan unsur yang sama dianggap identik:
$$(A, B) = (B, A)$$

#### 1. Rumus Kombinasi
Banyaknya kombinasi $r$ unsur dari $n$ unsur berbeda dinotasikan dengan $C(n, r)$, $C_r^n$, atau $\binom{n}{r}$:

$$C(n, r) = \binom{n}{r} = \frac{n!}{r! \cdot (n - r)!} = \frac{P(n, r)}{r!}$$

#### 2. Perbedaan Fundamental Permutasi vs Kombinasi
| Karakteristik | Permutasi | Kombinasi |
| :--- | :--- | :--- |
| **Peran Urutan** | Diperhitungkan ($AB \neq BA$) | Diabaikan ($AB = BA$) |
| **Konteks Masalah** | Jabatan struktur (Ketua, Sekretaris, Bendahara), juara lomba (1, 2, 3), nomor pelat/PIN, urutan antre, foto berbaris. | Memilih delegasi/komite perwakilan, tim olahraga, memilih soal dari berkas, pengambilan bola serentak, jabat tangan. |
| **Hubungan Matematis** | $P(n, r) = r! \times C(n, r)$ | $C(n, r) = \frac{P(n, r)}{r!}$ |

#### 3. Sifat dan Teorema Kombinatorika Utama
1. **Sifat Simetri:**
   $$\binom{n}{r} = \binom{n}{n - r}$$
   *Contoh:* $\binom{12}{10} = \binom{12}{2} = \frac{12 \times 11}{2 \times 1} = 66$.
2. **Identitas Segitiga Pascal:**
   $$\binom{n}{r} + \binom{n}{r - 1} = \binom{n + 1}{r}$$
3. **Jumlah Seluruh Kombinasi Himpunan Bagian (Subset):**
   $$\sum_{r=0}^n \binom{n}{r} = \binom{n}{0} + \binom{n}{1} + \dots + \binom{n}{n} = 2^n$$

#### 4. Kombinasi dalam Konteks Geometri
* **Banyak Segmen Garis dari $n$ Titik:** Jika tidak ada 3 titik yang segaris (non-kolinear):
  $$N_{\text{garis}} = \binom{n}{2}$$
  Jika terdapat $k$ titik di antaranya yang terletak pada satu garis lurus (kolinear):
  $$N_{\text{garis}} = \binom{n}{2} - \binom{k}{2} + 1$$
* **Banyak Diagonal Bidang Segi-$n$ Beraturan:**
  $$D = \binom{n}{2} - n = \frac{n(n - 3)}{2}$$
* **Banyak Segitiga dari $n$ Titik:**
  $$N_{\Delta} = \binom{n}{3}$$
  Jika ada $k$ titik yang kolinear:
  $$N_{\Delta} = \binom{n}{3} - \binom{k}{3}$$

#### 5. Kombinasi dengan Pengulangan (*Stars and Bars Theorem*)
Banyaknya cara mendistribusikan $n$ benda identik ke dalam $k$ kelompok variabel yang berbeda:
* **Solusi Bilangan Bulat Non-Negatif ($x_1 + x_2 + \dots + x_k = n$, dengan $x_i \ge 0$):**
  $$\binom{n + k - 1}{k - 1} = \binom{n + k - 1}{n}$$
* **Solusi Bilangan Bulat Positif ($x_1 + x_2 + \dots + x_k = n$, dengan $x_i \ge 1$):**
  $$\binom{n - 1}{k - 1}$$

---

### G. Teorema Binomial Newton & Ekspansi Polinomial

Bentuk aljabar perpangkatan $(a + b)^n$ dengan $n \in \mathbb{N}$ dapat dijabarkan ke dalam bentuk deret kombinatorika:

$$(a + b)^n = \sum_{r=0}^n \binom{n}{r} a^{n - r} b^r = \binom{n}{0} a^n + \binom{n}{1} a^{n - 1} b + \dots + \binom{n}{n} b^n$$

#### 1. Formula Suku ke-$(r + 1)$
Suku ke-$(r + 1)$ dari penjabaran binomial adalah:

$$T_{r + 1} = \binom{n}{r} a^{n - r} b^r$$

#### 2. Trik Penentuan Suku Tertentu:
* **Menentukan Koefisien Suku $x^m$ dari $(p x^u + q x^v)^n$:**
  Tuliskan bentuk suku umum $T_{r+1} = \binom{n}{r} (p x^u)^{n-r} (q x^v)^r$. Kumpulkan pangkat dari variabel $x$, yaitu $u(n - r) + vr = m$, lalu selesaikan nilai bilangan bulat $r$.
* **Menentukan Suku Bebas $x$ (Suku Konstan):**
  Samakan eksponen total variabel $x$ dengan nol: $u(n - r) + vr = 0$.
* **Jumlah Seluruh Koefisien Ekspansi:**
  Substitusikan seluruh variabel dengan angka $1$.
  *Contoh:* Jumlah seluruh koefisien dari $(3x - 2y)^6$ adalah $(3(1) - 2(1))^6 = 1^6 = 1$.

---

### H. Teori Peluang Klasik & Ruang Sampel

Peluang adalah ukuran matematis dari tingkat keyakinan atau frekuensi relatif terjadinya suatu peristiwa acak.

#### 1. Terminologi Dasar
* **Percobaan Acak (*Random Experiment*):** Suatu tindakan yang hasilnya memiliki ketidakpastian, namun seluruh himpunan hasil yang mungkin dapat dipetakan.
* **Ruang Sampel ($S$):** Himpunan dari semua hasil yang mungkin terjadi pada suatu percobaan. Banyaknya anggota ruang sampel dinotasikan dengan $n(S)$.
* **Titik Sampel:** Setiap elemen individual di dalam ruang sampel $S$.
* **Kejadian / Peristiwa ($A$):** Himpunan bagian dari ruang sampel ($A \subseteq S$). Banyaknya titik sampel kejadian dinotasikan dengan $n(A)$.

#### 2. Definisi Peluang Teoretis Laplace
Jika seluruh titik sampel dalam ruang sampel $S$ berpeluang sama untuk muncul (*equally likely*), maka peluang terjadinya peristiwa $A$ adalah:

$$P(A) = \frac{n(A)}{n(S)}$$

#### Aksioma Batasan Nilai Peluang:
$$0 \le P(A) \le 1$$
* $P(A) = 0 \implies$ Peristiwa **mustahil** (tidak dapat terjadi). Contoh: Muncul mata dadu $8$ pada dadu bersisi enam standar.
* $P(A) = 1 \implies$ Peristiwa **pasti** (selalu terjadi). Contoh: Muncul mata dadu bilangan asli kurang dari 7.

#### 3. Peluang Komplemen Suatu Kejadian
Komplemen dari peristiwa $A$ (dinotasikan $A'$ atau $A^c$) menyatakan peristiwa tidak terjadinya $A$:

$$P(A') = 1 - P(A)$$

> [!TIP]
> **Shortcut Emas untuk Soal "Paling Sedikit Satu":**
> Jika dalam soal ditanyakan peluang terjadinya **"paling sedikit satu ..."** (*at least one*), hindari menghitung satu per satu kombinasi yang rumit. Gunakan selalu pendekatan komplemen:
> $$P(\text{paling sedikit 1}) = 1 - P(\text{tidak ada sama sekali})$$

#### 4. Frekuensi Harapan (*Expected Frequency*)
Banyaknya kemunculan suatu peristiwa $A$ yang diharapkan dari total $N$ kali percobaan berulang:

$$F_h(A) = N \times P(A)$$

---

### I. Teori Peluang Kejadian Majemuk

Kejadian majemuk merupakan penggabungan dari dua atau lebih kejadian sederhana.

#### 1. Peluang Gabungan Dua Kejadian (Tidak Saling Lepas)
Peluang terjadinya peristiwa $A$ **atau** peristiwa $B$:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Di mana $A \cap B$ adalah irisan peristiwa, yaitu terjadinya peristiwa $A$ **dan** peristiwa $B$ secara serentak.

#### 2. Peluang Kejadian Saling Lepas (*Mutually Exclusive*)
Dua kejadian $A$ dan $B$ dikatakan **saling lepas** jika kedua peristiwa tersebut mustahil terjadi secara bersamaan ($A \cap B = \emptyset \implies P(A \cap B) = 0$):

$$P(A \cup B) = P(A) + P(B)$$

#### 3. Peluang Dua Kejadian Saling Bebas (*Independent Events*)
Dua kejadian $A$ dan $B$ dikatakan **saling bebas** jika terjadinya kejadian $A$ sama sekali tidak mempengaruhi peluang terjadinya kejadian $B$, dan sebaliknya:

$$P(A \cap B) = P(A) \times P(B)$$

> [!WARNING]
> **Pembedaan Krusial: Saling Lepas vs Saling Bebas!**
> Kerap menjadi jebakan utama dalam ujian masuk PTN:
> * **Saling Lepas:** Berhubungan dengan operasi **penjumlahan** (kedua kejadian tidak dapat terjadi bersamaan, irisannya kosong: $P(A \cap B) = 0$).
> * **Saling Bebas:** Berhubungan dengan operasi **perkalian** (kedua kejadian dapat terjadi bersamaan tanpa saling mempengaruhi peluangnya: $P(A \cap B) = P(A) \cdot P(B)$).

#### 4. Peluang Pengambilan Bertahap Objek dalam Wadah:
* **Dengan Pengembalian (*With Replacement*):** Objek yang diambil dikembalikan ke wadah sebelum pengambilan berikutnya. Ruang sampel tidak berubah $\implies$ Kejadian bersifat **saling bebas**.
* **Tanpa Pengembalian (*Without Replacement*):** Objek yang diambil tidak dikembalikan. Jumlah objek dan ruang sampel berkurang $\implies$ Kejadian bersifat **bergantung / bersyarat**.

---

### J. Peluang Bersyarat (*Conditional Probability*)

Peluang bersyarat adalah peluang terjadinya suatu kejadian $A$ apabila diketahui kejadian $B$ **telah terjadi sebelumnya**:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)} \quad \text{dengan } P(B) > 0$$

#### 1. Aturan Perkalian Peluang Bersyarat:
Dari rumus peluang bersyarat, dapat diturunkan aturan perkalian untuk kejadian yang saling bergantung:

$$P(A \cap B) = P(B) \times P(A \mid B) = P(A) \times P(B \mid A)$$

#### 2. Analisis Tabel Kontingensi Frekuensi (Tabel Dua Arah):
Jika informasi disajikan dalam tabel frekuensi baris dan kolom:
* $P(A \mid B) = \frac{n(A \cap B)}{n(B)}$, di mana penyebut langsung dibatasi hanya pada total frekuensi dari baris atau kolom syarat $B$.

---

### K. Rangkuman Komparasi Formula Cepat

| No | Nama Konsep / Formula | Bentuk Matematis | Karakteristik Kunci & Konteks Soal |
| :---: | :--- | :---: | :--- |
| 1 | Aturan Penjumlahan | $\sum n_i$ | Alternatif saling lepas, kata "ATAU". |
| 2 | Aturan Perkalian | $\prod n_i$ | Tahapan berturut-turut/serempak, kata "DAN". |
| 3 | Permutasi Linier | $P(n, r) = \frac{n!}{(n - r)!}$ | Memilih dan menata berurutan, posisi berbeda. |
| 4 | Permutasi Unsur Sama | $\frac{n!}{k_1! \cdot k_2! \dots}$ | Anagram kata dengan huruf kembar, kisi grid jalan. |
| 5 | Permutasi Siklis | $(n - 1)!$ | Meja bundar, lingkaran (kalung/gelang: $\frac{(n-1)!}{2}$). |
| 6 | Kombinasi Dasar | $C(n, r) = \frac{n!}{r!(n - r)!}$ | Memilih kelompok delegasi, urutan diabaikan. |
| 7 | Stars and Bars ($x_i \ge 0$) | $\binom{n + k - 1}{k - 1}$ | Partisi $n$ benda identik ke $k$ wadah berbeda. |
| 8 | Suku Binomial Newton | $T_{r+1} = \binom{n}{r} a^{n-r} b^r$ | Koefisien suku tertentu $x^m$ atau suku konstan. |
| 9 | Peluang Klasik Laplace | $P(A) = \frac{n(A)}{n(S)}$ | Titik sampel seragam (*equally likely*). |
| 10 | Peluang Komplemen | $P(A') = 1 - P(A)$ | Soal bermakna "paling sedikit satu". |
| 11 | Kejadian Saling Bebas | $P(A \cap B) = P(A) \cdot P(B)$ | Dua percobaan terpisah (koin dan dadu). |
| 12 | Peluang Bersyarat | $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ | Peluang kejadian setelah kejadian lain terjadi. |
