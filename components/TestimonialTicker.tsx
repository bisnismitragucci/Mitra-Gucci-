
import React, { useRef } from 'react';
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Translations } from '../types';

interface TestimonialTickerProps {
  t: Translations;
}

const TestimonialTicker: React.FC<TestimonialTickerProps> = ({ t }) => {
  const items = t.testimonials.items;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Approx card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-[#050505] py-24 border-t border-[#D4AF37]/20">
      
      {/* Header */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row items-end justify-between">
        <div>
           <h3 className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
             <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
             {t.testimonials.title}
           </h3>
           <h2 className="text-white text-3xl md:text-5xl font-serif">Community Voices</h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8 md:mt-0">
          <button onClick={() => scroll('left')} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black text-white transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid / Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="w-full md:w-[23%] flex-shrink-0 relative group h-[450px] rounded-[2px] overflow-hidden bg-gray-900 snap-center cursor-pointer border border-white/5 hover:border-[#D4AF37]/50 transition-colors duration-500"
          >
             {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            
            {/* Gradient Overlay - Darker at bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                
                {/* Top: Quote Icon */}
                <div>
                   <Quote className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37] mb-4" />
                   <p className="text-white/90 font-serif italic text-sm leading-relaxed line-clamp-4">
                     "{item.quote}"
                   </p>
                </div>

                {/* Bottom: Info & Action */}
                <div>
                   <div className="w-8 h-[1px] bg-[#D4AF37] mb-4"></div>
                   <h4 className="text-white font-bold text-lg">{item.name}</h4>
                   <p className="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase mb-4">{item.role}</p>
                   
                   <a 
                     href={waLink}
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-white group-hover:text-[#D4AF37] transition-colors"
                   >
                     <span className="text-[10px] font-bold tracking-widest uppercase">GABUNG</span>
                     <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                   </a>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS to hide scrollbar but keep functionality */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialTicker;
