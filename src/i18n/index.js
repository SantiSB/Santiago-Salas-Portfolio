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
  { id: "work", label: { en: "Featured projects", es: "Proyectos destacados" } },
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
    downloadCv: { en: "Download CV", es: "Descargar CV" },
    contact: { en: "Contact", es: "Contacto" },
    seeStory: { en: "See the story", es: "Ver historia" },
    seeDetail: { en: "See detail", es: "Ver detalle" },
    seeAllProjects: { en: "See all projects", es: "Ver todos los proyectos" },
    seeFullPath: { en: "See the full path", es: "Ver recorrido completo" },
    seeRelatedProject: {
      en: "See featured project",
      es: "Ver proyecto destacado",
    },
    seeAiProject: { en: "See the AI project", es: "Ver proyecto de IA" },
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
    level: { en: "Level", es: "Nivel" },
    unlocked: { en: "Unlocked", es: "Desbloqueado" },
    ownProduct: { en: "Own product", es: "Creación propia" },
    featuredProjects: {
      en: "Featured projects",
      es: "Proyectos destacados",
    },
    role: { en: "Role", es: "Rol" },
    period: { en: "Period", es: "Periodo" },
    stack: { en: "Technologies", es: "Tecnologías" },
    context: { en: "Context", es: "Contexto" },
    placeholderNote: {
      en: "Screenshot coming soon",
      es: "Captura próximamente",
    },
  },
  home: {
    pillars: {
      title: {
        en: "Frontend is the specialty. Product and AI are the leverage.",
        es: "Frontend es la especialidad. Producto e IA son la palanca.",
      },
    },
    path: {
      eyebrow: { en: "The path", es: "El recorrido" },
      title: {
        en: "Four levels, one direction",
        es: "Cuatro niveles, una dirección",
      },
    },
    own: {
      eyebrow: { en: "Own product", es: "Creación propia" },
    },
    work: {
      eyebrow: { en: "Selection", es: "Selección" },
      title: { en: "Featured projects", es: "Proyectos destacados" },
      hint: {
        en: "Swipe to see more",
        es: "Desliza para ver más",
      },
    },
    ai: {
      eyebrow: { en: "Applied AI", es: "IA aplicada" },
      title: {
        en: "Two ways of working with AI",
        es: "Dos formas de trabajar con IA",
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
      en: "Four stages, each one unlocking a new layer: from building interfaces from scratch to modernizing enterprise systems.",
      es: "Cuatro etapas, cada una desbloqueando una capa nueva: desde construir interfaces desde cero hasta modernizar sistemas enterprise.",
    },
    bridge: {
      en: "From building products for others to creating my own",
      es: "De trabajar en productos a crear uno propio",
    },
    toProjects: {
      en: "Explore the featured projects in depth",
      es: "Explora los proyectos destacados en profundidad",
    },
    process: {
      eyebrow: { en: "Method", es: "Método" },
      title: { en: "How I work", es: "Cómo trabajo" },
    },
  },
  workView: {
    eyebrow: { en: "In depth", es: "En profundidad" },
    title: { en: "Featured projects", es: "Proyectos destacados" },
    intro: {
      en: "Five projects, five kinds of complexity: an own product, an enterprise platform, an internal AI MVP, specialized tooling for computer vision and a public product built from zero.",
      es: "Cinco proyectos y cinco tipos de complejidad: un producto propio, una plataforma enterprise, un MVP interno de IA, herramientas especializadas para visión computacional y un producto público construido desde cero.",
    },
    toExperience: {
      en: "See where each one comes from",
      es: "Mira de dónde viene cada uno",
    },
  },
  aiView: {
    eyebrow: { en: "Applied AI", es: "IA aplicada" },
    title: {
      en: "Two ways of working with AI",
      es: "Dos formas de trabajar con IA",
    },
    intro: {
      en: "I don't position myself as a machine learning researcher. My strength is the layer that turns AI capabilities into usable products — and the one that uses AI to build better software.",
      es: "No me posiciono como investigador de machine learning. Mi fortaleza está en la capa que convierte capacidades de IA en productos utilizables, y en usar IA para construir mejor software.",
    },
  },
  skillsView: {
    eyebrow: { en: "Toolbox", es: "Herramientas" },
    title: { en: "Capabilities", es: "Capacidades" },
    intro: {
      en: "The full inventory, grouped by area. Filter to see what fits what you need.",
      es: "El inventario completo, agrupado por área. Filtra para ver lo que encaja con lo que necesitas.",
    },
    all: { en: "All", es: "Todo" },
    count: { en: "capabilities", es: "capacidades" },
  },
  contact: {
    title: { en: "Let's talk", es: "Hablemos" },
    eyebrow: { en: "New opportunities", es: "Nuevas oportunidades" },
    available: {
      en: "Available for the next challenge",
      es: "Disponible para el siguiente reto",
    },
    body: {
      en: "I'm looking for teams where I can contribute from my experience in frontend, product and applied AI, helping build and evolve high-impact digital products.",
      es: "Busco equipos donde pueda aportar desde mi experiencia en frontend, producto e IA aplicada, participando en la construcción y evolución de productos digitales de alto impacto.",
    },
    roles: {
      en: "Open to remote roles as Senior Frontend Engineer, Frontend Lead, Technical Lead or Product Engineer.",
      es: "Abierto a oportunidades remotas como Senior Frontend Engineer, Frontend Lead, Technical Lead o Product Engineer.",
    },
    email: { en: "Email", es: "Correo" },
    phone: { en: "Phone", es: "Teléfono" },
    close: { en: "Close", es: "Cerrar" },
    openLabel: { en: "Open contact panel", es: "Abrir panel de contacto" },
  },
};
