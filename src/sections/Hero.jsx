import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { scrollToSection } from '../utils/scrollTo';
import Button from '../components/Button';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Texture (Optional noise) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6">
            {t('hero.title')}
          </h1>
          <h2 className="text-sm md:text-xl font-light tracking-[0.2em] uppercase text-textSoft mb-12 max-w-xs mx-auto md:max-w-xl">
            {t('hero.subtitle')}
          </h2>

          <div className="flex justify-center">
            <Button 
              variant="outline"
              className="rounded-full px-8 py-4 uppercase tracking-widest text-sm"
              onClick={() => scrollToSection('portfolio')}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-text to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
