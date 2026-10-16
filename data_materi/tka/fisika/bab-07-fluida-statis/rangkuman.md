# Rangkuman Rumus Cepat & Konsep Inti — Fluida Statis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Tekanan Hidrostatis & Hukum Pokok Hidrostatis

* **Massa Jenis & Tekanan Dasar:**
  $$\rho = \frac{m}{V}, \quad P = \frac{F}{A}$$

* **Tekanan Hidrostatis & Tekanan Mutlak:**
  $$P_h = \rho \cdot g \cdot h$$
  $$P_{\text{mutlak}} = P_0 + \rho g h$$
  * $P_0$ adalah tekanan atmosfer permukaan ($1\text{ atm} = 1{,}013 \times 10^5\text{ Pa} = 76\text{ cmHg}$).
  * Titik-titik pada kedalaman horizontal yang sama di dalam fluida homogen yang terhubung memiliki tekanan yang sama.

* **Pipa U Bejana Berhubungan (Dua Fluida Tak Bercampur):**
  $$\rho_1 h_1 = \rho_2 h_2$$

---

### B. Hukum Pascal & Dongkrak Hidrolik

* **Prinsip Pascal (Penerusan Tekanan ke Segala Arah):**
  $$\frac{F_1}{A_1} = \frac{F_2}{A_2} \implies F_2 = F_1 \left(\frac{D_2}{D_1}\right)^2$$
  * Gaya bertambah sebanding dengan kuadrat perbandingan diameter penampang!

---

### C. Hukum Archimedes & Kondisi Terapung/Melayang/Tenggelam

* **Gaya Apung Ke Atas:**
  $$F_A = \rho_f \cdot V_{\text{celup}} \cdot g$$

* **Berat Semu di Dalam Fluida:**
  $$W' = W_{\text{udara}} - F_A$$

* **Tiga Keadaan Benda di Dalam Fluida:**
  * **Terapung ($\rho_b < \rho_f$):**
    $$V_{\text{celup}} = \frac{\rho_b}{\rho_f} V_{\text{total}}$$
    * Persentase volume tercelup langsung menyatakan rasio massa jenis benda terhadap fluida!
  * **Melayang ($\rho_b = \rho_f$):**
    $$V_{\text{celup}} = V_{\text{total}}, \quad F_A = W$$
  * **Tenggelam ($\rho_b > \rho_f$):**
    $$V_{\text{celup}} = V_{\text{total}}, \quad N = W - F_A > 0$$

---

### D. Gejala Meniskus, Kapilaritas, & Hukum Stokes

* **Tegangan Permukaan:**
  $$\gamma = \frac{F}{d} = \frac{F}{2 L}$$

* **Kenaikan / Penurunan Kapilaritas:**
  $$h = \frac{2 \gamma \cos\theta}{\rho g r}$$
  * Naik jika sudut kontak basah $\theta < 90^{\circ}$ (meniskus cekung, misal air dalam kaca).
  * Turun jika sudut kontak tak basah $\theta > 90^{\circ}$ (meniskus cembung, misal raksa dalam kaca).

* **Gaya Gesek Viskositas Fluida (Hukum Stokes):**
  $$F_s = 6 \pi \eta r v$$

* **Kecepatan Terminal Bola Jatuh dalam Fluida Viskos:**
  $$v_t = \frac{2 r^2 g}{9 \eta} (\rho_b - \rho_f)$$

---

### E. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada rumus gaya Archimedes $F_A = \rho_f V_{\text{celup}} g$, massa jenis yang digunakan adalah **massa jenis fluida/cairan ($\rho_f$)**, BUKAN massa jenis benda! Volume yang dihitung hanyalah **volume bagian yang tercelup saja**.

> [!TIP] Super Solusi Cepat:
> Jika es terapung di air dengan bagian yang muncul di atas permukaan sebesar $20\%$, maka bagian yang tercelup adalah $80\%$, sehingga massa jenis es langsung: $\rho_{\text{es}} = 0{,}8 \times 1\text{ g/cm}^3 = 0{,}8\text{ g/cm}^3$!