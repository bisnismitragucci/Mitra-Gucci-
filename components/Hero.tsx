
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const waLink = "https://wa.me/6282234293361?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      {/* High Fashion / Warm Tone Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover opacity-90 scale-105"
      >
        <source src="https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/df6c33dd-3053-4b11-a5ce-a30101d2de5c/03a49d28-3a6a-4bca-bb30-1d405bf54bc0/main.mp4?fastly_token=NjkyNjgxMTdfZjQ0OTI1YmQyNjIyMWY3ZGMwN2ZkNDVkOGVlNzM5ZGFiYjgzYzg4OTdlMzkxYzE3NmFhOTg5MmFjYjljNWVhNl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS9kZjZjMzNkZC0zMDUzLTRiMTEtYTVjZS1hMzAxMDFkMmRlNWMvMDNhNDlkMjgtM2E2YS00YmNhLWJiMzAtMWQ0MDViZjU0YmMwL21haW4ubXA0" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Center Content - No White Box, Just Text for Editorial Look */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h5 className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 shadow-black drop-shadow-md">
           {t.hero.subtitle}
        </h5>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide mb-8 drop-shadow-lg">
          {t.hero.title}
        </h1>
        
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center px-8 py-3 bg-white text-black hover:bg-[#F5F5F0] transition-colors duration-300"
        >
           <span className="text-xs font-bold tracking-[0.2em] uppercase">{t.hero.websiteLink}</span>
           <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
