import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import NisabPreview from "@/components/NisabPreview";
import { featuredProject } from "@/lib/data";

export default function NisabProduct() {
  return (
    <section id="work" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title={featuredProject.eyebrow} />
        </Reveal>

        <Reveal delay={60}>
          <div className="card-hover rounded-3xl border border-border bg-surface p-6 sm:p-10">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {featuredProject.name}
            </h3>
            <p className="mt-1 text-base text-accent">{featuredProject.subtitle}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="flex items-baseline gap-1.5">
                <span className="text-xs uppercase tracking-wide text-muted-2">Role</span>
                <span className="font-medium text-foreground">{featuredProject.meta.role}</span>
              </span>
              <span className="text-border" aria-hidden="true">
                ·
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="text-xs uppercase tracking-wide text-muted-2">Type</span>
                <span className="font-medium text-foreground">{featuredProject.meta.type}</span>
              </span>
              <span className="text-border" aria-hidden="true">
                ·
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-wide text-muted-2">Status</span>
                <span className="flex items-center gap-1.5 font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {featuredProject.meta.status}
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-3xl text-lg leading-7 text-muted">
              {featuredProject.description}
            </p>

            <div className="mt-8">
              <NisabPreview />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex h-11 items-center gap-2 rounded-full bg-accent-strong px-5 text-sm font-medium text-white hover:bg-accent-strong-hover"
              >
                {featuredProject.primaryCtaLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="scrollbar-hide mt-8 overflow-x-auto">
              <div className="flex w-max items-center gap-2 whitespace-nowrap text-xs text-muted-2">
                {featuredProject.pipeline.map((stage, index) => (
                  <span key={stage} className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-background px-2.5 py-1">
                      {stage}
                    </span>
                    {index < featuredProject.pipeline.length - 1 && (
                      <span aria-hidden="true">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {featuredProject.problemHeading}
                </h4>
                <p className="mt-2 text-sm leading-6 text-muted">{featuredProject.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {featuredProject.builtHeading}
                </h4>
                <p className="mt-2 text-sm leading-6 text-muted">{featuredProject.built}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-foreground">
                {featuredProject.roleHeading}
              </h4>
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

            <div className="mt-8">
              <h4 className="text-sm font-medium text-foreground">
                {featuredProject.featuresHeading}
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {featuredProject.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm leading-6 text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-foreground">
                {featuredProject.technologyHeading}
              </h4>
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

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="text-sm font-medium text-foreground">{featuredProject.aiHeading}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{featuredProject.ai}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
