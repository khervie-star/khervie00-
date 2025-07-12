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
  preview: any;
  title: string;
  description: string;
  github?: string;
  type: string;
  niche?: any;
};

const mobile_projects = [
  {
    title: "Teckonnect",
    image: "/assets/projects/tangl.png",
    url: "https://www.tanglcapitalpartners.com",
    stack: ["ReactNative", "Expo", "Supabase", "Nativewind", "NFCs"],
    preview: [
      "/assets/100pcotton/img1.png",
      "/assets/100pcotton/img2.png",
      "/assets/100pcotton/img3.png",
    ],
    type: "Mobile Application",
    niche: "Networking, Connecting, Tech, Tech events",
    description: "",
  },
  {
    title: "Foodhunt",
    image: "/assets/projects/xig.png",
    url: "https://www.tanglcapitalpartners.com",
    stack: ["ReactNative", "Expo", "Supabase", "Google maps"],
    preview: [
      "/assets/100pcotton/img1.png",
      "/assets/100pcotton/img2.png",
      "/assets/100pcotton/img3.png",
    ],
    type: "Mobile Application",
    niche: "Multisignature wallet, Blockchain",
    description: "",
  },
];

export const Mobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [current, setCurrent] = React.useState<currentType | null>(null);

  const handleOpen = (index: number) => {
    setCurrent(mobile_projects[index]);
    onOpen();
  };
  console.log(current);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {mobile_projects.map((project, i) => (
            <Card
              className="py-4"
              key={i}
              isPressable
              onPress={() => handleOpen(i)}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{project.type}</p>
                <small className="text-default-500 text-left">
                  {project.niche}
                </small>
                <h4 className="font-bold text-large">{project.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl !h-[250px]"
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
            scrollBehavior="inside"
            isOpen={isOpen}
            onClose={onClose}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {current.title}
                  </ModalHeader>
                  <ModalBody className="opacity-75">
                    <p>{current.description}</p>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                      {current.preview.map(
                        (
                          prev_image: string | undefined,
                          i: React.Key | null | undefined
                        ) => (
                          <Image
                            key={i}
                            alt=""
                            isZoomed
                            className="object-cover rounded-lg h-[100px] lg:h-[150px]"
                            src={prev_image}
                            width={"100%"}
                          />
                        )
                      )}
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
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
