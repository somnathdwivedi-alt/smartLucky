"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

/* ─────────────────────────────────────────────
   Real SVG icons per industry
───────────────────────────────────────────── */
const HealthIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#FEE2E2"/>
    <path d="M20 10v20M10 20h20" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="8" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

const EduIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#DBEAFE"/>
    <path d="M20 11L8 17l12 6 12-6-12-6z" fill="#3B82F6"/>
    <path d="M8 17v8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 20.5v5a6 6 0 0012 0v-5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const RealEstateIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#FEF3C7"/>
    <path d="M6 28h28M20 11l-11 9h4v8h14v-8h4L20 11z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="17" y="22" width="6" height="6" rx="1" stroke="#F59E0B" strokeWidth="1.5"/>
  </svg>
);

const FinanceIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#D1FAE5"/>
    <rect x="7" y="14" width="26" height="17" rx="3" stroke="#10B981" strokeWidth="2"/>
    <path d="M7 20h26" stroke="#10B981" strokeWidth="2"/>
    <circle cx="14" cy="25" r="2" fill="#10B981"/>
    <path d="M20 11v4M26 11l-3 4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const StartupIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#EDE9FE"/>
    <path d="M20 8c0 0 8 4 8 13a8 8 0 01-16 0c0-9 8-13 8-13z" stroke="#8B5CF6" strokeWidth="2" fill="#C4B5FD" fillOpacity=".3"/>
    <path d="M20 21v8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 29h8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="18" r="2.5" fill="#8B5CF6"/>
  </svg>
);

const SaaSIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#E0F2FE"/>
    <rect x="8" y="10" width="24" height="16" rx="3" stroke="#0EA5E9" strokeWidth="2"/>
    <path d="M14 30h12M20 26v4" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 16h4M13 20h8" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="25" cy="18" r="3" fill="#0EA5E9" fillOpacity=".3" stroke="#0EA5E9" strokeWidth="1.5"/>
  </svg>
);

const RetailIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#FFE4E6"/>
    <path d="M9 10h3l2 13h13l3-10H14" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="27" r="2" fill="#F43F5E"/>
    <circle cx="26" cy="27" r="2" fill="#F43F5E"/>
    <path d="M14 14h15" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HospitalityIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#ECFDF5"/>
    <rect x="8" y="16" width="24" height="16" rx="2" stroke="#059669" strokeWidth="2"/>
    <path d="M14 32v-6a2 2 0 014 0v6" stroke="#059669" strokeWidth="1.5"/>
    <rect x="22" y="22" width="6" height="4" rx="1" stroke="#059669" strokeWidth="1.5"/>
    <path d="M8 16l12-8 12 8" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8v4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ManufacturingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#F1F5F9"/>
    <rect x="6" y="22" width="8" height="10" rx="1" stroke="#64748B" strokeWidth="1.5"/>
    <rect x="16" y="17" width="8" height="15" rx="1" stroke="#64748B" strokeWidth="1.5"/>
    <rect x="26" y="12" width="8" height="20" rx="1" stroke="#64748B" strokeWidth="1.5"/>
    <path d="M6 22l6-8 8 5 8-8 6 3" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AutomotiveIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
    <rect width="40" height="40" rx="10" fill="#FFF7ED"/>
    <path d="M6 24h28M10 24l3-8h14l3 8" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="26" r="3" fill="#EA580C"/>
    <circle cx="26" cy="26" r="3" fill="#EA580C"/>
    <path d="M14 18h12M16 20h8" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="22" y="16" width="4" height="4" rx="0.5" fill="#FED7AA" stroke="#EA580C" strokeWidth="1"/>
  </svg>
);

/* ─────────────────────────────────────────────
   Industry data with real Pexels images
───────────────────────────────────────────── */
const industries = [
  {
    Icon: HealthIcon,
    name: "Healthcare",
    tagline: "HIPAA-compliant growth",
    description: "HIPAA-compliant growth strategies for hospitals, clinics, and health tech platforms.",
    stat: "+180%", statLabel: "Patient Acquisition",
    tags: ["HIPAA", "Compliance", "Digital"],
    accentText: "text-red-600", accentBg: "bg-red-50", accentBorder: "border-red-100",
    image: "https://images.pexels.com/photos/6011598/pexels-photo-6011598.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: EduIcon,
    name: "Education",
    tagline: "Student acquisition at scale",
    description: "Student acquisition and retention marketing for universities and leading institutions.",
    stat: "+240%", statLabel: "Enrolment Growth",
    tags: ["EdTech", "Retention", "Ads"],
    accentText: "text-blue-600", accentBg: "bg-blue-50", accentBorder: "border-blue-100",
    image: "https://images.pexels.com/photos/9159042/pexels-photo-9159042.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: RealEstateIcon,
    name: "Real Estate",
    tagline: "Lead gen for property markets",
    description: "Lead generation and brand awareness for competitive residential and commercial property markets.",
    stat: "3.2×", statLabel: "Lead Volume",
    tags: ["Lead Gen", "Local SEO", "PPC"],
    accentText: "text-amber-600", accentBg: "bg-amber-50", accentBorder: "border-amber-100",
    image: "https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: FinanceIcon,
    name: "Finance",
    tagline: "Regulated-market acquisition",
    description: "Customer acquisition for banks, fintech startups, and insurance brands at enterprise scale.",
    stat: "4.8×", statLabel: "Customer ROAS",
    tags: ["Fintech", "Compliance", "PPC"],
    accentText: "text-emerald-600", accentBg: "bg-emerald-50", accentBorder: "border-emerald-100",
    image: "https://images.pexels.com/photos/33785780/pexels-photo-33785780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: StartupIcon,
    name: "Startups",
    tagline: "Zero-to-one growth strategy",
    description: "Rapid growth strategies for early-stage companies going from product-market fit to scale.",
    stat: "0→1M", statLabel: "Users in 6 Months",
    tags: ["Growth", "PLG", "GTM"],
    accentText: "text-violet-600", accentBg: "bg-violet-50", accentBorder: "border-violet-100",
    image: "https://images.pexels.com/photos/7413872/pexels-photo-7413872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: SaaSIcon,
    name: "SaaS",
    tagline: "Subscription-led growth engine",
    description: "Subscription growth, churn reduction, and LTV maximisation for software companies of all sizes.",
    stat: "−34%", statLabel: "Churn Reduction",
    tags: ["MRR", "Churn", "LTV"],
    accentText: "text-sky-600", accentBg: "bg-sky-50", accentBorder: "border-sky-100",
    image: "https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: RetailIcon,
    name: "Retail",
    tagline: "Omnichannel sales acceleration",
    description: "Omnichannel marketing that connects physical and digital retail for maximum sales velocity.",
    stat: "5.1×", statLabel: "ROAS Average",
    tags: ["Omnichannel", "D2C", "CRO"],
    accentText: "text-rose-600", accentBg: "bg-rose-50", accentBorder: "border-rose-100",
    image: "https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: HospitalityIcon,
    name: "Hospitality",
    tagline: "Direct booking amplification",
    description: "Booking optimisation and guest experience marketing that drives direct revenue and loyalty.",
    stat: "+92%", statLabel: "Direct Bookings",
    tags: ["Bookings", "OTA", "Brand"],
    accentText: "text-emerald-700", accentBg: "bg-green-50", accentBorder: "border-green-100",
    image: "https://images.pexels.com/photos/3770106/pexels-photo-3770106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: ManufacturingIcon,
    name: "Manufacturing",
    tagline: "Industrial B2B lead generation",
    description: "B2B demand generation and industry authority building for manufacturers competing globally.",
    stat: "2.7×", statLabel: "B2B Leads",
    tags: ["B2B", "LinkedIn", "ABM"],
    accentText: "text-slate-600", accentBg: "bg-slate-50", accentBorder: "border-slate-100",
    image: "https://images.pexels.com/photos/5532664/pexels-photo-5532664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    Icon: AutomotiveIcon,
    name: "Automotive",
    tagline: "Dealer & brand marketing",
    description: "Dealer marketing and brand awareness campaigns that drive showroom visits and online leads.",
    stat: "+310%", statLabel: "Test Drive Leads",
    tags: ["Dealer", "Local Ads", "Video"],
    accentText: "text-orange-600", accentBg: "bg-orange-50", accentBorder: "border-orange-100",
    image: "https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
];

/* ─────────────────────────────────────────────
   INDUSTRY CARD — professional SaaS info card
───────────────────────────────────────────── */
function IndustryCard({ ind, i }: { ind: typeof industries[0]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(i * 0.07, 0.5) }}
      className="group relative flex flex-col bg-white rounded-[20px] border border-[#EAEAEA] overflow-hidden shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* ── Real photo top (55% height) ── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "150px" }}>
        <img
          src={ind.image}
          alt={ind.name}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-600"
          loading="lazy"
        />
        {/* dark scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />

        {/* Industry name on image */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-black text-white tracking-tight">{ind.name}</h3>
            {/* Real custom SVG icon */}
            <div className="w-9 h-9 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center flex-shrink-0 shadow-sm">
              <ind.Icon />
            </div>
          </div>
          <p className="text-[10px] text-white/70 font-medium mt-0.5">{ind.tagline}</p>
        </div>
      </div>

      {/* ── White info body ── */}
      <div className="flex flex-col flex-1 p-4">

        {/* Description */}
        <p className="text-[11.5px] text-gray-500 leading-relaxed line-clamp-2 mb-3 flex-1">
          {ind.description}
        </p>

        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {ind.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ind.accentBg} ${ind.accentText} ${ind.accentBorder} border`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-2" />

        {/* Stat + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-[18px] font-black leading-none ${ind.accentText}`}>{ind.stat}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{ind.statLabel}</p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1 bg-gray-900 hover:bg-gray-700 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 active:scale-95"
          >
            Explore
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export default function Industries() {
  return (
    <section className="py-14 md:py-16 bg-gray-50" aria-label="Industries we serve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Serve
            </span>
          </h2>
          <p className="mt-3 text-gray-500 text-base">
            Tailored solutions designed to solve complex scaling challenges across every vertical.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
