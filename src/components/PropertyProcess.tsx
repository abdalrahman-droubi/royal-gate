"use client";
import { useTranslations } from "next-intl";
import { Search, FileText, Key, Handshake } from "lucide-react";
import Image from "next/image";

const PropertyProcess = () => {
  const t = useTranslations("PropertyProcess");

  const steps = [
    {
      number: "01",
      icon: <Search className="w-10 h-10" />,
      title: t("step1.title"),
      description: t("step1.description"),
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070",
    },
    {
      number: "02",
      icon: <FileText className="w-10 h-10" />,
      title: t("step2.title"),
      description: t("step2.description"),
      image:
        "https://images.pexels.com/photos/1587947/pexels-photo-1587947.jpeg?_gl=1*6xiu84*_ga*MTQ5NzE2NzczOS4xNzYwNDUyNzgw*_ga_8JE65Q40S6*czE3Njc4MzI4ODkkbzE3JGcxJHQxNzY3ODMyOTM2JGoxMyRsMCRoMA..",
    },
    {
      number: "03",
      icon: <Handshake className="w-10 h-10" />,
      title: t("step3.title"),
      description: t("step3.description"),
      image:
        "https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg?_gl=1*1d6laf1*_ga*MTQ5NzE2NzczOS4xNzYwNDUyNzgw*_ga_8JE65Q40S6*czE3Njc4MzI4ODkkbzE3JGcxJHQxNzY3ODMzMTE0JGo1OSRsMCRoMA..",
    },
    {
      number: "04",
      icon: <Key className="w-10 h-10" />,
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

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-[#286485]">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="bg-[#286485] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
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
