import CTASection from "@/components/sections/CTASection/CTASection";
import FeatureSection from "@/components/sections/Features/FeatureSection";
import HeroSection from "@/components/sections/heroSection/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import PricingSection from "@/components/sections/Pricing/PricingSection";
import SecuritySection from "@/components/sections/Security/SecuritySection";
import TestiMonialSection from "@/components/sections/TestiMonial/TestiMonialSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <SecuritySection />
      <PricingSection />
      <TestiMonialSection/>
      <CTASection />
    </div>
  );
}
