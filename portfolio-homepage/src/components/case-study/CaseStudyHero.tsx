import type { CaseStudy } from "@/data/case-studies";
import { hasFullContent } from "@/data/case-studies";

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const full = hasFullContent(study);

  return (
    <section id="about-project" aria-labelledby="case-study-title" className="border-t border-rule pt-[clamp(32px,4vw,56px)]">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Case study</p>
      <h1 id="case-study-title" className="mt-4 m-0 text-hero max-w-[22em]">
        {study.title}
      </h1>
      <p className="mt-6 max-w-prose-cs text-lead text-body">{full ? study.intro : study.description}</p>

      {full && (
        <div className="mt-[clamp(32px,3.5vw,48px)] grid grid-cols-1 sm:grid-cols-2 gap-grid-gap">
          <div className="flex flex-col gap-2 bg-panel rounded-card p-card-pad">
            <p className="font-mono-label text-mono-label uppercase text-muted m-0">Role</p>
            <p className="m-0 text-body-em font-bold text-ink">{study.roleLabel}</p>
          </div>
          <div className="flex flex-col gap-2 bg-panel rounded-card p-card-pad">
            <p className="font-mono-label text-mono-label uppercase text-muted m-0">Focus</p>
            <p className="m-0 text-body-em font-bold text-ink">{study.focusLabel}</p>
          </div>
        </div>
      )}
    </section>
  );
}
