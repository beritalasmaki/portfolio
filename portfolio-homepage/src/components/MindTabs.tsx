"use client";

import { useId, useRef, useState } from "react";

type Tab = {
  question: string;
  eyebrow: string;
  headline: string;
  body: string;
  highlight: string;
  linkLabel: string;
  linkHref: string;
};

const tabs: Tab[] = [
  {
    question: "Can design grow our business?",
    eyebrow: "what you get",
    headline: "Less friction. More room to grow.",
    body: "Better adoption can support revenue. Less avoidable work can protect margins. I help find the friction in your product, fix the journeys around it, and agree with you on how we measure the business impact.",
    highlight:
      "In university services, clearer self-service helped people find answers faster and eased pressure on staff.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
  {
    question: "Can you solve a tricky problem?",
    eyebrow: "what you get",
    headline: "Complexity, untangled. Decisions, made.",
    body: "Long-running problems usually hide in the gaps between teams, tools and rules. I map how the work really flows, name the constraints out loud, and design something the organisation can actually run.",
    highlight:
      "In industrial data tooling, a guided calculation flow replaced error-prone manual steps and cut the guesswork out of daily decisions.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
  {
    question: "Will this make a real difference?",
    eyebrow: "what you get",
    headline: "Evidence first. Opinions later.",
    body: "We agree on what better looks like before anything is drawn. Then we test with the people who use the product, watch what changes, and let the results steer the next round of work.",
    highlight:
      "In service design for a large organisation, testing with real users settled a long-standing internal debate that no amount of discussion had resolved.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
  {
    question: "How can you help my product?",
    eyebrow: "what you get",
    headline: "A fresh perspective. A practical way forward.",
    body: "Start with a short review of where your product loses people. From there we shape a plan you can act on: the right problem framed, the design work done, and handover that developers can build from.",
    highlight:
      "I work closely with your product and engineering teams, connecting the details through reusable components and clear decisions. On a large public sector platform, closer collaboration with engineering meant fewer decisions got lost between design and build.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
];

export default function MindTabs() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function focusTab(index: number) {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
    }
  }

  const current = tabs[active];

  return (
    <section id="key-skills" aria-labelledby="mind-heading" className="mt-rhythm">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">01 / your next move</p>
      <div className="flex items-end justify-between gap-grid-gap-lg flex-wrap mt-4">
        <h2 id="mind-heading" className="m-0 text-section-h2 text-ink">
          What&apos;s on your mind?
        </h2>
        <p className="m-0 text-[15px] leading-snug text-footer-meta max-w-[20em]">
          A good collaboration starts with a better question.
        </p>
      </div>

      {/* Desktop / tablet: vertical tablist + shared panel to the right.
          Hidden below md, where the accordion block just below takes over —
          two separate markup blocks rather than one responsive layout,
          matching Header.tsx's mobile-nav split. */}
      <div className="relative mt-8 hidden bg-panel rounded-card overflow-hidden md:grid md:grid-cols-2 items-stretch">
        <div role="tablist" aria-orientation="vertical" aria-label="Questions" className="flex flex-col bg-panel-alt">
          {tabs.map((tab, index) => {
            const selected = index === active;
            const tabId = `${baseId}-tab-${index}`;
            const panelId = `${baseId}-panel`;
            return (
              <button
                key={tab.question}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={tabId}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`group flex flex-1 items-center justify-between gap-4 py-[clamp(16px,2.2vw,24px)] px-[clamp(16px,2.2vw,32px)] text-left border-b border-rule last:border-b-0 border-l-4 transition-[background-color,border-color] duration-150 ease-out ${
                  selected
                    ? "bg-ink text-white border-l-ink focus-visible:outline-white"
                    : "bg-panel-alt text-ink border-l-transparent hover:bg-rule-strong hover:border-l-accent focus-visible:bg-rule-strong focus-visible:border-l-accent"
                }`}
              >
                <span className="text-[clamp(15px,1.2vw,17px)] font-semibold leading-snug text-pretty">
                  {tab.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-[15px] whitespace-nowrap transition-[color,transform] duration-150 ease-out ${
                    selected
                      ? "text-white"
                      : "text-muted group-hover:text-accent-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:text-accent-dark group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
                  }`}
                >
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          tabIndex={0}
          className="flex flex-col gap-4 bg-panel p-pane-pad"
        >
          <div className="flex items-center gap-2 font-mono-label text-mono-label-em font-medium uppercase text-ink">
            <span aria-hidden="true" className="block w-6 h-0.5 bg-accent" />
            {current.eyebrow}
          </div>
          <h3 className="m-0 text-card-h3 text-ink whitespace-pre-line">{current.headline}</h3>
          <p className="m-0 text-body-lg text-body max-w-prose">{current.body}</p>
          <div className="flex gap-4 items-start border-t border-rule-strong pt-4">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-pill bg-accent mt-2 shrink-0" />
            <p className="m-0 text-body-sm text-ink-alt max-w-[34em]">{current.highlight}</p>
          </div>
          <a
            href={current.linkHref}
            className="ml-4 text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color,transform] duration-150 ease-out hover:border-accent-dark hover:-translate-y-px focus-visible:border-accent-dark focus-visible:-translate-y-px"
          >
            {current.linkLabel}
          </a>
        </div>
      </div>

      {/* Mobile: accordion — each answer expands directly below its own
          question, instead of a shared panel after the full list of
          questions. Panels are conditionally rendered (not the `hidden`
          attribute), same precedent as Header.tsx's mobile nav. */}
      <div className="mt-8 flex flex-col bg-panel rounded-card overflow-hidden divide-y divide-rule md:hidden">
        {tabs.map((tab, index) => {
          const expanded = index === openMobile;
          const buttonId = `${baseId}-accordion-button-${index}`;
          const panelId = `${baseId}-accordion-panel-${index}`;
          return (
            <div key={tab.question}>
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpenMobile(expanded ? null : index)}
                  className={`flex w-full items-center justify-between gap-4 py-4 px-[clamp(16px,4vw,24px)] text-left border-l-4 transition-[background-color,border-color] duration-150 ease-out ${
                    expanded
                      ? "bg-ink text-white border-l-ink focus-visible:outline-white"
                      : "bg-panel-alt text-ink border-l-transparent focus-visible:bg-rule-strong focus-visible:border-l-accent"
                  }`}
                >
                  <span className="text-[15px] font-semibold leading-snug text-pretty">{tab.question}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[15px] transition-transform duration-150 ease-out ${
                      expanded ? "text-white rotate-180" : "text-muted"
                    }`}
                  >
                    ↓
                  </span>
                </button>
              </h3>
              {expanded && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="flex flex-col gap-4 bg-panel p-pane-pad"
                >
                  <div className="flex items-center gap-2 font-mono-label text-mono-label-em font-medium uppercase text-ink">
                    <span aria-hidden="true" className="block w-6 h-0.5 bg-accent" />
                    {tab.eyebrow}
                  </div>
                  <h4 className="m-0 text-card-h3 text-ink whitespace-pre-line">{tab.headline}</h4>
                  <p className="m-0 text-body-lg text-body max-w-prose">{tab.body}</p>
                  <div className="flex gap-4 items-start border-t border-rule-strong pt-4">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-pill bg-accent mt-2 shrink-0" />
                    <p className="m-0 text-body-sm text-ink-alt max-w-[34em]">{tab.highlight}</p>
                  </div>
                  <a
                    href={tab.linkHref}
                    className="ml-4 text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color,transform] duration-150 ease-out hover:border-accent-dark hover:-translate-y-px focus-visible:border-accent-dark focus-visible:-translate-y-px"
                  >
                    {tab.linkLabel}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
