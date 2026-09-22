import type { APIRoute } from "astro";
import { getArchive, toRecord } from "../../lib/archive";

// Full metadata export of the archive, for backups or other tools.
export const GET: APIRoute = async () => {
  const { entries, brands, collections } = await getArchive();
  const body = {
    generated: new Date().toISOString(),
    brands: brands.map((b) => ({ id: b.id, ...b.data })),
    collections: collections.map((c) => ({
      id: c.id,
      ...c.data,
      brand: c.data.brand.id,
    })),
    items: entries.map(toRecord),
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
};
