import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { works } from '../data/works';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['all', 'film', 'videography', 'photography', 'design'];

  const filteredProjects = activeCategory === 'all' 
    ? works 
    : works.filter(p => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Reset visible count when category changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="portfolio" className="py-16 md:py-32 bg-gray-50 dark:bg-[#0E0E10] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            {t('portfolio.title')}
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-sm uppercase tracking-widest px-2 py-1 relative transition-colors ${
                  activeCategory === cat ? 'text-text font-bold' : 'text-textSecondary hover:text-text'
                }`}
              >
                {t(`portfolio.categories.${cat}`)}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-text text-base hover:bg-accent transition-colors duration-300 font-medium tracking-wide"
            >
              Load More Works
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
