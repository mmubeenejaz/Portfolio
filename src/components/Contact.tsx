import { Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile, contactCTA } from "@/lib/data";
import CopyButton from "@/components/CopyButton";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="13" title="Contact" />

        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
          <h3 className="max-w-lg text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {contactCTA.heading}
          </h3>
          <p className="mt-3 max-w-lg text-balance text-muted">
            {contactCTA.subheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-strong px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong-hover"
            >
              Start a Conversation
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Mail size={15} aria-hidden="true" />
              Email Me
            </a>
            <span className="text-sm text-muted-2">{profile.email}</span>
            <CopyButton value={profile.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
