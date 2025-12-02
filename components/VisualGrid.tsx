
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations, PageView } from '../types';

interface VisualGridProps {
  t: Translations;
  onNavigate?: (page: PageView) => void;
}

const VisualGrid: React.FC<VisualGridProps> = ({ t, onNavigate }) => {
  const images = [
    {
      src: "https://i.pinimg.com/736x/e2/eb/fb/e2ebfb79c21cf0ca9ca64d94950cc7d2.jpg", 
      title: t.grid.craftsmanship,
      subtitle: "The Art of Advisory",
      link: 'expertAdvisor' as PageView,
      align: "items-start"
    },
    {
      src: "https://i.pinimg.com/736x/09/99/15/099915ccb0847ca0592f78744ffb3bc4.jpg", 
      title: t.grid.innovation, 
      subtitle: "Gucci x Lunera",
      link: 'luneraCollab' as PageView,
      align: "items-center"
    },
    {
      src: "https://images.ctfassets.net/brzb6u29244a/1r0xTJ5E4aYyYYlHkXFk01/3ea85491d43aa09216ad889fea64c1f1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-25-1268_001_Default.png?w=2000&fm=avif&q=50", 
      title: t.grid.sustainability,
      subtitle: "Exclusive Gift Giving",
      link: 'collections' as PageView,
      align: "items-end"
    }
  ];

  const handleItemClick = (page: PageView | null) => {
    if (page && onNavigate) {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full bg-[#050505] py-24 px-6 md:px-12">
      
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
         <div>
            <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-bold uppercase block mb-4">Discover The World</span>
            <h2 className="text-white text-3xl md:text-5xl font-serif">Curated Collections</h2>
         </div>
         <div className="hidden md:block text-gray-400 text-xs tracking-widest max-w-xs text-right">
            EXPLORE THE INTERSECTION OF FASHION, BUSINESS, AND ARTISTRY THROUGH OUR LATEST CAMPAIGNS.
         </div>
      </div>

      {/* Grid Layout - More Artistic Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {images.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleItemClick(item.link)}
            className={`group cursor-pointer relative flex flex-col ${index === 1 ? 'md:-mt-12' : ''}`} // Staggered Effect
          >
            {/* Image Container with Overflow Hidden */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2px] mb-6">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
               
               {/* pointer-events-none prevents clicking the image file directly or dragging it */}
               <img 
                 src={item.src}
                 alt={item.title}
                 loading="lazy" // Optimize loading
                 className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 pointer-events-none will-change-transform"
               />
               
               {/* Hover Reveal Button */}
               <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                     <ArrowRight className="w-4 h-4 text-white" />
                  </div>
               </div>
            </div>

            {/* Typography Content - Below Image for cleaner look */}
            <div className="flex flex-col items-start border-t border-white/10 pt-4 group-hover:border-[#D4AF37] transition-colors duration-700">
               <span className="text-[9px] text-[#D4AF37] tracking-[0.2em] uppercase mb-1">
                 0{index + 1} — {item.subtitle}
               </span>
               <h3 className="text-white text-2xl font-serif italic group-hover:text-[#D4AF37] transition-colors duration-500">
                 {item.title}
               </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualGrid;
