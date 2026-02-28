import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppCTA({ 
  message = "Hi ANW Accounting, I'd like to learn more about your services.",
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
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#22c35e] transition-colors ${className}`}
    >
      <MessageSquare className="w-5 h-5" />
      <span>Chat on WhatsApp</span>
    </motion.a>
  );
}
