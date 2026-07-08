"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Brand logos — NO cards, NO boxes, NO borders
   Just bare logo images arranged in zigzag rows
───────────────────────────────────────────── */
interface Brand {
  name: string;
  logo: string;
  width: number;   // display width in px
}

const brands: Brand[] = [
  { name: "Google",     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",              width: 72 },
  { name: "Meta",       logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",      width: 68 },
  { name: "HubSpot",    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",                  width: 80 },
  { name: "Microsoft",  logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",     width: 90 },
  { name: "Amazon",     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",                   width: 72 },
  { name: "Adobe",      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg", width: 70 },
  { name: "Shopify",    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",             width: 76 },
  { name: "Slack",      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",       width: 62 },
  { name: "Stripe",     logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",  width: 56 },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",          width: 90 },
  { name: "Netflix",    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",             width: 70 },
  { name: "Airbnb",     logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",        width: 76 },
  { name: "Atlassian",  logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Atlassian-logo.svg",               width: 82 },
  { name: "Zoom",       logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Zoom_Communications_Logo.svg",     width: 66 },
  { name: "Notion",     logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",              width: 26 },
  { name: "Figma",      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",                   width: 24 },
  { name: "Spotify",    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",    width: 24 },
  { name: "LinkedIn",   logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",       width: 24 },
];

/* Split into rows of N */
const ROW_SIZE = 6;
function makeRows<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function ClientLogos() {
  const rows = makeRows(brands, ROW_SIZE);

  return (
    <section
      className="py-8 md:py-10 bg-white border-y border-gray-100"
      aria-label="Trusted by leading companies"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-7"
        >
          Powering growth for the world&apos;s leading tech ecosystems
        </motion.p>

        {/* ── Zigzag bare-logo rows ── */}
        <div className="flex flex-col gap-y-6">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`
                flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4
                ${ri % 2 === 1 ? "sm:translate-x-[44px]" : ""}
              `}
            >
              {row.map((brand, bi) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 0.35,
                    delay: ri * 0.06 + bi * 0.04,
                  }}
                  /* No card. Just the logo, with opacity on hover */
                  className="flex items-center justify-center opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    title={brand.name}
                    loading="lazy"
                    style={{
                      width: brand.width,
                      height: "auto",
                      maxHeight: 22,
                      objectFit: "contain",
                      display: "block",
                    }}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                      const parent = img.parentElement;
                      if (parent && !parent.querySelector("b")) {
                        const b = document.createElement("b");
                        b.style.cssText = "font-size:12px;color:#9ca3af;font-weight:700;letter-spacing:0.02em";
                        b.textContent = brand.name.toUpperCase();
                        parent.appendChild(b);
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[11px] text-gray-400 mt-7"
        >
          Trusted by{" "}
          <span className="font-semibold text-gray-600">2,000+</span> enterprise teams in{" "}
          <span className="font-semibold text-gray-600">50+</span> countries
        </motion.p>
      </div>
    </section>
  );
}
