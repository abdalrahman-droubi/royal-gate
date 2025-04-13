import React from "react";
import Image from "next/image";
import Logo from "@assets/Royal.png";
import { useTranslations } from "next-intl";

const Footer = () => {
  const translation = useTranslations("Footer");
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse justify-center   items-center  gap-2">
          <p className="text-sm text-gray-600 text-center sm:mb-2">
            © {new Date().getFullYear()} {translation("AllRightsReserved")}
          </p>
          <Image
            src={Logo}
            alt="Royal Export Portal"
            className="w-48 h-32 object-contain"
            priority
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
