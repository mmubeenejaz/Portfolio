import { Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience, earlierExperience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="04" title="Professional Experience" />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
              {experience.role}
            </h3>
            <span className="text-muted">· {experience.company}</span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted-2">{experience.period}</p>
          <p className="mt-4 max-w-3xl text-muted">{experience.summary}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {experience.highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-5">
                <h4 className="text-sm font-medium text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href="/Mubeen-Ejaz-Resume.docx"
            download
            className="btn-lift mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
          >
            <Download size={15} aria-hidden="true" />
            Download Full Resume
          </a>
        </Reveal>

        <Reveal>
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="mb-4 text-sm font-medium text-muted-2">
              Earlier Experience
            </h3>
            <div className="space-y-3">
              {earlierExperience.map((job) => (
                <div
                  key={`${job.company}-${job.period}`}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                >
                  <p className="text-sm text-foreground">
                    {job.role} <span className="text-muted">· {job.company}</span>
                  </p>
                  <p className="font-mono text-xs text-muted-2">{job.period}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
