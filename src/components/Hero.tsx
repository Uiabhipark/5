import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <h1 className="font-sans text-7xl md:text-8xl font-bold tracking-tighter text-black mb-8 leading-[0.95] text-balance">
            Your Smile.<br />
            Perfected.
          </h1>
          <p className="text-lg md:text-xl text-gray-muted max-w-lg mb-10 leading-relaxed text-balance">
            Next-generation dental precision meets boutique care. Experience clinical excellence wrapped in refined elegance.
          </p>

          <div className="flex flex-wrap gap-12 mb-12">
            {[
              { label: "Transformations", value: "1,200+" },
              { label: "Excellence", value: "15Y" },
              { label: "Rating", value: "4.9" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold text-black">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-muted">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="group relative px-8 py-4 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-2xl active:scale-95">
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,#0d9488_50%,transparent_75%,transparent_100%)]" />
              </div>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border border-black/5">
            <img 
              src="https://picsum.photos/seed/dental-hero/800/1000" 
              alt="Premium Dental Care" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Teal Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>


      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black/20"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Abstract Parallax Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};
