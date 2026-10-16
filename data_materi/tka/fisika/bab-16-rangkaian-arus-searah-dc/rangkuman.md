# Rangkuman Rumus Cepat & Konsep Inti — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Hukum Ohm, Hambatan Kawat, & Susunan Resistor
| Parameter Rangkaian | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Kuat Arus & Rapat Arus** | $I = \frac{Q}{t} = \frac{dq}{dt} = n \cdot e \cdot A \cdot v_d$<br>$J = \frac{I}{A} = \sigma E$ | $I$ laju aliran muatan; $J$ rapat arus; $v_d$ kecepatan geser elektron |
| **Hukum Ohm** | $V = I \cdot R \implies I = \frac{V}{R}$ | Konduktor ohmik menghasilkan kurva $V-I$ garis lurus bergradien $R$ |
| **Resistansi Kawat Silinder** | $R = \rho \frac{L}{A} = \rho \frac{L}{\frac{1}{4}\pi D^2}$ | Hambatan berbanding lurus panjang ($L$) dan berbanding terbalik kuadrat diameter ($R \propto \frac{1}{D^2}$) |
| **Hambatan Pengaruh Suhu** | $R_t = R_0 (1 + \alpha \Delta T)$ | Logam konduktor memiliki $\alpha > 0$ (hambatan naik saat suhu bertambah) |
| **Kawat Diregangkan (Volume Tetap)** | $R' = n^2 \cdot R$ | Jika kawat ditarik menjadi $n$ kali panjang semula ($L'=nL$), hambatannya melonjak $n^2$ kali lipat |
| **Susunan Resistor Seri** | $R_s = R_1 + R_2 + \dots$<br>$I_1 = I_2 = I_{\text{total}}, \quad V_1 = \frac{R_1}{R_s} V_{\text{total}}$ | Arus sama di setiap cabang; bertindak sebagai pembagi tegangan |
| **Susunan Resistor Paralel** | $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$<br>$V_1 = V_2 = V_{\text{total}}, \quad I_1 = \frac{R_2}{R_1 + R_2} I_{\text{total}}$ | Tegangan sama di setiap cabang; bertindak sebagai pembagi arus |
| **Jembatan Wheatstone Seimbang** | $R_1 \cdot R_4 = R_2 \cdot R_3 \implies I_G = 0$ | Perkalian silang sama besar $\implies$ arus galvanometer nol, resistor tengah diabaikan |

---

### B. Tabel Hukum Kirchhoff, Sumber GGL, & Daya Listrik
| Sistem Sirkuit | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Hukum I Kirchhoff (Simpul)** | $\Sigma I_{\text{masuk}} = \Sigma I_{\text{keluar}}$ | Konservasi muatan listrik di titik percabangan |
| **Hukum II Kirchhoff (Loop)** | $\Sigma \mathcal{E} + \Sigma (I \cdot R) = 0$ | Konservasi energi: penelusuran loop searah arus $+IR$, kutub baterai positif $+\mathcal{E}$ |
| **Tegangan Jepit Baterai** | Melepas arus: $V_{\text{jepit}} = \mathcal{E} - I \cdot r$<br>Pengisian aki: $V_{\text{jepit}} = \mathcal{E} + I \cdot r$ | Akibat hambatan dalam $r$, tegangan jepit lebih kecil dari GGL saat baterai mengalirkan arus |
| **Rangkaian Satu Loop** | $I = \frac{\Sigma \mathcal{E}}{\Sigma R + \Sigma r}$ | Rasio total GGL terhadap total resistansi seluruh loop |
| **Teorema Millman (Tegangan 2 Loop)** | $V_{AB} = \frac{\sum \frac{\mathcal{E}_i}{R_i + r_i}}{\sum \frac{1}{R_i + r_i}}$ | Menghitung tegangan simpul cabang paralel 2 atau 3 loop seketika tanpa eliminasi SPLDV |
| **Energi & Daya Disipasi** | $W = V I t = I^2 R t = \frac{V^2}{R} t$<br>$P = V I = I^2 R = \frac{V^2}{R}$ | Rekening PLN: Biaya $= \text{kWh} \times \text{Tarif}$; $1\text{ kWh} = 3{,}6 \times 10^6\text{ J}$ |
| **Perubahan Daya Lampu** | $P_2 = P_1 \left(\frac{V_2}{V_1}\right)^2$ | Filamen lampu berhambatan konstan $\implies$ daya berbanding lurus kuadrat tegangan ($P \propto V^2$) |
| **Transfer Daya Maksimum** | $R_L = r_{\text{dalam}} \implies P_{\max} = \frac{\mathcal{E}^2}{4 r_{\text{dalam}}}$ | Daya yang diserap beban luar maksimum saat nilai hambatannya sama dengan hambatan dalam baterai |
| **Shunt Amperemeter (Paralel)** | $R_{\text{sh}} = \frac{R_A}{n - 1}, \quad n = \frac{I}{I_A}$ | Memperbesar batas ukur kuat arus; dipasang paralel |
| **Multiplier Voltmeter (Seri)** | $R_m = (n - 1) \cdot R_V, \quad n = \frac{V}{V_V}$ | Memperbesar batas ukur tegangan; dipasang seri |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Daya lampu berbanding lurus dengan **kuadrat tegangan ($V^2$)**, bukan linier! Jika tegangan turun menjadi $\frac{1}{2}$ semula ($110\text{ V}$ dari $220\text{ V}$), daya lampu anjlok menjadi $(\frac{1}{2})^2 = \frac{1}{4}$ kali semula ($25\%$), berkurang drastis $75\%$!

> [!TIP] Super Solusi Cepat:
> Untuk pembagi arus pada 2 resistor paralel $R_1$ dan $R_2$, kuat arus di cabang 1 langsung:
> $$I_1 = \frac{R_2}{R_1 + R_2} I_{\text{total}}$$
