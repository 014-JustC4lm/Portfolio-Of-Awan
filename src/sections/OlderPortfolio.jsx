import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const OlderPortfolio = () => {
  const { t } = useLanguage();
  // Google Drive link converted to preview/embed format
  const driveEmbedUrl = 'https://drive.google.com/file/d/1FPUpCDNQGzuGY8W3MG6yCFRb6XIfXCB3/preview';

  return (
    <section id="older-portfolio" className="py-16 md:py-32 bg-gray-50 dark:bg-[#0E0E10] transition-colors">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">
            {t('olderPortfolio.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t('olderPortfolio.title')}
          </h2>

        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Cinematic border/glow effect */}
          <div className="relative rounded-none overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Aspect ratio wrapper: 16:9 */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={driveEmbedUrl}
                title="Older Portfolio"
                allow="autoplay"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          {/* Subtle decorative line below */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-textSecondary uppercase tracking-widest">
              Early 2025
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OlderPortfolio;
