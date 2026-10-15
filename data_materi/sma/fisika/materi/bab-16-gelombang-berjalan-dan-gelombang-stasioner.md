# Bab 16: Gelombang Berjalan dan Gelombang Stasioner
**Kategori:** TKA Fisika | **Blok:** Blok 3: Gelombang dan Optik

## Bab 16: Gelombang Berjalan dan Gelombang Stasioner

---

### A. Hakikat Gelombang Mekanik dan Besaran Dasar
Gelombang adalah getaran yang merambat melalui suatu medium atau ruang hampa dengan memindahkan energi dan momentum tanpa memindahkan massa medium perantaranya secara permanen.

#### 1. Klasifikasi Gelombang:
* **Berdasarkan Kebutuhan Medium:**
  * **Gelombang Mekanik:** Memerlukan medium fisik untuk merambat (contoh: gelombang tali, bunyi, gelombang air, gelombang seismik).
  * **Gelombang Elektromagnetik:** Dapat merambat tanpa medium / melalui ruang hampa (contoh: cahaya, gelombang radio, sinar-X).
* **Berdasarkan Arah Getar terhadap Arah Rambat:**
  * **Gelombang Transversal:** Arah getaran tegak lurus dengan arah rambatan gelombang (tersusun atas bukit dan lembah; contoh: gelombang tali, cahaya).
  * **Gelombang Longitudinal:** Arah getaran sejajar dengan arah rambatan gelombang (tersusun atas rapatan dan renggangan; contoh: gelombang bunyi, pegas slinki).
* **Berdasarkan Amplitudo:**
  * **Gelombang Berjalan:** Memiliki amplitudo yang tetap sama di setiap posisi medium.
  * **Gelombang Stasioner (Gelombang Berdiri):** Memiliki amplitudo yang berubah-ubah bergantung pada posisi (memiliki simpul dan perut).

#### 2. Besaran Fundamental Gelombang:
* **Periode ($T$):** Waktu yang dibutuhkan untuk membentuk satu gelombang penuh ($T = \frac{t}{n}$ sekon).
* **Frekuensi ($f$):** Jumlah gelombang yang terbentuk tiap satu sekon ($f = \frac{n}{t}\text{ Hz}$). Hubungan: $f = \frac{1}{T}$.
* **Panjang Gelombang ($\lambda$):** Jarak yang ditempuh gelombang dalam satu periode (jarak antara dua bukit berurutan atau jarak satu rapatan + satu renggangan).
* **Cepat Rambat Gelombang ($v$):**
  $$v = \frac{\lambda}{T} = \lambda \cdot f = \frac{\omega}{k}$$
* **Frekuensi Sudut ($\omega$):** $\omega = 2\pi f = \frac{2\pi}{T}$ ($\text{rad/s}$).
* **Bilangan Gelombang ($k$):** $k = \frac{2\pi}{\lambda}$ ($\text{rad/m}$).

---

### B. Persamaan Gelombang Berjalan Sinusoidal

#### 1. Bentuk Umum Persamaan Simpangan:
$$y(x, t) = \pm A \sin(\omega t \mp kx + \theta_0) = \pm A \sin 2\pi\left(\frac{t}{T} \mp \frac{x}{\lambda}\right)$$
* $y$ = simpangan titik pada posisi $x$ saat waktu $t$ ($\text{m}$)
* $A$ = amplitudo gelombang / simpangan maksimum ($\text{m}$)
* $x$ = jarak titik dari sumber getar ($\text{m}$)
* $t$ = waktu tempuh getaran ($\text{s}$)

> [!NOTE]
> **Aturan Baku Penentuan Tanda ($\pm$ dan $\mp$):**
> 1. **Tanda Amplitudo ($\pm A$):**
>    * Bertanda **positif ($+A$)** jika getaran awal di titik asal mengarah **ke atas**.
>    * Bertanda **negatif ($-A$)** jika getaran awal di titik asal mengarah **ke bawah**.
> 2. **Tanda Rambatan ($\mp kx$):**
>    * Bertanda **negatif ($-kx$)** jika gelombang merambat **ke kanan** (sumbu-$x$ positif).
>    * Bertanda **positif ($+kx$)** jika gelombang merambat **ke kiri** (sumbu-$x$ negatif).

#### 2. Kecepatan dan Percepatan Partikel Medium:
* **Kecepatan Getar Partikel ($v_y$):**
  $$v_y(x, t) = \frac{\partial y}{\partial t} = \omega A \cos(\omega t \mp kx)$$
  * Kecepatan maksimum partikel medium: $v_{y,\max} = \omega \cdot A$.
* **Percepatan Getar Partikel ($a_y$):**
  $$a_y(x, t) = \frac{\partial^2 y}{\partial t^2} = -\omega^2 A \sin(\omega t \mp kx) = -\omega^2 y$$
  * Percepatan maksimum partikel medium: $a_{y,\max} = \omega^2 \cdot A$.

#### 3. Sudut Fase, Fase, dan Beda Fase:
* **Sudut Fase ($\theta$):** $\theta = \omega t \mp kx = 2\pi \phi$ (radian).
* **Fase Gelombang ($\phi$):**
  $$\phi = \frac{t}{T} \mp \frac{x}{\lambda}$$
* **Beda Fase ($\Delta \phi$) Dua Titik Terpisah Jarak $\Delta x$ pada Saat Bersamaan:**
  $$\Delta \phi = \frac{\Delta x}{\lambda} = \frac{x_2 - x_1}{\lambda}$$
  * **Dua titik Sefase:** $\Delta \phi = 0, 1, 2, 3, \dots \iff \Delta x = n \lambda$.
  * **Dua titik Berlawanan Fase:** $\Delta \phi = \frac{1}{2}, \frac{3}{2}, \frac{5}{2}, \dots \iff \Delta x = (2n + 1)\frac{\lambda}{2}$.

---

### C. Cepat Rambat Gelombang Transversal pada Dawai (Hukum Melde)
Melde menyelidiki cepat rambat gelombang transversal pada seutas dawai/kawat yang ditegangkan:
$$v = \sqrt{\frac{F}{\mu}} = \sqrt{\frac{F \cdot L}{m}} = \sqrt{\frac{F}{\rho \cdot A}}$$
* $v$ = cepat rambat gelombang pada dawai ($\text{m/s}$)
* $F$ = gaya tegangan dawai ($\text{N}$)
* $\mu = \frac{m}{L}$ = massa per satuan panjang dawai ($\text{kg/m}$)
* $m$ = massa total dawai ($\text{kg}$)
* $L$ = panjang total dawai ($\text{m}$)
* $\rho$ = massa jenis bahan kawat dawai ($\text{kg/m}^3$)
* $A$ = luas penampang kawat dawai ($\text{m}^2$)

---

### D. Gelombang Stasioner (Gelombang Berdiri / Diam)
Gelombang stasioner terbentuk dari hasil interferensi (superposisi) dua gelombang berjalan yang memiliki frekuensi dan amplitudo sama besar, tetapi merambat dalam arah yang berlawanan.

```text
  Simpul (S) ───► Amplitudo Nol (Titik Diam)
  Perut (P)  ───► Amplitudo Maksimum (2A)

     P_1         P_2         P_3
      ▲           ▲           ▲
    /   \       /   \       /   \
  S_1    S_2   S_3   S_4   S_5   S_6  (Titik Pantul x = 0)
    \   /       \   /       \   /
      ▼           ▼           ▼
```

#### 1. Gelombang Stasioner Ujung Terikat (Ujung Tetap):
Ujung pantul terikat kaku sehingga gelombang mengalami pembalikan fase $180^\circ$ ($\Delta \phi = \frac{1}{2}$). Titik pantul ($x = 0$) menjadi **Simpul**.

* **Persamaan Simpangan Gelombang:**
  $$y(x, t) = 2A \sin(kx) \cos(\omega t)$$
* **Amplitudo Stasioner ($A_s$):**
  $$A_s = 2A |\sin(kx)|$$
* **Letak Simpul ke-$(n+1)$ dari Ujung Pantul ($x = 0$):**
  $$x_s = n \left(\frac{\lambda}{2}\right) = 0, \frac{1}{2}\lambda, \lambda, \frac{3}{2}\lambda, \dots \quad (n = 0, 1, 2, \dots)$$
* **Letak Perut ke-$(n+1)$ dari Ujung Pantul ($x = 0$):**
  $$x_p = (2n + 1)\left(\frac{\lambda}{4}\right) = \frac{1}{4}\lambda, \frac{3}{4}\lambda, \frac{5}{4}\lambda, \dots \quad (n = 0, 1, 2, \dots)$$

---

#### 2. Gelombang Stasioner Ujung Bebas:
Ujung pantul bebas bergerak sehingga tidak mengalami pembalikan fase ($\Delta \phi = 0$). Titik pantul ($x = 0$) menjadi **Perut**.

* **Persamaan Simpangan Gelombang:**
  $$y(x, t) = 2A \cos(kx) \sin(\omega t)$$
* **Amplitudo Stasioner ($A_s$):**
  $$A_s = 2A |\cos(kx)|$$
* **Letak Perut ke-$(n+1)$ dari Ujung Pantul ($x = 0$):**
  $$x_p = n \left(\frac{\lambda}{2}\right) = 0, \frac{1}{2}\lambda, \lambda, \frac{3}{2}\lambda, \dots \quad (n = 0, 1, 2, \dots)$$
* **Letak Simpul ke-$(n+1)$ dari Ujung Pantul ($x = 0$):**
  $$x_s = (2n + 1)\left(\frac{\lambda}{4}\right) = \frac{1}{4}\lambda, \frac{3}{4}\lambda, \frac{5}{4}\lambda, \dots \quad (n = 0, 1, 2, \dots)$$

#### Teorema Jarak Simpul dan Perut:
1. Jarak antara **simpul dan perut yang berdekatan** selalu tepat:
   $$\Delta x = \frac{1}{4}\lambda$$
2. Jarak antara **dua simpul berturutan** atau **dua perut berturutan** selalu tepat:
   $$\Delta x = \frac{1}{2}\lambda$$

---

### E. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 16:**
> 
> **Bagian 1: Analisis Gelombang Berjalan**
> Persamaan simpangan sebuah gelombang transversal yang merambat pada seutas tali dinyatakan oleh:
> $$y(x, t) = 0{,}06 \sin(40\pi t - 2\pi x)$$
> dengan $x$ dan $y$ dalam meter, serta $t$ dalam sekon.
> 1. Tentukan arah rambat gelombang, amplitudo ($A$), frekuensi sudut ($\omega$), bilangan gelombang ($k$), frekuensi ($f$), panjang gelombang ($\lambda$), dan cepat rambat gelombang ($v$)!
> 2. Tentukan kelajuan getar maksimum ($v_{y,\max}$) dan percepatan getar maksimum ($a_{y,\max}$) partikel tali!
> 3. Tentukan beda fase ($\Delta \phi$) antara dua titik pada tali yang terpisah sejauh $\Delta x = 25\text{ cm}$!
>
> **Bagian 2: Hukum Melde & Gelombang Stasioner**
> 4. Seutas kawat baja berpanjang $L = 2\text{ meter}$ dan bermassa $m = 8\text{ gram}$ ditegangkan dengan beban penggantung $F = 160\text{ N}$. Tentukan cepat rambat gelombang transversal pada kawat baja tersebut!
> 5. Ujung kawat tersebut diikatkan kuat pada dinding (ujung terikat) sehingga terbentuk gelombang stasioner dengan panjang gelombang $\lambda = 40\text{ cm}$. Tentukan:
>    * Jarak simpul ke-3 dari dinding pantul!
>    * Jarak perut ke-4 dari dinding pantul!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Parameter Gelombang Berjalan):**
  * Persamaan: $y(x, t) = 0{,}06 \sin(40\pi t - 2\pi x)$.
  * Tanda $-2\pi x \implies$ Gelombang merambat ke **arah sumbu-$x$ positif (ke kanan)**.
  * Amplitudo: $A = 0{,}06\text{ m} = 6\text{ cm}$.
  * Frekuensi sudut: $\omega = 40\pi\text{ rad/s} \implies f = \frac{\omega}{2\pi} = \frac{40\pi}{2\pi} = 20\text{ Hz}$.
  * Bilangan gelombang: $k = 2\pi\text{ rad/m} \implies \lambda = \frac{2\pi}{k} = \frac{2\pi}{2\pi} = 1\text{ meter}$.
  * Cepat rambat gelombang:
    $$v = \lambda \cdot f = (1\text{ m})(20\text{ Hz}) = 20\text{ m/s} \quad \left(\text{atau } v = \frac{\omega}{k} = \frac{40\pi}{2\pi} = 20\text{ m/s}\right)$$

* **Jawaban Bagian 2 (Kinematika Partikel Gelombang):**
  * Kelajuan getar maksimum partikel medium:
    $$v_{y,\max} = \omega A = (40\pi\text{ rad/s})(0{,}06\text{ m}) = 2{,}4\pi\text{ m/s} \approx 7{,}54\text{ m/s}$$
  * Percepatan getar maksimum partikel medium:
    $$a_{y,\max} = \omega^2 A = (40\pi)^2 (0{,}06) = 1600\pi^2(0{,}06) = 96\pi^2\text{ m/s}^2 \approx 947{,}5\text{ m/s}^2$$

* **Jawaban Bagian 3 (Beda Fase Dua Titik):**
  * $\Delta x = 25\text{ cm} = 0{,}25\text{ m}$, dengan $\lambda = 1\text{ m}$:
    $$\Delta \phi = \frac{\Delta x}{\lambda} = \frac{0{,}25\text{ m}}{1\text{ m}} = 0{,}25 = \frac{1}{4}$$
    *(Beda sudut fase kedua titik adalah $\Delta\theta = 2\pi \Delta\phi = 2\pi(\frac{1}{4}) = \frac{\pi}{2}\text{ rad} = 90^\circ$).*

* **Jawaban Bagian 4 (Hukum Melde):**
  * $L = 2\text{ m}$, $m = 8\text{ g} = 8 \times 10^{-3}\text{ kg}$, $F = 160\text{ N}$.
  * Massa persatuan panjang:
    $$\mu = \frac{m}{L} = \frac{8 \times 10^{-3}\text{ kg}}{2\text{ m}} = 4 \times 10^{-3}\text{ kg/m}$$
  * Cepat rambat:
    $$v = \sqrt{\frac{F}{\mu}} = \sqrt{\frac{160}{4 \times 10^{-3}}} = \sqrt{40.000} = 200\text{ m/s}$$

* **Jawaban Bagian 5 (Gelombang Stasioner Ujung Terikat):**
  * Panjang gelombang $\lambda = 40\text{ cm}$. Ujung terikat $\implies$ titik pantul adalah Simpul 1 ($n = 0$).
  * **Simpul ke-3** ($n = 2$):
    $$x_{s3} = n \left(\frac{\lambda}{2}\right) = 2 \left(\frac{40\text{ cm}}{2}\right) = 2 \times 20\text{ cm} = 40\text{ cm}$$
  * **Perut ke-4** ($n = 3$):
    $$x_{p4} = (2n + 1)\left(\frac{\lambda}{4}\right) = (2(3) + 1)\left(\frac{40\text{ cm}}{4}\right) = (7)(10\text{ cm}) = 70\text{ cm}$$

---

### F. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Cepat Rambat Gelombang vs Kelajuan Getar Partikel:**
>    * $v = \lambda f$ adalah kelajuan energi merambat **sepanjang sumbu-$x$** (konstan).
>    * $v_y = \frac{\partial y}{\partial t}$ adalah kelajuan partikel medium naik-turun **sepanjang sumbu-$y$** (berubah secara harmonik sinusoidal). Jangan tertukar!
> 2. **Posisi $x$ pada Gelombang Stasioner:** Posisi simpul dan perut selalu dihitung **dari titik pantul ($x = 0$)**, bukan dari sumber getar. Jika soal menanyakan jarak dari sumber getar, hitung $L - x$.
> 3. **Tanda Arah Rambatan:** Ingat formula $\sin(\omega t - kx)$ merambat ke **kanan**, sedangkan $\sin(\omega t + kx)$ merambat ke **kiri**.
