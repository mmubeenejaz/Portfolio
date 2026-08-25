import {
  LayoutDashboard,
  Smartphone,
  Cpu,
  Workflow,
  PenTool,
  Rocket,
  Plug,
  Table2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  smartphone: Smartphone,
  cpu: Cpu,
  workflow: Workflow,
  "pen-tool": PenTool,
  rocket: Rocket,
  plug: Plug,
  "table-2": Table2,
};

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 relative overflow-hidden border-t border-border bg-background px-6 py-24 sm:px-10"
    >
      <span
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute top-0 left-0 h-72 w-[46%] opacity-35"
        style={{
          WebkitMaskImage:
            "radial-gradient(120% 100% at 20% 0%, #000 0%, rgba(0,0,0,.45) 55%, transparent 100%)",
          maskImage:
            "radial-gradient(120% 100% at 20% 0%, #000 0%, rgba(0,0,0,.45) 55%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1120px] flex-col gap-11">
        <Reveal>
          <SectionHeading overline={services.overline} title={services.title} description={services.description} />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div
                  key={item.title}
                  className="card-hover flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
                >
                  <Icon size={20} className="text-accent" aria-hidden="true" />
                  <p className="font-display text-base font-medium text-foreground">{item.title}</p>
                  <p className="text-sm leading-6 text-[color:var(--fog-300)]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-[10px] border border-border bg-surface-inset px-7 py-6">
            <p className="max-w-[52ch] text-base leading-6 text-[color:var(--fog-300)]">{services.closing.text}</p>
            <a
              href={services.closing.ctaHref}
              className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[color:var(--ink-900)] hover:bg-accent-hover"
            >
              {services.closing.ctaLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
