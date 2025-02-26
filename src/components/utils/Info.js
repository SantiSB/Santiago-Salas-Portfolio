import ReactJS from "../../icons/stack/React.astro";
import MaterialUI from "../../icons/stack/MaterialUI.astro";
import Redux from "../../icons/stack/Redux.astro";
import Sass from "../../icons/stack/Sass.astro";
import AstroFramework from "../../icons/stack/AstroFramework.astro";
import GitHub from "../../icons/GitHub.astro";
import GitLab from "../../icons/stack/GitLab.astro";
import JavaScript from "../../icons/stack/JavaScript.astro";
import TypeScript from "../../icons/stack/TypeScript.astro";
import Jest from "../../icons/stack/Jest.astro";
import Vitest from "../../icons/stack/Vitest.astro";
import CSS from "../../icons/stack/CSS.astro";
import HTML from "../../icons/stack/HTML.astro";
import TailwindCSS from "../../icons/stack/TailwindCSS.astro";
import ThreeJS from "../../icons/stack/ThreeJS.astro";
import GraphQL from "../../icons/stack/GraphQL.astro";
import Netlify from "../../icons/stack/Netlify.astro";
import Aws from "../../icons/stack/Aws.astro";

const TAGS = {
  REACT: {
    name: "React.js",
    icon: ReactJS,
  },
  MATERIALUI: {
    name: "Material UI",
    icon: MaterialUI,
  },
  GRAPHQL: {
    name: "GraphQL",
    icon: GraphQL,
  },
  REDUX: {
    name: "Redux",
    icon: Redux,
  },
  SASS: {
    name: "Sass",
    icon: Sass,
  },
  HTML: {
    name: "HTML",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    icon: CSS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TailwindCSS,
  },
  THREE_JS: {
    name: "Three.js",
    icon: ThreeJS,
  },
  ASTRO: {
    name: "Astro",
    icon: AstroFramework,
  },
  AWS: {
    name: "AWS",
    icon: Aws,
  },
  NETLIFY: {
    name: "NETLIFY",
    icon: Netlify,
  },
  GITHUB: {
    name: "GitHub",
    icon: GitHub,
  },
  GITLAB: {
    name: "GitLab",
    icon: GitLab,
  },
  BITBUCKET: {
    name: "Bitbucket",
    icon: "Bitbucket",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScript,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScript,
  },
  JEST: {
    name: "Jest",
    icon: Jest,
  },
  TESTING_LIBRARY: {
    name: "Testing Library",
    icon: "Testing-Library",
  },
  VITEST: {
    name: "Vitest",
    icon: Vitest,
  },
  NEXT_JS: {
    name: "Next.js",
    icon: "Next.js",
  },
};

const PROJECTS = [
  {
    title: "Presidium Solutions",
    description:
      "Developed the website and ROI calculation application for Presidium Solutions, optimizing the interface, SEO strategies, and integrating interactive graphs, PDF generation, and automated email sending to improve customer conversion and financial decision-making.",
    link: "https://www.presidiumresi.com/",
    repo: "",
    image: "/images/projects/sgc.webp",
    tags: [
      // TAGS.NEXTJS,
      // TAGS.REACT,
      // TAGS.TYPESCRIPT,
      // TAGS.REDUX,
      // TAGS.TAILWIND,
      // TAGS.FIREBASE,
      // TAGS.JEST,
      // TAGS.TESTING_LIBRARY,
    ],
  },
  {
    title: "Music City GP",
    description:
      "Contributed to the development of the Music City GP website, an event linked to IndyCar, optimizing the user experience and ticket sales through WordPress development and modular design.",
    link: "https://musiccitygp.com/",
    repo: "",
    // image: "/images/projects/musiccitygp.webp",
    tags: [
      // TAGS.WORDPRESS,
      // TAGS.JAVASCRIPT,
      // TAGS.PHP,
      // TAGS.REDUX,
      // TAGS.TAILWIND,
    ],
  },
  {
    title: "Presidium Solutions Mobile APP",
    description:
      "Worked on evolving the Presidium Solutions mobile application, implementing new features while maintaining stability and usability for an already operational and revenue-generating tool.",
    link: "https://www.presidiumresi.com/",
    repo: "",
    image: "/images/projects/sgc.webp",
    tags: [
      // TAGS.FLUTTER,
      // TAGS.DART,
      // TAGS.FIREBASE,
    ],
  },
  {
    title: "SmartSpecs (AI Project Management System)",
    description:
      "Developing an intelligent system for project management and planning with AI, designed to automate requirement generation, risk estimation, and integration with productivity tools and online meeting platforms.",
    link: "https://santiagosalas.com/smartspecs",
    repo: "",
    image: "/images/projects/sgc.webp",
    tags: [
      // TAGS.NEXTJS,
      // TAGS.REACT,
      // TAGS.TYPESCRIPT,
      // TAGS.REDUX,
      // TAGS.TAILWIND,
      // TAGS.FIREBASE,
      // TAGS.OPENAI,
    ],
  },
  {
    title: "LinkedAI platform",
    description:
      "The LinkedAI platform is the world's fastest at creating training data for computer vision using advanced artificial intelligence tools for image labeling and review.",
    link: "https://platform.linkedai.co/login",
    repo: "",
    image: "/images/projects/linkedai.webp",
    tags: [
      // TAGS.REACT,
      // TAGS.JAVASCRIPT,
      // TAGS.TYPESCRIPT,
      // TAGS.MATERIALUI,
      // TAGS.REDUX,
      // TAGS.GRAPHQL,
      // TAGS.JEST,
      // TAGS.AWS,
    ],
  },
  {
    title: "SGC Earthquake and Volcano Viewer and Website",
    description:
      "Developed the best Earthquake and Volcano Viewer in Latin America for SGC, integrating real-time seismic data, interactive maps, and advanced visualization tools to enhance risk management and geological research.",
    link: "https://sgc.gov.co/sismos",
    repo: "",
    image: "/images/projects/sgc.webp",
    tags: [
      // TAGS.REACT,
      // TAGS.JAVASCRIPT,
      // TAGS.MATERIALUI,
      // TAGS.SASS,
      // TAGS.REDUX,
      // TAGS.AWS,
    ],
  },
  {
    title: "Seismic Activity Catalog",
    description:
      "Developed a seismic activity cataloging system for SGC, handling extensive historical records of earthquakes and volcanoes, improving accessibility for researchers and government entities.",
    link: "https://sgc.gov.co/",
    repo: "",
    image: "/images/projects/sgc.webp",
    tags: [
      // TAGS.REACT,
      // TAGS.JAVASCRIPT,
      // TAGS.MATERIALUI,
      // TAGS.REDUX,
      // TAGS.API_REST,
    ],
  },
];

const EXPERIENCE = [
  {
    date: "May, 2024 – Present",
    title: "57 Blocks",
    description:
      "57 Blocks is a software development firm specializing in building applications, artificial intelligence, and Web3. The company has launched more than 60 products since 2018, collaborating in industries like DeFi, FinTech, AdTech, AgTech, and HealthTech.",
    achievements: [
      "Developed an interactive and optimized website for Presidium Solutions, enhancing SEO and client engagement.",
      "Implemented an ROI calculation application featuring interactive graphs, PDF generation, and automated email dispatch.",
      "Optimized the Music City GP website to improve ticket sales and user experience.",
      "Currently leading the development of an AI-based project management system to enhance productivity and planning.",
    ],
    link: "https://www.57blocks.com/",
    techStack: [
      // TAGS.REACT,
      // // TAGS.NEXTJS,
      // TAGS.TYPESCRIPT,
      // TAGS.REDUX,
      // TAGS.TAILWIND,
      // TAGS.API_REST,
      // TAGS.GRAPHQL,
      // TAGS.JEST,
      // TAGS.TESTING_LIBRARY,
      // // TAGS.FIREBASE,
      // // TAGS.WORDPRESS,
      // // TAGS.FLUTTER,
      // // TAGS.FIGMA,
    ],
  },
  {
    date: "November, 2022 – February, 2024",
    title: "LinkedAI",
    description:
      "LinkedAI is a high-speed platform for AI training data creation, focusing on computer vision and natural language processing. The technology enables precise image annotation, AI-assisted review, and bias reduction.",
    achievements: [
      "Proposed and implemented improvements in system architecture and development workflows, enhancing code maintainability.",
      "Developed advanced modules for image visualization with complex HTML elements, filters, search, and sorting options.",
      "Integrated AI tools for automated image labeling and review, significantly reducing processing time.",
      "Implemented unit and integration testing, improving stability and reducing errors in production.",
    ],
    link: "https://www.linkedai.co/platform",
    techStack: [
      // TAGS.REACT,
      // TAGS.JAVASCRIPT,
      // TAGS.REDUX,
      // TAGS.MATERIALUI,
      // // TAGS.API_REST,
      // TAGS.GRAPHQL,
      // TAGS.JEST,
      // TAGS.TESTING_LIBRARY,
      // TAGS.AWS,
    ],
  },
  {
    date: "March, 2020 – November, 2021",
    title: "Colombian Geological Service (SGC)",
    description:
      "The Colombian Geological Service (SGC) is a government entity focused on geoscientific research, risk management, and natural resource monitoring.",
    achievements: [
      "Developed a real-time Earthquake and Volcano Viewer, incorporating multiple layers of geospatial data.",
      "Integrated real-time seismic data with interactive maps, ensuring precise visualization and analysis.",
      "Optimized system performance to handle large volumes of historical seismic data efficiently.",
      "Led the migration of the styling structure, improving maintainability and scalability of the platform.",
      "Developed a seismic activity cataloging system for government and research use, enhancing data accessibility.",
    ],
    link: "https://www.sgc.gov.co/",
    techStack: [
      // TAGS.REACT,
      // TAGS.JAVASCRIPT,
      // TAGS.REDUX,
      // TAGS.MATERIALUI,
      // TAGS.SASS,
      // // TAGS.API_REST,
      // TAGS.GITLAB,
    ],
  },
];

export { EXPERIENCE, PROJECTS };
