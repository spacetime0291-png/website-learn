# Rangkuman Rumus Cepat & Intisari Materi — Dinamika Rotasi dan Kesetimbangan Benda Tegar
**Kategori:** TKA Fisika | **Pembungkus:** Dinamika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Dinamika rotasi menganalisis gerakan melingkar benda tegar terhadap sumbu poros di bawah pengaruh resultan momen gaya (torsi). Momen inersia merefleksikan kelembaman distribusi massa relatif terhadap poros putar. Benda tegar berada dalam kondisi kesetimbangan statis sempurna jika memenuhi syarat kesetimbangan translasi sekaligus kesetimbangan rotasi.

| Konsep Dinamika | Analogi Translasi Linier | Formula Rotasi Benda Tegar | Satuan SI | Makna Fisis & Karakteristik |
| :--- | :--- | :--- | :--- | :--- |
| **Penyebab Gerak** | Gaya: $\vec{F}$ | Momen Gaya (Torsi): $\vec{\tau} = \vec{r} \times \vec{F}$ | $\text{N}\cdot\text{m}$ | Kecenderungan gaya untuk memutar benda terhadap poros engsel |
| **Kelembaman Sistem** | Massa Inersia: $m$ | Momen Inersia: $I = \Sigma m_i r_i^2 = k M R^2$ | $\text{kg}\cdot\text{m}^2$ | Kelembaman benda terhadap perubahan kecepatan putar sudut |
| **Hukum II Dinamika** | $\Sigma F = m \cdot a$ | $\Sigma \tau = I \cdot \alpha$ | $\text{N}\cdot\text{m}$ | Resultan torsi menghasilkan percepatan sudut anguler $\alpha$ |
| **Kuantitas Gerak** | Momentum: $p = m \cdot v$ | Momentum Sudut: $L = I \cdot \omega$ | $\text{kg}\cdot\text{m}^2/\text{s}$ | Bersifat kekal jika tidak ada resultan torsi luar ($\Sigma \tau_{\text{eksternal}} = 0$) |
| **Energi Kinetik** | $EK_{\text{trans}} = \frac{1}{2} m v^2$ | $EK_{\text{rot}} = \frac{1}{2} I \omega^2$ | $\text{Joule}$ | Energi yang dimiliki partikel atau benda tegar yang sedang berputar |

---

### B. Matriks Rumus Utama Momen Gaya & Momen Inersia Benda Simetris
| Sub-Materi / Bentuk Geometri | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan & Konstanta Inersia ($k$) |
| :--- | :--- | :--- | :--- |
| **Momen Gaya / Torsi ($\tau$)** | $\tau = r \cdot F \sin\theta = F \cdot d$ | $\tau$: besar momen gaya torsi ($\text{N}\cdot\text{m}$); $r$: jarak dari poros ke titik tangkap gaya ($\text{m}$); $F$: besar gaya luar pemutar ($\text{N}$); $\theta$: sudut antara lengan $r$ dan vektor gaya $F$ ($^{\circ}$); $d = r \sin\theta$: lengan momen tegak lurus ($\text{m}$) | Aturan tanda konvensional: torsi bertanda $(+)$ jika memutar berlawanan arah jarum jam (CCW), bertanda $(-)$ jika searah jarum jam (CW) |
| **Momen Inersia Partikel Titik** | $I = \Sigma m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + \dots$ | $I$: momen inersia total sistem partikel ($\text{kg}\cdot\text{m}^2$); $m_i$: massa partikel ke-$i$ ($\text{kg}$); $r_i$: jarak tegak lurus partikel ke sumbu poros putar ($\text{m}$) | Jarak $r$ diukur tegak lurus langsung menuju sumbu rotasi |
| **Teorema Sumbu Sejajar** | $I = I_{\text{pm}} + M d^2$ | $I$: momen inersia pada sumbu sejajar baru berjarak $d$ ($\text{kg}\cdot\text{m}^2$); $I_{\text{pm}}$: momen inersia terhadap sumbu pusat massa ($\text{kg}\cdot\text{m}^2$); $M$: massa total benda ($\text{kg}$); $d$: pergeseran jarak antar sumbu sejajar ($\text{m}$) | Momen inersia terhadap poros pusat massa selalu merupakan nilai minimum |
| **Batang Silinder Homogen** | Poros Pusat Massa: $I = \frac{1}{12} M L^2$<br>Poros Ujung Batang: $I = \frac{1}{3} M L^2$ | $M$: massa total batang homogen ($\text{kg}$); $L$: panjang total batang silinder ($\text{m}$) | Diputar di tengah ($k = \frac{1}{12}$); diputar di salah satu ujung engsel ($k = \frac{1}{3}$) |
| **Silinder Pejal / Cakram Roda** | $I = \frac{1}{2} M R^2$ | $M$: massa silinder pejal ($\text{kg}$); $R$: jari-jari silinder ($\text{m}$) | Konstanta inersia $k = 0{,}5$ |
| **Silinder Tipis Berongga / Cincin** | $I = M R^2$ | $M$: massa silinder ($\text{kg}$); $R$: jari-jari cincin/silinder ($\text{m}$) | Seluruh massa terkonsentrasi di tepi luar ($k = 1{,}0$) |
| **Bola Pejal Homogen** | $I = \frac{2}{5} M R^2$ | $M$: massa bola pejal ($\text{kg}$); $R$: jari-jari bola pejal ($\text{m}$) | Poros melalui titik pusat bola ($k = 0{,}4$) |
| **Bola Tipis Berongga (Kulit Bola)** | $I = \frac{2}{3} M R^2$ | $M$: massa kulit bola berongga ($\text{kg}$); $R$: jari-jari bola ($\text{m}$) | Poros melalui diameter pusat rongga ($k = \frac{2}{3} \approx 0{,}67$) |

---

### C. Gerak Menggelinding Murni & Kesetimbangan Statis Benda Tegar
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Energi Kinetik Menggelinding** | $EK_{\text{total}} = EK_{\text{trans}} + EK_{\text{rot}}$<br>$EK_{\text{total}} = \frac{1}{2} m v^2 (1 + k)$ | $EK_{\text{total}}$: energi kinetik total benda menggelinding murni ($\text{J}$); $m$: massa benda ($\text{kg}$); $v$: kelajuan translasi pusat massa ($\text{m/s}$); $k$: konstanta bentuk momen inersia ($I = k m R^2$) | Menggelinding murni memadukan translasi linier dan rotasi tanpa slip ($v = \omega R$) |
| **Percepatan Menggelinding di Bidang Miring** | $a = \frac{g \sin\theta}{1 + k}$ | $a$: percepatan translasi turun pusat massa ($\text{m/s}^2$); $g$: gravitasi ($\text{m/s}^2$); $\theta$: sudut kemiringan bidang ($^{\circ}$); $k$: konstanta inersia | Benda dengan nilai $k$ lebih kecil memiliki percepatan menggelinding lebih besar |
| **Kelajuan di Dasar Bidang Miring** | $v = \sqrt{\frac{2 g h}{1 + k}}$ | $v$: kelajuan pusat massa saat tiba di dasar bidang miring ($\text{m/s}$); $h$: beda ketinggian vertikal bidang miring ($\text{m}$); $k$: konstanta inersia | Diturunkan dari Hukum Kekekalan Energi Mekanik ($mgh = \frac{1}{2}mv^2(1+k)$) |
| **Gaya Gesek Statis Menggelinding** | $f_s = \frac{k}{1 + k} m g \sin\theta$ | $f_s$: gaya gesek statis penahan slip agar benda menggelinding sempurna ($\text{N}$) | Syarat tidak tergelincir slip: $\mu_s \ge \frac{k}{1+k} \tan\theta$ |
| **Kekekalan Momentum Sudut** | $\Sigma \tau_{\text{luar}} = 0 \implies I_1 \omega_1 = I_2 \omega_2$ | $I_1, I_2$: momen inersia awal dan akhir ($\text{kg}\cdot\text{m}^2$); $\omega_1, \omega_2$: kecepatan sudut putar awal dan akhir ($\text{rad/s}$) | Contoh: Penari balet merapatkan tangan ($I_2 < I_1$), maka putaran melesat lebih cepat ($\omega_2 > \omega_1$) |
| **Syarat Kesetimbangan Statis Sempurna** | $\Sigma F_x = 0, \quad \Sigma F_y = 0$<br>$\Sigma \tau_{\text{poros}} = 0$ | $\Sigma F$: resultan gaya translasi pada sumbu $X$ dan $Y$ bernilai nol; $\Sigma \tau$: resultan torsi terhadap titik poros manapun bernilai nol | Benda tegar tidak bergeser (translasi) dan tidak berputar (rotasi) |
| **Tangga Bersandar Dinding Licin Lantai Kasar** | $\mu_s = \frac{1}{2 \tan\theta}$ | $\mu_s$: koefisien gesek statis minimum lantai agar tangga tepat tidak slip; $\theta$: sudut kemiringan tangga terhadap lantai horizontal ($^{\circ}$) | Dinding licin vertikal tanpa gesekan ($f_{\text{dinding}} = 0$); tangga homogen dengan titik berat di tengah panjangnya |
| **Titik Berat Gabungan Luasan Bidang (2D)** | $x_0 = \frac{\Sigma A_i x_i}{\Sigma A_i}, \quad y_0 = \frac{\Sigma A_i y_i}{\Sigma A_i}$ | $x_0, y_0$: koordinat titik berat gabungan ($\text{m}$); $A_i$: luas penampang bagian ke-$i$ ($\text{m}^2$); $x_i, y_i$: letak titik berat masing-masing komponen luasan ($\text{m}$) | Letak titik berat bidang simetris penting:<br>Segitiga: $y = \frac{1}{3} t$ dari alas<br>Setengah lingkaran pejal: $y = \frac{4R}{3\pi}$ dari diameter |
| **Sistem Katrol Bermassa Silinder Pejal** | $a = \frac{m_2 - m_1}{m_1 + m_2 + \frac{1}{2}M} g$ | $m_1, m_2$: massa beban gantung ($m_2 > m_1$, $\text{kg}$); $M$: massa katrol silinder pejal ($k = 0{,}5$, $\text{kg}$); $a$: percepatan sistem ($\text{m/s}^2$) | Inersia katrol memperlambat percepatan sistem sebesar tambahan $\frac{1}{2}M$ pada penyebut massa total |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Pada balapan menggelinding menuruni bidang miring dari ketinggian yang sama, benda yang tiba di dasar **paling cepat** adalah benda dengan nilai konstanta inersia $k$ **PALING KECIL**, bebas dari massa ($M$) dan jari-jarinya ($R$)!
>    Urutan kedatangan di dasar:
>    $$\text{Bola Pejal } (k=0{,}4) > \text{Silinder Pejal } (k=0{,}5) > \text{Bola Berongga } (k=0{,}67) > \text{Silinder Berongga } (k=1{,}0)$$
> 2. Pada kesetimbangan tangga, lengan gaya berat batang tangga diukur terhadap poros di lantai secara mendatar, yaitu setengah jarak dasar tangga ke dinding: $d = \frac{1}{2} L \cos\theta$, bukan panjang tangga!

> [!TIP] Super Solusi Cepat:
> Jika sebuah tangga homogen bersandar pada dinding licin dan tepat akan tergelincir slip saat membentuk sudut $\theta$ terhadap lantai datar, langsung gunakan rumus kilat:
> $$\mu_s = \frac{1}{2 \tan\theta}$$