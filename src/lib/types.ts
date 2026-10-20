export type ShowcaseVideo = {
  youtubeId: string;
  title: string;
  views?: string;
  year?: string;
};

export type YoutubeChannel = {
  id: string;
  name: string;
  status: "current" | "past";
  roleTitle: string;
  timeline: string;
  overview: string;
  responsibilities: string[];
  impact?: string[];
  subscribers?: string;
  featuredVideo?: ShowcaseVideo;
  videos: ShowcaseVideo[];
  channelUrl: string;
  channelUrlIsPlaceholder?: boolean;
};

export type ShowcaseLink = {
  label: string;
  url: string;
};

export type ShowcaseSectionData = {
  id: string;
  eyebrow: string;
  title: string;
  role?: string;
  description: string;
  stats?: string[];
  featuredVideo?: ShowcaseVideo;
  videos: ShowcaseVideo[];
  link?: ShowcaseLink;
  emptyStateNote?: string;
  // Shows the video player slightly narrower than the full section width.
  compactVideo?: boolean;
};

export type InstagramCaseStudyData = {
  id: string;
  eyebrow: string;
  title: string;
  role: string;
  timeline: string;
  brief: string;
  insight: string;
  approach: string;
  milestones: { when: string; title: string; text: string }[];
  outcome: string;
  handle: string;
  instagramUrl: string;
  followerGrowth: { label: string; followers: number; display: string }[];
  revenue: { label: string; value: string }[];
};
