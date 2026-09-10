import type { Config } from "tailwindcss";

// Design tokens sourced from DESIGN-SYSTEM.md — the single source of truth
// for this site. Do not introduce new colors/sizes/radii without adding
// them there first.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#222222",
        body: "#4a4a4a",
        // DESIGN-SYSTEM.md specs #8a8580 for "muted", but that's only a
        // 3.65:1 contrast ratio on white — fails WCAG AA (4.5:1) for the
        // normal-size mono labels/eyebrows it's used for everywhere. Using
        // the same darker tone the doc already reserves for "footer meta"
        // (5.69:1, passes AA) instead. Flagged for the doc to be updated.
        muted: "#6b6660",
        "footer-meta": "#6b6660",
        accent: "#FC890C",
        "accent-dark": "#A45B0B",
        // For accent-as-text at large-bold sizes only (WCAG AA large-text
        // minimum is 3:1, vs. 4.5:1 for normal text). ~3.2:1 on white —
        // closer to true brand orange than accent-dark, but still fails
        // AA at normal text sizes, so accent-dark remains the token for
        // small text (mono eyebrows, TOC items).
        "accent-hero": "#D9770C",
        panel: "#f5f3ee",
        "panel-alt": "#f0eee9",
        soft: "#fbfaf7",
        rule: "#eeece7",
        "rule-strong": "#e2ded6",
        "ink-alt": "#3a3a3a",
      },
      fontFamily: {
        sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      fontSize: {
        hero: [
          "clamp(40px, 6.2vw, 84px)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        "contact-h2": [
          "clamp(34px, 5vw, 76px)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        "section-h2": [
          "clamp(30px, 3.6vw, 52px)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "800" },
        ],
        "card-h3": [
          "clamp(22px, 2.3vw, 32px)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        "sub-h4": [
          "clamp(19px, 1.7vw, 24px)",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" },
        ],
        "step-num": [
          "clamp(30px, 3vw, 42px)",
          { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        lead: ["clamp(16px, 1.35vw, 19px)", { lineHeight: "1.6" }],
        // "Body emphasis" row (doc §2): same size band as body-lg but a
        // faster-scaling vw (1.2 vs 1.15) — previously reimplemented ad hoc
        // as text-[clamp(15px,1.2vw,17px)] + leading-snug (1.375, just
        // under the doc's 1.4–1.6 range) in 4 places.
        "body-em": ["clamp(15px, 1.2vw, 17px)", { lineHeight: "1.4" }],
        "body-lg": ["clamp(15px, 1.15vw, 17px)", { lineHeight: "1.6" }],
        "body-sm": ["clamp(14px, 1.1vw, 16px)", { lineHeight: "1.6" }],
        nav: ["15px", { letterSpacing: "0.01em" }],
        "mono-label": ["11px", { letterSpacing: "0.14em" }],
        "mono-label-em": ["12px", { letterSpacing: "0.14em" }],
      },
      spacing: {
        "18": "72px",
        "30": "120px",
        gutter: "clamp(24px, 5vw, 72px)",
        rhythm: "clamp(64px, 9vw, 120px)",
        "card-pad": "clamp(24px, 2.6vw, 32px)",
        "pane-pad": "clamp(24px, 3vw, 40px)",
        "grid-gap": "clamp(16px, 2vw, 32px)",
        "grid-gap-lg": "clamp(24px, 4vw, 64px)",
        "nav-gap": "clamp(16px, 2.2vw, 32px)",
        "contact-y": "clamp(48px, 7vw, 96px)",
      },
      borderRadius: {
        pill: "999px",
        card: "20px",
        frame: "14px",
        chrome: "12px",
        "img-inner": "6px",
      },
      boxShadow: {
        frame: "0 8px 22px rgba(34, 34, 34, 0.06)",
        "frame-accent": "0 16px 34px rgba(34, 34, 34, 0.16)",
        lightbox: "0 12px 30px rgba(34, 34, 34, 0.22)",
      },
      maxWidth: {
        prose: "36em",
        "prose-lg": "44em",
        // Case-study pages have more room to spare next to the sticky TOC
        // than the homepage's simpler stacked layout, so their body copy
        // reads at a fixed 800px instead of the general 36em rule.
        "prose-cs": "800px",
      },
    },
  },
  plugins: [],
};

export default config;
