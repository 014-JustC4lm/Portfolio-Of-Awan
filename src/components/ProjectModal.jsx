import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, onClose }) => {
  const { language, t } = useLanguage();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1); // 1 = next, -1 = prev

  // Normalize media to always be an array
  const mediaList = Array.isArray(project?.media)
    ? project.media
    : project?.media
    ? [project.media]
    : [];

  const hasMultipleMedia = mediaList.length > 1;

  // Reset slide index when project changes
  useEffect(() => {
    setCurrentMediaIndex(0);
    setSlideDirection(1);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasMultipleMedia) handleNext();
      if (e.key === 'ArrowLeft' && hasMultipleMedia) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, hasMultipleMedia, currentMediaIndex]);

  if (!project) return null;

  const description = language === 'en' ? project.description_en : project.description_id;

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentMediaIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handlePrev = () => {
    setSlideDirection(-1);
    setCurrentMediaIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  // Helper function to convert YouTube URLs to embed format
  const getYouTubeEmbedUrl = (url) => {
    if (url.includes('/embed/')) return url;
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    return url;
  };

  const renderMedia = (url) => {
    if (!url) return null;

    if (url.includes('youtube') || url.includes('youtu.be')) {
      return (
        <iframe
          width="100%"
          height="100%"
          src={getYouTubeEmbedUrl(url)}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (url.includes('instagram.com')) {
      return (
        <iframe
          width="100%"
          height="100%"
          src={url.replace('/reel/', '/p/').replace(/\/$/, '') + '/embed/'}
          title={project.title}
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
        />
      );
    }

    if (url.includes('drive.google.com')) {
      return (
        <iframe
          width="100%"
          height="100%"
          src={url.replace('/view', '/preview')}
          title={project.title}
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
        />
      );
    }

    if (url.includes('cloudinary.com/video')) {
      return (
        <video width="100%" height="100%" controls className="w-full h-full">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    // Image fallback
    return (
      <img
        src={url}
        alt={project.title}
        className="w-full h-full object-contain"
      />
    );
  };

  const renderTextWithLinks = (text) => {
    if (!text) return text;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Slide animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-base w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Media Preview */}
        <div className="w-full aspect-video bg-black relative overflow-hidden">
          <AnimatePresence initial={false} custom={slideDirection} mode="popLayout">
            <motion.div
              key={currentMediaIndex}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              {renderMedia(mediaList[currentMediaIndex])}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows — only show if multiple media */}
          {hasMultipleMedia && (
            <>
              {/* Prev Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Previous media"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Next Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Next media"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Slide Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {/* Dot indicators */}
                {mediaList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSlideDirection(idx > currentMediaIndex ? 1 : -1);
                      setCurrentMediaIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentMediaIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to media ${idx + 1}`}
                  />
                ))}
                {/* Numeric counter */}
                <span className="ml-2 text-white/80 text-xs font-mono bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {currentMediaIndex + 1} / {mediaList.length}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-2 block">{project.category}</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{project.title}</h2>
              <div className="text-textSecondary text-lg leading-relaxed mb-8 whitespace-pre-wrap">
                {description}
              </div>

              {project.behindTheScenes && (
                <div className="bg-surface p-6 border-l-2 border-accent mt-8">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-wider">Behind The Scenes</h4>
                  <p className="text-sm italic text-textSecondary">{renderTextWithLinks(project.behindTheScenes)}</p>
                </div>
              )}
            </div>

            <div className="w-full md:w-64 flex flex-col gap-6">
              <div>
                <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-textSecondary">Role</h4>
                <p>{project.role}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-textSecondary">Year</h4>
                <p>{project.year}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-textSecondary">Tools</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <li key={idx} className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs rounded-full">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
