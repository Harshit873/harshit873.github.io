import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section 
      key="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12"
    >
       <div className="flex items-center gap-4 mb-20">
        <h2 className="text-3xl sm:text-5xl font-black text-[#F1F1F1] tracking-tighter italic uppercase">About Me<span className="text-[#00F5D4]">.</span></h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-relaxed text-[#F1F1F1]">
              Full-Stack QA Architecture <span className="text-[#00F5D4]">&</span> Agile Excellence.
            </p>
            <div className="mt-8 space-y-6 text-[#BDBDBD] text-lg leading-relaxed">
              <p>
                As a Team Lead Quality Analyst and Scrum Master, I bridge the gap between complex software engineering and high-fidelity user experiences. My expertise lies in orchestrating QA strategies for global digital products, ranging from high-traffic E-commerce ecosystems to immersive AR/VR simulations.
              </p>
              <p>
                I thrive in "First Principle" environments where quality isn't just a phase, but an integrated architectural pillar. By implementing Early QA and data-driven testing protocols, I help teams achieve rapid iteration cycles without compromising stability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-4 border-t border-white/5"
          >
            <h3 className="text-sm text-[#888888] uppercase tracking-[0.25em] mb-4 font-bold">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <p className="text-lg font-semibold text-[#F1F1F1]">
                  L.J Institute of Computer Application
                </p>
                <p className="text-sm text-[#BDBDBD] mt-1">
                  Master of Computer Applications (MCA)
                </p>
              </div>
              <p className="text-xs text-[#888888] uppercase tracking-[0.2em]">
                2015 – 2020
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12"
          >
            <div className="p-8 bg-[#101010] border border-white/5 rounded-3xl hover:bg-[#151515] transition-colors">
              <h4 className="text-4xl font-black text-[#00F5D4]">05<span className="text-white/20">+</span></h4>
              <p className="text-xs text-[#888888] uppercase tracking-[0.2em] mt-3 font-bold">Years of Industry Impact</p>
            </div>
            <div className="p-8 bg-[#101010] border border-white/5 rounded-3xl hover:bg-[#151515] transition-colors">
              <h4 className="text-4xl font-black text-[#7000FF]">50<span className="text-white/20">+</span></h4>
              <p className="text-xs text-[#888888] uppercase tracking-[0.2em] mt-3 font-bold">Projects Delivered</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 sticky top-28">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#00F5D4]/10 rounded-3xl blur-2xl group-hover:bg-[#00F5D4]/20 transition-all duration-700"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 z-10">
              <img 
                src="/dist/assets/profile-img.jpeg" 
                alt="Harshit Shah" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Harshit Shah</p>
                  <p className="text-[10px] text-[#00F5D4] mt-1 uppercase font-mono tracking-tighter">Team Lead @ Yudiz Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;