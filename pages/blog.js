import Head from "next/head";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const posts = [
  { slug: "guia-seo", title: "Guía Completa de SEO para 2026", excerpt: "Aprende las mejores técnicas de optimización para motores de búsqueda." },
  { slug: "meta-tags", title: "Cómo Usar Meta Tags para Mejorar tu SEO", excerpt: "Los meta tags son esenciales para el posicionamiento web." },
  { slug: "sitemaps", title: "Generación de Sitemaps Dinámicos en Next.js", excerpt: "Crea sitemaps automáticos para mejorar la indexación." },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Proyecto SEO</title>
        <meta name="description" content="Artículos y guías sobre SEO, meta tags, sitemaps y optimización web en Next.js." />
        <meta property="og:title" content="Blog | Mi Proyecto SEO" key="title" />
        <meta property="og:description" content="Artículos y guías sobre SEO, meta tags, sitemaps y optimización web en Next.js." />
        <meta property="og:image" content={`${BASE_URL}/images/ARCH.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
