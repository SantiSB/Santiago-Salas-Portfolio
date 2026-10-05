export const SITE = {
  // Canonical host. Everything absolute (canonical, hreflang, OG, JSON-LD,
  // sitemap) is derived from this single value, so it must match the variant
  // the CDN actually serves.
  url: "https://www.santiagosalas.com",
  name: "Santiago Salas",
  fullName: "Santiago Salas Bolaños",
  /** Plain job title. Used for structured data and image alt text. */
  role: "Senior Frontend Engineer",
  /** Public positioning line: hero, footer, share previews. */
  positioning: {
    en: "Senior Frontend Engineer · 7 years of experience",
    es: "Ingeniero Frontend Senior · 7 años de experiencia",
  },
  location: { en: "Colombia · Remote", es: "Colombia · Remoto" },
  email: "a.santiago.salas.b@gmail.com",
  phone: "+573113582648",
  // Percent-encoded: the raw "ñ" is invalid in a URL and structured-data
  // consumers don't normalise it the way a browser address bar does.
  linkedin: "https://www.linkedin.com/in/santiagosalasbola%C3%B1os",
  github: "https://www.github.com/SantiSB/SantiSB",
  // One CV per language, served straight from public/files. The visitor gets
  // the version written in the language they are reading the site in. When a
  // CV is replaced, change the file name too: the CDN caches PDFs by path.
  cv: {
    en: "/files/Santiago_Salas_CV_Senior_Frontend_Engineer_EN.pdf",
    es: "/files/Santiago_Salas_CV_Senior_Frontend_Engineer_ES.pdf",
  },
  /** File name the browser saves the CV as: the visitor sees it, so it names the person and the language. */
  cvDownloadName: {
    en: "Santiago_Salas_Senior_Frontend_Engineer_CV_EN.pdf",
    es: "Santiago_Salas_Ingeniero_Frontend_Senior_CV_ES.pdf",
  },
  ogImage: "/images/og/santiago-salas.png",
};

/** Per-view metadata. `path`/`altPath` are resolved from ROUTES in each page. */
export const SEO = {
  home: {
    en: {
      title:
        "Santiago Salas — Senior Frontend Engineer | Architecture & Applied AI",
      description:
        "Senior Frontend Engineer, 7 years: architecture, state, performance and UX in enterprise SaaS, data-heavy tools and a ticketing product I co-founded. Applied AI.",
    },
    es: {
      title:
        "Santiago Salas — Ingeniero Frontend Senior | Arquitectura e IA aplicada",
      description:
        "Ingeniero Frontend Senior, 7 años: arquitectura, estado, rendimiento y UX en SaaS empresarial, herramientas con muchos datos y un producto de ticketing que cofundé. IA aplicada.",
    },
  },
  experience: {
    en: {
      title: "Experience — Santiago Salas | Senior Frontend Engineer",
      description:
        "Seven years of frontend work: Apptega enterprise SaaS, 57Blocks, LinkedAI annotation tools with SAM and public viewers for the Colombian Geological Survey. Plus PASSTIX.",
    },
    es: {
      title: "Experiencia — Santiago Salas | Ingeniero Frontend Senior",
      description:
        "Siete años de frontend: SaaS empresarial en Apptega, 57Blocks, herramientas de anotación con SAM en LinkedAI y visores públicos del Servicio Geológico Colombiano. Y PASSTIX.",
    },
  },
  work: {
    en: {
      title: "Projects — Santiago Salas | Senior Frontend Engineer",
      description:
        "Five case studies with my scope and decisions explicit: PASSTIX, Apptega, an AI project-management MVP, SAM annotation tooling and public seismic viewers.",
    },
    es: {
      title: "Proyectos — Santiago Salas | Ingeniero Frontend Senior",
      description:
        "Cinco casos con mi alcance y mis decisiones explícitos: PASSTIX, Apptega, un MVP de gestión de proyectos con IA, anotación con SAM y visores sísmicos públicos.",
    },
  },
  ai: {
    en: {
      title: "Applied AI — Santiago Salas | Senior Frontend Engineer",
      description:
        "AI inside products (Dify workflows at 57Blocks, SAM at LinkedAI) and AI in my engineering with Claude Code and Cursor. A frontend engineer, not an ML researcher.",
    },
    es: {
      title: "IA aplicada — Santiago Salas | Ingeniero Frontend Senior",
      description:
        "IA dentro de productos (flujos Dify en 57Blocks, SAM en LinkedAI) e IA en mi ingeniería con Claude Code y Cursor. Ingeniero frontend, no investigador de ML.",
    },
  },
  skills: {
    en: {
      title: "Capabilities — Santiago Salas | Frontend Architecture & State",
      description:
        "Capabilities by specialty, each with where I applied it: frontend architecture and state, performance, design systems, quality, product and applied AI.",
    },
    es: {
      title: "Capacidades — Santiago Salas | Arquitectura frontend y estado",
      description:
        "Capacidades por especialidad, cada una con dónde la apliqué: arquitectura frontend y estado, rendimiento, sistemas de diseño, calidad, producto e IA aplicada.",
    },
  },
};

export const HERO = {
  badge: { en: "Open to opportunities", es: "Abierto a oportunidades" },
  // Specialties, not just the stack: React and TypeScript are the tools, these
  // are what the work is actually about.
  stack: [
    { en: "Frontend architecture", es: "Arquitectura frontend" },
    { en: "State management", es: "Gestión de estado" },
    { en: "Performance", es: "Rendimiento" },
    { en: "UX & product", es: "UX y producto" },
    { en: "Applied AI", es: "IA aplicada" },
  ],
  headline: {
    en: "I build and evolve complex frontends: data-dense, legacy-bound and used in production.",
    es: "Construyo y evoluciono frontends complejos: con mucha información, código legado y usuarios reales en producción.",
  },
  support: {
    en: "Seven years across enterprise SaaS, scientific data, computer vision and a ticketing product I co-founded. I own frontend architecture, state, performance and UX, and I work with AI both inside products and in how I engineer.",
    es: "Siete años en SaaS empresarial, datos científicos, visión computacional y un producto de ticketing que cofundé. Me hago cargo de la arquitectura frontend, el estado, el rendimiento y la experiencia, y trabajo con IA tanto dentro de los productos como en mi forma de desarrollar.",
  },
};

/** Specialty first, then what widens it: three lines, one mobile screen. */
export const PILLARS = [
  {
    key: "architecture",
    title: { en: "Architecture & state", es: "Arquitectura y estado" },
    body: {
      en: "Modular React and TypeScript applications, shared components and complex state, including inside legacy and multi-repository systems.",
      es: "Aplicaciones modulares en React y TypeScript, componentes compartidos y estado complejo, también dentro de sistemas legados y multirrepositorio.",
    },
  },
  {
    key: "performance",
    title: { en: "Performance & quality", es: "Rendimiento y calidad" },
    body: {
      en: "Interfaces that stay responsive over large datasets and image sets, backed by unit, component and integration tests.",
      es: "Interfaces que se mantienen fluidas con grandes volúmenes de datos e imágenes, respaldadas por pruebas unitarias, de componentes y de integración.",
    },
  },
  {
    key: "product-ai",
    title: { en: "Product & AI", es: "Producto e IA" },
    body: {
      en: "From validating a problem to live operation, and AI both integrated into products and used in my engineering work.",
      es: "Desde validar un problema hasta la operación real, y la IA tanto integrada en productos como usada en mi trabajo de ingeniería.",
    },
  },
];

/** PASSTIX teaser on the home view — deliberately separate from the job timeline. */
export const OWN_PRODUCT = {
  slug: "passtix",
  label: { en: "Co-founded product", es: "Producto cofundado" },
  title: "PASSTIX",
  message: {
    en: "A ticketing platform I co-founded, from problem validation to live events.",
    es: "Una plataforma de ticketing que cofundé, desde la validación del problema hasta eventos reales.",
  },
  body: {
    en: "I lead the product experience and the frontend; my co-founder owns the backend. The work covers the digital product and the real operation around it: sales, QR access, reports and settlements with organizers and attendees.",
    es: "Lidero la experiencia de producto y el frontend; mi cofundador se encarga del backend. El trabajo abarca el producto digital y la operación real a su alrededor: venta, acceso por QR, reportes y liquidaciones con organizadores y asistentes.",
  },
  highlights: [
    { en: "Validation & MVP", es: "Validación y MVP" },
    { en: "UX & frontend", es: "UX y frontend" },
    { en: "Live operation", es: "Operación real" },
  ],
};
