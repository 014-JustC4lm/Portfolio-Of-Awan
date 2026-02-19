import { motion } from 'framer-motion';
import { getCloudinaryUrl } from '../config/cloudinary';

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
      <img
        src={getCloudinaryUrl(project.thumbnail, 'c_fill,w_600,h_450,f_auto,q_auto')}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      
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
