import { Instagram, ArrowUpRight, MapPin, Sparkles, Mail, Clock, Shield, Zap, Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/components/WhatsAppButton";
import portrait from "@/assets/evandro-portrait.jpg";

const WhatsAppGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Cases", href: "#cases" },
  { label: "Provas", href: "#provas" },
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
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="aurora-orb animate-aurora-1 left-[-10%] top-[-20%] h-[420px] w-[420px] bg-electric/25" />
        <div className="aurora-orb animate-aurora-2 right-[-10%] bottom-[-30%] h-[480px] w-[480px] bg-whatsapp/20" />
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-[0.12]" />
      <div className="noise-overlay absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-glow/60 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
        {/* CTA strip — centered */}
        <div className="glass relative overflow-hidden rounded-3xl p-8 text-center md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-electric/30 to-whatsapp/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-gradient-to-tr from-whatsapp/20 to-transparent blur-3xl" />

          <div className="relative flex flex-col items-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-dark-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-whatsapp" />
              </span>
              disponível agora
            </div>

            <h3 className="mx-auto max-w-lg font-display-tight text-3xl leading-[0.95] md:text-5xl">
              Sua próxima{" "}
              <span className="gradient-text-animated">página que vende</span>
              <br />
              começa numa conversa.
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm text-dark-muted md:text-base">
              Resposta em poucas horas. Diagnóstico honesto, sem proposta inflada.
            </p>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="shine group relative mt-8 inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-whatsapp to-whatsapp-glow px-8 py-4 font-display-tight text-base text-whatsapp-foreground shadow-glow-whatsapp transition-all duration-300 hover:-translate-y-0.5 md:text-lg"
            >
              <WhatsAppGlyph className="h-5 w-5" />
              Chamar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] text-dark-muted">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-electric-glow" /> Resposta &lt; 4h
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-electric-glow" /> Garantia 7 dias
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3 w-3 text-electric-glow" /> Entrega sprint
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:my-16" />

        {/* Info grid — 3 columns centered */}
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="orbital-ring absolute -inset-1 rounded-full opacity-60" />
                <img
                  src={portrait}
                  alt="Evandro Carvalho"
                  className="relative h-11 w-11 rounded-full border border-white/15 object-cover object-center"
                />
              </div>
              <div className="text-left">
                <div className="font-display text-base font-bold tracking-tight text-white">
                  Evandro Carvalho
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-dark-muted">
                  dev · ads · conversão
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-dark-muted">
              Páginas e tráfego para quem vende infoproduto e quer converter de verdade.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/goupcreations/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10 hover:text-electric-glow"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-whatsapp/50 hover:bg-whatsapp/10 hover:text-whatsapp-glow"
                aria-label="WhatsApp"
              >
                <WhatsAppGlyph className="h-4 w-4" />
              </a>
              <a
                href="mailto:evcarvalhodev@gmail.com"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-dark-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10 hover:text-electric-glow"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
              Navegação
            </div>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-dark-foreground/80 transition-colors hover:text-electric-glow"
                  >
                    <span className="h-px w-3 bg-white/15 transition-all group-hover:w-6 group-hover:bg-electric-glow" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato + Serviços */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
              Contato
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-dark-foreground/80">
              <li className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-whatsapp-glow" />
                evcarvalhodev@gmail.com
              </li>
              <li className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-whatsapp-glow" />
                (12) 99227-5476
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-electric-glow" />
                Brasil · remoto
              </li>
            </ul>

            <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-dark-muted">
              O que entrego
            </div>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-dark-foreground/80 md:items-start">
                  <Sparkles className="h-3 w-3 shrink-0 text-whatsapp-glow" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-dark-muted">
              © 2026 Evandro Carvalho
            </span>

            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-dark-muted">
              <a href="#" className="transition-colors hover:text-dark-foreground">Privacidade</a>
              <span className="h-3 w-px bg-white/10" />
              <a href="#" className="transition-colors hover:text-dark-foreground">Termos</a>
            </div>

            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dark-muted">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-whatsapp" />
              100% online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
