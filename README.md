# Lambda Security

Source for the Lambda Security blog, deployed at <https://lambdasec.github.io>.

Built with [Astro](https://astro.build). Posts are Markdown files in
`src/content/blog/`; the site is a fully static build published to GitHub Pages
via GitHub Actions.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:4321  (live reload)
npm run build     # static output in dist/
npm run preview   # serve the production build locally
```

## Writing a post

Add a Markdown file under `src/content/blog/`. Front matter:

```md
---
title: "Your Post Title"
pubDate: 2026-01-15
permalink: "/Your-Post-Title/"
description: "One-line summary shown on the index and in the RSS feed."
---

Body in Markdown. Images go in `public/images/` and are referenced as
`/images/your-image.png`.
```

The `permalink` controls the post URL (existing posts keep their original paths).

## Structure

```
src/
  content/blog/   Markdown posts
  layouts/        Base + Post layouts
  pages/          index, projects, [...permalink] (posts), rss.xml, 404
  components/     Header, Footer
  styles/         global.css  (the "Blueprint" design system)
public/           images/, favicon, .nojekyll  (copied verbatim to the site)
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
Astro site and publishes it to GitHub Pages.

> One-time setup: in the repository **Settings → Pages → Build and deployment**,
> set **Source** to **GitHub Actions**.
