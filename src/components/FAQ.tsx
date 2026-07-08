"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  {
    question: "What services does GrowthPlatform offer?",
    answer:
      "We offer a comprehensive suite of digital marketing services including SEO optimization, paid advertising (Google Ads, Meta Ads, YouTube Ads), affiliate marketing, performance marketing, social media marketing, email marketing, content marketing, marketing automation, web development, and more. Our AI-powered platform helps optimize every aspect of your marketing funnel.",
    category: "General",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary by service and industry. SEO typically shows measurable results within 90 days. Paid advertising can generate leads within the first week. Affiliate marketing programs usually see significant growth within 2-3 months. We provide regular reporting so you can track progress from day one.",
    category: "Results",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer three main tiers: Starter ($2,500/month), Professional ($7,500/month), and Enterprise (custom pricing). All plans include a 30-day money-back guarantee. We also offer performance-based pricing models where our fees are tied to your growth metrics.",
    category: "Pricing",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes! While we specialize in enterprise clients, our Starter plan is designed specifically for small businesses and startups. We believe every business deserves access to world-class marketing tools and expertise, regardless of size.",
    category: "General",
  },
  {
    question: "How does your AI optimization work?",
    answer:
      "Our proprietary AI models analyze millions of data points across your campaigns to predict trends, optimize bids in real-time, identify high-value audience segments, and automate creative testing. This results in better performance with less manual effort.",
    category: "Technology",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we'll prorate the difference.",
    category: "Pricing",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "All plans include dedicated account management. Starter plans get email support with 24-hour response times. Professional plans get priority support with 4-hour response times. Enterprise plans get 24/7 support with a dedicated account manager and team.",
    category: "Support",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Yes, our Enterprise plan includes custom integrations with your existing tech stack. We can integrate with most CRMs, analytics platforms, e-commerce systems, and custom APIs. Our team handles the entire integration process.",
    category: "Technology",
  },
];

const categories = ["All", "General", "Pricing", "Results", "Technology", "Support"];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-gray-50" aria-label="Frequently asked questions">
      <div className="container-custom max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={activeIndex === index}
              >
                <span className="text-base font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
