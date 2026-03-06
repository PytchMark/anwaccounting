import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

const logoUrl = 'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1772770679/ChatGPT_Image_Mar_5_2026_11_17_41_PM_anl8wc.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="MoneyUp Consulting logo" className="w-10 h-10 rounded-xl object-cover ring-1 ring-blue-900/20" />
            <span className="text-xl font-bold text-slate-900 tracking-tight font-display">MoneyUp Consulting</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Services</a>
            <a href="#get-started" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Pricing</a>
            <WhatsAppCTA className="px-5 py-2.5 text-sm" />
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-4 md:hidden shadow-xl"
        >
          <nav className="flex flex-col gap-4">
            <a href="#" className="p-3 text-slate-600 font-medium">About</a>
            <a href="#services" className="p-3 text-slate-600 font-medium">Services</a>
            <a href="#get-started" className="p-3 text-slate-600 font-medium">Pricing</a>
            <WhatsAppCTA className="w-full" />
          </nav>
        </motion.div>
      )}
    </header>
  );
}
