"use client";

import { useEffect, useState } from "react";
import { allPlatforms, type PlatformDetail } from "@/data/platforms";
import ServiceCategoryCard from "@/components/ui/ServiceCategoryCard";
import { getCardColor } from "@/lib/cardColors";
import { getAllPlatforms } from "@/data/live";
import { useLiveSettings } from "@/data/live-client";
import { Target, Globe, Layers, BarChart3, Users, Zap, Database, Shield, TrendingUp, Palette, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Target, Globe, Layers, BarChart3, Users, Zap, Database, Shield, TrendingUp, Palette,
};

export default function PlatformsContent() {
  const [platforms, setPlatforms] = useState<PlatformDetail[]>(allPlatforms);
  const settings = useLiveSettings({
    platformsPage: {
      badge: "Enterprise Infrastructure",
      heading: "Powerful Growth Platform",
      subheading: "Select the platform component that best fits your enterprise needs and scale with us.",
      cardTags: ["Enterprise", "Scalable", "Secure"],
      icons: ["Target", "Globe", "Layers"],
    },
  });
  const pp = settings.platformsPage || {};
  const iconNames = pp.icons || ["Target", "Globe", "Layers"];
  const getPlatformIcon = (index: number) => {
    const name = iconNames[index % iconNames.length];
    return ICON_MAP[name] || Target;
  };

  useEffect(() => {
    let active = true;
    getAllPlatforms()
      .then((data) => {
        if (active) setPlatforms(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            {pp.badge || "Enterprise Infrastructure"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {pp.heading || "Powerful Growth Platform"}
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            {pp.subheading || "Select the platform component that best fits your enterprise needs and scale with us."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <ServiceCategoryCard
              key={platform.slug}
              title={platform.title}
              description={platform.subtitle}
              icon={getPlatformIcon(index)}
              href={`/platforms/${platform.slug}`}
              color={getCardColor(index)}
              index={index}
              tags={pp.cardTags || ["Enterprise", "Scalable", "Secure"]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
