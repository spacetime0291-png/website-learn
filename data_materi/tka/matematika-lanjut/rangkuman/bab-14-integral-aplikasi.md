# Rangkuman: 14. Integral & Aplikasi
**Kategori:** TKA Matematika Lanjut | **Modul Asal:** 05. Kalkulus (Limit, Turunan, & Integral)

## 14. Integral & Aplikasi
| Sifat / Rumus | Contoh Aplikasi |
| :--- | :--- |
| $\int x^n \, dx = \frac{1}{n+1} x^{n+1} + C \ (n \neq -1)$ | $\int x^4 \, dx = \frac{1}{5}x^5 + C$ |
| $\int (ax+b)^n \, dx = \frac{1}{a(n+1)}(ax+b)^{n+1} + C$ | $\int (3x+1)^2 \, dx = \frac{1}{3(3)}(3x+1)^3 + C = \frac{1}{9}(3x+1)^3 + C$ |
| $\int \frac{1}{x} \, dx = \ln\vert x \vert + C$ | Integral bentuk fungsi rasional derajat satu |
| $\int \cos(ax+b) \, dx = \frac{1}{a}\sin(ax+b) + C$ | $\int \cos 2x \, dx = \frac{1}{2}\sin 2x + C$ |
| $\int \sin(ax+b) \, dx = -\frac{1}{a}\cos(ax+b) + C$ | $\int \sin 4x \, dx = -\frac{1}{4}\cos 4x + C$ |
| $\int \sec^2(ax+b) \, dx = \frac{1}{a}\tan(ax+b) + C$ | Integral pembentuk fungsi tangen |
| Substitusi: $\int f(g(x))g'(x)\,dx = \int f(u)\,du \ (u = g(x))$ | $\int 2x(x^2+1)^3\,dx \implies \int u^3\,du = \frac{1}{4}(x^2+1)^4 + C$ |
| Parsial: $\int u \, dv = uv - \int v \, du$ | Digunakan untuk perkalian polinomial dan fungsi transenden |
| Teorema Fundamental: $\int_a^b f(x)\,dx = F(b) - F(a)$ | $\int_1^2 3x^2 \, dx = [x^3]_1^2 = 8 - 1 = 7$ |
| Pembalikan Batas: $\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$ | Menukar batas bawah dan atas menghasilkan tanda negatif |
| Batas Sama: $\int_a^a f(x)\,dx = 0$ | Daerah integrasi tanpa lebar bernilai nol |
| Partisi Interval: $\int_a^b f(x)\,dx + \int_b^c f(x)\,dx = \int_a^c f(x)\,dx$ | Menggabungkan dua sub-interval berurutan |
| Fungsi Ganjil Simetris: $\int_{-a}^a f(x)\,dx = 0$ | $\int_{-3}^3 x^5 \, dx = 0$ |
| Fungsi Genap Simetris: $\int_{-a}^a f(x)\,dx = 2\int_0^a f(x)\,dx$ | $\int_{-2}^2 x^2 \, dx = 2\int_0^2 x^2 \, dx = 2\left[\frac{8}{3}\right] = \frac{16}{3}$ |
| Luas Antara 2 Kurva: $L = \int_a^b (y_{\text{atas}} - y_{\text{bawah}}) \, dx$ | Menghitung daerah tertutup antara dua kurva |
| Rumus Cepat Luas Parabola-Garis: $L = \frac{D\sqrt{D}}{6a^2}$ | Parabola dan garis potong dengan $D=9, a=1 \implies L = \frac{9\sqrt{9}}{6} = \frac{27}{6} = 4.5$ |
| Volume Putar Sumbu-$X$: $V = \pi \int_a^b (y_1^2 - y_2^2) \, dx$ | Volume benda putar mengelilingi sumbu-$X$ sejauh $360^\circ$ |
| Volume Putar Sumbu-$Y$: $V = \pi \int_c^d (x_1^2 - x_2^2) \, dy$ | Volume benda putar mengelilingi sumbu-$Y$ sejauh $360^\circ$ |
