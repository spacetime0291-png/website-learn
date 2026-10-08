# Rangkuman: 10. Transformasi Geometri
**Kategori:** TKA Matematika Lanjut | **Modul Asal:** 04. Dimensi Tiga, Transformasi, & Trigonometri

## 10. Transformasi Geometri
| Sifat / Rumus | Contoh Aplikasi |
| :--- | :--- |
| Translasi: $\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix} + \begin{pmatrix} a \\ b \end{pmatrix}$ | $(2, 3) + \begin{pmatrix} 1 \\ -4 \end{pmatrix} = (3, -1)$ |
| Refleksi Sumbu-$X$: $(x, -y)$ | $(3, 4) \to (3, -4)$ |
| Refleksi Sumbu-$Y$: $(-x, y)$ | $(3, 4) \to (-3, 4)$ |
| Refleksi Garis $y = x$: $(y, x)$ | $(3, 4) \to (4, 3)$ |
| Refleksi Garis $y = -x$: $(-y, -x)$ | $(3, 4) \to (-4, -3)$ |
| Refleksi Garis $x = h$: $(2h - x, y)$ | Titik $(1, 3)$ dicerminkan ke $x = 4 \implies (2(4)-1, 3) = (7, 3)$ |
| Refleksi Garis $y = k$: $(x, 2k - y)$ | Titik $(2, 1)$ dicerminkan ke $y = 5 \implies (2, 2(5)-1) = (2, 9)$ |
| Rotasi $[\theta]$ Pusat $(0,0)$: $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ | Rotasi $90^\circ \implies \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 \\ 3 \end{pmatrix} = \begin{pmatrix} -3 \\ 2 \end{pmatrix}$ |
| Dilatasi $[(0,0), k]$: $(kx, ky)$ | Titik $(2, 3)$ didilatasi faktor $3 \implies (6, 9)$ |
| Komposisi $T_1$ lalu $T_2$: $M = M_2 \cdot M_1$ | Dikalikan dari matriks transformasi terakhir |
| Luas Hasil Transformasi: $L' = \vert\det(M)\vert \cdot L$ | $\det(M) = -3, L = 8 \implies L' = \vert-3\vert \cdot 8 = 24$ |
