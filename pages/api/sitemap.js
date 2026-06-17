const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Simula obtención de datos desde una base de datos o CMS
async function getDynamicRoutes() {
  const posts = [
    { slug: "guia-seo", updatedAt: "2026-06-15" },
    { slug: "meta-tags", updatedAt: "2026-06-10" },
    { slug: "sitemaps", updatedAt: "2026-06-05" },
  ];

  return posts.map((post) => ({
    loc: `${BASE_URL}/blog/${post.slug}`,
    lastmod: post.updatedAt,
    changefreq: "weekly",
    priority: 0.7,
  }));
}

export default async function handler(req, res) {
  const staticRoutes = [
    { loc: `${BASE_URL}/`, lastmod: "2026-06-17", changefreq: "daily", priority: 1.0 },
    { loc: `${BASE_URL}/blog`, lastmod: "2026-06-17", changefreq: "daily", priority: 0.9 },
    { loc: `${BASE_URL}/contacto`, lastmod: "2026-06-17", changefreq: "monthly", priority: 0.5 },
  ];

  const dynamicRoutes = await getDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
