"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

/**
 * Sticky in-page table of contents with real scroll-spy: a single
 * IntersectionObserver watches every section, and whichever one crosses a
 * thin band near the top of the viewport becomes "active". A section stays
 * active until the next one crosses that same line, which is the standard
 * scroll-spy recipe and avoids the "nothing is active between sections"
 * flicker a naive top-edge check gives you.
 */
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // A thin horizontal band starting just below the sticky-ish reading
      // position: a section "activates" once its top crosses ~15% down the
      // viewport, and stays active until the next section reaches that line.
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="mb-10 flex flex-col gap-4 rounded-card border border-rule bg-white p-6 lg:sticky lg:top-8 lg:mb-0 lg:self-start"
    >
      <p className="font-mono-label text-mono-label uppercase text-muted m-0 pb-2">On this page</p>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "location" : undefined}
            className={`flex items-center gap-2 py-2 pl-4 -ml-px text-nav border-l-4 transition-[border-color,color] duration-150 ease-out ${
              isActive
                ? "border-accent text-accent-dark font-bold rounded-r-[16px]"
                : "border-rule text-body font-semibold hover:border-rule-strong hover:text-ink focus-visible:border-rule-strong focus-visible:text-ink"
            }`}
          >
            {isActive && <span aria-hidden="true" className="w-1.5 h-1.5 rounded-pill bg-accent shrink-0" />}
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
