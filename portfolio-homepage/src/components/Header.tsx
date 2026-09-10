"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { primaryNav, site } from "@/data/site";

type HeaderProps = {
  /**
   * When set, the page-links slot is replaced with a single "← Back to
   * work" link (case-study page pattern) instead of the primary nav.
   */
  backHref?: string;
  backLabel?: string;
};

export default function Header({ backHref, backLabel = "← Back to work" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile panel on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // A resize past the mobile breakpoint should reset the disclosure so it
  // doesn't stay "open" (and hidden by CSS) once desktop layout returns.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    function onChange() {
      if (query.matches) setOpen(false);
    }
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="border-b border-rule px-gutter pt-8 pb-4">
      <div className="flex items-center justify-between gap-8">
        <Link href="/" className="block shrink-0" aria-label={`${site.name} — home`}>
          <Image
            src="/logo.png"
            alt={`${site.name} — ${site.role}`}
            width={220}
            height={68}
            priority
            className="h-[68px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center justify-end gap-nav-gap flex-wrap min-w-0"
        >
          {backHref ? (
            <Link
              href={backHref}
              className="text-nav font-semibold whitespace-nowrap text-body hover:text-ink"
            >
              {backLabel}
            </Link>
          ) : (
            primaryNav.map((item) => (
              <a key={item.href} href={item.href} className="text-nav font-semibold whitespace-nowrap">
                {item.label}
              </a>
            ))
          )}
          <span aria-hidden="true" className="block w-px h-5 bg-rule-strong ml-2" />
          {/* LinkedIn + Contact grouped with their own tight 8px gap,
              separate from the wider gap-nav-gap the rest of the nav uses. */}
          <span className="flex items-center gap-2">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono-label text-mono-label-em font-medium uppercase text-body border border-rule-strong rounded-pill py-3 px-5 whitespace-nowrap hover:border-ink"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="text-nav font-semibold whitespace-nowrap text-white bg-ink rounded-pill py-3 px-6 hover:bg-ink-alt"
            >
              Contact
            </a>
          </span>
        </nav>

        {/* Mobile nav toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-chrome border border-rule-strong shrink-0"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="#222222"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2.5 5.5h15M2.5 10h15M2.5 14.5h15"
                stroke="#222222"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel — only rendered while open, so it never fights
          Tailwind's `flex` utility for control of `display` the way a
          native `hidden` attribute + `flex` class combo would. */}
      {open && (
        <nav id={panelId} aria-label="Primary" className="md:hidden flex flex-col items-start gap-4 pt-6">
          {backHref ? (
            <Link href={backHref} className="text-nav font-semibold text-body whitespace-nowrap">
              {backLabel}
            </Link>
          ) : (
            primaryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-nav font-semibold whitespace-nowrap"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))
          )}
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-label text-mono-label-em font-medium uppercase text-body border border-rule-strong rounded-pill py-3 px-5"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-nav font-semibold text-white bg-ink rounded-pill py-3 px-6"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
