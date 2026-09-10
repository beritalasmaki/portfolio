"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/data/case-studies";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function ScreenshotGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = openIndex !== null;
  const current = isOpen ? images[openIndex] : null;

  function openAt(index: number) {
    lastTriggerRef.current = triggerRefs.current[index];
    setOpenIndex(index);
  }
  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) => {
      setOpenIndex((i) => (i === null ? i : (i + delta + images.length) % images.length));
    },
    [images.length]
  );

  // Lock body scroll, move focus into the dialog, and return it to the
  // thumbnail that opened it when the dialog closes.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      lastTriggerRef.current?.focus();
    };
  }, [isOpen]);

  // Escape / arrow keys / focus trap.
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "Tab") {
        const container = dialogRef.current;
        if (!container) return;
        const focusables = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, step]);

  return (
    <section id="screens" aria-labelledby="screens-heading">
      <div className="flex items-baseline justify-between gap-6 flex-wrap">
        <p className="font-mono-label text-mono-label uppercase text-muted m-0">Selected screens</p>
        <p className="font-mono-label text-mono-label uppercase text-muted m-0">Desktop and mobile, one platform</p>
      </div>
      <h2 id="screens-heading" className="sr-only">
        Examples of UI screens
      </h2>

      <ul className="mt-4 flex flex-wrap gap-4 list-none p-0">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              onClick={() => openAt(i)}
              className="group flex flex-col gap-2 text-left cursor-zoom-in"
            >
              <span className="block bg-white border border-rule rounded-frame p-2 shadow-frame transition-shadow duration-150 ease-out group-hover:shadow-frame-accent group-focus-visible:shadow-frame-accent">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  style={{ height: 210, width: "auto" }}
                  className="rounded-img-inner block"
                />
              </span>
              <span className="font-mono-label text-mono-label uppercase text-muted whitespace-nowrap">
                {img.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {isOpen && current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-[clamp(16px,4vw,56px)] cursor-zoom-out"
          style={{ background: "rgba(34, 34, 34, 0.8)" }}
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            className="relative flex max-h-full max-w-full flex-col gap-4 cursor-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-6 rounded-chrome bg-ink px-4 py-3">
              <p className="font-mono-label text-mono-label uppercase text-white m-0 whitespace-nowrap">
                {current.caption}
                {images.length > 1 && (
                  <span className="text-white/60">
                    {" "}
                    · {openIndex! + 1}/{images.length}
                  </span>
                )}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Previous screenshot"
                      className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white border border-white rounded-pill py-2 px-3 whitespace-nowrap transition-[background-color,color] duration-150 ease-out hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink focus-visible:outline-white"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Next screenshot"
                      className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white border border-white rounded-pill py-2 px-3 whitespace-nowrap transition-[background-color,color] duration-150 ease-out hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink focus-visible:outline-white"
                    >
                      ›
                    </button>
                  </>
                )}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white border border-white rounded-pill py-2 px-4 whitespace-nowrap transition-[background-color,color] duration-150 ease-out hover:bg-white hover:text-ink focus-visible:bg-white focus-visible:text-ink focus-visible:outline-white"
                >
                  Close ✕
                </button>
              </div>
            </div>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              style={{ maxHeight: "75vh", maxWidth: "100%", width: "auto", height: "auto" }}
              className="block rounded-chrome bg-white shadow-lightbox"
            />
          </div>
        </div>
      )}
    </section>
  );
}
