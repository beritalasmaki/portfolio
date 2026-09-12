/** Shared paragraph-list body, used by the "Starting Point" section (plain)
 * and the "How it started" / "What I would do differently" accordion
 * panels (wrapped in `AccordionSection`) — same copy styling either way. */
export default function ParagraphList({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="m-0 max-w-prose-cs text-body-lg text-body">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
