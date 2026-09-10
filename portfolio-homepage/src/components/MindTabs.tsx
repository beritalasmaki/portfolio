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
    headline: "Less friction.\nMore room to grow.",
    body: "Better adoption can support revenue. Less avoidable work can protect margins. I help find the friction in your product, fix the journeys around it, and agree with you on how we measure the business impact.",
    highlight:
      "In university services, clearer self-service helped people find answers faster and eased pressure on staff.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
  {
    question: "Can you solve a tricky problem?",
    eyebrow: "what you get",
    headline: "Complexity, untangled.\nDecisions, made.",
    body: "Long-running problems usually hide in the gaps between teams, tools and rules. I map how the work really flows, name the constraints out loud, and design something the organisation can actually run.",
    highlight:
      "In industrial data tooling, a guided calculation flow replaced error-prone manual steps and cut the guesswork out of daily decisions.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
  {
    question: "Will this make a real difference?",
    eyebrow: "what you get",
    headline: "Evidence first.\nOpinions later.",
    body: "We agree on what better looks like before anything is drawn. Then we test with the people who use the product, watch what changes, and let the results steer the next round of work.",
    highlight:
      "In public sector service design, testing with real users settled a long-standing internal debate that no amount of discussion had resolved.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
  {
    question: "How can you help my product?",
    eyebrow: "what you get",
    headline: "A fresh perspective.\nA practical way forward.",
    body: "Start with a short review of where your product loses people. From there we shape a plan you can act on: the right problem framed, the design work done, and handover that developers can build from.",
    highlight:
      "I work closely with your product and engineering teams, connecting the details through reusable components and clear decisions. On a large public sector platform, closer collaboration with engineering meant fewer decisions got lost between design and build.",
    linkLabel: "See the project behind the answer",
    linkHref: "#case-studies",
  },
];

export default function MindTabs() {
  const [active, setActive] = useState(0);
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

      <div className="relative mt-8 bg-panel rounded-card overflow-hidden grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div role="tablist" aria-orientation="vertical" aria-label="Questions" className="flex flex-col bg-soft">
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
                className={`flex flex-1 items-center justify-between gap-4 py-6 px-[clamp(16px,2.2vw,32px)] text-left border-b border-rule last:border-b-0 transition-colors ${
                  selected ? "bg-ink text-white" : "bg-soft text-ink"
                }`}
              >
                <span className="text-[clamp(15px,1.2vw,17px)] font-semibold leading-snug text-pretty">
                  {tab.question}
                </span>
                <span aria-hidden="true" className={`text-[15px] whitespace-nowrap ${selected ? "text-white" : "text-muted"}`}>
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
          <div className="flex items-center gap-2 font-mono-label text-mono-label-em font-medium uppercase text-accent-dark">
            <span aria-hidden="true" className="block w-6 h-0.5 bg-accent" />
            {current.eyebrow}
          </div>
          <h3 className="m-0 text-card-h3 text-ink whitespace-pre-line">{current.headline}</h3>
          <p className="m-0 text-body-lg text-body max-w-prose-lg">{current.body}</p>
          <div className="flex gap-4 items-start border-t border-rule-strong pt-4">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-pill bg-accent mt-2 shrink-0" />
            <p className="m-0 text-body-sm text-ink-alt max-w-[34em]">{current.highlight}</p>
          </div>
          <a
            href={current.linkHref}
            className="ml-4 text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap"
          >
            {current.linkLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
