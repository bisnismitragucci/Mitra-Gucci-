

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface VisualGridProps {
  t: Translations;
}

const VisualGrid: React.FC<VisualGridProps> = ({ t }) => {
  const images = [
    {
      // Advisor Image
      src: "https://i.pinimg.com/1200x/ae/98/21/ae98214e6af632200682818c70c10889.jpg", 
      title: t.grid.craftsmanship,
      isCenter: false
    },
    {
      // Contemporary Style (Center)
      src: "https://i.pinimg.com/1200x/8f/75/70/8f757050f65da6fc065d12a0f8c1b06d.jpg", 
      title: t.grid.innovation,
      isCenter: true
    },
    {
      // Exclusive Collection
      src: "https://i.pinimg.com/1200x/1b/33/eb/1b33eb6bd6be948bd06f5f7e128b2b75.jpg", 
      title: t.grid.sustainability,
      isCenter: false
    }
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 h-auto md:h-[90vh]">
      {images.map((item, index) => (
        <div key={index} className="relative group overflow-hidden h-[70vh] md:h-full cursor-pointer border-r border-white/10 last:border-r-0 bg-[#f0f0f0]">
          {/* Background Image */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105 ${item.isCenter ? 'grayscale-0' : 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100'}`}
            style={{ backgroundImage: `url(${item.src})` }}
          />
          
          {/* Overlay - Darker on center initially for text readability, lighter on sides */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Text Content - Ultra Minimalist Editorial Style */}
          <div className="absolute inset-x-0 bottom-0 pb-12 flex flex-col items-center justify-end text-white text-center z-10 p-6">
            
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-md">
              {item.title}
            </h3>
            
            <div className="w-6 h-[1px] bg-white mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <span className="flex items-center space-x-1 text-[8px] tracking-[0.2em] uppercase font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white/90">
               <span>{t.grid.readMore}</span>
               <ArrowRight className="w-2 h-2" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisualGrid;