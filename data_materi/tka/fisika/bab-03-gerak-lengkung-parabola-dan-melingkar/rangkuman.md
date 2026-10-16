# Rangkuman Rumus Cepat & Intisari Materi — Gerak Lengkung (Parabola dan Melingkar)
**Kategori:** TKA Fisika | **Pembungkus:** Kinematika | **Pendekatan:** Kurikulum 2013 Revisi & Kurikulum Merdeka

### A. Intisari Konsep & Peta Definisi
Gerak lengkung merupakan gerak partikel pada lintasan dua dimensi. Gerak Parabola (proyektil) memadukan GLB pada sumbu mendatar ($X$) dengan GLBB gravitasi pada sumbu vertikal ($Y$). Gerak Melingkar Beraturan (GMB) mempertahankan kelajuan linier konstan namun arah kecepatan linier selalu berubah akibat percepatan sentripetal menuju pusat lingkaran.

| Bentuk Gerak Lengkung | Komponen Sumbu Datar / Linier | Komponen Sumbu Vertikal / Anguler | Gaya Pengarah & Karakteristik |
| :--- | :--- | :--- | :--- |
| **Gerak Parabola (Proyektil)** | GLB konstan ($a_x = 0$, $v_x = v_{0x}$) | GLBB diperlambat/dipercepat ($a_y = -g$) | Hanya gaya gravitasi ke bawah; gesekan udara diabaikan |
| **Gerak Melingkar Beraturan (GMB)** | Kelajuan linier konstan ($v = \text{konstan}$) | Kelajuan sudut konstan ($\omega = \text{konstan}$, $\alpha = 0$) | Gaya sentripetal ($F_s$) tegak lurus kecepatan linier mengarah ke pusat putaran |
| **Gerak Melingkar Berubah Beraturan (GMBB)** | Percepatan tangensial ada ($a_t = \alpha R$) | Percepatan sudut ada ($\alpha = \text{konstan} \neq 0$) | Resultan percepatan total paduan sentripetal dan tangensial: $a_{\text{tot}} = \sqrt{a_s^2 + a_t^2}$ |

---

### B. Matriks Rumus Kinematika Gerak Parabola (Proyektil)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Kecepatan Awal Komponen** | $v_{0x} = v_0 \cos\theta$<br>$v_{0y} = v_0 \sin\theta$ | $v_0$: kelajuan awal tembakan peluru ($\text{m/s}$); $\theta$: sudut elevasi terhadap sumbu horizontal ($^{\circ}$); $v_{0x}$: kecepatan awal sumbu $X$ ($\text{m/s}$); $v_{0y}$: kecepatan awal sumbu $Y$ ($\text{m/s}$) | Sudut istimewa: $\sin 37^{\circ} = \cos 53^{\circ} = 0{,}6$; $\cos 37^{\circ} = \sin 53^{\circ} = 0{,}8$; $\sin 30^{\circ} = 0{,}5$; $\sin 45^{\circ} = \frac{1}{2}\sqrt{2}$ |
| **Posisi Horizontal (Sumbu X - GLB)** | $x(t) = v_{0x} \cdot t = (v_0 \cos\theta) \cdot t$ | $x(t)$: posisi mendatar sesaat benda ($\text{m}$); $v_{0x}$: kecepatan mendatar konstan ($\text{m/s}$); $t$: waktu tempuh ($\text{s}$) | Kecepatan mendatar selalu konstan di setiap titik lintasan: $v_x(t) = v_{0x}$ |
| **Posisi Vertikal (Sumbu Y - GLBB)** | $y(t) = (v_0 \sin\theta) t - \frac{1}{2} g t^2$<br>$v_y(t) = v_0 \sin\theta - g t$ | $y(t)$: ketinggian vertikal sesaat benda ($\text{m}$); $v_y(t)$: kecepatan vertikal sesaat pada detik $t$ ($\text{m/s}$); $g$: gravitasi ($\text{m/s}^2$); $t$: waktu ($\text{s}$) | Kecepatan vertikal berkurang saat naik, bernilai nol di puncak, dan berbalik negatif saat turun |
| **Kelajuan & Arah Vektor Sesaat** | $v = \sqrt{v_x^2 + v_y^2}$<br>$\tan\alpha = \frac{v_y}{v_x}$ | $v$: kelajuan sesaat partikel peluru ($\text{m/s}$); $v_x, v_y$: komponen kecepatan sesaat ($\text{m/s}$); $\alpha$: sudut kemiringan arah gerak terhadap sumbu horizontal ($^{\circ}$) | Di titik puncak lintasan, $v_y = 0$, sehingga kelajuan benda bernilai minimum: $v_{\text{puncak}} = v_x = v_0 \cos\theta$ |
| **Titik Tertinggi (Puncak Ketinggian)** | $t_p = \frac{v_0 \sin\theta}{g}$<br>$h_{\max} = \frac{v_0^2 \sin^2\theta}{2 g}$ | $t_p$: durasi waktu mencapai titik tertinggi ($\text{s}$); $h_{\max}$: ketinggian maksimum puncak dari tanah ($\text{m}$); $v_0$: kelajuan awal ($\text{m/s}$); $g$: gravitasi ($\text{m/s}^2$) | Syarat titik tertinggi: kecepatan vertikal tepat sama dengan nol ($v_y = 0$) |
| **Titik Terjauh (Jangkauan Maksimum)** | $t_{\text{total}} = \frac{2 v_0 \sin\theta}{g} = 2 t_p$<br>$X_{\max} = \frac{v_0^2 \sin 2\theta}{g}$ | $t_{\text{total}}$: durasi melayang total di udara sampai tanah kembali ($\text{s}$); $X_{\max}$: jarak mendatar terjauh ($\text{m}$); $\sin 2\theta = 2 \sin\theta \cos\theta$ | Jangkauan maksimum terbesar tercapai saat sudut elevasi $\theta = 45^{\circ}$ ($\sin 90^{\circ} = 1 \implies X_{\max} = \frac{v_0^2}{g}$) |
| **Teorema Sudut Komplementer** | $X_{\max}(\theta_1) = X_{\max}(\theta_2)$ jika $\theta_1 + \theta_2 = 90^{\circ}$ | $\theta_1, \theta_2$: dua sudut elevasi yang saling berkomplemen berjumlah $90^{\circ}$ (misal: $30^{\circ}$ dan $60^{\circ}$, atau $37^{\circ}$ dan $53^{\circ}$) | Menghasilkan jangkauan mendatar yang persis identik, namun sudut yang lebih besar mencapai puncak lebih tinggi |
| **Hubungan Tinggi Puncak & Jangkauan** | $\tan\theta = \frac{4 h_{\max}}{X_{\max}}$ | $\theta$: sudut elevasi tembakan ($^{\circ}$); $h_{\max}$: tinggi maksimum ($\text{m}$); $X_{\max}$: jarak mendatar terjauh ($\text{m}$) | Shortcut ampuh menghubungkan tinggi puncak dan jangkauan terjauh tanpa memerlukan $v_0$ dan $g$ |
| **Tembakan Mendatar dari Meja ($v_{0y} = 0$)** | $t = \sqrt{\frac{2h}{g}}$<br>$X = v_0 \sqrt{\frac{2h}{g}}$ | $h$: tinggi meja / tebing pelepasan ($\text{m}$); $v_0$: kelajuan awal mendatar murni ($\text{m/s}$); $X$: jarak mendatar peluru tiba di lantai ($\text{m}$) | Waktu jatuh sama persis dengan waktu gerak jatuh bebas dari ketinggian $h$ |

---

### C. Matriks Rumus Gerak Melingkar (GMB, GMBB & Roda-Roda)
| Sub-Materi / Topik | Persamaan / Formula Matematis | Penjelasan Komponen Rumus & Satuan SI | Keterangan Fisis & Kaidah Cepat |
| :--- | :--- | :--- | :--- |
| **Besaran Pokok Sudut & Frekuensi** | $T = \frac{t}{n} = \frac{1}{f}$<br>$f = \frac{n}{t} = \frac{1}{T}$<br>$\omega = \frac{2\pi}{T} = 2\pi f$ | $T$: periode putaran ($\text{s}$); $f$: frekuensi putaran ($\text{Hz} = \text{s}^{-1}$); $n$: banyak putaran; $t$: waktu total ($\text{s}$); $\omega$: kecepatan sudut anguler ($\text{rad/s}$) | Konversi satuan putaran: $1\text{ rpm} = \frac{2\pi}{60}\text{ rad/s} = \frac{\pi}{30}\text{ rad/s}$; $1\text{ putaran} = 2\pi\text{ rad} = 360^{\circ}$ |
| **Hubungan Linier dan Anguler** | $s = \theta \cdot R$<br>$v = \omega \cdot R$ | $s$: panjang busur lintasan ($\text{m}$); $\theta$: posisi sudut ($\text{rad}$); $R$: jari-jari lingkaran ($\text{m}$); $v$: kelajuan linier tangensial ($\text{m/s}$) | Kecepatan sudut sama untuk setiap titik pada piringan pejal yang sama |
| **Percepatan & Gaya Sentripetal** | $a_s = \frac{v^2}{R} = \omega^2 R$<br>$F_s = m a_s = \frac{m v^2}{R} = m \omega^2 R$ | $a_s$: percepatan sentripetal ($\text{m/s}^2$); $F_s$: gaya sentripetal ($\text{N}$); $m$: massa partikel pemutar ($\text{kg}$); $v$: kelajuan linier ($\text{m/s}$); $R$: jari-jari putar ($\text{m}$) | Vektor gaya sentripetal selalu tegak lurus kecepatan linier dan berarah menuju titik pusat lingkaran |
| **GMBB: Tiga Rumus Pokok Sudut** | $\omega_t = \omega_0 + \alpha t$<br>$\theta = \omega_0 t + \frac{1}{2} \alpha t^2$<br>$\omega_t^2 = \omega_0^2 + 2 \alpha \theta$ | $\omega_t$: kecepatan sudut akhir saat detik $t$ ($\text{rad/s}$); $\omega_0$: kecepatan sudut awal ($\text{rad/s}$); $\alpha$: percepatan sudut konstan ($\text{rad/s}^2$); $\theta$: sudut tempuh ($\text{rad}$) | Analog matematis sempurna dengan GLBB: $v \leftrightarrow \omega$, $a \leftrightarrow \alpha$, $s \leftrightarrow \theta$ |
| **Percepatan Tangensial & Total** | $a_t = \alpha \cdot R$<br>$a_{\text{total}} = \sqrt{a_s^2 + a_t^2}$ | $a_t$: percepatan tangensial penambah kelajuan ($\text{m/s}^2$); $\alpha$: percepatan sudut ($\text{rad/s}^2$); $a_{\text{total}}$: resultan percepatan partikel pada GMBB ($\text{m/s}^2$) | $a_s$ tegak lurus $a_t$. $a_s$ mengubah arah gerak, sedangkan $a_t$ mengubah besar kelajuan |
| **Roda Seporos (Seaksial / Satu Poros)** | $\omega_A = \omega_B \implies \frac{v_A}{R_A} = \frac{v_B}{R_B}$ | $\omega_A, \omega_B$: kecepatan sudut kedua roda ($\text{rad/s}$); $v_A, v_B$: kelajuan linier tepi roda ($\text{m/s}$); $R_A, R_B$: jari-jari roda ($\text{m}$) | Arah putaran kedua roda selalu searah (seporos putar bersama) |
| **Roda Bersinggungan / Sabuk Rantai** | $v_A = v_B \implies \omega_A R_A = \omega_B R_B$ | $v_A, v_B$: kelajuan linier tepi roda ($\text{m/s}$); $R_A, R_B$: jari-jari roda ($\text{m}$) | Bersinggungan langsung: arah putaran berlawanan. Dihubungkan sabuk/rantai: arah putaran searah |

---

### D. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> 1. Di titik tertinggi gerak parabola, percepatan partikel **TIDAK NOL**, melainkan tetap sebesar percepatan gravitasi bumi ($a = g = 10\text{ m/s}^2$) berarah lurus ke bawah! Yang bernilai nol hanya kecepatan vertikalnya ($v_y = 0$).
> 2. Pada hubungan roda bersinggungan luar, kecepatan sudut roda berbanding terbalik dengan jari-jarinya ($\omega \propto \frac{1}{R}$). Roda yang lebih kecil berputar lebih cepat secara sudut dibandingkan roda yang lebih besar.

> [!TIP] Super Solusi Cepat:
> Jika soal menyebutkan tembakan peluru mencapai jangkauan terjauh sama dengan 4 kali tinggi puncaknya ($X_{\max} = 4 h_{\max}$), maka sudut elevasinya pasti tepat $\theta = 45^{\circ}$ (karena $\tan\theta = \frac{4 h_{\max}}{X_{\max}} = 1$)!