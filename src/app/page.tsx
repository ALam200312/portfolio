import SiteNav from "@/components/SiteNav";
import IntroSection from "@/components/IntroSection";
import YouTubeSection from "@/components/YouTubeSection";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import ShowcaseSlide from "@/components/ShowcaseSlide";
import InstagramCaseStudy from "@/components/InstagramCaseStudy";
import {
  youtubeChannels,
  launchVideosSection,
  podcastSection,
  brandPartnershipSection,
  indoGermanSection,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <IntroSection />
        <YouTubeSection channels={youtubeChannels} /> 
        <ShowcaseCarousel
          slides={[launchVideosSection, podcastSection].map((data) => ({
            id: data.id,
            label: data.title,
            content: <ShowcaseSlide data={data} />,
          }))}
        />
        <InstagramCaseStudy data={indoGermanSection} />
        <section
          id={brandPartnershipSection.id}
          className="scroll-mt-20 border-b border-border px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <ShowcaseSlide data={brandPartnershipSection} />
          </div>
        </section>
      </main>
      <footer className="px-6 py-8 text-center text-sm text-muted md:px-10">
        <p>Content strategist &amp; media operator · 2026</p>
        <a
          href="mailto:reachhanzala@gmail.com"
          className="mt-1 inline-block underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-accent"
        >
          reachhanzala@gmail.com
        </a>
      </footer>
    </>
  );
}
