export const SITE = {
  // Canonical host. Everything absolute (canonical, hreflang, OG, JSON-LD,
  // sitemap) is derived from this single value, so it must match the variant
  // the CDN actually serves.
  url: "https://www.santiagosalas.com",
  name: "Santiago Salas",
  fullName: "Santiago Salas Bolaños",
  /** Plain job title. Used for structured data and image alt text. */
  role: "Frontend Developer",
  /** Public positioning line: hero, footer, share previews. */
  positioning: {
    en: "Frontend Developer · Product Engineering · Applied AI",
    es: "Frontend Developer · Product Engineering · IA aplicada",
  },
  location: { en: "Colombia · Remote", es: "Colombia · Remoto" },
  email: "a.santiago.salas.b@gmail.com",
  phone: "+573113582648",
  // Percent-encoded: the raw "ñ" is invalid in a URL and structured-data
  // consumers don't normalise it the way a browser address bar does.
  linkedin: "https://www.linkedin.com/in/santiagosalasbola%C3%B1os",
  github: "https://www.github.com/SantiSB/SantiSB",
  // One CV per language, served straight from public/files. The visitor gets
  // the version written in the language they are reading the site in.
  cv: {
    en: "/files/Santiago_Salas_CV_Frontend_Developer_EN_2026_v2.pdf",
    es: "/files/Santiago_Salas_CV_Frontend_Developer_ES_2026_v2.pdf",
  },
  ogImage: "/images/mockups/portfolio.webp",
};

/** Per-view metadata. `path`/`altPath` are resolved from ROUTES in each page. */
export const SEO = {
  home: {
    en: {
      title:
        "Santiago Salas | Frontend Developer · React, TypeScript & Applied AI",
      description:
        "Frontend Developer specialized in React and TypeScript, building digital products, modernizing complex platforms and applying AI to product and engineering.",
    },
    es: {
      title:
        "Santiago Salas | Frontend Developer · React, TypeScript e IA aplicada",
      description:
        "Frontend Developer especializado en React y TypeScript: construyo productos digitales, modernizo plataformas complejas y aplico IA al producto y a la ingeniería.",
    },
  },
  experience: {
    en: {
      title: "Work experience — Santiago Salas | Frontend Developer",
      description:
        "Four stages of a frontend career: public data viewers at the Colombian Geological Survey, computer vision tooling at LinkedAI, applied AI at 57Blocks and enterprise modernization at Apptega.",
    },
    es: {
      title: "Experiencia laboral — Santiago Salas | Frontend Developer",
      description:
        "Cuatro etapas de una carrera frontend: visores públicos en el Servicio Geológico Colombiano, herramientas de visión computacional en LinkedAI, IA aplicada en 57Blocks y modernización enterprise en Apptega.",
    },
  },
  work: {
    en: {
      title: "Featured projects — Santiago Salas | Frontend Developer",
      description:
        "Five problems explored in depth: PASSTIX, an own ticketing product; Apptega, enterprise modernization; an internal AI project assistant; annotation tooling at LinkedAI; and public geoscientific viewers.",
    },
    es: {
      title: "Proyectos destacados — Santiago Salas | Frontend Developer",
      description:
        "Cinco problemas explorados en profundidad: PASSTIX, un producto propio de ticketing; Apptega, modernización enterprise; un asistente interno de proyectos con IA; herramientas de anotación en LinkedAI; y visores geocientíficos públicos.",
    },
  },
  ai: {
    en: {
      title: "Applied AI — Santiago Salas | Frontend Developer",
      description:
        "Two ways of working with AI: building products with LLMs, RAG, embeddings, vector databases and semantic search — and engineering with AI across research, implementation, testing and documentation.",
    },
    es: {
      title: "IA aplicada — Santiago Salas | Frontend Developer",
      description:
        "Dos formas de trabajar con IA: construir productos con LLMs, RAG, embeddings, bases vectoriales y búsqueda semántica, y usar IA en investigación, implementación, testing y documentación.",
    },
  },
  skills: {
    en: {
      title: "Capabilities — Santiago Salas | React, TypeScript, Architecture",
      description:
        "Full capability inventory: frontend engineering, UI and design systems, architecture, quality and performance, applied AI, AI-assisted development, product and ownership.",
    },
    es: {
      title: "Capacidades — Santiago Salas | React, TypeScript, Arquitectura",
      description:
        "Inventario completo de capacidades: frontend engineering, UI y sistemas de diseño, arquitectura, calidad y rendimiento, IA aplicada, desarrollo asistido por IA, producto y ownership.",
    },
  },
};

export const HERO = {
  badge: { en: "Open to opportunities", es: "Abierto a oportunidades" },
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
    en: "React and TypeScript are my craft. I build products from scratch, modernize platforms that can't stop running, and bring AI into both the product and the way it gets built.",
    es: "React y TypeScript son mi oficio. Construyo productos desde cero, modernizo plataformas que no pueden detenerse y llevo la IA tanto al producto como a la forma de construirlo.",
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
      en: "I integrate AI into products and use it to accelerate research, development, testing and problem-solving.",
      es: "Integro IA en los productos y la uso para acelerar investigación, desarrollo, testing y resolución de problemas.",
    },
  },
  {
    key: "product",
    title: { en: "Product", es: "Producto" },
    body: {
      en: "I move from problem discovery and validation to MVP definition, prioritization, delivery and iteration with users.",
      es: "Voy desde el descubrimiento y la validación del problema hasta la definición del MVP, la priorización, la entrega y la iteración con usuarios.",
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
