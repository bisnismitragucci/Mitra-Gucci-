
import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface TestimonialTickerProps {
  t: Translations;
}

const TestimonialTicker: React.FC<TestimonialTickerProps> = ({ t }) => {
  const items = t.testimonials.items;
  const waLink = "https://wa.me/6282310653328?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  
  // Double the items array to create seamless loop effect
  const loopItems = [...items, ...items];

  return (
    <div className="w-full bg-[#1a2d24] py-20 overflow-hidden relative border-t border-b border-[#2a3d34]">
      {/* Background Pattern/Texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Section Title */}
      <div className="absolute top-6 left-6 md:left-12 z-10">
        <h3 className="text-[10px] tracking-[0.25em] font-bold text-[#c5a059] uppercase">
          {t.testimonials.title}
        </h3>
      </div>

      <div className="flex animate-scroll w-max hover:[animation-play-state:paused]">
        {loopItems.map((item, index) => (
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            key={index} 
            className="w-[300px] md:w-[400px] h-[500px] mx-4 relative group flex-shrink-0 cursor-pointer overflow-hidden border border-white/10 block"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <Quote className="w-8 h-8 text-[#c5a059] mb-4 opacity-80" />
                
                <h4 className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6 text-gray-100 line-clamp-3 group-hover:line-clamp-none transition-all">
                  "{item.quote}"
                </h4>

                <div className="border-t border-white/20 pt-4 mt-2 flex justify-between items-end">
                  <div>
                    <p className="font-serif text-lg font-bold text-white mb-1">
                      {item.name}
                    </p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#c5a059] font-semibold">
                      {item.role}
                    </p>
                  </div>

                  {/* Join Button on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white text-black px-4 py-2 flex items-center space-x-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase">GABUNG</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1a2d24] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1a2d24] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default TestimonialTicker;
