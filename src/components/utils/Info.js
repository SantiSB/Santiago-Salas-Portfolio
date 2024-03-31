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
    title: "LinkedAI platform",
    description:
      "The LinkedAI platform is the world's fastest at creating training data for computer vision using advanced artificial intelligence tools for image labeling and review.",
    link: "https://platform.linkedai.co/login",
    repo: "",
    image: "/images/projects/linkedai.webp",
    tags: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.TYPESCRIPT,
      TAGS.MATERIALUI,
      TAGS.REDUX,
      TAGS.GRAPHQL,
      TAGS.JEST,
      TAGS.AWS,
    ],
  },
  {
    title: "Viewers and Website SGC",
    description:
      "SGC's quake & volcano viewers, Latin America's leaders, offer geological info on interactive maps with real-time updates for risk management.",
    link: "https://sgc.gov.co/sismos",
    repo: "",
    image: "/images/projects/sgc.webp",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.MATERIALUI, TAGS.SASS, TAGS.REDUX, TAGS.AWS],
  },
  {
    title: "DSTEV Sessions 2°",
    description:
      "Promoting the best electronic music event in Pasto, this landing page offers attractive 3D animations, high speed and performance for a captivating experience.",
    link: "https://master--inquisitive-croquembouche-42d01f.netlify.app/",
    repo: "https://github.com/SantiSB/DSTEV-Sessions-2",
    image: "/images/projects/dstev.webp",
    tags: [
      TAGS.ASTRO,
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.THREE_JS,
      TAGS.NETLIFY,
    ],
  },
];

const EXPERIENCE = [
  {
    date: "November, 2022 – February, 2024",
    title: "LinkedAI",
    description:
      "The leading platform for creating data for AI training in computer vision. Implemented AI techniques for automatic labeling and review of images, improving efficiency and data quality. I developed advanced modules for image management, optimized the usability of the platform, implemented unit tests and raised the quality of the code, ensuring its maintenance and scalability, in addition to participating in the development of the sales page.",
    link: "https://www.linkedai.co/platform",
    techStack: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.MATERIALUI,
      TAGS.REDUX,
      TAGS.GRAPHQL,
      TAGS.JEST,
      TAGS.TESTING_LIBRARY,
    ],
  },
  {
    date: "February, 2022 - September, 2022",
    title: "J&A Real Estate",
    description:
      "At the prominent real estate agency in Nariño, I developed a property cataloging system from scratch, drastically improving the visualization, search and management of properties. This innovation optimized the organization and increased the productivity of agents and administrators, reducing the time dedicated to internal tasks and increasing the company's operational efficiency, consolidating its position as a leader in the sector with a broad portfolio and diversity of services.",
    link: "",
    techStack: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.MATERIALUI,
      TAGS.REDUX,
      TAGS.JEST,
    ],
  },
  {
    date: "March, 2020 - November, 2021",
    title: "Colombian Geological Service (SGC)",
    description:
      "At the SGC, I developed from scratch the best earthquake and volcano viewer in Latin America and various web modules, dramatically improving the management and visualization of seismic data. This innovation elevated the response to natural disasters. I also optimized the site to handle large volumes of data and ensure real-time updates, and created an essential historical seismic cataloging system for researchers and authorities.",
    link: "https://www.sgc.gov.co/",
    techStack: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.MATERIALUI,
      TAGS.SASS,
      TAGS.GRAPHQL,
      TAGS.REDUX,
    ],
  },
  {
    date: "September, 2019 - February, 2020",
    title: "Lobocueros S.A.S",
    description:
      "In this Colombian leather goods store distinguished for its exquisite craftsmanship and leather products of the highest quality. I developed the e-commerce website from scratch with modules such as product catalog, search filter, product detail, shopping cart, secure payment gateway , contact forms, Google Maps API, and responsive design.",
    link: "",
    techStack: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.MATERIALUI,
      TAGS.SASS,
      TAGS.REDUX,
    ],
  },
];

export { EXPERIENCE, PROJECTS };
