
import React from 'react';
import { ArrowRight, Sparkles, Trees } from 'lucide-react';
import { Translations } from '../types';

interface ChristmasBannerProps {
  t: Translations;
}

const ChristmasBanner: React.FC<ChristmasBannerProps> = ({ t }) => {
  const content = t.christmas;
  const waLink = "https://wa.me/6285353123024?text=Hallo%20saya%20tertarik%20dengan%20edisi%20spesial%20natal%20dan%20tahun%20baru";
  
  // Festive Christmas Tree Background
  const bgImage = "https://storage.googleapis.com/sahabat-pegadaian-asset-prd/20251128-022809_tema-natalwebp.webp";

  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0F221B]">
      
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[40s] ease-linear hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F221B] via-[#0F221B]/50 to-transparent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F221B]/60 via-transparent to-transparent opacity-60"></div>
      
      {/* Animated Snow */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        <style>{`
          @keyframes snowDrop {
            0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0.3; }
          }
          .snowflake {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
            pointer-events: none;
          }
        `}</style>
        {/* Generative Snowflakes */}
        {[...Array(30)].map((_, i) => (
             <div 
               key={i}
               className="snowflake"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `-${Math.random() * 20}%`,
                 width: `${Math.random() * 4 + 2}px`,
                 height: `${Math.random() * 4 + 2}px`,
                 animation: `snowDrop ${Math.random() * 10 + 5}s linear infinite`,
                 animationDelay: `${Math.random() * 5}s`
               }}
             />
        ))}
      </div>

      {/* Main Content - Centered & Editorial */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
         
         {/* Top Badge */}
         <div className="mb-8 animate-[fadeIn_1s_ease-out]">
            <div className="inline-flex items-center space-x-3 border border-[#D4AF37]/50 rounded-full px-6 py-2 bg-[#0F221B]/40 backdrop-blur-md hover:bg-[#0F221B]/60 transition-all duration-500">
               <Trees className="w-4 h-4 text-[#D4AF37]" />
               <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-bold uppercase">
                 {content.subtitle}
               </span>
               <Sparkles className="w-3 h-3 text-white animate-pulse" />
            </div>
         </div>

         {/* Main Title - Huge & Elegant */}
         <div className="relative mb-10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none drop-shadow-2xl animate-[fadeIn_1.2s_ease-out_0.2s_forwards] opacity-0">
               GUCCI <span className="italic font-light text-[#D4AF37]">Winter</span>
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none mt-2 md:mt-4 drop-shadow-2xl animate-[fadeIn_1.2s_ease-out_0.4s_forwards] opacity-0 flex items-center justify-center gap-4 flex-wrap">
               Tale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2E6C2] font-sans font-bold tracking-tighter scale-110">2026</span>
            </h2>
         </div>

         {/* Description */}
         <div className="max-w-2xl mx-auto mb-14 animate-[fadeIn_1.2s_ease-out_0.6s_forwards] opacity-0">
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto mb-8 opacity-60"></div>
             <p className="text-gray-100 text-lg md:text-xl font-serif italic leading-relaxed text-shadow-sm">
               "{content.description}"
             </p>
         </div>

         {/* CTA Button */}
         <div className="animate-[fadeIn_1.2s_ease-out_0.8s_forwards] opacity-0">
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:text-[#0F221B] transition-colors duration-500"
            >
               <span className="absolute inset-0 w-full h-full bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
               <div className="relative flex items-center space-x-3">
                 <span className="text-xs font-bold tracking-[0.25em] uppercase">
                   {content.cta}
                 </span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </div>
            </a>
         </div>

      </div>
      
      {/* Decorative Bottom Fade for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0F221B] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default ChristmasBanner;
