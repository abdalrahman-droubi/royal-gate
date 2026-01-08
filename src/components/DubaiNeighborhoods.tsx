"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const DubaiNeighborhoods = () => {
  const t = useTranslations("Neighborhoods");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const neighborhoods = [
    {
      name: t("area1.name"),
      description: t("area1.description"),
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
      properties: "50+",
    },
    {
      name: t("area2.name"),
      description: t("area2.description"),
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1996",
      properties: "40+",
    },
    {
      name: t("area3.name"),
      description: t("area3.description"),
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
      properties: "35+",
    },
    {
      name: t("area4.name"),
      description: t("area4.description"),
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
      properties: "30+",
    },
    {
      name: t("area5.name"),
      description: t("area5.description"),
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      properties: "45+",
    },
    {
      name: t("area6.name"),
      description: t("area6.description"),
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      properties: "25+",
    },
  ];

  return (
    <section className="spacing-y-main bg-gray-50">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#286485] text-2xl font-medium mb-2">
            {t("subtitle")}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((area, index) => (
            <div
              key={index}
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {area.properties} {t("properties")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                <p
                  className={`text-blue-100 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "opacity-100 max-h-20"
                      : "opacity-0 max-h-0"
                  }`}
                >
                  {area.description}
                </p>

                {/* CTA */}
                <a
                  href="tel:+971504122447"
                  className={`mt-4 inline-flex items-center gap-2 text-white font-semibold transition-all duration-300 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  {t("exploreButton")}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DubaiNeighborhoods;
