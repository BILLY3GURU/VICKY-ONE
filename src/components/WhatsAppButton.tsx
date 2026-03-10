import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/message/ZIVU5XGXNMIM01`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors duration-300"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </motion.a>
  );
}
