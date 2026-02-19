import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';

// Placeholder section imports - will be replaced as we build them
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import CreativeApproach from './sections/CreativeApproach';
import VisualGallery from './sections/VisualGallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-text transition-colors duration-300 overflow-x-hidden">
          <Navigation />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <CreativeApproach />
            <VisualGallery />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
