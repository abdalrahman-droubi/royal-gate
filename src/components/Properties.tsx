"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SubTitle from "@assets/subTitle.svg";
import { MapPin, Bed, Bath, Square, Phone } from "lucide-react";

type Property = {
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  type: "sale" | "rent";
};

export default function Properties({ locale }: { locale: string }) {
  const t = useTranslations("Properties");
  const [activeTab, setActiveTab] = useState<"sale" | "rent">("sale");

  // Sample properties - replace with real data
  const properties: Property[] = [
    {
      id: 1,
      title: t("property1.title"),
      location: "Downtown Dubai",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,850",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      type: "sale",
    },
    {
      id: 2,
      title: t("property2.title"),
      location: "Dubai Marina",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      type: "rent",
    },
    {
      id: 3,
      title: t("property3.title"),
      location: "Palm Jumeirah",
      bedrooms: 5,
      bathrooms: 6,
      area: "8,500",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      type: "sale",
    },
    {
      id: 4,
      title: t("property4.title"),
      location: "Business Bay",
      bedrooms: 1,
      bathrooms: 1,
      area: "750",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      type: "rent",
    },
    {
      id: 5,
      title: t("property5.title"),
      location: "Jumeirah Beach Residence",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,400",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      type: "sale",
    },
    {
      id: 6,
      title: t("property6.title"),
      location: "Arabian Ranches",
      bedrooms: 4,
      bathrooms: 4,
      area: "3,000",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      type: "rent",
    },
  ];

  const filteredProperties = properties.filter((p) => p.type === activeTab);

  const tabs = [
    { label: t("forSale"), value: "sale" as const },
    { label: t("forRent"), value: "rent" as const },
  ];

  return (
    <div className="spacing-y-main container-main relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-[#286485] text-2xl font-medium mb-2">
          {t("subtitle")}
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold">{t("title")}</h1>
      </div>

      <div className="mb-8 p-2 bg-gray-50 rounded-lg max-w-md mx-auto">
        <div className="flex relative">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`flex-1 py-3 text-sm text-center font-medium transition-all duration-200 rounded-lg ${
                activeTab === tab.value
                  ? "bg-[#286485] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-[#286485] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {property.type === "sale" ? t("forSale") : t("forRent")}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#286485] transition-colors">
                {property.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>

              <div className="flex items-center justify-between py-3 border-y border-gray-200 mb-4">
                <div className="flex items-center gap-1">
                  <Bed className="w-5 h-5 text-[#286485]" />
                  <span className="text-sm">{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-5 h-5 text-[#286485]" />
                  <span className="text-sm">{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-5 h-5 text-[#286485]" />
                  <span className="text-sm">{property.area} sqft</span>
                </div>
              </div>

              <a
                href="tel:+971504122447"
                className="w-full bg-[#286485] text-white px-4 py-3 rounded-lg hover:bg-[#1e4d5f] transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-5 h-5" />
                {t("contact")}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-12">
          <a
            href="tel:+971504122447"
            className="inline-block bg-[#286485] text-white px-8 py-4 rounded-lg hover:bg-[#1e4d5f] transition-colors font-semibold text-lg"
          >
            {t("viewAllProperties")}
          </a>
        </div> */}
    </div>
  );
}
