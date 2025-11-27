
import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-black text-white w-full pt-24 pb-12 border-t border-gray-900">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Logo in Footer - Made BOLD and Solid White */}
        <div className="flex justify-center mb-16">
          <span className="font-serif text-5xl md:text-8xl text-white tracking-wider font-bold select-none">
            GUCCI
          </span>
        </div>

        {/* Bottom Bar - Centered Content */}
        <div className="flex justify-center items-center pt-8 border-t border-gray-900">
            {/* Copyright Text - UPDATED: Bold, White, Visible, Centered */}
            <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white font-bold leading-relaxed text-center">
              {t.footer.copyright}
            </span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
