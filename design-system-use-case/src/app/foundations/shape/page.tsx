import { TokenPage } from "@/components/documentation/TokenPage";
import { primitiveTokens } from "@/data/tokens";

export default function ShapePage() {
  return <TokenPage active="Shape & elevation" title="Shape & elevation" description="Radii, borders, and shadows that create hierarchy without adding visual noise." tokens={primitiveTokens.shape} />;
}
