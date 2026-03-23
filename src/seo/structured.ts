// src/seo/structured.ts

/**
 * Datos estructurados globales de ByteZagal
 * ---------------------------------------------------------------------------
 * Criterios:
 * - Marca principal: ByteZagal
 * - Foco geográfico: Zaragoza
 * - Cobertura: remoto en España
 * - Sin dirección postal inventada o desactualizada
 * - Sin priceRange público
 * - Solo señales que reflejen activos y contenido reales
 */

const SITE_URL = "https://bytezagal.es";
const LOGO_URL = `${SITE_URL}/icon.png`;
const EMAIL = "contacto@bytezagal.es";
const PHONE = "+34 650 850 163";

const SAME_AS = [
  "https://www.linkedin.com/in/pedro-aguilar-lopez-569533233/",
  "https://instagram.com/bytezagal",
  "https://www.tiktok.com/@bytezagal",
  "https://github.com/ByteZagal",
  "https://www.malt.es/profile/bytezagal",
];

export const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ByteZagal",
  url: SITE_URL,
  logo: LOGO_URL,
  email: EMAIL,
  sameAs: SAME_AS,
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "ByteZagal",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "es-ES",
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professional-service`,
  name: "ByteZagal",
  url: SITE_URL,
  image: LOGO_URL,
  description:
    "Rescate web, desarrollo a medida, SEO técnico, accesibilidad, rendimiento y automatización para negocio con foco en Zaragoza y trabajo remoto en España.",
  email: EMAIL,
  telephone: PHONE,
  areaServed: [
    {
      "@type": "City",
      name: "Zaragoza",
    },
    {
      "@type": "Country",
      name: "España",
    },
  ],
  availableLanguage: ["es-ES"],
  sameAs: SAME_AS,
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
  serviceType: [
    "Rescate web",
    "Desarrollo web a medida",
    "SEO técnico",
    "Mejora de rendimiento web",
    "Accesibilidad web",
    "Automatización y digitalización",
  ],
};
