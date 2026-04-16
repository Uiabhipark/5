import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="gallery" className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6">Visible Results.</h2>
            <p className="text-white/50 text-lg">See the transformation for yourself. Our cosmetic procedures are designed to enhance your natural beauty with precision.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-full border border-white/10 text-sm font-bold">1,200+ Cases</div>
            <div className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold">Gallery</div>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-[40px] overflow-hidden cursor-ew-resize select-none border border-white/10"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <img 
            src="https://picsum.photos/seed/after/1920/1080" 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://picsum.photos/seed/before/1920/1080?grayscale" 
              alt="Before" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0 w-1 bg-white z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-black/20 rounded-full" />
                <div className="w-1 h-4 bg-black/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-8 left-8 z-30 px-4 py-2 glass rounded-full text-xs font-bold text-black uppercase tracking-widest">Before</div>
          <div className="absolute bottom-8 right-8 z-30 px-4 py-2 glass rounded-full text-xs font-bold text-black uppercase tracking-widest">After</div>
        </div>
      </div>
    </section>
  );
};
