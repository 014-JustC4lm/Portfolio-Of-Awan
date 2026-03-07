import { motion } from 'framer-motion';
import CloudImage from './CloudImage';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative cursor-pointer overflow-hidden aspect-video bg-gray-200 dark:bg-gray-800 z-50"
      onClick={() => onClick(project)}
    >
      <CloudImage
        src={project.thumbnail}
        alt={project.title}
        className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
      />
      
      {/* Featured Badge */}
      {project.featured && (
        <div 
          className="absolute top-4 right-4 z-20 bg-accent text-white p-2 rounded-full shadow-lg backdrop-blur-sm"
          title="Featured Work"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        </div>
      )}

      {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300"
        >
          <p className="text-accent text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 font-semibold">{project.category}</p>
          <h3 className="text-white text-lg md:text-2xl font-serif font-bold mb-1">{project.title}</h3>
          <p className="text-gray-300 text-xs md:text-sm">{project.role} • {project.year}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
