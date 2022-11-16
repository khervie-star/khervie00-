import AngleDownAnimationButton from "../ui/Buttons/AngleDownAnimationButton";
import Nav from "../ui/Nav";
import ThemeToggleButton from "../ui/Buttons/ThemeToggleButton";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";
import NavigationBar from "../ui/Nav/NavigationBar";
import { Footer } from "../ui/Footer";

import { stack } from "../lib/data";

export default function Home() {
  return (
    <>
      <div
        className="w-screen py-[4rem] pb-0  min-h-screen flex-1 flex flex-col justify-center items-center relative  dark:bg-[#171717] bg-[#fafafa] scroll-smooth z-20"
        data-scroll-section
        id="header"
      >
        <div className="w-full flex items-center  h-[100vh] px-[3rem] relative box-border">
          <div className=" mt-[-100px]">
            <h1
              className="text-[80px] md:text-[170px] font-bold mb-0 p-0  leading-[70px] md:leading-[150px]"
              data-scroll
              data-scroll-speed="3"
              data-scroll-position="top"
            >
              Kwesi Hervie
            </h1>
            <h1
              className="text-[50px] md:text-[85px] my-0 p-0  text-gray-500 dark:text-gray-400"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-position="top"
              data-scroll-direction="horizontal"
            >
              Web dev, Jnr. Pentester
            </h1>
          </div>

          <a
            className="pt-8 absolute bottom-14 left-0 text-center right-0 my-3 mx-auto w-full"
            href="#about-me"
          >
            <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
              Learn more about what I do.
            </h3>

            <AngleDownAnimationButton />
          </a>
        </div>
        <div className=" w-full relative" id="about-me">
          <div
            className="absolute bottom-50 left-60  text-[80px] md:text-[200px]  text-gray-200 dark:text-gray-700 -z-10"
            data-scroll
            data-scroll-speed="5"
            data-scroll-direction="horizontal"
          >
            Khervie00
          </div>
          <div className="p-10 text-[18px] md:text-[30px] md:my-20 w-full flex flex-col md:flex-row justify-around items-center z-50">
            <div className="md:basis-1/2 w-full relative p-3 md:p-[10rem]">
              <div
                style={{
                  width: "100%",
                  height: "0",
                  paddingBottom: "56%",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://giphy.com/embed/ZbIADknDu7C4lKolgb"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute" }}
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                <a href="https://giphy.com/gifs/rickandmorty-season-2-adult-swim-rick-and-morty-ZbIADknDu7C4lKolgb">
                  via GIPHY
                </a>
              </p>
            </div>
            <div
              className="basis-1/2 flex flex-col gap-8"
              data-scroll
              data-scroll-speed="1"
              data-scroll-position="center"
            >
              HI, I&apos;m Kwesi Hervie
              {/* <span className="font-italic text-[18px] text-red-500">
                &quot;Khervie00 for short.&quot;
              </span> */}
              <br />
              I&apos;m a budding developer from Nigeria. I am self taught in web
              technologies and other scripting languages. I code for fun and
              stuff
              <button
                className="hover-underline-animation flip-animate dark:text-[#fafafa] text-[#171717]  dark:child-span-before:text-[#fafafa] child-span-before:text-[#171717] child-span-before:block  after:bg-[#171717] dark:after:bg-[#fafafa] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left float-left"
                data-hover="About Me ⬤"
              >
                <span data-hover="About Me">Learn more</span>
              </button>
            </div>
          </div>
        </div>
        <div className="my-4 ">
          <h1 className="text-[84px] text-center w-full">Stack</h1>
          <div className="flex items-center justify-center flex-row flex-wrap gap-8 md:gap-16 text-[24px] text-slate-600 dark:text-slate-500 text-center p-10 md:p-20">
            {stack.map((skill, i) => (
              <div
                className="flex flex-col items-center justify-center"
                key={i}
              >
                <div>{skill.name}</div>
                <div className="text-[40px]">
                  <skill.icon />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          className="group flip-animate about-link  text-[#fafafa] dark:text-[#171717] dark:bg-white bg-[#171717] text-[64px] h-[50vh] md:h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer  dark:child-span-before:text-[#171717] child-span-before:text-[#fafafa] child-span-before:block"
          href="/about"
        >
          <div className=" hover-underline-animation after:bg-[#fafafa] dark:after:bg-[#171717] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left">
            <span data-hover="About Me">About Me</span>
          </div>
        </Link>

        {/* <section
          id="about-section"
          className="py-40 bg-red-500 w-full relative"
        >
          <h1 className="text-[84px] text-center w-full">Stack</h1>

          <div className="container px-5 mx-auto">
            <div id="about" className="lg:grid grid-cols-2 gap-4 items-start">
              <h2
                className="text-5xl font-extrabold"
                data-scroll
                data-scroll-position="center"
                data-scroll-sticky
                data-scroll-target="#about"
              >
                About
              </h2>
              <div className="text-xl pt-4 lg:pt-0 text-black">
                <p className="mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pretium, ante sed lacinia ultricies, sapien massa ultricies
                  erat, eu tristique justo est ut tortor. In nibh est, porttitor
                  vulputate erat et, faucibus volutpat felis. Curabitur eleifend
                  nisi quis consectetur euismod. Morbi ac condimentum ante.
                  Aliquam euismod sodales arcu et iaculis. Cras porttitor nisl
                  felis, eget interdum magna cursus et. Curabitur vehicula
                  dignissim ornare.
                </p>
                <p className="mb-8">
                  Cras lacinia sit amet justo ut maximus. Integer sapien felis,
                  gravida a commodo et, porttitor non libero. Maecenas lacinia
                  accumsan eros eu dapibus. Mauris dolor odio, vulputate vitae
                  purus vitae, tincidunt egestas orci. Maecenas sollicitudin
                  fringilla justo, id tempus metus elementum sit amet. Nullam
                  vestibulum mauris vitae condimentum sagittis. Suspendisse sed
                  purus vel neque ullamcorper ornare egestas vel ligula. Duis ac
                  mattis odio. Aliquam sodales turpis nec diam maximus, nec
                  fermentum massa mollis.
                </p>
                <p>
                  Praesent finibus egestas velit, vitae tristique leo luctus sit
                  amet. Vivamus eu facilisis neque, a venenatis mi. Vestibulum
                  ultricies venenatis arcu sit amet fringilla. Curabitur non
                  tincidunt sem. Sed quis quam ut nulla tincidunt dapibus quis
                  ac lorem. Nulla lobortis ac metus ut molestie.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
}
