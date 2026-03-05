import { StickyCountdown } from "@/components/ui/StickyCountdown";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { SolutionPillars } from "@/components/sections/SolutionPillars";
import { ProductMockup } from "@/components/sections/ProductMockup";
import { MentorAuthority } from "@/components/sections/MentorAuthority";
import { Roadmap } from "@/components/sections/Roadmap";
import { SocialProof } from "@/components/sections/SocialProof";
import { Bonuses } from "@/components/sections/Bonuses";
import { OfferAndGuarantee } from "@/components/sections/OfferAndGuarantee";

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyCountdown />
      <Hero />
      <PainPoints />
      <SolutionPillars />
      <ProductMockup />
      <MentorAuthority />
      <Roadmap />
      <SocialProof />
      <Bonuses />
      <OfferAndGuarantee />
    </main>
  );
}
