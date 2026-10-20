import { InstagramCaseStudyData, ShowcaseSectionData, YoutubeChannel } from "./types";

// ---------------------------------------------------------------------------
// YouTube channel case studies
// ---------------------------------------------------------------------------
// Stats/subscriber counts below were already present in the project's prior
// data set. Anything not previously documented is left as a placeholder —
// search this file for "PLACEHOLDER" to find what still needs real content.

export const youtubeChannels: YoutubeChannel[] = [
  {
    id: "harkirat-singh",
    name: "Harkirat Singh",
    status: "current",
    roleTitle: "Editor → Content & Production Lead → Channel Lead",
    timeline: "April 2023 — Present",
    overview:
      "Joined Harkirat's channel in April 2023 as an editor and grew into running the full production engine — scripts, teams, post-production and channel strategy. When Harkirat launched 100xSchool, I moved onsite to Noida to build that channel from the ground up.",
    responsibilities: [
      "Scripting and ideation",
      "Video editing and post-production",
      "Production team management",
      "Channel strategy and growth",
      "Brand collaboration management",
      "Led onsite launch and growth of 100xSchool",
    ],
    impact: [
      "Grew the channel from 60K to 609K+ subscribers",
      "1.3M+ monthly views",
      "373 videos shipped",
      "Built 100xSchool from 0 to 50K+ subscribers in 6 months",
    ],
    subscribers: "609K+",
    featuredVideo: {
      youtubeId: "msKpAYFe46U",
      title: "100xSchool Documentary",
      views: "41K views",
      year: "2025",
    },
    videos: [
      {
        youtubeId: "umejNI-fafg",
        title:
          "I Interviewed 300 People from Different Salary Brackets | What I Found",
        views: "520K views",
        year: "2025",
      },
      {
        youtubeId: "y-4CG-ptHq4",
        title: "This Took 10 Years... Welcome to 100xSchool",
        views: "82K views",
        year: "2025",
      },
      {
        youtubeId: "54w5Okqb4c0",
        title:
          "The Job Market Has Changed... Again? | What Are My Bets for 2025-26",
        views: "326K views",
        year: "2025",
      },
      {
        youtubeId: "nF0xqfj-hN8",
        title: "₹8 LPA to ₹55 LPA in 4 Months (No BS Breakdown) ft. Dhairyasheel",
        views: "226K views",
        year: "2026",
      },
      {
        youtubeId: "Oe_h_M7Drec",
        title: "GSOC 2026 Complete Roadmap: Step by Step Guide",
        views: "218K views",
        year: "2025",
      },
      {
        youtubeId: "DN62xmsVCMc",
        title: "7 years after IIT in 7 minutes",
        views: "186K views",
        year: "2025",
      },
      {
        youtubeId: "So7lVjQl0wI",
        title: "I spent a day researching about the 2025-26 coding job market.",
        views: "182K views",
        year: "2025",
      },
      {
        youtubeId: "YdDGZ3rUrso",
        title: "Exploring/Hacking/Cloning the Dhruv Rathee wrapper",
        views: "161K views",
        year: "2025",
      },
      {
        youtubeId: "0WS5eq9fOYk",
        title: "Unfortunately - Coding is this Simple",
        views: "160K views",
        year: "2025",
      },
      {
        youtubeId: "xg0hNUWVIgQ",
        title: "Complete Detailed Roadmap To Learn AI In 2025-26 by an AI Researcher",
        views: "150K views",
        year: "2025",
      },
    ],
    channelUrl: "https://www.youtube.com/@harkirat1",
  },
  {
    id: "singh-in-usa",
    name: "Harnoor Singh — Singh in USA",
    status: "current",
    roleTitle: "Editor → Content Strategist",
    timeline: "Ongoing",
    overview:
      "I work with Harnoor Singh on Singh in USA across both editing and content strategy — shaping what gets made as much as how it's cut together.",
    responsibilities: ["Video editing", "Content strategy"],
    impact: ["1.1M subscribers", "276.5M total views", "Channel active since 2013"],
    subscribers: "1.1M",
    videos: [
      {
        youtubeId: "6FwDed8RqoU",
        title: "My 10 Years in America: Failing 4th Grade to USA!!",
        views: "32K views",
        year: "2026",
      },
      {
        youtubeId: "iYVGlxDSdGs",
        title: "Challenging Medical Students in US with NEET exam!! 🇺🇸🇮🇳",
        views: "7.9M views",
        year: "2022",
      },
      {
        youtubeId: "OhbeeG4jf3Q",
        title: "Giving IIT Bombay Students $100 If They Can Answer THIS Question",
        views: "3.9M views",
        year: "2022",
      },
      {
        youtubeId: "-SLgCQKE1zg",
        title: "A Day in Life of a California Software Engineer! (Silicon Valley)",
        views: "1.2M views",
        year: "2022",
      },
      {
        youtubeId: "tTsb0W_hawc",
        title: "My New Job: Software Engineer to Uber Eats! $20+/ hour?",
        views: "823K views",
        year: "2023",
      },
    ],
    channelUrl: "https://www.youtube.com/c/SinghinUSA",
  },
  {
    id: "julia-turc",
    name: "Julia Turc",
    status: "current",
    roleTitle: "Editing Head → Post-Production Head",
    timeline: "Ongoing",
    overview:
      "I lead editing and post-production for Julia Turc's AI-niche channel, owning the pipeline from raw footage to finished, publish-ready video.",
    responsibilities: ["Editing leadership", "Post-production leadership", "Production pipeline management"],
    impact: ["78.3K subscribers", "34 videos"],
    subscribers: "78.3K",
    videos: [
      {
        youtubeId: "-VGeHZqOk_s",
        title: "Why are diffusion LLMs so fast?",
        views: "29K views",
        year: "2026",
      },
      {
        youtubeId: "BSzhrZOp2x8",
        title: "How is hardware reshaping LLM design?",
        views: "60K views",
        year: "2026",
      },
      {
        youtubeId: "1AHgGRbu6hI",
        title: "Subham Sahoo: The Future of Discrete Diffusion",
        year: "2026",
      },
      {
        youtubeId: "KnCRTP11p5U",
        title: "Why are Transformers replacing CNNs?",
        views: "208K views",
        year: "2025",
      },
    ],
    channelUrl: "https://www.youtube.com/@juliaturc1",
  },
  {
    id: "software-with-nick",
    name: "Software with Nick",
    status: "current",
    roleTitle: "Channel Lead",
    timeline: "Since June 2026",
    overview:
      "Recently brought on as Channel Lead for Software with Nick, handling strategy, production and the overall workflow behind the channel.",
    responsibilities: [
      "Content strategy",
      "Production oversight",
      "Workflow and team coordination",
    ],
    subscribers: "11K",
    videos: [
      {
        youtubeId: "EYZzK6V1Cv8",
        title: "Become Irreplaceable as a Data Scientist/Analyst in the AI Era",
        views: "6.3K views",
        year: "2026",
      },
      {
        youtubeId: "1v5KsoeF-yc",
        title: "The AI Researchers Are Scared. Should You Be?",
        views: "1.8K views",
        year: "2026",
      },
      {
        youtubeId: "5TBYg-yi6t0",
        title: "Resources I Wish I Knew About When I Started Data Science",
        views: "1.2K views",
        year: "2026",
      },
      {
        youtubeId: "x3xKvayDRv4",
        title: "Watch me CLEAN DATA in Minutes with R (+ 8 Techniques Every Analyst Needs)",
        views: "1.7K views",
        year: "2026",
      },
    ],
    channelUrl: "https://www.youtube.com/@softwarewithnick",
  },
];

// ---------------------------------------------------------------------------
// Additional showcase sections
// ---------------------------------------------------------------------------

export const launchVideosSection: ShowcaseSectionData = {
  id: "launch-videos",
  eyebrow: "03",
  title: "SaaS & Motion Graphics",
  role: "Launch Videos",
  description:
    "High-energy launch and motion-graphics videos for SaaS products and tools in the Solana and dev-tooling ecosystem — built to introduce a product and make people want to try it in under a minute.",
  compactVideo: true,
  featuredVideo: { youtubeId: "Db5klNQZvOo", title: "Motia" },
  videos: [
    { youtubeId: "cNp2EVjxvmk", title: "Onlydevs" },
    { youtubeId: "YpcKsFrWc8c", title: "Weekly Anime Solana" },
  ],
};

export const podcastSection: ShowcaseSectionData = {
  id: "podcast",
  eyebrow: "04",
  title: "Podcast Production",
  role: "Podcast Production Lead — Superteam",
  description:
    "Produced launch and hype videos for Superteam and managed post-production on the podcast — turning raw recordings into polished, shareable episodes.",
  videos: [
    { youtubeId: "KQWvY7yLeJc", title: "How He Built a Tool Used by 8,000 Traders", views: "4.9K views", year: "2026" },
    { youtubeId: "vBYsTGvVLpQ", title: "How a College Dropout is building One of India’s Early Crypto Startups | ft. Aryan.", views: "2.5K views", year: "2026" },
    { youtubeId: "yemt4ciysvM", title: "How a Side Project Became Solana’s Most Talked-About Dev Tool", views: "3.8K views", year: "2026" },
    { youtubeId: "blKiHBHhUyo", title: "The Business of Blockchain Speed: How Uri Built Infra Used by Major Validator", views: "847 views", year: "2025" },
    { youtubeId: "s9F6u62q0ZE", title: "20 Year Old Guy Raises $150 Million With His Team - Crazy Story of UmbraPrivacy", views: "24K views", year: "2025" },
    { youtubeId: "Y5mxY_KX-EE", title: "The Future of On-Chain Compute with Bonsol | OnlyDevs with Rohan from Overclock", views: "2K views", year: "2025" },
    { youtubeId: "IMEnpmGqeS0", title: "Oracles Explained: Dr. Blocks on Powering $4B in DeFi with Switchboard", views: "886 views", year: "2025" },
    { youtubeId: "a_fdC-FCvYc", title: "From AI Researcher to Solana Builder: Gabriele’s Crypto Journey", views: "1.1K views", year: "2025" },
    { youtubeId: "KNI5xMizljo", title: "How Exo Powers Solana Startups | Ft. Taylor", views: "1.5K views", year: "2025" },
    { youtubeId: "5T4s1NWr_wU", title: "How Solana Scales: The SVM Explained ft. Joe", views: "1.2K views", year: "2025" },
    { youtubeId: "RiwWXcApOe8", title: "He Quit Goldman to Build a Crypto Bank Before FTX Collapsed", views: "2.2K views", year: "2025" },
    { youtubeId: "b-Uf85mq5U0", title: "Encrypted Computing Explained: Solana’s Next Big Leap (with Yannik)", views: "1.9K views", year: "2025" },
    { youtubeId: "_m4iH3pVpnU", title: "Solana, Privacy, and the Future of Trading", views: "2.7K views", year: "2025" },
    { youtubeId: "RbTkR5iTaC8", title: "Inside Solana Mobile’s Master Plan – With Chase Barker", views: "4.1K views", year: "2025" },
    { youtubeId: "oo0AbS8vntE", title: "Why Blockchain Needs a New Internet – Austin Federa Explains", views: "2.6K views", year: "2025" },
    { youtubeId: "J8ww0siiqwM", title: "The $100M Idea? Why This Crypto Startup is Betting on Social Trading", views: "2.8K views", year: "2025" },
    { youtubeId: "9ssHosLI5nY", title: "Behind the scenes of one of the biggest company on Solana", views: "2.7K views", year: "2025" },
    { youtubeId: "SrcLDMOQtDo", title: "FROM MEMECOIN TO MOBILE APP: MOONWALK", views: "2K views", year: "2025" },
    { youtubeId: "C52CVNYz2UE", title: "Engineering for mass adoption, with the CTO of DRiP", views: "2.8K views", year: "2025" },
    { youtubeId: "Zk6YBljdyOw", title: "From YC to Crypto: The Startup Journey of Jupiter’s Co Founder", views: "10K views", year: "2025" },
  ],
  emptyStateNote: "Video showcase coming soon.",
};

export const brandPartnershipSection: ShowcaseSectionData = {
  id: "brand-partnerships",
  eyebrow: "06",
  title: "Brand Partnerships",
  role: "Brand–Creator Partnership Manager",
  description:
    "Manage brand-and-creator partnership campaigns end-to-end — matching brands with creators, scoping deliverables and overseeing execution. Handled campaigns worth $100K+ over the past year.",
  stats: ["$100K+ in campaigns managed in the last year"],
  videos: [
    // PLACEHOLDER: add real YouTube video IDs from brand campaigns here.
  ],
  emptyStateNote: "Video showcase coming soon.",
};

// ---------------------------------------------------------------------------
// Indo-German Express — Instagram growth case study
// ---------------------------------------------------------------------------
// Wrap a phrase in **double asterisks** to highlight it in a milestone.

export const indoGermanSection: InstagramCaseStudyData = {
  id: "indo-german-express",
  eyebrow: "05",
  title: "Indo-German Express",
  role: "Instagram Growth & Content Strategy",
  timeline: "December 2023 — Present",
  brief:
    "In December 2023, Indo-German Express approached me with a simple requirement: they wanted to grow their Instagram page so they could run ads and establish credibility with potential customers.",
  insight:
    "Anyone can run ads from an Instagram page, regardless of how old or new it is. But when potential customers click on an ad and visit the profile, the content, engagement, and overall presence of the page influence whether they perceive the business as legitimate and trustworthy.",
  approach:
    "So, we started creating relatable and meme-driven content around the Indo-German audience.",
  milestones: [
    {
      when: "Dec 2023",
      title: "Kick-off",
      text: "Started building the page from scratch, with content designed to make the profile look credible to anyone arriving from an ad.",
    },
    {
      when: "6 months in",
      title: "First traction",
      text: "Grew the page to **30,000 followers**, while the business started generating approximately **$3,000–$4,000 in revenue from its courses**.",
    },
    {
      when: "Next 3 years",
      title: "Consistency",
      text: "Continued publishing content consistently, building a community and strengthening the brand's presence.",
    },
    {
      when: "Today",
      title: "A real business",
      text: "Grown to **80,000 Instagram followers**, generating approximately **$100,000–$150,000 in annual revenue**.",
    },
  ],
  outcome:
    "What started as a page intended to support paid advertising evolved into a long-term content engine that built an audience, established trust, and contributed to the growth of the business.",
  handle: "indogermanexpress",
  instagramUrl: "https://www.instagram.com/indogermanexpress/",
  followerGrowth: [
    { label: "Dec 2023", followers: 0, display: "0" },
    { label: "6 months in", followers: 30000, display: "30K" },
    { label: "Today", followers: 80000, display: "80K" },
  ],
  revenue: [
    { label: "Course revenue at 6 months", value: "$3K–4K" },
    { label: "Annual revenue today", value: "$100K–150K" },
  ],
};
