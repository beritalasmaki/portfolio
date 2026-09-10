import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ChallengesSection from "@/components/case-study/ChallengesSection";
import ImpactSection from "@/components/case-study/ImpactSection";
import MethodsSection from "@/components/case-study/MethodsSection";
import OtherCaseStudies from "@/components/case-study/OtherCaseStudies";
import ScreenshotGallery from "@/components/case-study/ScreenshotGallery";
import TableOfContents, { type TocItem } from "@/components/case-study/TableOfContents";
import TextSection from "@/components/case-study/TextSection";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy, hasFullContent } from "@/data/case-studies";
import type { CaseStudySlug } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug as CaseStudySlug);
  if (!study) return {};
  return {
    title: `${study.title} — Berit Alasmäki`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug as CaseStudySlug);
  if (!study) notFound();

  const full = hasFullContent(study);

  const tocItems: TocItem[] = [
    { id: "about-project", label: "About the project" },
    ...(full
      ? ([
          { id: "screens", label: "Examples of UI-screens" },
          { id: "impact", label: "The Impact" },
          { id: "started", label: "How it started" },
          { id: "challenges", label: "Challenges & Problem-Solving" },
          { id: "differently", label: "What I would do differently" },
          { id: "methods", label: "Methods" },
        ] satisfies TocItem[])
      : []),
    { id: "other", label: "Other case studies" },
  ];

  return (
    <>
      <Header backHref="/" backLabel="← Back to work" />
      <main className="px-gutter pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-x-14">
          <TableOfContents items={tocItems} />

          <div className="min-w-0 flex flex-col gap-[clamp(40px,5vw,72px)]">
            <Reveal>
              <CaseStudyHero study={study} />
            </Reveal>

            {full && (
              <Reveal>
                <ScreenshotGallery images={study.gallery} />
              </Reveal>
            )}
            {full && (
              <Reveal>
                <ImpactSection intro={study.impactIntro} cards={study.impactCards} />
              </Reveal>
            )}
            {full && (
              <Reveal>
                <TextSection id="started" label="How it started" heading="How it started" paragraphs={[study.howItStarted]} />
              </Reveal>
            )}
            {full && (
              <Reveal>
                <ChallengesSection subsections={study.challenges} />
              </Reveal>
            )}
            {full && (
              <Reveal>
                <TextSection
                  id="differently"
                  label="What I would do differently"
                  heading="What I would do differently"
                  paragraphs={study.whatIWouldDoDifferently}
                />
              </Reveal>
            )}
            {full && (
              <Reveal>
                <MethodsSection methods={study.methods} />
              </Reveal>
            )}

            <Reveal>
              <OtherCaseStudies currentSlug={study.slug} />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
