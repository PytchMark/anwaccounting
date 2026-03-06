import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const logoUrl = 'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1772770679/ChatGPT_Image_Mar_5_2026_11_17_41_PM_anl8wc.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="MoneyUp Consulting logo" className="w-8 h-8 rounded-lg object-cover ring-1 ring-white/20" />
              <span className="text-xl font-bold text-white tracking-tight">MoneyUp Consulting</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing customized bookkeeping, payroll, and taxation services with honesty and integrity since inception.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Bookkeeping</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Payroll Outsourcing</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Business Registration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Schedule Call</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Concierge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
                <span>Kingston, Jamaica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                <span>(876) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-500 shrink-0" />
                <span>info@anwaccounting.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MoneyUp Consulting. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
