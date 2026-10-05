/**
 * Career timeline: four jobs, chronological, stages 01 → 04, plus PASSTIX
 * (`VENTURE`) shown after the timeline because it runs alongside the last job
 * instead of following it.
 *
 * Dates and titles mirror the CVs in public/files word for word. If one
 * changes, change the other.
 *
 * Keep each entry compact: 3–4 bullets and 6–8 representative technologies.
 * The grouped inventory belongs to the capabilities view.
 *
 * `summary` is the one-liner the home card shows; `concept` heads the same
 * entry on the experience view, where it introduces the bullets below it.
 */
export const EXPERIENCE = [
  {
    id: "sgc",
    summary: {
      en: "Built the public seismic and volcanic viewers from scratch, from experience definition to frontend.",
      es: "Construí desde cero los visores públicos sísmicos y volcánicos, desde la definición de la experiencia hasta el frontend.",
    },
    level: "01",
    levelLabel: { en: "Public data products", es: "Productos públicos de datos" },
    company: "Servicio Geológico Colombiano",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    dates: { en: "Mar 2020 – Nov 2021", es: "Marzo 2020 – Noviembre 2021" },
    concept: {
      en: "Large geoscience datasets turned into maps, charts and views anyone can read.",
      es: "Grandes datasets geocientíficos convertidos en mapas, gráficas y vistas que cualquiera puede leer.",
    },
    bullets: [
      {
        en: "Built the public seismic and volcanic viewers from scratch, from defining the experience to the frontend implementation: maps, search, filters, tables, charts and detail views.",
        es: "Construí desde cero los visores públicos sísmicos y volcánicos, desde la definición de la experiencia hasta la implementación frontend: mapas, búsquedas, filtros, tablas, gráficas y vistas de detalle.",
      },
      {
        en: "Managed query state and interface performance so exploration stayed responsive across events and historical records.",
        es: "Gestioné el estado de consulta y el rendimiento de la interfaz para que la exploración se mantuviera fluida entre eventos y registros históricos.",
      },
      {
        en: "Built the historical catalog and developed further modules of the institutional portal. The backend was outside my scope.",
        es: "Construí el catálogo histórico y desarrollé otros módulos del portal institucional. El backend quedó fuera de mi alcance.",
      },
    ],
    unlocked: [
      "React",
      "JavaScript",
      "Redux",
      "Material UI",
      "Sass",
      { en: "Interactive maps", es: "Mapas interactivos" },
      { en: "Data visualization", es: "Visualización de datos" },
      "REST APIs",
    ],
    links: [{ href: "https://www.sgc.gov.co/" }],
    relatedWork: "sgc-viewers",
  },
  {
    id: "linkedai",
    summary: {
      en: "Built annotation, segmentation and review tools on HTML Canvas and integrated Segment Anything (SAM).",
      es: "Construí herramientas de anotación, segmentación y revisión sobre HTML Canvas e integré Segment Anything (SAM).",
    },
    level: "02",
    levelLabel: { en: "Specialized tooling", es: "Herramientas especializadas" },
    company: "LinkedAI",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    dates: { en: "Nov 2022 – Feb 2024", es: "Noviembre 2022 – Febrero 2024" },
    concept: {
      en: "Precise graphic interaction and complex state over large image sets.",
      es: "Interacción gráfica precisa y estado complejo sobre grandes conjuntos de imágenes.",
    },
    bullets: [
      {
        en: "Developed image annotation, segmentation and review tools on HTML Canvas: precise editing interactions and complex state for dataset preparation.",
        es: "Desarrollé herramientas de anotación, segmentación y revisión de imágenes sobre HTML Canvas: interacciones de edición precisas y estado complejo para preparar datasets.",
      },
      {
        en: "Built the features to organize projects and image collections and to review large volumes of data, improving responsiveness and the clarity of review flows.",
        es: "Construí las funcionalidades para organizar proyectos y colecciones de imágenes y revisar grandes volúmenes de datos, mejorando la fluidez y la claridad de los flujos de revisión.",
      },
      {
        en: "Integrated Segment Anything Model (SAM) into the annotation workflows, bringing AI-assisted segmentation to label creation and editing.",
        es: "Integré Segment Anything Model (SAM) en los flujos de anotación, incorporando segmentación asistida por IA a la creación y edición de etiquetas.",
      },
    ],
    unlocked: [
      "React",
      "TypeScript",
      "Redux",
      "HTML Canvas",
      "Segment Anything (SAM)",
      "GraphQL",
      "Jest",
      "React Testing Library",
    ],
    // No external CTA: the public LinkedAI site is no longer available
    links: [],
    relatedWork: "linkedai",
  },
  {
    id: "57blocks",
    summary: {
      en: "Led the technical planning and first MVP of an AI app for project documentation; also web, Flutter and event work for client projects.",
      es: "Lideré la planificación técnica y el primer MVP de una app con IA para documentación de proyectos; además, trabajo web, Flutter y de eventos en proyectos de clientes.",
    },
    level: "03",
    levelLabel: { en: "Product & AI", es: "Producto e IA" },
    company: "57Blocks",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    dates: { en: "May 2024 – May 2025", es: "Mayo 2024 – Mayo 2025" },
    clients: {
      en: "Presidium Residential · IndyCar Series",
      es: "Presidium Residential · IndyCar Series",
    },
    concept: {
      en: "From a blank page to a first MVP, and across several client projects.",
      es: "De la página en blanco a un primer MVP, y a través de varios proyectos de clientes.",
    },
    bullets: [
      {
        en: "Led technical planning and initial development of an application for automating software-project documentation, planning and tracking from meetings, using AI workflows. I defined its initial frontend and backend architecture on hexagonal principles and took it to a first MVP.",
        es: "Lideré la planificación técnica y el desarrollo inicial de una aplicación que automatiza la documentación, planificación y seguimiento de proyectos de software a partir de reuniones, mediante flujos de IA. Definí su arquitectura inicial de frontend y backend con principios hexagonales y la llevé a una primera versión de MVP.",
      },
      {
        en: "Designed and integrated the Dify workflows for working with documents, generating content and querying project information.",
        es: "Diseñé e integré los flujos en Dify para trabajar con documentos, generar contenido y consultar información del proyecto.",
      },
      {
        en: "For Presidium Residential: web modules and UI work with the client's marketing and sales teams, plus modules in its existing Flutter app. For an IndyCar Series event: interactive modules, including a mini-game and parts of the ticket purchase flow.",
        es: "Para Presidium Residential: módulos web y trabajo de interfaz con los equipos de marketing y ventas del cliente, además de módulos en su aplicación Flutter existente. Para un evento de IndyCar Series: módulos interactivos, incluidos un minijuego y partes del flujo de compra de entradas.",
      },
    ],
    unlocked: [
      "React",
      "TypeScript",
      "Next.js",
      "Flutter",
      "Dify",
      { en: "Hexagonal architecture", es: "Arquitectura hexagonal" },
    ],
    links: [{ href: "https://www.57blocks.com/" }],
    relatedWork: "ai-project-management",
  },
  {
    id: "apptega",
    summary: {
      en: "Full-time Senior Frontend Developer on an enterprise SaaS platform for a client of Cafeto Software, modernizing it progressively with React next to Angular.",
      es: "Senior Frontend Developer de tiempo completo en una plataforma SaaS empresarial de un cliente de Cafeto Software, modernizándola de forma progresiva con React junto a Angular.",
    },
    level: "04",
    levelLabel: { en: "Enterprise scale", es: "Escala empresarial" },
    company: "Cafeto Software / Apptega",
    role: { en: "Senior Frontend Developer", es: "Senior Frontend Developer" },
    dates: { en: "May 2025 – Aug 2026", es: "Mayo 2025 – Agosto 2026" },
    clients: {
      en: "Full-time assignment to Apptega, an international client",
      es: "Asignación de tiempo completo a Apptega, cliente internacional",
    },
    concept: {
      en: "Evolving a production platform with legacy code, several repositories and many stakeholders.",
      es: "Evolucionar una plataforma en producción con código legado, varios repositorios y muchos interesados.",
    },
    bullets: [
      {
        en: "Developed and evolved assessment, risk and compliance-program modules of Apptega, an enterprise cybersecurity and GRC SaaS: interdependent state, and data retrieval and presentation in information-dense interfaces.",
        es: "Desarrollé y evolucioné módulos de evaluaciones, riesgos y programas de cumplimiento de Apptega, un SaaS empresarial de ciberseguridad y GRC: estado interdependiente y consulta y presentación de datos en interfaces con mucha información.",
      },
      {
        en: "Defined technical solutions and implemented new workflows within the product's progressive modernization, integrating React modules with legacy Angular applications and services. The migration was a team effort; I contributed to it module by module.",
        es: "Definí soluciones técnicas e implementé nuevos flujos dentro de la modernización progresiva del producto, integrando módulos React con aplicaciones y servicios legados en Angular. La migración fue un esfuerzo de equipo; yo contribuí módulo a módulo.",
      },
      {
        en: "Extended reusable components of the design system shared across applications, and wrote UI and behavior tests.",
        es: "Extendí componentes reutilizables del sistema de diseño compartido entre aplicaciones y escribí pruebas de interfaz y de comportamiento.",
      },
      {
        en: "Worked across multiple repositories in a Docker Compose environment with private npm packages and feature flags, and coordinated cross-module changes to keep the experience coherent. Worked with product, design, backend, QA, DevOps, sales, leadership and clients.",
        es: "Trabajé en varios repositorios dentro de un entorno con Docker Compose, paquetes npm privados y feature flags, y coordiné cambios entre módulos para mantener una experiencia coherente. Colaboré con producto, diseño, backend, QA, DevOps, ventas, dirección y clientes.",
      },
    ],
    unlocked: [
      "React",
      "TypeScript",
      "Angular",
      "TanStack React Query",
      "Material UI",
      "Storybook",
      "Vitest",
      "Docker Compose",
    ],
    // Two sites here: Cafeto is the employer, Apptega the product worked on.
    // Cafeto has no /en/ route — its root is the English version.
    links: [
      {
        label: "Cafeto Software",
        href: {
          en: "https://cafetosoftware.com/",
          es: "https://cafetosoftware.com/es/outsourced-software-development-company-nearshore-outsourcing-espanol/",
        },
      },
      { label: "Apptega", href: "https://www.apptega.com/" },
    ],
    relatedWork: "apptega",
  },
];

/**
 * PASSTIX. Not part of the employment chain: it is a co-founded product, so it
 * gets its own card after the timeline. The CV states "launched in 2025" and
 * nothing more precise, so that is all this card says. A start date or an
 * end date must come from Santiago, not from this file.
 */
export const VENTURE = {
  id: "passtix",
  summary: {
    en: "Co-founder. Product experience and frontend of a ticketing platform used at live events.",
    es: "Cofundador. Experiencia de producto y frontend de una plataforma de ticketing usada en eventos reales.",
  },
  levelLabel: { en: "Co-founded product", es: "Producto cofundado" },
  company: "PASSTIX",
  role: {
    en: "Frontend Engineer and Co-founder",
    es: "Ingeniero Frontend y Cofundador",
  },
  dates: { en: "Launched in 2025", es: "Lanzamiento: 2025" },
  concept: {
    en: "From problem validation to a platform operating at live events.",
    es: "De la validación del problema a una plataforma operando en eventos reales.",
  },
  bullets: [
    {
      en: "Co-founded and launched a ticketing platform, taking it from problem validation and MVP to online sales and access operations with real buyers and organizers.",
      es: "Cofundé y lancé una plataforma de ticketing, desde la validación del problema y el MVP hasta las ventas digitales y la operación de acceso con compradores y organizadores reales.",
    },
    {
      en: "Designed the experience and built the frontend for checkout, event management, ticket issuance and QR access validation, carrying interface decisions from prototype to live operation.",
      es: "Diseñé la experiencia y desarrollé el frontend de compra, gestión de eventos, emisión de entradas y validación de acceso por QR, llevando las decisiones de interfaz del prototipo a la operación real.",
    },
    {
      en: "Defined and prioritized features from organizer and attendee needs, coordinating delivery with my co-founder, who owns the backend.",
      es: "Definí y prioricé funcionalidades según las necesidades de organizadores y asistentes, y coordiné la entrega con mi cofundador, quien se encarga del backend.",
    },
  ],
  unlocked: [
    "React",
    "TypeScript",
    "Redux Toolkit",
    "TanStack React Query",
    "Firebase",
    "Tailwind CSS",
    "Figma",
  ],
  links: [{ label: "passtix.co", href: "https://passtix.co" }],
  relatedWork: "passtix",
};
