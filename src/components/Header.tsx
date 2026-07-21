"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowRight,
  BarChart3, Users, Globe, Target,
  Zap, Palette, TrendingUp, Layers,
} from "lucide-react";
import { useLiveSettings } from "@/data/live-client";

/* ─── Mega-menu data ─── */
const services = [
  {
    category: "Search & SEO",
    icon: Target,
    items: [
      { name: "SEO Optimization", href: "/services/seo-optimization" },
      { name: "Technical SEO", href: "/services/technical-seo" },
      { name: "Local SEO", href: "/services/local-seo" },
      { name: "Content Marketing", href: "/services/content-marketing" },
    ],
  },
  {
    category: "Paid Advertising",
    icon: TrendingUp,
    items: [
      { name: "Google Ads", href: "/services/google-ads" },
      { name: "Meta Ads", href: "/services/meta-ads" },
      { name: "YouTube Ads", href: "/services/youtube-ads" },
      { name: "Programmatic Ads", href: "/services/programmatic" },
    ],
  },
  {
    category: "Growth Marketing",
    icon: BarChart3,
    items: [
      { name: "Affiliate Marketing", href: "/services/affiliate" },
      { name: "Performance Marketing", href: "/services/performance" },
      { name: "Lead Generation", href: "/services/lead-gen" },
      { name: "CRO", href: "/services/cro" },
    ],
  },
  {
    category: "Creative & Dev",
    icon: Palette,
    items: [
      { name: "Website Design", href: "/services/web-design" },
      { name: "Web Development", href: "/services/web-dev" },
      { name: "Landing Pages", href: "/services/landing-pages" },
      { name: "UI/UX Design", href: "/services/ui-ux" },
    ],
  },
];

const solutions = [
  { name: "Enterprise", href: "/solutions/enterprise", icon: Globe },
  { name: "SaaS",       href: "/solutions/saas",       icon: Layers },
  { name: "E-commerce", href: "/solutions/ecommerce",  icon: Target },
  { name: "Startups",   href: "/solutions/startups",   icon: Zap },
  { name: "Healthcare", href: "/solutions/healthcare",  icon: Users },
  { name: "Finance",    href: "/solutions/finance",     icon: BarChart3 },
];

/* ══════════════════════════════════════════ */
const seedNav = {
  services: [
    { category: "Search & SEO", icon: "Target", items: [{ name: "SEO Optimization", href: "/services/seo-optimization" }, { name: "Technical SEO", href: "/services/technical-seo" }, { name: "Local SEO", href: "/services/local-seo" }, { name: "Content Marketing", href: "/services/content-marketing" }] },
    { category: "Paid Advertising", icon: "TrendingUp", items: [{ name: "Google Ads", href: "/services/google-ads" }, { name: "Meta Ads", href: "/services/meta-ads" }, { name: "YouTube Ads", href: "/services/youtube-ads" }, { name: "Programmatic Ads", href: "/services/programmatic" }] },
    { category: "Growth Marketing", icon: "BarChart3", items: [{ name: "Affiliate Marketing", href: "/services/affiliate" }, { name: "Performance Marketing", href: "/services/performance" }, { name: "Lead Generation", href: "/services/lead-gen" }, { name: "CRO", href: "/services/cro" }] },
    { category: "Creative & Dev", icon: "Palette", items: [{ name: "Website Design", href: "/services/web-design" }, { name: "Web Development", href: "/services/web-dev" }, { name: "Landing Pages", href: "/services/landing-pages" }, { name: "UI/UX Design", href: "/services/ui-ux" }] },
  ],
  solutions: [
    { name: "Enterprise", href: "/solutions/enterprise", icon: "Globe" },
    { name: "SaaS", href: "/solutions/saas", icon: "Layers" },
    { name: "E-commerce", href: "/solutions/ecommerce", icon: "Target" },
    { name: "Startups", href: "/solutions/startups", icon: "Zap" },
    { name: "Healthcare", href: "/solutions/healthcare", icon: "Users" },
    { name: "Finance", href: "/solutions/finance", icon: "BarChart3" },
  ],
};

const HEADER_ICONS: Record<string, React.ElementType> = {
  Target, TrendingUp, BarChart3, Palette, Globe, Layers, Zap, Users,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const settings = useLiveSettings({ nav: seedNav });
  const navServices = (settings.nav?.services?.length ? settings.nav.services : seedNav.services).map((g) => ({
    ...g,
    icon: HEADER_ICONS[g.icon] || Target,
  }));
  const navSolutions = (settings.nav?.solutions?.length ? settings.nav.solutions : seedNav.solutions).map((s) => ({
    ...s,
    icon: HEADER_ICONS[s.icon] || Globe,
  }));

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  return (
    <>
      {/* ════════════════ DESKTOP HEADER ════════════════ */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link
              href="/"
              aria-label="GrowthPlatform home"
              className="flex items-center gap-2 group flex-shrink-0"
            >
              {/* <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-[8px] flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-4 h-4 text-white" />
              </div> */}
              <span className="text-[17px] font-semibold text-gray-900 tracking-tight font-heading">
                Smart<span className="text-primary">Lucky</span>
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              role="navigation"
              aria-label="Main navigation"
            >
              {/* Platform mega-menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/platforms"
                  className="flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                >
                  Platform
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[660px] bg-white rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-100 p-5"
                    >
                      <div className="grid grid-cols-2 gap-5">
                        {navServices.map((group) => (
                          <div key={group.category}>
                            <div className="flex items-center gap-2 mb-2.5">
                              <group.icon className="w-3.5 h-3.5 text-primary" />
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                {group.category}
                              </span>
                            </div>
                            <div className="space-y-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="group/item flex items-center justify-between px-3 py-2 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                  {item.name}
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  aria-expanded={solutionsOpen}
                  className="flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                >
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl shadow-gray-900/10 border border-gray-100 p-2"
                    >
                      {navSolutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-2.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <item.icon className="w-3.5 h-3.5 text-primary" />
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Static links */}
              {[
                { label: "Resources", href: "/resources" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop CTA (no login, no search) ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-gray-700 transition-all hover:shadow-lg active:scale-95"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════ MOBILE DRAWER ════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-5">
                {/* Drawer header */}
                <div className="flex items-center justify-between mb-7">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 bg-gradient-to-br from-primary to-purple-600 rounded-[7px] flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[15px] font-semibold text-gray-900 font-heading">
                      Growth<span className="text-primary">Platform</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-50"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="space-y-5">
                  {/* Platform */}
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Platform
                    </p>
                    <div className="space-y-0.5">
                      {navServices.flatMap((g) =>
                        g.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Solutions
                    </p>
                    <div className="space-y-0.5">
                      {navSolutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Other */}
                  <div className="border-t border-gray-100 pt-4 space-y-0.5">
                    {[
                      { label: "Resources", href: "/resources" },
                      { label: "About", href: "/about" },
                      { label: "Contact", href: "/contact" },
                      { label: "Platform", href: "/platform" },
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA — only Get Started, no login */}
                <div className="mt-7 pt-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center bg-gray-900 text-white px-5 py-3 rounded-full text-[13px] font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
