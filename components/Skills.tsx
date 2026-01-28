
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { SkillCategory } from '../types';

// FIX: Explicitly typing variants to avoid type inference issues with ease arrays
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// FIX: Explicitly typing variants to correctly interpret [number, number, number, number] as a cubic-bezier Easing
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  },
};

const Skills: React.FC = () => {
  return (
    <motion.section 
      id="skills" 
      className="py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-20">
        <h2 className="text-4xl sm:text-6xl font-black text-[#F1F1F1] tracking-tighter italic uppercase">Arsenal<span className="text-[#00F5D4]">.</span></h2>
        <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
        <p className="text-[#888888] text-sm uppercase tracking-[0.3em] font-bold">Comprehensive QA Tech Stack</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS_DATA.map((category: SkillCategory) => (
          <motion.div 
            key={category.title}
            className="bg-[#101010] border border-white/5 rounded-[2rem] p-10 hover:border-[#00F5D4]/20 hover:bg-[#121212] transition-all duration-700 relative group overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F5D4]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            
            <h3 className="text-xs font-black text-[#444444] group-hover:text-[#00F5D4] uppercase tracking-[0.4em] mb-10 transition-colors">{category.title}</h3>
            
            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-4 group/item"
                >
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center bg-[#050505] border border-white/5 rounded-xl group-hover/item:border-[#00F5D4]/30 transition-all group-hover/item:scale-110">
                    {skill.icon && React.isValidElement(skill.icon) && 
                      React.cloneElement(skill.icon as React.ReactElement<{ className?: string }>, { 
                        className: 'h-5 w-5 text-[#333333] group-hover/item:text-[#00F5D4] transition-colors' 
                      })
                    }
                  </div>
                  <span className="text-[#888888] font-bold text-sm tracking-tight group-hover/item:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
