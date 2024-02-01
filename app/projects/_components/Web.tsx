import React from "react";
import Image from "next/image";
import cotton_100p from "../../../public/assets/projects/100pcotton.png";

const web_projects = [
  {
    image: cotton_100p,
    title: "100% Cotton",
    description:
      "100pCotton is a new clothing brand that offers customers a unique and innovative shopping experience through NFTs. Our brand positioning is centered around utility, affordability, and community.",
  },
];

export const Web = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
          {web_projects.map((project, i) => (
            <a
              key={i}
              className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              data-aos="zoom-in-up">
              <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="absolute top-0 inset-x-0 z-10">
                <div className="p-4 flex flex-col h-full sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <Image
                      className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                      src={logo}
                      alt="Image Description"
                    /> */}
                    </div>
                    {/* <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">Gloria</h4>
                        <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                      </div> */}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8] font-outfit">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-white/[.8] font-nunito_sans">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
