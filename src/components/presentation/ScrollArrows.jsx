import { motion } from "framer-motion";

const ScrollArrows = () => {
  const handleClick = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-end gap-1">
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
            delay: index * 0.2
          }}
          className="text-3xl text-gray-500 cursor-pointer hover:text-gray-700 hover:scale-110"
          onClick={handleClick}
        >
          ⌄
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollArrows; 