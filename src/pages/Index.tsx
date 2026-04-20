import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Cases } from "@/components/sections/Cases";
import { SocialProof } from "@/components/sections/SocialProof";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Subtle grid */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Blur edges top & bottom */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-16 backdrop-blur-[1.5px]" style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }} />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] h-16 backdrop-blur-[1.5px]" style={{ maskImage: "linear-gradient(to top, black, transparent)" }} />

      {/* Cursor light */}
      <CursorGlow />

      <Hero />
      <ProblemSolution />
      <Cases />
      <SocialProof />
      <Process />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
