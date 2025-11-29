
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
      // Advisor Image (Vertical Portrait)
      src: "https://i.pinimg.com/736x/e2/eb/fb/e2ebfb79c21cf0ca9ca64d94950cc7d2.jpg", 
      title: t.grid.craftsmanship,
      isCenter: false,
      position: "object-top",
      link: 'expertAdvisor' as PageView
    },
    {
      // Main Highlight: Gucci x Umama (Sorotan Utama)
      src: "https://i.pinimg.com/1200x/fb/03/e5/fb03e5edf1ed52e9bdf6dcb64f497864.jpg", 
      title: t.grid.innovation, // "GUCCI x UMAMA"
      isCenter: true,
      position: "object-center",
      link: 'umamaCollab' as PageView
    },
    {
      // Exclusive Collection
      src: "https://i.pinimg.com/1200x/1b/33/eb/1b33eb6bd6be948bd06f5f7e128b2b75.jpg", 
      title: t.grid.sustainability,
      isCenter: false,
      position: "object-top",
      link: 'collections' as PageView
    }
  ];

  const handleItemClick = (page: PageView | null) => {
    if (page && onNavigate) {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 h-auto md:h-[90vh]">
      {images.map((item, index) => (
        <div 
          key={index} 
          onClick={() => handleItemClick(item.link)}
          className={`relative group overflow-hidden h-[70vh] md:h-full border-r border-white/10 last:border-r-0 bg-[#f0f0f0] ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {/* Image Tag for better precision control - Removed scale animation */}
          <img 
            src={item.src}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out ${item.position} ${item.isCenter ? 'grayscale-0' : 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100'}`}
          />
          
          {/* Overlay - Darker on center initially for text readability, lighter on sides */}
          <div className={`absolute inset-0 transition-colors duration-500 ${item.isCenter ? 'bg-black/10 group-hover:bg-black/0' : 'bg-black/10 group-hover:bg-black/20'}`} />

          {/* Text Content - Ultra Minimalist Editorial Style */}
          <div className="absolute inset-x-0 bottom-0 pb-12 flex flex-col items-center justify-end text-white text-center z-10 p-6">
            
            <h3 className={`font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-md ${item.isCenter ? 'text-sm md:text-base text-white bg-black/50 px-4 py-2 backdrop-blur-sm' : 'text-[10px] md:text-xs'}`}>
              {item.title}
            </h3>
            
            {item.link && (
              <>
                <div className="w-6 h-[1px] bg-white mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <span className="flex items-center space-x-1 text-[8px] tracking-[0.2em] uppercase font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white/90">
                   <span>{t.grid.readMore}</span>
                   <ArrowRight className="w-2 h-2" />
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisualGrid;
