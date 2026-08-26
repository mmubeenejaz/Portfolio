"use client";

import { useEffect, useRef, useState } from "react";

type Step = { number: string; title: string; line: string };

/**
 * Scroll-driven progression: a sticky rail on the left holds the section's one
 * idea while numbered steps pass through on the right, each becoming active as
 * it reaches the middle of the viewport.
 *
 * Inactive steps are dimmed by colour, never hidden — the whole sequence is
 * readable even if the scroll listener never runs.
 */
export default function ScrollStory({
  eyebrow,
  headline,
  lead,
  steps,
  children,
}: {
  eyebrow: string;
  headline: string;
  lead?: string;
  steps: Step[];
  children?: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.55;
      let next = 0;
      stepRefs.current.forEach((el, index) => {
        if (el && el.getBoundingClientRect().top <= line) {
          next = index;
        }
      });
      setActive(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="mx-auto grid max-w-[1160px] gap-x-20 gap-y-12 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <span className="overline">{eyebrow}</span>
        <h2 className="mt-5 text-balance font-display text-[clamp(30px,4vw,46px)] leading-[1.1] font-light tracking-[-0.025em] text-foreground">
          {headline}
        </h2>
        {lead && (
          <p className="mt-5 max-w-[34ch] text-base leading-[1.65] text-muted">
            {lead}
          </p>
        )}

        <div
          className="mt-8 hidden items-center gap-2 lg:flex"
          aria-hidden="true"
        >
          {steps.map((step, index) => (
            <span
              key={step.number}
              className={`h-px transition-all duration-500 ${
                index === active
                  ? "w-10 bg-accent"
                  : "w-5 bg-[color:var(--border-subtle)]"
              }`}
            />
          ))}
        </div>

        {children && <div className="mt-10">{children}</div>}
      </div>

      <ol className="lg:-mt-8">
        {steps.map((step, index) => {
          const isActive = index === active;
          return (
            <li
              key={step.number}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="flex min-h-[38vh] flex-col justify-center border-t border-border py-10 first:border-t-0 lg:min-h-[46vh] lg:py-14"
            >
              <span
                className={`font-mono text-sm transition-colors duration-500 ${
                  isActive ? "text-accent" : "text-muted-2"
                }`}
              >
                {step.number}
              </span>
              <h3
                className={`mt-4 font-display text-[clamp(26px,3.4vw,40px)] leading-[1.15] font-light tracking-[-0.02em] transition-colors duration-500 ${
                  isActive ? "text-foreground" : "text-muted"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-3 max-w-[38ch] text-[17px] leading-[1.6] transition-colors duration-500 ${
                  isActive ? "text-body" : "text-muted-2"
                }`}
              >
                {step.line}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
