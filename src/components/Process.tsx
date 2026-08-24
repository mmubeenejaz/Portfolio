import SectionHeading from "@/components/SectionHeading";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="03" title={process.heading} />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-accent/40 via-border to-transparent"
          />

          <div className="space-y-10">
            {process.steps.map((step) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="relative flex w-12 shrink-0 flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm text-accent">
                    {step.number}
                  </span>
                </div>

                <div className="flex-1 rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                    {step.description}
                  </p>

                  {step.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
