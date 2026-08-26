"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { contact, profile } from "@/lib/data";

export default function Contact() {
  const [message, setMessage] = useState("");

  const whatsappUrl = (text: string) =>
    `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(text)}`;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = message.trim();
    window.open(
      whatsappUrl(trimmed.length > 0 ? trimmed : profile.whatsappMessage),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative flex min-h-[92svh] flex-col justify-center border-t border-border px-6 py-24 sm:px-10"
    >
      <span
        aria-hidden="true"
        className="blob pointer-events-none absolute -bottom-64 -left-40 h-[480px] w-[480px] opacity-[0.09]"
      />
      <div className="relative mx-auto w-full max-w-[1160px]">
        <span className="overline">{contact.eyebrow}</span>

        <h2 className="mt-6 max-w-[16ch] text-balance font-display text-[clamp(42px,8vw,104px)] leading-[1] font-light tracking-[-0.035em] text-foreground">
          {contact.headline}
        </h2>

        <p className="mt-8 max-w-[34ch] text-[clamp(17px,2vw,21px)] leading-[1.55] text-muted">
          {contact.lead}
        </p>

        <form onSubmit={handleSubmit} className="mt-14 max-w-[46rem]">
          <label htmlFor="brief" className="sr-only">
            {contact.placeholder}
          </label>
          <textarea
            id="brief"
            rows={2}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={contact.placeholder}
            className="w-full resize-none border-b border-[color:var(--border-subtle)] bg-transparent pb-4 font-display text-[clamp(20px,2.6vw,28px)] font-light text-foreground transition-colors duration-300 outline-none placeholder:text-muted-2 focus:border-accent"
          />

          <button
            type="submit"
            className="group mt-10 inline-flex h-13 items-center gap-2.5 rounded-full bg-accent px-8 text-[15px] font-medium text-[color:var(--ink-900)] transition-colors duration-300 hover:bg-accent-hover"
          >
            {contact.submitLabel}
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-8 font-mono text-xs text-muted-2">
          <span>
            © {new Date().getFullYear().toString()} {profile.name}
          </span>
          <span>{contact.tagline}</span>
        </div>
      </div>
    </section>
  );
}
