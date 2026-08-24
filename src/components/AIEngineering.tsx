import FeatureGrid from "@/components/FeatureGrid";
import { aiEngineering } from "@/lib/data";

export default function AIEngineering() {
  return (
    <FeatureGrid
      id="ai-engineering"
      number="04"
      heading={aiEngineering.heading}
      subheading={aiEngineering.subheading}
      items={aiEngineering.items}
      columns={2}
    />
  );
}
