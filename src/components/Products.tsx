"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import SubTitle from "@assets/subTitle.svg";

// Images
import Banana from "@assets/p1.svg";
import P2 from "@assets/p2.svg";
import P3 from "@assets/p3.svg";
import P4 from "@assets/p4.svg";
import P16 from "@assets/orangeNew.svg";
import P9 from "@assets/cucumber.svg";
import P13 from "@assets/p13.svg";
import pp from "@assets/aa.svg";
import p7 from "@assets/p7.svg";
import p8 from "@assets/apricot.svg";
import p14 from "@assets/p14.svg";
import p5 from "@assets/Lettuce.svg";
import Avocado from "@assets/Avocado.svg";
import pc from "@assets/p21.svg";
import p10 from "@assets/p10.svg";
import MM from "@assets/mm.svg";
import Egg from "@assets/Egg.svg";
import Meet from "@assets/Meat.jpg";

type Product = {
  name: string;
  image: StaticImageData | string;
  category: "fruit" | "vegetable" | "meat_egg";
};

export default function Products({ locale }: { locale: string }) {
  const t = useTranslations();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    StaticImageData | string | null
  >(null);
  const [activeTab, setActiveTab] = useState<
    "fruit" | "vegetable" | "meat_egg"
  >("fruit");

  const handleImageClick = (image: StaticImageData | string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const products: Product[] = [
    { name: t("products.strawberry"), image: P2, category: "fruit" },
    { name: t("products.mango"), image: P13, category: "fruit" },
    { name: t("products.watermelon"), image: p8, category: "fruit" },
    { name: t("products.orange"), image: P16, category: "fruit" },
    { name: t("products.grapes"), image: pp, category: "fruit" },
    { name: t("products.pomegranate"), image: P4, category: "fruit" },
    { name: t("products.banana"), image: Banana, category: "fruit" },
    { name: t("products.melon"), image: pc, category: "fruit" },
    { name: t("products.apricot"), image: p8, category: "fruit" },
    { name: t("products.peach"), image: p7, category: "fruit" },
    { name: t("products.guava"), image: p10, category: "fruit" },

    { name: t("products.lemon"), image: P9, category: "vegetable" },
    { name: t("products.tomato"), image: p14, category: "vegetable" },
    { name: t("products.onion"), image: P3, category: "vegetable" },
    { name: t("products.garlic"), image: p5, category: "vegetable" },
    { name: t("products.eggplant"), image: Avocado, category: "vegetable" },
    { name: t("products.cucumber"), image: P9, category: "vegetable" },

    { name: t("products.tangerine"), image: MM, category: "meat_egg" },
    { name: t("products.Egg"), image: Egg, category: "meat_egg" },
    { name: t("products.Meat"), image: Meet, category: "meat_egg" },
  ];

  const filteredProducts = products.filter((p) => p.category === activeTab);

  const tabs: { label: string; value: "fruit" | "vegetable" | "meat_egg" }[] = [
    { label: t("products.fruitsTab"), value: "fruit" },
    { label: t("products.vegetablesTab"), value: "vegetable" },
    { label: t("products.meatEggsTab"), value: "meat_egg" },
  ];

  // References to tab elements for measuring positions
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: "0px",
    width: "0px",
  });

  // Calculate and update the indicator position
  const updateIndicator = () => {
    if (tabsRef.current) {
      const activeTabElement =
        tabsRef.current[tabs.findIndex((tab) => tab.value === activeTab)];
      if (activeTabElement) {
        setIndicatorStyle({
          left: `${activeTabElement.offsetLeft}px`,
          width: `${activeTabElement.offsetWidth}px`,
        });
      }
    }
  };

  // Update indicator on mount and when active tab changes
  useEffect(() => {
    updateIndicator();
    // Also handle window resize
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <>
      <div className="spacing-y-main container-main relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[#286485] text-2xl font-medium mb-2">
            {t("products.title")}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            {t("products.Productss")}
          </h1>
          <div className="flex justify-center mt-4">
            <Image src={SubTitle} alt="divider" width={800} height={800} />
          </div>
        </div>

        <div className=" mb-8 p-2 bg-gray-50 rounded-lg">
          <div className="flex relative">
            <div
              className="absolute h-full bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out z-0"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
            {tabs.map((tab, index) => (
              <button
                ref={(el) => (tabsRef.current[index] = el)}
                key={tab.value}
                className={`flex-1 py-2 text-sm  text-center font-medium transition-colors duration-200 rounded-lg relative z-10 mx-1 ${
                  activeTab === tab.value
                    ? "text-gray-800"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(product.image)}
              >
                <div className="p-4 bg- aspect-square flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3 bg-white border-t border-gray-50">
                  <p className="text-center text-gray-800 font-medium group-hover:text-[#286485] transition-colors duration-200">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-8 rounded-lg relative">
            <button
              className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>
            <Image
              src={selectedImage as StaticImageData | string}
              alt="Selected Product"
              width={500}
              height={500}
              className="object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
