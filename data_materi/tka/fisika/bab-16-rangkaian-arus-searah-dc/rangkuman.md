# Rangkuman Rumus Cepat & Intisari Materi — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

### A. Intisari Konsep & Peta Definisi
Rangkaian arus searah (DC) mengatur aliran muatan listrik satu arah di bawah beda potensial konstan. Rangkaian dianalisis melalui Hukum Ohm dan Hukum Konservasi Kirchhoff.

| Prinsip Rangkaian | Karakteristik Kuat Arus ($I$) | Karakteristik Beda Potensial ($V$) |
| :--- | :--- | :--- |
| **Rangkaian Seri** | Kuat arus sama di seluruh cabang | $V_{\text{total}} = V_1 + V_2$ (Pembagi tegangan) |
| **Rangkaian Paralel** | $I_{\text{total}} = I_1 + I_2$ (Pembagi arus) | Tegangan sama di seluruh cabang paralel |
| **Hambatan Gesek Kawat** | Berbanding lurus panjang kawat ($L$) | Berbanding terbalik luas penampang ($A$) |

---

### B. Matriks Rumus Utama & Rumus Cepat
| Parameter Listrik | Formula Matematis | Kondisi Penerapan |
| :--- | :--- | :--- |
| **Hukum Ohm** | $V = I \cdot R$ | Konduktor ohmik |
| **Resistansi Kawat** | $R = \rho \frac{L}{A}$ | Resistivitas jenis bahan |
| **Hambatan Pengaruh Suhu** | $R_t = R_0 (1 + \alpha \Delta T)$ | Perubahan suhu konduktor |
| **Hukum I Kirchhoff** | $\Sigma I_{\text{masuk}} = \Sigma I_{\text{keluar}}$ | Titik percabangan simpul |
| **Hukum II Kirchhoff** | $\Sigma \mathcal{E} + \Sigma (IR) = 0$ | Lintasan loop tertutup |
| **Daya Lampu Redup** | $P_2 = P_1 \left(\frac{V_2}{V_1}\right)^2$ | Lampu dipasang tegangan beda |

---

### C. Kasus Khusus & Analisis Pola Soal TKA
1. **Jembatan Wheatstone Seimbang:**
   * Jika hasil kali silang hambatan sama besar ($R_1 R_3 = R_2 R_4$), maka resistor di tengah tidak dialiri arus ($I_G = 0$) dan dapat diabaikan dari perhitungan.
2. **Kawat Ditarik Menjadi Lebih Panjang Tanpa Perubahan Volume:**
   * Jika kawat ditarik hingga panjangnya menjadi $n$ kali lipat ($L' = nL$), luas penampangnya otomatis mengecil menjadi $\frac{1}{n}A$, sehingga hambatannya melonjak menjadi **$n^2$ kali lipat**:
     $$R' = n^2 R$$

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Jangan lupa bahwa daya lampu berbanding lurus dengan kuadrat tegangan ($V^2$), BUKAN berbanding lurus linier dengan $V$! Jika tegangan turun separuh (50%), dayanya tidak turun 50%, melainkan anjlok menjadi 25% (berkurang 75%)!

> [!TIP] Super Solusi Cepat:
> Untuk mencari kuat arus pada dua resistor paralel $R_1$ dan $R_2$, gunakan pembagi arus langsung: $I_1 = \frac{R_2}{R_1 + R_2} I_{\text{total}}$!