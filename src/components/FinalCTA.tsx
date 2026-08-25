"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
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
    <section id="contact" className="scroll-mt-28 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Contact" />

        <div className="card-hover rounded-2xl border border-border bg-surface p-8 sm:p-12">
          <h3 className="max-w-lg text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {finalCTA.heading}
          </h3>
          <p className="mt-3 max-w-lg text-balance text-muted">{finalCTA.subheading}</p>

          <form onSubmit={handleSubmit} className="mt-8">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={finalCTA.inputPlaceholder}
              rows={4}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2"
            />
            <button
              type="submit"
              className="btn-lift mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-accent-strong px-6 text-sm font-medium text-white hover:bg-accent-strong-hover"
            >
              <WhatsAppIcon size={16} />
              {finalCTA.submitLabel}
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mubeen Ejaz on GitHub"
              className="btn-lift flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground hover:border-accent hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Mail size={15} aria-hidden="true" />
                {profile.email}
              </a>
              <CopyButton value={profile.email} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
