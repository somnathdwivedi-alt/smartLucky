"use client";

import { useEffect, useState } from "react";
import { getSiteSettings, type SiteSettings } from "./live";

export type { SiteSettings };

export function useLiveSettings<T>(seed: T): T {
  const [data, setData] = useState<T>(seed);
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const live = await getSiteSettings();
        if (live && Object.keys(live).length) setData((prev) => ({ ...prev, ...live }) as T);
      } catch {
        /* keep seed */
      }
      return () => {
        active = false;
      };
    })();
    return () => {
      active = false;
    };
  }, []);
  return data;
}
