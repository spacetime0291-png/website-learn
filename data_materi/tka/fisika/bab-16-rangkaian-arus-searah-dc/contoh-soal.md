# Variasi Contoh Soal — Rangkaian Arus Searah (DC)
**Kategori:** TKA Fisika | **Pembungkus:** Kelistrikan

### Contoh Soal 1: Perubahan Daya Lampu Terhadap Tegangan
Sebuah lampu bertuliskan spesifikasi $60\text{ W} / 220\text{ V}$. Jika lampu tersebut dipasang pada tegangan jala-jala rumah yang sedang drop menjadi $110\text{ V}$, tentukan daya listrik nyata yang diserap lampu!

#### Pembahasan:
**Langkah 1: Identifikasi Hubungan Daya dan Tegangan pada Hambatan Konstan**
$$\begin{aligned}
P &= \frac{V^2}{R} \implies P \propto V^2
\end{aligned}$$

**Langkah 2: Terapkan Perbandingan Kuadrat Tegangan**
$$\begin{aligned}
P_2 &= P_1 \times \left(\frac{V_2}{V_1}\right)^2 \\
&= 60 \times \left(\frac{110}{220}\right)^2 \\
&= 60 \times \left(\frac{1}{2}\right)^2 \\
&= 60 \times \frac{1}{4} \\
&= 15\text{ W}
\end{aligned}$$

> [!TIP] Shortcut Ujian:
> Jika tegangan turun menjadi $\frac{1}{2}$ kali semula, daya lampu langsung turun menjadi $(\frac{1}{2})^2 = \frac{1}{4}$ kali semula!

**Jawaban Akhir:** Daya listrik yang diserap lampu tersebut adalah $15\text{ Watt}$.

---

### Contoh Soal 2: Rangkaian Satu Loop Tertutup
Sebuah rangkaian satu loop terdiri dari sumber tegangan $\mathcal{E}_1 = 18\text{ V}$ berhambatan dalam $r_1 = 1\,\Omega$, sumber tegangan $\mathcal{E}_2 = 6\text{ V}$ berhambatan dalam $r_2 = 1\,\Omega$, serta dua resistor eksternal $R_1 = 4\,\Omega$ dan $R_2 = 6\,\Omega$. Jika kedua sumber tegangan dipasang berlawanan kutub, tentukan kuat arus yang mengalir pada rangkaian!

#### Pembahasan:
**Langkah 1: Hitung Hambatan Total Rangkaian Seri Loop**
$$\begin{aligned}
R_{\text{total}} &= R_1 + R_2 + r_1 + r_2 \\
&= 4 + 6 + 1 + 1 \\
&= 12\,\Omega
\end{aligned}$$

**Langkah 2: Terapkan Hukum II Kirchhoff pada Loop**
$$\begin{aligned}
\Sigma \mathcal{E} + I \cdot R_{\text{total}} &= 0 \\
-\mathcal{E}_1 + \mathcal{E}_2 + I \cdot R_{\text{total}} &= 0 \\
-18 + 6 + I \times 12 &= 0 \\
-12 + 12 I &= 0 \\
12 I &= 12 \\
I &= \frac{12}{12} \\
&= 1\text{ A}
\end{aligned}$$

**Jawaban Akhir:** Kuat arus yang mengalir pada rangkaian tersebut adalah $1\text{ Ampere}$.