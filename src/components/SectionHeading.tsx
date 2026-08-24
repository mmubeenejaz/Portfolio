export default function SectionHeading({
  number,
  title,
}: {
  number?: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      {number && (
        <span className="font-mono text-sm text-accent">{number}</span>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
