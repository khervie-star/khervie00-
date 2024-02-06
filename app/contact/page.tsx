"use client";

import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import rick from "../../public/assets/icons8-rick-sanchez-48.png";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

const Page = () => {
  const [loading, setLoading] = React.useState(false);
  const [formDetails, setFormDetails] = React.useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  React.useEffect(() => emailjs.init("Lr28RXW5DKuwP4Qcb"), []);

  const sendEmail = async (values: {
    name: string;
    company?: string;
    email: string;
    message: string;
  }) => {
    const serviceId = "service_o68cypb";
    const templateId = "template_22xorin";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: values.name,
        company: values.company,
        recipient: values.email,
        message: values.message,
      });
      Swal.fire({
        title: "Success",
        text: "🎊 Success! Your message is on its way! We'll catch it and respond shortly! 📬",
        icon: "success",
        confirmButtonText: "Close",
      });
      formik.resetForm();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Oops, Something went wrong, please try again",
        icon: "error",
        confirmButtonText: "Close",
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: formDetails,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("A message is required"),
    }),
    onSubmit: (values) => {
      sendEmail(values);
    },
  });
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
        <form className="p-0 md:p-[3em]" onSubmit={formik.handleSubmit}>
          <div className="mb-4 lg:mb-8">
            <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
              <span>Name</span>
              <span className="relative w-[24px] h-[24px]">
                <Link
                  href="https://icons8.com/icon/57324/rick-sanchez"
                  target="_blank"
                  className="relative w-[24px] h-[24px]">
                  <Image src={rick} alt="" width={24} height={24} />
                </Link>
              </span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Kwesi Hervie"
              onChange={formik.handleChange}
              value={formik.values.name}
              className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 md:p-4 text-[16px] md:text-[20px]"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger font-outfit text-[13px] mt-1">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div className="mb-4 lg:mb-8">
            <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
              <span>Company name</span>
              <span>
                <HiOutlineBuildingOffice2 />
              </span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your company"
              onChange={formik.handleChange}
              value={formik.values.company}
              className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 md:p-4 text-[16px] md:text-[20px]"
            />
          </div>

          <div className="mb-4 lg:mb-8">
            <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
              <span>Email </span>
              <span>
                <MdOutlineAlternateEmail />
              </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="youremail@comapny.com"
              className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 md:p-4 text-[16px] md:text-[20px]"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger font-outfit text-[13px] mt-1s">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="mb-4 lg:mb-8">
            <label className="text-[#171717] dark:text-[#fafafa] text-[18px] md:dark:text-[#171717] md:text-[#fafafa] md:text-[24px] flex gap-2 items-center">
              <span>Message </span>
              <span>
                <BiMessageSquareDots />
              </span>
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Let's build..."
              className=" w-full bg-transparent border-b-2 border-solid text-[#171717] dark:text-[#fafafa]   border-[#171717] dark:border-[#fafafa] md:border-[#fafafa] md:text-[#fafafa] md:dark:border-[#171717] md:dark:text-[#171717] p-2 text-[16px] md:text-[20px]"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-danger font-outfit text-[13px] mt-1">
                {formik.errors.message}
              </div>
            ) : null}
          </div>
          {/* <button
            type="submit"
            disabled={loading}
            className="w-full text-[#fafafa] dark:text-[#171717] md:dark:text-[#fafafa] md:text-[#171717] bg-[#171717] dark:bg-[#fafafa] md:dark:bg-[#171717] md:bg-[#fafafa] py-4 my-4 text-[18px] rounded-[8px] ">
            Send
          </button> */}
          <Button
            color="primary"
            isLoading={loading}
            type="submit"
            className="w-full text-[#fafafa] dark:text-[#171717] md:dark:text-[#fafafa] md:text-[#171717] bg-[#171717] dark:bg-[#fafafa] md:dark:bg-[#171717] md:bg-[#fafafa] py-4 my-4 text-[18px] rounded-[8px] ">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
