import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, Eye, Heart } from "lucide-react";
import { Reveal } from "@/Components/ui/motion-effects";
import ThemeToggle from "@/Components/ui/theme-toggle";

export const metadata = {
  title: "For photographers — still.",
  description:
    "A thoughtful home for photographers and the images that make us pause, look closer, and feel a little more.",
};

const values = [
  {
    number: "01",
    icon: Eye,
    title: "A point of view",
    description:
      "We look for images with a distinct perspective, whether they find wonder in a faraway landscape or an everyday detail.",
  },
  {
    number: "02",
    icon: Heart,
    title: "The story behind it",
    description:
      "A photograph means more when we know who made it and where it came from. We give those details room alongside the work.",
  },
  {
    number: "03",
    icon: Camera,
    title: "Room to be seen",
    description:
      "The collection is designed for looking, not rushing: a calm place for your images to meet curious people.",
  },
];

export default function PhotographerPage() {
  return (
    <main className="gallery-bg gallery-text min-h-screen">
      <Reveal as="header" className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
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
          <Link className="gallery-link" href="/about">
            About
          </Link>
          <Link
            className="gallery-text"
            href="/PhotoGraph"
            aria-current="page"
          >
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
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-14 lg:pb-28 lg:pt-24">
        <p className="gallery-accent mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.19em]">
          <span className="gallery-accent-line h-px w-6" />
          For the ones behind the lens
        </p>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <h1 className="max-w-[850px] font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.96] tracking-[-0.065em]">
            Your way of seeing
            <br />
            {" "}
            <span className="gallery-accent font-normal italic">
              belongs here.
            </span>
          </h1>
          <div className="max-w-[420px] pb-1">
            <p className="gallery-muted text-[14px] leading-7">
              still. is a curated photo journal shaped by the people who make
              the images. We want to help thoughtful work find the people who
              are ready to spend time with it.
            </p>
            <Link
              href="/#gallery"
              className="gallery-text mt-6 inline-flex items-center gap-2 text-[13px] font-medium transition hover:gap-3"
            >
              See the collection <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="gallery-surface gallery-border border-y px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="gallery-subtle mb-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
              A shared journal <span className="px-1.5">/</span> 01
            </p>
            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.04em] sm:text-[48px]">
              The person behind the photograph matters.
            </h2>
          </div>
          <div className="max-w-[690px]">
            <p className="gallery-muted text-[16px] leading-8 sm:text-[18px] sm:leading-9">
              We believe a photograph is more than a passing image. It carries
              the maker&apos;s attention, the feeling of a place, and the
              particular moment they chose to keep. Our collection brings that
              work together without losing sight of the people behind it.
            </p>
            <p className="gallery-muted mt-5 text-[16px] leading-8 sm:text-[18px] sm:leading-9">
              Whether you work with landscapes, portraits, architecture, or the
              small rituals of everyday life, there is space here for a
              perspective that feels like your own.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mb-10">
          <p className="gallery-subtle mb-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
            What guides the collection <span className="px-1.5">/</span> 02
          </p>
          <h2 className="font-serif text-[38px] leading-none tracking-[-0.04em] sm:text-[48px]">
            Thoughtful work, thoughtfully shared.
          </h2>
        </div>

        <div className="gallery-border grid border-t sm:grid-cols-3">
          {values.map(({ number, icon: Icon, title, description }) => (
            <Reveal
              as="article"
              key={number}
              delay={Number(number) * 0.06}
              className="gallery-border border-b py-7 sm:border-b-0 sm:border-r sm:px-6 sm:py-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 lg:py-10 lg:first:pr-10 lg:last:pl-10"
            >
              <div className="gallery-accent-soft grid size-10 place-items-center rounded-full">
                <Icon size={17} aria-hidden="true" />
              </div>
              <p className="gallery-accent mt-7 text-[11px] font-medium">
                {number}
              </p>
              <h3 className="mt-2 font-serif text-[25px] tracking-[-0.03em]">
                {title}
              </h3>
              <p className="gallery-muted mt-3 text-[13px] leading-7">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="gallery-surface px-5 py-14 sm:px-8 sm:py-16 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="gallery-subtle mb-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
              Take a closer look
            </p>
            <h2 className="font-serif text-[34px] leading-tight tracking-[-0.04em] sm:text-[42px]">
              Meet the photographers in our collection.
            </h2>
          </div>
          <Link
            href="/#gallery"
            className="gallery-button inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-3 text-[12px] font-medium transition"
          >
            Explore the gallery <ArrowUpRight size={15} />
          </Link>
        </div>
      </Reveal>

      <Reveal as="footer" className="gallery-border border-t px-5 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="gallery-muted text-[13px]">
            Made for looking a little longer.
          </p>
          <Link
            href="/"
            className="gallery-link gallery-faint text-[11px] transition"
          >
            Back to still.
          </Link>
        </div>
      </Reveal>
    </main>
  );
}