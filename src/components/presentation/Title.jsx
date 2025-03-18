import { motion } from "framer-motion";

function Badge({ children }) {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
      {children}
    </span>
  );
}

export default function Title() {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-blue-900 dark:text-blue-400 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 text-center sm:text-start"
    >
      Hello 👋 I'm Santiago
      <a
        className="flex justify-center items-center min-w-36"
        href="https://www.linkedin.com/in/santiagosalasbolaños"
        target="_blank"
      >
        <Badge>Available to work</Badge>
      </a>
    </motion.h1>
  );
} 