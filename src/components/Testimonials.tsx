"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import GrowthCard from "@/components/ui/GrowthCard";

const testimonials = [
  {
    quote: "GrowthPlatform transformed our affiliate program from a side channel to our primary revenue driver. Their AI-powered optimization increased our conversion rates by 340% in just 6 months.",
    name: "David Chen",
    role: "Growth Lead",
    company: "GlobalRetail",
    rating: 5,
    avatar: "https://images.pexels.com/photos/8837558/pexels-photo-8837558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=336&w=500",
    metric: "340%",
    metricLabel: "Conversion Increase",
    location: "New York, USA",
    badgeVariant: "emerald" as const,
  },
  {
    quote: "The ROI from our partnership with GrowthPlatform has been incredible. Their data-driven approach to paid advertising reduced our CPA by 45% while scaling our ad spend 3x.",
    name: "Sarah Williams",
    role: "VP Marketing",
    company: "CloudPath",
    rating: 5,
    avatar: "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=336&w=500",
    metric: "45%",
    metricLabel: "CPA Reduction",
    location: "San Francisco, USA",
    badgeVariant: "blue" as const,
  },
  {
    quote: "Working with GrowthPlatform felt like having an entire marketing team on demand. Their SEO expertise helped us rank #1 for our most competitive keywords within 90 days.",
    name: "Marcus Thorne",
    role: "Head of Growth",
    company: "TechStartup",
    rating: 5,
    avatar: "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=336&w=500",
    metric: "90 Days",
    metricLabel: "To #1 Ranking",
    location: "London, UK",
    badgeVariant: "violet" as const,
  },
  {
    quote: "The automation capabilities are game-changing. We've reduced our manual marketing workload by 80% while seeing a 200% increase in qualified leads.",
    name: "Elena Rodriguez",
    role: "CMO",
    company: "HealthTech Pro",
    rating: 5,
    avatar: "https://images.pexels.com/photos/33671960/pexels-photo-33671960.png?auto=compress&cs=tinysrgb&fit=crop&h=336&w=500",
    metric: "200%",
    metricLabel: "Lead Increase",
    location: "Toronto, Canada",
    badgeVariant: "orange" as const,
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-16 bg-gray-50" aria-label="Client testimonials">
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            What Our Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Say
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Real feedback from industry leaders who scaled with GrowthPlatform.
          </p>
        </div>

        {/* 4-up grid of food-style cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col bg-white rounded-[22px] border border-[#EAEAEA] shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_0_rgba(0,0,0,0.10)] hover:-translate-y-[3px] transition-all duration-300"
              style={{ padding: "14px" }}
            >
              {/* Image area */}
              <div className="relative rounded-[16px] overflow-hidden flex-shrink-0 mb-[14px]" style={{ height: "168px" }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                {/* Metric badge */}
                <span className="absolute bottom-3 left-3 bg-gray-900/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-[7px] backdrop-blur-sm">
                  {t.metric} {t.metricLabel}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Name + role */}
                <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-[6px]">
                  {t.name}
                </h3>
                <p className="text-[11px] text-gray-400 mb-2">{t.role}, {t.company}</p>

                {/* Quote */}
                <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-3 flex-1 mb-[14px]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* CTA */}
                <div className="flex items-center justify-end">
                  <span className="text-[11px] text-gray-400">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
