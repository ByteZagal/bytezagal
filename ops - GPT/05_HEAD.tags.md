# HEAD por ruta (Astro)
- Formato: `<title>`, `meta description`, `canonical`, OG/Twitter. JSON-LD vía `structured.ts` y `Seo.astro`. JSON-LD es **recomendado** por Google.  [fuente] :contentReference[oaicite:4]{index=4}

## /
- `<title>`: Pedro Aguilar — Desarrollo web en Vitoria-Gasteiz
- `description`: Desarrollo de webs claras, rápidas y accesibles para pymes en Vitoria-Gasteiz.
- `canonical`: /
- `og:image`: /icon.png
- **LCP**: H1/Avatar (si hay hero image grande, `fetchpriority="high"`/`preload`). [fuente] :contentReference[oaicite:5]{index=5}

## /proyectos
- `<title>`: Proyectos web — ByteZagal
- `description`: Casos reales y demos técnicas.
- `canonical`: /proyectos

## /contratame
- `<title>`: Precios y paquetes — ByteZagal
- `description`: Planes de web corporativa, e-commerce y arreglos.
- `canonical`: /contratame

## /servicios/*
- `<title>`: {Servicio} en Vitoria-Gasteiz — ByteZagal
- `description`: {Beneficio principal + prueba social cuando exista}.
- `canonical`: ruta de la página
- **FAQPage visible** si la página incluye preguntas/JSON-LD propio (evitar duplicados con el footer).
