import Head from "next/head";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";
import Link from "next/link";

import Input from "../components/Input";
import TextArea from "../components/TextArea";

export default function Home() {
  return (
    <>
      <Head>
        <title>Octave Systems </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Open+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="p-4 text-white bg-black md:p-0">
        <nav className="flex flex-row py-6 mb-10 md:w-11/12 md:m-auto md:mb-0">
          <div className="flex flex-row items-center">
            <Image
              src="/svg/logo.svg"
              width="40"
              height="32"
              alt="Octave DBL Systems Logo"
            />
            <p className="ml-2">Octave Systems</p>
          </div>

          <div className="flex flex-row ml-auto cursor-pointer">
            <Unicons.UilBars />
            <p>&nbsp;&nbsp;Menu</p>
          </div>
        </nav>

        <div className="pb-10 md:w-11/12 md:m-auto">
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
                <ul className="mb-4">
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
                <ul className="flex flex-row">
                  <li className="flex flex-row items-center md:mr-4">
                    <Image
                      src="/svg/startups_icon.svg"
                      width="30"
                      height="30"
                      title="Octave Systems Startups"
                    />
                    <p className="ml-2">Startups</p>
                  </li>
                  <li className="flex flex-row items-center md:mr-4">
                    <Image
                      src="/svg/enterprise.svg"
                      width="30"
                      height="30"
                      title="Octave Systems Enterprise"
                    />
                    <p className="ml-2">Enterprise</p>
                  </li>{" "}
                  <li className="flex flex-row items-center">
                    <Image
                      src="/svg/smb.svg"
                      width="30"
                      height="30"
                      title="Octave Systems SMB"
                    />
                    <p className="ml-2">SMB</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </header>

      <section className="py-10">
        <div className="md:w-11/12 md:m-auto">
          <h2 className="mb-4 font-serif text-2xl md:text-4xl">
            Trusted Partners
          </h2>
          <div className="flex md:flex-row"></div>
        </div>
      </section>

      <section className="p-4 md:py-10 bg-yellow-50">
        <div className="md:w-11/12 md:m-auto">
          <h3 className="mb-10 font-serif text-2xl text-yellow-700 md:text-4xl">
            Our Recent Projects
          </h3>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-6/12">
              <h4 className="mb-4 text-3xl text-yellow-700">Boom Supersonic</h4>
              <p className="w-10/12 mb-10 text-sm text-yellow-600">
                Octave is by far my favourite UX/UI designer and creative
                visionary. Working with him is always an amazing experience.
                Their design vision is out of this world and they pour out their
                heart and soul into every project. Highly recommended for UI/UX
                education & speaking opportunities as well as a design lead for
                projects of all sizes. Thanks for everything you do!
              </p>
              <button className="flex flex-row px-6 py-4 mb-10 text-white bg-yellow-700 rounded-md md:mb-0">
                View Case Study &nbsp;&nbsp; <Unicons.UilArrowRight />
              </button>
            </div>
            <div className="md:w-6/12">
              <img
                src="/svg/dummy_project_banner.png"
                title=""
                height="auto"
                width="auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 bg-green-800 md:py-10">
        <div className="md:w-11/12 md:m-auto">
          <div className="flex flex-col md:flex-row">
            <div className="order-2 mr-10 md:w-6/12 md:order-1">
              <img src="/svg/dummy_2.png" title="" height="auto" width="auto" />
            </div>
            <div className="order-1 md:w-6/12 md:order-2">
              <h4 className="mb-4 text-3xl text-green-300">Green Robotics</h4>
              <p className="w-10/12 mb-10 text-sm text-green-300">
                Octave is by far my favourite UX/UI designer and creative
                visionary. Working with him is always an amazing experience.
                Their design vision is out of this world and they pour out their
                heart and soul into every project. Highly recommended for UI/UX
                education & speaking opportunities as well as a design lead for
                projects of all sizes. Thanks for everything you do!
              </p>
              <button className="flex flex-row px-6 py-4 mb-10 text-green-800 bg-green-300 rounded-md">
                View Case Study &nbsp;&nbsp; <Unicons.UilArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col p-4 py-4 md:py-10 md:flex-row">
        <div className="m-auto md:w-11/12">
          <div className="md:w-7/12">
            <h3 className="mb-4 font-serif text-2xl md:text-4xl">
              Testimonials
            </h3>

            <div>
              <p className="mb-10 text-gray-500">
                Octave is by far my favourite UX/UI design and creative company.
                Working with them is always an amazing experience. Their design
                vision is out of this world and they pours their heart and soul
                into every project. Highly recommended for UI/UX education &
                speaking opportunities. Thanks for everything you do!
              </p>
              <div className="mb-6">
                <p className="font-bold">Damien Smith</p>
                <p>Boost Finance</p>
              </div>

              <div
                className="p-2 border-2 border-yellow-400 rounded-full"
                style={{ height: "200px", width: "200px" }}
              >
                <Image
                  src="/svg/testimonial_dummy.png"
                  alt=""
                  height="200"
                  width="200"
                />
              </div>
            </div>
          </div>
          <div className="md:w-3/2"></div>
        </div>
      </section>

      <footer className="py-4 text-white bg-black md:py-10">
        <div className="p-6 md:w-11/12 md:m-auto md:p-0">
          <section className="mb-10 md:flex md:flex-row">
            <div className="md:w-1/2">
              <h6 className="text-3xl md:text-6xl md:mb-2">Got an Idea?</h6>
              <a className="text-3xl md:text-6xl">Tell us about it</a>
            </div>

            <div className="">
              <div className="flex flex-col md:flex-row">
                <div className="mr-4 md:w-1/2">
                  <Input label="Name" />
                </div>
                <div className="md:w-1/2">
                  <Input label="Company Name" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="mr-4 md:w-1/2">
                  <Input label="Email" type="email" />
                </div>
                <div className="md:w-1/2">
                  <Input label="How did you find us?" />
                </div>
              </div>

              <div className="mb-6">
                <TextArea label="What do you want us to build?" />
              </div>

              <button className="px-6 py-2 text-white border border-white rounded-md outline-none hover:text-black hover:bg-white">
                Contact Us
              </button>
            </div>
          </section>

          <hr className="my-4 border-gray-500" />

          <div className="flex flex-row">
            <div className="flex flex-row items-center">
              <Link href="">
                <a className="mr-2">
                  <Unicons.UilGithubAlt />
                </a>
              </Link>
              <Link href="">
                <a className="mr-2">
                  <Unicons.UilTwitterAlt />
                </a>
              </Link>
              <Link href="">
                <a className="mr-2">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
              <Link href="">
                <a className="mr-2">
                  <Unicons.UilInstagram />
                </a>
              </Link>
            </div>

            <div className="ml-auto">
              <p className="flex flex-row items-center text-sm">
                Made with &nbsp; <Unicons.UilHeartAlt /> &nbsp; in Ghana 🇬🇭
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
