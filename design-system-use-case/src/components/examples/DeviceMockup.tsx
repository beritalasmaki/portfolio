import type { ReactNode } from "react";

type DeviceMockupProps = {
  children: ReactNode;
  label: string;
  mode?: "desktop" | "mobile";
};

export function DeviceMockup({ children, label, mode = "desktop" }: DeviceMockupProps) {
  const isMobile = mode === "mobile";
  return (
    <figure className={isMobile ? "w-full max-w-[390px]" : "w-full"}>
      <figcaption className="mb-3 flex items-center gap-3 text-xs font-semibold text-[var(--color-content-muted)]">
        <span className="font-mono uppercase tracking-[0.08em]">{label}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-[var(--color-border-default)]" />
      </figcaption>
      <div className={`overflow-hidden border border-[var(--color-border-strong)] bg-[var(--color-surface-canvas)] shadow-[var(--shadow-panel)] ${isMobile ? "rounded-[24px] p-2" : "rounded-2xl"}`}>
        <div className={isMobile ? "overflow-hidden rounded-[18px] border border-[var(--color-border-default)]" : "overflow-hidden rounded-xl"}>
          {!isMobile ? <div className="flex items-center gap-2 border-b border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[#e27d68]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e2b968]" /><span className="h-2.5 w-2.5 rounded-full bg-[#78ad83]" /><span className="ml-3 font-mono text-[10px] text-[var(--color-content-muted)]">fieldwork.local</span></div> : <div className="flex items-center justify-between border-b border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] px-4 py-3"><span className="font-mono text-[10px] font-semibold">FW</span><span aria-hidden="true" className="material-symbols-outlined text-lg leading-none">menu</span></div>}
          <div className={isMobile ? "max-h-[720px] overflow-y-auto p-4" : "p-8 lg:p-10"}>{children}</div>
        </div>
      </div>
    </figure>
  );
}
