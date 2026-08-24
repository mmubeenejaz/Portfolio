import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education } from "@/lib/data";

export default function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="10" title="Education & Certifications" />

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
              <GraduationCap size={16} className="text-accent" aria-hidden="true" />
              Education
            </h3>
            <p className="text-sm text-foreground">{education.degree}</p>
            <p className="text-sm text-muted">{education.subtitle}</p>
            <p className="mt-2 text-xs text-muted-2">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted-2">
              {education.period}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
              <Award size={16} className="text-accent" aria-hidden="true" />
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="text-sm text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-2">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
