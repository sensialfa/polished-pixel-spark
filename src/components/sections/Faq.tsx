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
    a: "Sim. Ja atendi mentorias, cursos online, ebooks, comunidades e consultorias. A estrategia e adaptada pro seu modelo de negocio.",
  },
  {
    q: "Preciso ter produto pronto?",
    a: "Sim, o ideal e que seu produto ja exista. Meu trabalho e criar a estrutura de vendas e trazer o trafego certo.",
  },
  {
    q: "E se eu ja tenho pagina?",
    a: "Posso otimizar sua pagina atual ou criar uma do zero, dependendo do que fizer mais sentido pro seu resultado.",
  },
  {
    q: "O trafego pago ta incluso no preco?",
    a: "O investimento em anuncios e separado. O valor de R$ 1.997 cobre a criacao da pagina + setup e gestao inicial das campanhas. Recomendo um budget minimo de R$ 30-50/dia em anuncios.",
  },
];

export function Faq() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-electric">FAQ</span>
        <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
          Perguntas frequentes
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-sm md:px-6"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline md:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
