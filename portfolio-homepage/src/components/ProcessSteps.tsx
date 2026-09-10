const steps = [
  {
    number: "01",
    title: "Find the right problem.",
    body: "I dig into user goals, business goals and constraints with the people who know the domain, and question assumptions before they turn into expensive decisions.",
    outcome: "A direction the team agrees on.",
  },
  {
    number: "02",
    title: "Make possibilities tangible.",
    body: "I explore several approaches and turn the strongest into prototypes the team and real users can react to, then we work from what they tell us.",
    outcome: "Evidence for what to build next.",
  },
  {
    number: "03",
    title: "Help the work ship.",
    body: "I stay with the work through build, sitting close to engineering and leaving behind reusable components and decisions the team can point back to.",
    outcome: "A product that works as a whole.",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap items-stretch list-none p-0 m-0">
      {steps.map((step) => (
        <li key={step.number} className="flex flex-col bg-panel rounded-card overflow-hidden">
          <div className="flex flex-col gap-4 p-card-pad">
            <p className="m-0 text-step-num text-ink" aria-hidden="true">
              {step.number}
            </p>
            <h3 className="m-0 text-sub-h4 text-ink">{step.title}</h3>
            <p className="m-0 text-body-lg text-body">{step.body}</p>
          </div>
          <div className="mt-auto border-t border-rule-strong flex flex-col gap-2 p-[clamp(16px,2vw,24px)_clamp(24px,2.6vw,32px)]">
            <p className="font-mono-label text-mono-label uppercase text-muted m-0">Outcome</p>
            <p className="m-0 text-[clamp(15px,1.2vw,17px)] leading-snug font-bold text-ink">{step.outcome}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
