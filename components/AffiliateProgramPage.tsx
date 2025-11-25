import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Translations } from '../types';

interface AffiliateProgramPageProps {
  t: Translations;
  onBack: () => void;
}

const AffiliateProgramPage: React.FC<AffiliateProgramPageProps> = ({ t, onBack }) => {
  const content = t.affiliateProgramPage;

  return (
    <div className="min-h-screen bg-white text-black py-16 px-6 md:px-12 fade-in">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Back */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.nav.backToHome}</span>
        </button>

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a059] mb-4">
             {content.subtitle}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight uppercase tracking-wide">
             {content.title}
          </h1>
          <div className="w-24 h-[1px] bg-black mx-auto mt-8"></div>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-lg md:text-xl leading-relaxed font-serif italic text-gray-700">
            "{content.intro}"
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
          {content.points.map((point, index) => (
             <div key={index} className="flex flex-col">
                <h3 className="font-serif text-xl font-bold text-black mb-4">
                   {point.title}
                </h3>
                <p className="text-sm md:text-base leading-7 text-gray-700 text-justify">
                   {point.desc}
                </p>
             </div>
          ))}
        </div>

        {/* Conclusion Box */}
        <div className="bg-[#f9f9f9] border border-gray-200 p-8 md:p-12 text-center rounded-sm">
           <p className="font-serif text-lg leading-relaxed text-gray-900 font-medium">
             {content.conclusion}
           </p>
        </div>

      </div>
    </div>
  );
};

export default AffiliateProgramPage;