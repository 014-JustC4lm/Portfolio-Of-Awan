# Farrel Putra Setiawan — Portfolio Website

A cinematic, bilingual (EN/ID) personal portfolio website for a filmmaker and videographer. Built to showcase works across Film, Videography, Photography, and Design.

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 3** for styling
- **Framer Motion 12** for animations
- **Cloudinary** for image CDN and optimization

## Features

- 🌍 Full **bilingual** support (English / Indonesian)
- 🌙 **Dark/Light mode** toggle
- ⚡ **Progressive image loading** — LQIP blur-up effect + responsive srcSets via Cloudinary
- 🔄 **"Load More"** batching in Portfolio and Gallery sections to prevent DOM overload
- 🖱️ Physics-based **custom cursor** (desktop only)
- 🎬 Cinematic **splash screen** on load
- 📱 Fully **responsive** — mobile-first design

## Project Structure

```
src/
├── components/     # Reusable UI components (Navigation, ProjectCard, CloudImage, etc.)
├── sections/       # Page sections (Hero, Portfolio, Gallery, Contact, etc.)
├── data/           # Content databases (works.js, gallery.js, skills.js)
├── config/         # Site config and Cloudinary config
├── context/        # ThemeContext, LanguageContext
└── i18n/           # Translations (EN + ID)
```

## Adding New Portfolio Content

1. Open `src/data/works.js`
2. Copy the template from the top comment in the file
3. Increment the `id` from the last entry
4. Fill in your Cloudinary thumbnail URL and media link
5. Save — the site updates instantly

## Running Locally

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```
