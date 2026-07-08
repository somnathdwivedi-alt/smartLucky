import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPlatformBySlug, allPlatforms } from "@/data/platforms";
import { Check, ArrowRight, ChevronRight, ArrowLeft, HelpCircle } from "lucide-react";

export async function generateStaticParams() {
  return allPlatforms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);
  if (!platform) return { title: "Platform Not Found" };
  return {
    title: `${platform.title} | GrowthPlatform`,
    description: platform.subtitle,
    openGraph: { title: platform.title, description: platform.subtitle, images: [{ url: platform.heroImage }] },
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);
  if (!platform) notFound();

  return (
    <main id="main-content" className="bg-white">
      <Header />

      {/* Hero */}
      <div className="relative w-full pt-[68px]" style={{ height: "clamp(340px, 52vh, 480px)" }}>
        <img src={platform.heroImage} alt={platform.heroImageAlt} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[1.8rem] sm:text-3xl lg:text-[2.2rem] font-semibold text-white tracking-tight max-w-2xl leading-tight">
              {platform.title}
            </h1>
            <p className="mt-3 text-white/75 text-[15px] max-w-xl leading-relaxed">
              {platform.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10" aria-label="breadcrumb">
          <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/platforms" className="hover:text-gray-700 transition-colors">Platforms</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">{platform.title}</span>
        </nav>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-[1.35rem] text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 text-[14.5px] leading-[1.85]">
            {platform.overview}
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-[1.35rem] text-gray-900 mb-6">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platform.features.map((feature, index) => {
              const iconList = ["BarChart3", "Users", "Target", "Zap", "Database", "Layers", "Globe", "Shield", "TrendingUp", "Palette"];
              const IconComponent = (props: any) => null;
              
              return (
                <div key={feature.title} className="group">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-[#EAEAEA] hover:border-primary/20 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <div className="w-6 h-6 text-primary flex items-center justify-center">
                        <span className="text-xs">📊</span>
                      </div>
                    </div>
                    <h3 className="text-[1rem] font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-[13.5px] text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {feature.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Resilient Layers */}
        <section className="mb-12 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-[1.35rem] font-bold mb-3">Built on Resilient Layers</h2>
          <p className="text-gray-400 mb-8">
            Our stack is engineered for 99.99% uptime with 5 resilient infrastructure layers.
          </p>
          <div className="space-y-3">
            {platform.layers.map((layer, index) => (
              <div key={layer.title} className={`flex items-center gap-3 ${index < platform.layers.length - 1 ? 'mb-3' : ''}`}>
                <div className={`w-10 h-10 ${layer.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <div className="w-5 h-5 text-white flex items-center justify-center">
                    <span className="text-xs">⚙️</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/10 rounded-lg px-5 py-3">
                  <span className="text-sm font-medium text-gray-300">{layer.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Engines */}
        <section className="mb-12">
          <h2 className="text-[1.35rem] text-gray-900 mb-6">Core Engines</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {platform.coreEngines.map((engine, index) => (
              <div key={engine.title} className="bg-gray-50 rounded-xl p-5 border border-[#EAEAEA] hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <div className="w-5 h-5 text-primary flex items-center justify-center">
                    <span className="text-xs">🔧</span>
                  </div>
                </div>
                <h3 className="text-[1rem] font-semibold text-gray-900 mb-2">{engine.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                  {engine.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {engine.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <HelpCircle className="w-5 h-5 text-gray-400" />
            <h2 className="text-[1.35rem] text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {platform.faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-[#EAEAEA] overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer list-none text-[13.5px] font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  {faq.question}
                  <span className="text-gray-400 flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[13px] text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <Link href="/platforms" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to all platforms
        </Link>
      </div>

      {/* CTA Strip */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-[1.6rem] text-white font-semibold mb-3">Ready to start building with {platform.title}?</h2>
          <p className="text-gray-400 text-[14px] mb-6">Join 500+ enterprises that trust GrowthPlatform for their growth infrastructure needs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
