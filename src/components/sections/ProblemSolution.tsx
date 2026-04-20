import { X, Check } from "lucide-react";
import { Section } from "@/components/Section";

const problems = [
  "Pagina de vendas que nao converte e dinheiro jogado no lixo do trafego",
  "Anuncios rodando sem estrategia = CPL alto e ROAS negativo",
  "Seus concorrentes estao escalando enquanto voce tenta resolver sozinho",
];

const solutions = [
  "Pagina construida com copy e design que converte visitante em comprador",
  "Trafego pago com segmentacao cirurgica pro publico do seu produto",
  "Tudo entregue em 7 dias, pronto pra rodar",
];

export function ProblemSolution() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold md:text-5xl">
          Seu produto e bom.
          <br />
          <span className="text-destructive">Sua estrutura de vendas nao.</span>
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-7 md:p-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
            O problema
          </div>
          <ul className="space-y-4">
            {problems.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/15">
                  <X className="h-4 w-4 text-destructive" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground/80 md:text-base">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-whatsapp/20 bg-whatsapp/5 p-7 md:p-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-whatsapp/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-whatsapp">
            A solucao
          </div>
          <ul className="space-y-4">
            {solutions.map((s) => (
              <li key={s} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-whatsapp/20">
                  <Check className="h-4 w-4 text-whatsapp" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground/80 md:text-base">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
