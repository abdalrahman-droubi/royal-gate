import React from "react";
import "../app/globals.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const Organic = ({ locale }: { locale: string }) => {
  const translation = useTranslations("Organic");

  console.log("Locale:", locale);

  const heroImage =
    locale === "en"
      ? "/assets/pomegranateOrganicAr.svg"
      : "/assets/pomegranateOrganicEn.svg";

  return (
    <>
      <div className="relative overflow-hidden  spacing-y-main">
        <div
          className={clsx("relative flex container-main py-[180px]", {
            // "justify-start": locale === "ar",
            // "justify-end": locale === "en",
          })}
        >
          <div className="max-w-lg sm:max-w-xl">
            <div className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
              {translation("slogan")}
            </div>
            <h1 className="mt-6 font-semibold tracking-tight text-[#000] text-3xl sm:text-5xl lg:text-5xl">
              {translation("title")} <br />
              {locale === "ar" ? (
                <span className="text-primary">الطازجة</span>
              ) : (
                <span className="text-effect text-primary">
                  {translation("highlight")
                    ?.split("")
                    .map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                </span>
              )}
            </h1>

            <p className="mt-6 text-lg leading-8 text-black sm:text-[#000]">
              {translation("description")}
            </p>
            <div className="mt-8 flex justify-start">
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
            src={heroImage}
            alt="hero"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Organic;
