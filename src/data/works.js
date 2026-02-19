// ==========================================
// 📝 TEMPLATE - Copy this when adding new work
// ==========================================
/*
{
  id: X,  // Increment from last ID
  title: "Project Title",
  category: "film",  // Options: "film" | "videography" | "photography" | "design"
  year: "2024",
  role: "Your Role",
  thumbnail: "portfolio/projects/thumbnail.jpg",  // ← HANYA path relative!
  media: "https://www.youtube.com/embed/VIDEO_ID",  // YouTube/Vimeo tetap full URL
  description_en: "English description of the project...",
  description_id: "Deskripsi proyek dalam Bahasa Indonesia...",
  tools: ["Tool 1", "Tool 2", "Tool 3"],
  behindTheScenes: "Behind the scenes notes (optional)"
},
*/

// ==========================================
// 🎬 WORKS DATABASE
// ==========================================

export const works = [
  // ========== FILM ==========
  {
    id: 1,
    title: "Dialektika Pluralisme",
    category: "film",
    year: "2024",
    role: "Assistant Director",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771484601/dsa_gb671b.png",  
    media: "https://drive.google.com/file/d/1U-UVxBPatmrWlg0T4BxXFqLgR5iFtYtp/preview", 
    description_en: "A short film exploring the unseen patterns of city life. The project focuses on the juxtaposition of chaos and order in the urban environment.",
    description_id: "Sebuah film pendek yang mengeksplorasi pola-pola tak terlihat dari kehidupan kota. Proyek ini berfokus pada penjajaran kekacauan dan keteraturan di lingkungan perkotaan.",
    tools: ["Sony FX 3", "Premiere Pro", "DaVinci Resolve"],
    behindTheScenes: "Won as the 3rd winner in Universitas Gadjah Mada - Alsa Invention 2024."
  },
  {
    id: 2,
    title: "Teman Lama Banyak Drama",
    category: "film",
    year: "2025",
    role: "Director, Writer, Editor, Colorist",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770985092/avcom_thumbnail_copy_k06kik.jpg",
    media: "https://drive.google.com/file/d/1tgVBn6DA5xxHsgwASsxao_jWdGlCpOz4/preview",
    description_en: "A narrative short film in the comedy genre. It tells the story of a young man who is broke and trying to get money fast to ask his crush out on a date, but instead finds himself trapped in an absurd childhood game challenge set by his old friend, who now acts like a mafia boss.",
    description_id: "Film pendek naratif bergenre komedi. Mengisahkan Seorang pemuda yang sedang -kanker- (kantong kering) berusaha mendapatkan uang cepat demi mengajak gebetannya kencan, namun ia justru terjebak dalam tantangan permainan masa kecil yang absurd dari teman lamanya yang kini bertingkah seperti bos mafia.",
    tools: ["Sony A7 IV", "Premiere Pro"],
    behindTheScenes: "Short comedy film made for final assignment"
  },
  {
    id: 3,
    title: "Sunyi Yang Berwajah",
    category: "film",
    year: "2026",
    role: "Director, Writer, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770986282/ss_mp34ga.png",
    media: "https://drive.google.com/file/d/1P7OTUmMMzHH9P2A1F8ghx9aRQO4piXYs/preview",
    description_en: "Trapped in past trauma and loneliness, a young man attempts to break down the cold wall between him and his sibling, seeking a glimmer of warmth in a house that feels increasingly silent.",
    description_id: "Seorang pemuda yang terperangkap dalam trauma masa lalu dan kesepian mencoba meruntuhkan dinding dingin antara dirinya dan sang adik, mencari secercah kehangatan di tengah rumah yang terasa semakin sunyi.",
    tools: ["Sony ZV-E10", "Premiere Pro"],
    behindTheScenes: "Work with limited budget and novice crew"
  },
  {
    id: 4,
    title: "Lah Dewek?",
    category: "film",
    year: "2026",
    role: "Director Of Photography",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770986604/Untitled_gartdx.png",
    media: "https://drive.google.com/file/d/1hWvVVvfojOFXLoMAGCNkstzGObygKUPU/preview",
    description_en: "Luki finds paradise in his new high school thanks to two charismatic friends, Ai and Keysa. But when classmates start looking at him with horror and a mysterious student tries to intervene, Luki is forced to choose: trust the friends who make him happy, or face a reality that might be far more terrifying.",
    description_id: "Luki merasa menemukan surga di sekolah barunya berkat dua sahabat yang karismatik, Ai dan Keysa. Namun, ketika lingkungan sekitar mulai menatapnya dengan ngeri dan seorang siswa indigo mencoba memperingatkannya, Luki harus memilih: mempercayai teman-teman yang membuatnya bahagia, atau menghadapi realitas yang mungkin jauh lebih mengerikan.",
    tools: ["Sony ZV-E10", "Premiere Pro"],
    behindTheScenes: "Work with limited budget and novice crew"
  },
  {
    id: 5,
    title: "Pengaruh",
    category: "film",
    year: "2024",
    role: "Assistant Director, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770987242/maxresdefault_te9bdd.jpg",
    media: "https://www.youtube.com/embed/v9xUsP8IaNg",
    description_en: "A narrative short film about the influence of promiscuity. It tells the story of a young man who falls prey to the influence of promiscuity.",
    description_id: "Film pendek naratif tentang pengaruh pergaulan bebas. Mengisahkan seorang pemuda yang terjerumus dalam pengaruh pergaulan bebas.",
    tools: ["Canon M50", "Premiere Pro"],
    behindTheScenes: "Work with limited budget and novice crew"
  },

  // ========== VIDEOGRAPHY ==========
  {
    id: 6,
    title: "Perfume Ads",
    category: "videography",
    year: "2025",
    role: "Director, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770977517/SAVE_20251202_183234_kftyg0.jpg",
    media: "https://drive.google.com/file/d/19a0hX_edFW0G8n-Y5ShXjoUV4mTCU5bJ/preview",
    description_en: "Commercial video advertisement for perfume, with a cinematic video concept that displays and showcases the product.",
    description_id: "Iklan komersial produk parfum, dengan konsep video sinematik yang menampilkan dan memamerkan produk.",
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null
  },

  {
    id: 7,
    title: "Perfume Ad 2",
    category: "videography",
    year: "2025",
    role: "Director Of Photography, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770977521/WhatsApp_Image_2025-12-02_at_21.54.11_522477a6_fgjrfd.jpg",
    media: "https://drive.google.com/file/d/1iUlIwrGqzF3ct2MhcqcuNvBPxmumgVIQ/preview",
    description_en: "Commercial video advertisement for perfume, with a cinematic video concept that tells a short narrative story.",
    description_id: "Iklan komersial produk parfum, dengan konsep video sinematik yang memiliki cerita naratif pendek.",
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null
  },

  {
    id: 8,
    title: "Comedy Sneaker Ad",
    category: "videography",
    year: "2025",
    role: "Director, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770984146/pano_rgoglp.png",
    media: "https://drive.google.com/file/d/1IX3kPlYoT0LBRXbwUPyq1EXY84bHe1FT/preview",
    description_en: "Commercial video advertisement for sneakers, with a cinematic video concept that tells a short narrative story with elements of absurd comedy.",
    description_id: "Iklan komersial produk sepatu fashion, dengan konsep video yang memiliki cerita naratif pendek dengan unsur komedi absurd.",
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null
  },

  {
    id: 9,
    title: "Beverage Ad",
    category: "videography",
    year: "2025",
    role: "Director, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770984806/ademsari_vf4kq6.png",
    media: "https://drive.google.com/file/d/1U5eXPwSd0krfRX7VADnm5qLnSvG5-7rC/preview",
    description_en: "Commercial video advertisement for beverage, with a concept that tells a short narrative story with thriller elements.",
    description_id: "Iklan komersial produk minuman, dengan konsep video yang memiliki cerita naratif pendek yang mengandung unsur thriller.",
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null
  },
  {
    id: 10,
    title: "Camera Review",
    category: "videography",
    year: "2025",
    role: "All",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770990956/Untitled2_a0zagw.png",
    media: "https://youtu.be/-Hsoj6OewP4?si=9SAhcMfTbpGNYKDM",
    description_en: "Product review video for Sony A7 Series mirrorless camera with professional studio visuals.",
    description_id: "Video review produk kamera mirrorless Sony A7 Series dengan visual studio profesional.",
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: "Public speaking assignment"
  },
  {
    id: 11,
    title: "Graduation Documentation",
    category: "videography",
    year: "2025",
    role: "Videographer, Photographer, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1gHjnOwp3ZCCJsBEtdS320Aq-7a5QnMR0/preview",
    description_en: "Documentation of the graduation ceremony for the 10th batch of SMK Letris Indonesia 2 in 2025",
    description_id: "Dokumentasi acara pelepasan angkatan ke-10 SMK Letris Indonesia 2 Tahun 2025",
    tools: ["Canon 750D", "CapCut"],
    behindTheScenes: null
  },
  {
    id: 12,
    title: "Zyrex Podcast",
    category: "videography",
    year: "2025",
    role: "Director, Creative Producer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771073422/aa_z2kh6f.png",
    media: "https://drive.google.com/file/d/1723zBX-DEyTVnwxqjDucyEI9WzWfKw6q/preview",
    description_en: "Podcast on the topic of competition among technology products in Indonesia",
    description_id: "Podcast dengan topik persaingan produk teknologi di Indonesia",
    tools: ["Nikon D3400", "CapCut"],
    behindTheScenes: "Tight devices and time constraints"
  },
  {
    id: 13,
    title: "Khitan Documentation",
    category: "videography",
    year: "2025",
    role: "Videographer, Photographer, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1_zAq4ZzTqZmilx1_jArKK_m-GOzbHFld/preview",
    description_en: "Podcast on the topic of competition among technology products in Indonesia",
    description_id: "Podcast dengan topik persaingan produk teknologi di Indonesia",
    tools: ["Canon 700D", "CapCut"],
    behindTheScenes: null
  },
  
  // ========== PHOTOGRAPHY ==========


  // {
  //   id: 5,
  //   title: "Neon Nights",
  //   category: "photography",
  //   year: "2023",
  //   role: "Photographer",
  //   thumbnail: "portfolio/projects/neon-nights.jpg",
  //   media: "portfolio/projects/neon-nights-full.jpg",  // ← Untuk foto, bisa pakai path Cloudinary
  //   description_en: "Cyberpunk-inspired street photography series capturing the nightlife implementation of neon aesthetics in modern architecture.",
  //   description_id: "Seri fotografi jalanan yang terinspirasi cyberpunk, menangkap implementasi estetika neon dalam arsitektur modern di malam hari.",
  //   tools: ["Sony A7III", "Lightroom"],
  //   behindTheScenes: "Used diffusion filters to achieve the glowing light effect."
  // },
  // {
  //   id: 6,
  //   title: "Nature's Texture",
  //   category: "photography",
  //   year: "2023",
  //   role: "Photographer",
  //   thumbnail: "portfolio/projects/nature-texture.jpg",
  //   media: "portfolio/projects/nature-texture-full.jpg",
  //   description_en: "Macro photography series exploring the intricate details of natural surfaces.",
  //   description_id: "Seri fotografi makro yang mengeksplorasi detail rumit dari permukaan alami.",
  //   tools: ["Canon R5", "100mm Macro"],
  //   behindTheScenes: null
  // },

  // ========== DESIGN ==========


//   {
//     id: 7,
//     title: "Minimalist UI",
//     category: "design",
//     year: "2024",
//     role: "UI/UX Designer",
//     thumbnail: "portfolio/projects/minimalist-ui.jpg",
//     media: "portfolio/projects/minimalist-ui-full.jpg",
//     description_en: "Web design project focusing on negative space and typography. The goal was to remove all non-essential elements.",
//     description_id: "Proyek desain web yang berfokus pada ruang negatif dan tipografi. Tujuannya adalah menghapus semua elemen yang tidak penting.",
//     tools: ["Figma", "React"],
//     behindTheScenes: "Iterated through 20 different layout concepts before finalizing."
//   },
];
