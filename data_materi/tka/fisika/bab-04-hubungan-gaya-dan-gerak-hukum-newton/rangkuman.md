# Rangkuman Rumus Cepat & Konsep Inti — Hubungan Gaya dan Gerak (Hukum Newton)
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Tiga Hukum Pokok Newton tentang Gerak

* **Hukum I Newton (Inersia / Kelembaman):**
  $$\sum \vec{F} = 0 \implies \vec{v} = \text{konstan} \quad (a = 0)$$

* **Hukum II Newton (Dinamika Percepatan):**
  $$\sum \vec{F} = m \vec{a} \implies \vec{a} = \frac{\sum \vec{F}}{m}$$

* **Hukum III Newton (Aksi-Reaksi):**
  $$\vec{F}_{\text{aksi}} = -\vec{F}_{\text{reaksi}}$$
  * Bekerja pada **dua benda yang berbeda**, segaris kerja, dan berlawanan arah (tidak saling meniadakan).

---

### B. Gaya Gesek & Gaya Kontak Normal

* **Gaya Berat:**
  $$W = m \cdot g$$

* **Gaya Gesek Statis & Kinetis:**
  * Gesek statis: $f_s \le f_{s,\max} = \mu_s N$.
  * Gesek kinetis: $f_k = \mu_k N$ (berlaku saat benda sudah meluncur, $\mu_k < \mu_s$).
  * Jika $F_{\text{tarik}} < f_{s,\max} \implies$ Benda diam ($a = 0, f_s = F_{\text{tarik}}$).
  * Jika $F_{\text{tarik}} = f_{s,\max} \implies$ Benda tepat akan bergerak.
  * Jika $F_{\text{tarik}} > f_{s,\max} \implies$ Benda bergerak dipercepat ($f_{\text{gesek}} = f_k$).

---

### C. Analisis Dinamika Sistem Khusus

* **Gerak Orang di Dalam Lift:**
  * Diam atau melaju dengan kecepatan tetap (GLB):
    $$N = m g$$
  * Lift dipercepat ke atas atau diperlambat ke bawah:
    $$N = m(g + a)$$
  * Lift dipercepat ke bawah atau diperlambat ke atas:
    $$N = m(g - a)$$
  * Tali lift putus (jatuh bebas, $a = g$):
    $$N = 0 \quad (\text{keadaan melayang tanpa bobot})$$

* **Benda pada Bidang Miring Bersudut $\theta$:**
  * Gaya normal: $N = m g \cos\theta$.
  * Komponen berat penarik luncur: $W_x = m g \sin\theta$.
  * Percepatan meluncur pada bidang licin:
    $$a = g \sin\theta$$
  * Percepatan meluncur pada bidang kasar:
    $$a = g (\sin\theta - \mu_k \cos\theta)$$
  * Syarat benda tepat akan meluncur turun:
    $$\tan\theta = \mu_s$$

* **Pesawat Atwood & Dua Massa Terhubung Katrol Licin:**
  * Dua massa bergantung bebas ($m_2 > m_1$):
    $$a = \frac{m_2 - m_1}{m_1 + m_2} g, \quad T = \frac{2 m_1 m_2}{m_1 + m_2} g$$
  * Satu massa di meja mendatar licin, satu massa bergantung:
    $$a = \frac{m_2}{m_1 + m_2} g, \quad T = \frac{m_1 m_2}{m_1 + m_2} g$$

* **Kelajuan Aman Tikungan:**
  * Tikungan datar kasar:
    $$v_{\max} = \sqrt{\mu_s g R}$$
  * Tikungan miring licin bersudut $\theta$:
    $$v_{\max} = \sqrt{g R \tan\theta}$$

---

### D. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Gaya gesek statis nilainya menyesuaikan dengan gaya penarik ($f_s = F_{\text{tarik}}$) selama belum melebihi nilai ambang maksimumnya ($f_{s,\max} = \mu_s N$). Jangan langsung mengalikan $\mu_s N$ jika gaya luar belum melampaui batas tersebut!

> [!TIP] Super Solusi Cepat:
> Menghitung percepatan sistem benda terhubung tali pada sembarang bidang:
> $$a = \frac{\sum F_{\text{penggerak}} - \sum F_{\text{penghambat}}}{\sum m_{\text{total}}}$$