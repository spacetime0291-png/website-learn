# Matriks
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

## A. Operasi Matriks dan Sifat-sifatnya
1. **Penjumlahan & Pengurangan:**
   Hanya dapat dilakukan pada matriks berordo sama dengan menjumlahkan/mengurangkan elemen yang seletak:
   $$\begin{pmatrix} a & b \\ c & d \end{pmatrix} \pm \begin{pmatrix} e & f \\ g & h \end{pmatrix} = \begin{pmatrix} a \pm e & b \pm f \\ c \pm g & d \pm h \end{pmatrix}$$
2. **Perkalian Matriks dengan Skalar:**
   $$k \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} ka & kb \\ kc & kd \end{pmatrix}$$
3. **Perkalian Antarmatriks:**
   Dua matriks dapat dikalikan jika banyak kolom matriks pertama sama dengan banyak baris matriks kedua ($A_{m \times p} \times B_{p \times n} = C_{m \times n}$):
   $$\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} e & f \\ g & h \end{pmatrix} = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$$
   > Perkalian matriks **tidak komutatif** ($AB \ne BA$). Berlaku sifat asosiatif $A(BC) = (AB)C$ dan distributif $A(B + C) = AB + AC$.

---

## B. Determinan dan Invers Matriks
1. **Determinan Matriks Ordo $2\times2$:**
   $$\det(A) = |A| = ad - bc$$
2. **Determinan Matriks Ordo $3\times3$ (Metode Sarrus):**
   $$|A| = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}$$
   * Sifat: $\det(AB) = \det(A) \cdot \det(B)$, $\det(A^T) = \det(A)$, $\det(A^{-1}) = \frac{1}{\det(A)}$, $\det(kA_{n\times n}) = k^n \det(A)$.
3. **Invers Matriks Ordo $2\times2$:**
   $$A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \quad (ad - bc \ne 0)$$
   * Jika $\det(A) = 0$, matriks disebut **matriks singular** dan tidak memiliki invers.
4. **Penyelesaian Persamaan Matriks:**
   * $A \cdot X = B \implies X = A^{-1} \cdot B$
   * $X \cdot A = B \implies X = B \cdot A^{-1}$