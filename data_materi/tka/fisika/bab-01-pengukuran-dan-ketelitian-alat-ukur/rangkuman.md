# Rangkuman Rumus Cepat & Konsep Inti — Pengukuran dan Ketelitian Alat Ukur
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Formula Alat Ukur Presisi Mekanik

* **Jangka Sorong (Vernier Caliper):**
  $$x = \text{SU} + (\text{SN} \times \text{NST})$$
  * Nilai Skala Terkecil (NST):
    $$\text{NST} = \frac{1\text{ mm}}{n}$$
  * Nonius 10 skala: $\text{NST} = 0{,}1\text{ mm} = 0{,}01\text{ cm}$.
  * Nonius 20 skala: $\text{NST} = 0{,}05\text{ mm} = 0{,}005\text{ cm}$.
  * Nonius 50 skala: $\text{NST} = 0{,}02\text{ mm} = 0{,}002\text{ cm}$.

* **Mikrometer Sekrup (Micrometer Screw Gauge):**
  $$x = \text{SU} + (\text{SP} \times 0{,}01\text{ mm})$$
  * Nilai Skala Terkecil $\text{NST} = 0{,}01\text{ mm}$.
  * 1 putaran penuh thimble (50 skala) setara pergeseran poros sejauh $0{,}5\text{ mm}$.

---

### B. Formula Analisis Ketidakpastian & Ralat Pengukuran

* **Ketidakpastian Mutlak Pengukuran Tunggal:**
  $$\Delta x = \frac{1}{2} \times \text{NST}$$
  * Format pelaporan ilmiah:
    $$x = \bar{x} \pm \Delta x$$
  * Banyaknya desimal nilai terbaik $\bar{x}$ harus setara dengan desimal ketidakpastian $\Delta x$.

* **Ketidakpastian Mutlak Pengukuran Berulang ($N$ Sampel):**
  $$\bar{x} = \frac{\sum x_i}{N}$$
  $$s_x = \Delta x = \frac{1}{N}\sqrt{\frac{N\sum x_i^2 - \left(\sum x_i\right)^2}{N - 1}}$$

* **Ketidakpastian Relatif (KR) & Hak Angka Penting:**
  $$\text{KR} = \frac{\Delta x}{\bar{x}} \times 100\%$$
  * Jika $\text{KR} \approx 10\% \implies$ Berhak atas 2 Angka Penting.
  * Jika $\text{KR} \approx 1\% \implies$ Berhak atas 3 Angka Penting.
  * Jika $\text{KR} \approx 0{,}1\% \implies$ Berhak atas 4 Angka Penting.

* **Perambatan Ketidakpastian Operasi Matematis:**
  * Penjumlahan & Pengurangan ($Z = X \pm Y$):
    $$\Delta Z = \sqrt{(\Delta X)^2 + (\Delta Y)^2}$$
  * Perkalian & Pembagian ($Z = X \cdot Y$ atau $Z = \frac{X}{Y}$):
    $$\frac{\Delta Z}{Z} = \sqrt{\left(\frac{\Delta X}{X}\right)^2 + \left(\frac{\Delta Y}{Y}\right)^2}$$
  * Operasi Pemangkatan ($Z = X^n$):
    $$\frac{\Delta Z}{Z} = |n| \frac{\Delta X}{X}$$

---

### C. Kaidah Perhitungan Angka Penting (AP)

* **Penjumlahan & Pengurangan:**
  * Hasil akhir hanya boleh mengandung tepat **satu angka taksiran** (mengikuti jumlah desimal tersedikit dari bilangan yang dioperasikan).
* **Perkalian & Pembagian:**
  * Hasil akhir dibulatkan memiliki jumlah angka penting **sama dengan faktor yang memiliki angka penting paling sedikit**.
* **Pemangkatan & Penarikan Akar:**
  * Hasil akhir dibulatkan memiliki jumlah angka penting **sama dengan bilangan yang dipangkatkan atau ditarik akarnya**.
* **Operasi Perkalian/Pembagian dengan Bilangan Eksak:**
  * Hasil perhitungan mengikuti jumlah angka penting dari **angka hasil pengukuran**. Bilangan cacah/eksak memiliki angka penting tak terhingga.

---

### D. Formula Aljabar Vektor Kinematika

* **Resultan Dua Vektor (Metode Jajar Genjang):**
  $$R = \sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \cos\theta}$$
  * Sudut apit searah ($\theta = 0^{\circ}$): $R_{\max} = F_1 + F_2$.
  * Sudut apit tegak lurus ($\theta = 90^{\circ}$): $R = \sqrt{F_1^2 + F_2^2}$.
  * Sudut apit berlawanan ($\theta = 180^{\circ}$): $R_{\min} = |F_1 - F_2|$.

* **Arah Resultan Vektor (Aturan Sinus):**
  $$\frac{R}{\sin\theta} = \frac{F_1}{\sin\beta} = \frac{F_2}{\sin\alpha}$$

* **Metode Analitis Komponen Kartesius:**
  $$R_x = \sum F_x = \sum F \cos\theta$$
  $$R_y = \sum F_y = \sum F \sin\theta$$
  $$R = \sqrt{R_x^2 + R_y^2}, \quad \tan\alpha = \frac{R_y}{R_x}$$

* **Perkalian Titik (Dot Product / Skalar):**
  $$\vec{A} \cdot \vec{B} = |\vec{A}||\vec{B}|\cos\theta = A_x B_x + A_y B_y + A_z B_z$$
  * Sifat: Komutatif. Jika $\vec{A} \perp \vec{B}$ ($\theta = 90^{\circ}$), maka $\vec{A} \cdot \vec{B} = 0$. Aplikasi: Usaha $W = \vec{F} \cdot \vec{s}$.

* **Perkalian Silang (Cross Product / Vektor):**
  $$|\vec{A} \times \vec{B}| = |\vec{A}||\vec{B}|\sin\theta$$
  * Sifat: Anti-komutatif ($\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$). Menghasilkan vektor tegak lurus bidang. Aplikasi: Momen Gaya $\vec{\tau} = \vec{r} \times \vec{F}$.

---

### E. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> 1. Pada jangka sorong, jangan menjumlahkan Skala Utama (cm) langsung dengan Skala Nonius (mm). Satuan skala utama wajib dikonversikan ke mm terlebih dahulu!
> 2. Angka nol di sebelah kiri angka bukan nol pertama **bukan angka penting** ($0{,}0025$ memiliki 2 AP). Angka nol di sebelah kanan tanda desimal setelah angka bukan nol **adalah angka penting** ($2{,}500$ memiliki 4 AP).

> [!TIP] Super Solusi Cepat:
> Pada soal operasi perkalian dan pembagian AP di pilihan ganda ujian, periksa faktor dengan angka penting paling sedikit. Jawaban yang benar **selalu** memiliki jumlah angka penting yang sama dengan faktor tersedikit tersebut tanpa perlu menghitung desimalnya secara lengkap!