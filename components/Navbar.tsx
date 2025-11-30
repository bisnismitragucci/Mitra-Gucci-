
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Language, Translations, PageView } from '../types';

interface NavbarProps {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
  onNavigate?: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, t, setLang, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageView) => {
    if (onNavigate) {
      onNavigate(page);
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-[#0F221B]/95 backdrop-blur-md py-2 border-b border-[#D4AF37]/50 shadow-lg' 
            : 'bg-gradient-to-b from-[#0F221B] to-transparent py-6 border-b border-transparent'
        }`}
      >
        {/* Gucci Web Stripe Top Decoration */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0F221B] via-[#781016] to-[#0F221B] z-50"></div>

        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          
          {/* Left Actions (Language) */}
          <div className="hidden lg:flex items-center space-x-6 text-[10px] font-bold tracking-[0.2em] uppercase text-white">
             <button 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="group flex items-center space-x-2 hover:text-[#D4AF37] transition-colors opacity-80 hover:opacity-100"
            >
              <span className="hover-underline-animation">{lang === 'id' ? 'INDONESIA' : 'ENGLISH'}</span>
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>

          {/* Logo Area - Absolute Center */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <span className={`font-serif tracking-[0.15em] text-white font-bold transition-all duration-500 ${
              scrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
            }`}>
              GUCCI
            </span>
            <span className={`tracking-[0.3em] uppercase text-[#D4AF37] mt-1 font-semibold transition-all duration-500 ${
              scrolled ? 'text-[7px] opacity-0 h-0 overflow-hidden' : 'text-[9px] opacity-100'
            }`}>
              AFFILIATE PROGRAM
            </span>
          </div>

          {/* Right Actions (Links) */}
          <div className="hidden lg:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white">
            <button onClick={() => handleNavClick('affiliateProgram')} className="hover-underline-animation opacity-80 hover:text-[#D4AF37] hover:opacity-100 transition-all">
              {t.nav.opportunities}
            </button>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 border border-white/30 hover:bg-[#D4AF37] hover:text-[#0F221B] hover:border-[#D4AF37] transition-all duration-500 rounded-[1px]"
            >
              {t.nav.login}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white ml-auto" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Secondary Nav - Centered below logo (Only visible when not scrolled or mouse over nav) */}
        <div className={`hidden lg:flex justify-center items-center space-x-12 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden ${
          scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 border-t border-white/5 mt-2'
        }`}>
            <button onClick={() => handleNavClick('worldOfGucci')} className="text-white/80 hover:text-[#D4AF37] hover-underline-animation">
              {t.nav.people}
            </button>
            <button onClick={() => handleNavClick('collections')} className="text-white/80 hover:text-[#D4AF37] hover-underline-animation">
              {t.nav.partners}
            </button>
            <button onClick={() => handleNavClick('umamaCollab')} className="text-[#c5a059] hover:text-white hover-underline-animation">
              {t.nav.collab}
            </button>
            <button onClick={() => handleNavClick('businessAccount')} className="text-white/80 hover:text-[#D4AF37] hover-underline-animation">
              {t.nav.academy}
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden fixed inset-0 bg-[#0F221B] z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center px-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ top: '0' }}>
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
               <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              <button onClick={() => handleNavClick('worldOfGucci')} className="text-lg font-serif italic text-white hover:text-[#D4AF37]">
                {t.nav.people}
              </button>
              <button onClick={() => handleNavClick('umamaCollab')} className="text-lg font-serif italic text-[#D4AF37] font-bold">
                {t.nav.collab}
              </button>
              <button onClick={() => handleNavClick('collections')} className="text-lg font-serif italic text-white hover:text-[#D4AF37]">
                {t.nav.partners}
              </button>
              <button onClick={() => handleNavClick('businessAccount')} className="text-lg font-serif italic text-white hover:text-[#D4AF37]">
                {t.nav.academy}
              </button>
              <button onClick={() => handleNavClick('affiliateProgram')} className="text-lg font-serif italic text-white hover:text-[#D4AF37]">
                {t.nav.opportunities}
              </button>
              
              <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto my-4"></div>

              <button 
                  onClick={() => {
                    setLang(lang === 'id' ? 'en' : 'id');
                    setIsOpen(false);
                  }}
                  className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]"
                >
                  Switch to {lang === 'id' ? 'ENGLISH' : 'INDONESIA'}
                </button>
            </div>
        </div>
      </nav>
      
      {/* Login Notification Bar - Adjusted for fixed nav - Gucci Burgundy Color */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-[#781016] text-white py-3 flex justify-center items-center border-t border-[#D4AF37]/30 lg:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 text-[9px] tracking-[0.15em] uppercase font-medium"
        >
           <span>{t.loginBar.text}</span>
           <span className="font-bold underline decoration-1 underline-offset-4 group-hover:text-[#D4AF37] transition-colors">
             {t.loginBar.link}
           </span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
