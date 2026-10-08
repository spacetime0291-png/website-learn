# Rangkuman: 12. Limit Fungsi, Asimtotik, & Kekontinuan
**Kategori:** TKA Matematika Lanjut | **Modul Asal:** 05. Kalkulus (Limit, Turunan, & Integral)

## 12. Limit Fungsi, Asimtotik, & Kekontinuan
| Sifat / Rumus | Contoh Aplikasi |
| :--- | :--- |
| Dalil L'Hôpital: $\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$ | $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{2x}{1} = 4$ |
| Limit Tak Hingga Rasional: $\lim_{x \to \infty} \frac{ax^n + \dots}{bx^m + \dots}$ | $n = m \implies \lim_{x \to \infty} \frac{8x^2+1}{2x^2-3} = \frac{8}{2} = 4$ |
| Limit Akar: $\lim_{x \to \infty} (\sqrt{ax^2+bx+c} - \sqrt{ax^2+px+q}) = \frac{b-p}{2\sqrt{a}}$ | $\lim_{x \to \infty} (\sqrt{4x^2+6x} - \sqrt{4x^2-2x}) = \frac{6 - (-2)}{2\sqrt{4}} = 2$ |
| Limit Trigonometri: $\lim_{x \to 0} \frac{\sin ax}{bx} = \frac{a}{b}$ | $\lim_{x \to 0} \frac{\sin 6x}{2x} = \frac{6}{2} = 3$ |
| Limit Trigonometri: $\lim_{x \to 0} \frac{\tan ax}{bx} = \frac{a}{b}$ | $\lim_{x \to 0} \frac{\tan 5x}{10x} = \frac{5}{10} = \frac{1}{2}$ |
| Limit Trigonometri: $\lim_{x \to 0} \frac{1 - \cos ax}{x^2} = \frac{a^2}{2}$ | $\lim_{x \to 0} \frac{1 - \cos 4x}{x^2} = \frac{4^2}{2} = 8$ |
| Limit Trigonometri $x \to \infty$: $\lim_{x \to \infty} x \sin\left(\frac{1}{x}\right) = 1$ | Misalkan $y = \frac{1}{x} \to 0 \implies \lim_{y \to 0} \frac{\sin y}{y} = 1$ |
| **Asimtot Tegak via Limit:** $\lim_{x \to c} f(x) = \pm\infty$ | $f(x) = \frac{1}{x-2} \implies \lim_{x \to 2} f(x) = \pm\infty \implies \text{Asimtot: } x = 2$ |
| **Asimtot Datar via Limit:** $\lim_{x \to \pm\infty} f(x) = L$ | $f(x) = \frac{3x+2}{x-1} \implies \lim_{x \to \infty} f(x) = 3 \implies \text{Asimtot: } y = 3$ |
| **Asimtot Miring via Limit:** $m = \lim \frac{f(x)}{x}, c = \lim [f(x) - mx]$ | Asimtot berupa garis linear miring $y = mx + c$ |
| Syarat Kontinu di $x = c$: $f(c)$ ada, $\lim_{x \to c} f(x)$ ada, dan bernilai sama | Memastikan kurva tidak putus dan tidak memiliki lubang |
