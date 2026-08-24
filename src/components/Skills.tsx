import SkillsSection from "@/components/SkillsSection";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <SkillsSection
      id="skills"
      number="08"
      heading="Skills"
      groups={skillGroups}
      columns={2}
    />
  );
}
