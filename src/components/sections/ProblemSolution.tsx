import { TrendingDown, Flame, EyeOff, Target, Zap, Compass } from "lucide-react";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const problems = [
  {
    icon: EyeOff,
    title: "Página amadora",
    text: "Layout copiado de template, copy genérica, zero hierarquia visual. Visitante chega, olha e fecha em 6 segundos.",
  },
  {
    icon: Flame,
    title: "Ads queimando dinheiro",
    text: "Campanha sem segmentação real, criativo fraco e zero teste estruturado. CPL nas alturas, ROAS no vermelho.",
  },
  {
    icon: TrendingDown,
    title: "Concorrente passando por cima",
    text: "Enquanto você tenta resolver no improviso, quem entendeu o jogo já escalou pra 6 dígitos por mês.",
  },
];

const solutions = [
  {
    icon: Target,
    title: "Página que converte",
    text: "Copy persuasiva, design que guia o olhar e gatilhos posicionados onde o visitante já está pronto pra clicar.",
  },
  {
    icon: Compass,
    title: "Tráfego com bússola",
    text: "Segmentação cirúrgica, criativo testado e estrutura de funil que entrega o lead certo pelo menor custo possível.",
  },
  {
    icon: Zap,
    title: "7 dias do zero ao live",
    text: "Você não espera meses por uma agência. Em 1 semana sua estrutura está no ar, rodando e gerando vendas.",
  },
];

export function ProblemSolution() {
  return (
    <Section>
      <RevealOnScroll variant="blur">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            O diagnóstico
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
            Seu produto é bom.
            <br />
            <span className="font-serif-display text-destructive">Sua estrutura de venda</span> não.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            90% dos infoprodutores que travaram no faturamento têm o mesmo problema — e quase nunca é
            o produto.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
        <RevealOnScroll variant="fade-left" delay={100}>
          <div className="relative overflow-hidden rounded-3xl border border-destructive/15 bg-gradient-to-br from-destructive/[0.06] to-transparent p-7 md:p-9">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-destructive">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              Onde o dinheiro vaza
            </div>
            <ul className="space-y-6">
              {problems.map(({ icon: Icon, title, text }, i) => (
                <RevealOnScroll key={title} variant="fade-up" delay={i * 120 + 200}>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-destructive/10 text-destructive">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-display text-base font-bold text-foreground md:text-lg">{title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{text}</p>
                    </div>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" delay={200}>
          <div className="relative overflow-hidden rounded-3xl border border-whatsapp/20 bg-gradient-to-br from-whatsapp/[0.08] to-transparent p-7 md:p-9">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-whatsapp/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-whatsapp">
              <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
              Como eu resolvo
            </div>
            <ul className="space-y-6">
              {solutions.map(({ icon: Icon, title, text }, i) => (
                <RevealOnScroll key={title} variant="fade-up" delay={i * 120 + 300}>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-display text-base font-bold text-foreground md:text-lg">{title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{text}</p>
                    </div>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
