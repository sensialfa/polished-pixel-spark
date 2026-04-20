import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/components/WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="pulse-glow fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.2} />
    </a>
  );
}
