"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Zap, TrendingUp, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const features = [
  {
    icon: Zap,
    title: "AI Powered",
    description: "Proprietary models that predict trends before they happen.",
    badge: "Autonomous",
    stat: "94%",
    statLabel: "Prediction Accuracy",
    image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
    badgeColor: "bg-blue-500/85",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description: "Every decision backed by billions of real-time data points.",
    badge: "Real-Time",
    stat: "2B+",
    statLabel: "Data Points Daily",
    image: "https://images.pexels.com/photos/7947849/pexels-photo-7947849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
    badgeColor: "bg-emerald-500/85",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Live dashboards with 100% visibility into every dollar spent.",
    badge: "Full Visibility",
    stat: "100%",
    statLabel: "Reporting Coverage",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
    badgeColor: "bg-violet-500/85",
  },
  {
    icon: TrendingUp,
    title: "ROI Focused",
    description: "We don't just deliver clicks; we deliver bottom-line growth.",
    badge: "Results First",
    stat: "127%",
    statLabel: "Average ROI Lift",
    image: "https://images.pexels.com/photos/9052188/pexels-photo-9052188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
    badgeColor: "bg-orange-500/85",
  },
];

const comparisonData = [
  { feature: "Integration Speed",  traditional: "3–6 Months typical cycle",       advantage: "2–4 Weeks with native API"     },
  { feature: "Data Privacy",       traditional: "Manual compliance checks",        advantage: "Automated regulatory engine"   },
  { feature: "Scalability",        traditional: "Requires infrastructure overhaul",advantage: "Elastic cloud-native core"     },
  { feature: "Cost Model",         traditional: "High upfront capital expense",    advantage: "Performance-aligned pricing"   },
];

/* ─────────────────────────────────────────
   COMPACT FOOD-CARD
───────────────────────────────────────── */
function FeatureCard({ f, i }: { f: typeof features[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.36, delay: i * 0.08 }}
      className="group flex flex-col bg-white/8 hover:bg-white/12 backdrop-blur-sm rounded-[18px] border border-white/10 hover:border-white/20 shadow-[0_1px_8px_0_rgba(0,0,0,0.12)] hover:shadow-[0_8px_28px_0_rgba(0,0,0,0.22)] hover:-translate-y-[3px] transition-all duration-300"
      style={{ padding: "11px" }}
    >
      {/* ── Image area (≈52%) ── */}
      <div
        className="relative rounded-[12px] overflow-hidden flex-shrink-0 mb-[11px]"
        style={{ height: "130px" }}
      >
        <img
          src={f.image}
          alt={f.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />

        {/* Icon inside image — top-left */}
        <div className="absolute top-2.5 left-2.5 w-8 h-8 bg-white/15 backdrop-blur-md rounded-[9px] border border-white/20 flex items-center justify-center">
          <f.icon className="w-4 h-4 text-white" />
        </div>

        {/* Badge — bottom-left */}
        <span className={`absolute bottom-2 left-2 ${f.badgeColor} text-white text-[10px] font-semibold px-2 py-[3px] rounded-[6px] backdrop-blur-sm`}>
          {f.badge}
        </span>

        {/* Stat — bottom-right */}
        <span className="absolute bottom-2 right-2 text-white text-[11px] font-black leading-none drop-shadow">
          {f.stat}
        </span>
      </div>

      {/* ── Info ── */}
      <div className="flex flex-col flex-1 px-0.5">
        <h3 className="text-[13px] font-bold text-white leading-snug mb-[5px]">
          {f.title}
        </h3>
        <p className="text-[11px] text-white/50 leading-relaxed line-clamp-2 flex-1 mb-[12px]">
          {f.description}
        </p>

        {/* CTA — right-aligned pill */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/40 font-medium">{f.statLabel}</span>
          <button className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[11px] font-semibold px-3 py-[5px] rounded-full transition-all duration-200">
            Learn More
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   SECTION
───────────────────────────────────────── */
export default function WhyChooseUs() {
  return (
    <section
      className="py-16 md:py-20 bg-[#0a0f1e] text-white relative overflow-hidden"
      aria-label="Why choose GrowthPlatform"
    >
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob w-[500px] h-[500px] bg-blue-600/10  -top-32  -right-32" />
        <div className="blob w-[400px] h-[400px] bg-purple-600/10 -bottom-16 -left-16" style={{ animationDelay: "-5s" }} />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="container-custom relative">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Why Leaders Choose GrowthPlatform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Standard solutions create bottlenecks.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ours don&apos;t.
            </span>
          </h2>
          <p className="mt-3 text-white/50 text-base">
            Our engine is built for the complexity of modern enterprise scaling.
          </p>
        </div>

        {/* ── 4 compact feature cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>

        {/* ── Comparison Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="px-5 py-3 text-[11px] font-bold text-white/40 uppercase tracking-wider">Feature</div>
            <div className="px-5 py-3 text-[11px] font-bold text-white/40 uppercase tracking-wider">Traditional Methods</div>
            <div className="px-5 py-3 text-[11px] font-bold text-primary uppercase tracking-wider">GrowthPlatform</div>
          </div>

          {comparisonData.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/4 transition-colors group"
            >
              <div className="px-5 py-3.5 text-sm text-white/80 font-medium">{row.feature}</div>
              <div className="px-5 py-3.5 text-sm text-white/35 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                {row.traditional}
              </div>
              <div className="px-5 py-3.5 text-sm text-primary font-semibold flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-primary" />
                </div>
                {row.advantage}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all shadow-lg shadow-primary/25 active:scale-95"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm px-7 py-3 rounded-full transition-all active:scale-95"
          >
            Explore Platform
          </Link>
        </div>
      </div>
    </section>
  );
}
