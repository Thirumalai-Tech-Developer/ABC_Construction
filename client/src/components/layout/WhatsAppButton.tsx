import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </motion.a>
  );
}
