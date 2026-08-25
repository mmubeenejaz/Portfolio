import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { howIBuild } from "@/lib/data";

export default function HowIBuild() {
  return (
    <section
      id="process"
      className="scroll-mt-28 px-6 py-24 sm:px-10"
      style={{ background: "var(--gradient-ground)" }}
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12">
        <Reveal>
          <SectionHeading overline={howIBuild.overline} title={howIBuild.heading} />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 border-t border-border sm:grid-cols-5">
            {howIBuild.steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col gap-3 py-7 sm:px-6 ${
                  index === 0 ? "sm:pl-0" : ""
                } ${index === howIBuild.steps.length - 1 ? "sm:pr-0" : ""} ${
                  index !== howIBuild.steps.length - 1 ? "sm:border-r sm:border-border" : ""
                }`}
              >
                <span className="font-mono text-[28px] font-light text-accent/50">{step.number}</span>
                <span className="font-display text-lg font-light text-foreground">{step.title}</span>
                <p className="text-sm leading-[1.55] text-[color:var(--fog-400)]">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
