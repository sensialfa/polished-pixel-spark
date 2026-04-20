import { Check, Layout, Megaphone, ShieldCheck, Clock, type LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const pageFeatures = [
  "Pagina responsiva, otimizada pra carregar em < 2s",
  "Copy persuasiva escrita por mim, do headline ao CTA",
  "Integracao com Hotmart, Kiwify ou Eduzz",
  "Pixel da Meta + eventos de conversao calibrados",
  "Hospedagem inclusa no primeiro ano",
];

const trafficFeatures = [
  "Estrutura completa de campanhas Meta Ads",
  "Segmentacao por interesse, lookalike e remarketing",
  "3 variacoes de criativo (copy + arte) testadas",
  "Pixel + CAPI server-side configurado",
  "Dashboard ao vivo + 7 dias de otimizacao incluida",
];

export function Pricing() {
  return (
    <Section id="pricing" className="relative overflow-hidden bg-muted/40">
      <div className="pointer-events-none absolute inset-0 bg-dots-light opacity-40 [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
          Pacote completo
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Tudo entregue por
          <br />
          <span className="inline-flex items-baseline gap-3">
            <span className="text-muted-foreground/50 line-through font-serif-display text-3xl md:text-4xl">R$ 3.500</span>
            <span className="gradient-text-brand">R$ 1.997</span>
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          Pagamento unico. Sem mensalidade escondida, sem fee surpresa no fim do mes.
        </p>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        <PricingCard
          icon={Layout}
          title="Pagina de Vendas"
          subtitle="Estrutura que converte"
          features={pageFeatures}
          accentBg="bg-electric/10"
          accentText="text-electric"
          accentRing="ring-electric/20"
        />
        <PricingCard
          icon={Megaphone}
          title="Trafego Pago"
          subtitle="Trafego que escala"
          features={trafficFeatures}
          accentBg="bg-whatsapp/15"
          accentText="text-whatsapp"
          accentRing="ring-whatsapp/25"
          highlight
        />
      </div>

      <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-2xl border border-gold/25 bg-gold/[0.06] p-5">
          <Clock className="h-5 w-5 shrink-0 text-gold" strokeWidth={2.2} />
          <p className="text-sm font-medium leading-relaxed text-foreground/90">
            Atendo no maximo <strong>5 clientes por mes</strong> pra garantir entrega no prazo.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-whatsapp/25 bg-whatsapp/[0.06] p-5">
          <ShieldCheck className="h-5 w-5 shrink-0 text-whatsapp" strokeWidth={2.2} />
          <p className="text-sm font-medium leading-relaxed text-foreground/90">
            <strong>Garantia de entrega em 7 dias</strong> uteis ou voce nao paga a segunda parcela.
          </p>
        </div>
      </div>

      <div className="relative mt-12 text-center">
        <WhatsAppButton size="lg" glow>
          Quero garantir minha vaga
        </WhatsAppButton>
        <p className="mt-4 text-xs text-muted-foreground">
          Investimento em ads e separado · sugiro budget minimo de R$ 50/dia
        </p>
      </div>
    </Section>
  );
}

interface CardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  features: string[];
  accentBg: string;
  accentText: string;
  accentRing: string;
  highlight?: boolean;
}

function PricingCard({ icon: Icon, title, subtitle, features, accentBg, accentText, accentRing, highlight }: CardProps) {
  return (
    <div className={`relative flex flex-col rounded-3xl border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg md:p-9 ${highlight ? "border-whatsapp/30" : "border-border"}`}>
      {highlight && (
        <span className="absolute -top-3 right-7 rounded-full bg-whatsapp px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-whatsapp-foreground shadow-glow-whatsapp">
          Diferencial
        </span>
      )}
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${accentBg} ${accentText} ${accentRing}`}>
        <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
      </div>
      <div className="mt-5">
        <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
        <p className={`mt-1 text-sm font-medium ${accentText}`}>{subtitle}</p>
      </div>
      <ul className="mt-7 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm md:text-[15px]">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accentBg} ${accentText}`}>
              <Check className="h-3 w-3" strokeWidth={3.5} />
            </span>
            <span className="text-foreground/85">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
