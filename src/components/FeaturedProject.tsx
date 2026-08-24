import { ExternalLink } from "lucide-react";
import { featuredProject } from "@/lib/data";

export default function FeaturedProject() {
  return (
    <section id="work" className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-3 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">02</span>
          <span className="font-mono text-sm text-accent">
            {featuredProject.eyebrow}
          </span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {featuredProject.name}
        </h2>
        <p className="mt-2 text-lg text-accent">{featuredProject.subtitle}</p>

        <p className="mt-6 max-w-3xl text-lg text-muted">
          {featuredProject.description}
        </p>

        <a
          href={featuredProject.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent-strong px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong-hover"
        >
          Live Demo
          <ExternalLink size={16} aria-hidden="true" />
        </a>

        <div className="mt-14 space-y-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-base font-medium text-foreground">
                {featuredProject.problemHeading}
              </h3>
              <div className="mt-3 space-y-3">
                {featuredProject.problem.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium text-foreground">
                {featuredProject.builtHeading}
              </h3>
              <div className="mt-3 space-y-3">
                {featuredProject.built.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground">
              {featuredProject.roleHeading}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredProject.role.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-base font-medium text-foreground">
              {featuredProject.featuresHeading}
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {featuredProject.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground">
              {featuredProject.technologyHeading}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredProject.technology.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-foreground">
              {featuredProject.aiHeading}
            </h3>
            <div className="mt-3 space-y-3">
              {featuredProject.ai.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-6 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-base font-medium text-foreground">
              {featuredProject.demonstratesHeading}
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {featuredProject.demonstrates.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
