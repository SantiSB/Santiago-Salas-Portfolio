import { motion } from "framer-motion";

const ScrollArrows = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-10, 0, 10]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.3
          }}
          className="text-2xl text-gray-400"
        >
          ↓
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollArrows; 