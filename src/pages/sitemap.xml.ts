import type { APIRoute } from "astro";

// Every page under src/pages except 404; URLs end with "/" to match the canonical tags.
const paths = Object.keys(import.meta.glob("./*.astro"))
  .map((f) => f.slice(2, -6))
  .filter((p) => p !== "404")
  .map((p) => (p === "index" ? "" : `${p}/`))
  .sort();

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const urls = paths.map((p) => `  <url><loc>${new URL(base + p, site)}</loc></url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
