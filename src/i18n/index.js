export const LANGS = ["en", "es"];
export const DEFAULT_LANG = "en";

/**
 * Resolves a bilingual value `{ en, es }` for the given language.
 * Plain strings pass through, so shared values (names, tech, URLs) stay simple.
 */
export function t(value, lang = DEFAULT_LANG) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value;
  return value[lang] ?? value[DEFAULT_LANG] ?? "";
}

/** Localized routes. Keys are view ids; values are the path per language. */
export const ROUTES = {
  home: { en: "/", es: "/es/" },
  experience: { en: "/experience/", es: "/es/experiencia/" },
  work: { en: "/projects/", es: "/es/proyectos/" },
  ai: { en: "/ai/", es: "/es/ia/" },
  skills: { en: "/skills/", es: "/es/capacidades/" },
};

export const route = (key, lang) => ROUTES[key][lang];

/** Detail view of a featured project. Slugs are shared across languages. */
export const workUrl = (slug, lang) =>
  lang === "es" ? `/es/proyectos/${slug}/` : `/projects/${slug}/`;

export const otherLang = (lang) => (lang === "es" ? "en" : "es");

export const NAV = [
  { id: "home", label: { en: "Home", es: "Inicio" } },
  {
    id: "experience",
    label: { en: "Work experience", es: "Experiencia laboral" },
  },
  { id: "work", label: { en: "Projects", es: "Proyectos" } },
  { id: "ai", label: { en: "AI", es: "IA" } },
];

export const UI = {
  nav: {
    contact: { en: "Contact", es: "Contacto" },
    menu: { en: "Menu", es: "Menú" },
    openMenu: { en: "Open menu", es: "Abrir menú" },
    closeMenu: { en: "Close menu", es: "Cerrar menú" },
    home: { en: "Home", es: "Inicio" },
    back: { en: "Back", es: "Volver" },
    breadcrumb: { en: "Breadcrumb", es: "Ruta de navegación" },
    switchLang: { en: "Ver en español", es: "View in English" },
  },
  actions: {
    seeExperience: { en: "See my experience", es: "Ver mi experiencia" },
    seeProjects: { en: "See projects", es: "Ver proyectos" },
    downloadCv: { en: "Download CV", es: "Descargar CV" },
    contact: { en: "Contact", es: "Contacto" },
    seeStory: { en: "See the story", es: "Ver historia" },
    seeDetail: { en: "See detail", es: "Ver detalle" },
    seeAllProjects: { en: "See all projects", es: "Ver todos los proyectos" },
    seeFullPath: { en: "See the full path", es: "Ver recorrido completo" },
    seeRelatedProject: {
      en: "Read the case study",
      es: "Leer el caso de estudio",
    },
    companySite: { en: "Company site", es: "Sitio de la empresa" },
    moreOnAi: { en: "More on applied AI", es: "Más sobre IA aplicada" },
    allCapabilities: {
      en: "See all capabilities",
      es: "Ver todas las capacidades",
    },
    seeWorkExperience: {
      en: "See my work experience",
      es: "Ver mi experiencia laboral",
    },
    visitSite: { en: "Visit site", es: "Visitar sitio" },
    next: { en: "Next", es: "Siguiente" },
    previous: { en: "Previous", es: "Anterior" },
  },
  labels: {
    // "Stage" rather than "Level": career progression, not a game.
    level: { en: "Stage", es: "Etapa" },
    unlocked: { en: "Key technologies", es: "Tecnologías clave" },
    ownProduct: { en: "Co-founded product", es: "Producto cofundado" },
    featuredProjects: {
      en: "Projects",
      es: "Proyectos",
    },
    role: { en: "Role", es: "Rol" },
    period: { en: "Period", es: "Periodo" },
    stack: { en: "Technologies", es: "Tecnologías" },
    context: { en: "Context", es: "Contexto" },
  },
  home: {
    pillars: {
      title: {
        en: "Frontend engineering is the core. Product and AI widen its reach.",
        es: "La ingeniería frontend es el núcleo. Producto e IA amplían su alcance.",
      },
    },
    path: {
      eyebrow: { en: "Career", es: "Trayectoria" },
      title: { en: "Work experience", es: "Experiencia laboral" },
    },
    work: {
      eyebrow: { en: "Case studies", es: "Casos de estudio" },
      title: { en: "Projects", es: "Proyectos" },
      hint: {
        en: "Swipe to see more",
        es: "Desliza para ver más",
      },
    },
    ai: {
      eyebrow: { en: "Applied AI", es: "IA aplicada" },
      title: {
        en: "AI in products, and AI in my engineering",
        es: "IA en los productos y en mi ingeniería",
      },
    },
    skills: {
      eyebrow: { en: "Toolbox", es: "Herramientas" },
      title: { en: "Capabilities", es: "Capacidades" },
    },
  },
  experienceView: {
    eyebrow: { en: "Career", es: "Trayectoria" },
    title: { en: "Work experience", es: "Experiencia laboral" },
    intro: {
      en: "Four jobs, in order, and PASSTIX alongside them: from public data viewers built from scratch to a full-time seat on an enterprise SaaS platform.",
      es: "Cuatro empleos en orden cronológico y PASSTIX en paralelo: desde visores públicos de datos construidos desde cero hasta un puesto de tiempo completo en una plataforma SaaS empresarial.",
    },
    ventureEyebrow: { en: "Alongside", es: "En paralelo" },
  },
  workView: {
    eyebrow: { en: "Case studies", es: "Casos de estudio" },
    title: { en: "Projects", es: "Proyectos" },
    intro: {
      en: "Five case studies, each with the context, the problem, what was mine to own and the decisions behind it. Team decisions are described as team decisions.",
      es: "Cinco casos de estudio, cada uno con el contexto, el problema, lo que me correspondió y las decisiones detrás. Las decisiones de equipo se describen como tales.",
    },
    toExperience: {
      en: "See where each one comes from",
      es: "Mira de dónde viene cada uno",
    },
  },
  aiView: {
    eyebrow: { en: "Applied AI", es: "IA aplicada" },
    title: {
      en: "AI in products, and AI in my engineering",
      es: "IA en los productos y en mi ingeniería",
    },
    intro: {
      en: "I'm a frontend engineer who integrates models into product experiences and uses coding agents at work. I don't research or train models. Two different things, kept apart here.",
      es: "Soy ingeniero frontend: integro modelos en experiencias de producto y uso agentes de código en mi trabajo. No investigo ni entreno modelos. Son dos cosas distintas y aquí las mantengo separadas.",
    },
  },
  skillsView: {
    eyebrow: { en: "Toolbox", es: "Herramientas" },
    title: { en: "Capabilities", es: "Capacidades" },
    intro: {
      en: "Grouped by specialty, each with where I applied it. Only what I have used in real work.",
      es: "Agrupado por especialidad, cada grupo con el lugar donde lo apliqué. Solo lo que he usado en trabajo real.",
    },
    where: { en: "Applied at", es: "Aplicado en" },
    all: { en: "All", es: "Todo" },
  },
  contact: {
    title: { en: "Let's talk", es: "Hablemos" },
    eyebrow: { en: "New opportunities", es: "Nuevas oportunidades" },
    available: {
      en: "Available for the next challenge",
      es: "Disponible para el siguiente reto",
    },
    body: {
      en: "I'm looking for remote senior frontend roles on complex products, where architecture, state, performance and product judgment matter.",
      es: "Busco roles senior de frontend, en remoto, en productos complejos donde importen la arquitectura, el estado, el rendimiento y el criterio de producto.",
    },
    roles: {
      en: "Senior Frontend Engineer · Frontend Architecture · Product Engineering",
      es: "Senior Frontend Engineer · Arquitectura frontend · Product Engineering",
    },
    email: { en: "Email", es: "Correo" },
    phone: { en: "Phone", es: "Teléfono" },
    close: { en: "Close", es: "Cerrar" },
    openLabel: { en: "Open contact panel", es: "Abrir panel de contacto" },
  },
};
