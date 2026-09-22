# Astro Starter Kit: Blog

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template)

![Astro Template Preview](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

<!-- dash-content-start -->

Create a blog with Astro and deploy it on Cloudflare Workers as a [static website](https://developers.cloudflare.com/workers/static-assets/).

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

<!-- dash-content-end -->

## Getting Started

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/astro-blog-starter-template
```

A live public deployment of this template is available at [https://astro-blog-starter-template.templates.workers.dev](https://astro-blog-starter-template.templates.workers.dev)

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run deploy`          | Deploy your production site to Cloudflare        |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## 🗄️ Archive

A metadata-driven archive lives at `/archive`, organized as **brand → collection → item**.

| What | Where |
| :--- | :---- |
| Brands | `src/content/archive/brands.json` |
| Collections (season, campaign, drop) | `src/content/archive/collections.json` (each has a `brand`) |
| Items (one Markdown file per asset) | `src/content/archive/items/<brand>/<name>.md` |
| Schema (all metadata fields) | `src/content.config.ts` |

To add an item, create a Markdown file whose frontmatter holds the metadata; the body holds notes:

```md
---
title: SS26 lookbook
type: lookbook            # image | video | lookbook | campaign | sketch | techpack | document | link
status: published         # draft | final | published | retired
brand: swss               # id from brands.json
collection: swss-ss26     # id from collections.json (optional)
tags: [swim, ss26]
media: /archive/swss/ss26-lookbook.jpg   # file in public/ or a full URL
links:
  - label: Instagram post
    url: https://www.instagram.com/p/...
createdDate: 2026-04-18
creator: Juan Ogando
credits:
  - role: Photography
    name: ...
tools: [ComfyUI, Magnific]
rights: All rights reserved
usage: Web and social
---

Notes about the piece.
```

The build rejects an unknown brand/collection id or a missing required field. Pages generated:

- `/archive` — search and filter by brand, collection, type, tag, year and status (filters are kept in the URL)
- `/archive/brands/<brand>` — a brand's work grouped by collection
- `/archive/collections/<collection>` — one collection
- `/archive/<brand>/<name>` — an item with its full metadata
- `/archive/index.json` — full metadata export
