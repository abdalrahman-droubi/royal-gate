"use client";
import { useTranslations } from "next-intl";
import { MapPin, Building2, Home, Key, Phone } from "lucide-react";
import Image from "next/image";

export default function AreasWeServe() {
  const t = useTranslations("Areas");

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
          alt="Dubai skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#286485]/95" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-5xl mx-auto">
          {/* Office Location Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 border border-white/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white rounded-full p-4">
                <MapPin className="w-8 h-8 text-[#286485]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t("officeLocation")}
                </h3>
                <p className="text-blue-100 text-lg">
                  Office 333-101, Al Baraha, Dubai
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">
                  {t("commercialProperties")}
                </h4>
                <p className="text-blue-100 text-sm">{t("commercialDesc")}</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Home className="w-10 h-10 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">
                  {t("residentialProperties")}
                </h4>
                <p className="text-blue-100 text-sm">{t("residentialDesc")}</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Key className="w-10 h-10 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">
                  {t("leasingServices")}
                </h4>
                <p className="text-blue-100 text-sm">{t("leasingDesc")}</p>
              </div>
            </div>
          </div>

          {/* Coverage Area */}
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t("coverageTitle")}
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              {t("coverageDesc")}
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#286485] rounded-full mt-2" />
                <p className="text-gray-700">{t("service1")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#286485] rounded-full mt-2" />
                <p className="text-gray-700">{t("service2")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#286485] rounded-full mt-2" />
                <p className="text-gray-700">{t("service3")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#286485] rounded-full mt-2" />
                <p className="text-gray-700">{t("service4")}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971504122447"
                className="inline-flex items-center justify-center gap-2 bg-[#286485] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e4d5f] transition-colors"
              >
                <Phone className="w-5 h-5" />
                {t("callNow")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#286485] text-[#286485] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                {t("visitOffice")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
