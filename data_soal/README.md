# EduMandiri — Panduan Struktur Direktori Bank Soal Per Paket (Drilling System)

## 1. Filosofi & Tujuan Fitur Paket Soal Variasi
Dalam persiapan ujian seleksi (TKA Saintek & UTBK SNBT), siswa sering kali membuang waktu berharga dengan mengerjakan puluhan soal yang memiliki **tipe dan pola yang sama persis** (hanya beda angka). Ini menimbulkan ilusi kemajuan (*illusion of competence*), padahal variasi soal yang lain belum dikuasai.

**Sistem Paket Soal EduMandiri** dirancang dengan prinsip:
1. **Kurasi Variasi Lengkap:** Setiap bab dibagi menjadi beberapa paket soal (misalnya Paket 1, Paket 2).
2. **Representasi Ragam Soal:** Tiap paket memuat seluruh variasi tipe soal yang ada pada bab tersebut:
   - Variasi Konsep Dasar & Definisi / Kaidah.
   - Variasi Pembacaan Alat Ukur / Interpretasi Grafik / Diagram.
   - Variasi Analisis Rumus & Perbandingan / Rasio.
   - Variasi Gabungan / Kasus Kompleks Ujian (HOTS).
3. **Anti-Repetitif:** Siswa cukup menyelesaikan satu paket untuk menguji dan memetakan pemahaman terhadap **seluruh model variasi** bab tersebut.

---

## 2. Struktur Direktori
```text
data_soal/
├── README.md                      # Panduan struktur dan skema ini
├── tka/
│   ├── fisika/
│   │   ├── bab-01-pengukuran-besaran-dimensi-dan-angka-penting/
│   │   │   ├── paket-01-variasi-dasar.json
│   │   │   └── paket-02-variasi-lanjutan.json
│   │   ├── bab-02-vektor/
│   │   │   ├── paket-01-variasi-dasar.json
│   │   │   └── paket-02-variasi-lanjutan.json
│   │   ├── bab-03-kinematika-gerak-lurus-glb-dan-glbb/
│   │   │   ├── paket-01-variasi-dasar.json
│   │   │   └── paket-02-variasi-lanjutan.json
│   │   └── ... (bab-04 s.d. bab-30)
│   ├── matematika-lanjut/
│   │   ├── bab-01-eksponen-bentuk-akar/
│   │   └── ... (bab-02 s.d. bab-17)
│   └── matematika-wajib/
└── utbk/
    ├── 01-penalaran-umum/
    └── ... (02 s.d. 07)
```

---

## 3. Skema Data Soal Per Paket (JSON Schema)
Setiap paket soal disimpan dalam format JSON terstruktur atau disatukan ke `data_soal.js` dengan atribut pendukung:

```json
{
  "id": "FIS-B01-P1-01",
  "kategoriUtama": "tka",
  "subtes": "Fisika",
  "bab": "Pengukuran, Besaran, Dimensi, dan Angka Penting",
  "paketId": "paket-1",
  "paketNama": "Paket 1: Variasi Konsep & Ketelitian Alat Ukur",
  "variasiTipe": "Variasi A: Skala & Ketelitian Jangka Sorong/Mikrometer",
  "kesulitan": "mudah",
  "pertanyaan": "...",
  "pilihan": ["...", "...", "...", "..."],
  "kunciJawaban": 1,
  "pembahasan": "..."
}
```

---

## 4. Prosedur Sinkronisasi
Database utama aplikasi klien diakses secara instan offline melalui `data_soal.js` (`window.EDUMANDIRI_SOAL_BANK`).
Untuk memvalidasi sintaks KaTeX dan menyinkronkan data:
```bash
node sync-soal.js
```
Skrip ini akan memvalidasi bahwa seluruh formula LaTeX KaTeX valid tanpa syntax error dan membuat cadangan di `data.json`.
