import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "../utils/Info";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Experience = () => {
  return (
    <motion.ol 
      initial="hidden" 
      animate="visible" 
      className="relative mt-4 space-y-12"
    >
      {EXPERIENCE.map((experience, index) => (
        <motion.li 
          key={index} 
          variants={itemVariants} 
          className="mb-10 ml-6 relative"
        >
          <ExperienceItem {...experience} />
        </motion.li>
      ))}
    </motion.ol>
  );
};

export default Experience;
