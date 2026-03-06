import React from 'react';
import { SECTIONS } from '../constants';
import { Section } from '../types';

interface SidebarProps {
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  isOpen: boolean;
  closeMobileMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSectionId, onSelectSection, isOpen, closeMobileMenu }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobileMenu}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 w-72 bg-slate-900 border-r border-slate-800 z-30 transform transition-transform duration-300 md:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo / Header */}
          <div className="mb-10 flex items-center gap-3 px-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg tracking-tight">MineGuide</h1>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Server Wiki</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {SECTIONS.map((section: Section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSelectSection(section.id);
                  closeMobileMenu();
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${activeSectionId === section.id 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100 border border-transparent'
                  }`}
              >
                <span className={`${activeSectionId === section.id ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                  {section.icon}
                </span>
                {section.title}
              </button>
            ))}
          </nav>

          {/* Footer Area */}
          <div className="mt-auto pt-6 border-t border-slate-800 text-center md:text-left">
            <p className="text-xs text-slate-600">
              © 2024 Minecraft Server.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
