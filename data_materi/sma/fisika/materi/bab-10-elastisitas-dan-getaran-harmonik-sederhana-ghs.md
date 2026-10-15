# Bab 10: Elastisitas dan Getaran Harmonik Sederhana (GHS)
**Kategori:** TKA Fisika | **Blok:** Blok 1: Mekanika

## Bab 10: Elastisitas dan Getaran Harmonik Sederhana (GHS)

---

### A. Elastisitas Bahan dan Hukum Hooke
Elastisitas adalah sifat suatu benda padat yang cenderung kembali ke bentuk dan ukuran semula setelah gaya luar yang mendeformasikannya dihilangkan.

#### 1. Tiga Besaran Dasar Elastisitas Bahan:
1. **Tegangan (*Stress* / $\sigma$):**  
   Besar gaya deformasi internal per satuan luas penampang bahan:
   $$\sigma = \frac{F}{A}$$
   * Satuan SI: $\text{N/m}^2$ atau Pascal ($\text{Pa}$).
2. **Regangan (*Strain* / $e$):**  
   Perbandingan pertambahan panjang bahan terhadap panjang awalnya (tidak memiliki satuan / nirdimensi):
   $$e = \frac{\Delta L}{L_0}$$
3. **Modulus Elastisitas (Modulus Young / $E$):**  
   Tingkat kekakuan bahan dalam mempertahankan bentuknya pada rentang elastis (Hukum Hooke untuk bahan):
   $$E = \frac{\text{Tegangan}}{\text{Regangan}} = \frac{\sigma}{e} = \frac{F / A}{\Delta L / L_0} = \frac{F \cdot L_0}{A \cdot \Delta L}$$
   * Satuan SI: $\text{N/m}^2$ atau $\text{Pa}$.

#### 2. Hukum Hooke pada Pegas:
Pada daerah deformasi elastis, besar gaya pemulih pegas berbanding lurus dengan pertambahan panjang pegas:
$$F = k \cdot \Delta x$$
* $F$ = gaya yang meregangkan/memampatkan pegas ($\text{N}$)
* $k$ = konstanta elastisitas pegas ($\text{N/m}$)
* $\Delta x$ = pertambahan panjang pegas ($\text{m}$)
* **Korelasi Konstanta Pegas dengan Modulus Young:**
  $$F = \left(\frac{E \cdot A}{L_0}\right) \Delta L \implies k = \frac{E \cdot A}{L_0}$$

#### 3. Energi Potensial Elastisitas Pegas ($E_p$):
Energi yang tersimpan di dalam pegas teregang:
$$E_p = \frac{1}{2} k (\Delta x)^2 = \frac{1}{2} F \cdot \Delta x$$
*(Sama dengan luas daerah segitiga di bawah grafik kurva $F - \Delta x$)*.

---

### B. Susunan Pegas (Seri, Paralel, dan Campuran)

```text
    Susunan Seri:                 Susunan Paralel:
      ┌─────┐                       ┌───[ k_1 ]───┐
      │ k_1 │                       │             │
      └──┬──┘                  ─────┤             ├─────
      ┌──┴──┐                       │             │
      │ k_2 │                       └───[ k_2 ]───┘
      └─────┘
```

#### 1. Susunan Seri Pegas:
Gaya tarik yang dialami setiap pegas adalah sama besar ($F_1 = F_2 = F$), namun pertambahan panjang totalnya terakumulasi ($\Delta x_{\text{tot}} = \Delta x_1 + \Delta x_2$):
$$\frac{1}{k_s} = \frac{1}{k_1} + \frac{1}{k_2} + \dots + \frac{1}{k_n}$$
* **Khusus 2 pegas:** $k_s = \frac{k_1 \cdot k_2}{k_1 + k_2}$
* **Khusus $n$ pegas identik:** $k_s = \frac{k}{n}$
*(Susunan seri menghasilkan pegas pengganti yang **lebih lentur / konstanta mengecil**).*

#### 2. Susunan Paralel Pegas:
Pertambahan panjang setiap pegas adalah sama besar ($\Delta x_1 = \Delta x_2 = \Delta x$), namun gaya tarik total terbagi ke masing-masing pegas ($F_{\text{tot}} = F_1 + F_2$):
$$k_p = k_1 + k_2 + \dots + k_n$$
* **Khusus $n$ pegas identik:** $k_p = n \cdot k$
*(Susunan paralel menghasilkan pegas pengganti yang **lebih kaku / konstanta membesar**).*

---

### C. Kinematika Getaran Harmonik Sederhana (GHS)
Getaran Harmonik Sederhana (GHS) adalah gerak bolak-balik periodik di sekitar titik kesetimbangan statis yang ditimbulkan oleh gaya pemulih ($F = -kx$).

#### 1. Persamaan Simpangan ($y$):
$$y(t) = A \sin(\omega t + \theta_0)$$
* $y$ = simpangan getaran pada saat $t$ ($\text{m}$)
* $A$ = amplitudo getaran / simpangan maksimum ($\text{m}$)
* $\omega = 2\pi f = \frac{2\pi}{T}$ = kecepatan / frekuensi sudut osilasi ($\text{rad/s}$)
* $\theta_0$ = sudut fase awal saat $t = 0$ ($\text{rad}$)

#### 2. Persamaan Kecepatan ($v$):
Turunan pertama simpangan terhadap waktu:
$$v(t) = \frac{dy}{dt} = \omega A \cos(\omega t + \theta_0) = \omega \sqrt{A^2 - y^2}$$
* **Kecepatan Maksimum ($v_{\max}$):** Tercapai saat melintasi **titik setimbang ($y = 0$)**:
  $$v_{\max} = \omega \cdot A$$
* Di titik balik / amplitudo ($y = \pm A$): Kelajuan benda tepat sesaat bernilai **nol ($v = 0$)**.

#### 3. Persamaan Percepatan ($a$):
Turunan kedua simpangan terhadap waktu:
$$a(t) = \frac{dv}{dt} = -\omega^2 A \sin(\omega t + \theta_0) = -\omega^2 y$$
* Tanda minus ($-$) menunjukkan bahwa vektor arah percepatan selalu berlawanan dengan arah simpangan dan selalu mengarah menuju titik kesetimbangan.
* **Percepatan Maksimum ($a_{\max}$):** Tercapai di **titik balik / amplitudo ($y = \pm A$)**:
  $$a_{\max} = \omega^2 \cdot A$$
* Di titik setimbang ($y = 0$): Percepatan partikel bernilai **nol ($a = 0$)**.

#### 4. Sudut Fase ($\theta$), Fase ($\varphi$), dan Beda Fase ($\Delta \varphi$):
* Sudut fase: $\theta = \omega t + \theta_0 = 2\pi\left(\frac{t}{T} + \varphi_0\right)$
* Fase getaran: $\varphi = \frac{\theta}{2\pi} = \frac{t}{T} + \varphi_0$
* Beda fase antara dua keadaan waktu:
  $$\Delta \varphi = \frac{\Delta t}{T} = \frac{t_2 - t_1}{T}$$
  * Dua titik **sefase**: $\Delta \varphi = 0, 1, 2, \dots$
  * Dua titik **berlawanan fase**: $\Delta \varphi = \frac{1}{2}, \frac{3}{2}, \frac{5}{2}, \dots$

---

### D. Periode dan Frekuensi Sistem Osilasi Harmonik

#### 1. Sistem Pegas - Beban ($m$):
Gaya pemulih pegas: $\sum F = -k y = m a \implies -k y = m (-\omega^2 y) \implies \omega = \sqrt{\frac{k}{m}}$
* **Periode ($T$) dan Frekuensi ($f$):**
  $$T = 2\pi\sqrt{\frac{m}{k}} \quad \text{dan} \quad f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$
  *(Periode getaran pegas **TIDAK dipengaruhi oleh percepatan gravitasi bumi**; baik di bumi maupun di bulan periodenya tetap sama).*

#### 2. Ayunan Bandul Sederhana (Panjang Tali $L$):
Untuk sudut simpangan kecil ($\theta < 10^\circ \implies \sin\theta \approx \frac{y}{L}$):  
Gaya pemulih gravitasi: $F = -mg\sin\theta \approx -\left(\frac{mg}{L}\right)y \implies \omega = \sqrt{\frac{g}{L}}$
* **Periode ($T$) dan Frekuensi ($f$):**
  $$T = 2\pi\sqrt{\frac{L}{g}} \quad \text{dan} \quad f = \frac{1}{2\pi}\sqrt{\frac{g}{L}}$$
  *(Periode ayunan bandul **TIDAK dipengaruhi oleh massa beban**, melainkan hanya bergantung pada panjang tali $L$ dan gravitasi $g$).*

---

### E. Kekekalan Energi pada Getaran Harmonik Sederhana

```text
       Energi ▲
              │             E_m (Total Kekal)
          E_m ┼─────────────────────────────
              │      \   E_p   /
              │       \       /
              │  E_k   \     /   E_k
              │         \   /
              └───────────┴──────────► Simpangan (y)
             -A           0          +A
```

Pada gerak harmonik sederhana tanpa gesekan, energi mekanik sistem bernilai kekal di setiap posisi:

#### 1. Komponen Energi:
* **Energi Kinetik:**
  $$E_k = \frac{1}{2} m v^2 = \frac{1}{2} k (A^2 - y^2) = \frac{1}{2} k A^2 \cos^2(\omega t)$$
* **Energi Potensial:**
  $$E_p = \frac{1}{2} k y^2 = \frac{1}{2} k A^2 \sin^2(\omega t)$$
* **Energi Mekanik Total:**
  $$E_m = E_k + E_p = \frac{1}{2} k A^2 = \frac{1}{2} m \omega^2 A^2 = 2\pi^2 m f^2 A^2 = \text{konstan}$$

#### 2. Posisi Khusus Perbandingan Energi Kinetik dan Potensial:
Jika pada suatu titik berlaku $E_k = n \cdot E_p$:
$$E_m = E_k + E_p \implies \frac{1}{2}kA^2 = n E_p + E_p = (n+1)\left(\frac{1}{2}ky^2\right) \implies y = \frac{A}{\sqrt{n + 1}}$$
* *Contoh:* Saat energi kinetik sama dengan energi potensial ($n = 1 \implies E_k = E_p$):
  $$y = \frac{A}{\sqrt{1 + 1}} = \frac{A}{\sqrt{2}} = \frac{1}{2}A\sqrt{2}$$

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 10:**
> 
> **Bagian 1: Elastisitas & Susunan Pegas**
> Tiga buah pegas identik masing-masing memiliki konstanta $k = 600\text{ N/m}$. Dua pegas mula-mula disusun secara paralel, kemudian rangkaian tersebut diseri dengan pegas ketiga. Rangkaian pegas gabungan tersebut digantungi beban bermassa $m = 2\text{ kg}$ ($g = 10\text{ m/s}^2$).
> 1. Hitung konstanta pegas pengganti total ($k_{\text{tot}}$) sistem tersebut!
> 2. Hitung pertambahan panjang total pegas akibat beban tersebut!
> 3. Hitung energi potensial elastis yang tersimpan di dalam susunan pegas!
>
> **Bagian 2: Kinematika & Dinamika Getaran Harmonik Sederhana**
> Sebuah partikel berosilasi harmonik sederhana memenuhi persamaan simpangan:
> $$y(t) = 0{,}10 \sin\left(10\pi t + \frac{\pi}{6}\right)$$
> dengan $y$ dalam meter dan $t$ dalam sekon.
> 4. Tentukan amplitudo ($A$), frekuensi sudut ($\omega$), frekuensi ($f$), dan periode ($T$) osilasi!
> 5. Tentukan simpangan, kecepatan, dan percepatan partikel saat $t = 0$ sekon!
> 6. Hitung kelajuan maksimum ($v_{\max}$) dan percepatan maksimum ($a_{\max}$) partikel!
> 7. Pada simpangan berapakah energi kinetik partikel bernilai $3$ kali energi potensialnya ($E_k = 3 E_p$)?

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Konstanta Total Pegas):**
  * Pegas 1 dan 2 paralel:
    $$k_p = k_1 + k_2 = 600 + 600 = 1200\text{ N/m}$$
  * Diparalelkan lalu diseri dengan pegas 3 ($k_3 = 600\text{ N/m}$):
    $$\frac{1}{k_{\text{tot}}} = \frac{1}{k_p} + \frac{1}{k_3} = \frac{1}{1200} + \frac{1}{600} = \frac{1 + 2}{1200} = \frac{3}{1200} \implies k_{\text{tot}} = \frac{1200}{3} = 400\text{ N/m}$$

* **Jawaban Bagian 2 (Pertambahan Panjang Total):**
  * Gaya berat beban: $F = mg = 2 \times 10 = 20\text{ N}$.
  * Pertambahan panjang total:
    $$\Delta x_{\text{tot}} = \frac{F}{k_{\text{tot}}} = \frac{20\text{ N}}{400\text{ N/m}} = 0{,}05\text{ m} = 5\text{ cm}$$

* **Jawaban Bagian 3 (Energi Potensial Elastis):**
  $$E_p = \frac{1}{2} k_{\text{tot}} (\Delta x_{\text{tot}})^2 = \frac{1}{2}(400)(0{,}05)^2 = 200 \times 0{,}0025 = 0{,}5\text{ Joule}$$

* **Jawaban Bagian 4 (Karakteristik GHS):**
  * Dari persamaan $y(t) = 0{,}10 \sin(10\pi t + \frac{\pi}{6})$:
    * Amplitudo: $A = 0{,}10\text{ m} = 10\text{ cm}$
    * Frekuensi sudut: $\omega = 10\pi\text{ rad/s}$
    * Frekuensi: $f = \frac{\omega}{2\pi} = \frac{10\pi}{2\pi} = 5\text{ Hz}$
    * Periode: $T = \frac{1}{f} = \frac{1}{5} = 0{,}2\text{ sekon}$

* **Jawaban Bagian 5 (Kondisi Awal Saat $t = 0$):**
  * Simpangan pada $t = 0$:
    $$y(0) = 0{,}10 \sin\left(\frac{\pi}{6}\right) = 0{,}10 \times 0{,}5 = 0{,}05\text{ m} = 5\text{ cm}$$
  * Kecepatan pada $t = 0$:
    $$v(t) = \omega A \cos\left(10\pi t + \frac{\pi}{6}\right) \implies v(0) = (10\pi)(0{,}10)\cos\left(30^\circ\right) = \pi \left(\frac{1}{2}\sqrt{3}\right) = \frac{\pi\sqrt{3}}{2}\text{ m/s} \approx 2{,}72\text{ m/s}$$
  * Percepatan pada $t = 0$:
    $$a(0) = -\omega^2 y(0) = -(10\pi)^2 (0{,}05) = -100\pi^2(0{,}05) = -5\pi^2\text{ m/s}^2 \approx -49{,}35\text{ m/s}^2$$

* **Jawaban Bagian 6 (Maksimum Kinematika):**
  * Kelajuan maksimum di titik setimbang:
    $$v_{\max} = \omega A = (10\pi)(0{,}10) = \pi\text{ m/s} \approx 3{,}14\text{ m/s}$$
  * Percepatan maksimum di titik balik amplitudo:
    $$a_{\max} = \omega^2 A = (10\pi)^2 (0{,}10) = 100\pi^2(0{,}10) = 10\pi^2\text{ m/s}^2 \approx 98{,}7\text{ m/s}^2$$

* **Jawaban Bagian 7 (Simpangan saat $E_k = 3 E_p$):**
  * $n = 3$:
    $$y = \frac{A}{\sqrt{n + 1}} = \frac{0{,}10}{\sqrt{3 + 1}} = \frac{0{,}10}{\sqrt{4}} = \frac{0{,}10}{2} = 0{,}05\text{ m} = 5\text{ cm} = \frac{1}{2}A$$
    *(Saat simpangannya tepat setengah amplitudo, energi kinetiknya setara $3$ kali energi potensialnya).*

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Percepatan Selalu Berlawanan dengan Simpangan:** Hubungan $a = -\omega^2 y$ adalah karakteristik pembeda mutlak Getaran Harmonik Sederhana. Saat benda menyimpang ke atas ($y > 0$), percepatannya mengarah ke bawah ($a < 0$).
> 2. **Ketergantungan Periode Pegas vs Bandul:**
>    * Periode pegas ($T = 2\pi\sqrt{m/k}$) bergantung pada **massa**, namun **tidak terpengaruh oleh gravitasi**.
>    * Periode bandul sederhana ($T = 2\pi\sqrt{L/g}$) bergantung pada **gravitasi**, namun **sama sekali tidak dipengaruhi oleh massa beban**.
> 3. **Syarat Harmonik Bandul Sederhana:** Ayunan bandul hanya mendekati gerak harmonik sederhana murni jika sudut simpangannya **sangat kecil** ($\theta < 10^\circ$), sehingga berlaku aproksimasi deret Taylor $\sin\theta \approx \theta$.
