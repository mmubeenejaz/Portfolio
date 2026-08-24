import SectionHeading from "@/components/SectionHeading";
import { earlierExperience } from "@/lib/data";

export default function EarlierExperience() {
  return (
    <section
      id="earlier-experience"
      className="scroll-mt-28 border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="07" title="Earlier Experience" />

        <div className="space-y-10">
          {earlierExperience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="grid gap-2 border-b border-border pb-10 last:border-none last:pb-0 sm:grid-cols-[220px_1fr] sm:gap-8"
            >
              <div>
                <p className="font-mono text-xs text-muted-2">{job.period}</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-foreground">
                  {job.role}
                  <span className="text-muted"> · {job.company}</span>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
