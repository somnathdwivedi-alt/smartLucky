import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat, Mulish } from "next/font/google";
import "./globals.css";

/* ── Montserrat — headings (h1-h6) ── */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* ── Mulish — body / paragraphs ── */
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growthplatform.com"),
  title: {
    default: "GrowthPlatform | Digital Marketing, Affiliate & Advertising Agency",
    template: "%s | GrowthPlatform",
  },
  description:
    "GrowthPlatform provides full-service digital marketing, affiliate marketing, Google Ads, Meta Ads, SEO, email marketing, and performance marketing. AI-powered growth solutions trusted by 2,000+ enterprises worldwide.",
  keywords: [
    "digital marketing",
    "SEO",
    "paid advertising",
    "affiliate marketing",
    "growth strategy",
    "marketing automation",
    "lead generation",
    "conversion optimization",
  ],
  authors: [{ name: "GrowthPlatform" }],
  creator: "GrowthPlatform",
  publisher: "GrowthPlatform",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growthplatform.com",
    siteName: "GrowthPlatform",
    title: "GrowthPlatform | Enterprise Digital Marketing & Growth Agency",
    description:
      "Scale your business with AI-powered digital marketing, SEO, paid advertising, and growth strategy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GrowthPlatform - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthPlatform | Enterprise Digital Marketing & Growth Agency",
    description:
      "Scale your business with AI-powered digital marketing, SEO, paid advertising, and growth strategy.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://growthplatform.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${mulish.variable}`}
    >
      <body className="font-body antialiased text-gray-900 bg-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
