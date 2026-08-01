import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://googleaifamily.ar",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
      // CSS code-splitting mínimo (un solo archivo CSS)
      cssCodeSplit: false,
    },
  },
  build: {
    // HTML minificado al máximo
    inlineStylesheets: "auto",
  },
  // Sin trailing slash para evitar redirects 301 innecesarios
  trailingSlash: "never",
  // Compresión para dev server
  server: {
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  },
});
