/**
 * Capabilities, grouped by specialty. Every group says where it was applied, and
 * every item is something used in real work (see experience.js and work.js).
 * No keyword goes in without evidence there, and no adjectives ("team player").
 *
 * Order matters twice: groups run from the core specialty outwards, and items
 * run from the most representative to the least, because the home view shows
 * only the first four of a few groups.
 *
 * `where` is plain company/product names, shared across languages.
 */
export const CAPABILITIES = [
  {
    id: "architecture",
    title: { en: "Architecture & state", es: "Arquitectura y estado" },
    summary: {
      en: "Modular React and TypeScript applications, shared components and complex state, inside legacy and multi-repository systems.",
      es: "Aplicaciones modulares en React y TypeScript, componentes compartidos y estado complejo, dentro de sistemas legados y multirrepositorio.",
    },
    where: ["Apptega", "PASSTIX", "57Blocks"],
    items: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TanStack React Query",
      "Next.js",
      "Angular",
      "Vite",
      { en: "Legacy integration", es: "Integración con código legado" },
      { en: "Hexagonal architecture", es: "Arquitectura hexagonal" },
      "Feature flags",
      { en: "Private npm packages", es: "Paquetes npm privados" },
    ],
  },
  {
    id: "performance",
    title: {
      en: "Performance & data-heavy UI",
      es: "Rendimiento e interfaces con muchos datos",
    },
    summary: {
      en: "Interfaces that stay responsive over large datasets, large image sets and information-dense screens.",
      es: "Interfaces que se mantienen fluidas con grandes datasets, grandes conjuntos de imágenes y pantallas con mucha información.",
    },
    where: ["LinkedAI", "Servicio Geológico Colombiano", "Apptega"],
    items: [
      "HTML Canvas",
      { en: "Interactive maps", es: "Mapas interactivos" },
      { en: "Data visualization", es: "Visualización de datos" },
      { en: "Information-dense interfaces", es: "Interfaces con mucha información" },
      { en: "Query state", es: "Estado de consulta" },
      { en: "REST and GraphQL APIs", es: "APIs REST y GraphQL" },
    ],
  },
  {
    id: "design",
    title: { en: "Design systems & UI", es: "Sistemas de diseño y UI" },
    summary: {
      en: "Reusable components shared across applications, and interfaces that are designed as well as built.",
      es: "Componentes reutilizables compartidos entre aplicaciones, e interfaces que se diseñan además de construirse.",
    },
    where: ["Apptega", "PASSTIX"],
    items: [
      { en: "Design systems", es: "Sistemas de diseño" },
      "Storybook",
      "Material UI",
      "Tailwind CSS",
      "Sass",
      "Framer Motion",
      "Figma",
    ],
  },
  {
    id: "quality",
    title: { en: "Quality", es: "Calidad" },
    summary: {
      en: "Unit, component, integration and functional-flow tests written alongside the feature.",
      es: "Pruebas unitarias, de componentes, de integración y de flujos funcionales escritas junto con la funcionalidad.",
    },
    where: ["Apptega", "LinkedAI", "PASSTIX"],
    items: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Karate",
      { en: "UI and behavior tests", es: "Pruebas de interfaz y comportamiento" },
    ],
  },
  {
    id: "product",
    title: { en: "Product & experience", es: "Producto y experiencia" },
    summary: {
      en: "From validating a problem to defining an MVP, designing the experience and iterating with users.",
      es: "Desde validar un problema hasta definir un MVP, diseñar la experiencia e iterar con usuarios.",
    },
    where: ["PASSTIX", "57Blocks"],
    items: [
      { en: "UX and UI design", es: "Diseño UX y UI" },
      { en: "Problem validation", es: "Validación de problemas" },
      { en: "MVP definition", es: "Definición de MVP" },
      { en: "Prioritization", es: "Priorización" },
    ],
  },
  {
    id: "delivery",
    title: { en: "Collaboration & delivery", es: "Colaboración y entrega" },
    summary: {
      en: "Working with product, design, backend, QA, DevOps, leadership and clients.",
      es: "Trabajo con producto, diseño, backend, QA, DevOps, dirección y clientes.",
    },
    where: ["Apptega", "57Blocks"],
    items: [
      { en: "Requirement refinement", es: "Refinamiento de requerimientos" },
      { en: "Progress demos", es: "Demos de avance" },
      { en: "Client communication", es: "Comunicación con clientes" },
      "Docker Compose",
      "Git",
    ],
  },
  {
    id: "ai-products",
    title: { en: "AI in products", es: "IA en productos" },
    summary: {
      en: "AI workflows and models integrated into product experiences.",
      es: "Flujos de IA y modelos integrados en experiencias de producto.",
    },
    where: ["57Blocks", "LinkedAI"],
    items: [
      { en: "Segment Anything (SAM) integration", es: "Integración de Segment Anything (SAM)" },
      { en: "Dify workflows", es: "Flujos en Dify" },
      { en: "AI workflow design", es: "Diseño de flujos con IA" },
    ],
  },
  {
    id: "ai-engineering",
    title: { en: "AI in engineering", es: "IA en ingeniería" },
    summary: {
      en: "Coding agents as part of my day-to-day work. They speed it up; they don't replace the judgment behind it.",
      es: "Agentes de código como parte de mi trabajo diario. Lo aceleran; no reemplazan el criterio que hay detrás.",
    },
    where: ["Apptega", "PASSTIX", "57Blocks"],
    items: [
      "Claude Code",
      "Cursor",
      { en: "Agent-assisted development", es: "Desarrollo asistido por agentes" },
    ],
  },
];

/**
 * Two kinds of AI work, kept apart. `examples` are the concrete cases (they link
 * to the case study); `items` are chips. The AI view renders both in full; the
 * home view shows only `title` and `body`, so `body` must stand on its own.
 */
export const AI_TRACKS = [
  {
    id: "in-products",
    title: { en: "AI inside products", es: "IA dentro de los productos" },
    body: {
      en: "Models and AI workflows integrated into product experiences I built. My part is the product and the frontend around them, not the model research.",
      es: "Modelos y flujos de IA integrados en experiencias de producto que construí. Mi parte es el producto y el frontend que los rodea, no la investigación del modelo.",
    },
    examples: [
      {
        slug: "ai-project-management",
        eyebrow: "57Blocks",
        title: {
          en: "AI workflows for project documentation, planning and tracking",
          es: "Flujos de IA para documentación, planificación y seguimiento de proyectos",
        },
        body: {
          en: "An application that turns meetings into software-project documentation, planning and tracking. I led its technical planning and initial development, defined its hexagonal architecture, and designed and integrated the Dify workflows for working with documents, generating content and querying project information. It reached an early MVP.",
          es: "Una aplicación que convierte reuniones en documentación, planificación y seguimiento de proyectos de software. Lideré su planificación técnica y desarrollo inicial, definí su arquitectura hexagonal y diseñé e integré los flujos en Dify para trabajar con documentos, generar contenido y consultar información del proyecto. Llegó a un MVP temprano.",
        },
      },
      {
        slug: "linkedai",
        eyebrow: "LinkedAI",
        title: {
          en: "Segment Anything (SAM) in the annotation tools",
          es: "Segment Anything (SAM) en las herramientas de anotación",
        },
        body: {
          en: "I integrated Segment Anything Model into the annotation workflows, so AI-assisted segmentation is part of creating and editing labels in tools I had built on HTML Canvas. My contribution was the integration into the product; I did not research or train the model.",
          es: "Integré Segment Anything Model en los flujos de anotación, de modo que la segmentación asistida por IA forma parte de la creación y edición de etiquetas en herramientas que yo había construido sobre HTML Canvas. Mi aporte fue la integración en el producto; no investigué ni entrené el modelo.",
        },
      },
    ],
    items: [
      { en: "Segment Anything (SAM)", es: "Segment Anything (SAM)" },
      "Dify",
      { en: "AI workflow design", es: "Diseño de flujos con IA" },
      { en: "Model integration", es: "Integración de modelos" },
    ],
  },
  {
    id: "in-engineering",
    title: { en: "AI in my engineering work", es: "IA en mi trabajo de ingeniería" },
    body: {
      en: "Claude Code and Cursor are part of how I build software, notably at Apptega and on PASSTIX. They speed up exploring code, implementing, testing and documenting. They don't replace technical judgment: I frame the problem, review what they produce and answer for the result.",
      es: "Claude Code y Cursor son parte de cómo construyo software, sobre todo en Apptega y en PASSTIX. Aceleran la exploración de código, la implementación, las pruebas y la documentación. No reemplazan el criterio técnico: yo planteo el problema, reviso lo que producen y respondo por el resultado.",
    },
    examples: [],
    items: [
      "Claude Code",
      "Cursor",
      { en: "Agent-assisted development", es: "Desarrollo asistido por agentes" },
    ],
  },
];

/**
 * Condensed version for the home view: the three groups the pillars above it
 * name, four representative items each. No "+N" counter on purpose: a number
 * that isn't clickable reads like a hidden list. The full inventory is one link
 * away.
 */
const HOME_GROUPS = ["architecture", "performance", "ai-products"];

export const CAPABILITIES_SUMMARY = HOME_GROUPS.map((id) =>
  CAPABILITIES.find((group) => group.id === id)
).map((group) => ({
  id: group.id,
  title: group.title,
  items: group.items.slice(0, 4),
}));
