import Head from "next/head";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Proyecto SEO</title>
        <meta name="description" content="Ponte en contacto con nosotros. Estamos aquí para ayudarte con tus proyectos de SEO y desarrollo web." />
        <meta property="og:title" content="Contacto | Mi Proyecto SEO" key="title" />
        <meta property="og:description" content="Ponte en contacto con nosotros para consultas sobre SEO y desarrollo web." />
        <meta property="og:image" content={`${BASE_URL}/images/ARCH.jpg`} />
        <meta property="og:url" content={`${BASE_URL}/contacto`} />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Contacto</h1>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
