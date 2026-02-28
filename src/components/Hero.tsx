import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Clock, Award } from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Trusted Accounting Partners
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 font-display">
              Expert Accounting <br />
              <span className="text-indigo-600">Built for Growth.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
              We handle your bookkeeping, taxes, and compliance so you can focus on scaling your business. Professional, honest, and precise.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppCTA className="w-full sm:w-auto text-lg px-8 py-4" />
              <a 
                href="#get-started"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12"
          >
            {[
              { icon: ShieldCheck, label: "100% Compliant" },
              { icon: TrendingUp, label: "Growth Focused" },
              { icon: Clock, label: "Real-time Support" },
              { icon: Award, label: "Certified Experts" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6 text-indigo-600" />
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
