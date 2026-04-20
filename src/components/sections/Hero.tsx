import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import portrait from "@/assets/evandro-portrait.jpg";

export function Hero() {
  return (
    <section className="scan-line noise-overlay relative overflow-hidden bg-dark-section px-5 pb-24 pt-8 text-dark-foreground md:px-8 md:pb-32 md:pt-10">
      {/* Animated aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-orb animate-aurora-1 -top-32 right-[5%] h-[520px] w-[520px] bg-electric/35" />
        <div className="aurora-orb animate-aurora-2 top-[30%] -left-32 h-[460px] w-[460px] bg-whatsapp/25" />
        <div className="aurora-orb animate-aurora-3 bottom-0 right-[15%] h-[380px] w-[380px] bg-gold/20" />
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,black,transparent)]" />

      {/* Top bar — minimal, brand mark left, version chip right */}
      <nav className="relative mx-auto mb-10 flex max-w-6xl items-center justify-between md:mb-14">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-dark-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-whatsapp shadow-[0_0_12px_hsl(var(--whatsapp-glow))]" />
          ev/2026
        </div>
        <a
          href="#pricing"
          className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-dark-foreground/90 backdrop-blur transition-all duration-300 hover:border-electric-glow/40 hover:bg-white/10 hover:shadow-[0_0_24px_-4px_hsl(var(--electric)/0.4)] md:block"
        >
          Ver pacote →
        </a>
      </nav>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Centered avatar — large, with orbital ring + name */}
        <div className="animate-fade-up relative mb-7 md:mb-9">
          {/* Orbital rotating ring */}
          <div className="absolute inset-0 -m-3 rounded-full">
            <div className="orbital-ring absolute inset-0 rounded-full opacity-70 blur-[2px]" />
          </div>
          {/* Soft halo */}
          <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-electric/30 via-whatsapp/20 to-gold/20 blur-3xl" />

          {/* Avatar */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/15 bg-dark shadow-[0_20px_70px_-15px_hsl(var(--electric)/0.6)] md:h-44 md:w-44">
            <img
              src={portrait}
              alt="Evandro Carvalho"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
          </div>

          {/* Floating verified-style tag */}
          <div className="float-tag-a absolute -right-2 -top-1 flex items-center gap-1 rounded-full border border-white/10 bg-dark/80 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-whatsapp-glow backdrop-blur md:-right-4 md:top-2">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-whatsapp" />
            online
          </div>
          {/* Floating role tag */}
          <div className="float-tag-b absolute -bottom-2 -left-3 hidden items-center gap-1.5 rounded-full border border-white/10 bg-dark/80 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-electric-glow backdrop-blur md:flex">
            <Sparkles className="h-3 w-3" />
            dev + ads
          </div>
        </div>

        {/* Name + role */}
        <div className="animate-fade-up delay-100 mb-2 flex flex-col items-center gap-1">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Evandro Carvalho
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-dark-muted">
            full-stack <span className="text-electric-glow">×</span> performance ads
          </p>
        </div>

        {/* Status badge */}
        <div className="animate-fade-up delay-200 mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-dark-foreground/85 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
            3 vagas · maio
          </span>
          <span className="h-3 w-px bg-white/15" />
          <span className="text-whatsapp-glow">Resposta em 2h</span>
        </div>

        {/* Headline — line-by-line reveal */}
        <h1 className="mx-auto mt-8 text-center font-display text-[32px] font-bold leading-[1.1] tracking-[-0.035em] sm:text-[44px] md:text-7xl lg:text-[88px]">
          <span className="block whitespace-nowrap">
            <span className="reveal-mask">
              <span className="reveal-line">Sua oferta merece uma</span>
            </span>
          </span>
          <span className="mt-1 block whitespace-nowrap sm:mt-2">
            <span className="reveal-mask">
              <span className="reveal-line delay-100">estrutura que vende</span>
            </span>
          </span>
          <span className="mt-1 block sm:mt-2">
            <span className="reveal-mask">
              <span className="reveal-line delay-200 relative inline-block">
                <span className="gradient-text-animated">sozinha.</span>
                <span className="font-serif absolute -right-3 -top-3 text-3xl italic text-whatsapp-glow md:-right-5 md:-top-6 md:text-5xl">*</span>
              </span>
            </span>
          </span>
        </h1>

        {/* Subhead */}
        <p className="animate-fade-up delay-500 mx-auto mt-7 max-w-2xl text-pretty text-base text-dark-foreground/65 md:text-xl md:leading-relaxed">
          Construo <span className="text-dark-foreground">páginas de venda</span> + estrutura de
          <span className="text-dark-foreground"> tráfego pago</span> para infoprodutores que já faturam,
          mas perdem dinheiro em conversão. No ar em{" "}
          <span className="font-mono text-whatsapp-glow">7 dias</span>.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-700 mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <WhatsAppButton size="lg" glow>
            Quero uma estrutura assim
          </WhatsAppButton>
          <a
            href="#cases"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-dark-foreground/70 transition-colors hover:text-dark-foreground"
          >
            Ver cases reais
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>

        <p className="animate-fade-up delay-900 mt-6 inline-flex items-center gap-1.5 text-xs text-dark-muted">
          <Zap className="h-3 w-3 text-gold" fill="currentColor" />
          Sem agência, sem ruído. Você fala direto com quem executa.
        </p>

        {/* Stats strip — premium glass */}
        <div className="animate-fade-up delay-900 mt-20 grid w-full grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl md:mt-24 md:grid-cols-4">
          <Stat value="R$ 2M+" label="gerenciados em ads" />
          <Stat value="40+" label="páginas no ar" />
          <Stat value="7 dias" label="do briefing ao live" />
          <Stat value="3.4x" label="ROAS médio dos clientes" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="group relative bg-dark/60 px-5 py-6 text-left transition-colors duration-500 hover:bg-dark/40 md:px-7 md:py-8">
      <div className="font-display text-2xl font-bold tracking-tight md:text-4xl">
        <span className="gradient-text-animated">{value}</span>
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dark-muted md:text-[11px]">
        {label}
      </div>
      <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-glow/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inset-x-7" />
    </div>
  );
}
