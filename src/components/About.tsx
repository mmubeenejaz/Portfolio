import { Target, Code, Cpu, Rocket, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { about } from "@/lib/data";

const icons: Record<string, LucideIcon> = { target: Target, code: Code, cpu: Cpu, rocket: Rocket };

export default function About() {
  return (
    <section id="approach" className="scroll-mt-28 border-t border-border bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-13">
        <Reveal>
          <SectionHeading overline={about.overline} title={about.title} description={about.statement} />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {about.principles.map((principle) => {
              const Icon = icons[principle.icon];
              return (
                <div
                  key={principle.title}
                  className="card-hover flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6"
                >
                  <Icon size={20} className="text-accent" aria-hidden="true" />
                  <p className="font-display text-base font-medium text-foreground">{principle.title}</p>
                  <p className="text-sm leading-6 text-[color:var(--fog-300)]">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center gap-3 rounded-[10px] border border-border bg-surface-inset px-6 py-5 font-mono text-xs text-[color:var(--fog-400)]">
            <span className="text-[color:var(--cyan-300)]">{about.credential.role}</span>
            <span>·</span>
            <span>{about.credential.company}</span>
            <span>·</span>
            <span>{about.credential.period}</span>
            <span>·</span>
            <span className="text-[color:var(--fog-200)]">{about.credential.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
