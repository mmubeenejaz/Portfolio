import { Sparkles } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">04</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/50"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Sparkles size={18} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-medium text-foreground">
                {project.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-2">
                {project.period}
              </p>

              <p className="mt-4 text-sm leading-6 text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
