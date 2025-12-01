
import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface TestimonialTickerProps {
  t: Translations;
}

const TestimonialTicker: React.FC<TestimonialTickerProps> = ({ t }) => {
  const items = t.testimonials.items;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  
  // Double the items array to create seamless loop effect
  const loopItems = [...items, ...items];

  return (
    <div className="w-full bg-[#050505] py-24 overflow-hidden relative border-t border-[#D4AF37]/20">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0F221B]/40 via-[#050505] to-[#050505]"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

      {/* Section Header */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-16 relative z-10 flex items-center justify-between">
        <div>
           <h3 className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center gap-3">
             <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
             {t.testimonials.title}
           </h3>
           <h2 className="text-white text-3xl md:text-5xl font-serif">Community Voices</h2>
        </div>
      </div>

      {/* Ticker Container */}
      <div className="flex animate-scroll w-max hover:[animation-play-state:paused] py-4">
        {loopItems.map((item, index) => (
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            key={index} 
            className="w-[320px] md:w-[400px] h-[550px] mx-3 relative group flex-shrink-0 cursor-pointer overflow-hidden rounded-sm bg-[#111]"
          >
            {/* Background Image - Grayscale to Color */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            
            {/* Dark Overlay - Stronger Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
               
               {/* Quote Icon - Large & Gold */}
               <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <Quote className="w-10 h-10 text-[#D4AF37] fill-[#D4AF37] opacity-100" />
               </div>

               {/* Quote Text */}
               <blockquote className="text-gray-200 font-serif text-lg leading-relaxed italic mb-8 border-l-2 border-[#D4AF37]/50 pl-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                 "{item.quote}"
               </blockquote>

               {/* Person Details */}
               <div className="flex justify-between items-end border-t border-white/10 pt-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-wide group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1">{item.role}</p>
                  </div>

                  {/* Join Button - Appears on hover */}
                  <div className="bg-[#D4AF37] text-black pl-4 pr-3 py-2 flex items-center gap-2 rounded-[2px] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-300 shadow-lg">
                     <span className="text-[9px] font-bold tracking-widest uppercase">GABUNG</span>
                     <ArrowRight className="w-3 h-3" />
                  </div>
               </div>
            </div>
            
            {/* Hover Border Glow */}
            <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-colors duration-500 pointer-events-none"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TestimonialTicker;
