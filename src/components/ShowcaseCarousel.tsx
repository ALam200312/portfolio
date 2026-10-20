"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  // Kept on the slide element so nav anchors like #podcast still land on it.
  id: string;
  label: string;
  content: ReactNode;
};

type Props = {
  slides: Slide[];
};

export default function ShowcaseCarousel({ slides }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [height, setHeight] = useState<number>();

  // Size the track to the visible slide so a shorter slide doesn't inherit
  // the tallest slide's height (and leave a gap below it).
  useEffect(() => {
    const slide = trackRef.current?.children[active] as HTMLElement | undefined;
    if (!slide) return;
    const observer = new ResizeObserver(() => setHeight(slide.offsetHeight));
    observer.observe(slide);
    return () => observer.disconnect();
  }, [active]);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  const arrowClass =
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground";

  return (
    <section
      aria-roledescription="carousel"
      className="border-b border-border px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <div role="tablist" className="flex flex-wrap gap-x-6 gap-y-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => goTo(i)}
                className={`cursor-pointer text-sm font-medium transition-colors ${
                  i === active ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous"
              className={arrowClass}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === slides.length - 1}
              aria-label="Next"
              className={arrowClass}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          style={{ height }}
          className="mt-10 flex items-start snap-x snap-mandatory overflow-x-auto overflow-y-hidden transition-[height] duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              id={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${slide.label}`}
              className="w-full shrink-0 snap-start scroll-mt-20"
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
