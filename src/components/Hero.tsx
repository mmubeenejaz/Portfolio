import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

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
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[600px]" />

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to AI Engineering &amp; Product roles
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-balance text-lg font-medium text-accent sm:text-xl">
            {profile.role}
          </p>

          <p className="mt-5 max-w-xl text-balance text-base leading-7 text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-strong px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong-hover"
            >
              View Experience
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/Mubeen-Ejaz-Resume.docx"
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-56 w-56 shrink-0 sm:h-64 sm:w-64 md:h-72 md:w-72">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/40 via-accent/5 to-transparent blur-xl" />
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
