# Reglas de Estilo y Código — Google AI Pro Family

## Astro Components (v7.x)

- **Extensión:** `.astro` siempre. Componentes PascalCase en `src/components/`.
- **Frontmatter:** Lógica JS/TS en `---` al inicio del archivo. Mantenerlo limpio y sin side effects.
- **Template:** HTML semántico abajo, indentación consistente, atributos en líneas separadas cuando sean >3.
- **Props:** Usar `interface Props {}` tipada. Desestructurar con `Astro.props`.
- **Imports:** Agrupar: (1) componentes Astro, (2) imports de datos, (3) estilos. Separar grupos con línea en blanco.
- **Zero JS:** No usar `client:load`, `client:visible` ni directivas de hidratación. Todo es SSG estático.

## Tailwind CSS 4.x

- **Plugin:** `@tailwindcss/vite` (no PostCSS, no `tailwind.config.*`).
- **Configuración:** Todo en `src/styles/global.css` vía `@theme {}`.
- **Clases canónicas Tailwind 4.x:**
  - `bg-linear-to-r` (no `bg-gradient-to-r`)
  - `bg-linear-to-br` (no `bg-gradient-to-br`)
  - `grow` (no `flex-grow`)
  - `shrink-0` (no `flex-shrink-0`)
  - `supports-backdrop-filter:` (no `supports-[backdrop-filter]:`)
- **Responsive:** Mobile-first con breakpoints `sm:` (640px), `md:` (768px), `lg:` (1024px).
- **Custom properties:** Usar `--color-gemini-*`, `--color-yt-red`, `--color-yt-red-light`, `--color-yt-red-dark`.
- **Arbitrary values:** Solo cuando no existe clase utilitaria equivalente en Tailwind, ej: `blur-[120px]`.

## Paleta de Colores

| Semántica | Paleta | Uso |
|-----------|--------|-----|
| IA / Gemini | `gemini-*` (indigo/violet) | Acentos principales, CTAs, glow |
| YouTube | `yt-red` / `red-*` | Entretenimiento, urgencia |
| Almacenamiento | `sky-*` | Nube, espacio |
| Productividad | `emerald-*` | Workspace, ahorro |
| Privacidad | `purple-*` | Seguridad, confianza |
| Fondo | `slate-950` | Background principal |
| Texto | `slate-100/300/400/500` | Jerarquía tipográfica |

## SVG e Íconos

- **Cero dependencias de iconos externos.** Todo SVG inline.
- Íconos de Lucide: copiar el path `d` y renderizar inline con clases Tailwind.
- WhatsApp: usar el path oficial de WhatsApp (incluido en los componentes CTA).
- Atributos `aria-hidden="true"` en SVGs decorativos.

## Accesibilidad (a11y)

- `alt` en imágenes informativas.
- `aria-label` en botones sin texto visible.
- `aria-hidden="true"` en elementos decorativos.
- Contraste mínimo WCAG AA (4.5:1 para texto, 3:1 para texto grande).
- `focus-visible` consistente en elementos interactivos.
- `prefers-reduced-motion` respetado (animaciones anuladas).
- `role` attributes where appropriate.
