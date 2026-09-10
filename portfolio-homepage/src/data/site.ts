// Site-wide constants: contact info, nav, client logo row.
// Single source of truth so header/footer/contact block never drift.

export const site = {
  name: "Berit Alasmäki",
  role: "UX & Product Designer",
  email: "berit.alasmaki@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/berit-alasmaki/",
  githubUrl: "https://github.com/beritalasmaki/portfolio",
} as const;

export const primaryNav = [
  { label: "Selected case studies", href: "/#case-studies" },
  { label: "About", href: "/#about" },
] as const;

export type ClientLogo = {
  name: string;
  src: string;
  /** Rendered height in px at the row's natural (desktop) size — logos share one row and are visually balanced by eye, not by raw pixel dimensions. */
  height: number;
};

export const clientLogos: ClientLogo[] = [
  { name: "Kemira", src: "/logos/kemira.svg", height: 30 },
  { name: "University of Helsinki", src: "/logos/ink-helsinki.png", height: 20 },
  { name: "Suomen ympäristökeskus — Finnish Environment Institute", src: "/logos/ink-syke.png", height: 22 },
  { name: "Digione", src: "/logos/ink-digione.png", height: 19 },
  { name: "Espoo Esbo", src: "/logos/ink-espoo.png", height: 28 },
  { name: "Vantaa", src: "/logos/ink-vantaa.png", height: 19 },
  { name: "Fintraffic", src: "/logos/ink-fintraffic.png", height: 36 },
  { name: "Cardiff University", src: "/logos/ink-cardiff.png", height: 34 },
  { name: "CSC", src: "/logos/ink-csc.png", height: 30 },
  { name: "Vero Skatt", src: "/logos/ink-vero.png", height: 21 },
  { name: "Volkswagen", src: "/logos/ink-volkswagen.png", height: 30 },
];
