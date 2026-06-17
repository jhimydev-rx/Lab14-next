// Simula una base de datos o CMS
// En producción, reemplazar con fetch a tu CMS o consulta a DB
const posts = [
  {
    slug: "guia-seo",
    title: "Guía Completa de SEO para 2026",
    excerpt: "Aprende las mejores técnicas de optimización para motores de búsqueda.",
    content: "Contenido completo sobre la guía de SEO para 2026. Aquí encontrarás estrategias avanzadas de optimización, investigación de keywords, link building y más.",
    updatedAt: "2026-06-15",
  },
  {
    slug: "meta-tags",
    title: "Cómo Usar Meta Tags para Mejorar tu SEO",
    excerpt: "Los meta tags son esenciales para el posicionamiento web.",
    content: "Los meta tags son fragmentos de código HTML que proporcionan información sobre tu página a los motores de búsqueda. Aprende a usarlos correctamente.",
    updatedAt: "2026-06-10",
  },
  {
    slug: "sitemaps",
    title: "Generación de Sitemaps Dinámicos en Next.js",
    excerpt: "Crea sitemaps automáticos para mejorar la indexación.",
    content: "Los sitemaps ayudan a Google a descubrir y indexar tus páginas. En Next.js puedes generarlos dinámicamente desde una API.",
    updatedAt: "2026-06-05",
  },
];

// Simula una llamada asíncrona a DB/CMS
export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
