import { profile } from "@/lib/data";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppFab() {
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="btn-lift fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-accent/50 bg-surface text-accent shadow-[0_0_0_1px_rgba(34,199,220,0.25),0_8px_28px_rgba(34,199,220,0.45)] hover:border-accent hover:bg-accent hover:text-[color:var(--ink-900)]"
    >
      <WhatsAppIcon size={24} />
    </a>
  );
}
