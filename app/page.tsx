import AngleDownAnimationButton from "../ui/Buttons/AngleDownAnimationButton";
import Nav from "../ui/Nav";
import ThemeToggleButton from "../ui/Buttons/ThemeToggleButton";
import clsx from "clsx";

export default function Home() {
  return (
    <div className="py-[4rem] pb-0  min-h-screen flex-1 flex flex-col justify-center items-center">
      <Nav />
      <div className="md:w-[50%] flex flex-col place-content-center text-center h-[100vh] px-[2rem]">
        <h1 className="text-[45px] font-black mb-4">
          Hi, I&apos;m Kwesi Hervie and I build beautiful user interfaces
        </h1>
        <ThemeToggleButton />

        <div className="pt-8 absolute bottom-0 left-0 right-0 my-3 mx-auto">
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 ">
            Learn more about what I do.
          </h3>

          <AngleDownAnimationButton />
        </div>
      </div>
      <div className="about-link dark:bg-white bg-[#171717] text-white text-[64px] dark:text-black h-[70vh] w-full flex items-center justify-center font-medium ">
        <p className="hover-underline-animation">About Me</p>
      </div>
    </div>
  );
}
