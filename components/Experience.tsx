import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12"
      ref={containerRef}
    >
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-3xl sm:text-5xl font-black text-[#F1F1F1] tracking-tighter italic uppercase">Experience<span className="text-[#00F5D4]">.</span></h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-transparent"></div>
      </div>

      <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
        {/* Animated Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#00F5D4] -translate-x-1/2 hidden md:block z-10" 
        />

        <div className="space-y-32">
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Node */}
              <div className="absolute left-[-36px] md:left-1/2 top-0 w-4 h-4 rounded-full border-2 border-[#00F5D4] bg-[#050505] -translate-x-1/2 z-20 hidden md:block" />
              
              <div className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full md:w-1/2"
                >
                  <div className={`p-8 bg-[#101010] border border-white/5 rounded-3xl hover:border-[#00F5D4]/30 transition-all group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-[#00F5D4] font-mono text-sm tracking-widest uppercase mb-2 block">{item.duration}</span>
                    <h3 className="text-2xl font-bold text-[#F1F1F1] mb-1">{item.role}</h3>
                    <p className="text-[#888888] font-medium mb-6">{item.company}</p>
                    
                    <div className="space-y-4">
                      {item.description.map((point, i) => (
                        <p key={i} className={`text-[#BDBDBD] text-base leading-relaxed flex gap-3 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                          <span className="text-[#00F5D4] mt-2.5 h-1 w-1 rounded-full shrink-0 bg-[#00F5D4]" />
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;