"use client";

import { allPlatforms } from "@/data/platforms";
import ServiceCategoryCard from "@/components/ui/ServiceCategoryCard";
import { getCardColor } from "@/lib/cardColors";
import { Target, Globe, Layers } from "lucide-react";

export default function PlatformsContent() {
  const getPlatformIcon = (index: number) => {
    const icons = [Target, Globe, Layers];
    return icons[index % icons.length];
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Enterprise Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Powerful Growth Platform
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Select the platform component that best fits your enterprise needs and scale with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPlatforms.map((platform, index) => (
            <ServiceCategoryCard
              key={platform.slug}
              title={platform.title}
              description={platform.subtitle}
              icon={getPlatformIcon(index)}
              href={`/platforms/${platform.slug}`}
              color={getCardColor(index)}
              index={index}
              tags={["Enterprise", "Scalable", "Secure"]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
