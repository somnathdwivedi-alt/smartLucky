import Header from "@/components/Header";
import ResourcesContent from "@/components/ResourcesContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Resources",
  description: "Explore our library of marketing guides, whitepapers, templates, webinars, and case studies designed for growth leaders.",
};

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <Header />
      <ResourcesContent />
      <CTASection title="Get the Growth Playbook" subtitle="Weekly insights on affiliate networks, referral marketing, and customer acquisition delivered to your inbox." />
      <Footer />
    </main>
  );
}
