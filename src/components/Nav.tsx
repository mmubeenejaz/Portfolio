"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CONTACT = { label: "Contact", href: "#contact" };

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

  useEffect(() => {
    const sections = [...nav, CONTACT]
      .map((item) => ({
        href: item.href,
        el: document.querySelector(item.href),
      }))
      .filter(
        (entry): entry is { href: string; el: Element } => entry.el !== null,
      );

    const TRIGGER_OFFSET = 120;

    const onScroll = () => {
      setScrolled(window.scrollY > 8);

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
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-[18px]">
      <div
        className={`glass relative flex h-[60px] w-full max-w-[1120px] items-center justify-between gap-4 rounded-full pr-2 pl-5 transition-[background,box-shadow] duration-300 sm:pl-6 ${
          scrolled ? "glass-scrolled" : ""
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight whitespace-nowrap text-foreground"
        >
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-[7px] w-[7px] rounded-full bg-accent" />
            <span className="h-[7px] w-[7px] rounded-full bg-accent/35" />
          </span>
          Mubeen Ejaz
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-3.5 py-2 text-[13px] text-[color:var(--fog-300)] transition-colors hover:bg-white/8 hover:text-foreground"
              style={
                activeHref === item.href
                  ? { color: "var(--foreground)" }
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.href}
            className="btn-lift ml-2 rounded-full bg-accent px-5 py-[11px] text-[12px] font-semibold tracking-wide text-[color:var(--ink-900)] uppercase hover:bg-accent-hover"
          >
            {CONTACT.label}
          </a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="hidden h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent sm:flex md:hidden"
        >
          <WhatsAppIcon size={20} />
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="glass absolute top-[calc(60px+1.5rem)] flex w-[calc(100%-2rem)] max-w-xs flex-col gap-1 rounded-3xl p-3 md:hidden">
          {[...nav, CONTACT].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-base transition-colors ${
                activeHref === item.href
                  ? "bg-white/5 text-foreground"
                  : "text-muted hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
