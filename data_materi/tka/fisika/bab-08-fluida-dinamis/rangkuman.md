# Rangkuman Rumus Cepat & Konsep Inti — Fluida Dinamis
**Kategori:** TKA Fisika | **Pembungkus:** Fluida | **Pendekatan:** Kurikulum 2013 & Merdeka

### A. Tabel Rumus Kontinuitas & Asas Bernoulli
| Sub-Materi / Topik | Formula Kunci | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Debit Aliran Volume ($Q$)** | $Q = \frac{V}{t} = A \cdot v$ | $1\text{ liter/s} = 10^{-3}\text{ m}^3/\text{s}$; pipa silinder $A = \frac{1}{4}\pi D^2$ |
| **Persamaan Kontinuitas** | $A_1 v_1 = A_2 v_2 \implies \frac{v_2}{v_1} = \left(\frac{D_1}{D_2}\right)^2$ | Kelajuan aliran berbanding terbalik kuadrat diameter ($v \propto \frac{1}{D^2}$) |
| **Hukum Bernoulli Lengkap** | $P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$ | Konservasi energi fluida ideal (inkompresibel, non-viskos, laminer) |
| **Bernoulli Pipa Mendatar** | $P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2)$ | Ketinggian sama ($h_1 = h_2$); penampang menyempit $\to$ kelajuan naik $\to$ tekanan statis turun |

---

### B. Tabel Aplikasi Bernoulli (Torricelli, Venturi, Pitot, Pesawat)
| Aplikasi Kunci | Formula Cepat | Konsep Penting & Ketentuan |
| :--- | :--- | :--- |
| **Tangki Bocor Torricelli** | $v = \sqrt{2 g h}, \quad t = \sqrt{\frac{2 H}{g}}$<br>$X = 2 \sqrt{h \cdot H}, \quad Q = A_0 \sqrt{2 g h}$ | $h$: kedalaman dari permukaan air ke lubang bocor;<br>$H$: ketinggian lubang bocor dari lantai dasar;<br>$X_{\max}$ dicapai saat lubang tepat di tengah air ($h = H$) |
| **Venturimeter Tanpa Manometer** | $v_1 = \sqrt{\frac{2 g h}{\left(\frac{A_1}{A_2}\right)^2 - 1}}, \quad v_2 = \frac{A_1}{A_2} v_1$ | $h$: beda tinggi permukaan cairan pada pipa tegak |
| **Venturimeter dengan Manometer** | $v_1 = \sqrt{\frac{2 (\rho' - \rho) g h}{\rho \left[\left(\frac{A_1}{A_2}\right)^2 - 1\right]}}$ | $\rho'$: massa jenis cairan manometer (raksa); $\rho$: massa jenis cairan pipa |
| **Tabung Pitot (Speedometer Gas)** | $v = \sqrt{\frac{2 \rho' g h}{\rho_{\text{gas}}}}$ | Mengukur kelajuan aliran gas udara relatif terhadap pesawat |
| **Gaya Angkat Sayap Pesawat** | $F_{\text{angkat}} = (P_1 - P_2) A = \frac{1}{2} \rho_{\text{udara}} A (v_2^2 - v_1^2)$ | Udara di atas sayap mengalir lebih cepat ($v_2 > v_1$), menimbulkan tekanan di bawah sayap lebih besar ($P_1 > P_2$) |

---

### C. Jebakan Ujian & Solusi Cepat
> [!WARNING] Jebakan Konsep:
> Pada tangki bocor Torricelli, jangan tertukar antara $h$ dan $H$!
> * $h$ = jarak dari **permukaan atas air ke lubang** (penentu kelajuan semburan $v = \sqrt{2gh}$).
> * $H$ = jarak dari **lubang bocor ke tanah dasar** (penentu durasi waktu jatuh $t = \sqrt{\frac{2H}{g}}$).

> [!TIP] Super Solusi Cepat:
> Pada venturimeter tanpa manometer, kelajuan di leher kecil ($v_2$) langsung dihitung dari perbandingan luas:
> $$v_2 = \frac{A_1}{A_2} v_1$$
