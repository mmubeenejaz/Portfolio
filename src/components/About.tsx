import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">01</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            About
          </h2>
        </div>

        <p className="max-w-3xl text-balance text-lg leading-8 text-muted">
          {profile.summary}
        </p>
      </div>
    </section>
  );
}
