
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Translations } from '../types';

interface ChristmasBannerProps {
  t: Translations;
}

const ChristmasBanner: React.FC<ChristmasBannerProps> = ({ t }) => {
  const content = t.christmas;
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20tertarik%20dengan%20edisi%20spesial%20natal%20dan%20tahun%20baru";
  
  // Image Source
  const bgImage = "https://storage.googleapis.com/sahabat-pegadaian-asset-prd/20251128-022809_tema-natalwebp.webp";

  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] bg-[#050505] overflow-hidden flex flex-col items-center justify-end">
      
      {/* FULL BACKGROUND IMAGE - Filling all edges */}
      <div className="absolute inset-0 w-full h-full z-0">
         <img 
            src={bgImage} 
            alt="Gucci Winter Tale Family"
            // object-cover: Memaksa gambar mengisi penuh container (memotong jika rasio beda)
            // object-center: Fokus di tengah gambar
            className="w-full h-full object-cover object-center scale-105"
         />
      </div>

      {/* OVERLAYS - Agar teks terbaca & Nuansa Mewah */}
      
      {/* 1. Darkening Layer (Agar foto tidak terlalu terang menabrak teks) */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* 2. Gold Tint Overlay (Memberikan nuansa hangat Gucci) */}
      <div className="absolute inset-0 bg-[#382c0a]/30 mix-blend-overlay z-10"></div>

      {/* 3. Gradient Bottom (Transisi halus untuk teks di bawah) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10"></div>

      {/* LAYER 4: Content Overlay (Bagian Bawah) */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24 text-center">
         
         {/* Floating Badge */}
         <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Sparkles className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-bold uppercase">
                  {content.subtitle}
                </span>
            </div>
         </div>

         {/* Typography - Big & Bold */}
         <h1 className="font-serif text-4xl md:text-7xl text-white leading-tight mb-4 drop-shadow-2xl">
            GUCCI <span className="italic font-light text-[#D4AF37]">Winter Tale</span> 2026
         </h1>

         {/* Description with Max Width */}
         <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-light tracking-wide drop-shadow-md hidden md:block text-shadow-sm">
            {content.description}
         </p>

         {/* CTA Button - Luxurious */}
         <div className="flex justify-center">
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-[#D4AF37] text-[#0F221B] overflow-hidden rounded-[2px] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-3 group-hover:text-[#0F221B] transition-colors">
                {content.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
         </div>

      </div>

      {/* Decorative Border Frame (Optional - menambah kesan premium) */}
      <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/30 z-20 pointer-events-none rounded-[2px]"></div>

    </div>
  );
};

export default ChristmasBanner;
