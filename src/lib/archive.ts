import { type CollectionEntry, getCollection } from "astro:content";

export type ArchiveItem = CollectionEntry<"archive">;
export type Brand = CollectionEntry<"brands">;
export type ArchiveCollection = CollectionEntry<"archiveCollections">;

// Loads every archive item with its brand and collection resolved, newest first.
export async function getArchive() {
  const [items, brands, collections] = await Promise.all([
    getCollection("archive"),
    getCollection("brands"),
    getCollection("archiveCollections"),
  ]);
  const brandById = new Map(brands.map((b) => [b.id, b]));
  const collectionById = new Map(collections.map((c) => [c.id, c]));

  const entries = items
    .map((item) => ({
      item,
      brand: brandById.get(item.data.brand.id)!,
      collection: item.data.collection
        ? collectionById.get(item.data.collection.id)
        : undefined,
    }))
    .sort(
      (a, b) =>
        b.item.data.createdDate.valueOf() - a.item.data.createdDate.valueOf(),
    );

  return { entries, brands, collections };
}

export type ArchiveEntry = Awaited<ReturnType<typeof getArchive>>["entries"][number];

// Flat, serializable metadata record used for search and the JSON export.
export function toRecord({ item, brand, collection }: ArchiveEntry) {
  const d = item.data;
  return {
    id: item.id,
    url: `/archive/${item.id}/`,
    title: d.title,
    description: d.description ?? null,
    type: d.type,
    status: d.status,
    brand: { id: brand.id, name: brand.data.name },
    collection: collection
      ? { id: collection.id, name: collection.data.name }
      : null,
    tags: d.tags,
    media: d.media ?? null,
    thumbnail: d.thumbnail ?? d.media ?? null,
    links: d.links,
    createdDate: d.createdDate.toISOString(),
    archivedDate: d.archivedDate?.toISOString() ?? null,
    year: d.createdDate.getUTCFullYear(),
    creator: d.creator ?? null,
    credits: d.credits,
    tools: d.tools,
    rights: d.rights ?? null,
    usage: d.usage ?? null,
    notes: item.body?.trim() || null,
  };
}

export function uniqueSorted(values: Iterable<string>) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}
