import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, LinkedInIcon, PhoneIcon } from './ui/Icons';

const Contact: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 flex flex-col items-center justify-center text-center min-h-[60vh]"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mb-8 p-4 rounded-full bg-[#00F5D4]/5 border border-[#00F5D4]/20"
      >
        <MailIcon className="h-10 w-10 text-[#00F5D4]" />
      </motion.div>
      
      <h2 className="text-4xl sm:text-6xl font-black text-[#F1F1F1] mb-6 tracking-tighter italic">GET IN TOUCH<span className="text-[#00F5D4]">.</span></h2>
      
      <p className="max-w-2xl text-[#BDBDBD] mb-12 text-xl leading-relaxed">
        Currently taking on new projects as a Scrum Master or QA Lead. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <a 
          href="mailto:harshitshah873@gmail.com"
          className="px-12 py-5 bg-[#00F5D4] text-[#050505] font-black rounded-full hover:scale-110 hover:shadow-[0_0_30px_-5px_#00F5D4] transition-all duration-300 uppercase tracking-widest"
        >
          Send Message
        </a>
        <div className="flex gap-4">
           <a href="https://www.linkedin.com/in/harshit-shah-b7a1231a4/" className="p-4 bg-[#101010] rounded-full hover:bg-[#00F5D4]/20 transition-colors border border-white/5">
              <LinkedInIcon className="h-6 w-6 text-[#F1F1F1]" />
           </a>
           <a href="tel:+918488076699" className="p-4 bg-[#101010] rounded-full hover:bg-[#00F5D4]/20 transition-colors border border-white/5">
              <PhoneIcon className="h-6 w-6 text-[#F1F1F1]" />
           </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;