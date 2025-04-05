"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactUs = () => {
  const t = useTranslations("ContactUs");

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-[#6AA800]">
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <p className="text-sm text-[#6AA800] tracking-widest uppercase">
              {t("GitIn")}
            </p>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800">{t("contactUs")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md">
              <Phone />
            </div>
            <div className="flex items-center justify-center gap-2 text-[#6AA800] mt-8">
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <p className="text-sm text-[#6AA800] tracking-widest uppercase">
                {t("callUs")}
              </p>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
            </div>{" "}
            <h3 className="text-lg font-medium mt-3 mb-2">
              {t("PhoneNumber")}
            </h3>
            <a
              href="tel:+962793880900"
              className="text-gray-700 hover:text-[#6AA800] transition-colors"
            >
              +962 7 9388 0900
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md">
              <MapPin />
            </div>
            <div className="flex items-center justify-center gap-2 text-[#6AA800] mt-8">
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <p className="text-sm text-[#6AA800] tracking-widest uppercase">
                {t("visitUs")}
              </p>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
            </div>{" "}
            <h3 className="text-lg font-medium mt-3 mb-2">
              {t("OfficeAddress")}
            </h3>
            <p className="text-gray-700">{t("detail")}</p>
          </div>

          {/* Email Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md">
              <Mail />
            </div>
            <div className="flex items-center justify-center gap-2 text-[#6AA800] mt-8">
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <p className="text-sm text-[#6AA800] tracking-widest uppercase">
                {t("writeToUs")}
              </p>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border-[1px] border-[#6AA800] rounded-full"></div>
            </div>{" "}
            <h3 className="text-lg font-medium mt-3 mb-2">
              {t("EmailAddress")}
            </h3>
            <a
              href="mailto:info@plamgate.com"
              className="text-gray-700 hover:text-[#6AA800] transition-colors"
            >
              info@plamgate.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
