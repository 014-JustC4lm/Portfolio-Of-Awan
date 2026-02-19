# 📸 Panduan Setup Cloudinary untuk Portfolio

> Cloudinary adalah platform cloud untuk hosting gambar dan video dengan optimasi otomatis.

---

## 🎯 Kenapa Cloudinary?

✅ **Free tier 25GB** storage + 25GB bandwidth/bulan  
✅ **Auto-optimization** - Gambar otomatis di-compress tanpa hilang kualitas  
✅ **Transformasi on-the-fly** - Resize, crop, format conversion otomatis  
✅ **CDN global** - Loading cepat dari mana saja  
✅ **Video hosting** - Support video sampai 100MB (free tier)

---

## 📋 Step 1: Dapatkan Credentials

Dari screenshot kamu, saya lihat credentials Cloudinary kamu:

- **Cloud name:** `djov8f8fa`
- **API Key:** `933333345183153`
- **API Secret:** (Di hide dengan ***)

> ⚠️ **PENTING:** Jangan share API Secret ke publik! Simpan dengan aman.

---

## 📤 Step 2: Upload Media ke Cloudinary

### A. Upload via Dashboard (Cara Mudah)

1. **Buka Cloudinary Dashboard**
   - Klik "Media Library" di sidebar kiri
   - Atau langsung ke: https://console.cloudinary.com/console/media_library

2. **Upload Files**
   - Klik tombol **"Upload"** (biru, pojok kanan atas)
   - Drag & drop gambar/video kamu
   - Atau klik "Select Files" untuk browse

3. **Organize dengan Folders** (Recommended)
   - Klik "Create Folder" sebelum upload
   - Buat struktur seperti:
     ```
     portfolio/
     ├── projects/
     │   ├── dialektika-pluralisme.jpg
     │   ├── neon-nights.jpg
     │   └── apex-brand.jpg
     └── gallery/
         ├── activity-1.jpg
         ├── activity-2.jpg
         └── activity-3.jpg
     ```

4. **Dapatkan Link Gambar**
   - Klik gambar yang sudah di-upload
   - Klik icon **"Link"** atau **"Copy URL"**
   - Pilih format: **"Delivery URL"** (bukan "Original URL")

---

## 🔗 Step 3: Gunakan Link di Portfolio

### Format URL Cloudinary

URL gambar Cloudinary mengikuti format:
```
https://res.cloudinary.com/{cloud_name}/image/upload/{folder}/{filename}.{ext}
```

**Contoh:** 
```
https://res.cloudinary.com/djov8f8fa/image/upload/portfolio/projects/dialektika-pluralisme.jpg
```

### Update `works.js`

Buka `src/data/works.js` dan ganti placeholder dengan URL Cloudinary:

```javascript
export const works = [
  {
    id: 1,
    title: "Dialektika Pluralisme",
    category: "film",
    year: "2024",
    role: "Assistant Director",
    // Ganti dengan URL Cloudinary kamu:
    thumbnail: "https://res.cloudinary.com/djov8f8fa/image/upload/c_fill,w_600,h_400/portfolio/projects/dialektika-thumb.jpg",
    media: "https://www.youtube.com/embed/VIDEO_ID", // Video tetap di YouTube
    // ... dst
  },
];
```

### Update `gallery.js`

Buka `src/data/gallery.js`:

```javascript
export const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/djov8f8fa/image/upload/portfolio/gallery/activity-1.jpg",
    alt: "Behind the scenes - shooting day 1"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/djov8f8fa/image/upload/portfolio/gallery/activity-2.jpg",
    alt: "On set with the crew"
  },
  // Tambahkan gambar lainnya...
];
```

---

## ✨ Tips Optimasi Cloudinary

### 1. **Auto Format & Quality**

Tambahkan transformasi di URL untuk optimasi otomatis:

```
https://res.cloudinary.com/djov8f8fa/image/upload/f_auto,q_auto/portfolio/projects/image.jpg
```

- `f_auto` → Format terbaik (WebP di browser modern, JPG di browser lama)
- `q_auto` → Kualitas optimal (balance antara size & quality)

### 2. **Resize Otomatis**

Untuk thumbnail yang lebih kecil:

```
https://res.cloudinary.com/djov8f8fa/image/upload/c_fill,w_600,h_400,f_auto,q_auto/portfolio/projects/image.jpg
```

- `c_fill` → Crop mode (fill area)
- `w_600,h_400` → Resize ke 600x400px

### 3. **Lazy Loading**

Untuk gallery dengan banyak gambar, gunakan progressive loading:

```
https://res.cloudinary.com/djov8f8fa/image/upload/fl_progressive,f_auto,q_auto/portfolio/gallery/image.jpg
```

- `fl_progressive` → Load bertahap (blur → sharp)

---

## 🎬 Upload Video ke Cloudinary (Optional)

Kalau video kamu **kurang dari 100MB** (free tier limit):

1. **Upload via Dashboard**
   - Drag & drop video ke Media Library
   - Wait sampai processing selesai

2. **Get Video URL**
   - Format: `https://res.cloudinary.com/djov8f8fa/video/upload/portfolio/videos/my-video.mp4`

3. **Embed di Portfolio**
   ```javascript
   {
     id: 1,
     title: "Project Title",
     media: "https://res.cloudinary.com/djov8f8fa/video/upload/portfolio/videos/my-video.mp4",
     // Website akan auto-detect video dan render dengan <video> tag
   }
   ```

> **💡 Tip:** Untuk video besar (>100MB), tetap pakai **YouTube** karena:
> - Unlimited storage
> - Better video player
> - Auto quality switching (360p, 720p, 1080p)

---

## 📝 Workflow yang Recommended

### 1. **Persiapan Gambar Lokal**

Sebelum upload ke Cloudinary, compress dulu gambar kamu:

- **Tool:** [TinyPNG](https://tinypng.com) atau [Squoosh](https://squoosh.app)
- **Target Size:**
  - Thumbnail: 200-400KB
  - Full Image: 500KB - 1MB
  - Gallery: 300-600KB

### 2. **Rename Files dengan Descriptive Names**

**❌ Buruk:**
```
IMG_1234.jpg
DSC_5678.jpg
```

**✅ Bagus:**
```
dialektika-pluralisme-thumbnail.jpg
neon-nights-full.jpg
bts-activity-shooting-day1.jpg
```

### 3. **Upload ke Cloudinary dengan Struktur Folder**

```
portfolio/
├── projects/
│   ├── thumbnails/
│   └── full/
└── gallery/
    └── activities/
```

### 4. **Copy URLs ke works.js dan gallery.js**

### 5. **Test di Browser**

- Buka browser
- Check apakah semua gambar load dengan benar
- Test lightbox gallery

---

## 🔒 Security Best Practices

1. **Jangan expose API Secret**
   - API Secret di screenshot kamu jangan di-share
   - Tidak perlu di code (karena kita hanya pakai public URLs)

2. **Set Upload Preset (Optional)**
   - Di Cloudinary Settings → Upload
   - Buat preset "portfolio_images" dengan rules:
     - Max file size: 10MB
     - Allowed formats: jpg, png, webp
     - Auto transformations

---

## 📊 Monitor Usage

**Cek bandwidth & storage:**
1. Buka Cloudinary Dashboard
2. Lihat "Usage" di sidebar
3. Monitor:
   - **Storage Used:** Jangan sampai 25GB
   - **Bandwidth:** Jangan sampai 25GB/bulan

**Jika mendekati limit:**
- Compress gambar lebih aggressive
- Delete media yang nggak terpakai
- Upgrade ke paid plan (mulai $0/bulan dengan usage-based pricing)

---

## 🆘 Troubleshooting

### Gambar tidak muncul?

1. **Check URL format:**
   - Harus `https://res.cloudinary.com/...`
   - BUKAN `https://cloudinary.com/...`

2. **Check file exists:**
   - Buka URL di browser baru
   - Jika 404, berarti file belum ter-upload atau path salah

3. **Check Console Browser (F12):**
   - Lihat error message di Network tab
   - Biasanya ada CORS error atau 404

### Gambar load lambat?

- Tambahkan `f_auto,q_auto` di URL
- Pastikan pakai transformasi resize (jangan load gambar 4K untuk thumbnail)

---

## 🚀 Quick Start Checklist

- [ ] Login ke Cloudinary
- [ ] Create folders: `portfolio/projects/` dan `portfolio/gallery/`
- [ ] Compress gambar lokal (TinyPNG)
- [ ] Upload gambar ke folder yang sesuai
- [ ] Copy URL dari setiap gambar
- [ ] Paste URL ke `src/data/works.js` dan `src/data/gallery.js`
- [ ] Test di browser

---

## 📞 Link Penting

- **Dashboard:** https://console.cloudinary.com
- **Media Library:** https://console.cloudinary.com/console/media_library
- **Documentation:** https://cloudinary.com/documentation
- **Image Transformations Guide:** https://cloudinary.com/documentation/image_transformations

---

**Selamat mencoba! 🎨**

Jika ada pertanyaan saat setup, tanya aja!
