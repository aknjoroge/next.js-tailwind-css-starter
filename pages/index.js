import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Starter</title>
        <meta name="description" content="Get started with tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-8">
        <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md flex items-center space-x-8">
          <div className="shrink-0">Image</div>
          <div>
            <div className="text-xl font-medium text-black ">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
