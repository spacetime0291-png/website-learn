# 30. Teknologi Digital dan Sumber Energi Terbarukan
**Kategori:** TKA Fisika | **Blok Asal:** Blok 5: Fisika Modern dan Perkembangan Teknologi

## 30. Teknologi Digital dan Sumber Energi Terbarukan

### A. Karakteristik Sinyal Analog dan Digital
* **Sinyal Analog:** Gelombang kontinu terhadap waktu, rentan terhadap redaman dan *noise* (derau) listrik saat transmisi jarak jauh.
* **Sinyal Digital:** Representasi sinyal diskrit biner ($0$ dan $1$), tahan terhadap derau, mudah diregenerasi secara utuh oleh repeater, serta mendukung enkripsi dan kompresi data.

### B. Tahapan Digitalisasi ADC (*Analog-to-Digital Converter*)
1. **Sampling (Pencuplikan):** Mengambil sampel amplitudo gelombang analog secara periodik.
   * *Teorema Nyquist-Shannon:* Frekuensi pencuplikan minimum dua kali frekuensi tertinggi sinyal ($f_s \ge 2 f_{\max}$) untuk mencegah distorsi *aliasing*.
2. **Quantizing (Kuantisasi):** Membulatkan nilai kontinu sampel ke level amplitudo diskrit terdekat.
3. **Encoding (Pengkodean):** Mengonversi level kuantisasi menjadi bit kode biner ($0$ dan $1$).

### C. Media Penyimpanan dan Transmisi Data
* **Media Penyimpanan:**
  * *Magnetik:* HDD menggunakan orientasi medan magnet partikel feromagnetik.
  * *Optik:* CD/DVD/Blu-Ray dibaca pantulan laser melalui lekukan mikro (*pits*) dan daratan (*lands*).
  * *Solid State:* SSD dan flashdisk berbasis gerbang transistor tanpa komponen bergerak.
* **Transmisi Serat Optik (*Fiber Optics*):**
  * Mentransmisikan pulsa cahaya di inti kaca berdasarkan **Pemantulan Internal Total** (syarat: $n_{\text{core}} > n_{\text{cladding}}$ dan sudut datang $>$ sudut kritis).
  * Keunggulan: *Bandwidth* sangat besar, laju transmisi secepat cahaya, redaman rendah, kebal interferensi gelombang elektromagnetik.

### D. Klasifikasi dan Urgensi Energi Terbarukan
* **Energi Tak Terbarukan (Fosil):** Minyak bumi, gas alam, batu bara (menghasilkan emisi gas rumah kaca $\text{CO}_2, \text{SO}_2, \text{NO}_x$).
* **Energi Terbarukan:** Sumber daya alam yang pulih secara berkelanjutan dan ramah lingkungan.

### E. Formulasi Teknis Pembangkit Energi Terbarukan
1. **Pembangkit Listrik Tenaga Air (PLTA):**
   $$P = \eta \rho Q g h$$
   * $\eta$ = efisiensi sistem, $\rho = 1000\text{ kg/m}^3$, $Q$ = debit air ($\text{m}^3/\text{s}$), $h$ = tinggi jatuh air efektif ($\text{m}$).
2. **Pembangkit Listrik Tenaga Bayu / Angin (PLTB):**
   $$P = \frac{1}{2} C_p \rho_{\text{udara}} (\pi R^2) v^3$$
   * $R$ = jari-jari bilah turbin, $v$ = kecepatan angin, $C_p$ = batas efisiensi teoretis Betz ($\approx 59{,}3\%$). Daya berbanding lurus dengan $v^3$.
3. **Pembangkit Listrik Tenaga Surya (PLTS):**
   * Menggunakan sel fotovoltaik (semikonduktor silikon sambungan $p-n$) untuk mengubah foton cahaya matahari langsung menjadi arus listrik searah (DC).
4. **Panas Bumi (Geotermal) & Biogas:**
   * Geotermal: Memanfaatkan uap bertekanan tinggi dari kantong hidrotermal bumi untuk memutar turbin.
   * Biogas: Fermentasi anaerobik limbah organik menghasilkan gas metana ($\text{CH}_4$) sebagai bahan bakar bersih.
