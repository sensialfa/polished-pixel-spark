import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-dark-section px-5 py-24 text-dark-foreground md:px-8 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-whatsapp/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Seu proximo lancamento merece uma{" "}
          <span className="bg-gradient-to-r from-electric to-whatsapp bg-clip-text text-transparent">
            estrutura profissional
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-dark-muted md:text-xl">
          Vamos conversar 15 minutos sobre como escalar seu infoproduto.
        </p>

        <div className="mt-10">
          <WhatsAppButton size="xl" glow>
            Quero conversar agora
          </WhatsAppButton>
          <p className="mt-4 text-sm text-dark-muted">
            Sem compromisso. Se nao fizer sentido, te falo com honestidade.
          </p>
        </div>
      </div>
    </section>
  );
}
