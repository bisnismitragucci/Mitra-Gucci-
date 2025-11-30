
import React from 'react';
import { ArrowLeft, Smartphone, Lock, Eye, EyeOff, Sparkles, ChevronRight } from 'lucide-react';
import { Translations } from '../types';

interface BusinessAccountPageProps {
  t: Translations;
  onBack: () => void;
}

const BusinessAccountPage: React.FC<BusinessAccountPageProps> = ({ t, onBack }) => {
  const content = t.businessAccountPage;
  const [showPassword, setShowPassword] = React.useState(false);
  const waLink = "https://wa.me/6281325808529?text=Hallo%20saya%20ingin%20mendaftar%20akun%20bisnis";

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col fade-in font-sans">
      
      {/* Navigation - Fixed with higher Z-Index than Navbar (z-50) */}
      <div className="p-6 md:p-12 fixed w-full z-[60] pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center space-x-3 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>{t.nav.backToHome}</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen max-w-[1920px] mx-auto w-full px-6 md:px-12 py-24 gap-24">
        
        {/* Left Side: The Form - Modernized */}
        <div className="w-full max-w-sm flex flex-col items-center animate-[fadeIn_0.8s_ease-out]">
            
            {/* Logo Image */}
            <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://api.gconline.online/upload/690309ac72101.png" 
                alt="Gucci Logo" 
                className="w-[140px] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
            </div>

            <h1 className="text-2xl font-serif tracking-widest mb-10 text-white text-center border-b border-white/20 pb-4 w-full">
              {content.form.title}
            </h1>

            {/* Form Container - Glassmorphism Card */}
            <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden group">
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none"></div>

               <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
                  
                  {/* Phone Input - Underline Style */}
                  <div className="group relative">
                      <div className="flex items-center space-x-3 pb-2 border-b border-gray-700 group-focus-within:border-white transition-colors duration-300">
                          <Smartphone size={16} className="text-gray-500 group-focus-within:text-white transition-colors" />
                          <div className="text-gray-400 text-sm font-medium pr-2 border-r border-gray-700">
                            +62
                          </div>
                          <input 
                              type="tel" 
                              placeholder={content.form.phonePlaceholder}
                              className="w-full bg-transparent text-sm text-white outline-none placeholder-gray-600 font-medium"
                          />
                      </div>
                  </div>

                  {/* Password Input */}
                  <div className="group relative">
                      <div className="flex items-center space-x-3 pb-2 border-b border-gray-700 group-focus-within:border-white transition-colors duration-300">
                          <Lock size={16} className="text-gray-500 group-focus-within:text-white transition-colors" />
                          <input 
                              type={showPassword ? "text" : "password"} 
                              placeholder={content.form.passwordPlaceholder}
                              className="w-full bg-transparent text-sm text-white outline-none placeholder-gray-600 font-medium"
                          />
                          <button 
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="text-gray-500 hover:text-white transition-colors"
                          >
                              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                      </div>
                  </div>

                  {/* Invite Code Input */}
                  <div className="group relative">
                      <div className="flex items-center space-x-3 pb-2 border-b border-gray-700 group-focus-within:border-white transition-colors duration-300">
                          <Sparkles size={16} className="text-gray-500 group-focus-within:text-white transition-colors" />
                          <input 
                              type="text" 
                              placeholder={content.form.inviteCodePlaceholder}
                              className="w-full bg-transparent text-sm text-white outline-none placeholder-gray-600 font-medium"
                          />
                      </div>
                  </div>

                  {/* Submit Button - Gradient & Glow */}
                  <a 
                     href={waLink}
                     target="_blank"
                     rel="noreferrer"
                     className="relative block w-full group overflow-hidden rounded-sm mt-8"
                  >
                     <div className="absolute inset-0 bg-white group-hover:bg-[#c5a059] transition-colors duration-500"></div>
                     <div className="relative px-6 py-4 flex items-center justify-center space-x-2">
                        <span className="text-black font-bold text-xs tracking-[0.2em] uppercase">
                            {content.form.submitButton}
                        </span>
                        <ChevronRight className="w-3 h-3 text-black group-hover:translate-x-1 transition-transform" />
                     </div>
                  </a>

                  {/* Login Link */}
                  <div className="text-center mt-6">
                     <a href={waLink} target="_blank" rel="noreferrer" className="text-[10px] tracking-widest text-gray-400 hover:text-white transition-colors uppercase border-b border-transparent hover:border-gray-500 pb-1">
                        {content.form.loginLink}
                     </a>
                  </div>

               </form>
            </div>
        </div>

        {/* Right Side: Explanation Text */}
        <div className="w-full lg:w-1/2 text-left animate-[fadeIn_0.8s_ease-out_0.2s_forwards] opacity-0">
           <div className="border-l border-[#c5a059]/30 pl-10 relative">
              {/* Highlight bar */}
              <div className="absolute left-[-1px] top-0 h-20 w-[2px] bg-[#c5a059]"></div>
              
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a059] mb-6">
                 {content.info.subtitle}
              </p>
              <h2 className="font-serif text-3xl md:text-6xl font-medium leading-tight mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                 {content.info.title}
              </h2>
              
              {/* NEW ACTIVATION INFO BOX - Minimalist */}
              <div className="mb-12 p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-sm">
                <h3 className="text-[#c5a059] font-bold tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-3">
                   <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
                   {content.info.activationTitle}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-7 font-light tracking-wide">
                   {content.info.activationDesc}
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg mb-12 font-serif italic">
                 "{content.info.description}"
              </p>
              
              <div className="space-y-10">
                 {content.info.features.map((feature, idx) => (
                    <div key={idx} className="group">
                       <h3 className="text-white font-bold tracking-[0.15em] text-xs uppercase mb-3 group-hover:text-[#c5a059] transition-colors">
                          {feature.title}
                       </h3>
                       <p className="text-gray-500 text-sm leading-relaxed border-b border-gray-800 pb-4 group-hover:border-gray-600 transition-colors">
                          {feature.desc}
                       </p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessAccountPage;
