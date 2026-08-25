import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { activeBuilds } from "@/lib/data";

export default function ActiveBuilds() {
  return (
    <section id="building" className="scroll-mt-28 border-t border-border bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10">
        <Reveal>
          <SectionHeading overline={activeBuilds.overline} title={activeBuilds.heading} />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {activeBuilds.items.map((item) => (
              <div
                key={item.name}
                className="card-hover flex flex-col gap-3.5 rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-2xl font-light tracking-[-0.02em] text-accent">
                    {item.name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--amber-400)]/30 bg-[color:var(--amber-400)]/10 px-3 py-1 text-xs font-medium text-[color:var(--amber-400)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber-400)]" aria-hidden="true" />
                    {item.status}
                  </span>
                </div>
                <p className="text-base leading-6 text-[color:var(--fog-300)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
