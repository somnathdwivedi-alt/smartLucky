"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Brain, TrendingUp, Users } from "lucide-react";
import { allPosts, type BlogPost } from "@/data/blogs";
import { LucideIcon } from "lucide-react";

/* Category icon map */
const categoryIconMap: Record<string, LucideIcon> = {
  "AI & Marketing": Brain,
  "Analytics": TrendingUp,
  "Affiliate": Users,
  "SEO": TrendingUp,
  "Email": Brain,
};

/* Only show first 3 posts on homepage */
const articles = allPosts.slice(0, 3);

/* ─── BLOG CARD ─── */
function BlogCard({ article, index }: { article: BlogPost; index: number }) {
  const CatIcon = categoryIconMap[article.category] ?? Brain;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.42, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-[20px] border border-[#EAEAEA] overflow-hidden shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.13)] hover:-translate-y-1.5 transition-all duration-350"
    >
      {/* ── Real photo ── */}
      <Link href={`/blog/${article.slug}`} className="block relative overflow-hidden flex-shrink-0" style={{ height: "200px" }}>
        <img
          src={article.coverImage}
          alt={article.coverImageAlt}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-600"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent" />

        {/* Category — top-left */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 ${article.categoryBg} ${article.categoryColor} ${article.categoryBorder} border text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-opacity-90`}>
            <CatIcon className="w-3 h-3" />
            {article.category}
          </span>
        </div>

        {/* Read time — top-right */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 bg-gray-900/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </Link>

      {/* ── Text body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{article.date}</span>
        </div>

        {/* Title */}
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        {/* Excerpt — full visible above button */}
        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>

        {/* Author + CTA */}
        <div className="flex items-center justify-between pt-3.5 border-t border-[#F0F0F0]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
              <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-[11.5px] font-bold text-gray-800 leading-none">{article.author.name}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{article.author.role.split(",")[0]}</p>
            </div>
          </div>

          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 text-white text-[11px] font-semibold px-3.5 py-2 rounded-full transition-all duration-200 active:scale-95 group-hover:gap-2 shadow-sm"
          >
            Read Article
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── SECTION ─── */
export default function BlogSection() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-label="Latest articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">Blog</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Insights</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm">Expert strategies and frameworks from GrowthPlatform&apos;s growth practitioners.</p>
          </div>
          <Link href="/resources" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm flex-shrink-0">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <BlogCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
