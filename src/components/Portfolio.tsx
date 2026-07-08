"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GrowthCard from "@/components/ui/GrowthCard";

const caseStudies = [
  {
    industry: "E-Commerce Leader",
    metric: "340%",
    metricLabel: "increase in affiliate revenue",
    timeframe: "in 6 months",
    person: "David Chen",
    role: "Growth Lead, GlobalRetail",
    image: "https://images.pexels.com/photos/9052188/pexels-photo-9052188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=336&w=500",
    badge: "+340% Revenue",
    badgeVariant: "emerald" as const,
    description: "Increase in affiliate revenue achieved in 6 months through precision partner targeting and AI-driven payouts.",
  },
  {
    industry: "SaaS Unicorn",
    metric: "45%",
    metricLabel: "CPA reduced",
    timeframe: "through AI-bid automation",
    person: "Sarah Williams",
    role: "VP Marketing, CloudPath",
    image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=336&w=500",
    badge: "CPA −45%",
    badgeVariant: "blue" as const,
    description: "CPA reduced through AI-bid automation while scaling ad spend 3× across Google and Meta channels.",
  },
  {
    industry: "Healthcare Startup",
    metric: "127%",
    metricLabel: "ROI increase",
    timeframe: "within first quarter",
    person: "Dr. Maria Rodriguez",
    role: "CMO, HealthTech Pro",
    image: "https://images.pexels.com/photos/7693686/pexels-photo-7693686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=336&w=500",
    badge: "127% ROI",
    badgeVariant: "violet" as const,
    description: "ROI increase delivered within the first quarter via integrated SEO, content, and affiliate marketing.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-14 md:py-16 bg-gray-50" aria-label="Case studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Results That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Speak
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Real results from real clients. See how we help businesses achieve extraordinary growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {caseStudies.map((study, i) => (
            <GrowthCard
              key={study.industry}
              title={study.industry}
              description={study.description}
              image={study.image}
              imageAlt={`${study.industry} case study`}
              badge={study.badge}
              badgeVariant={study.badgeVariant}
              href="/resources#cases"
              ctaLabel="Read Story"
              index={i}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/resources#cases"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all hover:shadow-lg active:scale-95"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
