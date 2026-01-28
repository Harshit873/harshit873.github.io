import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui/Icons';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

// FIX: Explicitly typing variants to avoid type inference issues with staggerChildren and easing arrays
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
};

// FIX: Explicitly typing variants to correctly interpret [number, number, number, number] as a cubic-bezier Easing
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <motion.section 
      id="home" 
      className="min-h-[70vh] flex flex-col justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block px-3 py-1 bg-[#00F5D4]/10 border border-[#00F5D4]/20 rounded-full mb-6">
           <p className="text-[#00F5D4] text-xs font-bold uppercase tracking-widest">Available for Hire</p>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-[#F1F1F1] tracking-tight leading-[1.1]">
          Harshit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7000FF]">Shah</span>
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#888888] tracking-tight">
          Team Lead & Scrum Master
        </motion.h2>
        
        <motion.p variants={itemVariants} className="mt-8 max-w-2xl text-xl text-[#BDBDBD] leading-relaxed">
          Driving quality in high-stakes environments. I lead QA teams for global titles in gaming, AR/VR, and blockchain technology.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-6">
          <button 
            onClick={() => setCurrentPage('projects')}
            className="px-8 py-4 bg-[#00F5D4] text-[#050505] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,245,212,0.2)] hover:shadow-[0_0_30px_rgba(0,245,212,0.4)]"
          >
            Explore Projects
          </button>
          <div className="flex items-center gap-5">
            <a href="https://github.com/harshit873" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#888888] hover:text-[#00F5D4] transition-colors"><GitHubIcon className="h-7 w-7" /></a>
            <a href="https://www.linkedin.com/in/harshit-shah-b7a1231a4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#888888] hover:text-[#00F5D4] transition-colors"><LinkedInIcon className="h-7 w-7" /></a>
            <a href="mailto:harshitshah873@gmail.com" aria-label="Email" className="text-[#888888] hover:text-[#00F5D4] transition-colors"><MailIcon className="h-7 w-7" /></a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;