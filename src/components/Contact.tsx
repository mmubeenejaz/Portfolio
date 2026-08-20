import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import CopyButton from "@/components/CopyButton";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">06</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Contact
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
          <h3 className="max-w-lg text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Let&apos;s talk about your next AI-powered product.
          </h3>
          <p className="mt-3 max-w-lg text-balance text-muted">
            Open to Business Analyst, Product Owner, and AI Engineering
            opportunities. Reach out and I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-strong px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong-hover"
            >
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
            <CopyButton value={profile.email} />
          </div>

          <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-8 text-sm text-muted">
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone size={15} aria-hidden="true" />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={15} />
              linkedin.com/in/mubeenejaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
