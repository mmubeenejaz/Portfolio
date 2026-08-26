import ScrollStory from "@/components/ScrollStory";
import Reveal from "@/components/Reveal";
import { approach } from "@/lib/data";

export default function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 lg:py-32"
    >
      <ScrollStory
        eyebrow={approach.eyebrow}
        headline={approach.headline}
        lead={approach.lead}
        steps={approach.steps}
      />

      <Reveal>
        <div className="mx-auto mt-20 flex max-w-[1160px] flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border pt-8 font-mono text-xs text-muted">
          <span className="text-body">{approach.credential.role}</span>
          <span aria-hidden="true">·</span>
          <span>{approach.credential.company}</span>
          <span aria-hidden="true">·</span>
          <span>{approach.credential.period}</span>
          <span aria-hidden="true">·</span>
          <span className="text-accent">{approach.credential.note}</span>
        </div>
      </Reveal>
    </section>
  );
}
