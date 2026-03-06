import React from 'react';
import { Section } from '../types';

interface ContentAreaProps {
  activeSection: Section;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeSection }) => {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-950 relative">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 relative z-10 animate-fade-in">
        <header className="mb-10 pb-6 border-b border-slate-800">
           <div className="flex items-center gap-4 text-emerald-500 mb-2">
              <span className="p-2 bg-emerald-500/10 rounded-lg">{activeSection.icon}</span>
              <span className="text-sm font-bold uppercase tracking-widest">Категория</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
             {activeSection.title}
           </h1>
        </header>
        
        <div className="prose prose-invert prose-emerald max-w-none">
          {activeSection.content}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default ContentArea;
