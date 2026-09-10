import { Button } from "@/components/buttons/Button";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/documentation/CodeTabs";
import { ComponentPage } from "@/components/documentation/ComponentPage";

export const metadata: Metadata = { title: "Buttons" };

const cssCode = `.button {\n  min-height: 44px;\n  border-radius: 999px;\n  padding: 12px 20px;\n}`;
const javascriptCode = `<Button variant="primary">Create project</Button>`;

export default function ButtonsPage() {
   return <ComponentPage name="Buttons" eyebrow="Components / actions" description="Buttons create a clear hierarchy for actions, with predictable modes, states, and a visible keyboard path." usage={<p className="m-0">Use one primary action for the main decision on a surface. Pair it with secondary actions for alternatives and tertiary actions for low-emphasis paths.</p>} contract={["Variants are primary, secondary, and tertiary.", "Modes include default, hover, active, disabled, and loading.", "Loading disables repeated submission and exposes aria-busy.", "The component renders a native button for actions."]} accessibility={["Visible focus uses the shared focus ring.", "Disabled and loading states are not communicated by color alone.", "Button labels remain readable at all supported sizes.", "Use a link when the action changes location rather than state."]} examples={[{ title: "Action hierarchy", description: "Primary, secondary, and tertiary actions work together.", content: <CodeTabs view={<div className="flex flex-wrap items-center gap-3"><Button> Create project </Button><Button variant="secondary">Save draft</Button><Button variant="tertiary">Cancel</Button></div>} cssCode={cssCode} javascriptCode={javascriptCode} /> }, { title: "Modes and states", description: "Hover, active, disabled, and loading states are explicit modes.", content: <CodeTabs view={<div className="flex flex-wrap items-center gap-3"><Button mode="hover">Hover</Button><Button mode="active">Active</Button><Button mode="disabled">Disabled</Button><Button mode="loading">Loading</Button></div>} cssCode={cssCode} javascriptCode={'<Button mode="loading">Saving changes</Button>'} /> }]} />;
}
