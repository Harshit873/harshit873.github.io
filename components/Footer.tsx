
import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui/Icons';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm text-[#888888]">
            &copy; {year} Harshit Shah. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/harshit873"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#888888] hover:text-[#00F5D4] transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-shah-b7a1231a4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#888888] hover:text-[#00F5D4] transition-colors"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:harshitshah873@gmail.com"
            aria-label="Email"
            className="text-[#888888] hover:text-[#00F5D4] transition-colors"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
