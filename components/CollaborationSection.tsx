
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface CollaborationSectionProps {
  t: Translations;
}

const CollaborationSection: React.FC<CollaborationSectionProps> = ({ t }) => {
  const content = t.collaboration;
  const waLink = "https://wa.me/6281374192171?text=Hallo%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20kolaborasi%20Gucci%20x%20Umama";
  const image = "https://www.umamascarves.co.id/wp-content/uploads/2025/02/39042006-d280-4cc6-b5ef-8bd8ae98b21e.jpg";

  return (
    <div className="w-full bg-[#050505] text-white overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        
        {/* Text Side */}
        <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24 order-2 lg:order-1 relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="h-[1px] w-12 bg-[#c5a059]"></span>
              <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase">
                {content.subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-[1.1] text-white">
              {content.title}
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-8 mb-12 border-l-2 border-white/10 pl-6">
              {content.description}
            </p>
            
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-4 text-xs font-bold tracking-[0.25em] uppercase text-white border border-white/20 px-10 py-5 hover:bg-white hover:text-black transition-all duration-500"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[500px] lg:h-auto order-1 lg:order-2 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img 
            src={image} 
            alt="Gucci x Umama Collaboration" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ease-in-out hover:scale-110"
          />
          
          {/* Overlay Gradient for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#050505] lg:via-transparent lg:to-transparent z-20"></div>
        </div>

      </div>
    </div>
  );
};

export default CollaborationSection;
