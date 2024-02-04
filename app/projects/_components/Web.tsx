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
    title: "Leadlift",
    image: "/assets/projects/leadlift.png",
    url: "https://leadlift.io",
    stack: [
      "ReactJs",
      "Typescript",
      "ANTD",
      "ReactQuery",
      "Aos CSS",
      "Animate.css",
      "HeadlesUI",
      "ButterCms",
      "Calendly",
    ],
    type: "Website",
    niche: "Landing page, Marketing, Social Media Management",
    description: "",
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
  {
    title: "Glory Tabernacle Ministry",
    image: "/assets/projects/glorytabernacle.jpeg",
    url: "https://https://glorytabernacleibadan.org/",
    stack: [
      "NextJs",
      "Javascript",
      "TailwindCSS",
      "Aos CSS",
      "Animate.css",
      "Framer motion",
      "Lottie Animation",
    ],
    type: "Website",
    niche: "Landing page, Organization,",
    description: "",
  },
  {
    title: "DevChamp",
    image: "/assets/projects/devchamp.png",
    url: "https://devchamp.vercel.app",
    stack: ["ReactJs", "Javascript", "CSS", "TailwindCSS", "BlurHash"],
    type: "Website",
    niche: "Landing page, E-learning, Technology,",
    description: "",
    github: "https://github.com/khervie-star/github",
  },

  {
    title: "Devwork Solutions",
    image: "/assets/projects/devwork.png",
    url: "https://devworks-solutions.vercel.app",
    stack: [
      "NextJs",
      "Typescript",
      "TailwindCSS",
      "HeadlessUI",
      "Particles.js",
    ],
    type: "Website",
    niche: "Landing page, Technology, Technological Services, Networking",
    description: "",
    github: "https://github.com/khervie-star/devworks-solutions",
  },
  {
    title: "Frontida Zois Initiative",
    image: "/assets/projects/fzi.png",
    url: "https://fzi-v2.vercel.app",
    stack: [
      "NextJs",
      "Typescript",
      "TailwindCSS",
      "HeadlessUI",
      "React Hot Toast",
    ],
    type: "Website",
    niche: "Landing page, Organization, NGO",
    description: "",
    github: "https://github.com/khervie-star/fzi-v2",
  },
  {
    title: "Artsy",
    image: "/assets/projects/artsy.jpg",
    url: "https://artsy-fr.vercel.app",
    stack: ["NextJs", "Typescript", "TailwindCSS", "SwiperJs"],
    type: "Web Application",
    niche: "Landing page, Photography, Hackathon",
    description: "",
    github: "https://github.com/khervie-star/artsy",
  },
  {
    title: "Lawenz Autos",
    image: "/assets/projects/lawenz.png",
    url: "https://lawenz-autos.vercel.app",
    stack: ["ReactJs", "Typescript", "TailwindCSS"],
    type: "Website",
    niche: "Landing page, Auto services, Courier services",
    description: "",
    github: "https://github.com/khervie-star/courier-ex",
  },
  {
    title: "Space Tourism",
    image: "/assets/projects/spacetourism.jpg",
    url: "https://space-tourism-wine.vercel.app",
    stack: ["ReactJs", "Javascript", "TailwindCSS", "SwiperJs"],
    type: "Website",
    niche: "Landing page, Space Tourism, Challenge, Frontend Mentor",
    description: "",
    github: "https://github.com/khervie-star/space-tourism",
  },
  {
    title: "Rest Countries",
    image: "/assets/projects/restcountry.png",
    url: "https://resttt-countries.vercel.app/",
    stack: ["NextJs", "Javascript", "TailwindCSS", "Lodash"],
    type: "Website",
    niche: "Website, Country Select, Challenge, Frontend Mentor",
    description: "",
    github:
      "https://github.com/khervie-star/country-select-application-ith-rest-api",
  },
  {
    title: "Portfolio V1",
    image: "/assets/projects/portfolio1.png",
    url: "https://khervie00.netlify.app",
    stack: [
      "VueJs",
      "Javascript",
      "Bootstrap",
      "Ant Design",
      "Fullpage.js",
      "Vuetify",
    ],
    type: "Website",
    niche: "Portfolio",
    description: "",
    github: "https://github.com/khervie-star/portfolio_vuejs",
  },
  {
    title: "Portfolio V2",
    image: "/assets/projects/portfolio2.png",
    url: "https://khervie00.vercel.app",
    stack: [
      "NextJs",
      "Typescript",
      "TailwindCSS",
      "NextUI",
      "Framer motion",
      "Animate.css",
      "Locomotive scroll",
      "Animated cursor",
    ],
    type: "Website",
    niche: "Portfolio",
    description: "",
    github: "https://github.com/khervie-star/khervie00-",
  },
  {
    title: "Biometric Voting UI",
    image: "/assets/projects/decentralized.png",
    url: "https://decentralized-voting-ui.netlify.app/",
    stack: [
      "ReactJs",
      "Javascript",
      "Bootstrap",
      "Antd Design",
      "Framer motion",
      "Animate.css",
      "Jquery",
      "TsParticles",
      "Styled components",
      "Vanta.js",
    ],
    type: "Website",
    niche: "Hackathon, Blockchain, Choice coin, UI",
    description: "",
    github: "https://github.com/khervie-star/decentralized-voting-app-uis",
  },
];

export const Web = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [current, setCurrent] = React.useState<currentType | null>(null);

  const handleOpen = (index: number) => {
    setCurrent(web_projects[index]);
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
                <small className="text-default-500 text-left">
                  {project.niche}
                </small>
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
                    <p>{current.description}</p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p> */}

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
