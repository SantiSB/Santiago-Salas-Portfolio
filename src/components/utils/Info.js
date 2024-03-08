import ReactJS from "../../icons/stack/React.astro";
import MaterialUI from "../../icons/stack/MaterialUI.astro";

const TAGS = {
  REACT: {
    name: "React.js",
    class: "bg-blue-500 text-white",
    icon: ReactJS,
  },
  MATERIALUI: {
    name: "Material UI",
    class: "bg-blue-700 text-white",
    icon: MaterialUI,
  },
  GRAPHQL: {
    name: "GraphQL",
    class: "bg-pink-500 text-white",
    icon: "GraphQL",
  },
  REDUX: {
    name: "Redux",
    class: "bg-purple-700 text-white",
    icon: "Redux",
  },
  SASS: {
    name: "Sass/CSS",
    class: "bg-pink-300 text-white",
    icon: "Sass",
  },
  HTML: {
    name: "HTML",
    class: "bg-orange-500 text-white",
    icon: "HTML",
  },
  CSS: {
    name: "CSS",
    class: "bg-blue-300 text-white",
    icon: "CSS",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-cyan-500 text-white",
    icon: "Tailwind",
  },
  THREE_JS: {
    name: "Three.js",
    class: "bg-black text-white",
    icon: "Three.js",
  },
  ASTRO: {
    name: "Astro",
    class: "bg-indigo-500 text-white",
    icon: "Astro",
  },
  AWS: {
    name: "AWS",
    class: "bg-orange-400 text-white",
    icon: "Aws",
  },
  GITHUB: {
    name: "GitHub",
    class: "bg-gray-800 text-white",
    icon: "GitHub",
  },
  GITLAB: {
    name: "GitLab",
    class: "bg-orange-600 text-white",
    icon: "GitLab",
  },
  BITBUCKET: {
    name: "Bitbucket",
    class: "bg-blue-800 text-white",
    icon: "Bitbucket",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-yellow-400 text-black",
    icon: "Javascript",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-800 text-white",
    icon: "Typescript",
  },
  JEST: {
    name: "Jest",
    class: "bg-red-500 text-white",
    icon: "Jest",
  },
  TESTING_LIBRARY: {
    name: "Testing Library",
    class: "bg-pink-600 text-white",
    icon: "Testing-Library",
  },
  VITEST: {
    name: "Vitest",
    class: "bg-green-500 text-white",
    icon: "Vitest",
  },
  NEXT_JS: {
    name: "Next.js",
    class: "bg-gray-900 text-white",
    icon: "Next.js",
  },
};

const PROJECTS = [
  {
    title: "Usability Improvement in LinkedAI",
    description:
      "Optimized LinkedAI platform usability with AI for auto image tagging and high-performance viewer development for enhanced user interaction.",
    tecnologia: "React",
    link: "",
    github: "",
    imagen: "/images/projects/linkedai.webp",
    tags: [TAGS.REACT, TAGS.MATERIALUI, TAGS.GRAPHQL, TAGS.REDUX],
  },
  {
    title: "Earthquake and Volcano Visualizer - SGC",
    description:
      "Innovated a seismic and volcanic data viewer for SGC, improving UX and emergency response efficiency with enhanced geological data visualization.",
    tecnologia: "React",
    link: "",
    github: "",
    imagen: "/images/projects/sgc.webp",
    tags: [TAGS.REACT, TAGS.SASS, TAGS.REDUX],
  },
  {
    title: "E-Commerce Development - Lobocueros S.A.S",
    description:
      "Led e-commerce platform creation for Lobocueros, integrating a product catalog, payment process, and responsive design for optimal user engagement.",
    tecnologia: "React",
    link: "",
    github: "",
    imagen: "/images/projects/lobocueros.webp",
    tags: [TAGS.REACT, TAGS.MATERIALUI, TAGS.SASS],
  },
];

const EXPERIENCE = [
  {
    date: "November, 2022 – February, 2024",
    title: "LinkedAI",
    description:
      "Significantly enhanced platform usability focusing on user experience, accessibility, and customization, leading to increased user retention and reduced support costs. Optimized source code for scalability and maintenance, employing best development practices for clean, standardized code. Implemented AI for automated image tagging, reducing processing time. Developed a high-performance tool for interactive viewing and reviewing of large image datasets, improving data reliability and accuracy.",
    link: "",
    techStack: [TAGS.REACT, TAGS.MATERIALUI, TAGS.GRAPHQL, TAGS.REDUX],
  },
  {
    date: "February, 2022 - September, 2022",
    title: "J&A Real Estate",
    description:
      "Designed and developed an intuitive property cataloguing system from scratch, enhancing visualization, search, and filtering capabilities. This innovation significantly boosted organizational efficiency, employee productivity, and reduced task completion times, improving overall operational efficiency.",
    link: "",
    techStack: [TAGS.REACT, TAGS.MATERIALUI, TAGS.GRAPHQL, TAGS.REDUX],
  },
  {
    date: "March, 2020 - November, 2021",
    title: "Colombian Geological Service (SGC)",
    description:
      "Developed an advanced earthquake and volcano viewer from scratch, establishing it as the leading platform in Latin America. Enhanced design and code for better usability, accessibility, and performance, supporting real-time data for millions. Contributed to significant improvements in geological emergency response and public safety.",
    link: "",
    techStack: [TAGS.REACT, TAGS.MATERIALUI, TAGS.GRAPHQL, TAGS.REDUX],
  },
  {
    date: "September, 2019 - February, 2020",
    title: "Lobocueros S.A.S",
    description:
      "Led the design and development of an e-commerce platform from scratch, integrating comprehensive product catalogs, payment solutions, and a user-friendly responsive design. This project significantly enabled online sales and enhanced customer experience across devices.",
    link: "",
    techStack: [TAGS.REACT, TAGS.MATERIALUI, TAGS.GRAPHQL, TAGS.REDUX],
  },
];

export { EXPERIENCE, PROJECTS };
