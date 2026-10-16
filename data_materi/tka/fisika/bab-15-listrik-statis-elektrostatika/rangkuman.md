# Rangkuman Rumus Cepat & Intisari Materi — Listrik Statis (Elektrostatika)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Elektrostatika mempelajari sifat-sifat interaksi muatan listrik stasioner dalam keadaan diam seimbang. Interaksi gaya Coulomb dan kuat medan listrik merupakan besaran vektor (arah garis medan diperhitungkan analitis), sedangkan potensial listrik dan energi potensial listrik merupakan besaran skalar (tanda muatan positif/negatif wajib diikutsertakan langsung dalam aljabar penjumlahan).

| Besaran Elektrostatik | Karakter Vektor/Skalar | Formula Fundamental | Satuan SI | Aturan Tanda Muatan ($+/-$) |
| :--- | :--- | :--- | :--- | :--- |
| **Gaya Coulomb** | **Besaran Vektor** | $F = k \frac{\vert q_1 q_2 \vert}{r^2}$ | Newton ($\text{N}$) | Tanda $+/-$ hanya menentukan tarik-menarik atau tolak-menolak; jangan masukkan minus ke rumus |
| **Kuat Medan Listrik** | **Besaran Vektor** | $E = k \frac{\vert Q \vert}{r^2}$ | $\text{N/C}$ atau $\text{V/m}$ | Menjauhi muatan positif ($+$), mendekati muatan negatif ($-$) |
| **Potensial Listrik** | **Besaran Skalar** | $V = k \frac{q}{r}$ | $\text{Volt} = \text{J/C}$ | Tanda $+/-$ **WAJIB dimasukkan** ke dalam perhitungan penjumlahan aljabar |
| **Energi Potensial Listrik** | **Besaran Skalar** | $EP = k \frac{q_1 q_2}{r} = q V$ | Joule ($\text{J}$) | Tanda $+/-$ **WAJIB dimasukkan** ke dalam perhitungan perkalian muatan |

---

### B. Matriks Rumus Utama Interaksi Muatan & Hukum Gauss
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Hukum Coulomb (Gaya Elektrostatik)** | $F = k \frac{\vert q_1 q_2 \vert}{r^2}$<br>$k = \frac{1}{4\pi \varepsilon_0} \approx 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$ | $F$: gaya elektrostatik Coulomb ($\text{N}$); $q_1, q_2$: besar muatan titik ($\text{Coulomb}$); $r$: jarak pisah antar pusat muatan ($\text{m}$); $\varepsilon_0$: permitivitas listrik vakum ($8{,}85 \times 10^{-12}\text{ C}^2/\text{N}\cdot\text{m}^2$) | Tolak-menolak jika muatan sejenis ($+/+$ atau $-/-$); tarik-menarik jika berlawanan jenis ($+/-$) |
| **Gaya dalam Medium Dielektrik** | $F_{\text{medium}} = \frac{F_{\text{vakum}}}{\varepsilon_r} = \frac{F_{\text{vakum}}}{\kappa}$ | $F_{\text{medium}}$: gaya Coulomb di dalam medium zat cair/minyak ($\text{N}$); $\varepsilon_r = \kappa$: permitivitas relatif / konstanta dielektrik medium ($kappa \ge 1$) | Keberadaan bahan dielektrik selalu memperkecil gaya elektrostatik Coulomb antar muatan |
| **Kuat Medan Listrik Muatan Titik** | $\vec{E} = \frac{\vec{F}}{q} = k \frac{\vert Q \vert}{r^2}$ | $E$: kuat medan listrik ($\text{N/C}$ atau $\text{V/m}$); $Q$: muatan sumber pembuat medan ($\text{C}$); $r$: jarak titik uji terhadap muatan sumber ($\text{m}$) | Garis gaya listrik keluar radial dari muatan $(+)$ dan masuk radial menuju muatan $(-)$ |
| **Fluks Listrik & Hukum Gauss** | $\Phi = \vec{E} \cdot \vec{A} = E \cdot A \cos\theta = \frac{q_{\text{dalam}}}{\varepsilon_0}$ | $\Phi$: fluks garis medan listrik ($\text{Wb} = \text{N}\cdot\text{m}^2/\text{C}$); $E$: kuat medan listrik ($\text{N/C}$); $A$: luas permukaan tertutup Gauss ($\text{m}^2$); $\theta$: sudut antara arah garis medan dengan garis normal permukaan ($^{\circ}$); $q_{\text{dalam}}$: total muatan bersih di dalam kurungan permukaan Gauss ($\text{C}$) | Jika garis medan sejajar garis normal tegak lurus bidang permukaan ($\theta = 0^{\circ}$), $\Phi = E \cdot A$ |
| **Medan Listrik Keping Sejajar** | $E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{A \cdot \varepsilon_0}$ | $\sigma = \frac{Q}{A}$: rapat muatan permukaan keping ($\text{C/m}^2$); $Q$: muatan pada keping ($\text{C}$); $A$: luas keping logam ($\text{m}^2$) | Medan listrik di antara kedua keping sejajar bersifat homogen (seragam di setiap titik) |
| **Titik Medan Listrik Nol (Dua Muatan Sejenis)** | $x = \frac{\sqrt{q_1}}{\sqrt{q_1} + \sqrt{q_2}} d$ | $x$: jarak letak titik bernilai $E_{\text{total}} = 0$ diukur dari muatan $q_1$ ($\text{m}$); $d$: jarak pisah kedua muatan ($\text{m}$) | Untuk muatan sejenis ($+/+$ atau $-/-$), titik medan nol **pasti berada di antara kedua muatan** |
| **Titik Medan Listrik Nol (Dua Muatan Berlawanan)** | $x = \frac{\sqrt{\vert q_1 \vert}}{\vert \sqrt{\vert q_2 \vert} - \sqrt{\vert q_1 \vert} \vert} d$ | $q_1$: muatan yang memiliki nilai mutlak lebih kecil ($\vert q_1 \vert < \vert q_2 \vert$) | Titik medan nol **pasti berada di luar garis hubung**, terletak di dekat muatan yang nilai mutlaknya lebih kecil |

---

### C. Potensial, Bola Konduktor, & Kapasitor Keping Sejajar
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Potensial Listrik Skalar** | $V = \Sigma k \frac{q_i}{r_i} = k \left(\frac{q_1}{r_1} + \frac{q_2}{r_2} + \dots\right)$ | $V$: potensial listrik total pada suatu titik ($\text{Volt}$); $q$: muatan listrik (tanda $+/-$ wajib dihitung langsung); $r$: jarak muatan ke titik ($\text{m}$) | Potensial listrik bernilai nol ($V = 0$) jika jumlah aljabar suku positif meniadakan suku negatif |
| **Usaha Memindahkan Muatan & Energi** | $W_{A \to B} = q \cdot \Delta V = q (V_B - V_A) = \Delta EK$ | $W_{A \to B}$: usaha luar memindahkan muatan uji $q$ dari titik $A$ ke $B$ ($\text{Joule}$); $\Delta V$: beda potensial listrik ($\text{Volt}$); $\Delta EK$: perubahan energi kinetik partikel ($\text{J}$) | Hubungan usaha konservatif medan listrik: lintasan pemindahan muatan tidak mempengaruhi nilai usaha |
| **Bola Konduktor Berongga Bermuatan** | Di dalam bola ($r < R$): $E = 0, \quad V = k \frac{Q}{R}$<br>Di kulit bola ($r = R$): $E = k \frac{Q}{R^2}, \quad V = k \frac{Q}{R}$<br>Di luar bola ($r > R$): $E = k \frac{Q}{r^2}, \quad V = k \frac{Q}{r}$ | $R$: jari-jari bola konduktor ($\text{m}$); $r$: jarak titik uji diukur dari pusat inti bola ($\text{m}$); $Q$: muatan total bola yang tersebar merata di permukaan kulit luar konduktor ($\text{C}$) | Di dalam rongga bola tidak ada garis medan ($E = 0$), sehingga seluruh rongga memiliki **potensial listrik konstan seragam yang sama persis dengan potensial di permukaan kulitnya** (bidang ekipotensial) |
| **Kapasitansi Kapasitor Keping Sejajar** | $C = \frac{Q}{V} = \varepsilon_r \varepsilon_0 \frac{A}{d}$ | $C$: kapasitas kapasitor ($\text{Farad} = \text{C/V}$); $Q$: muatan keping ($\text{C}$); $V$: beda potensial kedua keping ($\text{Volt}$); $A$: luas penampang keping ($\text{m}^2$); $d$: jarak pisah antarkeping ($\text{m}$); $\varepsilon_r$: konstanta dielektrik bahan pengisi | Kapasitas diperbesar dengan: memperluas keping ($A$), mempersempit celah ($d$), dan memasukkan zat dielektrik (mika, keramik) |
| **Energi Tersimpan pada Kapasitor** | $W = \frac{1}{2} C V^2 = \frac{1}{2} Q V = \frac{1}{2} \frac{Q^2}{C}$ | $W$: energi potensial elektrostatik yang tersimpan di dalam medan dielektrik kapasitor ($\text{Joule}$) | Diturunkan dari integrasi pengisian muatan: $W = \int V dQ$ |
| **Susunan Kapasitor Seri** | $\frac{1}{C_s} = \frac{1}{C_1} + \frac{1}{C_2} + \dots$<br>$Q_{\text{total}} = Q_1 = Q_2 = \dots$<br>$V_{\text{total}} = V_1 + V_2 + \dots$ | $C_s$: kapasitas ekuivalen pengganti seri ($\text{Farad}$); muatan yang tersimpan pada setiap kapasitor seri **pasti sama besar** | Membagi tegangan listrik; kapasitas total seri selalu lebih kecil dibanding kapasitas terkecil komponennya |
| **Susunan Kapasitor Paralel** | $C_p = C_1 + C_2 + \dots$<br>$V_{\text{total}} = V_1 = V_2 = \dots$<br>$Q_{\text{total}} = Q_1 + Q_2 + \dots$ | $C_p$: kapasitas pengganti paralel ($\text{Farad}$); beda potensial tegangan pada setiap cabang paralel **pasti sama besar** | Memperbesar kapasitas muatan total penyimpanan energi |
| **Kapasitor Dilepas Baterai vs Terhubung Baterai** | Baterai Dilepas: Muatan konstan ($Q = \text{konstan}$)<br>Baterai Terhubung: Tegangan konstan ($V = \text{konstan}$) | Jika disisipkan dielektrik ($\varepsilon_r > 1$):<br>1. Dilepas: $C$ naik, $Q$ tetap, $V = \frac{Q}{C}$ turun, $W$ turun<br>2. Terhubung: $C$ naik, $V$ tetap, $Q = C V$ naik, $W$ naik | Konsep esensial analisis kondisi dielektrik soal HOTS TKA |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Jangan memasukkan tanda negatif muatan ke rumus Gaya Coulomb ($F$) atau Medan Listrik ($E$)! Keduanya adalah **besaran vektor**, sehingga tanda muatan hanya digunakan untuk memetakan arah anak panah gaya/medan. Namun tanda $+/-$ **WAJIB dimasukkan** pada rumus Potensial Listrik ($V$) dan Energi Potensial ($EP$) karena keduanya adalah **besaran skalar**.
> 2. Pada bola konduktor berongga, kuat medan listrik di dalam bola adalah **NOL ($E = 0$)**, tetapi potensial listrik di dalam rongga **TIDAK NOL**, melainkan sama dengan potensial di permukaan kulitnya: $V = k \frac{Q}{R}$!

> [!TIP] Super Solusi Cepat:
> Untuk dua kapasitor seri $C_1$ dan $C_2$, kapasitas pengganti langsung dihitung:
> $$C_s = \frac{C_1 \cdot C_2}{C_1 + C_2}$$
> Dan muatan pada kedua kapasitor pasti identik sama besar!