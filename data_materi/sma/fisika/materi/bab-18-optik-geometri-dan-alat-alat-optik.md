# Bab 18: Optik Geometri dan Alat-Alat Optik
**Kategori:** TKA Fisika | **Blok:** Blok 3: Gelombang dan Optik

## Bab 18: Optik Geometri dan Alat-Alat Optik

---

### A. Pemantulan Cahaya pada Cermin Lengkung

#### 1. Hukum Pemantulan Cahaya (Snellius):
* Sinar datang, garis normal, dan sinar pantul terletak pada satu bidang datar.
* Sudut datang ($i$) sama dengan sudut pantul ($r$): $i = r$.

#### 2. Cermin Cekung (Konvergen) dan Cermin Cembung (Divergen):
* Jari-jari kelengkungan $R$ dan titik fokus $f$:
  $$f = \frac{R}{2}$$
* **Persamaan Gauss Cermin Lengkung:**
  $$\frac{1}{f} = \frac{1}{s} + \frac{1}{s'} \iff f = \frac{s \cdot s'}{s + s'}$$
* **Perbesaran Linier Bayangan ($M$):**
  $$M = \left|\frac{s'}{s}\right| = \left|\frac{h'}{h}\right| = \left|\frac{f}{s - f}\right|$$

#### Konvensi Tanda Standar Optik:
* **Fokus ($f$):** Bertanda **positif ($+$)** untuk **cermin cekung**; bertanda **negatif ($-$)** untuk **cermin cembung**.
* **Jarak Benda ($s$):** Bertanda positif ($+$) untuk benda nyata di depan cermin.
* **Jarak Bayangan ($s'$):**
  * Bertanda **positif ($+$)** jika bayangan **nyata dan terbalik** (berada di depan cermin).
  * Bertanda **negatif ($-$)** jika bayangan **maya dan tegak** (berada di belakang cermin).
* **Sifat Bayangan Cermin Cembung:** Selalu **maya, tegak, dan diperkecil** di mana pun letak bendanya di depan cermin.

---

### B. Pembiasan Cahaya dan Lensa Tipis

#### 1. Hukum Pembiasan Cahaya (Hukum Snellius):
Ketika cahaya merambat melintasi batas dua medium dengan kerapatan optik berbeda:
$$n_1 \sin i = n_2 \sin r \iff \frac{\sin i}{\sin r} = \frac{n_2}{n_1} = \frac{v_1}{v_2} = \frac{\lambda_1}{\lambda_2}$$
* $n_1, n_2$ = indeks bias mutlak medium 1 dan medium 2 ($n = c / v \ge 1$)
* $i$ = sudut datang terhadap garis normal
* $r$ = sudut bias terhadap garis normal
* **Kaidah:** Dari medium renggang ke rapat $\implies$ sinar dibelokkan **mendekati garis normal** ($r < i$). Dari medium rapat ke renggang $\implies$ sinar dibelokkan **menjauhi garis normal** ($r > i$).

#### 2. Pemantulan Internal Total (*Total Internal Reflection* / TIR) dan Sudut Kritis ($\theta_k$):
Terjadi jika cahaya merambat dari **medium lebih rapat ($n_1$) menuju medium kurang rapat ($n_2$)** dengan sudut datang melebihi sudut kritis ($i > \theta_k$):
$$\sin\theta_k = \frac{n_2}{n_1} \quad (n_1 > n_2)$$
*Aplikasi:* Serat optik (*fiber optics*), berlian berkilau, fatamorgana di aspal panas.

#### 3. Rumus Pembuat Lensa (*Lensmaker's Equation*):
Kekuatan lensa ($P$) di dalam medium dengan indeks bias $n_m$:
$$P = \frac{1}{f} = \left(\frac{n_L}{n_m} - 1\right)\left(\frac{1}{R_1} + \frac{1}{R_2}\right)$$
* $P$ = kuat lensa (dioptri / $\text{D}$, dengan $f$ dalam meter: $P = \frac{100}{f(\text{cm})}$)
* $R_1, R_2$ = jari-jari kelengkungan permukaan 1 dan 2 (positif jika cembung, negatif jika cekung, $\infty$ jika bidang datar)
* **Gabungan Lensa Kontak:**
  $$P_{\text{gabungan}} = P_1 + P_2 \iff \frac{1}{f_{\text{gab}}} = \frac{1}{f_1} + \frac{1}{f_2}$$

---

### C. Alat-Alat Optik

#### 1. Mata Manusia dan Cacat Mata (Akomodasi)
* **Mata Normal (Emetrop):** Titik dekat (*Punctum Proximum*) $PP = s_n = 25\text{ cm}$; titik jauh (*Punctum Remotum*) $PR = \infty$.
* **Rabun Jauh (Miopi):**
  Lensa mata terlalu cembung sehingga bayangan benda jauh jatuh **di depan retina** ($PR < \infty$).  
  Ditolong dengan kacamata **lensa cekung ($P < 0$)**:
  $$P = -\frac{100}{PR(\text{cm})} = -\frac{1}{PR(\text{m})}$$
* **Rabun Dekat (Hipermetropi):**
  Lensa mata terlalu pipih sehingga bayangan benda dekat jatuh **di belakang retina** ($PP > 25\text{ cm}$).  
  Ditolong dengan kacamata **lensa cembung ($P > 0$)**:
  $$P = \frac{100}{s_n} - \frac{100}{PP(\text{cm})} = 4 - \frac{100}{PP(\text{cm})} \quad (\text{untuk jarak baca normal } s_n = 25\text{ cm})$$
* **Mata Tua (Presbiopi):** Berkurangnya daya akomodasi karena usia lanjut, ditolong kacamata lensa rangkap (bifokal: cekung dan cembung).

---

#### 2. Kaca Pembesar (Lup / Kaca Pembesar)
Lensa cembung tunggal ($f > 0$) untuk melihat benda-benda kecil dengan meletakkannya di antara lensa dan titik fokus ($s \le f$) agar terbentuk bayangan maya, tegak, diperbesar.
* **Mata Berakomodasi Maksimum (Bayangan di titik dekat $s' = -s_n$):**
  $$M = \frac{s_n}{f} + 1$$
* **Mata Tidak Berakomodasi / Rileks (Bayangan di tak terhingga $s' = -\infty \implies s = f$):**
  $$M = \frac{s_n}{f}$$

---

#### 3. Mikroskop
Terdiri atas dua lensa cembung: **Lensa Objektif** ($f_{\text{ob}}$ sangat pendek, dekat objek) dan **Lensa Okuler** ($f_{\text{ok}} > f_{\text{ob}}$, dekat mata pengamat, berfungsi sebagai lup). Benda diletakkan pada rentang $f_{\text{ob}} < s_{\text{ob}} < 2f_{\text{ob}}$.

```text
  Benda ──► [Lensa Objektif] ──► Bayangan Nyata (s'_ob) ──► [Lensa Okuler] ──► Mata
```

* **Perbesaran Lensa Objektif (Nyata, Terbalik, Diperbesar):**
  $$M_{\text{ob}} = \left|\frac{s'_{\text{ob}}}{s_{\text{ob}}}\right| = \left|\frac{f_{\text{ob}}}{s_{\text{ob}} - f_{\text{ob}}}\right|$$
* **Perbesaran Total Mikroskop ($M_{\text{tot}} = M_{\text{ob}} \times M_{\text{ok}}$):**
  * **Mata Berakomodasi Maksimum:**
    $$M_{\text{tot}} = M_{\text{ob}} \times \left(\frac{s_n}{f_{\text{ok}}} + 1\right)$$
  * **Mata Tidak Berakomodasi:**
    $$M_{\text{tot}} = M_{\text{ob}} \times \left(\frac{s_n}{f_{\text{ok}}}\right)$$
* **Panjang Tabung / Tubus Mikroskop ($d$):**
  * Mata berakomodasi maksimum: $d = s'_{\text{ob}} + s_{\text{ok}}$
  * Mata tidak berakomodasi: $d = s'_{\text{ob}} + f_{\text{ok}}$

---

#### 4. Teropong Bintang (Teleskop Astronomi)
Terdiri atas dua lensa cembung: Lensa Objektif ($f_{\text{ob}}$ sangat panjang) dan Lensa Okuler ($f_{\text{ok}}$ pendek). Benda berada di tak terhingga ($s_{\text{ob}} = \infty \implies s'_{\text{ob}} = f_{\text{ob}}$).
* **Perbesaran Sudut (Mata Tidak Berakomodasi):**
  $$M = \frac{f_{\text{ob}}}{f_{\text{ok}}}$$
* **Panjang Teropong Bintang ($d$):**
  $$d = f_{\text{ob}} + f_{\text{ok}}$$

---

### D. Contoh Soal Komprehensif (Soal Padat Beranak)

> [!EXAMPLE]
> **Contoh Soal Terpadu Bab 18:**
> Selesaikan studi kasus optik geometri dan alat optik berikut ($s_n = 25\text{ cm}$):
>
> 1. **(Cermin Cekung):** Sebuah benda setinggi $h = 4\text{ cm}$ diletakkan di depan cermin cekung berjari-jari kelengkungan $R = 40\text{ cm}$ pada jarak $s = 30\text{ cm}$. Tentukan jarak fokus, jarak bayangan, perbesaran, tinggi bayangan, dan sifat bayangan yang terbentuk!
> 2. **(Pembiasan & Sudut Kritis):** Seberkas sinar merambat dari dalam air ($n_1 = \frac{4}{3}$) menuju udara ($n_2 = 1$).
>    * Jika sudut datang sinar adalah $30^\circ$, tentukan sudut bias sinar di udara!
>    * Hitung besar sudut kritis pemantulan internal total air terhadap udara!
> 3. **(Cacat Mata Kacamata):**
>    * Seorang penderita miopi tidak dapat melihat benda dengan jelas yang berjarak lebih dari $2\text{ meter}$. Tentukan kuat lensa kacamata yang diperlukannya!
>    * Seorang kakek penderita hipermetropi memiliki titik dekat $PP = 50\text{ cm}$. Tentukan kuat lensa kacamata baca yang dibutuhkannya agar dapat membaca normal pada jarak $25\text{ cm}$!
> 4. **(Mikroskop):** Sebuah mikroskop memiliki lensa objektif dengan fokus $f_{\text{ob}} = 1\text{ cm}$ dan lensa okuler dengan fokus $f_{\text{ok}} = 5\text{ cm}$. Sebuah preparat diletakkan pada jarak $s_{\text{ob}} = 1{,}1\text{ cm}$ di depan lensa objektif.
>    * Hitung jarak bayangan yang dibentuk lensa objektif ($s'_{\text{ob}}$) dan perbesaran lensa objektif!
>    * Hitung perbesaran total mikroskop untuk pengamatan mata tanpa berakomodasi!
>    * Hitung panjang tabung mikroskop ($d$) untuk pengamatan mata tanpa berakomodasi!
> 5. **(Teropong Bintang):** Sebuah teropong bintang memiliki lensa objektif dengan jarak fokus $f_{\text{ob}} = 120\text{ cm}$ dan lensa okuler dengan fokus $f_{\text{ok}} = 5\text{ cm}$. Tentukan perbesaran bayangan bintang dan panjang tabung teropong untuk pengamatan mata rileks tanpa akomodasi!

#### Langkah Pembahasan Komprehensif:

* **Jawaban Bagian 1 (Cermin Cekung):**
  * $R = 40\text{ cm} \implies f = \frac{R}{2} = +20\text{ cm}$, $s = 30\text{ cm}$, $h = 4\text{ cm}$.
  * Jarak bayangan:
    $$\frac{1}{s'} = \frac{1}{f} - \frac{1}{s} = \frac{1}{20} - \frac{1}{30} = \frac{3 - 2}{60} = \frac{1}{60} \implies s' = +60\text{ cm}$$
  * Perbesaran linier:
    $$M = \left|\frac{s'}{s}\right| = \left|\frac{60}{30}\right| = 2\text{ kali}$$
  * Tinggi bayangan: $h' = M \times h = 2 \times 4\text{ cm} = 8\text{ cm}$.
  * **Sifat Bayangan:** Nyata ($s' > 0$), terbalik, dan diperbesar ($M > 1$).

* **Jawaban Bagian 2 (Pembiasan & Sudut Kritis):**
  * $n_1 = \frac{4}{3}, n_2 = 1, i = 30^\circ$.
  * Hukum Snellius:
    $$n_1 \sin i = n_2 \sin r \implies \frac{4}{3} \sin 30^\circ = 1 \cdot \sin r \implies \frac{4}{3}\left(\frac{1}{2}\right) = \sin r \implies \sin r = \frac{2}{3} \approx 0{,}667$$
    $$r = \arcsin(0{,}667) \approx 41{,}8^\circ$$
  * Sudut kritis ($\sin\theta_k = \frac{n_2}{n_1}$):
    $$\sin\theta_k = \frac{1}{4/3} = \frac{3}{4} = 0{,}75 \implies \theta_k = \arcsin(0{,}75) \approx 48{,}6^\circ$$

* **Jawaban Bagian 3 (Kacamata Miopi & Hipermetropi):**
  * **Miopi:** $PR = 2\text{ m}$.
    $$P = -\frac{1}{PR(\text{m})} = -\frac{1}{2} = -0{,}5\text{ Dioptri}$$
  * **Hipermetropi:** $PP = 50\text{ cm}$, $s_n = 25\text{ cm}$.
    $$P = \frac{100}{25} - \frac{100}{50} = 4 - 2 = +2\text{ Dioptri}$$

* **Jawaban Bagian 4 (Mikroskop):**
  * $f_{\text{ob}} = 1\text{ cm}, s_{\text{ob}} = 1{,}1\text{ cm}, f_{\text{ok}} = 5\text{ cm}, s_n = 25\text{ cm}$.
  * Jarak bayangan objektif:
    $$\frac{1}{s'_{\text{ob}}} = \frac{1}{f_{\text{ob}}} - \frac{1}{s_{\text{ob}}} = \frac{1}{1} - \frac{1}{1{,}1} = 1 - \frac{10}{11} = \frac{1}{11} \implies s'_{\text{ob}} = +11\text{ cm}$$
  * Perbesaran objektif:
    $$M_{\text{ob}} = \left|\frac{s'_{\text{ob}}}{s_{\text{ob}}}\right| = \frac{11}{1{,}1} = 10\text{ kali}$$
  * Perbesaran total tanpa akomodasi:
    $$M_{\text{tot}} = M_{\text{ob}} \times \left(\frac{s_n}{f_{\text{ok}}}\right) = 10 \times \left(\frac{25}{5}\right) = 10 \times 5 = 50\text{ kali}$$
  * Panjang tabung mikroskop tanpa akomodasi:
    $$d = s'_{\text{ob}} + f_{\text{ok}} = 11\text{ cm} + 5\text{ cm} = 16\text{ cm}$$

* **Jawaban Bagian 5 (Teropong Bintang):**
  * $f_{\text{ob}} = 120\text{ cm}, f_{\text{ok}} = 5\text{ cm}$.
  * Perbesaran sudut:
    $$M = \frac{f_{\text{ob}}}{f_{\text{ok}}} = \frac{120}{5} = 24\text{ kali}$$
  * Panjang tabung teropong:
    $$d = f_{\text{ob}} + f_{\text{ok}} = 120 + 5 = 125\text{ cm}$$

---

### E. Catatan Penting & Jebakan Konsep
> [!NOTE]
> 1. **Perbedaan Cermin vs Lensa:**
>    * Cermin cekung $f > 0$ (mengumpulkan sinar), cermin cembung $f < 0$ (menyebarkan sinar).
>    * Lensa cembung $f > 0$ (mengumpulkan sinar), lensa cekung $f < 0$ (menyebarkan sinar).
> 2. **Bayangan Nyata vs Maya:** Bayangan nyata selalu terbalik dan dapat ditangkap layar ($s' > 0$). Bayangan maya selalu tegak dan tidak dapat ditangkap layar ($s' < 0$).
> 3. **Panjang Tabung Mikroskop:** Jangan lupa bahwa saat mata berakomodasi maksimum, bayangan okuler berada pada jarak $s'_{\text{ok}} = -25\text{ cm}$, sehingga $s_{\text{ok}} = \frac{s_n \cdot f_{\text{ok}}}{s_n + f_{\text{ok}}} < f_{\text{ok}}$ yang membuat panjang tabung mikroskop sedikit memendek dibandingkan saat mata rileks ($d = s'_{\text{ob}} + f_{\text{ok}}$).
