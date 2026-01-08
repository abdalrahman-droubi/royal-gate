"use client";
import { useTranslations } from "next-intl";
import { Search, FileText, Key, Handshake } from "lucide-react";
import Image from "next/image";

const PropertyProcess = () => {
  const t = useTranslations("PropertyProcess");

  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8 md:w-10 md:h-10" />,
      title: t("step1.title"),
      description: t("step1.description"),
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070",
    },
    {
      number: "02",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10" />,
      title: t("step2.title"),
      description: t("step2.description"),
      image:
        "https://images.pexels.com/photos/1587947/pexels-photo-1587947.jpeg?_gl=1*6xiu84*_ga*MTQ5NzE2NzczOS4xNzYwNDUyNzgw*_ga_8JE65Q40S6*czE3Njc4MzI4ODkkbzE3JGcxJHQxNzY3ODMyOTM2JGoxMyRsMCRoMA..",
    },
    {
      number: "03",
      icon: <Handshake className="w-8 h-8 md:w-10 md:h-10" />,
      title: t("step3.title"),
      description: t("step3.description"),
      image:
        "https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg?_gl=1*1d6laf1*_ga*MTQ5NzE2NzczOS4xNzYwNDUyNzgw*_ga_8JE65Q40S6*czE3Njc4MzI4ODkkbzE3JGcxJHQxNzY3ODMzMTE0JGo1OSRsMCRoMA..",
    },
    {
      number: "04",
      icon: <Key className="w-8 h-8 md:w-10 md:h-10" />,
      title: t("step4.title"),
      description: t("step4.description"),
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1996",
    },
  ];

  return (
    <section className="spacing-y-main bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#286485] text-xl md:text-2xl font-medium mb-2">
            {t("subtitle")}
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 md:mb-4 px-4">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
            {t("description")}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 md:gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white rounded-full w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center shadow-lg">
                    <span className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#286485]">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 px-4 md:px-0">
                {/* Icon */}
                <div className="bg-[#286485] text-white rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-3 md:mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyProcess;
