export const SITE = {
  url: "https://santiagosalas.com",
  name: "Santiago Salas",
  fullName: "Santiago Salas Bolaños",
  role: "Senior Frontend & Product Engineer",
  location: { en: "Colombia · Remote", es: "Colombia · Remoto" },
  email: "a.santiago.salas.b@gmail.com",
  phone: "+573113582648",
  linkedin: "https://www.linkedin.com/in/santiagosalasbolaños",
  github: "https://www.github.com/SantiSB/SantiSB",
  cv: "/files/CV.pdf",
  ogImage: "/images/mockups/portfolio.webp",
};

/** Per-view metadata. `path`/`altPath` are resolved from ROUTES in each page. */
export const SEO = {
  home: {
    en: {
      title:
        "Santiago Salas — Senior Frontend & Product Engineer | React · TypeScript · Applied AI",
      description:
        "Senior Frontend Engineer specialized in React and TypeScript. I build digital products end to end: frontend architecture, design systems, enterprise platforms and applied AI. Remote from Colombia.",
    },
    es: {
      title:
        "Santiago Salas — Senior Frontend & Product Engineer | React · TypeScript · IA aplicada",
      description:
        "Ingeniero frontend senior especializado en React y TypeScript. Construyo productos digitales de principio a fin: arquitectura frontend, sistemas de diseño, plataformas enterprise e inteligencia artificial aplicada. Remoto desde Colombia.",
    },
  },
  experience: {
    en: {
      title: "Work experience — Santiago Salas | Senior Frontend Engineer",
      description:
        "Four stages of a frontend career: public data viewers at the Colombian Geological Survey, computer vision tooling at LinkedAI, applied AI at 57Blocks and enterprise modernization at Apptega.",
    },
    es: {
      title: "Experiencia laboral — Santiago Salas | Senior Frontend Engineer",
      description:
        "Cuatro etapas de una carrera frontend: visores públicos en el Servicio Geológico Colombiano, herramientas de visión computacional en LinkedAI, IA aplicada en 57Blocks y modernización enterprise en Apptega.",
    },
  },
  work: {
    en: {
      title: "Featured projects — Santiago Salas | React & Product Engineer",
      description:
        "Four problems explored in depth: PASSTIX, an own ticketing product; Apptega, enterprise modernization; an internal AI project assistant; and specialized annotation tooling at LinkedAI.",
    },
    es: {
      title: "Proyectos destacados — Santiago Salas | React & Product Engineer",
      description:
        "Cuatro problemas explorados en profundidad: PASSTIX, un producto propio de ticketing; Apptega, modernización enterprise; un asistente interno de proyectos con IA; y herramientas de anotación en LinkedAI.",
    },
  },
  ai: {
    en: {
      title: "Applied AI — Santiago Salas | AI Product Engineer (frontend-first)",
      description:
        "Two ways of working with AI: building products with LLMs, RAG, embeddings, vector databases and semantic search — and building software using AI agents and tooling.",
    },
    es: {
      title: "IA aplicada — Santiago Salas | AI Product Engineer (frontend-first)",
      description:
        "Dos formas de trabajar con IA: construir productos con LLMs, RAG, embeddings, bases vectoriales y búsqueda semántica, y construir software usando agentes y herramientas de IA.",
    },
  },
  skills: {
    en: {
      title: "Capabilities — Santiago Salas | React, TypeScript, Architecture",
      description:
        "Full capability inventory: frontend engineering, UI and design systems, architecture, quality and testing, applied AI, AI-assisted development and product.",
    },
    es: {
      title: "Capacidades — Santiago Salas | React, TypeScript, Arquitectura",
      description:
        "Inventario completo de capacidades: frontend engineering, UI y sistemas de diseño, arquitectura, calidad y testing, IA aplicada, desarrollo asistido por IA y producto.",
    },
  },
};

export const HERO = {
  badge: { en: "Available to work", es: "Disponible para trabajar" },
  stack: [
    "React",
    "TypeScript",
    { en: "Product", es: "Producto" },
    { en: "Applied AI", es: "IA aplicada" },
  ],
  headline: {
    en: "I turn complex problems into digital products people use — and pay for.",
    es: "Convierto problemas complejos en productos digitales que las personas usan y por los que están dispuestas a pagar.",
  },
  support: {
    en: "Frontend engineer specialized in React and TypeScript, building products from scratch, modernizing complex platforms and integrating AI into both products and the development process.",
    es: "Ingeniero frontend especializado en React y TypeScript: construyo productos desde cero, modernizo plataformas complejas e integro IA tanto en el producto como en el proceso de desarrollo.",
  },
};

/** Frontend + AI + Product, deliberately short: three lines, one mobile screen. */
export const PILLARS = [
  {
    key: "frontend",
    title: { en: "Frontend", es: "Frontend" },
    body: {
      en: "My specialty: React, TypeScript, frontend architecture, UI and design systems.",
      es: "Mi especialidad: React, TypeScript, arquitectura frontend, UI y sistemas de diseño.",
    },
  },
  {
    key: "ai",
    title: { en: "Applied AI", es: "IA aplicada" },
    body: {
      en: "I integrate AI into products, and use it to speed up research, development, testing and problem solving.",
      es: "Integro IA en productos y la utilizo para acelerar investigación, desarrollo, testing y resolución de problemas.",
    },
  },
  {
    key: "product",
    title: { en: "Product", es: "Producto" },
    body: {
      en: "I move from problem and validation to MVP, prioritization, building and iterating with users.",
      es: "Me muevo desde el problema y la validación hasta el MVP, priorización, construcción e iteración con usuarios.",
    },
  },
];

/** PASSTIX teaser on the home view — deliberately separate from the job timeline. */
export const OWN_PRODUCT = {
  slug: "passtix",
  label: { en: "Own product", es: "Creación propia" },
  title: "PASSTIX",
  message: {
    en: "I spotted a problem, validated a solution and turned it into a real product.",
    es: "Detecté un problema, validé una solución y la convertí en un producto real.",
  },
  body: {
    en: "It started as a concrete need at real events, was validated with a minimal solution and evolved into a ticketing platform with users, transactions and live operation.",
    es: "Empezó como una necesidad concreta en eventos reales, se validó con una solución mínima y evolucionó hacia una plataforma de ticketing con usuarios, transacciones y operación real.",
  },
  highlights: [
    { en: "Problem & validation", es: "Problema y validación" },
    { en: "MVP & launch", es: "MVP y lanzamiento" },
    { en: "Users & transactions", es: "Usuarios y transacciones" },
  ],
};
