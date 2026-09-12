export default function MethodsSection({ methods }: { methods: string[] }) {
  return (
    <section
      id="methods"
      aria-labelledby="methods-heading"
      className="rounded-card border border-rule bg-white p-card-pad"
    >
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Methods</p>
      <h2 id="methods-heading" className="mt-4 m-0 text-section-h2 text-ink">
        Methods
      </h2>
      {/* Divider lives on each item's own left border, not as a separate
          element between items — with a separate divider, a line that wraps
          right after one leaves it dangling at the end of the line with
          nothing following it. A per-item border just drops off the start
          of whichever item wraps to the next line instead, which reads as
          normal list spacing rather than an orphaned mark. */}
      <ul className="mt-6 flex flex-wrap gap-y-3 list-none p-0">
        {methods.map((method, i) => (
          <li
            key={method}
            className={`text-body-sm font-semibold text-ink whitespace-nowrap ${
              i === 0 ? "pr-grid-gap" : "px-grid-gap border-l border-rule-strong"
            }`}
          >
            {method}
          </li>
        ))}
      </ul>
    </section>
  );
}
