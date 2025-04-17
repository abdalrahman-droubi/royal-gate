import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import MeatAbout from "@assets/MeatAbout.svg";
import Fruit from "@assets/FruitAbout.svg";
import Vegetables from "@assets/VegetablesAbout.svg";
import Egg from "@assets/EggAbout.svg";
import Image from "next/image";

type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

export default function FarmersSection() {
  const t = useTranslations("tabs");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [activeTab, setActiveTab] = useState("goals");

  const tabs = [
    { id: "about", label: t("about"), content: t.raw("aboutContent") },
    { id: "mission", label: t("mission"), content: t.raw("missionContent") },
    { id: "goals", label: t("goals"), content: t.raw("goalsContent") },
  ];

  const images: ImageItem[] = [
    {
      id: 1,
      src: MeatAbout,
      alt: "Fresh green vegetables on wooden surface",
    },
    {
      id: 2,
      src: MeatAbout,
      alt: "Farm field",
    },
    {
      id: 3,
      src: Fruit,
      alt: "Hands holding produce",
    },
    {
      id: 4,
      src: Egg,
      alt: "Lake landscape",
    },
    {
      id: 5,
      src: Vegetables,
      alt: "Fresh vegetables",
    },
  ];

  const [mainImage, setMainImage] = useState<ImageItem>(images[0]);

  const handleImageClick = (image: ImageItem) => setMainImage(image);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="mb-6">
            <div className="text-primary text-5xl font-light -mb-6">"</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("title")}
            </h2>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <nav
              className={`flex ${
                isArabic ? "space-x-8 space-x-reverse rtl" : "space-x-8 ltr"
              }`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`pb-2 px-1 text-sm font-medium ${
                    activeTab === tab.id
                      ? "border-b-2 border-primary text-gray-800"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mb-8">
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.content.split(".")
              .filter((p: string) => p.trim().length > 0)
              .map((paragraph: string, i: number) => (
                <p key={i} className="text-gray-600 mb-4">
                  {paragraph.trim()}.
                </p>
              ))}
          </div>

          <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded transition-colors">
            {t("readMore")}
          </button>
        </div>

        <div className="md:w-1/2">
          {/* Main image */}
          <div className="rounded-xl overflow-hidden mb-4">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-full h-[20rem] object-cover"
            />
          </div>

          {/* Thumbnail gallery */}
          <div className="grid grid-cols-4 gap-2">
            {images.slice(1).map((image) => (
              <div
                key={image.id}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-20 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
