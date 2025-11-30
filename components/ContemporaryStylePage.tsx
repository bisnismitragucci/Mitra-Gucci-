
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Translations } from '../types';

interface ContemporaryStylePageProps {
  t: Translations;
  onBack: () => void;
}

const ContemporaryStylePage: React.FC<ContemporaryStylePageProps> = ({ t, onBack }) => {
  const content = t.contemporaryStylePage;

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 px-6 md:px-12 fade-in">
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

        {/* Sections Grid */}
        <div className="space-y-16 mb-24">
          {content.sections.map((section, index) => (
             <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 border-l-2 border-gray-100 pl-6 md:pl-8">
                <div className="w-full md:w-1/3">
                   <h3 className="font-serif text-xl font-bold text-black leading-tight">
                      {section.title}
                   </h3>
                </div>
                <div className="w-full md:w-2/3">
                   <p className="text-sm md:text-base leading-7 text-gray-700 text-justify">
                      {section.content}
                   </p>
                </div>
             </div>
          ))}
        </div>

        {/* Conclusion Box */}
        <div className="bg-[#1a1a1a] text-white p-8 md:p-12 text-center rounded-sm">
           <p className="font-serif text-lg leading-relaxed font-medium">
             {content.conclusion}
           </p>
        </div>

      </div>
    </div>
  );
};

export default ContemporaryStylePage;
