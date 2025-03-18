import { motion } from "framer-motion";

export default function Subtitle() {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-xl lg:text-2xl text-wrap max-w-[700px] min-h-12"
    >
      <span className="">4+ Years of experience as</span>
      <span className="text-blue-900 dark:text-blue-400 font-bold"> Frontend Developer </span>
      <span className="">specialized on</span>
      <span className="text-blue-900 dark:text-blue-400 font-bold"> React</span>
    </motion.h2>
  );
} 