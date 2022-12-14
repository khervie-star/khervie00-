"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
         in place of 'smooth' */
      });
    }
  };
  return (
    <>
      <footer
        className="footer h-[full] p-[3em] bg-[#fafafa] dark:bg-[#171717] divide-y"
        data-scroll-section
      >
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="cursor-pointer mb-4 ">
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
              className="font-light text-[20px] md:text-[40px] mb-2 flex flex-row gap-2 md:gap-4"
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
          <div>
            <div className="flex gap-3 md:gap-6 text-[16px] md:text-[20px] font-thin dark:text-[#fafafa] text-[#171717]  w-full flex-wrap">
              <Link
                href="/"
                className="dark:text-[#fafafa] text-[#171717] cursor-pointer"
                // onClick={scrollToTop}
              >
                Khervie00
              </Link>
              <Link
                href="/about"
                className="dark:text-[#fafafa] text-[#171717]"
              >
                About{" "}
              </Link>
              <Link
                href="/about#projects"
                className="dark:text-[#fafafa] text-[#171717]"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="dark:text-[#fafafa] text-[#171717]"
              >
                Contact
              </Link>
            </div>
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
            <Link href="https://wa.me/2348180746707?text=Hi%20Khervie00">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
