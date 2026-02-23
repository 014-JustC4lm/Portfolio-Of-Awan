import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/Button';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 bg-base transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
            {t('nav.contact')}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12">
            {t('contact.title')}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="https://mail.google.com/mail/?view=cm&to=awantheonlywan@gmail.com" target="_blank" rel="noopener noreferrer" className="min-w-[200px]">
              <Button variant="primary" className="w-full">
                {t('contact.email')}
              </Button>
            </a>
            <a href="https://instagram.com/farrel_putra_s" target="_blank" rel="noopener noreferrer" className="min-w-[200px]">
              <Button variant="outline" className="w-full">
                {t('contact.instagram')}
              </Button>
            </a>
          </div>

          <p className="mt-16 text-textSoft">
            Based in Tangerang Selatan, Indonesia. Available for tailored projects worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
