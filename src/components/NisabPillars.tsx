"use client";

import { useRef, useState } from "react";
import { nisab } from "@/lib/data";

/**
 * One view of the ledger at a time.
 *
 * The panel is a deliberately abstract representation of the data shape behind
 * each view, not a screenshot of the product — nothing here claims to be a
 * capture of the real interface.
 */
export default function NisabPillars() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: React.KeyboardEvent) {
    const last = nisab.pillars.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = active === last ? 0 : active + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = active === 0 ? last : active - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }

    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }

  const current = nisab.pillars[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
      <div
        role="tablist"
        aria-label={nisab.pillarsLabel}
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex flex-col"
      >
        {nisab.pillars.map((pillar, index) => {
          const isActive = index === active;
          return (
            <button
              key={pillar.title}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`pillar-tab-${index}`}
              aria-selected={isActive}
              aria-controls="pillar-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(index)}
              className="group border-t border-border py-5 text-left last:border-b"
            >
              <span className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-500 ${
                    isActive ? "w-8 bg-accent" : "w-3 bg-[color:var(--border-subtle)]"
                  }`}
                />
                <span
                  className={`font-display text-[19px] font-light transition-colors duration-500 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted group-hover:text-body"
                  }`}
                >
                  {pillar.title}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="pillar-panel"
        aria-labelledby={`pillar-tab-${active}`}
        className="flex min-h-[22rem] flex-col justify-between rounded-[2px] border border-border bg-surface p-8 sm:p-10"
      >
        <div
          className="flex h-40 items-end gap-2.5 sm:h-56 sm:gap-4"
          aria-hidden="true"
        >
          {current.bars.map((height, index) => (
            <span
              key={`${current.title}-${index}`}
              className="flex-1 rounded-[1px] bg-accent/25 transition-[height,background-color] duration-700 ease-out last:bg-accent/70"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <div className="mt-10">
          <span className="overline">Ledger view</span>
          <h3 className="mt-4 font-display text-[clamp(24px,3vw,34px)] leading-[1.2] font-light tracking-[-0.02em] text-foreground">
            {current.title}
          </h3>
          <p className="mt-3 max-w-[42ch] text-[16px] leading-[1.6] text-body">
            {current.line}
          </p>
        </div>
      </div>
    </div>
  );
}
