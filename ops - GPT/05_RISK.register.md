# Riesgos
| ID | Riesgo | Prob. | Impacto | Mitigación |
|----|--------|-------|---------|------------|
| R1 | Duplicar FAQPage (footer + página de servicio) | M | M | Si una ruta tiene FAQ propio, desactivar el FAQ del footer en esa ruta. |
| R2 | LCP alto si Hero usa imagen pesada | M | A | `fetchpriority="high"`/`preload` para la imagen LCP; tamaño real y compresión. :contentReference[oaicite:8]{index=8} |
| R3 | Animaciones molestas | B | M | Respetar `prefers-reduced-motion`; sólo `transform/opacity`. :contentReference[oaicite:9]{index=9} |
| R4 | Hints mal usados | B | M | `preconnect` sólo a crítico (`wa.me`); resto `dns-prefetch`. :contentReference[oaicite:10]{index=10} |
