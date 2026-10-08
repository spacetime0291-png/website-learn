# Rangkuman: 13. Suhu, Pemuaian, dan Kalorimetri
**Kategori:** TKA Fisika | **Blok Asal:** Blok 2: Termodinamika dan Kalor

## 13. Suhu, Pemuaian, dan Kalorimetri

### A. Konversi Skala Suhu
* Perbandingan Skala Tetap: $C : R : (F - 32) : (K - 273) = 5 : 4 : 9 : 5$
* Kalibrasi Termometer Sembarang: $\frac{X - X_{\text{bawah}}}{X_{\text{atas}} - X_{\text{bawah}}} = \frac{Y - Y_{\text{bawah}}}{Y_{\text{atas}} - Y_{\text{bawah}}}$

### B. Pemuaian Zat Padat
* Panjang: $\Delta L = L_0 \alpha \Delta T \implies L_t = L_0(1 + \alpha \Delta T)$
* Luas: $\Delta A = A_0 \beta \Delta T \implies A_t = A_0(1 + \beta \Delta T)$ (dengan $\beta = 2\alpha$)
* Volume: $\Delta V = V_0 \gamma \Delta T \implies V_t = V_0(1 + \gamma \Delta T)$ (dengan $\gamma = 3\alpha$)
* Keping Bimetal: Saat dipanaskan membengkok ke arah logam yang memiliki $\alpha$ lebih kecil.

### C. Diagram Visual: Segitiga Perubahan Wujud Zat

<svg viewBox="0 0 650 360" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; font-family:sans-serif;">
  <defs>
    <marker id="arr-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#dc2626" />
    </marker>
    <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
    </marker>
  </defs>

  <rect x="50" y="240" width="130" height="60" rx="8" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <text x="115" y="275" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">PADAT</text>

  <rect x="470" y="240" width="130" height="60" rx="8" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <text x="535" y="275" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">CAIR</text>

  <rect x="260" y="40" width="130" height="60" rx="8" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <text x="325" y="75" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">GAS</text>

  <!-- Padat <-> Cair -->
  <path d="M 180,255 L 460,255" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)"/>
  <text x="320" y="245" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">Mencair (Menyerap Kalor)</text>

  <path d="M 460,285 L 180,285" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)"/>
  <text x="320" y="305" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">Membeku (Melepas Kalor)</text>

  <!-- Cair <-> Gas -->
  <path d="M 490,230 L 365,110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)"/>
  <text x="475" y="160" font-size="13" font-weight="bold" fill="#dc2626">Menguap</text>

  <path d="M 390,110 L 515,230" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)"/>
  <text x="405" y="195" font-size="13" font-weight="bold" fill="#2563eb">Mengembun</text>

  <!-- Padat <-> Gas -->
  <path d="M 140,230 L 265,110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)"/>
  <text x="145" y="160" font-size="13" font-weight="bold" fill="#dc2626">Menyublim</text>

  <path d="M 285,115 L 160,235" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)"/>
  <text x="210" y="195" font-size="13" font-weight="bold" fill="#2563eb">Mengkristal</text>
</svg>

### D. Kalor, Asas Black, dan Tahapan Grafik $T-Q$
* Kalor Sensibel: $Q = m c \Delta T = C \Delta T$
* Kalor Laten: $Q = m L$ ($L$ = kalor lebur/uap)
* Asas Black: $\sum Q_{\text{lepas}} = \sum Q_{\text{terima}}$
* **Tahapan Lengkap Pemanasan Es Hingga Uap Air:**
  1. Tahap 1 (Pemanasan es di bawah $0^\circ\text{C}$): $Q_1 = m c_{\text{es}} \Delta T$
  2. Tahap 2 (Peleburan es pada $0^\circ\text{C}$): $Q_2 = m L_{\text{lebur}}$ (garis datar)
  3. Tahap 3 (Pemanasan air $0^\circ\text{C}$ ke $100^\circ\text{C}$): $Q_3 = m c_{\text{air}} \Delta T$
  4. Tahap 4 (Penguapan air pada $100^\circ\text{C}$): $Q_4 = m U_{\text{uap}}$ (garis datar)
  5. Tahap 5 (Pemanasan uap di atas $100^\circ\text{C}$): $Q_5 = m c_{\text{uap}} \Delta T$
  * Kalor Total: $Q_{\text{total}} = Q_1 + Q_2 + Q_3 + Q_4 + Q_5$

### E. Perpindahan Kalor
* Konduksi: $H = \frac{Q}{t} = \frac{k A \Delta T}{L}$ (Sambungan seri 2 logam: $H_1 = H_2$)
* Konveksi: $H = \frac{Q}{t} = h A \Delta T$
* Radiasi: $P = \frac{Q}{t} = e \sigma A T^4 \quad (\sigma = 5{,}67 \times 10^{-8} \text{ W/m}^2\text{K}^4)$

---
