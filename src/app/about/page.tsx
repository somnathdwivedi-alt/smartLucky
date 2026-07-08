import Header from "@/components/Header";
import AboutContent from "@/components/AboutContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us",
  description: "Learn about GrowthPlatform's mission, team, and the technology powering the next generation of digital marketing.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <Header />
      <AboutContent />
      <CTASection />
      <Footer />
    </main>
  );
}
