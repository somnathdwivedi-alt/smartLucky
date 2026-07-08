"use client";

/**
 * GrowthCard — "food-card" style
 *
 * Layout:
 *  ┌──────────────────────────────┐
 *  │   Featured Image  [BADGE]    │  ← 50-55% height, rounded-[16px], badge bottom-left
 *  ├──────────────────────────────┤
 *  │  Title                       │  ← bold, 16-17px
 *  │  Description  (2 lines)      │  ← gray, 12-13px
 *  │                 [Order now →] │  ← right-aligned pill CTA
 *  └──────────────────────────────┘
 */

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface GrowthCardProps {
  /** Top image URL (real photo) */
  image?: string;
  imageAlt?: string;
  /** Floating badge over image — e.g. metric, price, category */
  badge?: string;
  /** Badge accent colour key */
  badgeVariant?: "dark" | "blue" | "emerald" | "orange" | "violet" | "rose";
  /** Fallback icon shown when no image */
  icon?: LucideIcon;
  /** Icon container colour when used as fallback */
  iconColor?: string;
  /** Card title */
  title: string;
  /** 2-line description */
  description: string;
  /** CTA label */
  ctaLabel?: string;
  /** CTA href */
  href?: string;
  /** Stagger delay index */
  index?: number;
  /** Extra wrapper className */
  className?: string;
}

const badgeStyles: Record<string, string> = {
  dark:    "bg-gray-900/80  text-white",
  blue:    "bg-blue-600/90  text-white",
  emerald: "bg-emerald-600/90 text-white",
  orange:  "bg-orange-500/90 text-white",
  violet:  "bg-violet-600/90 text-white",
  rose:    "bg-rose-600/90  text-white",
};

const iconFallbackColors: Record<string, string> = {
  blue:    "bg-blue-100    text-blue-600",
  violet:  "bg-violet-100  text-violet-600",
  emerald: "bg-emerald-100 text-emerald-600",
  orange:  "bg-orange-100  text-orange-600",
  rose:    "bg-rose-100    text-rose-600",
  cyan:    "bg-cyan-100    text-cyan-600",
  amber:   "bg-amber-100   text-amber-600",
  indigo:  "bg-indigo-100  text-indigo-600",
  teal:    "bg-teal-100    text-teal-600",
  pink:    "bg-pink-100    text-pink-600",
};

export default function GrowthCard({
  image,
  imageAlt = "",
  badge,
  badgeVariant = "dark",
  icon: Icon,
  iconColor = "blue",
  title,
  description,
  ctaLabel = "Learn More",
  href = "/services",
  index = 0,
  className = "",
}: GrowthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.055, 0.44) }}
      className={`group flex flex-col bg-white rounded-[22px] border border-[#EAEAEA] shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_0_rgba(0,0,0,0.10)] hover:-translate-y-[3px] transition-all duration-300 ${className}`}
      style={{ padding: "14px" }}
    >
      {/* ═══════════════════════════════
          IMAGE AREA  (≈52% card height)
      ═══════════════════════════════ */}
      <div className="relative rounded-[16px] overflow-hidden mb-[14px] flex-shrink-0" style={{ height: "168px" }}>
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          /* Icon fallback when no photo */
          <div className={`w-full h-full flex items-center justify-center ${iconFallbackColors[iconColor] ?? "bg-gray-100 text-gray-400"} opacity-60`}>
            {Icon && <Icon className="w-14 h-14" />}
          </div>
        )}

        {/* Dark scrim so badge is always readable */}
        {image && (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Floating badge — bottom-left */}
        {badge && (
          <span className={`absolute bottom-3 left-3 ${badgeStyles[badgeVariant]} text-[11px] font-semibold px-2.5 py-1 rounded-[7px] backdrop-blur-sm shadow-md`}>
            {badge}
          </span>
        )}
      </div>

      {/* ═══════════════════════════════
          PRODUCT INFO
      ═══════════════════════════════ */}
      <div className="flex flex-col flex-1 px-1">
        {/* Title */}
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-[6px] line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-[16px]">
          {description}
        </p>

        {/* ═══════════════════════════════
            BOTTOM CTA — right-aligned pill
        ═══════════════════════════════ */}
        <div className="flex items-center justify-end">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 text-white text-[12px] font-semibold px-4 py-2 rounded-full transition-all duration-200 active:scale-95 group-hover:gap-2 shadow-sm"
          >
            {ctaLabel}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
