import React from 'react';
import { Sparkles, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-12 border-t border-border-light bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-muted">Loved by patients at 4.9/5 stars</span>
        </div>

        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-muted">
          © 2024 LUMINA CLINIC. ALL RIGHTS RESERVED.
        </div>

        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-muted">
          PARIS &bull; LONDON &bull; NEW YORK
        </div>
      </div>
    </footer>
  );
};

