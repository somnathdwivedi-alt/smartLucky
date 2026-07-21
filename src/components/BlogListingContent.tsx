"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Brain, TrendingUp, Users, Search, ChevronRight } from "lucide-react";
import { allPosts, type BlogPost } from "@/data/blogs";
import { getAllPosts } from "@/data/live";
import { LucideIcon } from "lucide-react";

const categoryIconMap: Record<string, LucideIcon> = {
  "AI & Marketing": Brain,
  "Analytics": TrendingUp,
  "Affiliate": Users,
  "SEO": TrendingUp,
  "Email": Brain,
};

function BlogCard({ article, index }: { article: BlogPost; index: number }) {
  const CatIcon = categoryIconMap[article.category] ?? Brain;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.42, delay: Math.min(index * 0.05, 0.4) }}
      className="group flex flex-col bg-white rounded-[20px] border border-[#EAEAEA] overflow-hidden shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.13)] hover:-translate-y-1.5 transition-all duration-350"
    >
      <Link href={`/blog/${article.slug}`} className="block relative overflow-hidden flex-shrink-0" style={{ height: "200px" }}>
        <img
          src={article.coverImage}
          alt={article.coverImageAlt}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-600"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 ${article.categoryBg} ${article.categoryColor} ${article.categoryBorder} border text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-opacity-90`}>
            <CatIcon className="w-3 h-3" />
            {article.category}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 bg-gray-900/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{article.date}</span>
        </div>

        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>

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

export default function BlogListingContent() {
  const [articles, setArticles] = useState<BlogPost[]>(allPosts);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let active = true;
    getAllPosts()
      .then((posts) => {
        if (active) setArticles(posts);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const filtered = articles.filter((a) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="overflow-hidden bg-white">
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold text-primary tracking-wide">Blog · Insights · Thought Leadership</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3rem] font-semibold text-gray-900 tracking-tight leading-[1.12]">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Articles
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
              className="mt-5 text-[15px] text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Expert strategies, frameworks, and insights from GrowthPlatform&apos;s growth practitioners — covering{" "}
              <strong className="text-gray-700">AI & Marketing</strong>,{" "}
              <strong className="text-gray-700">Analytics</strong>,{" "}
              <strong className="text-gray-700">Affiliate</strong>,{" "}
              <strong className="text-gray-700">SEO</strong>, and more.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
              className="mt-8 flex gap-2 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, category, or topic…"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" aria-label="All articles">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {searchQuery ? `Search Results (${filtered.length})` : `All Articles (${filtered.length})`}
              </h2>
              <p className="text-[13px] text-gray-500 mt-1">
                {searchQuery
                  ? `Articles matching "${searchQuery}"`
                  : "In-depth guides and analysis from our growth team"}
              </p>
            </div>
          </div>

          {filtered.length > 0 ? (
            <motion.div key={searchQuery} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((article, i) => (
                <BlogCard key={article.slug} article={article} index={i} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No articles found</p>
              <p className="text-sm mt-1">Try a different keyword</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all shadow-sm">
              View All Articles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
