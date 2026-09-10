import Image from "next/image";
import { clientLogos } from "@/data/site";

export default function ClientLogos() {
  return (
    <section aria-labelledby="clients-heading" className="border-t border-rule pt-8">
      <h2 id="clients-heading" className="font-mono-label text-mono-label uppercase text-muted m-0">
        Experience with well-known organisations
      </h2>
      <ul className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-11 items-center justify-items-center gap-[clamp(8px,1.8vw,24px)] list-none p-0 m-0">
        {clientLogos.map((logo) => (
          <li key={logo.name} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={160}
              height={logo.height}
              style={{ maxHeight: logo.height }}
              className="w-auto h-auto max-w-full block"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
