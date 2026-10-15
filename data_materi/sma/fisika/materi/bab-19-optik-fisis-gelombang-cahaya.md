# Bab 19: Optik Fisis (Gelombang Cahaya)
**Kategori:** TKA Fisika | **Blok:** Blok 3: Gelombang dan Optik

## Bab 19: Optik Fisis (Gelombang Cahaya)

---

### A. Hakikat Gelombang Cahaya
Cahaya adalah gelombang elektromagnetik transversal yang merambat tanpa memerlukan medium perantara dengan kelajuan di ruang hampa sebesar $c = 3 \times 10^8\text{ m/s}$. Spektrum cahaya tampak berkisar antara panjang gelombang $\lambda \approx 400\text{ nm}$ (ungu) hingga $\lambda \approx 700\text{ nm}$ (merah) ($1\text{ nm} = 10^{-9}\text{ m} = 10\ \text{Å}$).

Cahaya menunjukkan gejala gelombang melalui empat fenomena optik fisis utama: **Interferensi**, **Difraksi**, **Polarisasi**, dan **Dispersi**.

---

### B. Interferensi Celah Ganda Thomas Young
Dua berkas cahaya yang berasal dari satu sumber dilewatkan pada dua celah sempit yang berjarak $d$ sehingga menjadi **dua sumber cahaya yang koheren** (memiliki frekuensi sama, amplitudo sebanding, dan beda fase konstan).

```text
               Celah Ganda (d)                 Layar (Jarak L)
                     ┌─                     ─────── Terang Pusat (m=0)
       Sinar ──────► │                      ─────── Gelap 1 (m=1)
                     └─                     ─────── Terang 1 (m=1)  (y)
                     ┌─                     
       Sinar ──────► │                      
                     └─
```

Beda lintasan berkas sinar dari kedua celah menuju sembarang titik di layar:
$$\Delta s = d \sin\theta \approx d \left(\frac{y}{L}\right) \quad (\text{karena sudut } \theta \text{ sangat kecil})$$
* $d$ = jarak pisah antar-celah ($\text{m}$)
* $L$ = jarak dari celah ke layar pengamat ($\text{m}$)
* $y$ = jarak suatu garis terang/gelap di layar dari terang pusat ($\text{m}$)
* $\lambda$ = panjang gelombang cahaya ($\text{m}$)

#### 1. Syarat Terjadinya Garis Terang (Interferensi Konstruktif / Maksimum):
Beda lintasan merupakan kelipatan bulat dari panjang gelombang ($\Delta s = m \lambda$):
$$d \sin\theta = m \cdot \lambda \iff \frac{d \cdot y_m}{L} = m \cdot \lambda \quad (m = 0, 1, 2, 3, \dots)$$
* $m = 0$ : Garis Terang Pusat
* $m = 1$ : Garis Terang ke-1
* $m = 2$ : Garis Terang ke-2

#### 2. Syarat Terjadinya Garis Gelap (Interferensi Destruktif / Minimum):
Beda lintasan merupakan kelipatan ganjil dari setengah panjang gelombang:
$$d \sin\theta = \left(m - \frac{1}{2}\right)\lambda \iff \frac{d \cdot y_m}{L} = \left(m - \frac{1}{2}\right)\lambda \quad (m = 1, 2, 3, \dots)$$
* $m = 1$ : Garis Gelap ke-1
* $m = 2$ : Garis Gelap ke-2

#### 3. Jarak Antara Dua Garis Terang Berurutan atau Dua Garis Gelap Berurutan:
$$\Delta y = y_{m+1} - y_m = \frac{\lambda \cdot L}{d}$$
*(Jarak dari garis terang ke garis gelap terdekat di sampingnya adalah $\frac{1}{2}\Delta y = \frac{\lambda L}{2d}$)*.

---

### C. Interferensi pada Lapisan Tipis (Selaput Sabun / Lapisan Minyak)
Warna-warni pelangi pada gelembung sabun atau genangan minyak di aspal disebabkan oleh interferensi berkas cahaya yang dipantulkan dari permukaan atas dan permukaan bawah selaput tipis berketebalan $t$ dan indeks bias $n$:
* **Pembalikan Fase:** Sinar yang memantul pada medium yang lebih rapat mengalami pembalikan fase $\frac{1}{2}\lambda$.
* **Kondisi Terjadinya Garis Terang (Konstruktif):**
  $$2 n t \cos r = \left(m - \frac{1}{2}\right)\lambda \quad (m = 1, 2, 3, \dots)$$
* **Kondisi Terjadinya Garis Gelap (Destruktif):**
  $$2 n t \cos r = m \cdot \lambda \quad (m = 0, 1, 2, 3, \dots)$$
  *(Jika sinar jatuh tegak lurus, sudut bias $r \approx 0^\circ \implies \cos r \approx 1$)*.

---

### D. Difraksi Cahaya

#### 1. Difraksi Celah Tunggal (Fraunhofer)
Pelenturan cahaya saat melewati sebuah celah tunggal sempit berlebar $d$:

> [!WARNING]
> **Jebakan Soal Difraksi Celah Tunggal vs Celah Ganda:**
> Rumus difraksi celah tunggal memiliki **pola terbalik** dibandingkan celah ganda Young!
> * **Garis Gelap (Minimum Utama):**
>   $$d \sin\theta = m \cdot \lambda \iff \frac{d \cdot y_m}{L} = m \cdot \lambda \quad (m = 1, 2, 3, \dots)$$
> * **Garis Terang (Maksimum):**
>   $$d \sin\theta = \left(m + \frac{1}{2}\right)\lambda \iff \frac{d \cdot y_m}{L} = \left(m + \frac{1}{2}\right)\lambda \quad (m = 1, 2, 3, \dots)$$
> * **Lebar Pola Terang Pusat:** Jarak antara garis gelap pertama di kiri dan kanan terang pusat ($2 y_1$):
>   $$\Delta y_{\text{pusat}} = 2 y_1 = \frac{2 \lambda L}{d}$$
>   *(Pita terang pusat memiliki lebar dua kali lipat dibanding pita terang lainnya).*

---

#### 2. Difraksi Kisi (Banyak Celah)
Kisi difraksi terdiri atas ribuan celah sempit sejajar yang sangat rapat. Jika kisi memiliki $N$ garis/goresan per satuan panjang (misal garis/cm atau garis/m), maka jarak antar-celah kisi ($d$) adalah:
$$d = \frac{1}{N}$$

* **Garis Terang Difraksi Kisi:**
  $$d \sin\theta = m \cdot \lambda \iff \left(\frac{1}{N}\right)\sin\theta = m \cdot \lambda \quad (m = 0, 1, 2, 3, \dots)$$
* **Orde Maksimum ($m_{\max}$) yang Dapat Terlihat di Layar:**
  Karena nilai sinus maksimum adalah $\sin\theta \le 1$:
  $$m_{\max} \le \frac{d}{\lambda} \implies m_{\max} = \left\lfloor \frac{d}{\lambda} \right\rfloor$$

---

#### 3. Daya Urai Lensa & Kriteria Rayleigh
Batas kemampuan suatu instrumen optik (seperti teleskop, mikroskop, atau mata manusia dengan bukaan lensa/pupil berdiameter $D$) untuk memisahkan bayangan dari dua titik sumber cahaya yang saling berdekatan:

* **Sudut Pemisah Minimum (Sudut Resolusi Rayleigh):**
  $$\theta_m = 1{,}22 \frac{\lambda}{D} \quad (\text{radian})$$
* **Daya Urai Linier ($d_m$) pada Jarak Pengamatan $L$:**
  $$d_m = L \cdot \theta_m = 1{,}22 \frac{\lambda \cdot L}{D}$$
  * $d_m$ = jarak pisah minimum antara dua objek agar masih dapat dibedakan sebagai dua titik terpisah ($\text{m}$)
  * $D$ = diameter bukaan lensa atau pupil mata ($\text{m}$)

---

### E. Polarisasi Cahaya
Polarisasi adalah proses penyerapan atau pembatasan arah getar gelombang transversal sehingga cahaya hanya memiliki satu arah getar bidang tertentu. Gelombang longitudinal (seperti bunyi) **tidak dapat mengalami polarisasi**.

#### 1. Polarisasi Akibat Penyerapan Selektif (Polaroid & Hukum Malus):
Seberkas cahaya tak terpolarisasi berintensitas $I_0$ dilewatkan pada polarisator pertama, lalu melewati analisator kedua yang sumbu transmisinya membentuk sudut $\theta$:
* Intensitas setelah lolos polarisator 1:
  $$I_1 = \frac{1}{2} I_0$$
* Intensitas setelah lolos analisator 2 (Hukum Malus):
  $$I_2 = I_1 \cos^2\theta = \frac{1}{2} I_0 \cos^2\theta$$

#### 2. Polarisasi Akibat Pemantulan dan Pembiasan (Hukum Brewster):
Cahaya pantul terpolarisasi linier sempurna saat sinar pantul saling **tegak lurus** dengan sinar bias ($i_p + r = 90^\circ$):
$$\tan i_p = \frac{n_2}{n_1}$$
* $i_p$ = sudut polarisasi / sudut Brewster
* $n_1$ = indeks bias medium tempat sinar datang
* $n_2$ = indeks bias medium tempat sinar dibiaskan

---

### F. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 19:**
> Selesaikan studi kasus optik fisis berikut:
>
> 1. **(Interferensi Celah Ganda):** Cahaya monokromatik berpanjang gelombang $\lambda = 500\text{ nm} = 5 \times 10^{-7}\text{ m}$ dijatuhkan tegak lurus pada celah ganda yang terpisah sejauh $d = 0{,}2\text{ mm} = 2 \times 10^{-4}\text{ m}$. Layar diletakkan pada jarak $L = 1\text{ meter}$ di belakang celah.
>    * Hitung jarak garis terang ke-2 dari terang pusat di layar!
>    * Hitung jarak garis gelap ke-3 dari terang pusat di layar!
>    * Hitung jarak antara dua garis terang yang berdekatan ($\Delta y$)!
> 2. **(Difraksi Kisi):** Seberkas cahaya monokromatik dilewatkan pada sebuah kisi difraksi yang memiliki $5000\text{ goresan/cm}$. Pola terang orde kedua ($m = 2$) terdifraksi membentuk sudut deviasi $\theta = 30^\circ$.
>    * Tentukan konstanta jarak antar-celah kisi ($d$)!
>    * Hitung panjang gelombang cahaya yang digunakan (dalam meter dan Angstrom)!
>    * Tentukan jumlah orde maksimum ($m_{\max}$) yang mungkin teramati di layar!
> 3. **(Kriteria Rayleigh & Daya Urai Mata):** Pupil mata seseorang memiliki diameter $D = 3\text{ mm} = 3 \times 10^{-3}\text{ m}$. Orang tersebut mengamati dua buah lampu sorot mobil yang terpisah sejauh $d_m = 1{,}22\text{ meter}$ pada malam hari ($\lambda = 600\text{ nm} = 6 \times 10^{-7}\text{ m}$). Berapakah jarak maksimum mobil dari orang tersebut agar kedua lampu sorot masih dapat dibedakan sebagai dua sumber cahaya terpisah?
> 4. **(Polarisasi Hukum Malus):** Cahaya tak terpolarisasi dengan intensitas $I_0 = 80\text{ W/m}^2$ dilewatkan melalui dua keping filter polaroid. Sumbu polarisasi keping kedua diputar membentuk sudut $60^\circ$ terhadap sumbu keping pertama. Tentukan intensitas cahaya akhir yang keluar dari keping kedua!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Celah Ganda Young):**
  * $\lambda = 5 \times 10^{-7}\text{ m}$, $d = 2 \times 10^{-4}\text{ m}$, $L = 1\text{ m}$.
  * Jarak garis terang ke-2 ($m = 2$):
    $$y_2 = \frac{m \lambda L}{d} = \frac{2 (5 \times 10^{-7}\text{ m})(1\text{ m})}{2 \times 10^{-4}\text{ m}} = \frac{10^{-6}}{2 \times 10^{-4}} = 5 \times 10^{-3}\text{ m} = 5\text{ mm}$$
  * Jarak garis gelap ke-3 ($m = 3$):
    $$y_{g3} = \frac{(m - \frac{1}{2})\lambda L}{d} = \frac{(3 - 0{,}5)(5 \times 10^{-7})(1)}{2 \times 10^{-4}} = \frac{2{,}5 \times 5 \times 10^{-7}}{2 \times 10^{-4}} = 6{,}25 \times 10^{-3}\text{ m} = 6{,}25\text{ mm}$$
  * Jarak antara dua terang berurutan:
    $$\Delta y = \frac{\lambda L}{d} = \frac{(5 \times 10^{-7})(1)}{2 \times 10^{-4}} = 2{,}5 \times 10^{-3}\text{ m} = 2{,}5\text{ mm}$$

* **Jawaban Bagian 2 (Difraksi Kisi):**
  * $N = 5000\text{ garis/cm} = 5 \times 10^5\text{ garis/m}$.
  * Konstanta jarak kisi:
    $$d = \frac{1}{N} = \frac{1}{5 \times 10^5\text{ m}^{-1}} = 2 \times 10^{-6}\text{ m}$$
  * Panjang gelombang ($\theta = 30^\circ \implies \sin 30^\circ = 0{,}5$, $m = 2$):
    $$d \sin\theta = m \lambda \implies (2 \times 10^{-6}\text{ m})(0{,}5) = 2 \lambda \implies 10^{-6} = 2 \lambda$$
    $$\lambda = 0{,}5 \times 10^{-6}\text{ m} = 500\text{ nm} = 5000\text{ \AA}$$
  * Orde maksimum ($\sin\theta \le 1$):
    $$m_{\max} = \frac{d}{\lambda} = \frac{2 \times 10^{-6}}{0{,}5 \times 10^{-6}} = 4$$
    *Orde maksimum yang terlihat di layar adalah $m = 4$.*

* **Jawaban Bagian 3 (Kriteria Rayleigh):**
  * $d_m = 1{,}22\text{ m}$, $D = 3 \times 10^{-3}\text{ m}$, $\lambda = 6 \times 10^{-7}\text{ m}$.
  * Rumus daya urai linier:
    $$d_m = 1{,}22 \frac{\lambda L}{D} \implies 1{,}22 = 1{,}22 \times \frac{(6 \times 10^{-7}) L}{3 \times 10^{-3}}$$
    $$1 = \frac{6 \times 10^{-7} L}{3 \times 10^{-3}} = 2 \times 10^{-4} L \implies L = \frac{1}{2 \times 10^{-4}} = 5000\text{ meter} = 5\text{ km}$$
    *Jarak maksimum mobil adalah $5\text{ kilometer}$.*

* **Jawaban Bagian 4 (Polarisasi Hukum Malus):**
  * $I_0 = 80\text{ W/m}^2$, $\theta = 60^\circ$ ($\cos 60^\circ = 0{,}5$).
  * Intensitas keluar polarisator 1:
    $$I_1 = \frac{1}{2} I_0 = \frac{1}{2}(80) = 40\text{ W/m}^2$$
  * Intensitas keluar analisator 2:
    $$I_2 = I_1 \cos^2(60^\circ) = 40 \times (0{,}5)^2 = 40 \times 0{,}25 = 10\text{ W/m}^2$$

---

### G. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Pembedaan Rumus Celah Tunggal vs Kisi / Celah Ganda:**
>    * Pada Celah Ganda & Kisi: $d\sin\theta = m\lambda$ adalah garis **TERANG**.
>    * Pada Celah Tunggal: $d\sin\theta = m\lambda$ adalah garis **GELAP**. Jangan sampai tertukar!
> 2. **Hanya Gelombang Transversal yang Dapat Terpolarisasi:** Gelombang longitudinal (seperti bunyi) tidak dapat mengalami polarisasi karena arah getarnya sejajar dengan arah rambatnya.
> 3. **Konversi Satuan Nanometer dan Angstrom:**
>    * $1\text{ nm} = 10^{-9}\text{ m}$
>    * $1\text{ \AA} = 10^{-10}\text{ m} = 0{,}1\text{ nm}$
