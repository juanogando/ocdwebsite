import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

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

const video = defineCollection({
  // Load Markdown and MDX files in the `src/content/video/` directory.
  loader: glob({ base: "./src/content/video", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // One file, or several encodings of the same clip in preference order.
    src: z.union([z.string(), z.array(z.string()).nonempty()]),
    // The frame shown before playback, and the social preview image.
    poster: z.string().optional(),
    captions: z.string().optional(),
    aspect: z.string().default("16 / 9"),
  }),
});

export const collections = { blog, video };
