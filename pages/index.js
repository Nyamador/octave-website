import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Octave Systems | Homepage </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="flex flex-row items-center justify-center h-screen bg-black">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Octave Logo"
            height="100px"
            width="auto"
          />
          <p className="mt-10 text-white">
            Octave Systems - Website under construction
          </p>
        </div>
      </div>
    </div>
  );
}
