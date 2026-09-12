import type { ChallengeSubsection } from "@/data/case-studies";

/** Body-only — the "Challenges & Problem-Solving" heading/eyebrow chrome
 * now lives on the `AccordionSection` this is rendered inside of. */
export default function ChallengesSection({ subsections }: { subsections: ChallengeSubsection[] }) {
  return (
    <div className="flex flex-col gap-grid-gap-lg">
      {subsections.map((item) => (
        <div key={item.number} className="flex flex-col gap-4 border-t border-rule pt-8">
          <p className="font-mono-label text-mono-label uppercase text-muted m-0" aria-hidden="true">
            {item.number}
          </p>
          <h3 className="m-0 text-card-h3 text-ink">{item.title}</h3>
          <p className="m-0 max-w-prose-cs text-body-lg text-body">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
