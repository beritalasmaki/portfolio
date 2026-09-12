import Link from "next/link";
import CaseStudyThumbnail from "@/components/case-study/CaseStudyThumbnail";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudyCards() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="mt-rhythm">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">02 / selected case studies</p>
      <h2 id="case-studies-heading" className="mt-4 m-0 text-section-h2 text-ink">
        What better looks like.
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-grid-gap items-stretch">
        {caseStudies.map((study) => (
          <article key={study.slug} className="flex flex-col bg-panel rounded-card overflow-hidden">
            <Link
              href={`/usecases/${study.slug}`}
              className="block group rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px]"
            >
              <CaseStudyThumbnail study={study} sizes="(min-width: 768px) 50vw, 100vw" />
              <div className="flex flex-col gap-4 p-card-pad">
                <p className="font-mono-label text-mono-label uppercase text-muted m-0">{study.label}</p>
                <h3 className="m-0 text-card-h3 text-ink whitespace-pre-line group-hover:underline group-focus-visible:underline decoration-accent underline-offset-4">
                  {study.headline}
                </h3>
                <p className="m-0 text-body-lg text-body max-w-prose">{study.description}</p>
                <span className="text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-150 ease-out group-hover:border-accent-dark group-focus-visible:border-accent-dark">
                  {study.ctaLabel}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
