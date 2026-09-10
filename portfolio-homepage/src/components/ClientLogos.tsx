import Image from "next/image";
import { clientLogos } from "@/data/site";

export default function ClientLogos() {
  return (
    <section aria-labelledby="clients-heading" className="border-t border-rule pt-8">
      <h2 id="clients-heading" className="font-mono-label text-mono-label uppercase text-muted m-0">
        Experience with well-known organisations
      </h2>
      {/* Uniform grid cells: every logo gets the same evenly padded space
          (fixed height per breakpoint) and is scaled to fit via
          object-contain, so the row reads as one neat grid regardless of
          each logo's own aspect ratio — no card background/border behind
          them, logos sit directly on the page. */}
      <ul className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-11 gap-3 sm:gap-4 list-none p-0 m-0">
        {clientLogos.map((logo) => (
          <li key={logo.name} className="relative h-20 sm:h-24 lg:h-20">
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="(min-width: 1024px) 9vw, (min-width: 640px) 22vw, 30vw"
              className="object-contain p-4"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
