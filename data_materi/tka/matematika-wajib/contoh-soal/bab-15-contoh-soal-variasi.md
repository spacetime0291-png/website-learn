# Bab 15: Variasi Contoh Soal — Aturan Pencacahan (Permutasi, Kombinasi) dan Teori Peluang
**Kategori:** TKA Matematika Wajib | **Blok:** Matematika Wajib (Umum)

## Kumpulan Lengkap Variasi Soal Bab 15

---

### Variasi 1 — Aturan Penjumlahan (Pilihan Alternatif Saling Lepas)

> [!EXAMPLE]
> **Soal 15.1 (Pilihan Alternatif Saling Lepas — Tingkat Mudah):**
> 
> Seorang guru ingin membeli satu buah buku referensi matematika untuk perpustakaan sekolah. Toko buku A menyediakan 5 judul buku aljabar yang berbeda, toko buku B menyediakan 4 judul buku geometri yang berbeda, dan toko buku C menyediakan 3 judul buku kalkulus yang berbeda. Jika guru tersebut hanya akan membeli tepat 1 judul buku dari salah satu toko, berapa banyak pilihan buku yang dapat dibeli?

#### Pembahasan:

**Langkah 1 – Analisis jenis kejadian:**

Pembelian hanya dilakukan untuk satu buah buku dari salah satu toko yang tersedia. Peristiwa ini merupakan kejadian **saling lepas** (*mutually exclusive*), di mana memilih satu buku meniadakan pilihan buku lainnya.

**Langkah 2 – Terapkan aturan penjumlahan:**

$$\text{Banyak Pilihan} = n_A + n_B + n_C = 5 + 4 + 3 = 12$$

**Hasil:** Banyak pilihan buku yang dapat dibeli adalah **12 cara**.

> [!NOTE]
> Kata kunci "hanya memilih 1 di antara alternatif yang ada" menandakan penerapan **Aturan Penjumlahan**.

---

### Variasi 2 — Aturan Perkalian & Rute Jalur Perjalanan Bersyarat

> [!EXAMPLE]
> **Soal 15.2 (Rute Perjalanan Pulang-Pergi Tanpa Jalur Sama — Tingkat Sedang):**
> 
> Dari kota A ke kota B dihubungkan oleh 4 rute jalan yang berbeda, sedangkan dari kota B ke kota C dihubungkan oleh 3 rute jalan yang berbeda. Seseorang melakukan perjalanan dari kota A menuju kota C melalui kota B, kemudian kembali lagi ke kota A juga melalui kota B. Jika pada saat perjalanan pulang ia **tidak boleh melalui jalan yang sama** dengan jalan yang dilaluinya saat berangkat, berapa banyak variasi rute perjalanan yang dapat ditempuh?

#### Pembahasan:

**Langkah 1 – Hitung rute keberangkatan (A $\to$ B $\to$ C):**

* Dari A ke B: terdapat 4 jalan.
* Dari B ke C: terdapat 3 jalan.
$$\text{Rute Berangkat} = 4 \times 3 = 12\text{ rute}$$

**Langkah 2 – Hitung rute kepulangan (C $\to$ B $\to$ A):**

Karena jalan yang telah dilalui tidak boleh dilewati kembali:
* Dari C ke B: tersisa $3 - 1 = 2$ jalan.
* Dari B ke A: tersisa $4 - 1 = 3$ jalan.
$$\text{Rute Pulang} = 2 \times 3 = 6\text{ rute}$$

**Langkah 3 – Hitung total variasi rute (Aturan Perkalian):**

$$\text{Total Rute} = 12 \times 6 = 72$$

**Hasil:** Total variasi rute perjalanan yang dapat ditempuh adalah **72 rute**.

---

### Variasi 3 — Kaidah Pengisian Tempat: Formasi Bilangan Tanpa Pengulangan

> [!EXAMPLE]
> **Soal 15.3 (Bilangan Ratusan Berbeda — Tingkat Mudah):**
> 
> Diberikan himpunan angka $S = \{1, 2, 3, 5, 7, 8, 9\}$. Dari angka-angka tersebut akan disusun bilangan yang terdiri atas 3 angka berbeda. Berapa banyak bilangan yang dapat dibentuk?

#### Pembahasan:

**Langkah 1 – Tentukan jumlah slot dan ketersediaan angka:**

Bilangan terdiri atas 3 angka $\implies$ terdapat 3 slot: [Ratusan] [Puluhan] [Satuan].
Banyak anggota himpunan $n(S) = 7$ angka. Angka-angka tidak boleh berulang.

**Langkah 2 – Isi slot secara bertahap:**

* Slot Ratusan: dapat diisi oleh sembarang 7 angka $\implies 7$ pilihan.
* Slot Puluhan: 1 angka telah digunakan di ratusan $\implies 6$ pilihan.
* Slot Satuan: 2 angka telah digunakan sebelumnya $\implies 5$ pilihan.

$$\text{Banyak Bilangan} = 7 \times 6 \times 5 = 210$$

**Hasil:** Banyak bilangan ratusan berbeda yang dapat dibentuk adalah **210 bilangan**.

---

### Variasi 4 — Formasi Bilangan Genap/Ganjil Memuat Nol (Pemisahan Kasus)

> [!EXAMPLE]
> **Soal 15.4 (Bilangan Genap Memuat Angka Nol — Tingkat Sedang):**
> 
> Dari angka-angka $\{0, 1, 2, 3, 4, 5, 6\}$ akan dibentuk bilangan genap yang terdiri atas 3 angka berbeda. Tentukan banyaknya bilangan yang dapat dibentuk!

#### Pembahasan:

**Langkah 1 – Analisis kendala kritis:**

Terdapat dua batasan krusial yang saling bertentangan:
1. Angka $0$ tidak boleh menempati slot ratusan (paling depan).
2. Bilangan harus genap, sehingga digit satuan harus merupakan angka genap: $\{0, 2, 4, 6\}$.
Jika digit satuan memilih $0$, maka ratusan bebas memilih angka lain. Namun jika satuan memilih $2, 4,$ atau $6$, ratusan tidak boleh memilih angka tersebut DAN tidak boleh memilih $0$. Oleh karena itu, wajib dipisah menjadi 2 kasus:

**Kasus I: Digit satuan adalah angka $0$**
* Slot Satuan: hanya angka $0 \implies 1$ pilihan.
* Slot Ratusan: angka selain $0$ yang tersedia $\{1, 2, 3, 4, 5, 6\} \implies 6$ pilihan.
* Slot Puluhan: tersisa $7 - 2 = 5$ pilihan.
$$\text{Banyak Kasus I} = 6 \times 5 \times 1 = 30$$

**Kasus II: Digit satuan bukan $0$ (yaitu $2, 4,$ atau $6$)**
* Slot Satuan: $\{2, 4, 6\} \implies 3$ pilihan.
* Slot Ratusan: tidak boleh $0$ dan tidak boleh angka yang dipakai di satuan $\implies 7 - 2 = 5$ pilihan.
* Slot Puluhan: bebas dari sisa angka yang belum terpakai $\implies 7 - 2 = 5$ pilihan.
$$\text{Banyak Kasus II} = 5 \times 5 \times 3 = 75$$

**Langkah 2 – Jumlahkan hasil kedua kasus:**

$$\text{Total Bilangan Genap} = 30 + 75 = 105$$

**Hasil:** Banyak bilangan genap berbeda yang dapat dibentuk adalah **105 bilangan**.

> [!WARNING]
> Jika kasus nol tidak dipisahkan, perhitungan akan salah karena jumlah pilihan pada digit ratusan bergantung langsung pada apakah nol terpilih sebagai satuan atau tidak.

---

### Variasi 5 — Formasi Bilangan dengan Batas Nilai ($> K$ atau $< K$)

> [!EXAMPLE]
> **Soal 15.5 (Bilangan Ribuan Bernilai Lebih dari 4.000 — Tingkat Sedang):**
> 
> Dari angka-angka $\{2, 3, 4, 5, 6, 7, 8\}$ akan disusun bilangan ribuan yang bernilai **lebih besar dari 4.000** tanpa ada angka yang berulang. Tentukan banyaknya bilangan tersebut!

#### Pembahasan:

**Langkah 1 – Analisis struktur bilangan dan digit prioritas:**

Bilangan ribuan terdiri dari 4 digit: [Ribuan] [Ratusan] [Puluhan] [Satuan].
Total angka tersedia: $7$ angka $\{2, 3, 4, 5, 6, 7, 8\}$.
Agar bernilai $> 4.000$, digit ribuan harus bernilai $\ge 4$, yaitu $\{4, 5, 6, 7, 8\}$ ($5$ pilihan).

**Langkah 2 – Isi masing-masing slot:**

* Slot Ribuan: $\{4, 5, 6, 7, 8\} \implies 5$ pilihan.
* Slot Ratusan: dari 7 angka sudah terpakai 1 angka $\implies 6$ pilihan.
* Slot Puluhan: dari 7 angka sudah terpakai 2 angka $\implies 5$ pilihan.
* Slot Satuan: dari 7 angka sudah terpakai 3 angka $\implies 4$ pilihan.

$$\text{Banyak Bilangan} = 5 \times 6 \times 5 \times 4 = 600$$

**Hasil:** Banyak bilangan ribuan $> 4.000$ yang dapat dibentuk adalah **600 bilangan**.

---

### Variasi 6 — Formasi Plat Nomor / Sandi Alfanumerik Bertingkat

> [!EXAMPLE]
> **Soal 15.6 (Kombinasi Plat Nomor Kendaraan — Tingkat Sedang):**
> 
> Suatu daerah membuat format plat nomor kendaraan bermotor: diawali satu huruf wilayah 'B', diikuti oleh susunan 4 angka, dan diakhiri dengan 2 huruf seri. Jika angka pertama pada susunan 4 angka tersebut tidak boleh nol ($0$), seluruh angka boleh berulang, dan 2 huruf seri di akhir harus huruf vokal berbeda, berapa banyak plat nomor yang dapat diterbitkan?

#### Pembahasan:

**Langkah 1 – Uraikan komponen slot pengisian:**

* Huruf Awal: tetap huruf 'B' $\implies 1$ pilihan.
* Angka ke-1: angka $\{1, 2, \dots, 9\} \implies 9$ pilihan (tidak boleh $0$).
* Angka ke-2: angka $\{0, 1, \dots, 9\} \implies 10$ pilihan (boleh berulang).
* Angka ke-3: angka $\{0, 1, \dots, 9\} \implies 10$ pilihan.
* Angka ke-4: angka $\{0, 1, \dots, 9\} \implies 10$ pilihan.
* Huruf Seri ke-1: dari himpunan huruf vokal $\{\text{A, I, U, E, O}\} \implies 5$ pilihan.
* Huruf Seri ke-2: vokal berbeda $\implies 5 - 1 = 4$ pilihan.

**Langkah 2 – Hitung hasil perkalian slot:**

$$\text{Total Plat} = 1 \times (9 \times 10 \times 10 \times 10) \times (5 \times 4) = 9.000 \times 20 = 180.000$$

**Hasil:** Banyak plat nomor kendaraan yang dapat diterbitkan adalah **180.000 plat**.

---

### Variasi 7 — Persamaan Aljabar Faktorial

> [!EXAMPLE]
> **Soal 15.7 (Menyelesaikan Persamaan Faktorial — Tingkat Mudah):**
> 
> Tentukan nilai $n \in \mathbb{N}$ yang memenuhi persamaan:
> $$\frac{(n + 2)!}{n!} = 56$$

#### Pembahasan:

**Langkah 1 – Uraikan faktorial bertingkat:**

Berdasarkan sifat faktorial:
$$(n + 2)! = (n + 2)(n + 1) \cdot n!$$

Substitusikan ke persamaan:
$$\frac{(n + 2)(n + 1) \cdot n!}{n!} = 56 \implies (n + 2)(n + 1) = 56$$

**Langkah 2 – Selesaikan persamaan kuadrat:**

$$n^2 + 3n + 2 = 56 \implies n^2 + 3n - 54 = 0$$
$$(n + 9)(n - 6) = 0$$
Diperoleh $n = -9$ atau $n = 6$. Karena $n \in \mathbb{N}$ ($n$ harus bilangan bulat non-negatif), nilai yang memenuhi adalah $n = 6$.

**Hasil:** Nilai $n$ yang memenuhi adalah **$n = 6$**.

---

### Variasi 8 — Permutasi Unsur Berbeda untuk Posisi Berstruktur

> [!EXAMPLE]
> **Soal 15.8 (Pemilihan Pengurus Berstruktur — Tingkat Mudah):**
> 
> Dari 9 orang pengurus OSIS, akan dipilih 3 orang untuk menempati posisi Ketua, Sekretaris, dan Bendahara. Berapa banyak kemungkinan susunan pengurus yang dapat terbentuk?

#### Pembahasan:

**Langkah 1 – Identifikasi permutasi:**

Karena setiap posisi memiliki jabatan/tanggung jawab spesifik (Ketua $\neq$ Sekretaris $\neq$ Bendahara), **urutan sangat penting**. Masalah ini diselesaikan dengan permutasi $P(9, 3)$.

**Langkah 2 – Hitung nilai permutasi:**

$$P(9, 3) = \frac{9!}{(9 - 3)!} = \frac{9!}{6!} = 9 \times 8 \times 7 = 504$$

**Hasil:** Banyak susunan pengurus yang dapat dibentuk adalah **504 susunan**.

---

### Variasi 9 — Permutasi dengan Unsur yang Sama (Anagram Kata)

> [!EXAMPLE]
> **Soal 15.9 (Penyusunan Huruf dengan Karakter Kembar — Tingkat Mudah):**
> 
> Berapa banyak susunan kata berbeda (anagram) yang dapat dibentuk dari huruf-huruf pada kata **"INDONESIA"**?

#### Pembahasan:

**Langkah 1 – Hitung total huruf dan frekuensi huruf yang sama:**

Total huruf: $n = 9$.
Rincian kemunculan huruf:
* I: 2 huruf
* N: 2 huruf
* D: 1 huruf
* O: 1 huruf
* E: 1 huruf
* S: 1 huruf
* A: 1 huruf

**Langkah 2 – Terapkan rumus permutasi unsur sama:**

$$P = \frac{9!}{2! \times 2!} = \frac{362.880}{2 \times 2} = \frac{362.880}{4} = 90.720$$

**Hasil:** Banyak susunan kata yang dapat dibentuk adalah **90.720 kata**.

---

### Variasi 10 — Permutasi Kisi Lintasan Grid (*Lattice Paths*)

> [!EXAMPLE]
> **Soal 15.10 (Lintasan Grid Berpetak Melalui Titik Transit — Tingkat Sedang):**
> 
> Pada denah jalan berbentuk grid persegi, seseorang ingin berjalan dari titik awal $A(0,0)$ menuju titik tujuan $B(6, 4)$ dengan hanya boleh melangkah ke arah Kanan atau ke Atas. Tentukan banyak rute terpendek yang dapat dilalui jika orang tersebut **harus singgah terlebih dahulu di titik transit $C(3, 2)$**!

#### Pembahasan:

**Langkah 1 – Hitung rute dari $A(0,0)$ ke $C(3,2)$:**

* Langkah ke Kanan $= 3$, langkah ke Atas $= 2$. Total langkah $= 3 + 2 = 5$.
$$N_{A \to C} = \binom{5}{3} = \frac{5!}{3! \times 2!} = \frac{5 \times 4}{2} = 10\text{ rute}$$

**Langkah 2 – Hitung rute dari $C(3,2)$ ke $B(6,4)$:**

* Langkah ke Kanan $= 6 - 3 = 3$, langkah ke Atas $= 4 - 2 = 2$. Total langkah $= 3 + 2 = 5$.
$$N_{C \to B} = \binom{5}{3} = 10\text{ rute}$$

**Langkah 3 – Terapkan aturan perkalian:**

$$\text{Total Rute Melalui } C = N_{A \to C} \times N_{C \to B} = 10 \times 10 = 100$$

**Hasil:** Banyak rute terpendek yang melalui titik transit $C$ adalah **100 rute**.

---

### Variasi 11 — Permutasi Unsur Selalu Berdampingan (Metode Blok)

> [!EXAMPLE]
> **Soal 15.11 (Susunan Duduk Berdampingan — Tingkat Sedang):**
> 
> Ada 4 orang siswa laki-laki dan 3 orang siswi perempuan akan berfoto bersama dalam satu barisan lurus. Berapa banyak susunan barisan yang mungkin terjadi jika **ketiga siswi perempuan harus selalu berdampingan**?

#### Pembahasan:

**Langkah 1 – Ikat unsur yang harus berdampingan menjadi 1 blok:**

Anggap 3 siswi perempuan sebagai **1 blok tunggal** ($P$).
Kini terdapat: 4 siswa laki-laki + 1 blok siswi $= 5$ unsur efektif.

**Langkah 2 – Hitung permutasi luar dan dalam blok:**

* Permutasi 5 unsur efektif $= 5! = 120$ cara.
* Permutasi internal di dalam blok 3 siswi $= 3! = 6$ cara.

$$\text{Banyak Susunan} = 5! \times 3! = 120 \times 6 = 720$$

**Hasil:** Banyak susunan foto yang memenuhi syarat adalah **720 susunan**.

---

### Variasi 12 — Permutasi Unsur Dilarang Bersebelahan (Metode Celah)

> [!EXAMPLE]
> **Soal 15.12 (Susunan Posisi Tidak Boleh Bersebelahan — Tingkat Sedang):**
> 
> Terdapat 5 buku Matematika dan 3 buku Fisika yang berbeda akan disusun berjajar di rak buku. Tentukan banyak cara menyusun buku-buku tersebut jika **buku Fisika tidak boleh ada yang saling bersebelahan**!

#### Pembahasan:

**Langkah 1 – Susun buku yang bebas terlebih dahulu:**

Susun 5 buku Matematika terlebih dahulu secara bebas:
$$P_M = 5! = 120\text{ cara}$$

**Langkah 2 – Sediakan celah di antara dan di ujung-ujung buku Matematika:**

Ilustrasi celah: `_ M1 _ M2 _ M3 _ M4 _ M5 _`
Terdapat $5 + 1 = 6$ celah kosong yang tersedia.

**Langkah 3 – Tempatkan 3 buku Fisika ke dalam 6 celah kosong:**

Karena urutan buku berbeda dihitung, gunakan permutasi $P(6, 3)$:
$$P(6, 3) = \frac{6!}{(6 - 3)!} = 6 \times 5 \times 4 = 120\text{ cara}$$

**Langkah 4 – Hitung total susunan:**

$$\text{Total Cara} = 120 \times 120 = 14.400$$

**Hasil:** Banyak susunan buku yang memenuhi syarat adalah **14.400 cara**.

---

### Variasi 13 — Permutasi Siklis dengan Syarat Berdampingan

> [!EXAMPLE]
> **Soal 15.13 (Duduk Melingkar Meja Bundar Bersyarat — Tingkat Sedang):**
> 
> Sebanyak 6 orang delegasi negara (termasuk delegasi Indonesia dan Malaysia) mengadakan rapat di sekeliling meja bundar. Berapa banyak susunan posisi duduk yang mungkin terjadi jika **delegasi Indonesia dan Malaysia harus selalu duduk berdampingan**?

#### Pembahasan:

**Langkah 1 – Satukan delegasi yang berdampingan menjadi 1 unsur:**

Delegasi Indonesia dan Malaysia diikat menjadi 1 unsur.
Jumlah unsur efektif yang duduk melingkar: $(6 - 2) + 1 = 5$ unsur.

**Langkah 2 – Hitung permutasi siklis dan pertukaran internal:**

* Permutasi siklis dari 5 unsur: $(5 - 1)! = 4! = 24$ cara.
* Pertukaran posisi duduk internal Indonesia dan Malaysia: $2! = 2$ cara.

$$\text{Banyak Susunan} = 4! \times 2! = 24 \times 2 = 48$$

**Hasil:** Banyak susunan posisi duduk yang mungkin adalah **48 cara**.

---

### Variasi 14 — Permutasi Objek 3 Dimensi (Untaian Gelang/Kalung)

> [!EXAMPLE]
> **Soal 15.14 (Penyusunan Manik Gelang — Tingkat Mudah):**
> 
> Seorang pengrajin memiliki 7 buah manik-manik dengan warna yang berbeda-beda. Ia ingin merangkai seluruh manik-manik tersebut menjadi sebuah gelang tangan. Berapa banyak susunan warna manik-manik yang dapat dibentuk pada gelang tersebut?

#### Pembahasan:

**Langkah 1 – Analisis sifat fisik gelang tangan:**

Gelang tangan merupakan susunan melingkar yang dapat dibalik tampak depan dan belakang (tiga dimensi). Dua susunan yang berkebalikan arah putar jam merupakan gelang yang sama jika dibalik.

**Langkah 2 – Terapkan rumus permutasi gelang:**

$$P_{\text{gelang}} = \frac{(n - 1)!}{2} = \frac{(7 - 1)!}{2} = \frac{6!}{2} = \frac{720}{2} = 360$$

**Hasil:** Banyak susunan warna manik-manik pada gelang adalah **360 susunan**.

---

### Variasi 15 — Kombinasi Dasar Pemilihan Anggota Delegasi

> [!EXAMPLE]
> **Soal 15.15 (Pemilihan Tim Delegasi Tanpa Jabatan — Tingkat Mudah):**
> 
> Suatu kelas beranggotakan 12 siswa. Wali kelas akan memilih 4 orang siswa secara acak untuk mewakili kelas dalam kegiatan bakti sosial. Berapa banyak tim perwakilan berbeda yang dapat dibentuk?

#### Pembahasan:

**Langkah 1 – Identifikasi jenis kombinatorika:**

Karena semua siswa yang terpilih berstatus sama sebagai anggota perwakilan (tidak ada jabatan ketua, dll.), **urutan pemilihan tidak berpengaruh**. Gunakan rumus kombinasi $C(12, 4)$.

**Langkah 2 – Hitung nilai kombinasi:**

$$C(12, 4) = \binom{12}{4} = \frac{12!}{4! \times (12 - 4)!} = \frac{12 \times 11 \times 10 \times 9}{4 \times 3 \times 2 \times 1} = 495$$

**Hasil:** Banyak tim perwakilan berbeda yang dapat dibentuk adalah **495 tim**.

---

### Variasi 16 — Kombinasi Bersyarat Komposisi Tim (Minimal/Maksimal)

> [!EXAMPLE]
> **Soal 15.16 (Seleksi Tim dengan Syarat Minimal Siswa Putri — Tingkat Sedang):**
> 
> Dari 7 siswa putra dan 5 siswa putri, akan dibentuk satu tim cerdas cermat yang beranggotakan 4 orang. Jika disyaratkan bahwa tim tersebut harus memuat **paling sedikit 2 siswa putri**, berapa banyak variasi tim yang dapat dibentuk?

#### Pembahasan:

**Langkah 1 – Petakan kemungkinan komposisi tim (Kasus Penjumlahan):**

Syarat: minimal 2 putri dari total 4 anggota tim. Kemungkinan komposisi:
* **Kasus A (2 Putri dan 2 Putra):**
  $$\binom{5}{2} \times \binom{7}{2} = 10 \times 21 = 210$$
* **Kasus B (3 Putri dan 1 Putra):**
  $$\binom{5}{3} \times \binom{7}{1} = 10 \times 7 = 70$$
* **Kasus C (4 Putri dan 0 Putra):**
  $$\binom{5}{4} \times \binom{7}{0} = 5 \times 1 = 5$$

**Langkah 2 – Jumlahkan seluruh kasus:**

$$\text{Total Tim} = 210 + 70 + 5 = 285$$

**Hasil:** Banyak variasi tim yang dapat dibentuk adalah **285 variasi tim**.

---

### Variasi 17 — Kombinasi Pemilihan Soal Ujian dengan Soal Wajib

> [!EXAMPLE]
> **Soal 15.17 (Pemilihan Soal Ujian Bersyarat Nomor Wajib — Tingkat Mudah):**
> 
> Pada suatu ujian matematika, peserta wajib mengerjakan 8 soal dari 12 soal yang disediakan. Jika soal **nomor 1 sampai dengan nomor 3 wajib dikerjakan**, berapa banyak pilihan kumpulan soal yang dapat dipilih peserta?

#### Pembahasan:

**Langkah 1 – Kurangi jumlah soal dan target dengan kuota wajib:**

* Total soal tersedia $= 12$. Soal nomor 1, 2, 3 wajib dikerjakan $\implies$ tersisa $12 - 3 = 9$ soal pilihan.
* Target pengerjaan $= 8$ soal. Karena 3 soal wajib sudah pasti dikerjakan $\implies$ peserta tinggal memilih $8 - 3 = 5$ soal lagi.

**Langkah 2 – Hitung kombinasi sisa soal:**

$$C(9, 5) = \binom{9}{5} = \binom{9}{4} = \frac{9 \times 8 \times 7 \times 6}{4 \times 3 \times 2 \times 1} = 126$$

**Hasil:** Banyak pilihan kumpulan soal yang dapat dipilih adalah **126 pilihan**.

---

### Variasi 18 — Kombinasi Geometri (Diagonal Bidang & Segitiga)

> [!EXAMPLE]
> **Soal 15.18 (Diagonal Poligon & Segitiga Titik Segaris — Tingkat Sedang):**
> 
> Diberikan sebuah segi-8 beraturan ($n = 8$). Tentukan:
> 1. Banyak diagonal bidang yang dapat dibentuk pada poligon tersebut!
> 2. Jika terdapat 10 titik pada bidang datar di mana tepat 4 titik di antaranya terletak pada satu garis lurus, berapa banyak segitiga yang dapat dibentuk dari titik-titik tersebut?

#### Pembahasan:

**Langkah 1 – Hitung banyak diagonal segi-8 beraturan:**

Diagonal adalah ruas garis yang menghubungkan dua titik sudut yang bukan sisi luar:
$$D = \binom{n}{2} - n = \binom{8}{2} - 8 = \frac{8 \times 7}{2} - 8 = 28 - 8 = 20$$

**Langkah 2 – Hitung banyak segitiga dengan titik segaris:**

Tiga titik dapat membentuk segitiga jika ketiganya tidak kolinear (segaris).
* Total kombinasi 3 titik dari 10 titik: $\binom{10}{3} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$.
* Kombinasi 3 titik yang berasal murni dari 4 titik kolinear (tidak membentuk segitiga): $\binom{4}{3} = 4$.
$$N_{\Delta} = \binom{10}{3} - \binom{4}{3} = 120 - 4 = 116$$

**Hasil:** Banyak diagonal adalah **20**, dan banyak segitiga adalah **116**.

---

### Variasi 19 — Pembagian Objek Identik / Stars and Bars

> [!EXAMPLE]
> **Soal 15.19 (Distribusi Permen Identik ke Anak — Tingkat Sulit):**
> 
> Seorang ibu mempunyai 9 permen rasa cokelat yang identik. Permen-permen tersebut akan dibagikan habis kepada 3 orang anaknya (Andi, Budi, dan Cici). Tentukan:
> 1. Banyak cara pembagian jika setiap anak boleh tidak mendapatkan permen ($x_i \ge 0$).
> 2. Banyak cara pembagian jika setiap anak harus mendapatkan **minimal 1 permen** ($x_i \ge 1$).

#### Pembahasan:

**Langkah 1 – Kasus $x_i \ge 0$ (Boleh ada yang tidak dapat):**

Persamaan: $x_1 + x_2 + x_3 = 9$ dengan $x_i \ge 0$.
Gunakan rumus Stars and Bars untuk bilangan bulat non-negatif:
$$\binom{n + k - 1}{k - 1} = \binom{9 + 3 - 1}{3 - 1} = \binom{11}{2} = \frac{11 \times 10}{2} = 55\text{ cara}$$

**Langkah 2 – Kasus $x_i \ge 1$ (Setiap anak minimal dapat 1):**

Berikan terlebih dahulu 1 permen ke masing-masing 3 anak, menyisakan $9 - 3 = 6$ permen untuk dibagikan bebas ($y_1 + y_2 + y_3 = 6$).
$$\binom{n - 1}{k - 1} = \binom{9 - 1}{3 - 1} = \binom{8}{2} = \frac{8 \times 7}{2} = 28\text{ cara}$$

**Hasil:** Banyak cara kasus pertama adalah **55 cara**, dan kasus kedua adalah **28 cara**.

---

### Variasi 20 — Teorema Binomial Newton (Mencari Koefisien Tertentu)

> [!EXAMPLE]
> **Soal 15.20 (Koefisien Suku Tertentu Ekspansi Binomial — Tingkat Sedang):**
> 
> Tentukan koefisien dari suku $x^4$ pada hasil penjabaran perpangkatan aljabar:
> $$(2x - 3)^7$$

#### Pembahasan:

**Langkah 1 – Tuliskan rumus suku umum ke-$(r + 1)$:**

Berdasarkan Teorema Binomial Newton untuk $(a + b)^n$ dengan $a = 2x, b = -3, n = 7$:
$$T_{r+1} = \binom{7}{r} (2x)^{7-r} (-3)^r = \binom{7}{r} 2^{7-r} (-3)^r x^{7-r}$$

**Langkah 2 – Tentukan nilai $r$ agar pangkat $x$ sama dengan 4:**

$$7 - r = 4 \implies r = 3$$

**Langkah 3 – Hitung nilai koefisien untuk $r = 3$:**

$$\begin{aligned}
\text{Koefisien} &= \binom{7}{3} \times 2^{7-3} \times (-3)^3 \\
&= \frac{7 \times 6 \times 5}{3 \times 2 \times 1} \times 2^4 \times (-27) \\
&= 35 \times 16 \times (-27) = -15.120
\end{aligned}$$

**Hasil:** Koefisien suku $x^4$ adalah **$-15.120$**.

---

### Variasi 21 — Teorema Binomial Newton (Mencari Suku Bebas $x$)

> [!EXAMPLE]
> **Soal 15.21 (Suku Konstan Bebas $x$ — Tingkat Sulit):**
> 
> Tentukan nilai suku konstan (suku yang tidak memuat variabel $x$) pada penjabaran:
> $$\left(x^2 - \frac{2}{x}\right)^9$$

#### Pembahasan:

**Langkah 1 – Rumuskan suku umum:**

Bentuk $(a + b)^n$ dengan $a = x^2, b = -2 x^{-1}, n = 9$:
$$T_{r+1} = \binom{9}{r} (x^2)^{9-r} (-2 x^{-1})^r = \binom{9}{r} (-2)^r x^{2(9-r) - r} = \binom{9}{r} (-2)^r x^{18 - 3r}$$

**Langkah 2 – Samakan eksponen $x$ dengan nol:**

$$18 - 3r = 0 \implies 3r = 18 \implies r = 6$$

**Langkah 3 – Hitung nilai suku konstan:**

$$\begin{aligned}
T_{7} &= \binom{9}{6} (-2)^6 = \binom{9}{3} \times 64 \\
&= \frac{9 \times 8 \times 7}{3 \times 2 \times 1} \times 64 = 84 \times 64 = 5.376
\end{aligned}$$

**Hasil:** Nilai suku konstan (bebas $x$) adalah **$5.376$**.

---

### Variasi 22 — Peluang Teoretis Laplace Ruang Sampel Ganda

> [!EXAMPLE]
> **Soal 15.22 (Peluang Dua Dadu Dilempar Bersamaan — Tingkat Mudah):**
> 
> Dua buah dadu setimbang bersisi enam dilempar bersama-sama satu kali. Berapakah peluang munculnya mata dadu yang berjumlah bilangan prima?

#### Pembahasan:

**Langkah 1 – Tentukan ruang sampel $S$:**

Dua dadu bersisi enam $\implies n(S) = 6 \times 6 = 36$.

**Langkah 2 – Tentukan titik sampel kejadian jumlah prima:**

Jumlah yang mungkin dari dua dadu adalah $2, 3, 4, \dots, 12$. Bilangan prima di rentang tersebut adalah: $\{2, 3, 5, 7, 11\}$.
* Jumlah $= 2$: $(1,1) \implies 1$ pasang.
* Jumlah $= 3$: $(1,2), (2,1) \implies 2$ pasang.
* Jumlah $= 5$: $(1,4), (2,3), (3,2), (4,1) \implies 4$ pasang.
* Jumlah $= 7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \implies 6$ pasang.
* Jumlah $= 11$: $(5,6), (6,5) \implies 2$ pasang.

$$n(A) = 1 + 2 + 4 + 6 + 2 = 15$$

**Langkah 3 – Hitung peluang kejadian:**

$$P(A) = \frac{n(A)}{n(S)} = \frac{15}{36} = \frac{5}{12}$$

**Hasil:** Peluang muncul jumlah bilangan prima adalah **$\frac{5}{12}$**.

---

### Variasi 23 — Peluang Pengambilan Objek Serentak Menggunakan Kombinasi

> [!EXAMPLE]
> **Soal 15.23 (Pengambilan Kelereng Serentak dari Kotak — Tingkat Sedang):**
> 
> Dalam sebuah kotak terdapat 6 kelereng merah dan 4 kelereng biru. Dari kotak tersebut diambil 3 kelereng sekaligus secara acak. Berapakah peluang terambil tepat 2 kelereng merah dan 1 kelereng biru?

#### Pembahasan:

**Langkah 1 – Hitung banyak anggota ruang sampel $n(S)$:**

Total kelereng $= 6 + 4 = 10$. Diambil 3 kelereng sekaligus:
$$n(S) = \binom{10}{3} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$$

**Langkah 2 – Hitung banyak titik sampel kejadian $n(A)$:**

Terambil 2 kelereng merah (dari 6 merah) DAN 1 kelereng biru (dari 4 biru):
$$n(A) = \binom{6}{2} \times \binom{4}{1} = \frac{6 \times 5}{2} \times 4 = 15 \times 4 = 60$$

**Langkah 3 – Hitung peluang kejadian:**

$$P(A) = \frac{n(A)}{n(S)} = \frac{60}{120} = \frac{1}{2}$$

**Hasil:** Peluang terambil tepat 2 merah dan 1 biru adalah **$\frac{1}{2}$**.

---

### Variasi 24 — Peluang Pengambilan Bertahap Tanpa Pengembalian

> [!EXAMPLE]
> **Soal 15.24 (Pengambilan Bola Berturutan Tanpa Pengembalian — Tingkat Sedang):**
> 
> Sebuah kantong memuat 5 bola putih dan 3 bola hitam. Dua bola diambil satu per satu secara berturut-turut **tanpa pengembalian**. Tentukan peluang terambilnya bola pertama berwarna putih dan bola kedua berwarna hitam!

#### Pembahasan:

**Langkah 1 – Hitung peluang pada pengambilan pertama:**

Total bola mula-mula $= 5 + 3 = 8$.
Peluang bola pertama Putih ($P_1$):
$$P(P_1) = \frac{5}{8}$$

**Langkah 2 – Hitung peluang pada pengambilan kedua (bersyarat):**

Karena bola tidak dikembalikan, total bola tersisa $= 8 - 1 = 7$.
Jumlah bola hitam masih utuh $= 3$. Peluang bola kedua Hitam ($H_2 \mid P_1$):
$$P(H_2 \mid P_1) = \frac{3}{7}$$

**Langkah 3 – Terapkan aturan perkalian peluang bersyarat:**

$$P(P_1 \cap H_2) = P(P_1) \times P(H_2 \mid P_1) = \frac{5}{8} \times \frac{3}{7} = \frac{15}{56}$$

**Hasil:** Peluang terambil bola pertama putih dan bola kedua hitam adalah **$\frac{15}{56}$**.

---

### Variasi 25 — Peluang Majemuk: Saling Lepas vs Tidak Saling Lepas

> [!EXAMPLE]
> **Soal 15.25 (Peluang Kartu Bridge Majemuk — Tingkat Mudah):**
> 
> Dari satu set kartu bridge standar (52 kartu tanpa joker) diambil satu kartu secara acak. Tentukan:
> 1. Peluang terambil kartu bernomor 10 ATAU kartu As.
> 2. Peluang terambil kartu As ATAU kartu bergambar Hati (*Heart*).

#### Pembahasan:

**Langkah 1 – Kasus 1: Kartu 10 atau Kartu As (Kejadian Saling Lepas):**

Kartu 10 dan kartu As tidak memiliki irisan ($A \cap B = \emptyset$).
$$P(10 \cup \text{As}) = P(10) + P(\text{As}) = \frac{4}{52} + \frac{4}{52} = \frac{8}{52} = \frac{2}{13}$$

**Langkah 2 – Kasus 2: Kartu As atau Kartu Hati (Tidak Saling Lepas):**

Ada kartu As yang juga bergambar Hati (kartu As Hati, 1 lembar irisan).
$$\begin{aligned}
P(\text{As} \cup \text{Hati}) &= P(\text{As}) + P(\text{Hati}) - P(\text{As} \cap \text{Hati}) \\
&= \frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}
\end{aligned}$$

**Hasil:** Peluang kasus 1 adalah **$\frac{2}{13}$**, dan peluang kasus 2 adalah **$\frac{4}{13}$**.

---

### Variasi 26 — Peluang Majemuk: Dua Kejadian Saling Bebas Independen

> [!EXAMPLE]
> **Soal 15.26 (Dua Penembak Sasaran Saling Bebas — Tingkat Sedang):**
> 
> Peluang penembak A mengenai target adalah $\frac{3}{4}$, sedangkan peluang penembak B mengenai target adalah $\frac{2}{3}$. Jika keduanya menembak sasaran secara independen satu kali, tentukan peluang bahwa **hanya satu penembak yang mengenai sasaran**!

#### Pembahasan:

**Langkah 1 – Tentukan peluang sukses dan gagal masing-masing penembak:**

* Penembak A: $P(A) = \frac{3}{4}$, komplemen $P(A') = 1 - \frac{3}{4} = \frac{1}{4}$.
* Penembak B: $P(B) = \frac{2}{3}$, komplemen $P(B') = 1 - \frac{2}{3} = \frac{1}{3}$.

**Langkah 2 – Uraikan kejadian "hanya satu penembak yang kena":**

Peristiwa ini dapat terjadi melalui dua skenario saling lepas:
* **Skenario 1 (A kena dan B luput):**
  $$P(A \cap B') = P(A) \times P(B') = \frac{3}{4} \times \frac{1}{3} = \frac{3}{12}$$
* **Skenario 2 (A luput dan B kena):**
  $$P(A' \cap B) = P(A') \times P(B) = \frac{1}{4} \times \frac{2}{3} = \frac{2}{12}$$

**Langkah 3 – Jumlahkan kedua skenario:**

$$P(\text{Tepat Satu Kena}) = \frac{3}{12} + \frac{2}{12} = \frac{5}{12}$$

**Hasil:** Peluang hanya satu penembak mengenai target adalah **$\frac{5}{12}$**.

---

### Variasi 27 — Peluang Komplemen Strategi "Paling Sedikit Satu"

> [!EXAMPLE]
> **Soal 15.27 (Paling Sedikit Satu Anak Laki-Laki — Tingkat Sedang):**
> 
> Sepasang suami istri merencanakan untuk memiliki 4 orang anak. Jika peluang lahirnya anak laki-laki dan perempuan sama besar ($\frac{1}{2}$), berapakah peluang keluarga tersebut memiliki **paling sedikit satu orang anak perempuan**?

#### Pembahasan:

**Langkah 1 – Identifikasi strategi komplemen:**

Menghitung secara langsung "minimal 1 perempuan" mengharuskan kita menjumlahkan peluang 1 perempuan, 2 perempuan, 3 perempuan, dan 4 perempuan.
Lebih cepat menggunakan komplemen:
$$P(\text{minimal 1 P}) = 1 - P(\text{tidak ada perempuan sama sekali}) = 1 - P(\text{semua anak laki-laki})$$

**Langkah 2 – Hitung peluang komplemen (keempat anak laki-laki):**

Setiap kelahiran bersifat independen:
$$P(\text{semua L}) = \left(\frac{1}{2}\right)^4 = \frac{1}{16}$$

**Langkah 3 – Hitung peluang yang dicari:**

$$P(\text{minimal 1 P}) = 1 - \frac{1}{16} = \frac{15}{16}$$

**Hasil:** Peluang keluarga tersebut memiliki paling sedikit 1 anak perempuan adalah **$\frac{15}{16}$**.

---

### Variasi 28 — Frekuensi Harapan Eksperimen Berulang

> [!EXAMPLE]
> **Soal 15.28 (Frekuensi Harapan Pelemparan Tiga Koin — Tingkat Mudah):**
> 
> Tiga keping uang logam setimbang dilempar secara serempak sebanyak 240 kali. Berapakah frekuensi harapan munculnya **paling sedikit dua sisi gambar (G)**?

#### Pembahasan:

**Langkah 1 – Tentukan ruang sampel dan titik sampel kejadian:**

Pada 3 koin, $n(S) = 2^3 = 8$.
Kejadian minimal 2 Gambar ($A$): muncul 2 Gambar atau 3 Gambar.
* Muncul 2 Gambar: $\{\text{GGA, GAG, AGG}\} \implies 3$ titik.
* Muncul 3 Gambar: $\{\text{GGG}\} \implies 1$ titik.
$$n(A) = 3 + 1 = 4$$

**Langkah 2 – Hitung peluang $P(A)$:**

$$P(A) = \frac{n(A)}{n(S)} = \frac{4}{8} = \frac{1}{2}$$

**Langkah 3 – Hitung frekuensi harapan:**

$$F_h(A) = N \times P(A) = 240 \times \frac{1}{2} = 120\text{ kali}$$

**Hasil:** Frekuensi harapan munculnya paling sedikit dua sisi gambar adalah **120 kali**.

---

### Variasi 29 — Peluang Bersyarat dengan Ruang Sampel Terbatas

> [!EXAMPLE]
> **Soal 15.29 (Peluang Bersyarat Dua Dadu — Tingkat Sedang):**
> 
> Dua buah dadu bersisi enam dilempar bersamaan. Jika **diketahui bahwa jumlah kedua mata dadu yang muncul adalah bilangan genap**, berapakah peluang bahwa mata dadu yang muncul pada dadu pertama adalah bilangan prima?

#### Pembahasan:

**Langkah 1 – Identifikasi ruang kondisi syarat $B$ (jumlah genap):**

Jumlah mata dadu genap terjadi jika:
* Kedua mata dadu ganjil: $3 \times 3 = 9$ kemungkinan.
* Kedua mata dadu genap: $3 \times 3 = 9$ kemungkinan.
$$n(B) = 9 + 9 = 18$$

**Langkah 2 – Identifikasi titik sampel $A \cap B$ (dadu pertama prima DAN jumlah genap):**

Mata dadu pertama prima: $\{2, 3, 5\}$.
* Jika dadu pertama $= 2$ (genap), maka dadu kedua harus genap $\{2, 4, 6\} \implies 3$ pasang.
* Jika dadu pertama $= 3$ (ganjil), maka dadu kedua harus ganjil $\{1, 3, 5\} \implies 3$ pasang.
* Jika dadu pertama $= 5$ (ganjil), maka dadu kedua harus ganjil $\{1, 3, 5\} \implies 3$ pasang.
$$n(A \cap B) = 3 + 3 + 3 = 9$$

**Langkah 3 – Hitung peluang bersyarat:**

$$P(A \mid B) = \frac{n(A \cap B)}{n(B)} = \frac{9}{18} = \frac{1}{2}$$

**Hasil:** Peluang mata dadu pertama prima jika diketahui jumlah kedua dadu genap adalah **$\frac{1}{2}$**.

---

### Variasi 30 — Peluang Bersyarat Menggunakan Tabel Kontingensi (HOTS)

> [!EXAMPLE]
> **Soal 15.30 (Analisis Tabel Kontingensi Dua Arah — Tingkat Sulit):**
> 
> Data hasil seleksi masuk perguruan tinggi dari 100 orang siswa disajikan pada tabel kontingensi berikut:
> 
> | Program Studi | Lulus Seleksi ($L$) | Tidak Lulus ($T$) | Total |
> | :--- | :---: | :---: | :---: |
> | **Saintek ($S$)** | 35 | 15 | 50 |
> | **Soshum ($H$)** | 25 | 25 | 50 |
> | **Total** | 60 | 40 | 100 |
> 
> Jika seorang siswa dipilih secara acak dari 100 siswa tersebut:
> 1. Tentukan peluang terpilihnya siswa yang lulus seleksi jika diketahui siswa tersebut berasal dari kelompok Saintek ($P(L \mid S)$).
> 2. Tentukan peluang terpilihnya siswa dari kelompok Soshum jika diketahui siswa tersebut lulus seleksi ($P(H \mid L)$).

#### Pembahasan:

**Langkah 1 – Hitung $P(L \mid S)$:**

Kondisi syarat adalah siswa berasal dari Saintek ($S$). Dari tabel:
* Total siswa Saintek: $n(S) = 50$.
* Siswa Saintek yang lulus: $n(L \cap S) = 35$.
$$P(L \mid S) = \frac{n(L \cap S)}{n(S)} = \frac{35}{50} = \frac{7}{10} = 0{,}70$$

**Langkah 2 – Hitung $P(H \mid L)$:**

Kondisi syarat adalah siswa yang lulus seleksi ($L$). Dari tabel:
* Total siswa yang lulus seleksi: $n(L) = 60$.
* Siswa kelompok Soshum yang lulus: $n(H \cap L) = 25$.
$$P(H \mid L) = \frac{n(H \cap L)}{n(L)} = \frac{25}{60} = \frac{5}{12}$$

**Hasil:** Nilai $P(L \mid S) = \mathbf{\frac{7}{10}}$ dan $P(H \mid L) = \mathbf{\frac{5}{12}}$.
