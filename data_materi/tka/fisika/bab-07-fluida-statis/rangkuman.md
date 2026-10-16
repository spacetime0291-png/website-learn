# Rangkuman Rumus Cepat & Intisari Materi — Fluida Statis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Fluida statis menelaah perilaku mekanika zat alir (cairan dan gas) yang berada dalam keadaan diam setimbang tanpa pengaruh tegangan geser (*shear stress*). Besaran fisis kunci meliputi tekanan hidrostatis, hukum penerusan tekanan Pascal, gaya apung Archimedes, tegangan permukaan zat cair, gejala kapilaritas, dan viskositas fluida kental.

| Hukum / Prinsip Pokok | Landasan Fisis | Rumus Kunci | Aplikasi Nyata Soal TKA |
| :--- | :--- | :--- | :--- |
| **Hukum Pokok Hidrostatika** | Titik pada bidang datar sama di fluida homogen memiliki tekanan identik | $P_A = P_B \implies \rho_1 h_1 = \rho_2 h_2$ | Pipa U pengukur massa jenis minyak/cairan asing |
| **Hukum Pascal** | Tekanan eksternal diteruskan ke segala arah sama besar secara seragam | $\frac{F_1}{A_1} = \frac{F_2}{A_2} \implies F_2 = F_1 \left(\frac{D_2}{D_1}\right)^2$ | Dongkrak hidrolik mobil, rem hidrolik, mesin pengepres |
| **Hukum Archimedes** | Gaya apung ke atas sama dengan berat fluida yang dipindahkan | $F_A = \rho_f \cdot V_{\text{celup}} \cdot g$ | Kapal laut terapung, kapal selam, balon udara, hidrometer |
| **Hukum Stokes** | Gaya hambat gesekan fluida kental terhadap gerak benda bola pejal | $F_s = 6 \pi \eta r v$ | Kecepatan terminal tetes air hujan, viskometer bola jatuh |

---

### B. Matriks Rumus Utama & Penjelasan Komponen Variabel Lengkap
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Massa Jenis & Massa Jenis Campuran** | $\rho = \frac{m}{V}$<br>$\rho_c = \frac{m_1 + m_2}{V_1 + V_2} = \frac{\rho_1 V_1 + \rho_2 V_2}{V_1 + V_2}$ | $\rho$: massa jenis ($\text{kg/m}^3$); $m$: massa zat ($\text{kg}$); $V$: volume zat ($\text{m}^3$); $\rho_c$: massa jenis campuran fluida ($\text{kg/m}^3$) | Konversi penting: $1\text{ g/cm}^3 = 1000\text{ kg/m}^3$; massa jenis air murni $\rho_{\text{air}} = 1000\text{ kg/m}^3 = 1\text{ g/cm}^3$ |
| **Tekanan Hidrostatis** | $P_h = \rho_f \cdot g \cdot h$ | $P_h$: tekanan hidrostatis cairan ($\text{Pa} = \text{N/m}^2$); $\rho_f$: massa jenis fluida cair ($\text{kg/m}^3$); $g$: percepatan gravitasi bumi ($\text{m/s}^2$); $h$: kedalaman diukur dari permukaan atas cairan ($\text{m}$) | Tekanan hidrostatis hanya bergantung pada kedalaman vertikal $h$ dan massa jenis $\rho_f$, sama sekali tidak bergantung pada bentuk bejana wadah |
| **Tekanan Mutlak / Total** | $P_{\text{total}} = P_0 + P_h = P_0 + \rho_f g h$ | $P_{\text{total}}$: tekanan mutlak total pada dasar fluida ($\text{Pa}$); $P_0$: tekanan atmosfer udara luar pada permukaan ($1\text{ atm} = 1{,}013 \times 10^5\text{ Pa} \approx 10^5\text{ Pa} = 76\text{ cmHg}$) | Tekanan gauge adalah selisih antara tekanan mutlak dan tekanan atmosfer: $P_{\text{gauge}} = P_{\text{total}} - P_0 = \rho g h$ |
| **Hukum Pascal & Dongkrak Hidrolik** | $\frac{F_1}{A_1} = \frac{F_2}{A_2} \implies F_2 = F_1 \left(\frac{D_2}{D_1}\right)^2$ | $F_1$: gaya tekan masukan pada penampang kecil ($\text{N}$); $F_2$: gaya angkat beban pada penampang besar ($\text{N}$); $A_1, A_2$: luas penampang piston ($\text{m}^2$); $D_1, D_2$: diameter silinder piston ($\text{m}$) | Keuntungan mekanis gaya berbanding lurus dengan **kuadrat rasio diameter piston** ($F \propto D^2$) |
| **Hukum Archimedes: Gaya Apung** | $F_A = \rho_f \cdot V_{\text{celup}} \cdot g = w_{\text{fluida}}$ | $F_A$: gaya apung ke atas ($\text{N}$); $\rho_f$: massa jenis fluida sekitar ($\text{kg/m}^3$); $V_{\text{celup}}$: volume benda yang tercelup terbenam di dalam fluida ($\text{m}^3$); $g$: gravitasi ($\text{m/s}^2$) | $V_{\text{celup}}$ adalah volume fluida yang terdesak dipindahkan oleh benda |
| **Kondisi Benda Terapung** | $\rho_b < \rho_f$<br>$w = F_A \implies \frac{V_{\text{celup}}}{V_b} = \frac{\rho_b}{\rho_f}$ | $\rho_b$: massa jenis rata-rata benda padat ($\text{kg/m}^3$); $\rho_f$: massa jenis cairan ($\text{kg/m}^3$); $V_{\text{celup}}$: volume terbenam; $V_b$: volume total benda | Fraksi bagian benda yang muncul di atas permukaan cairan: $\frac{V_{\text{muncul}}}{V_b} = 1 - \frac{\rho_b}{\rho_f}$ |
| **Kondisi Benda Melayang** | $\rho_b = \rho_f \implies V_{\text{celup}} = V_b$ | $\rho_b, \rho_f$: massa jenis benda dan fluida identik; seluruh volume benda terbenam namun tidak menyentuh dasar wadah | Gaya apung tepat menyeimbangkan gaya berat benda di sembarang kedalaman ($F_A = w$) |
| **Kondisi Benda Tenggelam & Berat Semu** | $\rho_b > \rho_f$<br>$w' = w - F_A = (\rho_b - \rho_f) V_b g$ | $w'$: berat semu benda saat ditimbang di dalam fluida ($\text{N}$); $w = m g = \rho_b V_b g$: berat asli benda di udara ($\text{N}$); $F_A$: gaya apung Archimedes ($\text{N}$) | Benda tenggelam hingga menyentuh dasar bejana karena gaya berat melebihi gaya apung maksimumnya ($w > F_A$) |

---

### C. Tegangan Permukaan, Kapilaritas, & Viskositas Fluida Kental
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Tegangan Permukaan Kawat Film** | $\gamma = \frac{F}{d} = \frac{F}{2 L}$ | $\gamma$: koefisien tegangan permukaan zat cair ($\text{N/m}$); $F$: gaya tarik selaput cairan penahan kawat geser ($\text{N}$); $L$: panjang kawat geser ($\text{m}$); $d = 2L$: panjang keliling kontak karena selaput memiliki dua lapisan permukaan | Tegangan permukaan menyebabkan tetesan cairan berbentuk bola dan jarum dapat terapung di atas air |
| **Kenaikan / Penurunan Kapilaritas** | $h = \frac{2 \gamma \cos\theta}{\rho g r}$ | $h$: tinggi kenaikan/penurunan permukaan cairan dalam pipa kapiler ($\text{m}$); $\gamma$: tegangan permukaan ($\text{N/m}$); $\theta$: sudut kontak antara cairan dan dinding tabung ($^{\circ}$); $\rho$: massa jenis cairan ($\text{kg/m}^3$); $r$: jari-jari pipa kapiler ($\text{m}$) | $\theta < 90^{\circ}$ (air): meniskus cekung, cairan naik ($h > 0$). $\theta > 90^{\circ}$ (raksa): meniskus cembung, cairan turun ($h < 0$) |
| **Gaya Gesek Viskositas Stokes** | $F_s = 6 \pi \eta r v$ | $F_s$: gaya gesekan hambat fluida kental ($\text{N}$); $\eta$: koefisien viskositas dinamis fluida ($\text{Pa}\cdot\text{s} = \text{N}\cdot\text{s/m}^2$); $r$: jari-jari bola benda ($\text{m}$); $v$: kelajuan gerak bola relatif terhadap fluida ($\text{m/s}$) | Berlaku khusus untuk benda berbentuk bola bulat pejal licin yang bergerak dalam fluida laminer |
| **Kecepatan Terminal Bola Jatuh** | $v_t = \frac{2 r^2 g (\rho_b - \rho_f)}{9 \eta}$ | $v_t$: kecepatan terminal konstan saat gaya berat seimbang dengan gaya apung dan gaya Stokes ($\text{m/s}$); $\rho_b$: massa jenis bola pejal ($\text{kg/m}^3$); $\rho_f$: massa jenis fluida kental ($\text{kg/m}^3$); $r$: jari-jari bola ($\text{m}$) | Kondisi kesetimbangan gaya saat mencapai kelajuan terminal maksimum: $\Sigma F = 0 \implies w = F_A + F_s$ |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Kedalaman $h$ pada rumus tekanan hidrostatis ($P_h = \rho g h$) **WAJIB diukur dari permukaan atas cairan ke bawah**, BUKAN dari dasar bejana ke atas!
> 2. Pada benda terapung, fraksi volume yang tercelup terbenam merepresentasikan rasio massa jenis benda terhadap cairan:
>    $$\frac{V_{\text{celup}}}{V_{\text{total}}} = \frac{\rho_{\text{benda}}}{\rho_{\text{fluida}}}$$
>    Jika sebuah gunung es terapung dengan $90\%$ volumenya terbenam di air laut, maka massa jenis gunung es tersebut tepat $0{,}9$ kali massa jenis air laut!

> [!TIP] Super Solusi Cepat:
> Pada pipa U yang berisi dua cairan tak bercampur (misal air dan minyak), langsung gunakan persamaan seimbang hidrostatis:
> $$\rho_1 \cdot h_1 = \rho_2 \cdot h_2 \implies h_{\text{minyak}} = \frac{\rho_{\text{air}}}{\rho_{\text{minyak}}} \cdot h_{\text{air}}$$