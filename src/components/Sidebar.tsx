"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Compass,
  Briefcase,
  LayoutGrid,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { nav, profile } from "@/lib/data";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CONTACT = { label: "Contact", href: "#contact" };

const NAV_ICONS: Record<string, LucideIcon> = {
  "#approach": Compass,
  "#work": Briefcase,
  "#build": LayoutGrid,
  "#contact": Mail,
};

/**
 * Test layout: persistent left navigation at every breakpoint, in place of
 * the floating glass pill. Uses the same `.glass` treatment as the original
 * nav so the visual language stays consistent. The previous Nav.tsx is left
 * in place, unused, so this is a one-line swap to revert in page.tsx.
 */
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;
  const links = [...nav, CONTACT];

  useEffect(() => {
    const sections = links
      .map((item) => ({
        href: item.href,
        el: document.querySelector(item.href),
      }))
      .filter(
        (entry): entry is { href: string; el: Element } => entry.el !== null,
      );

    const TRIGGER_OFFSET = 160;

    const onScroll = () => {
      let current: string | null = null;
      for (const { href, el } of sections) {
        if (el.getBoundingClientRect().top <= TRIGGER_OFFSET) {
          current = href;
        }
      }
      setActiveHref(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const wordmark = (
    <span className="flex gap-1" aria-hidden="true">
      <span className="h-[7px] w-[7px] rounded-full bg-accent" />
      <span className="h-[7px] w-[7px] rounded-full bg-accent/35" />
    </span>
  );

  const socialLinks = [
    { label: "LinkedIn", href: profile.linkedin, icon: <LinkedinIcon size={16} /> },
    { label: "GitHub", href: profile.github, icon: <GithubIcon size={16} /> },
    { label: "WhatsApp", href: whatsappUrl, icon: <WhatsAppIcon size={16} /> },
    { label: "Email", href: `mailto:${profile.email}`, icon: <Mail size={16} /> },
  ];

  return (
    <>
      {/* Desktop: compact app-style sidebar */}
      <header className="glass fixed inset-y-4 left-4 z-50 hidden w-[132px] flex-col rounded-2xl px-4 py-6 lg:flex">
        <a
          href="#top"
          className="flex flex-col items-start gap-2 text-[20px] leading-[1.05] font-semibold tracking-tight text-foreground"
        >
          {wordmark}
          <span>Mubeen Ejaz</span>
        </a>

        <nav className="mt-10 flex flex-col gap-1" aria-label="Primary">
          {links.map((item) => {
            const isActive = activeHref === item.href;
            const Icon = NAV_ICONS[item.href];
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`group flex flex-col items-center gap-1.5 rounded-lg px-2 py-3 text-center transition-colors duration-300 ${
                  isActive
                    ? "bg-white/6 text-foreground"
                    : "text-muted hover:bg-white/5 hover:text-body"
                }`}
              >
                {Icon && (
                  <Icon
                    size={17}
                    aria-hidden="true"
                    className={
                      isActive
                        ? "text-accent"
                        : "text-muted-2 transition-colors duration-300 group-hover:text-muted"
                    }
                  />
                )}
                <span className="text-[11px] leading-tight font-medium">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-border pt-5">
          <div>
            <span className="overline">Connect</span>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors duration-300 hover:bg-white/6 hover:text-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <span className="font-mono text-[10px] text-muted-2">
            © {new Date().getFullYear().toString()}
          </span>
        </div>
      </header>

      {/* Below lg: compact glass icon cluster, sized to its content */}
      <header className="glass fixed top-4 left-4 z-50 flex w-14 flex-col items-center gap-2 rounded-2xl py-5 lg:hidden">
        <a
          href="#top"
          aria-label="Mubeen Ejaz, home"
          className="flex h-9 w-9 items-center justify-center"
        >
          {wordmark}
        </a>
        <span aria-hidden="true" className="h-px w-6 bg-border" />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {open && (
        <nav
          aria-label="Mobile menu"
          className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-[color:var(--ink-900)] px-6 pt-16 sm:px-10 lg:hidden"
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-border py-5 font-display text-3xl font-light transition-colors ${
                activeHref === item.href ? "text-accent" : "text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
