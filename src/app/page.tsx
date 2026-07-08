import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
//import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <ClientLogos />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Industries />
      <Portfolio />
      <Testimonials />
      {/* <Pricing /> */}
      <FAQ />
      <BlogSection />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
