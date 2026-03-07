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
  description_en: `English description of the project...`,
  description_id: `Deskripsi proyek dalam Bahasa Indonesia...`,
  tools: ["Tool 1", "Tool 2", "Tool 3"],
  behindTheScenes: "Behind the scenes notes (optional)",
  featured: false // Set true untuk karya unggulan/terbaik
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
    description_en: `Laras always believed that foreign culture was the enemy of local tradition, until her father showed her that the real problem was never the culture itself, but the way we choose to see it.

Contributions :
Responsible for the smooth running of production operations on set as the director's right-hand man. Coordinated the crew and cast between scenes, maintained continuity, and ensured that every technical element was ready before the cameras rolled.`,
    description_id: `Laras selalu percaya bahwa budaya asing adalah musuh budaya lokal, sampai sang Ayah membuktikan bahwa masalahnya bukan pada budayanya, tapi pada cara kita memandangnya.

Kontribusi :
Bertanggung jawab atas kelancaran operasional produksi di lapangan sebagai tangan kanan sutradara. Mengoordinasikan kru dan cast antar scene, menjaga konsistensi continuity, serta memastikan setiap elemen teknis siap sebelum kamera berjalan.`,
    tools: ["Sony FX 3", "Premiere Pro", "DaVinci Resolve"],
    behindTheScenes: "Won as the 3rd winner in Universitas Gadjah Mada - Alsa Invention 2024.",
    featured: true
  },
  {
    id: 2,
    title: "Teman Lama Banyak Drama",
    category: "film",
    year: "2025",
    role: "Director, Writer, Editor, Colorist",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770985092/avcom_thumbnail_copy_k06kik.jpg",
    media: "https://drive.google.com/file/d/1tgVBn6DA5xxHsgwASsxao_jWdGlCpOz4/preview",
    description_en: `A narrative short film in the comedy genre. It tells the story of a young man who is broke and trying to get money fast to ask his crush out on a date, but instead finds himself trapped in an absurd childhood game challenge set by his old friend, who now acts like a mafia boss.

Contributions :
Taking full control of all creative elements, from idea development, scriptwriting, and directing on set, to editing and color grading in post-production.
`,
    description_id: `Film pendek naratif bergenre komedi. Mengisahkan Seorang pemuda yang sedang -kanker- (kantong kering) berusaha mendapatkan uang cepat demi mengajak gebetannya kencan, namun ia justru terjebak dalam tantangan permainan masa kecil yang absurd dari teman lamanya yang kini bertingkah seperti bos mafia.

Kontribusi :
Memegang kendali penuh atas seluruh elemen kreatif mulai dari pengembangan ide, penulisan naskah, penyutradaraan di lapangan, hingga editing dan color grading di pasca produksi.
`,
    tools: ["Sony A7 IV", "Premiere Pro"],
    behindTheScenes: "Short comedy film made for final assignment",
    featured: true
  },
  {
    id: 3,
    title: "Sunyi Yang Berwajah",
    category: "film",
    year: "2026",
    role: "Director, Writer, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770986282/ss_mp34ga.png",
    media: "https://drive.google.com/file/d/1P7OTUmMMzHH9P2A1F8ghx9aRQO4piXYs/preview",
    description_en: `Trapped in past trauma and loneliness, a young man attempts to break down the cold wall between him and his sibling, seeking a glimmer of warmth in a house that feels increasingly silent.

Contributions :
Taking full responsibility for the script, directing, and editing of the film. Actively contributing both technically and non-technically, as well as leading and directing crew members with limited experience. Building a layered narrative with an unreliable narrator approach, where the truth of the story is only fully revealed in the final moments of the film.
`,
    description_id: `Seorang pemuda yang terperangkap dalam trauma masa lalu dan kesepian mencoba meruntuhkan dinding dingin antara dirinya dan sang adik, mencari secercah kehangatan di tengah rumah yang terasa semakin sunyi.

Kontribusi :
Bertanggung jawab penuh atas naskah, penyutradaraan, dan editing film. Berkontribusi aktif teknis maupun non-teknis, serta memimpin dan mengarahkan crew dengan pengalaman rendah. Membangun narasi berlapis dengan pendekatan unreliable narrator di mana kebenaran cerita baru terungkap sepenuhnya di detik-detik terakhir film.
`,
    tools: ["Sony ZV-E10", "Premiere Pro"],
    behindTheScenes: "Work with limited budget and novice crew",
      featured: true
  },
  {
    id: 4,
    title: "Lah Dewek?",
    category: "film",
    year: "2026",
    role: "Director Of Photography",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770986604/Untitled_gartdx.png",
    media: "https://drive.google.com/file/d/1hWvVVvfojOFXLoMAGCNkstzGObygKUPU/preview",
    description_en: `Luki finds paradise in his new high school thanks to two charismatic friends, Ai and Keysa. But when classmates start looking at him with horror and a mysterious student tries to intervene, Luki is forced to choose: trust the friends who make him happy, or face a reality that might be far more terrifying.

Contributions :
Responsible for the overall visual identity of the film as DOP. Building a psychological horror atmosphere through frame selection, lighting schemes, and camera movements that support the narrative tension. Working in limited production conditions and full of spontaneous ideas.
`,
    description_id: `Luki merasa menemukan surga di sekolah barunya berkat dua sahabat yang karismatik, Ai dan Keysa. Namun, ketika lingkungan sekitar mulai menatapnya dengan ngeri dan seorang siswa indigo mencoba memperingatkannya, Luki harus memilih: mempercayai teman-teman yang membuatnya bahagia, atau menghadapi realitas yang mungkin jauh lebih mengerikan.

Kontribusi :
Bertanggung jawab atas identitas visual keseluruhan film sebagai DOP. Membangun atmosfer horor psikologis melalui pilihan frame, skema pencahayaan, dan pergerakan kamera yang mendukung ketegangan naratif. Bekerja dalam kondisi produksi terbatas dan penuh ide spontan.
`,
    tools: ["Sony A6400", "DJI Ronin SC 2", "Premiere Pro"],
    behindTheScenes: "Work with limited budget and novice crew",
      featured: false
  },
  {
    id: 5,
    title: "Pengaruh",
    category: "film",
    year: "2024",
    role: "Assistant Director, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770987242/maxresdefault_te9bdd.jpg",
    media: "https://www.youtube.com/embed/v9xUsP8IaNg",
    description_en: `A narrative short film about the influence of promiscuity. It tells the story of a young man who falls prey to the influence of promiscuity.

Contributions :
Performing two roles simultaneously, ensuring smooth production as Assistant Director on set, then moving on to the editing table to compile footage with very tight deadlines.
`,
    description_id: `Film pendek naratif tentang pengaruh pergaulan bebas. Mengisahkan seorang pemuda yang terjerumus dalam pengaruh pergaulan bebas.

Kontribusi :
Menjalankan dua peran sekaligus, memastikan kelancaran produksi sebagai Assisten Sutradara di lapangan, lalu melanjutkan ke meja editing untuk menyusun potongan gambar dengan batas waktu yang sangat singkat.
`,
    tools: ["Canon M50", "Premiere Pro"],
    behindTheScenes: "Work with limited budget and novice crew",
      featured: false
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
    description_en: `Commercial video advertisement for perfume, with a cinematic video concept that displays and showcases the product.

Contributions :
Creatively designing the visual and narrative concepts for commercial perfume advertisements through to editing. Using a clean and elegant cinematographic approach to highlight the character of the product. Directing talents for product demonstrations with a variety of beauty shots.
`,
    description_id: `Iklan komersial produk parfum, dengan konsep video sinematik yang menampilkan dan memamerkan produk.

Kontribusi :
Merancang konsep visual dan naratif iklan komersial parfum secara kreatif hingga penyuntingan. Menggunakan pendekatan sinematografi yang bersih dan elegan untuk menonjolkan karakter produk. Mengarahkan talent untuk demo produk dengan berbagai shot cantik.
`,
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null,
      featured: true
  },

  {
    id: 7,
    title: "Perfume Ad 2",
    category: "videography",
    year: "2025",
    role: "Director Of Photography, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770977521/WhatsApp_Image_2025-12-02_at_21.54.11_522477a6_fgjrfd.jpg",
    media: "https://drive.google.com/file/d/1iUlIwrGqzF3ct2MhcqcuNvBPxmumgVIQ/preview",
    description_en: `Commercial video advertisement for perfume, with a cinematic video concept that tells a short narrative story.

Contributions :
Developing the visual language of the film alongside the director from the planning stage, operating the camera during production, and completing the editing and color grading process in post-production.
`,
    description_id: `Iklan komersial produk parfum, dengan konsep video sinematik yang memiliki cerita naratif pendek.

Kontribusi :
Membangun bahasa visual iklan bersama sutradara sejak tahap perencanaan, mengoperasikan kamera selama produksi, dan menyelesaikan proses editing serta color grading di pasca produksi.
`,
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null,
      featured: true
  },

  {
    id: 8,
    title: "Comedy Sneaker Ad",
    category: "videography",
    year: "2025",
    role: "Director, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770984146/pano_rgoglp.png",
    media: "https://drive.google.com/file/d/1IX3kPlYoT0LBRXbwUPyq1EXY84bHe1FT/preview",
    description_en: `Commercial video advertisement for sneakers, with a cinematic video concept that tells a short narrative story with elements of absurd comedy.

Contributions :
Creatively conceptualizing narrative and visual approaches, directing talent and crew during production, and handling post-production editing.
`,
    description_id: `Iklan komersial produk sepatu fashion, dengan konsep video yang memiliki cerita naratif pendek dengan unsur komedi absurd.

Kontribusi :
Mengonsep pendekatan naratif dan visual secara kreatif, mengarahkan talent dan kru selama produksi berlangsung, serta menangani proses editing pasca produksi.
`,
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null,
      featured: true
  },

  {
    id: 9,
    title: "Beverage Ad",
    category: "videography",
    year: "2025",
    role: "Director, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770984806/ademsari_vf4kq6.png",
    media: "https://drive.google.com/file/d/1U5eXPwSd0krfRX7VADnm5qLnSvG5-7rC/preview",
    description_en: `Commercial video advertisement for beverage, with a concept that tells a short narrative story with thriller elements.

Contributions :
Creatively conceptualizing narrative and visual approaches, directing talent and crew during production, and handling post-production editing.
`,
    description_id: `Iklan komersial produk minuman, dengan konsep video yang memiliki cerita naratif pendek yang mengandung unsur thriller.

Kontribusi :
Mengonsep pendekatan naratif dan visual secara kreatif, mengarahkan talent dan kru selama produksi berlangsung, serta menangani proses editing pasca produksi.
`,
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 10,
    title: "Camera Review",
    category: "videography",
    year: "2025",
    role: "All",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1770990956/Untitled2_a0zagw.png",
    media: "https://youtu.be/-Hsoj6OewP4?si=9SAhcMfTbpGNYKDM",
    description_en: `Product review video for Sony A7 Series mirrorless camera with professional studio visuals.`,
    description_id: `Video review produk kamera mirrorless Sony A7 Series dengan visual studio profesional.`,
    tools: ["Nikon D3400", "Premiere Pro"],
    behindTheScenes: "Public speaking assignment",
      featured: false
  },
  {
    id: 11,
    title: "Graduation Documentation",
    category: "videography",
    year: "2025",
    role: "Videographer, Photographer, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1gHjnOwp3ZCCJsBEtdS320Aq-7a5QnMR0/preview",
    description_en: `Documentation of the graduation ceremony for the 10th batch of SMK Letris Indonesia 2 in 2025`,
    description_id: `Dokumentasi acara pelepasan angkatan ke-10 SMK Letris Indonesia 2 Tahun 2025`,
    tools: ["Canon 750D", "CapCut"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 12,
    title: "Zyrex Podcast",
    category: "videography",
    year: "2025",
    role: "Director, Creative Producer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771073422/aa_z2kh6f.png",
    media: "https://drive.google.com/file/d/1723zBX-DEyTVnwxqjDucyEI9WzWfKw6q/preview",
    description_en: `Podcast on the topic of competition among technology products in Indonesia`,
    description_id: `Podcast dengan topik persaingan produk teknologi di Indonesia`,
    tools: ["Nikon D3400", "CapCut"],
    behindTheScenes: "Tight devices and time constraints",
      featured: false
  },
  {
    id: 13,
    title: "Khitan Documentation",
    category: "videography",
    year: "2025",
    role: "Videographer, Photographer, Editor",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1_zAq4ZzTqZmilx1_jArKK_m-GOzbHFld/preview",
    description_en: `Podcast on the topic of competition among technology products in Indonesia`,
    description_id: `Podcast dengan topik persaingan produk teknologi di Indonesia`,
    tools: ["Canon 700D", "CapCut"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 14,
    title: "Theatre Documentation 1",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1RfNs-k6LXwIHLCOfO-i0HaqIUB8XmUrG/preview",
    description_en: `Documentation of the 2025 East Jakarta Student Theatre Festival for a week.`,
    description_id: `Dokumentasi Festival Teater Pelajar Jakarta Timur 2025 selama satu minggu. `,
    tools: ["Sony A6000", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DL13yy-BMa9/",
      featured: false
  },
  {
    id: 15,
    title: "Theatre Documentation 2",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1kz6vH_O2D-gRE3q2zRe6uGO6aFQR7ID3/preview",
    description_en: `Documentation of the 2025 East Jakarta Student Theatre Festival for one week.`,
    description_id: `Dokumentasi Festival Teater Pelajar Jakarta Timur 2025 selama satu minggu.`,
    tools: ["Sony A6000", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DL1wWO4B409/",
      featured: false
  },
  {
    id: 16,
    title: "Theatre Documentation 3",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/1hTqdLCgTubYne6Kr1N__jb5V1YnDnlm2/preview",
    description_en: `Documentation of the 2025 East Jakarta Theatre Festival for one week.`,
    description_id: `Dokumentasi Festival Teater Jakarta Timur 2025 selama satu minggu.`,
    tools: ["Canon 750D", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DOWHJGaAfPO/",
      featured: false
  },
  {
    id: 17,
    title: "Theatre Documentation 4",
    category: "videography",
    year: "2025",
    role: "Videographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771074859/LCH_3260-16-9_osnaui.jpg",
    media: "https://drive.google.com/file/d/18rmhqbLDOoaRraXr_A3SCglL8ulQ1Gkp/preview",
    description_en: `Documentation of the 2025 East Jakarta Theatre Festival for one week.`,
    description_id: `Dokumentasi Festival Teater Jakarta Timur 2025 selama satu minggu.`,
    tools: ["Canon 750D", "DJI Ronin SC 2"],
    behindTheScenes: "Original Link: https://www.instagram.com/reel/DOaaqUYAf0_/",
      featured: false
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
    description_en: `A shot showing the contrast between a human-made iron tower structure and the lush surrounding nature.`,
    description_id: `Tangkapan yang memperlihatkan kontras antara struktur menara besi buatan manusia dan rindangnya alam sekitar.`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: "Used mushroom lens to achieve the glowing light effect.",
      featured: false
  },
  {
    id: 19,
    title: "Natural Canopy",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083179/IMG_0039_mwyei3.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083179/IMG_0039_mwyei3.jpg",
    description_en: `A natural framing composition of lush foliage against a bright blue sky.`,
    description_id: `Komposisi framing alami dari rimbunnya dedaunan dengan latar langit biru cerah.`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: "Used mushroom lens to achieve the glowing light effect.",
      featured: false
  },
  {
    id: 20,
    title: "Highway Trails",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083180/IMG_9181_mtyuwq.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083180/IMG_9181_mtyuwq.jpg",
    description_en: `A long exposure experiment capturing vehicle light trails on the highway at night.`,
    description_id: `Eksperimen long exposure yang menangkap garis cahaya kendaraan di jalan tol pada malam hari.`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 21,
    title: "Vibrant Crunch",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083242/DSC_3463-2_exu63m.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083242/DSC_3463-2_exu63m.jpg",
    description_en: `A close-up detail highlighting the freshness and colorful texture of a salad dish.`,
    description_id: `Detail jarak dekat yang menonjolkan kesegaran dan tekstur warna-warni dari hidangan salad.`,
    tools: ["Nikon D3400", "Lightroom"],
    behindTheScenes: "Product assignment",
      featured: false
  },
  {
    id: 22,
    title: "Anchored Silence",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083212/DSC_3547_c5x1pm.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083212/DSC_3547_c5x1pm.jpg",
    description_en: `A lone boat moored in calm waters with a cinematic overcast sky.`,
    description_id: `Sebuah perahu tunggal yang bersandar di perairan tenang dengan nuansa langit mendung yang sinematik.`,
    tools: ["Nikon D3400", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 23,
    title: "Neon Arteries",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083237/DSC_3927_hpwm2z.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083237/DSC_3927_hpwm2z.jpg",
    description_en: `A long exposure shot capturing red vehicle light trails crossing the city streets.`,
    description_id: `Tangkapan long exposure yang merekam jejak cahaya merah kendaraan melintasi jalanan kota.`,
    tools: ["Nikon D3400", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 24,
    title: "Reunion Documentation 1",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083709/IMG_0187_dyucvz.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083709/IMG_0187_dyucvz.jpg",
    description_en: `Halal bihalal documentation`,
    description_id: `Dokumentasi halal bihalal`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 25,
    title: "Reunion Documentation 2",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083753/IMG_0028_zmpt7m.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083753/IMG_0028_zmpt7m.jpg",
    description_en: `Halal bihalal documentation`,
    description_id: `Dokumentasi halal bihalal`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 26,
    title: "Reunion Documentation 3",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083791/IMG_0376_erorpo.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083791/IMG_0376_erorpo.jpg",
    description_en: `Halal bihalal documentation`,
    description_id: `Dokumentasi halal bihalal`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 27,
    title: "Reunion Documentation 4",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083808/IMG_0274_qlreov.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083808/IMG_0274_qlreov.jpg",
    description_en: `Halal bihalal documentation`,
    description_id: `Dokumentasi halal bihalal`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 28,
    title: "Reunion Documentation 5",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083819/IMG_0147_cfqn0s.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083819/IMG_0147_cfqn0s.jpg",
    description_en: `Halal bihalal documentation`,
    description_id: `Dokumentasi halal bihalal`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 29,
    title: "Urban Dome",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083397/IMG_9704_yk2eiv.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083397/IMG_9704_yk2eiv.jpg",
    description_en: `Architectural photography that highlights the unique structure of the building under a bright sky.`,
    description_id: `Fotografi arsitektur yang menonjolkan struktur unik bangunan di bawah langit yang cerah.`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 30,
    title: "Recitation Documentation 1",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084011/DSC_4334_yvytqj.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084011/DSC_4334_yvytqj.jpg",
    description_en: `Recitation documentation`,
    description_id: `Dokumentasi pengajian`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 31,
    title: "Recitation Documentation 2",
    category: "photography",
    year: "2025",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083837/DSC_4339_uxhdas.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771083837/DSC_4339_uxhdas.jpg",
    description_en: `Recitation documentation`,
    description_id: `Dokumentasi pengajian`,
    tools: ["Canon 700D", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 32,
    title: "Night Trails",
    category: "photography",
    year: "2026",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771856553/LCH_3280_1_chcv38.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771856553/LCH_3280_1_chcv38.jpg",
    description_en: `Blue and red light trails cutting through the darkness create a dynamic visual energy along the road.`,
    description_id: `Garis cahaya biru dan merah yang membelah kegelapan menciptakan energi visual yang dinamis di sepanjang jalan.`,
    tools: ["Nikon Dd3400", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 33,
    title: "Night Trails 2",
    category: "photography",
    year: "2026",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771856546/LCH_3282_khglu9.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771856546/LCH_3282_khglu9.jpg",
    description_en: `The consistent flow of vehicle taillights conveys a sense of smooth movement amidst the silence of the night.`,
    description_id: `Aliran lampu belakang kendaraan yang konsisten memberikan kesan pergerakan yang mulus di tengah sunyinya malam.`,
    tools: ["Nikon D3400", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },

  // ========== DESIGN ==========

  {
    id: 34,
    title: "Letclame Logo 1",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084027/Logo_Letclame_FINAL_PALING_BANGET_NGET_l5wsoe.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084027/Logo_Letclame_FINAL_PALING_BANGET_NGET_l5wsoe.png",
    description_en: `For Class Meeting event.`,
    description_id: `Untuk acara Class Meeting.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 35,
    title: "Letclame Logo 2",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084130/LOGO_LETCLAME_2024_BG_IJO_iu50fj.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084130/LOGO_LETCLAME_2024_BG_IJO_iu50fj.png",
    description_en: `For Class Meeting event.`,
    description_id: `Untuk acara Class Meeting.`,
    tools: ["Illustrator"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 36,
    title: "Festival Logo",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084028/Logo_LetRIZZ_Festival_2024_pqb3jq.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084028/Logo_LetRIZZ_Festival_2024_pqb3jq.png",
    description_en: `For LetRIZZ Festival event.`,
    description_id: `Untuk acara LetRIZZ Festival.`,
    tools: ["Illustrator"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 37,
    title: "Company Logo",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084141/Algit_Landscape_mgqb3e.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084141/Algit_Landscape_mgqb3e.png",
    description_en: `Logo for Algit company.`,
    description_id: `Logo untuk perusahaan Algit.`,
    tools: ["Illustrator"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 38,
    title: "Company Logo 2",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084150/Algit_White_Portrait_Slogan_mhfsya.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084150/Algit_White_Portrait_Slogan_mhfsya.png",
    description_en: `Logo for Algit company.`,
    description_id: `Logo untuk perusahaan Algit.`,
    tools: ["Illustrator"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 39,
    title: "Company Sticker",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084200/Sticker_BK_DCB_Design_70x30_cm_wb6tf2.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084200/Sticker_BK_DCB_Design_70x30_cm_wb6tf2.png",
    description_en: `Sticker for printing.`,
    description_id: `Sticker untuk dicetak`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 40,
    title: "Almamater Prototype",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084219/Desain_Almamater_OSIS_MPK_Letris_2_Detailed_pyc9m1.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084219/Desain_Almamater_OSIS_MPK_Letris_2_Detailed_pyc9m1.png",
    description_en: `Almamater prototype for OSIS MPK Letris 2.`,
    description_id: `Prototipe almamater untuk OSIS MPK Letris 2.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 41,
    title: "Festival Poster",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084221/LETRIZZ_A3_FINAL_FINAL_tvnzcd.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084221/LETRIZZ_A3_FINAL_FINAL_tvnzcd.jpg",
    description_en: `Poster for LetRIZZ Festival.`,
    description_id: `Poster untuk acara LetRIZZ Festival.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 42,
    title: "Independence Day Poster",
    category: "design",
    year: "2023",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771085612/Independence_Poster_of_Farrel_Putra_Setiawan_X_RPL_1_qtdccg.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771085612/Independence_Poster_of_Farrel_Putra_Setiawan_X_RPL_1_qtdccg.png",
    description_en: `Practice.`,
    description_id: `Latihan.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 43,
    title: "Doc Puzzle Feeds",
    category: "design",
    year: "2024",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084447/mari_kita_letsee_qq1knp.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084447/mari_kita_letsee_qq1knp.jpg",
    description_en: `OSIS.`,
    description_id: `OSIS.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 44,
    title: "Doc Puzzle Feeds 2",
    category: "design",
    year: "2024",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084421/OUTING_KELAZZZ_RIL_COY_ajk0ke.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084421/OUTING_KELAZZZ_RIL_COY_ajk0ke.jpg",
    description_en: `OSIS.`,
    description_id: `OSIS.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 45,
    title: "Doc Puzzle Feeds 3",
    category: "design",
    year: "2024",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084552/FEEDS_DOKUMENTASI_LETCLAME_1.5x_1.5x_s8odbv.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084552/FEEDS_DOKUMENTASI_LETCLAME_1.5x_1.5x_s8odbv.png",
    description_en: `OSIS.`,
    description_id: `OSIS.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 46,
    title: "Pilkatos Puzzle Feeds",
    category: "design",
    year: "2024",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084461/PILKATOS_2024_zbjdou.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771084461/PILKATOS_2024_zbjdou.png",
    description_en: `OSIS.`,
    description_id: `OSIS.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 47,
    title: "OSIS ID Card",
    category: "design",
    year: "2024",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771857796/FARREL_PUTRA_ta8hvc.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771857796/FARREL_PUTRA_ta8hvc.png",
    description_en: `OSIS.`,
    description_id: `OSIS.`,
    tools: ["Photoshop"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 49,
    title: "OSIS Structure Feeds",
    category: "design",
    year: "2025",
    role: "Designer, Creative Director",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771857722/IMG_20260223_194810.jpg_jz5ufz.jpg",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771857722/IMG_20260223_194810.jpg_jz5ufz.jpg",
    description_en: `Big project of OSIS.`,
    description_id: `Proyek besar OSIS.`,
    tools: ["Photoshop", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
  {
    id: 50,
    title: "Recruitment Poster",
    category: "design",
    year: "2025",
    role: "Designer",
    thumbnail: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771857922/AVCOMM_Open_Rec_SG_phxahy.png",
    media: "https://res.cloudinary.com/dj5v96fla/image/upload/v1771857922/AVCOMM_Open_Rec_SG_phxahy.png",
    description_en: `Recruitment poster for film extracurricular.`,
    description_id: `Poster rekrutmen anggota ekstrakulikuler film.`,
    tools: ["Photoshop", "Lightroom"],
    behindTheScenes: null,
      featured: false
  },
//   {
//     id: 7,
//     title: "Minimalist UI",
//     category: "design",
//     year: "2024",
//     role: "UI/UX Designer",
//     thumbnail: "portfolio/projects/minimalist-ui.jpg",
//     media: "portfolio/projects/minimalist-ui-full.jpg",
//     description_en: `Web design project focusing on negative space and typography. The goal was to remove all non-essential elements.`,
//     description_id: `Proyek desain web yang berfokus pada ruang negatif dan tipografi. Tujuannya adalah menghapus semua elemen yang tidak penting.`,
//     tools: ["Figma", "React"],
//     behindTheScenes: "Iterated through 20 different layout concepts before finalizing."
//   },
];
