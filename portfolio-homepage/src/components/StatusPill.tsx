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
const STATUSES = ["Open to work", "Open to networking", "Open to brainstorming"] as const;

// Fixed regardless of which status is showing, sized to fit the longest
// ("Open to brainstorming" — 165px measured at the mono-label face +
// 0.14em tracking) with ~7px of slack for font-fallback variance. Kept
// deliberately tight rather than generous: every px here is a px of
// header row, and the badge is already the widest thing competing for
// that row, so its width sets the breakpoint below. Re-measure both if
// STATUSES changes — this dropped from 204px when the longest status
// went from "Open to freelance projects" (196px) to the current one.
//
// This sits right next to the nav's other buttons, and its own footprint
// changing size as the text rotates would shift Contact and everything
// else in that row. The text is left-aligned inside the box, so the
// leftover width always falls to the right of the text where there is no
// longer any background to reveal it. See the width-hugging version this
// replaced in git history if that behavior is ever wanted back for a
// badge that isn't wedged against other controls.
const TEXT_WIDTH = "172px";

// How long each status stays up. Kept in step with the `status-breathe`
// animation duration in tailwind.config.ts so the dot's fade and the
// text's crossfade share one rhythm — change both together.
const ROTATION_MS = 4500;

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
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  // `min-[1300px]` rather than a stock breakpoint. The badge is meant to
  // be the first thing to go when the header row gets tight — never the
  // nav links or Contact — so its breakpoint tracks the width it actually
  // fits at, measured on the real header rather than guessed: at its
  // current 186px the nav row wraps to a second line at every width up to
  // 1280px but fits cleanly from 1290px up, and 1300 is that threshold
  // plus a small cushion. Re-measure if TEXT_WIDTH or the surrounding nav
  // changes; this has already walked 1360 -> 1340 -> 1300 as the badge
  // shed the pill chrome and then a longer status string.
  return (
    <span className="hidden min-[1300px]:inline-flex items-center gap-2 ml-4 shrink-0">
      {/* `animate-status-breathe` (tailwind.config.ts) rather than
          `animate-pulse`: a slower, deeper fade on the same 4.5s rhythm as
          the rotation, so the dot reads as a cue that the text beside it
          changes. Reduced motion settles it to a solid dot — see the
          keyframe's comment. */}
      <span className="relative w-1.5 h-1.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-pill bg-success animate-status-breathe" />
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
      <span className="sr-only">Open to work, networking, and brainstorming</span>
    </span>
  );
}
