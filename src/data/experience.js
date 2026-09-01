/**
 * Career timeline: jobs only, chronological, levels 01 → 04.
 * PASSTIX lives in `work.js` as an own product — deliberately not part of this
 * employment history.
 *
 * Keep each entry compact: 2–3 bullets and 6–8 representative capabilities.
 * The full technology inventory belongs to the capabilities view.
 */
export const EXPERIENCE = [
  {
    id: "sgc",
    level: "01",
    levelLabel: { en: "Foundations", es: "Fundamentos" },
    company: "Servicio Geológico Colombiano",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    dates: { en: "Mar 2020 – Nov 2021", es: "Marzo 2020 – Noviembre 2021" },
    concept: {
      en: "Learning to build frontend products from scratch.",
      es: "Aprendí a construir productos frontend desde cero.",
    },
    bullets: [
      {
        en: "Built the public earthquake and volcano viewers from scratch, with interactive maps and detail views.",
        es: "Construí desde cero los visores públicos de sismos y volcanes, con mapas interactivos y vistas detalladas.",
      },
      {
        en: "Made large volumes of geoscientific data navigable through search, filters, sorting, charts and tables.",
        es: "Hice navegables grandes volúmenes de información geocientífica mediante búsqueda, filtros, ordenamiento, gráficas y tablas.",
      },
      {
        en: "Developed a historical catalog and contributed to modules of the institutional portal.",
        es: "Desarrollé un catalogador histórico y contribuí a módulos del portal institucional.",
      },
    ],
    unlocked: [
      "React",
      "JavaScript",
      "Redux",
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
    level: "02",
    levelLabel: { en: "Technical depth", es: "Profundidad técnica" },
    company: "LinkedAI",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    dates: { en: "Nov 2022 – Feb 2024", es: "Noviembre 2022 – Febrero 2024" },
    concept: {
      en: "From displaying information to building specialized graphic tools.",
      es: "Pasé de mostrar información a construir herramientas gráficas especializadas.",
    },
    bullets: [
      {
        en: "Built interactive annotation, segmentation and object editing tools on HTML Canvas for computer vision datasets.",
        es: "Construí herramientas interactivas de anotación, segmentación y edición de objetos sobre HTML Canvas para datasets de visión computacional.",
      },
      {
        en: "Handled complex state across projects, datasets, images and review flows at scale.",
        es: "Manejé estados complejos entre proyectos, datasets, imágenes y flujos de revisión a escala.",
      },
      {
        en: "Contributed to AI-assisted labeling features and to the platform's testing culture.",
        es: "Participé en funcionalidades de etiquetado asistido por IA y en la cultura de testing de la plataforma.",
      },
    ],
    unlocked: [
      "React",
      "Redux",
      "HTML Canvas",
      "GraphQL",
      "Jest",
      "React Testing Library",
      "AWS",
      { en: "Computer vision", es: "Visión computacional" },
    ],
    // No external CTA: the public LinkedAI site is no longer available
    links: [],
    relatedWork: "linkedai",
  },
  {
    id: "57blocks",
    level: "03",
    levelLabel: { en: "Adaptability + AI", es: "Adaptabilidad + IA" },
    company: "57Blocks",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    dates: { en: "May 2024 – May 2025", es: "Mayo 2024 – Mayo 2025" },
    clients: {
      en: "Presidium Residential · IndyCar Series",
      es: "Presidium Residential · IndyCar Series",
    },
    concept: {
      en: "Learning to enter unfamiliar domains and turn ideas into solutions.",
      es: "Aprendí a entrar en dominios nuevos y convertir ideas en soluciones.",
    },
    bullets: [
      {
        en: "Worked across several products for international clients: web, mobile and conversion-oriented experiences for massive-scale events.",
        es: "Trabajé en varios productos para clientes internacionales: web, móvil y experiencias orientadas a conversión para eventos de alcance masivo.",
      },
      {
        en: "Entered unfamiliar domains with little prior context, and learned Flutter to contribute to mobile applications.",
        es: "Entré en dominios nuevos con poco contexto previo y aprendí Flutter para contribuir a aplicaciones móviles.",
      },
      {
        en: "Took part in technical and architecture decisions under hexagonal architecture principles, and carried an internal AI initiative from demo to MVP.",
        es: "Participé en decisiones técnicas y de arquitectura bajo principios de arquitectura hexagonal, y llevé una iniciativa interna de IA de demo a MVP.",
      },
    ],
    unlocked: [
      "React",
      "TypeScript",
      "Next.js",
      "Flutter",
      "LLMs",
      "RAG",
      "Dify",
      "n8n",
    ],
    links: [{ href: "https://www.57blocks.com/" }],
    relatedWork: "ai-project-management",
  },
  {
    id: "apptega",
    level: "04",
    levelLabel: { en: "Enterprise complexity", es: "Complejidad enterprise" },
    company: "Cafeto Software / Apptega",
    role: { en: "Senior Frontend Developer", es: "Senior Frontend Developer" },
    dates: { en: "May 2025 – Aug 2026", es: "Mayo 2025 – Agosto 2026" },
    concept: {
      en: "Evolving a platform that thousands of customers use every day, without stopping it.",
      es: "Evolucionar una plataforma que miles de clientes usan cada día, sin detenerla.",
    },
    bullets: [
      {
        en: "Progressive modernization of a cybersecurity and compliance SaaS platform, with Angular legacy and new React modules.",
        es: "Modernización progresiva de una plataforma SaaS de ciberseguridad y cumplimiento, con legado Angular y nuevos módulos React.",
      },
      {
        en: "Worked inside a multi-repository, dockerized ecosystem with shared packages and independent services.",
        es: "Trabajé dentro de un ecosistema multi-repositorio y dockerizado, con paquetes y servicios compartidos.",
      },
      {
        en: "Contributed to design systems, testing, estimations and technical decisions alongside international teams.",
        es: "Participé en sistemas de diseño, testing, estimaciones y decisiones técnicas junto a equipos internacionales.",
      },
    ],
    unlocked: [
      "React",
      "TypeScript",
      "Docker",
      "Testing",
      { en: "Design Systems", es: "Design Systems" },
      "Multi-repo",
      "Bounded Contexts",
      "Claude",
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
