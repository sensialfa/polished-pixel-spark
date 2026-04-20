import { TrendingUp, ArrowUpRight } from "lucide-react";
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
}

const cases: Case[] = [
  {
    tag: "Lancamento",
    tagColor: "bg-electric/10 text-electric ring-1 ring-electric/20",
    niche: "Mentoria de negocios digitais",
    roas: "4.8x",
    cpl: "R$ 6,40",
    conversion: "3.2%",
    revenue: "R$ 187k",
    period: "21 dias de campanha",
    resultLine: "R$ 38k investidos viraram R$ 187k em receita — sem queimar lista nem audiencia.",
  },
  {
    tag: "Perpetuo",
    tagColor: "bg-whatsapp/10 text-whatsapp ring-1 ring-whatsapp/20",
    niche: "Curso online de ingles",
    roas: "3.6x",
    cpl: "R$ 4,90",
    conversion: "2.8%",
    revenue: "R$ 92k/mes",
    period: "Rodando ha 4 meses",
    resultLine: "Estrutura estavel rodando R$ 25k/mes em ads e devolvendo +R$ 90k em vendas recorrentes.",
  },
  {
    tag: "VSL + Webinar",
    tagColor: "bg-gold/10 text-gold ring-1 ring-gold/20",
    niche: "Coaching de alta performance",
    roas: "5.1x",
    cpl: "R$ 8,20",
    conversion: "4.1%",
    revenue: "R$ 134k",
    period: "1 ciclo de 14 dias",
    resultLine: "VSL + pagina otimizada baixaram o CPL em 47% e dobraram a taxa de conversao do webinar.",
  },
];

export function Cases() {
  return (
    <Section id="cases" className="relative overflow-hidden bg-muted/40">
      <div className="pointer-events-none absolute inset-0 bg-dots-light opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
          Cases reais
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Numeros que <span className="font-serif-display text-whatsapp">cabem</span> no extrato.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          Resultados de projetos reais entregues nos ultimos 12 meses, em diferentes nichos e
          modelos de venda.
        </p>
      </div>

      <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {cases.map((c, i) => (
          <article
            key={i}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg"
          >
            <div className="flex items-center justify-between p-6 pb-0 md:p-7 md:pb-0">
              <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${c.tagColor}`}>
                {c.tag}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {c.period}
              </span>
            </div>

            <div className="p-6 md:p-7">
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

              <div className="mt-6 flex items-start gap-2.5 border-t border-border pt-5">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" strokeWidth={2.5} />
                <p className="text-[13px] font-medium leading-relaxed text-foreground/85 md:text-sm">
                  {c.resultLine}
                </p>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-border bg-muted/30 px-6 py-4 text-xs text-muted-foreground md:px-7">
              <span className="font-medium">Pagina + Ads + Otimizacao</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </article>
        ))}
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
    <div className="rounded-xl border border-border bg-background px-3.5 py-3">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className={`mt-0.5 font-display text-xl font-bold tracking-tight md:text-2xl ${accent === "electric" ? "text-electric" : "text-whatsapp"}`}>
        {value}
      </div>
    </div>
  );
}
