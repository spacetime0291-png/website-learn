# Rangkuman: 15. Aturan Pencacahan (Permutasi, Kombinasi) dan Teori Peluang
**Kategori:** TKA Matematika Wajib | **Kurikulum:** Sintesis Kurikulum Merdeka & K13

## 15. Aturan Pencacahan (Permutasi, Kombinasi) dan Teori Peluang

---

### A. Intisari Rumus Pokok Kaidah Pencacahan & Peluang

| Topik Bahasan | Rumus / Notasi Matematis | Keterangan & Kondisi Penggunaan | Contoh Singkat |
| :--- | :--- | :--- | :--- |
| **Aturan Penjumlahan** | $N = n_1 + n_2 + \dots + n_k$ | Pilihan alternatif saling lepas (kata hubung **"ATAU"**). | 3 kemeja atau 2 kaos $\implies 3 + 2 = 5$ pilihan baju. |
| **Aturan Perkalian** | $N = n_1 \times n_2 \times \dots \times n_k$ | Prosedur berurutan / serentak (kata hubung **"DAN"**). | 4 baju dan 3 celana $\implies 4 \times 3 = 12$ setelan. |
| **Notasi Faktorial** | $n! = n(n-1)\dots 1, \quad 0! = 1$ | Perkalian terurut bilangan bulat positif hingga $1$. | $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$. |
| **Permutasi Linier** | $P(n, r) = \frac{n!}{(n - r)!}$ | Memilih dan menyusun $r$ dari $n$ unsur (**urutan penting**). | Memilih Ketua dan Sekretaris dari 6 calon $\implies P(6, 2) = 30$. |
| **Permutasi Unsur Sama** | $P = \frac{n!}{k_1! \cdot k_2! \dots k_m!}$ | Menyusun $n$ unsur dengan beberapa kelompok unsur identik. | Kata "MALAM" ($n=5, M=2, A=2) \implies \frac{5!}{2! 2!} = 30$. |
| **Permutasi Siklis** | $P_{\text{siklis}} = (n - 1)!$ | Penataan melingkar mengelilingi meja bundar. | 5 orang duduk melingkar $\implies (5 - 1)! = 4! = 24$. |
| **Permutasi Gelang/Kalung** | $P_{\text{gelang}} = \frac{(n - 1)!}{2}$ | Formasi melingkar yang dapat dibalik depan-belakang. | 6 manik berbeda pada gelang $\implies \frac{5!}{2} = 60$. |
| **Kombinasi Dasar** | $C(n, r) = \binom{n}{r} = \frac{n!}{r!(n - r)!}$ | Memilih $r$ dari $n$ unsur (**urutan diabaikan**). | Memilih 3 perwakilan dari 8 siswa $\implies C(8, 3) = 56$. |
| **Simetri Kombinasi** | $\binom{n}{r} = \binom{n}{n - r}$ | Sifat kesetaraan untuk mempermudah perhitungan. | $\binom{9}{7} = \binom{9}{2} = \frac{9 \times 8}{2} = 36$. |
| **Diagonal Segi-$n$** | $D = \binom{n}{2} - n = \frac{n(n - 3)}{2}$ | Banyak garis hubung titik sudut bukan sisi luar. | Segi-8 beraturan $\implies \frac{8 \times 5}{2} = 20$ diagonal. |
| **Stars and Bars ($x_i \ge 0$)** | $\binom{n + k - 1}{k - 1}$ | Banyak cara membagi $n$ barang identik ke $k$ wadah berbeda. | Membagi 7 permen ke 3 anak $\implies \binom{7+3-1}{3-1} = \binom{9}{2} = 36$. |
| **Suku Binomial Newton** | $T_{r+1} = \binom{n}{r} a^{n-r} b^r$ | Suku ke-$(r+1)$ dari ekspansi aljabar $(a + b)^n$. | Suku $x^2$ dari $(x + 2)^4 \implies \binom{4}{2} x^2 2^2 = 24x^2$. |
| **Peluang Klasik Laplace** | $P(A) = \frac{n(A)}{n(S)}, \quad 0 \le P(A) \le 1$ | Ruang sampel seragam (*equally likely*). | Peluang dadu mata prima $\{2, 3, 5\} \implies \frac{3}{6} = \frac{1}{2}$. |
| **Peluang Komplemen** | $P(A') = 1 - P(A)$ | Digunakan terutama pada kondisi **"paling sedikit satu"**. | Peluang minimal 1 angka pada 3 koin $\implies 1 - (\frac{1}{2})^3 = \frac{7}{8}$. |
| **Frekuensi Harapan** | $F_h(A) = N \times P(A)$ | Ekspektasi kemunculan dalam $N$ kali percobaan. | Lempar dadu 120 kali $\implies F_h(\text{angka } 6) = 120 \times \frac{1}{6} = 20$. |
| **Gabungan Kejadian** | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Peluang kejadian majemuk secara umum (kata **"ATAU"**). | Kartu As atau kartu Hati dari set bridge standar. |
| **Kejadian Saling Lepas** | $P(A \cup B) = P(A) + P(B)$ | Dua kejadian tidak dapat terjadi bersamaan ($A \cap B = \emptyset$). | Muncul mata dadu 2 atau mata dadu 5 $\implies \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$. |
| **Kejadian Saling Bebas** | $P(A \cap B) = P(A) \times P(B)$ | Kejadian $A$ dan $B$ tidak saling mempengaruhi peluang. | Melempar uang logam dan dadu serempak. |
| **Peluang Bersyarat** | $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ | Peluang kejadian $A$ setelah diketahui $B$ telah terjadi. | Peluang kartu As jika diketahui kartu bergambar merah. |

---

### B. Jurus Cepat & Trik Pemecahan Cepat (*Exam Shortcuts*)

> [!TIP]
> **Trik 1: Metode Blok untuk Unsur Berdampingan**
> Jika $k$ unsur harus selalu berdampingan dalam barisan berjumlah $n$ unsur:
> 1. Ikat $k$ unsur tersebut menjadi **1 blok besar**.
> 2. Banyak unsur efektif sekarang menjadi $(n - k + 1)$ unsur.
> 3. Total susunan $= (n - k + 1)! \times k!$.

> [!TIP]
> **Trik 2: Metode Celah untuk Unsur Dilarang Berdampingan**
> Jika $m$ unsur dilarang bersebelahan satu sama lain:
> 1. Susun terlebih dahulu $(n - m)$ unsur yang bebas $\implies (n - m)!$ cara.
> 2. Banyak celah di antara dan di ujung-ujung unsur bebas ada $(n - m + 1)$ celah.
> 3. Tempatkan $m$ unsur ke celah tersebut $\implies P(n - m + 1, m)$ cara.
> 4. Total cara $= (n - m)! \times P(n - m + 1, m)$.

> [!TIP]
> **Trik 3: Menghitung Suku Bebas $x$ Tanpa Menjabarkan Semuanya**
> Untuk bentuk $\left(a x^p + \frac{b}{x^q}\right)^n$, suku bebas $x$ didapat dengan menset $p(n - r) - q r = 0 \implies r = \frac{p n}{p + q}$.
> Jika $r$ bulat non-negatif, maka koefisien suku bebas $= \binom{n}{r} a^{n-r} b^r$.

---

### C. Jebakan Konseptual Ujian Nasional & UTBK (*Pitfall Traps*)

> [!WARNING]
> **Jebakan 1: Permutasi vs Kombinasi pada Soal Cerita**
> Jangan tertipu kata "memilih". Jika objek yang dipilih memiliki peran, jabatan, urutan antre, atau posisi yang berbeda, itu adalah **PERMUTASI**. Gunakan **KOMBINASI** hanya jika semua yang terpilih berstatus sama setara.

> [!WARNING]
> **Jebakan 2: Nol ($0$) pada Digit Terdepan dan Angka Genap**
> Pada soal pembentukan bilangan genap dari angka-angka yang memuat digit $0$, **JANGAN** langsung mengisi kotak satuan dengan $(0, 2, 4, \dots)$ sekaligus. Mengapa? Karena jika satuan memilih $0$, slot ratusan/ribuan memiliki pilihan yang berbeda dibanding jika satuan memilih $2$ atau $4$. Wajib dipisah menjadi 2 kasus!

> [!WARNING]
> **Jebakan 3: Pengambilan Bola Tanpa Pengembalian**
> Saat mengambil bola bertahap tanpa pengembalian, penyebut (total bola di kotak) selalu berkurang $1$ pada setiap tahap ($n, n-1, n-2, \dots$). Mengabaikan pengurangan penyebut adalah kekeliruan fatal yang paling sering terjadi.
