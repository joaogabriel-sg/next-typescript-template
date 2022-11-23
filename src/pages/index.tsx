import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <Head>
        <title>Next TypeScript Template</title>
        <meta
          name="description"
          content="A simple Create Next App template to start your projects with Next.js, TypeScript, ESLint, Prettier and other tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-black text-4xl text-white">Hello World!</h1>
    </div>
  );
}
