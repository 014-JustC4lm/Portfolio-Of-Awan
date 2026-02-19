import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { softwareSkills } from '../data/skills';

const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-text">
              {t('skills.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-textSoft max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            {softwareSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col items-center gap-3 group"
              >
                <div 
                  className="w-20 h-20 rounded-2xl bg-base border border-border flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-110 group-hover:border-accent shadow-sm"
                  style={{ color: skill.color }}
                >
                  <skill.icon />
                </div>
                <span className="text-sm font-medium text-textSoft group-hover:text-text transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
