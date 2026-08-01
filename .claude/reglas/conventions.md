# Convenciones del Proyecto — Google AI Pro Family

## Estructura de Archivos

```
src/
├── components/         # Componentes Astro modulares (PascalCase)
├── data/               # Datos y contenido desacoplado
├── layouts/            # Layout principal con SEO
├── pages/              # Rutas (File-based routing de Astro)
└── styles/             # Estilos globales + design tokens
public/                 # Assets estáticos (favicon, robots.txt, OG image)
```

## Componentes (src/components/)

- **Naming:** PascalCase.astro — ej: `BentoGrid.astro`, `PriceComparison.astro`.
- **Responsabilidad única:** Cada componente = una sección de la landing page.
- **Sin estado:** Componentes puramente presentacionales (SSG estático, sin JS).
- **Datos externos:** Todos los textos y configuraciones desde `src/data/copy.json`.
- **Orden de secciones en index.astro:**
  1. `<Hero />`
  2. `<BentoGrid />`
  3. `<BenefitsBreakdown />`
  4. `<PriceComparison />`
  5. `<PrivacyGuarantee />`
  6. `<HowItWorks />`
  7. `<TrustSignals />`
  8. `<CTASection />`
  9. `<FAQ />`
  10. `<Footer />`

## Datos (src/data/copy.json)

- **Propósito:** Fuente única de verdad para todo contenido textual.
- **Estructura:** Secciones anidadas: `hero`, `bento`, `benefitsCategories`, `pricing`, `privacy`, `howItWorks`, `trustSignals`, `ctaSection`, `faq`, `footer`, `seo`, `contact`.
- **Campos monetarios:** Strings con separador de miles (ej: `"12.000"`), no números.
- **Números:** Cuando sean lógicos (ej: `availableSlots: 4`), usar tipo numérico.
- **Arrays:** Para contenido repetible (FAQ, features, benefits, steps).
- **Internacionalización futura:** Si se necesita i18n, crear `copy.en.json`, `copy.es.json`.

## Layout (src/layouts/Layout.astro)

- **Props:** `title` (requerido), `description` (opcional, default desde copy.json), `ogImage` (opcional).
- **Incluye:** Meta tags completos, Open Graph, Twitter Card, JSON-LD, favicon, fuentes, CSP, floating CTA.
- **No incluye:** `<main>` — eso es responsabilidad de cada página.

## Páginas (src/pages/)

- **index.astro:** Única página de la landing. Orquesta todos los componentes.
- **Rutas futuras:** Si se agregan más páginas, seguir el file-based routing de Astro.
