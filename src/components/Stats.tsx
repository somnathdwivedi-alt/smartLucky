"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { BarChart3, Users, TrendingUp, Globe } from "lucide-react";

const stats = [
  {
    icon: BarChart3,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    sublabel: "Across 20+ industries",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    accentBg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Users,
    value: 250,
    suffix: "+",
    label: "Active Clients",
    sublabel: "From 50+ countries",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    accentBg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Retention",
    sublabel: "Year over year avg",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    accentBg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Globe,
    value: 120,
    prefix: "$",
    suffix: "M+",
    label: "Revenue Generated",
    sublabel: "For clients worldwide",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    accentBg: "bg-orange-50",
    border: "border-orange-100",
  },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white" aria-label="Company statistics">
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Proven at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Enterprise Scale
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              className="flex flex-col bg-white rounded-[22px] border border-[#EAEAEA] shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_0_rgba(0,0,0,0.10)] hover:-translate-y-[3px] transition-all duration-300"
              style={{ padding: "14px" }}
            >
              {/* Image / colour area */}
              <div
                className={`relative rounded-[16px] overflow-hidden flex-shrink-0 mb-[14px] flex flex-col items-center justify-center ${stat.accentBg}`}
                style={{ height: "130px" }}
              >
                {/* Big icon as visual */}
                <div className={`w-16 h-16 rounded-2xl ${stat.iconBg} flex items-center justify-center mb-2`}>
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
                {/* Animated count as the "price badge" */}
                <span className={`absolute bottom-3 left-3 bg-gray-900/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-[7px]`}>
                  {inView ? (
                    <>
                      {stat.prefix ?? ""}
                      <CountUp end={stat.value} duration={2.2} separator="," />
                      {stat.suffix}
                    </>
                  ) : (
                    <>{stat.prefix ?? ""}0{stat.suffix}</>
                  )}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 px-1">
                <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-[6px]">
                  {stat.label}
                </h3>
                 <p className="text-[13px] text-gray-400 leading-relaxed flex-1 mb-[16px]">
                   {stat.sublabel}
                 </p>
                {/* Right-aligned CTA matching spec */}
                <div className="flex items-center justify-end">
                  <span className="inline-flex items-center gap-1 bg-gray-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full">
                    Verified ✓
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
