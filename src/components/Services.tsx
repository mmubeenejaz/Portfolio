import FeatureGrid from "@/components/FeatureGrid";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <FeatureGrid
      id="services"
      number="01"
      heading={services.heading}
      items={services.items}
      columns={2}
    />
  );
}
