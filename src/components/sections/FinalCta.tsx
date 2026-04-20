import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-dark-section px-5 py-24 text-dark-foreground md:px-8 md:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-electric/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-whatsapp/15 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-dark-foreground/80 backdrop-blur">
          <Sparkles className="h-3 w-3 text-gold" />
          Só 3 vagas em maio
        </div>

        <h2 className="text-balance font-display text-3xl font-bold leading-[1.02] md:text-5xl lg:text-7xl">
          Seu próximo lançamento
          <br />
          merece uma estrutura{" "}
          <span className="font-serif-display gradient-text-brand">à altura.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-base text-dark-foreground/70 md:text-xl">
          15 minutos no WhatsApp e você sai com um diagnóstico claro do que está travando seu
          faturamento — independente de fechar comigo ou não.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <WhatsAppButton size="xl" glow>
            Quero conversar agora
          </WhatsAppButton>
          <p className="text-sm text-dark-muted">
            Sem compromisso. Se não fizer sentido pro seu momento, eu te falo na hora.
          </p>
        </div>
      </div>
    </section>
  );
}
