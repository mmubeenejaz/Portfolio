"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Set as soon as any observer delivers a callback. IntersectionObserver always
 * reports once per target on first observation, so a healthy implementation
 * flips this within a frame of mount — which lets the failsafe below tell
 * "observer is dead" apart from "element simply isn't on screen yet".
 */
let observerResponded = false;

/**
 * Fades content up as it enters the viewport.
 *
 * Visibility never rests on one mechanism: this covers a dead observer, and
 * globals.css covers no-JS and hydration crashes. See the `.reveal` comment
 * there for the full picture.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // React is alive, so the CSS failsafe can stand down.
    document.documentElement.classList.add("reveal-armed");

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        observerResponded = true;
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(el);

    // If the observer never said anything at all, it is not working here.
    // Show the content rather than leave the page blank.
    const failsafe = window.setTimeout(() => {
      if (!observerResponded) setShown(true);
    }, 3000);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
