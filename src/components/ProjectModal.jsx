import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  const description = language === 'en' ? project.description_en : project.description_id;

  // Helper function to convert YouTube URLs to embed format
  const getYouTubeEmbedUrl = (url) => {
    // Already embed format
    if (url.includes('/embed/')) return url;
    
    // Watch format: youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    
    // Short format: youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    
    return url; // Return original if no match
  };

  const renderTextWithLinks = (text) => {
    if (!text) return text;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            {part}
          </a>
        );
      }
      return part;
    });
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
        <div className="w-full aspect-video bg-black">
          {project.media.includes('youtube') || project.media.includes('youtu.be') ? (
             // YouTube embed
             <iframe 
               width="100%" 
               height="100%" 
               src={getYouTubeEmbedUrl(project.media)} 
               title={project.title}
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
          ) : project.media.includes('instagram.com') ? (
             // Instagram Reels/Posts embed
             <iframe 
               width="100%" 
               height="100%" 
               src={project.media.replace('/reel/', '/p/').replace(/\/$/, '') + '/embed/'}
               title={project.title}
               frameBorder="0" 
               scrolling="no"
               allowTransparency={true}
             ></iframe>
          ) : project.media.includes('drive.google.com') ? (
             // Google Drive embed support
             <iframe 
               width="100%" 
               height="100%" 
               src={project.media.replace('/view', '/preview')} 
               title={project.title}
               frameBorder="0" 
               allow="autoplay"
               allowFullScreen
             ></iframe>
          ) : project.media.includes('cloudinary.com/video') ? (
             // Cloudinary video
             <video 
               width="100%" 
               height="100%" 
               controls
               className="w-full h-full"
             >
               <source src={project.media} type="video/mp4" />
               Your browser does not support the video tag.
             </video>
          ) : (
             // Image fallback
             <img 
               src={project.media} 
               alt={project.title} 
               className="w-full h-full object-contain"
             />
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-2 block">{project.category}</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{project.title}</h2>
              <p className="text-textSecondary text-lg leading-relaxed mb-8">
                {description}
              </p>
              
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
