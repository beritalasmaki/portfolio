import type { ChallengeSubsection } from "@/data/case-studies";

export default function ChallengesSection({ subsections }: { subsections: ChallengeSubsection[] }) {
  return (
    <section id="challenges" aria-labelledby="challenges-heading">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Challenges &amp; Problem-Solving</p>
      <h2 id="challenges-heading" className="mt-4 m-0 text-section-h2 text-ink">
        Challenges &amp; Problem-Solving
      </h2>

      <div className="mt-8 flex flex-col gap-grid-gap-lg">
        {subsections.map((item) => (
          <div key={item.number} className="flex flex-col gap-4 border-t border-rule pt-8">
            <p className="font-mono-label text-mono-label uppercase text-muted m-0" aria-hidden="true">
              {item.number}
            </p>
            <h3 className="m-0 text-card-h3 text-ink">{item.title}</h3>
            <p className="m-0 max-w-prose-lg text-body-lg text-body leading-[1.75]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
