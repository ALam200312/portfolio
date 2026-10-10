import { YoutubeChannel } from "@/lib/types";
import ChannelCaseStudy from "./ChannelCaseStudy";

const areas = [
  "Content strategy",
  "Ideation",
  "Video production",
  "Editing",
  "Post-production",
  "Publishing",
  "Team management",
  "Channel growth",
];

type Props = {
  channels: YoutubeChannel[];
};

export default function YouTubeSection({ channels }: Props) {
  return (
    <section id="youtube" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
          02
        </p>
        <h2 className="mt-2 text-3xl font-bold text-foreground md:text-5xl">
          YouTube
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/90">
          I handle end-to-end YouTube channel production and strategy — from
          ideation and content strategy to editing, post-production,
          publishing, and managing the team behind the channel. It&rsquo;s
          rarely just editing; it&rsquo;s the whole pipeline.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border px-3 py-1 text-sm text-foreground/80"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-6 divide-y divide-border border-t border-border md:mt-10">
          {channels.map((channel) => (
            <ChannelCaseStudy key={channel.id} channel={channel} />
          ))}
        </div>
      </div>
    </section>
  );
}
