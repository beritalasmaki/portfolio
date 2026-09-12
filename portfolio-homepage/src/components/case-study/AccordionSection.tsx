"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Dispatched by TableOfContents when a nav link is clicked — every
 * AccordionSection listens and opens itself if the id matches, so clicking
 * "Challenges & Problem-Solving" in the nav both scrolls to and expands
 * that section. A plain `window` CustomEvent rather than lifted/shared
 * React state: each section already owns its open/closed state locally
 * (matching this codebase's established preference — see AboutMe's
 * per-row independent hover state — for state to live as close to the
 * thing it controls as possible), and TOC has no reason to know which ids
 * are accordions versus plain anchors; dispatching unconditionally on
 * every click is a harmless no-op for ids nothing is listening for. */
export const OPEN_SECTION_EVENT = "cs:open-section";

/**
 * A collapsible page section ("How it started", "Challenges &
 * Problem-Solving", "What I would do differently"). Same eyebrow + heading
 * chrome as the site's plain sections (ImpactSection, MethodsSection), but
 * the heading is itself the toggle button, with a chevron that rotates on
 * open.
 *
 * The panel is always in the DOM (not conditionally rendered) and animates
 * via the `grid-template-rows: 0fr -> 1fr` technique — animates to an
 * intrinsic, unmeasured height in pure CSS, same pattern as AboutMe's
 * WorkingWithMe rows. Unlike those rows, nothing here needs the
 * absolute-overlay workaround: a click-toggled, page-level accordion
 * pushing the sections below it down as it opens is expected, normal
 * behavior, not an accidental side effect competing with a hovering mouse.
 */
export default function AccordionSection({
  id,
  label,
  heading,
  defaultOpen = false,
  children,
}: {
  id: string;
  label: string;
  heading: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const headingId = `${id}-heading`;
  const panelId = `${id}-panel`;

  useEffect(() => {
    function onOpenRequest(event: Event) {
      const detail = (event as CustomEvent<{ id: string }>).detail;
      if (detail?.id === id) setOpen(true);
    }
    window.addEventListener(OPEN_SECTION_EVENT, onOpenRequest);
    return () => window.removeEventListener(OPEN_SECTION_EVENT, onOpenRequest);
  }, [id]);

  return (
    <section id={id} aria-labelledby={headingId}>
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">{label}</p>
      <h2 id={headingId} className="mt-4 m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
          className="group flex w-full items-center justify-between gap-4 text-left"
        >
          <span className="text-section-h2 text-ink">{heading}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-muted text-2xl transition-transform duration-300 ease-out group-hover:text-accent-dark group-focus-visible:text-accent-dark ${
              open ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </button>
      </h2>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
