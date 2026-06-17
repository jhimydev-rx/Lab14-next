import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function Blog({ posts }) {
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
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}
