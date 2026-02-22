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
  {
    id: 14,
    title: "Theatre Documentation 1",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1RfNs-k6LXwIHLCOfO-i0HaqIUB8XmUrG/preview",
    description_en: "Documentation of the 2025 East Jakarta Student Theatre Festival for a week.",
    description_id: "Dokumentasi Festival Teater Pelajar Jakarta Timur 2025 selama satu minggu. ",
    tools: ["Sony A6000", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DL13yy-BMa9/"
  },
  {
    id: 15,
    title: "Theatre Documentation 2",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1kz6vH_O2D-gRE3q2zRe6uGO6aFQR7ID3/preview",
    description_en: "Documentation of the 2025 East Jakarta Student Theatre Festival for one week.",
    description_id: "Dokumentasi Festival Teater Pelajar Jakarta Timur 2025 selama satu minggu.",
    tools: ["Sony A6000", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DL1wWO4B409/"
  },
  {
    id: 16,
    title: "Theatre Documentation 3",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1hTqdLCgTubYne6Kr1N__jb5V1YnDnlm2/preview",
    description_en: "Documentation of the 2025 East Jakarta Theatre Festival for one week.",
    description_id: "Dokumentasi Festival Teater Jakarta Timur 2025 selama satu minggu.",
    tools: ["Canon 750D", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DOWHJGaAfPO/"
  },
  {
    id: 17,
    title: "Theatre Documentation 4",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/18rmhqbLDOoaRraXr_A3SCglL8ulQ1Gkp/preview",
    description_en: "Documentation of the 2025 East Jakarta Theatre Festival for one week.",
    description_id: "Dokumentasi Festival Teater Jakarta Timur 2025 selama satu minggu.",
    tools: ["Canon 750D", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DOaaqUYAf0_/"
  },
  
  // ========== PHOTOGRAPHY ==========


  {
    id: 18,
    title: "Tower in the Woods",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083155/IMG_0044_ir1osx.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083155/IMG_0044_ir1osx.jpg",
    description_en: "A shot showing the contrast between a human-made iron tower structure and the lush surrounding nature.",
    description_id: "Tangkapan yang memperlihatkan kontras antara struktur menara besi buatan manusia dan rindangnya alam sekitar.",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: "Used mushroom lens to achieve the glowing light effect."
  },
  {
    id: 19,
    title: "Natural Canopy",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083179/IMG_0039_mwyei3.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083179/IMG_0039_mwyei3.jpg",
    description_en: "A natural framing composition of lush foliage against a bright blue sky.",
    description_id: "Komposisi framing alami dari rimbunnya dedaunan dengan latar langit biru cerah.",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: "Used mushroom lens to achieve the glowing light effect."
  },
  {
    id: 20,
    title: "Highway Trails",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083180/IMG_9181_mtyuwq.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083180/IMG_9181_mtyuwq.jpg",
    description_en: "A long exposure experiment capturing vehicle light trails on the highway at night.",
    description_id: "Eksperimen long exposure yang menangkap garis cahaya kendaraan di jalan tol pada malam hari.",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 21,
    title: "Vibrant Crunch",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083242/DSC_3463-2_exu63m.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083242/DSC_3463-2_exu63m.jpg",
    description_en: "A close-up detail highlighting the freshness and colorful texture of a salad dish.",
    description_id: "Detail jarak dekat yang menonjolkan kesegaran dan tekstur warna-warni dari hidangan salad.",
    tools: ["Nikon D3400", "Lightroom"],
    behindTheScenes: "Product assignment"
  },
  {
    id: 22,
    title: "Anchored Silence",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083212/DSC_3547_c5x1pm.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083212/DSC_3547_c5x1pm.jpg",
    description_en: "A lone boat moored in calm waters with a cinematic overcast sky.",
    description_id: "Sebuah perahu tunggal yang bersandar di perairan tenang dengan nuansa langit mendung yang sinematik.",
    tools: ["Nikon D3400", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 23,
    title: "Neon Arteries",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083237/DSC_3927_hpwm2z.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083237/DSC_3927_hpwm2z.jpg",
    description_en: "A long exposure shot capturing red vehicle light trails crossing the city streets.",
    description_id: "Tangkapan long exposure yang merekam jejak cahaya merah kendaraan melintasi jalanan kota.",
    tools: ["Nikon D3400", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 24,
    title: "Reunion Documentation 1",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083709/IMG_0187_dyucvz.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083709/IMG_0187_dyucvz.jpg",
    description_en: "Halal bihalal documentation",
    description_id: "Dokumentasi halal bihalal",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 25,
    title: "Reunion Documentation 2",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083753/IMG_0028_zmpt7m.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083753/IMG_0028_zmpt7m.jpg",
    description_en: "Halal bihalal documentation",
    description_id: "Dokumentasi halal bihalal",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 26,
    title: "Reunion Documentation 3",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083791/IMG_0376_erorpo.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083791/IMG_0376_erorpo.jpg",
    description_en: "Halal bihalal documentation",
    description_id: "Dokumentasi halal bihalal",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 27,
    title: "Reunion Documentation 4",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083808/IMG_0274_qlreov.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083808/IMG_0274_qlreov.jpg",
    description_en: "Halal bihalal documentation",
    description_id: "Dokumentasi halal bihalal",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 28,
    title: "Reunion Documentation 5",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083819/IMG_0147_cfqn0s.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083819/IMG_0147_cfqn0s.jpg",
    description_en: "Halal bihalal documentation",
    description_id: "Dokumentasi halal bihalal",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 29,
    title: "Urban Dome",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083397/IMG_9704_yk2eiv.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083397/IMG_9704_yk2eiv.jpg",
    description_en: "Architectural photography that highlights the unique structure of the building under a bright sky.",
    description_id: "Fotografi arsitektur yang menonjolkan struktur unik bangunan di bawah langit yang cerah.",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 30,
    title: "Recitation Documentation 1",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084011/DSC_4334_yvytqj.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084011/DSC_4334_yvytqj.jpg",
    description_en: "Recitation documentation",
    description_id: "Dokumentasi pengajian",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
  {
    id: 31,
    title: "Recitation Documentation 2",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083837/DSC_4339_uxhdas.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083837/DSC_4339_uxhdas.jpg",
    description_en: "Recitation documentation",
    description_id: "Dokumentasi pengajian",
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null
  },
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
