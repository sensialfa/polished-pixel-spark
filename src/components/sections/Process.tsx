import { Search, PenTool, Target, Rocket } from "lucide-react";
import { Section } from "@/components/Section";

const steps = [
  { days: "Dia 1-2", title: "Reuniao estrategica + analise do seu produto e publico", icon: Search },
  { days: "Dia 3-4", title: "Construcao da pagina de vendas com copy persuasiva", icon: PenTool },
  { days: "Dia 5-6", title: "Setup completo das campanhas de trafego pago", icon: Target },
  { days: "Dia 7", title: "Tudo no ar, rodando e gerando vendas", icon: Rocket },
];

export function Process() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-electric">
          Processo
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
          Do zero a vendas em 7 dias
        </h2>
      </div>

      <div className="relative mx-auto mt-16 max-w-2xl">
        <div className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-electric via-whatsapp to-electric/20 md:left-8" />

        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex gap-5 md:gap-6">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-[hsl(220_85%_45%)] text-white shadow-lg md:h-16 md:w-16">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-electric">
                    {step.days}
                  </div>
                  <p className="mt-2 text-base font-medium text-foreground md:text-lg">
                    {step.title}
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
