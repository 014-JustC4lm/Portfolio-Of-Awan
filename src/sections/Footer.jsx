import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-base transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-textSoft gap-4">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
        <p className="font-serif italic text-text hidden md:block">
          {t('footer.tagline')}
        </p>
        <div className="flex gap-6">
          <a 
            href={`https://instagram.com/${siteConfig.instagram.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/in/farrel-putra-setiawan-492a3631a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
