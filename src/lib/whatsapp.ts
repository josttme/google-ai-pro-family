// ═══════════════════════════════════════════════════════════════════
// UTILIDAD — Construcción de links de WhatsApp
// ═══════════════════════════════════════════════════════════════════

import copy from "../data/copy.json";

export function buildWhatsAppLink(message?: string): string {
  const number = copy.contact.whatsappNumber;
  const text = encodeURIComponent(message ?? copy.contact.whatsappMessage);
  return `https://wa.me/${number}?text=${text}`;
}

export function getWhatsAppReserveLink(): string {
  return buildWhatsAppLink(copy.contact.whatsappReserveMessage);
}

/** WhatsApp SVG path — evita duplicar este path en todos los componentes */
export const WHATSAPP_ICON_PATH =
  "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z";

/** Checkmark SVG path */
export const CHECKMARK_ICON_PATH = "M5 13l4 4L19 7";

/** Cross/X SVG path */
export const CROSS_ICON_PATH =
  "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636";

/** Arrow right SVG path */
export const ARROW_RIGHT_PATH = "M13 7l5 5m0 0l-5 5m5-5H6";

/** Clock SVG path */
export const CLOCK_PATH = "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
