import { Sparkles, ArrowDown } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-section px-5 pb-24 pt-14 text-dark-foreground md:px-8 md:pb-32 md:pt-20">
      <div className="absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-electric/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-whatsapp/15 blur-[120px]" />

      <nav className="relative mx-auto mb-16 flex max-w-6xl items-center justify-between md:mb-24">
        <div className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-electric-glow to-whatsapp text-sm font-black text-dark">
            E
          </span>
          <span>Evandro<span className="text-dark-muted">.</span></span>
        </div>
        <a
          href="#pricing"
          className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-dark-foreground/90 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/10 md:inline-block"
        >
          Ver pacote
        </a>
      </nav>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="animate-fade-up">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-dark-foreground/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
            </span>
            Aceitando 3 novos projetos em maio
            <span className="text-dark-muted">·</span>
            <span className="text-whatsapp-glow">Resposta em 2h</span>
          </div>

          <h1 className="text-balance font-display text-[44px] font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
            Sua oferta merece
            <br />
            uma estrutura que{" "}
            <span className="relative inline-block">
              <span className="gradient-text-brand">vende sozinha.</span>
              <span className="font-serif-display absolute -right-2 -top-3 text-3xl text-whatsapp-glow md:-right-4 md:-top-5 md:text-5xl">*</span>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base text-dark-foreground/70 md:text-xl">
            Construo paginas de venda + estrutura de trafego pago para infoprodutores que ja
            faturam, mas perdem dinheiro em conversao. Entrega em <strong className="text-dark-foreground">7 dias</strong>, no ar e
            rodando.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <WhatsAppButton size="lg" glow>
              Quero uma estrutura assim
            </WhatsAppButton>
            <a
              href="#cases"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-dark-foreground/70 transition-colors hover:text-dark-foreground"
            >
              Ver cases
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <p className="mt-5 text-xs text-dark-muted">
            <Sparkles className="mr-1.5 inline h-3 w-3 text-gold" />
            Sem agencia, sem ruido. Voce fala direto com quem executa.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur md:mt-24 md:grid-cols-4">
          <Stat value="R$ 2M+" label="gerenciados em ads" />
          <Stat value="40+" label="paginas no ar" />
          <Stat value="7 dias" label="do briefing ao live" />
          <Stat value="3.4x" label="ROAS medio dos clientes" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-dark/60 px-5 py-6 text-left md:px-7 md:py-8">
      <div className="font-display text-2xl font-bold tracking-tight md:text-4xl">
        <span className="gradient-text-brand">{value}</span>
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-dark-muted md:text-xs">
        {label}
      </div>
    </div>
  );
}
