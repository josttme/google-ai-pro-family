// ═══════════════════════════════════════════════════════════════════
// UTILIDAD — Mapas de colores centralizados (fuente única de verdad)
// ═══════════════════════════════════════════════════════════════════

export type CardColor = "indigo" | "red" | "sky" | "emerald" | "purple";

export interface BentoColorSet {
  tag: string;
  border: string;
  glow: string;
  featureBg: string;
  featureText: string;
  cardBg: string;
}

export interface CategoryColorSet {
  bg: string;
  border: string;
  text: string;
  iconBg: string;
}

/** Color sets para BentoGrid (cards con features) */
export const bentoColors: Record<string, BentoColorSet> = {
  indigo: {
    tag: "bg-gemini-500/15 text-gemini-300 border-gemini-500/20",
    border: "border-gemini-500/40 hover:border-gemini-500/70",
    glow: "bg-gemini-500/10 group-hover:bg-gemini-500/20",
    featureBg: "bg-gemini-950/50 border-gemini-800/40 text-gemini-300",
    featureText: "text-gemini-400",
    cardBg: "bg-gemini-500/5",
  },
  red: {
    tag: "bg-red-500/15 text-red-400 border-red-500/20",
    border: "border-red-500/40 hover:border-red-500/70",
    glow: "bg-red-500/10 group-hover:bg-red-500/20",
    featureBg: "bg-red-950/50 border-red-800/40 text-red-300",
    featureText: "text-red-400",
    cardBg: "bg-red-500/5",
  },
  sky: {
    tag: "bg-sky-500/15 text-sky-300 border-sky-500/20",
    border: "border-sky-500/40 hover:border-sky-500/70",
    glow: "bg-sky-500/10 group-hover:bg-sky-500/20",
    featureBg: "bg-sky-950/50 border-sky-800/40 text-sky-300",
    featureText: "text-sky-400",
    cardBg: "bg-sky-500/5",
  },
  emerald: {
    tag: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    border: "border-emerald-500/40 hover:border-emerald-500/70",
    glow: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    featureBg: "bg-emerald-950/50 border-emerald-800/40 text-emerald-300",
    featureText: "text-emerald-400",
    cardBg: "bg-emerald-500/5",
  },
};

/** Color sets para categorías de beneficios y tablas */
export const categoryColors: Record<string, CategoryColorSet> = {
  indigo: {
    bg: "from-gemini-950/60 to-gemini-950/20",
    border: "border-gemini-800/40",
    text: "text-gemini-400",
    iconBg: "bg-gemini-500/15",
  },
  emerald: {
    bg: "from-emerald-950/60 to-emerald-950/20",
    border: "border-emerald-800/40",
    text: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
  red: {
    bg: "from-red-950/60 to-red-950/20",
    border: "border-red-800/40",
    text: "text-red-400",
    iconBg: "bg-red-500/15",
  },
  sky: {
    bg: "from-sky-950/60 to-sky-950/20",
    border: "border-sky-800/40",
    text: "text-sky-400",
    iconBg: "bg-sky-500/15",
  },
  purple: {
    bg: "from-purple-950/60 to-purple-950/20",
    border: "border-purple-800/40",
    text: "text-purple-400",
    iconBg: "bg-purple-500/15",
  },
};

/** Íconos SVG inline por ID */
export const svgIcons: Record<string, string> = {
  gemini:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  youtube:
    "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  storage:
    "M2 20a2 2 0 002 2h16a2 2 0 002-2v-6H2v6zm0-8h20v-2a2 2 0 00-2-2h-4V6h-2v2h-4V6h-2v2H4a2 2 0 00-2 2v2zm2 6h4v-2H4v2zm6 0h4v-2h-4v2z",
  workspace:
    "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  research:
    "M9.86 2.05L4.5 9.5l5.36 7.45L4.5 22h15l-5.36-5.05L19.5 9.5l-5.36-7.45L12 4.5l-2.14-2.45z",
  people:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  person:
    "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
};
