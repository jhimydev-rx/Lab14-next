import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Mi Proyecto SEO</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Mi Proyecto SEO`} key="title" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`${BASE_URL}/images/ARCH.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}
