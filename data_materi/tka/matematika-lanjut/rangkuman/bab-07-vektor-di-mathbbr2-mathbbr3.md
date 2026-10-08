# Rangkuman: 7. Vektor di $\mathbb{R}^2$ & $\mathbb{R}^3$
**Kategori:** TKA Matematika Lanjut | **Modul Asal:** 03. Matriks, Vektor, & Irisan Kerucut

## 7. Vektor di $\mathbb{R}^2$ & $\mathbb{R}^3$
| Sifat / Rumus | Contoh Aplikasi |
| :--- | :--- |
| Panjang Vektor: $\vert\vec{u}\vert = \sqrt{u_1^2 + u_2^2 + u_3^2}$ | $\vec{u} = (2, 3, 6) \implies \vert\vec{u}\vert = \sqrt{4 + 9 + 36} = 7$ |
| Vektor Satuan: $\hat{e}_u = \frac{\vec{u}}{\vert\vec{u}\vert}$ | $\vec{u} = (2, 3, 6) \implies \hat{e}_u = \left(\frac{2}{7}, \frac{3}{7}, \frac{6}{7}\right)$ |
| Pembagian Garis ($AP:PB = m:n$): $\vec{p} = \frac{m\vec{b} + n\vec{a}}{m+n}$ | $A(1, 2), B(4, 5)$, rasio $1:2 \implies \vec{p} = \frac{(4,5) + 2(1,2)}{3} = (2, 3)$ |
| Dot Product: $\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + u_3v_3$ | $(1, 2, 3) \cdot (4, -1, 2) = 4 - 2 + 6 = 8$ |
| $\vec{u} \cdot \vec{v} = \vert\vec{u}\vert\vert\vec{v}\vert\cos\theta$ | Menghitung besar sudut antarvektor |
| $\vec{u} \cdot \vec{v} = 0 \iff$ Saling Tegak Lurus ($\theta = 90^\circ$) | $(2, k) \cdot (4, -2) = 0 \implies 8 - 2k = 0 \implies k = 4$ |
| Cross Product: $\vec{u} \times \vec{v} = \det\begin{pmatrix} \hat{i} & \hat{j} & \hat{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{pmatrix}$ | Menghasilkan vektor yang tegak lurus bidang $\vec{u}$ dan $\vec{v}$ |
| Luas Jajargenjang: $L = \vert\vec{u} \times \vec{v}\vert$ | Luas bidang yang dibentuk oleh dua vektor bentang |
| Proyeksi Skalar: $\vert\vec{c}\vert = \frac{\vec{u} \cdot \vec{v}}{\vert\vec{v}\vert}$ | $\vec{u}\cdot\vec{v} = 10, \vert\vec{v}\vert = 5 \implies \vert\vec{c}\vert = \frac{10}{5} = 2$ |
| Proyeksi Vektor: $\vec{c} = \left(\frac{\vec{u} \cdot \vec{v}}{\vert\vec{v}\vert^2}\right)\vec{v}$ | $\vec{c} = \left(\frac{10}{25}\right)\vec{v} = \frac{2}{5}\vec{v}$ |
