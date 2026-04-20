import { useRef, useState, useCallback, useEffect } from "react";
import { TrendingUp, ArrowUpRight, Star, Rocket, Infinity, Target, Package, Gem } from "lucide-react";
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
  icon: React.ReactNode;
}

const cases: Case[] = [
  {
    tag: "Lançamento",
    tagColor: "bg-electric/20 text-electric ring-1 ring-electric/30",
    niche: "Mentoria de negócios digitais",
    roas: "4.8x",
    cpl: "R$ 6,40",
    conversion: "3.2%",
    revenue: "R$ 187k",
    period: "21 dias de campanha",
    resultLine: "R$ 38k investidos viraram R$ 187k em receita — sem queimar lista nem audiência.",
    icon: <Rocket className="h-5 w-5 text-electric" />,
  },
  {
    tag: "Perpétuo",
    tagColor: "bg-whatsapp/20 text-whatsapp ring-1 ring-whatsapp/30",
    niche: "Curso online de inglês",
    roas: "3.6x",
    cpl: "R$ 4,90",
    conversion: "2.8%",
    revenue: "R$ 92k/mês",
    period: "Rodando há 4 meses",
    resultLine: "Estrutura estável rodando R$ 25k/mês em ads e devolvendo +R$ 90k em vendas recorrentes.",
    icon: <Infinity className="h-5 w-5 text-whatsapp" />,
  },
  {
    tag: "VSL + Webinar",
    tagColor: "bg-gold/20 text-gold ring-1 ring-gold/30",
    niche: "Coaching de alta performance",
    roas: "5.1x",
    cpl: "R$ 8,20",
    conversion: "4.1%",
    revenue: "R$ 134k",
    period: "1 ciclo de 14 dias",
    resultLine: "VSL + página otimizada baixaram o CPL em 47% e dobraram a taxa de conversão do webinar.",
    icon: <Target className="h-5 w-5 text-gold" />,
  },
  {
    tag: "E-commerce",
    tagColor: "bg-electric/20 text-electric ring-1 ring-electric/30",
    niche: "Loja de suplementos",
    roas: "3.9x",
    cpl: "R$ 3,80",
    conversion: "3.5%",
    revenue: "R$ 210k",
    period: "3 meses de operação",
    resultLine: "Funil otimizado com upsell elevou o ticket médio em 62% e reduziu custo por venda.",
    icon: <Package className="h-5 w-5 text-electric" />,
  },
  {
    tag: "High Ticket",
    tagColor: "bg-gold/20 text-gold ring-1 ring-gold/30",
    niche: "Consultoria financeira",
    roas: "6.2x",
    cpl: "R$ 12,50",
    conversion: "5.3%",
    revenue: "R$ 320k",
    period: "30 dias de campanha",
    resultLine: "Página de aplicação + qualificação automática geraram 48 calls com taxa de 38% de fechamento.",
    icon: <Gem className="h-5 w-5 text-gold" />,
  },
];

const duplicatedCases = [...cases, ...cases];

export function Cases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000);
  }, []);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setTimeout(() => setIsPaused(false), 2000);
      }
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isDragging]);

  return (
    <Section id="cases" className="relative overflow-hidden bg-dark-section text-dark-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
          <Star className="h-3 w-3" fill="currentColor" />
          Cases reais
        </span>
        <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
          Números que{" "}
          <span className="gradient-text-animated">cabem</span>{" "}
          no extrato.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-dark-muted md:text-lg">
          Resultados de projetos reais entregues nos últimos 12 meses, em diferentes nichos e
          modelos de venda.
        </p>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[hsl(240_35%_9%)] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[hsl(240_35%_9%)] to-transparent md:w-40" />

        <div
          ref={trackRef}
          className={`flex gap-6 overflow-x-auto scrollbar-hide select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex gap-6 ${isPaused ? "" : "animate-cases-scroll"}`}
            style={{ willChange: "transform" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { if (!isDragging) setIsPaused(false); }}
          >
            {duplicatedCases.map((c, i) => (
              <article
                key={i}
                className="group relative flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-sm shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.12] hover:bg-white/[0.07] hover:shadow-[0_16px_48px_-12px_hsl(0_0%_0%/0.6)] md:w-[380px]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-50 transition-opacity group-hover:opacity-100" />

                <div className="flex items-center justify-between p-5 pb-0">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/[0.08]">
                      {c.icon}
                    </div>
                    <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${c.tagColor}`}>
                      {c.tag}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-dark-muted">
                    {c.period}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold leading-tight text-white md:text-xl">
                    {c.niche}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <MetricCard label="ROAS" value={c.roas} accent="electric" />
                    <MetricCard label="CPL" value={c.cpl} accent="whatsapp" />
                    <MetricCard label="Conversão" value={c.conversion} accent="electric" />
                    <MetricCard label="Receita" value={c.revenue} accent="whatsapp" />
                  </div>

                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" strokeWidth={2.5} />
                    <p className="text-[12px] font-medium leading-relaxed text-white/70 md:text-[13px]">
                      {c.resultLine}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] px-5 py-3 text-xs text-dark-muted">
                  <span className="font-medium">Página + Ads + Otimização</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <p className="relative mx-auto mt-10 max-w-xl text-center text-xs text-dark-muted">
        * Números reais de projetos entregues. Nomes preservados sob NDA — relato detalhado no
        WhatsApp.
      </p>
    </Section>
  );
}

function MetricCard({ label, value, accent }: { label: string; value: string; accent: "electric" | "whatsapp" }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 transition-colors duration-300 group-hover:border-white/[0.1] group-hover:bg-white/[0.05]">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-dark-muted">
        {label}
      </div>
      <div className={`mt-0.5 font-display text-xl font-bold tracking-tight md:text-2xl ${accent === "electric" ? "text-electric" : "text-whatsapp"}`}>
        {value}
      </div>
    </div>
  );
}
