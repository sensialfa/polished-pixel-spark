import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Cases } from "@/components/sections/Cases";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <Cases />
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
