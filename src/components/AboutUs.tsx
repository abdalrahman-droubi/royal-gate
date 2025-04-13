import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import aboutRight from "@assets/about-right.svg";
import { Link } from "@/i18n/routing";

export const AboutUs = () => {
  const translation = useTranslations("AboutUs");

  return (
    <section className="flex items-center justify-between mt-2">
      <div className="relative md:p-0 p-5 md:w-[40%] w-full">
        <h1 className="self-baseline text-2xl sm:text-3xl md:text-6xl font-bold mb-6 sm:mb-8 text-primary">
          {translation("title")}
        </h1>
        <p className="mb-6 mt-10 md:text-gray-700 text-white">
          {translation("subtitle")}
        </p>
        <div className="space-y-4 md:text-gray-700 text-white">
          <div className="flex items-center">
            <Icon number={1} />
            <div>
              <p className="mr-2">{translation("extraTitle")}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Icon number={2} />
            <div>
              <p className="mr-2">{translation("extraParagraph")}</p>
            </div>
          </div>
        </div>
        <div className=" mt-3 flex justify-center">
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:shadow-lg hover:bg-gray-600 transition-all">
            <Link href="#contact">{translation("contact")}</Link>
          </button>
        </div>
        <div className="md:hidden absolute inset-0 -z-10 w-full h-full rounded-xl overflow-hidden">
          <Image
            src={aboutRight}
            alt="about-right"
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>
        <div className="md:hidden absolute inset-0 bg-black bg-opacity-50 rounded-xl -z-10 w-full h-full  " />
      </div>
      <div className="relative hidden md:block w-[40%] h-[400px] rounded-xl overflow-hidden">
        <Image
          src={aboutRight}
          alt="about-right"
          className="w-full h-full object-cover"
          layout="fill"
        />
      </div>
    </section>
  );
};

const Icon = ({ number }: { number: number }) => (
  <div className="flex items-center justify-center  bg-primary text-white rounded-full py-2 px-4 me-4">
    {number}
  </div>
);

export default AboutUs;
