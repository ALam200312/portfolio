"use client";

import { useState } from "react";
import { ShowcaseVideo } from "@/lib/types";

type Props = {
  video: ShowcaseVideo;
  size?: "large" | "small";
  autoPlay?: boolean;
};

export default function YouTubeEmbed({ video, size = "small", autoPlay = false }: Props) {
  const [playing, setPlaying] = useState(autoPlay);

  return (
    <div>
      <div className="group relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-panel">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail, lazy-loaded only on render */}
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
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
      <p
        className={`mt-2 truncate text-foreground/90 ${
          size === "large" ? "text-base font-medium md:text-lg" : "text-sm"
        }`}
      >
        {video.title}
      </p>
      {(video.views || video.year) && (
        <p className="text-sm text-muted">
          {video.views && <span className="font-medium text-accent">{video.views}</span>}
          {video.views && video.year && <span> · </span>}
          {video.year && <span>{video.year}</span>}
        </p>
      )}
    </div>
  );
}
