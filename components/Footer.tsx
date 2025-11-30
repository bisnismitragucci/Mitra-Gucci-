
import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#0F221B] text-white w-full pt-32 pb-12 border-t-4 border-[#781016] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 via-[#0F221B] to-[#0F221B] pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-24 text-center md:text-left">
           
           {/* Brand Section */}
           <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
              <span className="font-serif text-3xl text-white tracking-widest font-bold mb-8">GUCCI</span>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                 Redefining modern luxury since 1921. Innovation, creativity, and Italian craftsmanship at its finest.
              </p>
           </div>

           {/* Links Column 1 */}
           <div className="flex flex-col space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2">EXCLUSIVE SERVICES</h4>
              <a href="https://www.gucciosteria.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">Gucci Osteria</a>
              <a href="https://www.gucci.com/us/en/st/stories/gucci-garden" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">Gucci Garden</a>
              <a href="https://www.gucci.com/us/en/st/book-an-appointment" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">Book an Appointment</a>
           </div>

           {/* Links Column 2 */}
           <div className="flex flex-col space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2">CORPORATE</h4>
              <a href="https://www.gucci.com/us/en/st/about-gucci" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">About Gucci</a>
              <a href="https://equilibrium.gucci.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">Gucci Equilibrium</a>
           </div>

            {/* Newsletter Simulation */}
           <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6">SIGN UP FOR UPDATES</h4>
              <div className="flex w-full border-b border-gray-600 pb-2 mb-4 hover:border-white transition-colors group">
                 <input 
                   type="email" 
                   placeholder="Email Address..." 
                   className="bg-transparent border-none outline-none text-xs text-white placeholder-gray-400 italic flex-grow w-full"
                 />
                 <a href="https://www.gucci.com/us/en/profile/account/create" target="_blank" rel="noopener noreferrer" className="text-xs text-white font-bold cursor-pointer hover:text-[#D4AF37] transition-colors ml-2">SUBSCRIBE</a>
              </div>
              <p className="text-[9px] text-gray-500 leading-tight text-left">
                By signing up, you accept the terms of Gucci's Privacy Policy.
              </p>
           </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <span className="text-[10px] tracking-[0.1em] uppercase text-gray-500 font-medium mb-4 md:mb-0">
              {t.footer.copyright}
            </span>
            <div className="flex space-x-6">
               <a href="https://www.gucci.com/us/en/st/privacy-landing" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-500 hover:text-white cursor-pointer transition-colors">PRIVACY POLICY</a>
               <a href="https://www.gucci.com/us/en/st/legal-landing" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-500 hover:text-white cursor-pointer transition-colors">TERMS OF USE</a>
               <a href="https://www.gucci.com/us/en/st/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-500 hover:text-white cursor-pointer transition-colors">COOKIES SETTINGS</a>
            </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
