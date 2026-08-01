# Proyecto: Landing Page Alta Conversión - Google AI Pro + YouTube Premium

## Visión General

Esta landing page estática está diseñada para comercializar cupos del Plan Familiar de Google (Google AI Pro 5TB + YouTube Premium) a **$12.000 ARS/mes**.
El objetivo técnico es lograr la máxima velocidad de carga (100% Lighthouse Performance), SEO optimizado y una arquitectura modular, escalable y sin JavaScript innecesario en el cliente.

## Stack Tecnológico

- **Framework:** Astro 7.x (SSG / Static Site Generation)
- **Styling:** Tailwind CSS 4.x con `@tailwindcss/vite` (Utility-first, responsive, sin hojas CSS pesadas)
- **Icons:** SVG Inline (zero dependencias externas de iconos)
- **Deploy Target:** Cloudflare Pages / Vercel / Netlify (Cero costo de hosting)
- **Performance Goal:** Zero JS by default, HTML estático puro, CSS mínimo gracias a Tailwind tree-shaking automático.
- **Node.js:** >=22.12.0
- **Package Manager:** pnpm

## Arquitectura del Proyecto

```
src/
├── components/       # Componentes Astro modulares (PascalCase)
│   ├── Hero.astro             # Hero section con anclaje de precio y CTA principal
│   ├── BentoGrid.astro        # Grid asimétrico de features principales
│   ├── BenefitsBreakdown.astro # Desglose completo de beneficios por miembro
│   ├── PriceComparison.astro  # Tabla comparativa de precios
│   ├── PrivacyGuarantee.astro # Sección de privacidad y objeción handling
│   ├── HowItWorks.astro       # Timeline de 3 pasos para unirse
│   ├── TrustSignals.astro     # Señales de confianza
│   ├── CTASection.astro       # CTA final con urgencia
│   ├── FAQ.astro              # Preguntas frecuentes con CTA embebido
│   └── Footer.astro           # Footer con disclaimer legal
├── data/
│   └── copy.json              # TODO el contenido textual desacoplado
├── layouts/
│   └── Layout.astro           # Layout principal con SEO, JSON-LD, floating CTA
├── pages/
│   └── index.astro            # Página principal (landing page)
└── styles/
    └── global.css             # Tailwind, @theme personalizado, animaciones
```

## Principios de Diseño

### Componentes
- Preferir extensión `.astro`. Mantener lógica en frontmatter (`---`) y renderizado semántico abajo.
- Datos y textos desacoplados en `src/data/copy.json`.
- Componentes PascalCase, funciones camelCase.
- SVG inline para todos los íconos. Cero dependencias externas de iconos.

### Tailwind CSS 4.x
- Usar `@tailwindcss/vite` como plugin de Vite (no PostCSS).
- Tema personalizado definido en `@theme` dentro de `global.css`.
- Clases semánticas y diseño Responsive-First (`sm:`, `md:`, `lg:`).
- Paleta de colores:
  - **Gemini/AI:** indigo/violet (`--color-gemini-*`) — acentos principales
  - **YouTube:** rojo (`--color-yt-red`) — entretenimiento
  - **Almacenamiento:** sky — espacio en la nube
  - **Productividad:** emerald — integración Workspace
  - **Fondo:** slate-950 — modo oscuro elegante
- Usar nombres canónicos de Tailwind 4.x: `bg-linear-to-r` (no `bg-gradient-to-r`), `grow` (no `flex-grow`).

### Accesibilidad (a11y)
- Todos los elementos interactivos llevan `aria-label` descriptivo.
- Ratio de contraste elevado sobre fondos oscuros (WCAG AA mínimo).
- `prefers-reduced-motion` respetado implícitamente (animaciones decorativas).
- Navegación por teclado visible con `focus-visible`.

### Performance
- Zero JavaScript en cliente. Todo el renderizado es estático (SSG).
- Fuentes cargadas con `media="print"` + `onload` para evitar FOIT.
- CSS tree-shaken por Tailwind 4.x automáticamente.
- JSON-LD estructurado inline (sin llamadas externas).
- Gradientes CSS-only, animaciones sin JS.

## Copywriting

### Principios de Persuasión
1. **Anclaje de Precio Extremo:** Valor real individual ($48.000 ARS) vs precio grupal ($12.000 ARS) = 75% OFF.
2. **Eliminación de Objeciones:** Sección dedicada a privacidad (objeción principal), FAQ extensa, garantías explícitas.
3. **Escasez Genuina:** Solo 4 cupos disponibles (limitación real de Google Families: 6 miembros total, 1 admin + 5 invitados).
4. **Prueba Social Implícita:** Grupo ya activo, buscando completar cupos.
5. **Sin Riesgo:** Sin contrato, sin permanencia, mes a mes.
6. **CTA Específicos:** "Reservar mi cupo" (no genéricos), directo a WhatsApp con mensaje preconfigurado.

### Tono
- Directo, profesional, sin hype falso.
- Datos concretos (5 TB, 75%, $12.000).
- Lenguaje inclusivo y cercano.
- Palabras clave: sin interrupciones, privado, compartido, ahorro, exclusivo.
