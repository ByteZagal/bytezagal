type SeoEntry = {
  title: string;
  description: string;
  noindex?: boolean;
};

export const seoByPath: Record<string, SeoEntry> = {
  "/": {
    title:
      "Desarrollador web en Zaragoza | Rescate web, apps y SEO técnico | ByteZagal",
    description:
      "Desarrollador web en Zaragoza. Rescate web, desarrollo a medida, apps, automatización y SEO técnico para negocios que necesitan una web rápida, clara y orientada a resultados.",
  },

  "/zaragoza": {
    title: "Desarrollador web en Zaragoza para negocios y marcas | ByteZagal",
    description:
      "Servicio de desarrollo web en Zaragoza para negocios, marcas y proyectos que necesitan mejorar su presencia digital, rendimiento, estructura y captación.",
  },

  "/espana-remoto": {
    title:
      "Desarrollo web remoto en España | SEO técnico, apps y automatización | ByteZagal",
    description:
      "Trabajo en remoto para toda España en desarrollo web, rescate de proyectos, SEO técnico, automatización y mejora de rendimiento digital.",
  },

  "/contratame": {
    title:
      "Contratar desarrollador web en Zaragoza | Auditoría y presupuesto | ByteZagal",
    description:
      "Cuéntame tu caso. Trabajo desde Zaragoza y en remoto para España en rescate web, desarrollo a medida, SEO técnico, rendimiento y automatización útil para negocio.",
  },

  "/proyectos": {
    title: "Proyectos web y casos reales | ByteZagal Zaragoza",
    description:
      "Selección de proyectos, productos y casos reales con foco en ejecución técnica, claridad, rendimiento y sentido comercial.",
  },

  "/proyectos/parrockia": {
    title: "ParROCKia | Caso real de web para hostelería | ByteZagal",
    description:
      "Caso real de presencia digital para hostelería y eventos: estructura, navegación, rendimiento y personalidad sin ruido.",
  },

  "/proyectos/txorion": {
    title: "TxoriOn | Producto publicado con utilidad local | ByteZagal",
    description:
      "Producto publicado con capa territorial, utilidad práctica y enfoque en ejecución, claridad y recorrido.",
  },

  "/servicios/arreglos": {
    title: "Rescate web y arreglos de software | ByteZagal",
    description:
      "Auditoría técnica, rescate web, parche, refactor controlado y mejora de rendimiento para webs o aplicaciones lentas, rotas o mal planteadas.",
  },

  "/servicios/digitalizacion": {
    title: "Digitalización de negocio y base digital | ByteZagal",
    description:
      "Web corporativa, estructura digital clara, automatización útil y base SEO sólida para captar mejor y operar con menos fricción.",
  },

  "/servicios/ecommerce": {
    title:
      "Tiendas online rápidas, claras y preparadas para vender | ByteZagal",
    description:
      "E-commerce pensados para móvil, checkout claro, rendimiento sólido y base SEO preparada para vender sin complicar la gestión.",
  },

  "/servicios/rescate-web-zaragoza": {
    title:
      "Rescate web en Zaragoza | Arreglo, auditoría y mejora técnica | ByteZagal",
    description:
      "Rescate web en Zaragoza para páginas lentas, rotas o mal planteadas. Auditoría, corrección técnica, rendimiento, accesibilidad y base SEO limpia.",
  },

  "/servicios/desarrollo-web-zaragoza": {
    title: "Desarrollo web en Zaragoza para negocios y marcas | ByteZagal",
    description:
      "Desarrollo web en Zaragoza con foco en rendimiento, claridad, captación y mantenimiento. Webs corporativas, landings y proyectos a medida.",
  },

  "/servicios/desarrollo-apps-zaragoza": {
    title:
      "Desarrollo de apps y herramientas digitales en Zaragoza | ByteZagal",
    description:
      "Desarrollo de apps, paneles internos y herramientas digitales en Zaragoza para automatizar procesos, ahorrar tiempo y mejorar operaciones.",
  },

  "/servicios/automatizacion-negocio-local-zaragoza": {
    title: "Automatización para negocio local en Zaragoza | ByteZagal",
    description:
      "Automatización para negocio local en Zaragoza: formularios, flujos, avisos, integraciones y procesos digitales más eficientes.",
  },

  "/servicios/web-hosteleria-zaragoza": {
    title:
      "Desarrollo web para hostelería en Zaragoza | Restaurantes, bares y eventos | ByteZagal",
    description:
      "Desarrollo web para hostelería en Zaragoza: cartas, reservas, eventos, posicionamiento local y webs rápidas para restaurantes, bares y proyectos gastronómicos.",
  },
} as const;
