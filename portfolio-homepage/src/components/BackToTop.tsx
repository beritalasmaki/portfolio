"use client";

import { useEffect, useState } from "react";

/** Fixed bottom-right "back to top" pill. Appears after the user scrolls
 * past one viewport height; scrolls smoothly back to the page start. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#page-top"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-4 text-[13px] font-semibold uppercase tracking-[0.04em] text-white shadow-lightbox whitespace-nowrap transition-[opacity,background-color,transform] duration-150 ease-out hover:bg-ink-alt hover:-translate-y-px focus-visible:bg-ink-alt focus-visible:-translate-y-px focus-visible:outline-white ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span aria-hidden="true" className="text-accent">
        ↑
      </span>
      Back to top
    </a>
  );
}
