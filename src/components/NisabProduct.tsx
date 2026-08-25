import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import NisabPreview from "@/components/NisabPreview";
import { featuredProject } from "@/lib/data";

export default function NisabProduct() {
  return (
    <section
      id="work"
      className="scroll-mt-28 relative overflow-hidden border-t border-border px-6 py-24 sm:px-10"
      style={{ background: "var(--gradient-ground)" }}
    >
      <span
        aria-hidden="true"
        className="blob pointer-events-none absolute -right-40 -bottom-52 h-[560px] w-[560px] opacity-25"
      />

      <div className="relative mx-auto flex max-w-[1120px] flex-col gap-9">
        <Reveal>
          <SectionHeading overline={featuredProject.eyebrow} title={featuredProject.name} />
        </Reveal>

        <Reveal delay={40}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-[color:var(--fog-400)]">
              <span className="text-[color:var(--fog-200)]">Role</span>
              <span>{featuredProject.meta.role}</span>
              <span>·</span>
              <span className="text-[color:var(--fog-200)]">Type</span>
              <span>{featuredProject.meta.type}</span>
              <span>·</span>
              <span className="text-[color:var(--fog-200)]">Status</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--green-400)]/30 bg-[color:var(--green-400)]/10 px-2.5 py-1 text-[color:var(--green-400)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--green-400)]" aria-hidden="true" />
                {featuredProject.meta.status}
              </span>
            </div>
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
            >
              {featuredProject.primaryCtaLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="max-w-[70ch] text-lg leading-[1.6] text-[color:var(--fog-200)]">
            {featuredProject.description}
          </p>
        </Reveal>

        <Reveal>
          <NisabPreview />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                The problem
              </span>
              <p className="text-base leading-[1.6] text-[color:var(--fog-300)]">{featuredProject.problem}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                What I built
              </span>
              <p className="text-base leading-[1.6] text-[color:var(--fog-300)]">{featuredProject.built}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-3.5">
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">My role</span>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.role.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-inset px-3 py-1.5 text-xs whitespace-nowrap text-[color:var(--fog-300)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3.5">
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Technology</span>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technology.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-inset px-3 py-1.5 text-xs whitespace-nowrap text-[color:var(--fog-300)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Key features</span>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {featuredProject.features.map((feature) => (
                  <span key={feature} className="text-sm leading-[1.5] text-[color:var(--fog-200)]">
                    {feature}
                  </span>
                ))}
              </div>
              <span aria-hidden="true" className="h-px bg-border" />
              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">How AI was used</span>
                <p className="text-sm leading-[1.6] text-[color:var(--fog-300)]">{featuredProject.ai}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
