import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';

import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

// Placeholder section imports - will be replaced as we build them
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import CreativeApproach from './sections/CreativeApproach';
import VisualGallery from './sections/VisualGallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import OlderPortfolio from './sections/OlderPortfolio';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-text transition-colors duration-300 overflow-x-hidden">
          <PageTransition />
          <CustomCursor />
          <Navigation />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <CreativeApproach />
            <VisualGallery />
            <OlderPortfolio />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
