// ============================================================================
// EDUMANDIRI: DATABASE BANK SOAL LATIHAN & DRILLING (TKA & UTBK)
// Disusun sebagai Database Client-Side JavaScript Offline-Ready
// Bebas dependensi network fetch HTTP & tidak memerlukan GitHub fetch
// Total: 53 Soal Latihan Terverifikasi
// ============================================================================

window.EDUMANDIRI_SOAL_BANK = [
  {
    "id": "FIS-B01-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Pengukuran, Besaran, Dimensi, dan Angka Penting",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Konsep Dasar & Ketelitian Alat Ukur",
    "variasiTipe": "Variasi 1: Aturan Operasi Perkalian Angka Penting",
    "kesulitan": "mudah",
    "pertanyaan": "Hasil pengukuran panjang dan lebar pelat seng berturut-turut adalah $12{,}5\\text{ cm}$ dan $4{,}2\\text{ cm}$. Berdasarkan aturan angka penting, luas pelat tersebut adalah...",
    "pilihan": [
      "$52{,}5\\text{ cm}^2$",
      "$52{,}50\\text{ cm}^2$",
      "$53\\text{ cm}^2$",
      "$52\\text{ cm}^2$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Panjang $= 12{,}5\\text{ cm}$ (3 angka penting), lebar $= 4{,}2\\text{ cm}$ (2 angka penting). Hasil perkalian: $$12{,}5 \\times 4{,}2 = 52{,}5\\text{ cm}^2$$ Menurut aturan angka penting, hasil perkalian harus dibulatkan mengikuti faktor dengan angka penting paling sedikit, yaitu 2 angka penting. Angka $52{,}5$ dibulatkan menjadi $53\\text{ cm}^2$."
  },
  {
    "id": "FIS-B01-P1-02",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Pengukuran, Besaran, Dimensi, dan Angka Penting",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Konsep Dasar & Ketelitian Alat Ukur",
    "variasiTipe": "Variasi 2: Analisis Dimensi Besaran Turunan",
    "kesulitan": "sedang",
    "pertanyaan": "Konstanta gravitasi universal $G$ muncul dalam persamaan gaya $F = G \\frac{m_1 m_2}{r^2}$. Dimensi dari konstanta gravitasi $G$ adalah...",
    "pilihan": [
      "$[M]^{-1} [L]^3 [T]^{-2}$",
      "$[M] [L]^2 [T]^{-2}$",
      "$[M]^{-1} [L]^2 [T]^{-1}$",
      "$[M] [L]^3 [T]^{-2}$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Dari rumus $G = \\frac{F \\cdot r^2}{m_1 \\cdot m_2}$, satuan $G$ adalah $\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$. Karena $[\\text{N}] = [M][L][T]^{-2}$, maka: $$[G] = \\frac{([M][L][T]^{-2})([L]^2)}{[M]^2} = [M]^{-1}[L]^3[T]^{-2}$$"
  },
  {
    "id": "FIS-B01-P1-03",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Pengukuran, Besaran, Dimensi, dan Angka Penting",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Konsep Dasar & Ketelitian Alat Ukur",
    "variasiTipe": "Variasi 3: Pembacaan Mikrometer Sekrup",
    "kesulitan": "mudah",
    "pertanyaan": "Pengukuran tebal kawat dengan mikrometer sekrup menunjukkan skala utama $3{,}5\\text{ mm}$ dan garis skala nonius ke-28 berimpit dengan garis mendatar (ketelitian $0{,}01\\text{ mm}$). Tebal kawat tersebut adalah...",
    "pilihan": [
      "$3{,}28\\text{ mm}$",
      "$3{,}78\\text{ mm}$",
      "$3{,}528\\text{ mm}$",
      "$3{,}82\\text{ mm}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Hasil bacaan mikrometer sekrup: $$\\text{Tebal} = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\text{ mm})$$ $$\\text{Tebal} = 3{,}5\\text{ mm} + (28 \\times 0{,}01\\text{ mm}) = 3{,}5 + 0{,}28 = 3{,}78\\text{ mm}$$"
  },
  {
    "id": "FIS-B01-P2-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Pengukuran, Besaran, Dimensi, dan Angka Penting",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Variasi Analisis Rumus & Ketidakpastian",
    "variasiTipe": "Variasi 4: Penurunan Rumus Fisika Metode Dimensi",
    "kesulitan": "sulit",
    "pertanyaan": "Periode ayunan sederhana $T$ bergantung pada panjang tali $l$, massa beban $m$, dan percepatan gravitasi $g$, yang dirumuskan $T = k \\cdot l^x \\cdot m^y \\cdot g^z$ dengan $k$ konstanta tak berdimensi. Nilai eksponen $x$, $y$, dan $z$ berturut-turut adalah...",
    "pilihan": [
      "$\\frac{1}{2},\\ 0,\\ -\\frac{1}{2}$",
      "$\\frac{1}{2},\\ 1,\\ -\\frac{1}{2}$",
      "$1,\\ 0,\\ -1$",
      "$-\\frac{1}{2},\\ 0,\\ \\frac{1}{2}$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Dimensi: $[T] = [L]^x [M]^y ([L][T]^{-2})^z = [M]^y [L]^{x+z} [T]^{-2z}$. Mencocokkan kedua ruas: untuk $[M]$ diperoleh $y = 0$; untuk $[T]$ diperoleh $-2z = 1 \\implies z = -\\frac{1}{2}$; untuk $[L]$ diperoleh $x + z = 0 \\implies x = \\frac{1}{2}$. Jadi $(x, y, z) = (\\frac{1}{2}, 0, -\\frac{1}{2})$."
  },
  {
    "id": "FIS-B01-P2-02",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Pengukuran, Besaran, Dimensi, dan Angka Penting",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Variasi Analisis Rumus & Ketidakpastian",
    "variasiTipe": "Variasi 5: Ketidakpastian Relatif Pengukuran Berulang",
    "kesulitan": "sedang",
    "pertanyaan": "Sebuah kubus memiliki rusuk $s = (2{,}00 \\pm 0{,}02)\\text{ cm}$. Persentase ketidakpastian relatif dari pengukuran volume kubus tersebut adalah...",
    "pilihan": [
      "$1\\%$",
      "$2\\%$",
      "$3\\%$",
      "$6\\%$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Volume kubus $V = s^3$. Ketidakpastian fraksional untuk pemangkatan: $$\\frac{\\Delta V}{V} = 3 \\times \\frac{\\Delta s}{s} = 3 \\times \\frac{0{,}02}{2{,}00} = 3 \\times 0{,}01 = 0{,}03$$ Dalam persentase: $0{,}03 \\times 100\\% = 3\\%$."
  },
  {
    "id": "FIS-B02-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Vektor",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Resultan & Komponen Vektor",
    "variasiTipe": "Variasi 1: Resultan Dua Vektor Saling Tegak Lurus",
    "kesulitan": "mudah",
    "pertanyaan": "Dua buah vektor gaya masing-masing besarnya $F_1 = 6\\text{ N}$ dan $F_2 = 8\\text{ N}$ bekerja pada satu titik tangkap yang sama dan saling tegak lurus ($\\theta = 90^\\circ$). Berapakah besar resultan kedua vektor gaya tersebut?",
    "pilihan": [
      "$10\\text{ N}$",
      "$14\\text{ N}$",
      "$2\\text{ N}$",
      "$48\\text{ N}$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Karena kedua vektor saling tegak lurus ($\\theta = 90^\\circ$), nilai $\\cos 90^\\circ = 0$. Besar resultan dihitung dengan teorema Pythagoras: $$R = \\sqrt{F_1^2 + F_2^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}$$"
  },
  {
    "id": "FIS-B02-P1-02",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Vektor",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Resultan & Komponen Vektor",
    "variasiTipe": "Variasi 2: Perkalian Skalar (Dot Product) & Hubungan Tegak Lurus",
    "kesulitan": "sedang",
    "pertanyaan": "Diketahui dua vektor $\\vec{A} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ dan $\\vec{B} = 4\\hat{i} - 2\\hat{j} + 2\\hat{k}$. Nilai perkalian skalar $\\vec{A} \\cdot \\vec{B}$ adalah...",
    "pilihan": [
      "$0$",
      "$2$",
      "$4$",
      "$-2$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Perkalian skalar: $$\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z = (2)(4) + (3)(-2) + (-1)(2) = 8 - 6 - 2 = 0$$ Karena hasil dot product adalah 0, kedua vektor saling tegak lurus (ortogonal)."
  },
  {
    "id": "FIS-B03-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Kinematika Gerak Lurus (GLB dan GLBB)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Gerak Horisontal & Vertikal GLBB",
    "variasiTipe": "Variasi 1: GLBB Horizontal dengan Percepatan Konstan",
    "kesulitan": "mudah",
    "pertanyaan": "Sebuah mobil bergerak dari keadaan diam dengan percepatan konstan $a = 4\\text{ m/s}^2$. Berapakah kecepatan mobil tersebut setelah bergerak selama $t = 5\\text{ s}$?",
    "pilihan": [
      "$10\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Menggunakan persamaan GLBB tanpa perpindahan: $$v_t = v_0 + a \\cdot t$$ Karena mobil berangkat dari keadaan diam ($v_0 = 0\\text{ m/s}$): $$v_t = 0 + (4\\text{ m/s}^2)(5\\text{ s}) = 20\\text{ m/s}$$"
  },
  {
    "id": "FIS-B03-P1-02",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Kinematika Gerak Lurus (GLB dan GLBB)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Gerak Horisontal & Vertikal GLBB",
    "variasiTipe": "Variasi 2: Gerak Vertikal ke Atas & Titik Tertinggi",
    "kesulitan": "sedang",
    "pertanyaan": "Benda bermassa $m = 2\\text{ kg}$ dilempar vertikal ke atas dengan kecepatan awal $v_0 = 20\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, ketinggian maksimum $h_{\\text{maks}}$ yang dicapai benda adalah...",
    "pilihan": [
      "$10\\text{ m}$",
      "$15\\text{ m}$",
      "$20\\text{ m}$",
      "$40\\text{ m}$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Pada ketinggian maksimum, kecepatan akhir $v_t = 0\\text{ m/s}$. $$v_t^2 = v_0^2 - 2gh_{\\text{maks}} \\implies h_{\\text{maks}} = \\frac{v_0^2}{2g} = \\frac{20^2}{2(10)} = \\frac{400}{20} = 20\\text{ m}$$"
  },
  {
    "id": "FIS-B04-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Kinematika Gerak Parabola dan Melingkar",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Lintasan Parabola & Gerak Melingkar",
    "variasiTipe": "Variasi 1: Jangkauan Terjauh Peluru Gerak Parabola",
    "kesulitan": "sedang",
    "pertanyaan": "Sebuah peluru ditembakkan dengan kecepatan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\alpha = 45^{\\circ}$. Jika $g = 10\\text{ m/s}^2$, jarak mendatar maksimum $x_{\\text{maks}}$ yang dicapai peluru adalah...",
    "pilihan": [
      "$125\\text{ m}$",
      "$250\\text{ m}$",
      "$500\\text{ m}$",
      "$75\\text{ m}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Rumus jarak terjauh gerak parabola di tanah datar: $$x_{\\text{maks}} = \\frac{v_0^2 \\sin(2\\alpha)}{g}$$ Karena $\\alpha = 45^\\circ \\implies 2\\alpha = 90^\\circ \\implies \\sin 90^\\circ = 1$: $$x_{\\text{maks}} = \\frac{50^2 \\times 1}{10} = \\frac{2500}{10} = 250\\text{ m}$$"
  },
  {
    "id": "FIS-B05-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Dinamika Gerak (Hukum Newton)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Hukum II Newton & Gaya Gesek",
    "variasiTipe": "Variasi 1: Balok pada Bidang Datar Licin",
    "kesulitan": "mudah",
    "pertanyaan": "Sebuah balok bermassa $m = 5\\text{ kg}$ ditarik dengan gaya mendatar $F = 30\\text{ N}$ di atas lantai licin tanpa gesekan. Berapakah percepatan balok tersebut?",
    "pilihan": [
      "$4\\text{ m/s}^2$",
      "$6\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$15\\text{ m/s}^2$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Berdasarkan Hukum II Newton: $$\\sum F = m \\cdot a \\implies a = \\frac{F}{m}$$ Substitusi nilai: $$a = \\frac{30\\text{ N}}{5\\text{ kg}} = 6\\text{ m/s}^2$$"
  },
  {
    "id": "FIS-B05-P1-02",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Dinamika Gerak (Hukum Newton)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Hukum II Newton & Gaya Gesek",
    "variasiTipe": "Variasi 2: Pengaruh Gaya Gesek Kinetis",
    "kesulitan": "sedang",
    "pertanyaan": "Balok bermassa $m = 4\\text{ kg}$ ditarik dengan gaya $F = 20\\text{ N}$ di atas lantai kasar (koefisien gesek kinetis $\\mu_k = 0{,}2$, $g = 10\\text{ m/s}^2$). Percepatan balok adalah...",
    "pilihan": [
      "$2\\text{ m/s}^2$",
      "$3\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Gaya normal $N = mg = (4)(10) = 40\\text{ N}$. Gaya gesek kinetis $f_k = \\mu_k N = (0{,}2)(40) = 8\\text{ N}$. Sesuai Hukum II Newton: $$\\sum F = F - f_k = m \\cdot a \\implies 20 - 8 = 4a \\implies 12 = 4a \\implies a = 3\\text{ m/s}^2$$"
  },
  {
    "id": "FIS-B08-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Dinamika Rotasi dan Kesetimbangan Benda Tegar",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Momen Inersia & Gerak Menggelinding",
    "variasiTipe": "Variasi 1: Menggelinding Murni pada Bidang Miring",
    "kesulitan": "sulit",
    "pertanyaan": "Sebuah silinder pejal bermassa $M = 4\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ m}$ menggelinding murni tanpa slip dari ketinggian $h = 3\\text{ m}$. Jika momen inersia $I = \\frac{1}{2} M R^2$ dan $g = 10\\text{ m/s}^2$, kecepatan linier silinder di dasar adalah...",
    "pilihan": [
      "$\\sqrt{40}\\text{ m/s} \\approx 6{,}32\\text{ m/s}$",
      "$\\sqrt{60}\\text{ m/s} \\approx 7{,}75\\text{ m/s}$",
      "$\\sqrt{30}\\text{ m/s} \\approx 5{,}48\\text{ m/s}$",
      "$2\\sqrt{10}\\text{ m/s} \\approx 6{,}32\\text{ m/s}$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Hukum Kekekalan Energi Mekanik: $$Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2$$ Karena $\\omega = \\frac{v}{R}$ dan $I = \\frac{1}{2}MR^2$, total $E_k = \\frac{3}{4}Mv^2$. $$Mgh = \\frac{3}{4}Mv^2 \\implies v = \\sqrt{\\frac{4}{3}gh}$$ Substitusi $g = 10, h = 3$: $$v = \\sqrt{\\frac{4}{3} \\cdot 10 \\cdot 3} = \\sqrt{40}\\text{ m/s}$$"
  },
  {
    "id": "FIS-B11-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Fluida Statis",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Tekanan Hidrostatis & Hukum Archimedes",
    "variasiTipe": "Variasi 1: Tekanan Hidrostatis pada Kedalaman Tertentu",
    "kesulitan": "mudah",
    "pertanyaan": "Seorang penyelam berada pada kedalaman $h = 8\\text{ m}$ di bawah permukaan air laut (massa jenis $\\rho = 1000\\text{ kg/m}^3$). Jika $g = 10\\text{ m/s}^2$, berapakah tekanan hidrostatis yang dialami penyelam?",
    "pilihan": [
      "$8\\text{ kPa}$",
      "$80\\text{ kPa}$",
      "$800\\text{ kPa}$",
      "$8000\\text{ kPa}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Tekanan hidrostatis dihitung dengan: $$P_h = \\rho \\cdot g \\cdot h = (1000\\text{ kg/m}^3) \\times (10\\text{ m/s}^2) \\times (8\\text{ m}) = 80.000\\text{ Pa} = 80\\text{ kPa}$$"
  },
  {
    "id": "FIS-B12-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Fluida Dinamis",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Kontinuitas & Hukum Bernoulli",
    "variasiTipe": "Variasi 1: Persamaan Kontinuitas Penampang Berbeda",
    "kesulitan": "mudah",
    "pertanyaan": "Air mengalir melalui pipa mendatar dengan luas penampang $A_1 = 12\\text{ cm}^2$ dengan kelajuan $v_1 = 2\\text{ m/s}$. Jika pipa tersebut menyempit ke luas penampang $A_2 = 3\\text{ cm}^2$, kelajuan air pada penampang sempit $v_2$ adalah...",
    "pilihan": [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$12\\text{ m/s}$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Berdasarkan Persamaan Kontinuitas untuk fluida inkompresibel: $$A_1 \\cdot v_1 = A_2 \\cdot v_2 \\implies (12\\text{ cm}^2)(2\\text{ m/s}) = (3\\text{ cm}^2) \\cdot v_2 \\implies v_2 = \\frac{24}{3} = 8\\text{ m/s}$$"
  },
  {
    "id": "FIS-B15-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Hukum Termodinamika dan Siklus Mesin",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Mesin Carnot & Proses Gas Ideal",
    "variasiTipe": "Variasi 1: Efisiensi Maksimum Mesin Kalor Carnot",
    "kesulitan": "sedang",
    "pertanyaan": "Sebuah mesin kalor Carnot menyerap kalor dari reservoir bersuhu tinggi $T_H = 500\\text{ K}$ dan membuang kalor ke reservoir bersuhu rendah $T_C = 350\\text{ K}$. Berapakah efisiensi termal $\\eta$ mesin Carnot tersebut?",
    "pilihan": [
      "$25\\%$",
      "$30\\%$",
      "$45\\%$",
      "$70\\%$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Efisiensi teoritis siklus Carnot: $$\\eta = \\left(1 - \\frac{T_C}{T_H}\\right) \\times 100\\% = \\left(1 - \\frac{350}{500}\\right) \\times 100\\% = (1 - 0{,}70) \\times 100\\% = 30\\%$$"
  },
  {
    "id": "FIS-B17-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Gelombang Bunyi",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Efek Doppler & Intensitas Bunyi",
    "variasiTipe": "Variasi 1: Efek Doppler Sumber Bergerak Mendekat",
    "kesulitan": "sedang",
    "pertanyaan": "Sebuah ambulans bergerak mendekati pendengar diam dengan laju $v_s = 20\\text{ m/s}$ sambil membunyikan sirine berfrekuensi $f_s = 640\\text{ Hz}$. Jika cepat rambat bunyi di udara $v = 340\\text{ m/s}$, frekuensi yang didengar pendengar adalah...",
    "pilihan": [
      "$600\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Menggunakan Efek Doppler untuk pendengar diam ($v_p = 0$) dan sumber mendekat: $$f_p = \\left(\\frac{v}{v - v_s}\\right) f_s = \\left(\\frac{340}{340 - 20}\\right) \\times 640 = \\left(\\frac{340}{320}\\right) \\times 640 = 680\\text{ Hz}$$"
  },
  {
    "id": "FIS-B21-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Listrik Arus Searah (DC)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Rangkaian Resistor & Hukum Kirchhoff",
    "variasiTipe": "Variasi 1: Hukum Ohm & Daya Listrik",
    "kesulitan": "mudah",
    "pertanyaan": "Sebuah kawat penghantar memiliki hambatan $R = 12\\ \\Omega$ dihubungkan ke sumber tegangan $V = 24\\text{ V}$. Berapakah kuat arus listrik yang mengalir pada kawat?",
    "pilihan": [
      "$0{,}5\\text{ A}$",
      "$2{,}0\\text{ A}$",
      "$4{,}0\\text{ A}$",
      "$288\\text{ A}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Sesuai Hukum Ohm: $$I = \\frac{V}{R} = \\frac{24\\text{ V}}{12\\ \\Omega} = 2{,}0\\text{ A}$$"
  },
  {
    "id": "FIS-B22-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Medan Magnetik dan Gaya Lorentz",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Gaya Lorentz & Medan Biot-Savart",
    "variasiTipe": "Variasi 1: Gaya Lorentz pada Kawat Lurus Berarus",
    "kesulitan": "sedang",
    "pertanyaan": "Kawat lurus berarus listrik $I = 5\\text{ A}$ sepanjang $L = 0{,}4\\text{ m}$ berada tegak lurus dalam medan magnet homogen $B = 0{,}6\\text{ T}$. Besar gaya Lorentz yang dialami kawat adalah...",
    "pilihan": [
      "$0{,}8\\text{ N}$",
      "$1{,}2\\text{ N}$",
      "$1{,}5\\text{ N}$",
      "$2{,}4\\text{ N}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Gaya Lorentz pada kawat berarus: $$F = B \\cdot I \\cdot L \\sin\\theta$$ Karena tegak lurus ($\\theta = 90^\\circ \\implies \\sin 90^\\circ = 1$): $$F = (0{,}6\\text{ T}) \\times (5\\text{ A}) \\times (0{,}4\\text{ m}) \\times 1 = 1{,}2\\text{ N}$$"
  },
  {
    "id": "FIS-B24-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Rangkaian Arus Bolak-Balik (AC)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Impedansi & Resonansi RLC",
    "variasiTipe": "Variasi 1: Frekuensi Sudut Resonansi RLC Seri",
    "kesulitan": "sulit",
    "pertanyaan": "Rangkaian RLC seri memiliki induktor $L = 0{,}1\\text{ H}$ dan kapasitor $C = 10\\ \\mu\\text{F}$. Frekuensi resonansi sudut $\\omega_0$ dari rangkaian tersebut adalah...",
    "pilihan": [
      "$100\\text{ rad/s}$",
      "$1.000\\text{ rad/s}$",
      "$10.000\\text{ rad/s}$",
      "$500\\text{ rad/s}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Frekuensi sudut resonansi rangkaian RLC seri terjadi saat $X_L = X_C$: $$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{0{,}1 \\times 10^{-5}}} = \\frac{1}{\\sqrt{10^{-6}}} = 1.000\\text{ rad/s}$$"
  },
  {
    "id": "FIS-B26-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Teori Relativitas Khusus",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Dilatasi Waktu & Kontraksi Panjang",
    "variasiTipe": "Variasi 1: Dilatasi Waktu Pengamat Bergerak",
    "kesulitan": "sulit",
    "pertanyaan": "Sebuah pesawat luar angkasa melintas dengan kecepatan $v = 0{,}8c$. Jika pengamat di dalam pesawat mencatat perjalanan memakan waktu $\\Delta t_0 = 6\\text{ jam}$, waktu perjalanan menurut pengamat diam di bumi adalah...",
    "pilihan": [
      "$3{,}6\\text{ jam}$",
      "$7{,}5\\text{ jam}$",
      "$10{,}0\\text{ jam}$",
      "$12{,}0\\text{ jam}$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Berdasarkan efek dilatasi waktu relativitas khusus Einstein: $$\\Delta t = \\frac{\\Delta t_0}{\\sqrt{1 - \\frac{v^2}{c^2}}}$$ Untuk $v = 0{,}8c$, faktor Lorentz $\\gamma$: $$\\gamma = \\frac{1}{\\sqrt{1 - (0{,}8)^2}} = \\frac{5}{3} \\implies \\Delta t = 6 \\times \\frac{5}{3} = 10\\text{ jam}$$"
  },
  {
    "id": "FIS-B27-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Fisika",
    "bab": "Gejala Kuantum dan Dualisme Gelombang-Partikel",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Efek Fotolistrik & Foton Planck",
    "variasiTipe": "Variasi 1: Energi Kinetik Maksimum Efek Fotolistrik",
    "kesulitan": "sulit",
    "pertanyaan": "Fungsi kerja suatu logam adalah $W_0 = 2{,}2\\text{ eV}$. Logam tersebut disinari foton berfrekuensi $f = 10^{15}\\text{ Hz}$. Jika konstanta Planck $h = 6{,}63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ dan $1\\text{ eV} = 1{,}6 \\times 10^{-19}\\text{ J}$, energi kinetik maksimum elektron yang keluar adalah...",
    "pilihan": [
      "$1{,}94\\text{ eV}$",
      "$2{,}20\\text{ eV}$",
      "$4{,}14\\text{ eV}$",
      "$0{,}85\\text{ eV}$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Energi foton: $$E = hf = (6{,}63 \\times 10^{-34})(10^{15}) = 6{,}63 \\times 10^{-19}\\text{ J} = \\frac{6{,}63 \\times 10^{-19}}{1{,}6 \\times 10^{-19}} \\approx 4{,}14\\text{ eV}$$ Berdasarkan persamaan efek fotolistrik Einstein: $$E_{k,\\text{maks}} = E - W_0 = 4{,}14\\text{ eV} - 2{,}20\\text{ eV} = 1{,}94\\text{ eV}$$"
  },
  {
    "id": "MTK-B01-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Eksponen dan Logaritma",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Sifat Eksponen & Merasionalkan Bentuk Akar",
    "variasiTipe": "Variasi 1: Penyederhanaan Pecahan Pangkat Bulat Negatif",
    "kesulitan": "mudah",
    "pertanyaan": "Bentuk sederhana dari pecahan aljabar eksponen $\\frac{a^3 b^{-2}}{a^{-1} b^4}$ adalah...",
    "pilihan": [
      "$\\frac{a^4}{b^6}$",
      "$\\frac{a^2}{b^2}$",
      "$a^4 b^2$",
      "$\\frac{a^2}{b^6}$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Menggunakan aturan eksponen $\\frac{x^m}{x^n} = x^{m-n}$: $$\\frac{a^3}{a^{-1}} = a^{3 - (-1)} = a^4, \\quad \\frac{b^{-2}}{b^4} = b^{-2 - 4} = b^{-6} = \\frac{1}{b^6} \\implies \\frac{a^4}{b^6}$$"
  },
  {
    "id": "MTK-B02-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Eksponen dan Logaritma",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Sifat Dasar & Persamaan Logaritma",
    "variasiTipe": "Variasi 1: Sifat Selisih & Pembagian Basis Numerus",
    "kesulitan": "mudah",
    "pertanyaan": "Nilai dari ${}^2\\log 48 - {}^2\\log 3$ adalah...",
    "pilihan": [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Menggunakan sifat pengurangan logaritma: $${}^a\\log b - {}^a\\log c = {}^a\\log\\left(\\frac{b}{c}\\right) \\implies {}^2\\log 48 - {}^2\\log 3 = {}^2\\log\\left(\\frac{48}{3}\\right) = {}^2\\log 16 = 4$$"
  },
  {
    "id": "MTK-B03-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Fungsi Kuadrat dan Rasional",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Teorema Vieta & Titik Puncak Parabola",
    "variasiTipe": "Variasi 1: Jumlah dan Hasil Kali Akar Persamaan Kuadrat",
    "kesulitan": "mudah",
    "pertanyaan": "Akar-akar persamaan kuadrat $x^2 - 7x + 12 = 0$ adalah $x_1$ dan $x_2$. Nilai dari $x_1 + x_2$ dan $x_1 \\cdot x_2$ berturut-turut adalah...",
    "pilihan": [
      "$7$ dan $12$",
      "$-7$ dan $12$",
      "$7$ dan $-12$",
      "$-7$ dan $-12$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Berdasarkan Teorema Vieta untuk $ax^2 + bx + c = 0$: $$x_1 + x_2 = -\\frac{b}{a} = -\\frac{-7}{1} = 7, \\quad x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{12}{1} = 12$$"
  },
  {
    "id": "MTK-B03-P2-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Fungsi Kuadrat dan Rasional",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Variasi Aplikasi Deret & Model Kuadrat",
    "variasiTipe": "Variasi 2: Konvergensi Deret Geometri Tak Hingga Terkait",
    "kesulitan": "sedang",
    "pertanyaan": "Jumlah tak hingga dari deret geometri $18 + 12 + 8 + \\frac{16}{3} + \\dots$ adalah...",
    "pilihan": [
      "$36$",
      "$48$",
      "$54$",
      "$72$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Suku pertama $a = 18$, rasio $r = \\frac{12}{18} = \\frac{2}{3}$. $$S_\\infty = \\frac{a}{1 - r} = \\frac{18}{1 - 2/3} = 18 \\times 3 = 54$$"
  },
  {
    "id": "MTK-B04-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Persamaan dan Pertidaksamaan Nilai Mutlak",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Pertidaksamaan Linear & Nilai Mutlak",
    "variasiTipe": "Variasi 1: Interval Batas Nilai Mutlak Satu Arah",
    "kesulitan": "sedang",
    "pertanyaan": "Himpunan penyelesaian dari pertidaksamaan nilai mutlak $|2x - 3| \\le 7$ adalah...",
    "pilihan": [
      "$-2 \\le x \\le 5$",
      "$-5 \\le x \\le 2$",
      "$x \\le -2 \\text{ atau } x \\ge 5$",
      "$-2 < x < 5$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Sifat $|u| \\le a \\iff -a \\le u \\le a$: $$-7 \\le 2x - 3 \\le 7 \\implies -4 \\le 2x \\le 10 \\implies -2 \\le x \\le 5$$"
  },
  {
    "id": "MTK-B06-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Matriks Dasar (Operasi, Determinan, dan Invers Ordo 2x2)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Determinan & Operasi Invers Matriks",
    "variasiTipe": "Variasi 1: Determinan dari Matriks Invers",
    "kesulitan": "sedang",
    "pertanyaan": "Diberikan matriks $A = \\begin{pmatrix} 3 & 4 \\\\ 1 & 2 \\end{pmatrix}$. Determinan dari matriks $A^{-1}$ (invers dari $A$) adalah...",
    "pilihan": [
      "$2$",
      "$\\frac{1}{2}$",
      "$-2$",
      "$-\\frac{1}{2}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Determinan matriks $A$: $$\\det(A) = (3)(2) - (4)(1) = 6 - 4 = 2$$ Maka determinan inversnya: $$\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{2}$$"
  },
  {
    "id": "MTK-B09-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Geometri Ruang (Dimensi Tiga: Jarak dan Sudut)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Jarak Titik, Garis, & Bidang",
    "variasiTipe": "Variasi 1: Jarak Titik Sudut ke Bidang Diagonal Kubus",
    "kesulitan": "sulit",
    "pertanyaan": "Diketahui kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$. Jarak titik $E$ ke bidang $BDG$ adalah...",
    "pilihan": [
      "$2\\sqrt{3}\\text{ cm}$",
      "$3\\sqrt{3}\\text{ cm}$",
      "$4\\sqrt{3}\\text{ cm}$",
      "$2\\sqrt{6}\\text{ cm}$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Diagonal ruang $EC = 6\\sqrt{3}\\text{ cm}$. Jarak titik $E$ ke bidang $BDG$ adalah $\\frac{2}{3} EC = \\frac{2}{3} (6\\sqrt{3}) = 4\\sqrt{3}\\text{ cm}$."
  },
  {
    "id": "MTK-B12-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Lanjut",
    "bab": "Limit Fungsi (Aljabar, Trigonometri, dan Menuju Tak Hingga)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Limit Aljabar & Perkalian Sekawan",
    "variasiTipe": "Variasi 1: Bentuk Tak Tentu Akar Aljabar",
    "kesulitan": "sulit",
    "pertanyaan": "Nilai dari $\\lim_{x \\to 2} \\frac{\\sqrt{x + 2} - 2}{x - 2}$ adalah...",
    "pilihan": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{8}$",
      "$1$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Mengalikan dengan sekawan: $$\\lim_{x \\to 2} \\frac{(x+2) - 4}{(x-2)(\\sqrt{x+2} + 2)} = \\lim_{x \\to 2} \\frac{1}{\\sqrt{x+2} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$$"
  },
  {
    "id": "MTK-B13-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Lanjut",
    "bab": "Turunan Fungsi (Aljabar, Trigonometri, Aturan Rantai, dan Aplikasi)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Aturan Rantai & Evaluasi Nilai Turunan",
    "variasiTipe": "Variasi 1: Turunan Pertama Fungsi Polinomial",
    "kesulitan": "mudah",
    "pertanyaan": "Jika $f(x) = 3x^3 - 5x^2 + 7x - 4$, berapakah nilai turunan pertama $f'(2)$?",
    "pilihan": [
      "$19$",
      "$23$",
      "$27$",
      "$31$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Turunan pertama: $$f'(x) = 9x^2 - 10x + 7$$ Substitusikan $x = 2$: $$f'(2) = 9(2)^2 - 10(2) + 7 = 36 - 20 + 7 = 23$$"
  },
  {
    "id": "MTK-B13-P2-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Lanjut",
    "bab": "Turunan Fungsi (Aljabar, Trigonometri, Aturan Rantai, dan Aplikasi)",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Variasi Garis Singgung & Optimasi Maksimum/Minimum",
    "variasiTipe": "Variasi 2: Garis Singgung Kurva Parabola Sejajar Garis Lain",
    "kesulitan": "sulit",
    "pertanyaan": "Persamaan garis singgung kurva $y = x^2 - 4x + 3$ yang sejajar dengan garis $2x - y + 5 = 0$ adalah...",
    "pilihan": [
      "$y = 2x - 6$",
      "$y = 2x - 4$",
      "$y = 2x + 1$",
      "$y = 2x - 8$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Gradien $m = 2$. Turunan kurva $y' = 2x - 4 = 2 \\implies x = 3$. Titik singgung $(3, 0)$. Persamaan garis singgung: $y - 0 = 2(x - 3) \\implies y = 2x - 6$."
  },
  {
    "id": "MTK-B14-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Lanjut",
    "bab": "Integral Fungsi (Tentu, Tak Tentu, Substitusi, Parsial, Luas Daerah, Volume Benda Putar)",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Variasi Integral Tentu & Luas Daerah",
    "variasiTipe": "Variasi 1: Evaluasi Integral Tentu Polinomial",
    "kesulitan": "sedang",
    "pertanyaan": "Nilai dari integral tentu $\\int_0^2 (3x^2 - 4x + 1)\\,dx$ adalah...",
    "pilihan": [
      "$0$",
      "$2$",
      "$4$",
      "$6$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Antiturunan: $$F(x) = x^3 - 2x^2 + x$$ Evaluasi $[0, 2]$: $$F(2) = (2)^3 - 2(2)^2 + (2) = 8 - 8 + 2 = 2, \\quad F(0) = 0 \\implies F(2) - F(0) = 2$$"
  },
  {
    "id": "MTK-B15-P1-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Aturan Perkalian, Pengisian Tempat, & Formasi Angka",
    "variasiTipe": "Variasi 1: Kombinasi Pemilihan Unsur Acak",
    "kesulitan": "sedang",
    "pertanyaan": "Dari 8 orang calon pengurus OSIS, akan dipilih 3 orang untuk menjadi delegasi lomba debat tanpa membedakan jabatan. Banyaknya susunan delegasi yang dapat dibentuk adalah...",
    "pilihan": [
      "$24$",
      "$56$",
      "$112$",
      "$336$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Pemilihan delegasi tidak memperhatikan urutan jabatan, sehingga dihitung menggunakan kombinasi: $$C(8, 3) = \\frac{8!}{3!(8 - 3)!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$"
  },
  {
    "id": "MTK-B15-P1-02",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Aturan Perkalian, Pengisian Tempat, & Formasi Angka",
    "variasiTipe": "Variasi 2: Kaidah Pengisian Tempat Bilangan Ganjil",
    "kesulitan": "mudah",
    "pertanyaan": "Dari angka-angka $1, 2, 3, 5, 7, 8$, dan $9$ akan disusun bilangan ratusan ganjil yang terdiri atas 3 angka berbeda. Banyaknya bilangan yang dapat disusun adalah...",
    "pilihan": [
      "$90$",
      "$120$",
      "$150$",
      "$210$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Bilangan ratusan ganjil 3 angka berbeda dari himpunan 7 angka ${1, 2, 3, 5, 7, 8, 9}$: digit satuan harus ganjil ${1, 3, 5, 7, 9}$ ($5$ pilihan). Digit ratusan dapat diisi oleh sisa $7 - 1 = 6$ angka. Digit puluhan dapat diisi oleh sisa $7 - 2 = 5$ angka. Banyak susunan bilangan $= 6 \\times 5 \\times 5 = 150$."
  },
  {
    "id": "MTK-B15-P1-03",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Aturan Perkalian, Pengisian Tempat, & Formasi Angka",
    "variasiTipe": "Variasi 3: Bilangan Genap Memuat Nol dengan Pemisahan Kasus",
    "kesulitan": "sedang",
    "pertanyaan": "Dari angka-angka $0, 1, 2, 3, 4, 5$, dan $6$ akan disusun bilangan genap yang terdiri atas 3 angka berlainan. Banyaknya bilangan genap yang dapat dibentuk adalah...",
    "pilihan": [
      "$90$",
      "$105$",
      "$120$",
      "$144$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Karena angka $0$ tidak boleh di ratusan dan mempengaruhi syarat satuan genap, pisahkan menjadi 2 kasus: (1) Satuan angka $0$: ratusan ${1..6}$ ($6$ cara), puluhan ($5$ cara) $\\implies 6 \\times 5 \\times 1 = 30$. (2) Satuan genap ${2, 4, 6}$ ($3$ cara): ratusan bukan 0 dan bukan satuan ($5$ cara), puluhan ($5$ cara) $\\implies 5 \\times 5 \\times 3 = 75$. Total bilangan genap $= 30 + 75 = 105$."
  },
  {
    "id": "MTK-B15-P1-04",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Aturan Perkalian, Pengisian Tempat, & Formasi Angka",
    "variasiTipe": "Variasi 4: Rute Perjalanan Pulang Pergi Tanpa Jalur Sama",
    "kesulitan": "sedang",
    "pertanyaan": "Dari kota A ke kota B terdapat 5 jalan yang berbeda, dan dari kota B ke kota C terdapat 4 jalan yang berbeda. Seseorang berangkat dari kota A ke kota C melalui B, lalu kembali ke kota A melalui B. Jika saat kembali ia tidak boleh menggunakan jalan yang sama dengan saat berangkat, banyak rute perjalanan yang dapat dipilih adalah...",
    "pilihan": [
      "$120$",
      "$240$",
      "$360$",
      "$400$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Rute berangkat (A $\\to$ B $\\to$ C): $5 \\times 4 = 20$ cara. Rute kembali (C $\\to$ B $\\to$ A) tanpa melalui jalan yang sama: dari C ke B tersisa $4 - 1 = 3$ jalan, dan dari B ke A tersisa $5 - 1 = 4$ jalan, sehingga rute pulang $= 3 \\times 4 = 12$ cara. Total variasi rute $= 20 \\times 12 = 240$."
  },
  {
    "id": "MTK-B15-P1-05",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-1",
    "paketNama": "Paket 1: Aturan Perkalian, Pengisian Tempat, & Formasi Angka",
    "variasiTipe": "Variasi 5: Bilangan Ribuan dengan Interval Batas Nilai",
    "kesulitan": "sulit",
    "pertanyaan": "Dari angka-angka $1, 2, 3, 4, 5, 6, 7$ akan disusun bilangan ribuan berbeda yang bernilai di antara $3.000$ dan $6.000$. Banyaknya bilangan yang dapat dibentuk adalah...",
    "pilihan": [
      "$360$",
      "$480$",
      "$600$",
      "$720$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Bilangan ribuan terdiri dari 4 digit. Agar nilainya berada di antara $3.000$ dan $6.000$, digit ribuan harus dipilih dari ${3, 4, 5}$ ($3$ pilihan). Digit ratusan diisi dari sisa $7 - 1 = 6$ angka, puluhan dari $5$ angka, dan satuan dari $4$ angka. Banyak bilangan $= 3 \\times 6 \\times 5 \\times 4 = 360$."
  },
  {
    "id": "MTK-B15-P2-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Permutasi, Unsur Sama, & Penataan Melingkar",
    "variasiTipe": "Variasi 1: Permutasi Posisi Jabatan Berstruktur",
    "kesulitan": "mudah",
    "pertanyaan": "Dalam pemilihan pengurus kelas yang terdiri atas Ketua, Sekretaris, dan Bendahara, terdapat 7 calon siswa yang memenuhi kriteria. Jika setiap orang hanya boleh menempati paling banyak satu jabatan, banyaknya susunan pengurus yang mungkin terbentuk adalah...",
    "pilihan": [
      "$35$",
      "$120$",
      "$210$",
      "$840$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Karena jabatan yang dipilih memiliki fungsi dan peran berbeda (urutan diperhitungkan), gunakan permutasi $P(7, 3)$: $$P(7, 3) = \\frac{7!}{(7 - 3)!} = \\frac{7!}{4!} = 7 \\times 6 \\times 5 = 210$$"
  },
  {
    "id": "MTK-B15-P2-02",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Permutasi, Unsur Sama, & Penataan Melingkar",
    "variasiTipe": "Variasi 2: Permutasi Huruf Kembar Anagram Kata",
    "kesulitan": "mudah",
    "pertanyaan": "Banyaknya susunan huruf berbeda yang dapat dibentuk dari huruf-huruf pada kata \"SURABAYA\" adalah...",
    "pilihan": [
      "$1.680$",
      "$3.360$",
      "$6.720$",
      "$20.160$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Kata 'SURABAYA' memiliki $n = 8$ huruf dengan huruf 'A' muncul sebanyak $3$ kali. Banyak susunan anagram dihitung dengan permutasi unsur sama: $$P = \\frac{8!}{3!} = \\frac{8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3!}{3!} = 6.720$$"
  },
  {
    "id": "MTK-B15-P2-03",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Permutasi, Unsur Sama, & Penataan Melingkar",
    "variasiTipe": "Variasi 3: Permutasi Unsur Wajib Berdampingan",
    "kesulitan": "sedang",
    "pertanyaan": "Terdapat 5 siswa laki-laki dan 2 siswi perempuan yang akan berbaris dalam satu barisan lurus untuk upacara. Jika kedua siswi perempuan harus selalu berdiri berdampingan, banyaknya variasi susunan barisan adalah...",
    "pilihan": [
      "$720$",
      "$1.440$",
      "$2.880$",
      "$5.040$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Ikat kedua siswi perempuan menjadi $1$ kelompok kesatuan. Jumlah elemen efektif menjadi $5 + 1 = 6$ elemen. Permutasi susunan luar kelompok adalah $6! = 720$. Pertukaran posisi internal antar kedua siswi adalah $2! = 2$. Total susunan $= 6! \\times 2! = 720 \\times 2 = 1.440$."
  },
  {
    "id": "MTK-B15-P2-04",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Permutasi, Unsur Sama, & Penataan Melingkar",
    "variasiTipe": "Variasi 4: Permutasi Siklis dengan Syarat Berdampingan",
    "kesulitan": "sedang",
    "pertanyaan": "Sebanyak 6 orang sahabat (termasuk Budi dan Dedi) duduk mengelilingi meja bundar untuk makan malam bersama. Jika Budi dan Dedi disyaratkan harus duduk berdampingan, banyak cara susunan duduk mereka adalah...",
    "pilihan": [
      "$24$",
      "$48$",
      "$120$",
      "$240$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Anggap Budi dan Dedi sebagai $1$ kesatuan, sehingga terdapat $5$ objek melingkar. Permutasi siklis $5$ objek adalah $(5 - 1)! = 4! = 24$. Di dalam kelompoknya, Budi dan Dedi dapat bertukar posisi dalam $2! = 2$ cara. Total susunan duduk $= 24 \\times 2 = 48$."
  },
  {
    "id": "MTK-B15-P2-05",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-2",
    "paketNama": "Paket 2: Permutasi, Unsur Sama, & Penataan Melingkar",
    "variasiTipe": "Variasi 5: Permutasi Unsur Dilarang Bersebelahan",
    "kesulitan": "sulit",
    "pertanyaan": "Empat anak laki-laki dan 3 anak perempuan akan duduk berjajar pada 7 kursi kosong. Jika disyaratkan tidak boleh ada anak perempuan yang duduk berdampingan satu sama lain, banyaknya susunan duduk yang mungkin adalah...",
    "pilihan": [
      "$720$",
      "$1.440$",
      "$2.880$",
      "$5.040$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Gunakan metode celah (*slot method*): Susun terlebih dahulu $4$ anak laki-laki dalam satu baris $\\implies 4! = 24$ cara. Di antara dan di ujung-ujung anak laki-laki terdapat $5$ celah kosong. Tempatkan $3$ anak perempuan ke dalam $5$ celah tersebut $\\implies P(5, 3) = 5 \\times 4 \\times 3 = 60$ cara. Banyak susunan total $= 24 \\times 60 = 1.440$."
  },
  {
    "id": "MTK-B15-P3-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-3",
    "paketNama": "Paket 3: Kombinasi, Seleksi Tim, & Geometri/Binomial",
    "variasiTipe": "Variasi 1: Pemilihan Soal Ujian dengan Nomor Wajib",
    "kesulitan": "mudah",
    "pertanyaan": "Seorang siswa diwajibkan mengerjakan 7 dari 10 soal ulangan matematika yang diberikan. Jika soal nomor 1 sampai nomor 3 wajib dikerjakan, banyak pilihan soal yang dapat diambil siswa tersebut adalah...",
    "pilihan": [
      "$21$",
      "$35$",
      "$70$",
      "$120$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Karena $3$ soal pertama wajib dikerjakan, siswa tinggal memilih sisa $7 - 3 = 4$ soal dari sisa $10 - 3 = 7$ soal yang tersedia: $$C(7, 4) = C(7, 3) = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$$"
  },
  {
    "id": "MTK-B15-P3-02",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-3",
    "paketNama": "Paket 3: Kombinasi, Seleksi Tim, & Geometri/Binomial",
    "variasiTipe": "Variasi 2: Kombinasi Komposisi Tim Bersyarat Kuota Minimal",
    "kesulitan": "sedang",
    "pertanyaan": "Dari 6 orang dokter dan 5 orang perawat akan dibentuk satu tim medis beranggotakan 4 orang untuk bertugas di daerah bencana. Jika tim tersebut harus memuat paling sedikit 2 orang dokter, banyaknya formasi tim medis yang dapat dibentuk adalah...",
    "pilihan": [
      "$215$",
      "$245$",
      "$265$",
      "$315$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Bagi menjadi 3 kasus komposisi tim: (1) 2 Dokter & 2 Perawat: $\\binom{6}{2} \\times \\binom{5}{2} = 15 \\times 10 = 150$. (2) 3 Dokter & 1 Perawat: $\\binom{6}{3} \\times \\binom{5}{1} = 20 \\times 5 = 100$. (3) 4 Dokter: $\\binom{6}{4} = 15$. Total formasi tim $= 150 + 100 + 15 = 265$."
  },
  {
    "id": "MTK-B15-P3-03",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-3",
    "paketNama": "Paket 3: Kombinasi, Seleksi Tim, & Geometri/Binomial",
    "variasiTipe": "Variasi 3: Banyak Diagonal Bidang Segi-n Beraturan",
    "kesulitan": "sedang",
    "pertanyaan": "Sebuah poligon segi-10 beraturan ($n = 10$) memiliki sejumlah ruas garis penghubung titik-titik sudutnya. Banyaknya diagonal bidang pada poligon segi-10 tersebut adalah...",
    "pilihan": [
      "$25$",
      "$35$",
      "$45$",
      "$55$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Banyak diagonal bidang pada segi-$n$ beraturan dihitung dengan rumus: $$D = \\binom{n}{2} - n = \\frac{n(n - 3)}{2} = \\frac{10 \\times (10 - 3)}{2} = \\frac{70}{2} = 35$$"
  },
  {
    "id": "MTK-B15-P3-04",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-3",
    "paketNama": "Paket 3: Kombinasi, Seleksi Tim, & Geometri/Binomial",
    "variasiTipe": "Variasi 4: Koefisien Suku Tertentu Binomial Newton",
    "kesulitan": "sedang",
    "pertanyaan": "Koefisien suku yang memuat $x^3$ pada ekspansi bentuk aljabar $(x - 2)^6$ adalah...",
    "pilihan": [
      "$-160$",
      "$-80$",
      "$80$",
      "$160$"
    ],
    "kunciJawaban": 0,
    "pembahasan": "Berdasarkan Teorema Binomial Newton, suku umum ekspansi $(x - 2)^6$ adalah: $$T_{r+1} = \\binom{6}{r} x^{6-r} (-2)^r$$ Untuk memperoleh suku $x^3$, ambil $6 - r = 3 \\implies r = 3$. Koefisien $= \\binom{6}{3} (-2)^3 = 20 \\times (-8) = -160$."
  },
  {
    "id": "MTK-B15-P3-05",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-3",
    "paketNama": "Paket 3: Kombinasi, Seleksi Tim, & Geometri/Binomial",
    "variasiTipe": "Variasi 5: Suku Konstan Bebas x Binomial Newton",
    "kesulitan": "sulit",
    "pertanyaan": "Nilai suku konstan (suku yang tidak memuat variabel $x$) pada penjabaran bentuk perpangkatan $\\left(2x + \\frac{1}{x^2}\\right)^6$ adalah...",
    "pilihan": [
      "$60$",
      "$120$",
      "$240$",
      "$480$"
    ],
    "kunciJawaban": 2,
    "pembahasan": "Suku umum ekspansi $\\left(2x + \\frac{1}{x^2}\\right)^6$ adalah: $$T_{r+1} = \\binom{6}{r} (2x)^{6-r} (x^{-2})^r = \\binom{6}{r} 2^{6-r} x^{6 - 3r}$$ Agar menjadi suku bebas $x$ (konstan), pangkat $x$ harus bernilai nol: $$6 - 3r = 0 \\implies r = 2$$ Nilai suku konstan $= \\binom{6}{2} \\times 2^{6 - 2} = 15 \\times 16 = 240$."
  },
  {
    "id": "MTK-B15-P4-01",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-4",
    "paketNama": "Paket 4: Teori Peluang, Kejadian Majemuk, & Peluang Bersyarat",
    "variasiTipe": "Variasi 1: Peluang Pengambilan Objek Serentak Kombinasi",
    "kesulitan": "mudah",
    "pertanyaan": "Sebuah kantong berisi 5 kelereng merah dan 3 kelereng kuning. Jika dari kantong tersebut diambil 2 kelereng sekaligus secara acak, peluang terambilnya 1 kelereng merah dan 1 kelereng kuning adalah...",
    "pilihan": [
      "$\\frac{5}{14}$",
      "$\\frac{15}{28}$",
      "$\\frac{5}{8}$",
      "$\\frac{15}{56}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Ruang sampel pengambilan $2$ kelereng dari total $8$ kelereng: $$n(S) = \\binom{8}{2} = \\frac{8 \\times 7}{2} = 28$$ Titik sampel terambil $1$ merah dan $1$ kuning: $$n(A) = \\binom{5}{1} \\times \\binom{3}{1} = 5 \\times 3 = 15$$ Peluang $= \\frac{n(A)}{n(S)} = \\frac{15}{28}$."
  },
  {
    "id": "MTK-B15-P4-02",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-4",
    "paketNama": "Paket 4: Teori Peluang, Kejadian Majemuk, & Peluang Bersyarat",
    "variasiTipe": "Variasi 2: Peluang Pengambilan Bertahap Tanpa Pengembalian",
    "kesulitan": "sedang",
    "pertanyaan": "Dalam sebuah kotak terdapat 4 bola hijau dan 6 bola putih. Dua bola diambil satu per satu secara berturut-turut tanpa pengembalian. Peluang terambilnya kedua bola berwarna hijau adalah...",
    "pilihan": [
      "$\\frac{1}{15}$",
      "$\\frac{2}{15}$",
      "$\\frac{4}{25}$",
      "$\\frac{1}{5}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Peluang bola pertama hijau adalah $\\frac{4}{10}$. Karena bola tidak dikembalikan, tersisa $3$ bola hijau dari $9$ bola. Peluang bola kedua hijau adalah $\\frac{3}{9}$. Peluang keduanya hijau: $$P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$$"
  },
  {
    "id": "MTK-B15-P4-03",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-4",
    "paketNama": "Paket 4: Teori Peluang, Kejadian Majemuk, & Peluang Bersyarat",
    "variasiTipe": "Variasi 3: Peluang Dua Kejadian Saling Bebas Independen",
    "kesulitan": "sedang",
    "pertanyaan": "Peluang seorang siswa lulus tes matematika adalah $0{,}8$ dan peluang ia lulus tes fisika adalah $0{,}7$. Jika kelulusan kedua tes tersebut saling bebas, peluang bahwa siswa tersebut hanya lulus tepat satu tes adalah...",
    "pilihan": [
      "$0{,}24$",
      "$0{,}38$",
      "$0{,}56$",
      "$0{,}62$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Peluang gagal matematika $= 1 - 0{,}8 = 0{,}2$, dan gagal fisika $= 1 - 0{,}7 = 0{,}3$. Kejadian 'hanya lulus tepat satu tes' terdiri atas dua kejadian saling lepas: (1) Lulus Matematika & Gagal Fisika: $0{,}8 \\times 0{,}3 = 0{,}24$. (2) Gagal Matematika & Lulus Fisika: $0{,}2 \\times 0{,}7 = 0{,}14$. Peluang total $= 0{,}24 + 0{,}14 = 0{,}38$."
  },
  {
    "id": "MTK-B15-P4-04",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-4",
    "paketNama": "Paket 4: Teori Peluang, Kejadian Majemuk, & Peluang Bersyarat",
    "variasiTipe": "Variasi 4: Peluang Komplemen Strategi Paling Sedikit Satu",
    "kesulitan": "sedang",
    "pertanyaan": "Tiga buah uang logam dilempar bersama-sama satu kali. Peluang munculnya paling sedikit satu sisi angka (A) adalah...",
    "pilihan": [
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{5}{8}$",
      "$\\frac{7}{8}$"
    ],
    "kunciJawaban": 3,
    "pembahasan": "Ruang sampel pelemparan $3$ koin adalah $n(S) = 2^3 = 8$. Kejadian tidak ada angka sama sekali adalah ketiga koin memunculkan Gambar (GGG), yaitu $1$ titik sampel. $$P(\\text{paling sedikit 1 A}) = 1 - P(\\text{semua G}) = 1 - \\frac{1}{8} = \\frac{7}{8}$$"
  },
  {
    "id": "MTK-B15-P4-05",
    "kategoriUtama": "tka",
    "subtes": "Matematika Wajib",
    "bab": "Aturan Pencacahan (Permutasi, Kombinasi) dan Peluang",
    "paketId": "paket-4",
    "paketNama": "Paket 4: Teori Peluang, Kejadian Majemuk, & Peluang Bersyarat",
    "variasiTipe": "Variasi 5: Peluang Bersyarat dari Ruang Terbatas",
    "kesulitan": "sulit",
    "pertanyaan": "Dari 80 orang peserta seleksi beasiswa, terdapat 50 orang yang menguasai bahasa Inggris dan 30 orang yang menguasai bahasa Jepang, dengan 15 orang di antaranya menguasai kedua bahasa tersebut. Jika dipilih seorang peserta secara acak dan ternyata ia menguasai bahasa Inggris, peluang bahwa peserta tersebut juga menguasai bahasa Jepang adalah...",
    "pilihan": [
      "$\\frac{3}{16}$",
      "$\\frac{3}{10}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{5}$"
    ],
    "kunciJawaban": 1,
    "pembahasan": "Merupakan persoalan peluang bersyarat $P(J \\mid I)$, di mana ruang sampel dibatasi hanya pada peserta yang menguasai bahasa Inggris ($n(I) = 50$): $$P(J \\mid I) = \\frac{n(I \\cap J)}{n(I)} = \\frac{15}{50} = \\frac{3}{10} = 0{,}30$$"
  }
];
