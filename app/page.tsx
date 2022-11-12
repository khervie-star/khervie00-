import AngleDownAnimationButton from "../ui/Buttons/AngleDownAnimationButton";
import Nav from "../ui/Nav";
import ThemeToggleButton from "../ui/Buttons/ThemeToggleButton";
import clsx from "clsx";
import Link from "next/link";
import NavigationBar from "../ui/Nav/NavigationBar";

export default function Home() {
  return (
    <>
      <div
        className="w-screen py-[4rem] pb-0  min-h-screen flex-1 flex flex-col justify-center items-center relative  dark:bg-[#171717] bg-[#fafafa]"
        data-scroll-section
      >
        <div className="w-full flex items-center  h-[100vh] px-[3rem] relative box-border">
          <div className=" mt-[-100px]">
            <h1
              className="text-[70px] md:text-[150px] font-bold mb-0 p-0  leading-[70px] md:leading-[120px]"
              data-scroll
              data-scroll-speed="3"
              data-scroll-position="top"
            >
              Kwesi Hervie
            </h1>
            <h1
              className="text-[40px] md:text-[75px] my-0 p-0  text-gray-500 dark:text-gray-400"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-position="top"
              data-scroll-direction="horizontal"
            >
              Web dev, Jnr. Pentester
            </h1>
          </div>

          <div className="pt-8 absolute bottom-14 left-0 text-center right-0 my-3 mx-auto w-full">
            <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 ">
              Learn more about what I do.
            </h3>

            <AngleDownAnimationButton />
          </div>
        </div>
        <div className=" w-full relative">
          <div
            className="absolute bottom-50 left-60  text-[30px] md:text-[200px]  text-gray-200 dark:text-gray-700 -z-10"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            Khervie00
          </div>
          <div className="p-10 text-[15px] md:text-[30px] md:my-20 w-full md:w-1/2 float-right z-50">
            <div>
              HI, I&apos;m Kwesi Hervie.
              <br />
              I&apos;m a budding developer from Nigeria. She works for a
              chemical company and is self-taught in markup, front-end and web
              design. I love to feel the joy when I act until I can do the
              impossible and achieve it.
            </div>
            <button>Learn more</button>
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
        <div className="about-link dark:bg-white bg-[#171717] text-white text-[64px] dark:text-black h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer">
          <p className="hover-underline-animation">About Me</p>
        </div>
      </div>
    </>
  );
}
