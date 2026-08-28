# Nahin Ahmed — Academic Portfolio (Next.js)

A 9-section academic portfolio site: About, Research, Publications, Education, Teaching,
Projects, Skills, Achievements, Contact — with dark/light mode that persists permanently
across refreshes, tab closes, and syncs across open tabs.

## Run it

```bash
npm install
npm run dev        # → http://localhost:3000
```

> This build was verified in a sandboxed environment without access to Google Fonts,
> so the font-fetch step was skipped there. On your machine (with normal internet
> access) `npm run build` / `npm run dev` will fetch the three Google Fonts
> (Newsreader, Instrument Sans, IBM Plex Mono) automatically — no changes needed.

## Before you publish

1. **Content** — edit `lib/data.ts`. Every field is documented and every placeholder
   is marked `// TODO`. This one file drives the whole site.
2. **Portrait** — replace `public/portrait.jpg` with your real photo (4:5 aspect ratio
   works best). A placeholder image is included so the build doesn't break.
3. **CV** — replace `public/Nahin-Ahmed-CV.pdf` with your real CV. A placeholder PDF
   is included for the same reason.
4. **Links** — update `github`, `linkedin`, `scholar`, `orcid`, and `email` in
   `lib/data.ts` under `profile`.

## Customize the look

- Colors, spacing tokens, and the dark palette live at the top of `app/globals.css`
  (`:root` and `.dark` blocks) — everything else references these CSS variables, so
  changing a handful of values re-themes the whole site.
- Layout/spacing utilities come from Tailwind directly in the JSX; the editorial
  typography and components (headers, cards, timeline, etc.) are hand-written classes
  in `globals.css`.

## How theme persistence works

1. Clicking the toggle sets a `.dark` class on `<html>` and writes
   `localStorage.setItem('theme', …)` — this choice is permanent.
2. An inline script in `<head>` (in `app/layout.tsx`) restores the saved theme
   **before first paint**, so there's no flash of the wrong theme on load.
3. Until the user makes an explicit choice, the site follows the OS
   `prefers-color-scheme`. Toggling in one browser tab also updates any other open
   tabs on the same site.

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com/new) — zero config
needed.
