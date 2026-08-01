// ═══════════════════════════════════════════════════════════════════
// TIPOS — Esquema completo de copy.json (alineado con Fase 4)
// ═══════════════════════════════════════════════════════════════════

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  locale: string;
  ogImage: string;
  siteName: string;
}

export interface PricingData {
  monthlyFee: string;
  currency: string;
  marketValueIndividual: number;
  savingsPercentage: string;
  availableSlots: number;
  paymentMethods: string[];
  paymentWindow: string;
}

export interface WhatsAppVariants {
  urgency: string;
  value: string;
  privacy: string;
  direct: string;
  referral: string;
}

export interface ContactData {
  whatsappNumber: string;
  whatsappMessage: string;
  whatsappReserveMessage: string;
  whatsappVariants: WhatsAppVariants;
}

export interface UrgencyData {
  availableSlots: number;
  totalSlots: number;
  adminSlots: number;
  messages: {
    header: string;
    hero: string;
    cta: string;
    floating: string;
  };
}

export interface PersuasionData {
  guarantees: string[];
  socialProof: string[];
  reciprocity: string;
  scarcity: {
    primary: string;
    secondary: string;
    counter: string;
  };
}

export interface HeroData {
  badge: string;
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  secondaryCta: string;
  priceAnchorLabel: string;
  priceAnchorValue: string;
  priceAnchorHint: string;
  groupPriceLabel: string;
  savingsLabel: string;
  slotsIndicator: string;
  activationLabel: string;
}

export interface BentoCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  color: "indigo" | "red" | "sky" | "emerald";
  span: string;
  features: string[];
}

export interface BentoSectionData {
  title: string;
  subtitle: string;
  cards: BentoCard[];
}

export interface BenefitCategory {
  id: string;
  title: string;
  icon: string;
  color: "indigo" | "emerald" | "red" | "sky" | "purple";
  benefits: string[];
}

export interface WhatIsNotShared {
  title: string;
  subtitle: string;
  items: string[];
}

export interface BenefitsBreakdownData {
  badge: string;
  title: string;
  subtitle: string;
  categories: BenefitCategory[];
  whatIsNotShared: WhatIsNotShared;
}

export interface PriceRow {
  id: string;
  name: string;
  subtitle: string;
  iconColor: string;
  individualPrice: string;
  groupPrice: string;
}

export interface PriceComparisonData {
  badge: string;
  title: string;
  subtitle: string;
  totalLabel: string;
  totalIndividualLabel: string;
  totalGroupLabel: string;
  savingsLabel: string;
  ctaText: string;
  ctaDisclaimer: string;
  columns: {
    individual: string;
    group: string;
    included: string;
  };
  rows: PriceRow[];
}

export interface PrivacyBadge {
  icon: string;
  title: string;
  description: string;
}

export interface PrivacyData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  guaranteeCtaText: string;
  guaranteeDisclaimer: string;
  badges: PrivacyBadge[];
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface HowItWorksData {
  badge: string;
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
}

export interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}

export interface TrustSignalsData {
  title: string;
  signals: TrustSignal[];
}

export interface CTASectionData {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  disclaimer: string;
  trustItems: string[];
}

export interface FAQItem {
  q: string;
  a: string;
  isCTA?: boolean;
  ctaText?: string;
}

export interface FAQData {
  badge: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface FooterData {
  brandName: string;
  text: string;
  copyright: string;
  slots: string;
  trademark: string;
}

/** Tipo raíz completo de copy.json */
export interface CopyData {
  seo: SEOData;
  pricing: PricingData;
  contact: ContactData;
  urgency: UrgencyData;
  persuasion: PersuasionData;
  hero: HeroData;
  bento: BentoSectionData;
  benefitsBreakdown: BenefitsBreakdownData;
  priceComparison: PriceComparisonData;
  privacy: PrivacyData;
  howItWorks: HowItWorksData;
  trustSignals: TrustSignalsData;
  ctaSection: CTASectionData;
  faq: FAQData;
  footer: FooterData;
}
