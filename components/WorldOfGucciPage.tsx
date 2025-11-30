
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Translations } from '../types';

interface WorldOfGucciPageProps {
  t: Translations;
  onBack: () => void;
}

const WorldOfGucciPage: React.FC<WorldOfGucciPageProps> = ({ t, onBack }) => {
  const content = t.worldOfGucci;

  return (
    <div className="min-h-screen bg-white text-black pt-48 pb-16 px-6 md:px-12 fade-in">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Back */}
        <button 
          onClick={onBack}
          className="relative z-[60] flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.nav.backToHome}</span>
        </button>

        {/* Header */}
        <div className="border-b border-black pb-8 mb-12">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">
            EST. 1921 FLORENCE
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            {content.title}
          </h1>
        </div>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed font-serif italic text-gray-700 mb-16">
          "{content.intro}"
        </p>

        {/* Sections */}
        <div className="space-y-16">
          {content.sections.map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="w-full md:w-1/3">
                 <h3 className="font-serif text-2xl font-bold leading-tight text-black">
                   {section.title}
                 </h3>
                 <div className="w-12 h-[2px] bg-[#c5a059] mt-4"></div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-sm md:text-base leading-7 text-gray-800 text-justify">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-24 bg-[#1a1a1a] text-white p-8 md:p-12 text-center">
           <p className="font-serif text-lg md:text-2xl leading-relaxed">
             {content.conclusion}
           </p>
        </div>

      </div>
    </div>
  );
};

export default WorldOfGucciPage;
