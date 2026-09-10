import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between gap-6 flex-wrap px-gutter pt-8 pb-10">
      <Logo height={80} />
      <p className="m-0 text-[13px] text-footer-meta whitespace-nowrap">
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
