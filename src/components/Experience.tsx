import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">03</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Experience
          </h2>
        </div>

        <div className="space-y-10">
          {experience.map((job) => (
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

                {job.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
