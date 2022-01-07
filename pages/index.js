import Head from "next/head";
import * as Unicons from "@iconscout/react-unicons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Octave Systems </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Open+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="h-screen p-4 text-white bg-black md:p-0">
        <nav className="md:w-11/12 md:m-auto">
          <p className="text-gray-100">navbar</p>
        </nav>
        <div className="md:w-11/12 md:m-auto">
          <div className="flex flex-col w-full md:pt-20 md:flex-row">
            <section className="md:w-1/2 md:mr-10">
              <h1 className="mb-4 font-serif text-2xl md:text-4xl">
                Building digital products, brands, and experiences
              </h1>
              <p>
                We transform your business problems into beautiful creative
                solutions. Let us help you tell your story
              </p>
              <button className="flex flex-row py-2 border-b border-white">
                Connect with us <Unicons.UilArrowRight />
              </button>

              <div
                className="w-full mt-10 mb-4 rounded-md md:mb-0 bg-gray-50"
                style={{ height: "400px" }}
              ></div>
            </section>

            <section className="md:w-1/2">
              <div className="hidden md:h-1/2 md:block" />
              <div className="md:flex md:flex-col md:h-1/2 md:justify-end">
                <h2 className="mb-4 font-serif text-2xl md:text-4xl">
                  We build...
                </h2>
                <ul>
                  <li className="flex flex-row">
                    <Unicons.UilArrowRight />
                    Mobile Applications
                  </li>
                  <li className="flex flex-row">
                    <Unicons.UilArrowRight />
                    Web Applications
                  </li>
                  <li className="flex flex-row">
                    <Unicons.UilArrowRight />
                    User Interface Designs
                  </li>
                  <li className="flex flex-row">
                    <Unicons.UilArrowRight />
                    Websites
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}
