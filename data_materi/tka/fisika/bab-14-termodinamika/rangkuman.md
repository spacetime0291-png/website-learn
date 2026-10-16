# Rangkuman Rumus Cepat & Konsep Inti — Termodinamika
**Kategori:** TKA Fisika | **Pembungkus:** Termodinamika | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Usaha Luar Gas pada Empat Proses Termodinamika

* **Formula Usaha Luar Gas Ideal:**
  $$W = \int_{V_1}^{V_2} P\,dV$$
  * Usaha luar sama dengan luas daerah di bawah kurva siklus pada diagram $P-V$.

* **Empat Proses Termodinamika Dasar:**
  * **Isobarik ($P = \text{konstan}$):**
    $$W = P (V_2 - V_1) = n R \Delta T$$
  * **Isokhorik / Isometrik ($V = \text{konstan}, \Delta V = 0$):**
    $$W = 0$$
  * **Isotermal ($T = \text{konstan}, \Delta T = 0$):**
    $$W = n R T \ln\left(\frac{V_2}{V_1}\right) = n R T \ln\left(\frac{P_1}{P_2}\right)$$
    * Perubahan energi dalam $\Delta U = 0 \implies Q = W$.
  * **Adiabatik ($Q = 0$, Terisolasi Termal Sempurna):**
    $$P_1 V_1^{\gamma} = P_2 V_2^{\gamma}, \quad T_1 V_1^{\gamma - 1} = T_2 V_2^{\gamma - 1}$$
    $$W = -\Delta U = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1}$$
    * Tetapan Laplace: $\gamma = \frac{C_p}{C_v} > 1$.

---

### B. Hukum I Termodinamika (Kekekalan Energi Termal)

* **Formula Hukum I Termodinamika:**
  $$Q = W + \Delta U \quad \text{atau} \quad \Delta U = Q - W$$

* **Konvensi Tanda Standar:**
  * Kalor $Q$: bertanda $(+)$ jika sistem menyerap kalor; bertanda $(-)$ jika sistem melepas kalor.
  * Usaha $W$: bertanda $(+)$ jika sistem melakukan usaha memuai (ekspansi, $\Delta V > 0$); bertanda $(-)$ jika sistem menerima usaha memampat (kompresi, $\Delta V < 0$).
  * Energi Dalam $\Delta U$: bertanda $(+)$ jika suhu sistem naik ($\Delta T > 0$); bertanda $(-)$ jika suhu sistem turun ($\Delta T < 0$).

---

### C. Siklus & Mesin Kalor Carnot

* **Usaha Satu Siklus Tertutup:**
  $$W = Q_1 - Q_2$$
  * Usaha siklus sama dengan luas daerah tertutup di dalam kurva siklus $P-V$.

* **Efisiensi Mesin Kalor Umum & Mesin Ideal Carnot:**
  $$\eta = \frac{W}{Q_1} \times 100\% = \left(1 - \frac{Q_2}{Q_1}\right) \times 100\%$$
  $$\eta_{\max} = \left(1 - \frac{T_2}{T_1}\right) \times 100\%$$
  * $T_1$ adalah suhu reservoir tinggi, $T_2$ suhu reservoir rendah (kedua suhu wajib dalam satuan Kelvin!).

* **Koefisien Performa Mesin Pendingin (Kulkas / AC):**
  $$C_p = \frac{Q_2}{W} = \frac{Q_2}{Q_1 - Q_2} \implies C_{p,\max} = \frac{T_2}{T_1 - T_2}$$

---

### D. Hukum II Termodinamika & Entropi

* **Pernyataan Aliran Kalor Spontan:**
  * Kalor mengalir secara spontan dari benda bersuhu tinggi ke benda bersuhu rendah. Tidak mungkin membuat mesin kalor yang menyerap kalor dari satu reservoir dan mengubah seluruhnya menjadi usaha tanpa melepas kalor ke reservoir dingin.
* **Perubahan Entropi Reversibel:**
  $$\Delta S = \frac{Q}{T}$$
  * Pada sistem terisolasi alam semesta, perubahan entropi total selalu meningkat: $\Delta S_{\text{alam}} \ge 0$.

---

### E. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Pada mesin Carnot, jangan pernah memasukkan suhu dalam derajat Celcius ($^{\circ}\text{C}$)! Selalu tambahkan $273$ untuk mengubahnya ke Kelvin. Kesalahan ini merupakan penyebab nomor satu kesalahan hitung efisiensi di ujian!

> [!TIP] Super Solusi Cepat:
> Hubungan kalor dan efisiensi mesin Carnot:
> $$\frac{Q_2}{Q_1} = \frac{T_2}{T_1} = 1 - \eta$$
> Jika efisiensi mesin $40\%$ ($\eta = 0{,}4$), maka kalor sisa yang dibuang ke reservoir dingin langsung $Q_2 = 60\% Q_1$!