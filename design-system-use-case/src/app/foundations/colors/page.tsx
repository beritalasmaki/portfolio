import { TokenPage } from "@/components/documentation/TokenPage";
import { primitiveTokens, semanticTokens } from "@/data/tokens";

export default function ColorsPage() {
  return <TokenPage active="Colors" title="Colors" description="A restrained palette of primitives mapped to semantic roles, with contrast-aware content and action values." tokens={[...primitiveTokens.colors, ...semanticTokens.filter((token) => token.name.startsWith("color."))]} />;
}
