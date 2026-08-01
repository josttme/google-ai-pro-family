// ═══════════════════════════════════════════════════════════════════
// Lighthouse CI Configuration
// ═══════════════════════════════════════════════════════════════════
// Uso: npx lighthouse-ci <url> o integrar con GitHub Actions
// Ver: https://github.com/GoogleChrome/lighthouse-ci

export default {
  ci: {
    collect: {
      staticDistDir: "./dist",
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
        skipAudits: [
          "uses-http2",              // CDN lo maneja
          "is-on-https",             // CDN lo maneja
          "canonical",               // Ya verificado manualmente
          "offline-startup",         // No es PWA
        ],
      },
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        // Performance budget: agresivo para SSG con zero JS
        "first-contentful-paint": ["error", { maxNumericValue: 1000 }],
        "largest-contentful-paint": ["error", { maxNumericValue: 1500 }],
        "total-blocking-time": ["error", { maxNumericValue: 0 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.05 }],
        "speed-index": ["error", { maxNumericValue: 1200 }],

        // Accessibility
        "categories:accessibility": ["error", { minScore: 0.98 }],

        // Best Practices
        "categories:best-practices": ["error", { minScore: 0.98 }],

        // SEO
        "categories:seo": ["error", { minScore: 0.98 }],

        // Zero JS
        "unminified-javascript": "off",
        "unused-javascript": "off",
        "render-blocking-resources": ["warn", { maxLength: 1 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
