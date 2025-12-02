
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  const bgImage = "https://i.pinimg.com/1200x/f4/8a/29/f48a2941b1d34d86360343f926ff57f3.jpg";
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Optimization: Only enable parallax on desktop (width > 768px)
    // Mobile browsers struggle with scroll events + transform updates
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance if needed, 
      // but simplistic throttling by check is okay for now
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505]">
      {/* Cinematic Background with Parallax (Conditional) */}
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center transition-transform duration-100 ease-out will-change-transform"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          // On mobile (offset is always 0), this transform is static. On desktop, it moves.
          transform: `translateY(${offset * 0.5}px) scale(1.1)` 
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        
        {/* Top Label */}
        <div className="overflow-hidden mb-6">
           <h5 className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase animate-[fadeIn_1s_ease-out_forwards] px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-[#D4AF37]/30">
             {t.hero.subtitle}
           </h5>
        </div>

        {/* Main Title */}
        <div className="relative w-full max-w-5xl mx-auto">
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl leading-none font-serif font-medium tracking-tight opacity-0 animate-[fadeIn_1.5s_ease-out_0.3s_forwards]">
            {t.hero.title}
          </h1>
        </div>
        
        <p className="mt-8 text-gray-300 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed opacity-0 animate-[fadeIn_1.5s_ease-out_0.6s_forwards]">
            {t.hero.description}
        </p>

        {/* Bottom Actions */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeIn_1.5s_ease-out_0.9s_forwards]">
            
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

        </div>

      </div>

      {/* Decorative Side Elements - Hidden on mobile to reduce DOM clutter */}
      <div className="absolute left-8 bottom-12 hidden md:block">
         <span className="text-[9px] text-white/50 tracking-[0.2em] uppercase vertical-text">
           Est. Florence 1921
         </span>
      </div>

    </div>
  );
};

export default Hero;
