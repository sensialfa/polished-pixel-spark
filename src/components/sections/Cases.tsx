import { TrendingUp, ArrowUpRight, Star } from "lucide-react";
import { Section } from "@/components/Section";

interface Case {
  tag: string;
  tagColor: string;
  niche: string;
  roas: string;
  cpl: string;
  conversion: string;
  revenue: string;
  resultLine: string;
  period: string;
  icon: string;
}

const cases: Case[] = [
  {
    tag: "Lancamento",
    tagColor: "bg-electric/15 text-electric ring-1 ring-electric/25",
    niche: "Mentoria de negocios digitais",
    roas: "4.8x",
    cpl: "R$ 6,40",
    conversion: "3.2%",
    revenue: "R$ 187k",
    period: "21 dias de campanha",
    resultLine: "R$ 38k investidos viraram R$ 187k em receita — sem queimar lista nem audiencia.",
    icon: "🚀",
  },
  {
    tag: "Perpetuo",
    tagColor: "bg-whatsapp/15 text-whatsapp ring-1 ring-whatsapp/25",
    niche: "Curso online de ingles",
    roas: "3.6x",
    cpl: "R$ 4,90",
    conversion: "2.8%",
    revenue: "R$ 92k/mes",
    period: "Rodando ha 4 meses",
    resultLine: "Estrutura estavel rodando R$ 25k/mes em ads e devolvendo +R$ 90k em vendas recorrentes.",
    icon: "♾️",
  },
  {
    tag: "VSL + Webinar",
    tagColor: "bg-gold/15 text-gold ring-1 ring-gold/25",
    niche: "Coaching de alta performance",
    roas: "5.1x",
    cpl: "R$ 8,20",
    conversion: "4.1%",
    revenue: "R$ 134k",
    period: "1 ciclo de 14 dias",
    resultLine: "VSL + pagina otimizada baixaram o CPL em 47% e dobraram a taxa de conversao do webinar.",
    icon: "🎯",
  },
  {
    tag: "E-commerce",
    tagColor: "bg-electric/15 text-electric ring-1 ring-electric/25",
    niche: "Loja de suplementos",
    roas: "3.9x",
    cpl: "R$ 3,80",
    conversion: "3.5%",
    revenue: "R$ 210k",
    period: "3 meses de operacao",
    resultLine: "Funil otimizado com upsell elevou o ticket medio em 62% e reduziu custo por venda.",
    icon: "📦",
  },
  {
    tag: "High Ticket",
    tagColor: "bg-gold/15 text-gold ring-1 ring-gold/25",
    niche: "Consultoria financeira",
    roas: "6.2x",
    cpl: "R$ 12,50",
    conversion: "5.3%",
    revenue: "R$ 320k",
    period: "30 dias de campanha",
    resultLine: "Pagina de aplicacao + qualificacao automatica geraram 48 calls com taxa de 38% de fechamento.",
    icon: "💎",
  },
];

// Duplicate array for seamless infinite scroll
const duplicatedCases = [...cases, ...cases];

export function Cases() {
  return (
    <Section id="cases" className="relative overflow-hidden bg-muted/40">
      <div className="pointer-events-none absolute inset-0 bg-dots-light opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
          <Star className="h-3 w-3" fill="currentColor" />
          Cases reais
        </span>
        <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Numeros que <span className="font-serif-display text-whatsapp">cabem</span> no extrato.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          Resultados de projetos reais entregues nos ultimos 12 meses, em diferentes nichos e
          modelos de venda.
        </p>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative mt-14">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/40 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted/40 to-transparent md:w-32" />

        <div className="flex animate-scroll-left gap-6 hover:[animation-play-state:paused]">
          {duplicatedCases.map((c, i) => (
            <article
              key={i}
              className="group relative flex w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg md:w-[380px]"
            >
              {/* Top accent gradient line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-electric via-whatsapp to-gold opacity-60 transition-opacity group-hover:opacity-100" />

              <div className="flex items-center justify-between p-6 pb-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{c.icon}</span>
                  <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${c.tagColor}`}>
                    {c.tag}
                  </span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {c.period}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold leading-tight text-foreground md:text-xl">
                  {c.niche}
                </h3>

                {/* Metrics grid */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <Metric label="ROAS" value={c.roas} accent="electric" />
                  <Metric label="CPL" value={c.cpl} accent="whatsapp" />
                  <Metric label="Conversao" value={c.conversion} accent="electric" />
                  <Metric label="Receita" value={c.revenue} accent="whatsapp" />
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-border bg-muted/50 p-4">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" strokeWidth={2.5} />
                  <p className="text-[12px] font-medium leading-relaxed text-foreground/80 md:text-[13px]">
                    {c.resultLine}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border bg-muted/30 px-6 py-3.5 text-xs text-muted-foreground">
                <span className="font-medium">Pagina + Ads + Otimizacao</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="relative mx-auto mt-10 max-w-xl text-center text-xs text-muted-foreground">
        * Numeros reais de projetos entregues. Nomes preservados sob NDA — relato detalhado no
        WhatsApp.
      </p>
    </Section>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent: "electric" | "whatsapp" }) {
  return (
    <div className="rounded-xl border border-border bg-background px-3.5 py-3 transition-colors duration-300 group-hover:border-border/80">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className={`mt-0.5 font-display text-xl font-bold tracking-tight md:text-2xl ${accent === "electric" ? "text-electric" : "text-whatsapp"}`}>
        {value}
      </div>
    </div>
  );
}
