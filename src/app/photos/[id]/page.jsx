import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getPhotoById, photos } from "@/lib/photos";

export function generateStaticParams() {
  return photos.map((photo) => ({ id: String(photo.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    return { title: "Photograph not found — still." };
  }

  return {
    title: `${photo.title} — still.`,
    description: `${photo.description} A photograph by ${photo.creator}, in ${photo.location}.`,
  };
}

export default async function PhotoPage({ params }) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

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

        <Link
          href="/#gallery"
          className="gallery-muted inline-flex items-center gap-2 text-[12px] transition hover:opacity-70"
        >
          <ArrowLeft size={15} />
          Back to the collection
        </Link>
      </header>

      <article className="mx-auto max-w-[1440px] px-5 pb-16 pt-7 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
        <p className="gallery-subtle mb-5 text-[10px] font-semibold uppercase tracking-[0.19em]">
          The collection <span className="px-1.5">/</span>{" "}
          {String(photo.id).padStart(2, "0")}
        </p>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <p className="gallery-accent mb-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
              {photo.category}
            </p>
            <h1 className="max-w-[850px] font-serif text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.98] tracking-[-0.06em]">
              {photo.title}
            </h1>
          </div>
          <div className="gallery-border border-l pl-5 lg:pb-1 lg:pl-7">
            <p className="gallery-subtle text-[10px] font-semibold uppercase tracking-[0.16em]">
              Photographed by
            </p>
            <p className="gallery-text mt-2 text-[16px] font-medium">
              {photo.creator}
            </p>
            <p className="gallery-subtle mt-5 text-[10px] font-semibold uppercase tracking-[0.16em]">
              Place
            </p>
            <p className="gallery-text mt-2 text-[14px]">{photo.location}</p>
          </div>
        </div>

        <figure className="gallery-image-placeholder relative mt-9 aspect-[4/3] overflow-hidden rounded-[24px] sm:mt-12 lg:aspect-[16/9]">
          <Image
            src={photo.image}
            alt={`${photo.title}, photographed by ${photo.creator} in ${photo.location}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="object-cover"
          />
        </figure>

        <div className="gallery-border mt-8 grid gap-8 border-t pt-7 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="max-w-[680px]">
            <p className="gallery-subtle text-[10px] font-semibold uppercase tracking-[0.16em]">
              A closer look
            </p>
            <p className="gallery-muted mt-3 text-[15px] leading-8">
              {photo.description}
            </p>
          </div>
          <Link
            href="/#gallery"
            className="gallery-link gallery-muted inline-flex items-center gap-2 text-[12px] transition"
          >
            Discover more photographs <ArrowUpRight size={14} />
          </Link>
        </div>
      </article>

      <footer className="gallery-surface gallery-border border-t px-5 py-8 sm:px-8 lg:px-14">
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
      </footer>
    </main>
  );
}
