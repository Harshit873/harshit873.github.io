import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ParticlesBackground from './components/ParticlesBackground.tsx';
import PageLoader from './components/PageLoader.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.02, y: -15 },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Hero setCurrentPage={setCurrentPage} />
          </motion.div>
        );
      case 'about':
        return <About key="about" />;
      case 'experience':
        return <Experience key="experience" />;
      case 'skills':
        return <Skills key="skills" />;
      case 'projects':
        return <Projects key="projects" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Hero key="hero-default" setCurrentPage={setCurrentPage} />;
    }
  };

  if (loading) return <PageLoader />;

  return (
    <div className="bg-[#050505] min-h-screen text-[#BDBDBD] font-sans selection:bg-[#00F5D4]/20 overflow-x-hidden">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-12">
          <AnimatePresence mode="wait" initial={false}>
            {renderPage()}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;