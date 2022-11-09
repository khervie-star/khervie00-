import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer className="footer h-[60vh] p-[3em] bg-[#fafafa] dark:bg-[#171717] divide-y">
        <div className="flex flex-row justify-between items-center">
          <div className="wim">
            <p className="font-black text-[64px] mb-2">Have an idea? </p>
            <p className="font-light text-[40px] mb-2">
              Let&apos;s work together.{" "}
            </p>
          </div>
          <div className="flex gap-6 text-[20px] font-thin">
            <Link href="">Khervie00</Link>
            <Link href="">About </Link>
            <Link href="">Projects</Link>
            <Link href="">Skills</Link>
            <Link href="">Contact</Link>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-extralight text-md align-center my-8">
            &copy; Kwesi Hervie 2022
          </div>
          <div className="flex gap-6 text-[20px]">
            <Link href="">
              <FaTwitter />
            </Link>
            <Link href="">
              <FaLinkedin />
            </Link>
            <Link href="">
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
