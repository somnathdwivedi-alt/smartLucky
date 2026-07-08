"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search, Target, Settings, Rocket,
  BarChart3, BarChart, ArrowUpRight, Zap,
  LucideIcon, ChevronLeft, ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   STEP DATA
───────────────────────────────────────────── */
interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;   // tailwind bg class for dot / badge
  softBg: string;        // pastel card background
  iconBg: string;
  iconText: string;
  borderColor: string;
}

const steps: Step[] = [
  {
    number: "01", title: "Discovery",
    description: "We audit your existing channels and identify high-leverage growth opportunities through deep AI analysis.",
    icon: Search,
    accentColor: "bg-blue-500", softBg: "bg-blue-50",
    iconBg: "bg-blue-100", iconText: "text-blue-600", borderColor: "border-blue-100",
  },
  {
    number: "02", title: "Strategy",
    description: "Creation of a custom marketing engine including affiliate portals, ad campaigns, and content schedules.",
    icon: Target,
    accentColor: "bg-violet-500", softBg: "bg-violet-50",
    iconBg: "bg-violet-100", iconText: "text-violet-600", borderColor: "border-violet-100",
  },
  {
    number: "03", title: "Design",
    description: "Creative development of landing pages, ad assets, email templates, and complete brand guidelines.",
    icon: Settings,
    accentColor: "bg-pink-500", softBg: "bg-pink-50",
    iconBg: "bg-pink-100", iconText: "text-pink-600", borderColor: "border-pink-100",
  },
  {
    number: "04", title: "Development",
    description: "Technical implementation of tracking, automation, integrations, and campaign infrastructure.",
    icon: Zap,
    accentColor: "bg-amber-500", softBg: "bg-amber-50",
    iconBg: "bg-amber-100", iconText: "text-amber-600", borderColor: "border-amber-100",
  },
  {
    number: "05", title: "Launch",
    description: "Deployment of automation tools and live reporting. Real-time feedback loops begin immediately.",
    icon: Rocket,
    accentColor: "bg-emerald-500", softBg: "bg-emerald-50",
    iconBg: "bg-emerald-100", iconText: "text-emerald-600", borderColor: "border-emerald-100",
  },
  {
    number: "06", title: "Optimization",
    description: "Continuous A/B testing, bid management, and creative optimization based on live performance data.",
    icon: BarChart3,
    accentColor: "bg-cyan-500", softBg: "bg-cyan-50",
    iconBg: "bg-cyan-100", iconText: "text-cyan-600", borderColor: "border-cyan-100",
  },
  {
    number: "07", title: "Reporting",
    description: "Weekly performance reports with actionable insights and forward-looking strategic recommendations.",
    icon: BarChart,
    accentColor: "bg-indigo-500", softBg: "bg-indigo-50",
    iconBg: "bg-indigo-100", iconText: "text-indigo-600", borderColor: "border-indigo-100",
  },
  {
    number: "08", title: "Growth",
    description: "Aggressive expansion of high-ROI channels and continuous optimisation of ad spend efficiency.",
    icon: ArrowUpRight,
    accentColor: "bg-teal-500", softBg: "bg-teal-50",
    iconBg: "bg-teal-100", iconText: "text-teal-600", borderColor: "border-teal-100",
  },
];

/* ─────────────────────────────────────────────
   TIMING
───────────────────────────────────────────── */
const STEP_HOLD   = 2800;   // ms active step stays centred
const LOOP_PAUSE  = 2200;   // ms pause after last step before restart

/* ─────────────────────────────────────────────
   SLOT POSITIONS
   prev = left ghost  |  active = centre  |  next = right ghost
───────────────────────────────────────────── */
type Direction = "left" | "right";

/* card variants — new card enters from right (direction="right") */
function cardVariants(dir: Direction) {
  return {
    enter: {
      x: dir === "right" ? 340 : -340,
      opacity: 0,
      scale: 0.82,
    },
    centre: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
    exit: (d: Direction) => ({
      x: d === "right" ? -340 : 340,
      opacity: 0,
      scale: 0.82,
      transition: { duration: 0.45, ease: "easeIn" as const },
    }),
  };
}

/* ─────────────────────────────────────────────
   GHOST CARD  (prev / next — always visible)
───────────────────────────────────────────── */
function GhostCard({
  step,
  side,
}: {
  step: Step;
  side: "left" | "right";
}) {
  const Icon = step.icon;
  return (
    <div
      className={`
        absolute top-0 w-[260px] sm:w-[280px]
        ${side === "left" ? "right-[calc(50%+130px)] sm:right-[calc(50%+150px)] origin-right" : "left-[calc(50%+130px)] sm:left-[calc(50%+150px)] origin-left"}
        flex flex-col bg-white rounded-2xl border border-[#EAEAEA]
        shadow-[0_2px_16px_0_rgba(0,0,0,0.06)]
        p-5 pointer-events-none
        opacity-30
      `}
      aria-hidden="true"
      style={{ transform: side === "left" ? "scale(0.88) translateX(-16px)" : "scale(0.88) translateX(16px)" }}
    >
      {/* Coloured header strip */}
      <div className={`${step.softBg} ${step.borderColor} border rounded-xl p-4 mb-3`}>
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 ${step.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-5 h-5 ${step.iconText}`} />
          </div>
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${step.iconText}`}>
              Step {step.number}
            </p>
            <h4 className="text-[14px] font-bold text-gray-900">{step.title}</h4>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
        {step.description}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ACTIVE CARD  (centred, full detail)
───────────────────────────────────────────── */
function ActiveCard({ step, dir }: { step: Step; dir: Direction }) {
  const Icon = step.icon;
  const vars = cardVariants(dir);

  return (
    <motion.div
      key={step.number}
      custom={dir}
      variants={vars}
      initial="enter"
      animate="centre"
      exit="exit"
      className={`
        relative z-20 w-[280px] sm:w-[340px] flex-shrink-0 flex flex-col
        bg-white rounded-2xl border border-[#EAEAEA]
        shadow-[0_12px_48px_0_rgba(0,0,0,0.13)]
        overflow-hidden
      `}
    >
      {/* ── Pastel header area ── */}
      <div className={`${step.softBg} p-6 pb-5`}>
        {/* Step badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[10px] font-black uppercase tracking-widest ${step.iconText}`}>
            Step {step.number} / {String(steps.length).padStart(2, "0")}
          </span>
          <span className={`w-2 h-2 rounded-full ${step.accentColor} shadow-lg`} />
        </div>

        {/* Icon + title */}
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${step.iconBg} rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
            <Icon className={`w-6 h-6 ${step.iconText}`} />
          </div>
          <h3 className="text-[22px] font-black text-gray-900 leading-tight">
            {step.title}
          </h3>
        </div>
      </div>

      {/* ── White body ── */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
          {step.description}
        </p>

        {/* Segmented progress bar */}
        <div className="flex items-center gap-1 mt-auto">
          {steps.map((_, i) => {
            const idx = steps.indexOf(step);
            return (
              <div
                key={i}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === idx
                    ? `flex-[3] ${step.accentColor}`
                    : i < idx
                    ? `flex-1 ${step.accentColor} opacity-40`
                    : "flex-1 bg-gray-100"
                }`}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function Process() {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [direction, setDirection]   = useState<Direction>("right");
  const [running, setRunning]       = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  /* ── Advance to next step ── */
  const goNext = useCallback((fromIdx: number) => {
    const nextIdx = fromIdx + 1;

    if (nextIdx < steps.length) {
      setDirection("right");
      setActiveIdx(nextIdx);
      timerRef.current = setTimeout(() => goNext(nextIdx), STEP_HOLD);
    } else {
      /* Reached last step — pause then loop */
      timerRef.current = setTimeout(() => {
        setDirection("right");
        setActiveIdx(0);
        timerRef.current = setTimeout(() => goNext(0), STEP_HOLD);
      }, LOOP_PAUSE);
    }
  }, []);

  /* ── Manual prev / next ── */
  const goManual = (dir: Direction) => {
    clearTimer();
    setDirection(dir);
    setActiveIdx((prev) => {
      const next =
        dir === "right"
          ? (prev + 1) % steps.length
          : (prev - 1 + steps.length) % steps.length;
      timerRef.current = setTimeout(() => goNext(next), STEP_HOLD);
      return next;
    });
  };

  /* ── Start / stop on viewport ── */
  useEffect(() => {
    if (inView && !running) {
      setRunning(true);
      setActiveIdx(0);
      setDirection("right");
      timerRef.current = setTimeout(() => goNext(0), STEP_HOLD);
    }
    if (!inView) {
      clearTimer();
      setRunning(false);
      setActiveIdx(0);
      setDirection("right");
    }
    return clearTimer;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => () => clearTimer(), []);

  const prevStep = steps[(activeIdx - 1 + steps.length) % steps.length];
  const currStep = steps[activeIdx];
  const nextStep = steps[(activeIdx + 1) % steps.length];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-white overflow-hidden"
      aria-label="Our process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            A Blueprint for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Scaling
            </span>
          </h2>
          <p className="mt-3 text-gray-500 text-base">
            From discovery to growth — 8 precision steps, one seamless engine.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            3-SLOT CAROUSEL
        ══════════════════════════════════════════ */}
        <div className="relative flex items-center justify-center" style={{ minHeight: 280 }}>

          {/* ── Left ghost (previous step, faded & scaled down) ── */}
          <div
            className="hidden sm:block"
            style={{
              position: "absolute",
              right: "calc(50% + 140px)",
              top: 0,
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`ghost-left-${prevStep.number}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 0.28, x: 0, scale: 0.86, originX: "right" }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <GhostCard step={prevStep} side="left" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Centre active card ── */}
          <div
            className="relative z-20 flex items-center justify-center"
            style={{ width: "100%", maxWidth: 340 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <ActiveCard key={currStep.number} step={currStep} dir={direction} />
            </AnimatePresence>
          </div>

          {/* ── Right ghost (next step, faded & scaled down) ── */}
          <div
            className="hidden sm:block"
            style={{
              position: "absolute",
              left: "calc(50% + 140px)",
              top: 0,
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`ghost-right-${nextStep.number}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 0.28, x: 0, scale: 0.86, originX: "left" }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <GhostCard step={nextStep} side="right" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Edge fade masks ── */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-30" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-30" />
        </div>

        {/* ── Dot progress + nav buttons ── */}
        <div className="mt-10 flex flex-col items-center gap-5">

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => {
                  const dir: Direction = i > activeIdx ? "right" : "left";
                  clearTimer();
                  setDirection(dir);
                  setActiveIdx(i);
                  timerRef.current = setTimeout(() => goNext(i), STEP_HOLD);
                }}
                aria-label={`Go to step ${s.number}: ${s.title}`}
                className={`rounded-full transition-all duration-350 ${
                  i === activeIdx
                    ? `h-2.5 w-8 ${currStep.accentColor}`
                    : i < activeIdx
                    ? `h-2 w-2 ${currStep.accentColor} opacity-40`
                    : "h-2 w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Step label */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currStep.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className={`text-sm font-bold ${currStep.iconText}`}
            >
              {currStep.number}. {currStep.title}
            </motion.p>
          </AnimatePresence>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => goManual("left")}
              aria-label="Previous step"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#EAEAEA] shadow-sm hover:shadow-md hover:bg-gray-50 transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            <button
              onClick={() => goManual("right")}
              aria-label="Next step"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 shadow-sm hover:bg-gray-700 transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
