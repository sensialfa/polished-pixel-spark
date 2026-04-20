import { Instagram, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <div className="text-lg font-bold">Evandro Carvalho</div>
          <div className="text-sm text-muted-foreground">
            Paginas de vendas + Trafego pago para infoprodutores
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/goupcreations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-electric hover:text-electric"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-whatsapp hover:text-whatsapp"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Evandro Carvalho · Todos os direitos reservados
      </div>
    </footer>
  );
}
