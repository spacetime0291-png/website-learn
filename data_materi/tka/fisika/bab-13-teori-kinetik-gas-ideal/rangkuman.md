# Rangkuman Rumus Cepat & Konsep Inti — Teori Kinetik Gas Ideal
**Kategori:** TKA Fisika | **Pembungkus:** Termodinamika | **Pendekatan:** Kurikulum 2013 & Merdeka

---

### A. Persamaan Keadaan Gas Ideal

* **Persamaan Makroskopik Gas Ideal:**
  $$P \cdot V = n \cdot R \cdot T = N \cdot k_B \cdot T$$
  * Hubungan mol dan jumlah molekul: $n = \frac{m}{M_r} = \frac{N}{N_A}$.
  * Hubungan tetapan: $R = N_A \cdot k_B$ ($R = 8{,}314\text{ J/mol}\cdot\text{K}$, $k_B = 1{,}38 \times 10^{-23}\text{ J/K}$).

* **Hukum-Hukum Gas pada Keadaan Khusus:**
  * Hukum Boyle (Isotermal, $T = \text{konstan}$):
    $$P_1 V_1 = P_2 V_2$$
  * Hukum Charles (Isobarik, $P = \text{konstan}$):
    $$\frac{V_1}{T_1} = \frac{V_2}{T_2}$$
  * Hukum Gay-Lussac (Isokhorik, $V = \text{konstan}$):
    $$\frac{P_1}{T_1} = \frac{P_2}{T_2}$$
  * Persamaan Gas Gabungan:
    $$\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$$

---

### B. Tekanan Mikroskopik & Kecepatan Efektif Molekul

* **Tekanan Gas Ideal dari Tinjauan Mikroskopik:**
  $$P = \frac{1}{3} \rho v_{\text{rms}}^2 = \frac{2}{3} \left(\frac{N}{V}\right) \overline{EK}$$

* **Energi Kinetik Rata-Rata Molekul Gas:**
  $$\overline{EK} = \frac{3}{2} k_B T$$
  * Energi kinetik molekul hanya bergantung mutlak pada **suhu Kelvin ($T$)**!

* **Kecepatan Efektif (Root Mean Square / RMS):**
  $$v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m_0}} = \sqrt{\frac{3 R T}{M_r}} = \sqrt{\frac{3 P}{\rho}}$$
  * Perbandingan kecepatan efektif:
    $$\frac{v_1}{v_2} = \sqrt{\frac{T_1}{T_2} \cdot \frac{M_{r2}}{M_{r1}}}$$

---

### C. Teorema Ekipartisi Energi & Energi Dalam Gas ($U$)

* **Prinsip Ekipartisi Energi:**
  * Setiap derajat kebebasan molekul gas menyumbang energi rata-rata sebesar $\frac{1}{2} k_B T$:
    $$\overline{EK} = \frac{f}{2} k_B T, \quad U = N \cdot \overline{EK} = \frac{f}{2} n R T$$

* **Derajat Kebebasan ($f$) Berdasarkan Jenis Molekul Gas:**
  * **Gas Monoatomik (He, Ne, Ar):**
    $$f = 3 \quad (\text{selalu 3 translasi}) \implies U = \frac{3}{2} n R T$$
  * **Gas Diatomik ($H_2, N_2, O_2$):**
    * Suhu rendah ($T \le 250\text{ K}$): $f = 3$ (3 translasi) $\implies U = \frac{3}{2} n R T$.
    * Suhu sedang ($T \approx 500\text{ K}$): $f = 5$ (3 translasi + 2 rotasi) $\implies U = \frac{5}{2} n R T$.
    * Suhu tinggi ($T \ge 1000\text{ K}$): $f = 7$ (3 translasi + 2 rotasi + 2 vibrasi) $\implies U = \frac{7}{2} n R T$.

---

### D. Jebakan Ujian & Solusi Cepat

> [!WARNING] Jebakan Konsep:
> Kecepatan efektif berbanding lurus dengan **akar kuadrat suhu Kelvin ($sqrt{T}$)**, bukan berbanding lurus dengan suhu linier! Jika suhu dinaikkan menjadi 4 kali lipat, kelajuan efektif partikel hanya meningkat sebesar $sqrt{4} = 2$ kali lipat.

> [!TIP] Super Solusi Cepat:
> Pada suhu yang sama, molekul gas yang memiliki massa molekul relatif ($M_r$) lebih kecil (lebih ringan) akan bergerak melesat dengan kelajuan efektif ($v_{\text{rms}}$) yang jauh lebih tinggi!