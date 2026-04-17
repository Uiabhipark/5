import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6"
    >
      <div className="glass flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border-b border-black/5 bg-white/40 backdrop-blur-[10px]">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-accent rounded-md" />
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tighter uppercase whitespace-nowrap">Dental Club</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Services', 'Gallery', 'Case Studies', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-muted hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all active:scale-95 whitespace-nowrap">
          Book Now
        </button>
      </div>
    </motion.nav>

  );
};
