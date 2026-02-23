import { siteConfig } from '../config/site';

export const translations = {
  en: {
    nav: {
      works: "Portfolio", // Changed from Works
      about: "About Me", // Changed from About
      contact: "Contact"
    },
    hero: {
      title: siteConfig.name, // Using config
      subtitle: siteConfig.role_en, // Using config
      cta: "View Selected Works"
    },
    about: {
      title: "About Me",
      description: "I am a filmmaker and videographer driven by a passion for visual storytelling. I create narrative films that explore emotion and meaning, while also working on real-world productions such as events and documentaries. My approach blends creative direction with technical execution, always aiming to craft visuals that feel cinematic yet authentic.",
      role: siteConfig.role_en
    },
    portfolio: {
      title: "Selected Works", // Changed from Works
      categories: {
        all: "All",
        film: "Film",
        videography: "Videography",
        photography: "Photography",
        design: "Design"
      }
    },
    contact: {
      title: "Let's Create Together",
      email: "Email Me",
      instagram: "Instagram"
    },
    skills: {
      title: "My Software Skills",
      subtitle: "Tools I use to bring creative visions to life."
    },
    olderPortfolio: {
      label: "From The Archives",
      title: "Older Portfolio"
    },
    footer: {
      tagline: siteConfig.tagline_en
    }
  },
  id: {
    nav: {
      works: "Portofolio", // Changed from Karya
      about: "Tentang Saya", // Changed from Tentang
      contact: "Kontak"
    },
    hero: {
      title: siteConfig.name,
      subtitle: siteConfig.role_id,
      cta: "Lihat Karya Pilihan"
    },
    about: {
      title: "Tentang Saya",
      description: "Saya adalah seorang pembuat film dan videografer yang didorong oleh passion dalam bercerita melalui visual. Saya menciptakan film naratif yang mengeksplorasi emosi dan makna, sambil juga terlibat dalam produksi nyata seperti acara dan dokumenter. Pendekatan saya menggabungkan arahan kreatif dengan eksekusi teknis, selalu berupaya menciptakan visual yang terasa sinematik namun autentik.",
      role: siteConfig.role_id
    },
    portfolio: {
      title: "Karya Pilihan",
      categories: {
        all: "Semua",
        film: "Film",
        videography: "Videografi",
        photography: "Fotografi",
        design: "Desain"
      }
    },
    contact: {
      title: "Mari Berkarya Bersama",
      email: "Email Saya",
      instagram: "Instagram"
    },
    skills: {
      title: "Skill Software Saya",
      subtitle: "Alat yang saya gunakan untuk mewujudkan visi kreatif."
    },
    olderPortfolio: {
      label: "Dari Arsip",
      title: "Portofolio Lama"
    },
    footer: {
      tagline: siteConfig.tagline_id
    }
  }
};
