"use client";

import { useState } from "react";
import { featuredProject } from "@/lib/data";

export default function NisabPreview() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  function toggle(index: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;
    setTilt({
      rotateX: Math.max(-4, Math.min(4, rotateX)),
      rotateY: Math.max(-4, Math.min(4, rotateY)),
    });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: "transform 0.2s ease",
      }}
      className="rounded-2xl border border-border bg-surface p-4 sm:p-6"
    >
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full border border-border" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full border border-border" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full border border-border" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {featuredProject.previewPanels.map((panel, index) => {
          const isOpen = expanded.has(index);
          return (
            <button
              key={panel.label}
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className="rounded-xl border border-border bg-background p-4 text-left"
            >
              <span className="text-sm font-medium text-foreground">{panel.label}</span>
              <div className={`accordion-panel ${isOpen ? "accordion-panel-open" : ""}`}>
                <div>
                  <p className="mt-2 text-xs text-muted">{panel.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
