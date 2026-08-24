import SectionHeading from "@/components/SectionHeading";

type SkillGroup = {
  title: string;
  skills: string[];
};

export default function SkillsSection({
  id,
  number,
  heading,
  groups,
  columns = 2,
}: {
  id: string;
  number: string;
  heading: string;
  groups: SkillGroup[];
  columns?: 2 | 3;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number={number} title={heading} />

        <div
          className={`grid gap-6 ${
            columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
          }`}
        >
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 text-sm font-medium text-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
