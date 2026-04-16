import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const BackgroundEffects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" ref={containerRef}>
      {/* Professional Gradient Background */}
      <div className="absolute inset-0 bg-professional-gradient opacity-100" />
      
      {/* Teal Light Beam */}
      <motion.div 
        animate={{
          x: [0, 50, 0],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[200px] left-[20%] w-[600px] h-[1000px] bg-[radial-gradient(circle,_rgba(13,148,136,0.15)_0%,_transparent_70%)] rotate-[25deg] blur-[80px]"
      />

      {/* Grid Shimmer (Teal tinted) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,148,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,148,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Cursor-Proximity Glow (Teal) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(13,148,136,0.05)_0%,_transparent_70%)] blur-3xl"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />


      {/* Particle Drift (Simple CSS implementation for performance) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, "-10%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-brand-accent/20 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export const ParallaxShape: React.FC<{ children: React.ReactNode; speed?: number; className?: string }> = ({ children, speed = 0.5, className }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200 * speed]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
