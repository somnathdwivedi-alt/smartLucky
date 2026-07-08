import Header from "@/components/Header";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Solutions",
  description: "Tailored marketing solutions for Healthcare, Finance, E-commerce, SaaS, Startups, and more industries.",
};

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-2xl h-[300px] flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-400">Solutions</span>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                Accelerate Growth Across Every <span className="gradient-text">Industry</span>
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Tailored solutions designed to solve complex scaling challenges in Healthcare, Finance, and E-commerce.
              </p>
              <div className="mt-8">
                <a href="#industries" className="inline-flex items-center justify-center gap-2 bg-dark text-white px-7 py-3.5 rounded-xl font-medium hover:bg-dark-secondary transition-all">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Industries />
      <WhyChooseUs />
      <CTASection title="Ready to scale your industry dominance?" subtitle="Join 500+ enterprises that have unlocked 3x growth rates within the first year of partnering with GrowthPlatform." />
      <Footer />
    </main>
  );
}
