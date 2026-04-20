import { ImageIcon } from "lucide-react";
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
}

const cases: Case[] = [
  {
    tag: "Lancamento",
    tagColor: "bg-electric/15 text-electric",
    niche: "Mentoria de negocios",
    roas: "[X.XX]",
    cpl: "R$ [X,XX]",
    conversion: "[X]%",
    revenue: "R$ [XX.XXX]",
    resultLine: "De R$ [X] investidos para R$ [Y] em faturamento em [Z] dias",
  },
  {
    tag: "Perpetuo",
    tagColor: "bg-whatsapp/15 text-whatsapp",
    niche: "Curso de ingles",
    roas: "[X.XX]",
    cpl: "R$ [X,XX]",
    conversion: "[X]%",
    revenue: "R$ [XX.XXX]",
    resultLine: "De R$ [X] investidos para R$ [Y] em faturamento em [Z] dias",
  },
  {
    tag: "VSL",
    tagColor: "bg-[hsl(35_90%_55%/0.15)] text-[hsl(30_90%_45%)]",
    niche: "Coaching de alta performance",
    roas: "[X.XX]",
    cpl: "R$ [X,XX]",
    conversion: "[X]%",
    revenue: "R$ [XX.XXX]",
    resultLine: "De R$ [X] investidos para R$ [Y] em faturamento em [Z] dias",
  },
];

export function Cases() {
  return (
    <Section className="bg-muted/40">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-electric">
          Cases reais
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
          Resultados que falam por si
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Numeros de projetos entregues para infoprodutores em diferentes nichos.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
        {cases.map((c, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[0_4px_24px_-6px_hsl(0_0%_0%/0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_hsl(0_0%_0%/0.15)]"
          >
            <div className="p-6 md:p-8">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${c.tagColor}`}>
                {c.tag}
              </span>

              <div className="mt-5 flex aspect-video items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/60 text-muted-foreground">
                <div className="flex flex-col items-center gap-2 text-center">
                  <ImageIcon className="h-8 w-8" />
                  <span className="text-xs font-medium">[INSERIR SCREENSHOT]</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Metric label="ROAS" value={c.roas} />
                <Metric label="CPL" value={c.cpl} />
                <Metric label="Conversao" value={c.conversion} />
                <Metric label="Faturamento" value={c.revenue} />
              </div>

              <p className="mt-6 border-t border-border pt-5 text-sm font-medium leading-relaxed text-foreground/90">
                {c.resultLine}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                Nicho · {c.niche}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-muted/60 px-4 py-3">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-xl font-bold text-whatsapp md:text-2xl">{value}</div>
    </div>
  );
}
