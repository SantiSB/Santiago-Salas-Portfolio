const TAGS = {
  REACT: {
    name: "React.js",
  },
  MATERIALUI: {
    name: "Material UI",
  },
  GRAPHQL: {
    name: "GraphQL",
  },
  REDUX: {
    name: "Redux",
  },
  SASS: {
    name: "Sass",
  },
  HTML: {
    name: "HTML",
  },
  CSS: {
    name: "CSS",
  },
  TAILWIND: {
    name: "Tailwind CSS",
  },
  THREE_JS: {
    name: "Three.js",
  },
  ASTRO: {
    name: "Astro",
  },
  AWS: {
    name: "AWS",
  },
  NETLIFY: {
    name: "NETLIFY",
  },
  GITHUB: {
    name: "GitHub",
  },
  GITLAB: {
    name: "GitLab",
  },
  BITBUCKET: {
    name: "Bitbucket",
  },
  JAVASCRIPT: {
    name: "JavaScript",
  },
  TYPESCRIPT: {
    name: "TypeScript",
  },
  JEST: {
    name: "Jest",
  },
  TESTING_LIBRARY: {
    name: "Testing Library",
  },
  VITEST: {
    name: "Vitest",
  },
  NEXT_JS: {
    name: "Next.js",
  },
  FLUTTER: {
    name: "Flutter",
  },
  FIGMA: {
    name: "Figma", 
  },
  WORDPRESS: {
    name: "WordPress",
  },
  FIREBASE: {
    name: "Firebase",
  },
  REST_API: {
    name: "Rest API",
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
    title: "Frontend Developer at 57Blocks 🚀",
    date: "May 2024 – Present",
    companyLink: "https://www.57blocks.com/",
    description:
      "57Blocks is a firm specializing in the development of digital products for startups and large companies. They have launched more than 60 technological solutions in different sectors, collaborating with companies looking to scale their high-impact products.\n\n" +
      "🌍 Work with International Teams:\n" +
      "- 🤝 Actively participated in meetings with clients and global teams.\n" +
      "- 🗣️ Effectively communicated in English to discuss technical solutions, present ideas, and coordinate implementations.",
    projectsAndContributions: [
      {
        name: "Presidium Solutions 💼",
        details: [
          "🎨 Designed and developed the website, optimizing customer acquisition with an attractive interface and SEO strategies.",
          "📊 Implemented an ROI calculation application with graph generation and PDF export, as well as email integration to improve user experience and customer conversion.",
        ],
      },
      {
        name: "Music City GP (IndyCar Event) 🏎️",
        details: [
          "🌐 Contributed to the development of the event website, improving the user experience with key WordPress modules.",
          "🎟️ Optimized the event's visibility and facilitated ticket purchases through improvements to the site's interface and performance.",
        ],
      },
      {
        name: "Presidium Solutions Mobile App 📱",
        details: [
          "⚙️ Implemented new features in the mobile app developed in Flutter, improving its stability and usability without affecting its operation.",
          "💰 Contributed to the evolution of a revenue-generating tool, ensuring a better user experience.",
        ],
      },
      {
        name: "Intelligent Project Management System (AI) 🤖",
        details: [
          "🛠️ Developed an AI-based platform to optimize project planning and management.",
          "📌 Improved requirements generation and organization, time estimates, and risk analysis.",
          "🔗 Automated task structuring and integration with productivity tools, AI-powered automatic transcription, and online meeting platforms.",
        ],
      },
    ],
    techStack: [
      TAGS.NEXT_JS,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.REDUX,
      TAGS.TAILWIND,
      TAGS.FIREBASE,
      TAGS.WORDPRESS,
      TAGS.FLUTTER,
      TAGS.FIGMA,
      TAGS.REST_API,
      TAGS.GRAPHQL,
    ],
  },
  {
    title: "Frontend Developer at LinkedAI 🤖",
    date: "November 2022 – February 2024",
    companyLink: "https://www.linkedai.co/",
    description:
      "LinkedAI is the fastest platform for creating and curating training datasets for artificial intelligence and machine learning models, with a focus on computer vision and natural language processing (NLP). Its technology enables advanced data annotation with high precision, optimizing AI model performance through automated labeling, AI-assisted review, and bias reduction.\n\n" +
      "🌍 Interdisciplinary Collaboration:\n" +
      "- 🔄 Worked closely with backend, design, and marketing teams to ensure an intuitive and accessible user interface aligned with business goals.",
    projectsAndContributions: [
      {
        name: "Architecture and Development Flow Optimization 🏗️",
        details: [
          "📌 Proposed and implemented code organization improvements, standardizing styles and structures to enhance project coherence and maintainability.",
        ],
      },
      {
        name: "Performance and Scalability Enhancements ⚡",
        details: [
          "🔧 Refactored key functions, optimizing code complexity and reducing processing costs.",
        ],
      },
      {
        name: "Advanced Module Development 🖼️",
        details: [
          "🔍 Implemented tools for image visualization and segmentation with advanced filters and sorting options to streamline data review.",
        ],
      },
      {
        name: "AI Integration 🤖",
        details: [
          "🚀 Developed and integrated AI models for automatic image labeling and review, significantly reducing processing time and improving dataset quality.",
        ],
      },
      {
        name: "Testing and System Stability 🧪",
        details: [
          "✅ Implemented unit and integration tests using Jest and Testing Library, increasing system stability and reducing production errors.",
        ],
      },
      {
        name: "Conversion Optimization 📈",
        details: [
          "🎯 Contributed to improving and optimizing LinkedAI's sales page, maximizing customer conversion.",
        ],
      },
    ],
    techStack: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.REDUX,
      TAGS.MATERIALUI,
      TAGS.REST_API,
      TAGS.GRAPHQL,
      TAGS.JEST,
      TAGS.TESTING_LIBRARY,
      TAGS.AWS,
    ],
  },
  {
    title: "Frontend Developer at Servicio Geológico Colombiano 🌎",
    date: "March 2020 – November 2021",
    companyLink: "https://www.sgc.gov.co/",
    description:
      "The Servicio Geológico Colombiano (SGC), under the Ministry of Mines and Energy, leads geoscientific and nuclear research in Colombia, monitoring geological hazards and promoting risk management. As a frontend developer, I was responsible for designing and developing key digital tools for geological data visualization and analysis.",
    projectsAndContributions: [
      {
        name: "Earthquake and Volcano Viewer 🌋",
        details: [
          "🌍 Developed the most advanced earthquake and volcano monitoring tool in Latin America, enabling real-time tracking of seismic and volcanic activity through interactive maps.",
          "🗺️ Implemented dynamic maps with multiple information layers, integrating real-time data and detailed visualizations of each geological event.",
          "⚡ Optimized the processing of large volumes of historical data, improving response speed and ensuring a seamless user experience.",
          "🚀 Ensured system scalability and concurrency, preventing crashes and slowdowns under high-traffic queries.",
          "⚙️ Enhanced website and visualization performance, optimizing load speed and graphical component integration without compromising system stability.",
        ],
      },
      {
        name: "Seismic Activity Catalog 📑",
        details: [
          "📊 Designed and developed a seismic activity catalog system for querying, editing, and filtering historical data, facilitating analysis for researchers and government entities.",
          "🔍 Implemented an optimized interface for efficient searching and visualization of seismic and volcanic data.",
        ],
      },
      {
        name: "SGC Website 🌐",
        details: [
          "🖥️ Contributed to the optimization and development of multiple modules on the SGC website, ensuring a responsive and accessible experience.",
          "🔄 Led the migration and restructuring of style code, improving project maintainability and scalability.",
        ],
      },
    ],
    techStack: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.REDUX,
      TAGS.SASS,
      TAGS.MATERIALUI,
      TAGS.REST_API,
    ],
  },
];

export { EXPERIENCE, PROJECTS };
