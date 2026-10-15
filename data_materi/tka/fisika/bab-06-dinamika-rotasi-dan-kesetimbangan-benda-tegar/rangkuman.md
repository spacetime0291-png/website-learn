# Rangkuman Rumus Cepat & Intisari Materi — Dinamika Rotasi dan Kesetimbangan
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika

### A. Intisari Konsep & Peta Definisi
Dinamika rotasi menganalisis perputaran benda tegar tehadap poros akibat resultan torsi. Distribusi massa relatif terhadap poros menentukan besarnya momen inersia kelembaman rotasi.

| Bentuk Benda Tegar | Momen Inersia ($I$) | Nilai Konstanta Inersia ($k$) |
| :--- | :--- | :--- |
| **Silinder Pejal** | $\frac{1}{2} M R^2$ | $k = 0{,}5$ |
| **Silinder Berongga** | $M R^2$ | $k = 1{,}0$ |
| **Bola Pejal** | $\frac{2}{5} M R^2$ | $k = 0{,}4$ |
| **Bola Berongga** | $\frac{2}{3} M R^2$ | $k = 0{,}67$ |

---

### B. Matriks Rumus Utama & Rumus Cepat
| Besaran / Prinsip | Formula Matematis | Kondisi Penerapan |
| :--- | :--- | :--- |
| **Hukum II Rotasi** | $\Sigma \tau = I \cdot \alpha$ | Analog dengan $F = ma$ |
| **Percepatan Menggelinding** | $a = \frac{g \sin\theta}{1 + k}$ | Menggelinding murni tanpa slip |
| **Kecepatan Dasar Bidang** | $v = \sqrt{\frac{2gh}{1 + k}}$ | Turun dari ketinggian $h$ |
| **Tangga Bersandar Licin** | $\mu_s = \frac{1}{2 \tan\theta}$ | Tangga homogen tepat akan slip |
| **Momentum Sudut** | $L = I \omega$ | Kekal jika $\Sigma \tau_{\text{luar}} = 0$ |

---

### C. Kasus Khusus & Analisis Pola Soal TKA
1. **Perlombaan Menggelinding Menuruni Bidang Miring:**
   * Benda dengan konstanta $k$ **paling kecil** akan memiliki percepatan terbesar dan tiba di dasar paling cepat:
     $$\text{Bola Pejal } (k=0{,}4) > \text{Silinder Pejal } (k=0{,}5) > \text{Bola Berongga } (k=0{,}67) > \text{Silinder Berongga } (k=1{,}0)$$
2. **Kekekalan Momentum Sudut Penari Balet:**
   * Saat merapatkan tangan, momen inersia mengecil ($I_2 < I_1$), maka kecepatan putar membesar ($\omega_2 > \omega_1$):
     $$I_1 \omega_1 = I_2 \omega_2$$

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Pada kesetimbangan statis batang tangga, lengan gaya berat selalu diukur dari proyeksi horizontal titik berat batang terhadap poros, yaitu setengah jarak dasar tangga ke dinding ($rac{1}{2}x$), bukan panjang batang tangga!

> [!TIP] Super Solusi Cepat:
> Untuk tangga bersandar dinding licin yang tepat akan tergelincir, langsung gunakan rumus kilat koefisien gesek: $\mu_s = \frac{1}{2\tan\theta}$!