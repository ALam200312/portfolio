"use client";

import { ReactNode, useState } from "react";
import { ShowcaseVideo } from "@/lib/types";

type Props = {
  videos: ShowcaseVideo[];
  // Rendered at the top of the left column, above the video links.
  intro: ReactNode;
  // Rendered below the video links.
  children?: ReactNode;
  // Rendered at the bottom of the left column, below the video links.
  footer?: ReactNode;
};

export default function ChannelVideoPlayer({ videos, intro, children, footer }: Props) {
  const [selectedId, setSelectedId] = useState(videos[0]?.youtubeId);
  const [playing, setPlaying] = useState(false);

  const selected = videos.find((v) => v.youtubeId === selectedId) ?? videos[0];

  function select(id: string) {
    setSelectedId(id);
    setPlaying(true);
  }

  return (
    <div className="grid md:h-[500px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <div className="pt-8 md:overflow-y-auto md:border-r md:border-border md:py-0 md:pr-10">
        {intro}

        {videos.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
              My work
            </p>
            <ul className="mt-3 space-y-2">
              {videos.map((video) => {
                const active = video.youtubeId === selected?.youtubeId;
                return (
                  <li key={video.youtubeId} className="flex gap-2">
                    <span className={active ? "text-accent" : "text-muted"}>
                      {active ? "▶" : "—"}
                    </span>
                    <button
                      type="button"
                      onClick={() => select(video.youtubeId)}
                      aria-current={active ? "true" : undefined}
                      className={`cursor-pointer text-left underline underline-offset-4 transition-colors ${
                        active
                          ? "font-medium text-accent decoration-accent"
                          : "text-foreground/90 decoration-border hover:text-accent hover:decoration-accent"
                      }`}
                    >
                      {video.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {children}

        {footer}
      </div>

      <div className="sticky top-16 z-[5] order-first flex flex-col justify-center border-b border-border bg-background pt-3 pb-4 md:static md:order-none md:border-b-0 md:bg-transparent md:pt-0 md:pb-0 md:pl-10">
        {selected ? (
          <>
            <div className="group relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-black">
              {playing ? (
                <iframe
                  key={selected.youtubeId}
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1`}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 h-full w-full cursor-pointer"
                  aria-label={`Play ${selected.title}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail */}
                  <img
                    src={`https://i.ytimg.com/vi/${selected.youtubeId}/hqdefault.jpg`}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-foreground shadow-sm transition-transform group-hover:scale-105 md:h-14 md:w-14">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current md:h-6 md:w-6">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>
            <p className="mt-3 text-base font-medium text-foreground/90 md:text-lg">
              {selected.title}
            </p>
            {(selected.views || selected.year) && (
              <p className="text-sm text-muted">
                {selected.views && (
                  <span className="font-medium text-accent">{selected.views}</span>
                )}
                {selected.views && selected.year && <span> · </span>}
                {selected.year && <span>{selected.year}</span>}
              </p>
            )}
          </>
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-dashed border-border text-center">
            <p className="px-6 text-muted">Video showcase coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
