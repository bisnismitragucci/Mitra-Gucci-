
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  
  // URL Gambar Background Baru (Gedung Putih/Gucci Exterior)
  const bgImage = "https://i.pinimg.com/1200x/f4/8a/29/f48a2941b1d34d86360343f926ff57f3.jpg";

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black">
      {/* Background Image with Slow Parallax/Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out scale-100 hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Center Content - Clean Editorial Look */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 mt-16 md:mt-0">
        <h5 className="text-white text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
           {t.hero.subtitle}
        </h5>
        <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-10 drop-shadow-2xl opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          {t.hero.title}
        </h1>
        
        {/* Modern Elegant Button */}
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden transition-all duration-500 border border-white text-white hover:text-black opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]"
        >
           {/* Fill effect from bottom */}
           <span className="absolute inset-0 w-full h-full bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
           
           <span className="relative z-10 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase flex items-center">
             {t.hero.websiteLink}
             <ArrowRight className="w-3 h-3 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
           </span>
        </a>
      </div>

      {/* Gradient Overlay for Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
