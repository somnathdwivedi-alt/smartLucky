"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLiveSettings } from "@/data/live-client";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  dark?: boolean;
}

export default function CTASection({
  title: titleProp,
  subtitle: subtitleProp,
  primaryCta: primaryCtaProp,
  secondaryCta: secondaryCtaProp,
  dark = true,
}: CTASectionProps) {
  const settings = useLiveSettings({
    cta: {
      title: "Ready to scale your vision?",
      subtitle: "Join thousands of category-leading brands who grow faster with GrowthPlatform's AI-driven platform.",
      primaryCta: "Get Started Free",
      secondaryCta: "Talk to Sales",
    },
  });
  const title = titleProp ?? settings.cta?.title;
  const subtitle = subtitleProp ?? settings.cta?.subtitle;
  const primaryCta = primaryCtaProp ?? settings.cta?.primaryCta;
  const secondaryCta = secondaryCtaProp ?? settings.cta?.secondaryCta;
  return (
    <section className={`py-16 md:py-24 ${dark ? "bg-dark" : "bg-gray-50"}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${dark ? "bg-dark-secondary border border-white/5" : "bg-white border border-gray-100"} rounded-3xl p-8 md:p-16 text-center relative overflow-hidden`}
        >
          {/* Background Effects */}
          {dark && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="blob w-[400px] h-[400px] bg-blue-500/10 -top-20 -right-20" />
              <div className="blob w-[300px] h-[300px] bg-purple-500/10 -bottom-10 -left-10" style={{ animationDelay: "-5s" }} />
            </div>
          )}

          <div className="relative">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
              {title}
            </h2>
            <p className={`mt-4 text-lg max-w-2xl mx-auto ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-medium hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                {primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium transition-all active:scale-95 ${
                  dark
                    ? "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
