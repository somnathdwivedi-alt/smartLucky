import { fetchModuleItems, fetchDoc, fetchCollection } from "@/data/db";
import {
  allPosts as seedPosts,
  getPostBySlug as seedGetPost,
  type BlogPost,
  type ArticleBlock,
} from "@/data/blogs";
import {
  allServices as seedServices,
  getServiceBySlug as seedGetService,
  type ServiceDetail,
} from "@/data/services";
import {
  allSolutions as seedSolutions,
  getSolutionBySlug as seedGetSolution,
  type SolutionDetail,
} from "@/data/solutions";
import {
  allPlatforms as seedPlatforms,
  getPlatformBySlug as seedGetPlatform,
  type PlatformDetail,
} from "@/data/platforms";

/* ── BLOGS ───────────────────────────────────
   The ALTFT admin panel stores each blog as an individual
   document under projects/smartlucky/blogs/{id} (the same
   "individual docs" model used for the altftool project).
   We read that collection here and normalise the admin's
   simple blog document into the rich BlogPost shape the
   frontend components expect. Falls back to the static
   seed file when Firestore is empty or unavailable. */

const PLACEHOLDER_COVER =
  "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400";

interface RawBlog {
  id?: string;
  _source?: string;
  heading?: string;
  title?: string;
  slug?: string;
  slugLower?: string;
  category?: string;
  author?: string;
  excerpt?: string;
  description?: string;
  content?: string;
  date?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  status?: string;
  views?: number;
  likesCount?: number;
  commentsCount?: number;
  createdAt?: { toDate?: () => Date } | string | Date;
  updatedAt?: { toDate?: () => Date } | string | Date;
}

type MappedBlog = BlogPost & { status?: string };

/* Stable category → tailwind colour pairing (mirrors seed palette). */
const CATEGORY_PALETTE = [
  { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  { color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
  { color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
  { color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
  { color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
  { color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
];

function categoryStyle(category: string) {
  let hash = 0;
  for (let i = 0; i < category.length; i += 1) {
    hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  }
  return CATEGORY_PALETTE[hash % CATEGORY_PALETTE.length];
}

function isHttpUrl(value?: string): boolean {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

function toISODate(value: unknown): string {
  if (!value) return new Date().toISOString();
  if (typeof value === "string") {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
  }
  if (value && typeof value === "object" && "toDate" in value && typeof (value as { toDate?: unknown }).toDate === "function") {
    return (value as { toDate: () => Date }).toDate().toISOString();
  }
  if (value instanceof Date) return value.toISOString();
  return new Date().toISOString();
}

function formatDisplayDate(value: unknown): string {
  const d = new Date(toISODate(value));
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function estimateReadTime(text: string): string {
  const words = (text || "").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/* Deterministic initials avatar (no upload required from admin). */
function defaultAvatar(name: string): string {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("")
    .toUpperCase();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials || "SL")}&background=0f172a&color=ffffff&size=128&bold=true`;
}

function contentToBlocks(content: string): ArticleBlock[] {
  const paras = (content || "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paras.length === 0) return [{ type: "paragraph", text: content || "" }];
  return paras.map((p) => ({ type: "paragraph", text: p }));
}

function mapBlogDocToPost(raw: RawBlog): MappedBlog {
  const title = raw.heading || raw.title || "Untitled";
  const category = raw.category || "General";
  const style = categoryStyle(category);
  const content = raw.content || raw.description || "";
  const authorName = raw.author || "Smart Lucky Editorial";

  return {
    slug: raw.slug || "",
    category,
    categoryColor: style.color,
    categoryBg: style.bg,
    categoryBorder: style.border,
    readTime: estimateReadTime(content),
    date: formatDisplayDate(raw.date || raw.createdAt),
    publishedAt: toISODate(raw.date || raw.createdAt),
    title,
    subtitle: raw.excerpt || "",
    excerpt: raw.excerpt || title,
    coverImage: isHttpUrl(raw.image) ? raw.image! : PLACEHOLDER_COVER,
    coverImageAlt: raw.imageAlt || title,
    bodyImages: [],
    author: { name: authorName, role: "", avatar: defaultAvatar(authorName), bio: "" },
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    body: contentToBlocks(content),
    relatedSlugs: [],
    status: raw.status || "published",
  };
}

function isBlogDoc(d: RawBlog): boolean {
  return d.id !== "content" && Boolean(d.slug && (d.heading || d.title));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const docs = await fetchCollection<RawBlog>("blogs");
    const mapped = docs
      .filter(isBlogDoc)
      .map(mapBlogDocToPost)
      .filter((p) => p.status === "published" || p.status === undefined);
    if (mapped.length) {
      mapped.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
      return mapped;
    }
    return seedPosts;
  } catch {
    return seedPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}

export async function getRelatedPosts(post: BlogPost): Promise<BlogPost[]> {
  const all = await getAllPosts();
  const bySlug = (post.relatedSlugs || [])
    .map((s) => all.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);
  if (bySlug.length) return bySlug.slice(0, 3);

  // Fallback for admin-authored posts (no curated relatedSlugs):
  // prefer same-category, then fill with any other post.
  const sameCat = all.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = all.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCat, ...others].slice(0, 3);
}

/* ── SERVICES ──────────────────────────────── */
export async function getAllServices(): Promise<ServiceDetail[]> {
  const live = await fetchModuleItems<ServiceDetail>("services");
  return live.length ? live : seedServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetail | undefined> {
  const all = await getAllServices();
  return all.find((s) => s.slug === slug);
}

/* ── SOLUTIONS ─────────────────────────────── */
export async function getAllSolutions(): Promise<SolutionDetail[]> {
  const live = await fetchModuleItems<SolutionDetail>("solutions");
  return live.length ? live : seedSolutions;
}

export async function getSolutionBySlug(slug: string): Promise<SolutionDetail | undefined> {
  const all = await getAllSolutions();
  return all.find((s) => s.slug === slug);
}

/* ── PLATFORMS ────────────────────────────── */
export async function getAllPlatforms(): Promise<PlatformDetail[]> {
  const live = await fetchModuleItems<PlatformDetail>("platforms");
  return live.length ? live : seedPlatforms;
}

export async function getPlatformBySlug(slug: string): Promise<PlatformDetail | undefined> {
  const all = await getAllPlatforms();
  return all.find((p) => p.slug === slug);
}

/* ── SITE SETTINGS (single doc) ───────────── */
export interface SiteSettings {
  hero?: { heading?: string; subheading?: string; primaryCta?: string; secondaryCta?: string };
  stats?: { value: string; prefix?: string; suffix?: string; label: string; sublabel?: string }[];
  clientLogos?: { name: string; src: string; width?: number }[];
  testimonials?: {
    name: string; role: string; company?: string; quote: string; avatar: string;
    metric?: string; metricLabel?: string; location?: string; rating?: number;
  }[];
  servicesGrid?: { icon?: string; title: string; description: string; badge?: string; badgeColor?: string; image: string }[];
  industries?: { name: string; tagline?: string; description: string; stat?: string; statLabel?: string; tags?: string[]; image: string }[];
  portfolio?: {
    industry: string; metric: string; metricLabel: string; timeframe?: string;
    person: string; role: string; image: string; badge: string; badgeVariant?: string; description: string;
  }[];
  faqs?: { question: string; answer: string; category?: string }[];
  team?: { name: string; role: string; avatar: string; bio: string }[];
  footer?: {
    about?: string;
    copyright?: string;
    columns?: { title: string; links: { label: string; href: string }[] }[];
    social?: { label: string; href: string }[];
  };
  nav?: {
    services?: { category: string; items: { name: string; href: string }[] }[];
    solutions?: { name: string; href: string }[];
  };
  cta?: { title?: string; subtitle?: string; primaryCta?: string; secondaryCta?: string };
  newsletter?: { title?: string; subtitle?: string; buttonText?: string; socialProof?: string };
  whyChooseUs?: {
    features?: {
      icon?: string;
      title: string;
      description: string;
      badge?: string;
      stat?: string;
      statLabel?: string;
      image: string;
      badgeColor?: string;
    }[];
    comparisonData?: { feature: string; traditional: string; advantage: string }[];
  };
  process?: {
    steps?: {
      number: string;
      title: string;
      description: string;
      icon: string;
      accentColor?: string;
      softBg?: string;
      iconBg?: string;
      iconText?: string;
      borderColor?: string;
    }[];
  };
  aboutPage?: {
    mission?: string;
    heading?: string;
    description?: string;
    primaryCta?: string;
    secondaryCta?: string;
    heroImages?: string[];
    stats?: { value: string; label: string }[];
    timeline?: {
      year: string;
      title: string;
      description: string;
      image: string;
      alt?: string;
    }[];
    values?: {
      icon?: string;
      title: string;
      description: string;
      image: string;
      alt?: string;
      tags?: string[];
    }[];
    vision?: {
      heading?: string;
      subheading?: string;
      sustainableScaling?: { tag?: string; title?: string; description?: string; image?: string };
      autonomousGrowth?: { title?: string; description?: string };
      aiFirst?: { title?: string; subtitle?: string; image?: string };
    };
    global?: {
      heading?: string;
      city?: string;
      hubsText?: string;
      description?: string;
      image?: string;
      stats?: { value: string; label: string }[];
      cities?: string[];
    };
    careers?: {
      heading?: string;
      subheading?: string;
      description?: string;
      perks?: string[];
      images?: string[];
    };
  };
  servicesPage?: {
    heading?: string;
    subheading?: string;
    seoSection?: {
      heading?: string;
      description?: string;
      image?: string;
      metricBadge?: { icon?: string; value?: string; label?: string; metricLabel?: string };
      statCards?: { value: string; label: string }[];
      checklist?: string[];
    };
    paidPerformance?: {
      heading?: string;
      description?: string;
      image?: string;
      roasTarget?: string;
      roasCurrent?: string;
      checklist?: string[];
      overlayTitle?: string;
      overlayStats?: { value: string; label: string }[];
    };
    affiliateSection?: {
      heading?: string;
      description?: string;
      cards?: {
        icon?: string;
        title: string;
        desc: string;
        stat: string;
        popular?: boolean;
      }[];
      expertSpotlight?: {
        image?: string;
        quote?: string;
        name?: string;
        title?: string;
      };
    };
    aiAutomation?: {
      heading?: string;
      description?: string;
      image?: string;
      overlayItems?: string[];
      checklist?: string[];
      ctaText?: string;
      ctaHref?: string;
    };
    solutionFinder?: {
      heading?: string;
      description?: string;
      industries?: {
        name: string;
        description: string;
        features: string[];
        image: string;
      }[];
    };
  };
  platformsPage?: {
    badge?: string;
    heading?: string;
    subheading?: string;
    cardTags?: string[];
    icons?: string[];
    cta?: {
      title?: string;
      subtitle?: string;
    };
    detailCta?: {
      title?: string;
      description?: string;
      primaryCta?: string;
      secondaryCta?: string;
      primaryHref?: string;
      secondaryHref?: string;
    };
  };
  resourcesPage?: {
    heading?: string;
    subheading?: string;
    heroPills?: { label: string; icon?: string }[];
    searchPlaceholder?: string;
    featured?: {
      main?: {
        image?: string;
        badge?: string;
        badgeText?: string;
        topic?: string;
        title?: string;
        description?: string;
        primaryLabel?: string;
        secondaryLabel?: string;
      };
      sub1?: { image?: string; topic?: string; title?: string; description?: string; buttonLabel?: string };
      sub2?: { image?: string; topic?: string; title?: string; buttonLabel?: string };
    };
    categories?: { id: string; label: string }[];
    resources?: {
      id: string;
      cat: string;
      type: string;
      typeColor?: string;
      typeBg?: string;
      icon?: string;
      title: string;
      description: string;
      topic: string;
      topicColor?: string;
      image: string;
      imageAlt?: string;
      readTime?: string;
      tags?: string[];
      isFree?: boolean;
    }[];
    popular?: { category: string; categoryColor?: string; title: string }[];
    patterns?: {
      metric: string;
      metricLabel: string;
      tag: string;
      tagColor?: string;
      tagBg?: string;
      title: string;
      desc: string;
      img: string;
      alt?: string;
    }[];
    patternsBanner?: { title?: string; subtitle?: string };
    services?: { icon?: string; label: string; href: string }[];
    newsletter?: { heading?: string; description?: string };
  };
  contactPage?: {
    heading?: string;
    subheading?: string;
    address?: string;
    email?: string;
    phone?: string;
    hours?: string;
    successHeading?: string;
    successDescription?: string;
    services?: string[];
  };
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return fetchDoc<SiteSettings>("projects", "smartlucky", "settings", "site");
}



