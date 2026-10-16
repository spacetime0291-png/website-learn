# Rangkuman Rumus Cepat & Intisari Materi — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Rangkaian arus searah (*Direct Current* / DC) mengatur transmisi aliran muatan listrik satu arah di bawah pengaruh gaya gerak listrik (GGL) dan beda potensial konstan. Rangkaian diselesaikan secara komprehensif menggunakan Hukum Ohm, formulasi hambatan kawat silinder penghantar, Hukum Konservasi Kirchhoff I (kekekalan muatan) dan Kirchhoff II (kekekalan energi potensial loop tertutup).

| Parameter Sirkuit DC | Simbol & Dimensi | Formulasi Fisis Kunci | Satuan SI |
| :--- | :--- | :--- | :--- |
| **Kuat Arus Listrik** | $I$, $[I]$ | $I = \frac{Q}{t} = \frac{dq}{dt} = n e A v_d$ | Ampere ($\text{A} = \text{C/s}$) |
| **Resistansi Kawat** | $R$, $[M][L]^2[T]^{-3}[I]^{-2}$ | $R = \rho \frac{L}{A}$ | $\text{Ohm}$ ($\Omega = \text{V/A}$) |
| **Gaya Gerak Listrik (GGL)** | $\mathcal{E}$, $[M][L]^2[T]^{-3}[I]^{-1}$ | Tegangan terminal saat rangkaian terbuka tanpa arus ($I = 0$) | Volt ($\text{V}$) |
| **Daya Disipasi Listrik** | $P$, $[M][L]^2[T]^{-3}$ | $P = V \cdot I = I^2 R = \frac{V^2}{R}$ | Watt ($\text{W} = \text{J/s}$) |

---

### B. Matriks Rumus Hukum Ohm, Resistansi Kawat, & Susunan Resistor
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Ohm Dasar** | $V = I \cdot R \implies I = \frac{V}{R}$ | $V$: beda potensial tegangan listrik ujung-ujung resistor ($\text{Volt}$); $I$: kuat arus listrik yang mengalir ($\text{Ampere}$); $R$: hambatan listrik konduktor ohmik ($\Omega$) | Grafik $V-I$ konduktor ohmik berupa garis lurus linier dengan gradien kemiringan $= R$ |
| **Kuat Arus & Kecepatan Geser Elektron** | $I = n \cdot e \cdot A \cdot v_d$<br>$J = \frac{I}{A} = \sigma E = n e v_d$ | $n$: kerapatan elektron bebas per satuan volume ($\text{m}^{-3}$); $e$: muatan elementer elektron ($1{,}6 \times 10^{-19}\text{ C}$); $A$: luas penampang kawat ($\text{m}^2$); $v_d$: kecepatan geser elektron (*drift velocity*, $\text{m/s}$); $J$: rapat arus listrik ($\text{A/m}^2$); $\sigma$: konduktivitas bahan | Meskipun elektron bergeser lambat ($v_d \approx 10^{-4}\text{ m/s}$), medan listrik merambat mendekati kecepatan cahaya |
| **Resistansi Kawat Silinder** | $R = \rho \frac{L}{A} = \rho \frac{L}{\frac{1}{4}\pi D^2}$ | $R$: hambatan kawat penghantar ($\Omega$); $\rho$: resistivitas jenis bahan kawat ($\Omega\cdot\text{m}$); $L$: panjang kawat ($\text{m}$); $A$: luas penampang lingkaran kawat ($\text{m}^2$); $D$: diameter penampang kawat ($\text{m}$) | Hambatan berbanding lurus dengan panjang kawat ($L$) dan berbanding terbalik dengan kuadrat diameternya ($R \propto \frac{1}{D^2}$) |
| **Pengaruh Suhu terhadap Hambatan** | $R_t = R_0 (1 + \alpha \Delta T)$<br>$\rho_t = \rho_0 (1 + \alpha \Delta T)$ | $R_0, \rho_0$: hambatan dan resistivitas kawat pada suhu acuan $0^{\circ}\text{C}$ atau $20^{\circ}\text{C}$ ($\Omega$); $R_t$: hambatan pada suhu $t$ ($\Omega$); $\alpha$: koefisien suhu resistansi ($^{\circ}\text{C}^{-1}$); $\Delta T$: kenaikan suhu ($^{\circ}\text{C}$) | Logam konduktor memiliki $\alpha > 0$ (hambatan naik saat dipanaskan); semikonduktor dan karbon memiliki $\alpha < 0$ |
| **Kawat Diregangkan Tanpa Perubahan Volume** | $R' = n^2 \cdot R$ | $n = \frac{L'}{L}$: kelipatan pertambahan panjang kawat baru; $R$: hambatan kawat mula-mula ($\Omega$); $R'$: hambatan kawat setelah ditarik diregangkan ($\Omega$) | Karena volume kawat konstan ($V = A \cdot L = \text{konstan}$), jika panjang ditarik menjadi $n$ kali semula ($L' = nL$), luas mengecil menjadi $A' = \frac{A}{n}$, sehingga hambatan melonjak $n^2$ kali lipat! |
| **Resistor Rangkaian Seri** | $R_s = R_1 + R_2 + \dots$<br>$I_{\text{total}} = I_1 = I_2 = \dots$<br>$\frac{V_1}{V_2} = \frac{R_1}{R_2}$ | $R_s$: hambatan pengganti seri ($\Omega$); arus listrik sama besar di seluruh resistor seri; tegangan terbagi proporsional | Bertindak sebagai pembagi tegangan (*voltage divider*): $V_1 = \frac{R_1}{R_s} V_{\text{total}}$ |
| **Resistor Rangkaian Paralel** | $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$<br>$V_{\text{total}} = V_1 = V_2 = \dots$<br>$\frac{I_1}{I_2} = \frac{R_2}{R_1}$ | $R_p$: hambatan pengganti paralel ($\Omega$); beda potensial tegangan sama di setiap cabang; arus listrik terbagi terbalik dengan nilai hambatan | Bertindak sebagai pembagi arus: untuk 2 resistor paralel berlaku $I_1 = \frac{R_2}{R_1 + R_2} I_{\text{total}}$ |
| **Jembatan Wheatstone Seimbang** | $R_1 \cdot R_4 = R_2 \cdot R_3 \implies I_G = 0$ | $R_1, R_2, R_3, R_4$: hambatan pada keempat lengan jembatan ($\Omega$); $I_G$: arus yang mengalir pada galvanometer tengah | Jika hasil kali silang hambatan berseberangan sama besar, beda potensial cabang tengah nol ($V_{CD} = 0$), galvanometer tidak dialiri arus dan resistor tengah dapat dihilangkan |

---

### C. Hukum Kirchhoff, Rangkaian Baterai, & Daya Listrik
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum I Kirchhoff (Titik Simpul)** | $\Sigma I_{\text{masuk}} = \Sigma I_{\text{keluar}}$ | $I_{\text{masuk}}$: jumlah arus menuju percabangan ($\text{A}$); $I_{\text{keluar}}$: jumlah arus meninggalkan percabangan ($\text{A}$) | Konservasi muatan listrik: muatan tidak dapat menumpuk atau hilang di percabangan |
| **Hukum II Kirchhoff (Loop Tertutup)** | $\Sigma \mathcal{E} + \Sigma (I \cdot R) = 0$ | $\mathcal{E}$: gaya gerak listrik sumber tegangan baterai ($\text{Volt}$); $I$: arus cabang loop ($\text{A}$); $R$: hambatan total resistor luar dan dalam baterai ($\Omega$) | **Aturan Tanda Loop:**<br>1. Menjumpai kutub positif baterai lebih dulu: $+\mathcal{E}$<br>2. Menjumpai kutub negatif baterai lebih dulu: $-\mathcal{E}$<br>3. Arah penelusuran loop searah arus: $+I R$<br>4. Arah penelusuran loop berlawanan arus: $-I R$ |
| **Tegangan Jepit Baterai ($V_{\text{jepit}}$)** | Melepas Arus: $V_{\text{jepit}} = \mathcal{E} - I \cdot r$<br>Pengisian Aki: $V_{\text{jepit}} = \mathcal{E} + I \cdot r$ | $V_{\text{jepit}}$: beda potensial terukur antara kutub-kutub baterai saat mengalirkan arus beban ($\text{Volt}$); $\mathcal{E}$: GGL baterai ($\text{Volt}$); $r$: hambatan dalam baterai ($\Omega$); $I$: kuat arus ($\text{A}$) | Adanya hambatan dalam baterai ($r$) menyebabkan tegangan jepit lebih rendah dari GGL saat baterai menyuplai arus ($V_{\text{jepit}} < \mathcal{E}$) |
| **Rangkaian Satu Loop Tertutup** | $I = \frac{\Sigma \mathcal{E}}{\Sigma R + \Sigma r}$ | $\Sigma \mathcal{E}$: jumlah aljabar GGL baterai dalam loop ($\text{Volt}$); $\Sigma R$: total resistor luar ($\Omega$); $\Sigma r$: total hambatan dalam baterai ($\Omega$) | Arus bernilai positif jika asumsi arah putaran loop benar searah arus riil |
| **Teorema Millman (Tegangan Cabang 2 Loop)** | $V_{AB} = \frac{\sum_{i} \frac{\mathcal{E}_i}{R_i + r_i}}{\sum_{i} \frac{1}{R_i + r_i}}$ | $V_{AB}$: beda potensial simpul bersama antara titik $A$ dan $B$ pada rangkaian 2 atau 3 loop paralel ($\text{Volt}$); $\mathcal{E}_i$: GGL pada cabang ke-$i$; $R_i + r_i$: total hambatan pada cabang ke-$i$ | Menghitung kuat arus seluruh cabang rangkaian 2 loop secara instan tanpa perlu substitusi eliminasi SPLDV |
| **Energi & Daya Disipasi Listrik** | $W = V \cdot I \cdot t = I^2 \cdot R \cdot t = \frac{V^2}{R} \cdot t$<br>$P = \frac{W}{t} = V \cdot I = I^2 \cdot R = \frac{V^2}{R}$ | $W$: energi listrik ($\text{Joule}$); $P$: daya listrik disipasi panas/cahaya ($\text{Watt}$); $t$: waktu pemakaian ($\text{s}$); $V$: tegangan ($\text{V}$); $I$: arus ($\text{A}$); $R$: hambatan ($\Omega$) | Satuan rekening PLN: $1\text{ kWh} = 1\text{ kiloWatt}\cdot\text{jam} = 1000\text{ W} \times 3600\text{ s} = 3{,}6 \times 10^6\text{ Joule}$ |
| **Perubahan Daya Lampu Tegangan Berbeda** | $P_2 = P_1 \left(\frac{V_2}{V_1}\right)^2$ | $P_1$: daya nominal lampu pada tegangan pabrik $V_1$ ($\text{Watt}$); $P_2$: daya nyata yang diserap lampu saat dipasang pada tegangan nyata $V_2$ ($\text{Watt}$) | Karena filamen lampu memiliki hambatan konstan ($R = \text{konstan}$), daya berbanding lurus dengan **kuadrat tegangan** ($P \propto V^2$) |
| **Teorema Transfer Daya Maksimum** | $R_L = r_{\text{dalam}} \implies P_{\max} = \frac{\mathcal{E}^2}{4 r_{\text{dalam}}}$ | $R_L$: resistansi beban luar rangkaian ($\Omega$); $r_{\text{dalam}}$: hambatan dalam sumber tegangan ($\Omega$); $P_{\max}$: daya disipasi maksimum yang dapat diserap beban luar ($\text{Watt}$) | Daya yang diserap beban luar bernilai maksimum jika nilai resistansi beban tepat sama dengan resistansi dalam sumber tegangan |
| **Perluasan Batas Ukur Amperemeter (Shunt)** | $R_{\text{sh}} = \frac{R_A}{n - 1}, \quad n = \frac{I}{I_A}$ | $R_{\text{sh}}$: hambatan shunt yang dipasang **paralel** dengan amperemeter ($\Omega$); $R_A$: hambatan dalam galvanometer amperemeter ($\Omega$); $n$: faktor kelipatan kenaikan batas ukur arus; $I$: batas ukur baru; $I_A$: batas ukur lama | Sebagian besar arus dialihkan melintasi resistor shunt paralel |
| **Perluasan Batas Ukur Voltmeter (Multiplier)** | $R_m = (n - 1) \cdot R_V, \quad n = \frac{V}{V_V}$ | $R_m$: hambatan multiplier depan yang dipasang **seri** dengan voltmeter ($\Omega$); $R_V$: hambatan dalam voltmeter ($\Omega$); $n$: faktor kelipatan batas ukur tegangan; $V$: batas tegangan baru; $V_V$: batas tegangan lama | Membagi tegangan sehingga kelebihan tegangan diserap oleh resistor multiplier seri |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Jangan lupa bahwa daya lampu berbanding lurus dengan **kuadrat tegangan ($V^2$)**, BUKAN berbanding lurus linier dengan $V$! Jika sebuah lampu $100\text{ W} / 220\text{ V}$ dipasang pada tegangan jala-jala yang drop separuh menjadi $110\text{ V}$, daya lampu BUKAN turun menjadi $50\text{ W}$, melainkan anjlok drastis menjadi:
>    $$P_2 = 100 \times \left(\frac{110}{220}\right)^2 = 100 \times \frac{1}{4} = 25\text{ Watt}$$
> 2. Kawat yang ditarik meregang hingga panjangnya menjadi 2 kali lipat ($L' = 2L$) hambatannya BUKAN menjadi 2 kali lipat, melainkan melonjak menjadi **$2^2 = 4\text{ kali lipat}$** karena luas penampangnya otomatis menyusut separuh ($A' = \frac{1}{2}A$)!

> [!TIP] Super Solusi Cepat:
> Untuk mencari kuat arus pada dua resistor paralel $R_1$ dan $R_2$, langsung gunakan formula pembagi arus:
> $$I_1 = \frac{R_2}{R_1 + R_2} I_{\text{total}} \quad \text{dan} \quad I_2 = \frac{R_1}{R_1 + R_2} I_{\text{total}}$$
> Resistor yang lebih kecil dialiri arus yang lebih besar secara terbalik!