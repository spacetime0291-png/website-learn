# Variasi Contoh Soal — Transformasi Geometri
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Geometri dan Pengukuran

### Contoh Soal 1: Komposisi Transformasi Garis
Tentukan bayangan garis $2x - 3y + 6 = 0$ setelah dicerminkan terhadap sumbu-$x$, kemudian dilanjutkan dengan rotasi $90^\circ$ berlawanan arah jarum jam terhadap pusat $(0,0)$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Tentukan matriks transformasi:
> * Refleksi sumbu-$x$: $M_1 = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
> * Rotasi $90^\circ$: $M_2 = \begin{pmatrix} \cos 90^\circ & -\sin 90^\circ \\ \sin 90^\circ & \cos 90^\circ \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
>
> **Langkah 2:** Hitung matriks komposisi $M = M_2 \cdot M_1$:
> $$M = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
>
> **Langkah 3:** Hubungan koordinat baru:
> $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} y \\ x \end{pmatrix} \implies x' = y \implies y = x', \quad y' = x \implies x = y'$$
>
> **Langkah 4:** Substitusi ke persamaan garis awal:
> $$2x - 3y + 6 = 0 \implies 2(y') - 3(x') + 6 = 0 \implies -3x' + 2y' + 6 = 0 \implies 3x - 2y - 6 = 0$$
>
> **Jawaban:** Bayangan garis adalah $3x - 2y - 6 = 0$.