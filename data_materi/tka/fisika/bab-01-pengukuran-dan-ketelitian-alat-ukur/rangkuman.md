# Rangkuman Rumus Cepat & Intisari Materi — Pengukuran dan Ketelitian Alat Ukur
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika

### A. Intisari Konsep & Peta Definisi
Pengukuran adalah penentuan besaran fisis melalui perbandingan dengan standar internasional terkalibrasi. Pelaporan ilmiah wajib memuat nilai terbaik dan ketidakpastian mutlak instrumen.

| Instrumen Ukur | Batas Ketelitian (NST) | Ketidakpastian Mutlak ($\Delta x$) | Aplikasi Utama Soal TKA |
| :--- | :--- | :--- | :--- |
| **Mistar** | $1\text{ mm} = 0{,}1\text{ cm}$ | $\pm 0{,}5\text{ mm}$ | Panjang meja, papan tulis |
| **Jangka Sorong** | $0{,}1\text{ mm}$ atau $0{,}05\text{ mm}$ | $\pm 0{,}05\text{ mm}$ atau $\pm 0{,}025\text{ mm}$ | Diameter pipa, kelereng, kedalaman tabung |
| **Mikrometer Sekrup** | $0{,}01\text{ mm}$ | $\pm 0{,}005\text{ mm}$ | Ketebalan pelat tipis, diameter kawat halus |
| **Neraca Ohaus** | $0{,}1\text{ g}$ atau $0{,}05\text{ g}$ | $\pm 0{,}05\text{ g}$ atau $\pm 0{,}025\text{ g}$ | Massa padatan berbasis momen torsi |

---

### B. Matriks Rumus Utama & Keterangan Variabel
| Besaran / Prinsip | Formula Matematis | Keterangan Komponen Rumus & Satuan SI |
| :--- | :--- | :--- |
| **Bacaan Jangka Sorong** | $x = \text{SU} + (\text{SN} \times \text{NST})$ | $x$: hasil ukur ($\text{mm}$); $\text{SU}$: skala utama ($\text{mm}$); $\text{SN}$: skala nonius berimpit (tanpa satuan); $\text{NST}$: nilai skala terkecil ($\text{mm}$) |
| **Bacaan Mikrometer** | $x = \text{SU} + (\text{SP} \times 0{,}01\text{ mm})$ | $x$: tebal benda ($\text{mm}$); $\text{SU}$: skala selubung tetap ($\text{mm}$); $\text{SP}$: skala selubung putar (tanpa satuan) |
| **Ralat Tunggal** | $\Delta x = \frac{1}{2} \times \text{NST}$ | $\Delta x$: ketidakpastian mutlak; $\text{NST}$: skala terkecil alat ukur |
| **Ralat Berulang** | $s_x = \frac{1}{N}\sqrt{\frac{N\Sigma x_i^2 - (\Sigma x_i)^2}{N-1}}$ | $s_x$: deviasi standar sampel; $x_i$: nilai data ke-$i$; $N$: banyak pengulangan |
| **Ralat Relatif** | $\text{KR} = \frac{\Delta x}{\bar{x}} \times 100\%$ | $\text{KR}$: ketidakpastian relatif ($\&$); penentu hak jumlah angka penting |
| **Resultan Vektor** | $R = \sqrt{F_1^2 + F_2^2 + 2F_1F_2\cos\theta}$ | $R$: besar resultan ($\text{N}$); $F_1, F_2$: besar komponen vektor ($\text{N}$); $\theta$: sudut apit ($^{\circ}$) |
| **Dot Product** | $\vec{A} \cdot \vec{B} = |\vec{A}||\vec{B}|\cos\theta$ | Hasil berupa skalar; $W = \vec{F} \cdot \vec{s}$ (satuan: $\text{J}$) |
| **Cross Product** | $|\vec{A} \times \vec{B}| = |\vec{A}||\vec{B}|\sin\theta$ | Hasil berupa vektor tegak lurus bidang; $\vec{\tau} = \vec{r} \times \vec{F}$ (satuan: $\text{N}\cdot\text{m}$) |

---

### C. Kasus Khusus & Analisis Pola Soal TKA
1. **Analisis Dimensi Pengujian Formula Fisis:**
   * Gaya: $[M][L][T]^{-2}$
   * Usaha & Energi: $[M][L]^2[T]^{-2}$
   * Tekanan: $[M][L]^{-1}[T]^{-2}$
   * Daya: $[M][L]^2[T]^{-3}$
2. **Kaidah Hak Angka Penting Berdasarkan Ketidakpastian Relatif:**
   * $\text{KR} \approx 10\%$: Berhak atas 2 angka penting.
   * $\text{KR} \approx 1\%$: Berhak atas 3 angka penting.
   * $\text{KR} \approx 0{,}1\%$: Berhak atas 4 angka penting.

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Jangan pernah menjumlahkan Skala Utama (SU) dalam satuan sentimeter ($\text{cm}$) langsung dengan Skala Nonius (SN) dalam milimeter ($\text{mm}$)! Satuan skala utama wajib dikonversikan ke $\text{mm}$ terlebih dahulu sebelum dijumlahkan.

> [!TIP] Super Solusi Cepat:
> Pada soal operasi perkalian dan pembagian angka penting di TKA, periksa faktor dengan angka penting paling sedikit. Jawaban yang benar **selalu** memiliki jumlah angka penting yang sama dengan faktor tersedikit tersebut tanpa perlu menghitung desimalnya secara lengkap!