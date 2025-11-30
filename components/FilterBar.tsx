
import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Language, Translations } from '../types';

interface FilterBarProps {
  lang: Language;
  t: Translations;
  onViewLegality: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ lang, t, onViewLegality }) => {
  const [followerDisplay, setFollowerDisplay] = useState(t.stats.followersValue);

  useEffect(() => {
    // Configuration for auto-updating follower count
    // Base count established on May 22, 2024
    const ANCHOR_DATE = new Date('2024-05-22').getTime();
    const BASE_COUNT = 654000;
    const DAILY_INCREMENT = 3000;

    const updateFollowers = () => {
      const now = Date.now();
      const diffTime = now - ANCHOR_DATE;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      // Calculate total: Base + (Days Passed * 3000)
      // Math.max(0, diffDays) ensures we don't subtract if system date is wrong/old
      const currentTotal = BASE_COUNT + (Math.max(0, diffDays) * DAILY_INCREMENT);
      
      // Format logic
      if (currentTotal >= 1000000) {
        setFollowerDisplay((currentTotal / 1000000).toFixed(1) + 'M+');
      } else {
        setFollowerDisplay(Math.floor(currentTotal / 1000) + 'K+');
      }
    };

    updateFollowers();
    // Optional: Update interval could be added if the app stays open for days, 
    // but calculating on mount is sufficient for this requirement.
  }, []);
  
  return (
    <div className="w-full bg-[#F9F8F6] pt-24 pb-24 px-6 md:px-12 flex flex-col items-center justify-center fade-in">
      
      {/* Editorial Header */}
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] font-bold text-[#781016] uppercase mb-6">
          EST. FLORENCE 1921
        </p>
        <h2 className="text-3xl md:text-5xl font-serif text-[#0F221B] leading-tight mb-8">
          {t.hero.description}
        </h2>
        <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto"></div>
      </div>

      {/* Info / Stats Row - 3 Columns */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-[#D4AF37]/30 py-16">
          
          {/* Column 1: Followers */}
          <div className="flex flex-col items-center text-center px-4 md:border-r border-[#D4AF37]/30">
            <Users className="w-8 h-8 text-[#0F221B] mb-6 opacity-100" strokeWidth={1} />
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#781016] mb-4">
              {t.stats.followersLabel}
            </h4>
            <div className="text-3xl md:text-4xl font-serif text-[#0F221B] mb-2 transition-all duration-500">
              {followerDisplay}
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              {t.stats.followersDesc}
            </p>
          </div>

          {/* Column 2: Rating */}
          <div className="flex flex-col items-center text-center px-4 md:border-r border-[#D4AF37]/30">
            <div className="flex gap-1 mb-6">
               {[1, 2, 3, 4, 5].map((star) => (
                 <Star key={star} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37] drop-shadow-sm" />
               ))}
            </div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#781016] mb-4">
              {t.stats.ratingLabel}
            </h4>
            <div className="text-3xl md:text-4xl font-serif text-[#0F221B] mb-2">
              {t.stats.ratingValue}
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              {t.stats.ratingDesc}
            </p>
          </div>

          {/* Column 3: Legality - Clickable Feature */}
          <div className="flex flex-col items-center text-center px-4">
            <ShieldCheck className="w-8 h-8 text-[#781016] mb-6 drop-shadow-sm" strokeWidth={1.5} />
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#781016] mb-4">
              {t.stats.legalityLabel}
            </h4>
            <div className="text-xl md:text-2xl font-serif text-[#0F221B] mb-6">
              {t.stats.legalityValue}
            </div>
            
            <button 
              onClick={onViewLegality}
              className="group flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase font-bold border-b border-[#0F221B] pb-1 hover:text-[#781016] hover:border-[#781016] transition-colors text-[#0F221B]"
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
