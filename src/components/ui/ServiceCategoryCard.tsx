"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import type { CardColor } from "@/lib/cardColors";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export interface ServiceCategoryCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  href?: string;
  /** Pastel palette key — each card gets a distinct color */
  color?: CardColor;
  index?: number;
}

/* ─────────────────────────────────────────────
   Color map — bg + tag-bg + icon-color
───────────────────────────────────────────── */
const colorMap: Record<
  CardColor,
  { section: string; tagBg: string; tagText: string; iconBg: string; iconText: string }
> = {
  blue:    { section: "bg-[#EEF4FF]", tagBg: "bg-[#DBEAFE]",  tagText: "text-blue-700",   iconBg: "bg-blue-100",   iconText: "text-blue-600"   },
  violet:  { section: "bg-[#F3EEFF]", tagBg: "bg-[#EDE9FE]",  tagText: "text-violet-700", iconBg: "bg-violet-100", iconText: "text-violet-600" },
  emerald: { section: "bg-[#ECFDF5]", tagBg: "bg-[#D1FAE5]",  tagText: "text-emerald-700",iconBg: "bg-emerald-100",iconText: "text-emerald-600"},
  orange:  { section: "bg-[#FFF7ED]", tagBg: "bg-[#FFEDD5]",  tagText: "text-orange-700", iconBg: "bg-orange-100", iconText: "text-orange-600" },
  rose:    { section: "bg-[#FFF1F2]", tagBg: "bg-[#FFE4E6]",  tagText: "text-rose-700",   iconBg: "bg-rose-100",   iconText: "text-rose-600"   },
  cyan:    { section: "bg-[#ECFEFF]", tagBg: "bg-[#CFFAFE]",  tagText: "text-cyan-700",   iconBg: "bg-cyan-100",   iconText: "text-cyan-600"   },
  amber:   { section: "bg-[#FFFBEB]", tagBg: "bg-[#FEF3C7]",  tagText: "text-amber-700",  iconBg: "bg-amber-100",  iconText: "text-amber-600"  },
  indigo:  { section: "bg-[#EEF2FF]", tagBg: "bg-[#E0E7FF]",  tagText: "text-indigo-700", iconBg: "bg-indigo-100", iconText: "text-indigo-600" },
  teal:    { section: "bg-[#F0FDFA]", tagBg: "bg-[#CCFBF1]",  tagText: "text-teal-700",   iconBg: "bg-teal-100",   iconText: "text-teal-600"   },
  pink:    { section: "bg-[#FDF2F8]", tagBg: "bg-[#FCE7F3]",  tagText: "text-pink-700",   iconBg: "bg-pink-100",   iconText: "text-pink-600"   },
  lime:    { section: "bg-[#F7FEE7]", tagBg: "bg-[#ECFCCB]",  tagText: "text-lime-700",   iconBg: "bg-lime-100",   iconText: "text-lime-600"   },
  sky:     { section: "bg-[#F0F9FF]", tagBg: "bg-[#E0F2FE]",  tagText: "text-sky-700",    iconBg: "bg-sky-100",    iconText: "text-sky-600"    },
};

/* ─────────────────────────────────────────────
   The Card
───────────────────────────────────────────── */
export default function ServiceCategoryCard({
  title,
  description,
  tags,
  icon: Icon,
  href = "/services",
  color = "blue",
  index = 0,
}: ServiceCategoryCardProps) {
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.42, delay: Math.min(index * 0.055, 0.45) }}
      className="group flex flex-col bg-white rounded-[20px] border border-[#E8E8E8] shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
      style={{ padding: "14px" }}
    >
      {/* ═══════════════════════════════════════
          COLORED CONTENT AREA  (≈75–80% height)
      ═══════════════════════════════════════ */}
      <div
        className={`flex flex-col flex-1 ${c.section} rounded-[14px] mb-[13px]`}
        style={{ padding: "20px" }}
      >
        {/* Icon */}
        <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${c.iconText}`} />
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-bold text-gray-900 leading-snug mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-[7px] mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`inline-block ${c.tagBg} ${c.tagText} text-[11px] font-semibold px-2.5 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          FOOTER ACTION  (white row)
      ═══════════════════════════════════════ */}
      <div className="flex items-center justify-between px-1">
        <Link
          href={href}
          className="text-[14px] font-semibold text-gray-800 group-hover:text-gray-900 transition-colors"
        >
          Explore
        </Link>

        {/* Arrow button */}
        <Link
          href={href}
          aria-label={`Explore ${title}`}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-900 hover:text-white rounded-[9px] border border-[#E8E8E8] shadow-sm transition-all duration-200 group/btn"
        >
          <ArrowRight className="w-4 h-4 text-gray-600 group-hover/btn:text-white transition-colors" />
        </Link>
      </div>
    </motion.div>
  );
}
