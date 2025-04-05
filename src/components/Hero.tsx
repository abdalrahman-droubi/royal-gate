"use client";
import React from "react";
import "../app/globals.css";
import hero from "@assets/a1.svg";
import heroAr from "@assets/HeroAr.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = ({ locale }: { locale: string }) => {
  const translation = useTranslations("Hero");
  console.log("Locale:", locale);

  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative container-main my-[130px] ">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
            {translation("organicLabel")}
          </div>
          <h1 className="mt-6 font-semibold tracking-tight text-[#000000] text-3xl sm:text-5xl lg:text-6xl">
            {translation("title")}{" "}
            {locale === "ar" ? (
              <span className="text-primary">الصحية</span>
            ) : (
              <span className="text-effect text-primary">
                <span>{translation("h")}</span>
                <span>{translation("e")}</span>
                <span>{translation("a")}</span>
                <span>{translation("l")}</span>
                <span>{translation("t")}</span>
                <span>{translation("y")}</span>
              </span>
            )}
          </h1>

          <p className="mt-6 text-lg leading-8 text-black sm:text-[#000]">
            {translation("description")}
          </p>
          <div className="mt-8">
            <Button className="bg-primary hover:bg-[#85BC33] text-white">
              {translation("buttonText")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="block  absolute -z-10 inset-0 bg-white bg-opacity-30"></div>

      <div className="absolute -z-20 inset-0">
        <Image
          src={locale === "en" ? hero : heroAr}
          alt={"hero"}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
