"use client";

import { useEffect, useState } from "react";

// Rotates through a few short "what I'm open to" statements. Loosely
// inspired by a reference screenshot the request came with (a green-dot
// "Open to experiences" pill) — not copied wholesale: this is a sage
// green (`success`/`success-bg` in tailwind.config.ts) chosen to sit
// comfortably next to the site's own warm cream/orange palette rather
// than a stock Tailwind green.
const STATUSES = ["Open to work", "Open to networking", "Open to freelance projects"] as const;

// Generous enough to fit the longest status ("Open to freelance
// projects") at this pill's small sans-serif size without wrapping — the
// crossfade below needs a fixed-width box so the two overlapping layers
// don't fight each other for size as the text changes.
const TEXT_WIDTH = "15ch";

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

  return (
    <span className="hidden lg:inline-flex items-center gap-1.5 rounded-pill bg-success-bg py-1.5 px-3 whitespace-nowrap shrink-0">
      <span className="relative w-1.5 h-1.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-pill bg-success animate-pulse" />
      </span>

      {/* The rotation itself is decorative — a screen reader announcing a
          fresh live-region update every 4-5 seconds would be noisy and
          not particularly useful, so this whole stack is aria-hidden and
          a single static sr-only label covers all three states instead. */}
      <span className="relative inline-block h-[1em] overflow-hidden" style={{ width: TEXT_WIDTH }} aria-hidden="true">
        {STATUSES.map((status, i) => (
          <span
            key={status}
            className={`absolute inset-0 text-[12px] font-semibold text-success transition-opacity duration-700 ease-in-out ${
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
