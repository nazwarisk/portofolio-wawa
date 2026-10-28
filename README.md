# 🌐 Personal Portfolio — Nazwa Riskia Khairani

[![Live Website](https://img.shields.io/badge/Live-nazwa.baturs.my.id-0284c7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://nazwa.baturs.my.id/)
[![UNESA](https://img.shields.io/badge/UNESA-PTI%202026-0e306b?style=for-the-badge)](https://unesa.ac.id)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-f59e0b?style=for-the-badge)](https://developer.mozilla.org/en-US/)

Website portofolio pribadi modern, profesional, dan responsif untuk **Nazwa Riskia Khairani** (NIM: `26050974171`), mahasiswi S1 Pendidikan Teknologi Informasi (PTI), Fakultas Teknik, Universitas Negeri Surabaya (UNESA) sekaligus Bendahara Angkatan 2026 (BPH PTI UNESA).

Dirancang khusus untuk menampilkan profil diri, rekam jejak kepengurusan organisasi kampus, prestasi kejuaraan jurnalistik/kepenulisan, keahlian konten kreatif/videografi, serta penugasan resmi **Web Portofolio Ameliorer Day 5** Jurusan Teknik Informatika UNESA.

---

## 📌 Demo & Akses Langsung
* **Live Deployment:** [https://nazwa.baturs.my.id/](https://nazwa.baturs.my.id/)
* **Alternatif GitHub Pages:** `https://<username-github>.github.io/<nama-repo>/`

---

## ✨ Fitur Utama
- **🎨 Palet Warna Almamater UNESA:** Perpaduan elegan *Royal Navy Blue* khas almamater UNESA, *Amber Gold*, dan latar bersih modern.
- **🌓 Dual-Theme Support (Dark / Light Mode):** Sistem pergantian tema otomatis tersimpan ke `localStorage` dengan penyesuaian kontras yang nyaman di mata.
- **📱 Responsif Penuh (Mobile-First):** Menu drawer samping untuk layar ponsel dan grid fleksibel untuk tablet maupun monitor desktop.
- **🏆 Rekam Jejak Prestasi & Kejuaraan:** Banner sorotan pencapaian (5x Juara 1 lomba tingkat kabupaten hingga nasional) dan kartu sertifikasi.
- **👥 Pengalaman Organisasi Bertingkat:** Rincian peran kepemimpinan di BPH Angkatan 2026, jurnalistik sekolah, dan organisasi kesiswaan.
- **🎬 Galeri Karya Interaktif (Filter & Modal Video):** Sistem penyaringan kategori karya (Jurnalistik, Videografi, Desain Grafis) serta pop-up modal interaktif untuk pratinjau karya.
- **📬 Fitur Kontak Cepat:** Tombol WhatsApp langsung (`wa.me`), tautan profil LinkedIn resmi, serta tombol *1-Click Copy* untuk surel personal dan surel akademik SSO UNESA.

---

## 📂 Struktur Berkas Repositori
```text
nazwa-portfolio/
├── index.html              # Struktur semantik semantik HTML5 & konten lengkap
├── style.css               # Desain kustom CSS3 modern (Variables, Grid, Dark Mode)
├── script.js               # Logika toggle tema, mobile drawer, filter karya, & modal
├── README.md               # Dokumentasi resmi repositori GitHub
├── .gitignore              # Berkas pengecualian file sistem / cache
└── assets/
    ├── icons/
    │   └── favicon.svg     # Favicon monogram NR (Blue & Gold)
    └── images/
        ├── foto-profil.jpg # Pasfoto resmi berjas almamater UNESA (Rasio 2:3)
        ├── og-image.jpg    # Banner preview media sosial (1200x630)
        └── karya-1.jpg s.d. karya-6.jpg # Thumbnail showcase video & karya
```

---

## 🚀 Cara Menjalankan di Komputer Lokal

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/<username-github>/<nama-repo>.git
   cd <nama-repo>
   ```

2. **Jalankan langsung:**
   - Cukup klik dua kali berkas `index.html` untuk membuka di Google Chrome atau browser favorit Anda.
   - Atau gunakan ekstensi **Live Server** di VS Code untuk *live reload*.

---

## 🌐 Cara Deploy ke GitHub Pages (Gratis)

1. Buat repositori baru di akun GitHub Anda (misal: `portfolio` atau `nazwa-portfolio`).
2. Masuk ke folder proyek di terminal, lalu inisialisasi Git:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit web portfolio Nazwa Riskia Khairani"
   git branch -M main
   git remote add origin https://github.com/<username-github>/<nama-repo>.git
   git push -u origin main
   ```
3. Di halaman repositori GitHub:
   - Masuk ke tab **Settings** ➔ **Pages**.
   - Pada bagian **Build and deployment**, atur **Source** ke `Deploy from a branch`.
   - Pilih Branch: `main` dan Folder: `/ (root)`.
   - Klik **Save**.
4. Dalam 1-2 menit, portofolio Anda akan aktif di:
   `https://<username-github>.github.io/<nama-repo>/`

---

## ✏️ Panduan Mengubah / Menyesuaikan Konten

* **Foto Profil:** Timpa file `assets/images/foto-profil.jpg` dengan foto terbaru Anda (rekomendasi rasio potret 2:3).
* **ID Video YouTube:** Pada `index.html` bagian `#karya`, ganti nilai atribut `data-video-yt="dQw4w9WgXcQ"` dengan ID video YouTube asli Anda (contoh tautan: `https://youtu.be/abcXYZ` $\rightarrow$ masukkan `abcXYZ`).
* **Akun Media Sosial:** Pada `index.html` bagian `#kontak`, perbarui username Instagram, LinkedIn, atau nomor WhatsApp sesuai keinginan.

---

## 📄 Lisensi
Dikelola oleh **Nazwa Riskia Khairani** — S1 Pendidikan Teknologi Informasi FT UNESA 2026.
Dibagikan secara terbuka untuk keperluan portofolio akademik dan pengembangan diri.
