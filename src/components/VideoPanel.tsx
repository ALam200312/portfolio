"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/lib/types";

type Props = {
  project: Project;
  onBack?: () => void;
  onEnded?: () => void;
};

export default function VideoPanel({ project, onBack, onEnded }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasVideo = Boolean(project.youtubeId);

  useEffect(() => {
    if (!onEnded) return;

    function handleMessage(event: MessageEvent) {
      if (event.origin !== "https://www.youtube.com") return;
      let data: unknown;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }
      if (
        typeof data === "object" &&
        data !== null &&
        "event" in data &&
        (data as { event: string }).event === "onStateChange" &&
        (data as { info?: number }).info === 0
      ) {
        onEnded?.();
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onEnded]);

  return (
    <div className="flex h-full flex-col text-base md:text-lg">
      <div className="flex shrink-0 items-center border-b border-border px-6 py-3 md:px-10">
        {onBack ? (
          <button
            onClick={onBack}
            className="text-muted underline decoration-border underline-offset-4 hover:text-foreground md:hidden"
          >
            ← back
          </button>
        ) : (
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted md:text-base">
            Work
          </span>
        )}
      </div>

      <div className="thin-scrollbar flex-1 overflow-y-auto">
        <div className="px-6 py-5 md:px-10">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.1em] text-muted md:text-base">
              {project.category}
            </p>
            {(project.duration || project.views) && (
              <p className="shrink-0 text-sm md:text-base">
                {project.duration && (
                  <span className="text-muted">{project.duration}</span>
                )}
                {project.duration && project.views && (
                  <span className="text-muted"> · </span>
                )}
                {project.views && (
                  <span className="font-medium text-money">
                    {project.views}
                  </span>
                )}
              </p>
            )}
          </div>

          <h2 className="mb-3 mt-1 text-2xl font-bold text-foreground md:text-3xl">
            {project.title}
          </h2>

          {hasVideo ? (
            <div className="aspect-video w-full overflow-hidden rounded-sm bg-black">
              <iframe
                ref={iframeRef}
                key={project.youtubeId}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${project.youtubeId}?enablejsapi=1`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => {
                  iframeRef.current?.contentWindow?.postMessage(
                    JSON.stringify({ event: "listening", id: project.id }),
                    "https://www.youtube.com"
                  );
                }}
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-sm border border-border bg-panel text-center">
              <p className="text-muted">
                No video embedded for this entry yet.
              </p>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-accent"
                >
                  {project.externalLabel ?? "Visit link"} ↗
                </a>
              )}
            </div>
          )}

          <dl className="mt-4 grid grid-cols-[9rem_minmax(0,1fr)] gap-y-1 text-muted">
            <dt>Credit</dt>
            <dd className="text-foreground/90">
              Hanzla Alam{project.role ? `, ${project.role}` : ""}
            </dd>
            <dt>Category</dt>
            <dd className="text-foreground/90">{project.category}</dd>
            {project.stats && (
              <>
                <dt>Stats</dt>
                <dd className="text-foreground/90">{project.stats}</dd>
              </>
            )}
          </dl>

          {project.description && (
            <p className="mt-3 leading-7 text-foreground/80">
              {project.description}
            </p>
          )}

          {hasVideo && (
            <a
              href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-accent"
            >
              Watch it on YouTube ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
