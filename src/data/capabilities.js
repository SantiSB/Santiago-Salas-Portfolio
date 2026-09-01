/**
 * Central capability inventory. This is the single place where the full list of
 * technologies lives — experience and work views only show a representative subset.
 */
export const CAPABILITIES = [
  {
    id: "frontend",
    title: { en: "Frontend Engineering", es: "Frontend Engineering" },
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Angular",
      "Redux / Redux Toolkit",
      "TanStack Query",
      "Vite",
      "Astro",
      { en: "Web Performance", es: "Rendimiento web" },
    ],
  },
  {
    id: "ui",
    title: { en: "UI & Design Systems", es: "UI y sistemas de diseño" },
    items: [
      "Material UI",
      "Tailwind CSS",
      "Storybook",
      "Figma",
      "HTML Canvas",
      "Sass",
      { en: "Responsive Design", es: "Responsive Design" },
    ],
  },
  {
    id: "architecture",
    title: { en: "Architecture", es: "Arquitectura" },
    items: [
      { en: "Frontend Architecture", es: "Arquitectura frontend" },
      { en: "Multi-repository Systems", es: "Sistemas multi-repositorio" },
      "Bounded Contexts",
      { en: "Hexagonal Architecture", es: "Arquitectura hexagonal" },
      "REST APIs",
      "GraphQL",
      { en: "Private npm Packages", es: "Paquetes npm privados" },
      "Docker Compose",
      "Feature Flags",
    ],
  },
  {
    id: "quality",
    title: { en: "Quality", es: "Calidad" },
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Karate",
      { en: "Testing Strategy", es: "Estrategia de testing" },
      { en: "Accessibility", es: "Accesibilidad" },
      { en: "Code Review", es: "Code Review" },
    ],
  },
  {
    id: "ai",
    title: { en: "Applied AI", es: "IA aplicada" },
    items: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      { en: "Vector Databases", es: "Bases vectoriales" },
      { en: "Semantic Search", es: "Búsqueda semántica" },
      "Speech-to-text",
      "Dify",
      "n8n",
    ],
  },
  {
    id: "ai-dev",
    title: {
      en: "AI-Assisted Development",
      es: "Desarrollo asistido por IA",
    },
    items: [
      "Claude",
      "Cursor",
      { en: "Agents", es: "Agentes" },
      "Skills",
      { en: "Code Review", es: "Code Review" },
      "Testing",
      { en: "Documentation", es: "Documentación" },
      { en: "Technical Research", es: "Investigación técnica" },
    ],
  },
  {
    id: "product",
    title: { en: "Product", es: "Producto" },
    items: [
      "Product Discovery",
      { en: "MVP Validation", es: "Validación de MVP" },
      { en: "Requirements", es: "Requerimientos" },
      { en: "Prioritization", es: "Priorización" },
      "UX",
      { en: "Product Strategy", es: "Estrategia de producto" },
    ],
  },
  {
    // Things actually done in a team, never adjectives ("team player", etc.)
    id: "collaboration",
    title: {
      en: "Collaboration & Ownership",
      es: "Colaboración y ownership",
    },
    items: [
      { en: "Stakeholder Alignment", es: "Alineación con stakeholders" },
      { en: "Estimation", es: "Estimación" },
      { en: "Refinement", es: "Refinamiento" },
      { en: "Technical Decisions", es: "Decisiones técnicas" },
      { en: "Demos", es: "Demos" },
      { en: "Cross-functional Work", es: "Trabajo interdisciplinario" },
      { en: "Client Communication", es: "Comunicación con clientes" },
      { en: "End-to-end Delivery", es: "Entrega de punta a punta" },
    ],
  },
];

/** Two ways of working with AI. Kept short: the detail lives in the AI view. */
export const AI_TRACKS = [
  {
    id: "with-ai",
    title: {
      en: "Building products with AI",
      es: "Construir productos con IA",
    },
    body: {
      en: "I turn AI capabilities into features people can actually use inside a digital product.",
      es: "Convierto capacidades de inteligencia artificial en funcionalidades utilizables dentro de productos digitales.",
    },
    items: [
      "LLMs",
      "RAG",
      "Embeddings",
      { en: "Vector databases", es: "Bases vectoriales" },
      { en: "Semantic search", es: "Búsqueda semántica" },
      "Speech-to-text",
      "Workflows",
      "Dify",
      "n8n",
    ],
  },
  {
    id: "using-ai",
    title: {
      en: "Engineering with AI",
      es: "Ingeniería con IA",
    },
    body: {
      en: "I use AI throughout the engineering process to improve research, implementation, testing, documentation and problem-solving.",
      es: "Uso IA a lo largo de todo el proceso de ingeniería para mejorar investigación, implementación, testing, documentación y resolución de problemas.",
    },
    items: [
      "Claude",
      "Cursor",
      { en: "Agents", es: "Agentes" },
      "Skills",
      "Code Review",
      "Testing",
      { en: "Technical research", es: "Investigación técnica" },
    ],
  },
];

/**
 * Condensed version for the home view: three groups, four representative items
 * each. The three are the ones the pillars above them already name — frontend,
 * applied AI and product — so the home tells one story instead of dumping the
 * inventory. No "+N" counter on purpose: a number that isn't clickable reads
 * like a hidden list. The full inventory is one link away.
 */
const HOME_GROUPS = ["frontend", "ai", "product"];

export const CAPABILITIES_SUMMARY = CAPABILITIES.filter((group) =>
  HOME_GROUPS.includes(group.id)
).map((group) => ({
  id: group.id,
  title: group.title,
  items: group.items.slice(0, 4),
}));
