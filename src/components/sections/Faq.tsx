import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const faqs = [
  {
    q: "Funciona pra qualquer tipo de infoproduto?",
    a: "Sim. Já entreguei pra mentoria 1:1, curso gravado, comunidade paga, ebook premium e consultoria de alto ticket. A estrutura muda conforme o ticket e o ciclo de venda — não existe template universal aqui.",
  },
  {
    q: "Eu preciso ter o produto pronto?",
    a: "Sim. Eu construo a estrutura de venda — página, copy, tráfego e funil. O produto, a entrega e o atendimento ficam com você. Se ainda está validando a oferta, te indico um caminho antes de começarmos.",
  },
  {
    q: "Já tenho página rodando. Você otimiza ou refaz?",
    a: "Depende do diagnóstico. Às vezes ajustar copy e CTAs já resolve; outras vezes a estrutura inteira está sabotando a conversão. No primeiro papo eu te falo o que faz mais sentido — sem empurrar refação quando não precisa.",
  },
  {
    q: "O investimento em ads já está incluso nos R$ 1.997?",
    a: "Não. Os R$ 1.997 cobrem a construção da página + setup e gestão inicial das campanhas (7 dias). O investimento em anúncios é separado e fica direto no seu cartão Meta. Recomendo começar com R$ 50-80 por dia.",
  },
  {
    q: "E se eu não gostar do resultado em 7 dias?",
    a: "Se eu não entregar a página + estrutura no prazo combinado, você não paga a segunda parcela. E se em 7 dias rodando os números não baterem com o que projetamos, eu reviso a estrutura sem custo extra até ajustar.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% pra começar e travar a vaga, 50% na entrega da página pronta. Pix, cartão em até 6x ou boleto. Nota fiscal emitida normalmente.",
  },
];

export function Faq() {
  return (
    <Section>
      <RevealOnScroll variant="blur">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">FAQ</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
            As dúvidas que <span className="font-serif-display text-whatsapp">sempre</span> aparecem.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            Se a sua não está aqui, manda no WhatsApp — eu respondo pessoalmente.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <RevealOnScroll key={i} variant="fade-up" delay={i * 80}>
              <AccordionItem
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft transition-colors data-[state=open]:border-electric/30 md:px-7"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold tracking-tight hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </RevealOnScroll>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
