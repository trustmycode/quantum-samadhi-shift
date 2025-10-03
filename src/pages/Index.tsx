import Hero from "@/components/Hero";
import ProgramModules from "@/components/ProgramModules";
import AuthorSection from "@/components/AuthorSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProgramModules />
      <AuthorSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default Index;
