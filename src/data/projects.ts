export type ProjectStatus =
  | "En producción"
  | "Próximamente"
  | "Privado"
  | "En piloto";

export interface ProjectSummary {
  id: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  alt: string;
  status: ProjectStatus;
  tech: string[];
  note: string;
  detailHref: string;
  liveHref?: string;
}

export const featuredProjects: ProjectSummary[] = [
  {
    id: "parrockia",
    title: "ParROCKia",
    kicker: "Caso real · Hostelería",
    description:
      "Presencia digital para hostelería y eventos con estructura más clara, navegación usable y una base preparada para crecer sin perder personalidad.",
    image: "/parrockia.webp",
    alt: "Captura del proyecto ParROCKia",
    status: "En producción",
    tech: ["PWA", "Hostelería", "Eventos", "Panel admin"],
    note: "Caso publicado y visible. Buen ejemplo de identidad, estructura y ejecución.",
    detailHref: "/proyectos/parrockia",
    liveHref: "https://tabernaparrockia.com",
  },
  {
    id: "foconauta",
    title: "FocoNauta",
    kicker: "Producto propio · Roadmap activo",
    description:
      "App para gestionar clientes, facturas y gastos con menos pasos, menos ruido y una operativa mucho más clara para el día a día.",
    image: "/focoNauta.webp",
    alt: "Captura del proyecto FocoNauta",
    status: "Próximamente",
    tech: ["PWA", "Facturación", "Clientes", "Gastos"],
    note: "Proyecto en fase privada. Se muestra como demo de producto y experiencia de uso.",
    detailHref: "/proyectos/foconauta",
  },
  {
    id: "offilab",
    title: "OffiLab",
    kicker: "Caso privado · Operativa de equipos",
    description:
      "Doble PWA para coordinar oficina y operarios: tareas, fichajes, seguimiento y documentación en una experiencia más rápida y clara.",
    image: "/offilab.webp",
    alt: "Captura del proyecto OffiLab",
    status: "Privado",
    tech: ["PWA", "Operativa", "OCR", "Automatización"],
    note: "Proyecto privado. La ficha enseña criterio de producto y operativa sin exponer datos sensibles.",
    detailHref: "/proyectos/offilab",
  },
  {
    id: "txorion",
    title: "TxoriOn",
    kicker: "Caso publicado · Utilidad local",
    description:
      "App local pensada para consultar eventos, empleo y recursos útiles desde una experiencia móvil más clara, directa y agradable de usar.",
    image: "/txorion.webp",
    alt: "Captura del proyecto TxoriOn",
    status: "En producción",
    tech: ["Next.js", "PWA", "SEO local", "Maps"],
    note: "Producto publicado. Enseña enfoque, utilidad y capacidad de ejecución.",
    detailHref: "/proyectos/txorion",
    liveHref: "https://txorion.es",
  },
  {
    id: "turbolin",
    title: "Turbolin",
    kicker: "Producto en piloto · Fidelización",
    description:
      "App para crear torneos, rankings y recompensas alrededor del futbolín, pensada para activar comunidad y dar más vida al local.",
    image: "/turbolin.webp",
    alt: "Captura del proyecto Turbolin",
    status: "En piloto",
    tech: ["PWA", "Torneos", "Ranking", "Recompensas"],
    note: "Proyecto en fase privada. Se muestra como demostración de producto con lógica de negocio.",
    detailHref: "/proyectos/turbolin",
  },
];
