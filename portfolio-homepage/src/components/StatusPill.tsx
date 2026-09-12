"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Avoids the "useLayoutEffect does nothing on the server" warning — see
// Reveal.tsx for the same pattern and its full rationale.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Rotates through a few short "what I'm open to" statements. Loosely
// inspired by a reference screenshot the request came with (a green-dot
// "Open to experiences" pill) — not copied wholesale: this is a sage
// green (`success`/`success-bg` in tailwind.config.ts) chosen to sit
// comfortably next to the site's own warm cream/orange palette rather
// than a stock Tailwind green.
const STATUSES = ["Open to work", "Open to networking", "Open to freelance projects"] as const;

export default function StatusPill() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Natural rendered width of each status string, in px, measured once
  // against a hidden clone at this pill's own font/size — this is what
  // lets the pill "hug" whichever text is current instead of sitting in
  // one box sized for the longest of the three. `null` until the
  // measurement effect runs (client-only); see the render below for how
  // that brief window is handled.
  const [widths, setWidths] = useState<number[] | null>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    setWidths(
      STATUSES.map((status) => {
        el.textContent = status;
        return el.getBoundingClientRect().width;
      })
    );
  }, []);

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
          a single static sr-only label covers all three states instead.
          Width transitions in step with the opacity crossfade (both
          duration-500/700) once `widths` is known; before that first
          layout effect runs, the box has no explicit width — its
          absolutely-positioned children don't establish one on their
          own, so it very briefly renders as just the dot until
          measurement completes (a client-only layout effect, so this
          resolves before the browser's first paint in practice). */}
      <span
        className="relative inline-block h-[1em] overflow-hidden transition-[width] duration-500 ease-out"
        style={widths ? { width: `${widths[index]}px` } : undefined}
        aria-hidden="true"
      >
        {STATUSES.map((status, i) => (
          <span
            key={status}
            className={`absolute inset-y-0 left-0 whitespace-nowrap text-[12px] font-semibold text-success transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {status}
          </span>
        ))}
      </span>

      {/* Hidden measurer, not display:none (that would report zero
          width) — off-canvas via absolute + a negative stacking
          context, reused for all three strings in the layout effect
          above. Must share the visible text's exact font/size/weight so
          the measured widths are accurate. */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="invisible absolute left-0 top-0 -z-10 whitespace-nowrap text-[12px] font-semibold"
      />

      <span className="sr-only">Open to work, networking, and freelance projects</span>
    </span>
  );
}
