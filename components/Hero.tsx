
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  const bgImage = "https://i.pinimg.com/1200x/f4/8a/29/f48a2941b1d34d86360343f926ff57f3.jpg";
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505]">
      {/* Cinematic Background with Parallax */}
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          transform: `translateY(${offset * 0.5}px) scale(1.1)` // Slow parallax + slight zoom
        }}
      >
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      </div>
      
      {/* Floating Elements - Editorial Layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center pb-24 md:pb-0 z-10 px-6">
        
        {/* Top Label */}
        <div className="absolute top-32 md:top-40 left-1/2 -translate-x-1/2 overflow-hidden">
           <h5 className="text-[#D4AF37] text-[9px] md:text-[11px] font-bold tracking-[0.6em] uppercase animate-[fadeIn_1s_ease-out_forwards] border border-[#D4AF37]/30 px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm">
             {t.hero.subtitle}
           </h5>
        </div>

        {/* Main Title - Massive & Overlapping */}
        <div className="relative text-center w-full max-w-[1920px]">
          <h1 className="text-white text-[15vw] md:text-[13vw] leading-[0.85] font-serif font-medium tracking-tighter opacity-0 animate-[fadeIn_1.5s_ease-out_0.3s_forwards] mix-blend-overlay">
            GUCCI
          </h1>
          <h2 className="text-white text-3xl md:text-6xl font-light tracking-[0.2em] -mt-4 md:-mt-12 uppercase opacity-0 animate-[fadeIn_1.5s_ease-out_0.6s_forwards]">
            <span className="font-serif italic text-[#D4AF37] pr-4">The</span>
            Affiliate
          </h2>
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-6 opacity-0 animate-[fadeIn_1.5s_ease-out_0.9s_forwards]">
            
            {/* Primary CTA */}
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-[#D4AF37] text-black overflow-hidden rounded-[2px]"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-3 group-hover:text-black transition-colors">
                {t.hero.websiteLink}
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Secondary Action - Play Video Simulation */}
            <button className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                 <Play className="w-4 h-4 text-white fill-white group-hover:text-[#D4AF37] group-hover:fill-[#D4AF37] transition-colors" />
              </div>
              <span className="text-white text-[10px] tracking-[0.2em] font-bold uppercase group-hover:text-[#D4AF37] transition-colors">
                Watch Film
              </span>
            </button>
        </div>

      </div>

      {/* Decorative Side Elements */}
      <div className="absolute left-8 bottom-12 hidden md:block">
         <span className="text-[9px] text-white/50 tracking-[0.2em] uppercase vertical-text">
           Est. Florence 1921
         </span>
      </div>
      <div className="absolute right-8 bottom-12 hidden md:block">
         <div className="flex flex-col gap-4 items-center">
            <div className="w-[1px] h-12 bg-white/20"></div>
            <span className="text-[9px] text-white/50 tracking-widest">SCROLL</span>
         </div>
      </div>
    </div>
  );
};

export default Hero;
