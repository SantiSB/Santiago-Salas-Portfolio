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

const TAGS = {
  REACT: {
    name: "React.js",
    class: "text-white",
    icon: ReactJS,
  },
  MATERIALUI: {
    name: "Material UI",
    class: "text-white",
    icon: MaterialUI,
  },
  GRAPHQL: {
    name: "GraphQL",
    class: "text-white",
    icon: GraphQL,
  },
  REDUX: {
    name: "Redux",
    class: "text-white",
    icon: Redux,
  },
  SASS: {
    name: "Sass",
    class: "text-white",
    icon: Sass,
  },
  HTML: {
    name: "HTML",
    class: "text-white",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    class: "text-white",
    icon: CSS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "text-white",
    icon: TailwindCSS,
  },
  THREE_JS: {
    name: "Three.js",
    class: "text-white",
    icon: ThreeJS,
  },
  ASTRO: {
    name: "Astro",
    class: "text-white",
    icon: AstroFramework,
  },
  AWS: {
    name: "AWS",
    class: "text-white",
    icon: "Aws",
  },
  GITHUB: {
    name: "GitHub",
    class: "text-white",
    icon: GitHub,
  },
  GITLAB: {
    name: "GitLab",
    class: "text-white",
    icon: GitLab,
  },
  BITBUCKET: {
    name: "Bitbucket",
    class: "text-white",
    icon: "Bitbucket",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "text-white",
    icon: JavaScript,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "text-white",
    icon: TypeScript,
  },
  JEST: {
    name: "Jest",
    class: "text-white",
    icon: Jest,
  },
  TESTING_LIBRARY: {
    name: "Testing Library",
    class: "text-white",
    icon: "Testing-Library",
  },
  VITEST: {
    name: "Vitest",
    class: "text-white",
    icon: Vitest,
  },
  NEXT_JS: {
    name: "Next.js",
    class: "text-white",
    icon: "Next.js",
  },
};

const PROJECTS = [
  {
    title: "LinkedAI platform",
    description: "The world's fastest computer vision data training platform.",
    link: "https://platform.linkedai.co/login",
    repo: "",
    image: "/images/projects/linkedai.webp",
    tags: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.MATERIALUI,
      TAGS.REDUX,
      TAGS.GRAPHQL,
      TAGS.JEST,
    ],
  },
  {
    title: "Viewers and Website SGC",
    description:
      "The best viewer of earthquakes and volcanoes in Latin America",
    link: "https://sgc.gov.co/sismos",
    repo: "",
    image: "/images/projects/sgc.webp",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MATERIALUI, TAGS.SASS, TAGS.REDUX],
  },
  {
    title: "Lobocueros E-Commerce",
    description:
      "The virtual store of one of the longest-running leather goods stores in Colombia.",
    link: "",
    github: "",
    image: "/images/projects/lobocueros.webp",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.SASS, TAGS.REDUX],
  },
];

const EXPERIENCE = [
  {
    date: "November, 2022 – February, 2024",
    title: "LinkedAI",
    description:
      "Actively involved in developing the fastest global platform for computer vision training data. I enhanced usability and performance, boosting user retention. I integrated advanced AI modules for auto-labeling and precise review of vast image datasets, ensuring unmatched data accuracy. I optimized the source code for better maintenance and scalability. I reduced complexity and implemented unit tests increasing system reliability. Additionally, i worked on the company's landing pages reinforced online presence and user accessibility, further solidifying market position.",
    link: "https://www.linkedai.co/platform",
    techStack: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MATERIALUI, TAGS.GRAPHQL, TAGS.REDUX, TAGS.JEST, TAGS.TESTING_LIBRARY],
  },
  {
    date: "February, 2022 - September, 2022",
    title: "J&A Real Estate",
    description:
      "I created a unique property cataloging system, facilitating an intuitive and effective filtered search. This development has allowed the company's employees to improve their organization and productivity significantly. Reducing the time needed to complete internal tasks has improved operational efficiency. This advance represents a notable change in how the company manages and accesses property information, marking a before and after in its internal processes.",
    link: "",
    techStack: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MATERIALUI, TAGS.REDUX, TAGS.JEST],
  },
  {
    date: "March, 2020 - November, 2021",
    title: "Colombian Geological Service (SGC)",
    description:
      "I developed the SGC earthquake and volcano viewer, the leader in Latin America, from scratch, capable of offering interactive seismological and volcanic data in real time. I made the layout and usability and adaptability improvements of the design. Optimized performance to support millions of data and users, creating an effective platform for geological emergencies. I contributed to a seismic activity search engine, increasing earthquake prevention in Colombia, and developed modules for the SGC website, expanding access to key services and information from the Ministry of Mines and Energy.",
    link: "https://www.sgc.gov.co/",
    techStack: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MATERIALUI, TAGS.SASS, TAGS.GRAPHQL, TAGS.REDUX],
  },
  {
    date: "September, 2019 - February, 2020",
    title: "Lobocueros S.A.S",
    description:
      "I led the creation of an e-commerce for a long-standing Colombian leather goods store, offering an interactive catalog with filters and pagination, product details, and a shopping cart functionality with a secure payment gateway. This project, designed to adapt to any device, improves the online shopping experience, highlighting the tradition and quality of the brand.",
    link: "",
    techStack: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MATERIALUI, TAGS.SASS, TAGS.GRAPHQL, TAGS.REDUX],
  },
];

export { EXPERIENCE, PROJECTS };
