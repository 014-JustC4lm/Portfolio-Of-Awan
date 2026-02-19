import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 relative bg-base transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gray-800 relative z-10">
              <img 
                src="https://res.cloudinary.com/dj5v96fla/image/upload/v1770976087/IMG_3731crop_eznqyl.jpg" 
                alt="Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-textSecondary/20 z-0"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent tracking-widest uppercase text-sm font-semibold mb-4 block">
              {t('about.role')}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              {t('about.title')}
            </h2>
            <div className="h-1 w-20 bg-accent mb-8"></div>
            <p className="text-lg text-textSoft leading-relaxed mb-8">
              {t('about.description')}
            </p>
            
            <div className="mt-12">
              <p className="text-xl font-serif italic text-text">
                "I believe that every frame should tell a story, and every cut should feature an emotion."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
