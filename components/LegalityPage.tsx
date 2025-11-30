
import React from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Translations } from '../types';

interface LegalityPageProps {
  t: Translations;
  onBack: () => void;
}

const LegalityPage: React.FC<LegalityPageProps> = ({ t, onBack }) => {
  const doc = t.legalityDoc;
  const garudaUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/National_emblem_of_Indonesia_Garuda_Pancasila.svg/1200px-National_emblem_of_Indonesia_Garuda_Pancasila.svg.png";

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-24 pb-12 px-2 sm:px-6 lg:px-8 fade-in">
      
      {/* Navigation Bar (Top) */}
      <div className="w-full md:max-w-[210mm] mb-4 md:mb-8 flex justify-between items-center mx-auto px-2 md:px-0">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-600 hover:text-black transition-colors bg-white px-3 py-2 md:px-4 md:py-2 shadow-sm rounded-sm"
        >
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
          <span>{t.nav.backToHome}</span>
        </button>
        <div className="flex items-center space-x-2 text-green-800 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Verified Document</span>
        </div>
      </div>

      {/* Official Document Container - Responsive A4 */}
      <div className="w-full md:max-w-[210mm] bg-white shadow-2xl relative mx-auto p-6 md:p-16 text-gray-900 font-sans border border-gray-200 rounded-sm md:rounded-none">
        
        {/* OFFICIAL WATERMARK - Garuda Pancasila Large */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
           <img 
              src={garudaUrl}
              alt="Watermark"
              className="w-[250px] md:w-[400px] h-auto opacity-[0.04] grayscale object-contain"
           />
        </div>

        {/* Document Content */}
        <div className="relative z-10">
          
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex justify-center mb-4 md:mb-5">
              <img 
                src={garudaUrl}
                alt="Garuda Pancasila" 
                className="w-16 md:w-24 h-auto"
              />
            </div>
            
            <h2 className="text-xs md:text-lg font-bold uppercase tracking-widest mb-1 md:mb-2 text-black">
              {doc.header1}
            </h2>
            <h1 className="text-sm md:text-xl font-extrabold uppercase tracking-wide text-black decoration-double">
              {doc.header2}
            </h1>
          </div>

          {/* Double Line Divider */}
          <div className="border-t-4 border-black mb-1"></div>
          <div className="border-t border-black mb-6 md:mb-10"></div>

          {/* NIB Section - Boxed */}
          <div className="flex flex-col items-center mb-8 md:mb-10">
            <p className="text-[10px] md:text-sm font-bold uppercase mb-2 md:mb-3 tracking-wide text-gray-800">{doc.nibLabel}</p>
            <div className="bg-gray-50 border-2 border-gray-200 px-4 md:px-10 py-2 md:py-4 shadow-sm rounded-sm w-full md:w-auto text-center">
              <span className="text-lg md:text-3xl font-mono font-bold tracking-[0.1em] md:tracking-[0.25em] text-gray-900 select-all break-all md:break-normal">
                {doc.nibNumber}
              </span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-xs md:text-[15px] leading-relaxed md:leading-7 mb-6 md:mb-8 text-justify text-gray-800 font-medium">
            {doc.intro}
          </p>

          {/* Details Grid - Fully Responsive Stacking */}
          <div className="space-y-4 md:space-y-5 text-xs md:text-[15px] mb-8 md:mb-12 text-gray-900">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="w-full md:w-[35%] font-semibold text-gray-600 md:text-gray-700 mb-1 md:mb-0">{doc.labels.name}</div>
              <div className="w-full md:w-[65%] font-bold text-black uppercase tracking-wide md:pl-0">
                <span className="hidden md:inline mr-1">:</span>
                {doc.values.name}
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="w-full md:w-[35%] font-semibold text-gray-600 md:text-gray-700 mb-1 md:mb-0">{doc.labels.address}</div>
              <div className="w-full md:w-[65%] font-medium leading-relaxed md:pl-0 break-words">
                <span className="hidden md:inline mr-1">:</span>
                {doc.values.address}
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="w-full md:w-[35%] font-semibold text-gray-600 md:text-gray-700 mb-1 md:mb-0">{doc.labels.npwp}</div>
              <div className="w-full md:w-[65%] font-mono font-semibold tracking-wide md:pl-0">
                <span className="hidden md:inline mr-1">:</span>
                {doc.values.npwp}
              </div>
            </div>

             {/* Row 4 */}
             <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="w-full md:w-[35%] font-semibold text-gray-600 md:text-gray-700 mb-1 md:mb-0">{doc.labels.capital}</div>
              <div className="w-full md:w-[65%] font-medium md:pl-0">
                 <span className="hidden md:inline mr-1">:</span>
                {doc.values.capital}
              </div>
            </div>

             {/* Row 5 */}
             <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="w-full md:w-[35%] font-semibold text-gray-600 md:text-gray-700 mb-1 md:mb-0">{doc.labels.kbli}</div>
              <div className="w-full md:w-[65%] font-medium md:pl-0">
                 <span className="hidden md:inline mr-1">:</span>
                {doc.values.kbli}
              </div>
            </div>

             {/* Row 6 - Status */}
             <div className="flex flex-col md:flex-row items-start md:items-center bg-green-50 p-3 md:p-2 -mx-3 md:-ml-2 rounded-sm border-l-4 border-green-600 mt-2 md:mt-0">
              <div className="w-full md:w-[35%] font-bold text-gray-800 md:ml-0 mb-1 md:mb-0">{doc.labels.status}</div>
              <div className="w-full md:w-[65%] flex items-center text-green-800 font-bold md:ml-0">
                <span className="hidden md:inline mr-2">:</span>
                <span className="mr-2">{doc.values.status}</span>
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 fill-green-600 text-white" />
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <p className="text-[10px] md:text-sm leading-5 md:leading-6 text-gray-700 mb-8 md:mb-12 text-justify italic">
            {doc.footerNote}
          </p>

          {/* Signature Section */}
          <div className="flex flex-col items-center md:items-end mt-8 md:mt-16 pr-0 md:pr-4">
            <div className="text-center w-full md:w-72">
              <p className="text-xs md:text-sm text-gray-800 mb-1">{doc.datePlace}</p>
              <p className="text-xs md:text-sm font-bold mb-2 md:mb-2 whitespace-pre-line text-black leading-tight">
                {doc.signerTitle}
              </p>
              
              {/* Digital Signature SVG - Custom Drawn for perfect transparency */}
              <div className="w-48 h-28 mx-auto flex items-center justify-center relative -my-4">
                 <svg 
                    viewBox="0 0 300 150" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                 >
                    {/* Artistic Signature Path mimicking 'Bahlil' style */}
                    <path 
                      d="M40,100 C30,70 60,30 80,40 C90,45 70,80 60,90 C50,100 40,110 70,100 C90,93 120,60 140,60 C160,60 150,90 170,80 C190,70 210,50 230,60" 
                      stroke="#000000" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.1))' }}
                    />
                    <path 
                      d="M20,110 C50,105 100,100 250,100" 
                      stroke="#000000" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                    <path 
                      d="M140,60 C145,50 155,40 160,50" 
                      stroke="#000000" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                 </svg>
              </div>
              
              <div className="text-[9px] md:text-[10px] text-gray-500 mb-2 md:mb-4 font-medium">Ditandatangani secara elektronik</div>
              
              <p className="text-sm md:text-base font-bold underline decoration-2 underline-offset-4 uppercase text-black">
                {doc.signerName}
              </p>
            </div>
          </div>

          {/* Document Footer Small Text */}
          <div className="mt-8 md:mt-16 pt-4 md:pt-6 border-t-2 border-gray-300 text-[9px] md:text-[10px] text-gray-500 font-medium leading-relaxed">
             1. Dokumen ini diterbitkan sistem OSS berdasarkan data dari Pelaku Usaha.<br/>
             2. Data lengkap Perizinan Berusaha dapat diperoleh melalui sistem OSS.
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalityPage;
