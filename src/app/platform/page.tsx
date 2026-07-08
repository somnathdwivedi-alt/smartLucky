import Header from "@/components/Header";
import PlatformPreview from "@/components/PlatformPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Platform",
  description: "Explore the GrowthPlatform infrastructure powering AI-driven marketing, unified dashboards, and scalable growth engines.",
};

export default function PlatformPage() {
  return (
    <main id="main-content">
      <Header />
      <PlatformPreview />
      <CTASection title="Ready to evolve your growth engine?" subtitle="Join 500+ enterprises who built their growth infrastructure on GrowthPlatform." />
      <Footer />
    </main>
  );
}
