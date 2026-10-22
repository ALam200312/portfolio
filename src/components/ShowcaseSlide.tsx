import Image from "next/image";
import { ShowcaseSectionData } from "@/lib/types";
import VideoGrid from "./VideoGrid";

export default function ShowcaseSlide({ data }: { data: ShowcaseSectionData }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
        {data.eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-foreground md:text-5xl">
        {data.title}
      </h2>
      {data.role && (
        <p className="mt-1 text-lg font-medium text-accent">{data.role}</p>
      )}

      {data.logos && (
        <div className="mt-6 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
            Brands I&apos;ve worked with
          </p>
          <Image
            src={data.logos.src}
            alt={data.logos.alt}
            width={data.logos.width}
            height={data.logos.height}
            className="mt-3 h-auto w-full"
          />
        </div>
      )}

      <p className={`${data.logos ? "mt-8" : "mt-4"} max-w-2xl text-lg leading-8 text-foreground/90`}>
        {data.description}
      </p>

      {data.stats && data.stats.length > 0 && (
        <ul className="mt-4 space-y-1">
          {data.stats.map((stat) => (
            <li key={stat} className="font-medium text-accent">
              {stat}
            </li>
          ))}
        </ul>
      )}

      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-accent"
        >
          {data.link.label}
        </a>
      )}

      {(data.featuredVideo || data.videos.length > 0 || data.emptyStateNote) && (
        <div className={`mt-8 ${data.compactVideo ? "max-w-5xl" : ""}`}>
          <VideoGrid
            featured={data.featuredVideo}
            videos={data.videos}
            emptyStateNote={data.emptyStateNote}
          />
        </div>
      )}
    </div>
  );
}
