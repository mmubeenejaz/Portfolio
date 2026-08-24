import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile, hero } from "@/lib/data";

function findAvatar() {
  const candidates = ["profile.jpg", "profile.jpeg", "profile.png", "profile.webp"];
  for (const file of candidates) {
    if (fs.existsSync(path.join(process.cwd(), "public", file))) {
      return `/${file}`;
    }
  }
  return null;
}

export default function Hero() {
  const avatar = findAvatar();
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-[100dvh] items-center overflow-hidden pt-16"
    >
      <div className="aurora pointer-events-none absolute inset-x-0 top-0 h-[700px]" />

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h1
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            {hero.headline}
          </h1>

          <p
            className="mt-4 text-balance text-lg font-medium text-accent sm:text-xl animate-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            {hero.positioning}
          </p>

          <p
            className="mt-5 max-w-xl text-balance text-base leading-7 text-muted sm:text-lg animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            {hero.statement}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <a
              href={hero.primaryCta.href}
              className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-accent-strong px-6 text-sm font-medium text-white hover:bg-accent-strong-hover"
            >
              {hero.primaryCta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div
            className="mt-8 flex flex-col items-start gap-2 animate-fade-up sm:flex-row sm:items-center sm:gap-3"
            style={{ animationDelay: "160ms" }}
          >
            {hero.workflow.map((step, index) => (
              <div key={step} className="flex items-center gap-2 sm:contents">
                {index > 0 && (
                  <span aria-hidden="true" className="text-muted-2 sm:hidden">
                    ↓
                  </span>
                )}
                {index > 0 && (
                  <span aria-hidden="true" className="hidden text-muted-2 sm:inline">
                    →
                  </span>
                )}
                <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-center md:justify-end animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <div className="relative h-56 w-56 shrink-0 sm:h-64 sm:w-64 md:h-72 md:w-72">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-surface">
              {avatar ? (
                <Image
                  src={avatar}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="288px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-5xl font-semibold text-muted-2">
                  {initials}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
