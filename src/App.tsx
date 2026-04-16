/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { BeforeAfter } from './components/BeforeAfter';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-accent selection:text-white bg-professional-gradient">
      <BackgroundEffects />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}


