"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Globe, CheckCircle2, ArrowRight, TrendingUp, Users, Award, Zap, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ServiceCategoryCard from "@/components/ui/ServiceCategoryCard";
import { getCardColor } from "@/lib/cardColors";
import { useLiveSettings } from "@/data/live-client";

/* ─────────────── ICON MAPS ─────────────── */

const VALUE_ICON_MAP: Record<string, LucideIcon> = { Shield, Lightbulb, Globe };
const VISION_ICON_MAP: Record<string, LucideIcon> = { Zap };

/* ─────────────── DATA (seed / fallback) ─────────────── */

const timeline = [
  {
    year: "2018",
    title: "The Genesis",
    description:
      "Founded by a team of ex-Meta and Google engineers in a San Francisco garage with a clear vision: automate world-class affiliate and referral marketing for every business.",
    image:
      "https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Early team working on startup",
  },
  {
    year: "2020",
    title: "Growth Platform V1",
    description:
      "Launched our first flagship product, helping 500+ SaaS companies seamlessly manage their affiliate networks and track real-time partner performance.",
    image:
      "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Engineering team building platform",
  },
  {
    year: "2022",
    title: "The AI Pivot",
    description:
      "Integrated deep learning models to predict partner performance, leading to a 300% increase in client ROI and becoming the industry's first AI-native growth platform.",
    image:
      "https://images.pexels.com/photos/7413913/pexels-photo-7413913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Team reviewing AI growth charts",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Expanded to 50+ countries, serving thousands of enterprise clients worldwide with full-stack growth infrastructure trusted by category-defining brands.",
    image:
      "https://images.pexels.com/photos/7793691/pexels-photo-7793691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Team celebrating global expansion",
  },
];

const values = [
  {
    icon: "Shield",
    title: "Radical Trust",
    description:
      "We believe transparency is the foundation of every successful partnership. Our AI is open-book — every decision is explainable and every dollar is accounted for.",
    image:
      "https://images.pexels.com/photos/15543048/pexels-photo-15543048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
    alt: "Team values whiteboard session",
    tags: ["Transparency", "Open AI", "Accountability"],
  },
  {
    icon: "Lightbulb",
    title: "Pure Innovation",
    description:
      "We don't follow trends; we set them. Our engineering culture is obsessed with pushing machine learning to its limits to solve real business problems.",
    image:
      "https://images.pexels.com/photos/17737193/pexels-photo-17737193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
    alt: "Colleagues collaborating on innovation",
    tags: ["Machine Learning", "R&D", "Engineering"],
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description:
      "Scale beyond borders. Our platform empowers businesses to connect with partners across 50+ countries instantly with multi-currency payout support.",
    image:
      "https://images.pexels.com/photos/819087/pexels-photo-819087.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
    alt: "Globe representing global reach",
    tags: ["50+ Countries", "Multi-Currency", "Global"],
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Ex-Google. Led performance marketing for 7 years before founding GrowthPlatform.",
    avatar:
      "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
  },
  {
    name: "Marcus Thorne",
    role: "CTO",
    bio: "Ex-Meta engineer. Built the AI infrastructure powering 2M+ campaigns per month.",
    avatar:
      "https://images.pexels.com/photos/16970452/pexels-photo-16970452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    bio: "Previously led product at two unicorn SaaS companies. Obsessed with UX that converts.",
    avatar:
      "https://images.pexels.com/photos/7172996/pexels-photo-7172996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
  },
  {
    name: "David Park",
    role: "Chief Revenue Officer",
    bio: "Scaled revenue from $2M to $50M ARR in under 3 years across B2B SaaS.",
    avatar:
      "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
  },
];

const stats = [
  { icon: Users, value: "2,000+", label: "Enterprise Clients" },
  { icon: TrendingUp, value: "$120M+", label: "Revenue Generated" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Award, value: "98%", label: "Client Retention" },
];

const perks = [
  "Unlimited PTO & flexible remote work",
  "Competitive equity packages",
  "World-class health & dental coverage",
  "$5,000 annual learning budget",
  "Monthly wellness stipend",
  "Global team retreats twice a year",
];

const heroImages = [
  "https://images.pexels.com/photos/6805161/pexels-photo-6805161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500",
  "https://images.pexels.com/photos/5324892/pexels-photo-5324892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=500",
  "https://images.pexels.com/photos/17737193/pexels-photo-17737193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=500",
  "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500",
];

const vision = {
  heading: "Growth Platform Vision",
  subheading: "Building the unified intelligence layer for the commerce ecosystem.",
  sustainableScaling: {
    tag: "Sustainable Scaling",
    title: "Building infrastructure to enable petabytes of data with zero carbon footprint.",
    description: "Our cloud-native architecture is optimized for efficiency at every layer.",
    image: "https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  autonomousGrowth: {
    title: "Autonomous Growth",
    description: "Self-optimizing campaigns that learn from market fluctuations in real-time.",
  },
  aiFirst: {
    title: "AI-First Strategy",
    subtitle: "Every decision, data-driven",
    image: "https://images.pexels.com/photos/8370345/pexels-photo-8370345.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600",
  },
};

const global = {
  heading: "San Francisco",
  city: "San Francisco",
  hubsText: "With hubs in London, Tokyo, Singapore, and Sydney.",
  description:
    "The growth engine for the next generation of enterprise performance marketing, operating at planetary scale.",
  image: "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  stats: [
    { value: "180+", label: "Team Members" },
    { value: "2.5M", label: "Campaigns Run" },
    { value: "50+", label: "Countries" },
    { value: "99.99%", label: "Uptime SLA" },
  ],
  cities: ["🇺🇸 San Francisco", "🇬🇧 London", "🇯🇵 Tokyo", "🇸🇬 Singapore", "🇦🇺 Sydney"],
};

const careers = {
  heading: "Build the Future of Growth",
  subheading: "Growth",
  description:
    "We're a team of builders, dreamers, and data scientists working on problems that matter. Join us and help redefine how the world grows.",
  perks,
  images: [
    "https://images.pexels.com/photos/15543028/pexels-photo-15543028.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400",
    "https://images.pexels.com/photos/6405773/pexels-photo-6405773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400",
    "https://images.pexels.com/photos/6804580/pexels-photo-6804580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400",
    "https://images.pexels.com/photos/7710118/pexels-photo-7710118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400",
  ],
};

/* ─────────────── COMPONENT ─────────────── */

export default function AboutContent() {
  const settings = useLiveSettings({
    aboutPage: {
      mission: "Mission: AI-Powered Growth",
      heading: "Revolutionizing Growth with Intelligence.",
      description:
        "GrowthPlatform exists to bridge the gap between complex data and strategic growth. We build the infrastructure for the next generation of affiliate and referral ecosystems, powered by autonomous AI.",
      primaryCta: "Join Our Mission",
      secondaryCta: "View Careers",
      heroImages,
      stats: [
        { value: "2,000+", label: "Enterprise Clients" },
        { value: "$120M+", label: "Revenue Generated" },
        { value: "50+", label: "Countries Served" },
        { value: "98%", label: "Client Retention" },
      ],
      timeline,
      values,
      vision,
      global,
      careers,
    },
    team: team,
  });

  const about = settings.aboutPage || {};
  const liveTeam = settings.team || [];

  const heroImg = about.heroImages?.length ? about.heroImages : heroImages;
  const heroStats = about.stats?.length ? about.stats : stats;
  const liveTimeline = about.timeline?.length ? about.timeline : timeline;
  const liveValues = about.values?.length ? about.values : values;
  const v = about.vision || vision;
  const g = about.global || global;
  const c = about.careers || careers;
  const livePerks = c.perks?.length ? c.perks : perks;
  const careerImages = c.images?.length ? c.images : careers.images;

  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO — split layout with real office image
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-0 bg-white overflow-hidden">

        {/* Soft grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container-custom w-full">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[calc(92vh-6rem)]">

            {/* Left — copy */}
            <div className="flex flex-col justify-center py-16 pr-0 lg:pr-16 relative z-10">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/6 border border-primary/12 rounded-full px-4 py-1.5 mb-6 w-fit"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-semibold text-primary tracking-wide">
                  {about.mission}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-gray-900 leading-[1.08] tracking-tight"
              >
                {about.heading || "Revolutionizing Growth with Intelligence."}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg"
              >
                {about.description || "GrowthPlatform exists to bridge the gap between complex data and strategic growth. We build the infrastructure for the next generation of affiliate and referral ecosystems, powered by autonomous AI."}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-900/10"
                >
                  {about.primaryCta || "Join Our Mission"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#team"
                  className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all active:scale-95"
                >
                  {about.secondaryCta || "View Careers"}
                </Link>
              </motion.div>

              {/* Mini stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-gray-100"
              >
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — tall image collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="hidden lg:grid grid-cols-2 gap-3 py-8 self-stretch"
            >
              {/* Tall left column */}
              <div className="flex flex-col gap-3">
                <div className="flex-1 rounded-2xl overflow-hidden min-h-[260px]">
                  <img
                    src={heroImg[0]}
                    alt="GrowthPlatform team collaborating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
                <div className="h-44 rounded-2xl overflow-hidden">
                  <img
                    src={heroImg[1]}
                    alt="Team strategy meeting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Right column — offset downward */}
              <div className="flex flex-col gap-3 mt-10">
                <div className="h-44 rounded-2xl overflow-hidden">
                  <img
                    src={heroImg[2]}
                    alt="Colleagues working on laptop"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden min-h-[260px]">
                  <img
                    src={heroImg[3]}
                    alt="GrowthPlatform engineering team"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badge on the collage */}
              <div className="absolute -bottom-0 right-0 col-span-2" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STORY TIMELINE — alternating real images
      ══════════════════════════════════════════ */}
      <section id="story" className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              From Garage to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Global Powerhouse
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              A decade of relentless innovation, backed by a team obsessed with redefining the growth industry.
            </p>
          </div>

          {/* Timeline items — alternating */}
          <div className="space-y-24">
            {liveTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-[340px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Year badge overlay */}
                    <div className="absolute top-5 left-5 bg-white rounded-xl px-4 py-2 shadow-lg">
                      <span className="text-2xl font-black text-primary">{item.year}</span>
                    </div>
                  </div>
                  {/* Decorative dot */}
                  <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/5 -z-10" />
                </div>

                {/* Copy */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-xs font-bold text-primary">{item.year} Milestone</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALUES — ServiceCategoryCards
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">

          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Stand For
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {liveValues.map((val, i) => {
              const Icon = VALUE_ICON_MAP[val.icon] || Shield;
              return (
                <ServiceCategoryCard
                  key={val.title}
                  title={val.title}
                  description={val.description}
                  tags={val.tags}
                  icon={Icon}
                  href="/about"
                  color={getCardColor(i)}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISION — split bento grid with real photos
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">

          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Vision
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              {v.heading || "Growth Platform"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                {v.subheading ? "Vision" : ""}
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              Building the unified intelligence layer for the commerce ecosystem.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">

            {/* Large left card — Sustainable Scaling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group"
            >
              <img
                src={v.sustainableScaling?.image}
                alt="Sustainable business scaling team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-white/25">
                  {v.sustainableScaling?.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {v.sustainableScaling?.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {v.sustainableScaling?.description}
                </p>
              </div>
            </motion.div>

            {/* Top-right — Autonomous Growth (dark) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary rounded-2xl p-7 flex flex-col justify-between overflow-hidden relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{v.autonomousGrowth?.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {v.autonomousGrowth?.description}
                </p>
              </div>
            </motion.div>

            {/* Bottom-right — AI photo card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src={v.aiFirst?.image}
                alt="Innovation and technology strategy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-bold text-base">{v.aiFirst?.title}</p>
                <p className="text-white/70 text-xs mt-0.5">{v.aiFirst?.subtitle}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TEAM — full-bleed cards with real photos
      ══════════════════════════════════════════ */}
      {liveTeam.length > 0 && (
      <section id="team" className="py-20 md:py-28 bg-white">
        <div className="container-custom">

          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Visionaries
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              Our team brings together decades of expertise in AI, growth marketing, and platform engineering.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {liveTeam.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group w-full max-w-sm"
              >
                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5]">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white/80 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          GLOBAL NETWORK — hero photo + stats
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">

          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Global Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Headquartered in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                {g.city}
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              {g.hubsText}
            </p>
          </div>

          {/* Full-width photo with dark overlay stats */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/15">
            <img
              src={g.image}
              alt="GrowthPlatform global office"
              className="w-full h-[480px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/50 to-transparent" />

            {/* Stats overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-16 w-full md:w-3/5">
                <h3 className="text-3xl font-bold text-white mb-2">{g.heading ? `Our Global Presence` : "Our Global Presence"}</h3>
                <p className="text-white/65 text-base mb-10 max-w-md">
                  {g.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {(g.stats || []).map((s) => (
                    <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15">
                      <p className="text-2xl font-black text-white">{s.value}</p>
                      <p className="text-white/60 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Office location chips */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {(g.cities || []).map((city) => (
              <span key={city} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2 rounded-full shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAREERS — real team culture photo + perks
      ══════════════════════════════════════════ */}
      <section id="careers" className="py-20 md:py-28 bg-white">
        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy & perks */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Careers
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                {c.heading?.includes("Growth") ? (
                  <>
                    Build the Future of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                      Growth
                    </span>
                  </>
                ) : (
                  c.heading
                )}
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                {c.description}
              </p>

              <ul className="space-y-3 mb-8">
                {livePerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{perk}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all active:scale-95"
              >
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right — real office culture images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-56">
                  <img
                    src={careerImages[0]}
                    alt="Team values session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36">
                  <img
                    src={careerImages[1]}
                    alt="Team celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-36">
                  <img
                    src={careerImages[2]}
                    alt="Team fun at office"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-56">
                  <img
                    src={careerImages[3]}
                    alt="Team success celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
