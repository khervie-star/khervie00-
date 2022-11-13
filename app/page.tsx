import AngleDownAnimationButton from "../ui/Buttons/AngleDownAnimationButton";
import Nav from "../ui/Nav";
import ThemeToggleButton from "../ui/Buttons/ThemeToggleButton";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";
import NavigationBar from "../ui/Nav/NavigationBar";
import { Footer } from "../ui/Footer";

export default function Home() {
  return (
    <>
      <div
        className="w-screen py-[4rem] pb-0  min-h-screen flex-1 flex flex-col justify-center items-center relative  dark:bg-[#171717] bg-[#fafafa] scroll-smooth"
        data-scroll-section
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
            className="absolute bottom-50 left-60  text-[30px] md:text-[200px]  text-gray-200 dark:text-gray-700 -z-10"
            data-scroll
            data-scroll-speed="5"
            data-scroll-direction="horizontal"
          >
            Khervie00
          </div>
          <div className="p-10 text-[18px] md:text-[30px] md:my-20 w-full flex flex-col md:flex-row justify-around items-center z-50">
            <div
              className="md:basis-1/2 w-full relative p-3 md:p-[10rem]"
              // data-scroll
              // data-scroll-speed="1"
              // data-scroll-direction="horizontal"
            >
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
              className="basis-1/2"
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
                className="hover-underline-animation flip-animate dark:text-[#fafafa] text-[#171717]"
                data-hover="About Me"
              >
                <span data-hover="About Me">Learn more</span>
              </button>
            </div>
          </div>
        </div>
        {/* <section
          className="c-section -fixed"
          data-scroll-section
          data-persistent
        >
          <div className="o-container" id="fixed-elements">
            <div className="o-layout">
              <div className="o-layout_item u-2/5@from-medium">
                <div
                  className="c-section_infos -padding"
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#fixed-elements"
                >
                  <div
                    className="c-section_infos_inner"
                    data-scroll
                    data-scroll-offset="200"
                  >
                    <h3>
                      04. <br />
                      Fixed elements
                    </h3>
                    <div className="c-sections_infos_text u-text">
                      <p>
                        Create slides that stick and untick to the viewport
                        while scrolling through.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o-layout_item u-3/5@from-medium">
                <div
                  className="c-fixed_wrapper"
                  data-scroll
                  data-scroll-call="dynamicBackground"
                  data-scroll-repeat
                >
                  <div className="c-fixed_target" id="fixed-target"></div>
                  <div
                    className="c-fixed"
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target="#fixed-target"
                    style={{
                      backgroundImage: "url('dist/images/locomotive04.jpg')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className=" dark:bg-white bg-[#171717] text-[64px] h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer">
          <p
            className="
            group flip-animate inline-block"
          >
            <span className="" data-hover="About Me">
              About Me
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
