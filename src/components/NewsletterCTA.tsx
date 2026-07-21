"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { useLiveSettings } from "@/data/live-client";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const settings = useLiveSettings({
    newsletter: {
      title: "Get the Growth Playbook",
      subtitle: "Weekly insights on affiliate networks, referral marketing, and customer acquisition delivered to your inbox.",
      buttonText: "Subscribe",
      socialProof: "Join 24,000+ growth leaders. Unsubscribe anytime.",
    },
  });
  const nl = settings.newsletter || {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 md:py-20 bg-dark relative overflow-hidden" aria-label="Newsletter signup">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob w-[600px] h-[600px] bg-blue-500/10 -top-40 -right-40" />
        <div className="blob w-[500px] h-[500px] bg-purple-500/10 -bottom-20 -left-20" style={{ animationDelay: "-5s" }} />
      </div>

      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-2xl mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              {nl.title}
            </h2>
            <p className="text-gray-400 mb-8">
              {nl.subtitle}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-4"
              >
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">
                  Thanks for subscribing! Check your inbox for the welcome email.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-7 py-3.5 rounded-xl font-medium hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95 whitespace-nowrap"
                >
                  {nl.buttonText}
                </button>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-4">
              {nl.socialProof}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
