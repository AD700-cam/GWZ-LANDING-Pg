import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      {/* ATTENTION - Hero Section */}
      <HeroSection />

      {/* INTEREST - Problem Awareness */}
      <ProblemSection />

      {/* DESIRE - Solution & System */}
      <SolutionSection />

      {/* DESIRE - Pricing Packages */}
      <PricingSection />

      {/* ACTION - Risk Reversal & FAQ */}
      <FAQSection />

      {/* ACTION - Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
