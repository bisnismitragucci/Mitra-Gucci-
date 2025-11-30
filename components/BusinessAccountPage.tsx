
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
    <div className="min-h-screen bg-[#050505] text-white flex flex-col fade-in font-sans relative overflow-x-hidden">
      
      {/* Background Elements for Depth */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#c5a059] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900 rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      {/* Navigation - Fixed with higher Z-Index than Navbar (z-50) */}
      <div className="p-6 md:p-12 fixed w-full z-[100] pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center space-x-3 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-white/5 hover:border-white/20"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>{t.nav.backToHome}</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen max-w-[1920px] mx-auto w-full px-6 md:px-12 py-32 gap-24 relative z-10">
        
        {/* Left Side: The Form - Modernized */}
        <div className="w-full max-w-sm flex flex-col items-center animate-[fadeIn_0.8s_ease-out]">
            
            {/* Logo Image */}
            <div className="mb-10 transform hover:scale-105 transition-transform duration-700">
              <img 
                src="https://api.gconline.online/upload/690309ac72101.png" 
                alt="Gucci Logo" 
                className="w-[160px] h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              />
            </div>

            <h1 className="text-xl font-serif tracking-[0.1em] mb-10 text-white text-center border-b border-white/10 pb-6 w-full">
              {content.form.title}
            </h1>

            {/* Form Container - Ultra Glassmorphism */}
            <div className="w-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-xl p-10 shadow-2xl relative overflow-hidden group">
               
               {/* Shine Effect */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

               <form onSubmit={(e) => e.preventDefault()} className="space-y-8 relative z-10">
                  
                  {/* Phone Input */}
                  <div className="group relative">
                      <div className="flex items-center space-x-3 pb-3 border-b border-white/20 group-focus-within:border-[#c5a059] transition-colors duration-500">
                          <Smartphone size={16} className="text-gray-400 group-focus-within:text-[#c5a059] transition-colors" />
                          <div className="text-gray-400 text-sm font-medium pr-3 border-r border-white/20">
                            +62
                          </div>
                          <input 
                              type="tel" 
                              placeholder={content.form.phonePlaceholder}
                              className="w-full bg-transparent text-sm text-white outline-none placeholder-gray-500 font-medium tracking-wide"
                          />
                      </div>
                  </div>

                  {/* Password Input */}
                  <div className="group relative">
                      <div className="flex items-center space-x-3 pb-3 border-b border-white/20 group-focus-within:border-[#c5a059] transition-colors duration-500">
                          <Lock size={16} className="text-gray-400 group-focus-within:text-[#c5a059] transition-colors" />
                          <input 
                              type={showPassword ? "text" : "password"} 
                              placeholder={content.form.passwordPlaceholder}
                              className="w-full bg-transparent text-sm text-white outline-none placeholder-gray-500 font-medium tracking-wide"
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
                      <div className="flex items-center space-x-3 pb-3 border-b border-white/20 group-focus-within:border-[#c5a059] transition-colors duration-500">
                          <Sparkles size={16} className="text-gray-400 group-focus-within:text-[#c5a059] transition-colors" />
                          <input 
                              type="text" 
                              placeholder={content.form.inviteCodePlaceholder}
                              className="w-full bg-transparent text-sm text-white outline-none placeholder-gray-500 font-medium tracking-wide"
                          />
                      </div>
                  </div>

                  {/* Submit Button - Gradient & Glow */}
                  <a 
                     href={waLink}
                     target="_blank"
                     rel="noreferrer"
                     className="relative block w-full group overflow-hidden rounded-sm mt-10 shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] transition-shadow duration-500"
                  >
                     <div className="absolute inset-0 bg-[#c5a059] group-hover:bg-[#d6b066] transition-colors duration-500"></div>
                     <div className="relative px-6 py-4 flex items-center justify-center space-x-2">
                        <span className="text-black font-bold text-xs tracking-[0.25em] uppercase">
                            {content.form.submitButton}
                        </span>
                        <ChevronRight className="w-3 h-3 text-black group-hover:translate-x-1 transition-transform" />
                     </div>
                  </a>

                  {/* Login Link */}
                  <div className="text-center mt-8">
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
              {/* Highlight bar with gradient */}
              <div className="absolute left-[-1px] top-0 h-32 w-[2px] bg-gradient-to-b from-[#c5a059] to-transparent"></div>
              
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a059] mb-6">
                 {content.info.subtitle}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12 text-white">
                 {content.info.title}
              </h2>
              
              {/* NEW ACTIVATION INFO BOX - Minimalist */}
              <div className="mb-14 p-10 border border-white/10 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-md rounded-sm">
                <h3 className="text-[#c5a059] font-bold tracking-[0.2em] text-xs uppercase mb-5 flex items-center gap-3">
                   <span className="w-2 h-2 rounded-full bg-[#c5a059] shadow-[0_0_10px_#c5a059]"></span>
                   {content.info.activationTitle}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-8 font-light tracking-wide">
                   {content.info.activationDesc}
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-xl mb-14 font-serif italic opacity-80">
                 "{content.info.description}"
              </p>
              
              <div className="space-y-12">
                 {content.info.features.map((feature, idx) => (
                    <div key={idx} className="group cursor-default">
                       <h3 className="text-white font-bold tracking-[0.2em] text-xs uppercase mb-4 group-hover:text-[#c5a059] transition-colors duration-300">
                          {feature.title}
                       </h3>
                       <p className="text-gray-500 text-sm leading-7 border-b border-gray-800 pb-6 group-hover:border-gray-600 transition-colors duration-500">
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
