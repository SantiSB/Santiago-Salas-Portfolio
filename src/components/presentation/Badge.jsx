import { motion } from "framer-motion";

export default function Badge({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white text-blue-900 text-sm font-medium transition-all duration-200 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-white/50 dark:hover:bg-blue-900/40"
    >
      {children}
    </motion.span>
  );
} 