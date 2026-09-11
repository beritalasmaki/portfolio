import { site } from "@/data/site";
import ProcessTimeline from "./ProcessTimeline";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-rhythm">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">03 / about</p>

      <div className="mt-4 max-w-prose flex flex-col gap-4">
        <h2 id="about-heading" className="m-0 text-section-h2 text-ink uppercase">
          Ten years of turning complex problems into products people can use.
        </h2>
        <p className="m-0 text-lead text-body">
          A senior UX and product designer based in Finland, with international
          experience across more than 25 projects. I work closely with product
          owners, specialists and engineers, keeping user needs and business goals
          in view from the first idea to shipped product.
        </p>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="text-nav font-semibold text-ink border-b border-accent pb-2 self-start whitespace-nowrap transition-[border-color,transform] duration-150 ease-out hover:border-accent-dark hover:-translate-y-px focus-visible:border-accent-dark focus-visible:-translate-y-px"
        >
          Get to know me on LinkedIn
        </a>
      </div>

      <ProcessTimeline />

      <div className="flex items-center gap-4 bg-panel rounded-card p-card-pad mt-grid-gap">
        <span aria-hidden="true" className="text-xl text-accent-dark whitespace-nowrap">
          ↗
        </span>
        <p className="m-0 text-[clamp(16px,1.4vw,20px)] leading-snug font-bold text-ink">
          We agree, together, on what success looks like before the work starts.
        </p>
      </div>
    </section>
  );
}
