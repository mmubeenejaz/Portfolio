"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { build } from "@/lib/data";

export default function WhatIBuild() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="build"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1160px]">
        <Reveal>
          <span className="overline">{build.eyebrow}</span>
          <h2 className="mt-5 font-display text-[clamp(38px,6vw,72px)] leading-[1.05] font-light tracking-[-0.03em] text-foreground">
            {build.headline}
          </h2>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.65] text-muted">
            {build.lead}
          </p>
        </Reveal>

        <Reveal>
          <ul className="mt-16 lg:mt-20">
            {build.items.map((item, index) => {
              const isOpen = index === open;
              return (
                <li key={item.title} className="border-t border-border last:border-b">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="group flex w-full items-baseline gap-6 py-7 text-left lg:py-9"
                  >
                    <span
                      className={`font-mono text-xs transition-colors duration-500 ${
                        isOpen ? "text-accent" : "text-muted-2"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-display text-[clamp(24px,4vw,46px)] leading-[1.1] font-light tracking-[-0.025em] transition-colors duration-500 ${
                          isOpen
                            ? "text-foreground"
                            : "text-muted group-hover:text-body"
                        }`}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="block max-w-[46ch] pt-4 text-[16px] leading-[1.65] text-body">
                            {item.line}
                          </span>
                        </span>
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`mt-3 h-px w-8 shrink-0 transition-all duration-500 ${
                        isOpen ? "bg-accent" : "bg-[color:var(--border-subtle)]"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
