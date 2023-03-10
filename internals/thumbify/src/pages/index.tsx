import Head from "next/head";
import { Inter } from "@next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thumbify | Blueprint</title>
        <meta
          name="description"
          content="Thumbify, thumbnails for you github repository."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>generate thumbnails for your github repository</h1>
      </main>
    </>
  );
}
