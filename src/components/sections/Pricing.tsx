import { Check, Layout, Megaphone, AlertCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const pageFeatures = [
  "Design responsivo e otimizado",
  "Copy persuasiva focada em conversao",
  "Integracao com checkout (Hotmart/Kiwify/Eduzz)",
  "Pixel e rastreamento configurado",
  "Hospedagem inclusa",
];

const trafficFeatures = [
  "Estrutura de campanhas Meta Ads",
  "Segmentacao de publico estrategica",
  "3 variacoes de criativo",
  "Configuracao de pixel e eventos",
  "Dashboard de acompanhamento",
];

export function Pricing() {
  return (
    <Section className="bg-muted/40">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-electric">
          Pacote completo
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
          Tudo que voce precisa por <span className="text-whatsapp">R$ 1.997</span>
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        <PricingCard
          icon={Layout}
          title="Pagina de Vendas"
          features={pageFeatures}
          accent="text-electric bg-electric/10"
        />
        <PricingCard
          icon={Megaphone}
          title="Trafego Pago"
          features={trafficFeatures}
          accent="text-whatsapp bg-whatsapp/15"
        />
      </div>

      <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-[hsl(38_90%_55%/0.3)] bg-[hsl(38_90%_55%/0.08)] p-4 md:p-5">
        <AlertCircle className="h-5 w-5 shrink-0 text-[hsl(30_90%_45%)]" />
        <p className="text-sm font-medium text-foreground/90 md:text-base">
          Atendo no maximo <strong>5 clientes por mes</strong> para garantir qualidade na entrega.
        </p>
      </div>

      <div className="mt-10 text-center">
        <WhatsAppButton size="lg" glow>
          Quero garantir minha vaga
        </WhatsAppButton>
      </div>
    </Section>
  );
}

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  features: string[];
  accent: string;
}

function PricingCard({ icon: Icon, title, features, accent }: CardProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${accent}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm md:text-base">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-whatsapp/15">
              <Check className="h-3.5 w-3.5 text-whatsapp" strokeWidth={3} />
            </span>
            <span className="text-foreground/85">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
