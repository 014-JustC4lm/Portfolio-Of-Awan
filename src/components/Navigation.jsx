import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { scrollToSection } from '../utils/scrollTo';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

import { siteConfig } from '../config/site';

const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'works', id: 'portfolio' },
    { key: 'about', id: 'about' },
    { key: 'contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-base/80 backdrop-blur-md border-b border-border py-2 md:py-4' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <div 
            className="text-base md:text-xl font-serif font-bold tracking-wide cursor-pointer z-50 relative uppercase text-black dark:text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Awan<span className="text-accent">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 mr-4 border-r border-gray-300 dark:border-gray-700 pr-6">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.id)}
                  className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle & Controls */}
          <div className="md:hidden flex items-center gap-3 z-50 relative">
             <div className="flex items-center gap-2 mr-1">
              <LanguageToggle className="text-xs" />
              <ThemeToggle className="scale-90" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <motion.span 
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                  className="w-6 h-0.5 bg-text block"
                />
                <motion.span 
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-4 h-0.5 bg-text block transition-all"
                />
                <motion.span 
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                  className="w-6 h-0.5 bg-text block"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] bg-base/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.id)}
                className="text-2xl font-serif font-bold tracking-wide text-text hover:text-accent"
              >
                {t(`nav.${link.key}`)}
              </button>
            ))}
            
            <div className="flex items-center space-x-6 mt-8 p-4 border-t border-gray-200 dark:border-gray-800">
              <LanguageToggle className="text-xl" />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
