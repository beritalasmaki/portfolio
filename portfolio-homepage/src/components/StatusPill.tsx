"use client";

import { useEffect, useState } from "react";

// Rotates through a few short "what I'm open to" statements: a small
// `success`-green dot plus the site's standard grey mono eyebrow.
//
// Despite the filename it is no longer a *pill* — it started as one
// (light sage `success-bg` fill, rounded-pill, inspired by a reference
// screenshot), but the fill is what made the fixed width below visible:
// a shorter status left a wide stretch of empty green, and the pill's own
// wide box read as heavy chrome for what is really just a caption. With
// the fill gone the leftover width is simply invisible, so all that's
// left is the dot and the rotating text.
const STATUSES = ["Open to work", "Open to networking", "Open to freelance projects"] as const;

// Fixed regardless of which status is showing, sized to fit the longest
// ("Open to freelance projects" — 196px measured at the mono-label face
// + 0.14em tracking) with a little slack for font-fallback variance. This
// sits right next to the nav's other buttons, and its own footprint
// changing size as the text rotates would shift Contact and everything
// else in that row. The text is left-aligned inside the box, so the
// leftover width always falls to the right of the text where there is no
// longer any background to reveal it. See the width-hugging version this
// replaced in git history if that behavior is ever wanted back for a
// badge that isn't wedged against other controls.
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

  // `min-[1340px]` rather than a stock breakpoint: this badge is ~226px
  // wide (the mono-label face with 0.14em tracking is what makes it that
  // wide), and measuring the real header showed the nav row wrapping to a
  // second line at every width up to 1300px with it visible, but fitting
  // cleanly from 1320px up. 1340 takes that measured threshold plus a
  // small cushion — low enough that a 1366px-wide laptop still shows it
  // once a classic scrollbar is subtracted, which `min-[1360px]` (the
  // value this had while the pill chrome made it 248px) would not. The
  // badge is meant to be the first thing to go when the row gets tight,
  // never the nav links or Contact.
  return (
    <span className="hidden min-[1340px]:inline-flex items-center gap-2 ml-1 shrink-0">
      <span className="relative w-1.5 h-1.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-pill bg-success animate-pulse" />
      </span>

      {/* The rotation itself is decorative — a screen reader announcing a
          fresh live-region update every 4-5 seconds would be noisy and
          not particularly useful, so this whole stack is aria-hidden and
          a single static sr-only label covers all three states instead.
          Fixed width (see TEXT_WIDTH above): only opacity crossfades, the
          box itself never resizes, so nothing beside it ever shifts. The
          text is left-aligned in that box rather than centered, which is
          what keeps the dot right next to it — centering pushed short
          statuses ~50px away from the dot and left it stranded. */}
      <span
        className="relative inline-block h-4 overflow-hidden shrink-0 font-mono-label text-mono-label uppercase text-muted"
        style={{ width: TEXT_WIDTH }}
        aria-hidden="true"
      >
        {STATUSES.map((status, i) => (
          <span
            key={status}
            className={`absolute inset-0 flex items-center justify-start whitespace-nowrap transition-opacity duration-700 ease-in-out ${
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
