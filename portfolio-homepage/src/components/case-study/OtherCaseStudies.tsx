import Image from "next/image";
import Link from "next/link";
import { getOtherCaseStudies } from "@/data/case-studies";
import type { CaseStudySlug } from "@/data/case-studies";

export default function OtherCaseStudies({ currentSlug }: { currentSlug: CaseStudySlug }) {
  const others = getOtherCaseStudies(currentSlug);

  return (
    <section id="other" aria-labelledby="other-heading">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Other case studies</p>
      <h2 id="other-heading" className="mt-4 m-0 text-section-h2 text-ink">
        Other case studies
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap items-stretch">
        {others.map((study) => (
          <article key={study.slug} className="flex flex-col bg-panel rounded-card overflow-hidden">
            <Link
              href={`/usecases/${study.slug}`}
              className="flex flex-1 flex-col group rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[-2px]"
            >
              <div className="relative aspect-[16/13] bg-panel-alt overflow-hidden">
                <Image
                  src={study.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-150 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-card-pad">
                <h3 className="m-0 text-card-h3 text-ink group-hover:underline group-focus-visible:underline decoration-accent underline-offset-4">
                  {study.title}
                </h3>
                <p className="m-0 text-body-sm text-body">{study.otherCaseStudyDescription}</p>
                <span className="mt-auto text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color] duration-150 ease-out group-hover:border-accent-dark group-focus-visible:border-accent-dark">
                  View case study →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
