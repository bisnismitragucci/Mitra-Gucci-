
import React from 'react';
import { ArrowLeft, ArrowRight, Gem, Box, Sparkles } from 'lucide-react';
import { Translations } from '../types';

interface UmamaCollaborationPageProps {
  t: Translations;
  onBack: () => void;
}

const UmamaCollaborationPage: React.FC<UmamaCollaborationPageProps> = ({ t, onBack }) => {
  const content = t.umamaCollab;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20tertarik%20dengan%20koleksi%20Gucci%20x%20Umama";
  const bannerUrl = "https://www.umamascarves.co.id/wp-content/uploads/2024/07/banner-umamascarves-new-2-1024x375.jpg";

  return (
    <div className="min-h-screen bg-white text-black fade-in font-sans selection:bg-[#b91c1c] selection:text-white">
      
      {/* 1. Header / Navigation */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] uppercase text-black hover:text-[#b91c1c] transition-colors bg-white/90 backdrop-blur-md px-6 py-3 shadow-sm rounded-sm border border-gray-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.nav.backToHome}</span>
        </button>
      </div>

      {/* 2. Hero Section - The Banner (Top Placement) */}
      <div className="relative w-full pt-24 md:pt-0">
         <div className="w-full h-auto overflow-hidden group">
            <img 
              src={bannerUrl} 
              alt="Gucci x Umama Banner" 
              className="w-full h-auto object-cover transform transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
         </div>
         
         {/* Artistic Overlay Text - Absolute positioning to overlap slightly or sit nicely */}
         <div className="relative -mt-12 md:-mt-24 z-10 flex flex-col items-center">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-2xl max-w-4xl mx-4 md:mx-auto text-center border-t-4 border-[#b91c1c]">
                <h5 className="text-[#b91c1c] font-bold tracking-[0.3em] uppercase mb-4 text-[10px] md:text-xs animate-pulse">
                  Exclusive Collaboration
                </h5>
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-black mb-6">
                  GUCCI <span className="font-light italic text-gray-400">x</span> UMAMA
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto leading-relaxed text-sm md:text-base font-medium">
                   {content.mainDesc}
                </p>
                <div className="mt-8 flex justify-center">
                   <a 
                     href={waLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#b91c1c] transition-all duration-300"
                   >
                     <span>{content.shopNow}</span>
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
            </div>
         </div>
      </div>

      {/* 3. Detailed Features Grid */}
      <div className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1920px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
             {/* Text Content */}
             <div className="order-2 md:order-1 pl-0 md:pl-12 border-l-2 border-gray-100 md:border-l-4 md:border-[#b91c1c]">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 leading-none">
                  Digital Print<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b91c1c] to-black">Vertical Box</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                   {content.boxFeature.desc}
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <Box className="w-8 h-8 text-[#b91c1c] mb-4" strokeWidth={1.5} />
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Packaging</h4>
                      <p className="text-xs text-gray-500">Vertical Hard Box Elegant</p>
                   </div>
                   <div>
                      <Sparkles className="w-8 h-8 text-[#b91c1c] mb-4" strokeWidth={1.5} />
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Design</h4>
                      <p className="text-xs text-gray-500">5 Unique Patterns</p>
                   </div>
                </div>
             </div>

             {/* Visual Images - Updated to include the new product shot */}
             <div className="order-1 md:order-2 grid grid-rows-2 gap-4 h-[600px] md:h-[800px]">
                {/* Image 1: Box Stack */}
                <div className="relative overflow-hidden bg-gray-100 rounded-sm w-full h-full">
                    <img 
                      src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/IMG-20231214-WA0008.jpg" 
                      alt="Umama Box Vertical Stack" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                {/* Image 2: Product Detail */}
                <div className="relative overflow-hidden bg-gray-100 rounded-sm w-full h-full">
                    <img 
                      src="https://www.umamascarves.co.id/wp-content/uploads/2025/04/ginee_20241120091038258_2951882380-1.jpeg" 
                      alt="Umama Scarf Detail" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                    />
                </div>
             </div>
          </div>

          {/* Swarovski Section */}
          <div className="relative py-24 bg-[#f8f8f8] -mx-6 md:-mx-12 px-6 md:px-12 overflow-hidden">
             {/* Decorative Background Element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative">
                   <div className="aspect-square bg-white p-8 shadow-xl rotate-3 transition-transform hover:rotate-0 duration-500">
                      <img 
                        src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/limited-stock-51-300x300.jpg" 
                        alt="Swarovski Detail" 
                        className="w-full h-full object-cover"
                      />
                   </div>
                   <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 shadow-lg">
                      <Gem className="w-8 h-8 mb-2" />
                      <p className="text-[10px] uppercase tracking-widest font-bold">Genuine Crystal</p>
                   </div>
                </div>
                
                <div className="w-full md:w-1/2 text-center md:text-left">
                   <h3 className="text-[#c5a059] font-serif text-3xl md:text-5xl font-bold mb-6 italic">
                     {content.swarovski.title}
                   </h3>
                   <div className="w-24 h-1 bg-black mb-8 mx-auto md:mx-0"></div>
                   <p className="text-gray-600 text-lg leading-relaxed mb-8">
                     {content.swarovski.desc}
                   </p>
                   
                   <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
                      <div className="border-l-2 border-[#c5a059] pl-4 text-left">
                         <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Material</span>
                         <span className="block text-lg font-bold">{content.details.material}</span>
                      </div>
                      <div className="border-l-2 border-[#c5a059] pl-4 text-left">
                         <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Size</span>
                         <span className="block text-lg font-bold">{content.details.size}</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default UmamaCollaborationPage;
