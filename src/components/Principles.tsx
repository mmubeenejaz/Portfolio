import FeatureGrid from "@/components/FeatureGrid";
import { principles } from "@/lib/data";

export default function Principles() {
  return (
    <FeatureGrid
      id="principles"
      number="05"
      heading={principles.heading}
      items={principles.items}
      columns={2}
    />
  );
}
