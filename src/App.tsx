import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadMachine from './components/LeadMachine';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100 selection:text-blue-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-72 h-72 bg-sky-100/60 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -90, 0], y: [0, 70, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl"
        />
      </div>
      <Header />
      
      <main>
        <Hero />
        
        {/* Trust Section */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-10 sm:py-12 bg-slate-50 border-y border-slate-100"
        >
          <div className="max-w-7xl mx-auto px-4 overflow-hidden">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder logos for trust */}
              <span className="text-2xl font-bold tracking-tighter">FINANCE.CO</span>
              <span className="text-2xl font-bold tracking-tighter">TRUSTBANK</span>
              <span className="text-2xl font-bold tracking-tighter">SECURETAX</span>
              <span className="text-2xl font-bold tracking-tighter">GLOBALCORP</span>
              <span className="text-2xl font-bold tracking-tighter">STARTUP.IO</span>
            </div>
          </div>
        </motion.section>

        <Services />
        
        {/* Lead Qualification Machine */}
        <LeadMachine />

        {/* Testimonial Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-16 sm:py-24 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-700 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  "MoneyUp Consulting transformed our messy books into a clear roadmap for growth."
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-sky-400 border-2 border-white/20" />
                  <div>
                    <p className="text-white font-bold text-lg">Sarah Jenkins</p>
                    <p className="text-sky-200">CEO, TechFlow Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-16 sm:py-24 bg-slate-50"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to simplify your finances?</h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-10">
              Join hundreds of Jamaican businesses that trust MoneyUp Consulting for their financial success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppCTA className="w-full sm:w-auto text-lg px-10 py-5" />
              <a href="#get-started" className="text-blue-700 font-bold hover:underline">Or get a custom quote first →</a>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-4 bg-white shadow-xl rounded-full text-slate-600 hover:text-blue-700 transition-colors border border-slate-100"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        <WhatsAppCTA className="shadow-2xl" />
      </div>
    </div>
  );
}
