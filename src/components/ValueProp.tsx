import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: "Smiles Transformed", value: "1,200+" },
  { label: "Years of Excellence", value: "15" },
  { label: "Patient Satisfaction", value: "99%" },
  { label: "Same-Day Booking", value: "Available" }
];

export const ValueProp: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-display font-medium text-black/80 max-w-3xl mx-auto leading-tight text-balance"
          >
            "We believe that a visit to the dentist should be as refined as the smile we create."
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass p-8 rounded-3xl text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="text-4xl font-extrabold font-display text-black mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-black/40">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Light Field Beam Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_rgba(0,112,243,0.1)_0%,_transparent_70%)]" />
    </section>
  );
};
