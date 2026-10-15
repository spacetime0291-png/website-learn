# Transformasi Geometri
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

## A. Jenis-Jenis Transformasi Dasar
1. **Translasi (Pergeseran) $T = \begin{pmatrix} a \\ b \end{pmatrix}$:**
   $$x' = x + a, \quad y' = y + b$$
2. **Refleksi (Pencerminan):**
   * Sumbu-$x$: $\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$
   * Sumbu-$y$: $\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$
   * Garis $y = x$: $\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$
   * Garis $y = -x$: $\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$
   * Garis $x = h$: $x' = 2h - x, y' = y$; Garis $y = k$: $x' = x, y' = 2k - y$.
3. **Rotasi $[P(a,b), \theta]$:**
   $$\begin{pmatrix} x' - a \\ y' - b \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x - a \\ y - b \end{pmatrix}$$
4. **Dilatasi $[P(a,b), k]$:**
   $$\begin{pmatrix} x' - a \\ y' - b \end{pmatrix} = \begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix} \begin{pmatrix} x - a \\ y - b \end{pmatrix}$$

---

## B. Komposisi Transformasi dengan Matriks
Jika transformasi $T_1$ bersesuaian dengan matriks $M_1$ dan $T_2$ bersesuaian dengan matriks $M_2$, maka komposisi transformasi $T_2 \circ T_1$ (dilakukan $T_1$ dulu kemudian $T_2$) bersesuaian dengan perkalian matriks:
$$M_{\text{gabungan}} = M_2 \cdot M_1$$
$$\begin{pmatrix} x' \\ y' \end{pmatrix} = M_2 \cdot M_1 \begin{pmatrix} x \\ y \end{pmatrix}$$