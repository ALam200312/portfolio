"use client";

import { useState } from "react";
import { ShowcaseVideo } from "@/lib/types";
import YouTubeEmbed from "./YouTubeEmbed";

type Props = {
  featured?: ShowcaseVideo;
  videos: ShowcaseVideo[];
  emptyStateNote?: string;
};

export default function VideoGrid({ featured, videos, emptyStateNote }: Props) {
  const all = featured ? [featured, ...videos] : videos;
  const [selectedId, setSelectedId] = useState(all[0]?.youtubeId);
  // Only autoplay after the visitor picks a video, not on first page load.
  const [picked, setPicked] = useState(false);

  const selected = all.find((v) => v.youtubeId === selectedId) ?? all[0];

  if (!selected) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-dashed border-border bg-panel text-center">
        <p className="px-6 text-muted">
          {emptyStateNote ?? "Video showcase coming soon."}
        </p>
      </div>
    );
  }

  function select(id: string) {
    setSelectedId(id);
    setPicked(true);
  }

  return (
    <div>
      <YouTubeEmbed
        key={selected.youtubeId}
        video={selected}
        size="large"
        autoPlay={picked}
      />

      {all.length > 1 && (
        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-muted">
            More work
          </p>
          <ul className="thin-scrollbar flex snap-x gap-4 overflow-x-auto pb-3">
            {all.map((video) => {
              const active = video.youtubeId === selected.youtubeId;
              return (
                <li key={video.youtubeId} className="w-48 shrink-0 snap-start sm:w-56">
                  <button
                    type="button"
                    onClick={() => select(video.youtubeId)}
                    aria-current={active ? "true" : undefined}
                    className="group block w-full cursor-pointer text-left"
                  >
                    <span
                      className={`relative block aspect-video overflow-hidden rounded-sm border-2 transition-colors ${
                        active ? "border-accent" : "border-transparent group-hover:border-border"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail */}
                      <img
                        src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {active && (
                        <span className="absolute left-2 top-2 rounded-sm bg-accent px-1.5 py-0.5 text-xs font-medium text-white">
                          Now playing
                        </span>
                      )}
                    </span>
                    <span
                      className={`mt-2 block truncate text-sm ${
                        active ? "font-medium text-accent" : "text-foreground/90 group-hover:text-accent"
                      }`}
                    >
                      {video.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
