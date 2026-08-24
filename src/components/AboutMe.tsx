import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { aboutMe } from "@/lib/data";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading number="06" title={aboutMe.heading} />
          <div className="max-w-2xl space-y-4">
            {aboutMe.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-balance text-lg leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
