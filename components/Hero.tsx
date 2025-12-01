
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";
  const bgImage = "https://i.pinimg.com/1200x/f4/8a/29/f48a2941b1d34d86360343f926ff57f3.jpg";
  const videoUrl = "https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/1ae69177-dc03-40fd-8b6f-4de60b08a8db/052c4667-e7df-437d-b8d5-87ffbaaf1a5f/main.mp4?fastly_token=NjkyZGM3NDNfZGJiYzc2MzM5YTkxZGI2MTljYjM2MzUzYTEwZmQ3NmVlZjA0Yjk2MWQzZDNkZDYxNWJjMzVhMTc1NWE3YzE5MF8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS8xYWU2OTE3Ny1kYzAzLTQwZmQtOGI2Zi00ZGU2MGIwOGE4ZGIvMDUyYzQ2NjctZTdkZi00MzdkLWI4ZDUtODdmZmJhYWYxYTVmL21haW4ubXA0";
  
  const [offset, setOffset] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Optimization: Only enable parallax on desktop (width > 768px)
    // Mobile browsers struggle with scroll events + transform updates
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance if needed, 
      // but simplistic throttling by check is okay for now
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505]">
      {/* Cinematic Background with Parallax (Conditional) */}
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center transition-transform duration-100 ease-out will-change-transform"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          // On mobile (offset is always 0), this transform is static. On desktop, it moves.
          transform: `translateY(${offset * 0.5}px) scale(1.1)` 
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        
        {/* Top Label */}
        <div className="overflow-hidden mb-6">
           <h5 className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase animate-[fadeIn_1s_ease-out_forwards] px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-[#D4AF37]/30">
             {t.hero.subtitle}
           </h5>
        </div>

        {/* Main Title */}
        <div className="relative w-full max-w-5xl mx-auto">
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl leading-none font-serif font-medium tracking-tight opacity-0 animate-[fadeIn_1.5s_ease-out_0.3s_forwards]">
            {t.hero.title}
          </h1>
        </div>
        
        <p className="mt-8 text-gray-300 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed opacity-0 animate-[fadeIn_1.5s_ease-out_0.6s_forwards]">
            {t.hero.description}
        </p>

        {/* Bottom Actions */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 opacity-0 animate-[fadeIn_1.5s_ease-out_0.9s_forwards]">
            
            {/* Primary CTA */}
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-[#D4AF37] text-black overflow-hidden rounded-[2px]"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-3 group-hover:text-black transition-colors">
                {t.hero.websiteLink}
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Secondary Action - Opens Video Modal */}
            <button 
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                 <Play className="w-4 h-4 text-white fill-white group-hover:text-[#D4AF37] group-hover:fill-[#D4AF37] transition-colors" />
              </div>
              <span className="text-white text-[10px] tracking-[0.2em] font-bold uppercase group-hover:text-[#D4AF37] transition-colors">
                Watch Film
              </span>
            </button>
        </div>

      </div>

      {/* Decorative Side Elements - Hidden on mobile to reduce DOM clutter */}
      <div className="absolute left-8 bottom-12 hidden md:block">
         <span className="text-[9px] text-white/50 tracking-[0.2em] uppercase vertical-text">
           Est. Florence 1921
         </span>
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-[fadeIn_0.3s_ease-out]">
            {/* Close Button */}
            <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors p-2 z-50 group"
            >
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                    <X className="w-8 h-8" />
                </div>
            </button>
            
            {/* Video Container */}
            <div className="relative w-full max-w-6xl aspect-video bg-black rounded-sm shadow-2xl overflow-hidden border border-[#D4AF37]/30">
                <video 
                    className="w-full h-full object-cover"
                    controls 
                    autoPlay
                    playsInline
                    controlsList="nodownload"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
