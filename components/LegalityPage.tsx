
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
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 fade-in">
      
      {/* Navigation Bar (Top) */}
      <div className="w-full max-w-[210mm] mb-8 flex justify-between items-center mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-600 hover:text-black transition-colors bg-white px-4 py-2 shadow-sm rounded-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.nav.backToHome}</span>
        </button>
        <div className="flex items-center space-x-2 text-green-800 bg-green-50 px-4 py-1.5 rounded-full border border-green-200 shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Verified Document</span>
        </div>
      </div>

      {/* Official Document Container - A4 Ratio */}
      <div className="w-full max-w-[210mm] bg-white shadow-2xl relative mx-auto p-10 md:p-16 text-gray-900 font-sans border border-gray-200">
        
        {/* OFFICIAL WATERMARK - Garuda Pancasila Large */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
           <img 
              src={garudaUrl}
              alt="Watermark"
              className="w-[400px] h-auto opacity-[0.04] grayscale object-contain"
           />
        </div>

        {/* Document Content */}
        <div className="relative z-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-5">
              <img 
                src={garudaUrl}
                alt="Garuda Pancasila" 
                className="w-24 h-auto"
              />
            </div>
            
            <h2 className="text-base md:text-lg font-bold uppercase tracking-widest mb-2 text-black">
              {doc.header1}
            </h2>
            <h1 className="text-lg md:text-xl font-extrabold uppercase tracking-wide text-black decoration-double">
              {doc.header2}
            </h1>
          </div>

          {/* Double Line Divider */}
          <div className="border-t-4 border-black mb-1"></div>
          <div className="border-t border-black mb-10"></div>

          {/* NIB Section - Boxed */}
          <div className="flex flex-col items-center mb-10">
            <p className="text-sm font-bold uppercase mb-3 tracking-wide text-gray-800">{doc.nibLabel}</p>
            <div className="bg-gray-50 border-2 border-gray-200 px-10 py-4 shadow-sm rounded-sm">
              <span className="text-2xl md:text-3xl font-mono font-bold tracking-[0.25em] text-gray-900 select-all">
                {doc.nibNumber}
              </span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-sm md:text-[15px] leading-7 mb-8 text-justify text-gray-800 font-medium">
            {doc.intro}
          </p>

          {/* Details Grid - Enhanced Readability */}
          <div className="space-y-5 text-sm md:text-[15px] mb-12 text-gray-900">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="md:w-[35%] font-semibold text-gray-700">{doc.labels.name}</div>
              <div className="md:w-[65%] font-bold text-black uppercase tracking-wide pl-2 md:pl-0">
                : {doc.values.name}
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="md:w-[35%] font-semibold text-gray-700">{doc.labels.address}</div>
              <div className="md:w-[65%] font-medium leading-relaxed pl-2 md:pl-0">
                : {doc.values.address}
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="md:w-[35%] font-semibold text-gray-700">{doc.labels.npwp}</div>
              <div className="md:w-[65%] font-mono font-semibold tracking-wide pl-2 md:pl-0">
                : {doc.values.npwp}
              </div>
            </div>

             {/* Row 4 */}
             <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="md:w-[35%] font-semibold text-gray-700">{doc.labels.capital}</div>
              <div className="md:w-[65%] font-medium pl-2 md:pl-0">
                : {doc.values.capital}
              </div>
            </div>

             {/* Row 5 */}
             <div className="flex flex-col md:flex-row border-b border-gray-100 pb-2">
              <div className="md:w-[35%] font-semibold text-gray-700">{doc.labels.kbli}</div>
              <div className="md:w-[65%] font-medium pl-2 md:pl-0">
                : {doc.values.kbli}
              </div>
            </div>

             {/* Row 6 - Status */}
             <div className="flex flex-col md:flex-row items-start md:items-center bg-green-50 p-2 -ml-2 rounded-sm border-l-4 border-green-600">
              <div className="md:w-[35%] font-bold text-gray-800 ml-2 md:ml-0">{doc.labels.status}</div>
              <div className="md:w-[65%] flex items-center text-green-800 font-bold ml-2 md:ml-0">
                <span className="mr-2">: {doc.values.status}</span>
                <CheckCircle2 className="w-5 h-5 fill-green-600 text-white" />
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <p className="text-xs md:text-sm leading-6 text-gray-700 mb-12 text-justify italic">
            {doc.footerNote}
          </p>

          {/* Signature Section */}
          <div className="flex flex-col items-end mt-16 pr-4">
            <div className="text-center w-72">
              <p className="text-sm text-gray-800 mb-1">{doc.datePlace}</p>
              <p className="text-sm font-bold mb-6 whitespace-pre-line text-black">{doc.signerTitle}</p>
              
              {/* Realistic QR Code Image */}
              <div className="w-28 h-28 mx-auto mb-3 flex items-center justify-center border border-gray-200 bg-white p-1">
                 <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NIB:1217000132315;PT.GRAHA_CITRA_PRIMA-GUCCI;STATUS:VERIFIED" 
                    alt="QR Validation" 
                    className="w-full h-full object-contain mix-blend-multiply"
                 />
              </div>
              
              <div className="text-[10px] text-gray-500 mb-4 font-medium">Ditandatangani secara elektronik</div>
              
              <p className="text-base font-bold underline decoration-2 underline-offset-4 uppercase text-black">
                {doc.signerName}
              </p>
            </div>
          </div>

          {/* Document Footer Small Text */}
          <div className="mt-16 pt-6 border-t-2 border-gray-300 text-[10px] text-gray-500 font-medium">
             1. Dokumen ini diterbitkan sistem OSS berdasarkan data dari Pelaku Usaha.<br/>
             2. Data lengkap Perizinan Berusaha dapat diperoleh melalui sistem OSS.
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalityPage;
