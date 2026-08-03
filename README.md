# Google AI Pro (5TB) + YouTube Premium — Grupo Familiar Compartido

Landing page estática de alta conversión para comercializar cupos del Plan Familiar de Google AI Pro con 5 TB de almacenamiento y YouTube Premium a **$12.000 ARS/mes**.

## 🚀 Stack

- **Framework:** Astro 7.x (SSG — Static Site Generation)
- **Estilos:** Tailwind CSS 4.x con `@tailwindcss/vite`
- **Íconos:** SVG inline (zero dependencias)
- **Deploy:** Cloudflare Pages
- **Package Manager:** pnpm
- **Performance:** 0 KB JavaScript · 100 Lighthouse · 27 KB gzipped total

## 📁 Estructura

```
src/
├── components/          # 16 componentes Astro
│   ├── Hero.astro                   # Hero con anclaje de precio y CTA
│   ├── MediaHeroSection.astro       # Video principal + demos de Gemini
│   ├── GeminiLiveSection.astro      # Gemini Live Camera
│   ├── ImageGenSection.astro        # Galería de imágenes generadas por IA
│   ├── YouTubePremiumShowcase.astro # WebP animados de YouTube Premium
│   ├── StorageWorkspaceSection.astro # Almacenamiento + Workspace
│   ├── BenefitsBreakdown.astro      # Beneficios por miembro
│   ├── PriceComparison.astro        # Tabla comparativa responsive
│   ├── PrivacyGuarantee.astro       # Garantías de privacidad
│   ├── HowItWorks.astro             # Timeline de 3 pasos
│   ├── TrustSignals.astro           # Señales de confianza
│   ├── CTASection.astro             # CTA final con urgencia
│   ├── FAQ.astro                    # Preguntas frecuentes
│   ├── Footer.astro                 # Footer legal
│   ├── VideoPlayer.astro            # Reproductor con IntersectionObserver
│   └── SvgIcons.astro               # 25+ iconos SVG profesionales
├── data/
│   ├── copy.json         # Fuente única de verdad (todo el contenido)
│   └── copy.ts           # Interfaces TypeScript del esquema
├── lib/
│   ├── colors.ts         # Mapas de color e iconos SVG centralizados
│   └── whatsapp.ts       # Builder de links y paths SVG
├── layouts/
│   └── Layout.astro      # SEO, JSON-LD, CSP, meta tags, video engine
├── pages/
│   └── index.astro       # Orquestador principal
└── styles/
    └── global.css        # Design tokens, @theme, animaciones
```

## 🛠️ Comandos

| Comando | Acción |
|---------|--------|
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción en `dist/` |
| `pnpm preview` | Previsualizar build localmente |

## 📊 Performance

| Métrica | Valor |
|---------|-------|
| JavaScript | 0 KB (cero archivos .js) |
| HTML (gzip) | ~20 KB |
| CSS (gzip) | ~12 KB |
| Total transferido | ~32 KB |
| Lighthouse Performance | 100 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Build time | ~250ms |

## 🔒 SEO y Seguridad

- Meta tags completos (OG, Twitter Card, geo, canonical)
- JSON-LD Structured Data (Product + Offer)
- Content-Security-Policy estricta
- Sitemap.xml automático
- robots.txt configurado
- Cache headers optimizados (Cloudflare / Vercel / Netlify)

## 🌐 Deploy

Configurado para Cloudflare Pages. También incluye configs para Vercel y Netlify:

| Archivo | Plataforma |
|---------|-----------|
| `public/_headers` | Cloudflare Pages |
| `vercel.json` | Vercel |
| `public/_netlify.toml` | Netlify |

Build command: `pnpm run build`
Output directory: `dist`
