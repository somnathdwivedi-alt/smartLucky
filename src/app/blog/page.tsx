import Header from "@/components/Header";
import BlogListingContent from "@/components/BlogListingContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "All Articles",
  description: "Explore expert strategies, frameworks, and insights from GrowthPlatform's growth practitioners covering AI, analytics, affiliate marketing, SEO, and more.",
};

export default function BlogListingPage() {
  return (
    <main id="main-content">
      <Header />
      <BlogListingContent />
      <CTASection title="Get the Growth Playbook" subtitle="Weekly insights on affiliate networks, referral marketing, and customer acquisition delivered to your inbox." />
      <Footer />
    </main>
  );
}
