"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Target, Shield, Database, Layers, Globe, Zap } from "lucide-react";
import ServiceCategoryCard from "@/components/ui/ServiceCategoryCard";
import { getCardColor } from "@/lib/cardColors";

const features = [
  {
    icon: BarChart3,
    title: "Marketing Dashboard",
    description: "Unified command center for every campaign, partner, and dollar. Real-time attribution across your entire funnel.",
    tags: ["Real-Time", "Attribution", "Analytics"],
    image: "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
  },
  {
    icon: Users,
    title: "Affiliate Portal",
    description: "Seamless onboarding and tracking for your global partner network with automated payouts.",
    tags: ["Partners", "Payouts", "Tracking"],
    image: "https://images.pexels.com/photos/7693686/pexels-photo-7693686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
  },
  {
    icon: Target,
    title: "Campaign Manager",
    description: "Automated asset deployment and A/B testing at scale across multiple channels simultaneously.",
    tags: ["A/B Testing", "Automation", "Multi-Channel"],
    image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
  },
];

const layers = [
  { icon: Zap,      title: "UX Experience Layer",        color: "bg-blue-500",   width: "w-full"  },
  { icon: Database, title: "AI Optimization Engine",     color: "bg-primary",    width: "w-[92%]" },
  { icon: Layers,   title: "Integration Services API",   color: "bg-purple-500", width: "w-[84%]" },
  { icon: Globe,    title: "Distributed Database Cluster",color: "bg-indigo-500", width: "w-[76%]" },
  { icon: Shield,   title: "Global Edge Infrastructure", color: "bg-gray-600",   width: "w-[68%]" },
];

const coreEngines = [
  {
    icon: BarChart3,
    title: "Marketing Dashboard",
    description: "Consolidate data from every channel into a single AI-powered command center for your marketing stack.",
    tags: ["Unified Data", "Multi-Channel", "AI Insights"],
  },
  {
    icon: Users,
    title: "Affiliate Portal",
    description: "Whitelist experience for your partners with automated recruitment and performance tracking engines.",
    tags: ["Recruitment", "Performance", "Payouts"],
  },
  {
    icon: Target,
    title: "Campaign Manager",
    description: "Deploy multi-channel campaigns across your ecosystem with drag-and-drop orchestration tools.",
    tags: ["Drag & Drop", "Orchestration", "Scale"],
  },
];

export default function PlatformPreview() {
  return (
    <section className="py-20 md:py-28 bg-gray-50" aria-label="Platform overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Infrastructure 2.0
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            The Growth Infrastructure for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Modern Enterprise
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Power your scale with AI-driven engines, unified performance dashboards, and a robust global ecosystem.
          </p>
        </div>

        {/* Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl shadow-xl shadow-gray-900/8 border border-gray-100 overflow-hidden"
        >
          {/* Window chrome */}
          <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs text-gray-400 font-medium">GrowthPlatform — Analytics Dashboard</span>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr]">
            {/* Sidebar */}
            <div className="bg-gray-900 p-5 hidden md:block">
              {["Dashboard", "Campaigns", "Affiliates", "Analytics", "Payouts", "Settings"].map((item, i) => (
                <div key={item} className={`px-3 py-2 rounded-lg mb-1 text-sm flex items-center gap-2.5 ${i === 0 ? "bg-white/10 text-white font-medium" : "text-gray-400 hover:text-white cursor-pointer"}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-primary" : "bg-gray-600"}`} />
                  {item}
                </div>
              ))}
            </div>
            {/* Main */}
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "Total Revenue", value: "$1,248,500", change: "+12%" },
                  { label: "New Partners",  value: "3,105",      change: "+18%" },
                  { label: "Partner ROI",   value: "4.1x",       change: "+0.3x" },
                  { label: "Active Progs.", value: "88",          change: "+5" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-3.5">
                    <p className="text-[10px] text-gray-400 mb-1">{s.label}</p>
                    <p className="text-lg font-bold text-gray-900">{s.value}</p>
                    <p className="text-[10px] text-green-600 font-medium">{s.change}</p>
                  </div>
                ))}
              </div>
              <div className="relative rounded-xl overflow-hidden h-44">
                <img
                  src="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=350&w=900"
                  alt="Analytics dashboard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CORE ENGINES — ServiceCategoryCard grid ── */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Powerful Core Engines</h3>
              <p className="text-gray-500 text-sm mt-1">
                Modular infrastructure designed to operate independently or as a unified platform.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {coreEngines.map((engine, i) => (
              <ServiceCategoryCard
                key={engine.title}
                title={engine.title}
                description={engine.description}
                tags={engine.tags}
                icon={engine.icon}
                href="/platform"
                color={getCardColor(i)}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Resilient Layers */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative mt-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Built on Resilient Layers</h3>
              <p className="text-gray-400 mb-8">
                Our stack is engineered for 99.99% uptime, serving the most demanding global enterprises.
              </p>
              {layers.map((layer) => (
                <div key={layer.title} className={`flex items-center gap-3 mb-3 ${layer.width}`}>
                  <div className={`w-8 h-8 ${layer.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <layer.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg px-4 py-2.5">
                    <span className="text-sm font-medium text-gray-300">{layer.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded-xl overflow-hidden h-72 hidden md:block">
              <img
                src="https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=580&w=700"
                alt="Engineering team at work"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
