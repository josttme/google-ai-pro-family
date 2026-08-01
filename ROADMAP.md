# 🚀 ROADMAP — Landing Page Google AI Pro + YouTube Premium

## FASE 0: Auditoría y Diagnóstico Inicial ✅

- [x] Lectura completa de estructura del proyecto
- [x] Análisis de stack técnico (Astro 7.x + Tailwind CSS 4.x)
- [x] Evaluación de componentes existentes
- [x] Diagnóstico de copywriting y persuasión
- [x] Identificación de brechas de SEO y rendimiento

---

## FASE 1: Base Técnica y SEO (Prioridad Crítica)

### 1.1 — Layout y SEO Técnico
- [ ] Reconstruir `Layout.astro` con meta tags completos:
  - OG: title, description, image, url, type, locale
  - Twitter Card: summary_large_image
  - Canonical URL
  - Robots: index, follow
  - Schema.org JSON-LD (Product + Offer)
  - Preload de fuentes críticas
  - Meta theme-color dinámico
- [ ] Implementar `Content-Security-Policy` mínima (sin JS externo = fácil)
- [ ] Agregar `astro:assets` para optimización de imágenes
- [ ] Configurar `sitemap` y `robots.txt`

### 1.2 — Actualizar CLAUDE.md
- [ ] Corregir versión de Astro (7.x, no 4.x)
- [ ] Documentar Tailwind CSS 4.x con `@tailwindcss/vite`
- [ ] Actualizar convenciones de componentes

### 1.3 — Tailwind Configuration
- [ ] Definir custom theme en `global.css` con `@theme`:
  - Paleta de colores: slate (fondo), indigo/violet (Gemini), red (YouTube), emerald (precio/ahorro)
  - Fuente: Plus Jakarta Sans como default
  - Animaciones sutiles: fade-in, slide-up (CSS-only, zero JS)

---

## FASE 2: Arquitectura de Datos (Desacoplamiento Total)

### 2.1 — Reestructurar `copy.json`
- [ ] Sección `hero` — títulos con más punch persuasivo
- [ ] Sección `bento` — features dinámicas desde JSON (nada hardcodeado)
- [ ] Sección `benefits` — lista completa de beneficios POR MIEMBRO (basada en datos reales)
- [ ] Sección `pricing` — precios, anclaje, ahorro
- [ ] Sección `privacy` — garantías de privacidad expandidas
- [ ] Sección `trustSignals` — badges de confianza
- [ ] Sección `howItWorks` — pasos para unirse
- [ ] Sección `faq` — preguntas frecuentes ampliadas
- [ ] Sección `urgency` — mensajes de escasez
- [ ] Sección `contact` — WhatsApp y métodos de pago
- [ ] Sección `seo` — datos para meta tags y JSON-LD

---

## FASE 3: Componentes UI/UX (Diseño Élite)

### 3.1 — Hero Section
- [ ] Fondo con gradientes animados (CSS-only, sin JS)
- [ ] Badge de urgencia con animación sutil de pulso
- [ ] Título con jerarquía visual fuerte (gradiente de texto)
- [ ] Price anchor card rediseñada: valor real vs nuestro precio
- [ ] CTA prominente con WhatsApp icon
- [ ] Indicador visual de "4 cupos disponibles"
- [ ] Micro-interacciones: hover states, glow effects

### 3.2 — Bento Grid (True Bento Layout)
- [ ] Layout asimétrico con diferentes tamaños de cards
- [ ] Card principal (Gemini) ocupa 2 columnas y 2 filas
- [ ] Cards secundarias ocupan 1 columna
- [ ] Cada card con gradiente y glow de su color característico
- [ ] Features de cada card leídas desde `copy.json`
- [ ] Iconografía SVG inline específica por card
- [ ] Hover effects con transiciones suaves

### 3.3 — Benefits Breakdown (NUEVO)
- [ ] Sección "Qué obtiene cada miembro" con grid de beneficios
- [ ] Categorizados por: IA, Almacenamiento, Entretenimiento, Productividad, Privacidad
- [ ] Iconos visuales para cada categoría
- [ ] Destacar lo que NO se comparte (tranquilizar al comprador)

### 3.4 — Price Comparison
- [ ] Tabla comparativa con diseño dramático
- [ ] Columna "Por tu cuenta" visualmente desfavorecida
- [ ] Columna "Grupo Familiar" heroica (destacada, glowing)
- [ ] Fila de TOTAL con diferencia de precio impactante
- [ ] Badge de "75% de ahorro" prominente
- [ ] Sub-CTA después de la tabla

### 3.5 — Privacy Guarantee (EXPANDIDO)
- [ ] Sección completa con múltiples puntos de privacidad
- [ ] Iconos de candado, shield, etc.
- [ ] Frase contundente: "El administrador NO puede ver..."
- [ ] Lista de cosas que SON privadas
- [ ] Tone: seguridad absoluta, respaldado por Google

### 3.6 — How It Works (NUEVO)
- [ ] 3 pasos simples: Contactás → Recibís invitación → Disfrutás
- [ ] Timeline visual con conectores
- [ ] Cada paso con ícono descriptivo
- [ ] CTA al final de los pasos

### 3.7 — Trust Signals (NUEVO)
- [ ] Badges: Google Partner, 100% Privado, Sin Contrato, Soporte Directo
- [ ] Diseño minimalista, horizontal scroll o grid
- [ ] Sin íconos externos, todo SVG inline

### 3.8 — FAQ
- [ ] Acordeón estático (desplegado por defecto — zero JS)
- [ ] Preguntas agrupadas visualmente
- [ ] Respuestas detalladas y persuasivas
- [ ] Última pregunta con CTA ("¿Listo para unirte?")

### 3.9 — Footer
- [ ] Diseño más profesional
- [ ] Links a WhatsApp
- [ ] Disclaimer legal mínimo
- [ ] Copyright dinámico

### 3.10 — Floating CTA (CSS-only)
- [ ] Barra inferior fija con CTA (sticky, sin JS)
- [ ] Solo visible en mobile
- [ ] Precio + botón de WhatsApp

---

## FASE 4: Copywriting de Alta Conversión

### 4.1 — Principios Aplicados
- [ ] **Anclaje de precio extremo:** $48.000 vs $12.000 (75% OFF)
- [ ] **Eliminación de objeciones:** Privacidad, facilidad de unirse, sin contrato
- [ ] **Escasez genuina:** Solo 4 cupos (plan familiar real)
- [ ] **Prueba social implícita:** "Grupo ya activo, buscamos completar cupos"
- [ ] **Garantía implícita:** "Si no quedás satisfecho, podés salir cuando quieras"
- [ ] **Llamado a la acción específico:** "Reservar mi cupo" (no "Contactanos")

### 4.2 — Tono y Voz
- [ ] Directo, profesional, sin hype falso
- [ ] Datos concretos (5 TB, 75%, $12.000)
- [ ] Lenguaje inclusivo y cercano
- [ ] Palabras clave: "sin interrupciones", "privado", "compartido", "ahorro", "exclusivo"

---

## FASE 5: Performance y QA

### 5.1 — Performance
- [ ] Auditoría de CSS no utilizado (PurgeCSS vía Tailwind)
- [ ] Imágenes optimizadas con `astro:assets`
- [ ] Zero JavaScript en cliente (verificar con `astro build`)
- [ ] HTML comprimido y sin whitespace innecesario
- [ ] Cache headers para Cloudflare/Vercel

### 5.2 — Lighthouse Target
- [ ] Performance: 100
- [ ] Accessibility: 100
- [ ] Best Practices: 100
- [ ] SEO: 100

### 5.3 — Cross-browser
- [ ] Verificar en Chrome, Firefox, Safari, Edge
- [ ] Verificar responsive en todos los breakpoints
- [ ] Verificar en dispositivos móviles reales

---

## FASE 6: Deploy y Producción

### 6.1 — Build & Deploy
- [ ] `astro build` sin errores
- [ ] `astro preview` para smoke test local
- [ ] Conectar repositorio a Cloudflare Pages / Vercel
- [ ] Configurar dominio personalizado (opcional)
- [ ] Configurar SSL automático
- [ ] Activar CDN y compresión Brotli

### 6.2 — Monitoreo Post-Launch
- [ ] Google Analytics mínimo y cookieless (opcional)
- [ ] Configurar Cloudflare Web Analytics
- [ ] Verificar indexación en Google Search Console

---

## FASE 7: Iteración Continua (Backlog)

- [ ] Testimonios reales de miembros del grupo
- [ ] Calculadora de ahorro interactiva
- [ ] Modo claro/oscuro toggle
- [ ] Versión en inglés
- [ ] Página de "Gracias" post-conversión
- [ ] Sistema de referidos
- [ ] Blog SEO con contenido sobre Google AI

---

## 📊 Resumen de Métricas Objetivo

| Métrica | Actual | Objetivo |
|---------|--------|----------|
| Lighthouse Performance | ? | 100 |
| Lighthouse Accessibility | ? | 100 |
| Lighthouse Best Practices | ? | 100 |
| Lighthouse SEO | ? | 100 |
| JavaScript en cliente | ? | 0 KB |
| CSS total | ? | <30 KB |
| HTML total | ? | <50 KB |
| Tiempo de carga | ? | <1s |
| Puntuación de copywriting | ? | Nivel agencia |
