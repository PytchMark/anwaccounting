import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { ShieldCheck, TrendingUp, Clock, Award } from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

export default function Hero() {
  const rotatingPhrases = useMemo(() => [
    'Built for Growth.',
    'Designed for Profit.',
    'Engineered for Clarity.'
  ], []);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = rotatingPhrases[phraseIndex];
    const isPhraseDone = typedText === currentPhrase;
    const isPhraseCleared = typedText.length === 0;

    let timeoutMs = isDeleting ? 45 : 90;
    if (!isDeleting && isPhraseDone) timeoutMs = 1400;
    if (isDeleting && isPhraseCleared) timeoutMs = 250;

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isPhraseDone) {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      } else if (!isDeleting && isPhraseDone) {
        setIsDeleting(true);
      } else if (isDeleting && !isPhraseCleared) {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
      }
    }, timeoutMs);

    return () => window.clearTimeout(timer);
  }, [isDeleting, phraseIndex, rotatingPhrases, typedText]);

  const words = 'We handle your bookkeeping, taxes, and compliance so you can focus on scaling your business.'.split(' ');

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{ x: [0, -35, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-sky-50 rounded-full">
              Trusted Accounting Partners
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 font-display leading-tight">
              Expert Accounting <br />
              <span className="text-blue-700 inline-flex items-center min-h-[1.2em]">
                {typedText}
                <span className="ml-1 inline-block h-[1em] w-[2px] bg-blue-700 animate-pulse" aria-hidden="true" />
              </span>
            </h1>
            <motion.p
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.03 } }
              }}
              className="max-w-2xl mx-auto text-base sm:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              {words.map((word, idx) => (
                <motion.span
                  key={`${word}-${idx}`}
                  variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
              <span className="inline-block ml-1">Professional, honest, and precise.</span>
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppCTA className="w-full sm:w-auto text-lg px-8 py-4" />
              <a 
                href="#get-started"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-slate-700 border-2 border-blue-700 hover:bg-sky-50 shadow-lg shadow-blue-700/20 hover:shadow-blue-500/35 transition-all"
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
                <item.icon className="w-6 h-6 text-blue-700" />
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
