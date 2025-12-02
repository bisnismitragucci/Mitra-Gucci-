
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface LuneraCollaborationPageProps {
  t: Translations;
  onBack: () => void;
}

const LuneraCollaborationPage: React.FC<LuneraCollaborationPageProps> = ({ t, onBack }) => {
  const content = t.luneraCollab;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20tertarik%20dengan%20koleksi%20Gucci%20x%20Lunera";
  
  // New Assets for Lunera
  const heroImage = "https://i.pinimg.com/1200x/58/f0/e8/58f0e845c6a6f5cf9d694efeb9f3b718.jpg";
  const featureImage1 = "https://i.pinimg.com/1200x/b7/43/31/b7433166956ff592f6b6ce4c24aab21b.jpg";
  const featureImage2 = "https://i.pinimg.com/736x/09/99/15/099915ccb0847ca0592f78744ffb3bc4.jpg";

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#0F221B] fade-in font-sans selection:bg-[#781016] selection:text-white">
      
      {/* 1. Header / Navigation - Fixed with padding top to clear Navbar */}
      <div className="fixed top-0 left-0 w-full pt-28 px-6 md:pt-36 md:px-8 flex justify-between items-center z-[100] pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto group flex items-center space-x-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#0F221B] bg-[#F9F8F6]/80 backdrop-blur-md px-6 py-3 border border-[#0F221B]/10 hover:border-[#0F221B] transition-all duration-500 shadow-lg rounded-sm"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="group-hover:opacity-70 transition-opacity">{t.nav.backToHome}</span>
        </button>
      </div>

      {/* 2. Hero Section - The Banner (Top Placement) */}
      <div className="relative w-full pt-20 md:pt-0">
         <div className="w-full h-auto overflow-hidden group">
            <img 
              src={heroImage} 
              alt="Gucci x Lunera Hero" 
              className="w-full h-auto object-cover transition-transform duration-[3s] ease-out group-hover:scale-105 pointer-events-none"
            />
         </div>
         
         {/* Artistic Overlay Text */}
         <div className="relative -mt-16 md:-mt-32 z-10 flex flex-col items-center">
            <div className="bg-[#F9F8F6]/95 backdrop-blur-md p-8 md:p-14 shadow-2xl max-w-4xl mx-4 md:mx-auto text-center border-t-4 border-[#781016]">
                <h5 className="text-[#781016] font-bold tracking-[0.3em] uppercase mb-5 text-[10px] md:text-xs">
                  Exclusive Collaboration
                </h5>
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-[#0F221B] mb-6 tracking-tight">
                  GUCCI <span className="font-light italic text-[#D4AF37] px-2">&</span> LUNERA
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto leading-relaxed text-sm md:text-base font-medium mb-10">
                   {content.mainDesc}
                </p>
                
                {/* Modern CTA Button - Deep Green & Gold */}
                <div className="flex justify-center">
                   <a 
                     href={waLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-[#0F221B] text-white transition-all duration-500 hover:bg-[#781016] shadow-lg"
                   >
                     <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#D4AF37] rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
                     <span className="relative flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
                        {content.shopNow}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
                     </span>
                   </a>
                </div>
            </div>
         </div>
      </div>

      {/* 3. NEW: Editorial Narrative Section - Cream Background */}
      <div className="py-32 px-6 md:px-12 bg-[#F9F8F6] text-center border-b border-[#0F221B]/5">
        <div className="max-w-4xl mx-auto">
            <span className="text-[#781016] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 block opacity-100">
              {content.narrative.subtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-12 text-[#0F221B] leading-tight">
              {content.narrative.title}
            </h2>
            <div className="space-y-8 text-gray-700 text-sm md:text-lg leading-relaxed font-serif max-w-3xl mx-auto">
                <p>{content.narrative.p1}</p>
                <p>{content.narrative.p2}</p>
                <p className="font-bold text-[#0F221B] pt-4 text-xl italic">{content.narrative.p3}</p>
            </div>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-16 opacity-100"></div>
        </div>
      </div>

      {/* 4. Detailed Features Grid */}
      <div className="pb-32 px-6 md:px-12 bg-[#F9F8F6]">
        <div className="max-w-[1920px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[600px] md:h-[900px] mb-32 pt-16">
              {/* Image 1 - Model Shot */}
              <div className="relative overflow-hidden w-full h-full group border border-[#0F221B]/10">
                  <img 
                    src={featureImage1} 
                    alt="Lunera Model" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-[#0F221B]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Floating Caption */}
                  <div className="absolute bottom-6 left-6 bg-[#F9F8F6]/90 px-4 py-2 backdrop-blur-sm border border-[#0F221B]/10">
                     <span className="text-[9px] tracking-[0.2em] font-bold text-[#0F221B] uppercase">Elegant Silhouette</span>
                  </div>
              </div>
              {/* Image 2 - Detail Shot */}
              <div className="relative overflow-hidden w-full h-full group border border-[#0F221B]/10">
                  <img 
                    src={featureImage2} 
                    alt="Lunera Detail" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-[#0F221B]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Floating Caption */}
                  <div className="absolute bottom-6 right-6 bg-[#F9F8F6]/90 px-4 py-2 backdrop-blur-sm border border-[#0F221B]/10">
                     <span className="text-[9px] tracking-[0.2em] font-bold text-[#0F221B] uppercase">Refined Texture</span>
                  </div>
              </div>
          </div>

          {/* Feature Highlight Section */}
          <div className="relative py-24 bg-[#ECEBE9] -mx-6 md:-mx-12 px-6 md:px-12 flex justify-center">
             <div className="max-w-3xl w-full relative z-10">
                 <div className="aspect-square bg-white p-6 md:p-10 shadow-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-700 border border-[#D4AF37]/20">
                      <img 
                        src="https://i.pinimg.com/736x/09/99/15/099915ccb0847ca0592f78744ffb3bc4.jpg" 
                        alt="Lunera Product" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 pointer-events-none"
                      />
                 </div>
                 <div className="text-center mt-10">
                    <h3 className="font-serif text-2xl text-[#0F221B] italic mb-2">{content.swarovski.title}</h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#781016]">{content.swarovski.desc}</p>
                 </div>
             </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default LuneraCollaborationPage;
