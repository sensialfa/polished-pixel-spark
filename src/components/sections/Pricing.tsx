import { Check, Layout, Megaphone, ShieldCheck, Clock, Zap, Sparkles, type LucideIcon } from "lucide-react";
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
    <Section id="pricing" className="relative overflow-hidden bg-dark-section text-dark-foreground">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      
      {/* Aurora orbs */}
      <div className="aurora-orb animate-aurora-1 -top-40 left-1/4 h-[500px] w-[500px] bg-electric/20" />
      <div className="aurora-orb animate-aurora-2 -bottom-32 right-1/4 h-[400px] w-[400px] bg-whatsapp/15" />
      <div className="aurora-orb animate-aurora-3 top-1/2 left-1/2 h-[300px] w-[300px] bg-gold/10" />

      {/* Header */}
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/[0.08] px-4 py-1.5 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-electric-glow" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-glow">
            Pacote completo
          </span>
        </div>

        <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Tudo entregue por
        </h2>

        {/* Price block */}
        <div className="mx-auto mt-6 inline-flex flex-col items-center gap-2">
          <span className="text-dark-muted line-through font-serif-display text-2xl md:text-3xl">
            R$ 3.500
          </span>
          <div className="relative">
            <span className="gradient-text-animated text-5xl font-bold font-display tracking-tight md:text-7xl lg:text-8xl">
              R$ 1.997
            </span>
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-electric/[0.06] blur-2xl" />
          </div>
          <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-whatsapp/15 px-3 py-1">
            <Zap className="h-3 w-3 text-whatsapp-glow" strokeWidth={2.5} />
            <span className="text-xs font-semibold text-whatsapp-glow">Pagamento unico</span>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-dark-muted md:text-lg">
          Sem mensalidade escondida, sem fee surpresa no fim do mes.
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        <PricingCard
          icon={Layout}
          title="Pagina de Vendas"
          subtitle="Estrutura que converte"
          features={pageFeatures}
          gradientFrom="from-electric/20"
          gradientTo="to-electric/5"
          accentColor="text-electric-glow"
          checkBg="bg-electric/15"
          borderColor="border-electric/15"
        />
        <PricingCard
          icon={Megaphone}
          title="Trafego Pago"
          subtitle="Trafego que escala"
          features={trafficFeatures}
          gradientFrom="from-whatsapp/20"
          gradientTo="to-whatsapp/5"
          accentColor="text-whatsapp-glow"
          checkBg="bg-whatsapp/15"
          borderColor="border-whatsapp/15"
          highlight
        />
      </div>

      {/* Trust badges */}
      <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5 backdrop-blur-sm">
          <Clock className="h-5 w-5 shrink-0 text-gold" strokeWidth={2.2} />
          <p className="text-sm font-medium leading-relaxed text-dark-foreground/90">
            Atendo no maximo <strong className="text-gold">5 clientes por mes</strong> pra garantir entrega no prazo.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-whatsapp/20 bg-whatsapp/[0.04] p-5 backdrop-blur-sm">
          <ShieldCheck className="h-5 w-5 shrink-0 text-whatsapp-glow" strokeWidth={2.2} />
          <p className="text-sm font-medium leading-relaxed text-dark-foreground/90">
            <strong className="text-whatsapp-glow">Garantia de entrega em 7 dias</strong> uteis ou voce nao paga a segunda parcela.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="relative mt-12 text-center">
        <WhatsAppButton size="lg" glow>
          Quero garantir minha vaga
        </WhatsAppButton>
        <p className="mt-4 text-xs text-dark-muted">
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
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  checkBg: string;
  borderColor: string;
  highlight?: boolean;
}

function PricingCard({ icon: Icon, title, subtitle, features, gradientFrom, gradientTo, accentColor, checkBg, borderColor, highlight }: CardProps) {
  return (
    <div className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-[hsl(240_30%_9%)] p-7 transition-all duration-500 hover:-translate-y-1 md:p-9 ${highlight ? "border-whatsapp/25" : borderColor}`}>
      {/* Top gradient line */}
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${gradientFrom} via-transparent ${gradientTo}`} />
      
      {/* Hover glow */}
      <div className={`pointer-events-none absolute -top-20 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-b ${gradientFrom} ${gradientTo} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

      {highlight && (
        <span className="absolute -top-3 right-7 rounded-full bg-whatsapp px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-whatsapp-foreground shadow-glow-whatsapp shine overflow-hidden">
          Diferencial
        </span>
      )}

      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${borderColor} bg-gradient-to-b ${gradientFrom} ${gradientTo}`}>
        <Icon className={`h-[22px] w-[22px] ${accentColor}`} strokeWidth={2} />
      </div>

      <div className="mt-5">
        <h3 className="font-display text-2xl font-bold tracking-tight text-dark-foreground md:text-3xl">{title}</h3>
        <p className={`mt-1 text-sm font-medium ${accentColor}`}>{subtitle}</p>
      </div>

      <ul className="mt-7 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm md:text-[15px]">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkBg}`}>
              <Check className={`h-3 w-3 ${accentColor}`} strokeWidth={3.5} />
            </span>
            <span className="text-dark-foreground/80">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
