import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE = "5512992275476";
const DEFAULT_MSG =
  "Oi, vi seu portfolio e quero saber mais sobre o servico de pagina + trafego";

export function buildWhatsAppLink(message: string = DEFAULT_MSG) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

interface Props {
  children: React.ReactNode;
  message?: string;
  size?: "default" | "lg" | "xl";
  className?: string;
  glow?: boolean;
}

export function WhatsAppButton({
  children,
  message,
  size = "default",
  className,
  glow = false,
}: Props) {
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-whatsapp/90 hover:shadow-xl active:translate-y-0",
        sizeClasses[size],
        glow && "pulse-glow",
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      {children}
    </a>
  );
}
