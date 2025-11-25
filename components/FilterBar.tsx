import React from 'react';
import { Star, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Language, Translations } from '../types';

interface FilterBarProps {
  lang: Language;
  t: Translations;
  onViewLegality: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ lang, t, onViewLegality }) => {
  
  return (
    <div className="w-full bg-white pt-24 pb-24 px-6 md:px-12 flex flex-col items-center justify-center fade-in">
      
      {/* Editorial Header */}
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] font-bold text-gray-500 uppercase mb-6">
          EST. FLORENCE 1921
        </p>
        <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
          {t.hero.description}
        </h2>
        <div className="w-16 h-[1px] bg-black mx-auto"></div>
      </div>

      {/* Info / Stats Row - 3 Columns */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-gray-100 py-16">
          
          {/* Column 1: Followers */}
          <div className="flex flex-col items-center text-center px-4 md:border-r border-gray-100">
            <Users className="w-8 h-8 text-black mb-6 opacity-80" strokeWidth={1} />
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              {t.stats.followersLabel}
            </h4>
            <div className="text-3xl md:text-4xl font-serif text-black mb-2">
              {t.stats.followersValue}
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              {t.stats.followersDesc}
            </p>
          </div>

          {/* Column 2: Rating */}
          <div className="flex flex-col items-center text-center px-4 md:border-r border-gray-100">
            <div className="flex gap-1 mb-6">
               {[1, 2, 3, 4, 5].map((star) => (
                 <Star key={star} className="w-5 h-5 fill-black text-black" />
               ))}
            </div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              {t.stats.ratingLabel}
            </h4>
            <div className="text-3xl md:text-4xl font-serif text-black mb-2">
              {t.stats.ratingValue}
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              {t.stats.ratingDesc}
            </p>
          </div>

          {/* Column 3: Legality - Clickable Feature */}
          <div className="flex flex-col items-center text-center px-4">
            <ShieldCheck className="w-8 h-8 text-black mb-6 opacity-80" strokeWidth={1} />
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              {t.stats.legalityLabel}
            </h4>
            <div className="text-xl md:text-2xl font-serif text-black mb-6">
              {t.stats.legalityValue}
            </div>
            
            <button 
              onClick={onViewLegality}
              className="group flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              <span>{t.stats.viewLegality}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FilterBar;