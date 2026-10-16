# Rangkuman Rumus Cepat & Konsep Inti — Gelombang Cahaya dan Alat Optik
**Kategori:** TKA Fisika | **Pembungkus:** Gelombang & Optik | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Interferensi & Difraksi Cahaya

* **Interferensi Celah Ganda Young:**
  * Garis Terang (Interferensi Konstruktif):
    $$\frac{d \cdot y}{L} = m \cdot \lambda \quad (m = 0, 1, 2, \dots)$$
  * Garis Gelap (Interferensi Destruktif):
    $$\frac{d \cdot y}{L} = \left(m - \frac{1}{2}\right) \lambda = (2m - 1) \frac{\lambda}{2} \quad (m = 1, 2, \dots)$$
  * Jarak antara dua garis terang berurutan atau dua garis gelap berurutan:
    $$\Delta y = \frac{\lambda \cdot L}{d}$$

* **Interferensi Selaput Tipis:**
  * Garis Terang: $2 n d \cos r = \left(m - \frac{1}{2}\right) \lambda$.
  * Garis Gelap: $2 n d \cos r = m \lambda$.

* **Difraksi Celah Tunggal:**
  * Pola Garis Gelap (Destruktif):
    $$d \sin\theta = m \cdot \lambda \quad (m = 1, 2, \dots)$$
  * Pola Garis Terang:
    $$d \sin\theta = \left(m + \frac{1}{2}\right) \lambda$$
  * Lebar terang pusat adalah dua kali lipat jarak terang lainnya:
    $$\text{Lebar Terang Pusat} = \frac{2 \lambda L}{d}$$

* **Difraksi Kisi Banyak Celah:**
  $$d \sin\theta = n \cdot \lambda, \quad d = \frac{1}{N}$$
  * $N$ adalah jumlah garis per satuan panjang (misal $500\text{ garis/mm} \implies d = \frac{1}{500\text{ mm}} = 2 \times 10^{-6}\text{ m}$).

* **Daya Urai Kriteria Rayleigh:**
  $$d_m = 1{,}22 \frac{\lambda \cdot L}{D}$$

* **Polarisasi Cahaya:**
  * Polarisasi Hukum Malus:
    $$I_1 = \frac{1}{2} I_0, \quad I_2 = I_1 \cos^2\theta = \frac{1}{2} I_0 \cos^2\theta$$
  * Sudut Polarisasi Brewster:
    $$\tan\theta_p = \frac{n_2}{n_1} \implies \theta_p + r = 90^{\circ}$$

---

### B. Optika Geometri, Cermin, & Lensa

* **Hukum Pembiasan Snellius & Sudut Kritis:**
  $$n_1 \sin i = n_2 \sin r, \quad \frac{n_2}{n_1} = \frac{v_1}{v_2} = \frac{\lambda_1}{\lambda_2}$$
  * Sudut kritis pemantulan total internal ($n_1 > n_2$):
    $$\sin\theta_k = \frac{n_2}{n_1}$$

* **Persamaan Gauss Cermin & Lensa:**
  $$\frac{1}{f} = \frac{1}{s} + \frac{1}{s'}, \quad M = \left|\frac{s'}{s}\right| = \left|\frac{h'}{h}\right|$$
  * Cermin cekung / Lensa cembung: fokus bernilai positif ($f > 0$).
  * Cermin cembung / Lensa cekung: fokus bernilai negatif ($f < 0$).
  * Bayangan nyata di depan cermin / belakang lensa: $s' > 0$.
  * Bayangan maya di belakang cermin / depan lensa: $s' < 0$.

* **Kuat Lensa & Rumus Pembuat Lensa:**
  $$P = \frac{100}{f\text{ (cm)}} = \frac{1}{f\text{ (m)}} \quad (\text{satuan: Dioptri})$$
  $$\frac{1}{f} = \left(\frac{n_l}{n_m} - 1\right) \left(\frac{1}{R_1} + \frac{1}{R_2}\right)$$

---

### C. Alat-Alat Optik

* **Kacamata Cacat Mata:**
  * Miopi (Rabun Jauh, lensa cekung):
    $$P = -\frac{100}{PR\text{ (cm)}}$$
  * Hipermetropi (Rabun Dekat, lensa cembung):
    $$P = \frac{100}{s_n} - \frac{100}{PP\text{ (cm)}} = 4 - \frac{100}{PP\text{ (cm)}} \quad (s_n = 25\text{ cm})$$

* **Lup (Kaca Pembesar):**
  * Mata berakomodasi maksimum:
    $$M = \frac{s_n}{f} + 1$$
  * Mata berakomodasi pada jarak $x$:
    $$M = \frac{s_n}{f} + \frac{s_n}{x}$$
  * Mata tidak berakomodasi:
    $$M = \frac{s_n}{f}$$

* **Mikroskop:**
  * Perbesaran total:
    $$M_{\text{total}} = M_{\text{ob}} \times M_{\text{ok}}$$
    $$M_{\text{ob}} = \left|\frac{s_{\text{ob}}'}{s_{\text{ob}}}\right|$$
  * Okuler berakomodasi maksimum: $M_{\text{ok}} = \frac{s_n}{f_{\text{ok}}} + 1$.
  * Okuler tanpa akomodasi: $M_{\text{ok}} = \frac{s_n}{f_{\text{ok}}}$.
  * Panjang tabung mikroskop:
    $$d = s_{\text{ob}}' + s_{\text{ok}} \implies (\text{tanpa akomodasi: } d = s_{\text{ob}}' + f_{\text{ok}})$$

* **Teropong Bintang (Teleskop Astronomi):**
  * Perbesaran sudut (mata tidak berakomodasi):
    $$M = \frac{f_{\text{ob}}}{f_{\text{ok}}}$$
  * Panjang teropong bintang:
    $$d = f_{\text{ob}} + f_{\text{ok}}$$

---

### D. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada kisi difraksi, tetapan kisi $d$ harus dihitung dengan teliti: $d = \frac{1}{N}$. Jika $N = 400\text{ garis/cm}$, maka $d = \frac{10^{-2}}{400} = 2{,}5 \times 10^{-6}\text{ m}$. Jangan lupa mengonversikan sentimeter ke meter!

> [!TIP] Super Solusi Cepat:
> Daya lensa kacamata miopi dengan titik jauh $PR$ dalam satuan sentimeter:
> $$P = -\frac{100}{PR\text{ (cm)}}$$
> Jika titik jauh $PR = 200\text{ cm} = 2\text{ m}$, dayanya langsung: $P = -\frac{100}{200} = -0{,}5\text{ Dioptri}$!