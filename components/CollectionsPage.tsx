
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface CollectionsPageProps {
  t: Translations;
  onBack: () => void;
}

const CollectionsPage: React.FC<CollectionsPageProps> = ({ t, onBack }) => {
  const data = t.collectionsPage;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20tertarik%20dengan%20koleksi%20ini";

  return (
    <div className="min-h-screen bg-[#fafafa] text-black pt-48 pb-16 px-6 md:px-12 fade-in">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Navigation Back */}
        <button 
          onClick={onBack}
          className="relative z-[60] flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.nav.backToHome}</span>
        </button>

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">
             {data.subtitle}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
             {data.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#c5a059] mx-auto mt-8"></div>
        </div>

        {/* Grid Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
             <div key={index} className="group relative bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                   {/* Removed scale on hover */}
                   <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out pointer-events-none"
                   />
                   
                   {/* Overlay CTA on Hover */}
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a 
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-3 text-[10px] font-bold tracking-widest uppercase flex items-center space-x-2 hover:bg-[#c5a059] transition-colors"
                      >
                         <span>{item.cta}</span>
                         <ArrowRight className="w-3 h-3" />
                      </a>
                   </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                   <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#c5a059] transition-colors">
                      {item.title}
                   </h3>
                   <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {item.description}
                   </p>
                </div>
             </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CollectionsPage;
