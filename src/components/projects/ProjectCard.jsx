import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the subtle floating animation with a random delay
  const subtleFloatAnimation = {
    y: ["0%", "-1%", "0%", "1%", "0%"], // Subtle vertical movement
    transition: {
      duration: 8, // Longer duration for a slower effect
      ease: "easeInOut",
      repeat: Infinity, // Repeat the animation indefinitely
      repeatType: "mirror", // Reverse the animation direction on repeat
      delay: Math.random() * 2, // Random delay between 0 and 2 seconds
    },
  };

  return (
    <motion.div 
      className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { y: 0 } : subtleFloatAnimation} // Pause floating effect on hover
      whileHover={{ scale: 1.05 }} // Keep the scale effect on hover
    >
      <a href={project.image} className="flex-shrink-0">
        <img className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" src={project.image} alt="" />
      </a>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h5>
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {project.tags?.map((tag, i) => (
            <span key={i} className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full text-xs">
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          {project.link && (
            <a
              href={project.link}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition"
            >
              Visit
              <svg
                className="ml-2 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition"
            >
              Repo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon ml-2"
              >
                <path
                  fill="none"
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 