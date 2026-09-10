import { TokenPage } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Spacing" };

export default function SpacingPage() {
  return <TokenPage active="Spacing" title="Spacing" description="An 8px-based scale that keeps page rhythm, component gaps, and responsive layouts predictable." tokens={primitiveTokens.spacing} />;
}
