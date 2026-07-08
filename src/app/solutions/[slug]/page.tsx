import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSolutionBySlug, allSolutions } from "@/data/solutions";
import { Check, ArrowRight, ChevronRight, ArrowLeft, Star, Lightbulb, Wrench, HelpCircle } from "lucide-react";

export async function generateStaticParams() {
  return allSolutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) return { title: "Solution Not Found" };
  return {
    title: `${sol.title} | GrowthPlatform`,
    description: sol.subtitle,
    openGraph: { title: sol.title, description: sol.subtitle, images: [{ url: sol.heroImage }] },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) notFound();

  return (
    <main id="main-content" className="bg-white">
      <Header />

      {/* ── HERO ── */}
      <div className="relative w-full pt-[68px]" style={{ height: "clamp(340px, 52vh, 480px)" }}>
        <img src={sol.heroImage} alt={sol.heroImageAlt} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="container-reading">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-[11px] font-bold ${sol.accentColor} bg-white px-3 py-1 rounded-full`}>{sol.industry}</span>
              <span className="text-[11px] font-bold text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{sol.badge}</span>
            </div>
            <h1 className="text-[1.8rem] sm:text-3xl lg:text-[2.2rem] font-semibold text-white tracking-tight max-w-2xl leading-tight">{sol.title}</h1>
            <p className="mt-3 text-white/75 text-[15px] max-w-xl leading-relaxed">{sol.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container-reading py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10" aria-label="breadcrumb">
          <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/solutions" className="hover:text-gray-700 transition-colors">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">{sol.industry}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr_272px] gap-12 items-start">

          {/* ── MAIN CONTENT ── */}
          <div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {sol.stats.map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-4 text-center border border-[#EAEAEA]">
                  <p className="text-[22px] font-bold text-gray-900">{s.value}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-[1.35rem] text-gray-900 mb-4">The {sol.industry} Marketing Challenge</h2>
              <p className="text-gray-600 text-[14.5px] leading-[1.85]">{sol.overview}</p>
            </section>

            {/* Image 1 */}
            {sol.images[0] && (
              <figure className="mb-12">
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 340 }}>
                  <img src={sol.images[0].url} alt={sol.images[0].alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2.5 text-center text-[12px] text-gray-400">{sol.images[0].caption}</figcaption>
              </figure>
            )}

            {/* How We Solve It */}
            <section className="mb-12">
              <h2 className="text-[1.35rem] text-gray-900 mb-5">How We Solve It</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {sol.challenges.map((c) => (
                  <div key={c.title} className="bg-gray-50 rounded-xl p-5 border border-[#EAEAEA]">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <h3 className="text-[13.5px] font-semibold text-gray-900">{c.title}</h3>
                    </div>
                    <p className="text-[12.5px] text-gray-500 leading-relaxed pl-[29px]">{c.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Digital Marketing Strategy Insight */}
            <section className="mb-12 bg-gradient-to-br from-primary/5 to-purple-50 rounded-2xl border border-primary/10 p-7">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[10.5px] font-bold text-primary uppercase tracking-widest">Digital Marketing Strategy</span>
              </div>
              <h3 className="text-[16px] font-semibold text-gray-900 mb-3 leading-snug">{sol.digitalMarketingStrategy.heading}</h3>
              <p className="text-[13.5px] text-gray-600 leading-relaxed mb-5">{sol.digitalMarketingStrategy.body}</p>
              <ul className="space-y-2.5">
                {sol.digitalMarketingStrategy.tactics.map((tactic, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {tactic}
                  </li>
                ))}
              </ul>
            </section>

            {/* Image 2 */}
            {sol.images[1] && (
              <figure className="mb-12">
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 320 }}>
                  <img src={sol.images[1].url} alt={sol.images[1].alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2.5 text-center text-[12px] text-gray-400">{sol.images[1].caption}</figcaption>
              </figure>
            )}

            {/* Our Process */}
            <section className="mb-12">
              <h2 className="text-[1.35rem] text-gray-900 mb-5">Our {sol.industry} Growth Process</h2>
              <div className="space-y-4">
                {sol.process.map((p) => (
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
                <h2 className="text-[1.35rem] text-gray-900">Tools & Technology</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sol.tools.map((t) => (
                  <div key={t.name} className="bg-gray-50 rounded-xl border border-[#EAEAEA] px-4 py-3">
                    <p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
                    <p className="text-[11.5px] text-gray-500 mt-0.5">{t.purpose}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study */}
            <section className="mb-12">
              <h2 className="text-[1.35rem] text-gray-900 mb-5">Client Success Story</h2>
              <div className="bg-gray-900 rounded-2xl p-7 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-[26px] font-bold text-primary mb-0.5">{sol.caseStudy.metric}</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-5">{sol.caseStudy.metricLabel}</p>
                  <blockquote className="text-[14px] text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{sol.caseStudy.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img src={sol.caseStudy.avatar} alt={sol.caseStudy.person} className="w-10 h-10 rounded-full object-cover border-2 border-white/20" loading="lazy" />
                    <div>
                      <p className="text-[13px] font-bold text-white">{sol.caseStudy.person}</p>
                      <p className="text-[11px] text-gray-400">{sol.caseStudy.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-5">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <h2 className="text-[1.35rem] text-gray-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {sol.faq.map((item, i) => (
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

            <Link href="/solutions" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to all solutions
            </Link>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="sticky top-24 space-y-5">
            {/* CTA */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <h3 className="text-[15px] font-semibold mb-2">{sol.cta}</h3>
              <p className="text-gray-400 text-[12px] mb-4 leading-relaxed">
                Talk to our {sol.industry.toLowerCase()} marketing specialists about your specific challenges.
              </p>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white py-2.5 rounded-full text-[13px] font-semibold transition-all mb-2.5">
                {sol.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 text-white py-2.5 rounded-full text-[13px] font-semibold transition-all">
                Schedule a Strategy Call
              </Link>
            </div>

            {/* Services included */}
            <div className="bg-gray-50 rounded-2xl border border-[#EAEAEA] p-5">
              <h3 className="text-[12px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Services Included</h3>
              <ul className="space-y-2">
                {sol.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[12px] text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-px">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other solutions */}
            <div className="bg-white rounded-2xl border border-[#EAEAEA] p-5">
              <h3 className="text-[12px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Other Solutions</h3>
              <div className="space-y-1">
                {allSolutions.filter((s) => s.slug !== sol.slug).map((rel) => (
                  <Link key={rel.slug} href={`/solutions/${rel.slug}`}
                    className="flex items-center justify-between px-3 py-2 text-[12.5px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors group">
                    {rel.industry}
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
          <h2 className="text-[1.6rem] text-white font-semibold mb-3">Ready to dominate {sol.industry.toLowerCase()} marketing?</h2>
          <p className="text-gray-400 text-[14px] mb-6">Join 500+ {sol.industry.toLowerCase()} leaders that trust GrowthPlatform for growth.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all">
              {sol.cta} <ArrowRight className="w-4 h-4" />
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
