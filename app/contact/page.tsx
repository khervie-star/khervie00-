import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import rick from "../../public/assets/icons8-rick-sanchez-48.png";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="h-full w-full p-[3em] md:p-[5em] pt-[5em] flex items-center gap-4 flex-col md:flex-row z-50  ">
      <div className="group text-[32px] md:text-[80px] font-bold w-full flex flex-col items-start justify-center hover:[&>.span]:text-red-500 cursor-pointer transition-all duration-300">
        <span>Have a project?</span>
        <span className="flex items-center gap-2">
          {" "}
          Get in{" "}
          <span className="transition-all duration-300 group-hover:text-green-500">
            touch
          </span>{" "}
          <span className="transition-all duration-300 group-hover:text-green-500">
            {" "}
            <IoMdArrowRoundForward />
          </span>
        </span>
      </div>
      <div className="md:dark:bg-slate-100 md:bg-[#171717] bg-transparent w-full h-full">
        <form className="p-0 md:p-[3em]">
          <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
            <span>Name</span>
            <span className="relative w-[24px] h-[24px]">
              <Link
                href="https://icons8.com/icon/57324/rick-sanchez"
                target="_blank"
                className="relative w-[24px] h-[24px]"
              >
                <Image src={rick} alt="" width={24} height={24} />
              </Link>
            </span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Kwesi Hervie"
            className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 md:p-4 mb-4 md:mb-8 text-[16px] md:text-[20px]"
          />
          <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
            <span>Company name</span>
            <span>
              <HiOutlineBuildingOffice2 />
            </span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your company"
            className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 md:p-4 mb-4 md:mb-8 text-[16px] md:text-[20px]"
          />

          <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
            <span>Email </span>
            <span>
              <MdOutlineAlternateEmail />
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@comapny.com"
            className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 md:p-4 mb-4 md:mb-8 text-[16px] md:text-[20px]"
          />

          <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
            <span>Message </span>
            <span>
              <BiMessageSquareDots />
            </span>
          </label>
          <textarea
            rows={4}
            name="body"
            placeholder="Let's build..."
            className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 md:p-4 mb-8 text-[16px] md:text-[20px]"
          />
          <button className="w-full text-[#fafafa] dark:text-[#171717] md:dark:text-[#fafafa] md:text-[#171717] bg-[#171717] dark:bg-[#fafafa] md:dark:bg-[#171717] md:bg-[#fafafa] py-4 my-4 text-[18px] rounded-[8px] ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
