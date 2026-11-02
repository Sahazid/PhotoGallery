import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/Components/ui/theme-toggle";

export const metadata = {
  title: "About — still.",
  description:
    "Meet still., a curated photo journal for images that make you pause, look closer, and feel a little more.",
};

const principles = [
  {
    number: "01",
    title: "Look a little longer",
    description:
      "We make room for photographs that reward a second glance, and for the stories that unfold when you give them one.",
  },
  {
    number: "02",
    title: "People before numbers",
    description:
      "Every image has a person and a place behind it. We bring those details forward instead of hiding them in a feed.",
  },
  {
    number: "03",
    title: "A collection with care",
    description:
      "A thoughtful mix of perspectives makes the collection richer. We celebrate many ways of seeing the same world.",
  },
];

export default function AboutPage() {
  return (
    <main className="gallery-bg gallery-text min-h-screen">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Still home"
        >
          <span className="gallery-accent-soft grid size-8 place-items-center rounded-full">
            <span className="gallery-accent-dot size-2 rounded-full" />
          </span>
          <span className="text-[20px] font-semibold tracking-[-0.07em]">
            still<span className="gallery-highlight">.</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="gallery-muted hidden items-center gap-8 text-[13px] md:flex"
        >
          <Link className="gallery-link" href="/#gallery">
            Discover
          </Link>
          <Link className="gallery-text" href="/about" aria-current="page">
            About
          </Link>
          <Link className="gallery-link" href="/PhotoGraph">
            For photographers
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#gallery"
            className="gallery-button rounded-full px-5 py-2.5 text-[12px] font-medium transition"
          >
            Explore the gallery
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-14 lg:pb-28 lg:pt-20">
        <div className="max-w-[550px]">
          <p className="gallery-accent mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.19em]">
            <span className="gallery-accent-line h-px w-6" />A note on still.
          </p>
          <h1 className="font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.96] tracking-[-0.065em]">
            Made for
            <br />
            looking{" "}
            <span className="gallery-accent font-normal italic">a little</span>
            <br />
            longer.
          </h1>
          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="gallery-muted max-w-[330px] text-[14px] leading-7">
              still. is a curated photo journal for images that make you pause,
              look closer, and feel a little more.
            </p>
            <a
              href="#our-belief"
              className="gallery-text inline-flex w-fit items-center gap-2 text-[13px] font-medium transition hover:gap-3"
            >
              Get to know us <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div
          role="img"
          aria-label="A quiet mountain landscape beneath a hazy open sky"
          className="gallery-image-placeholder relative min-h-[340px] overflow-hidden rounded-[24px] bg-cover bg-center sm:min-h-[470px] lg:min-h-[550px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 55%, rgb(0 0 0 / 42%)), url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85')",
          }}
        >
          <p className="absolute bottom-6 left-6 font-serif text-[28px] italic text-white sm:bottom-8 sm:left-8 sm:text-[36px]">
            There is more to notice.
          </p>
        </div>
      </section>

      <section
        id="our-belief"
        className="gallery-surface gallery-border border-y px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="gallery-subtle mb-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
              Why we&apos;re here <span className="px-1.5">/</span> 01
            </p>
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.04em] sm:text-[48px]">
              Less scrolling.
              <br />
              More seeing.
            </h2>
          </div>
          <div className="max-w-[690px]">
            <p className="gallery-muted text-[16px] leading-8 sm:text-[18px] sm:leading-9">
              The internet moves quickly. Photographs ask us to do the opposite.
              We made still. as a softer place to find thoughtful images, meet
              the photographers behind them, and spend a moment with the details
              that might otherwise pass us by.
            </p>
            <p className="gallery-muted mt-5 text-[16px] leading-8 sm:text-[18px] sm:leading-9">
              No rush to get to the next thing. Just a growing collection of
              work from around the world, chosen to help you see it a little
              differently.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="gallery-subtle mb-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
              What matters to us <span className="px-1.5">/</span> 02
            </p>
            <h2 className="font-serif text-[38px] leading-none tracking-[-0.04em] sm:text-[48px]">
              A few things we believe.
            </h2>
          </div>
          <p className="gallery-subtle max-w-[290px] text-[13px] leading-6">
            The little choices that shape how this collection feels.
          </p>
        </div>

        <div className="gallery-border grid border-t sm:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="gallery-border border-b py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 lg:py-10 lg:first:pr-10 lg:last:pl-10"
            >
              <p className="gallery-accent text-[11px] font-medium">
                {principle.number}
              </p>
              <h3 className="mt-7 font-serif text-[25px] tracking-[-0.03em]">
                {principle.title}
              </h3>
              <p className="gallery-muted mt-3 text-[13px] leading-7">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-surface px-5 py-14 sm:px-8 sm:py-16 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="gallery-subtle mb-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
              Take your time
            </p>
            <h2 className="font-serif text-[34px] leading-tight tracking-[-0.04em] sm:text-[42px]">
              Find a little quiet in the collection.
            </h2>
          </div>
          <Link
            href="/#gallery"
            className="gallery-button inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-3 text-[12px] font-medium transition"
          >
            Discover the gallery
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <footer className="gallery-border border-t px-5 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="gallery-muted text-[13px]">
            Made for looking a little longer.
          </p>
          <Link
            href="/"
            className="gallery-link gallery-faint inline-flex items-center gap-1.5 text-[11px] transition"
          >
            Back to still. <ArrowUpRight size={13} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
