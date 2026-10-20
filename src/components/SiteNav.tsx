const links = [
  { href: "#youtube", label: "Channels" },
  { href: "#launch-videos", label: "Launch" },
  { href: "#podcast", label: "Podcast" },
  { href: "#indo-german-express", label: "Instagram" },
  { href: "#brand-partnerships", label: "Brands" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-border/70 bg-background backdrop-blur md:bg-background/80">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-6 md:px-10">
        <a href="#intro" className="text-sm font-semibold tracking-tight text-foreground">
          Hanzala Alam
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:reachhanzala@gmail.com"
          className="shrink-0 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
        >
          Email ↗
        </a>
      </div>
    </header>
  );
}
