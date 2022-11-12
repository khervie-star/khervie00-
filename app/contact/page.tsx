import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Page = () => {
  return (
    <div className="h-[100vh] w-full box-border p-3 md:p-[3em] pt-[5em] flex items-center gap-4 overflow-hidden flex-col md:flex-row z-50">
      <div className="text-[32px] md:text-[80px] font-bold w-full h-full flex flex-col items-start justify-center">
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
      <div className="dark:bg-slate-100 bg-slate-900  w-full h-full">
        <form className="p-4 md:p-[3em]">
          <label className="dark:text-[#171717] text-[#fafafa]"> Name(s)</label>
          <input
            type="text"
            name="name"
            placeholder="Kwesi Hervie"
            className="bg-transparent border-2 border-solid  border-[#fafafa] text-[#fafafa] dark:border-[#171717] dark:text-[#171717] p-4 mb-8 text-[20px]"
          />
          <input
            type="text"
            name="company"
            placeholder="Your company"
            className="bg-transparent border-2 border-solid  border-[#fafafa] text-[#fafafa] dark:border-[#171717] dark:text-[#171717] p-4 mb-8 text-[20px]"
          />
          <input
            type="email"
            name="email"
            placeholder="youremail@comapny.com"
            className="bg-transparent border-2 border-solid  border-[#fafafa] text-[#fafafa] dark:border-[#171717] dark:text-[#171717] p-4 mb-6 text-[20px]"
          />
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
