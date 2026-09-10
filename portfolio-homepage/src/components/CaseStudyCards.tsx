import Image from "next/image";
import Link from "next/link";
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
            <Link href={`/usecases/${study.slug}`} className="block group focus-visible:outline-none">
              <div className="relative aspect-[16/13] bg-panel-alt overflow-hidden">
                <Image
                  src={study.thumbnail}
                  // Decorative: the heading + description right below already
                  // convey what the screenshot shows, so a screen reader
                  // doesn't need to announce the alt text twice.
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col gap-4 p-card-pad">
                <p className="font-mono-label text-mono-label uppercase text-muted m-0">{study.label}</p>
                <h3 className="m-0 text-card-h3 text-ink whitespace-pre-line group-hover:underline decoration-accent underline-offset-4">
                  {study.headline}
                </h3>
                <p className="m-0 text-body-lg text-body max-w-prose">{study.description}</p>
                <span className="text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap">
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
