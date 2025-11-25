
import React from 'react';
import { ArrowLeft, Smartphone, Lock, Eye, EyeOff, Smartphone as MobileIcon, User } from 'lucide-react';
import { Translations } from '../types';

interface BusinessAccountPageProps {
  t: Translations;
  onBack: () => void;
}

const BusinessAccountPage: React.FC<BusinessAccountPageProps> = ({ t, onBack }) => {
  const content = t.businessAccountPage;
  const [showPassword, setShowPassword] = React.useState(false);
  const waLink = "https://wa.me/6282310653328?text=Hallo%20saya%20ingin%20mendaftar%20akun%20bisnis";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col fade-in">
      
      {/* Navigation */}
      <div className="p-6 md:p-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.nav.backToHome}</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1920px] mx-auto w-full px-6 md:px-12 pb-20 gap-20">
        
        {/* Left Side: The Form (Exact Screenshot Replica) */}
        <div className="w-full max-w-sm flex flex-col items-center">
            
            {/* Logo Image */}
            <div className="mb-6">
              <img 
                src="https://api.gconline.online/upload/690309ac72101.png" 
                alt="Gucci Logo" 
                className="w-[120px] h-auto object-contain"
              />
            </div>

            <h1 className="text-3xl font-bold mb-8 text-white tracking-wide text-center">
              {content.form.title}
            </h1>

            {/* Form Container */}
            <div className="w-full bg-[#0a0a0a] border border-gray-700 rounded-2xl p-6 shadow-2xl relative">
               
               <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  
                  {/* Phone Input */}
                  <div className="relative flex items-center bg-black border border-gray-600 rounded-md overflow-hidden h-12">
                      <div className="w-10 h-full flex items-center justify-center text-white border-r border-gray-600">
                          <MobileIcon size={18} />
                      </div>
                      <div className="h-full flex items-center justify-center px-3 bg-[#2a2a2a] text-white text-sm font-semibold border-r border-gray-600">
                        +62
                      </div>
                      <input 
                          type="tel" 
                          placeholder={content.form.phonePlaceholder}
                          className="w-full bg-transparent text-sm text-white px-3 py-2 outline-none placeholder-gray-500"
                      />
                  </div>

                  {/* Password Input */}
                  <div className="relative flex items-center bg-black border border-gray-600 rounded-md overflow-hidden h-12">
                      <div className="w-10 h-full flex items-center justify-center text-white border-r border-gray-600">
                          <Lock size={18} />
                      </div>
                      <input 
                          type={showPassword ? "text" : "password"} 
                          placeholder={content.form.passwordPlaceholder}
                          className="w-full bg-transparent text-sm text-white px-3 py-2 outline-none placeholder-gray-500"
                      />
                      <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="px-3 text-white hover:text-gray-300"
                      >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                  </div>

                  {/* Invite Code Input */}
                  <div className="relative flex items-center bg-black border border-gray-600 rounded-md overflow-hidden h-12">
                      <div className="w-10 h-full flex items-center justify-center text-white border-r border-gray-600">
                          <Smartphone size={18} />
                      </div>
                      <input 
                          type="text" 
                          placeholder={content.form.inviteCodePlaceholder}
                          className="w-full bg-transparent text-sm text-white px-3 py-2 outline-none placeholder-gray-500"
                      />
                  </div>

                  {/* Submit Button */}
                  <a 
                     href={waLink}
                     target="_blank"
                     rel="noreferrer"
                     className="block w-full bg-[#c0c0c0] hover:bg-white text-black font-bold text-sm py-3 rounded-md transition-colors text-center mt-6"
                  >
                     {content.form.submitButton}
                  </a>

                  {/* Login Link */}
                  <div className="text-center mt-6">
                     <a href={waLink} target="_blank" rel="noreferrer" className="text-xs font-bold text-white hover:text-gray-300 transition-colors">
                        {content.form.loginLink}
                     </a>
                  </div>

               </form>
            </div>
        </div>

        {/* Right Side: Explanation Text (Kept as requested in previous prompt) */}
        <div className="w-full lg:w-1/2 text-left">
           <div className="border-l-2 border-[#c5a059] pl-8">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#c5a059] mb-4">
                 {content.info.subtitle}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">
                 {content.info.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-10">
                 {content.info.description}
              </p>
              
              <div className="space-y-8">
                 {content.info.features.map((feature, idx) => (
                    <div key={idx}>
                       <h3 className="text-white font-bold tracking-widest text-sm uppercase mb-2">
                          {feature.title}
                       </h3>
                       <p className="text-gray-500 text-sm leading-relaxed">
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
