"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Minus, Zap, Star, Shield, ArrowRight } from "lucide-react";

/* ─── Plan data ─── */
const plans = [
  {
    name: "Starter",
    tagline: "For small businesses",
    price: "$2,500",
    period: "/mo",
    description: "Everything you need to launch a high-performing digital presence.",
    cta: "Get Started",
    popular: false,
    icon: Zap,
    accentBg:   "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-100",
    features: [
      "SEO Audit & Strategy",
      "Google Ads Management",
      "Social Media Management",
      "Monthly Reporting",
      "Email Support",
      "1 Landing Page",
    ],
  },
  {
    name: "Professional",
    tagline: "For scaling teams",
    price: "$7,500",
    period: "/mo",
    description: "Multi-channel growth with affiliate, CRO, and priority support.",
    cta: "Get Started",
    popular: true,
    icon: Star,
    accentBg:   "bg-primary/5",
    accentText: "text-primary",
    accentBorder: "border-primary/20",
    features: [
      "Everything in Starter",
      "Multi-Channel Advertising",
      "Affiliate Program Setup",
      "Content Marketing",
      "Conversion Optimization",
      "Weekly Reporting",
      "Priority Support",
      "5 Landing Pages",
      "CRM Integration",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large organisations",
    price: "Custom",
    period: "",
    description: "Fully bespoke AI-powered growth with dedicated expert support.",
    cta: "Contact Sales",
    popular: false,
    icon: Shield,
    accentBg:   "bg-violet-50",
    accentText: "text-violet-600",
    accentBorder: "border-violet-100",
    features: [
      "Everything in Professional",
      "AI-Powered Optimisation",
      "Custom Integrations",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Unlimited Landing Pages",
      "Custom Reporting",
      "Strategic Consulting",
      "Team Training",
      "SLA Guarantee",
    ],
  },
];

/* Feature comparison rows */
const compareRows = [
  { label: "SEO Audit & Strategy",     starter: true,  pro: true,  ent: true  },
  { label: "Paid Advertising",          starter: false, pro: true,  ent: true  },
  { label: "Affiliate Programme Setup", starter: false, pro: true,  ent: true  },
  { label: "AI-Powered Optimisation",   starter: false, pro: false, ent: true  },
  { label: "Dedicated Account Manager", starter: false, pro: false, ent: true  },
  { label: "SLA Guarantee",             starter: false, pro: false, ent: true  },
];

/* ═══════════════════════════════════════ */
export default function Pricing() {
  return (
    <section
      className="py-14 md:py-20 bg-gray-50"
      id="pricing"
      aria-label="Pricing plans"
    >
      <div className="container-reading">

        {/* ── Header ── */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block text-[10.5px] font-bold text-primary uppercase tracking-widest mb-3">
            Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl text-gray-900">
            Simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="mt-3 text-gray-500 text-[14px] leading-relaxed">
            Choose the plan that fits your growth goals. All plans include a 30-day money-back guarantee.
          </p>
        </div>

        {/* ── 3 plan cards — compact ── */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.08 }}
                className={`relative flex flex-col bg-white rounded-2xl border overflow-hidden transition-shadow hover:shadow-lg ${
                  plan.popular
                    ? "border-primary/30 shadow-[0_4px_24px_0_rgba(37,99,235,0.10)] ring-1 ring-primary/20"
                    : "border-[#EAEAEA] shadow-[0_2px_10px_0_rgba(0,0,0,0.05)]"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary py-1.5 text-center">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-5 flex flex-col flex-1 ${plan.popular ? "pt-9" : ""}`}>

                  {/* Plan icon + name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 ${plan.accentBg} ${plan.accentBorder} border rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4.5 h-4.5 ${plan.accentText}`} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-gray-900 leading-none">{plan.name}</p>
                      <p className="text-[10.5px] text-gray-400 mt-0.5">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-end gap-1">
                      <span className={`text-[28px] font-bold leading-none ${plan.popular ? "text-primary" : "text-gray-900"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-[12px] text-gray-400 mb-0.5">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-[11.5px] text-gray-500 mt-1.5 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-4" />

                  {/* Features list */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[12px] text-gray-600">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-px ${
                          plan.popular ? "bg-primary/10" : "bg-gray-100"
                        }`}>
                          <Check className={`w-2.5 h-2.5 ${plan.popular ? "text-primary" : "text-gray-500"}`} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-full text-[12.5px] font-semibold transition-all active:scale-95 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-blue-700 shadow-md shadow-primary/20"
                        : "bg-gray-900 text-white hover:bg-gray-700"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Compact comparison table ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden shadow-[0_2px_10px_0_rgba(0,0,0,0.04)]"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
            <div className="px-5 py-3 text-[10.5px] font-bold text-gray-400 uppercase tracking-wider">
              Feature
            </div>
            {plans.map((p) => (
              <div
                key={p.name}
                className={`px-4 py-3 text-[11px] font-bold text-center ${
                  p.popular ? "text-primary" : "text-gray-600"
                }`}
              >
                {p.name}
              </div>
            ))}
          </div>

          {/* Rows */}
          {compareRows.map((row, ri) => (
            <div
              key={row.label}
              className={`grid grid-cols-4 border-b border-gray-50 last:border-0 ${
                ri % 2 === 0 ? "bg-white" : "bg-gray-50/40"
              }`}
            >
              <div className="px-5 py-3 text-[12px] text-gray-600">{row.label}</div>
              {[row.starter, row.pro, row.ent].map((has, ci) => (
                <div key={ci} className="px-4 py-3 flex justify-center items-center">
                  {has ? (
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      ci === 1 ? "bg-primary/10" : "bg-gray-100"
                    }`}>
                      <Check className={`w-3 h-3 ${ci === 1 ? "text-primary" : "text-gray-500"}`} />
                    </div>
                  ) : (
                    <Minus className="w-3.5 h-3.5 text-gray-200" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
