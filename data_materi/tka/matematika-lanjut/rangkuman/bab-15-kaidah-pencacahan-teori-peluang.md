# Rangkuman: 15. Kaidah Pencacahan & Teori Peluang
**Kategori:** TKA Matematika Lanjut | **Modul Asal:** 06. Kaidah Pencacahan, Peluang, & Statistika

## 15. Kaidah Pencacahan & Teori Peluang
| Sifat / Rumus | Contoh Aplikasi |
| :--- | :--- |
| Aturan Perkalian (Filling Slots): $k_1 \times k_2 \times \dots \times k_n$ | 4 baju dan 3 celana $\implies 4 \times 3 = 12$ variasi setelan |
| Faktorial: $n! = n \times (n-1) \times \dots \times 1, \ 0! = 1$ | $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$ |
| Permutasi $r$ dari $n$ (Urutan penting): $P(n, r) = \frac{n!}{(n-r)!}$ | Memilih Ketua dan Sekretaris dari 6 kandidat $\implies P(6, 2) = \frac{6!}{4!} = 30$ |
| Permutasi Unsur Sama: $P = \frac{n!}{k_1! \cdot k_2! \dots}$ | Kata "KODOK" ($n=5, K=2, O=2) \implies P = \frac{5!}{2! \cdot 2!} = 30$ |
| Permutasi Siklis: $P_{\text{siklis}} = (n-1)!$ | 4 orang duduk melingkar $\implies P = (4-1)! = 3! = 6$ |
| Kombinasi $r$ dari $n$ (Urutan bebas): $C(n, r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$ | Memilih regu 3 orang dari 5 calon $\implies C(5, 3) = \frac{5!}{3! \cdot 2!} = 10$ |
| Simetri Kombinasi: $\binom{n}{r} = \binom{n}{n-r}$ | $\binom{8}{6} = \binom{8}{2} = \frac{8 \times 7}{2} = 28$ |
| Binomial Newton: $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k$ | Koefisien suku $x^2$ dari $(x+2)^4 \implies \binom{4}{2} x^2 2^2 = 6(4)x^2 = 24x^2$ |
| Peluang Kejadian: $P(A) = \frac{n(A)}{n(S)}, \ 0 \le P(A) \le 1$ | Peluang mata dadu prima $\{2, 3, 5\} \implies P = \frac{3}{6} = \frac{1}{2}$ |
| Peluang Komplemen: $P(A') = 1 - P(A)$ | Peluang hujan $0.3 \implies$ Peluang tidak hujan $= 1 - 0.3 = 0.7$ |
| Frekuensi Harapan: $F_h(A) = n \cdot P(A)$ | Lempar dadu 90 kali $\implies F_h(\text{mata 3}) = 90 \cdot \frac{1}{6} = 15\text{ kali}$ |
| Gabungan: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Peluang gabungan dua kejadian tidak saling lepas |
| Saling Lepas: $P(A \cup B) = P(A) + P(B)$ | Peluang mata dadu 1 atau 6 $\implies \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$ |
| Saling Bebas: $P(A \cap B) = P(A) \cdot P(B)$ | Koin Angka dan Dadu Genap $\implies \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$ |
| Peluang Bersyarat: $P(A\vert B) = \frac{P(A \cap B)}{P(B)}$ | Peluang kejadian $A$ setelah kejadian $B$ dipastikan terjadi |
