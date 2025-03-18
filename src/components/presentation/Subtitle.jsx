import { motion } from "framer-motion";

export default function Subtitle() {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center gap-2 text-xl lg:text-2xl text-wrap max-w-[700px] min-h-12 text-center mb-6"
    >
      <div className="flex items-center gap-2">
        <span>+5 Years of experience as</span>
        <span className="text-blue-900 dark:text-blue-400 font-bold">
          Bilingual Frontend Developer
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span>specialized on</span>
        <span className="text-blue-900 dark:text-blue-400 font-bold bg-white dark:bg-blue-900/30 px-3 py-1 rounded-full">
          React
        </span>
      </div>
    </motion.h2>
  );
} 