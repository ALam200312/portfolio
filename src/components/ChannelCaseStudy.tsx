import { YoutubeChannel } from "@/lib/types";
import ChannelVideoPlayer from "./ChannelVideoPlayer";

type Props = {
  channel: YoutubeChannel;
};

export default function ChannelCaseStudy({ channel }: Props) {
  return (
    <article id={channel.id} className="scroll-mt-20 py-12 last:pb-0 md:py-16">
      <ChannelVideoPlayer
        videos={
          channel.featuredVideo
            ? [channel.featuredVideo, ...channel.videos]
            : channel.videos
        }
        footer={
          <a
            href={channel.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Visit YouTube Channel
            <span aria-hidden="true">→</span>
          </a>
        }
        intro={
          <>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                {channel.name}
              </h3>
              <span
                className={`text-sm font-medium uppercase tracking-[0.1em] ${
                  channel.status === "current" ? "text-accent" : "text-muted"
                }`}
              >
                {channel.status === "current" ? "Currently working" : "Past project"}
              </span>
            </div>

            <dl className="mt-2 grid grid-cols-[6rem_minmax(0,1fr)] gap-y-1 text-muted">
              <dt>Role</dt>
              <dd className="text-foreground/90">{channel.roleTitle}</dd>
              <dt>Timeline</dt>
              <dd className="text-foreground/90">{channel.timeline}</dd>
            </dl>

            <p className="mt-5 leading-7 text-foreground/90">{channel.overview}</p>
          </>
        }
      >
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
            My role
          </p>
          <ul className="mt-3 space-y-2">
            {channel.responsibilities.map((item) => (
              <li key={item} className="flex gap-2 text-foreground/90">
                <span className="text-accent">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {channel.impact && channel.impact.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
              Impact
            </p>
            <ul className="mt-3 space-y-2">
              {channel.impact.map((item) => (
                <li key={item} className="flex gap-2 text-foreground/90">
                  <span className="text-accent">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ChannelVideoPlayer>
    </article>
  );
}
