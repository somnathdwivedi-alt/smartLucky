"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Search, Download, Clock,
  BookOpen, Video, FileSpreadsheet, BarChart3,
  Star, ChevronRight, ExternalLink, Zap, TrendingUp,
  Target, Users, Mail, Megaphone, Globe,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Resource cards — every card has a real image
───────────────────────────────────────────── */
interface ResourceCard {
  id: string;
  cat: string;
  type: string;
  typeColor: string;
  typeBg: string;
  icon: React.ElementType;
  title: string;
  description: string;
  topic: string;          // digital marketing topic label
  topicColor: string;
  image: string;          // real Pexels photo
  imageAlt: string;
  readTime: string;
  tags: string[];
  isFree: boolean;
}

const resourceCards: ResourceCard[] = [
  {
    id: "saas-pricing",
    cat: "ebooks",
    type: "Ebook",
    typeColor: "text-blue-700",
    typeBg: "bg-blue-100",
    icon: BookOpen,
    title: "The 2024 SaaS Pricing Handbook",
    description: "Master subscription tier optimisation and maximise LTV with proven data-driven pricing frameworks used by the fastest-growing SaaS companies.",
    topic: "Digital Marketing",
    topicColor: "text-blue-600",
    image: "https://images.pexels.com/photos/5972329/pexels-photo-5972329.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Person analyzing financial charts on phone and laptop",
    readTime: "24 min read",
    tags: ["Pricing", "SaaS", "LTV"],
    isFree: true,
  },
  {
    id: "affiliate-state",
    cat: "ebooks",
    type: "Whitepaper",
    typeColor: "text-orange-700",
    typeBg: "bg-orange-100",
    icon: BookOpen,
    title: "State of Affiliate Marketing 2024",
    description: "Comprehensive study of 500+ global brands revealing the tactics, technology, and trends driving affiliate programme success this year.",
    topic: "Affiliate Marketing",
    topicColor: "text-orange-600",
    image: "https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Business growth charts and analytics papers",
    readTime: "32 min read",
    tags: ["Affiliate", "Research", "2024"],
    isFree: true,
  },
  {
    id: "multi-touch",
    cat: "webinars",
    type: "Webinar",
    typeColor: "text-purple-700",
    typeBg: "bg-purple-100",
    icon: Video,
    title: "Multi-Touch Attribution Masterclass",
    description: "On-demand session solving the attribution puzzle across 12+ digital marketing channels — from first click to closed deal.",
    topic: "Performance Marketing",
    topicColor: "text-violet-600",
    image: "https://images.pexels.com/photos/8369683/pexels-photo-8369683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Woman presenting at podium digital marketing conference",
    readTime: "45 min",
    tags: ["Attribution", "Analytics", "Paid Ads"],
    isFree: false,
  },
  {
    id: "google-ads-guide",
    cat: "ebooks",
    type: "Guide",
    typeColor: "text-red-700",
    typeBg: "bg-red-100",
    icon: BookOpen,
    title: "Google Ads Mastery: 2024 Playbook",
    description: "Complete Google Ads management guide — from Search and Shopping to Performance Max, smart bidding, and AI-powered creative optimisation.",
    topic: "Google Ads",
    topicColor: "text-red-600",
    image: "https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Google search on laptop for paid advertising",
    readTime: "28 min read",
    tags: ["Google Ads", "PPC", "ROAS"],
    isFree: true,
  },
  {
    id: "seo-authority",
    cat: "ebooks",
    type: "Guide",
    typeColor: "text-emerald-700",
    typeBg: "bg-emerald-100",
    icon: BookOpen,
    title: "The Complete SEO Authority Blueprint",
    description: "From technical foundations to topical authority building — rank #1 for your highest-value keywords and dominate organic search in your category.",
    topic: "SEO Optimization",
    topicColor: "text-emerald-600",
    image: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "SEO wooden blocks on laptop keyboard",
    readTime: "35 min read",
    tags: ["SEO", "Organic", "Content"],
    isFree: true,
  },
  {
    id: "paid-ads-scaling",
    cat: "webinars",
    type: "Webinar",
    typeColor: "text-purple-700",
    typeBg: "bg-purple-100",
    icon: Video,
    title: "Scaling Paid Ads Without Burning Budget",
    description: "Live workshop recording: how to cut CAC by 40% while scaling spend 3× using AI-driven bid management across Google, Meta, and LinkedIn.",
    topic: "Paid Advertising",
    topicColor: "text-orange-600",
    image: "https://images.pexels.com/photos/7013900/pexels-photo-7013900.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Online digital marketing webinar on laptop",
    readTime: "62 min",
    tags: ["Paid Ads", "AI Bidding", "CAC"],
    isFree: false,
  },
  {
    id: "affiliate-programme",
    cat: "templates",
    type: "Template",
    typeColor: "text-teal-700",
    typeBg: "bg-teal-100",
    icon: FileSpreadsheet,
    title: "Affiliate Programme Launch Kit",
    description: "Complete templates for launching a high-performing affiliate programme — commission structure, partner brief, payout model, and tier design framework.",
    topic: "Affiliate Marketing",
    topicColor: "text-orange-600",
    image: "https://images.pexels.com/photos/7876383/pexels-photo-7876383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Business review charts and financial report on whiteboard",
    readTime: "Free Download",
    tags: ["Affiliate", "Template", "Free"],
    isFree: true,
  },
  {
    id: "content-calendar",
    cat: "templates",
    type: "Template",
    typeColor: "text-teal-700",
    typeBg: "bg-teal-100",
    icon: FileSpreadsheet,
    title: "12-Month Digital Marketing Calendar",
    description: "Complete content and campaign calendar with topic clustering, keyword mapping, and multi-channel distribution planning for digital and affiliate teams.",
    topic: "Content Marketing",
    topicColor: "text-blue-600",
    image: "https://images.pexels.com/photos/38285024/pexels-photo-38285024.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Content creator block letters marketing strategy",
    readTime: "Free Download",
    tags: ["Content", "Calendar", "Strategy"],
    isFree: true,
  },
  {
    id: "email-automation",
    cat: "ebooks",
    type: "Guide",
    typeColor: "text-cyan-700",
    typeBg: "bg-cyan-100",
    icon: Mail,
    title: "Email Automation Playbook for Growth Teams",
    description: "Step-by-step sequences for onboarding, nurture, win-back, and referral campaigns — automated revenue streams that work while you sleep.",
    topic: "Email Marketing",
    topicColor: "text-cyan-600",
    image: "https://images.pexels.com/photos/7430701/pexels-photo-7430701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Email marketing envelopes and subscribe card",
    readTime: "20 min read",
    tags: ["Email", "Automation", "Sequences"],
    isFree: true,
  },
  {
    id: "meta-ads-creative",
    cat: "ebooks",
    type: "Guide",
    typeColor: "text-blue-700",
    typeBg: "bg-blue-100",
    icon: BookOpen,
    title: "Meta Ads Creative Strategy Guide",
    description: "Master Facebook and Instagram ad creative that stops the scroll — from UGC-style video to dynamic product ads and full-funnel creative architecture.",
    topic: "Meta Ads",
    topicColor: "text-blue-600",
    image: "https://images.pexels.com/photos/3850271/pexels-photo-3850271.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Social media phone content creation for Meta ads",
    readTime: "22 min read",
    tags: ["Meta Ads", "Creative", "Social"],
    isFree: true,
  },
  {
    id: "growth-forecast",
    cat: "templates",
    type: "Template",
    typeColor: "text-teal-700",
    typeBg: "bg-teal-100",
    icon: FileSpreadsheet,
    title: "Quarterly Growth Forecasting Sheet",
    description: "Plug-and-play Google Sheets framework for predicting your next four quarters of revenue expansion from digital marketing and affiliate channels.",
    topic: "Performance Marketing",
    topicColor: "text-violet-600",
    image: "https://images.pexels.com/photos/7947746/pexels-photo-7947746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Revenue forecast report with calculator and notebook",
    readTime: "Free Download",
    tags: ["Forecasting", "Revenue", "Planning"],
    isFree: true,
  },
  {
    id: "data-pipeline",
    cat: "case-studies",
    type: "Case Study",
    typeColor: "text-indigo-700",
    typeBg: "bg-indigo-100",
    icon: BarChart3,
    title: "127% ROI: Cloud Infrastructure Digital Marketing",
    description: "How a B2B SaaS company used our affiliate and performance marketing engine to unlock 127% ROI through precision partner targeting and AI bid optimisation.",
    topic: "Digital Marketing",
    topicColor: "text-blue-600",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
    imageAlt: "Server infrastructure data center technology",
    readTime: "8 min read",
    tags: ["Case Study", "B2B", "ROI"],
    isFree: true,
  },
];

const categories = [
  { id: "all", label: "All Resources" },
  { id: "ebooks", label: "Guides & Ebooks" },
  { id: "templates", label: "Templates" },
  { id: "webinars", label: "Webinars" },
  { id: "case-studies", label: "Case Studies" },
];

const popularArticles = [
  { category: "AFFILIATE", categoryColor: "text-orange-500", title: "How to Launch a $50M Affiliate Programme from Scratch" },
  { category: "PAID ADS",  categoryColor: "text-blue-600",   title: "10 Google Ads Mistakes Burning Your Budget Right Now" },
  { category: "SEO",       categoryColor: "text-emerald-600", title: "Topical Authority: The SEO Strategy That Beats Every Algorithm" },
  { category: "META ADS",  categoryColor: "text-violet-600", title: "Meta Ads After iOS14: The Full Recovery Playbook" },
];

/* ─────────────────────────────────────────────
   Resource Card — image on top, full detail
───────────────────────────────────────────── */
function ResourceCardItem({ r, i }: { r: ResourceCard; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.38, delay: Math.min(i * 0.055, 0.44) }}
      className="group flex flex-col bg-white rounded-[20px] border border-[#EAEAEA] overflow-hidden shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_14px_40px_0_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* ── Real image ── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "168px" }}>
        <img
          src={r.image}
          alt={r.imageAlt}
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent" />

        {/* Type badge — top left */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 ${r.typeBg} ${r.typeColor} text-[10.5px] font-bold px-2.5 py-1 rounded-full`}>
            <r.icon className="w-3 h-3" />
            {r.type}
          </span>
        </div>

        {/* Free badge — top right */}
        {r.isFree && (
          <div className="absolute top-3 right-3">
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">FREE</span>
          </div>
        )}

        {/* Topic — bottom left */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-gray-900/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/15">
            {r.topic}
          </span>
        </div>

        {/* Read time — bottom right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white/80 text-[10px]">
          <Clock className="w-3 h-3" />
          <span>{r.readTime}</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {r.title}
        </h3>
        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2 flex-1 mb-4">
          {r.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {r.tags.map(tag => (
            <span key={tag} className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end pt-3 border-t border-gray-100">
          <Link href={`#${r.id}`} className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 text-white text-[11px] font-semibold px-3.5 py-2 rounded-full transition-all active:scale-95 group-hover:gap-2">
            {r.type === "Webinar" ? "Watch Free" : r.type === "Template" ? "Download Free" : "Read Now"}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = resourceCards.filter((r) => {
    const matchCat = activeCategory === "all" || r.cat === activeCategory;
    const matchText = searchQuery === "" ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchText;
  });

  return (
    <div className="overflow-hidden bg-white">

      {/* ══════════════════════════════════════════
          HERO — clear digital/affiliate/advertising identity
      ══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary tracking-wide">Digital Marketing · Affiliate · Advertising Resources</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3rem] font-semibold text-gray-900 tracking-tight leading-[1.12]">
              Scale Faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Expert Resources
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
              className="mt-5 text-[15px] text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Actionable guides, templates, webinars, and case studies covering{" "}
              <strong className="text-gray-700">digital marketing</strong>,{" "}
              <strong className="text-gray-700">affiliate marketing</strong>,{" "}
              <strong className="text-gray-700">paid advertising</strong>,{" "}
              <strong className="text-gray-700">SEO</strong>, and{" "}
              <strong className="text-gray-700">performance marketing</strong> — built for growth teams who want results.
            </motion.p>

            {/* Service pills */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
              className="mt-6 flex flex-wrap gap-2 justify-center">
              {[
                { label: "Digital Marketing", icon: Globe, color: "bg-blue-50 text-blue-700 border-blue-100" },
                { label: "Affiliate Marketing", icon: Users, color: "bg-orange-50 text-orange-700 border-orange-100" },
                { label: "Google & Meta Ads", icon: Target, color: "bg-red-50 text-red-700 border-red-100" },
                { label: "SEO & Content", icon: TrendingUp, color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                { label: "Email Marketing", icon: Mail, color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
                { label: "Performance Marketing", icon: BarChart3, color: "bg-violet-50 text-violet-700 border-violet-100" },
              ].map(({ label, icon: Icon, color }) => (
                <button key={label} onClick={() => setSearchQuery(label.split(" ")[0])}
                  className={`inline-flex items-center gap-1.5 border text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all hover:shadow-sm ${color}`}>
                  <Icon className="w-3 h-3" />
                  {label}
                </button>
              ))}
            </motion.div>

            {/* Search */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              className="mt-8 flex gap-2 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search affiliate guides, Google Ads webinars, SEO templates…"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm" />
              </div>
              <button className="bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                Search
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED HERO CARDS — 2 big cards side by side
          with REAL background images
      ══════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Featured This Week</h2>
            <p className="text-sm text-gray-500 mt-1">Our most-downloaded digital marketing and affiliate resources</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">

            {/* ── FEATURED CARD 1 — Affiliate Marketing 2024 ── */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: 360 }}>
              {/* Background image */}
              <img
                src="https://images.pexels.com/photos/9052188/pexels-photo-9052188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1000"
                alt="Affiliate marketing business growth research"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/60 to-gray-900/20" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">NEW RELEASE</span>
                  <span className="text-white/60 text-[11px]">32 Min Read</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 rounded-full px-3 py-1 mb-3 w-fit">
                  <Users className="w-3 h-3 text-orange-400" />
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Affiliate Marketing</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 leading-snug">
                  State of Affiliate Marketing 2024: Global Benchmarks & Trends
                </h3>
                <p className="text-white/65 text-[13px] leading-relaxed mb-6 max-w-md">
                  Our comprehensive study of 500+ global affiliate programmes revealing the commission structures, partner types, fraud trends, and technology stacks driving affiliate revenue in 2024.
                </p>
                <div className="flex gap-3">
                  <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg">
                    <Download className="w-4 h-4" />Download Free
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all">
                    Preview <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ── FEATURED CARD 2 — Google Ads & Digital Advertising ── */}
            <div className="flex flex-col gap-4">

              {/* Sub-card 1 — large top */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg flex-1" style={{ minHeight: 200 }}>
                <img
                  src="https://images.pexels.com/photos/7877027/pexels-photo-7877027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900"
                  alt="Digital marketing analytics presentation"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-transparent" />
                <div className="relative h-full flex flex-col justify-center p-7">
                  <div className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 mb-3 w-fit">
                    <Target className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Paid Advertising</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    Google Ads Mastery: 2024 Complete Playbook
                  </h3>
                  <p className="text-white/60 text-[12px] mb-4 leading-relaxed">
                    Everything from Search to Performance Max — smart bidding, creative, landing pages, and ROAS optimisation.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-[12px] transition-all w-fit">
                    <Download className="w-3.5 h-3.5" />Get Free Guide
                  </button>
                </div>
              </motion.div>

              {/* Sub-card 2 — smaller bottom */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg" style={{ height: 140 }}>
                <img
                  src="https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=900"
                  alt="Digital marketing strategy documents on desk"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-gray-900/70 to-transparent" />
                <div className="relative h-full flex items-center gap-4 px-7">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1 mb-2 w-fit">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">SEO & Content</span>
                    </div>
                    <h3 className="text-[15px] font-semibold text-white">12-Month Digital Marketing Calendar — Free Template</h3>
                  </div>
                  <button className="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white px-4 py-2 rounded-full font-semibold text-[11px] transition-all">
                    <Download className="w-3 h-3" />Download
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESOURCE LIBRARY — category filter + image cards
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Explore the Library</h2>
              <p className="text-[13px] text-gray-500 mt-1">
                Guides, templates, webinars, and case studies covering digital marketing, affiliate programmes, paid advertising, SEO, and email marketing.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat.id} onClick={() => { setActiveCategory(cat.id); setSearchQuery(""); }}
                  className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                  }`}>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div key={activeCategory + searchQuery} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((r, i) => <ResourceCardItem key={r.id} r={r} i={i} />)}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center py-20 text-gray-400">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-medium">No resources found</p>
                <p className="text-sm mt-1">Try a different keyword or category</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all shadow-sm">
              Load More Resources <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SIDEBAR LAYOUT — Popular + Case Studies
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Popular + Subscribe */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-50 rounded-2xl border border-[#EAEAEA] p-5">
                <h2 className="text-[15px] font-bold text-gray-900 mb-5">Most Popular</h2>
                <div className="space-y-4">
                  {popularArticles.map((a, i) => (
                    <motion.div key={a.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="group flex items-start gap-3 cursor-pointer hover:bg-white rounded-xl p-3 -mx-3 transition-colors">
                      <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 text-[12px] font-bold text-gray-500 group-hover:bg-primary group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      <div>
                        <span className={`text-[9px] font-black tracking-widest ${a.categoryColor}`}>{a.category}</span>
                        <h3 className="text-[12.5px] font-semibold text-gray-800 mt-0.5 leading-snug group-hover:text-primary transition-colors">
                          {a.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Subscribe card */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Megaphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-[15px] font-bold mb-1">Growth Playbook Newsletter</h3>
                <p className="text-gray-400 text-[12px] leading-relaxed mb-4">
                  Weekly insights on digital marketing, affiliate programmes, paid advertising, and SEO — delivered every Tuesday to 24,000+ marketers.
                </p>
                <input type="email" placeholder="Your work email"
                  className="w-full px-3.5 py-2.5 bg-white/10 border border-white/15 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 mb-3" />
                <button className="w-full bg-primary text-white py-2.5 rounded-lg text-[13px] font-semibold hover:bg-blue-700 transition-colors">
                  Subscribe Free
                </button>
                <p className="text-gray-600 text-[10px] text-center mt-2">No spam. Unsubscribe anytime.</p>
              </div>
            </div>

            {/* Proven Growth Patterns with real images */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[1.2rem] font-semibold text-gray-900">Proven Growth Patterns</h2>
                <Link href="#" className="text-sm text-primary font-semibold flex items-center gap-1 hover:underline">
                  All Stories <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-[13px] text-gray-500 mb-7">
                See how leading companies use GrowthPlatform&apos;s digital marketing, affiliate, and advertising solutions to achieve extraordinary results.
              </p>

              <div className="space-y-4">
                {[
                  {
                    metric: "340%", metricLabel: "Affiliate Revenue Growth", tag: "Affiliate Marketing",
                    tagColor: "text-orange-600", tagBg: "bg-orange-50",
                    title: "How GlobalRetail Built a $50M Affiliate Revenue Channel in 6 Months",
                    desc: "By rebuilding their affiliate programme with AI-powered partner discovery and automated payouts, GlobalRetail grew affiliate revenue 340% and reduced payout errors to zero.",
                    img: "https://images.pexels.com/photos/7172856/pexels-photo-7172856.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=200",
                    alt: "Business growth thumbs up charts",
                  },
                  {
                    metric: "4.8×", metricLabel: "Google Ads ROAS", tag: "Paid Advertising",
                    tagColor: "text-blue-600", tagBg: "bg-blue-50",
                    title: "CloudPath Achieves 4.8× ROAS by Switching to AI Bid Management",
                    desc: "Moving from manual bidding to smart bidding — with proper conversion tracking and audience architecture — transformed CloudPath's Google Ads ROAS from 1.9× to 4.8×.",
                    img: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=200",
                    alt: "Analytics tablet showing charts and data",
                  },
                  {
                    metric: "240%", metricLabel: "Organic Traffic Growth", tag: "SEO Optimization",
                    tagColor: "text-emerald-600", tagBg: "bg-emerald-50",
                    title: "TechStartup Ranks #1 for 200+ Keywords with Topical Authority SEO",
                    desc: "A complete SEO overhaul focused on topical authority rather than individual keywords delivered 240% organic traffic growth and a $2.1M reduction in annual paid search spend.",
                    img: "https://images.pexels.com/photos/7876984/pexels-photo-7876984.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=200",
                    alt: "Presenting digital marketing data charts",
                  },
                ].map((cs, i) => (
                  <motion.div key={cs.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="group bg-gray-50 hover:bg-white rounded-2xl p-5 border border-[#EAEAEA] hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex gap-5 items-center">
                    {/* Real image */}
                    <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img src={cs.img} alt={cs.alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-400" loading="lazy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[24px] font-black ${cs.tagColor}`}>{cs.metric}</span>
                        <div>
                          <span className="text-[10px] font-bold text-gray-400 block">{cs.metricLabel}</span>
                          <span className={`text-[10px] font-bold ${cs.tagColor} ${cs.tagBg} px-2 py-0.5 rounded-full`}>{cs.tag}</span>
                        </div>
                      </div>
                      <h3 className="text-[13px] font-bold text-gray-900 mb-1 leading-snug group-hover:text-primary transition-colors line-clamp-1">
                        {cs.title}
                      </h3>
                      <p className="text-[11.5px] text-gray-500 leading-relaxed line-clamp-2 mb-3">{cs.desc}</p>
                      <Link href="#" className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary hover:gap-2 transition-all">
                        Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}

                {/* Browse all banner with real image */}
                <div className="relative rounded-2xl overflow-hidden" style={{ height: 120 }}>
                  <img src="https://images.pexels.com/photos/7876383/pexels-photo-7876383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=240&w=900"
                    alt="Business review charts success" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 to-gray-900/50" />
                  <div className="relative h-full flex items-center justify-between px-7">
                    <div>
                      <p className="text-white font-bold text-[15px]">50+ digital marketing & affiliate case studies</p>
                      <p className="text-white/55 text-[12px] mt-0.5">Real results from real GrowthPlatform clients worldwide</p>
                    </div>
                    <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold text-[12px] hover:bg-gray-100 transition-colors">
                      Browse All <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES HIGHLIGHT STRIP
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8">
            GrowthPlatform provides full-service digital marketing solutions
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Globe, label: "Digital Marketing", href: "/services/seo-optimization", color: "text-blue-600 bg-blue-50" },
              { icon: Users, label: "Affiliate Marketing", href: "/services/affiliate", color: "text-orange-600 bg-orange-50" },
              { icon: Target, label: "Paid Advertising", href: "/services/google-ads", color: "text-red-600 bg-red-50" },
              { icon: TrendingUp, label: "SEO Optimization", href: "/services/seo-optimization", color: "text-emerald-600 bg-emerald-50" },
              { icon: Mail, label: "Email Marketing", href: "/services/lead-gen", color: "text-cyan-600 bg-cyan-50" },
              { icon: BarChart3, label: "Performance Marketing", href: "/services/performance", color: "text-violet-600 bg-violet-50" },
            ].map(({ icon: Icon, label, href, color }) => (
              <Link key={label} href={href}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#EAEAEA] hover:shadow-md hover:-translate-y-0.5 transition-all text-center group">
                <div className={`w-10 h-10 rounded-xl ${color.split(" ")[1]} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color.split(" ")[0]}`} />
                </div>
                <span className="text-[11.5px] font-semibold text-gray-700 group-hover:text-primary transition-colors leading-tight">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWSLETTER CTA — dark strip
      ══════════════════════════════════════════ */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Get the Growth Playbook</h2>
              <p className="text-gray-400 text-[13.5px] leading-relaxed">
                Weekly insights on <strong className="text-white">affiliate marketing</strong>, <strong className="text-white">digital advertising</strong>, <strong className="text-white">SEO</strong>, and <strong className="text-white">performance marketing</strong> — delivered to 24,000+ growth leaders every Tuesday.
              </p>
            </div>
            <div className="flex gap-3">
              <input type="email" placeholder="Enter your work email"
                className="flex-1 px-4 py-3 bg-white/8 border border-white/12 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors whitespace-nowrap shadow-lg shadow-primary/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
