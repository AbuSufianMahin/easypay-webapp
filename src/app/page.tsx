import BrandSection from "@/components/sections/BrandSection/BrandSection";
import FeatureSection from "@/components/sections/Features/FeatureSection";
import HeroSection from "@/components/sections/heroSection/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <BrandSection />
      <HowItWorks />
    </div>
  );
}
