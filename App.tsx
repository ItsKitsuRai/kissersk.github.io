import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { SECTIONS } from './constants';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const activeSection = SECTIONS.find((s) => s.id === activeSectionId) || SECTIONS[0];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 bg-slate-800 text-white rounded-lg shadow-lg border border-slate-700 active:scale-95 transition-transform"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Navigation Sidebar */}
      <Sidebar 
        activeSectionId={activeSectionId}
        onSelectSection={setActiveSectionId}
        isOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <ContentArea activeSection={activeSection} />
      
    </div>
  );
};

export default App;
