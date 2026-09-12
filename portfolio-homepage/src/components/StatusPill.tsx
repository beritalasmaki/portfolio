"use client";

import { useEffect, useState } from "react";

// Rotates through a few short "what I'm open to" statements. Loosely
// inspired by a reference screenshot the request came with (a green-dot
// "Open to experiences" pill) — not copied wholesale: this is a sage
// green (`success`/`success-bg` in tailwind.config.ts) chosen to sit
// comfortably next to the site's own warm cream/orange palette rather
// than a stock Tailwind green.
const STATUSES = ["Open to work", "Open to networking", "Open to freelance projects"] as const;

// Fixed regardless of which status is showing, sized to fit the longest
// ("Open to freelance projects" — 196px measured at this pill's
// mono-label face + 0.14em tracking) with ~8px of slack per side, enough
// to absorb modest font-fallback variance without clipping. The pill sits
// right next to the nav's other buttons, and its own footprint changing
// size as the text rotates would shift Contact and everything else in
// that row; a shorter status just centers within this same fixed box
// instead of hugging its own width. See the width-hugging version this
// replaced in git history if that behavior is ever wanted back for a pill
// that isn't wedged against other controls.
const TEXT_WIDTH = "212px";

export default function StatusPill() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    function onChange() {
      setReducedMotion(query.matches);
    }
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Reduced motion: the interval is never started at all (not just
  // sped up or de-animated) — "just show the first message statically"
  // means the rotation itself stops, not only its visual transition.
  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % STATUSES.length);
    }, 4500);
    return () => clearInterval(id);
  }, [reducedMotion]);

  // `min-[1360px]` rather than `lg:` — the mono-label face with 0.14em
  // tracking makes this pill ~248px wide, and measuring the real header
  // showed the nav row wrapping to a second line at every width up to
  // 1320px with it visible, but fitting cleanly from 1360px up. Since the
  // pill is meant to be the first thing to go when the row gets tight
  // (never the nav links or Contact), its breakpoint follows the width it
  // actually fits at instead of a stock one.
  return (
    <span className="hidden min-[1360px]:inline-flex items-center gap-1.5 rounded-pill bg-success-bg py-1.5 px-3 shrink-0">
      <span className="relative w-1.5 h-1.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-pill bg-success animate-pulse" />
      </span>

      {/* The rotation itself is decorative — a screen reader announcing a
          fresh live-region update every 4-5 seconds would be noisy and
          not particularly useful, so this whole stack is aria-hidden and
          a single static sr-only label covers all three states instead.
          Fixed width (see TEXT_WIDTH above): only opacity crossfades, the
          box itself never resizes, so nothing beside it ever shifts. */}
      <span
        className="relative inline-block h-4 overflow-hidden shrink-0 font-mono-label text-mono-label uppercase text-muted"
        style={{ width: TEXT_WIDTH }}
        aria-hidden="true"
      >
        {STATUSES.map((status, i) => (
          <span
            key={status}
            className={`absolute inset-0 flex items-center justify-center whitespace-nowrap transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {status}
          </span>
        ))}
      </span>
      <span className="sr-only">Open to work, networking, and freelance projects</span>
    </span>
  );
}
