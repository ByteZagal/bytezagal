// src/seo/structured.ts

/**
 * Datos estructurados globales de ByteZagal
 * Incluye Organization, WebSite y ProfessionalService (con NAP en Vitoria-Gasteiz).
 */

export const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ByteZagal",
  "url": "https://bytezagal.es",
  "logo": "https://bytezagal.es/icon.png",
  "sameAs": [
    "https://www.linkedin.com/in/pedro-aguilar-lopez-569533233/",
    "https://instagram.com/bytezagal",
    "https://www.tiktok.com/@bytezagal",
    "https://github.com/ByteZagal"
  ]
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ByteZagal",
  "url": "https://bytezagal.es",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://bytezagal.es/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ByteZagal",
  "image": "https://bytezagal.es/icon.png",
  "url": "https://bytezagal.es",
  "telephone": "+34 650 850 163",
  "email": "bytezagal.contacto@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Andalucía Kalea",
    "addressLocality": "Vitoria-Gasteiz",
    "postalCode": "01003",
    "addressCountry": "ES"
  },
  "areaServed": {
    "@type": "City",
    "name": "Vitoria-Gasteiz"
  },
  "sameAs": [
    "https://www.linkedin.com/in/pedro-aguilar-lopez-569533233/",
    "https://instagram.com/bytezagal",
    "https://www.tiktok.com/@bytezagal",
    "https://github.com/ByteZagal"
  ]
};
