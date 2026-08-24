import SectionHeading from "@/components/SectionHeading";
import { aboutMe } from "@/lib/data";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="11" title={aboutMe.heading} />

        <div className="max-w-3xl space-y-4">
          {aboutMe.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-balance text-lg leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {aboutMe.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-base font-medium text-accent">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-balance text-lg font-medium leading-8 text-foreground">
          {aboutMe.closing}
        </p>
      </div>
    </section>
  );
}
