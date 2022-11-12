import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full box-border p-3 md:p-[5em] pt-[5em] flex items-center gap-4 flex-col md:flex-row z-50">
      <div className="text-[32px] md:text-[80px] font-bold w-full flex flex-col items-start justify-center">
        <span>Have a project?</span>
        <span className="flex items-center gap-2">
          {" "}
          Get in touch{" "}
          <span>
            {" "}
            <IoMdArrowRoundForward />
          </span>
        </span>
      </div>
      <div className="dark:bg-slate-100 bg-[#171717]  w-full h-full">
        <form className="p-4 md:p-[3em]">
          <label className="dark:text-[#171717] text-[#fafafa] text-[24px] flex gap-2 items-center">
            <span>Name</span>
            <span>
              <GrUserManager />
            </span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Kwesi Hervie"
            className="bg-transparent border-2 border-solid  border-[#fafafa] text-[#fafafa] dark:border-[#171717] dark:text-[#171717] p-4 mb-8 text-[20px]"
          />
          <label className="dark:text-[#171717] text-[#fafafa] text-[24px] flex gap-2 items-center">
            <span>Company name</span>
            <span>
              <HiOutlineBuildingOffice2 />
            </span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your company"
            className="bg-transparent border-2 border-solid  border-[#fafafa] text-[#fafafa] dark:border-[#171717] dark:text-[#171717] p-4 mb-8 text-[20px]"
          />

          <label className="dark:text-[#171717] text-[#fafafa] text-[24px] flex gap-2 items-center">
            <span>Email </span>
            <span>
              <MdOutlineAlternateEmail />
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@comapny.com"
            className="bg-transparent border-2 border-solid  border-[#fafafa] text-[#fafafa] dark:border-[#171717] dark:text-[#171717] p-4 mb-6 text-[20px]"
          />

          <label className="dark:text-[#171717] text-[#fafafa] text-[24px] flex gap-2 items-center">
            <span>Message </span>
            <span>
              <BiMessageSquareDots />
            </span>
          </label>
          <textarea
            rows={8}
            name="body"
            placeholder="Let's build..."
            className="bg-transparent border-2 border-solid  border-[#fafafa] text-[#fafafa] dark:border-[#171717] dark:text-[#171717] p-4 mb-6 text-[20px]"
          />
          <button>Contact</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
