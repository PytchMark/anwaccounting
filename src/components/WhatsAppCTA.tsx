import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppCTA({ 
  message = "Hi MoneyUp Consulting, I'd like to learn more about your services.",
  className = "" 
}: { 
  message?: string;
  className?: string;
}) {
  const whatsappNumber = "18761234567"; // Placeholder, should be the business number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-700/40 hover:bg-blue-700 hover:shadow-blue-500/60 transition-all border-2 border-sky-400 ${className}`}
    >
      <MessageSquare className="w-5 h-5" />
      <span>Chat on WhatsApp</span>
    </motion.a>
  );
}
