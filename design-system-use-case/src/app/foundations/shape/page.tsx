import { TokenPage } from "@/components/documentation/TokenPage";
import type { Metadata } from "next";
import { primitiveTokens } from "@/data/tokens";

export const metadata: Metadata = { title: "Shape and elevation" };

export default function ShapePage() {
  return <TokenPage active="Shape & elevation" title="Shape & elevation" description="Radii, borders, and shadows that create hierarchy without adding visual noise." tokens={primitiveTokens.shape} />;
}
