
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  
  // URL Gambar Background Baru
  const bgImage = "https://i.pinimg.com/1200x/a7/aa/07/a7aa07ceb345373550f004b449bb831d.jpg";

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Background Image with Zoom Effect Removed */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-[3s] ease-out"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Center Content - Clean Editorial Look */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h5 className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 shadow-black drop-shadow-md">
           {t.hero.subtitle}
        </h5>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide mb-8 drop-shadow-lg">
          {t.hero.title}
        </h1>
        
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center px-8 py-3 bg-white text-black hover:bg-[#F5F5F0] transition-colors duration-300"
        >
           <span className="text-xs font-bold tracking-[0.2em] uppercase">{t.hero.websiteLink}</span>
           <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
