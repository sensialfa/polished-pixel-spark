import { Compass, PenTool, Crosshair, Rocket } from "lucide-react";
import { Section } from "@/components/Section";

const steps = [
  {
    days: "Dia 1 — 2",
    label: "Diagnostico",
    title: "Mergulho no produto, no publico e na oferta",
    desc: "Reuniao estrategica de 60 min, analise da concorrencia e desenho do funil ideal pro seu modelo de venda.",
    icon: Compass,
  },
  {
    days: "Dia 3 — 4",
    label: "Construcao",
    title: "Pagina de vendas com copy que ataca a duvida certa",
    desc: "Wireframe, copy persuasiva, design responsivo e integracao com checkout (Hotmart, Kiwify ou Eduzz).",
    icon: PenTool,
  },
  {
    days: "Dia 5 — 6",
    label: "Trafego",
    title: "Setup completo das campanhas Meta Ads",
    desc: "Estrutura de campanhas, segmentacao por interesse e lookalike, 3 variacoes de criativo e pixel calibrado.",
    icon: Crosshair,
  },
  {
    days: "Dia 7",
    label: "Live",
    title: "Tudo no ar, rodando e gerando vendas",
    desc: "Campanha publicada, dashboard de acompanhamento entregue e os primeiros 7 dias de otimizacao por minha conta.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
          Processo
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Do briefing ao primeiro
          <br />
          checkout em <span className="font-serif-display text-whatsapp">7 dias.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          Sem reuniao desnecessaria, sem espera de aprovacao em 4 niveis. Voce fala direto comigo.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-7 top-3 bottom-3 w-px bg-gradient-to-b from-electric via-whatsapp to-electric/10 md:left-9" />

        <div className="space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="group relative flex gap-5 md:gap-7">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-electric-glow text-white shadow-glow-electric transition-transform duration-300 group-hover:scale-105 md:h-[72px] md:w-[72px]">
                  <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2} />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-dark text-[10px] font-bold text-dark-foreground ring-2 ring-background">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-soft-lg md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-electric">
                      {step.days}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-foreground md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
