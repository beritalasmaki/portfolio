export default function MethodsSection({ methods }: { methods: string[] }) {
  return (
    <section id="methods" aria-labelledby="methods-heading">
      <p className="font-mono-label text-mono-label uppercase text-muted m-0">Methods</p>
      <h2 id="methods-heading" className="mt-4 m-0 text-section-h2 text-ink">
        Methods
      </h2>
      <ul className="mt-6 flex flex-wrap items-center gap-grid-gap list-none p-0">
        {methods.map((method, i) => (
          <li key={method} className="flex items-center gap-grid-gap">
            <span className="text-body-sm font-semibold text-ink whitespace-nowrap">{method}</span>
            {i < methods.length - 1 && (
              <span aria-hidden="true" className="block w-px h-[18px] bg-rule-strong" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
