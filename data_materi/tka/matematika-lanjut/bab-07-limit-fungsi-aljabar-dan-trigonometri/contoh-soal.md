# Variasi Contoh Soal — Limit Fungsi
**Kategori:** TKA Matematika Lanjut | **Pembungkus:** Trigonometri

### Contoh Soal 1: Limit Trigonometri dengan Identitas Kosinus
Tentukan nilai dari $\lim_{x \to 0} \frac{1 - \cos 4x}{x \tan 2x}$ tanpa menggunakan aturan L'Hôpital!

> [!EXAMPLE] Pembahasan Langkah demi Langkah:
> **Langkah 1:** Ubah bentuk $(1 - \cos 4x)$ menggunakan identitas sudut rangkap:
> $$1 - \cos 4x = 2\sin^2 2x$$
>
> **Langkah 2:** Substitusikan ke limit:
> $$\lim_{x \to 0} \frac{2\sin^2 2x}{x \tan 2x} = 2 \lim_{x \to 0} \left(\frac{\sin 2x}{x} \cdot \frac{\sin 2x}{\tan 2x}\right)$$
>
> **Langkah 3:** Gunakan teorema limit trigonometri:
> $$= 2 \cdot \left(\frac{2}{1}\right) \cdot \left(\frac{2}{2}\right) = 2 \cdot 2 \cdot 1 = 4$$
>
> **Jawaban:** Nilai limit adalah $4$.