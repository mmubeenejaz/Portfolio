"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { activeBuilds } from "@/lib/data";

export default function ActiveBuilds() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="building" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="03" title="Currently building" />

        <div>
          {activeBuilds.map((build, index) => {
            const isOpen = openIndex === index;
            const panelId = `active-build-panel-${build.number}`;

            return (
              <div key={build.number} className="border-b border-border last:border-none">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="card-hover flex w-full items-center justify-between gap-4 rounded-xl px-2 py-6 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs text-muted-2">
                      {build.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {build.name}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                          {build.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted">{build.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-muted-2 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className={`accordion-panel ${isOpen ? "accordion-panel-open" : ""}`}>
                  <div>
                    <div id={panelId} className="px-2 pb-6">
                      <p className="text-sm leading-6 text-muted">{build.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {build.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                          >
                            {capability}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4">
                        <div className="text-xs font-medium text-muted-2">The idea</div>
                        <p className="mt-1 text-sm text-muted">{build.idea}</p>
                      </div>

                      {build.flow && (
                        <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                          {build.flow.map((stage, stageIndex) => (
                            <div key={stage} className="flex items-center gap-2">
                              {stageIndex > 0 && (
                                <span className="text-muted-2 sm:hidden" aria-hidden="true">
                                  ↓
                                </span>
                              )}
                              {stageIndex > 0 && (
                                <span className="hidden text-muted-2 sm:inline" aria-hidden="true">
                                  →
                                </span>
                              )}
                              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted">
                                {stage}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
