import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import VisualGrid from './components/VisualGrid';
import Footer from './components/Footer';
import LegalityPage from './components/LegalityPage';
import TestimonialTicker from './components/TestimonialTicker';
import { DICTIONARY } from './constants';
import { Language, PageView } from './types';

function App() {
  const [lang, setLang] = useState<Language>('id');
  const [page, setPage] = useState<PageView>('home');
  
  const t = DICTIONARY[lang];

  // Reset to home when clicking home links or logo
  const goHome = () => setPage('home');

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar lang={lang} t={t} setLang={setLang} />
      
      <main className="flex-grow">
        {page === 'home' ? (
          <>
            <Hero t={t} />
            <FilterBar lang={lang} t={t} onViewLegality={() => setPage('legality')} />
            <TestimonialTicker t={t} />
            <VisualGrid t={t} />
          </>
        ) : (
          <LegalityPage t={t} onBack={goHome} />
        )}
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;