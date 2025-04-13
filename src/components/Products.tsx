"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import Trending from "./Trending";

import SubTitle from "@assets/subTitle.svg";

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
import p9 from "@assets/p8.svg";
import pc from "@assets/p21.svg";
import p10 from "@assets/p10.svg";
import MM from "@assets/mm.svg";

type Product = {
  name: string;
  image: StaticImageData | string;
};

export default function Products({ locale }: { locale: string }) {
  const t = useTranslations();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    StaticImageData | string | null
  >(null);

  const handleImageClick = (image: StaticImageData | string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const products: Product[] = [
    { name: t("products.strawberry"), image: P2 },
    { name: t("products.mango"), image: P13 },
    { name: t("products.watermelon"), image: p9 },
    { name: t("products.orange"), image: P16 },
    { name: t("products.grapes"), image: pp },
    { name: t("products.pomegranate"), image: P4 },
    { name: t("products.garlic"), image: p5 },
    { name: t("products.eggplant"), image: Avocado },
    { name: t("products.banana"), image: Banana },
    { name: t("products.melon"), image: pc },
    { name: t("products.apricot"), image: p8 },
    { name: t("products.peach"), image: p7 },
    { name: t("products.lemon"), image: P9 },
    { name: t("products.tomato"), image: p14 },
    { name: t("products.guava"), image: p10 },
    { name: t("products.onion"), image: P3 },
    { name: t("products.tangerine"), image: MM },
  ];

  return (
    <>
      {/* <Trending locale={locale} /> */}

      <div className="spacing-y-main container-main relative z-10">
        <div className="">
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
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-0 sm:mt-6">
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="group relative transform transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Container */}
                  <div
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
                    onClick={() => handleImageClick(product.image)}
                  >
                    {/* Image Container */}
                    <div className="p-4 bg- aspect-square flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Name Area */}
                    <div className="px-4 py-3 bg-white border-t border-gray-50">
                      <p className="text-center text-gray-800 font-medium group-hover:text-[#286485] transition-colors duration-200">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
