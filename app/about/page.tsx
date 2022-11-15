import Image from "next/image";
import React from "react";
import Khervie00 from "../../public/assets/khervie00.jpg";

const Page = () => {
  return (
    <div>
      <div className="h-[90vh] md:h-screen lg:grid grid-cols-2 gap-4 items-start p-10 md:p-20 relative">
        <div className=" flex md:items-start md:h-full">
          <h1 className="text-100px] md:text-[120px] text-left md:text-center mt-20 my-8 md:my-20 leading-[80px] md:leading-normal">
            About Me
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 md:mt-0 md:h-full w-full ">
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
        <div className="p-10 md:p-20 flex flex-col-reverse md:flex-row">
          <div className="basis-1/2">
            <div className="mb-0 md:mb-[3em] text-[40px]">
              Emmanuel Kwesi Hervie
            </div>
            <div className="my-4 text-[18px]">
              Birthdate: <span className="text-[24px]">21st January, 2001</span>
            </div>
            <div className="my-4 text-[18px]">
              Location: <span className="text-[24px]">Ibadan, Nigeria</span>
            </div>
            {/* <div className="my-4 text-[18px]">
              Position:{" "}
              <span className="text-[24px]">
                Frontend Developer, Tangl Capital Partners Ltd.
              </span>
            </div> */}
            <div className="my-4 text-[18px]">
              Applying for:{" "}
              <span className="text-[24px]">Frontend Development roles.</span>
            </div>
          </div>
          <div className="md:basis-1/2 w-full h-[50vh] md:h-[80vh] relative mb-5">
            <Image src={Khervie00} fill alt="Khervie00" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
