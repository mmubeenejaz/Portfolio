import SkillsSection from "@/components/SkillsSection";
import { technologyGroups } from "@/lib/data";

export default function Technology() {
  return (
    <SkillsSection
      id="technology"
      number="09"
      heading="Technology"
      groups={technologyGroups}
      columns={3}
    />
  );
}
