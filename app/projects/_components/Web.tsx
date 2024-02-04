"use client";

import React from "react";
import { Card, CardHeader, CardBody, Chip, Image } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";

type currentType = {
  image: string;
  url: string;
  stack: any;
  title: string;
  description: string;
  github?: string;
  type: string;
  niche?: any;
};

const web_projects = [
  {
    title: "100% Cotton",
    image: "/assets/projects/100pcotton.png",
    url: "https://100pcotton.vercel.app",
    stack: [
      "NextJs",
      "Typescript",
      "MUI",
      "TailwindCSS",
      "KonvaJS",
      "Web3Js",
      "Redux",
      "SwiperJs",
      "Formik",
    ],
    type: "Web Application",
    niche: "Blockchain, Ecommerce",
    description:
      "100pCotton is a new clothing brand that offers customers a unique and innovative shopping experience through NFTs. Our brand positioning is centered around utility, affordability, and community.",
  },
  {
    title: "Liquid Pay",
    image: "/assets/projects/liquidpay.png",
    url: "https://liquidpay-website.vercel.app",
    stack: [
      "NextJs",
      "Javascript",
      "ANTD",
      "TailwindCSS",
      "Aos CSS",
      "Animate.css",
      "SwiperJs",
    ],
    type: "Website",
    niche: "Landing page, Payments",
    description: "",
  },
  {
    title: "Be My Bae",
    image: "/assets/projects/bemybae.png",
    url: "https://bemybae.vercel.app",
    stack: [
      "NextJs",
      "TailwindCSS",
      "Aos CSS",
      "Animate.css",
      "Framer motion",
      "Lottie Animation",
    ],
    type: "Website",
    niche: "Landing page, Fun, Pet project",
    description: "",
    github: "https://github.com/khervie-star/bemybae",
  },
];

export const Web = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [current, setCurrent] = React.useState<currentType | null>(null);

  const handleOpen = (index: number) => {
    setCurrent(web_projects[0]);
    onOpen();
  };
  console.log(current);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {web_projects.map((project, i) => (
            <Card
              className="py-4"
              key={i}
              isPressable
              onPress={() => handleOpen(i)}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{project.type}</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">{project.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={project.image}
                  width={"100%"}
                />
              </CardBody>
            </Card>
          ))}
        </div>

        {current != null && (
          <Modal
            backdrop={"blur"}
            size={"4xl"}
            isOpen={isOpen}
            onClose={onClose}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {current.title}
                  </ModalHeader>
                  <ModalBody className="opacity-75">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                    <div className="flex flex-col gap-5 my-8">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium opacity-100">Stack used:</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {current.stack.map(
                            (
                              stack:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<
                                    any,
                                    string | React.JSXElementConstructor<any>
                                  >
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined,
                              i: React.Key | null | undefined
                            ) => (
                              <Chip color="success" variant="flat" key={i}>
                                {stack}
                              </Chip>
                            )
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium opacity-100">
                          Deployed link:
                        </p>
                        <Link isExternal href={current.url} showAnchorIcon>
                          {current.url}
                        </Link>
                      </div>
                      {current.github && (
                        <div className="">
                          <Link isExternal href={current.url} showAnchorIcon>
                            Github
                          </Link>
                        </div>
                      )}
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
};
