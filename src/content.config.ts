import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// ---------------------------------------------------------------------------
// Archive: brands -> collections -> items
// ---------------------------------------------------------------------------

// Brands the studio archives work for. One entry per brand in brands.json.
const brands = defineCollection({
  loader: file("./src/content/archive/brands.json"),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    color: z.string().optional(),
  }),
});

// Named groupings of work (a season, a campaign, a drop), each owned by a brand.
const archiveCollections = defineCollection({
  loader: file("./src/content/archive/collections.json"),
  schema: z.object({
    name: z.string(),
    brand: reference("brands"),
    season: z.string().optional(),
    year: z.number().int().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const ITEM_TYPES = [
  "image",
  "video",
  "lookbook",
  "campaign",
  "sketch",
  "techpack",
  "document",
  "link",
] as const;

export const ITEM_STATUSES = ["draft", "final", "published", "retired"] as const;

// One archived asset. Markdown files in src/content/archive/items/<brand>/...
// The frontmatter is the metadata record; the body holds free-form notes.
const archive = defineCollection({
  loader: glob({ base: "./src/content/archive/items", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    // Identity
    title: z.string(),
    description: z.string().optional(),
    type: z.enum(ITEM_TYPES),
    status: z.enum(ITEM_STATUSES).default("final"),

    // Organization
    brand: reference("brands"),
    collection: reference("archiveCollections").optional(),
    tags: z.array(z.string()).default([]),

    // Media: local path under /public or a full URL
    media: z.string().optional(),
    thumbnail: z.string().optional(),

    // Links: where the work lives or was published
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),

    // Creation
    createdDate: z.coerce.date(),
    archivedDate: z.coerce.date().optional(),
    creator: z.string().optional(),
    credits: z
      .array(z.object({ role: z.string(), name: z.string() }))
      .default([]),
    tools: z.array(z.string()).default([]),

    // Rights and usage
    rights: z.string().optional(),
    usage: z.string().optional(),
  }),
});

export const collections = { blog, brands, archiveCollections, archive };
