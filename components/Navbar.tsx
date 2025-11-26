import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Language, Translations, PageView } from '../types';

interface NavbarProps {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
  onNavigate?: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, t, setLang, onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const waLink = "https://wa.me/6282234293361?text=Hallo%20saya%20ingin%20bergabung%20dan%20mendaftar";

  const handleNavClick = (page: PageView) => {
    if (onNavigate) {
      onNavigate(page);
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <nav className="bg-black text-white w-full z-50 transition-all duration-300 border-b border-gray-900">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          
          {/* Left Actions (Language) */}
          <div className="hidden lg:flex items-center space-x-6 text-[11px] font-bold tracking-[0.2em] uppercase">
             <button 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center space-x-1 hover:text-gray-400 transition-colors"
            >
              <span>{lang === 'id' ? 'INDONESIA' : 'ENGLISH'}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Logo Area - Absolute Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-white font-bold">
              GUCCI
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 mt-1 font-semibold">
              AFFILIATE PROGRAM
            </span>
          </div>

          {/* Right Actions (Links) */}
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase">
            <button onClick={() => handleNavClick('affiliateProgram')} className="hover:text-gray-400 transition-colors">
              {t.nav.opportunities}
            </button>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">{t.nav.login}</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white ml-auto" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Secondary Nav - Centered below logo */}
        <div className="hidden lg:flex justify-center items-center py-4 space-x-12 text-[10px] font-bold tracking-[0.2em] uppercase border-t border-gray-900">
            <button onClick={() => handleNavClick('worldOfGucci')} className="hover:text-gray-400 transition-colors">
              {t.nav.people}
            </button>
            <button onClick={() => handleNavClick('collections')} className="hover:text-gray-400 transition-colors">
              {t.nav.partners}
            </button>
            <button onClick={() => handleNavClick('businessAccount')} className="hover:text-gray-400 transition-colors">
              {t.nav.academy}
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800 py-8 px-6 flex flex-col space-y-6 text-xs tracking-widest uppercase">
            <button onClick={() => handleNavClick('worldOfGucci')} className="text-left block hover:text-gray-400">
              {t.nav.people}
            </button>
            <button onClick={() => handleNavClick('collections')} className="text-left block hover:text-gray-400">
              {t.nav.partners}
            </button>
            <button onClick={() => handleNavClick('businessAccount')} className="text-left block hover:text-gray-400">
              {t.nav.academy}
            </button>
            <button onClick={() => handleNavClick('affiliateProgram')} className="text-left block hover:text-gray-400">
              {t.nav.opportunities}
            </button>
            <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
              <button 
                  onClick={() => {
                    setLang(lang === 'id' ? 'en' : 'id');
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 text-white"
                >
                  <span>Language: {lang === 'id' ? 'INDONESIA' : 'ENGLISH'}</span>
                </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Login Notification Bar */}
      <div className="bg-[#1a1a1a] text-white w-full py-3 flex justify-center items-center border-b border-gray-800">
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 text-[10px] tracking-[0.15em] uppercase font-medium hover:text-gray-300 transition-colors"
        >
           <span>{t.loginBar.text}</span>
           <span className="underline decoration-1 underline-offset-4 group-hover:decoration-gray-400 transition-all">
             {t.loginBar.link}
           </span>
        </a>
      </div>
    </>
  );
};

export default Navbar;