// platforms/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformsContent from "@/components/PlatformsContent";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Platforms",
  description: "Explore GrowthPlatform's powerful infrastructure including Marketing Dashboard, Affiliate Portal, Campaign Manager, and Integration Services.",
};

export default function PlatformsPage() {
  return (
    <main id="main-content">
      <Header />
      <PlatformsContent />
      <CTASection title="Choose Your Platform" subtitle="Get access to the complete GrowthPlatform ecosystem with 24/7 support and continuous updates." />
      <Footer />
    </main>
  );
}
