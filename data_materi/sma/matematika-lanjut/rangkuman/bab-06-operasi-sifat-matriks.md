# Rangkuman: 6. Operasi & Sifat Matriks
**Kategori:** TKA Matematika Lanjut | **Modul Asal:** 03. Matriks, Vektor, & Irisan Kerucut

## 6. Operasi & Sifat Matriks
| Sifat / Rumus | Contoh Aplikasi |
| :--- | :--- |
| Perkalian Matriks: $A_{m \times p} \cdot B_{p \times n} = C_{m \times n}$ | $\begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 1(4)+2(1) \\ 0(4)+3(1) \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \end{pmatrix}$ |
| $AB \neq BA$ (Tidak komutatif) | Perkalian matriks bolak-balik menghasilkan matriks berbeda |
| $(AB)C = A(BC)$ (Asosiatif) | Pengelompokan perkalian tidak mengubah hasil |
| $A(B \pm C) = AB \pm AC$ (Distributif) | Berlaku perkalian terhadap penjumlahan matriks |
| $AI = IA = A$ (Matriks Identitas) | $\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ |
| $(A^T)^T = A$ | Transpose ganda kembali ke matriks semula |
| $(AB)^T = B^T A^T$ | Urutan dibalik saat transpose perkalian |
| $\det(AB) = \det(A) \cdot \det(B)$ | $\det(A) = 3, \det(B) = 4 \implies \det(AB) = 12$ |
| $\det(A^T) = \det(A)$ | Nilai determinan sama dengan determinan transposenya |
| $\det(A^{-1}) = \frac{1}{\det(A)}$ | $\det(A) = 5 \implies \det(A^{-1}) = \frac{1}{5}$ |
| $\det(kA_{n \times n}) = k^n \cdot \det(A)$ | Ordo $2 \times 2, \det(A) = 4 \implies \det(2A) = 2^2(4) = 16$ |
| $\det(A^m) = (\det(A))^m$ | $\det(A) = 2 \implies \det(A^3) = 2^3 = 8$ |
| $\det(A) = 0 \iff$ Matriks Singular | Matriks singular tidak memiliki invers |
| Invers Ordo $2 \times 2$: $\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ | $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}^{-1} = \frac{1}{6-5}\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$ |
| $(AB)^{-1} = B^{-1} A^{-1}$ | Invers perkalian membalik urutan matriks |
| $AX = B \implies X = A^{-1}B$ | Mencari matriks $X$ yang dikali dari kiri |
| $XA = B \implies X = BA^{-1}$ | Mencari matriks $X$ yang dikali dari kanan |
