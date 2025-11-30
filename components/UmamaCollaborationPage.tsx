
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface UmamaCollaborationPageProps {
  t: Translations;
  onBack: () => void;
}

const UmamaCollaborationPage: React.FC<UmamaCollaborationPageProps> = ({ t, onBack }) => {
  const content = t.umamaCollab;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20tertarik%20dengan%20koleksi%20Gucci%20x%20Umama";
  const bannerUrl = "https://www.umamascarves.co.id/wp-content/uploads/2024/07/ummama-rev-3.png";

  return (
    <div className="min-h-screen bg-white text-black fade-in font-sans selection:bg-[#b91c1c] selection:text-white">
      
      {/* 1. Header / Navigation - Glassy Fixed with High Z-Index to overlap Navbar */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-[60] pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto group flex items-center space-x-3 text-[10px] font-bold tracking-[0.2em] uppercase text-black bg-white/80 backdrop-blur-md px-6 py-3 border border-gray-200 hover:border-black transition-all duration-500"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="group-hover:opacity-70 transition-opacity">{t.nav.backToHome}</span>
        </button>
      </div>

      {/* 2. Hero Section - The Banner (Top Placement) */}
      <div className="relative w-full pt-20 md:pt-0">
         <div className="w-full h-auto overflow-hidden group">
            <img 
              src={bannerUrl} 
              alt="Gucci x Umama Banner" 
              className="w-full h-auto object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
            />
         </div>
         
         {/* Artistic Overlay Text */}
         <div className="relative -mt-16 md:-mt-32 z-10 flex flex-col items-center">
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-14 shadow-2xl max-w-4xl mx-4 md:mx-auto text-center border-t-2 border-[#b91c1c]">
                <h5 className="text-[#b91c1c] font-bold tracking-[0.3em] uppercase mb-5 text-[10px] md:text-xs">
                  Exclusive Collaboration
                </h5>
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-black mb-6 tracking-tight">
                  GUCCI <span className="font-light italic text-gray-400 px-2">x</span> UMAMA
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto leading-relaxed text-sm md:text-base font-medium mb-10">
                   {content.mainDesc}
                </p>
                
                {/* Modern CTA Button */}
                <div className="flex justify-center">
                   <a 
                     href={waLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden bg-black text-white transition-all duration-500 hover:bg-[#b91c1c]"
                   >
                     <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                     <span className="relative flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
                        {content.shopNow}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </span>
                   </a>
                </div>
            </div>
         </div>
      </div>

      {/* 3. NEW: Editorial Narrative Section */}
      <div className="py-32 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
            <span className="text-[#b91c1c] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 block opacity-80">
              {content.narrative.subtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-12 text-black leading-tight">
              {content.narrative.title}
            </h2>
            <div className="space-y-8 text-gray-600 text-sm md:text-lg leading-relaxed font-serif max-w-3xl mx-auto">
                <p>{content.narrative.p1}</p>
                <p>{content.narrative.p2}</p>
                <p className="font-bold text-black pt-4 text-xl italic">{content.narrative.p3}</p>
            </div>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mt-16 opacity-50"></div>
        </div>
      </div>

      {/* 4. Detailed Features Grid */}
      <div className="pb-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1920px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-[600px] md:h-[900px] mb-32">
              {/* Image 1 */}
              <div className="relative overflow-hidden w-full h-full group">
                  <img 
                    src="https://www.umamascarves.co.id/wp-content/uploads/2024/04/IMG-20231214-WA0008.jpg" 
                    alt="Umama Box Vertical Stack" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              {/* Image 2 */}
              <div className="relative overflow-hidden w-full h-full group">
                  <img 
                    src="https://www.umamascarves.co.id/wp-content/uploads/2025/04/ginee_20241120091038258_2951882380-1.jpeg" 
                    alt="Umama Scarf Detail" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
          </div>

          {/* Swarovski Section */}
          <div className="relative py-24 bg-[#fafafa] -mx-6 md:-mx-12 px-6 md:px-12 flex justify-center">
             <div className="max-w-3xl w-full relative z-10">
                 <div className="aspect-square bg-white p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] mx-auto transform hover:scale-[1.02] transition-transform duration-700">
                      <img 
                        src="https://i.pinimg.com/1200x/f4/8a/29/f48a2941b1d34d86360343f926ff57f3.jpg" 
                        alt="Swarovski Detail" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      />
                 </div>
             </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default UmamaCollaborationPage;
