// src/seo/structured.ts

const SITE_URL = "https://bytezagal.es";
const BRAND = "ByteZagal";
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
  name: BRAND,
  url: SITE_URL,
  logo: LOGO_URL,
  email: EMAIL,
  telephone: PHONE,
  sameAs: SAME_AS,
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BRAND,
  inLanguage: "es-ES",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professional-service`,
  name: BRAND,
  url: SITE_URL,
  image: LOGO_URL,
  logo: LOGO_URL,
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
  description:
    "Desarrollo web, rescate web, desarrollo de apps, SEO técnico, accesibilidad, rendimiento y automatización con foco en Zaragoza y trabajo remoto en España.",
  serviceType: [
    "Desarrollo web",
    "Rescate web",
    "Desarrollo de apps",
    "SEO técnico",
    "Rendimiento web",
    "Accesibilidad web",
    "Automatización de procesos",
    "Digitalización de negocio",
  ],
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export const localBusiness = professionalService;
