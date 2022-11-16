import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
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

        <div className="mb-10 md:mb-20">
          <h1 className="text-[84px] text-center w-full my-4 mt-8 md:mt-2">
            Profile
          </h1>
          <div
            className="p-10 md:p-20 flex flex-col-reverse md:flex-row gap-4 "
            id="profile"
          >
            <div className="basis-1/2 p-0 md:p-14 md:pt-0">
              <div className="text-[40px]">Emmanuel Kwesi Hervie</div>
              <div className="my-1 text-[18px] mb-0 md:mb-[2em] ">
                <span className="text-[20px] dark:text-gray-500 text-gray-700">
                  Ibadan, Nigeria
                </span>
              </div>
              <div className="my-6 text-[18px] flex flex-col">
                Birthdate:
                <span className="text-[24px]"> 21st January, 2001</span>
              </div>

              <div className="my-6 text-[18px] flex flex-col">
                Role: <span className="text-[24px]">Frontend Developer</span>
              </div>

              {/* <div className="my-4 text-[18px]">
                Position:
                <span className="text-[24px]">Frontend Developer</span>
              </div> */}

              <div className="my-6 text-[18px] flex flex-col">
                Hobbies:{" "}
                <span className="text-[24px]">
                  Football, Music, Watching Cartoons, Reading, Talking to my
                  girlfriend😂
                </span>
              </div>

              <div className="my-6 text-[18px] flex flex-col">
                Areas of Interest:{" "}
                <span className="text-[24px]">CySec, IOT, Web3</span>
              </div>

              <div className="flex flex-row text-[32px] gap-8 mt-4 md:mt-20 ">
                <Link href="https://twitter.com/kwesi_Hervie/">
                  <FaTwitter />
                </Link>
                <Link href="https://www.linkedin.com/in/kwesi-hervie-10622715b/">
                  <FaLinkedin />
                </Link>
                <Link href="https://github.com/khervie-star">
                  <FaGithub />
                </Link>
                <Link href="https://wa.me/2348180746707?text=Hi%20Khervie00">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
            <div
              className="md:basis-1/2 w-full h-[50vh] md:h-[80vh] relative mb-0 px-4"
              // data-scroll
              // data-scroll-position="center"
              // data-scroll-sticky
              // data-scroll-target="#profile"
            >
              <Image src={Khervie00} fill alt="Khervie00" objectFit="cover" />
              {/* <div className={`h-full w-full bg-fixed bg-khervie`} /> */}
            </div>
          </div>

          <div className="w-full h-full mb-6 md:flex md:gap-16 px-[3em]">
            <div className="w-full md:basis-1/3">
              <div
                style={{
                  width: "100%",
                  height: "0",
                  paddingBottom: "110%",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://giphy.com/embed/kyKuZzsa6bShl3SaHe"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute" }}
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                <a href="https://giphy.com/stickers/rickandmorty-season-4-episode-8-rick-and-morty-kyKuZzsa6bShl3SaHe">
                  via GIPHY
                </a>
              </p>
            </div>
            <div
              className="md:basis-2/3 w-full text-[24px] "
              // data-scroll
              // data-scroll-speed="1"
            >
              <p className="mb-4">
                I&apos;m a software developer currently working in Ibadan
                Nigeria and I&apos;m always looking for innovative solutions to
                problems that arise in my daily life. In my job, I spend most of
                my time coming up with innovative solutions to development
                problems. I have been in this industry for over 2 years and over
                the last few years have honed my analytical and collaborative
                skills that facilitate working in teams.
              </p>
              <p className="my-4">
                When I&apos;m not coding, I enjoy watching cartoons and animated
                movies like &quot;Rick and Morty&quot; or I am a very big Marvel
                fan too. I listen to lots of music as well, Indie Pop, EDMs and
                hymns mostly. My favorite artistes are Coldplay and Lana del Ray
                and TheFatRat and all.😅 And yeah, I am a chelsea fan. COYB💙.
                <br />
                When I&apos;m not watching football or movies, I read cool books
                and write weird stuff. You can take a look at them below and
                even recommend a book
              </p>
              <p className="my-4">
                I&apos;m available for full-time roles and freelance projects
                worldwide.You can also feel free to hit me up to ask any
                question or link up or be friends or suggest a book
                recommendation. Anything at all
              </p>
              Thanks for listening to my Ted talk
            </div>
          </div>
        </div>

        <div className="relative w-[80vw] h-[2px] bg-[#171717] dark:bg-slate-100 mr-[-20vw] text-center" />

        <div className="mt-4 md:mt-8  ">
          <h1 className="text-[84px] text-center w-full my-4 mt-8 md:mt-2">
            Skillset
          </h1>
        </div>

        <div className="mt-4 md:mt-8  ">
          <h1 className="text-[84px] text-center w-full my-4 mt-8 md:mt-2">
            Work Experience
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
      {/* <Footer /> */}
    </>
  );
};

export default Page;
