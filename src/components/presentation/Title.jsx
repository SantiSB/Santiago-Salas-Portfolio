import { motion } from "framer-motion";
import Badge from "./Badge";

export default function Title() {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-blue-900 dark:text-blue-400 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold flex flex-row items-center gap-x-6 pb-6 lg:pb-10 text-center sm:text-start"
    >
      Hello <motion.span 
              animate={{ rotate: [0, 20, -20, 20, -20, 0] }} 
              transition={{ 
                repeat: Infinity, 
                duration: 0.8,
                repeatDelay: 5,
              }}
            >
              👋
            </motion.span> 
      I'm Santiago
      <a
        className="flex justify-center items-center"
        href="https://www.linkedin.com/in/santiagosalasbolaños"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge>Available to work</Badge>
      </a>
    </motion.h1>
  );
} 