"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, TiltCard } from "@/Components/ui/motion-effects";
import ThemeToggle from "@/Components/ui/theme-toggle";
import { categories, photos } from "@/lib/photos";

const featuredPhoto = {
  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90",
  title: "Somewhere, slowly",
  creator: "Amara James",
};

function PhotoCard({ photo, isSaved, onToggleSave }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article className="group min-w-0">
      <div
        className={`gallery-image-placeholder relative overflow-hidden rounded-2xl ${photo.shape}`}
      >
        <Link
          href={`/photos/${photo.id}`}
          className="absolute inset-0"
          aria-label={`View ${photo.title} by ${photo.creator}`}
        >
          <Image
            src={photo.image}
            alt={`${photo.title}, photographed by ${photo.creator}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        </Link>
        <motion.button
          type="button"
          tabIndex={0}
          onClick={() => onToggleSave(photo.id)}
          aria-label={isSaved ? `Unsave ${photo.title}` : `Save ${photo.title}`}
          aria-pressed={isSaved}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.88 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className={`absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full backdrop-blur-md transition ${
            isSaved
              ? "bg-white text-rose-500"
              : "bg-black/20 text-white hover:bg-white hover:text-[#24251f]"
          }`}
        >
          <Heart size={17} fill={isSaved ? "currentColor" : "none"} />
        </motion.button>
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#35362f] backdrop-blur-md">
          {photo.category}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <h3 className="gallery-text text-[15px] font-medium tracking-[-0.02em]">
            <Link
              href={`/photos/${photo.id}`}
              className="transition hover:opacity-70"
            >
            {photo.title}
            </Link>
          </h3>
          <p className="gallery-subtle mt-1 text-[13px]">
            {photo.creator} <span className="px-1">·</span> {photo.location}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          size={17}
          className="gallery-faint mt-0.5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </article>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const filteredPhotos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return photos.filter((photo) => {
      const matchesCategory =
        activeCategory === "All" || photo.category === activeCategory;
      const matchesSearch =
        !query ||
        `${photo.title} ${photo.creator} ${photo.category} ${photo.location} ${photo.description}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visiblePhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, 8);

  function toggleSavedPhoto(photoId) {
    setSavedPhotos((current) =>
      current.includes(photoId)
        ? current.filter((id) => id !== photoId)
        : [...current, photoId],
    );
  }

  return (
    <main className="gallery-bg gallery-text min-h-screen transition-colors duration-300">
      <Reveal as="header" className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <a
          href="#"
          className="flex items-center gap-2.5"
          aria-label="Still home"
        >
          <span className="gallery-accent-soft grid size-8 place-items-center rounded-full">
            <span className="gallery-accent-dot size-2 rounded-full" />
          </span>
          <span className="text-[20px] font-semibold tracking-[-0.07em]">
            still<span className="gallery-highlight">.</span>
          </span>
        </a>

        <nav className="gallery-muted hidden items-center gap-8 text-[13px] md:flex">
          <a className="gallery-text" href="#gallery">
            Discover
          </a>
          <Link className="gallery-link" href="/about">
            About
          </Link>
          <Link className="gallery-link" href="/PhotoGraph">
            For photographers
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#gallery"
            className="gallery-button rounded-full px-5 py-2.5 text-[12px] font-medium transition"
          >
            Explore the gallery
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto grid max-w-[1440px] items-center gap-9 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 lg:px-14 lg:pb-20 lg:pt-16">
        <div className="max-w-[530px]">
          <p className="gallery-accent mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.19em]">
            <span className="gallery-accent-line h-px w-6" />A curated photo
            journal
          </p>
          <h1 className="font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.96] tracking-[-0.065em]">
            See the world
            <br />
            <span className="gallery-accent font-normal italic">
              a little
            </span>{" "}
            differently.
          </h1>
          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="gallery-muted max-w-[300px] text-[14px] leading-7">
              A quiet corner of the internet for images that make you pause,
              look closer, and feel a little more.
            </p>
            <a
              href="#gallery"
              className="gallery-text inline-flex w-fit items-center gap-2 text-[13px] font-medium transition hover:gap-3"
            >
              Wander through <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <TiltCard
          as="a"
          href="#gallery"
          className="gallery-image-placeholder group relative block min-h-[310px] overflow-hidden rounded-[24px] sm:min-h-[420px] lg:min-h-[500px]"
          aria-label={`Featured photograph: ${featuredPhoto.title} by ${featuredPhoto.creator}`}
        >
          <Image
            src={featuredPhoto.image}
            alt="A sweeping mountain landscape beneath a hazy open sky"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />
          <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/15 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-7 sm:top-7">
            This week&apos;s focus
          </span>
          <span className="absolute bottom-6 left-5 right-5 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <span>
              <span className="block font-serif text-[32px] italic leading-tight sm:text-[40px]">
                {featuredPhoto.title}
              </span>
              <span className="mt-1.5 block text-[12px] text-white/75">
                A photograph by {featuredPhoto.creator}
              </span>
            </span>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-[#292a25]">
              <ArrowUpRight size={19} />
            </span>
          </span>
        </TiltCard>
      </Reveal>

      <Reveal
        as="section"
        id="gallery"
        delay={0.08}
        className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-14 lg:pb-28"
      >
        <div className="gallery-border border-t pt-8 sm:pt-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="gallery-subtle mb-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
                The collection <span className="px-1.5">/</span> No. 01
              </p>
              <h2 className="font-serif text-[38px] leading-none tracking-[-0.04em] sm:text-[48px]">
                Find your kind of quiet.
              </h2>
            </div>
            <div className="relative w-full sm:max-w-[300px]">
              <Search
                size={17}
                aria-hidden="true"
                className="gallery-subtle absolute left-4 top-1/2 -translate-y-1/2"
              />
              <input
                type="search"
                name="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setShowAll(false);
                }}
                placeholder="Search images, places, people..."
                aria-label="Search images, places, and photographers"
                className="gallery-search h-12 w-full rounded-full border bg-transparent pl-11 pr-4 text-[12px] outline-none transition"
              />
            </div>
          </div>

          <div className="gallery-border mt-8 flex flex-wrap items-center justify-between gap-4 border-b pb-5">
            <div
              className="flex flex-wrap gap-2"
              aria-label="Filter by category"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full px-4 py-2 text-[11px] transition ${
                    activeCategory === category
                      ? "gallery-category-active"
                      : "gallery-category"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p
              className="gallery-subtle flex items-center gap-2 text-[11px]"
              aria-live="polite"
            >
              <SlidersHorizontal size={14} />
              {filteredPhotos.length}{" "}
              {filteredPhotos.length === 1 ? "photograph" : "photographs"}
            </p>
          </div>

          {visiblePhotos.length > 0 ? (
            <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-11 lg:grid-cols-3 lg:gap-x-7">
              {visiblePhotos.map((photo, index) => (
                <Reveal
                  key={photo.id}
                  as="div"
                  delay={(index % 3) * 0.07}
                  className="h-full"
                >
                  <PhotoCard
                    photo={photo}
                    isSaved={savedPhotos.includes(photo.id)}
                    onToggleSave={toggleSavedPhoto}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl">Nothing in view just yet.</p>
              <p className="gallery-subtle mt-2 text-sm">
                Try another search or choose a different category.
              </p>
            </div>
          )}

          {filteredPhotos.length > 8 && (
            <div className="mt-12 flex justify-center">
              <motion.button
                type="button"
                tabIndex={0}
                onClick={() => setShowAll((current) => !current)}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -2, scale: 1.025 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="gallery-more inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-[12px] font-medium transition"
              >
                {showAll ? "Show a little less" : "More to discover"}
                {showAll ? <ArrowRight size={15} /> : <ArrowDown size={15} />}
              </motion.button>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal
        as="footer"
        id="about"
        className="gallery-surface gallery-border border-t px-5 py-10 sm:px-8 lg:px-14"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="gallery-muted text-[13px]">
            Made for looking a little longer.
          </p>
          <p className="gallery-faint text-[11px]">
            A collection of work by photographers around the world.
          </p>
        </div>
      </Reveal>
    </main>
  );
}
