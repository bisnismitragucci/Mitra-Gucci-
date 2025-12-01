
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Translations } from '../types';

interface ChristmasBannerProps {
  t: Translations;
}

const ChristmasBanner: React.FC<ChristmasBannerProps> = ({ t }) => {
  const content = t.christmas;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20tertarik%20dengan%20edisi%20spesial%20natal%20dan%20tahun%20baru";
  
  // Festive Background - Keeping the requested tree image but with better overlay treatment
  const bgImage = "https://storage.googleapis.com/sahabat-pegadaian-asset-prd/20251128-022809_tema-natalwebp.webp";

  return (
    <div className="relative w-full py-32 bg-[#050505] overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* The Card Layout */}
        <div className="relative bg-[#0F221B] overflow-hidden rounded-[2px] shadow-2xl border border-[#D4AF37]/20 flex flex-col md:flex-row h-auto md:h-[600px]">
           
           {/* Left: Image Side (60%) */}
           <div className="w-full md:w-[60%] relative h-[400px] md:h-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[30s] ease-linear hover:scale-105 will-change-transform"
                style={{ backgroundImage: `url(${bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F221B] opacity-90 md:opacity-100 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F221B] to-transparent opacity-100 md:opacity-0"></div>
           </div>

           {/* Right: Content Side (40%) */}
           <div className="w-full md:w-[40%] p-10 md:p-16 flex flex-col justify-center relative bg-[#0F221B]">
              
              {/* Decorative Corner Lines */}
              <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-[#D4AF37]/30"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-[#D4AF37]/30"></div>

              <div className="mb-8">
                 <div className="flex items-center gap-2 mb-4">
                    <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-[9px] tracking-[0.3em] font-bold uppercase">
                      {content.subtitle}
                    </span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-2">
                   Winter <br/>
                   <span className="text-[#D4AF37] italic">Prosperity</span>
                 </h2>
                 <h3 className="text-white/50 text-6xl font-sans font-bold tracking-tighter opacity-10">
                   2026
                 </h3>
              </div>

              <p className="text-gray-400 text-sm leading-7 font-light tracking-wide mb-10 border-l border-[#D4AF37]/30 pl-6">
                 {content.description}
              </p>

              <a 
                href={waLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors w-max"
              >
                <span className="text-xs font-bold tracking-[0.25em] uppercase border-b border-transparent group-hover:border-[#D4AF37] pb-1">
                   {content.cta}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all">
                   <ArrowRight className="w-3 h-3 group-hover:text-[#0F221B]" />
                </div>
              </a>
           </div>

        </div>

      </div>

      {/* Ambient Glow - Optimized for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full filter blur-[200px] opacity-5 pointer-events-none hidden md:block"></div>

    </div>
  );
};

export default ChristmasBanner;