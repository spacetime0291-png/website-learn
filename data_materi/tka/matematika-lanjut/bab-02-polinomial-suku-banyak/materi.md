# Polinomial (Suku Banyak)
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Aljabar

## A. Konsep Dasar & Operasi Polinomial
Bentuk umum polinomial derajat $n$ satu variabel $x$:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \quad (a_n \ne 0)$$
1. **Derajat Polinomial:** Pangkat tertinggi dari variabel $x$.
2. **Operasi Aljabar:** Penjumlahan, pengurangan, dan perkalian suku sejenis (orde $\le 4$).
3. **Algoritma Pembagian Polinomial:**
   $$\text{Yang Dibagi} = (\text{Pembagi} \times \text{Hasil Bagi}) + \text{Sisa}$$
   $$P(x) = Q(x) \cdot H(x) + S(x)$$
   * Jika pembagi berderajat $k$, derajat sisa maksimum adalah $(k - 1)$.
   * Pembagian dapat diselesaikan dengan **cara bersusun panjang** atau **skema Horner**.

---

## B. Teorema Sisa dan Teorema Faktor
1. **Teorema Sisa:**
   * Jika $P(x)$ dibagi $(x - k)$, sisanya adalah $S = P(k)$.
   * Jika $P(x)$ dibagi $(ax + b)$, sisanya adalah $S = P\left(-\frac{b}{a}\right)$.
   * Jika $P(x)$ dibagi $(x - a)(x - b)$, sisanya berbentuk linear $S(x) = px + q$, dengan:
     $$P(a) = pa + q, \quad P(b) = pb + q$$
2. **Teorema Faktor:**
   Bentuk $(x - k)$ merupakan faktor dari $P(x)$ jika dan hanya jika $P(k) = 0$ (sisa pembagian nol).
3. **Hubungan Akar-Akar Polinomial (Teorema Vieta untuk Kubik $ax^3 + bx^2 + cx + d = 0$):**
   * $x_1 + x_2 + x_3 = -\frac{b}{a}$
   * $x_1 x_2 + x_1 x_3 + x_2 x_3 = \frac{c}{a}$
   * $x_1 x_2 x_3 = -\frac{d}{a}$