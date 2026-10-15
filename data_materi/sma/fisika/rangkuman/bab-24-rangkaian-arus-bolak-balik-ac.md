# Rangkuman: 24. Rangkaian Arus Bolak-Balik (AC)
**Kategori:** TKA Fisika | **Blok Asal:** Blok 4: Listrik dan Magnet

## 24. Rangkaian Arus Bolak-Balik (AC)

### A. Nilai Sinusoidal dan Efektif
* Hubungan Efektif dan Maksimum: $V_{\text{eff}} = \frac{V_{\max}}{\sqrt{2}}, \quad I_{\text{eff}} = \frac{I_{\max}}{\sqrt{2}}$

### B. Matriks Sifat Beban Komponen R, L, dan C
| Komponen | Reaktansi / Hambatan ($\Omega$) | Beda Fase Arus & Tegangan | Karakteristik Fasor |
| :--- | :---: | :---: | :--- |
| **Resistor ($R$)** | $R$ | $\Delta\phi = 0^\circ$ | Arus dan tegangan **sefase** |
| **Induktor ($L$)** | $X_L = \omega L = 2\pi f L$ | $\Delta\phi = +90^\circ$ | Tegangan **mendahului** arus $90^\circ$ |
| **Kapasitor ($C$)** | $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$ | $\Delta\phi = -90^\circ$ | Arus **mendahului** tegangan $90^\circ$ |

### C. Rangkaian R-L-C Seri
* Impedansi Total: $Z = \sqrt{R^2 + (X_L - X_C)^2}$
* Tegangan Total: $V_{\text{tot}} = \sqrt{V_R^2 + (V_L - V_C)^2}$
* Beda Sudut Fase: $\tan\phi = \frac{X_L - X_C}{R}$
  * $X_L > X_C \to$ Sifat **Induktif** ($\phi > 0$, tegangan mendahului arus).
  * $X_L < X_C \to$ Sifat **Kapasitif** ($\phi < 0$, arus mendahului tegangan).
  * $X_L = X_C \to$ Terjadi **Resonansi Deret** (sifat Resistif murni, $Z_{\min} = R$).
* Frekuensi Resonansi: $f_r = \frac{1}{2\pi\sqrt{LC}}$
* Daya Disipasi Nyata: $P = V_{\text{eff}} I_{\text{eff}} \cos\phi \quad \left(\text{Faktor daya: } \cos\phi = \frac{R}{Z}\right)$
