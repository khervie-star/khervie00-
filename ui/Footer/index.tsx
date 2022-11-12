import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer
        className="footer h-[full] p-[3em] bg-[#fafafa] dark:bg-[#171717] divide-y"
        data-scroll-section
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <div className="wim hover:text-red-500 cursor-pointer">
            <div
              className="font-black text-[32px] md:text-[64px] mb-2 flex flex-row gap-2 md:gap-4"
              data-scroll=""
            >
              <div
                data-scroll=""
                data-scroll-delay="0.18"
                data-scroll-speed="5"
                data-scroll-position="bottom"
              >
                {" "}
                Have{" "}
              </div>{" "}
              <div
                data-scroll=""
                data-scroll-delay="0.12"
                data-scroll-speed="5"
                data-scroll-position="bottom"
              >
                an
              </div>{" "}
              <div
                data-scroll=""
                data-scroll-delay="0.08"
                data-scroll-speed="5"
                data-scroll-position="bottom"
              >
                idea?
              </div>
            </div>
            <div
              className="font-light text-[20px] md:text-[40px] mb-2 flex flex-row gp-2 md:gap-4"
              data-scroll=""
            >
              <div
                data-scroll=""
                data-scroll-delay="0.28"
                data-scroll-speed="5"
                data-scroll-position="bottom"
              >
                {" "}
                Let&apos;s{" "}
              </div>{" "}
              <div
                data-scroll=""
                data-scroll-delay="0.42"
                data-scroll-speed="5"
                data-scroll-position="bottom"
              >
                work
              </div>{" "}
              <div
                data-scroll=""
                data-scroll-delay="0.68"
                data-scroll-speed="5"
                data-scroll-position="bottom"
              >
                together
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:gap-6 text-[20px] font-thin text-[#fafafa]  w-full flex-wrap">
            <Link href="">Khervie00</Link>
            <Link href="/about">About </Link>
            <Link href="/about#projects">Projects</Link>
            <Link href="">Skills</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-extralight text-[14px]  md:text-[18px] align-center my-8">
            &copy; Kwesi Hervie 2022
          </div>
          <div className="flex gap-2 md:gap-6 text-[14px] md:text-[20px]">
            <Link href="https://twitter.com/kwesi_Hervie/">
              <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/kwesi-hervie-10622715b/">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/khervie-star">
              <FaGithub />
            </Link>
            <Link href="">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
