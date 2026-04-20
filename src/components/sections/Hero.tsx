import { TrendingUp, Briefcase } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-section px-5 pb-20 pt-16 text-dark-foreground md:px-8 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-electric/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-whatsapp/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-dark-muted backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-whatsapp" />
            Disponivel para novos projetos
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Paginas que vendem.
            <br />
            <span className="bg-gradient-to-r from-electric to-whatsapp bg-clip-text text-transparent">
              Trafego que escala.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg text-dark-muted md:text-xl">
            Ajudo infoprodutores a transformar cliques em alunos pagantes com paginas de alta
            conversao + trafego pago estrategico.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <TrendingUp className="mb-2 h-5 w-5 text-electric" />
              <div className="text-2xl font-bold md:text-3xl">+R$ [X]</div>
              <div className="text-xs text-dark-muted">gerenciados em anuncios</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <Briefcase className="mb-2 h-5 w-5 text-whatsapp" />
              <div className="text-2xl font-bold md:text-3xl">+[X]</div>
              <div className="text-xs text-dark-muted">projetos entregues</div>
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppButton size="lg" glow>
              Quero escalar meu infoproduto
            </WhatsAppButton>
            <p className="mt-3 text-sm text-dark-muted">⚡ Respondo em ate 2 horas</p>
          </div>
        </div>

        <div className="order-first flex justify-center md:order-last">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric to-whatsapp opacity-30 blur-2xl" />
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-4 border-white/10 bg-gradient-to-br from-[hsl(240_25%_22%)] to-[hsl(240_25%_14%)] text-6xl font-bold text-dark-foreground shadow-2xl md:h-72 md:w-72 md:text-7xl">
              EC
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-whatsapp px-4 py-1.5 text-xs font-semibold text-whatsapp-foreground shadow-lg">
              Evandro Carvalho
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
