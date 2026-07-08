/* ═══════════════════════════════════════════════════════════
   BLOG DATA STORE  — single source of truth for all posts
   Used by:
     • BlogSection.tsx   (homepage preview cards)
     • /blog/[slug]      (full article detail page)
═══════════════════════════════════════════════════════════ */

export interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;   // tailwind text class
  categoryBg: string;      // tailwind bg  class
  categoryBorder: string;  // tailwind border class
  readTime: string;
  date: string;
  publishedAt: string;     // ISO string for sorting
  title: string;
  subtitle: string;
  excerpt: string;         // 2-3 sentence preview
  coverImage: string;
  coverImageAlt: string;
  /** Extra images used inside the article body */
  bodyImages: { url: string; alt: string; caption: string }[];
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  /** Structured article body – each block renders differently */
  body: ArticleBlock[];
  relatedSlugs: string[];
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading";   text: string; level: 2 | 3 }
  | { type: "quote";     text: string; attribution: string }
  | { type: "image";     url: string;  alt: string; caption: string }
  | { type: "list";      items: string[] }
  | { type: "callout";   text: string; label: string };

/* ─────────────────────────────────────────────
   POST 1 — AI in Performance Marketing
───────────────────────────────────────────── */
const post1: BlogPost = {
  slug: "the-future-of-ai-in-performance-marketing",
  category: "AI & Marketing",
  categoryColor: "text-blue-600",
  categoryBg: "bg-blue-50",
  categoryBorder: "border-blue-100",
  readTime: "12 min read",
  date: "May 24, 2024",
  publishedAt: "2024-05-24T09:00:00Z",
  title: "The Future of AI in Performance Marketing: Scaling Beyond Human Limits",
  subtitle: "How generative AI and predictive analytics are reshaping customer acquisition and enterprise growth strategies.",
  excerpt: "Explore how generative AI and predictive analytics are reshaping customer acquisition and high-growth enterprise strategies. The shift from manual campaign management to algorithmic dominance is already here.",
  coverImage: "https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Abstract illustration of AI neural network data flow",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "AI silhouette head with eyes symbolizing machine intelligence",
      caption: "Modern AI systems synthesize billions of signals simultaneously — a feat impossible for human teams.",
    },
    {
      url: "https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "3D neural network visualization with abstract connections",
      caption: "Deep learning architectures now power real-time bid management, creative optimization, and audience synthesis.",
    },
    {
      url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Robot hand touching digital network",
      caption: "The convergence of AI and performance marketing is creating a new class of autonomous growth systems.",
    },
  ],
  author: {
    name: "Sarah Chen",
    role: "VP of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Sarah leads global growth strategy at GrowthPlatform. Former Google and Meta marketing scientist with 12 years in performance marketing.",
  },
  tags: ["AI", "Performance Marketing", "Machine Learning", "Enterprise", "Automation"],
  relatedSlugs: [
    "mastering-multi-touch-attribution-in-2024",
    "scaling-your-affiliate-program-to-enterprise-levels",
    "complete-guide-to-seo-in-2024",
    "social-media-marketing-strategy",
    "conversion-rate-optimization-playbook",
  ],
  body: [
    {
      type: "paragraph",
      text: "In the rapidly evolving landscape of digital growth, the traditional manual methods of campaign management are reaching a ceiling. As data points multiply into the billions, the human capacity to synthesize, predict, and act in real-time is being eclipsed by artificial intelligence. Performance marketing is no longer just about media buying — it's about algorithmic dominance.",
    },
    { type: "heading", text: "The Algorithmic Shift", level: 2 },
    {
      type: "paragraph",
      text: "Modern growth teams are shifting their focus from execution to strategic orchestration. AI doesn't just automate tasks; it fundamentally redefines how we approach the marketing funnel. By leveraging predictive modeling, platforms can now forecast lifetime value (LTV) at the moment of the first click — before a single dollar of budget is committed.",
    },
    {
      type: "list",
      items: [
        "Predictive Audience Synthesis: Identifying high-value segments before they enter the funnel.",
        "Dynamic Creative Optimization (DCO): Generating thousands of hyper-personalized ad variants in milliseconds.",
        "Autonomous Bid Management: Adjusting unit economics based on real-time market volatility.",
        "Cross-Channel Attribution: Weighing every touchpoint with mathematical precision.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "AI silhouette head with eyes",
      caption: "Modern AI systems synthesize billions of signals simultaneously — a feat impossible for human teams.",
    },
    { type: "heading", text: "Precision at Scale", level: 2 },
    {
      type: "paragraph",
      text: "The challenge at scale is often a challenge of precision. As you increase spend, efficiency typically drops. However, AI-driven attribution models allow for a more granular understanding of cross-channel impact. Instead of 'Last Click,' we move towards 'Neural Attribution,' which weighs every touchpoint with mathematical rigor — giving credit where credit is genuinely due.",
    },
    {
      type: "callout",
      label: "Key Insight",
      text: "Companies using AI-powered attribution see an average 34% improvement in ROAS within the first 90 days compared to those using last-click models.",
    },
    {
      type: "quote",
      text: "The winners of the next decade won't be those with the largest budgets, but those with the most efficient feedback loops between data and action.",
      attribution: "Sarah Chen, VP of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "3D neural network visualization",
      caption: "Deep learning architectures now power real-time bid management and audience synthesis.",
    },
    { type: "heading", text: "Real-Time Optimization", level: 2 },
    {
      type: "paragraph",
      text: "Imagine a world where your creative assets change their messaging based on the time of day, weather patterns, or the current sentiment of industry news. This isn't science fiction — it's the standard operating procedure for elite growth teams utilizing modern AI platforms. Real-time optimization engines process over 500 signals per impression to determine the optimal creative variant, bid price, and audience segment.",
    },
    { type: "heading", text: "Future Horizons", level: 2 },
    {
      type: "paragraph",
      text: "As we look forward, the role of the growth lead will evolve into that of a 'Systems Architect.' Your value will be derived from your ability to design the logic that the AI executes. The human element — creativity, intuition, and ethical oversight — remains indispensable, but the heavy lifting of execution is being handed over to the machines.",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Robot hand touching digital network",
      caption: "The convergence of AI and performance marketing creates a new class of autonomous growth systems.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 2 — Multi-Touch Attribution
───────────────────────────────────────────── */
const post2: BlogPost = {
  slug: "mastering-multi-touch-attribution-in-2024",
  category: "Analytics",
  categoryColor: "text-violet-600",
  categoryBg: "bg-violet-50",
  categoryBorder: "border-violet-100",
  readTime: "8 min read",
  date: "May 20, 2024",
  publishedAt: "2024-05-20T09:00:00Z",
  title: "Mastering Multi-Touch Attribution in 2024",
  subtitle: "The complete practitioner's guide to valuing every interaction in your customer journey.",
  excerpt: "How to accurately value every interaction in your customer's journey using the latest attribution modeling frameworks. From last-click to neural attribution — the complete practitioner's guide.",
  coverImage: "https://images.pexels.com/photos/8068691/pexels-photo-8068691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Professionals reviewing financial graphs and marketing data",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Tablet showing analytics charts",
      caption: "Modern attribution platforms process millions of touchpoints to assign accurate credit across channels.",
    },
    {
      url: "https://images.pexels.com/photos/7693686/pexels-photo-7693686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Business team reviewing analytics on screens",
      caption: "Teams that align on attribution models see 40% fewer budget allocation disputes.",
    },
    {
      url: "https://images.pexels.com/photos/32219704/pexels-photo-32219704.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Trader analyzing market data on laptop and phone",
      caption: "Multi-touch attribution requires the same level of data discipline as financial trading systems.",
    },
  ],
  author: {
    name: "Marcus Thorne",
    role: "Head of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Marcus leads data-driven growth initiatives and has built attribution systems for Fortune 500 companies across 3 continents.",
  },
  tags: ["Attribution", "Analytics", "ROAS", "Data", "Strategy"],
  relatedSlugs: [
    "the-future-of-ai-in-performance-marketing",
    "scaling-your-affiliate-program-to-enterprise-levels",
    "email-automation-playbook-for-growth-teams",
    "conversion-rate-optimization-playbook",
    "data-privacy-digital-marketing",
  ],
  body: [
    {
      type: "paragraph",
      text: "Attribution is the most argued-about topic in marketing — and for good reason. Where you assign credit determines where you invest budget. Getting it wrong by even 20% can misallocate millions of dollars annually. This guide cuts through the noise and gives you a practical framework for building attribution that actually reflects customer reality.",
    },
    { type: "heading", text: "Why Last-Click Attribution is Failing You", level: 2 },
    {
      type: "paragraph",
      text: "Last-click attribution gives 100% of the credit to the final touchpoint before conversion. This model was born in an era when digital channels were siloed and customers followed linear paths. Today, a B2B buyer might see 27 touchpoints across 8 channels over 90 days before converting. Crediting only the last click is like crediting only the salesperson who closed the deal — while ignoring every marketing touch that made them receptive.",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Tablet showing analytics charts",
      caption: "Modern attribution platforms process millions of touchpoints to assign accurate credit across channels.",
    },
    { type: "heading", text: "The Attribution Model Spectrum", level: 2 },
    {
      type: "list",
      items: [
        "Last Click: All credit to the final touchpoint. Simple but misleading.",
        "First Click: All credit to the awareness driver. Ignores the conversion path.",
        "Linear: Equal credit to all touchpoints. Statistically diluted.",
        "Time Decay: More credit to recent touches. Better for short sales cycles.",
        "Position Based (U-Shaped): 40% first, 40% last, 20% distributed. Good starting point.",
        "Data-Driven (Algorithmic): Credit based on actual conversion contribution. Gold standard.",
      ],
    },
    {
      type: "callout",
      label: "Pro Tip",
      text: "Start with position-based attribution and run it in parallel with your existing model for 90 days before switching. This builds stakeholder confidence with real data.",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/7693686/pexels-photo-7693686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Business team reviewing analytics",
      caption: "Teams that align on attribution models see 40% fewer budget allocation disputes.",
    },
    { type: "heading", text: "Implementing Data-Driven Attribution", level: 2 },
    {
      type: "paragraph",
      text: "Data-driven attribution (DDA) uses machine learning to analyze all touchpoints that led to a conversion — and those that didn't — to determine the incremental contribution of each channel. Google's DDA model, for example, uses counterfactual analysis: it compares the paths of converters vs. non-converters to isolate which touchpoints genuinely moved the needle.",
    },
    {
      type: "quote",
      text: "Attribution is not a technical problem — it's an organizational problem. The data is usually there. The challenge is getting teams to agree on what 'credit' means.",
      attribution: "Marcus Thorne, Head of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/32219704/pexels-photo-32219704.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Trader analyzing market data",
      caption: "Multi-touch attribution requires the same level of data discipline as financial trading systems.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 3 — Affiliate Programs at Scale
───────────────────────────────────────────── */
const post3: BlogPost = {
  slug: "scaling-your-affiliate-program-to-enterprise-levels",
  category: "Affiliate",
  categoryColor: "text-orange-600",
  categoryBg: "bg-orange-50",
  categoryBorder: "border-orange-100",
  readTime: "6 min read",
  date: "May 18, 2024",
  publishedAt: "2024-05-18T09:00:00Z",
  title: "Scaling Your Affiliate Program to Enterprise Levels",
  subtitle: "Proven frameworks for managing thousands of partners without sacrificing quality or brand integrity.",
  excerpt: "Proven frameworks for managing thousands of partners without sacrificing quality or brand integrity. How the world's fastest-growing companies built $50M+ partner ecosystems.",
  coverImage: "https://images.pexels.com/photos/6918507/pexels-photo-6918507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Two businessmen in suits shaking hands in partnership",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/5520322/pexels-photo-5520322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Close-up of professional handshake",
      caption: "Every great affiliate ecosystem is built on trust — automated systems maintain that trust at scale.",
    },
    {
      url: "https://images.pexels.com/photos/5520297/pexels-photo-5520297.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Three businessmen shaking hands in meeting",
      caption: "Enterprise affiliate programs require multi-stakeholder agreements and automated compliance checks.",
    },
    {
      url: "https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Businessmen in formal attire shaking hands",
      caption: "The best affiliate relationships are strategic partnerships, not transactional arrangements.",
    },
  ],
  author: {
    name: "Elena Rodriguez",
    role: "Global VP Partnerships, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/33671960/pexels-photo-33671960.png?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Elena has built affiliate ecosystems generating over $200M in attributable revenue for enterprise clients across North America and Europe.",
  },
  tags: ["Affiliate", "Partnerships", "Revenue", "Scale", "Ecosystem"],
  relatedSlugs: [
    "the-future-of-ai-in-performance-marketing",
    "mastering-multi-touch-attribution-in-2024",
    "complete-guide-to-seo-in-2024",
    "growth-hacking-for-enterprise",
    "social-media-marketing-strategy",
  ],
  body: [
    {
      type: "paragraph",
      text: "Most affiliate programs plateau at $1-2M in annual revenue — not because the model doesn't scale, but because the infrastructure doesn't. When you have 20 partners, you can manage relationships manually. When you have 2,000, you need systems, automation, and a fundamentally different operating model. This guide walks you through the transition from boutique program to enterprise ecosystem.",
    },
    { type: "heading", text: "The Three Stages of Affiliate Scale", level: 2 },
    {
      type: "list",
      items: [
        "Stage 1 (0-50 Partners): Manual recruitment, personal relationships, flexible terms. Focus on finding your top 10% performers.",
        "Stage 2 (50-500 Partners): Semi-automated onboarding, tier-based commissions, monthly reporting. Build the playbook from your Stage 1 learnings.",
        "Stage 3 (500+ Partners): Full automation, dynamic payout rules, fraud detection, dedicated partner success teams.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/5520322/pexels-photo-5520322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Professional handshake close-up",
      caption: "Every great affiliate ecosystem is built on trust — automated systems maintain that trust at scale.",
    },
    { type: "heading", text: "Building Your Partner Tiering System", level: 2 },
    {
      type: "paragraph",
      text: "The single most impactful thing you can do for affiliate program performance is implement a transparent, merit-based tiering system. Partners should know exactly what they need to achieve to unlock higher commissions, co-marketing budgets, and dedicated support. Ambiguity kills motivation — clarity creates competition.",
    },
    {
      type: "callout",
      label: "Framework",
      text: "Tier 1 (Platinum): Top 5% by revenue. 25% commission + dedicated manager + co-marketing. Tier 2 (Gold): Next 15% by revenue. 20% commission + priority support. Tier 3 (Standard): Remaining partners. 15% commission + self-serve portal.",
    },
    {
      type: "quote",
      text: "Technology provides the rails, but relationships are the engine. Our affiliate specialists act as an extension of your team to ensure every partnership is high-value and sustainable.",
      attribution: "Elena Rodriguez, Global VP Partnerships",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/5520297/pexels-photo-5520297.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Three businessmen in meeting handshake",
      caption: "Enterprise affiliate programs require multi-stakeholder agreements and automated compliance checks.",
    },
    { type: "heading", text: "Fraud Detection at Scale", level: 2 },
    {
      type: "paragraph",
      text: "As your program scales, so does fraud exposure. At 50 partners, a rogue affiliate is annoying. At 5,000 partners, it's an existential risk to your program. Modern fraud detection combines device fingerprinting, traffic pattern analysis, conversion velocity monitoring, and ML-based anomaly detection to catch fraud before payouts are processed.",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Businessmen shaking hands formally",
      caption: "The best affiliate relationships are strategic partnerships, not transactional arrangements.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 4 — Complete SEO Guide (bonus)
───────────────────────────────────────────── */
const post4: BlogPost = {
  slug: "complete-guide-to-seo-in-2024",
  category: "SEO",
  categoryColor: "text-emerald-600",
  categoryBg: "bg-emerald-50",
  categoryBorder: "border-emerald-100",
  readTime: "15 min read",
  date: "May 15, 2024",
  publishedAt: "2024-05-15T09:00:00Z",
  title: "The Complete Guide to SEO in 2024: From Technical Foundations to Authority Building",
  subtitle: "Everything you need to dominate organic search — technical SEO, content strategy, and link acquisition.",
  excerpt: "A comprehensive practitioner's guide covering technical SEO fundamentals, content strategy, and modern link acquisition techniques that deliver measurable organic growth in 2024.",
  coverImage: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "SEO wooden blocks on laptop keyboard",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Laptop showing Google search engine",
      caption: "Google's algorithm now processes over 200 ranking signals — technical excellence is table stakes.",
    },
    {
      url: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "MacBook on wooden desk with Google open",
      caption: "Content strategy begins with deep keyword research that uncovers commercial intent at every funnel stage.",
    },
  ],
  author: {
    name: "Sarah Chen",
    role: "VP of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Sarah leads global growth strategy at GrowthPlatform. Former Google and Meta marketing scientist with 12 years in performance marketing.",
  },
  tags: ["SEO", "Content", "Technical SEO", "Link Building", "Organic Growth"],
  relatedSlugs: [
    "the-future-of-ai-in-performance-marketing",
    "mastering-multi-touch-attribution-in-2024",
    "email-automation-playbook-for-growth-teams",
    "b2b-content-marketing-funnel",
    "video-marketing-trends",
  ],
  body: [
    {
      type: "paragraph",
      text: "SEO in 2024 bears little resemblance to the keyword-stuffing era of a decade ago. Google's algorithm now processes over 200 ranking signals, including Core Web Vitals, entity relationships, topical authority, and user engagement patterns. The practitioners who win are those who understand SEO as a convergence of technical infrastructure, content strategy, and digital PR.",
    },
    { type: "heading", text: "Technical SEO: The Foundation", level: 2 },
    {
      type: "list",
      items: [
        "Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1 are non-negotiable baselines.",
        "Site Architecture: Flat hierarchy (3 clicks to any page), logical URL structure, clean internal linking.",
        "Crawl Budget Optimization: Eliminate duplicate content, canonical tags, and orphaned pages.",
        "Structured Data: Schema markup for articles, products, FAQs, and local business.",
        "Mobile-First Indexing: Every page must be fully functional and performant on mobile.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Laptop with Google search",
      caption: "Google's algorithm processes over 200 ranking signals — technical excellence is table stakes.",
    },
    { type: "heading", text: "Content Strategy for Topical Authority", level: 2 },
    {
      type: "paragraph",
      text: "Google has shifted from keyword matching to entity understanding. To rank consistently for commercial terms, you must establish topical authority — a deep, comprehensive coverage of your subject domain that signals to Google you are the definitive resource. This is achieved through pillar pages (comprehensive guides) supported by cluster content (specific sub-topics).",
    },
    {
      type: "quote",
      text: "The future of SEO is building the most useful, most comprehensive, most trustworthy resource on a given topic — and then making sure Google can find and understand it.",
      attribution: "Sarah Chen, VP of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "MacBook on wooden desk",
      caption: "Content strategy begins with deep keyword research that uncovers commercial intent at every funnel stage.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 5 — Email Automation (bonus)
───────────────────────────────────────────── */
const post5: BlogPost = {
  slug: "email-automation-playbook-for-growth-teams",
  category: "Email",
  categoryColor: "text-cyan-600",
  categoryBg: "bg-cyan-50",
  categoryBorder: "border-cyan-100",
  readTime: "10 min read",
  date: "May 12, 2024",
  publishedAt: "2024-05-12T09:00:00Z",
  title: "Email Automation Playbook for Growth Teams",
  subtitle: "Step-by-step sequences for onboarding, nurture, win-back, and referral campaigns that run on autopilot.",
  excerpt: "A step-by-step playbook covering onboarding sequences, nurture flows, win-back campaigns, and referral triggers that generate revenue while you sleep.",
  coverImage: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Person working on laptop with coffee — email marketing setup",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Person writing in notebook beside laptop",
      caption: "Mapping your email automation flows on paper first saves significant development time.",
    },
    {
      url: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Hands typing on laptop keyboard overhead view",
      caption: "The best email automations feel personal because they are triggered by genuine user behavior.",
    },
  ],
  author: {
    name: "Marcus Thorne",
    role: "Head of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Marcus leads data-driven growth initiatives and has built attribution systems for Fortune 500 companies across 3 continents.",
  },
  tags: ["Email", "Automation", "Nurture", "Sequences", "Revenue"],
  relatedSlugs: [
    "mastering-multi-touch-attribution-in-2024",
    "scaling-your-affiliate-program-to-enterprise-levels",
    "complete-guide-to-seo-in-2024",
    "b2b-content-marketing-funnel",
    "growth-hacking-for-enterprise",
  ],
  body: [
    {
      type: "paragraph",
      text: "Email marketing generates $42 for every $1 spent — making it the highest-ROI channel in digital marketing. Yet most companies treat email as a broadcast tool rather than a behavioral automation engine. This playbook walks you through building the five core automation sequences that drive sustainable, compounding revenue growth.",
    },
    { type: "heading", text: "The Five Core Email Sequences", level: 2 },
    {
      type: "list",
      items: [
        "Welcome Sequence (Days 1-7): Onboard new subscribers, set expectations, deliver your lead magnet.",
        "Nurture Sequence (Days 8-30): Build trust through value, introduce your methodology, handle objections.",
        "Conversion Sequence: Present your offer with social proof, urgency, and risk reversal.",
        "Win-Back Sequence: Re-engage inactive subscribers before they churn permanently.",
        "Referral Sequence: Turn happy customers into advocates with automated referral triggers.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Person writing beside laptop",
      caption: "Mapping your email automation flows on paper first saves significant development time.",
    },
    { type: "heading", text: "Behavioral Triggers vs. Time-Based Triggers", level: 2 },
    {
      type: "paragraph",
      text: "Time-based email sequences send emails on a fixed schedule regardless of subscriber behavior. Behavioral triggers send emails based on what the subscriber actually does — visiting a pricing page, watching a webinar, opening three consecutive emails. Behavioral triggers consistently outperform time-based sequences by 200-400% in conversion rate because they reach people when intent is highest.",
    },
    {
      type: "quote",
      text: "The best email you can send is the one that arrives at exactly the moment when the subscriber needs it most. Behavioral triggers make that possible at scale.",
      attribution: "Marcus Thorne, Head of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/5827838/pexels-photo-5827838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Hands typing on laptop",
      caption: "The best email automations feel personal because they are triggered by genuine user behavior.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 6 — Social Media Marketing Strategy
───────────────────────────────────────────── */
const post6: BlogPost = {
  slug: "social-media-marketing-strategy",
  category: "Digital Marketing",
  categoryColor: "text-pink-600",
  categoryBg: "bg-pink-50",
  categoryBorder: "border-pink-100",
  readTime: "9 min read",
  date: "June 8, 2024",
  publishedAt: "2024-06-08T09:00:00Z",
  title: "Social Media Marketing Strategy: From Engagement to Enterprise Revenue",
  subtitle: "How leading brands turn social media from a cost center into a measurable revenue channel with organic and paid strategies.",
  excerpt: "Learn how enterprise brands build social media strategies that drive measurable revenue — from organic community building to advanced paid social funnels that scale.",
  coverImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Social media icons on phone screen",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Person scrolling social media on smartphone",
      caption: "Social platforms now account for over 30% of all digital media time spent globally.",
    },
    {
      url: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Social media analytics dashboard on laptop",
      caption: "Enterprise social strategies require sophisticated analytics and attribution beyond vanity metrics.",
    },
  ],
  author: {
    name: "Priya Kapoor",
    role: "Director of Social Strategy, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Priya leads social media strategy at GrowthPlatform. Former head of social at Shopify and Hootsuite with deep expertise in organic growth and paid social at scale.",
  },
  tags: ["Social Media", "Organic", "Paid Social", "Enterprise", "Revenue"],
  relatedSlugs: [
    "the-future-of-ai-in-performance-marketing",
    "conversion-rate-optimization-playbook",
    "video-marketing-trends",
  ],
  body: [
    {
      type: "paragraph",
      text: "Social media marketing has undergone a fundamental transformation. What was once a brand awareness channel measured in likes and shares has evolved into a sophisticated revenue engine that spans organic community building, influencer partnerships, and advanced paid social funnels. In 2024, enterprise brands are treating social media as a primary growth channel — not a communications afterthought.",
    },
    { type: "heading", text: "The Enterprise Social Stack", level: 2 },
    {
      type: "paragraph",
      text: "Building a social media strategy at enterprise scale requires three distinct layers: organic content that builds community and trust, paid amplification that drives measurable conversions, and influencer partnerships that extend reach authentically. Each layer requires its own strategy, metrics, and optimization cycles — but they must work together in a unified funnel.",
    },
    {
      type: "list",
      items: [
        "Organic Layer: Content marketing, community management, employee advocacy, and thought leadership programs.",
        "Paid Layer: Advanced targeting, lookalike audiences, dynamic creative, and conversion-optimized funnels.",
        "Influencer Layer: Strategic partnerships, affiliate-style tracking, co-created content, and long-term ambassadors.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Person scrolling social media",
      caption: "Social platforms now account for over 30% of all digital media time spent globally.",
    },
    { type: "heading", text: "Measuring What Matters", level: 2 },
    {
      type: "paragraph",
      text: "Vanity metrics like likes and followers have no place in enterprise social strategy. Sophisticated teams measure assisted conversions, influence on search behavior, customer lifetime value by acquisition channel, and share of voice against competitors. The most advanced teams build multi-touch attribution models that give proper credit to social touchpoints in complex B2B buying journeys.",
    },
    {
      type: "callout",
      label: "Pro Tip",
      text: "Implement UTM parameter standardization across all social posts and influencer content. Without consistent tagging, you cannot accurately measure social-driven revenue. Use a platform like GrowthPlatform to automate this at scale.",
    },
    {
      type: "quote",
      text: "Social media is no longer about being everywhere — it's about being where your highest-value customers are, with the right message, at the right time, with attribution that proves ROI.",
      attribution: "Priya Kapoor, Director of Social Strategy",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Social media analytics dashboard",
      caption: "Enterprise social strategies require sophisticated analytics and attribution beyond vanity metrics.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 7 — Conversion Rate Optimization
───────────────────────────────────────────── */
const post7: BlogPost = {
  slug: "conversion-rate-optimization-playbook",
  category: "Analytics",
  categoryColor: "text-violet-600",
  categoryBg: "bg-violet-50",
  categoryBorder: "border-violet-100",
  readTime: "11 min read",
  date: "June 3, 2024",
  publishedAt: "2024-06-03T09:00:00Z",
  title: "Conversion Rate Optimization Playbook: Data-Driven Growth Tactics",
  subtitle: "A systematic approach to CRO — from audit and hypothesis generation to A/B testing and post-launch analysis.",
  excerpt: "A systematic approach to conversion rate optimization covering audit methodology, hypothesis generation, A/B testing frameworks, and statistical analysis for enterprise growth teams.",
  coverImage: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Laptop showing analytics conversion metrics",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Team analyzing data on whiteboard",
      caption: "The best CRO programs start with qualitative research — understanding why users behave the way they do.",
    },
    {
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "A/B test results on computer screen",
      caption: "Statistical significance is just the beginning — focus on practical significance and business impact.",
    },
  ],
  author: {
    name: "Marcus Thorne",
    role: "Head of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Marcus leads data-driven growth initiatives and has built attribution systems for Fortune 500 companies across 3 continents.",
  },
  tags: ["CRO", "A/B Testing", "Conversion", "Analytics", "Optimization"],
  relatedSlugs: [
    "mastering-multi-touch-attribution-in-2024",
    "scaling-your-affiliate-program-to-enterprise-levels",
    "complete-guide-to-seo-in-2024",
    "social-media-marketing-strategy",
    "conversion-rate-optimization-playbook",
  ],
  body: [
    {
      type: "paragraph",
      text: "Conversion rate optimization is often mistaken for random A/B testing — changing button colors and headline copy without a systematic hypothesis. True CRO is a disciplined, data-driven methodology that combines quantitative analytics, qualitative user research, and rigorous experimentation to systematically improve the percentage of users who take desired actions.",
    },
    { type: "heading", text: "The CRO Methodology", level: 2 },
    {
      type: "paragraph",
      text: "The most effective CRO programs follow a structured cycle: Research, Hypothesis, Prioritize, Test, Analyze, and Repeat (RHP-TAR). This ensures that every test is grounded in real user insights and aligned with business objectives. Without this structure, teams test random elements and struggle to build compound gains over time.",
    },
    {
      type: "list",
      items: [
        "Research: Quantitative data (analytics, funnel analysis) + Qualitative data (heatmaps, session recordings, surveys).",
        "Hypothesis: Every test must have a clear hypothesis: 'If we change X, then Y will happen because Z.'",
        "Prioritize: Use ICE or PXL frameworks to score tests by Impact, Confidence, and Ease.",
        "Test: Run controlled experiments with adequate sample sizes and statistical rigor.",
        "Analyze: Evaluate results, segment by user type, and document learnings.",
        "Repeat: Roll out winners, iterate on learnings, and build a continuous optimization culture.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Team analyzing data on whiteboard",
      caption: "The best CRO programs start with qualitative research — understanding why users behave the way they do.",
    },
    { type: "heading", text: "Statistical Significance vs. Practical Significance", level: 2 },
    {
      type: "paragraph",
      text: "One of the most common mistakes in enterprise CRO is waiting for 95% statistical significance before making decisions. While statistical rigor is important, practical significance — the actual business impact of a change — matters more. A 2% lift at 80% significance that generates $500K in incremental revenue should not be ignored just because you haven't reached the magical 95% threshold.",
    },
    {
      type: "callout",
      label: "Key Insight",
      text: "Companies with mature CRO programs see an average 49% improvement in conversion rates year-over-year. The compound effect of winning tests, even small ones, is massive over 12 months.",
    },
    {
      type: "quote",
      text: "CRO is not about finding one big winner. It's about building a culture of experimentation where dozens of small wins compound into market dominance.",
      attribution: "Marcus Thorne, Head of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "A/B test results on computer",
      caption: "Statistical significance is just the beginning — focus on practical significance and business impact.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 8 — B2B Content Marketing Funnel
───────────────────────────────────────────── */
const post8: BlogPost = {
  slug: "b2b-content-marketing-funnel",
  category: "Digital Marketing",
  categoryColor: "text-blue-600",
  categoryBg: "bg-blue-50",
  categoryBorder: "border-blue-100",
  readTime: "10 min read",
  date: "May 30, 2024",
  publishedAt: "2024-05-30T09:00:00Z",
  title: "B2B Content Marketing Funnel: From Top-of-Funnel to Enterprise Deal",
  subtitle: "How to build a content engine that generates qualified leads and accelerates enterprise sales cycles through every funnel stage.",
  excerpt: "Build a content engine that generates qualified leads and accelerates enterprise sales cycles — from TOFU blog posts to BOFU case studies and sales enablement assets.",
  coverImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Business documents and content strategy planning",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Laptop with coffee and notes on desk",
      caption: "The most effective B2B content programs produce assets for every stage of the buyer's journey.",
    },
    {
      url: "https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Business meeting discussing strategy",
      caption: "Sales and marketing alignment is the single biggest driver of content marketing ROI.",
    },
  ],
  author: {
    name: "Sarah Chen",
    role: "VP of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Sarah leads global growth strategy at GrowthPlatform. Former Google and Meta marketing scientist with 12 years in performance marketing.",
  },
  tags: ["B2B", "Content Marketing", "Funnel", "Lead Generation", "Sales Enablement"],
  relatedSlugs: [
    "complete-guide-to-seo-in-2024",
    "email-automation-playbook-for-growth-teams",
    "growth-hacking-for-enterprise",
  ],
  body: [
    {
      type: "paragraph",
      text: "B2B content marketing is fundamentally different from B2C. The sales cycles are longer, the deal sizes are larger, and multiple stakeholders are involved in every purchase decision. A successful B2B content strategy must address each stage of the buyer's journey with assets specifically designed for that stage — from awareness-building blog posts to decision-enabling ROI calculators.",
    },
    { type: "heading", text: "Mapping Content to the Buyer's Journey", level: 2 },
    {
      type: "list",
      items: [
        "TOFU (Top of Funnel): Blog posts, industry reports, thought leadership, and educational content that attracts new visitors.",
        "MOFU (Middle of Funnel): Whitepapers, webinars, comparison guides, and solution overviews that nurture leads.",
        "BOFU (Bottom of Funnel): Case studies, ROI calculators, demo videos, and sales decks that close deals.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Laptop with coffee and notes",
      caption: "The most effective B2B content programs produce assets for every stage of the buyer's journey.",
    },
    { type: "heading", text: "Sales and Marketing Alignment", level: 2 },
    {
      type: "paragraph",
      text: "The biggest gap in B2B content marketing is the handoff between marketing and sales. Marketing generates leads, but if sales doesn't know what content exists or how to use it, those leads are wasted. Leading B2B organizations create shared content libraries with sales enablement assets that include battle cards, objection handling documents, and customized proposal templates.",
    },
    {
      type: "callout",
      label: "Framework",
      text: "The Content-Market Fit framework: Every piece of content should have a clearly defined target persona, funnel stage, distribution channel, and success metric. If it doesn't pass this four-part test, don't create it.",
    },
    {
      type: "quote",
      text: "Your content is only as valuable as the revenue it generates. If you can't trace a piece of content to a pipeline dollar, you're creating noise, not signals.",
      attribution: "Sarah Chen, VP of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Business meeting discussing strategy",
      caption: "Sales and marketing alignment is the single biggest driver of content marketing ROI.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 9 — Video Marketing Trends
───────────────────────────────────────────── */
const post9: BlogPost = {
  slug: "video-marketing-trends",
  category: "Digital Marketing",
  categoryColor: "text-red-600",
  categoryBg: "bg-red-50",
  categoryBorder: "border-red-100",
  readTime: "7 min read",
  date: "May 26, 2024",
  publishedAt: "2024-05-26T09:00:00Z",
  title: "Video Marketing Trends 2024: Short-Form, Live, and AI-Generated Content",
  subtitle: "The video marketing landscape is shifting fast — from TikTok-style short-form to AI-generated personalized videos at scale.",
  excerpt: "Explore the three biggest shifts in video marketing — short-form dominance, live commerce growth, and AI-generated personalized video — and how brands are capitalizing.",
  coverImage: "https://images.pexels.com/photos/3378998/pexels-photo-3378998.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Video production equipment and camera setup",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/2649148/pexels-photo-2649148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Person recording video with smartphone",
      caption: "Short-form video now accounts for over 60% of all social media content consumed.",
    },
    {
      url: "https://images.pexels.com/photos/7154085/pexels-photo-7154085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Live streaming setup with professional lighting",
      caption: "Live commerce is projected to reach $500B in transaction volume by 2025.",
    },
  ],
  author: {
    name: "Elena Rodriguez",
    role: "Global VP Partnerships, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/33671960/pexels-photo-33671960.png?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Elena has built affiliate ecosystems generating over $200M in attributable revenue for enterprise clients across North America and Europe.",
  },
  tags: ["Video", "Short-Form", "Live Commerce", "AI Video", "Content"],
  relatedSlugs: [
    "social-media-marketing-strategy",
    "conversion-rate-optimization-playbook",
    "the-future-of-ai-in-performance-marketing",
  ],
  body: [
    {
      type: "paragraph",
      text: "Video marketing has entered a new era. The explosive growth of short-form video on TikTok, Instagram Reels, and YouTube Shorts has fundamentally changed how consumers discover and evaluate brands. At the same time, live commerce is transforming the shopping experience, and AI-generated video is making personalized video content accessible at enterprise scale.",
    },
    { type: "heading", text: "Short-Form Video Dominance", level: 2 },
    {
      type: "paragraph",
      text: "Short-form video — content under 60 seconds — now accounts for over 60% of all social media content consumed. The key to success in short-form is authenticity over production value. Polished, corporate videos underperform raw, educational, or entertaining content. Brands that embrace a 'less produced, more useful' philosophy consistently outperform those relying on traditional broadcast production.",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/2649148/pexels-photo-2649148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Person recording video with smartphone",
      caption: "Short-form video now accounts for over 60% of all social media content consumed.",
    },
    { type: "heading", text: "AI-Generated Video at Scale", level: 2 },
    {
      type: "paragraph",
      text: "The most transformative trend in video marketing is AI-generated personalized video. Using customer data and templates, brands can now create thousands of personalized video messages — each addressing the recipient by name, referencing their industry, and showing relevant use cases. Early adopters report 3-5× higher engagement rates compared to static email campaigns.",
    },
    {
      type: "quote",
      text: "The brands winning in video are not those with the biggest production budgets, but those with the deepest understanding of their audience's content preferences.",
      attribution: "Elena Rodriguez, Global VP Partnerships",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/7154085/pexels-photo-7154085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Live streaming setup",
      caption: "Live commerce is projected to reach $500B in transaction volume by 2025.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 10 — Growth Hacking for Enterprise
───────────────────────────────────────────── */
const post10: BlogPost = {
  slug: "growth-hacking-for-enterprise",
  category: "Growth",
  categoryColor: "text-indigo-600",
  categoryBg: "bg-indigo-50",
  categoryBorder: "border-indigo-100",
  readTime: "13 min read",
  date: "May 22, 2024",
  publishedAt: "2024-05-22T09:00:00Z",
  title: "Growth Hacking for Enterprise: Lean Experimentation at Scale",
  subtitle: "How enterprise teams apply the lean startup methodology to achieve rapid growth within complex organizational structures.",
  excerpt: "How enterprise teams apply lean startup methodology to achieve rapid growth within complex organizational structures, regulatory constraints, and legacy systems.",
  coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Growth strategy planning on whiteboard",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Team brainstorming growth experiments on whiteboard",
      caption: "Enterprise growth teams run experiments in parallel, not series, to accelerate learning velocity.",
    },
    {
      url: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Business professionals analyzing data charts",
      caption: "Data-driven growth cultures are 3× more likely to exceed revenue targets.",
    },
  ],
  author: {
    name: "Marcus Thorne",
    role: "Head of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Marcus leads data-driven growth initiatives and has built attribution systems for Fortune 500 companies across 3 continents.",
  },
  tags: ["Growth Hacking", "Experimentation", "Lean", "Enterprise", "Velocity"],
  relatedSlugs: [
    "conversion-rate-optimization-playbook",
    "mastering-multi-touch-attribution-in-2024",
    "scaling-your-affiliate-program-to-enterprise-levels",
  ],
  body: [
    {
      type: "paragraph",
      text: "Growth hacking has traditionally been associated with startups — small teams moving fast, breaking things, and iterating rapidly. But the principles of lean experimentation are equally powerful in enterprise settings, where the challenges are different but the opportunity is larger. Enterprise growth hacking is about navigating complexity, aligning stakeholders, and running experiments that generate statistically significant results within the constraints of large organizations.",
    },
    { type: "heading", text: "The Enterprise Growth Framework", level: 2 },
    {
      type: "list",
      items: [
        "Identify: Use data to identify the highest-leverage growth opportunities across the customer journey.",
        "Prioritize: Score opportunities by potential impact, confidence level, and implementation effort.",
        "Experiment: Run controlled experiments with clear hypotheses, success metrics, and timelines.",
        "Scale: Roll out winning experiments with proper change management and stakeholder communication.",
        "Systematize: Build playbooks and automation around validated growth loops.",
      ],
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Team brainstorming on whiteboard",
      caption: "Enterprise growth teams run experiments in parallel, not series, to accelerate learning velocity.",
    },
    { type: "heading", text: "Navigating Enterprise Constraints", level: 2 },
    {
      type: "paragraph",
      text: "The biggest challenge in enterprise growth hacking is not finding growth opportunities — it's navigating the organizational constraints that slow down execution. Enterprise growth teams must master stakeholder alignment, cross-functional collaboration, and compliance navigation. The most successful teams create a 'growth charter' that defines their scope, authority, and decision-making framework.",
    },
    {
      type: "callout",
      label: "Playbook",
      text: "Create a Growth Council with representatives from Product, Engineering, Marketing, Sales, and Compliance. Meet bi-weekly to review experiment results, approve new experiments, and remove blockers. This turns growth from a marketing initiative into an organizational capability.",
    },
    {
      type: "quote",
      text: "Enterprise growth is not about moving fast and breaking things. It's about moving fast while maintaining trust, compliance, and quality — and those are not contradictions, they're design constraints.",
      attribution: "Marcus Thorne, Head of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Business professionals analyzing data",
      caption: "Data-driven growth cultures are 3× more likely to exceed revenue targets.",
    },
  ],
};

/* ─────────────────────────────────────────────
   POST 11 — Data Privacy in Digital Marketing
───────────────────────────────────────────── */
const post11: BlogPost = {
  slug: "data-privacy-digital-marketing",
  category: "Growth",
  categoryColor: "text-gray-600",
  categoryBg: "bg-gray-50",
  categoryBorder: "border-gray-200",
  readTime: "14 min read",
  date: "May 17, 2024",
  publishedAt: "2024-05-17T09:00:00Z",
  title: "Data Privacy in Digital Marketing: Thriving in a Cookieless World",
  subtitle: "How to build compliant marketing operations that respect user privacy while maintaining targeting precision and measurement accuracy.",
  excerpt: "Navigate the post-cookie era with confidence — from first-party data strategies to privacy-compliant attribution models that maintain campaign performance.",
  coverImage: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
  coverImageAlt: "Data security and privacy concept on laptop",
  bodyImages: [
    {
      url: "https://images.pexels.com/photos/9032951/pexels-photo-9032951.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Data privacy compliance documents",
      caption: "Privacy regulations now cover over 65% of global internet users, making compliance a competitive advantage.",
    },
    {
      url: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Digital data visualization and network",
      caption: "First-party data strategies are replacing third-party cookies as the foundation of digital marketing.",
    },
  ],
  author: {
    name: "Sarah Chen",
    role: "VP of Growth, GrowthPlatform",
    avatar: "https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
    bio: "Sarah leads global growth strategy at GrowthPlatform. Former Google and Meta marketing scientist with 12 years in performance marketing.",
  },
  tags: ["Privacy", "Compliance", "Cookieless", "First-Party Data", "GDPR"],
  relatedSlugs: [
    "mastering-multi-touch-attribution-in-2024",
    "the-future-of-ai-in-performance-marketing",
    "growth-hacking-for-enterprise",
  ],
  body: [
    {
      type: "paragraph",
      text: "The digital marketing industry is undergoing its most fundamental transformation since the invention of the cookie. With third-party cookies being phased out, privacy regulations expanding globally, and consumer awareness at an all-time high, marketers must rebuild their targeting, measurement, and optimization infrastructure for a privacy-first world. This is not a constraint — it's an opportunity to build better marketing.",
    },
    { type: "heading", text: "The Post-Cookie Landscape", level: 2 },
    {
      type: "paragraph",
      text: "Google's phased deprecation of third-party cookies in Chrome — combined with Apple's Intelligent Tracking Prevention, Mozilla's Enhanced Tracking Protection, and global privacy regulations like GDPR and CCPA — has created a fundamentally different operating environment. Marketers can no longer rely on cross-site tracking to build audiences, attribute conversions, or optimize campaigns. The new foundation is first-party data, contextual targeting, and privacy-preserving measurement.",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/9032951/pexels-photo-9032951.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Data privacy compliance documents",
      caption: "Privacy regulations now cover over 65% of global internet users, making compliance a competitive advantage.",
    },
    { type: "heading", text: "Building a First-Party Data Strategy", level: 2 },
    {
      type: "list",
      items: [
        "Value Exchange: Offer genuine value (guides, tools, calculators) in exchange for user data with clear consent.",
        "Zero-Party Data: Collect data users intentionally share — preferences, interests, and purchase intent.",
        "Unified Profile: Consolidate first-party data across all touchpoints into a single customer profile.",
        "Consent Management: Implement robust consent collection and management across all channels and regions.",
      ],
    },
    {
      type: "callout",
      label: "Strategic Insight",
      text: "Companies that invest in first-party data infrastructure before regulation forces them to will have a 2-3 year competitive advantage. The winners in the cookieless world are those who start building today.",
    },
    {
      type: "quote",
      text: "Privacy is not a marketing problem to be solved. It's a customer expectation to be met. The brands that respect user privacy will earn the data access that their competitors lose.",
      attribution: "Sarah Chen, VP of Growth",
    },
    {
      type: "image",
      url: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900",
      alt: "Digital data visualization",
      caption: "First-party data strategies are replacing third-party cookies as the foundation of digital marketing.",
    },
  ],
};

/* ─────────────────────────────────────────────
   EXPORTED REGISTRY
───────────────────────────────────────────── */
export const allPosts: BlogPost[] = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3);
}
