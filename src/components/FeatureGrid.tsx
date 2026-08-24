import SectionHeading from "@/components/SectionHeading";

type FeatureItem = {
  title: string;
  description?: string;
  tags?: string[];
};

export default function FeatureGrid({
  id,
  number,
  heading,
  subheading,
  items,
  columns = 2,
}: {
  id: string;
  number: string;
  heading: string;
  subheading?: string;
  items: FeatureItem[];
  columns?: 2 | 3;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number={number} title={heading} />

        {subheading && (
          <p className="mb-10 max-w-2xl text-balance text-muted">
            {subheading}
          </p>
        )}

        <div
          className={`grid gap-6 ${
            columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
          }`}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-base font-medium text-foreground">
                {item.title}
              </h3>

              {item.description && (
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              )}

              {item.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
