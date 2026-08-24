"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { howIBuild } from "@/lib/data";

export default function HowIBuild() {
  const [openNumber, setOpenNumber] = useState<string | null>(null);
  const [activeNumber, setActiveNumber] = useState<string | null>(null);
  const stepRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      const reference = window.innerHeight / 2;
      let closestNumber: string | null = null;
      let closestDistance = Infinity;

      for (const step of howIBuild.steps) {
        const el = stepRefs.current[step.number];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - reference);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestNumber = step.number;
        }
      }

      setActiveNumber(closestNumber);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="02" title={howIBuild.heading} />

        <div className="flex flex-col sm:flex-row sm:items-start">
          {howIBuild.steps.map((step, index) => {
            const isOpen = openNumber === step.number;
            const isActive = activeNumber === step.number;

            return (
              <div key={step.number} className="flex flex-col sm:contents">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="flex justify-center py-1 text-muted-2 sm:hidden"
                  >
                    ↓
                  </span>
                )}
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden items-center justify-center px-1 text-muted-2 sm:flex sm:self-center"
                  >
                    →
                  </span>
                )}
                <div className="flex-1">
                  <button
                    type="button"
                    ref={(el) => {
                      stepRefs.current[step.number] = el;
                    }}
                    aria-expanded={isOpen}
                    onClick={() => setOpenNumber(isOpen ? null : step.number)}
                    className={`card-hover block w-full rounded-2xl border bg-surface p-5 text-left ${
                      isActive ? "border-accent/40" : "border-border"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs text-accent ${
                        isActive ? "border-accent bg-accent-soft" : "border-border"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                    <div
                      className={`accordion-panel ${isOpen ? "accordion-panel-open" : ""}`}
                    >
                      <div>
                        <p className="mt-3 text-sm leading-6 text-muted-2">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
