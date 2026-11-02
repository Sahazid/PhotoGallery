# still.

still. is a curated photo journal for images that make you pause, look closer,
and feel a little more. Browse a collection of photographs, filter by category,
search by image or photographer details, and open individual photo pages.

## Features

- Search photographs by title, photographer, category, location, or description.
- Filter the collection by category.
- Save and unsave photographs during the current visit.
- View photographs and their details on dedicated pages.
- Switch between light and dark themes; the selected theme is saved in browser
  storage.
- Responsive layouts for different screen sizes.

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Photographs are served from Unsplash, so the browser needs an internet
connection to load them.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Start the production server (run `npm run build` first). |
| `npm run lint` | Run ESLint. |

## Pages

| URL | Description |
| --- | --- |
| `/` | Featured photograph and searchable, filterable collection. |
| `/photos/[id]` | Details for an individual photograph. |
| `/about` | About the photo journal. |
| `/PhotoGraph` | Information for photographers. |

## Project structure

```text
src/
  app/
    about/          About page
    photos/[id]/    Individual photo page
    PhotoGraph/     Photographer information page
    globals.css     Global styles and theme colors
    layout.js       Root layout and site metadata
    page.js         Home page and gallery
  Components/ui/    Gallery UI components
  lib/
    photos.js       Photo collection and category data
    utils.js        Shared utilities
public/             Static assets
```

The photo collection and category list are defined in `src/lib/photos.js`.
Images use `images.unsplash.com`, which is allowed by the Next.js image
configuration in `next.config.mjs`.

## Built with

- Next.js and React
- Tailwind CSS
- Lucide icons
- Framer Motion and React Three Fiber
