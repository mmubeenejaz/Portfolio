import { featuredProject } from "@/lib/data";

export default function NisabPreview() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {featuredProject.previewPanels.map((panel) => (
        <div
          key={panel.label}
          className="flex flex-col gap-2 rounded-[10px] border border-border bg-surface-inset p-5"
        >
          <span className="font-display text-xl font-light tracking-[-0.02em] text-foreground">
            {panel.label}
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            {panel.description}
          </span>
        </div>
      ))}
    </div>
  );
}
