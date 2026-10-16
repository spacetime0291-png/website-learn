# Rangkuman Rumus Cepat & Intisari Materi — Teori Kinetik Gas Ideal
**Kategori:** TKA Fisika | **Pembungkus:** Kalor dan Termodinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Teori kinetik gas menjembatani besaran makroskopis termodinamika (tekanan, temperatur, dan volume) dengan perilaku dinamis mikroskopis molekul gas acak berdasarkan Hukum Gerak Newton. Model Gas Ideal didasarkan pada asumsi bahwa ukuran molekul diabaikan, tumbukan antarmolekul lenting sempurna, tidak ada gaya tarik-menarik antarmolekul kecuali saat bertumbukan, dan energi kinetik sebanding lurus dengan temperatur mutlak Kelvin.

| Besaran Mikroskopis Gas | Simbol & Dimensi | Hubungan Makroskopis | Satuan SI |
| :--- | :--- | :--- | :--- |
| **Energi Kinetik Translasi Rata-Rata** | $\overline{EK}$, $[M][L]^2[T]^{-2}$ | $\overline{EK} = \frac{3}{2} k T$ | Joule ($\text{J}$) |
| **Kelajuan Efektif Molekul (RMS)** | $v_{\text{rms}}$, $[L][T]^{-1}$ | $v_{\text{rms}} = \sqrt{\frac{3 k T}{m_0}} = \sqrt{\frac{3 R T}{M_r}}$ | meter per sekon ($\text{m/s}$) |
| **Energi Dalam Gas Ideal** | $U$, $[M][L]^2[T]^{-2}$ | $U = N \bar{E} = \frac{f}{2} N k T = \frac{f}{2} n R T$ | Joule ($\text{J}$) |
| **Tekanan Mikroskopis Gas** | $P$, $[M][L]^{-1}[T]^{-2}$ | $P = \frac{1}{3} \rho \overline{v^2} = \frac{2}{3} \frac{N}{V} \overline{EK}$ | Pascal ($\text{Pa} = \text{N/m}^2$) |

---

### B. Matriks Rumus Persamaan Keadaan & Hukum Gas Ideal
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Persamaan Keadaan Gas Ideal** | $P \cdot V = n \cdot R \cdot T$<br>$P \cdot V = N \cdot k \cdot T$ | $P$: tekanan mutlak gas ($\text{Pa}$); $V$: volume wadah gas ($\text{m}^3$); $n$: jumlah mol gas ($\text{mol}$); $R$: konstanta gas umum ($8{,}314\text{ J/mol}\cdot\text{K}$); $T$: suhu mutlak gas ($\text{Kelvin}$); $N$: jumlah total molekul partikel; $k$: konstanta Boltzmann ($1{,}38 \times 10^{-23}\text{ J/K}$) | Hubungan mol dan konstanta: $n = \frac{m}{M_r} = \frac{N}{N_A}$; $k = \frac{R}{N_A}$; Bilangan Avogadro $N_A = 6{,}022 \times 10^{23}\text{ partikel/mol}$ |
| **Massa Jenis Gas Ideal** | $\rho = \frac{P \cdot M_r}{R \cdot T}$ | $\rho$: massa jenis gas ($\text{kg/m}^3$); $P$: tekanan ($\text{Pa}$); $M_r$: massa molar gas ($\text{kg/mol}$); $T$: suhu mutlak ($\text{K}$) | Pada tekanan tetap, massa jenis gas berbanding terbalik dengan suhu mutlak (udara panas memuai lebih ringan mengapung naik) |
| **Hukum Boyle (Proses Isotermal)** | $P_1 \cdot V_1 = P_2 \cdot V_2$ | $P_1, P_2$: tekanan gas awal dan akhir ($\text{Pa}$); $V_1, V_2$: volume gas awal dan akhir ($\text{m}^3$) | Berlaku saat suhu gas dijaga konstan ($T = \text{konstan}$) |
| **Hukum Charles (Proses Isobarik)** | $\frac{V_1}{T_1} = \frac{V_2}{T_2}$ | $V$: volume gas ($\text{m}^3$); $T$: suhu mutlak ($\text{Kelvin}$) | Berlaku saat tekanan gas dijaga konstan ($P = \text{konstan}$) |
| **Hukum Gay-Lussac (Proses Isokhorik)** | $\frac{P_1}{T_1} = \frac{P_2}{T_2}$ | $P$: tekanan gas ($\text{Pa}$); $T$: suhu mutlak ($\text{Kelvin}$) | Berlaku saat volume wadah gas dijaga konstan ($V = \text{konstan}$) |
| **Hukum Gabungan Boyle-Gay Lussac** | $\frac{P_1 \cdot V_1}{T_1} = \frac{P_2 \cdot V_2}{T_2}$ | $P, V, T$: parameter termodinamika gas pada kondisi awal (1) dan kondisi akhir (2) | Berlaku untuk sistem gas tertutup dengan massa atau jumlah partikel konstan ($n = \text{konstan}$) |

---

### C. Tekanan Mikroskopis, Kelajuan RMS, & Derajat Kebebasan
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Tekanan Gas Ditinjau Mikroskopis** | $P = \frac{1}{3} \frac{N m_0}{V} \overline{v^2} = \frac{1}{3} \rho \overline{v^2} = \frac{2}{3} \frac{N}{V} \overline{EK}$ | $P$: tekanan gas ($\text{Pa}$); $N$: jumlah partikel gas; $m_0$: massa 1 molekul partikel gas ($\text{kg}$); $V$: volume ruang ($\text{m}^3$); $\rho = \frac{N m_0}{V}$: massa jenis gas ($\text{kg/m}^3$); $\overline{v^2}$: rata-rata kuadrat kelajuan partikel ($\text{m}^2/\text{s}^2$) | Tekanan timbul akibat tumbukan elastis molekul gas pada dinding bejana wadah |
| **Energi Kinetik Rata-Rata Translasi** | $\overline{EK} = \frac{3}{2} k T$ | $\overline{EK}$: energi kinetik translasi rata-rata satu molekul gas ($\text{Joule}$); $k$: konstanta Boltzmann ($1{,}38 \times 10^{-23}\text{ J/K}$); $T$: suhu mutlak gas ($\text{K}$) | Energi kinetik rata-rata gas **HANYA bergantung pada temperatur Kelvin ($T$)**, sama sekali tidak dipengaruhi oleh jenis gas atau tekanannya! |
| **Kelajuan Efektif Molekul Gas (RMS)** | $v_{\text{rms}} = \sqrt{\overline{v^2}} = \sqrt{\frac{3 k T}{m_0}} = \sqrt{\frac{3 R T}{M_r}} = \sqrt{\frac{3 P}{\rho}}$ | $v_{\text{rms}}$: kelajuan efektif *root mean square* partikel gas ($\text{m/s}$); $m_0$: massa satu molekul ($\text{kg}$); $M_r$: massa molekul relatif gas ($\text{kg/mol}$); $\rho$: massa jenis ($\text{kg/m}^3$) | Pada suhu yang sama, molekul gas yang bermassa molar lebih ringan (seperti gas $\text{H}_2$ atau $\text{He}$) melesat jauh lebih cepat dibanding gas berat ($\text{O}_2$) |
| **Teorema Ekipartisi Energi** | $\overline{E} = f \left(\frac{1}{2} k T\right)$ | $\overline{E}$: energi rata-rata per molekul partikel ($\text{J}$); $f$: derajat kebebasan gerak molekul gas | Setiap derajat kebebasan gerak partikel yang independen menyumbang energi termal sebesar $\frac{1}{2}kT$ |
| **Energi Dalam Gas Monoatomik (He, Ne, Ar)** | $f = 3$ (Translasi Sumbu $X, Y, Z$)<br>$U = \frac{3}{2} N k T = \frac{3}{2} n R T$ | $U$: energi dalam total sistem gas ($\text{Joule}$); $n$: jumlah mol gas ($\text{mol}$); $N$: jumlah total partikel gas | Gas mulia monoatomik hanya memiliki 3 derajat kebebasan translasi pada segala tingkatan suhu |
| **Energi Dalam Gas Diatomik ($\text{O}_2, \text{N}_2, \text{H}_2$)** | Suhu Rendah ($T \le 250\text{ K}$): $f = 3 \implies U = \frac{3}{2} n R T$<br>Suhu Sedang ($T \approx 300 - 500\text{ K}$): $f = 5 \implies U = \frac{5}{2} n R T$<br>Suhu Tinggi ($T \ge 1000\text{ K}$): $f = 7 \implies U = \frac{7}{2} n R T$ | $f = 3$ (3 translasi); $f = 5$ (3 translasi + 2 rotasi); $f = 7$ (3 translasi + 2 rotasi + 2 vibrasi) | Pada suhu kamar standar ($300\text{ K}$), gas diatomik di udara normal beroperasi pada derajat kebebasan $f = 5$ |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Kelajuan efektif molekul gas ($v_{\text{rms}}$) berbanding lurus dengan **akar kuadrat suhu mutlak Kelvin** ($v_{\text{rms}} \propto \sqrt{T}$), BUKAN berbanding lurus linier dengan $T$! Jika suhu gas dinaikkan dari $27^{\circ}\text{C}$ ($300\text{ K}$) menjadi $927^{\circ}\text{C}$ ($1200\text{ K}$), suhunya naik 4 kali lipat, sehingga kelajuan efektifnya hanya meningkat $\sqrt{4} = 2\text{ kali lipat}$!
> 2. Jangan lupa mengonversikan massa molar $M_r$ dari $\text{g/mol}$ ke satuan SI $\text{kg/mol}$ (dikalikan $10^{-3}$) saat menghitung $v_{\text{rms}} = \sqrt{\frac{3RT}{M_r}}$! Contoh: Gas Oksigen $\text{O}_2$ ($M_r = 32\text{ g/mol} = 32 \times 10^{-3}\text{ kg/mol}$).

> [!TIP] Super Solusi Cepat:
> Untuk perbandingan kelajuan efektif dua gas yang berbeda pada suhu yang sama, perbandingannya berbanding terbalik dengan akar massa molarnya:
> $$\frac{v_1}{v_2} = \sqrt{\frac{M_{r2}}{M_{r1}}}$$