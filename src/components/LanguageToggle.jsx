import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`font-medium tracking-wide hover:text-accent transition-colors w-8 text-center ${className}`}
      aria-label="Toggle language"
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
