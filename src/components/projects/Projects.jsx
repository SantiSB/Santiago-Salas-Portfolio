import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../utils/Info";

const Projects = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      {PROJECTS.map((project, index) => (
        <motion.article 
          key={index} 
          className="transform transition hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <ProjectCard project={project} />
        </motion.article>
      ))}
    </motion.div>
  );
};

export default Projects; 