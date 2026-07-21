"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, Search, Target, Users, BarChart3,
  TrendingUp, Zap, Brain, Mail, Globe, Code, Layout, Palette, Megaphone,
  Sparkles, Lightbulb, Rocket, Shield, Star, Heart,
  type LucideIcon,
} from "lucide-react";
import { useLiveSettings } from "@/data/live-client";

const ICON_MAP: Record<string, LucideIcon> = {
  Search, Target, Users, BarChart3, TrendingUp, Zap, Brain, Mail, Globe,
  Code, Layout, Palette, Megaphone, Sparkles, Lightbulb, Rocket, Shield, Star, Heart,
};

/* ─────────────────────────────────────────
   DATA  (all 12 services, data unchanged)
───────────────────────────────────────── */
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search results with technical excellence and revenue-driving intent strategies.",
    badge: "Most Requested",
    badgeColor: "bg-blue-500/85",
    image: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "AI-optimized ad spend across Meta, Google, and LinkedIn for maximum ROI.",
    badge: "Top ROAS",
    badgeColor: "bg-orange-500/85",
    image: "https://images.pexels.com/photos/38285047/pexels-photo-38285047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Users,
    title: "Affiliate Marketing",
    description: "Launch global affiliate networks with automated payouts and fraud detection.",
    badge: "5K+ Partners",
    badgeColor: "bg-violet-500/85",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Data-driven acquisition across all channels with real-time optimization.",
    badge: "98% Retention",
    badgeColor: "bg-emerald-500/85",
    image: "https://images.pexels.com/photos/7947849/pexels-photo-7947849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build brand presence and engage audiences across all major social platforms.",
    badge: "3.8× Engagement",
    badgeColor: "bg-rose-500/85",
    image: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated sequences that nurture leads and drive conversions at scale.",
    badge: "42% Open Rate",
    badgeColor: "bg-blue-500/85",
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Brain,
    title: "AI Marketing Solutions",
    description: "Predictive AI models for customer behavior and campaign optimization.",
    badge: "94% Accuracy",
    badgeColor: "bg-violet-500/85",
    image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "End-to-end strategy combining marketing, product, and data for scaling.",
    badge: "127% Avg ROI",
    badgeColor: "bg-emerald-500/85",
    image: "https://images.pexels.com/photos/7413913/pexels-photo-7413913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web apps built for performance, SEO, and conversion.",
    badge: "99 PageSpeed",
    badgeColor: "bg-blue-500/85",
    image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting pages designed and optimised for maximum lead generation.",
    badge: "38% CVR",
    badgeColor: "bg-orange-500/85",
    image: "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates seamless experiences and drives engagement.",
    badge: "4.9★ Rated",
    badgeColor: "bg-rose-500/85",
    image: "https://images.pexels.com/photos/34601/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
  {
    icon: Globe,
    title: "Marketing Automation",
    description: "Automate complex marketing workflows and optimise partner payouts in real-time.",
    badge: "80% Less Work",
    badgeColor: "bg-violet-500/85",
    image: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400",
  },
];

/* ─────────────────────────────────────────
   SINGLE CARD  — compact food-card style
───────────────────────────────────────── */
function ServiceCard({ s, i }: { s: Service; i: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.4), ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col bg-white rounded-[18px] border border-[#EAEAEA] shadow-[0_1px_8px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_0_rgba(0,0,0,0.10)] hover:-translate-y-[3px] transition-all duration-300"
      style={{ padding: "11px" }}
    >
      {/* ── IMAGE  (≈52% height) — kinetic scale on scroll ── */}
      <div
        className="relative rounded-[12px] overflow-hidden flex-shrink-0 mb-[11px]"
        style={{ height: "130px" }}
      >
        <motion.img
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={s.image}
          alt={s.title}
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
          loading="lazy"
        />
        {/* soft scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/35 via-transparent to-transparent pointer-events-none" />

        {/* Badge — bottom-left */}
        <span
          className={`absolute bottom-2 left-2 ${s.badgeColor} text-white text-[10px] font-semibold px-2 py-[3px] rounded-[6px] backdrop-blur-sm shadow`}
        >
          {s.badge}
        </span>
      </div>

      {/* ── INFO ── */}
      <div className="flex flex-col flex-1 px-0.5">
        <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-[5px] line-clamp-1">
          {s.title}
        </h3>
        <p className="text-[12px] text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-[12px]">
          {s.description}
        </p>

        {/* CTA — right-aligned pill */}
        <div className="flex justify-end">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 bg-gray-900 hover:bg-gray-700 text-white text-[11px] font-semibold px-3 py-[6px] rounded-full transition-all duration-200 active:scale-95 group-hover:gap-1.5"
          >
            Learn More
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────
   SECTION
───────────────────────────────────────── */
const INITIAL_VISIBLE = 8; // 2 rows × 4 columns

const seedServices = [
  { icon: "Search", title: "SEO Optimization", description: "Dominate search results with technical excellence and revenue-driving intent strategies.", badge: "Most Requested", badgeColor: "bg-blue-500/85", image: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
  { icon: "Target", title: "Paid Advertising", description: "AI-optimized ad spend across Meta, Google, and LinkedIn for maximum ROI.", badge: "Top ROAS", badgeColor: "bg-orange-500/85", image: "https://images.pexels.com/photos/38285047/pexels-photo-38285047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
  { icon: "Users", title: "Affiliate Marketing", description: "Launch global affiliate networks with automated payouts and fraud detection.", badge: "5K+ Partners", badgeColor: "bg-violet-500/85", image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
  { icon: "BarChart3", title: "Performance Marketing", description: "Data-driven acquisition across all channels with real-time optimization.", badge: "98% Retention", badgeColor: "bg-emerald-500/85", image: "https://images.pexels.com/photos/7947849/pexels-photo-7947849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
  { icon: "Megaphone", title: "Social Media Marketing", description: "Build brand presence and engage audiences across all major social platforms.", badge: "3.8× Engagement", badgeColor: "bg-rose-500/85", image: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
  { icon: "Mail", title: "Email Marketing", description: "Automated sequences that nurture leads and drive conversions at scale.", badge: "42% Open Rate", badgeColor: "bg-blue-500/85", image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
  { icon: "Brain", title: "AI Marketing Solutions", description: "Predictive AI models for customer behavior and campaign optimization.", badge: "94% Accuracy", badgeColor: "bg-violet-500/85", image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
  { icon: "TrendingUp", title: "Growth Strategy", description: "End-to-end strategy combining marketing, product, and data for scaling.", badge: "127% Avg ROI", badgeColor: "bg-emerald-500/85", image: "https://images.pexels.com/photos/7413913/pexels-photo-7413913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=260&w=400" },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const settings = useLiveSettings({ servicesGrid: seedServices });
  const grid = settings.servicesGrid && settings.servicesGrid.length ? settings.servicesGrid : seedServices;
  const services = grid.map((s) => ({ ...s, icon: ICON_MAP[s.icon] || Sparkles }));

  const visible = showAll ? services : services.slice(0, INITIAL_VISIBLE);
  const hidden  = services.length - INITIAL_VISIBLE;

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="services" aria-label="Our services">
      <div className="container-custom">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Precision Services for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Growth Teams
            </span>
          </h2>
          <p className="mt-3 text-gray-500 text-base">
            Specialized growth solutions tailored for high-performance marketing teams.
          </p>
        </div>

        {/* ── 4-per-row grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <ServiceCard key={s.title} s={s} i={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* ── Show More / Show Less CTA ── */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold text-sm px-7 py-3 rounded-full shadow-sm transition-all duration-200 active:scale-95"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
              </>
            ) : (
              <>
                Show {hidden} More Services
                <ChevronDown className="w-4 h-4 transition-transform" />
              </>
            )}
          </motion.button>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all"
          >
            View all services page
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
