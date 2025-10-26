import BrandSection from "@/components/sections/BrandSection/BrandSection";
import FeatureSection from "@/components/sections/Features/FeatureSection";
import HeroSection from "@/components/sections/heroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <BrandSection/>
    </div>
  );
}
