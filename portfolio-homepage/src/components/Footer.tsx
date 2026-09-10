import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between gap-6 flex-wrap px-gutter pt-8 pb-10">
      <Image
        src="/logo.png"
        alt={`${site.name} — ${site.role}`}
        width={220}
        height={68}
        className="h-[68px] w-auto"
      />
      <p className="m-0 text-[13px] text-footer-meta whitespace-nowrap">
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
