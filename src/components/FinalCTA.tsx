"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { finalCTA, profile } from "@/lib/data";

export default function FinalCTA() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = message.trim();
    const text = trimmed.length > 0 ? trimmed : profile.whatsappMessage;
    const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 relative overflow-hidden border-t border-border bg-background px-6 pt-24 pb-12 sm:px-10"
    >
      <span
        aria-hidden="true"
        className="blob pointer-events-none absolute -bottom-56 -left-30 h-[520px] w-[520px] opacity-20"
      />

      <div className="relative mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            {finalCTA.eyebrow}
          </span>
          <h2 className="text-balance font-display text-[32px] leading-[1.08] font-light tracking-[-0.02em] text-accent sm:text-[42px]">
            {finalCTA.heading}
          </h2>
          <p className="max-w-[34ch] text-balance text-lg leading-[1.6] text-[color:var(--fog-300)]">
            {finalCTA.subheading}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[color:var(--cyan-300)] hover:text-[color:var(--cyan-200)]"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mubeen Ejaz on GitHub"
              className="flex items-center gap-2 text-sm text-[color:var(--fog-300)] hover:text-foreground"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-[color:var(--fog-300)] hover:text-foreground"
            >
              {profile.email}
            </a>
            <CopyButton value={profile.email} />
          </div>
        </div>

        <div className="glass rounded-2xl p-7 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="wa-msg" className="text-sm text-[color:var(--fog-200)]">
              {finalCTA.inputPlaceholder}
            </label>
            <textarea
              id="wa-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="I have a product idea and need someone to build it…"
              rows={5}
              className="w-full resize-y rounded-[6px] border border-border-subtle bg-surface-inset px-4 py-3.5 text-sm leading-[1.55] text-foreground outline-none placeholder:text-muted-2"
            />
            <button
              type="submit"
              className="btn-lift inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-[color:var(--ink-900)] hover:bg-accent-hover"
            >
              <WhatsAppIcon size={16} />
              {finalCTA.submitLabel}
            </button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto mt-18 flex max-w-[1120px] flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-[color:var(--fog-500)]">
        <span>
          © {new Date().getFullYear().toString()} {profile.name}. All rights reserved.
        </span>
        <span>{finalCTA.footerTagline}</span>
      </div>
    </section>
  );
}
