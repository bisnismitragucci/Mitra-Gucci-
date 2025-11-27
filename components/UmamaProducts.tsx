
import React from 'react';
import { Translations } from '../types';

interface UmamaProductsProps {
  t: Translations;
}

const UmamaProducts: React.FC<UmamaProductsProps> = ({ t }) => {
  const data = t.umamaProducts;

  return (
    <div className="w-full bg-white py-32 px-6 md:px-12 fade-in">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
            EXCLUSIVE COLLECTION
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-black font-bold">
            {data.title}
          </h2>
          <div className="w-24 h-[1px] bg-black mx-auto mt-8"></div>
        </div>

        {/* Grid with Arch Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {data.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              
              {/* Arched Image Container */}
              <div className="w-full aspect-[3/4] rounded-t-[200px] overflow-hidden mb-10 relative shadow-lg">
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                 <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                 />
              </div>

              {/* Text Content */}
              <h3 className="font-serif text-2xl font-bold text-black mb-4 group-hover:text-[#c5a059] transition-colors duration-300">
                 {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-medium">
                 {item.description}
              </p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-black pb-1">
                    Lihat Detail
                 </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UmamaProducts;
