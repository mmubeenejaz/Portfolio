import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="03" title={process.heading} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 60}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent">
                    {step.number}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {step.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2 py-0.5 text-xs text-muted-2"
                    >
                      {tag}
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
