import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { certifications, education } from "@/lib/data";

export default function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="07" title="Education & Certifications" />

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-sm font-medium text-foreground">
              {education.degree}
            </p>
            <span className="text-sm text-muted">· {education.school}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
              >
                {cert}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
