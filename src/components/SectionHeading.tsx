export default function SectionHeading({
  overline,
  title,
  description,
}: {
  overline?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      {overline && (
        <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          {overline}
        </span>
      )}
      <h2 className="text-balance font-display text-[32px] leading-[1.15] font-light tracking-[-0.02em] text-foreground sm:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[62ch] text-balance text-base leading-[1.6] text-[color:var(--fog-300)]">
          {description}
        </p>
      )}
      <span aria-hidden="true" className="h-0.5 w-16" style={{ background: "var(--gradient-rule)" }} />
    </div>
  );
}
