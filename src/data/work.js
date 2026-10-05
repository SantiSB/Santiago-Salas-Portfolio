/**
 * Case studies — five problems worth exploring in depth, each showing a
 * different kind of complexity. Depth over quantity.
 *
 * Every `story` has the same five blocks, in this order: context, problem,
 * responsibility (what was mine, and what was not), decisions I can defend, and
 * a result a reader could check. No block exists to repeat another one, and no
 * figure goes in without a source. Dates and titles follow the CVs.
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
    kind: { en: "Co-founded product", es: "Producto cofundado" },
    headline: {
      en: "From problem validation to live events",
      es: "De la validación del problema a eventos reales",
    },
    summary: {
      en: "A ticketing platform I co-founded. I lead the product experience and the frontend; my co-founder owns the backend. It covers the digital product and the real operation around it.",
      es: "Una plataforma de ticketing que cofundé. Lidero la experiencia de producto y el frontend; mi cofundador se encarga del backend. Abarca el producto digital y la operación real a su alrededor.",
    },
    role: {
      en: "Co-founder · Frontend and product experience",
      es: "Cofundador · Frontend y experiencia de producto",
    },
    // The CV says "launched in 2025" and nothing more precise. A start date or
    // an end date has to come from Santiago before it goes here.
    period: { en: "Launched in 2025", es: "Lanzamiento: 2025" },
    context: {
      en: "Co-founded product · Ticketing and event operations",
      es: "Producto cofundado · Ticketing y operación de eventos",
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
      "TanStack React Query",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Vitest",
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
          en: "Selling tickets and controlling access at an event takes more than a checkout page. Buyers need a purchase they can trust, organizers need to know who has paid and who gets in, and someone has to reconcile the money afterwards. My co-founder and I started PASSTIX to cover that whole chain.",
          es: "Vender entradas y controlar el acceso a un evento exige más que una página de pago. Los compradores necesitan una compra en la que confiar, los organizadores necesitan saber quién pagó y quién entra, y alguien tiene que cuadrar el dinero después. Mi cofundador y yo creamos PASSTIX para cubrir toda esa cadena.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "The product only works if the digital side and the physical side agree: a ticket bought online has to be valid at the door, show up correctly in the organizer's report and end in a clean settlement. A good interface on top of a broken operation is not a product.",
          es: "El producto solo funciona si lo digital y lo físico coinciden: una entrada comprada en línea tiene que ser válida en la puerta, aparecer bien en el reporte del organizador y terminar en una liquidación limpia. Una buena interfaz sobre una operación rota no es un producto.",
        },
      },
      {
        key: "responsibility",
        label: { en: "What I owned", es: "Mi responsabilidad" },
        items: [
          {
            en: "Problem validation and MVP definition with my co-founder, with organizers and attendees.",
            es: "La validación del problema y la definición del MVP junto a mi cofundador, con organizadores y asistentes.",
          },
          {
            en: "Product experience and UX, and the whole frontend: checkout, event management, ticket issuance and QR access validation, carried from prototype to live use.",
            es: "La experiencia de producto y la UX, y todo el frontend: compra, gestión de eventos, emisión de entradas y validación de acceso por QR, llevados del prototipo al uso real.",
          },
          {
            en: "Launch and iteration at real events, including the operation around the product: ticket sales, QR, access, reports and settlements.",
            es: "El lanzamiento y la iteración en eventos reales, incluida la operación alrededor del producto: venta de entradas, QR, acceso, reportes y liquidaciones.",
          },
          {
            en: "Not mine: the backend, which my co-founder built and owns. We coordinated delivery between both sides.",
            es: "No es mío: el backend, que construyó y mantiene mi cofundador. Coordinamos la entrega entre ambas partes.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Design the operation together with the interface: the screen that sells a ticket and the one that validates it at the door share the same ticket and the same states.",
            es: "Diseñar la operación junto con la interfaz: la pantalla que vende una entrada y la que la valida en la puerta comparten la misma entrada y los mismos estados.",
          },
          {
            en: "Prioritize features by what organizers and attendees actually needed at an event, not by what was easiest to add.",
            es: "Priorizar funcionalidades según lo que organizadores y asistentes necesitaban realmente en un evento, no según lo más fácil de agregar.",
          },
          {
            en: "A clear split of ownership: UX and frontend on my side, backend on my co-founder's, so each of us could iterate without waiting on the other.",
            es: "Una división clara de responsabilidades: UX y frontend de mi lado, backend del de mi cofundador, para que cada uno pudiera iterar sin esperar al otro.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "PASSTIX is live at passtix.co and has been used at real events, with real buyers and organizers, covering online sales, QR access and the reports and settlements that follow. It was a finalist at Innovapaz 2026 in Nariño, Colombia.",
          es: "PASSTIX está en línea en passtix.co y se ha usado en eventos reales, con compradores y organizadores reales, cubriendo la venta digital, el acceso por QR y los reportes y liquidaciones que siguen. Fue finalista de Innovapaz 2026 en Nariño, Colombia.",
        },
      },
    ],
    seo: {
      en: {
        title: "PASSTIX — ticketing from validation to live events | Santiago Salas",
        description:
          "PASSTIX, a ticketing platform I co-founded: product experience and frontend, from validation and MVP to online sales, QR access and settlements at real events.",
      },
      es: {
        title: "PASSTIX — ticketing, de la validación a eventos reales | Santiago Salas",
        description:
          "PASSTIX, plataforma de ticketing que cofundé: experiencia de producto y frontend, de la validación y el MVP a la venta digital, el acceso por QR y las liquidaciones.",
      },
    },
  },
  {
    slug: "apptega",
    name: "Apptega",
    kind: { en: "Enterprise SaaS", es: "SaaS empresarial" },
    headline: {
      en: "Modernizing an enterprise SaaS, module by module",
      es: "Modernizar un SaaS empresarial, módulo a módulo",
    },
    summary: {
      en: "Senior Frontend Developer, full-time, on Apptega's cybersecurity and GRC platform through Cafeto Software: new React modules growing next to legacy Angular applications.",
      es: "Senior Frontend Developer de tiempo completo en la plataforma de ciberseguridad y GRC de Apptega a través de Cafeto Software: nuevos módulos React creciendo junto a aplicaciones Angular legadas.",
    },
    role: {
      en: "Senior Frontend Developer · Cafeto Software",
      es: "Senior Frontend Developer · Cafeto Software",
    },
    period: { en: "May 2025 – Aug 2026", es: "Mayo 2025 – Agosto 2026" },
    context: {
      en: "Enterprise SaaS · Cybersecurity & GRC",
      es: "SaaS empresarial · Ciberseguridad y GRC",
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
      "TanStack React Query",
      "Material UI",
      "Vite",
      "Storybook",
      "Vitest",
      "Jest",
      "React Testing Library",
      "Karate",
      "Docker Compose",
      "Claude Code",
      "Cursor",
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
          en: "Apptega is an enterprise SaaS platform for cybersecurity and compliance (GRC). Cafeto Software assigned me full-time to this international client. The platform was already in production, with legacy Angular applications, new React modules, several repositories run with Docker Compose, private shared packages and feature flags.",
          es: "Apptega es una plataforma SaaS empresarial de ciberseguridad y cumplimiento (GRC). Cafeto Software me asignó de tiempo completo a este cliente internacional. La plataforma ya estaba en producción, con aplicaciones Angular legadas, nuevos módulos React, varios repositorios con Docker Compose, paquetes privados compartidos y feature flags.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "The product had to keep evolving while customers kept using it. That meant new React experiences living next to Angular code, consistency across repositories, and screens for assessments, risks and compliance programs that show a lot of interdependent information at once.",
          es: "El producto tenía que seguir evolucionando mientras los clientes lo usaban. Eso implicaba nuevas experiencias React conviviendo con código Angular, consistencia entre repositorios y pantallas de evaluaciones, riesgos y programas de cumplimiento que muestran mucha información interdependiente a la vez.",
        },
      },
      {
        key: "responsibility",
        label: { en: "What I owned", es: "Mi responsabilidad" },
        items: [
          {
            en: "Developing and evolving the assessment, risk and compliance-program modules.",
            es: "Desarrollar y evolucionar los módulos de evaluaciones, riesgos y programas de cumplimiento.",
          },
          {
            en: "Defining technical solutions and implementing new workflows, integrating React modules with the legacy Angular applications and services.",
            es: "Definir soluciones técnicas e implementar nuevos flujos, integrando módulos React con las aplicaciones y servicios Angular legados.",
          },
          {
            en: "Interdependent state, and how data is retrieved and presented in information-dense screens.",
            es: "El estado interdependiente y la forma de consultar y presentar datos en pantallas con mucha información.",
          },
          {
            en: "Extending reusable components of the design system shared across applications, and writing UI and behavior tests.",
            es: "Extender componentes reutilizables del sistema de diseño compartido entre aplicaciones y escribir pruebas de interfaz y de comportamiento.",
          },
          {
            en: "Refining requirements, proposing solutions and presenting progress to product, design, backend, QA, DevOps, sales, leadership and clients.",
            es: "Refinar requerimientos, proponer soluciones y presentar avances a producto, diseño, backend, QA, DevOps, ventas, dirección y clientes.",
          },
          {
            en: "Not mine alone: the modernization strategy and architecture decisions were the team's. I proposed and implemented inside them; I did not lead the migration.",
            es: "No es solo mío: la estrategia de modernización y las decisiones de arquitectura fueron del equipo. Propuse e implementé dentro de ellas; no dirigí la migración.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Integrate new React modules into the existing applications instead of replacing screens wholesale, so the product kept running while it changed.",
            es: "Integrar los nuevos módulos React en las aplicaciones existentes en lugar de reemplazar pantallas completas, para que el producto siguiera operando mientras cambiaba.",
          },
          {
            en: "Build new interface pieces on the shared design system rather than per-module variants, to keep the experience coherent across repositories.",
            es: "Construir las nuevas piezas de interfaz sobre el sistema de diseño compartido en lugar de variantes por módulo, para mantener la experiencia coherente entre repositorios.",
          },
          {
            en: "Use TanStack React Query for data retrieval in the new modules, and test behavior alongside each new workflow rather than after it.",
            es: "Usar TanStack React Query para la consulta de datos en los nuevos módulos, y probar el comportamiento junto con cada flujo nuevo en lugar de después.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "New React modules and workflows shipped inside a live enterprise product, working with its Angular applications; extensions to the shared design system and the tests that came with them. The assignment ran from May 2025 to August 2026.",
          es: "Nuevos módulos y flujos React entregados dentro de un producto empresarial en operación, funcionando con sus aplicaciones Angular; extensiones al sistema de diseño compartido y las pruebas que las acompañaron. La asignación duró de mayo de 2025 a agosto de 2026.",
        },
      },
    ],
    seo: {
      en: {
        title: "Apptega — React next to legacy Angular | Santiago Salas",
        description:
          "Senior Frontend Developer on Apptega's cybersecurity and GRC SaaS via Cafeto Software: React modules beside legacy Angular, multi-repo setup and design system.",
      },
      es: {
        title: "Apptega — React junto a Angular legado | Santiago Salas",
        description:
          "Senior Frontend Developer en el SaaS de ciberseguridad y GRC de Apptega vía Cafeto Software: módulos React junto a Angular legado, multirrepositorio y sistema de diseño.",
      },
    },
  },
  {
    slug: "ai-project-management",
    name: "AI Project Management Assistant",
    kind: { en: "AI product · MVP", es: "Producto con IA · MVP" },
    headline: {
      en: "From meetings to project documentation, planning and tracking",
      es: "De las reuniones a la documentación, planificación y seguimiento",
    },
    summary: {
      en: "An application at 57Blocks that uses AI workflows to automate software-project documentation, planning and tracking from meetings. I led its technical planning and initial development, up to an early MVP.",
      es: "Una aplicación en 57Blocks que usa flujos de IA para automatizar la documentación, planificación y seguimiento de proyectos de software a partir de reuniones. Lideré su planificación técnica y desarrollo inicial, hasta un MVP temprano.",
    },
    role: {
      en: "Frontend Developer · Led technical planning and initial development",
      es: "Frontend Developer · Lideré planificación técnica y desarrollo inicial",
    },
    period: { en: "May 2024 – May 2025", es: "Mayo 2024 – Mayo 2025" },
    context: {
      en: "57Blocks · Application envisioned as a commercial product",
      es: "57Blocks · Aplicación concebida como producto comercial",
    },
    // The pipeline is the story, so the pipeline is the image.
    media: { type: "concept", key: "ai-flow" },
    tech: [
      "Dify",
      "Hexagonal architecture",
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "Cursor",
    ],
    links: [],
    story: [
      {
        key: "context",
        label: { en: "Context", es: "Contexto" },
        body: {
          en: "57Blocks, where I worked on projects for international clients, set out to build an application envisioned as a commercial product. I was given its technical planning and initial development.",
          es: "57Blocks, donde trabajé en proyectos para clientes internacionales, se propuso construir una aplicación concebida como producto comercial. Se me encargaron su planificación técnica y su desarrollo inicial.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "Project meetings produce decisions, tasks and knowledge that someone then has to write up, plan and track by hand. The idea was to let AI workflows produce and maintain that documentation, planning and tracking from the meetings themselves.",
          es: "Las reuniones de proyecto producen decisiones, tareas y conocimiento que alguien tiene que documentar, planificar y seguir a mano. La idea era que flujos de IA generaran y mantuvieran esa documentación, planificación y seguimiento a partir de las propias reuniones.",
        },
      },
      {
        key: "responsibility",
        label: { en: "What I owned", es: "Mi responsabilidad" },
        items: [
          {
            en: "Technical planning and initial development, from scratch.",
            es: "La planificación técnica y el desarrollo inicial, desde cero.",
          },
          {
            en: "The initial frontend and backend architecture, on hexagonal principles.",
            es: "La arquitectura inicial de frontend y backend, con principios hexagonales.",
          },
          {
            en: "Designing and integrating the Dify workflows to work with documents, generate content and query project information.",
            es: "Diseñar e integrar los flujos en Dify para trabajar con documentos, generar contenido y consultar información del proyecto.",
          },
          {
            en: "Taking the application to a first MVP version.",
            es: "Llevar la aplicación a una primera versión de MVP.",
          },
          {
            en: "Boundary: defining the backend architecture was part of the job; running a production backend was not. My role stayed frontend and product-oriented.",
            es: "Límite: definir la arquitectura del backend fue parte del trabajo; operar un backend en producción no. Mi rol siguió siendo de frontend y producto.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Hexagonal principles from day one, on both sides, so the application's logic stayed independent of the interface and of external pieces such as the AI workflows.",
            es: "Principios hexagonales desde el primer día, en ambos lados, para que la lógica de la aplicación se mantuviera independiente de la interfaz y de piezas externas como los flujos de IA.",
          },
          {
            en: "Dify to build and test the AI capabilities, so the workflows could be tried and adjusted without rewriting application code each time.",
            es: "Dify para construir y probar las capacidades de IA, de modo que los flujos pudieran probarse y ajustarse sin reescribir código de la aplicación cada vez.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "An early MVP of the application, with AI workflows for documents, content generation and project queries, built on the architecture I defined. It was a first version, not a finished product.",
          es: "Un MVP temprano de la aplicación, con flujos de IA para documentos, generación de contenido y consultas del proyecto, construido sobre la arquitectura que definí. Fue una primera versión, no un producto terminado.",
        },
      },
    ],
    seo: {
      en: {
        title: "AI Project Management Assistant — led to MVP | Santiago Salas",
        description:
          "At 57Blocks I led technical planning and initial development of an app that automates project documentation, planning and tracking from meetings with Dify.",
      },
      es: {
        title: "AI Project Management Assistant — hasta el MVP | Santiago Salas",
        description:
          "En 57Blocks lideré la planificación técnica y el desarrollo inicial de una app que automatiza documentación, planificación y seguimiento de proyectos desde reuniones con Dify.",
      },
    },
  },
  {
    slug: "linkedai",
    name: "LinkedAI",
    kind: { en: "AI data platform", es: "Plataforma de datos para IA" },
    headline: {
      en: "Annotation tools on HTML Canvas, with SAM-assisted segmentation",
      es: "Herramientas de anotación sobre HTML Canvas, con segmentación asistida por SAM",
    },
    summary: {
      en: "Annotation, segmentation and review tools for computer vision datasets. I built them on HTML Canvas and integrated Segment Anything Model (SAM) into the annotation workflows.",
      es: "Herramientas de anotación, segmentación y revisión para datasets de visión computacional. Las construí sobre HTML Canvas e integré Segment Anything Model (SAM) en los flujos de anotación.",
    },
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    period: { en: "Nov 2022 – Feb 2024", es: "Noviembre 2022 – Febrero 2024" },
    context: {
      en: "International SaaS · Computer vision datasets",
      es: "SaaS internacional · Datasets de visión computacional",
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
      "TypeScript",
      "Redux",
      "HTML Canvas",
      "Segment Anything (SAM)",
      "GraphQL",
      "Material UI",
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
          en: "LinkedAI is an international SaaS platform for preparing the image datasets that train computer vision models. The quality of those datasets depends on the tools people use to draw, correct and review labels.",
          es: "LinkedAI es una plataforma SaaS internacional para preparar los datasets de imágenes con los que se entrenan modelos de visión computacional. La calidad de esos datasets depende de las herramientas con las que las personas dibujan, corrigen y revisan etiquetas.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "Annotators draw and edit regions over images all day, across large collections. A generic interface is too imprecise for that and too slow once state and data volumes grow. And tracing every outline by hand is slow work in itself.",
          es: "Los anotadores dibujan y editan regiones sobre imágenes todo el día, en colecciones grandes. Una interfaz genérica es demasiado imprecisa para eso y demasiado lenta cuando crecen el estado y los volúmenes de datos. Y trazar cada contorno a mano ya es un trabajo lento de por sí.",
        },
      },
      {
        key: "responsibility",
        label: { en: "What I owned", es: "Mi responsabilidad" },
        items: [
          {
            en: "Image annotation, segmentation and review tools on HTML Canvas: precise editing interactions, and the complex state behind them.",
            es: "Las herramientas de anotación, segmentación y revisión de imágenes sobre HTML Canvas: interacciones de edición precisas y el estado complejo detrás de ellas.",
          },
          {
            en: "The features to organize projects and image collections and to review large volumes of data, for responsiveness and for clearer review flows.",
            es: "Las funcionalidades para organizar proyectos y colecciones de imágenes y revisar grandes volúmenes de datos, para lograr fluidez y flujos de revisión más claros.",
          },
          {
            en: "Integrating Segment Anything Model (SAM) into the annotation workflows, so AI-assisted segmentation is available when creating and editing labels.",
            es: "Integrar Segment Anything Model (SAM) en los flujos de anotación, para que la segmentación asistida por IA esté disponible al crear y editar etiquetas.",
          },
          {
            en: "My part of SAM was the integration into the tools. I did not research or train the model.",
            es: "Mi parte de SAM fue la integración en las herramientas. No investigué ni entrené el modelo.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "Canvas rather than the DOM for the annotation surface, to keep drawing and editing precise and responsive over large images.",
            es: "Canvas en lugar del DOM para la superficie de anotación, para mantener el dibujo y la edición precisos y fluidos sobre imágenes grandes.",
          },
          {
            en: "Keep the state of projects, image collections, annotations and review separate, so each could change without dragging the others.",
            es: "Mantener separado el estado de proyectos, colecciones de imágenes, anotaciones y revisión, para que cada uno pudiera cambiar sin arrastrar a los demás.",
          },
          {
            en: "Put SAM-assisted segmentation inside the same label creation and editing flow, not in a separate tool, so the annotator keeps working in one place.",
            es: "Poner la segmentación asistida por SAM dentro del mismo flujo de creación y edición de etiquetas, no en una herramienta aparte, para que el anotador trabaje en un solo lugar.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "Canvas-based annotation, segmentation and review tools with SAM-assisted segmentation in the annotation workflows. The platform is no longer publicly available, so there is no live link.",
          es: "Herramientas de anotación, segmentación y revisión sobre Canvas, con segmentación asistida por SAM en los flujos de anotación. La plataforma ya no está disponible públicamente, así que no hay enlace en vivo.",
        },
      },
    ],
    seo: {
      en: {
        title: "LinkedAI — Canvas annotation tools with SAM | Santiago Salas",
        description:
          "Annotation, segmentation and review tools on HTML Canvas for computer vision datasets, and the integration of Segment Anything (SAM) into LinkedAI's workflows.",
      },
      es: {
        title: "LinkedAI — herramientas de anotación en Canvas con SAM | Santiago Salas",
        description:
          "Herramientas de anotación, segmentación y revisión sobre HTML Canvas para visión computacional, y la integración de Segment Anything (SAM) en los flujos de LinkedAI.",
      },
    },
  },
  {
    slug: "sgc-viewers",
    name: { en: "Seismic & volcanic viewers", es: "Visores sísmicos y volcánicos" },
    kind: { en: "Public data product", es: "Producto público de datos" },
    headline: {
      en: "Public viewers built from scratch for geoscientific data",
      es: "Visores públicos construidos desde cero para datos geocientíficos",
    },
    summary: {
      en: "The public seismic and volcanic activity viewers of the Colombian Geological Survey. I took part from defining the experience to the frontend implementation.",
      es: "Los visores públicos de actividad sísmica y volcánica del Servicio Geológico Colombiano. Participé desde la definición de la experiencia hasta la implementación frontend.",
    },
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    period: { en: "Mar 2020 – Nov 2021", es: "Marzo 2020 – Noviembre 2021" },
    context: {
      en: "Colombian Geological Survey · Public geoscientific data",
      es: "Servicio Geológico Colombiano · Datos geocientíficos públicos",
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
      "Git",
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
          en: "The Colombian Geological Survey monitors the country's seismic and volcanic activity. That information is of public interest, and the public viewers did not exist yet: they had to be built from scratch.",
          es: "El Servicio Geológico Colombiano monitorea la actividad sísmica y volcánica del país. Esa información es de interés público y los visores públicos todavía no existían: había que construirlos desde cero.",
        },
      },
      {
        key: "problem",
        label: { en: "Problem", es: "Problema" },
        body: {
          en: "Turn large geoscientific datasets, from the latest events to historical records, into maps, charts and views that very different audiences can read and query, without losing responsiveness.",
          es: "Convertir grandes datasets geocientíficos, desde los últimos eventos hasta registros históricos, en mapas, gráficas y vistas que públicos muy distintos puedan leer y consultar, sin perder fluidez.",
        },
      },
      {
        key: "responsibility",
        label: { en: "What I owned", es: "Mi responsabilidad" },
        items: [
          {
            en: "Taking part from the definition of the experience to its frontend implementation.",
            es: "Participar desde la definición de la experiencia hasta su implementación frontend.",
          },
          {
            en: "The seismic and volcanic viewers, from scratch: maps, search, filters, tables, charts and detailed views for events and historical records.",
            es: "Los visores sísmicos y volcánicos, desde cero: mapas, búsquedas, filtros, tablas, gráficas y vistas detalladas de eventos y registros históricos.",
          },
          {
            en: "Query state and interface performance, to keep exploration responsive.",
            es: "El estado de consulta y el rendimiento de la interfaz, para mantener la exploración fluida.",
          },
          {
            en: "The historical catalog and further modules of the institutional portal.",
            es: "El catálogo histórico y otros módulos del portal institucional.",
          },
          {
            en: "Not mine: the backend.",
            es: "No es mío: el backend.",
          },
        ],
      },
      {
        key: "decisions",
        label: { en: "Decisions", es: "Decisiones" },
        items: [
          {
            en: "One dataset behind several views (map, table and chart) driven by the same search and filters, instead of separate screens with separate logic.",
            es: "Un mismo conjunto de datos detrás de varias vistas (mapa, tabla y gráfica) gobernadas por la misma búsqueda y los mismos filtros, en lugar de pantallas separadas con lógica separada.",
          },
          {
            en: "Treat query state as the source of truth for every view, and limit what the map renders, so exploring a large history stays fluid.",
            es: "Tratar el estado de consulta como fuente de verdad de todas las vistas y limitar lo que el mapa renderiza, para que explorar un historial grande se mantenga fluido.",
          },
        ],
      },
      {
        key: "result",
        label: { en: "Result", es: "Resultado" },
        body: {
          en: "The public viewers and the historical catalog were released on the Survey's portal. The link goes to the Survey's current site, which may have changed since I left in November 2021.",
          es: "Los visores públicos y el catálogo histórico se publicaron en el portal del Servicio. El enlace lleva al sitio actual del Servicio, que puede haber cambiado desde que salí en noviembre de 2021.",
        },
      },
    ],
    seo: {
      en: {
        title: "Seismic & volcanic viewers (SGC) | Santiago Salas",
        description:
          "Public seismic and volcanic viewers for the Colombian Geological Survey, built from scratch: maps, search, filters, charts and a historical catalog, from UX to frontend.",
      },
      es: {
        title: "Visores sísmicos y volcánicos (SGC) | Santiago Salas",
        description:
          "Visores públicos sísmicos y volcánicos del Servicio Geológico Colombiano, desde cero: mapas, búsquedas, filtros, gráficas y catálogo histórico, de la UX al frontend.",
      },
    },
  },
];

export const getWork = (slug) => WORK.find((item) => item.slug === slug);

/** Home shows PASSTIX in its own block, so the grid below it shows the rest. */
export const OTHER_WORK = WORK.filter((item) => !item.featured);
