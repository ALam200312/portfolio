import { ArrowUpRight, Quote } from "lucide-react";
import { InstagramCaseStudyData } from "@/lib/types";
import Highlight from "./Highlight";

// Renders "**phrase**" segments of a milestone as highlights.
function renderText(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 === 1 ? <Highlight key={i}>{part}</Highlight> : part));
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
      {children}
    </p>
  );
}

function ProfileCard({ data }: { data: InstagramCaseStudyData }) {
  const peak = Math.max(...data.followerGrowth.map((g) => g.followers));

  return (
    <aside className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-100 to-white p-6 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.25)] lg:sticky lg:top-24">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-lg font-bold text-foreground">
            IGE
          </div>
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">@{data.handle}</p>
          <p className="text-sm text-muted">{data.title}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <Label>Follower growth</Label>
        <ul className="mt-4 space-y-4">
          {data.followerGrowth.map((point) => (
            <li key={point.label}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-muted">{point.label}</span>
                <span className="font-semibold text-foreground">{point.display}</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-panel">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600"
                  style={{ width: `${Math.max(2, (point.followers / peak) * 100)}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
        {data.revenue.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-semibold tracking-tight text-accent">{item.value}</p>
            <p className="mt-1 text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </div>

      <a
        href={data.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        View on Instagram
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </aside>
  );
}

export default function InstagramCaseStudy({ data }: { data: InstagramCaseStudyData }) {
  return (
    <section
      id={data.id}
      className="scroll-mt-20 border-b border-border px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Label>{data.eyebrow}</Label>
        <h2 className="mt-2 text-3xl font-bold text-foreground md:text-5xl">
          {data.title}
        </h2>
        <p className="mt-1 text-lg font-medium text-accent">{data.role}</p>
        <p className="mt-1 text-muted">{data.timeline}</p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div className="lg:order-last">
            <ProfileCard data={data} />
          </div>

          <div className="min-w-0">
            <Label>The brief</Label>
            <p className="mt-3 text-lg leading-8 text-foreground/90">{data.brief}</p>

            <div className="mt-8 border-l-4 border-accent bg-accent/5 py-5 pl-6 pr-5">
              <Label>The insight</Label>
              <p className="mt-3 text-lg leading-8 text-foreground">{data.insight}</p>
            </div>

            <div className="mt-8">
              <Label>The approach</Label>
              <p className="mt-3 text-lg leading-8 text-foreground/90">{data.approach}</p>
            </div>

            <div className="mt-10">
              <Label>How it grew</Label>
              <ol className="mt-6">
                {data.milestones.map((m, i) => {
                  const last = i === data.milestones.length - 1;
                  return (
                    <li key={m.when} className="relative flex gap-5 pb-8 last:pb-0">
                      {!last && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[7px] top-5 h-full w-px bg-border"
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className={`relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 ${
                          last ? "border-accent bg-accent" : "border-accent bg-background"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-accent">
                          {m.when}
                          <span className="text-muted"> · {m.title}</span>
                        </p>
                        <p className="mt-1.5 leading-7 text-foreground/90">{renderText(m.text)}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <figure className="mt-12 border-t border-border pt-8">
              <Quote className="h-7 w-7 text-accent" aria-hidden="true" />
              <blockquote className="mt-3 text-xl font-medium leading-9 text-foreground md:text-2xl md:leading-10">
                {data.outcome}
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
