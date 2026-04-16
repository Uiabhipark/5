import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Activity, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive care for your everyday oral health needs.",
    icon: Shield,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, whitening, and more.",
    icon: Sparkles,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Orthodontics",
    description: "Modern aligners and braces for a perfectly aligned smile.",
    icon: Activity,
    color: "bg-teal-500/10 text-teal-600"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Our Expertise</h2>
          <p className="text-gray-muted max-w-xl">Tailored treatments delivered with precision and care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass p-8 rounded-2xl transition-all hover:shadow-xl hover:border-brand-accent/50 cursor-pointer"
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <service.icon size={24} className="stroke-brand-accent" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-sm text-gray-muted mb-6 leading-relaxed">{service.description}</p>
              
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group/link">
                Learn More 
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

