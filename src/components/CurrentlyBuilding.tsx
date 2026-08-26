import Reveal from "@/components/Reveal";
import { building } from "@/lib/data";

export default function CurrentlyBuilding() {
  return (
    <section
      id="building"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1160px]">
        <Reveal>
          <span className="overline">{building.eyebrow}</span>
          <h2 className="mt-5 font-display text-[clamp(38px,6vw,72px)] leading-[1.05] font-light tracking-[-0.03em] text-foreground">
            {building.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-16 lg:mt-24 lg:grid-cols-2">
          {building.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <article className="border-t border-border pt-8">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-[color:var(--amber-400)]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[color:var(--amber-400)]"
                  />
                  {item.status}
                </span>

                <h3 className="mt-7 font-display text-[clamp(32px,4.6vw,56px)] leading-[1.05] font-light tracking-[-0.03em] text-foreground">
                  {item.name}
                </h3>

                <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.6] text-muted">
                  {item.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
