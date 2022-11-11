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
        className="py-[4rem] pb-0  min-h-screen flex-1 flex flex-col justify-center items-center relative  dark:bg-[#171717] bg-[#fafafa]"
        data-scroll-section
      >
        <div className="md:w-full flex items-center  h-[100vh] px-[3rem] relative">
          <div className=" mt-[-100px]">
            <h1 className="text-[150px] font-bold mb-0 p-0  leading-[120px]">
              Kwesi Hervie
            </h1>
            <h1 className="text-[75px] my-0 p-0  text-gray-500 dark:text-gray-400">
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
        <div className="ab">
          <div className="absolute bottom-16 w-full text-[200px] text-gray-200 dark:text-gray-800 -z-30    ">
            Khervie00
          </div>
          <div>
            <div>
              HI, I'm Kwesi Hervie. Born in 2001
              <br />
              I'm a budding developer from Nigeria. She works for a chemical
              company and is self-taught in markup, front-end and web design. I
              love to feel the joy when I act until I can do the impossible and
              achieve it.
            </div>
            <button>Learn more</button>
          </div>
        </div>
        <div className="about-link dark:bg-white bg-[#171717] text-white text-[64px] dark:text-black h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer">
          <p className="hover-underline-animation">About Me</p>
        </div>
      </div>
    </>
  );
}
