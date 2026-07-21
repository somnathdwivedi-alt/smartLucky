// platforms/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformsContent from "@/components/PlatformsContent";
import CTASection from "@/components/CTASection";
import { getSiteSettings } from "@/data/live";

export const metadata = {
  title: "Platforms",
  description: "Explore GrowthPlatform's powerful infrastructure including Marketing Dashboard, Affiliate Portal, Campaign Manager, and Integration Services.",
};

export default async function PlatformsPage() {
  const siteSettings = await getSiteSettings();
  const cta = siteSettings?.platformsPage?.cta;

  return (
    <main id="main-content">
      <Header />
      <PlatformsContent />
      <CTASection title={cta?.title || "Choose Your Platform"} subtitle={cta?.subtitle || "Get access to the complete GrowthPlatform ecosystem with 24/7 support and continuous updates."} />
      <Footer />
    </main>
  );
}
