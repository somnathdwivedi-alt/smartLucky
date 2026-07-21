"use client";

import Link from "next/link";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { useLiveSettings } from "@/data/live-client";

const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Google Ads", href: "/services#google-ads" },
    { name: "Meta Ads", href: "/services#meta-ads" },
    { name: "Affiliate Marketing", href: "/services#affiliate" },
    { name: "Performance Marketing", href: "/services#performance" },
    { name: "Social Media Marketing", href: "/services#social" },
    { name: "Content Marketing", href: "/services#content" },
    { name: "Email Marketing", href: "/services#email" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/about#careers" },
    { name: "Press", href: "/resources#press" },
    { name: "Partners", href: "/about#partners" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/resources" },
  ],
  resources: [
    { name: "Documentation", href: "/resources#docs" },
    { name: "Guides", href: "/resources#guides" },
    { name: "Case Studies", href: "/resources#cases" },
    { name: "API Reference", href: "/resources#api" },
    { name: "Webinars", href: "/resources#webinars" },
    { name: "Help Center", href: "/resources#help" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
];

const socialIcons: Record<string, React.ReactElement> = {
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

export default function Footer() {
  const settings = useLiveSettings({
    footer: {
      about: "The premium enterprise growth platform for modern marketing leaders. AI-powered digital marketing for global scale.",
      copyright: "© 2024 GrowthPlatform. All rights reserved.",
      columns: [
        { title: "Services", links: footerLinks.services },
        { title: "Company", links: footerLinks.company },
        { title: "Resources", links: footerLinks.resources },
        { title: "Legal", links: footerLinks.legal },
      ],
      social: socialLinks,
    },
  });
  const footer = settings.footer || {};
  const columns = footer.columns && footer.columns.length ? footer.columns : [
    { title: "Services", links: footerLinks.services },
    { title: "Company", links: footerLinks.company },
    { title: "Resources", links: footerLinks.resources },
    { title: "Legal", links: footerLinks.legal },
  ];
  const social = footer.social && footer.social.length ? footer.social : socialLinks;
  const about = footer.about || "The premium enterprise growth platform for modern marketing leaders. AI-powered digital marketing for global scale.";
  const copyright = footer.copyright || "© 2024 GrowthPlatform. All rights reserved.";

  return (
    <footer className="bg-gray-50 border-t border-gray-100" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-gray-900">
                  Smart<span className="text-primary">Lucky</span>
                </span>
              </Link>
              <p className="text-sm text-gray-500 mb-6 max-w-xs">
                {about}
              </p>
              <div className="flex items-center gap-3">
                {social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                    aria-label={social.label}
                  >
                    {socialIcons[social.label]}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={(link as any).label || (link as any).name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {(link as any).label || (link as any).name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Get weekly insights on affiliate networks, referral marketing, and customer acquisition.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-400">
            {copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
