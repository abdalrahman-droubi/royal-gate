import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import F1 from "@assets/Feature1.svg";
import F1Ar from "@assets/FeatureAr1.svg";
import F2 from "@assets/Feature2.svg";
import F2Ar from "@assets/FeatureAr2.svg";
import F3 from "@assets/Feature3.svg";
import F3Ar from "@assets/FeatureAr3.svg";
import trending from "@assets/ProductEn.svg";
import TrendingAr from "@assets/TrendingAr.svg";

const Trending = ({ locale }: { locale: string }) => {
  const t = useTranslations("Trending");

  return (
    <section
      className="relative container mx-auto py-36 "
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="absolute -z-20 inset-0 ">
        <Image
          src={locale === "en" ? trending : TrendingAr}
          alt={"Trending Background"}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="container-main  overflow-hidden">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-[#6AA800]">
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <p className="text-sm text-[#6AA800] tracking-widest uppercase">
              {t("title")}
            </p>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800">{t("Productss")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div
            className="relative mx-auto w-[330px] sm:w-[400px] h-[330px] p-8 rounded-xl shadow-md overflow-hidden bg-[#77dad1]"
            data-aos={locale === "en" ? "fade-right" : "fade-left"}
            data-aos-duration="1500"
          >
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-3xl mt-[-7rem] font-semibold text-gray-800">
                {t("packedWithNutrients")}
              </h3>
            </div>
            <div
              className={`absolute bottom-0 ${
                locale === "en" ? "right-0" : "left-0"
              }`}
            >
              <Image
                src={locale === "en" ? F1 : F1Ar}
                alt="Vegetables"
                className="w-[17.34rem] h-[12rem] object-cover"
              />
            </div>
          </div>

          <div
            className="relative mx-auto w-[330px] sm:w-[400px] h-[330px] p-8 rounded-xl shadow-md overflow-hidden bg-[#fa9522]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-3xl mt-[-7rem] font-semibold text-gray-800">
                {t("buildsNaturalDefenses")}
              </h3>
            </div>
            <div
              className={`absolute bottom-0 ${
                locale === "en" ? "right-0" : "left-0"
              }`}
            >
              <Image
                src={locale === "en" ? F2 : F2Ar}
                alt="Vegetables"
                className="w-[20rem] h-[12rem] object-cover"
              />
            </div>
          </div>

          <div
            className="relative mx-auto w-[330px] sm:w-[400px] h-[330px] p-8 rounded-xl shadow-md overflow-hidden bg-[#abdd23]"
            data-aos={locale === "en" ? "fade-left" : "fade-right"}
            data-aos-duration="1500"
          >
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-3xl mt-[-7rem] font-semibold text-gray-800">
                {t("supportsEcoFarming")}
              </h3>
            </div>
            <div
              className={`absolute bottom-0 ${
                locale === "en" ? "right-0" : "left-0"
              }`}
            >
              <Image
                src={locale === "en" ? F3 : F3Ar}
                alt="Vegetables"
                className="w-[20rem] h-[13.33rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
