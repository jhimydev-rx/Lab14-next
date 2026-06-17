import Head from "next/head";
import dynamic from "next/dynamic";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Bienvenido a Mi Proyecto SEO. Descubre contenido optimizado para motores de búsqueda y aprende las mejores prácticas de posicionamiento web." />
        <meta property="og:title" content="Inicio | Mi Proyecto SEO" key="title" />
        <meta property="og:description" content="Bienvenido a Mi Proyecto SEO. Aprende las mejores prácticas de posicionamiento web." />
        <meta property="og:image" content={`${BASE_URL}/images/ARCH.jpg`} />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Bienvenido</h1>
      <DynamicComponent />
    </>
  );
}