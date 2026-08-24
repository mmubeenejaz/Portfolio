import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {stats.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-balance text-muted">
          {stats.subheading}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
