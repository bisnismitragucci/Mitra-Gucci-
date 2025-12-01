
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const waLink = "https://wa.me/6281374192171?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  
  // URL Gambar Background (Gedung Putih/Gucci Exterior)
  const bgImage = "https://i.pinimg.com/1200x/f4/8a/29/f48a2941b1d34d86360343f926ff57f3.jpg";

  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-black">
      {/* Background Image with Slow Parallax/Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out scale-100 hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Refined Dark Overlay for readability on bright background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
      
      {/* Center Content - Clean Editorial Look */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 mt-16 md:mt-0">
        
        <div className="overflow-hidden mb-6">
           <h5 className="text-white/90 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]">
             {t.hero.subtitle}
           </h5>
        </div>

        <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-serif tracking-tighter mb-12 drop-shadow-2xl opacity-0 animate-[fadeIn_1.2s_ease-out_0.3s_forwards] leading-none">
          {t.hero.title}
        </h1>
        
        {/* Modern Elegant Button - Glass Style */}
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden transition-all duration-500 border border-white/30 bg-white/5 backdrop-blur-sm text-white hover:text-black opacity-0 animate-[fadeIn_1.2s_ease-out_0.6s_forwards] rounded-[1px]"
        >
           {/* Fill effect from bottom */}
           <span className="absolute inset-0 w-full h-full bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.19, 1, 0.22, 1)"></span>
           
           <span className="relative z-10 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase flex items-center">
             {t.hero.websiteLink}
             <ArrowRight className="w-3 h-3 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
           </span>
        </a>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-50 animate-pulse"></div>
    </div>
  );
};

export default Hero;
