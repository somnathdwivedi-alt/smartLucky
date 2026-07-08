import Header from "@/components/Header";
import ServicesContent from "@/components/ServicesContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services",
  description: "Explore our comprehensive suite of digital marketing services including SEO, paid advertising, affiliate marketing, and AI-powered growth solutions.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Header />
      <ServicesContent />
      <CTASection title="Ready to Scale?" subtitle="Join 500+ enterprises using GrowthPlatform to engineer their growth. Book a consultation with our strategy leads today." />
      <Footer />
    </main>
  );
}
