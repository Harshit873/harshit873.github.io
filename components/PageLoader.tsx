import React from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center">
      <div className="relative mb-12">
        {/* Rotating Geometric Frame */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border border-[#00F5D4]/20 rounded-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-24 h-24 border border-[#7000FF]/30 rounded-full scale-110"
        />
        
        {/* Central Pulsing Dot */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00F5D4] rounded-full shadow-[0_0_15px_#00F5D4]"
        />
      </div>

      <div className="flex flex-col items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '240px' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mb-4"
        />
        
        <div className="overflow-hidden h-6 flex items-center justify-center">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-[#F1F1F1] font-bold tracking-[0.3em] text-xs uppercase"
          >
            Harshit Shah <span className="text-[#00F5D4]"></span>
          </motion.div>
        </div>

        <div className="mt-4 flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-[#00F5D4] rounded-full"
            />
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-[#444444] text-[10px] font-mono tracking-widest uppercase"
        >
          Synchronizing Neural Interface...
        </motion.p>
      </div>
    </div>
  );
};

export default PageLoader;