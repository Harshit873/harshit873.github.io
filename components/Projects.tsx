import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../constants.tsx';
import { LinkIcon, CodeBracketIcon } from './ui/Icons.tsx';

const ProjectCard: React.FC<{ project: any, index: number, view: 'grid' | 'focus' }> = ({ project, index, view }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      layout
      className={`relative perspective-2000 ${
        view === 'focus' ? 'w-full mb-8 min-h-[260px]' : 'h-[420px]'
      }`}
      onMouseEnter={() => view === 'grid' && setIsFlipped(true)}
      onMouseLeave={() => view === 'grid' && setIsFlipped(false)}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 1.2, 
          type: "spring", 
          stiffness: 80, 
          damping: 25, 
          mass: 1.2 
        }}
        className="relative w-full h-full preserve-3d cursor-default shadow-2xl"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-[#101010] border border-white/5 rounded-3xl p-10 flex flex-col justify-between overflow-hidden group hover:border-[#00F5D4]/20 transition-all duration-700">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 bg-[#00F5D4]/5 rounded-full blur-[80px] group-hover:bg-[#00F5D4]/10 transition-colors"></div>
            
            <div>
              <div className="flex justify-between items-center mb-8">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-12 w-12 rounded-2xl bg-[#050505] flex items-center justify-center border border-white/10"
                >
                   <CodeBracketIcon className="h-6 w-6 text-[#00F5D4]" />
                </motion.div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-[#050505] rounded-full text-[#888888] hover:text-[#00F5D4] border border-white/10 hover:border-[#00F5D4]/40 transition-all"
                    >
                      <LinkIcon className="h-5 w-5" />
                    </motion.a>
                  )}
                </div>
              </div>
              <motion.h3 className="text-2xl font-black text-[#F1F1F1] mb-4 tracking-tight">{project.title}</motion.h3>
              <p className="text-[#888888] text-base leading-relaxed line-clamp-5 group-hover:text-[#BDBDBD] transition-colors">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 pt-8 border-t border-white/5">
              {project.tags.slice(0, 4).map((tag: string) => (
                <span key={tag} className="px-3 py-1.5 bg-[#050505] rounded-lg text-[10px] uppercase tracking-[0.2em] font-black text-[#444444] group-hover:text-[#00F5D4] transition-all border border-transparent group-hover:border-[#00F5D4]/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side (Detailed Tech/QA Focus) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-[#00F5D4] to-[#00D1B5] rounded-3xl p-10 flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isFlipped ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl font-black text-[#050505] mb-6 uppercase tracking-tighter">QA Architecture</h3>
              <div className="space-y-4 mb-10">
                <p className="text-[#050505]/80 text-lg font-bold leading-snug">
                  Implemented robust Agile frameworks and multi-platform validation protocols.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[11px] font-black text-[#00F5D4] bg-[#050505] px-3 py-1.5 rounded-full shadow-lg">#{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#050505] text-[#00F5D4] text-xs font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest shadow-xl"
                  >
                    Launch Experience
                  </a>
                )}
                <button className="text-[#050505] text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Technical Docs →</button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [view, setView] = useState<'grid' | 'focus'>('grid');

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
        <div>
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl font-black text-[#F1F1F1] tracking-tighter italic uppercase"
          >
            Case Studies<span className="text-[#00F5D4]">.</span>
          </motion.h2>
          <p className="mt-6 text-[#888888] max-w-xl text-lg leading-relaxed">
            High-fidelity validation for industry leaders in gaming, blockchain, and mixed reality.
          </p>
        </div>
        
        {/* View Toggle - Premium UI */}
        {/* <div className="flex items-center bg-[#101010] p-1.5 rounded-2xl border border-white/5 self-start md:self-auto">
          <button 
            onClick={() => setView('grid')}
            className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all duration-500 uppercase ${view === 'grid' ? 'bg-[#00F5D4] text-[#050505] shadow-[0_0_20px_rgba(0,245,212,0.3)]' : 'text-[#444444] hover:text-white'}`}
          >
            GRID
          </button>
          <button 
            onClick={() => setView('focus')}
            className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all duration-500 uppercase ${view === 'focus' ? 'bg-[#00F5D4] text-[#050505] shadow-[0_0_20px_rgba(0,245,212,0.3)]' : 'text-[#444444] hover:text-white'}`}
          >
            FOCUS
          </button>
        </div> */}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div 
          layout
          className={`grid gap-10 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-4xl mx-auto'}`}
          transition={{ 
            duration: 1.0, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.6 } }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <ProjectCard project={project} index={index} view={view} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </motion.section>
  );
};

export default Projects;