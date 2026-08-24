import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="06" title="Professional Experience" />

        <div className="mb-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
              {experience.role}
            </h3>
            <span className="text-muted">· {experience.company}</span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted-2">{experience.period}</p>
          <p className="mt-4 text-muted">{experience.summary}</p>
        </div>

        <div className="space-y-8">
          {experience.highlights.map((item, index) => (
            <div key={item.title} className="border-l-2 border-accent/30 pl-4">
              <h4 className="flex items-baseline gap-2 text-base font-medium text-foreground">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>

              {"tags" in item && item.tags && item.tags.length > 0 && (
                <div className="mt-3">
                  {"createdLabel" in item && item.createdLabel && (
                    <p className="mb-2 text-xs text-muted-2">{item.createdLabel}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {"flow" in item && item.flow && (
                <div className="mt-3 overflow-x-auto rounded-lg border border-border bg-background px-3 py-2">
                  <p className="whitespace-nowrap font-mono text-xs text-muted">
                    {item.flow}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
