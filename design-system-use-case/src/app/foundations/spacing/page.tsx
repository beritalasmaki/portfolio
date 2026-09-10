import { TokenPage } from "@/components/documentation/TokenPage";
import { primitiveTokens } from "@/data/tokens";

export default function SpacingPage() {
  return <TokenPage active="Spacing" title="Spacing" description="An 8px-based scale that keeps page rhythm, component gaps, and responsive layouts predictable." tokens={primitiveTokens.spacing} />;
}
