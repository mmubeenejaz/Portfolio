import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { aiTech } from "@/lib/data";

export default function AITech() {
  return (
    <section id="ai-tech" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="05" title={aiTech.heading} />
          <p className="mb-10 max-w-2xl text-balance text-muted">
            {aiTech.subheading}
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {aiTech.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-6">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
