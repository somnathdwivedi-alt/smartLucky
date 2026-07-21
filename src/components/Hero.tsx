"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLiveSettings } from "@/data/live-client";
import {
  ArrowRight,
  Users,
  MousePointerClick,
  BarChart3,
  Award,
  Tag,
  Link2,
  Sparkles,
} from "lucide-react";

/* ---------- Floating stat badge ---------- */
interface StatBadgeProps {
  icon: React.ElementType;
  label: string;
  value: string;
  delay?: number;
  float?: "up" | "down";
}

function StatBadge({ icon: Icon, label, value, delay = 0, float = "up" }: StatBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-md text-white rounded-2xl px-3.5 py-2.5 shadow-xl border border-white/10 text-xs whitespace-nowrap"
    >
      <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <div>
        <p className="text-[10px] text-white/50 leading-none mb-0.5">{label}</p>
        <p className="font-semibold text-[12px] leading-tight">{value}</p>
      </div>
    </motion.div>
  );
}

/* ---------- Main Hero ---------- */
export default function Hero() {
  const [btnHovered, setBtnHovered] = useState(false);
  const settings = useLiveSettings({
    hero: {
      heading: "Digital Marketing & Affiliate Growth",
      subheading:
        "GrowthPlatform delivers end-to-end digital marketing, affiliate marketing, paid advertising, and SEO — AI-powered solutions built for enterprises that demand measurable ROI.",
      primaryCta: "Get Free Consultation",
      secondaryCta: "Explore Our Services",
    },
  });
  const hero = settings.hero || {};

  /* ── Kinetic parallax (images shift on scroll) ── */
  const { scrollY } = useScroll();
  const womanParallax = useTransform(scrollY, [0, 500], [0, -70]);
  const manParallax = useTransform(scrollY, [0, 500], [0, -40]);
  const bgParallax = useTransform(scrollY, [0, 500], [0, -20]);

  /* Pexels real photo URLs */
  const womanUrl =
    "https://images.pexels.com/photos/28607476/pexels-photo-28607476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600";
  const manUrl =
    "https://images.pexels.com/photos/6150386/pexels-photo-6150386.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600";

  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden bg-white">
      {/* ── Subtle decorative SVG curves ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.svg
          style={{ y: bgParallax }}
          className="absolute top-0 right-0 w-[780px] h-[780px] opacity-[0.04]"
          viewBox="0 0 800 800"
          fill="none"
          aria-hidden="true"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <path
              key={n}
              d={`M${400 + n * 15} 0 C${500 + n * 10} ${200 + n * 8} ${700 - n * 5} ${300 + n * 6} 800 ${400 + n * 4} C${700 - n * 5} ${500 - n * 4} ${500 + n * 10} ${600 - n * 6} ${400 + n * 15} 800`}
              stroke="#1e293b"
              strokeWidth="1"
            />
          ))}
        </motion.svg>
      </div>

      <div className="container-custom w-full relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">

          {/* ═══════════════ LEFT COPY ═══════════════ */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 mb-7 bg-gray-50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-gray-600">
                {hero.primaryCta ? "AI Campaign Optimizer 2.0 is live" : "AI Campaign Optimizer 2.0 is live"}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-semibold text-gray-900 leading-[1.08] tracking-tight"
            >
              {hero.heading || "Digital Marketing &"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Affiliate Growth
              </span>
              , engineered for scale
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 text-[15px] text-gray-500 leading-relaxed max-w-md"
            >
              GrowthPlatform delivers end-to-end{" "}
              <strong className="text-gray-700 font-semibold">digital marketing</strong>,{" "}
              <strong className="text-gray-700 font-semibold">affiliate marketing</strong>,{" "}
              <strong className="text-gray-700 font-semibold">paid advertising</strong>,{" "}
               and <strong className="text-gray-700 font-semibold">SEO</strong> — {hero.subheading || "AI-powered solutions built for enterprises that demand measurable ROI."}
            </motion.p>

            {/* Service pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {["Google & Meta Ads", "Affiliate Marketing", "SEO", "Email Marketing", "Performance Marketing"].map((s) => (
                <span key={s} className="inline-flex items-center text-[11px] font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary */}
              <Link
                href="/contact"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                 className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-900/10"
                >
                  {hero.primaryCta || "Get Free Consultation"}
                  <motion.span animate={{ x: btnHovered ? 4 : 0 }} transition={{ duration: 0.18 }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>

                {/* Services button */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 bg-white text-gray-700 border border-gray-200 px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm"
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                  {hero.secondaryCta || "Explore Our Services"}
                </Link>
            </motion.div>

            {/* Demo link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="mt-5"
            >
              <p className="text-sm text-gray-500">
                Trusted by 500+ enterprises.{" "}
                <Link
                  href="/contact"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Book a free strategy call
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-5"
            >
              {/* Avatars */}
              <div className="flex -space-x-2.5">
                {[womanUrl, manUrl,
                  "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80",
                  "https://images.pexels.com/photos/8837558/pexels-photo-8837558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80",
                  "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="GrowthPlatform customer"
                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                    loading="lazy"
                  />
                ))}
              </div>

              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Trusted by <span className="font-semibold text-gray-900">2,000+</span> growth teams
                </p>
              </div>
            </motion.div>
          </div>

          {/* ═══════════════ RIGHT PHOTOS ═══════════════ */}
          <div className="hidden lg:flex items-end justify-center gap-5 relative min-h-[520px]">

            {/* ── Card 1: Woman (left, taller, slightly back) ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ y: womanParallax }}
              className="relative self-end"
            >
              <div className="w-[210px] h-[310px] rounded-[22px] overflow-hidden shadow-2xl border border-white/60">
                <img
                  src={womanUrl}
                  alt="Professional woman working on laptop"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Partners badge – bottom-left */}
              <div className="absolute -bottom-4 -left-5 z-20">
                <StatBadge icon={Users} label="Partners" value="312" delay={0.65} />
              </div>

              {/* Clicks badge – right-center */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                <StatBadge icon={MousePointerClick} label="Clicks" value="128,947" delay={0.75} />
              </div>

              {/* Revenue badge – bottom-right */}
              <div className="absolute -bottom-12 right-0 z-20">
                <StatBadge icon={BarChart3} label="Revenue" value="$134,892.63" delay={0.85} />
              </div>
            </motion.div>

            {/* ── Card 2: Man (right, taller foreground) ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ y: manParallax }}
              className="relative self-start mt-8"
            >
              <div className="w-[225px] h-[340px] rounded-[22px] overflow-hidden shadow-2xl border border-white/60">
                <img
                  src={manUrl}
                  alt="Professional man working with laptop"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Reward badge – top-left */}
              <div className="absolute -top-4 -left-6 z-20">
                <StatBadge icon={Award} label="Reward" value="$1,000" delay={0.7} />
              </div>

              {/* Coupon badge – left-center */}
              <div className="absolute top-[38%] -left-8 z-20">
                <StatBadge icon={Tag} label="Coupon" value="MARTIN30" delay={0.8} />
              </div>

              {/* Link badge – bottom-right */}
              <div className="absolute -bottom-4 -right-5 z-20">
                <StatBadge icon={Link2} label="Link" value="GROWTHPLATFORM/MARTIN" delay={0.9} />
              </div>
            </motion.div>
          </div>
          {/* ══════════════════════════════════════════ */}

        </div>
      </div>
    </section>
  );
}
