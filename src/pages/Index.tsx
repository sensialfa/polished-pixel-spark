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
      {/* Blur edges top & bottom */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-16 bg-gradient-to-b from-background/40 to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] h-16 bg-gradient-to-t from-background/40 to-transparent" />

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
