"use client";
import React, { useState } from "react";
import "../app/globals.css";
import { useTranslations } from "next-intl";

const Hero = ({ locale }: { locale: string }) => {
  const translation = useTranslations("Hero");
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const t = useTranslations("Hero");

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://media.istockphoto.com/id/1222819052/video/healthy-food-selection.mp4?s=mp4-640x640-is&k=20&c=Y0s4m_xbQxdMapCjy7PBe7RFH4ROJN0Lo3XWM8di5rI="
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fadeUp delay-200">
          {t("title")}
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-xl animate-fadeUp delay-400">
          {t("subtitle")}
        </p>
        <p className="text-white text-md md:text-xl max-w-2xl mt-3 animate-fadeUp delay-600">
          {t("description")}
        </p>
      </div>
    </div>
  );
};

export default Hero;
