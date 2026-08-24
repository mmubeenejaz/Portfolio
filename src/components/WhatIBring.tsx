import FeatureGrid from "@/components/FeatureGrid";
import { whatIBring } from "@/lib/data";

export default function WhatIBring() {
  return (
    <FeatureGrid
      id="what-i-bring"
      number="12"
      heading={whatIBring.heading}
      items={whatIBring.items}
      columns={2}
    />
  );
}
