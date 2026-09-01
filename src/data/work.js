/**
 * Featured projects — five problems worth exploring in depth, each showing a
 * different kind of complexity. This replaces the old project catalogue on
 * purpose: depth and impact over quantity.
 *
 * `media` is consumed by components/media/Media.astro and accepts:
 *   { type: "image",   src, alt }   // src is an imported asset,
 *                                   // so Astro can resize it
 *   { type: "video",   src, poster, alt }          // short, muted, no autoplay loop by default
 *   { type: "gallery", items: [{ src, alt }] }
 *   { type: "concept", key }                       // own HTML/SVG drawing, never a fake UI
 *   { type: "placeholder" }                        // branded fallback
 *
 * Order of preference: a real, publishable screenshot first; a conceptual
 * drawing second; the neutral placeholder last. Promoting a project to a real
 * screenshot is a one-line change here — no component touches required.
 */
import apptegaShot from "../assets/projects/apptega.webp";
import linkedaiShot from "../assets/projects/linkedai.webp";
import passtixShot from "../assets/projects/passtix.webp";
import sgcShot from "../assets/projects/sgc.webp";

export const WORK = [
  {
    slug: "passtix",
    name: "PASSTIX",
    featured: true,
    kind: { en: "Own product", es: "Creación propia" },
    headline: {
      en: "From a local need to a real product",
      es: "De una necesidad local a un producto real",
    },
    summary: {
      en: "A ticketing and event operations platform I co-founded: validated at real events before building the full product.",
      es: "Una plataforma de ticketing y operación de eventos que cofundé: validada en eventos reales antes de construir el producto completo.",
    },
    role: { en: "Founder & Product Lead", es: "Founder & Product Lead" },
    period: { en: "2025 – Present", es: "2025 – Actualidad" },
    context: {
      en: "Own product · Ticketing & event operations",
      es: "Creación propia · Ticketing y operación de eventos",
    },
    media: {
      type: "image",
      src: passtixShot,
      alt: {
        en: "PASSTIX event page with ticket types and checkout",
        es: "Página de evento de PASSTIX con tipos de entrada y checkout",
      },
    },
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Tailwind CSS",
      "Figma",
    ],
    links: [
      {
        label: { en: "Visit passtix.co", es: "Visitar passtix.co" },
        href: "https://passtix.co",
      },
    ],
    story: [
      {
        key: "context",
        label: { en: "Context", es: "Contexto" },
        body: {
          en: "Event producers needed a way to generate and validate QR codes for their attendees. That concrete need was the starting point of everything else.",
          es: "Los productores de eventos necesitaban generar y validar códigos QR para sus asistentes. Esa necesidad concreta fue el punto de partida de todo lo demás.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "The local events market relied mostly on manual processes or external providers for digital ticket sales and access validation.",
          es: "El mercado local de eventos dependía principalmente de procesos manuales o de proveedores externos para la venta de entradas y la validación de acceso.",
        },
      },
      {
        key: "constraints",
        label: { en: "Constraints", es: "Restricciones" },
        items: [
          {
            en: "A small team and our own resources: no room to build a full platform on a hypothesis.",
            es: "Un equipo pequeño y recursos propios: sin margen para construir una plataforma completa sobre una hipótesis.",
          },
          {
            en: "Real events as the testing ground — access control has to work the first time, in front of a queue.",
            es: "Eventos reales como campo de pruebas: el control de acceso tiene que funcionar a la primera, frente a una fila.",
          },
          {
            en: "Producers and attendees with very different levels of digital familiarity.",
            es: "Productores y asistentes con niveles muy distintos de familiaridad digital.",
          },
        ],
      },
      {
        key: "work",
        label: { en: "The work", es: "El trabajo" },
        items: [
          {
            en: "A first minimal solution: register attendees, generate QR codes, send them and validate them from a phone.",
            es: "Una primera solución mínima: registrar asistentes, generar códigos QR, enviarlos y validarlos desde un teléfono.",
          },
          {
            en: "Validation at real events before investing in a full platform.",
            es: "Validación en eventos reales antes de invertir en una plataforma completa.",
          },
          {
            en: "The MVP: accounts, checkout, payments, ticket generation, QR, access control, event management and reporting.",
            es: "El MVP: usuarios, checkout, pagos, generación de entradas, QR, control de acceso, gestión de eventos y reportes.",
          },
          {
            en: "Iteration with real producers and attendees, plus the sales, access, reporting and settlement processes around the product.",
            es: "Iteración con productores y asistentes reales, además de los procesos de venta, acceso, reportes y liquidaciones alrededor del producto.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Build the smallest thing that proves the need before building the platform.",
            es: "Construir lo más pequeño que demuestre la necesidad antes de construir la plataforma.",
          },
          {
            en: "A stack optimized for speed of iteration over infrastructure ownership: React, TypeScript and Firebase.",
            es: "Un stack optimizado para velocidad de iteración por encima de control de infraestructura: React, TypeScript y Firebase.",
          },
          {
            en: "Design the operation, not only the interface: what happens at the door, in the report and in the settlement.",
            es: "Diseñar la operación, no solo la interfaz: qué pasa en la puerta, en el reporte y en la liquidación.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "A product used at real events, with users, transactions and operation under high demand — and a business model behind it.",
          es: "Un producto utilizado en eventos reales, con usuarios, transacciones y operación bajo alta demanda, y un modelo comercial detrás.",
        },
      },
      {
        key: "learnings",
        label: { en: "Learnings", es: "Aprendizajes" },
        items: [
          {
            en: "Validating early changes what you build: most of the first ideas never made it into the MVP.",
            es: "Validar temprano cambia lo que construyes: la mayoría de las primeras ideas nunca llegaron al MVP.",
          },
          {
            en: "The hardest part of a product is rarely the interface — it's the operation around it.",
            es: "Lo más difícil de un producto rara vez es la interfaz: es la operación a su alrededor.",
          },
        ],
      },
    ],
    seo: {
      en: {
        title: "PASSTIX — from a local need to a real product | Santiago Salas",
        description:
          "How I co-founded PASSTIX: spotting a problem in event ticketing, validating a minimal solution at real events and turning it into a platform with users, transactions and live operation.",
      },
      es: {
        title: "PASSTIX — de una necesidad local a un producto real | Santiago Salas",
        description:
          "Cómo cofundé PASSTIX: detectar un problema en la venta de entradas, validar una solución mínima en eventos reales y convertirla en una plataforma con usuarios, transacciones y operación real.",
      },
    },
  },
  {
    slug: "apptega",
    name: "Apptega",
    kind: { en: "Enterprise platform", es: "Plataforma enterprise" },
    headline: {
      en: "Modernizing an enterprise platform without stopping it",
      es: "Modernizar una plataforma enterprise sin detenerla",
    },
    summary: {
      en: "A mature cybersecurity and compliance SaaS that had to keep evolving while it kept running.",
      es: "Un SaaS maduro de ciberseguridad y cumplimiento que debía seguir evolucionando mientras continuaba operando.",
    },
    role: { en: "Senior Frontend Developer", es: "Senior Frontend Developer" },
    period: { en: "2025 – 2026", es: "2025 – 2026" },
    context: {
      en: "Enterprise SaaS · Cybersecurity & compliance",
      es: "SaaS enterprise · Ciberseguridad y cumplimiento",
    },
    media: {
      type: "image",
      src: apptegaShot,
      alt: {
        en: "Apptega risk management dashboard",
        es: "Dashboard de gestión de riesgos de Apptega",
      },
    },
    tech: [
      "React",
      "TypeScript",
      "Angular",
      "Vite",
      "Material UI",
      "TanStack Query",
      "Storybook",
      "Vitest",
      "Docker Compose",
    ],
    links: [
      {
        label: { en: "Visit apptega.com", es: "Visitar apptega.com" },
        href: "https://www.apptega.com/",
      },
    ],
    story: [
      {
        key: "context",
        label: { en: "Context", es: "Contexto" },
        body: {
          en: "An enterprise SaaS platform for cybersecurity and compliance, already in production and used daily by its customers, going through a progressive modernization.",
          es: "Una plataforma SaaS enterprise de ciberseguridad y cumplimiento, ya en producción y usada a diario por sus clientes, en proceso de modernización progresiva.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "The product had to evolve — new modules, modern interfaces, better foundations — without pausing what customers were already using every day.",
          es: "El producto debía evolucionar (nuevos módulos, interfaces modernas, mejores bases) sin detener lo que los clientes ya usaban cada día.",
        },
      },
      {
        key: "constraints",
        label: { en: "Constraints", es: "Restricciones" },
        items: [
          {
            en: "Angular legacy and new React modules coexisting inside the same product.",
            es: "Legado en Angular y nuevos módulos React conviviendo dentro del mismo producto.",
          },
          {
            en: "A multi-repository, dockerized ecosystem with independent services, shared packages and feature flags.",
            es: "Un ecosistema multi-repositorio y dockerizado, con servicios independientes, paquetes compartidos y feature flags.",
          },
          {
            en: "Technical debt that could not be paid off in one move, and interfaces with very high information density.",
            es: "Deuda técnica que no podía pagarse de una sola vez, e interfaces con una densidad de información muy alta.",
          },
        ],
      },
      {
        key: "work",
        label: { en: "The work", es: "El trabajo" },
        items: [
          {
            en: "Cross-functional frontend work on the main application and on new independent modules.",
            es: "Trabajo frontend transversal sobre la aplicación principal y sobre nuevos módulos independientes.",
          },
          {
            en: "Extending and maintaining the internal design system shared across applications.",
            es: "Ampliar y mantener el sistema de diseño interno compartido entre aplicaciones.",
          },
          {
            en: "Unit, component, integration and functional-flow testing as part of the delivery, not after it.",
            es: "Testing unitario, de componentes, integración y flujos funcionales como parte de la entrega, no después de ella.",
          },
          {
            en: "Refinements, estimations, demos and troubleshooting with product, design, backend, QA and DevOps.",
            es: "Refinamientos, estimaciones, demos y resolución de problemas junto a producto, diseño, backend, QA y DevOps.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Incremental evolution over a full rewrite: new capabilities as modules with clear boundaries.",
            es: "Evolución incremental en lugar de reescritura total: nuevas capacidades como módulos con límites claros.",
          },
          {
            en: "Shared design system and private packages as the way to keep consistency across repositories.",
            es: "Sistema de diseño compartido y paquetes privados como forma de mantener consistencia entre repositorios.",
          },
          {
            en: "Feature flags to decouple delivery from release in a product that can't stop.",
            es: "Feature flags para desacoplar entrega de release en un producto que no puede detenerse.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "A contribution to the transition towards modern frontend experiences inside a platform of high technical and business complexity.",
          es: "Una contribución a la transición hacia experiencias frontend modernas dentro de una plataforma de alta complejidad técnica y de negocio.",
        },
      },
      {
        key: "learnings",
        label: { en: "Learnings", es: "Aprendizajes" },
        items: [
          {
            en: "How to evolve software that is already in production, without stopping the product and without a full rewrite.",
            es: "Cómo evolucionar software que ya está en producción, sin detener el producto y sin una reescritura total.",
          },
          {
            en: "Every decision here is a trade-off between speed, maintainability and continuity — you rarely get all three.",
            es: "Cada decisión aquí es un equilibrio entre velocidad, mantenibilidad y continuidad; rara vez se consiguen las tres.",
          },
        ],
      },
    ],
    seo: {
      en: {
        title: "Apptega — modernizing an enterprise platform | Santiago Salas",
        description:
          "Progressive modernization of a cybersecurity and compliance SaaS: Angular legacy and React modules, multi-repository architecture, Docker, design systems and multi-level testing.",
      },
      es: {
        title: "Apptega — modernizar una plataforma enterprise | Santiago Salas",
        description:
          "Modernización progresiva de un SaaS de ciberseguridad y cumplimiento: legado Angular y módulos React, arquitectura multi-repositorio, Docker, sistemas de diseño y testing multinivel.",
      },
    },
  },
  {
    slug: "ai-project-management",
    name: "AI Project Management Assistant",
    kind: { en: "Internal AI MVP", es: "MVP interno de IA" },
    headline: {
      en: "Applying AI to project management",
      es: "Aplicar IA a la gestión de proyectos",
    },
    summary: {
      en: "An internal innovation MVP that turns meetings into an always-updated project state. Not a finished commercial product.",
      es: "Un MVP interno de innovación que convierte las reuniones en el estado actualizado de un proyecto. No es un producto comercial terminado.",
    },
    role: { en: "Frontend Developer · 57Blocks", es: "Frontend Developer · 57Blocks" },
    period: { en: "2024 – 2025", es: "2024 – 2025" },
    context: {
      en: "Internal innovation MVP · Applied AI",
      es: "MVP interno de innovación · IA aplicada",
    },
    // Internal MVP: the pipeline is the story, so the pipeline is the image.
    media: { type: "concept", key: "ai-flow" },
    tech: [
      "LLMs",
      "Prompt engineering",
      "RAG",
      "Embeddings",
      "Vector databases",
      "Semantic search",
      "Speech-to-text",
      "Dify",
      "n8n",
      "Next.js",
      "Python",
      "FastAPI",
    ],
    links: [],
    story: [
      {
        key: "context",
        label: { en: "Context", es: "Contexto" },
        body: {
          en: "A conceptual demo existed internally, with the potential to become a product that reduced manual documentation and project tracking work.",
          es: "Existía internamente un demo conceptual con potencial de convertirse en un producto que redujera el trabajo manual de documentación y seguimiento de proyectos.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "Project meetings generate decisions, tasks, owners and knowledge that afterwards have to be organized by hand — and often simply get lost.",
          es: "Las reuniones de proyectos generan decisiones, tareas, responsables y conocimiento que después hay que organizar a mano, y que muchas veces simplemente se pierden.",
        },
      },
      {
        key: "constraints",
        label: { en: "Constraints", es: "Restricciones" },
        items: [
          {
            en: "A new domain with no predefined path: the technical solution had to be researched, not just implemented.",
            es: "Un dominio nuevo sin camino predefinido: la solución técnica había que investigarla, no solo implementarla.",
          },
          {
            en: "An internal MVP: enough scope to prove the idea, not to ship a commercial product.",
            es: "Un MVP interno: alcance suficiente para probar la idea, no para lanzar un producto comercial.",
          },
        ],
      },
      {
        key: "work",
        label: { en: "The work", es: "El trabajo" },
        items: [
          {
            en: "Turned the conceptual demo into a working web MVP and helped define the technical solution.",
            es: "Convertí el demo conceptual en un MVP web funcional y ayudé a definir la solución técnica.",
          },
          {
            en: "Designed and integrated AI flows: LLMs, prompt engineering, RAG, embeddings, vector databases, semantic search and contextual memory.",
            es: "Diseñé e integré flujos de IA: LLMs, prompt engineering, RAG, embeddings, bases de datos vectoriales, búsqueda semántica y memoria contextual.",
          },
          {
            en: "Used meeting audio and documents as sources of information through speech-to-text and document processing.",
            es: "Utilicé audio de reuniones y documentos como fuentes de información mediante speech-to-text y procesamiento de documentos.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Orchestrate the AI flows with tooling (Dify, n8n) instead of hard-coding each step, to keep iteration cheap.",
            es: "Orquestar los flujos de IA con herramientas (Dify, n8n) en lugar de codificar cada paso, para mantener barata la iteración.",
          },
          {
            en: "Retrieval over raw context: embeddings and semantic search instead of pushing everything into the prompt.",
            es: "Recuperación en lugar de contexto crudo: embeddings y búsqueda semántica en vez de meter todo en el prompt.",
          },
          {
            en: "Keep the human in the loop — the system proposes, the team decides.",
            es: "Mantener a la persona en el ciclo: el sistema propone, el equipo decide.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "A functional base for a product able to turn meetings into useful operational knowledge — an internal MVP with commercial potential, not a finished product.",
          es: "Una base funcional para un producto capaz de convertir reuniones en conocimiento operativo útil: un MVP interno con potencial comercial, no un producto terminado.",
        },
      },
      {
        key: "learnings",
        label: { en: "Learnings", es: "Aprendizajes" },
        items: [
          {
            en: "Working with AI is mostly product work: the hard part is deciding what the model should be trusted with.",
            es: "Trabajar con IA es sobre todo trabajo de producto: lo difícil es decidir qué se le puede confiar al modelo.",
          },
          {
            en: "Autonomy in an undefined problem is a skill of its own — research, decide, build, discard.",
            es: "La autonomía en un problema indefinido es una habilidad en sí misma: investigar, decidir, construir, descartar.",
          },
        ],
      },
    ],
    seo: {
      en: {
        title: "AI Project Management Assistant — applied AI | Santiago Salas",
        description:
          "An internal AI MVP that uses meetings to keep a project's state up to date: LLMs, RAG, embeddings, vector databases, semantic search and speech-to-text.",
      },
      es: {
        title: "AI Project Management Assistant — IA aplicada | Santiago Salas",
        description:
          "Un MVP interno de IA que usa las reuniones para mantener actualizado el estado de un proyecto: LLMs, RAG, embeddings, bases vectoriales, búsqueda semántica y speech-to-text.",
      },
    },
  },
  {
    slug: "linkedai",
    name: "LinkedAI",
    kind: { en: "Product platform", es: "Plataforma de producto" },
    headline: {
      en: "Specialized interfaces for AI training data",
      es: "Interfaces especializadas para datos de entrenamiento de IA",
    },
    summary: {
      en: "Graphic tooling to create, annotate, curate and review large image datasets for computer vision.",
      es: "Herramientas gráficas para crear, anotar, curar y revisar grandes datasets de imágenes para visión computacional.",
    },
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    period: { en: "2022 – 2024", es: "2022 – 2024" },
    context: {
      en: "Product platform · Computer vision",
      es: "Plataforma de producto · Visión computacional",
    },
    media: {
      type: "image",
      src: linkedaiShot,
      alt: {
        en: "LinkedAI annotation platform interface",
        es: "Interfaz de la plataforma de anotación de LinkedAI",
      },
    },
    tech: [
      "React",
      "JavaScript",
      "Redux",
      "HTML Canvas",
      "Material UI",
      "GraphQL",
      "Jest",
      "React Testing Library",
      "AWS",
    ],
    // The public LinkedAI platform page is no longer available, so this project
    // lives entirely inside the portfolio.
    links: [],
    story: [
      {
        key: "context",
        label: { en: "Context", es: "Contexto" },
        body: {
          en: "A platform to create and curate training datasets for AI and computer vision models, where the quality of the annotation directly determines the quality of the model.",
          es: "Una plataforma para crear y curar datasets de entrenamiento para modelos de IA y visión computacional, donde la calidad de la anotación determina directamente la calidad del modelo.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "Annotating and reviewing thousands of images requires precise graphic tools that stay responsive — a generic UI is not enough.",
          es: "Anotar y revisar miles de imágenes exige herramientas gráficas precisas que sigan siendo fluidas: una UI genérica no alcanza.",
        },
      },
      {
        key: "constraints",
        label: { en: "Constraints", es: "Restricciones" },
        items: [
          {
            en: "Large data volumes: projects, datasets, images and review states, all interconnected.",
            es: "Grandes volúmenes de datos: proyectos, datasets, imágenes y estados de revisión, todos interconectados.",
          },
          {
            en: "Drawing and editing directly over images, where precision and responsiveness are the product.",
            es: "Dibujar y editar directamente sobre imágenes, donde la precisión y la fluidez son el producto.",
          },
        ],
      },
      {
        key: "work",
        label: { en: "The work", es: "El trabajo" },
        items: [
          {
            en: "Built interactive tools for annotation, segmentation and object editing on top of images using HTML Canvas.",
            es: "Construí herramientas interactivas de anotación, segmentación y edición de objetos sobre imágenes usando HTML Canvas.",
          },
          {
            en: "Handled complex application state across projects, datasets, images and review flows.",
            es: "Manejé estado de aplicación complejo entre proyectos, datasets, imágenes y flujos de revisión.",
          },
          {
            en: "Contributed to AI-assisted labeling features and to unit and integration testing.",
            es: "Participé en funcionalidades de etiquetado asistido por IA y en testing unitario y de integración.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Canvas over DOM for the annotation surface: the only way to keep drawing precise and smooth at scale.",
            es: "Canvas en lugar de DOM para la superficie de anotación: la única forma de mantener el dibujo preciso y fluido a escala.",
          },
          {
            en: "Normalized state so that images, annotations and review status could evolve independently.",
            es: "Estado normalizado para que imágenes, anotaciones y estado de revisión pudieran evolucionar de forma independiente.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "Graphic tooling used in the day-to-day annotation and review flow of datasets that feed computer vision models.",
          es: "Herramientas gráficas usadas en el flujo diario de anotación y revisión de datasets que alimentan modelos de visión computacional.",
        },
      },
      {
        key: "learnings",
        label: { en: "Learnings", es: "Aprendizajes" },
        items: [
          {
            en: "This is where frontend stopped being 'screens' for me and became tooling with real engineering constraints.",
            es: "Aquí el frontend dejó de ser 'pantallas' para mí y pasó a ser herramientas con restricciones reales de ingeniería.",
          },
          {
            en: "My first close contact with how AI products actually get built, from the data side.",
            es: "Mi primer contacto cercano con cómo se construyen realmente los productos de IA, desde el lado de los datos.",
          },
        ],
      },
    ],
    seo: {
      en: {
        title: "LinkedAI — interfaces for AI training data | Santiago Salas",
        description:
          "Interactive annotation and segmentation tooling on HTML Canvas for large computer vision datasets: complex state, large data volumes and AI-assisted labeling.",
      },
      es: {
        title: "LinkedAI — interfaces para datos de entrenamiento de IA | Santiago Salas",
        description:
          "Herramientas interactivas de anotación y segmentación sobre HTML Canvas para grandes datasets de visión computacional: estado complejo, grandes volúmenes de datos y etiquetado asistido por IA.",
      },
    },
  },
{
    slug: "sgc-viewers",
    name: { en: "Seismic & volcanic viewers", es: "Visores sísmicos y volcánicos" },
    kind: { en: "Public product", es: "Producto público" },
    headline: {
      en: "Geoscientific visualization built from zero",
      es: "Visualización geocientífica construida desde cero",
    },
    summary: {
      en: "The public earthquake and volcano viewers of the Colombian Geological Survey: interactive maps and large historical datasets made navigable.",
      es: "Los visores públicos de sismos y volcanes del Servicio Geológico Colombiano: mapas interactivos y grandes históricos de información hechos navegables.",
    },
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    period: { en: "2020 – 2021", es: "2020 – 2021" },
    context: {
      en: "Public product · Geoscientific visualization",
      es: "Producto público · Visualización geocientífica",
    },
    media: {
      type: "image",
      src: sgcShot,
      alt: {
        en: "Seismic activity viewer of the Colombian Geological Survey",
        es: "Visor de actividad sísmica del Servicio Geológico Colombiano",
      },
    },
    tech: [
      "React",
      "JavaScript",
      "Redux",
      "Material UI",
      "Sass",
      "REST APIs",
      { en: "Interactive maps", es: "Mapas interactivos" },
    ],
    links: [
      {
        label: {
          en: "Earthquake & volcano viewer",
          es: "Visor de sismos y volcanes",
        },
        href: "https://www.sgc.gov.co/sismos",
      },
    ],
    story: [
      {
        key: "context",
        label: { en: "Context", es: "Contexto" },
        body: {
          en: "The Colombian Geological Survey monitors seismic and volcanic activity across the country. That information is of public interest, and it needed public interfaces to consult it.",
          es: "El Servicio Geológico Colombiano monitorea la actividad sísmica y volcánica del país. Esa información es de interés público y necesitaba interfaces públicas para consultarla.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "There was no product yet: everything had to be built from scratch, and the data ranged from the latest event of the day to decades of historical records.",
          es: "Todavía no existía producto: había que construirlo todo desde cero, y la información iba desde el último evento del día hasta décadas de registros históricos.",
        },
      },
      {
        key: "constraints",
        label: { en: "Constraints", es: "Restricciones" },
        items: [
          {
            en: "A very wide audience: from citizens checking the last earthquake to researchers querying historical series.",
            es: "Un público muy amplio: desde ciudadanos consultando el último sismo hasta investigadores consultando series históricas.",
          },
          {
            en: "Large data volumes on a map, where every extra rendered layer costs responsiveness.",
            es: "Grandes volúmenes de datos sobre un mapa, donde cada capa adicional renderizada cuesta fluidez.",
          },
          {
            en: "Public, institutional traffic: it has to hold up exactly when an event happens.",
            es: "Tráfico público e institucional: tiene que responder justo cuando ocurre un evento.",
          },
        ],
      },
      {
        key: "work",
        label: { en: "The work", es: "El trabajo" },
        items: [
          {
            en: "Built the earthquake and volcano viewers from scratch, with interactive maps and detail views per event.",
            es: "Construí desde cero los visores de sismos y volcanes, con mapas interactivos y vistas detalladas por evento.",
          },
          {
            en: "Made the data explorable through search, filters, sorting, charts and tables over the same dataset.",
            es: "Hice la información explorable mediante búsqueda, filtros, ordenamiento, gráficas y tablas sobre el mismo conjunto de datos.",
          },
          {
            en: "Developed a historical catalog with search, filtering and pagination over long time series.",
            es: "Desarrollé un catalogador histórico con búsqueda, filtrado y paginación sobre series temporales largas.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "One data model behind several representations — map, chart and table — instead of separate screens with separate logic.",
            es: "Un solo modelo de datos detrás de varias representaciones (mapa, gráfica y tabla) en lugar de pantallas separadas con lógica separada.",
          },
          {
            en: "Filtering and pagination on the data layer, so the map never has to render more than it can handle.",
            es: "Filtrado y paginación en la capa de datos, para que el mapa nunca tenga que renderizar más de lo que puede manejar.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "Public products that expose large amounts of geoscientific information in a way that is navigable and useful for very different kinds of user.",
          es: "Productos públicos que exponen grandes volúmenes de información geocientífica de forma navegable y útil para tipos de usuario muy distintos.",
        },
      },
      {
        key: "learnings",
        label: { en: "Learnings", es: "Aprendizajes" },
        items: [
          {
            en: "My frontend foundations were built here: interface design, state, data handling, performance and reuse, without relying on tooling to think for me.",
            es: "Aquí construí mis fundamentos de frontend: diseño de interfaces, estado, manejo de datos, rendimiento y reutilización, sin depender de herramientas que pensaran por mí.",
          },
          {
            en: "Building something public teaches a different kind of discipline: someone always needs it to work today.",
            es: "Construir algo público enseña otra disciplina: siempre hay alguien que necesita que funcione hoy.",
          },
        ],
      },
    ],
    seo: {
      en: {
        title: "Seismic & volcanic viewers (SGC) — built from zero | Santiago Salas",
        description:
          "Public earthquake and volcano viewers for the Colombian Geological Survey: interactive maps, filters, charts, tables and a historical catalog over large geoscientific datasets.",
      },
      es: {
        title: "Visores sísmicos y volcánicos (SGC) — desde cero | Santiago Salas",
        description:
          "Visores públicos de sismos y volcanes para el Servicio Geológico Colombiano: mapas interactivos, filtros, gráficas, tablas y un catalogador histórico sobre grandes volúmenes de datos geocientíficos.",
      },
    },
  },
];

export const getWork = (slug) => WORK.find((item) => item.slug === slug);

/** Home shows PASSTIX in its own block, so the grid below it shows the rest. */
export const OTHER_WORK = WORK.filter((item) => !item.featured);
