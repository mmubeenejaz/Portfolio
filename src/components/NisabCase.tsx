import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import NisabPillars from "@/components/NisabPillars";
import { nisab } from "@/lib/data";

export default function NisabCase() {
  return (
    <section
      id="work"
      className="scroll-mt-20 relative border-t border-border px-6 py-24 sm:px-10 lg:py-32"
    >
      <span
        aria-hidden="true"
        className="blob pointer-events-none absolute -top-56 -right-40 h-[520px] w-[520px] opacity-[0.12]"
      />
      <div className="relative mx-auto max-w-[1160px]">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="overline">{nisab.eyebrow}</span>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-accent">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {nisab.meta.status}
            </span>
          </div>

          <h2 className="mt-5 font-display text-[clamp(52px,10vw,140px)] leading-[0.95] font-light tracking-[-0.04em] text-foreground">
            {nisab.name}
          </h2>
          <p className="mt-8 max-w-[24ch] text-[clamp(22px,3.4vw,40px)] leading-[1.2] font-light tracking-[-0.02em] text-accent">
            {nisab.statement}
          </p>

          <p className="mt-6 font-mono text-xs text-muted">
            {nisab.meta.what} · {nisab.meta.role}
          </p>

          <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.7] text-muted">
            {nisab.intro}
          </p>
        </Reveal>

        <div className="mt-24 grid gap-x-12 gap-y-14 lg:mt-32 lg:grid-cols-3">
          {nisab.beats.map((beat, index) => (
            <Reveal key={beat.label} delay={index * 90}>
              <div className="border-t border-border pt-7">
                <span className="overline">{beat.label}</span>
                <h3 className="mt-5 font-display text-[clamp(24px,2.8vw,32px)] leading-[1.2] font-light tracking-[-0.02em] text-foreground">
                  {beat.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-muted">
                  {beat.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 lg:mt-32">
            <span className="overline">{nisab.pillarsLabel}</span>
            <div className="mt-10">
              <NisabPillars />
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-x-16 gap-y-14 border-t border-border pt-12 lg:mt-32 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="overline">{nisab.roleLabel}</span>
              <ul className="mt-6 flex flex-col gap-2.5">
                {nisab.role.map((item) => (
                  <li key={item} className="text-[16px] text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex flex-col gap-12">
              <div>
                <span className="overline">{nisab.stackLabel}</span>
                <p className="mt-6 font-mono text-[13px] leading-[2] text-muted">
                  {nisab.stack.join(" · ")}
                </p>
              </div>

              <div className="border-l-2 border-accent/40 pl-6">
                <span className="overline">{nisab.ai.label}</span>
                <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.7] text-body">
                  {nisab.ai.line}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <a
            href={nisab.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-20 inline-flex items-center gap-3 border-b border-[color:var(--border-subtle)] pb-2 font-display text-[clamp(24px,3.4vw,38px)] font-light tracking-[-0.02em] text-foreground transition-colors duration-300 hover:border-accent hover:text-accent lg:mt-24"
          >
            {nisab.cta.label}
            <ArrowUpRight
              size={30}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
