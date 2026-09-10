export default function TextSection({
  id,
  label,
  heading,
  paragraphs,
}: {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">{label}</p>
      <h2 id={`${id}-heading`} className="mt-4 m-0 text-section-h2 text-ink">
        {heading}
      </h2>
      <div className="mt-6 flex flex-col gap-6">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="m-0 max-w-prose-lg text-body-lg text-body leading-[1.75]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
