import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/Section";

const faqs = [
  {
    q: "Funciona pra qualquer tipo de infoproduto?",
    a: "Sim. Ja entreguei pra mentoria 1:1, curso gravado, comunidade paga, ebook premium e consultoria de alto ticket. A estrutura muda conforme o ticket e o ciclo de venda — nao existe template universal aqui.",
  },
  {
    q: "Eu preciso ter o produto pronto?",
    a: "Sim. Eu construo a estrutura de venda — pagina, copy, trafego e funil. O produto, a entrega e o atendimento ficam com voce. Se ainda esta validando a oferta, te indico um caminho antes de comecarmos.",
  },
  {
    q: "Ja tenho pagina rodando. Voce otimiza ou refaz?",
    a: "Depende do diagnostico. As vezes ajustar copy e CTAs ja resolve; outras vezes a estrutura inteira esta sabotando a conversao. No primeiro papo eu te falo o que faz mais sentido — sem empurrar refacao quando nao precisa.",
  },
  {
    q: "O investimento em ads ja esta incluso nos R$ 1.997?",
    a: "Nao. Os R$ 1.997 cobrem a construcao da pagina + setup e gestao inicial das campanhas (7 dias). O investimento em anuncios e separado e fica direto no seu cartao Meta. Recomendo comecar com R$ 50-80 por dia.",
  },
  {
    q: "E se eu nao gostar do resultado em 7 dias?",
    a: "Se eu nao entregar a pagina + estrutura no prazo combinado, voce nao paga a segunda parcela. E se em 7 dias rodando os numeros nao baterem com o que projetamos, eu reviso a estrutura sem custo extra ate ajustar.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% pra comecar e travar a vaga, 50% na entrega da pagina pronta. Pix, cartao em ate 6x ou boleto. Nota fiscal emitida normalmente.",
  },
];

export function Faq() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">FAQ</span>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          As duvidas que <span className="font-serif-display text-whatsapp">sempre</span> aparecem.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          Se a sua nao esta aqui, manda no WhatsApp — eu respondo pessoalmente.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
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
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
