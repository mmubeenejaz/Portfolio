import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
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
      className="relative overflow-hidden pt-[180px] pb-28 sm:pt-[196px]"
      style={{ background: "var(--gradient-ground)" }}
    >
      <span
        aria-hidden="true"
        className="blob pointer-events-none absolute -top-40 -left-44 h-[620px] w-[620px] opacity-40"
      />
      <span
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute top-0 right-0 h-80 w-1/2 opacity-40"
        style={{
          WebkitMaskImage:
            "radial-gradient(120% 100% at 80% 0%, #000 0%, rgba(0,0,0,.45) 55%, transparent 100%)",
          maskImage:
            "radial-gradient(120% 100% at 80% 0%, #000 0%, rgba(0,0,0,.45) 55%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1120px] gap-16 px-6 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="flex flex-col items-start gap-6">
          <span
            className="animate-fade-up font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
            style={{ animationDelay: "0ms" }}
          >
            {hero.overline}
          </span>

          <h1
            className="animate-fade-up text-balance font-display text-[42px] leading-[1.04] font-light tracking-[-0.03em] text-foreground sm:text-[56px] md:text-[72px]"
            style={{ animationDelay: "40ms" }}
          >
            {hero.name}
            <br />
            <span className="text-accent">{hero.headline}</span>
          </h1>

          <span
            aria-hidden="true"
            className="animate-fade-up h-0.5 w-24"
            style={{ background: "var(--gradient-rule)", animationDelay: "60ms" }}
          />

          <p
            className="animate-fade-up max-w-[38ch] text-balance text-lg leading-[1.6] text-[color:var(--fog-300)]"
            style={{ animationDelay: "80ms" }}
          >
            {hero.statement}
          </p>

          <div
            className="animate-fade-up mt-1.5 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "120ms" }}
          >
            <a
              href={hero.primaryCta.href}
              className="btn-lift inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[color:var(--ink-900)] hover:bg-accent-hover"
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
            <a
              href={profile.resumeUrl}
              download
              className="btn-lift inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-muted hover:text-accent"
            >
              <Download size={16} aria-hidden="true" />
              {hero.resumeLabel}
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto w-full max-w-[300px] justify-self-end md:mx-0"
          style={{ animationDelay: "80ms" }}
        >
          <div
            className="relative aspect-[4/5] w-full rounded-3xl p-px"
            style={{ background: "linear-gradient(160deg, rgba(34,199,220,.5), rgba(159,182,189,.06) 55%)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[23px] bg-surface">
              {avatar ? (
                <Image
                  src={avatar}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="300px"
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
