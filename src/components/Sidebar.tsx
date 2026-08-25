"use client";

import { useMemo, useState } from "react";
import { Project } from "@/lib/types";
import { slugify } from "@/lib/slug";

type Props = {
  categories: string[];
  projects: Project[];
  selectedId: string;
  onSelect: (project: Project) => void;
};

export default function Sidebar({
  categories,
  projects,
  selectedId,
  onSelect,
}: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) => p.title.toLowerCase().includes(q));
  }, [query, projects]);

  return (
    <div className="px-6 py-8 text-lg leading-7 md:px-10 md:py-10">
      <header className="text-center">
        <p className="text-2xl font-bold tracking-[0.3em]">VIDEOS</p>
        <p className="text-base text-muted">BY</p>
        <p className="text-2xl font-bold tracking-[0.3em]">HANZALA</p>
      </header>

      <p className="mt-6 text-right text-base font-semibold uppercase tracking-[0.15em] text-muted">
        Roll camera:
      </p>

      <p className="mt-5 text-foreground/90">
        I&rsquo;m a content strategist and media operator with 4+ years
        scaling digital-first communities, most of it inside the Solana
        ecosystem. I joined{" "}
        <span className="text-foreground">Harkirat Singh&rsquo;s</span>{" "}
        channel in May 2023 at 60K subscribers and grew into running the
        whole engine — scripts, teams, production and post. When Harkirat
        launched 100xSchool, I moved onsite to Noida and built its channel
        from zero to 50K+ subscribers in six months.
      </p>

      <p className="mt-8 text-base font-semibold uppercase tracking-[0.15em] text-muted">
        Recognition
      </p>

      <dl className="mt-3 grid grid-cols-[9rem_1fr] gap-y-2 text-muted">
        <dt>Worked with</dt>
        <dd className="text-foreground/90">
          Harkirat Singh · 100xSchool · Superteam India · OnlyDevs
        </dd>
        <dt>Subscribers grown</dt>
        <dd className="text-foreground/90">609K+ &amp; 50K+</dd>
        <dt>Monthly views</dt>
        <dd className="text-foreground/90">1.3M+</dd>
        <dt>Content shipped</dt>
        <dd className="text-foreground/90">400+ pieces</dd>
        <dt>In the room at</dt>
        <dd className="text-foreground/90">
          DePIN Summit · Accelerate · APEX
        </dd>
      </dl>

      <div className="mt-5">
        <label className="flex items-center gap-2 border-b border-border pb-2 text-muted focus-within:border-accent focus-within:text-foreground">
          <span>/</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search videos"
            className="w-full bg-transparent text-foreground placeholder:text-muted focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-8 text-base font-semibold uppercase tracking-[0.15em] text-muted">
        Work
      </p>

      <div className="mt-3 space-y-6">
        {categories.map((category) => {
          const items = filtered.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div
              key={category}
              id={`cat-${slugify(category)}`}
              className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-[9rem_1fr]"
            >
              <button
                onClick={() => onSelect(items[0])}
                className="text-left underline decoration-border underline-offset-4 text-foreground hover:decoration-accent md:pt-0.5"
              >
                {category}
              </button>
              <ul className="space-y-2">
                {items.map((project) => {
                  const isActive = project.id === selectedId;
                  const tag = [project.duration, project.views]
                    .filter(Boolean)
                    .join(" · ");
                  return (
                    <li key={project.id}>
                      <button
                        onClick={() => onSelect(project)}
                        className={`flex w-full items-baseline justify-between gap-4 py-0.5 text-left underline decoration-border underline-offset-4 transition-colors hover:decoration-accent ${
                          isActive
                            ? "text-accent decoration-accent"
                            : "text-foreground/90 hover:text-foreground"
                        }`}
                      >
                        <span className="truncate">{project.title}</span>
                        {tag && (
                          <span className="shrink-0 text-sm text-muted no-underline">
                            {tag}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-muted">No videos match &ldquo;{query}&rdquo;.</p>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-border pt-4 text-sm text-muted">
        <span>Content strategist &amp; media operator · 2026</span>
        <a
          href="mailto:reachhanzala@gmail.com"
          className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-accent"
        >
          Email
        </a>
      </div>
    </div>
  );
}
