import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import person1 from "@assets/StrAbout.svg";
import person2 from "@assets/StrAbout2.svg";

export const AboutUs = () => {
  const translation = useTranslations("AboutUs");

  return (
    <>
      {" "}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-[#6AA800]">
          <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
          <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
          <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
          <p className="text-sm text-[#6AA800] tracking-widest uppercase">
            {translation("subtitle")}
          </p>
          <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
          <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
          <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          {translation("T1")}
        </h2>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 spacing-y-main animate-slide-in-elliptic">
        <div
          className="flex gap-4 flex-col md:flex-row w-full md:w-auto"
          data-aos="fade-up"
          data-aos-duration={"1000"}
        >
          <div className="w-full md:w-[300px]">
            <Image
              src={person1}
              alt="Person 1"
              className="rounded-lg object-cover w-full h-[400px]"
              width={300}
              height={400}
            />
          </div>
          <div className="w-full md:w-[300px] mt-6 md:mt-10">
            <Image
              src={person2}
              alt="Person 2"
              className="rounded-lg object-cover w-full h-[400px]"
              width={300}
              height={400}
            />
          </div>
        </div>

        <div
          className="flex flex-col max-w-xl w-full"
          data-aos="fade-up"
          data-aos-duration={"2500"}
        >
          <div className="flex items-center gap-2 text-[#6AA800]">
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>

            <p className="text-sm uppercase">{translation("subtitle")}</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2">
            {translation("title")}
          </h2>
          <p className="mt-4 italic text-lg text-gray-500">
            {translation("subParagraph")}
          </p>
          <p className="mt-4 text-gray-700 border-l-4 border-[#6AA800] pl-4">
            {translation("paragraph")}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight mt-6">
            {translation("extraTitle")}
          </h3>
          <p className="mt-4 text-gray-700">{translation("extraParagraph")}</p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
