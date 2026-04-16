import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Patient since 2022",
    content: "The attention to detail here is unmatched. I've never felt more comfortable at a dental clinic. My new smile is exactly what I wanted.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "Cosmetic Patient",
    content: "Lumina transformed my confidence. The process was seamless, and the results speak for themselves. Highly recommended for anyone seeking quality.",
    rating: 5,
    image: "https://picsum.photos/seed/michael/100/100"
  },
  {
    name: "Emma Rodriguez",
    role: "Orthodontic Patient",
    content: "Incredible experience with my aligners. The team is professional, and the clinic environment is so calming. It feels more like a spa!",
    rating: 5,
    image: "https://picsum.photos/seed/emma/100/100"
  },
  {
    name: "David Thompson",
    role: "General Patient",
    content: "Professionalism at its finest. From the moment you walk in, you know you're in good hands. The technology they use is state-of-the-art.",
    rating: 5,
    image: "https://picsum.photos/seed/david/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-black mb-4">Trusted by Thousands</h2>
          <p className="text-black/50">Real stories from our valued patients.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[32px] transition-all hover:bg-white hover:shadow-2xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-black/70 mb-8 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-sm text-black">{t.name}</div>
                  <div className="text-xs text-black/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Parallax Abstract Shapes */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"
      />
    </section>
  );
};
