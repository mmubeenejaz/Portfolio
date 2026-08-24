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
      className="btn-lift fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-lg hover:text-accent"
    >
      <WhatsAppIcon size={20} />
    </a>
  );
}
