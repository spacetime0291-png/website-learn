# Variasi Contoh Soal — Matriks
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

### Contoh Soal 1: Invers dan Persamaan Matriks
Diketahui matriks $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ dan $B = \begin{pmatrix} 7 & 4 \\ 11 & 6 \end{pmatrix}$. Tentukan matriks $X$ yang memenuhi $A \cdot X = B$!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Hitung determinan matriks $A$:
> $$\det(A) = (3)(2) - (1)(5) = 6 - 5 = 1$$
>
> **Langkah 2:** Tentukan invers matriks $A$:
> $$A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$$
>
> **Langkah 3:** Hitung $X = A^{-1} \cdot B$:
> $$X = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} \begin{pmatrix} 7 & 4 \\ 11 & 6 \end{pmatrix}$$
> $$X = \begin{pmatrix} 2(7) + (-1)(11) & 2(4) + (-1)(6) \\ (-5)(7) + 3(11) & (-5)(4) + 3(6) \end{pmatrix} = \begin{pmatrix} 14 - 11 & 8 - 6 \\ -35 + 33 & -20 + 18 \end{pmatrix} = \begin{pmatrix} 3 & 2 \\ -2 & -2 \end{pmatrix}$$
>
> **Jawaban:** $X = \begin{pmatrix} 3 & 2 \\ -2 & -2 \end{pmatrix}$.