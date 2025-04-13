"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactUs = () => {
  const t = useTranslations("ContactUs");

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          {t("contactUs")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <div className="flex flex-col items-center">
            <MapPin className="text-[#286485]" size={32} />
            <h3 className="text-md font-bold uppercase mt-4 mb-2">
              {t("OfficeAddress")}
            </h3>
            <p className="text-gray-600 max-w-xs">{t("detail")}</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone className="text-[#286485]" size={32} />
            <h3 className="text-md font-bold uppercase mt-4 mb-2">
              {t("PhoneNumber")}
            </h3>
            <a
              href="tel:+962777777777"
              className="text-gray-600 hover:text-gray-600 transition-colors"
            >
              +962 7 9388 0900
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail className="text-[#286485]" size={32} />
            <h3 className="text-md font-bold uppercase mt-4 mb-2">
              {t("EmailAddress")}
            </h3>
            <a
              href="mailto:info@plamgate.com"
              className="text-gray-600 hover:text-gray-600 transition-colors"
            >
              Info@royal-gate.co{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
