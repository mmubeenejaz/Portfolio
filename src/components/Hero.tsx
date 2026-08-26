import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 py-20 sm:px-10"
    >
      <span
        aria-hidden="true"
        className="blob pointer-events-none absolute -top-44 -left-44 h-[560px] w-[560px] opacity-[0.18]"
      />
      <span
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute top-0 right-0 h-72 w-1/2 opacity-25"
        style={{
          WebkitMaskImage:
            "radial-gradient(120% 100% at 80% 0%, #000 0%, rgba(0,0,0,.45) 55%, transparent 100%)",
          maskImage:
            "radial-gradient(120% 100% at 80% 0%, #000 0%, rgba(0,0,0,.45) 55%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1160px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-8">
        <div className="lg:max-w-[58rem]">
          <span className="overline">{hero.eyebrow}</span>

          <h1 className="mt-7 text-balance font-display text-[clamp(44px,7.5vw,88px)] leading-[1.02] font-light tracking-[-0.035em] text-foreground">
            {hero.headline}
          </h1>

          <p className="mt-7 max-w-[36ch] text-[clamp(17px,2vw,21px)] leading-[1.55] text-body">
            {hero.lead}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex h-13 items-center gap-2.5 rounded-full bg-accent px-7 text-[15px] font-medium text-[color:var(--ink-900)] transition-colors duration-300 hover:bg-accent-hover"
            >
              {hero.primaryCta.label}
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={hero.secondaryCta.href}
              className="link-underline text-[15px] text-foreground transition-colors duration-300 hover:text-accent"
            >
              {hero.secondaryCta.label}
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="link-underline text-[13px] text-muted transition-colors duration-300 hover:text-body"
            >
              {hero.resumeLabel}
            </a>
          </div>
        </div>

        <div className="order-first shrink-0 lg:order-last">
          <div className="relative mx-auto aspect-[4/5] w-[210px] overflow-hidden rounded-[22%] lg:mx-0 lg:w-[268px]">
            <Image
              src="/portrait.png"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 1024px) 268px, 210px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-16 flex w-full max-w-[1160px] items-center gap-4 lg:mt-24"
        aria-hidden="true"
      >
        <span className="scroll-cue h-10 w-px" />
        <span className="overline">{hero.scrollCue}</span>
      </div>
    </section>
  );
}
