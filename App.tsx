
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import VisualGrid from './components/VisualGrid';
import Footer from './components/Footer';
import LegalityPage from './components/LegalityPage';
import WorldOfGucciPage from './components/WorldOfGucciPage';
import CollectionsPage from './components/CollectionsPage';
import BusinessAccountPage from './components/BusinessAccountPage';
import AffiliateProgramPage from './components/AffiliateProgramPage';
import ExpertAdvisorPage from './components/ExpertAdvisorPage';
import ContemporaryStylePage from './components/ContemporaryStylePage';
import UmamaCollaborationPage from './components/UmamaCollaborationPage';
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
      <Navbar lang={lang} t={t} setLang={setLang} onNavigate={setPage} />
      
      <main className="flex-grow">
        {page === 'home' ? (
          <>
            <Hero t={t} />
            <FilterBar lang={lang} t={t} onViewLegality={() => setPage('legality')} />
            <TestimonialTicker t={t} />
            <VisualGrid t={t} onNavigate={setPage} />
          </>
        ) : page === 'legality' ? (
          <LegalityPage t={t} onBack={goHome} />
        ) : page === 'worldOfGucci' ? (
          <WorldOfGucciPage t={t} onBack={goHome} />
        ) : page === 'businessAccount' ? (
          <BusinessAccountPage t={t} onBack={goHome} />
        ) : page === 'affiliateProgram' ? (
          <AffiliateProgramPage t={t} onBack={goHome} />
        ) : page === 'expertAdvisor' ? (
          <ExpertAdvisorPage t={t} onBack={goHome} />
        ) : page === 'contemporaryStyle' ? (
          <ContemporaryStylePage t={t} onBack={goHome} />
        ) : page === 'umamaCollab' ? (
          <UmamaCollaborationPage t={t} onBack={goHome} />
        ) : (
          <CollectionsPage t={t} onBack={goHome} />
        )}
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;
