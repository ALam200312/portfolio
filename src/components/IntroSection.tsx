import { youtubeChannels } from "@/lib/content";

const stats: { value: string; label: string; underline?: boolean }[] = [
  { value: "4+", label: "Years in content & production" },
  { value: "50M+", label: "Views generated across all channels", underline: true },
  { value: "718K+", label: "Subscribers grown, one channel, whole team" },
  { value: "$100K+", label: "Brand campaigns managed", underline: true },
];

function channelUrl(id: string) {
  return youtubeChannels.find((c) => c.id === id)?.channelUrl;
}

// Every entry with a url links out to the real channel/profile. Entries
// without one (Superteam) don't have a distinct URL in the project yet, so
// they stay as plain text rather than a guessed link.
const workedWith: { name: string; url?: string }[] = [
  { name: "Harkirat Singh", url: channelUrl("harkirat-singh") },
  { name: "100xDevs", url: "https://www.youtube.com/@100xDevs-edu" },
  { name: "Singh in USA", url: channelUrl("singh-in-usa") },
  { name: "Julia Turc", url: channelUrl("julia-turc") },
  { name: "Software with Nick", url: channelUrl("software-with-nick") },
  { name: "Superteam" },
];

export default function IntroSection() {
  return (
    <section id="intro" className="scroll-mt-20 border-b border-border px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Content Strategist &amp; Team Contributor
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
          Since <span className="text-accent">2023</span>, I have been part of the teams behind YouTube channels that grow.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          I started as a video editor in 2023, and channel growth has never
          looked like a one-person job to me — it&apos;s scripting, production,
          post-production, and strategy, each done well by someone who owns
          that piece. Today I contribute content strategy and production
          across several YouTube channels, working alongside the writers,
          editors, and creators who make each one run, with brand-partnership
          work alongside it.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="mailto:reachhanzala@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
          <a
            href="#youtube"
            className="text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            See the work ↓
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                <span
                  className={
                    stat.underline
                      ? "text-accent underline decoration-accent decoration-[3px] underline-offset-[6px]"
                      : undefined
                  }
                >
                  {stat.value}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          Worked with{" "}
          {workedWith.map((item, i) => (
            <span key={item.name}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-accent"
                >
                  {item.name}
                </a>
              ) : (
                <span className="text-foreground/80">{item.name}</span>
              )}
              {i < workedWith.length - 1 && <span> · </span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
