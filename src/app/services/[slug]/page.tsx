import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug, allServices } from "@/data/services";
import { Check, ArrowRight, ChevronRight, ArrowLeft, Wrench, Lightbulb, HelpCircle } from "lucide-react";

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: `${svc.title} | GrowthPlatform`,
    description: svc.subtitle,
    openGraph: { title: svc.title, description: svc.subtitle, images: [{ url: svc.heroImage }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  return (
    <main id="main-content" className="bg-white">
      <Header />

      {/* ── HERO ── */}
      <div className="relative w-full pt-[68px]" style={{ height: "clamp(340px, 52vh, 480px)" }}>
        <img src={svc.heroImage} alt={svc.heroImageAlt} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-[11px] font-bold ${svc.categoryColor} bg-white px-3 py-1 rounded-full`}>{svc.category}</span>
              <span className="text-[11px] font-bold text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{svc.badge}</span>
            </div>
            <h1 className="text-[1.8rem] sm:text-3xl lg:text-[2.2rem] font-semibold text-white tracking-tight max-w-2xl leading-tight">{svc.title}</h1>
            <p className="mt-3 text-white/75 text-[15px] max-w-xl leading-relaxed">{svc.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10" aria-label="breadcrumb">
          <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-gray-700 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">{svc.title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr_272px] gap-12 items-start">

          {/* ── MAIN ── */}
          <div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {svc.stats.map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-4 text-center border border-[#EAEAEA]">
                  <p className="text-[22px] font-bold text-gray-900">{s.value}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-[1.35rem] text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 text-[14.5px] leading-[1.85]">{svc.overview}</p>
            </section>

            {/* Image 1 */}
            {svc.images[0] && (
              <figure className="mb-12">
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 340 }}>
                  <img src={svc.images[0].url} alt={svc.images[0].alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2.5 text-center text-[12px] text-gray-400">{svc.images[0].caption}</figcaption>
              </figure>
            )}

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-[1.35rem] text-gray-900 mb-5">Why It Works</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {svc.benefits.map((b) => (
                  <div key={b.title} className="bg-gray-50 rounded-xl p-5 border border-[#EAEAEA]">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <h3 className="text-[13.5px] font-semibold text-gray-900">{b.title}</h3>
                    </div>
                    <p className="text-[12.5px] text-gray-500 leading-relaxed pl-[29px]">{b.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Digital Marketing Insight */}
            <section className="mb-12 bg-gradient-to-br from-primary/5 to-purple-50 rounded-2xl border border-primary/10 p-7">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[10.5px] font-bold text-primary uppercase tracking-widest">Digital Marketing Insight</span>
              </div>
              <h3 className="text-[16px] font-semibold text-gray-900 mb-3 leading-snug">{svc.digitalMarketingInsight.heading}</h3>
              <p className="text-[13.5px] text-gray-600 leading-relaxed mb-5">{svc.digitalMarketingInsight.body}</p>
              <ul className="space-y-2">
                {svc.digitalMarketingInsight.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </section>

            {/* Image 2 */}
            {svc.images[1] && (
              <figure className="mb-12">
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 320 }}>
                  <img src={svc.images[1].url} alt={svc.images[1].alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2.5 text-center text-[12px] text-gray-400">{svc.images[1].caption}</figcaption>
              </figure>
            )}

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-[1.35rem] text-gray-900 mb-5">Our Process</h2>
              <div className="space-y-4">
                {svc.process.map((p) => (
                  <div key={p.step} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0 shadow-sm shadow-primary/25">
                      {p.step}
                    </div>
                    <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                      <h3 className="text-[13.5px] font-semibold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-5">
                <Wrench className="w-5 h-5 text-gray-400" />
                <h2 className="text-[1.35rem] text-gray-900">Tools We Use</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {svc.tools.map((t) => (
                  <div key={t.name} className="bg-gray-50 rounded-xl border border-[#EAEAEA] px-4 py-3">
                    <p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
                    <p className="text-[11.5px] text-gray-500 mt-0.5">{t.purpose}</p>
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
              <div className="space-y-4">
                {svc.faq.map((item, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border border-[#EAEAEA] overflow-hidden">
                    <summary className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer list-none text-[13.5px] font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                      {item.q}
                      <span className="text-gray-400 flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-[13px] text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to all services
            </Link>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="sticky top-24 space-y-5">
            {/* CTA card */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <h3 className="text-[15px] font-semibold mb-2">{svc.cta}</h3>
              <p className="text-gray-400 text-[12px] mb-4 leading-relaxed">
                Ready to grow? Talk to our {svc.category.toLowerCase()} specialists today.
              </p>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white py-2.5 rounded-full text-[13px] font-semibold transition-all mb-2.5">
                {svc.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 text-white py-2.5 rounded-full text-[13px] font-semibold transition-all">
                Book Free Consultation
              </Link>
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-2xl border border-[#EAEAEA] p-5">
              <h3 className="text-[12px] font-bold text-gray-900 mb-4 uppercase tracking-wider">What&apos;s Included</h3>
              <ul className="space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[12px] text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-px">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related */}
            <div className="bg-white rounded-2xl border border-[#EAEAEA] p-5">
              <h3 className="text-[12px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Related Services</h3>
              <div className="space-y-1">
                {allServices
                  .filter((s) => s.category === svc.category && s.slug !== svc.slug)
                  .map((rel) => (
                    <Link key={rel.slug} href={`/services/${rel.slug}`}
                      className="flex items-center justify-between px-3 py-2 text-[12.5px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors group">
                      {rel.title}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA Strip */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-[1.6rem] text-white font-semibold mb-3">Ready to scale your {svc.title.toLowerCase()}?</h2>
          <p className="text-gray-400 text-[14px] mb-6">Join 500+ enterprises that trust GrowthPlatform for {svc.category.toLowerCase()}.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all">
              {svc.cta} <ArrowRight className="w-4 h-4" />
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
