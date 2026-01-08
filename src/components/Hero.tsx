"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Building2, Home, Key } from "lucide-react";

const Hero = ({ locale }: { locale: string }) => {
  const t = useTranslations("Hero");

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://cdn.pixabay.com/video/2024/02/02/198888-909564511_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fadeUp">
          {t("title")}
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl animate-fadeUp delay-200 mb-8">
          {t("subtitle")}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-fadeUp delay-400">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
            <Building2 className="w-12 h-12 text-white mx-auto mb-2" />
            <p className="text-white text-lg font-bold">{t("stat1")}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
            <Home className="w-12 h-12 text-white mx-auto mb-2" />
            <p className="text-white text-lg font-bold">{t("stat2")}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
            <Key className="w-12 h-12 text-white mx-auto mb-2" />
            <p className="text-white text-lg font-bold">{t("stat3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
