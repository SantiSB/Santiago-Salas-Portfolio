import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeInOut" } },
};

const ExperienceItem = ({ title, description, date, link, techStack, achievements = [] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div 
      ref={ref}
      variants={cardVariants} 
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"}
      className={`p-8 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg transition-transform ${isInView ? 'border-2 border-gray-400' : ''}`}
    >
      <time className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{date}</time>
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{description}</p>

      {achievements.length > 0 && (
        <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
          {achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {techStack.map((tech, i) => (
          <span key={i} className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs">
            <tech.icon className="w-4 h-4" />
            {tech.name}
          </span>
        ))}
      </div>

      {link && (
        <a href={link} className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition">
          Visit
          <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      )}
    </motion.div>
  );
};

export default ExperienceItem;
