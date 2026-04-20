import { Instagram, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/components/WhatsAppButton";

const WhatsAppGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#processo" },
  { label: "Investimento", href: "#investimento" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  "Landing pages que convertem",
  "Tráfego pago Meta + Google",
  "Pixel + tracking server-side",
  "Otimização contínua de CPA",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-dark-section text-dark-foreground">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="aurora-orb animate-aurora-1 left-[-10%] top-[-20%] h-[420px] w-[420px] bg-electric/30" />
        <div className="aurora-orb animate-aurora-2 right-[-10%] bottom-[-30%] h-[480px] w-[480px] bg-whatsapp/25" />
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* CTA strip */}
        <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-10">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-electric/40 to-whatsapp/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-dark-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-whatsapp" />
                </span>
                disponível · próxima janela
              </div>
              <h3 className="font-display-tight text-3xl leading-[0.95] md:text-5xl">
                Sua próxima <span className="gradient-text-animated">página que vende</span><br />
                começa numa conversa.
              </h3>
              <p className="mt-3 max-w-md text-sm text-dark-muted md:text-base">
                Resposta em poucas horas. Diagnóstico honesto, sem proposta inflada.
              </p>
            </div>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="shine group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-whatsapp to-whatsapp-glow px-6 py-4 font-display-tight text-base text-whatsapp-foreground shadow-glow-whatsapp transition-all duration-300 hover:-translate-y-0.5 md:text-lg"
            >
              <WhatsAppGlyph className="h-5 w-5" />
              Chamar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="orbital-ring absolute -inset-1 rounded-2xl opacity-70" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric to-whatsapp font-display-tight text-xl text-white">
                  E
                </span>
              </div>
              <div>
                <div className="font-display-tight text-xl tracking-tight">Evandro Carvalho</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-dark-muted">
                  dev · ads · conversão
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-dark-muted">
              Construo páginas e tráfego para quem vende infoproduto e cansou de investir em coisa
              bonita que não converte. Foco em métrica, não em prêmio.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-dark-muted">
              <MapPin className="h-3.5 w-3.5 text-electric-glow" />
              Brasil · atendendo remoto
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
              Navegação
            </div>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-dark-foreground/85 transition-colors hover:text-electric-glow"
                  >
                    <span className="h-px w-4 bg-white/15 transition-all group-hover:w-8 group-hover:bg-electric-glow" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
              O que entrego
            </div>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-dark-foreground/85">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-whatsapp-glow" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/goupcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric/10 hover:text-electric-glow"
                aria-label="Instagram"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-whatsapp/60 hover:bg-whatsapp/10 hover:text-whatsapp-glow"
                aria-label="WhatsApp"
              >
                <WhatsAppGlyph className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative mt-20 overflow-hidden">
          <div
            className="font-display-tight text-[22vw] leading-[0.85] text-transparent md:text-[14rem]"
            style={{
              WebkitTextStroke: "1px hsl(var(--dark-foreground) / 0.12)",
            }}
            aria-hidden="true"
          >
            EVANDRO.DEV
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(240_40%_5%)] to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="relative mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-dark-muted md:flex-row md:text-left">
          <span>© {new Date().getFullYear()} Evandro Carvalho · CNPJ sob solicitação</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-whatsapp" />
            construído em 7 dias · igual aos seus
          </span>
        </div>
      </div>
    </footer>
  );
}
