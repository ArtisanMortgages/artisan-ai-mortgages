import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://artisanmortgages.ai";
const today = new Date().toISOString().split("T")[0];

const urls: { loc: string; priority: string; changefreq: string }[] = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/services", priority: "0.9", changefreq: "monthly" },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/contact", priority: "0.8", changefreq: "yearly" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

export const Route = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
