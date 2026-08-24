export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-10 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {title}
    </h2>
  );
}
