import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Mail, Phone, ChevronRight } from 'lucide-react';

export const BookingForm: React.FC = () => {
  return (
    <section id="book" className="py-32 px-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-primary p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl text-white">
          {/* Decorative Teal Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/40 rounded-full blur-[40px] opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-2 tracking-tight">Begin Your Journey</h2>
              <p className="text-white/40 text-sm">Same-day consultations available for new patients.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-muted">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Julianne Smith"
                  className="w-full bg-[#171717] border border-[#262626] rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-muted">Service</label>
                  <select className="w-full bg-[#171717] border border-[#262626] rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-all appearance-none cursor-pointer">
                    <option>Cosmetic Dentistry</option>
                    <option>General Checkup</option>
                    <option>Orthodontics</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-muted">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-[#171717] border border-[#262626] rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-muted">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@domain.com"
                  className="w-full bg-[#171717] border border-[#262626] rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-all"
                />
              </div>

              <div className="pt-4">
                <button className="group relative w-full bg-white text-black py-4 rounded-lg font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-2xl active:scale-[0.98]">
                  <span className="relative z-10">Confirm Appointment Request</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,#0d9488_50%,transparent_75%,transparent_100%)]" />
                  </div>
                </button>
              </div>
              
              <p className="text-center mt-6 text-[11px] text-white/40">No pressure. No hidden fees. Just clarity.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

