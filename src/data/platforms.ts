export interface PlatformDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string;
  features: {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
  }[];
  layers: {
    icon: string;
    title: string;
    color: string;
    width: string;
  }[];
  coreEngines: {
    icon: string;
    title: string;
    description: string;
    tags: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const allPlatforms: PlatformDetail[] = [
  {
    slug: "marketing-dashboard",
    title: "Marketing Dashboard",
    subtitle: "Unified command center for campaigns, partners, and insights with real-time AI-powered analytics.",
    heroImage: "https://images.pexels.com/photos/6774959/pexels-photo-6774959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    heroImageAlt: "Analytics dashboard with charts and charts on screen",
    overview: "The Marketing Dashboard is the central nervous system of GrowthPlatform. It provides a unified view of all marketing activities, from paid campaigns to organic content performance. By consolidating data from every channel, it enables you to make data-driven decisions that scale across global markets while maintaining local relevance.",
    features: [
      {
        icon: "BarChart3",
        title: "Marketing Dashboard",
        description: "Unified command center for every campaign, partner, and dollar. Real-time attribution across your entire funnel.",
        tags: ["Real-Time", "Attribution", "Analytics"],
        image: "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "Users",
        title: "Affiliate Portal",
        description: "Seamless onboarding and tracking for your global partner network with automated payouts.",
        tags: ["Partners", "Payouts", "Tracking"],
        image: "https://images.pexels.com/photos/7652144/pexels-photo-7652144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "Target",
        title: "Campaign Manager",
        description: "Automated asset deployment and A/B testing at scale across multiple channels simultaneously.",
        tags: ["A/B Testing", "Automation", "Multi-Channel"],
        image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
    ],
    layers: [
      {
        icon: "Zap",
        title: "UX Experience Layer",
        color: "bg-blue-500",
        width: "w-full",
      },
      {
        icon: "Database",
        title: "AI Optimization Engine",
        color: "bg-primary",
        width: "w-[92%]",
      },
      {
        icon: "Layers",
        title: "Integration Services API",
        color: "bg-purple-500",
        width: "w-[84%]",
      },
      {
        icon: "Globe",
        title: "Distributed Database Cluster",
        color: "bg-indigo-500",
        width: "w-[76%]",
      },
      {
        icon: "Shield",
        title: "Global Edge Infrastructure",
        color: "bg-gray-600",
        width: "w-[68%]",
      },
    ],
    coreEngines: [
      {
        icon: "BarChart3",
        title: "Marketing Dashboard",
        description: "Consolidate data from every channel into a single AI-powered command center for your marketing stack.",
        tags: ["Unified Data", "Multi-Channel", "AI Insights"],
      },
      {
        icon: "Users",
        title: "Affiliate Portal",
        description: "Whitelist experience for your partners with automated recruitment and performance tracking engines.",
        tags: ["Recruitment", "Performance", "Payouts"],
      },
      {
        icon: "Target",
        title: "Campaign Manager",
        description: "Deploy multi-channel campaigns across your ecosystem with drag-and-drop orchestration tools.",
        tags: ["Drag & Drop", "Orchestration", "Scale"],
      },
    ],
    faqs: [
      {
        question: "What makes GrowthPlatform's marketing dashboard unique?",
        answer: "Our dashboard provides real-time attribution across all channels, predictive analytics for campaign optimization, and customizable dashboards for different user personas. The platform processes 50+ million data points daily to deliver instant insights.",
      },
      {
        question: "Can I integrate our existing marketing tools?",
        answer: "Yes, we offer native integrations for all major ad platforms, CRM systems, and analytics tools. Our API-based architecture allows for custom integrations and webhook-based notifications.",
      },
      {
        question: "How do you ensure data security?",
        answer: "We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. All data is stored in ISO 27001 certified data centers with 99.99% uptime guarantee.",
      },
      {
        question: "What kind of support do you provide?",
        answer: "We offer 24/7 technical support, dedicated customer success managers, and comprehensive training programs. Onboarding takes just 2 weeks, and we provide ongoing optimization recommendations.",
      },
    ],
  },
  {
    slug: "affiliate-portal",
    title: "Affiliate Portal",
    subtitle: "Global partner management and tracking system with automated payouts and performance optimization.",
    heroImage: "https://images.pexels.com/photos/7652144/pexels-photo-7652144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    heroImageAlt: "Affiliate marketing collaboration on laptop",
    overview: "The Affiliate Portal revolutionizes how brands manage their partnership programs. With over 500+ active affiliates and $12M+ in annual payouts processed, it provides seamless onboarding, real-time tracking, and automated optimization that ensures both your brand and affiliates succeed.",
    features: [
      {
        icon: "Users",
        title: "Affiliate Portal",
        description: "Seamless onboarding and tracking for your global partner network with automated payouts.",
        tags: ["Partners", "Payouts", "Tracking"],
        image: "https://images.pexels.com/photos/7652144/pexels-photo-7652144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "BarChart3",
        title: "Performance Dashboard",
        description: "Real-time performance tracking with predictive analytics and automated optimization recommendations.",
        tags: ["Analytics", "Optimization", "Predictions"],
        image: "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "Target",
        title: "Creative Assets",
        description: "Centralized creative asset management with automated A/B testing and version control.",
        tags: ["Creative", "Testing", "Version Control"],
        image: "https://images.pexels.com/photos/7693686/pexels-photo-7693686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
    ],
    layers: [
      {
        icon: "Users",
        title: "Partner Onboarding",
        color: "bg-blue-500",
        width: "w-full",
      },
      {
        icon: "Database",
        title: "Partner Database",
        color: "bg-primary",
        width: "w-[92%]",
      },
      {
        icon: "Layers",
        title: "Tracking Engine",
        color: "bg-purple-500",
        width: "w-[84%]",
      },
      {
        icon: "Globe",
        title: "Payment Processor",
        color: "bg-indigo-500",
        width: "w-[76%]",
      },
      {
        icon: "Shield",
        title: "Compliance Layer",
        color: "bg-gray-600",
        width: "w-[68%]",
      },
    ],
    coreEngines: [
      {
        icon: "Users",
        title: "Affiliate Portal",
        description: "Whitelist experience for your partners with automated recruitment and performance tracking engines.",
        tags: ["Recruitment", "Performance", "Payouts"],
      },
      {
        icon: "BarChart3",
        title: "Performance Analytics",
        description: "AI-powered performance optimization with predictive insights and automated recommendations.",
        tags: ["Analytics", "AI", "Optimization"],
      },
      {
        icon: "Target",
        title: "Creative Optimization",
        description: "Smart creative testing platform with automated A/B testing and dynamic optimization.",
        tags: ["Creative", "Testing", "A/B Tests"],
      },
    ],
    faqs: [
      {
        question: "How do you onboard new affiliates?",
        answer: "Our platform uses automated qualification screening based on audience overlap, content quality, and brand alignment. Qualified affiliates receive instant access through a streamlined portal with clear guidelines and tracking.",
      },
      {
        question: "What makes your payout system unique?",
        answer: "We process payouts twice daily with real-time notification. All payouts are calculated based on verified conversion data with 100% transparency. Affiliates can track their earnings in real-time through our dashboard.",
      },
      {
        question: "Can I customize the affiliate experience?",
        answer: "Yes, we offer white-glove service for large enterprise partners with custom white-label portals, dedicated account managers, and custom workflows. Smaller affiliates have access to our self-service portal.",
      },
      {
        question: "How do you ensure brand compliance?",
        answer: "Our compliance layer monitors all creative and content for brand alignment, includes IP protection features, and ensures all affiliates adhere to marketing best practices through automated guidelines and regular audits.",
      },
    ],
  },
  {
    slug: "campaign-manager",
    title: "Campaign Manager",
    subtitle: "AI-powered campaign orchestration platform with unified control across all channels and markets.",
    heroImage: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    heroImageAlt: "Campaign management interface with graph data",
    overview: "The Campaign Manager is the operational heart of GrowthPlatform. It combines the simplicity of drag-and-drop orchestration with the power of AI-driven optimization. Brands can deploy complex, multi-channel campaigns at global scale while maintaining local relevance through intelligent localization and market-specific optimizations.",
    features: [
      {
        icon: "Target",
        title: "Campaign Manager",
        description: "Automated asset deployment and A/B testing at scale across multiple channels simultaneously.",
        tags: ["A/B Testing", "Automation", "Multi-Channel"],
        image: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "Zap",
        title: "AI Optimizer",
        description: "Machine learning algorithms that optimize bids, budgets, and creative in real-time based on performance data.",
        tags: ["AI", "Optimization", "Predictions"],
        image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "Globe",
        title: "Global Orchestration",
        description: "Deploy campaigns across multiple markets with intelligent localization and regional optimizations.",
        tags: ["Global", "Localization", "Regional"],
        image: "https://images.pexels.com/photos/6774959/pexels-photo-6774959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
    ],
    layers: [
      {
        icon: "Zap",
        title: "Orchestration Engine",
        color: "bg-blue-500",
        width: "w-full",
      },
      {
        icon: "Database",
        title: "AI Decision Layer",
        color: "bg-primary",
        width: "w-[92%]",
      },
      {
        icon: "Layers",
        title: "Channel Integration",
        color: "bg-purple-500",
        width: "w-[84%]",
      },
      {
        icon: "Globe",
        title: "Geo-Optimizer",
        color: "bg-indigo-500",
        width: "w-[76%]",
      },
      {
        icon: "Shield",
        title: "Budget Control",
        color: "bg-gray-600",
        width: "w-[68%]",
      },
    ],
    coreEngines: [
      {
        icon: "Target",
        title: "Campaign Manager",
        description: "Deploy multi-channel campaigns across your ecosystem with drag-and-drop orchestration tools.",
        tags: ["Drag & Drop", "Orchestration", "Scale"],
      },
      {
        icon: "Zap",
        title: "AI Optimizer",
        description: "Real-time optimization engine that automatically adjusts bids, budgets, and creative based on performance.",
        tags: ["AI", "Real-Time", "Auto-Optimize"],
      },
      {
        icon: "Globe",
        title: "Geo Manager",
        description: "Intelligent geo-fencing and localization engine for regional campaigns.",
        tags: ["Geo", "Localization", "Regional"],
      },
    ],
    faqs: [
      {
        question: "How do you scale campaigns globally?",
        answer: "Our geo-optimizer automatically adapts campaigns for each market based on local time zones, language, culture, and regulations. We have teams in 15+ markets to ensure regional compliance and cultural relevance.",
      },
      {
        question: "What's your approach to AI optimization?",
        answer: "We use a multi-armed bandit approach with real-time bidding algorithms that continuously learn from performance data. All optimizations are transparent with A/B testing to validate our decisions.",
      },
      {
        question: "How do you handle creative at scale?",
        answer: "Our creative automation engine generates personalized assets based on audience data. We also provide smart linking to your existing creative library with automated version control and A/B testing frameworks.",
      },
      {
        question: "What security measures do you have?",
        answer: "We use enterprise-grade encryption, SOC 2 compliance, and regular penetration testing. All campaign data is isolated between clients with zero data sharing between our clients.",
      },
    ],
  },
  {
    slug: "integration-services",
    title: "Integration Services",
    subtitle: "Comprehensive API and connection management for seamless ecosystem integration and data flow.",
    heroImage: "https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1400",
    heroImageAlt: "Software integration and API connections development",
    overview: "Integration Services is the connective tissue that binds GrowthPlatform to your existing technology stack. By providing over 150+ pre-built connectors and a comprehensive API, we enable you to integrate our platform with your CRM, CDP, analytics, and third-party tools without disruption to your existing workflows. Our integration philosophy centers on three core principles: ease of implementation, zero data disruption, and continuous reliability. We provide dedicated integration specialists who work hand-in-hand with your technical teams to ensure a smooth deployment that meets your exact requirements.",
    features: [
      {
        icon: "Layers",
        title: "Integration Services",
        description: "Connect and orchestrate data flow between all your marketing tools and platforms.",
        tags: ["API", "Connectors", "Data Flow"],
        image: "https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "Database",
        title: "Data Management",
        description: "Unified data lake architecture with real-time synchronization across all connected systems.",
        tags: ["Data", "Synchronization", "Lake"],
        image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
      {
        icon: "Globe",
        title: "Marketplace",
        description: "Access over 150+ pre-built integrations and custom connectors for all major marketing tools.",
        tags: ["Marketplace", "Integrations", "Pre-built"],
        image: "https://images.pexels.com/photos/6774959/pexels-photo-6774959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500",
      },
    ],
    layers: [
      {
        icon: "Layers",
        title: "API Gateway",
        color: "bg-blue-500",
        width: "w-full",
      },
      {
        icon: "Database",
        title: "Data Pipeline",
        color: "bg-primary",
        width: "w-[92%]",
      },
      {
        icon: "Globe",
        title: "Marketplace",
        color: "bg-purple-500",
        width: "w-[84%]",
      },
      {
        icon: "Shield",
        title: "Security Layer",
        color: "bg-indigo-500",
        width: "w-[76%]",
      },
      {
        icon: "Zap",
        title: "Automation Engine",
        color: "bg-gray-600",
        width: "w-[68%]",
      },
    ],
    coreEngines: [
      {
        icon: "Layers",
        title: "API Gateway",
        description: "Secure, rate-limited API with comprehensive documentation and webhooks.",
        tags: ["API", "Security", "Webhooks"],
      },
      {
        icon: "Database",
        title: "Data Pipeline",
        description: "Real-time data synchronization with automated ETL and transformation.",
        tags: ["ETL", "Data", "Synchronization"],
      },
      {
        icon: "Globe",
        title: "Integration Marketplace",
        description: "150+ pre-built connectors and custom connector marketplace.",
        tags: ["Marketplace", "Connectors", "Pre-built"],
      },
    ],
    faqs: [
      {
        question: "What kind of technical support do you provide for integrations?",
        answer: "We provide full-stack integration support including technical architecture, API development, and deployment. Our team includes certified engineers for all major platforms and programming languages. Integration specialists are available 24/7 for enterprise clients.",
      },
      {
        question: "How do you ensure data security during transmission?",
        answer: "All integrations use encrypted connections (TLS 1.3+), OAuth 2.0 authentication, and are SOC 2 Type II certified. We never store client credentials or sensitive data in our systems.",
      },
      {
        question: "What platforms do you integrate with?",
        answer: "We integrate with all major marketing stacks including Salesforce, HubSpot, Marketo, Adobe Experience Cloud, Google Analytics, Mixpanel, Amplitude, and most major ad platforms. We also offer custom integration development for proprietary systems.",
      },
      {
        question: "How do you test and validate integrations?",
        answer: "Each integration undergoes rigorous testing including unit tests, integration tests, and sandbox testing. We have a dedicated QA team that validates all integrations across multiple versions of each connected platform.",
      },
    ],
  },
]

export function getPlatformBySlug(slug: string): PlatformDetail | undefined {
  return allPlatforms.find((p) => p.slug === slug);
}
