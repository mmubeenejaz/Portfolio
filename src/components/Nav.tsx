"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

  useEffect(() => {
    const sections = nav
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <div
        className={`glass flex h-16 items-center gap-2 rounded-full pl-5 pr-3 transition-[background,box-shadow] duration-300 sm:gap-3 sm:pl-6 ${
          scrolled ? "glass-scrolled" : ""
        }`}
      >
        <a
          href="#top"
          className="flex items-center text-base font-semibold tracking-tight whitespace-nowrap text-foreground"
        >
          Mubeen Ejaz
        </a>

        <span
          className="mx-2 hidden h-6 w-px bg-white/10 md:block"
          aria-hidden="true"
        />

        <nav className="hidden items-center md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
              {activeHref === item.href && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                />
              )}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
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
        <nav className="glass absolute top-[calc(4rem+1.5rem)] flex w-[calc(100%-2rem)] max-w-xs flex-col gap-1 rounded-3xl p-3 md:hidden">
          {nav.map((item) => (
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
