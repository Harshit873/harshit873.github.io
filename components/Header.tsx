import React, { useState, useEffect } from 'react';
import { NAV_LINKS, RESUME_URL } from '../constants';
import { DocumentTextIcon, MenuIcon, XMarkIcon } from './ui/Icons';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] shadow-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center h-20">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-xl font-bold tracking-wider text-[#F1F1F1] transition-all hover:text-[#00F5D4] group"
        >
          HS<span className="text-[#00F5D4] opacity-0 group-hover:opacity-100 transition-opacity">.</span>
        </button>
        <div className="flex items-center gap-3 md:gap-8">
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const pageId = link.href.substring(1);
              const isActive = currentPage === pageId;
              return (
                <button
                  key={link.name}
                  onClick={() => setCurrentPage(pageId)}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-[#00F5D4] ${isActive ? 'text-[#F1F1F1]' : 'text-[#BDBDBD]'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#00F5D4] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-[#00F5D4] border border-[#00F5D4]/30 rounded-full hover:bg-[#00F5D4]/10 hover:border-[#00F5D4] transition-all duration-300">
            <DocumentTextIcon className="h-4 w-4"/>
            Resume
          </a>
          {/* Mobile hamburger button */}
          <button
            type="button"
            className="inline-flex items-center justify-center md:hidden rounded-full border border-white/10 p-2 text-[#F1F1F1] hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-[rgba(255,255,255,0.05)]">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {NAV_LINKS.map((link) => {
              const pageId = link.href.substring(1);
              const isActive = currentPage === pageId;
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    setCurrentPage(pageId);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-[#00F5D4]/10 text-[#F1F1F1]' : 'text-[#BDBDBD] hover:bg-white/5 hover:text-[#00F5D4]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[#00F5D4] border border-[#00F5D4]/40 rounded-lg hover:bg-[#00F5D4]/10 hover:border-[#00F5D4] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <DocumentTextIcon className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;