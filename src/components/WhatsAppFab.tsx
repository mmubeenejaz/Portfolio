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
      className="btn-lift fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-accent-strong/50 bg-surface text-accent shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_8px_28px_rgba(99,102,241,0.45)] hover:border-accent-strong hover:text-white hover:bg-accent-strong"
    >
      <WhatsAppIcon size={24} />
    </a>
  );
}
