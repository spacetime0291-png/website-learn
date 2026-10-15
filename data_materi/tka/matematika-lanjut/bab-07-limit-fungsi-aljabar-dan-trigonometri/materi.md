# Limit Fungsi (Aljabar dan Trigonometri)
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Trigonometri

## A. Limit Fungsi Aljabar (Bentuk Tak Tentu $\frac{0}{0}$)
Ketika substitusi langsung menghasilkan nilai tak tentu $\frac{0}{0}$, penyelesaian dilakukan tanpa aturan L'Hôpital dengan metode:
1. **Metode Pemfaktoran:**
   Faktorkan pembuat nol $(x - c)$ dari pembilang dan penyebut:
   $$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 4$$
2. **Metode Merasionalkan Bentuk Akar:**
   Kalikan pembilang dan penyebut dengan bentuk sekawan:
   $$\lim_{x \to 4} \frac{x - 4}{\sqrt{x} - 2} = \lim_{x \to 4} \frac{(x - 4)(\sqrt{x} + 2)}{(\sqrt{x} - 2)(\sqrt{x} + 2)} = \lim_{x \to 4} \frac{(x - 4)(\sqrt{x} + 2)}{x - 4} = 4$$

---

## B. Limit Fungsi Trigonometri
1. **Teorema Limit Trigonometri Dasar ($x \to 0$):**
   $$\lim_{x \to 0} \frac{\sin ax}{bx} = \frac{a}{b}, \quad \lim_{x \to 0} \frac{\tan ax}{bx} = \frac{a}{b}, \quad \lim_{x \to 0} \frac{\sin ax}{\tan bx} = \frac{a}{b}$$
2. **Manipulasi Identitas Trigonometri Penting:**
   * Kosinus menjadi Sinus:
     $$1 - \cos ax = 2\sin^2\left(\frac{ax}{2}\right)$$
     Sehingga: $\lim_{x \to 0} \frac{1 - \cos ax}{x^2} = \lim_{x \to 0} \frac{2\sin^2(ax/2)}{x^2} = 2 \left(\frac{a}{2}\right)^2 = \frac{a^2}{2}$
   * Selisih Kosinus:
     $$\cos A - \cos B = -2 \sin\left(\frac{A+B}{2}\right) \sin\left(\frac{A-B}{2}\right)$$