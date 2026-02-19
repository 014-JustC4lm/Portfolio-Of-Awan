# 📘 Panduan Setup & Editing Portfolio Website

> Panduan lengkap untuk mengedit konten, mengelola media, dan deploy website portfolio Anda.

---

## 📑 Daftar Isi

1. [Edit Informasi Pribadi](#1-edit-informasi-pribadi)
2. [Edit Teks Konten (Bahasa EN/ID)](#2-edit-teks-konten-bahasa-enid)
3. [Tambah/Edit Portfolio Works](#3-tambahedit-portfolio-works)
4. [Tambah/Edit Galeri Foto](#4-tambahedit-galeri-foto)
5. [Hosting Media (Gambar & Video)](#5-hosting-media-gambar--video)
6. [Deploy Website](#6-deploy-website)

---

## 1. Edit Informasi Pribadi

### 📁 File: `src/config/site.js`

Buka file ini untuk mengubah informasi dasar seperti nama, role, dan tagline.

```javascript
export const siteConfig = {
  name: "Farrel Putra Setiawan",        // ← Ganti dengan nama Anda
  role_en: "Film Director • Visual Storyteller",  // ← Role dalam bahasa Inggris
  role_id: "Sutradara • Visual Storyteller",      // ← Role dalam bahasa Indonesia
  tagline_en: "Crafting cinematic experiences through visual storytelling.",
  tagline_id: "Menciptakan pengalaman sinematik melalui visual.",
  email: "contact@farrelputra.com",     // ← Email Anda
  instagram: "@farrelputra",            // ← Username Instagram
};
```

**Yang perlu diubah:**
- `name`: Nama lengkap Anda
- `role_en` / `role_id`: Deskripsi profesi/role Anda
- `tagline_en` / `tagline_id`: Tagline/moto Anda
- `email`: Email kontak
- `instagram`: Username Instagram

---

## 2. Edit Teks Konten (Bahasa EN/ID)

### 📁 File: `src/i18n/translations.js`

File ini berisi **semua teks** yang muncul di website dalam 2 bahasa (English & Indonesian).

**Struktur:**
```javascript
export const translations = {
  en: {
    nav: { /* Teks navigasi */ },
    hero: { /* Teks hero section */ },
    about: { /* Teks about section */ },
    // dst...
  },
  id: {
    // Sama seperti di atas, tapi dalam Bahasa Indonesia
  }
};
```

### ✏️ Cara Edit:

**Contoh 1: Edit Teks Hero (Landing Page)**
```javascript
hero: {
  title: siteConfig.name,  // Otomatis ambil dari config
  subtitle: siteConfig.role_en,
  cta: "View Selected Works"  // ← Ganti tombol CTA
},
```

**Contoh 2: Edit Teks About Section**
```javascript
about: {
  title: "About Me",
  description: "Saya adalah seorang visual storyteller..."  // ← Edit deskripsi
},
```

**💡 Tips:** Ubah teks di kedua bagian (`en` dan `id`) agar konsisten di kedua bahasa.

---

## 3. Tambah/Edit Portfolio Works

### 📁 File: `src/data/works.js`

File ini berisi daftar **semua karya/project** Anda yang ditampilkan di bagian Portfolio.

### 📝 Format Data:

```javascript
export const works = [
  {
    id: 1,  // ID unik (1, 2, 3, dst)
    title: "Urban Rhythms",  // Judul project
    category: "film",  // Kategori: "film", "videography", "photography", "design"
    year: "2024",
    role: "Director & Editor",  // Role Anda di project ini
    thumbnail: "URL_GAMBAR_THUMBNAIL",  // ← PENTING: Gambar preview
    media: "URL_VIDEO_ATAU_GAMBAR_FULL",  // ← Video YouTube atau gambar besar
    description_en: "English description...",  // Deskripsi bahasa Inggris
    description_id: "Deskripsi bahasa Indonesia...",  // Deskripsi bahasa Indonesia
    tools: ["RED Komodo", "Premiere Pro"],  // Tools yang digunakan
    behindTheScenes: "Shot during golden hour..."  // (Optional) Catatan BTS
  },
  // Tambahkan project lain di bawah sini...
];
```

### ➕ Cara Tambah Project Baru:

1. **Copy-paste** salah satu object project yang sudah ada
2. **Ubah ID** (pastikan unique, misal 7, 8, 9...)
3. **Ganti semua field** sesuai project Anda
4. **Upload** gambar/video ke hosting (lihat bagian 5)
5. **Paste link** ke field `thumbnail` dan `media`

### 🎬 Format Media:

- **Untuk video YouTube:**
  ```javascript
  media: "https://www.youtube.com/embed/VIDEO_ID"
  ```
  
- **Untuk gambar:**
  ```javascript
  media: "https://link-ke-gambar.jpg"
  ```

### 🎨 Kategori yang Tersedia:
- `"film"` → Film
- `"videography"` → Videografi
- `"photography"` → Fotografi
- `"design"` → Desain

---

## 4. Tambah/Edit Galeri Foto

### 📁 File: `src/data/gallery.js`

File ini untuk **horizontal scrolling gallery** (bagian Visual Gallery).

```javascript
export const galleryImages = [
  {
    id: 1,
    src: "URL_GAMBAR_1",  // ← Link gambar
    alt: "Description"    // ← Deskripsi gambar (untuk SEO)
  },
  {
    id: 2,
    src: "URL_GAMBAR_2",
    alt: "Behind the scenes shot"
  },
  // Tambahkan gambar lainnya...
];
```

### ➕ Cara Tambah Gambar Baru:
1. Upload gambar ke hosting (lihat bagian 5)
2. Copy-paste object baru dengan ID unik
3. Ganti `src` dengan link gambar
4. Tulis `alt` untuk deskripsi gambar

---

## 5. Hosting Media (Gambar & Video)

### 🖼️ **Untuk Gambar:**

#### **Opsi 1: Cloudinary (Recommended)**
- **Gratis:** 25 GB storage + 25 GB bandwidth/bulan
- **Link:** [cloudinary.com](https://cloudinary.com)
- **Cara Pakai:**
  1. Daftar akun gratis
  2. Upload gambar via dashboard
  3. Copy "Secure URL" dari gambar yang ter-upload
  4. Paste ke `src/data/works.js` atau `gallery.js`

**Contoh Link:**
```
https://res.cloudinary.com/your-cloud/image/upload/v1234567890/portfolio/project1.jpg
```

#### **Opsi 2: ImgBB**
- **Gratis:** Unlimited storage (dengan watermark kecil)
- **Link:** [imgbb.com](https://imgbb.com)
- Simply upload dan copy link direct

#### **Opsi 3: GitHub Repository**
- Upload gambar ke folder `public/assets/projects/` di repo ini
- Setelah deploy, akses via `/assets/projects/nama-file.jpg`

**💡 Best Practice untuk Gambar:**
- **Format:** `.jpg` (untuk foto), `.png` (untuk grafis/logo)
- **Ukuran Thumbnail:** Max 1200px width, compress ke ~200KB
- **Ukuran Full Image:** Max 2000px width, compress ke ~500KB
- **Tool Compress:** [tinypng.com](https://tinypng.com)

---

### 🎬 **Untuk Video:**

#### **Opsi 1: YouTube (Recommended)**
- Upload video ke YouTube (bisa set Public atau Unlisted)
- Copy Video ID dari URL (misal: `dQw4w9WgXcQ`)
- Format link embed:
  ```
  https://www.youtube.com/embed/dQw4w9WgXcQ
  ```

#### **Opsi 2: Vimeo**
- Upload ke Vimeo
- Dapatkan embed link
- Format:
  ```
  https://player.vimeo.com/video/VIDEO_ID
  ```

**💡 Tips:**
- **YouTube** → Lebih cocok untuk showreel/karya komersial
- **Vimeo** → Lebih cocok untuk karya artistik (kualitas video lebih tinggi)

---

## 6. Deploy Website

### 🚀 Deploy ke **Vercel** (Recommended)

**Mengapa Vercel?**
- ✅ Gratis untuk portfolio
- ✅ Auto-deploy dari GitHub
- ✅ Custom domain gratis
- ✅ Sangat cepat (CDN global)

### 📋 Langkah Deploy:

#### **Step 1: Push ke GitHub**

1. Buat repository baru di [github.com](https://github.com)
2. Di terminal/command prompt, jalankan:

```bash
cd "d:\SMK Letris 2\CV dan Portofolio\Web Portfolio Project\Portfolio Project"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

#### **Step 2: Deploy ke Vercel**

1. Buka [vercel.com](https://vercel.com)
2. Sign up dengan **GitHub account**
3. Klik **"New Project"**
4. **Import** repository GitHub yang tadi dibuat
5. Vercel akan auto-detect ini adalah **Vite project**
6. Klik **"Deploy"**
7. Tunggu ~2 menit, website Anda **LIVE!** 🎉

#### **Step 3: Custom Domain (Optional)**

1. Beli domain di [Niagahoster](https://niagahoster.co.id) / [Namecheap](https://namecheap.com)
2. Di Vercel dashboard → **Settings → Domains**
3. Tambahkan domain Anda
4. Update DNS di provider domain sesuai instruksi Vercel

---

### 🚀 Deploy ke **Netlify** (Alternatif)

1. Buka [netlify.com](https://netlify.com)
2. Sign up dengan GitHub
3. Klik **"New site from Git"**
4. Pilih repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Klik **"Deploy"**

---

## 🔄 Update Website Setelah Deploy

**Setelah website live di Vercel/Netlify:**

1. Edit file lokal (misal: tambah project baru di `works.js`)
2. Save file
3. Push ke GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
4. **Vercel/Netlify otomatis re-deploy** dalam 1-2 menit!

---

## 🎯 Quick Reference Cheat Sheet

| Yang Mau Diubah          | File yang Diedit               |
|--------------------------|--------------------------------|
| Nama, Role, Email        | `src/config/site.js`           |
| Teks website (EN/ID)     | `src/i18n/translations.js`     |
| Tambah/edit project      | `src/data/works.js`            |
| Tambah/edit galeri foto  | `src/data/gallery.js`          |

---

## 🆘 Troubleshooting

### Website blank setelah edit?
- Cek browser console (F12) untuk error
- Pastikan tidak ada **syntax error** (koma hilang, kurung tidak match)
- Restart dev server: `Ctrl+C` → `npm run dev`

### Gambar tidak muncul?
- Cek link gambar (harus HTTPS)
- Buka link gambar di browser baru, pastikan accessible
- Gunakan direct link (bukan link preview)

### Video YouTube tidak muncul?
- Pastikan format: `https://www.youtube.com/embed/VIDEO_ID`
- BUKAN: `https://www.youtube.com/watch?v=...`

---

## 📞 Kontak Support

Jika ada masalah teknis, bisa contact ke:
- **GitHub Issues:** Buat issue di repository
- **Email Developer:** (tambahkan email jika perlu)

---

**Selamat berkarya! 🎬✨**
