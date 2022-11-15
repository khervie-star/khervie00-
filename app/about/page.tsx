import Image from "next/image";
import Link from "next/link";
import React from "react";
import Khervie00 from "../../public/assets/khervie00.jpg";
import { Footer } from "../../ui/Footer";

const Page = () => {
  return (
    <>
      <div data-scroll-section className="box-border">
        <div className="h-[90vh] md:h-screen lg:grid grid-cols-2 gap-4 items-start p-10 md:p-20 relative">
          <div className=" flex md:items-start md:h-full">
            <h1 className="text-[100px] md:text-[120px] text-left md:text-center mt-20 my-8 md:my-20 leading-[80px] md:leading-normal">
              About Me
              <button className="text-red-500 text-[16px]">
                Download Resume
              </button>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:h-full w-full ">
            <div className="text-[26px]">
              <div>
                “To live is to risk it all; otherwise you’re just an inert chunk
                of randomly assembled molecules drifting wherever the universe
                blows you.”
              </div>

              <div className="float-left md:float-right mt-2"> - Rick</div>
            </div>
          </div>
          <div className="absolute bottom-[2vh] md:bottom-[10vh] right-0 w-[90vw] h-[2px] bg-[#171717] dark:bg-slate-100 mr-[-20vw] leading-tight" />
        </div>
        <div className="">
          <h1 className="text-[84px] text-center w-full my-4 mt-8 md:mt-2">
            Profile
          </h1>
          <div className="p-10 md:p-20 flex flex-col-reverse md:flex-row gap-4">
            <div className="basis-1/2">
              <div className="text-[40px]">Emmanuel Kwesi Hervie</div>
              <div className="my-1 text-[18px] mb-0 md:mb-[2em] ">
                <span className="text-[20px] dark:text-gray-500 text-gray-700">
                  Ibadan, Nigeria
                </span>
              </div>
              {/* <div className="my-4 text-[18px]">
                Birthdate:{" "}
                <span className="text-[24px]">21st January, 2001</span>
              </div> */}

              {/* <div className="my-4 text-[18px]">
                Position:{" "}
                <span className="text-[24px]">Frontend Developer</span>
              </div> */}
              <div className="text-[22px]">
                I am a software engineer working out of Lagos, Nigeria, and I am
                constantly looking for ground-breaking solutions to issues that
                arise in daily life. In my work, I spend most of my time coming
                up with innovative solutions to development problems. I've been
                a part of this industry for over two years and within those
                years, I've honed my analytic and collaboration skills which
                makes working with a team easier. I've also had the opportunity
                to serve as lead software engineer for different projects. Even
                though I stumbled upon code by accident, it's something I've
                come to really like. But like they say, good things come to us
                without plan, no? I especially enjoy watching code bring to life
                an entirely new beautiful thing, it's magical. For me, each
                project I have the privilege to work on is a new opportunity to
                learn new things, meet people with ideas that differ from mine
                and discover things about myself I never knew were beneath the
                layers of all of me. I enjoy watching anime and I am very into
                the Marvel franchise. I listen to lots of music and James Blake
                and Jon Bellion are probably my two favourite artists (for now).
                Let's not forget the guys at Snarky Puppy, they're amazing. I
                spend most of my free time with my family and my cat. I'm
                surprised you actually read all of that, well thanks for your
                patience😅 I'm available for full-time roles and freelance
                projects worldwide. As long as you don't mind watching me work
                from screens away.
              </div>
            </div>
            <div className="md:basis-1/2 w-full h-[50vh] md:h-[80vh] relative mb-5 px-4">
              <Image src={Khervie00} fill alt="Khervie00" objectFit="cover" />
            </div>
          </div>
        </div>

        <div className="relative w-[80vw] h-[2px] bg-[#171717] dark:bg-slate-100 mr-[-20vw] text-center" />

        <div className="mt-4 md:mt-8  ">
          <h1 className="text-[84px] text-center w-full my-4 mt-8 md:mt-2">
            Profile
          </h1>
        </div>
        <Link
          className="group flip-animate about-link  text-[#fafafa] dark:text-[#171717] dark:bg-white bg-[#171717] text-[64px] h-[50vh] md:h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer  dark:child-span-before:text-[#171717] child-span-before:text-[#fafafa] child-span-before:block"
          href="/contact"
        >
          <div className=" hover-underline-animation after:bg-[#fafafa] dark:after:bg-[#171717] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left">
            <span data-hover="Contact">Contact</span>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Page;
