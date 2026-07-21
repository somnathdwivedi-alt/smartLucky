import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getRelatedPosts } from "@/data/live";
import { type ArticleBlock, type BlogPost } from "@/data/blogs";
import {
  ArrowLeft, Clock, Calendar, Share2, Bookmark,
  ChevronRight, ArrowRight, Tag, User,
} from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

/* ── Dynamic metadata ── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(decodeURIComponent(slug));
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

/* ── Body block renderer ── */
function RenderBlock({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-gray-600 text-[15px] leading-[1.85] mb-6">
          {block.text}
        </p>
      );

    case "heading":
      return block.level === 2 ? (
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4 tracking-tight">
          {block.text}
        </h2>
      ) : (
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-gray-600 leading-relaxed">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-primary pl-6 py-1">
          <p className="text-lg font-semibold text-gray-800 italic leading-relaxed mb-3">
            &ldquo;{block.text}&rdquo;
          </p>
          <footer className="text-sm text-gray-500 font-medium">— {block.attribution}</footer>
        </blockquote>
      );

    case "callout":
      return (
        <div className="my-8 bg-primary/5 border border-primary/15 rounded-2xl p-5">
          <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">
            {block.label}
          </p>
          <p className="text-[14px] text-gray-700 leading-relaxed">{block.text}</p>
        </div>
      );

    case "image":
      return (
        <figure className="my-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={block.url}
              alt={block.alt}
              className="w-full object-cover"
              style={{ maxHeight: "440px" }}
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 text-center text-[12px] text-gray-400 leading-relaxed px-4">
            {block.caption}
          </figcaption>
        </figure>
      );

    default:
      return null;
  }
}

/* ── Related post card ── */
function RelatedCard({ post }: { post: BlogPost | undefined }) {
  if (!post) return null;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden hover:shadow-xl hover:shadow-gray-900/8 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`inline-block ${post.categoryBg} ${post.categoryColor} ${post.categoryBorder} border text-[10px] font-bold px-2.5 py-1 rounded-full`}>
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2">
          <Clock className="w-3 h-3" />
          <span>{post.readTime}</span>
          <span className="text-gray-200">·</span>
          <span>{post.date}</span>
        </div>
        <h4 className="text-[14px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
          {post.title}
        </h4>
        <p className="text-[12px] text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full object-cover" loading="lazy" />
            <span className="text-[11px] font-semibold text-gray-600">{post.author.name}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-primary text-[11px] font-semibold group-hover:gap-2 transition-all">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const related = await getRelatedPosts(post);

  return (
    <main id="main-content" className="bg-white">
      <Header />

      {/* ── HERO COVER ── */}
      <div className="relative w-full pt-20" style={{ height: "min(56vh, 520px)" }}>
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-900/40 to-transparent" />

        {/* Cover text overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-10 pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-block ${post.categoryBg} ${post.categoryColor} ${post.categoryBorder} border text-[11px] font-bold px-3 py-1 rounded-full`}>
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-black text-white leading-tight tracking-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── ARTICLE LAYOUT ── */}
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

          {/* ── MAIN ARTICLE ── */}
          <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8" aria-label="breadcrumb">
              <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/resources" className="hover:text-gray-700 transition-colors">Insights</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gray-700 font-medium truncate">{post.category}</span>
            </nav>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 leading-relaxed mb-8 font-medium">
              {post.subtitle}
            </p>

            {/* Author row */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 mb-8 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm flex-shrink-0">
                  <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-[15px]">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5 max-w-xs line-clamp-1">{post.author.bio}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors" aria-label="Share">
                  <Share2 className="w-4 h-4 text-gray-500" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors" aria-label="Save">
                  <Bookmark className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* ── ARTICLE BODY ── */}
            <div className="prose-custom">
              {post.body.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author bio card */}
            <div className="mt-10 bg-gray-50 rounded-2xl border border-gray-100 p-6 flex gap-5 items-start">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white shadow">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">About the Author</span>
                </div>
                <h4 className="text-[15px] font-bold text-gray-900 mb-1">{post.author.name}</h4>
                <p className="text-sm text-gray-500 mb-1">{post.author.role}</p>
                <p className="text-[13px] text-gray-500 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link href="/resources" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="sticky top-24 space-y-6">
            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {post.body
                    .filter((b): b is Extract<ArticleBlock, { type: "heading" }> => b.type === "heading")
                    .map((b, i) => (
                      <li key={i}>
                        <a
                          href={`#${b.text.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block text-[13px] text-gray-500 hover:text-primary transition-colors py-1 ${b.level === 3 ? "pl-3 border-l-2 border-gray-200" : "font-medium"}`}
                        >
                          {b.text}
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 rounded-2xl p-5 text-white">
              <h3 className="text-[13px] font-bold mb-1">Subscribe to Insights</h3>
              <p className="text-[11px] text-gray-400 mb-4 leading-relaxed">
                Get the latest growth frameworks and strategies delivered weekly.
              </p>
              <input
                type="email"
                placeholder="Work email address"
                className="w-full px-3 py-2.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-gray-500 text-[12px] focus:outline-none focus:ring-2 focus:ring-primary/50 mb-3"
              />
              <button className="w-full bg-primary text-white py-2.5 rounded-xl text-[12px] font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
              <p className="text-[10px] text-gray-600 text-center mt-2">24,000+ readers. Unsubscribe anytime.</p>
            </div>

            {/* Article stats */}
            <div className="bg-white rounded-2xl border border-[#EAEAEA] p-5">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Article Info</h3>
              <div className="space-y-3">
                {[
                  { label: "Read Time", value: post.readTime, icon: Clock },
                  { label: "Published", value: post.date, icon: Calendar },
                  { label: "Category", value: post.category, icon: Tag },
                  { label: "Author", value: post.author.name, icon: User },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Icon className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">{label}</span>
                    </div>
                    <span className="text-[12px] font-semibold text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="py-14 bg-gray-50 border-t border-gray-100">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
                <p className="text-sm text-gray-500 mt-1">Continue reading on similar topics</p>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all">
                All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <RelatedCard key={rel.slug} post={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-14 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Ready to scale your vision?</h2>
          <p className="text-gray-400 text-sm mb-6">Join 500+ industry-leading brands using GrowthPlatform to dominate their markets through precision automation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-primary/25">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
