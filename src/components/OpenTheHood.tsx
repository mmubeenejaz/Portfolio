"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { architecture } from "@/lib/data";

export default function OpenTheHood() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [userNode, webNode, servicesNode, databaseNode, isolationNode] = architecture.nodes;
  const selectedNode = architecture.nodes.find((node) => node.id === selectedId) ?? null;

  function renderNodeButton(node: (typeof architecture.nodes)[number]) {
    const isSelected = selectedId === node.id;
    return (
      <button
        type="button"
        aria-pressed={isSelected}
        onClick={() => setSelectedId(node.id)}
        className={`card-hover w-full rounded-2xl border p-4 text-left ${
          isSelected ? "border-accent bg-accent-soft" : "border-border bg-surface"
        }`}
      >
        <span className="text-sm font-semibold text-foreground">{node.label}</span>
      </button>
    );
  }

  return (
    <section id="architecture" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="04" title={architecture.heading} />
        <p className="text-lg font-medium text-foreground">{architecture.intro}</p>
        <p className="mt-2 text-sm text-muted">{architecture.subheading}</p>

        <div className="mt-10">
          <div className="mx-auto flex max-w-sm flex-col items-stretch">
            {renderNodeButton(userNode)}
            <div className="flex h-6 justify-center">
              <span className="text-muted-2">↓</span>
            </div>
            {renderNodeButton(webNode)}
            <div className="flex h-6 justify-center">
              <span className="text-muted-2">↓</span>
            </div>
            {renderNodeButton(servicesNode)}
            <div className="flex h-6 justify-center">
              <span className="text-muted-2">↓</span>
            </div>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {renderNodeButton(databaseNode)}
            {renderNodeButton(isolationNode)}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
            {selectedNode ? (
              <>
                <h3 className="text-sm font-semibold text-foreground">{selectedNode.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{selectedNode.description}</p>
              </>
            ) : (
              <p className="text-sm text-muted">Select a node to see how it works.</p>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h3 className="text-base font-semibold text-foreground">{architecture.decisionsHeading}</h3>
          <div className="mt-4">
            {architecture.decisions.map((decision, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={decision.question} className="card-hover border-t border-border first:border-t-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-4 text-left text-sm font-medium text-foreground"
                  >
                    {decision.question}
                  </button>
                  <div className={`accordion-panel ${isOpen ? "accordion-panel-open" : ""}`}>
                    <div>
                      <p className="pb-4 text-sm leading-6 text-muted">{decision.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
