"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Users, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    name: "Healthcare",
    features: ["End-to-end Data Encryption", "HIPAA Compliance", "Audit-ready Reporting"],
    description: "HIPAA-compliant infrastructure with automated patient data management. Scale your practice without compromising security.",
  },
  {
    name: "Finance",
    features: ["SOC2 Certified", "Fraud Detection", "Regulatory Compliance"],
    description: "Secure, compliant financial marketing infrastructure built for modern fintech and banking.",
  },
  {
    name: "E-commerce",
    features: ["Cart Recovery", "Dynamic Pricing", "Product Feed Optimization"],
    description: "Omnichannel marketing automation that drives sales and customer retention at scale.",
  },
];

export default function ServicesContent() {
  const [selectedIndustry, setSelectedIndustry] = useState("Healthcare");
  const ind = industries.find((i) => i.name === selectedIndustry)!;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl mx-auto">
            Enterprise Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Engineered for Scale
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From precision SEO to AI-driven automation, we provide the strategic infrastructure and execution excellence required to dominate your market.
          </p>
        </div>
      </section>

      {/* ── SEO Section ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[420px] shadow-xl">
              <img
                src="https://images.pexels.com/photos/7693148/pexels-photo-7693148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=840&w=900"
                alt="SEO strategy team presentation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay metric badge */}
              <div className="absolute top-5 left-5 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-400">Organic Lift</p>
                  <p className="text-xl font-bold text-gray-900">+240%</p>
                  <p className="text-[10px] text-gray-400">Traffic Growth YoY</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Precision Search Engine Optimization</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Move beyond simple keywords. Our SEO methodology focuses on topical authority, technical excellence, and revenue-driving intent that secures your digital footprint.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[{ v: "4.2x", l: "Average ROI" }, { v: "240%", l: "Traffic Growth" }, { v: "90 Days", l: "Time to Scale" }].map((s) => (
                  <div key={s.l} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{s.v}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {["Technical Audit & Core Web Vitals", "Authority Building via PR Outreach", "Content Strategy & Execution", "Local & International SEO"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Paid Performance ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Paid Performance & Acquisition</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deploy capital where it generates the highest yield. We combine deep data analysis with creative excellence to scale paid acquisition across Google, LinkedIn, and Meta.
              </p>
              <div className="bg-gray-100 rounded-xl p-4 mb-5">
                <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">ROAS Tracker</p>
                <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "92%" }} />
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-gray-500">Target: 400%</span>
                  <span className="text-primary font-medium">Current: 512%</span>
                </div>
              </div>
              <ul className="space-y-3">
                {["Google Ads & Search", "Meta & Instagram Ads", "LinkedIn B2B Campaigns", "Programmatic Display"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[420px] shadow-xl">
              <img
                src="https://images.pexels.com/photos/8353799/pexels-photo-8353799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=840&w=900"
                alt="Paid advertising campaign analytics"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute bottom-5 right-5 bg-gray-900/95 backdrop-blur-sm text-white rounded-xl p-4 shadow-xl">
                <p className="text-xs text-gray-400 mb-1">Campaign Performance</p>
                <p className="text-lg font-bold mb-3">Global Expansion</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[{ v: "892K", l: "Impressions" }, { v: "12.4%", l: "CTR" }, { v: "$14.20", l: "CPC" }].map((s) => (
                    <div key={s.l}>
                      <p className="text-base font-bold text-white">{s.v}</p>
                      <p className="text-[10px] text-gray-400">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Affiliate ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Affiliate & Partner Ecosystems</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Build an army of advocates. We design and manage world-class referral programs that turn your customers into your most effective sales force.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Users, title: "Partner Discovery", desc: "AI-driven identification of top-tier creators and affiliates aligned with your brand values.", stat: "5K+ Vetted Partners" },
              { icon: TrendingUp, title: "Lifecycle Management", desc: "End-to-end recruitment, onboarding, and incentive management at global scale.", stat: "30% Revenue Lift", popular: true },
              { icon: Zap, title: "Payout Automation", desc: "Global compliance, multi-currency payouts, and transparent reporting for all partners.", stat: "99.9% Uptime" },
            ].map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative rounded-2xl p-6 border ${c.popular ? "border-primary bg-primary/2" : "border-gray-100 bg-gray-50"}`}>
                {c.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>}
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
                <p className="text-sm font-bold text-primary">{c.stat}</p>
              </motion.div>
            ))}
          </div>

          {/* Expert spotlight with real photo */}
          <div className="grid md:grid-cols-2 gap-6 items-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            <div className="h-64 md:h-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700"
                alt="Affiliate marketing team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-bold text-primary tracking-widest">Expert Spotlight</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Managed by Practitioners, Not Just Platforms</h3>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                &ldquo;Technology provides the rails, but relationships are the engine. Our affiliate specialists act as an extension of your team to ensure every partnership is high-value and sustainable.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src="https://images.pexels.com/photos/33671960/pexels-photo-33671960.png?auto=compress&cs=tinysrgb&fit=crop&h=60&w=60" alt="Elena Rodriguez" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Elena Rodriguez</p>
                  <p className="text-xs text-gray-500">Global VP of Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Automation ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
              <img
                src="https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900"
                alt="AI data analytics screen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-xs text-green-400 font-semibold mb-1">● NEURAL GROWTH ENGINE</p>
                {["Auto-Discovery", "Churn Prediction", "Dynamic Incentives"].map((item) => (
                  <div key={item} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
                    <span className="text-xs text-white">{item}</span>
                    <span className="text-[10px] bg-primary/80 text-white px-2 py-0.5 rounded">ACTIVE</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Driven Growth Automation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automate the complex, optimize the routine. We deploy proprietary AI models to predict customer behavior, automate outreach, and optimize partner payouts in real-time.
              </p>
              <ul className="space-y-3 mb-6">
                {["Predictive Lead Scoring with 94% Accuracy", "Autonomous Partner Onboarding Workflows", "Real-time Revenue Attribution across 12+ Channels"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                Request AI Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Finder ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Solution Finder</h2>
            <p className="text-sm text-gray-500 mb-6">Select your industry to see tailored solutions.</p>
            <div className="flex gap-2 mb-8">
              {industries.map((i) => (
                <button key={i.name} onClick={() => setSelectedIndustry(i.name)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${selectedIndustry === i.name ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}>
                  {i.name}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure {selectedIndustry} Scaling</h3>
                <p className="text-sm text-gray-600 mb-5">{ind.description}</p>
                <ul className="space-y-2.5">
                  {ind.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden h-52 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700"
                  alt={`${selectedIndustry} analytics`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-1.5">
                  <p className="text-xs text-gray-500">Monthly Increase</p>
                  <p className="text-sm font-bold text-green-600">+24.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
