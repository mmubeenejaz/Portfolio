import { Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title={about.eyebrow} />

          <p className="max-w-2xl text-xl font-medium leading-8 text-foreground sm:text-2xl">
            {about.statement}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.principles.map((principle) => (
              <div
                key={principle.title}
                className="card-hover rounded-2xl border border-border bg-surface p-5"
              >
                <p className="text-sm font-semibold text-accent">
                  {principle.title}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-2">
            {about.credential.role} · {about.credential.company} ·{" "}
            {about.credential.period} · {about.credential.note}
          </p>

          <a
            href={profile.resumeUrl}
            download
            className="btn-lift mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          >
            <Download size={14} />
            {about.resumeLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
